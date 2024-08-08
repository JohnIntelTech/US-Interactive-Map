import {
  j as e,
  B as u,
  d as c,
  f as x,
  I as l,
  T as o,
  H as g,
  e as y,
  i as p,
  h as r,
  R as h,
  k as v,
  l as f,
} from "../chunks/chunk-BR8bEaM_.js";
const d = void 0,
  b = void 0,
  j = [],
  w = [],
  k = ({}) =>
    e.jsx(u, {
      className: "w-body",
      children: e.jsxs(c, {
        className: "w-box",
        children: [
          e.jsxs(x, {
            className: "w-heading",
            children: [
              "DELETE Info",
              "",
              e.jsx("br", {}),
              "",
              "Delete information",
            ],
          }),
          e.jsxs(c, {
            className: "w-box",
            children: [
              e.jsx(l, {
                id: "token",
                required: !0,
                placeholder: "Authenthication key (REQUIRED)",
                type: "password",
                className:
                  "w-text-input c1l85a4r c1ny0hgt c14iufwl c12qc1el cb8yqka c1cbb2 c18kcksy c1f9r9xc c135sqbf clg1p40 cd8sq36",
              }),
              e.jsx(l, {
                id: "state",
                placeholder: "Two letter state code",
                className: "w-text-input c18kcksy",
              }),
              e.jsx(o, {
                className: "w-text",
                children: e.jsx(o, {
                  tag: "span",
                  className: "w-text",
                  children:
                    "Auth key REQUIRED, Two letter state code must be lowercase OR ERRORS WILL HAPPEN!!",
                }),
              }),
              e.jsx(l, {
                id: "id",
                placeholder: "Key ID (1-6)",
                className: "w-text-input c18kcksy",
              }),
              e.jsx(g, {
                code: `
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0; /* Optional background color for better visibility */
        }
        .container {
            text-align: center; /* Center the heading and key container */
        }
        .key-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px; /* Space between items */
        }
        .key-item {
            display: flex;
            align-items: center;
            gap: 10px; /* Space between circle and text */
            font-size: 16px;
        }
        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
    </style>
    <div class="container">
        <h3>Key</h3>
        <div class="key-container">
            <div class="key-item">
                <div class="circle" style="background-color: #1976D2;"></div>
                <span>1 - On ballot</span>
            </div>
            <div class="key-item">
                <div class="circle" style="background-color: #689F38;"></div>
                <span>2 - Petition circulating</span>
            </div>
            <div class="key-item">
                <div class="circle" style="background-color: #AFB42B;"></div>
                <span>3 - Volunteers needed</span>
            </div>
            <div class="key-item">
                <div class="circle" style="background-color: #5E35B1;"></div>
                <span>4 - Write-in access only</span>
            </div>
            <div class="key-item">
                <div class="circle" style="background-color: #444444;"></div>
                <span>5 - No ballot access</span>
            </div>
            <div class="key-item">
                <div class="circle" style="background-color: #d3d3d3;"></div>
                <span>6 - Unclear</span>
            </div>
        </div>
    </div>

`,
                className: "w-html-embed",
              }),
            ],
          }),
          e.jsx(y, { className: "w-button", children: "DELETE to API" }),
          e.jsx(o, {
            className: "w-text",
            children:
              "This will DELETE your changes on the API.  Result should be somewhere below. Endpoint: /lae/v1/admin/mapcsv",
          }),
        ],
      }),
    }),
  E = ({ data: s }) => {
    const { pageMeta: n } = s,
      { origin: i } = new URL(s.url);
    let a = n.socialImageUrl;
    return (
      n.socialImageAssetName &&
        (a = `${i}${p({ src: n.socialImageAssetName, format: "raw" })}`),
      e.jsxs(e.Fragment, {
        children: [
          s.url && e.jsx("meta", { property: "og:url", content: s.url }),
          e.jsx("title", { children: n.title }),
          e.jsx("meta", { property: "og:title", content: n.title }),
          n.description &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("meta", { name: "description", content: n.description }),
                e.jsx("meta", {
                  property: "og:description",
                  content: n.description,
                }),
              ],
            }),
          e.jsx("meta", { property: "og:type", content: "website" }),
          d,
          a &&
            e.jsx("meta", { property: "og:image", content: n.socialImageUrl }),
          d,
          n.excludePageFromSearch &&
            e.jsx("meta", { name: "robots", content: "noindex, nofollow" }),
          n.custom.map(({ property: t, content: m }) =>
            e.jsx("meta", { property: t, content: m }, t),
          ),
          b,
          j.map((t) =>
            e.jsx(
              "link",
              {
                rel: "preload",
                href: `${r}${t.name}`,
                as: "font",
                crossOrigin: "anonymous",
              },
              t.id,
            ),
          ),
          w.map((t) =>
            e.jsx(
              "link",
              { rel: "preload", href: `${r}${t.name}`, as: "image" },
              t.id,
            ),
          ),
        ],
      })
    );
  },
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: E }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  S = ({ data: s }) => {
    const { system: n, resources: i, url: a } = s;
    return e.jsx(h.Provider, {
      value: { imageLoader: p, assetBaseUrl: r, imageBaseUrl: v, resources: i },
      children: e.jsx(k, { system: n }, a),
    });
  },
  P = Object.freeze(
    Object.defineProperty({ __proto__: null, default: S }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  A = {
    onBeforeRenderEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: null },
    },
    dataEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: { server: !0 } },
    },
    onRenderClient: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/renderer/+onRenderClient.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: f },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/adminpanel/deleteinfo/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: T },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/adminpanel/deleteinfo/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: P },
    },
  };
export { A as configValuesSerialized };
