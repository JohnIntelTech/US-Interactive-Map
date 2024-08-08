import {
  j as e,
  B as u,
  f as c,
  d as l,
  T as s,
  e as d,
  I as g,
  i as m,
  h as i,
  R as h,
  k as f,
  l as j,
} from "../chunks/chunk-BR8bEaM_.js";
const p = void 0,
  w = void 0,
  y = [],
  v = [],
  b = ({}) =>
    e.jsxs(u, {
      className: "w-body",
      children: [
        e.jsx(c, { className: "w-heading", children: "GET Info" }),
        e.jsx(l, {
          className: "w-box",
          children: e.jsx(s, {
            className: "w-text",
            children: e.jsxs(s, {
              tag: "span",
              className: "w-text",
              children: [
                e.jsx(d, {
                  className: "w-button",
                  children: "Get General User Info",
                }),
                e.jsx(s, {
                  tag: "span",
                  className: "w-text",
                  children:
                    "GET info that is automatically grabbed and sent to client when the user visits the page. Endpoint: /lae/v1/mapinfo",
                }),
              ],
            }),
          }),
        }),
        e.jsx(c, {
          className: "w-heading",
          children: "!!Warning!! Raw data is for debug purposes!!",
        }),
        e.jsx(l, {
          className: "w-box",
          children: e.jsx(s, {
            className: "w-text",
            children: e.jsxs(s, {
              tag: "span",
              className: "w-text",
              children: [
                e.jsx(d, { className: "w-button", children: "Get Raw Data" }),
                e.jsx(s, {
                  tag: "span",
                  className: "w-text",
                  children:
                    "GET info from the .csv (raw data) Endpoint: /lae/v1/admin/mapcsv/raw",
                }),
              ],
            }),
          }),
        }),
        e.jsxs(l, {
          className: "w-box",
          children: [
            e.jsx(g, {
              id: "token",
              required: !0,
              placeholder: "Authenthication key (REQUIRED)",
              type: "password",
              className:
                "w-text-input c1l85a4r c1ny0hgt c14iufwl c12qc1el cb8yqka c1cbb2",
            }),
            e.jsx(s, {
              className: "w-text",
              children: "Authenthication key REQUIRED for raw data ONLY ",
            }),
          ],
        }),
      ],
    }),
  N = ({ data: n }) => {
    const { pageMeta: a } = n,
      { origin: r } = new URL(n.url);
    let o = a.socialImageUrl;
    return (
      a.socialImageAssetName &&
        (o = `${r}${m({ src: a.socialImageAssetName, format: "raw" })}`),
      e.jsxs(e.Fragment, {
        children: [
          n.url && e.jsx("meta", { property: "og:url", content: n.url }),
          e.jsx("title", { children: a.title }),
          e.jsx("meta", { property: "og:title", content: a.title }),
          a.description &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("meta", { name: "description", content: a.description }),
                e.jsx("meta", {
                  property: "og:description",
                  content: a.description,
                }),
              ],
            }),
          e.jsx("meta", { property: "og:type", content: "website" }),
          p,
          o &&
            e.jsx("meta", { property: "og:image", content: a.socialImageUrl }),
          p,
          a.excludePageFromSearch &&
            e.jsx("meta", { name: "robots", content: "noindex, nofollow" }),
          a.custom.map(({ property: t, content: x }) =>
            e.jsx("meta", { property: t, content: x }, t),
          ),
          w,
          y.map((t) =>
            e.jsx(
              "link",
              {
                rel: "preload",
                href: `${i}${t.name}`,
                as: "font",
                crossOrigin: "anonymous",
              },
              t.id,
            ),
          ),
          v.map((t) =>
            e.jsx(
              "link",
              { rel: "preload", href: `${i}${t.name}`, as: "image" },
              t.id,
            ),
          ),
        ],
      })
    );
  },
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: N }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  S = ({ data: n }) => {
    const { system: a, resources: r, url: o } = n;
    return e.jsx(h.Provider, {
      value: { imageLoader: m, assetBaseUrl: i, imageBaseUrl: f, resources: r },
      children: e.jsx(b, { system: a }, o),
    });
  },
  E = Object.freeze(
    Object.defineProperty({ __proto__: null, default: S }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  P = {
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
      valueSerialized: { type: "plus-file", exportValues: j },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/adminpanel/getinfo/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: T },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/adminpanel/getinfo/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: E },
    },
  };
export { P as configValuesSerialized };
