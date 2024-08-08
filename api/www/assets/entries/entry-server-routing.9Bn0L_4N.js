const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/entries/pages_admin-panel.DP1pZS3X.js",
      "assets/chunks/chunk-BR8bEaM_.js",
      "assets/static/index.BRkboQQ4.css",
      "assets/entries/pages_index.CkCEMFy_.js",
      "assets/entries/pages_adminpanel_deleteinfo.BWvwdccb.js",
      "assets/entries/pages_adminpanel_getinfo.DpBozyJC.js",
      "assets/entries/pages_adminpanel_postinfo.Bdo7ihPP.js",
    ]),
) => i.map((i) => d[i]);
function me(e) {
  return Array.from(new Set(e));
}
const Oe = "0.4.180",
  K = { projectName: "Vike", projectVersion: Oe },
  ne = `_${K.projectName.toLowerCase()}`;
function x(e, t) {
  const n = ke();
  return (n[e] = n[e] || t);
}
function ke() {
  return (globalThis[ne] = globalThis[ne] || {});
}
const E = new Proxy(
    {},
    {
      get: (e, t) => (n) =>
        t === "code" ? `\`${n}\`` : t === "string" ? `'${n}'` : n,
    },
  ),
  P = x("assertPackageInstances.ts", {
    instances: [],
    alreadyLogged: new Set(),
  }),
  Fe =
    "The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",
  ye =
    "Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";
function Ee() {
  {
    const e = me(P.instances);
    Ae(
      e.length <= 1,
      `vike@${E.bold(e[0])} and vike@${E.bold(e[1])} loaded but only one version should be loaded`,
    );
  }
  P.checkSingleInstance &&
    P.instances.length > 1 &&
    B(!1, ye, { onlyOnce: !0, showStackTrace: !0 });
}
function Ie(e) {
  B(P.isClientRouting !== !0, Fe, { onlyOnce: !0, showStackTrace: !0 }),
    B(P.isClientRouting === void 0, ye, { onlyOnce: !0, showStackTrace: !0 }),
    (P.isClientRouting = !1),
    e && (P.checkSingleInstance = !0),
    Ee();
}
function ze() {
  P.instances.push(K.projectVersion), Ee();
}
function Ae(e, t) {
  if (e) return;
  const n = `[vike][Wrong Usage] ${t}`;
  throw new Error(n);
}
function B(e, t, { onlyOnce: n, showStackTrace: r }) {
  if (e) return;
  const i = `[vike][Warning] ${t}`;
  if (n) {
    const { alreadyLogged: s } = P,
      a = n === !0 ? i : n;
    if (s.has(a)) return;
    s.add(a);
  }
  console.warn(r ? new Error(i) : i);
}
function We() {
  return !(
    typeof process > "u" ||
    !process.cwd ||
    !process.versions ||
    typeof process.versions.node > "u" ||
    !process.release ||
    process.release.name !== "node"
  );
}
function A(e, t) {
  const n = new Error(e);
  return We() && (n.stack = Ve(n.stack, t)), n;
}
function Ve(e, t) {
  if (!e) return e;
  const n = He(e);
  let r = 0;
  return n.filter((s) =>
    s.includes(" (internal/") || s.includes(" (node:internal")
      ? !1
      : r < t && De(s)
        ? (r++, !1)
        : !0,
  ).join(`
`);
}
function De(e) {
  return e.startsWith("    at ");
}
function He(e) {
  return e.split(/\r?\n/);
}
function b(e) {
  return typeof e == "object" && e !== null;
}
const w = x("utils/assert.ts", {
  alreadyLogged: new Set(),
  logger(e, t) {
    t === "info" ? console.log(e) : console.warn(e);
  },
  showStackTraceList: new WeakSet(),
});
ze();
const Ue = "[vike]",
  Be = `[vike@${K.projectVersion}]`,
  W = 2;
function o(e, t) {
  var a;
  if (e) return;
  const n = (() => {
    if (!t) return null;
    const c = typeof t == "string" ? t : JSON.stringify(t);
    return E.dim(
      `Debug info (for Vike maintainers; you can ignore this): ${c}`,
    );
  })();
  let i = [
    `You stumbled upon a Vike bug. Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,
    n,
  ]
    .filter(Boolean)
    .join(" ");
  (i = D(i)), (i = V(i, "Bug")), (i = H(i, !0));
  const s = A(i, W);
  throw ((a = w.onBeforeLog) == null || a.call(w), s);
}
function m(e, t, { showStackTrace: n } = {}) {
  var i;
  if (e) return;
  (n = n || w.alwaysShowStackTrace),
    (t = D(t)),
    (t = V(t, "Wrong Usage")),
    (t = H(t));
  const r = A(t, W);
  throw (
    (n && w.showStackTraceList.add(r),
    (i = w.onBeforeLog) == null || i.call(w),
    r)
  );
}
function Ne(e) {
  return (e = D(e)), (e = V(e, "Error")), (e = H(e)), A(e, W);
}
function T(e, t, { onlyOnce: n, showStackTrace: r }) {
  var i;
  if (!e) {
    if (
      ((r = r || w.alwaysShowStackTrace),
      (t = D(t)),
      (t = V(t, "Warning")),
      (t = H(t)),
      n)
    ) {
      const { alreadyLogged: s } = w,
        a = n === !0 ? t : n;
      if (s.has(a)) return;
      s.add(a);
    }
    if (((i = w.onBeforeLog) == null || i.call(w), r)) {
      const s = A(t, W);
      w.showStackTraceList.add(s), w.logger(s, "warn");
    } else w.logger(t, "warn");
  }
}
function V(e, t) {
  let n = `[${t}]`;
  const r = t === "Warning" ? "yellow" : "red";
  return (n = E.bold(E[r](n))), `${n}${e}`;
}
function D(e) {
  return e.startsWith("[") ? e : ` ${e}`;
}
function H(e, t = !1) {
  return `${t ? Be : Ue}${e}`;
}
function X() {
  return typeof window < "u" && typeof window.scrollY == "number";
}
const re = x("utils/assertRouterType.ts", {});
function Ge() {
  Je(re.isClientRouting !== !0), (re.isClientRouting = !1);
}
function Je(e) {
  m(
    X(),
    `${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,
    { showStackTrace: !0 },
  ),
    T(
      e,
      "You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",
      { showStackTrace: !0, onlyOnce: !0 },
    );
}
function I(e, t, n) {
  return typeof e == "string" ? ie(e.split(""), t, n).join("") : ie(e, t, n);
}
function ie(e, t, n) {
  const r = [];
  let i = t >= 0 ? t : e.length + t;
  o(i >= 0 && i <= e.length);
  let s = n >= 0 ? n : e.length + n;
  for (
    o(s >= 0 && s <= e.length);
    !(i === s || (i === e.length && (i = 0), i === s));

  ) {
    const a = e[i];
    o(a !== void 0), r.push(a), i++;
  }
  return r;
}
function Ye(e) {
  return (
    ve(e) ||
    e.startsWith("/") ||
    e.startsWith(".") ||
    e.startsWith("?") ||
    e.startsWith("#") ||
    e === ""
  );
}
function Me(e, t) {
  o(Ye(e)), o(t.startsWith("/"));
  const [n, ...r] = e.split("#");
  o(n !== void 0);
  const i = ["", ...r].join("#") || null;
  o(i === null || i.startsWith("#"));
  const s = i === null ? "" : N(i.slice(1)),
    [a, ...c] = n.split("?");
  o(a !== void 0);
  const l = ["", ...c].join("?") || null;
  o(l === null || l.startsWith("?"));
  const u = {},
    g = {};
  Array.from(new URLSearchParams(l || "")).forEach(([S, R]) => {
    (u[S] = R), (g[S] = [...(g.hasOwnProperty(S) ? g[S] : []), R]);
  });
  const { origin: h, pathname: d } = Ke(a, t);
  o(h === null || h === N(h)),
    o(d.startsWith("/")),
    o(h === null || e.startsWith(h));
  const f = a.slice((h || "").length);
  tt(e, h, f, l, i);
  let { pathname: p, hasBaseServer: v } = Ze(d, t);
  return (
    (p = qe(p)),
    o(p.startsWith("/")),
    {
      origin: h,
      pathname: p,
      pathnameOriginal: f,
      hasBaseServer: v,
      search: u,
      searchAll: g,
      searchOriginal: l,
      hash: s,
      hashOriginal: i,
    }
  );
}
function N(e) {
  try {
    return decodeURIComponent(e);
  } catch {}
  try {
    return decodeURI(e);
  } catch {}
  return e;
}
function qe(e) {
  return (
    (e = e.replace(/\s+$/, "")),
    (e = e
      .split("/")
      .map((t) => N(t).split("/").join("%2F"))
      .join("/")),
    e
  );
}
function Ke(e, t) {
  var n;
  o(!e.includes("?") && !e.includes("#"));
  {
    const { origin: r, pathname: i } = se(e);
    if (r) return { origin: r, pathname: i };
    o(i === e);
  }
  if (e.startsWith("/")) return { origin: null, pathname: e };
  {
    const r =
      typeof window < "u"
        ? (n = window == null ? void 0 : window.document) == null
          ? void 0
          : n.baseURI
        : void 0;
    let i;
    return (
      r ? (i = se(r.split("?")[0]).pathname) : (i = t),
      { origin: null, pathname: Xe(e, i) }
    );
  }
}
function se(e) {
  if (ve(e)) {
    const [t, n, r, ...i] = e.split("/"),
      s = [t, n, r].join("/"),
      a = ["", ...i].join("/") || "/";
    return { origin: s, pathname: a };
  } else return o(!rt(e)), { pathname: e, origin: null };
}
function Xe(e, t) {
  const n = t.split("/"),
    r = e.split("/");
  let i = t.endsWith("/");
  e.startsWith(".") && n.pop();
  for (const a in r) {
    const c = r[a];
    (c == "" && a === "0") ||
      (c != "." && (c == ".." ? n.pop() : ((i = !1), n.push(c))));
  }
  let s = n.join("/");
  return (
    i && !s.endsWith("/") && (s += "/"), s.startsWith("/") || (s = "/" + s), s
  );
}
function Qe(e) {
  o(e.startsWith("/")), o(!e.includes("?")), o(!e.includes("#"));
}
function Ze(e, t) {
  Qe(e), o(et(t));
  let n = e;
  if ((o(n.startsWith("/")), o(t.startsWith("/")), t === "/"))
    return { pathname: e, hasBaseServer: !0 };
  let r = t;
  return (
    t.endsWith("/") && n === I(t, 0, -1) && ((r = I(t, 0, -1)), o(n === r)),
    n.startsWith(r)
      ? (o(n.startsWith("/") || n.startsWith("http")),
        o(n.startsWith(r)),
        (n = n.slice(r.length)),
        n.startsWith("/") || (n = "/" + n),
        o(n.startsWith("/")),
        { pathname: n, hasBaseServer: !0 })
      : { pathname: e, hasBaseServer: !1 }
  );
}
function et(e) {
  return e.startsWith("/");
}
function tt(e, t, n, r, i) {
  const s = nt(t, n, r, i);
  o(e === s);
}
function nt(e, t, n, r) {
  return `${e || ""}${t}${n || ""}${r || ""}`;
}
function rt(e) {
  return /^[a-z][a-z0-9\+\-]*:/i.test(e);
}
function ve(e) {
  return /^[a-z][a-z0-9\+\-]*:\/\//i.test(e);
}
function C(e, t) {
  t &&
    (o(!("_isPageContextObject" in t)),
    Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)));
}
function U(e) {
  return e instanceof Function || typeof e == "function";
}
function it(e) {
  return (t, n) => {
    const r = e(t),
      i = e(n);
    if ((o([!0, !1, null].includes(r)), o([!0, !1, null].includes(i)), r === i))
      return 0;
    if (r === !0 || i === !1) return -1;
    if (i === !0 || r === !1) return 1;
    o(!1);
  };
}
function st(e) {
  return it((t) => {
    const n = e(t);
    return n === null ? null : !n;
  });
}
function L(e) {
  return Array.isArray(e);
}
function ot(e) {
  return L(e) && e.every((t) => typeof t == "string");
}
function at(e) {
  return b(e) && Object.values(e).every((t) => typeof t == "string");
}
function y(e, t, n) {
  if (!b(e)) return !1;
  if (!(t in e)) return n === "undefined";
  if (n === void 0) return !0;
  const r = e[t];
  return n === "undefined"
    ? r === void 0
    : n === "array"
      ? L(r)
      : n === "object"
        ? b(r)
        : n === "string[]"
          ? ot(r)
          : n === "string{}"
            ? at(r)
            : n === "function"
              ? U(r)
              : L(n)
                ? typeof r == "string" && n.includes(r)
                : n === "null"
                  ? r === null
                  : n === "true"
                    ? r === !0
                    : n === "false"
                      ? r === !1
                      : typeof r === n;
}
function lt(e, t) {
  return e.toLowerCase() < t.toLowerCase()
    ? -1
    : e.toLowerCase() > t.toLowerCase()
      ? 1
      : 0;
}
const ct = (e) => e != null;
function Se(e) {
  const t = (n) => `Not a posix path: ${n}`;
  o(e !== null, t("null")),
    o(typeof e == "string", t(`typeof path === ${JSON.stringify(typeof e)}`)),
    o(e !== "", t("(empty string)")),
    o(e),
    o(!e.includes("\\"), t(e));
}
const ut = ["clientRouting"];
function ft(e) {
  ut.forEach((t) => {
    if ((o(e.fileExports), !(t in e.fileExports))) return;
    const n = `The value of \`${t}\` is only allowed to be \`true\`.`;
    m(
      e.fileExports[t] !== !1,
      `${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`,
    ),
      m(
        e.fileExports[t] === !0,
        `${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`,
      );
  });
}
const we = ["render", "clientRouting", "prerender", "doNotPrerender"];
function dt(e, t) {
  m(
    !we.includes(e),
    `${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`,
  );
}
function gt(e) {
  const t = ".page.",
    n = I(e.split(t), 0, -1).join(t);
  return o(!n.includes("\\")), n;
}
function j(e) {
  Se(e);
}
function Q(e, t) {
  return o(!e.includes("\\")), e.includes("/_error");
}
function pt(e, t) {
  if (t.length > 0) {
    const n = t.find((r) => r.pageId === e);
    return o(n), !!n.isErrorPage;
  } else return Q(e);
}
const be = ["js", "ts", "cjs", "cts", "mjs", "mts"],
  ht = ["jsx", "tsx", "cjsx", "ctsx", "mjsx", "mtsx"],
  Pe = ["vue", "svelte", "marko", "md", "mdx"],
  mt = [...be, ...ht, ...Pe];
function $e(e) {
  const t = mt.some((n) => e.endsWith("." + n));
  return yt(e) && o(t), t;
}
function yt(e) {
  const t = /\.(c|m)?(j|t)s$/.test(e),
    n = be.some((r) => e.endsWith("." + r));
  return o(t === n), t;
}
function Et(e) {
  return Pe.some((t) => e.endsWith("." + t));
}
const vt = [".page", ".page.server", ".page.route", ".page.client", ".css"];
function St(e) {
  if ((Se(e), e.endsWith(".css"))) return ".css";
  o($e(e), e);
  const n = e.split("/").slice(-1)[0].split("."),
    r = n.slice(-3)[0],
    i = n.slice(-2)[0];
  if (i === "page") return ".page";
  if ((o(r === "page", e), i === "server")) return ".page.server";
  if (i === "client") return ".page.client";
  if (i === "route") return ".page.route";
  o(!1, e);
}
function _e(e) {
  const t = (s) =>
      i.pageId === s ||
      (i.isDefaultPageFile && (oe(i.filePath) || wt(s, i.filePath))),
    n = St(e),
    i = {
      filePath: e,
      fileType: n,
      isEnv: (s) => {
        if ((o(n !== ".page.route"), s === "CLIENT_ONLY"))
          return n === ".page.client" || n === ".css";
        if (s === "SERVER_ONLY") return n === ".page.server";
        if (s === "CLIENT_AND_SERVER") return n === ".page";
        o(!1);
      },
      isRelevant: t,
      isDefaultPageFile: G(e),
      isRendererPageFile: n !== ".css" && G(e) && oe(e),
      isErrorPageFile: Q(e),
      pageId: gt(e),
    };
  return i;
}
function G(e) {
  return j(e), Q(e) ? !1 : e.includes("/_default");
}
function oe(e) {
  return j(e), e.includes("/renderer/");
}
function wt(e, t) {
  j(e), j(t), o(!e.endsWith("/")), o(!t.endsWith("/")), o(G(t));
  const n = I(t.split("/"), 0, -1)
    .filter((r) => r !== "_default")
    .join("/");
  return e.startsWith(n);
}
function bt(e, t) {
  if (!e) return null;
  let [n, ...r] = e;
  if (!n || (r.length === 0 && ["*", "default", t].includes(n))) return null;
  o(n !== "*");
  let i = "",
    s = "";
  return (
    n === "default"
      ? (i = "export default")
      : ((i = "export"), (r = [n, ...r])),
    r.forEach((c) => {
      (i = `${i} { ${c}`), (s = ` }${s}`);
    }),
    i + s
  );
}
function Pt(e, t, n) {
  return `${J(e, t)} at ${z(n, t)}`;
}
function $t(e, t, n) {
  return n ? `${J(e, t)} at ${z(n, t)}` : `${J(e, t)} internally`;
}
function J(e, t) {
  return `${e} ${E.cyan(t)} defined`;
}
function z(e, t) {
  let n;
  return (
    L(e) ? (n = e) : (n = [e]),
    o(n.length >= 1),
    n
      .map((i) => {
        const { filePathToShowToUser: s, fileExportPathToShowToUser: a } = i;
        let c = s;
        const l = bt(a, t);
        return l && (c = `${c} > ${E.cyan(l)}`), c;
      })
      .join(" / ")
  );
}
const _t = [
  {
    is: (e) => e === void 0,
    match: (e) => e === "!undefined",
    serialize: () => "!undefined",
    deserialize: () => {},
  },
  {
    is: (e) => e === 1 / 0,
    match: (e) => e === "!Infinity",
    serialize: () => "!Infinity",
    deserialize: () => 1 / 0,
  },
  {
    is: (e) => e === -1 / 0,
    match: (e) => e === "!-Infinity",
    serialize: () => "!-Infinity",
    deserialize: () => -1 / 0,
  },
  {
    is: (e) => typeof e == "number" && isNaN(e),
    match: (e) => e === "!NaN",
    serialize: () => "!NaN",
    deserialize: () => NaN,
  },
  {
    is: (e) => e instanceof Date,
    match: (e) => e.startsWith("!Date:"),
    serialize: (e) => "!Date:" + e.toISOString(),
    deserialize: (e) => new Date(e.slice(6)),
  },
  {
    is: (e) => typeof e == "bigint",
    match: (e) => e.startsWith("!BigInt:"),
    serialize: (e) => "!BigInt:" + e.toString(),
    deserialize: (e) => {
      if (typeof BigInt > "u")
        throw new Error(
          "Your JavaScript environement does not support BigInt. Consider adding a polyfill.",
        );
      return BigInt(e.slice(8));
    },
  },
  {
    is: (e) => e instanceof RegExp,
    match: (e) => e.startsWith("!RegExp:"),
    serialize: (e) => "!RegExp:" + e.toString(),
    deserialize: (e) => {
      e = e.slice(8);
      const t = e.match(/\/(.*)\/(.*)?/),
        n = t[1],
        r = t[2];
      return new RegExp(n, r);
    },
  },
  {
    is: (e) => e instanceof Map,
    match: (e) => e.startsWith("!Map:"),
    serialize: (e, t) => "!Map:" + t(Array.from(e.entries())),
    deserialize: (e, t) => new Map(t(e.slice(5))),
  },
  {
    is: (e) => e instanceof Set,
    match: (e) => e.startsWith("!Set:"),
    serialize: (e, t) => "!Set:" + t(Array.from(e.values())),
    deserialize: (e, t) => new Set(t(e.slice(5))),
  },
  {
    is: (e) => typeof e == "string" && e.startsWith("!"),
    match: (e) => e.startsWith("!"),
    serialize: (e) => "!" + e,
    deserialize: (e) => e.slice(1),
  },
];
function Te(e) {
  const t = JSON.parse(e);
  return Z(t);
}
function Z(e) {
  return typeof e == "string"
    ? Tt(e)
    : (typeof e == "object" &&
        e !== null &&
        Object.entries(e).forEach(([t, n]) => {
          e[t] = Z(n);
        }),
      e);
}
function Tt(e) {
  for (const { match: t, deserialize: n } of _t) if (t(e)) return n(e, Te);
  return e;
}
const Ct = ["$$registrations", "_rerender_only"],
  xt = [".md", ".mdx"];
function Rt(e, t, n) {
  const r = Object.keys(e).filter((u) => !Ct.includes(u)),
    i = (u) => u === "default" || u === n,
    s = r.filter(i),
    a = r.filter((u) => !i(u));
  if (s.length === 1 && a.length === 0) return;
  const c = E.code("export default"),
    l = E.code(`export { ${n} }`);
  s.length === 0 && m(!1, `${t} should have a ${l} or ${c}`),
    s.length === 2 &&
      T(!1, `${t} is ambiguous: remove ${c} or ${l}`, { onlyOnce: !0 }),
    o(s.length === 1),
    o(a.length > 0),
    xt.some((u) => t.endsWith(u)) ||
      a.forEach((u) => {
        T(!1, `${t} unexpected ${E.cyan(`export { ${u} }`)}`, { onlyOnce: !0 });
      });
}
function Y(e) {
  return Ot(e);
}
function Lt(e, t) {
  const n = e.map((i) => {
      const s = Y(i.configValuesSerialized),
        {
          pageId: a,
          isErrorPage: c,
          routeFilesystem: l,
          loadConfigValuesAll: u,
        } = i;
      return (
        jt(s),
        {
          pageId: a,
          isErrorPage: c,
          routeFilesystem: l,
          configValues: s,
          loadConfigValuesAll: u,
        }
      );
    }),
    r = { configValues: {} };
  {
    const i = Y(t.configValuesSerialized);
    Object.assign(r.configValues, i);
  }
  return { pageConfigs: n, pageConfigGlobal: r };
}
function jt(e) {
  const t = "route",
    n = e[t];
  if (!n) return;
  const { value: r, definedAtData: i } = n,
    s = typeof r;
  o(i);
  const a = Pt("Config", t, i);
  m(
    s === "string" || U(r),
    `${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`,
  );
}
function Ot(e) {
  const t = {};
  return (
    Object.entries(e).forEach(([r, i]) => {
      let s;
      if (i.type === "cumulative") {
        const { valueSerialized: a, ...c } = i;
        s = {
          value: a.map((u, g) => {
            const { value: h, sideExports: d } = ae(u, r, () => {
              const f = i.definedAtData[g];
              return o(f), f;
            });
            return n(d), h;
          }),
          ...c,
        };
      } else {
        const { valueSerialized: a, ...c } = i,
          { value: l, sideExports: u } = ae(
            a,
            r,
            () => (o(i.type !== "computed"), i.definedAtData),
          );
        n(u), (s = { value: l, ...c });
      }
      t[r] = s;
    }),
    t
  );
  function n(r) {
    r.forEach((i) => {
      const { configName: s, configValue: a } = i;
      t[s] || (t[s] = a);
    });
  }
}
function ae(e, t, n) {
  if (e.type === "js-serialized") {
    let { value: r } = e;
    return (r = Z(r)), { value: r, sideExports: [] };
  }
  if (e.type === "pointer-import") {
    const { value: r } = e;
    return { value: r, sideExports: [] };
  }
  if (e.type === "plus-file") {
    const r = n(),
      { exportValues: i } = e;
    Rt(i, r.filePathToShowToUser, t);
    let s,
      a = !1;
    const c = [];
    return (
      Object.entries(i).forEach(([l, u]) => {
        l !== "default" && l !== t
          ? c.push({
              configName: l,
              configValue: {
                type: "standard",
                value: u,
                definedAtData: {
                  filePathToShowToUser: r.filePathToShowToUser,
                  fileExportPathToShowToUser: [l],
                },
              },
            })
          : ((s = u), o(!a), (a = !0));
      }),
      o(a),
      { value: s, sideExports: c }
    );
  }
  o(!1);
}
function kt(e) {
  o(y(e, "pageFilesLazy", "object")),
    o(y(e, "pageFilesEager", "object")),
    o(y(e, "pageFilesExportNamesLazy", "object")),
    o(y(e, "pageFilesExportNamesEager", "object")),
    o(y(e.pageFilesLazy, ".page")),
    o(y(e.pageFilesLazy, ".page.client") || y(e.pageFilesLazy, ".page.server")),
    o(y(e, "pageFilesList", "string[]")),
    o(y(e, "pageConfigsSerialized")),
    o(y(e, "pageConfigGlobalSerialized"));
  const { pageConfigsSerialized: t, pageConfigGlobalSerialized: n } = e;
  Ft(t), It(n);
  const { pageConfigs: r, pageConfigGlobal: i } = Lt(t, n),
    s = {};
  k(e.pageFilesLazy).forEach(({ filePath: c, pageFile: l, globValue: u }) => {
    l = s[c] = s[c] ?? l;
    const g = u;
    le(g),
      (l.loadFile = async () => {
        "fileExports" in l || ((l.fileExports = await g()), ft(l));
      });
  }),
    k(e.pageFilesExportNamesLazy).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        le(g),
          (l.loadExportNames = async () => {
            if (!("exportNames" in l)) {
              const h = await g();
              o(y(h, "exportNames", "string[]"), l.filePath),
                (l.exportNames = h.exportNames);
            }
          });
      },
    ),
    k(e.pageFilesEager).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        o(b(g)), (l.fileExports = g);
      },
    ),
    k(e.pageFilesExportNamesEager).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        o(b(g)),
          o(y(g, "exportNames", "string[]"), l.filePath),
          (l.exportNames = g.exportNames);
      },
    ),
    e.pageFilesList.forEach((c) => {
      s[c] = s[c] ?? _e(c);
    });
  const a = Object.values(s);
  return (
    a.forEach(({ filePath: c }) => {
      o(!c.includes("\\"));
    }),
    { pageFiles: a, pageConfigs: r, pageConfigGlobal: i }
  );
}
function k(e) {
  const t = [];
  return (
    Object.entries(e).forEach(([n, r]) => {
      o(vt.includes(n)),
        o(b(r)),
        Object.entries(r).forEach(([i, s]) => {
          const a = _e(i);
          o(a.fileType === n),
            t.push({ filePath: i, pageFile: a, globValue: s });
        });
    }),
    t
  );
}
function le(e) {
  o(U(e));
}
function Ft(e) {
  o(L(e)),
    e.forEach((t) => {
      o(b(t)),
        o(y(t, "pageId", "string")),
        o(y(t, "routeFilesystem")),
        o(y(t, "configValuesSerialized"));
    });
}
function It(e) {
  o(y(e, "configValuesSerialized"));
}
const _ = x("setPageFiles.ts", {});
function zt(e) {
  const { pageFiles: t, pageConfigs: n, pageConfigGlobal: r } = kt(e);
  (_.pageFilesAll = t), (_.pageConfigs = n), (_.pageConfigGlobal = r);
}
async function At(e, t) {
  e
    ? (o(!_.pageFilesGetter), o(t === void 0))
    : (o(_.pageFilesGetter),
      o(typeof t == "boolean"),
      (!_.pageFilesAll || !t) && (await _.pageFilesGetter()));
  const { pageFilesAll: n, pageConfigs: r, pageConfigGlobal: i } = _;
  o(n && r && i);
  const s = Wt(n, r);
  return {
    pageFilesAll: n,
    allPageIds: s,
    pageConfigs: r,
    pageConfigGlobal: i,
  };
}
function Wt(e, t) {
  const n = e
      .filter(({ isDefaultPageFile: s }) => !s)
      .map(({ pageId: s }) => s),
    r = me(n),
    i = t.map((s) => s.pageId);
  return [...r, ...i];
}
function Vt(e, t) {
  return Dt(e, t, !0);
}
function Dt(e, t, n) {
  const r = n ? "CLIENT_ONLY" : "SERVER_ONLY",
    i = e
      .filter((f) => f.isRelevant(t) && f.fileType !== ".page.route")
      .sort(Ht(n, t)),
    s = (f) => {
      const p = i.filter(
        (S) => S.pageId === t && S.isEnv(f ? "CLIENT_AND_SERVER" : r),
      );
      m(
        p.length <= 1,
        `Merge the following files into a single file: ${p.map((S) => S.filePath).join(" ")}`,
      );
      const v = p[0];
      return o(v === void 0 || !v.isDefaultPageFile), v;
    },
    a = s(!1),
    c = s(!0),
    l = (f) =>
      i.filter(
        (p) => p.isRendererPageFile && p.isEnv(f ? "CLIENT_AND_SERVER" : r),
      )[0],
    u = l(!1),
    g = l(!0),
    h = i.filter(
      (f) =>
        f.isDefaultPageFile &&
        !f.isRendererPageFile &&
        (f.isEnv(r) || f.isEnv("CLIENT_AND_SERVER")),
    );
  return [a, c, ...h, u, g].filter(ct);
}
function Ht(e, t) {
  const n = e ? "CLIENT_ONLY" : "SERVER_ONLY",
    r = -1,
    i = 1,
    s = 0;
  return (a, c) => {
    if (!a.isDefaultPageFile && c.isDefaultPageFile) return r;
    if (!c.isDefaultPageFile && a.isDefaultPageFile) return i;
    {
      const l = a.isRendererPageFile,
        u = c.isRendererPageFile;
      if (!l && u) return r;
      if (!u && l) return i;
      o(l === u);
    }
    {
      const l = ce(t, a.filePath),
        u = ce(t, c.filePath);
      if (l < u) return r;
      if (u < l) return i;
      o(l === u);
    }
    {
      if (a.isEnv(n) && c.isEnv("CLIENT_AND_SERVER")) return r;
      if (c.isEnv(n) && a.isEnv("CLIENT_AND_SERVER")) return i;
    }
    return s;
  };
}
function ce(e, t) {
  j(e), j(t);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++);
  const r = e.slice(n),
    i = t.slice(n),
    s = r.split("/").length,
    a = i.split("/").length;
  return s + a;
}
function Ut(e) {
  if (!e || L(e)) return null;
  const { filePathToShowToUser: t } = e;
  return o(t), t;
}
function Bt(e, t) {
  const n = {},
    r = {},
    i = {};
  e.forEach((d) => {
    Nt(d).forEach(
      ({ exportName: p, exportValue: v, isFromDefaultExport: S }) => {
        o(p !== "default"),
          (i[p] = i[p] ?? []),
          i[p].push({
            exportValue: v,
            exportSource: `${d.filePath} > ${S ? `\`export default { ${p} }\`` : `\`export { ${p} }\``}`,
            filePath: d.filePath,
            _filePath: d.filePath,
            _fileType: d.fileType,
            _isFromDefaultExport: S,
          });
      },
    );
  });
  const s = {},
    a = {},
    c = (d, f) => {
      (s[f] = d), a[f] ?? (a[f] = []), a[f].push(d);
    },
    l = { configsStandard: {}, configsCumulative: {}, configsComputed: {} };
  t &&
    Object.entries(t.configValues).forEach(([d, f]) => {
      const { value: p } = f,
        v = Ut(f.definedAtData),
        S = $t("Config", d, f.definedAtData);
      if (
        ((r[d] = r[d] ?? p),
        (n[d] = n[d] ?? []),
        o(n[d].length === 0),
        n[d].push({
          configValue: p,
          configDefinedAt: S,
          configDefinedByFile: v,
        }),
        f.type === "standard")
      ) {
        const $ = {
          type: "configsStandard",
          value: f.value,
          definedAt: z(f.definedAtData, d),
        };
        c($, d), (l.configsStandard[d] = $);
      }
      if (f.type === "cumulative") {
        const $ = {
          type: "configsCumulative",
          values: f.value.map((Re, Le) => {
            const te = f.definedAtData[Le];
            o(te);
            const je = z(te, d);
            return { value: Re, definedAt: je };
          }),
        };
        c($, d), (l.configsCumulative[d] = $);
      }
      if (f.type === "computed") {
        const $ = { type: "configsComputed", value: f.value };
        c($, d), (l.configsComputed[d] = $);
      }
      const R = d;
      (i[R] = i[R] ?? []),
        i[R].push({
          exportValue: p,
          exportSource: S,
          filePath: v,
          _filePath: v,
          _fileType: null,
          _isFromDefaultExport: null,
        });
    });
  const u = Gt(),
    g = {};
  return (
    Object.entries(i).forEach(([d, f]) => {
      f.forEach(({ exportValue: p, _fileType: v, _isFromDefaultExport: S }) => {
        (g[d] = g[d] ?? p), v === ".page" && !S && (d in u || (u[d] = p));
      });
    }),
    o(!("default" in g)),
    o(!("default" in i)),
    {
      from: l,
      source: s,
      sources: a,
      config: r,
      configEntries: n,
      exports: g,
      exportsAll: i,
      pageExports: u,
    }
  );
}
function Nt(e) {
  const { filePath: t, fileExports: n } = e;
  o(n), o($e(t));
  const r = [];
  return (
    Object.entries(n)
      .sort(st(([i]) => i === "default"))
      .forEach(([i, s]) => {
        let a = i === "default";
        if (a)
          if (Et(t)) i = "Page";
          else {
            m(
              b(s),
              `The ${E.cyan("export default")} of ${t} should be an object.`,
            ),
              Object.entries(s).forEach(([c, l]) => {
                dt(c, t),
                  r.push({
                    exportName: c,
                    exportValue: l,
                    isFromDefaultExport: a,
                  });
              });
            return;
          }
        r.push({ exportName: i, exportValue: s, isFromDefaultExport: a });
      }),
    r.forEach(({ exportName: i, isFromDefaultExport: s }) => {
      o(!(s && we.includes(i)));
    }),
    r
  );
}
function Gt() {
  return new Proxy(
    {},
    {
      get(...e) {
        return (
          X() ||
            T(
              !1,
              "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",
              { onlyOnce: !0, showStackTrace: !0 },
            ),
          Reflect.get(...e)
        );
      },
    },
  );
}
const Jt = "modulepreload",
  Yt = function (e) {
    return "/" + e;
  },
  ue = {},
  O = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        c =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      i = Promise.all(
        n.map((l) => {
          if (((l = Yt(l)), l in ue)) return;
          ue[l] = !0;
          const u = l.endsWith(".css"),
            g = u ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let f = s.length - 1; f >= 0; f--) {
              const p = s[f];
              if (p.href === l && (!u || p.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${g}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : Jt),
            u || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = l),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, p) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${l}`)),
                );
            });
        }),
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
          throw s;
      });
  },
  ee = {},
  Mt = {},
  qt = {},
  Kt = {},
  Xt = [],
  Ce = {},
  Qt = [
    {
      pageId: "/pages/admin-panel",
      isErrorPage: void 0,
      routeFilesystem: {
        routeString: "/admin-panel",
        definedBy: "/pages/admin-panel/",
      },
      loadConfigValuesAll: () =>
        O(
          () => import("./pages_admin-panel.DP1pZS3X.js"),
          __vite__mapDeps([0, 1, 2]),
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
    {
      pageId: "/pages/index",
      isErrorPage: void 0,
      routeFilesystem: { routeString: "/", definedBy: "/pages/index/" },
      loadConfigValuesAll: () =>
        O(
          () => import("./pages_index.CkCEMFy_.js"),
          __vite__mapDeps([3, 1, 2]),
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
    {
      pageId: "/pages/adminpanel/deleteinfo",
      isErrorPage: void 0,
      routeFilesystem: {
        routeString: "/adminpanel/deleteinfo",
        definedBy: "/pages/adminpanel/deleteinfo/",
      },
      loadConfigValuesAll: () =>
        O(
          () => import("./pages_adminpanel_deleteinfo.BWvwdccb.js"),
          __vite__mapDeps([4, 1, 2]),
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
    {
      pageId: "/pages/adminpanel/getinfo",
      isErrorPage: void 0,
      routeFilesystem: {
        routeString: "/adminpanel/getinfo",
        definedBy: "/pages/adminpanel/getinfo/",
      },
      loadConfigValuesAll: () =>
        O(
          () => import("./pages_adminpanel_getinfo.DpBozyJC.js"),
          __vite__mapDeps([5, 1, 2]),
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
    {
      pageId: "/pages/adminpanel/postinfo",
      isErrorPage: void 0,
      routeFilesystem: {
        routeString: "/adminpanel/postinfo",
        definedBy: "/pages/adminpanel/postinfo/",
      },
      loadConfigValuesAll: () =>
        O(
          () => import("./pages_adminpanel_postinfo.Bdo7ihPP.js"),
          __vite__mapDeps([6, 1, 2]),
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
  ],
  Zt = { configValuesSerialized: {} },
  en = Object.assign({}),
  tn = { ...en };
ee[".page"] = tn;
const nn = Object.assign({}),
  rn = { ...nn };
ee[".page.client"] = rn;
const sn = Object.assign({}),
  on = { ...sn };
Ce[".page.server"] = on;
const an = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      neverLoaded: Ce,
      pageConfigGlobalSerialized: Zt,
      pageConfigsSerialized: Qt,
      pageFilesEager: Mt,
      pageFilesExportNamesEager: Kt,
      pageFilesExportNamesLazy: qt,
      pageFilesLazy: ee,
      pageFilesList: Xt,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
zt(an);
function ln() {
  o(X());
}
function cn() {
  ln();
}
function fe(e) {
  const t = e / 1e3;
  if (t < 120) {
    const n = de(t);
    return `${n} second${ge(n)}`;
  }
  {
    const n = t / 60,
      r = de(n);
    return `${r} minute${ge(r)}`;
  }
}
function de(e) {
  let t = e.toFixed(1);
  return t.endsWith(".0") && (t = t.slice(0, -2)), t;
}
function ge(e) {
  return e === "1" ? "" : "s";
}
const M = x("utils/executeHook.ts", {
  userHookErrors: new WeakMap(),
  pageContext: null,
});
function un(e, t, n) {
  const {
    hookName: r,
    hookFilePath: i,
    hookTimeout: { error: s, warning: a },
  } = t;
  let c, l;
  const u = new Promise((f, p) => {
      (c = (v) => {
        g(), f(v);
      }),
        (l = (v) => {
          g(), p(v);
        });
    }),
    g = () => {
      h && clearTimeout(h), d && clearTimeout(d);
    },
    h =
      pe(a) &&
      setTimeout(() => {
        T(
          !1,
          `The ${r}() hook defined by ${i} is slow: it's taking more than ${fe(a)} (https://vike.dev/hooksTimeout)`,
          { onlyOnce: !1 },
        );
      }, a),
    d =
      pe(s) &&
      setTimeout(() => {
        const f = Ne(
          `The ${r}() hook defined by ${i} timed out: it didn't finish after ${fe(s)} (https://vike.dev/hooksTimeout)`,
        );
        l(f);
      }, s);
  return (
    (async () => {
      try {
        fn(n);
        const f = await e();
        c(f);
      } catch (f) {
        b(f) && M.userHookErrors.set(f, { hookName: r, hookFilePath: i }), l(f);
      }
    })(),
    u
  );
}
function pe(e) {
  return !!e && e !== 1 / 0;
}
function fn(e) {
  (M.pageContext = e),
    Promise.resolve().then(() => {
      M.pageContext = null;
    });
}
function xe(e) {
  const t = window.location.href,
    { searchOriginal: n, hashOriginal: r, pathname: i } = Me(t, "/");
  let s;
  return (
    e != null && e.withoutHash
      ? (s = `${i}${n || ""}`)
      : (s = `${i}${n || ""}${r || ""}`),
    o(s.startsWith("/")),
    s
  );
}
function dn(e) {
  return typeof e == "string" && gn(e) ? `.${e}` : `[${JSON.stringify(e)}]`;
}
function gn(e) {
  return /^[a-z0-9\$_]+$/i.test(e);
}
cn();
function pn() {
  const e = "vike_pageContext",
    t = document.getElementById(e);
  m(
    t,
    `Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`,
  );
  const n = t.textContent;
  o(n);
  const r = Te(n);
  return o(y(r, "_pageId", "string")), o(y(r, "routeParams", "string{}")), r;
}
function hn(e, t) {
  const n = e.filter((i) => i.pageId === t);
  return o(n.length <= 1), n[0] ?? null;
}
async function mn(e, t) {
  if ("isAllLoaded" in e && !t) return e;
  const n = await e.loadConfigValuesAll(),
    r = Y(n.configValuesSerialized);
  return Object.assign(e.configValues, r), C(e, { isAllLoaded: !0 }), e;
}
const yn = "__whileFetchingAssets";
async function En(e, t, n) {
  const r = Vt(t, e),
    i = hn(n, e);
  let s;
  const a = !1;
  try {
    s = (
      await Promise.all([
        i && mn(i, a),
        ...r.map((g) => {
          var h;
          return (h = g.loadFile) == null ? void 0 : h.call(g);
        }),
      ])
    )[0];
  } catch (u) {
    throw (vn(u) && Object.assign(u, { [yn]: !0 }), u);
  }
  const c = Bt(r, s),
    l = {};
  return C(l, c), C(l, { _pageFilesLoaded: r }), l;
}
function vn(e) {
  return e instanceof Error
    ? [
        "Failed to fetch dynamically imported module",
        "error loading dynamically imported module",
        "Importing a module script failed",
        "error resolving module specifier",
        "failed to resolve module",
      ].some((n) => e.message.toLowerCase().includes(n.toLowerCase()))
    : !1;
}
const he = xe({ withoutHash: !0 });
async function Sn() {
  const e = pn();
  return (
    C(e, {
      isHydration: !0,
      isBackwardNavigation: null,
      _hasPageContextFromServer: !0,
      _hasPageContextFromClient: !1,
    }),
    C(e, await bn(e._pageId)),
    wn(),
    e
  );
}
function wn() {
  const e = xe({ withoutHash: !0 });
  m(
    he === e,
    `The URL was manipulated before the hydration finished ('${he}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`,
  );
}
async function bn(e) {
  const t = {},
    { pageFilesAll: n, pageConfigs: r } = await At(!0);
  return (
    C(t, { _pageFilesAll: n, _pageConfigs: r }),
    C(t, await En(e, t._pageFilesAll, t._pageConfigs)),
    n
      .filter((i) => i.fileType !== ".page.server")
      .forEach((i) => {
        var s;
        T(
          !((s = i.fileExports) != null && s.onBeforeRender),
          `export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,
          { onlyOnce: !0 },
        );
      }),
    t
  );
}
const Pn = x("getHook.ts", { isPrerendering: !1 });
function q(e, t) {
  if (!(t in e.exports)) return null;
  const { hooksTimeout: n } = e.config,
    r = Tn(n, t),
    i = e.exports[t],
    s = e.exportsAll[t][0];
  if ((o(s.exportValue === i), i === null)) return null;
  const a = s.filePath;
  return (
    o(a),
    o(!a.endsWith(" ")),
    _n(i, { hookName: t, hookFilePath: a }),
    { hookFn: i, hookName: t, hookFilePath: a, hookTimeout: r }
  );
}
function $n(e, t) {
  q(e, t);
}
function _n(e, { hookName: t, hookFilePath: n }) {
  o(t && n),
    o(!t.endsWith(")")),
    m(U(e), `Hook ${t}() defined by ${n} should be a function`);
}
function Tn(e, t) {
  const n = Cn(e);
  if (n === !1) return { error: !1, warning: !1 };
  const r = n[t],
    i = xn(t);
  return (
    (r == null ? void 0 : r.error) !== void 0 && (i.error = r.error),
    (r == null ? void 0 : r.warning) !== void 0 && (i.warning = r.warning),
    i
  );
}
function Cn(e) {
  if (e === void 0) return {};
  if (e === !1) return !1;
  m(
    b(e),
    `Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`,
  );
  const t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      if (r === !1) {
        t[n] = { error: !1, warning: !1 };
        return;
      }
      m(
        b(r),
        `Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`,
      );
      const [i, s] = ["error", "warning"].map((a) => {
        const c = r[a];
        if (c === void 0 || c === !1) return c;
        const l = `Setting ${E.cyan(`hooksTimeout.${n}.${a}`)} should be`;
        return (
          m(typeof c == "number", `${l} ${E.cyan("false")} or a number`),
          m(c > 0, `${l} a positive number`),
          c
        );
      });
      t[n] = { error: i, warning: s };
    }),
    t
  );
}
function xn(e) {
  return e === "onBeforeRoute"
    ? { error: 5 * 1e3, warning: 1 * 1e3 }
    : Pn.isPrerendering
      ? { error: 2 * 60 * 1e3, warning: 30 * 1e3 }
      : (o(!e.toLowerCase().includes("prerender")),
        { error: 30 * 1e3, warning: 4 * 1e3 });
}
function Rn(e) {
  let t = Object.getOwnPropertyDescriptors(e);
  for (const n of Object.keys(e)) delete e[n];
  (t = Object.fromEntries(Object.entries(t).sort(([n], [r]) => lt(n, r)))),
    Object.defineProperties(e, t);
}
function Ln(e) {
  jn(e), On(e);
}
function jn(e) {
  pt(e._pageId, e._pageConfigs) && o(y(e, "is404", "boolean"));
}
function On(e) {
  if (e.is404 === void 0 || e.is404 === null) return;
  const t = e.pageProps || {};
  if (!b(t)) {
    T(!1, "pageContext.pageProps should be an object", {
      showStackTrace: !0,
      onlyOnce: !0,
    });
    return;
  }
  (t.is404 = t.is404 || e.is404), (e.pageProps = t);
}
const kn = "not-serializable",
  F = x("getPageContextProxyForUser.ts", {});
function Fn(e) {
  return (
    o([!0, !1].includes(e._hasPageContextFromServer)),
    o([!0, !1].includes(e._hasPageContextFromClient)),
    new Proxy(e, {
      get(t, n) {
        const r = e[n],
          i = dn(n);
        return (
          m(
            r !== kn,
            `Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`,
          ),
          In(e, n, i),
          r
        );
      },
    })
  );
}
function In(e, t, n) {
  if (Wn(t) || t in e || An(t) || !e._hasPageContextFromServer) return;
  const r = `pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;
  e._hasPageContextFromClient
    ? T(!1, r, { onlyOnce: !1, showStackTrace: !0 })
    : m(!1, r);
}
const zn = ["then", "toJSON"];
function An(e) {
  return !!(
    zn.includes(e) ||
    typeof e == "symbol" ||
    typeof e != "string" ||
    e.startsWith("__v_")
  );
}
function Wn(e) {
  return F.prev === e || F.prev === "__v_raw"
    ? !0
    : ((F.prev = e),
      window.setTimeout(() => {
        F.prev = void 0;
      }, 0),
      !1);
}
function Vn(e, t) {
  if (t) {
    const i = e;
    o([!0, !1].includes(i.isHydration)),
      o([!0, !1, null].includes(i.isBackwardNavigation));
  } else {
    const i = e;
    o(i.isHydration === !0), o(i.isBackwardNavigation === null);
  }
  o("config" in e),
    o("configEntries" in e),
    o("exports" in e),
    o("exportsAll" in e),
    o("pageExports" in e),
    o(b(e.pageExports));
  const n = e.exports.Page;
  C(e, { Page: n }), Dn(e), Rn(e);
  const r = Fn(e);
  return Ln(e), r;
}
function Dn(e) {
  Object.entries(e).forEach(([t, n]) => {
    delete e[t], (e[t] = n);
  });
}
async function Hn(e, t) {
  const n = Vn(e, t);
  let r = null,
    i;
  (r = q(e, "render")), (i = "render");
  {
    const c = q(e, "onRenderClient");
    c && ((r = c), (i = "onRenderClient"));
  }
  if (!r) {
    const c = Un(e);
    if ((o(c), e._pageConfigs.length > 0))
      m(
        !1,
        `No onRenderClient() hook defined for URL '${c}', but it's needed, see https://vike.dev/onRenderClient`,
      );
    else {
      const l = e._pageFilesLoaded.filter((g) => g.fileType === ".page.client");
      let u;
      l.length === 0
        ? (u = "No file `*.page.client.*` found for URL " + c)
        : (u =
            "One of the following files should export a render() hook: " +
            l.map((g) => g.filePath).join(" ")),
        m(!1, u);
    }
  }
  o(r);
  const s = r.hookFn;
  o(i);
  const a = await un(() => s(n), r, e);
  m(
    a === void 0,
    `The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`,
  );
}
function Un(e) {
  let t;
  try {
    t = e.urlPathname ?? e.urlOriginal;
  } catch {}
  return (t = t ?? window.location.href), t;
}
Ge();
const Bn = !0;
Ie(Bn);
Nn();
async function Nn() {
  var t, n;
  const e = await Sn();
  await Hn(e, !1),
    $n(e, "onHydrationEnd"),
    await ((n = (t = e.exports).onHydrationEnd) == null
      ? void 0
      : n.call(t, e));
}
