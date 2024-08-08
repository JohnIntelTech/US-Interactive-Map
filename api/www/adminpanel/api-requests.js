const baseUrl = 'http://localhost:3000';

async function get() {
    try {
        const response = await fetch(`${baseUrl}/lae/v1/mapinfo`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);
        document.getElementById('responseDiv').innerHTML = `<pre>${data}</pre>`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('responseDiv').innerHTML = `<pre>Error: ${error.message}</pre>`;
    }
}

// Function to get raw CSV
async function getRaw(authToken) {
    try {
        const response = await fetch(`${baseUrl}/lae/v1/admin/mapcsv/raw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Authorization: authToken })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);
        document.getElementById('responseDiv').innerHTML = `<pre>${data}</pre>`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('responseDiv').innerHTML = `<pre>Error: ${error.message}</pre>`;
    }
}

// Function to post to CSV
async function post(authToken, state, id) {
    try {
        const response = await fetch(`${baseUrl}/lae/v1/admin/mapcsv`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Authorization: authToken, state, id: parseInt(id, 10) })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to delete from CSV
async function apidelete(authToken, state, id) {
    try {
        const response = await fetch(`${baseUrl}/lae/v1/admin/mapcsv`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Authorization: authToken, state, id: parseInt(id, 10) })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function handleDelete() {
    const authToken = document.getElementById('authToken').value;
    const state = document.getElementById('state').value;
    const id = document.getElementById('id').value;
    apidelete(authToken, state, id);
}

function handleDeleteDebug() {
    const authTokenElement = document.getElementById('authToken');
    const stateElement = document.getElementById('state');
    const idElement = document.getElementById('id');

    if (!authTokenElement || !stateElement || !idElement) {
        console.error('One or more input elements not found');
        return;
        console.log(authTokenElement);
        console.log(stateElement);
        console.log(idElement);
    }

    const authToken = authTokenElement.value;
    const state = stateElement.value;
    const id = idElement.value;

    apidelete(authToken, state, id);
}

function handlePost() {
    const authToken = document.getElementById('authToken').value;
    const state = document.getElementById('state').value;
    const id = document.getElementById('id').value;
    post(authToken, state, id);
}

function handleGetRaw() {
    const authToken = document.getElementById('authToken').value;
    getRaw(authToken);
}

function handleGet() {
    get();
}