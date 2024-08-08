const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;
const csvFilePath = path.join(__dirname, 'map.csv');
const validToken = 'token'; // Replace with your actual token

app.use(express.static(path.join(__dirname, 'www')));
app.use(bodyParser.json());

// Apply rate limiting middleware globally
const limiter = rateLimit({
    windowMs: 0 * 60 * 1000, // 15 minutes
    max: 50, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
  });
  app.use(limiter);


// Define the whitelist
const whitelist = ['http://localhost:3000', 'http://192.155.95.215', 'https://apitest.laemap.peretas.tech'];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Use the CORS middleware with the options
app.use(cors(corsOptions));

app.get('/lae/v1/mapinfo', (req, res) => {
    fs.readFile(csvFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error: Could not read file');
        }

        const lines = data.split('\n');
        const vol_states = [];
        const ballot_states = [];
        const petition_states = [];
        const write_states = [];
        const dead_states = [];

        lines.forEach(line => {
            const [state, id] = line.split(',');
            switch (parseInt(id)) {
                case 1:
                    ballot_states.push(state);
                    break;
                case 2:
                    petition_states.push(state);
                    break;
                case 3:
                    vol_states.push(state);
                    break;
                case 4:
                    write_states.push(state);
                    break;
                case 5:
                    dead_states.push(state);
                    break;
                default:
                    break;
            }
        });

        const jsCode = `
            var vol_states = ${JSON.stringify(vol_states)};
            var ballot_states = ${JSON.stringify(ballot_states)};
            var petition_states = ${JSON.stringify(petition_states)};
            var write_states = ${JSON.stringify(write_states)};
            var dead_states = ${JSON.stringify(dead_states)};
        `;

        res.send(jsCode);
    });
});

app.post('/lae/v1/admin/mapcsv/raw', (req, res) => {
    const { Authorization } = req.body;

    if (Authorization !== validToken) {
        return res.status(403).send('Forbidden: Invalid token (Token required in body)');
    }

    fs.readFile(csvFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error: Could not read file');
        }
        res.send(data);
    });
});

app.post('/lae/v1/admin/mapcsv', (req, res) => {
    const { Authorization, state, id } = req.body;

    if (Authorization !== validToken) {
        return res.status(403).send('Forbidden: Invalid token');
    }

    if (!state || typeof state !== 'string' || state.length !== 2 || !id || typeof id !== 'number' || id < 1 || id > 6) {
        return res.status(400).send('Bad Request: Invalid state or id (Message from dev: Prob the id, has to be within 1-6, and state must be 2 letters)');
    }

    const newEntry = `${state},${id}\n`;

    fs.appendFile(csvFilePath, newEntry, (err) => {
        if (err) {
            return res.status(500).send('Internal Server Error: Could not write to file');
        }
        res.send('CSV file updated successfully');
    });
});

app.delete('/lae/v1/admin/mapcsv', (req, res) => {
    const { Authorization, state, id } = req.body;

    if (Authorization !== validToken) {
        return res.status(403).send('Forbidden: Invalid token');
    }

    if (!state || typeof state !== 'string' || state.length !== 2 || !id || typeof id !== 'number' || id < 1 || id > 6) {
        return res.status(400).send('Bad Request: Invalid state or id');
    }

    fs.readFile(csvFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error: Could not read file');
        }

        const lines = data.split('\n');
        const filteredLines = lines.filter(line => {
            const [csvState, csvId] = line.split(',');
            return !(csvState === state && parseInt(csvId) === id);
        });

        fs.writeFile(csvFilePath, filteredLines.join('\n'), (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error: Could not write to file');
            }
            res.send('CSV file updated successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});