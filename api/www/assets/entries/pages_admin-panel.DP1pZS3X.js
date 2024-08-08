import {
  r,
  a as Ct,
  $ as yr,
  b as Er,
  c as N,
  j as y,
  R as Je,
  g as Pt,
  B as Cr,
  d as K,
  T as Pr,
  L as ne,
  e as Rr,
  H as Tn,
  f as it,
  P as lt,
  i as oo,
  h as Ft,
  k as Tr,
  l as Sr,
} from "../chunks/chunk-BR8bEaM_.js";
function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    C.apply(this, arguments)
  );
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (c) {
    if ((e == null || e(c), n === !1 || !c.defaultPrevented))
      return t == null ? void 0 : t(c);
  };
}
function oe(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = r.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: b, children: m, ...v } = f,
        p = (b == null ? void 0 : b[e][l]) || i,
        h = r.useMemo(() => v, Object.values(v));
      return r.createElement(p.Provider, { value: h }, m);
    }
    function d(f, b) {
      const m = (b == null ? void 0 : b[e][l]) || i,
        v = r.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return (u.displayName = a + "Provider"), [u, d];
  }
  const c = () => {
    const a = n.map((s) => r.createContext(s));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return r.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (c.scopeName = e), [o, Ar(c, ...t)];
}
function Ar(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return r.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Y(e) {
  const t = r.useRef(e);
  return (
    r.useEffect(() => {
      t.current = e;
    }),
    r.useMemo(
      () =>
        (...n) => {
          var o;
          return (o = t.current) === null || o === void 0
            ? void 0
            : o.call(t, ...n);
        },
      [],
    )
  );
}
function ue({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [o, c] = kr({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    s = a ? e : o,
    i = Y(n),
    l = r.useCallback(
      (u) => {
        if (a) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && i(f);
        } else c(u);
      },
      [a, e, c, i],
    );
  return [s, l];
}
function kr({ defaultProp: e, onChange: t }) {
  const n = r.useState(e),
    [o] = n,
    c = r.useRef(o),
    a = Y(t);
  return (
    r.useEffect(() => {
      c.current !== o && (a(o), (c.current = o));
    }, [o, c, a]),
    n
  );
}
const ce =
  globalThis != null && globalThis.document ? r.useLayoutEffect : () => {};
function Or(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qt(...e) {
  return (t) => e.forEach((n) => Or(n, t));
}
function H(...e) {
  return r.useCallback(Qt(...e), e);
}
const Pe = r.forwardRef((e, t) => {
  const { children: n, ...o } = e,
    c = r.Children.toArray(n),
    a = c.find(_r);
  if (a) {
    const s = a.props.children,
      i = c.map((l) =>
        l === a
          ? r.Children.count(s) > 1
            ? r.Children.only(null)
            : r.isValidElement(s)
              ? s.props.children
              : null
          : l,
      );
    return r.createElement(
      zt,
      C({}, o, { ref: t }),
      r.isValidElement(s) ? r.cloneElement(s, void 0, i) : null,
    );
  }
  return r.createElement(zt, C({}, o, { ref: t }), n);
});
Pe.displayName = "Slot";
const zt = r.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  return r.isValidElement(n)
    ? r.cloneElement(n, { ...Ir(o, n.props), ref: t ? Qt(t, n.ref) : n.ref })
    : r.Children.count(n) > 1
      ? r.Children.only(null)
      : null;
});
zt.displayName = "SlotClone";
const ro = ({ children: e }) => r.createElement(r.Fragment, null, e);
function _r(e) {
  return r.isValidElement(e) && e.type === ro;
}
function Ir(e, t) {
  const n = { ...t };
  for (const o in t) {
    const c = e[o],
      a = t[o];
    /^on[A-Z]/.test(o)
      ? c && a
        ? (n[o] = (...i) => {
            a(...i), c(...i);
          })
        : c && (n[o] = c)
      : o === "style"
        ? (n[o] = { ...c, ...a })
        : o === "className" && (n[o] = [c, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const Dr = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  j = Dr.reduce((e, t) => {
    const n = r.forwardRef((o, c) => {
      const { asChild: a, ...s } = o,
        i = a ? Pe : t;
      return (
        r.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        r.createElement(i, C({}, s, { ref: c }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function qt(e, t) {
  e && Ct.flushSync(() => e.dispatchEvent(t));
}
function Nr(e, t) {
  return r.useReducer((n, o) => {
    const c = t[n][o];
    return c ?? n;
  }, e);
}
const se = (e) => {
  const { present: t, children: n } = e,
    o = Mr(t),
    c =
      typeof n == "function" ? n({ present: o.isPresent }) : r.Children.only(n),
    a = H(o.ref, c.ref);
  return typeof n == "function" || o.isPresent
    ? r.cloneElement(c, { ref: a })
    : null;
};
se.displayName = "Presence";
function Mr(e) {
  const [t, n] = r.useState(),
    o = r.useRef({}),
    c = r.useRef(e),
    a = r.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [i, l] = Nr(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    r.useEffect(() => {
      const u = ut(o.current);
      a.current = i === "mounted" ? u : "none";
    }, [i]),
    ce(() => {
      const u = o.current,
        d = c.current;
      if (d !== e) {
        const b = a.current,
          m = ut(u);
        e
          ? l("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(d && b !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = e);
      }
    }, [e, l]),
    ce(() => {
      if (t) {
        const u = (f) => {
            const m = ut(o.current).includes(f.animationName);
            f.target === t && m && Ct.flushSync(() => l("ANIMATION_END"));
          },
          d = (f) => {
            f.target === t && (a.current = ut(o.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: r.useCallback((u) => {
        u && (o.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function ut(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const jr = yr.useId || (() => {});
let Lr = 0;
function re(e) {
  const [t, n] = r.useState(jr());
  return (
    ce(() => {
      e || n((o) => o ?? String(Lr++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const co = "Collapsible",
  [Fr, ao] = oe(co),
  [zr, qr] = Fr(co),
  Vr = r.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: o,
        defaultOpen: c,
        disabled: a,
        onOpenChange: s,
        ...i
      } = e,
      [l = !1, u] = ue({ prop: o, defaultProp: c, onChange: s });
    return r.createElement(
      zr,
      {
        scope: n,
        disabled: a,
        contentId: re(),
        open: l,
        onOpenToggle: r.useCallback(() => u((d) => !d), [u]),
      },
      r.createElement(
        j.div,
        C({ "data-state": so(l), "data-disabled": a ? "" : void 0 }, i, {
          ref: t,
        }),
      ),
    );
  }),
  Br = "CollapsibleTrigger",
  Hr = r.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...o } = e,
      c = qr(Br, n);
    return r.createElement(
      j.button,
      C(
        {
          type: "button",
          "aria-controls": c.contentId,
          "aria-expanded": c.open || !1,
          "data-state": so(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          disabled: c.disabled,
        },
        o,
        { ref: t, onClick: A(e.onClick, c.onOpenToggle) },
      ),
    );
  });
function so(e) {
  return e ? "open" : "closed";
}
const Wr = Vr,
  Kr = Hr;
function Ur(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Y(e);
  r.useEffect(() => {
    const o = (c) => {
      c.key === "Escape" && n(c);
    };
    return (
      t.addEventListener("keydown", o),
      () => t.removeEventListener("keydown", o)
    );
  }, [n, t]);
}
const Vt = "dismissableLayer.update",
  Gr = "dismissableLayer.pointerDownOutside",
  Yr = "dismissableLayer.focusOutside";
let Sn;
const Xr = r.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  et = r.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: a,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...u
      } = e,
      d = r.useContext(Xr),
      [f, b] = r.useState(null),
      m =
        (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, v] = r.useState({}),
      p = H(t, (T) => b(T)),
      h = Array.from(d.layers),
      [$] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      w = h.indexOf($),
      g = f ? h.indexOf(f) : -1,
      x = d.layersWithOutsidePointerEventsDisabled.size > 0,
      E = g >= w,
      P = Zr((T) => {
        const S = T.target,
          _ = [...d.branches].some((L) => L.contains(S));
        !E ||
          _ ||
          (a == null || a(T),
          i == null || i(T),
          T.defaultPrevented || l == null || l());
      }, m),
      R = Qr((T) => {
        const S = T.target;
        [...d.branches].some((L) => L.contains(S)) ||
          (s == null || s(T),
          i == null || i(T),
          T.defaultPrevented || l == null || l());
      }, m);
    return (
      Ur((T) => {
        g === d.layers.size - 1 &&
          (c == null || c(T),
          !T.defaultPrevented && l && (T.preventDefault(), l()));
      }, m),
      r.useEffect(() => {
        if (f)
          return (
            o &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Sn = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(f)),
            d.layers.add(f),
            An(),
            () => {
              o &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Sn);
            }
          );
      }, [f, m, o, d]),
      r.useEffect(
        () => () => {
          f &&
            (d.layers.delete(f),
            d.layersWithOutsidePointerEventsDisabled.delete(f),
            An());
        },
        [f, d],
      ),
      r.useEffect(() => {
        const T = () => v({});
        return (
          document.addEventListener(Vt, T),
          () => document.removeEventListener(Vt, T)
        );
      }, []),
      r.createElement(
        j.div,
        C({}, u, {
          ref: p,
          style: {
            pointerEvents: x ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: A(e.onFocusCapture, R.onFocusCapture),
          onBlurCapture: A(e.onBlurCapture, R.onBlurCapture),
          onPointerDownCapture: A(
            e.onPointerDownCapture,
            P.onPointerDownCapture,
          ),
        }),
      )
    );
  });
function Zr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Y(e),
    o = r.useRef(!1),
    c = r.useRef(() => {});
  return (
    r.useEffect(() => {
      const a = (i) => {
          if (i.target && !o.current) {
            let u = function () {
              io(Gr, n, l, { discrete: !0 });
            };
            const l = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", c.current),
                (c.current = u),
                t.addEventListener("click", c.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", c.current);
          o.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", c.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Qr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Y(e),
    o = r.useRef(!1);
  return (
    r.useEffect(() => {
      const c = (a) => {
        a.target &&
          !o.current &&
          io(Yr, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", c),
        () => t.removeEventListener("focusin", c)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function An() {
  const e = new CustomEvent(Vt);
  document.dispatchEvent(e);
}
function io(e, t, n, { discrete: o }) {
  const c = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && c.addEventListener(e, t, { once: !0 }),
    o ? qt(c, a) : c.dispatchEvent(a);
}
const _t = "focusScope.autoFocusOnMount",
  It = "focusScope.autoFocusOnUnmount",
  kn = { bubbles: !1, cancelable: !0 },
  Jt = r.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: c,
        onUnmountAutoFocus: a,
        ...s
      } = e,
      [i, l] = r.useState(null),
      u = Y(c),
      d = Y(a),
      f = r.useRef(null),
      b = H(t, (p) => l(p)),
      m = r.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    r.useEffect(() => {
      if (o) {
        let p = function (g) {
            if (m.paused || !i) return;
            const x = g.target;
            i.contains(x) ? (f.current = x) : xe(f.current, { select: !0 });
          },
          h = function (g) {
            if (m.paused || !i) return;
            const x = g.relatedTarget;
            x !== null && (i.contains(x) || xe(f.current, { select: !0 }));
          },
          $ = function (g) {
            if (document.activeElement === document.body)
              for (const E of g) E.removedNodes.length > 0 && xe(i);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", h);
        const w = new MutationObserver($);
        return (
          i && w.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", h),
              w.disconnect();
          }
        );
      }
    }, [o, i, m.paused]),
      r.useEffect(() => {
        if (i) {
          _n.add(m);
          const p = document.activeElement;
          if (!i.contains(p)) {
            const $ = new CustomEvent(_t, kn);
            i.addEventListener(_t, u),
              i.dispatchEvent($),
              $.defaultPrevented ||
                (Jr(rc(lo(i)), { select: !0 }),
                document.activeElement === p && xe(i));
          }
          return () => {
            i.removeEventListener(_t, u),
              setTimeout(() => {
                const $ = new CustomEvent(It, kn);
                i.addEventListener(It, d),
                  i.dispatchEvent($),
                  $.defaultPrevented || xe(p ?? document.body, { select: !0 }),
                  i.removeEventListener(It, d),
                  _n.remove(m);
              }, 0);
          };
        }
      }, [i, u, d, m]);
    const v = r.useCallback(
      (p) => {
        if ((!n && !o) || m.paused) return;
        const h = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          $ = document.activeElement;
        if (h && $) {
          const w = p.currentTarget,
            [g, x] = ec(w);
          g && x
            ? !p.shiftKey && $ === x
              ? (p.preventDefault(), n && xe(g, { select: !0 }))
              : p.shiftKey &&
                $ === g &&
                (p.preventDefault(), n && xe(x, { select: !0 }))
            : $ === w && p.preventDefault();
        }
      },
      [n, o, m.paused],
    );
    return r.createElement(
      j.div,
      C({ tabIndex: -1 }, s, { ref: b, onKeyDown: v }),
    );
  });
function Jr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((xe(o, { select: t }), document.activeElement !== n)) return;
}
function ec(e) {
  const t = lo(e),
    n = On(t, e),
    o = On(t.reverse(), e);
  return [n, o];
}
function lo(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const c = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || c
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function On(e, t) {
  for (const n of e) if (!tc(n, { upTo: t })) return n;
}
function tc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function nc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && nc(e) && t && e.select();
  }
}
const _n = oc();
function oc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = In(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = In(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function In(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function rc(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Rt = r.forwardRef((e, t) => {
  var n;
  const {
    container: o = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...c
  } = e;
  return o
    ? Er.createPortal(r.createElement(j.div, C({}, c, { ref: t })), o)
    : null;
});
let Dt = 0;
function en() {
  r.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Dn(),
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Dn(),
      ),
      Dt++,
      () => {
        Dt === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((o) => o.remove()),
          Dt--;
      }
    );
  }, []);
}
function Dn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var ie = function () {
  return (
    (ie =
      Object.assign ||
      function (t) {
        for (var n, o = 1, c = arguments.length; o < c; o++) {
          n = arguments[o];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    ie.apply(this, arguments)
  );
};
function uo(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[c]) &&
        (n[o[c]] = e[o[c]]);
  return n;
}
function cc(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, c = t.length, a; o < c; o++)
      (a || !(o in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, o)), (a[o] = t[o]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var ht = "right-scroll-bar-position",
  gt = "width-before-scroll-bar",
  ac = "with-scroll-bars-hidden",
  sc = "--removed-body-scroll-bar-size";
function ic(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function lc(e, t) {
  var n = r.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var c = n.value;
          c !== o && ((n.value = o), n.callback(o, c));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function uc(e, t) {
  return lc(t || null, function (n) {
    return e.forEach(function (o) {
      return ic(o, n);
    });
  });
}
function dc(e) {
  return e;
}
function fc(e, t) {
  t === void 0 && (t = dc);
  var n = [],
    o = !1,
    c = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var s = t(a, o);
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (o = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(a);
        }
        n = {
          push: function (i) {
            return a(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        o = !0;
        var s = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(a), (s = n);
        }
        var l = function () {
            var d = s;
            (s = []), d.forEach(a);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (d) {
              s.push(d), u();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return c;
}
function pc(e) {
  e === void 0 && (e = {});
  var t = fc(null);
  return (t.options = ie({ async: !0, ssr: !1 }, e)), t;
}
var fo = function (e) {
  var t = e.sideCar,
    n = uo(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return r.createElement(o, ie({}, n));
};
fo.isSideCarExport = !0;
function mc(e, t) {
  return e.useMedium(t), fo;
}
var po = pc(),
  Nt = function () {},
  Tt = r.forwardRef(function (e, t) {
    var n = r.useRef(null),
      o = r.useState({
        onScrollCapture: Nt,
        onWheelCapture: Nt,
        onTouchMoveCapture: Nt,
      }),
      c = o[0],
      a = o[1],
      s = e.forwardProps,
      i = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      b = e.sideCar,
      m = e.noIsolation,
      v = e.inert,
      p = e.allowPinchZoom,
      h = e.as,
      $ = h === void 0 ? "div" : h,
      w = uo(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      g = b,
      x = uc([n, t]),
      E = ie(ie({}, w), c);
    return r.createElement(
      r.Fragment,
      null,
      d &&
        r.createElement(g, {
          sideCar: po,
          removeScrollBar: u,
          shards: f,
          noIsolation: m,
          inert: v,
          setCallbacks: a,
          allowPinchZoom: !!p,
          lockRef: n,
        }),
      s
        ? r.cloneElement(r.Children.only(i), ie(ie({}, E), { ref: x }))
        : r.createElement($, ie({}, E, { className: l, ref: x }), i),
    );
  });
Tt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Tt.classNames = { fullWidth: gt, zeroRight: ht };
var vc = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function hc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vc();
  return t && e.setAttribute("nonce", t), e;
}
function gc(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function bc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $c = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = hc()) && (gc(t, n), bc(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  wc = function () {
    var e = $c();
    return function (t, n) {
      r.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  mo = function () {
    var e = wc(),
      t = function (n) {
        var o = n.styles,
          c = n.dynamic;
        return e(o, c), null;
      };
    return t;
  },
  xc = { left: 0, top: 0, right: 0, gap: 0 },
  Mt = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  yc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      c = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Mt(n), Mt(o), Mt(c)];
  },
  Ec = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return xc;
    var t = yc(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    };
  },
  Cc = mo(),
  Pc = function (e, t, n, o) {
    var c = e.left,
      a = e.top,
      s = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          ac,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  c,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ht,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          gt,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(ht, " .")
        .concat(
          ht,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(gt, " .")
        .concat(
          gt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body {
    `,
        )
        .concat(sc, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  Rc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      c = o === void 0 ? "margin" : o,
      a = r.useMemo(
        function () {
          return Ec(c);
        },
        [c],
      );
    return r.createElement(Cc, { styles: Pc(a, !t, c, n ? "" : "!important") });
  },
  Bt = !1;
if (typeof window < "u")
  try {
    var dt = Object.defineProperty({}, "passive", {
      get: function () {
        return (Bt = !0), !0;
      },
    });
    window.addEventListener("test", dt, dt),
      window.removeEventListener("test", dt, dt);
  } catch {
    Bt = !1;
  }
var ke = Bt ? { passive: !1 } : !1,
  Tc = function (e) {
    return e.tagName === "TEXTAREA";
  },
  vo = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Tc(e) && n[t] === "visible")
    );
  },
  Sc = function (e) {
    return vo(e, "overflowY");
  },
  Ac = function (e) {
    return vo(e, "overflowX");
  },
  Nn = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = ho(e, n);
      if (o) {
        var c = go(e, n),
          a = c[1],
          s = c[2];
        if (a > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  kc = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  Oc = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  ho = function (e, t) {
    return e === "v" ? Sc(t) : Ac(t);
  },
  go = function (e, t) {
    return e === "v" ? kc(t) : Oc(t);
  },
  _c = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ic = function (e, t, n, o, c) {
    var a = _c(e, window.getComputedStyle(t).direction),
      s = a * o,
      i = n.target,
      l = t.contains(i),
      u = !1,
      d = s > 0,
      f = 0,
      b = 0;
    do {
      var m = go(e, i),
        v = m[0],
        p = m[1],
        h = m[2],
        $ = p - h - a * v;
      (v || $) && ho(e, i) && ((f += $), (b += v)), (i = i.parentNode);
    } while ((!l && i !== document.body) || (l && (t.contains(i) || t === i)));
    return (
      ((d && ((c && f === 0) || (!c && s > f))) ||
        (!d && ((c && b === 0) || (!c && -s > b)))) &&
        (u = !0),
      u
    );
  },
  ft = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Mn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  jn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Dc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Nc = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Mc = 0,
  Oe = [];
function jc(e) {
  var t = r.useRef([]),
    n = r.useRef([0, 0]),
    o = r.useRef(),
    c = r.useState(Mc++)[0],
    a = r.useState(function () {
      return mo();
    })[0],
    s = r.useRef(e);
  r.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    r.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(c));
          var p = cc([e.lockRef.current], (e.shards || []).map(jn), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(c));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(c)),
                p.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(c));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var i = r.useCallback(function (p, h) {
      if ("touches" in p && p.touches.length === 2)
        return !s.current.allowPinchZoom;
      var $ = ft(p),
        w = n.current,
        g = "deltaX" in p ? p.deltaX : w[0] - $[0],
        x = "deltaY" in p ? p.deltaY : w[1] - $[1],
        E,
        P = p.target,
        R = Math.abs(g) > Math.abs(x) ? "h" : "v";
      if ("touches" in p && R === "h" && P.type === "range") return !1;
      var T = Nn(R, P);
      if (!T) return !0;
      if ((T ? (E = R) : ((E = R === "v" ? "h" : "v"), (T = Nn(R, P))), !T))
        return !1;
      if (
        (!o.current && "changedTouches" in p && (g || x) && (o.current = E), !E)
      )
        return !0;
      var S = o.current || E;
      return Ic(S, h, p, S === "h" ? g : x, !0);
    }, []),
    l = r.useCallback(function (p) {
      var h = p;
      if (!(!Oe.length || Oe[Oe.length - 1] !== a)) {
        var $ = "deltaY" in h ? Mn(h) : ft(h),
          w = t.current.filter(function (E) {
            return E.name === h.type && E.target === h.target && Dc(E.delta, $);
          })[0];
        if (w && w.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!w) {
          var g = (s.current.shards || [])
              .map(jn)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(h.target);
              }),
            x = g.length > 0 ? i(h, g[0]) : !s.current.noIsolation;
          x && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    u = r.useCallback(function (p, h, $, w) {
      var g = { name: p, delta: h, target: $, should: w };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== g;
          });
        }, 1);
    }, []),
    d = r.useCallback(function (p) {
      (n.current = ft(p)), (o.current = void 0);
    }, []),
    f = r.useCallback(function (p) {
      u(p.type, Mn(p), p.target, i(p, e.lockRef.current));
    }, []),
    b = r.useCallback(function (p) {
      u(p.type, ft(p), p.target, i(p, e.lockRef.current));
    }, []);
  r.useEffect(function () {
    return (
      Oe.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: b,
      }),
      document.addEventListener("wheel", l, ke),
      document.addEventListener("touchmove", l, ke),
      document.addEventListener("touchstart", d, ke),
      function () {
        (Oe = Oe.filter(function (p) {
          return p !== a;
        })),
          document.removeEventListener("wheel", l, ke),
          document.removeEventListener("touchmove", l, ke),
          document.removeEventListener("touchstart", d, ke);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    v = e.inert;
  return r.createElement(
    r.Fragment,
    null,
    v ? r.createElement(a, { styles: Nc(c) }) : null,
    m ? r.createElement(Rc, { gapMode: "margin" }) : null,
  );
}
const Lc = mc(po, jc);
var bo = r.forwardRef(function (e, t) {
  return r.createElement(Tt, ie({}, e, { ref: t, sideCar: Lc }));
});
bo.classNames = Tt.classNames;
const tn = bo;
var Fc = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  _e = new WeakMap(),
  pt = new WeakMap(),
  mt = {},
  jt = 0,
  nn = function (e, t, n) {
    t === void 0 && (t = Fc(e)), n === void 0 && (n = "data-aria-hidden");
    var o = Array.isArray(e) ? e : [e];
    mt[n] || (mt[n] = new WeakMap());
    var c = mt[n],
      a = [],
      s = new Set(),
      i = function (u) {
        !u || s.has(u) || (s.add(u), i(u.parentNode));
      };
    o.forEach(i);
    var l = function (u) {
      !u ||
        o.indexOf(u) >= 0 ||
        Array.prototype.forEach.call(u.children, function (d) {
          if (s.has(d)) l(d);
          else {
            var f = d.getAttribute("aria-hidden"),
              b = f !== null && f !== "false",
              m = (_e.get(d) || 0) + 1,
              v = (c.get(d) || 0) + 1;
            _e.set(d, m),
              c.set(d, v),
              a.push(d),
              m === 1 && b && pt.set(d, !0),
              v === 1 && d.setAttribute(n, "true"),
              b || d.setAttribute("aria-hidden", "true");
          }
        });
    };
    return (
      l(t),
      s.clear(),
      jt++,
      function () {
        a.forEach(function (u) {
          var d = _e.get(u) - 1,
            f = c.get(u) - 1;
          _e.set(u, d),
            c.set(u, f),
            d || (pt.has(u) || u.removeAttribute("aria-hidden"), pt.delete(u)),
            f || u.removeAttribute(n);
        }),
          jt--,
          jt ||
            ((_e = new WeakMap()),
            (_e = new WeakMap()),
            (pt = new WeakMap()),
            (mt = {}));
      }
    );
  };
const $o = "Dialog",
  [wo, eu] = oe($o),
  [zc, pe] = wo($o),
  qc = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: c,
        onOpenChange: a,
        modal: s = !0,
      } = e,
      i = r.useRef(null),
      l = r.useRef(null),
      [u = !1, d] = ue({ prop: o, defaultProp: c, onChange: a });
    return r.createElement(
      zc,
      {
        scope: t,
        triggerRef: i,
        contentRef: l,
        contentId: re(),
        titleId: re(),
        descriptionId: re(),
        open: u,
        onOpenChange: d,
        onOpenToggle: r.useCallback(() => d((f) => !f), [d]),
        modal: s,
      },
      n,
    );
  },
  Vc = "DialogTrigger",
  Bc = r.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      c = pe(Vc, n),
      a = H(t, c.triggerRef);
    return r.createElement(
      j.button,
      C(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": c.open,
          "aria-controls": c.contentId,
          "data-state": on(c.open),
        },
        o,
        { ref: a, onClick: A(e.onClick, c.onOpenToggle) },
      ),
    );
  }),
  xo = "DialogPortal",
  [Hc, yo] = wo(xo, { forceMount: void 0 }),
  Wc = (e) => {
    const { __scopeDialog: t, forceMount: n, children: o, container: c } = e,
      a = pe(xo, t);
    return r.createElement(
      Hc,
      { scope: t, forceMount: n },
      r.Children.map(o, (s) =>
        r.createElement(
          se,
          { present: n || a.open },
          r.createElement(Rt, { asChild: !0, container: c }, s),
        ),
      ),
    );
  },
  Ht = "DialogOverlay",
  Kc = r.forwardRef((e, t) => {
    const n = yo(Ht, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...c } = e,
      a = pe(Ht, e.__scopeDialog);
    return a.modal
      ? r.createElement(
          se,
          { present: o || a.open },
          r.createElement(Uc, C({}, c, { ref: t })),
        )
      : null;
  }),
  Uc = r.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      c = pe(Ht, n);
    return r.createElement(
      tn,
      { as: Pe, allowPinchZoom: !0, shards: [c.contentRef] },
      r.createElement(
        j.div,
        C({ "data-state": on(c.open) }, o, {
          ref: t,
          style: { pointerEvents: "auto", ...o.style },
        }),
      ),
    );
  }),
  Ge = "DialogContent",
  Gc = r.forwardRef((e, t) => {
    const n = yo(Ge, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...c } = e,
      a = pe(Ge, e.__scopeDialog);
    return r.createElement(
      se,
      { present: o || a.open },
      a.modal
        ? r.createElement(Yc, C({}, c, { ref: t }))
        : r.createElement(Xc, C({}, c, { ref: t })),
    );
  }),
  Yc = r.forwardRef((e, t) => {
    const n = pe(Ge, e.__scopeDialog),
      o = r.useRef(null),
      c = H(t, n.contentRef, o);
    return (
      r.useEffect(() => {
        const a = o.current;
        if (a) return nn(a);
      }, []),
      r.createElement(
        Eo,
        C({}, e, {
          ref: c,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
            var s;
            a.preventDefault(),
              (s = n.triggerRef.current) === null || s === void 0 || s.focus();
          }),
          onPointerDownOutside: A(e.onPointerDownOutside, (a) => {
            const s = a.detail.originalEvent,
              i = s.button === 0 && s.ctrlKey === !0;
            (s.button === 2 || i) && a.preventDefault();
          }),
          onFocusOutside: A(e.onFocusOutside, (a) => a.preventDefault()),
        }),
      )
    );
  }),
  Xc = r.forwardRef((e, t) => {
    const n = pe(Ge, e.__scopeDialog),
      o = r.useRef(!1),
      c = r.useRef(!1);
    return r.createElement(
      Eo,
      C({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s;
          if (
            ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a),
            !a.defaultPrevented)
          ) {
            var i;
            o.current ||
              (i = n.triggerRef.current) === null ||
              i === void 0 ||
              i.focus(),
              a.preventDefault();
          }
          (o.current = !1), (c.current = !1);
        },
        onInteractOutside: (a) => {
          var s, i;
          (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a),
            a.defaultPrevented ||
              ((o.current = !0),
              a.detail.originalEvent.type === "pointerdown" &&
                (c.current = !0));
          const l = a.target;
          ((i = n.triggerRef.current) === null || i === void 0
            ? void 0
            : i.contains(l)) && a.preventDefault(),
            a.detail.originalEvent.type === "focusin" &&
              c.current &&
              a.preventDefault();
        },
      }),
    );
  }),
  Eo = r.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: c,
        onCloseAutoFocus: a,
        ...s
      } = e,
      i = pe(Ge, n),
      l = r.useRef(null),
      u = H(t, l);
    return (
      en(),
      r.createElement(
        r.Fragment,
        null,
        r.createElement(
          Jt,
          {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: c,
            onUnmountAutoFocus: a,
          },
          r.createElement(
            et,
            C(
              {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": on(i.open),
              },
              s,
              { ref: u, onDismiss: () => i.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  }),
  Zc = "DialogTitle",
  Qc = r.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      c = pe(Zc, n);
    return r.createElement(j.h2, C({ id: c.titleId }, o, { ref: t }));
  });
const Jc = "DialogClose",
  ea = r.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      c = pe(Jc, n);
    return r.createElement(
      j.button,
      C({ type: "button" }, o, {
        ref: t,
        onClick: A(e.onClick, () => c.onOpenChange(!1)),
      }),
    );
  });
function on(e) {
  return e ? "open" : "closed";
}
const ta = qc,
  na = Bc,
  oa = Kc,
  ra = Gc,
  ca = ea,
  aa = ["top", "right", "bottom", "left"],
  le = Math.min,
  J = Math.max,
  wt = Math.round,
  vt = Math.floor,
  Ee = (e) => ({ x: e, y: e }),
  sa = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ia = { start: "end", end: "start" };
function Wt(e, t, n) {
  return J(e, le(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function be(e) {
  return e.split("-")[0];
}
function Fe(e) {
  return e.split("-")[1];
}
function rn(e) {
  return e === "x" ? "y" : "x";
}
function cn(e) {
  return e === "y" ? "height" : "width";
}
function ze(e) {
  return ["top", "bottom"].includes(be(e)) ? "y" : "x";
}
function an(e) {
  return rn(ze(e));
}
function la(e, t, n) {
  n === void 0 && (n = !1);
  const o = Fe(e),
    c = an(e),
    a = cn(c);
  let s =
    c === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return t.reference[a] > t.floating[a] && (s = xt(s)), [s, xt(s)];
}
function ua(e) {
  const t = xt(e);
  return [Kt(e), t, Kt(t)];
}
function Kt(e) {
  return e.replace(/start|end/g, (t) => ia[t]);
}
function da(e, t, n) {
  const o = ["left", "right"],
    c = ["right", "left"],
    a = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? c : o) : t ? o : c;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function fa(e, t, n, o) {
  const c = Fe(e);
  let a = da(be(e), n === "start", o);
  return (
    c && ((a = a.map((s) => s + "-" + c)), t && (a = a.concat(a.map(Kt)))), a
  );
}
function xt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sa[t]);
}
function pa(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Co(e) {
  return typeof e != "number"
    ? pa(e)
    : { top: e, right: e, bottom: e, left: e };
}
function yt(e) {
  const { x: t, y: n, width: o, height: c } = e;
  return {
    width: o,
    height: c,
    top: n,
    left: t,
    right: t + o,
    bottom: n + c,
    x: t,
    y: n,
  };
}
function Ln(e, t, n) {
  let { reference: o, floating: c } = e;
  const a = ze(t),
    s = an(t),
    i = cn(s),
    l = be(t),
    u = a === "y",
    d = o.x + o.width / 2 - c.width / 2,
    f = o.y + o.height / 2 - c.height / 2,
    b = o[i] / 2 - c[i] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: d, y: o.y - c.height };
      break;
    case "bottom":
      m = { x: d, y: o.y + o.height };
      break;
    case "right":
      m = { x: o.x + o.width, y: f };
      break;
    case "left":
      m = { x: o.x - c.width, y: f };
      break;
    default:
      m = { x: o.x, y: o.y };
  }
  switch (Fe(t)) {
    case "start":
      m[s] -= b * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += b * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const ma = async (e, t, n) => {
  const {
      placement: o = "bottom",
      strategy: c = "absolute",
      middleware: a = [],
      platform: s,
    } = n,
    i = a.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: c }),
    { x: d, y: f } = Ln(u, o, l),
    b = o,
    m = {},
    v = 0;
  for (let p = 0; p < i.length; p++) {
    const { name: h, fn: $ } = i[p],
      {
        x: w,
        y: g,
        data: x,
        reset: E,
      } = await $({
        x: d,
        y: f,
        initialPlacement: o,
        placement: b,
        strategy: c,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = w ?? d),
      (f = g ?? f),
      (m = { ...m, [h]: { ...m[h], ...x } }),
      E &&
        v <= 50 &&
        (v++,
        typeof E == "object" &&
          (E.placement && (b = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: c,
                  })
                : E.rects),
          ({ x: d, y: f } = Ln(u, b, l))),
        (p = -1));
  }
  return { x: d, y: f, placement: b, strategy: c, middlewareData: m };
};
async function Ye(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: c, platform: a, rects: s, elements: i, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: b = !1,
      padding: m = 0,
    } = ge(t, e),
    v = Co(m),
    h = i[b ? (f === "floating" ? "reference" : "floating") : f],
    $ = yt(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null ||
          n
            ? h
            : h.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(i.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    w =
      f === "floating"
        ? { x: o, y: c, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(i.floating)),
    x = (await (a.isElement == null ? void 0 : a.isElement(g)))
      ? (await (a.getScale == null ? void 0 : a.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = yt(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: w,
            offsetParent: g,
            strategy: l,
          })
        : w,
    );
  return {
    top: ($.top - E.top + v.top) / x.y,
    bottom: (E.bottom - $.bottom + v.bottom) / x.y,
    left: ($.left - E.left + v.left) / x.x,
    right: (E.right - $.right + v.right) / x.x,
  };
}
const va = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: c,
          rects: a,
          platform: s,
          elements: i,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = ge(e, t) || {};
      if (u == null) return {};
      const f = Co(d),
        b = { x: n, y: o },
        m = an(c),
        v = cn(m),
        p = await s.getDimensions(u),
        h = m === "y",
        $ = h ? "top" : "left",
        w = h ? "bottom" : "right",
        g = h ? "clientHeight" : "clientWidth",
        x = a.reference[v] + a.reference[m] - b[m] - a.floating[v],
        E = b[m] - a.reference[m],
        P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let R = P ? P[g] : 0;
      (!R || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
        (R = i.floating[g] || a.floating[v]);
      const T = x / 2 - E / 2,
        S = R / 2 - p[v] / 2 - 1,
        _ = le(f[$], S),
        L = le(f[w], S),
        D = _,
        W = R - p[v] - L,
        M = R / 2 - p[v] / 2 + T,
        I = Wt(D, M, W),
        q =
          !l.arrow &&
          Fe(c) != null &&
          M !== I &&
          a.reference[v] / 2 - (M < D ? _ : L) - p[v] / 2 < 0,
        O = q ? (M < D ? M - D : M - W) : 0;
      return {
        [m]: b[m] + O,
        data: {
          [m]: I,
          centerOffset: M - I - O,
          ...(q && { alignmentOffset: O }),
        },
        reset: q,
      };
    },
  }),
  ha = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: c,
              middlewareData: a,
              rects: s,
              initialPlacement: i,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: b,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: p = !0,
              ...h
            } = ge(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const $ = be(c),
            w = be(i) === i,
            g = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            x = b || (w || !p ? [xt(i)] : ua(i));
          !b && v !== "none" && x.push(...fa(i, p, v, g));
          const E = [i, ...x],
            P = await Ye(t, h),
            R = [];
          let T = ((o = a.flip) == null ? void 0 : o.overflows) || [];
          if ((d && R.push(P[$]), f)) {
            const D = la(c, s, g);
            R.push(P[D[0]], P[D[1]]);
          }
          if (
            ((T = [...T, { placement: c, overflows: R }]),
            !R.every((D) => D <= 0))
          ) {
            var S, _;
            const D = (((S = a.flip) == null ? void 0 : S.index) || 0) + 1,
              W = E[D];
            if (W)
              return {
                data: { index: D, overflows: T },
                reset: { placement: W },
              };
            let M =
              (_ = T.filter((I) => I.overflows[0] <= 0).sort(
                (I, q) => I.overflows[1] - q.overflows[1],
              )[0]) == null
                ? void 0
                : _.placement;
            if (!M)
              switch (m) {
                case "bestFit": {
                  var L;
                  const I =
                    (L = T.map((q) => [
                      q.placement,
                      q.overflows
                        .filter((O) => O > 0)
                        .reduce((O, X) => O + X, 0),
                    ]).sort((q, O) => q[1] - O[1])[0]) == null
                      ? void 0
                      : L[0];
                  I && (M = I);
                  break;
                }
                case "initialPlacement":
                  M = i;
                  break;
              }
            if (c !== M) return { reset: { placement: M } };
          }
          return {};
        },
      }
    );
  };
function Fn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function zn(e) {
  return aa.some((t) => e[t] >= 0);
}
const ga = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: o = "referenceHidden", ...c } = ge(e, t);
        switch (o) {
          case "referenceHidden": {
            const a = await Ye(t, { ...c, elementContext: "reference" }),
              s = Fn(a, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: zn(s) },
            };
          }
          case "escaped": {
            const a = await Ye(t, { ...c, altBoundary: !0 }),
              s = Fn(a, n.floating);
            return { data: { escapedOffsets: s, escaped: zn(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function ba(e, t) {
  const { placement: n, platform: o, elements: c } = e,
    a = await (o.isRTL == null ? void 0 : o.isRTL(c.floating)),
    s = be(n),
    i = Fe(n),
    l = ze(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    d = a && l ? -1 : 1,
    f = ge(t, e);
  let {
    mainAxis: b,
    crossAxis: m,
    alignmentAxis: v,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    i && typeof v == "number" && (m = i === "end" ? v * -1 : v),
    l ? { x: m * d, y: b * u } : { x: b * u, y: m * d }
  );
}
const $a = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: c, y: a, placement: s, middlewareData: i } = t,
            l = await ba(t, e);
          return s === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: c + l.x, y: a + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  wa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: c } = t,
            {
              mainAxis: a = !0,
              crossAxis: s = !1,
              limiter: i = {
                fn: (h) => {
                  let { x: $, y: w } = h;
                  return { x: $, y: w };
                },
              },
              ...l
            } = ge(e, t),
            u = { x: n, y: o },
            d = await Ye(t, l),
            f = ze(be(c)),
            b = rn(f);
          let m = u[b],
            v = u[f];
          if (a) {
            const h = b === "y" ? "top" : "left",
              $ = b === "y" ? "bottom" : "right",
              w = m + d[h],
              g = m - d[$];
            m = Wt(w, m, g);
          }
          if (s) {
            const h = f === "y" ? "top" : "left",
              $ = f === "y" ? "bottom" : "right",
              w = v + d[h],
              g = v - d[$];
            v = Wt(w, v, g);
          }
          const p = i.fn({ ...t, [b]: m, [f]: v });
          return { ...p, data: { x: p.x - n, y: p.y - o } };
        },
      }
    );
  },
  xa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: c, rects: a, middlewareData: s } = t,
            { offset: i = 0, mainAxis: l = !0, crossAxis: u = !0 } = ge(e, t),
            d = { x: n, y: o },
            f = ze(c),
            b = rn(f);
          let m = d[b],
            v = d[f];
          const p = ge(i, t),
            h =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const g = b === "y" ? "height" : "width",
              x = a.reference[b] - a.floating[g] + h.mainAxis,
              E = a.reference[b] + a.reference[g] - h.mainAxis;
            m < x ? (m = x) : m > E && (m = E);
          }
          if (u) {
            var $, w;
            const g = b === "y" ? "width" : "height",
              x = ["top", "left"].includes(be(c)),
              E =
                a.reference[f] -
                a.floating[g] +
                ((x && (($ = s.offset) == null ? void 0 : $[f])) || 0) +
                (x ? 0 : h.crossAxis),
              P =
                a.reference[f] +
                a.reference[g] +
                (x ? 0 : ((w = s.offset) == null ? void 0 : w[f]) || 0) -
                (x ? h.crossAxis : 0);
            v < E ? (v = E) : v > P && (v = P);
          }
          return { [b]: m, [f]: v };
        },
      }
    );
  },
  ya = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: o, platform: c, elements: a } = t,
            { apply: s = () => {}, ...i } = ge(e, t),
            l = await Ye(t, i),
            u = be(n),
            d = Fe(n),
            f = ze(n) === "y",
            { width: b, height: m } = o.floating;
          let v, p;
          u === "top" || u === "bottom"
            ? ((v = u),
              (p =
                d ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = u), (v = d === "end" ? "top" : "bottom"));
          const h = m - l.top - l.bottom,
            $ = b - l.left - l.right,
            w = le(m - l[v], h),
            g = le(b - l[p], $),
            x = !t.middlewareData.shift;
          let E = w,
            P = g;
          if (
            (f ? (P = d || x ? le(g, $) : $) : (E = d || x ? le(w, h) : h),
            x && !d)
          ) {
            const T = J(l.left, 0),
              S = J(l.right, 0),
              _ = J(l.top, 0),
              L = J(l.bottom, 0);
            f
              ? (P = b - 2 * (T !== 0 || S !== 0 ? T + S : J(l.left, l.right)))
              : (E = m - 2 * (_ !== 0 || L !== 0 ? _ + L : J(l.top, l.bottom)));
          }
          await s({ ...t, availableWidth: P, availableHeight: E });
          const R = await c.getDimensions(a.floating);
          return b !== R.width || m !== R.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function qe(e) {
  return Po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function $e(e) {
  var t;
  return (t = (Po(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Po(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function de(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function fe(e) {
  return e instanceof HTMLElement || e instanceof ee(e).HTMLElement;
}
function qn(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function tt(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: c } = ae(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !["inline", "contents"].includes(c)
  );
}
function Ea(e) {
  return ["table", "td", "th"].includes(qe(e));
}
function sn(e) {
  const t = ln(),
    n = ae(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o),
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o),
    )
  );
}
function Ca(e) {
  let t = Ce(e);
  for (; fe(t) && !je(t); ) {
    if (sn(t)) return t;
    t = Ce(t);
  }
  return null;
}
function ln() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(qe(e));
}
function ae(e) {
  return ee(e).getComputedStyle(e);
}
function St(e) {
  return de(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ce(e) {
  if (qe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (qn(e) && e.host) || $e(e);
  return qn(t) ? t.host : t;
}
function Ro(e) {
  const t = Ce(e);
  return je(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : fe(t) && tt(t)
      ? t
      : Ro(t);
}
function Xe(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const c = Ro(e),
    a = c === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = ee(c);
  return a
    ? t.concat(
        s,
        s.visualViewport || [],
        tt(c) ? c : [],
        s.frameElement && n ? Xe(s.frameElement) : [],
      )
    : t.concat(c, Xe(c, [], n));
}
function To(e) {
  const t = ae(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const c = fe(e),
    a = c ? e.offsetWidth : n,
    s = c ? e.offsetHeight : o,
    i = wt(n) !== a || wt(o) !== s;
  return i && ((n = a), (o = s)), { width: n, height: o, $: i };
}
function un(e) {
  return de(e) ? e : e.contextElement;
}
function Ne(e) {
  const t = un(e);
  if (!fe(t)) return Ee(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: c, $: a } = To(t);
  let s = (a ? wt(n.width) : n.width) / o,
    i = (a ? wt(n.height) : n.height) / c;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: s, y: i }
  );
}
const Pa = Ee(0);
function So(e) {
  const t = ee(e);
  return !ln() || !t.visualViewport
    ? Pa
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ra(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ee(e)) ? !1 : t;
}
function Re(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect(),
    a = un(e);
  let s = Ee(1);
  t && (o ? de(o) && (s = Ne(o)) : (s = Ne(e)));
  const i = Ra(a, n, o) ? So(a) : Ee(0);
  let l = (c.left + i.x) / s.x,
    u = (c.top + i.y) / s.y,
    d = c.width / s.x,
    f = c.height / s.y;
  if (a) {
    const b = ee(a),
      m = o && de(o) ? ee(o) : o;
    let v = b,
      p = v.frameElement;
    for (; p && o && m !== v; ) {
      const h = Ne(p),
        $ = p.getBoundingClientRect(),
        w = ae(p),
        g = $.left + (p.clientLeft + parseFloat(w.paddingLeft)) * h.x,
        x = $.top + (p.clientTop + parseFloat(w.paddingTop)) * h.y;
      (l *= h.x),
        (u *= h.y),
        (d *= h.x),
        (f *= h.y),
        (l += g),
        (u += x),
        (v = ee(p)),
        (p = v.frameElement);
    }
  }
  return yt({ width: d, height: f, x: l, y: u });
}
const Ta = [":popover-open", ":modal"];
function dn(e) {
  return Ta.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Sa(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: c } = e;
  const a = c === "fixed",
    s = $e(o),
    i = t ? dn(t.floating) : !1;
  if (o === s || (i && a)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Ee(1);
  const d = Ee(0),
    f = fe(o);
  if (
    (f || (!f && !a)) &&
    ((qe(o) !== "body" || tt(s)) && (l = St(o)), fe(o))
  ) {
    const b = Re(o);
    (u = Ne(o)), (d.x = b.x + o.clientLeft), (d.y = b.y + o.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y,
  };
}
function Aa(e) {
  return Array.from(e.getClientRects());
}
function Ao(e) {
  return Re($e(e)).left + St(e).scrollLeft;
}
function ka(e) {
  const t = $e(e),
    n = St(e),
    o = e.ownerDocument.body,
    c = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    a = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Ao(e);
  const i = -n.scrollTop;
  return (
    ae(o).direction === "rtl" && (s += J(t.clientWidth, o.clientWidth) - c),
    { width: c, height: a, x: s, y: i }
  );
}
function Oa(e, t) {
  const n = ee(e),
    o = $e(e),
    c = n.visualViewport;
  let a = o.clientWidth,
    s = o.clientHeight,
    i = 0,
    l = 0;
  if (c) {
    (a = c.width), (s = c.height);
    const u = ln();
    (!u || (u && t === "fixed")) && ((i = c.offsetLeft), (l = c.offsetTop));
  }
  return { width: a, height: s, x: i, y: l };
}
function _a(e, t) {
  const n = Re(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    c = n.left + e.clientLeft,
    a = fe(e) ? Ne(e) : Ee(1),
    s = e.clientWidth * a.x,
    i = e.clientHeight * a.y,
    l = c * a.x,
    u = o * a.y;
  return { width: s, height: i, x: l, y: u };
}
function Vn(e, t, n) {
  let o;
  if (t === "viewport") o = Oa(e, n);
  else if (t === "document") o = ka($e(e));
  else if (de(t)) o = _a(t, n);
  else {
    const c = So(e);
    o = { ...t, x: t.x - c.x, y: t.y - c.y };
  }
  return yt(o);
}
function ko(e, t) {
  const n = Ce(e);
  return n === t || !de(n) || je(n)
    ? !1
    : ae(n).position === "fixed" || ko(n, t);
}
function Ia(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = Xe(e, [], !1).filter((i) => de(i) && qe(i) !== "body"),
    c = null;
  const a = ae(e).position === "fixed";
  let s = a ? Ce(e) : e;
  for (; de(s) && !je(s); ) {
    const i = ae(s),
      l = sn(s);
    !l && i.position === "fixed" && (c = null),
      (
        a
          ? !l && !c
          : (!l &&
              i.position === "static" &&
              !!c &&
              ["absolute", "fixed"].includes(c.position)) ||
            (tt(s) && !l && ko(e, s))
      )
        ? (o = o.filter((d) => d !== s))
        : (c = i),
      (s = Ce(s));
  }
  return t.set(e, o), o;
}
function Da(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: c } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? dn(t)
          ? []
          : Ia(t, this._c)
        : [].concat(n)),
      o,
    ],
    i = s[0],
    l = s.reduce(
      (u, d) => {
        const f = Vn(t, d, c);
        return (
          (u.top = J(f.top, u.top)),
          (u.right = le(f.right, u.right)),
          (u.bottom = le(f.bottom, u.bottom)),
          (u.left = J(f.left, u.left)),
          u
        );
      },
      Vn(t, i, c),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Na(e) {
  const { width: t, height: n } = To(e);
  return { width: t, height: n };
}
function Ma(e, t, n) {
  const o = fe(t),
    c = $e(t),
    a = n === "fixed",
    s = Re(e, !0, a, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = Ee(0);
  if (o || (!o && !a))
    if (((qe(t) !== "body" || tt(c)) && (i = St(t)), o)) {
      const f = Re(t, !0, a, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else c && (l.x = Ao(c));
  const u = s.left + i.scrollLeft - l.x,
    d = s.top + i.scrollTop - l.y;
  return { x: u, y: d, width: s.width, height: s.height };
}
function Lt(e) {
  return ae(e).position === "static";
}
function Bn(e, t) {
  return !fe(e) || ae(e).position === "fixed"
    ? null
    : t
      ? t(e)
      : e.offsetParent;
}
function Oo(e, t) {
  const n = ee(e);
  if (dn(e)) return n;
  if (!fe(e)) {
    let c = Ce(e);
    for (; c && !je(c); ) {
      if (de(c) && !Lt(c)) return c;
      c = Ce(c);
    }
    return n;
  }
  let o = Bn(e, t);
  for (; o && Ea(o) && Lt(o); ) o = Bn(o, t);
  return o && je(o) && Lt(o) && !sn(o) ? n : o || Ca(e) || n;
}
const ja = async function (e) {
  const t = this.getOffsetParent || Oo,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: Ma(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function La(e) {
  return ae(e).direction === "rtl";
}
const Fa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sa,
  getDocumentElement: $e,
  getClippingRect: Da,
  getOffsetParent: Oo,
  getElementRects: ja,
  getClientRects: Aa,
  getDimensions: Na,
  getScale: Ne,
  isElement: de,
  isRTL: La,
};
function za(e, t) {
  let n = null,
    o;
  const c = $e(e);
  function a() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), (n = null);
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const { left: u, top: d, width: f, height: b } = e.getBoundingClientRect();
    if ((i || t(), !f || !b)) return;
    const m = vt(d),
      v = vt(c.clientWidth - (u + f)),
      p = vt(c.clientHeight - (d + b)),
      h = vt(u),
      w = {
        rootMargin: -m + "px " + -v + "px " + -p + "px " + -h + "px",
        threshold: J(0, le(1, l)) || 1,
      };
    let g = !0;
    function x(E) {
      const P = E[0].intersectionRatio;
      if (P !== l) {
        if (!g) return s();
        P
          ? s(!1, P)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(x, { ...w, root: c.ownerDocument });
    } catch {
      n = new IntersectionObserver(x, w);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function qa(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: c = !0,
      ancestorResize: a = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = o,
    u = un(e),
    d = c || a ? [...(u ? Xe(u) : []), ...Xe(t)] : [];
  d.forEach(($) => {
    c && $.addEventListener("scroll", n, { passive: !0 }),
      a && $.addEventListener("resize", n);
  });
  const f = u && i ? za(u, n) : null;
  let b = -1,
    m = null;
  s &&
    ((m = new ResizeObserver(($) => {
      let [w] = $;
      w &&
        w.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var g;
          (g = m) == null || g.observe(t);
        }))),
        n();
    })),
    u && !l && m.observe(u),
    m.observe(t));
  let v,
    p = l ? Re(e) : null;
  l && h();
  function h() {
    const $ = Re(e);
    p &&
      ($.x !== p.x ||
        $.y !== p.y ||
        $.width !== p.width ||
        $.height !== p.height) &&
      n(),
      (p = $),
      (v = requestAnimationFrame(h));
  }
  return (
    n(),
    () => {
      var $;
      d.forEach((w) => {
        c && w.removeEventListener("scroll", n),
          a && w.removeEventListener("resize", n);
      }),
        f == null || f(),
        ($ = m) == null || $.disconnect(),
        (m = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const Va = $a,
  Ba = wa,
  Ha = ha,
  Wa = ya,
  Ka = ga,
  Hn = va,
  Ua = xa,
  Ga = (e, t, n) => {
    const o = new Map(),
      c = { platform: Fa, ...n },
      a = { ...c.platform, _c: o };
    return ma(e, t, { ...c, platform: a });
  };
var bt = typeof document < "u" ? r.useLayoutEffect : r.useEffect;
function Et(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, o, c;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!Et(e[o], t[o])) return !1;
      return !0;
    }
    if (((c = Object.keys(e)), (n = c.length), n !== Object.keys(t).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, c[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const a = c[o];
      if (!(a === "_owner" && e.$$typeof) && !Et(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _o(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wn(e, t) {
  const n = _o(e);
  return Math.round(t * n) / n;
}
function Kn(e) {
  const t = r.useRef(e);
  return (
    bt(() => {
      t.current = e;
    }),
    t
  );
}
function Ya(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: c,
      elements: { reference: a, floating: s } = {},
      transform: i = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = r.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, m] = r.useState(o);
  Et(b, o) || m(o);
  const [v, p] = r.useState(null),
    [h, $] = r.useState(null),
    w = r.useCallback((O) => {
      O !== P.current && ((P.current = O), p(O));
    }, []),
    g = r.useCallback((O) => {
      O !== R.current && ((R.current = O), $(O));
    }, []),
    x = a || v,
    E = s || h,
    P = r.useRef(null),
    R = r.useRef(null),
    T = r.useRef(d),
    S = l != null,
    _ = Kn(l),
    L = Kn(c),
    D = r.useCallback(() => {
      if (!P.current || !R.current) return;
      const O = { placement: t, strategy: n, middleware: b };
      L.current && (O.platform = L.current),
        Ga(P.current, R.current, O).then((X) => {
          const U = { ...X, isPositioned: !0 };
          W.current &&
            !Et(T.current, U) &&
            ((T.current = U),
            Ct.flushSync(() => {
              f(U);
            }));
        });
    }, [b, t, n, L]);
  bt(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((O) => ({ ...O, isPositioned: !1 })));
  }, [u]);
  const W = r.useRef(!1);
  bt(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    bt(() => {
      if ((x && (P.current = x), E && (R.current = E), x && E)) {
        if (_.current) return _.current(x, E, D);
        D();
      }
    }, [x, E, D, _, S]);
  const M = r.useMemo(
      () => ({ reference: P, floating: R, setReference: w, setFloating: g }),
      [w, g],
    ),
    I = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
    q = r.useMemo(() => {
      const O = { position: n, left: 0, top: 0 };
      if (!I.floating) return O;
      const X = Wn(I.floating, d.x),
        U = Wn(I.floating, d.y);
      return i
        ? {
            ...O,
            transform: "translate(" + X + "px, " + U + "px)",
            ...(_o(I.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: X, top: U };
    }, [n, i, I.floating, d.x, d.y]);
  return r.useMemo(
    () => ({ ...d, update: D, refs: M, elements: I, floatingStyles: q }),
    [d, D, M, I, q],
  );
}
const Xa = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: c } = typeof e == "function" ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? Hn({ element: o.current, padding: c }).fn(n)
            : {}
          : o
            ? Hn({ element: o, padding: c }).fn(n)
            : {};
      },
    };
  },
  Za = (e, t) => ({ ...Va(e), options: [e, t] }),
  Qa = (e, t) => ({ ...Ba(e), options: [e, t] }),
  Ja = (e, t) => ({ ...Ua(e), options: [e, t] }),
  es = (e, t) => ({ ...Ha(e), options: [e, t] }),
  ts = (e, t) => ({ ...Wa(e), options: [e, t] }),
  ns = (e, t) => ({ ...Ka(e), options: [e, t] }),
  os = (e, t) => ({ ...Xa(e), options: [e, t] });
function Io(e) {
  const [t, n] = r.useState(void 0);
  return (
    ce(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const a = c[0];
          let s, i;
          if ("borderBoxSize" in a) {
            const l = a.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (i = u.blockSize);
          } else (s = e.offsetWidth), (i = e.offsetHeight);
          n({ width: s, height: i });
        });
        return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Do = "Popper",
  [No, Ve] = oe(Do),
  [rs, Mo] = No(Do),
  cs = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, c] = r.useState(null);
    return r.createElement(rs, { scope: t, anchor: o, onAnchorChange: c }, n);
  },
  as = "PopperAnchor",
  ss = r.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...c } = e,
      a = Mo(as, n),
      s = r.useRef(null),
      i = H(t, s);
    return (
      r.useEffect(() => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current);
      }),
      o ? null : r.createElement(j.div, C({}, c, { ref: i }))
    );
  }),
  jo = "PopperContent",
  [is, tu] = No(jo),
  ls = r.forwardRef((e, t) => {
    var n, o, c, a, s, i, l, u;
    const {
        __scopePopper: d,
        side: f = "bottom",
        sideOffset: b = 0,
        align: m = "center",
        alignOffset: v = 0,
        arrowPadding: p = 0,
        avoidCollisions: h = !0,
        collisionBoundary: $ = [],
        collisionPadding: w = 0,
        sticky: g = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: P,
        ...R
      } = e,
      T = Mo(jo, d),
      [S, _] = r.useState(null),
      L = H(t, (he) => _(he)),
      [D, W] = r.useState(null),
      M = Io(D),
      I = (n = M == null ? void 0 : M.width) !== null && n !== void 0 ? n : 0,
      q = (o = M == null ? void 0 : M.height) !== null && o !== void 0 ? o : 0,
      O = f + (m !== "center" ? "-" + m : ""),
      X =
        typeof w == "number"
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      U = Array.isArray($) ? $ : [$],
      We = U.length > 0,
      me = { padding: X, boundary: U.filter(us), altBoundary: We },
      {
        refs: Ke,
        floatingStyles: Se,
        placement: we,
        isPositioned: ve,
        middlewareData: te,
      } = Ya({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...he) =>
          qa(...he, { animationFrame: E === "always" }),
        elements: { reference: T.anchor },
        middleware: [
          Za({ mainAxis: b + q, alignmentAxis: v }),
          h &&
            Qa({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? Ja() : void 0,
              ...me,
            }),
          h && es({ ...me }),
          ts({
            ...me,
            apply: ({
              elements: he,
              rects: Ae,
              availableWidth: Ue,
              availableHeight: $r,
            }) => {
              const { width: wr, height: xr } = Ae.reference,
                st = he.floating.style;
              st.setProperty("--radix-popper-available-width", `${Ue}px`),
                st.setProperty("--radix-popper-available-height", `${$r}px`),
                st.setProperty("--radix-popper-anchor-width", `${wr}px`),
                st.setProperty("--radix-popper-anchor-height", `${xr}px`);
            },
          }),
          D && os({ element: D, padding: p }),
          ds({ arrowWidth: I, arrowHeight: q }),
          x && ns({ strategy: "referenceHidden", ...me }),
        ],
      }),
      [k, V] = Lo(we),
      G = Y(P);
    ce(() => {
      ve && (G == null || G());
    }, [ve, G]);
    const B = (c = te.arrow) === null || c === void 0 ? void 0 : c.x,
      F = (a = te.arrow) === null || a === void 0 ? void 0 : a.y,
      z =
        ((s = te.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !==
        0,
      [Z, Q] = r.useState();
    return (
      ce(() => {
        S && Q(window.getComputedStyle(S).zIndex);
      }, [S]),
      r.createElement(
        "div",
        {
          ref: Ke.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Se,
            transform: ve ? Se.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Z,
            "--radix-popper-transform-origin": [
              (i = te.transformOrigin) === null || i === void 0 ? void 0 : i.x,
              (l = te.transformOrigin) === null || l === void 0 ? void 0 : l.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        r.createElement(
          is,
          {
            scope: d,
            placedSide: k,
            onArrowChange: W,
            arrowX: B,
            arrowY: F,
            shouldHideArrow: z,
          },
          r.createElement(
            j.div,
            C({ "data-side": k, "data-align": V }, R, {
              ref: L,
              style: {
                ...R.style,
                animation: ve ? void 0 : "none",
                opacity:
                  (u = te.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            }),
          ),
        ),
      )
    );
  });
function us(e) {
  return e !== null;
}
const ds = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, c, a, s;
    const { placement: i, rects: l, middlewareData: u } = t,
      f =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      b = f ? 0 : e.arrowWidth,
      m = f ? 0 : e.arrowHeight,
      [v, p] = Lo(i),
      h = { start: "0%", center: "50%", end: "100%" }[p],
      $ =
        ((o = (c = u.arrow) === null || c === void 0 ? void 0 : c.x) !== null &&
        o !== void 0
          ? o
          : 0) +
        b / 2,
      w =
        ((a = (s = u.arrow) === null || s === void 0 ? void 0 : s.y) !== null &&
        a !== void 0
          ? a
          : 0) +
        m / 2;
    let g = "",
      x = "";
    return (
      v === "bottom"
        ? ((g = f ? h : `${$}px`), (x = `${-m}px`))
        : v === "top"
          ? ((g = f ? h : `${$}px`), (x = `${l.floating.height + m}px`))
          : v === "right"
            ? ((g = `${-m}px`), (x = f ? h : `${w}px`))
            : v === "left" &&
              ((g = `${l.floating.width + m}px`), (x = f ? h : `${w}px`)),
      { data: { x: g, y: x } }
    );
  },
});
function Lo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const fn = cs,
  pn = ss,
  mn = ls,
  Fo = "Popover",
  [zo, nu] = oe(Fo, [Ve]),
  vn = Ve(),
  [fs, Be] = zo(Fo),
  ps = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: o,
        defaultOpen: c,
        onOpenChange: a,
        modal: s = !1,
      } = e,
      i = vn(t),
      l = r.useRef(null),
      [u, d] = r.useState(!1),
      [f = !1, b] = ue({ prop: o, defaultProp: c, onChange: a });
    return r.createElement(
      fn,
      i,
      r.createElement(
        fs,
        {
          scope: t,
          contentId: re(),
          triggerRef: l,
          open: f,
          onOpenChange: b,
          onOpenToggle: r.useCallback(() => b((m) => !m), [b]),
          hasCustomAnchor: u,
          onCustomAnchorAdd: r.useCallback(() => d(!0), []),
          onCustomAnchorRemove: r.useCallback(() => d(!1), []),
          modal: s,
        },
        n,
      ),
    );
  },
  ms = "PopoverTrigger",
  vs = r.forwardRef((e, t) => {
    const { __scopePopover: n, ...o } = e,
      c = Be(ms, n),
      a = vn(n),
      s = H(t, c.triggerRef),
      i = r.createElement(
        j.button,
        C(
          {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": c.open,
            "aria-controls": c.contentId,
            "data-state": Bo(c.open),
          },
          o,
          { ref: s, onClick: A(e.onClick, c.onOpenToggle) },
        ),
      );
    return c.hasCustomAnchor
      ? i
      : r.createElement(pn, C({ asChild: !0 }, a), i);
  }),
  qo = "PopoverPortal",
  [hs, gs] = zo(qo, { forceMount: void 0 }),
  bs = (e) => {
    const { __scopePopover: t, forceMount: n, children: o, container: c } = e,
      a = Be(qo, t);
    return r.createElement(
      hs,
      { scope: t, forceMount: n },
      r.createElement(
        se,
        { present: n || a.open },
        r.createElement(Rt, { asChild: !0, container: c }, o),
      ),
    );
  },
  Ze = "PopoverContent",
  $s = r.forwardRef((e, t) => {
    const n = gs(Ze, e.__scopePopover),
      { forceMount: o = n.forceMount, ...c } = e,
      a = Be(Ze, e.__scopePopover);
    return r.createElement(
      se,
      { present: o || a.open },
      a.modal
        ? r.createElement(ws, C({}, c, { ref: t }))
        : r.createElement(xs, C({}, c, { ref: t })),
    );
  }),
  ws = r.forwardRef((e, t) => {
    const n = Be(Ze, e.__scopePopover),
      o = r.useRef(null),
      c = H(t, o),
      a = r.useRef(!1);
    return (
      r.useEffect(() => {
        const s = o.current;
        if (s) return nn(s);
      }, []),
      r.createElement(
        tn,
        { as: Pe, allowPinchZoom: !0 },
        r.createElement(
          Vo,
          C({}, e, {
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: A(e.onCloseAutoFocus, (s) => {
              var i;
              s.preventDefault(),
                a.current ||
                  (i = n.triggerRef.current) === null ||
                  i === void 0 ||
                  i.focus();
            }),
            onPointerDownOutside: A(
              e.onPointerDownOutside,
              (s) => {
                const i = s.detail.originalEvent,
                  l = i.button === 0 && i.ctrlKey === !0,
                  u = i.button === 2 || l;
                a.current = u;
              },
              { checkForDefaultPrevented: !1 },
            ),
            onFocusOutside: A(e.onFocusOutside, (s) => s.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          }),
        ),
      )
    );
  }),
  xs = r.forwardRef((e, t) => {
    const n = Be(Ze, e.__scopePopover),
      o = r.useRef(!1),
      c = r.useRef(!1);
    return r.createElement(
      Vo,
      C({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s;
          if (
            ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a),
            !a.defaultPrevented)
          ) {
            var i;
            o.current ||
              (i = n.triggerRef.current) === null ||
              i === void 0 ||
              i.focus(),
              a.preventDefault();
          }
          (o.current = !1), (c.current = !1);
        },
        onInteractOutside: (a) => {
          var s, i;
          (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a),
            a.defaultPrevented ||
              ((o.current = !0),
              a.detail.originalEvent.type === "pointerdown" &&
                (c.current = !0));
          const l = a.target;
          ((i = n.triggerRef.current) === null || i === void 0
            ? void 0
            : i.contains(l)) && a.preventDefault(),
            a.detail.originalEvent.type === "focusin" &&
              c.current &&
              a.preventDefault();
        },
      }),
    );
  }),
  Vo = r.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: o,
        onOpenAutoFocus: c,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: s,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: d,
        ...f
      } = e,
      b = Be(Ze, n),
      m = vn(n);
    return (
      en(),
      r.createElement(
        Jt,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: c,
          onUnmountAutoFocus: a,
        },
        r.createElement(
          et,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => b.onOpenChange(!1),
          },
          r.createElement(
            mn,
            C(
              { "data-state": Bo(b.open), role: "dialog", id: b.contentId },
              m,
              f,
              {
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
              },
            ),
          ),
        ),
      )
    );
  });
function Bo(e) {
  return e ? "open" : "closed";
}
const ys = ps,
  Es = vs,
  Cs = bs,
  Ps = $s,
  Ho = r.forwardRef((e, t) =>
    r.createElement(
      j.span,
      C({}, e, {
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      }),
    ),
  ),
  Wo = Ho,
  [At, ou] = oe("Tooltip", [Ve]),
  hn = Ve(),
  Rs = "TooltipProvider",
  Ts = 700,
  Ut = "tooltip.open",
  [Ss, gn] = At(Rs),
  As = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Ts,
        skipDelayDuration: o = 300,
        disableHoverableContent: c = !1,
        children: a,
      } = e,
      [s, i] = r.useState(!0),
      l = r.useRef(!1),
      u = r.useRef(0);
    return (
      r.useEffect(() => {
        const d = u.current;
        return () => window.clearTimeout(d);
      }, []),
      r.createElement(
        Ss,
        {
          scope: t,
          isOpenDelayed: s,
          delayDuration: n,
          onOpen: r.useCallback(() => {
            window.clearTimeout(u.current), i(!1);
          }, []),
          onClose: r.useCallback(() => {
            window.clearTimeout(u.current),
              (u.current = window.setTimeout(() => i(!0), o));
          }, [o]),
          isPointerInTransitRef: l,
          onPointerInTransitChange: r.useCallback((d) => {
            l.current = d;
          }, []),
          disableHoverableContent: c,
        },
        a,
      )
    );
  },
  bn = "Tooltip",
  [ks, nt] = At(bn),
  Os = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: o,
        defaultOpen: c = !1,
        onOpenChange: a,
        disableHoverableContent: s,
        delayDuration: i,
      } = e,
      l = gn(bn, e.__scopeTooltip),
      u = hn(t),
      [d, f] = r.useState(null),
      b = re(),
      m = r.useRef(0),
      v = s ?? l.disableHoverableContent,
      p = i ?? l.delayDuration,
      h = r.useRef(!1),
      [$ = !1, w] = ue({
        prop: o,
        defaultProp: c,
        onChange: (R) => {
          R
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ut)))
            : l.onClose(),
            a == null || a(R);
        },
      }),
      g = r.useMemo(
        () => ($ ? (h.current ? "delayed-open" : "instant-open") : "closed"),
        [$],
      ),
      x = r.useCallback(() => {
        window.clearTimeout(m.current), (h.current = !1), w(!0);
      }, [w]),
      E = r.useCallback(() => {
        window.clearTimeout(m.current), w(!1);
      }, [w]),
      P = r.useCallback(() => {
        window.clearTimeout(m.current),
          (m.current = window.setTimeout(() => {
            (h.current = !0), w(!0);
          }, p));
      }, [p, w]);
    return (
      r.useEffect(() => () => window.clearTimeout(m.current), []),
      r.createElement(
        fn,
        u,
        r.createElement(
          ks,
          {
            scope: t,
            contentId: b,
            open: $,
            stateAttribute: g,
            trigger: d,
            onTriggerChange: f,
            onTriggerEnter: r.useCallback(() => {
              l.isOpenDelayed ? P() : x();
            }, [l.isOpenDelayed, P, x]),
            onTriggerLeave: r.useCallback(() => {
              v ? E() : window.clearTimeout(m.current);
            }, [E, v]),
            onOpen: x,
            onClose: E,
            disableHoverableContent: v,
          },
          n,
        ),
      )
    );
  },
  Un = "TooltipTrigger",
  _s = r.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      c = nt(Un, n),
      a = gn(Un, n),
      s = hn(n),
      i = r.useRef(null),
      l = H(t, i, c.onTriggerChange),
      u = r.useRef(!1),
      d = r.useRef(!1),
      f = r.useCallback(() => (u.current = !1), []);
    return (
      r.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      r.createElement(
        pn,
        C({ asChild: !0 }, s),
        r.createElement(
          j.button,
          C(
            {
              "aria-describedby": c.open ? c.contentId : void 0,
              "data-state": c.stateAttribute,
            },
            o,
            {
              ref: l,
              onPointerMove: A(e.onPointerMove, (b) => {
                b.pointerType !== "touch" &&
                  !d.current &&
                  !a.isPointerInTransitRef.current &&
                  (c.onTriggerEnter(), (d.current = !0));
              }),
              onPointerLeave: A(e.onPointerLeave, () => {
                c.onTriggerLeave(), (d.current = !1);
              }),
              onPointerDown: A(e.onPointerDown, () => {
                (u.current = !0),
                  document.addEventListener("pointerup", f, { once: !0 });
              }),
              onFocus: A(e.onFocus, () => {
                u.current || c.onOpen();
              }),
              onBlur: A(e.onBlur, c.onClose),
              onClick: A(e.onClick, c.onClose),
            },
          ),
        ),
      )
    );
  }),
  Ko = "TooltipPortal",
  [Is, Ds] = At(Ko, { forceMount: void 0 }),
  Ns = (e) => {
    const { __scopeTooltip: t, forceMount: n, children: o, container: c } = e,
      a = nt(Ko, t);
    return r.createElement(
      Is,
      { scope: t, forceMount: n },
      r.createElement(
        se,
        { present: n || a.open },
        r.createElement(Rt, { asChild: !0, container: c }, o),
      ),
    );
  },
  Qe = "TooltipContent",
  Ms = r.forwardRef((e, t) => {
    const n = Ds(Qe, e.__scopeTooltip),
      { forceMount: o = n.forceMount, side: c = "top", ...a } = e,
      s = nt(Qe, e.__scopeTooltip);
    return r.createElement(
      se,
      { present: o || s.open },
      s.disableHoverableContent
        ? r.createElement(Uo, C({ side: c }, a, { ref: t }))
        : r.createElement(js, C({ side: c }, a, { ref: t })),
    );
  }),
  js = r.forwardRef((e, t) => {
    const n = nt(Qe, e.__scopeTooltip),
      o = gn(Qe, e.__scopeTooltip),
      c = r.useRef(null),
      a = H(t, c),
      [s, i] = r.useState(null),
      { trigger: l, onClose: u } = n,
      d = c.current,
      { onPointerInTransitChange: f } = o,
      b = r.useCallback(() => {
        i(null), f(!1);
      }, [f]),
      m = r.useCallback(
        (v, p) => {
          const h = v.currentTarget,
            $ = { x: v.clientX, y: v.clientY },
            w = Fs($, h.getBoundingClientRect()),
            g = zs($, w),
            x = qs(p.getBoundingClientRect()),
            E = Bs([...g, ...x]);
          i(E), f(!0);
        },
        [f],
      );
    return (
      r.useEffect(() => () => b(), [b]),
      r.useEffect(() => {
        if (l && d) {
          const v = (h) => m(h, d),
            p = (h) => m(h, l);
          return (
            l.addEventListener("pointerleave", v),
            d.addEventListener("pointerleave", p),
            () => {
              l.removeEventListener("pointerleave", v),
                d.removeEventListener("pointerleave", p);
            }
          );
        }
      }, [l, d, m, b]),
      r.useEffect(() => {
        if (s) {
          const v = (p) => {
            const h = p.target,
              $ = { x: p.clientX, y: p.clientY },
              w =
                (l == null ? void 0 : l.contains(h)) ||
                (d == null ? void 0 : d.contains(h)),
              g = !Vs($, s);
            w ? b() : g && (b(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, d, s, u, b]),
      r.createElement(Uo, C({}, e, { ref: a }))
    );
  }),
  [Ls, ru] = At(bn, { isInside: !1 }),
  Uo = r.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: o,
        "aria-label": c,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        ...i
      } = e,
      l = nt(Qe, n),
      u = hn(n),
      { onClose: d } = l;
    return (
      r.useEffect(
        () => (
          document.addEventListener(Ut, d),
          () => document.removeEventListener(Ut, d)
        ),
        [d],
      ),
      r.useEffect(() => {
        if (l.trigger) {
          const f = (b) => {
            const m = b.target;
            m != null && m.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      r.createElement(
        et,
        {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: a,
          onPointerDownOutside: s,
          onFocusOutside: (f) => f.preventDefault(),
          onDismiss: d,
        },
        r.createElement(
          mn,
          C({ "data-state": l.stateAttribute }, u, i, {
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
          r.createElement(ro, null, o),
          r.createElement(
            Ls,
            { scope: n, isInside: !0 },
            r.createElement(Wo, { id: l.contentId, role: "tooltip" }, c || o),
          ),
        ),
      )
    );
  });
function Fs(e, t) {
  const n = Math.abs(t.top - e.y),
    o = Math.abs(t.bottom - e.y),
    c = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, c, a)) {
    case a:
      return "left";
    case c:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function zs(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      o.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return o;
}
function qs(e) {
  const { top: t, right: n, bottom: o, left: c } = e;
  return [
    { x: c, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: c, y: o },
  ];
}
function Vs(e, t) {
  const { x: n, y: o } = e;
  let c = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x,
      l = t[a].y,
      u = t[s].x,
      d = t[s].y;
    l > o != d > o && n < ((u - i) * (o - l)) / (d - l) + i && (c = !c);
  }
  return c;
}
function Bs(e) {
  const t = e.slice();
  return (
    t.sort((n, o) =>
      n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0,
    ),
    Hs(t)
  );
}
function Hs(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const c = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1],
        s = t[t.length - 2];
      if ((a.x - s.x) * (c.y - s.y) >= (a.y - s.y) * (c.x - s.x)) t.pop();
      else break;
    }
    t.push(c);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const c = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1],
        s = n[n.length - 2];
      if ((a.x - s.x) * (c.y - s.y) >= (a.y - s.y) * (c.x - s.x)) n.pop();
      else break;
    }
    n.push(c);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
const Ws = As,
  Ks = Os,
  Us = _s,
  Gs = Ns,
  Ys = Ms;
function ot(e) {
  const t = e + "CollectionProvider",
    [n, o] = oe(t),
    [c, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: v, children: p } = m,
        h = N.useRef(null),
        $ = N.useRef(new Map()).current;
      return N.createElement(c, { scope: v, itemMap: $, collectionRef: h }, p);
    },
    i = e + "CollectionSlot",
    l = N.forwardRef((m, v) => {
      const { scope: p, children: h } = m,
        $ = a(i, p),
        w = H(v, $.collectionRef);
      return N.createElement(Pe, { ref: w }, h);
    }),
    u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = N.forwardRef((m, v) => {
      const { scope: p, children: h, ...$ } = m,
        w = N.useRef(null),
        g = H(v, w),
        x = a(u, p);
      return (
        N.useEffect(
          () => (
            x.itemMap.set(w, { ref: w, ...$ }), () => void x.itemMap.delete(w)
          ),
        ),
        N.createElement(Pe, { [d]: "", ref: g }, h)
      );
    });
  function b(m) {
    const v = a(e + "CollectionConsumer", m);
    return N.useCallback(() => {
      const h = v.collectionRef.current;
      if (!h) return [];
      const $ = Array.from(h.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (x, E) => $.indexOf(x.ref.current) - $.indexOf(E.ref.current),
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: f }, b, o];
}
const Xs = r.createContext(void 0);
function $n(e) {
  const t = r.useContext(Xs);
  return e || t || "ltr";
}
const wn = "RovingFocusGroup",
  [Zs, Qs, Js] = ot(wn),
  [ei, Go] = oe(wn, [Js]),
  [cu, ti] = ei(wn),
  ni = "RovingFocusGroupItem",
  oi = r.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: c = !1,
        tabStopId: a,
        ...s
      } = e,
      i = re(),
      l = a || i,
      u = ti(ni, n),
      d = u.currentTabStopId === l,
      f = Qs(n),
      { onFocusableItemAdd: b, onFocusableItemRemove: m } = u;
    return (
      r.useEffect(() => {
        if (o) return b(), () => m();
      }, [o, b, m]),
      r.createElement(
        Zs.ItemSlot,
        { scope: n, id: l, focusable: o, active: c },
        r.createElement(
          j.span,
          C({ tabIndex: d ? 0 : -1, "data-orientation": u.orientation }, s, {
            ref: t,
            onMouseDown: A(e.onMouseDown, (v) => {
              o ? u.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: A(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: A(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const p = ai(v, u.orientation, u.dir);
              if (p !== void 0) {
                v.preventDefault();
                let $ = f()
                  .filter((w) => w.focusable)
                  .map((w) => w.ref.current);
                if (p === "last") $.reverse();
                else if (p === "prev" || p === "next") {
                  p === "prev" && $.reverse();
                  const w = $.indexOf(v.currentTarget);
                  $ = u.loop ? ii($, w + 1) : $.slice(w + 1);
                }
                setTimeout(() => si($));
              }
            }),
          }),
        ),
      )
    );
  }),
  ri = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function ci(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function ai(e, t, n) {
  const o = ci(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return ri[o];
}
function si(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ii(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const li = oi,
  Yo = "Tabs",
  [ui, au] = oe(Yo, [Go]),
  di = Go(),
  [su, Xo] = ui(Yo),
  fi = "TabsTrigger",
  pi = r.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, disabled: c = !1, ...a } = e,
      s = Xo(fi, n),
      i = di(n),
      l = Zo(s.baseId, o),
      u = Qo(s.baseId, o),
      d = o === s.value;
    return r.createElement(
      li,
      C({ asChild: !0 }, i, { focusable: !c, active: d }),
      r.createElement(
        j.button,
        C(
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": c ? "" : void 0,
            disabled: c,
            id: l,
          },
          a,
          {
            ref: t,
            onMouseDown: A(e.onMouseDown, (f) => {
              !c && f.button === 0 && f.ctrlKey === !1
                ? s.onValueChange(o)
                : f.preventDefault();
            }),
            onKeyDown: A(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(o);
            }),
            onFocus: A(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !d && !c && f && s.onValueChange(o);
            }),
          },
        ),
      ),
    );
  }),
  mi = "TabsContent",
  vi = r.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, forceMount: c, children: a, ...s } = e,
      i = Xo(mi, n),
      l = Zo(i.baseId, o),
      u = Qo(i.baseId, o),
      d = o === i.value,
      f = r.useRef(d);
    return (
      r.useEffect(() => {
        const b = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(b);
      }, []),
      r.createElement(se, { present: c || d }, ({ present: b }) =>
        r.createElement(
          j.div,
          C(
            {
              "data-state": d ? "active" : "inactive",
              "data-orientation": i.orientation,
              role: "tabpanel",
              "aria-labelledby": l,
              hidden: !b,
              id: u,
              tabIndex: 0,
            },
            s,
            {
              ref: t,
              style: {
                ...e.style,
                animationDuration: f.current ? "0s" : void 0,
              },
            },
          ),
          b && a,
        ),
      )
    );
  });
function Zo(e, t) {
  return `${e}-trigger-${t}`;
}
function Qo(e, t) {
  return `${e}-content-${t}`;
}
const hi = pi,
  gi = vi,
  bi = r.forwardRef((e, t) =>
    r.createElement(
      j.label,
      C({}, e, {
        ref: t,
        onMouseDown: (n) => {
          var o;
          (o = e.onMouseDown) === null || o === void 0 || o.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault();
        },
      }),
    ),
  ),
  $i = bi,
  rt = "Accordion",
  wi = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Jo, xi, yi] = ot(rt),
  [kt, iu] = oe(rt, [yi, ao]),
  Ei = ao(),
  er = N.forwardRef((e, t) => {
    const { type: n, ...o } = e,
      c = o,
      a = o;
    return N.createElement(
      Jo.Provider,
      { scope: e.__scopeAccordion },
      n === "multiple"
        ? N.createElement(Ri, C({}, a, { ref: t }))
        : N.createElement(Pi, C({}, c, { ref: t })),
    );
  });
er.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && !["single", "multiple"].includes(e.type)
      ? new Error(
          "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.",
        )
      : e.type === "multiple" && typeof t == "string"
        ? new Error(
            "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.",
          )
        : e.type === "single" && Array.isArray(t)
          ? new Error(
              "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.",
            )
          : null;
  },
};
const [tr, Ci] = kt(rt),
  [nr, lu] = kt(rt, { collapsible: !1 }),
  Pi = N.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: c = () => {},
        collapsible: a = !1,
        ...s
      } = e,
      [i, l] = ue({ prop: n, defaultProp: o, onChange: c });
    return N.createElement(
      tr,
      {
        scope: e.__scopeAccordion,
        value: i ? [i] : [],
        onItemOpen: l,
        onItemClose: N.useCallback(() => a && l(""), [a, l]),
      },
      N.createElement(
        nr,
        { scope: e.__scopeAccordion, collapsible: a },
        N.createElement(or, C({}, s, { ref: t })),
      ),
    );
  }),
  Ri = N.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: c = () => {}, ...a } = e,
      [s = [], i] = ue({ prop: n, defaultProp: o, onChange: c }),
      l = N.useCallback((d) => i((f = []) => [...f, d]), [i]),
      u = N.useCallback((d) => i((f = []) => f.filter((b) => b !== d)), [i]);
    return N.createElement(
      tr,
      { scope: e.__scopeAccordion, value: s, onItemOpen: l, onItemClose: u },
      N.createElement(
        nr,
        { scope: e.__scopeAccordion, collapsible: !0 },
        N.createElement(or, C({}, a, { ref: t })),
      ),
    );
  }),
  [Ti, Si] = kt(rt),
  or = N.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: c,
        orientation: a = "vertical",
        ...s
      } = e,
      i = N.useRef(null),
      l = H(i, t),
      u = xi(n),
      f = $n(c) === "ltr",
      b = A(e.onKeyDown, (m) => {
        var v;
        if (!wi.includes(m.key)) return;
        const p = m.target,
          h = u().filter((S) => {
            var _;
            return !(
              (_ = S.ref.current) !== null &&
              _ !== void 0 &&
              _.disabled
            );
          }),
          $ = h.findIndex((S) => S.ref.current === p),
          w = h.length;
        if ($ === -1) return;
        m.preventDefault();
        let g = $;
        const x = 0,
          E = w - 1,
          P = () => {
            (g = $ + 1), g > E && (g = x);
          },
          R = () => {
            (g = $ - 1), g < x && (g = E);
          };
        switch (m.key) {
          case "Home":
            g = x;
            break;
          case "End":
            g = E;
            break;
          case "ArrowRight":
            a === "horizontal" && (f ? P() : R());
            break;
          case "ArrowDown":
            a === "vertical" && P();
            break;
          case "ArrowLeft":
            a === "horizontal" && (f ? R() : P());
            break;
          case "ArrowUp":
            a === "vertical" && R();
            break;
        }
        const T = g % w;
        (v = h[T].ref.current) === null || v === void 0 || v.focus();
      });
    return N.createElement(
      Ti,
      { scope: n, disabled: o, direction: c, orientation: a },
      N.createElement(
        Jo.Slot,
        { scope: n },
        N.createElement(
          j.div,
          C({}, s, {
            "data-orientation": a,
            ref: l,
            onKeyDown: o ? void 0 : b,
          }),
        ),
      ),
    );
  }),
  Gt = "AccordionItem",
  [Ai, uu] = kt(Gt),
  ki = N.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: o, ...c } = e,
      a = Si(Gt, n),
      s = Ci(Gt, n),
      i = Ei(n),
      l = re(),
      u = (o && s.value.includes(o)) || !1,
      d = a.disabled || e.disabled;
    return N.createElement(
      Ai,
      { scope: n, open: u, disabled: d, triggerId: l },
      N.createElement(
        Wr,
        C({ "data-orientation": a.orientation, "data-state": Oi(u) }, i, c, {
          ref: t,
          disabled: d,
          open: u,
          onOpenChange: (f) => {
            f ? s.onItemOpen(o) : s.onItemClose(o);
          },
        }),
      ),
    );
  });
function Oi(e) {
  return e ? "open" : "closed";
}
const _i = er,
  Ii = ki;
function xn(e) {
  const t = r.useRef({ value: e, previous: e });
  return r.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
const ct = "NavigationMenu",
  [yn, Di, Ni] = ot(ct),
  [Yt, Mi, ji] = ot(ct),
  [En, du] = oe(ct, [Ni, ji]),
  [Li, Te] = En(ct),
  [Fi, zi] = En(ct),
  qi = r.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: o,
        onValueChange: c,
        defaultValue: a,
        delayDuration: s = 200,
        skipDelayDuration: i = 300,
        orientation: l = "horizontal",
        dir: u,
        ...d
      } = e,
      [f, b] = r.useState(null),
      m = H(t, (S) => b(S)),
      v = $n(u),
      p = r.useRef(0),
      h = r.useRef(0),
      $ = r.useRef(0),
      [w, g] = r.useState(!0),
      [x = "", E] = ue({
        prop: o,
        onChange: (S) => {
          const _ = S !== "",
            L = i > 0;
          _
            ? (window.clearTimeout($.current), L && g(!1))
            : (window.clearTimeout($.current),
              ($.current = window.setTimeout(() => g(!0), i))),
            c == null || c(S);
        },
        defaultProp: a,
      }),
      P = r.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => E(""), 150));
      }, [E]),
      R = r.useCallback(
        (S) => {
          window.clearTimeout(h.current), E(S);
        },
        [E],
      ),
      T = r.useCallback(
        (S) => {
          x === S
            ? window.clearTimeout(h.current)
            : (p.current = window.setTimeout(() => {
                window.clearTimeout(h.current), E(S);
              }, s));
        },
        [x, E, s],
      );
    return (
      r.useEffect(
        () => () => {
          window.clearTimeout(p.current),
            window.clearTimeout(h.current),
            window.clearTimeout($.current);
        },
        [],
      ),
      r.createElement(
        Vi,
        {
          scope: n,
          isRootMenu: !0,
          value: x,
          dir: v,
          orientation: l,
          rootNavigationMenu: f,
          onTriggerEnter: (S) => {
            window.clearTimeout(p.current), w ? T(S) : R(S);
          },
          onTriggerLeave: () => {
            window.clearTimeout(p.current), P();
          },
          onContentEnter: () => window.clearTimeout(h.current),
          onContentLeave: P,
          onItemSelect: (S) => {
            E((_) => (_ === S ? "" : S));
          },
          onItemDismiss: () => E(""),
        },
        r.createElement(
          j.nav,
          C({ "aria-label": "Main", "data-orientation": l, dir: v }, d, {
            ref: m,
          }),
        ),
      )
    );
  }),
  Vi = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: o,
        dir: c,
        orientation: a,
        children: s,
        value: i,
        onItemSelect: l,
        onItemDismiss: u,
        onTriggerEnter: d,
        onTriggerLeave: f,
        onContentEnter: b,
        onContentLeave: m,
      } = e,
      [v, p] = r.useState(null),
      [h, $] = r.useState(new Map()),
      [w, g] = r.useState(null);
    return r.createElement(
      Li,
      {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: o,
        value: i,
        previousValue: xn(i),
        baseId: re(),
        dir: c,
        orientation: a,
        viewport: v,
        onViewportChange: p,
        indicatorTrack: w,
        onIndicatorTrackChange: g,
        onTriggerEnter: Y(d),
        onTriggerLeave: Y(f),
        onContentEnter: Y(b),
        onContentLeave: Y(m),
        onItemSelect: Y(l),
        onItemDismiss: Y(u),
        onViewportContentChange: r.useCallback((x, E) => {
          $((P) => (P.set(x, E), new Map(P)));
        }, []),
        onViewportContentRemove: r.useCallback((x) => {
          $((E) => (E.has(x) ? (E.delete(x), new Map(E)) : E));
        }, []),
      },
      r.createElement(
        yn.Provider,
        { scope: t },
        r.createElement(Fi, { scope: t, items: h }, s),
      ),
    );
  },
  Bi = "NavigationMenuList",
  Hi = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e,
      c = Te(Bi, n),
      a = r.createElement(
        j.ul,
        C({ "data-orientation": c.orientation }, o, { ref: t }),
      );
    return r.createElement(
      j.div,
      { style: { position: "relative" }, ref: c.onIndicatorTrackChange },
      r.createElement(
        yn.Slot,
        { scope: n },
        c.isRootMenu ? r.createElement(ar, { asChild: !0 }, a) : a,
      ),
    );
  }),
  Wi = "NavigationMenuItem",
  [Ki, Ui] = En(Wi),
  Gi = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: o, ...c } = e,
      a = re(),
      s = o || a || "LEGACY_REACT_AUTO_VALUE",
      i = r.useRef(null),
      l = r.useRef(null),
      u = r.useRef(null),
      d = r.useRef(() => {}),
      f = r.useRef(!1),
      b = r.useCallback((v = "start") => {
        if (i.current) {
          d.current();
          const p = Xt(i.current);
          p.length && Cn(v === "start" ? p : p.reverse());
        }
      }, []),
      m = r.useCallback(() => {
        if (i.current) {
          const v = Xt(i.current);
          v.length && (d.current = nl(v));
        }
      }, []);
    return r.createElement(
      Ki,
      {
        scope: n,
        value: s,
        triggerRef: l,
        contentRef: i,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: b,
        onFocusProxyEnter: b,
        onRootContentClose: m,
        onContentFocusOutside: m,
      },
      r.createElement(j.li, C({}, c, { ref: t })),
    );
  }),
  Gn = "NavigationMenuTrigger",
  Yi = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: o, ...c } = e,
      a = Te(Gn, e.__scopeNavigationMenu),
      s = Ui(Gn, e.__scopeNavigationMenu),
      i = r.useRef(null),
      l = H(i, s.triggerRef, t),
      u = lr(a.baseId, s.value),
      d = ur(a.baseId, s.value),
      f = r.useRef(!1),
      b = r.useRef(!1),
      m = s.value === a.value;
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        yn.ItemSlot,
        { scope: n, value: s.value },
        r.createElement(
          sr,
          { asChild: !0 },
          r.createElement(
            j.button,
            C(
              {
                id: u,
                disabled: o,
                "data-disabled": o ? "" : void 0,
                "data-state": ir(m),
                "aria-expanded": m,
                "aria-controls": d,
              },
              c,
              {
                ref: l,
                onPointerEnter: A(e.onPointerEnter, () => {
                  (b.current = !1), (s.wasEscapeCloseRef.current = !1);
                }),
                onPointerMove: A(
                  e.onPointerMove,
                  Zt(() => {
                    o ||
                      b.current ||
                      s.wasEscapeCloseRef.current ||
                      f.current ||
                      (a.onTriggerEnter(s.value), (f.current = !0));
                  }),
                ),
                onPointerLeave: A(
                  e.onPointerLeave,
                  Zt(() => {
                    o || (a.onTriggerLeave(), (f.current = !1));
                  }),
                ),
                onClick: A(e.onClick, () => {
                  a.onItemSelect(s.value), (b.current = m);
                }),
                onKeyDown: A(e.onKeyDown, (v) => {
                  const h = {
                    horizontal: "ArrowDown",
                    vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight",
                  }[a.orientation];
                  m && v.key === h && (s.onEntryKeyDown(), v.preventDefault());
                }),
              },
            ),
          ),
        ),
      ),
      m &&
        r.createElement(
          r.Fragment,
          null,
          r.createElement(Wo, {
            "aria-hidden": !0,
            tabIndex: 0,
            ref: s.focusProxyRef,
            onFocus: (v) => {
              const p = s.contentRef.current,
                h = v.relatedTarget,
                $ = h === i.current,
                w = p == null ? void 0 : p.contains(h);
              ($ || !w) && s.onFocusProxyEnter($ ? "start" : "end");
            },
          }),
          a.viewport && r.createElement("span", { "aria-owns": d }),
        ),
    );
  }),
  Yn = "navigationMenu.linkSelect",
  Xi = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: o, onSelect: c, ...a } = e;
    return r.createElement(
      sr,
      { asChild: !0 },
      r.createElement(
        j.a,
        C(
          {
            "data-active": o ? "" : void 0,
            "aria-current": o ? "page" : void 0,
          },
          a,
          {
            ref: t,
            onClick: A(
              e.onClick,
              (s) => {
                const i = s.target,
                  l = new CustomEvent(Yn, { bubbles: !0, cancelable: !0 });
                if (
                  (i.addEventListener(Yn, (u) => (c == null ? void 0 : c(u)), {
                    once: !0,
                  }),
                  qt(i, l),
                  !l.defaultPrevented && !s.metaKey)
                ) {
                  const u = new CustomEvent($t, {
                    bubbles: !0,
                    cancelable: !0,
                  });
                  qt(i, u);
                }
              },
              { checkForDefaultPrevented: !1 },
            ),
          },
        ),
      ),
    );
  }),
  rr = "NavigationMenuContent",
  $t = "navigationMenu.rootContentDismiss",
  Zi = r.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: o,
        triggerRef: c,
        focusProxyRef: a,
        wasEscapeCloseRef: s,
        onRootContentClose: i,
        onContentFocusOutside: l,
        ...u
      } = e,
      d = Te(rr, n),
      f = r.useRef(null),
      b = H(f, t),
      m = lr(d.baseId, o),
      v = ur(d.baseId, o),
      p = Di(n),
      h = r.useRef(null),
      { onItemDismiss: $ } = d;
    r.useEffect(() => {
      const g = f.current;
      if (d.isRootMenu && g) {
        const x = () => {
          var E;
          $(),
            i(),
            g.contains(document.activeElement) &&
              ((E = c.current) === null || E === void 0 || E.focus());
        };
        return g.addEventListener($t, x), () => g.removeEventListener($t, x);
      }
    }, [d.isRootMenu, e.value, c, $, i]);
    const w = r.useMemo(() => {
      const x = p().map((_) => _.value);
      d.dir === "rtl" && x.reverse();
      const E = x.indexOf(d.value),
        P = x.indexOf(d.previousValue),
        R = o === d.value,
        T = P === x.indexOf(o);
      if (!R && !T) return h.current;
      const S = (() => {
        if (E !== P) {
          if (R && P !== -1) return E > P ? "from-end" : "from-start";
          if (T && E !== -1) return E > P ? "to-start" : "to-end";
        }
        return null;
      })();
      return (h.current = S), S;
    }, [d.previousValue, d.value, d.dir, p, o]);
    return r.createElement(
      ar,
      { asChild: !0 },
      r.createElement(
        et,
        C(
          {
            id: v,
            "aria-labelledby": m,
            "data-motion": w,
            "data-orientation": d.orientation,
          },
          u,
          {
            ref: b,
            onDismiss: () => {
              var g;
              const x = new Event($t, { bubbles: !0, cancelable: !0 });
              (g = f.current) === null || g === void 0 || g.dispatchEvent(x);
            },
            onFocusOutside: A(e.onFocusOutside, (g) => {
              var x;
              l();
              const E = g.target;
              (x = d.rootNavigationMenu) !== null &&
                x !== void 0 &&
                x.contains(E) &&
                g.preventDefault();
            }),
            onPointerDownOutside: A(e.onPointerDownOutside, (g) => {
              var x;
              const E = g.target,
                P = p().some((T) => {
                  var S;
                  return (S = T.ref.current) === null || S === void 0
                    ? void 0
                    : S.contains(E);
                }),
                R =
                  d.isRootMenu &&
                  ((x = d.viewport) === null || x === void 0
                    ? void 0
                    : x.contains(E));
              (P || R || !d.isRootMenu) && g.preventDefault();
            }),
            onKeyDown: A(e.onKeyDown, (g) => {
              const x = g.altKey || g.ctrlKey || g.metaKey;
              if (g.key === "Tab" && !x) {
                const R = Xt(g.currentTarget),
                  T = document.activeElement,
                  S = R.findIndex((D) => D === T),
                  L = g.shiftKey
                    ? R.slice(0, S).reverse()
                    : R.slice(S + 1, R.length);
                if (Cn(L)) g.preventDefault();
                else {
                  var P;
                  (P = a.current) === null || P === void 0 || P.focus();
                }
              }
            }),
            onEscapeKeyDown: A(e.onEscapeKeyDown, (g) => {
              s.current = !0;
            }),
          },
        ),
      ),
    );
  }),
  cr = "NavigationMenuViewport",
  Qi = r.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      a = !!Te(cr, e.__scopeNavigationMenu).value;
    return r.createElement(
      se,
      { present: n || a },
      r.createElement(Ji, C({}, o, { ref: t })),
    );
  }),
  Ji = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: o, ...c } = e,
      a = Te(cr, n),
      s = H(t, a.onViewportChange),
      i = zi(rr, e.__scopeNavigationMenu),
      [l, u] = r.useState(null),
      [d, f] = r.useState(null),
      b = l ? (l == null ? void 0 : l.width) + "px" : void 0,
      m = l ? (l == null ? void 0 : l.height) + "px" : void 0,
      v = !!a.value,
      p = v ? a.value : a.previousValue;
    return (
      ol(d, () => {
        d && u({ width: d.offsetWidth, height: d.offsetHeight });
      }),
      r.createElement(
        j.div,
        C({ "data-state": ir(v), "data-orientation": a.orientation }, c, {
          ref: s,
          style: {
            pointerEvents: !v && a.isRootMenu ? "none" : void 0,
            "--radix-navigation-menu-viewport-width": b,
            "--radix-navigation-menu-viewport-height": m,
            ...c.style,
          },
          onPointerEnter: A(e.onPointerEnter, a.onContentEnter),
          onPointerLeave: A(e.onPointerLeave, Zt(a.onContentLeave)),
        }),
        Array.from(i.items).map(([$, { ref: w, forceMount: g, ...x }]) => {
          const E = p === $;
          return r.createElement(
            se,
            { key: $, present: g || E },
            r.createElement(
              Zi,
              C({}, x, {
                ref: Qt(w, (P) => {
                  E && P && f(P);
                }),
              }),
            ),
          );
        }),
      )
    );
  }),
  el = "FocusGroup",
  ar = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e,
      c = Te(el, n);
    return r.createElement(
      Yt.Provider,
      { scope: n },
      r.createElement(
        Yt.Slot,
        { scope: n },
        r.createElement(j.div, C({ dir: c.dir }, o, { ref: t })),
      ),
    );
  }),
  Xn = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  tl = "FocusGroupItem",
  sr = r.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e,
      c = Mi(n),
      a = Te(tl, n);
    return r.createElement(
      Yt.ItemSlot,
      { scope: n },
      r.createElement(
        j.button,
        C({}, o, {
          ref: t,
          onKeyDown: A(e.onKeyDown, (s) => {
            if (["Home", "End", ...Xn].includes(s.key)) {
              let l = c().map((f) => f.ref.current);
              if (
                ([
                  a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
                  "ArrowUp",
                  "End",
                ].includes(s.key) && l.reverse(),
                Xn.includes(s.key))
              ) {
                const f = l.indexOf(s.currentTarget);
                l = l.slice(f + 1);
              }
              setTimeout(() => Cn(l)), s.preventDefault();
            }
          }),
        }),
      ),
    );
  });
function Xt(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const c = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || c
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cn(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
function nl(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""),
        t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function ol(e, t) {
  const n = Y(t);
  ce(() => {
    let o = 0;
    if (e) {
      const c = new ResizeObserver(() => {
        cancelAnimationFrame(o), (o = window.requestAnimationFrame(n));
      });
      return (
        c.observe(e),
        () => {
          window.cancelAnimationFrame(o), c.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function ir(e) {
  return e ? "open" : "closed";
}
function lr(e, t) {
  return `${e}-trigger-${t}`;
}
function ur(e, t) {
  return `${e}-content-${t}`;
}
function Zt(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const rl = qi,
  cl = Hi,
  al = Gi,
  sl = Yi,
  il = Xi,
  ll = Qi;
function Zn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const ul = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Ot = "Select",
  [dr, Pn, dl] = ot(Ot),
  [He, fu] = oe(Ot, [dl, Ve]),
  Rn = Ve(),
  [fl, at] = He(Ot),
  [pl, pu] = He(Ot),
  ml = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: c,
        onOpenChange: a,
        value: s,
        defaultValue: i,
        onValueChange: l,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: b,
        required: m,
      } = e,
      v = Rn(t),
      [p, h] = r.useState(null),
      [$, w] = r.useState(null),
      [g, x] = r.useState(!1),
      E = $n(u),
      [P = !1, R] = ue({ prop: o, defaultProp: c, onChange: a }),
      [T, S] = ue({ prop: s, defaultProp: i, onChange: l }),
      _ = r.useRef(null),
      L = p ? !!p.closest("form") : !0,
      [D, W] = r.useState(new Set()),
      M = Array.from(D)
        .map((I) => I.props.value)
        .join(";");
    return r.createElement(
      fn,
      v,
      r.createElement(
        fl,
        {
          required: m,
          scope: t,
          trigger: p,
          onTriggerChange: h,
          valueNode: $,
          onValueNodeChange: w,
          valueNodeHasChildren: g,
          onValueNodeHasChildrenChange: x,
          contentId: re(),
          value: T,
          onValueChange: S,
          open: P,
          onOpenChange: R,
          dir: E,
          triggerPointerDownPosRef: _,
          disabled: b,
        },
        r.createElement(
          dr.Provider,
          { scope: t },
          r.createElement(
            pl,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: r.useCallback((I) => {
                W((q) => new Set(q).add(I));
              }, []),
              onNativeOptionRemove: r.useCallback((I) => {
                W((q) => {
                  const O = new Set(q);
                  return O.delete(I), O;
                });
              }, []),
            },
            n,
          ),
        ),
        L
          ? r.createElement(
              mr,
              {
                key: M,
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: T,
                onChange: (I) => S(I.target.value),
                disabled: b,
              },
              T === void 0 ? r.createElement("option", { value: "" }) : null,
              Array.from(D),
            )
          : null,
      ),
    );
  },
  vl = "SelectTrigger",
  hl = r.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...c } = e,
      a = Rn(n),
      s = at(vl, n),
      i = s.disabled || o,
      l = H(t, s.onTriggerChange),
      u = Pn(n),
      [d, f, b] = vr((v) => {
        const p = u().filter((w) => !w.disabled),
          h = p.find((w) => w.value === s.value),
          $ = hr(p, v, h);
        $ !== void 0 && s.onValueChange($.value);
      }),
      m = () => {
        i || (s.onOpenChange(!0), b());
      };
    return r.createElement(
      pn,
      C({ asChild: !0 }, a),
      r.createElement(
        j.button,
        C(
          {
            type: "button",
            role: "combobox",
            "aria-controls": s.contentId,
            "aria-expanded": s.open,
            "aria-required": s.required,
            "aria-autocomplete": "none",
            dir: s.dir,
            "data-state": s.open ? "open" : "closed",
            disabled: i,
            "data-disabled": i ? "" : void 0,
            "data-placeholder": pr(s.value) ? "" : void 0,
          },
          c,
          {
            ref: l,
            onClick: A(c.onClick, (v) => {
              v.currentTarget.focus();
            }),
            onPointerDown: A(c.onPointerDown, (v) => {
              const p = v.target;
              p.hasPointerCapture(v.pointerId) &&
                p.releasePointerCapture(v.pointerId),
                v.button === 0 &&
                  v.ctrlKey === !1 &&
                  (m(),
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(v.pageX),
                    y: Math.round(v.pageY),
                  }),
                  v.preventDefault());
            }),
            onKeyDown: A(c.onKeyDown, (v) => {
              const p = d.current !== "";
              !(v.ctrlKey || v.altKey || v.metaKey) &&
                v.key.length === 1 &&
                f(v.key),
                !(p && v.key === " ") &&
                  ul.includes(v.key) &&
                  (m(), v.preventDefault());
            }),
          },
        ),
      ),
    );
  }),
  gl = "SelectValue",
  bl = r.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: c,
        children: a,
        placeholder: s = "",
        ...i
      } = e,
      l = at(gl, n),
      { onValueNodeHasChildrenChange: u } = l,
      d = a !== void 0,
      f = H(t, l.onValueNodeChange);
    return (
      ce(() => {
        u(d);
      }, [u, d]),
      r.createElement(
        j.span,
        C({}, i, { ref: f, style: { pointerEvents: "none" } }),
        pr(l.value) ? r.createElement(r.Fragment, null, s) : a,
      )
    );
  }),
  $l = (e) => r.createElement(Rt, C({ asChild: !0 }, e)),
  Le = "SelectContent",
  wl = r.forwardRef((e, t) => {
    const n = at(Le, e.__scopeSelect),
      [o, c] = r.useState();
    if (
      (ce(() => {
        c(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const a = o;
      return a
        ? Ct.createPortal(
            r.createElement(
              fr,
              { scope: e.__scopeSelect },
              r.createElement(
                dr.Slot,
                { scope: e.__scopeSelect },
                r.createElement("div", null, e.children),
              ),
            ),
            a,
          )
        : null;
    }
    return r.createElement(yl, C({}, e, { ref: t }));
  }),
  ye = 10,
  [fr, xl] = He(Le),
  yl = r.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: c,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        side: i,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: b,
        collisionPadding: m,
        sticky: v,
        hideWhenDetached: p,
        avoidCollisions: h,
        ...$
      } = e,
      w = at(Le, n),
      [g, x] = r.useState(null),
      [E, P] = r.useState(null),
      R = H(t, (k) => x(k)),
      [T, S] = r.useState(null),
      [_, L] = r.useState(null),
      D = Pn(n),
      [W, M] = r.useState(!1),
      I = r.useRef(!1);
    r.useEffect(() => {
      if (g) return nn(g);
    }, [g]),
      en();
    const q = r.useCallback(
        (k) => {
          const [V, ...G] = D().map((z) => z.ref.current),
            [B] = G.slice(-1),
            F = document.activeElement;
          for (const z of k)
            if (
              z === F ||
              (z == null || z.scrollIntoView({ block: "nearest" }),
              z === V && E && (E.scrollTop = 0),
              z === B && E && (E.scrollTop = E.scrollHeight),
              z == null || z.focus(),
              document.activeElement !== F)
            )
              return;
        },
        [D, E],
      ),
      O = r.useCallback(() => q([T, g]), [q, T, g]);
    r.useEffect(() => {
      W && O();
    }, [W, O]);
    const { onOpenChange: X, triggerPointerDownPosRef: U } = w;
    r.useEffect(() => {
      if (g) {
        let k = { x: 0, y: 0 };
        const V = (B) => {
            var F, z, Z, Q;
            k = {
              x: Math.abs(
                Math.round(B.pageX) -
                  ((F =
                    (z = U.current) === null || z === void 0 ? void 0 : z.x) !==
                    null && F !== void 0
                    ? F
                    : 0),
              ),
              y: Math.abs(
                Math.round(B.pageY) -
                  ((Z =
                    (Q = U.current) === null || Q === void 0 ? void 0 : Q.y) !==
                    null && Z !== void 0
                    ? Z
                    : 0),
              ),
            };
          },
          G = (B) => {
            k.x <= 10 && k.y <= 10
              ? B.preventDefault()
              : g.contains(B.target) || X(!1),
              document.removeEventListener("pointermove", V),
              (U.current = null);
          };
        return (
          U.current !== null &&
            (document.addEventListener("pointermove", V),
            document.addEventListener("pointerup", G, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", V),
              document.removeEventListener("pointerup", G, { capture: !0 });
          }
        );
      }
    }, [g, X, U]),
      r.useEffect(() => {
        const k = () => X(!1);
        return (
          window.addEventListener("blur", k),
          window.addEventListener("resize", k),
          () => {
            window.removeEventListener("blur", k),
              window.removeEventListener("resize", k);
          }
        );
      }, [X]);
    const [We, me] = vr((k) => {
        const V = D().filter((F) => !F.disabled),
          G = V.find((F) => F.ref.current === document.activeElement),
          B = hr(V, k, G);
        B && setTimeout(() => B.ref.current.focus());
      }),
      Ke = r.useCallback(
        (k, V, G) => {
          const B = !I.current && !G;
          ((w.value !== void 0 && w.value === V) || B) &&
            (S(k), B && (I.current = !0));
        },
        [w.value],
      ),
      Se = r.useCallback(() => (g == null ? void 0 : g.focus()), [g]),
      we = r.useCallback(
        (k, V, G) => {
          const B = !I.current && !G;
          ((w.value !== void 0 && w.value === V) || B) && L(k);
        },
        [w.value],
      ),
      ve = o === "popper" ? Qn : El,
      te =
        ve === Qn
          ? {
              side: i,
              sideOffset: l,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: b,
              collisionPadding: m,
              sticky: v,
              hideWhenDetached: p,
              avoidCollisions: h,
            }
          : {};
    return r.createElement(
      fr,
      {
        scope: n,
        content: g,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: Ke,
        selectedItem: T,
        onItemLeave: Se,
        itemTextRefCallback: we,
        focusSelectedItem: O,
        selectedItemText: _,
        position: o,
        isPositioned: W,
        searchRef: We,
      },
      r.createElement(
        tn,
        { as: Pe, allowPinchZoom: !0 },
        r.createElement(
          Jt,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: A(c, (k) => {
              var V;
              (V = w.trigger) === null ||
                V === void 0 ||
                V.focus({ preventScroll: !0 }),
                k.preventDefault();
            }),
          },
          r.createElement(
            et,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              onFocusOutside: (k) => k.preventDefault(),
              onDismiss: () => w.onOpenChange(!1),
            },
            r.createElement(
              ve,
              C(
                {
                  role: "listbox",
                  id: w.contentId,
                  "data-state": w.open ? "open" : "closed",
                  dir: w.dir,
                  onContextMenu: (k) => k.preventDefault(),
                },
                $,
                te,
                {
                  onPlaced: () => M(!0),
                  ref: R,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...$.style,
                  },
                  onKeyDown: A($.onKeyDown, (k) => {
                    const V = k.ctrlKey || k.altKey || k.metaKey;
                    if (
                      (k.key === "Tab" && k.preventDefault(),
                      !V && k.key.length === 1 && me(k.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key))
                    ) {
                      let B = D()
                        .filter((F) => !F.disabled)
                        .map((F) => F.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(k.key) &&
                          (B = B.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(k.key))
                      ) {
                        const F = k.target,
                          z = B.indexOf(F);
                        B = B.slice(z + 1);
                      }
                      setTimeout(() => q(B)), k.preventDefault();
                    }
                  }),
                },
              ),
            ),
          ),
        ),
      ),
    );
  }),
  El = r.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...c } = e,
      a = at(Le, n),
      s = xl(Le, n),
      [i, l] = r.useState(null),
      [u, d] = r.useState(null),
      f = H(t, (R) => d(R)),
      b = Pn(n),
      m = r.useRef(!1),
      v = r.useRef(!0),
      {
        viewport: p,
        selectedItem: h,
        selectedItemText: $,
        focusSelectedItem: w,
      } = s,
      g = r.useCallback(() => {
        if (a.trigger && a.valueNode && i && u && p && h && $) {
          const R = a.trigger.getBoundingClientRect(),
            T = u.getBoundingClientRect(),
            S = a.valueNode.getBoundingClientRect(),
            _ = $.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const F = _.left - T.left,
              z = S.left - F,
              Z = R.left - z,
              Q = R.width + Z,
              he = Math.max(Q, T.width),
              Ae = window.innerWidth - ye,
              Ue = Zn(z, [ye, Ae - he]);
            (i.style.minWidth = Q + "px"), (i.style.left = Ue + "px");
          } else {
            const F = T.right - _.right,
              z = window.innerWidth - S.right - F,
              Z = window.innerWidth - R.right - z,
              Q = R.width + Z,
              he = Math.max(Q, T.width),
              Ae = window.innerWidth - ye,
              Ue = Zn(z, [ye, Ae - he]);
            (i.style.minWidth = Q + "px"), (i.style.right = Ue + "px");
          }
          const L = b(),
            D = window.innerHeight - ye * 2,
            W = p.scrollHeight,
            M = window.getComputedStyle(u),
            I = parseInt(M.borderTopWidth, 10),
            q = parseInt(M.paddingTop, 10),
            O = parseInt(M.borderBottomWidth, 10),
            X = parseInt(M.paddingBottom, 10),
            U = I + q + W + X + O,
            We = Math.min(h.offsetHeight * 5, U),
            me = window.getComputedStyle(p),
            Ke = parseInt(me.paddingTop, 10),
            Se = parseInt(me.paddingBottom, 10),
            we = R.top + R.height / 2 - ye,
            ve = D - we,
            te = h.offsetHeight / 2,
            k = h.offsetTop + te,
            V = I + q + k,
            G = U - V;
          if (V <= we) {
            const F = h === L[L.length - 1].ref.current;
            i.style.bottom = "0px";
            const z = u.clientHeight - p.offsetTop - p.offsetHeight,
              Z = Math.max(ve, te + (F ? Se : 0) + z + O),
              Q = V + Z;
            i.style.height = Q + "px";
          } else {
            const F = h === L[0].ref.current;
            i.style.top = "0px";
            const Z = Math.max(we, I + p.offsetTop + (F ? Ke : 0) + te) + G;
            (i.style.height = Z + "px"), (p.scrollTop = V - we + p.offsetTop);
          }
          (i.style.margin = `${ye}px 0`),
            (i.style.minHeight = We + "px"),
            (i.style.maxHeight = D + "px"),
            o == null || o(),
            requestAnimationFrame(() => (m.current = !0));
        }
      }, [b, a.trigger, a.valueNode, i, u, p, h, $, a.dir, o]);
    ce(() => g(), [g]);
    const [x, E] = r.useState();
    ce(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const P = r.useCallback(
      (R) => {
        R && v.current === !0 && (g(), w == null || w(), (v.current = !1));
      },
      [g, w],
    );
    return r.createElement(
      Cl,
      {
        scope: n,
        contentWrapper: i,
        shouldExpandOnScrollRef: m,
        onScrollButtonChange: P,
      },
      r.createElement(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x,
          },
        },
        r.createElement(
          j.div,
          C({}, c, {
            ref: f,
            style: { boxSizing: "border-box", maxHeight: "100%", ...c.style },
          }),
        ),
      ),
    );
  }),
  Qn = r.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: c = ye,
        ...a
      } = e,
      s = Rn(n);
    return r.createElement(
      mn,
      C({}, s, a, {
        ref: t,
        align: o,
        collisionPadding: c,
        style: {
          boxSizing: "border-box",
          ...a.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      }),
    );
  }),
  [Cl, mu] = He(Le, {}),
  Pl = "SelectGroup";
He(Pl);
const Rl = "SelectItem";
He(Rl);
function pr(e) {
  return e === "" || e === void 0;
}
const mr = r.forwardRef((e, t) => {
  const { value: n, ...o } = e,
    c = r.useRef(null),
    a = H(t, c),
    s = xn(n);
  return (
    r.useEffect(() => {
      const i = c.current,
        l = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(i, n), i.dispatchEvent(f);
      }
    }, [s, n]),
    r.createElement(
      Ho,
      { asChild: !0 },
      r.createElement("select", C({}, o, { ref: a, defaultValue: n })),
    )
  );
});
mr.displayName = "BubbleSelect";
function vr(e) {
  const t = Y(e),
    n = r.useRef(""),
    o = r.useRef(0),
    c = r.useCallback(
      (s) => {
        const i = n.current + s;
        t(i),
          (function l(u) {
            (n.current = u),
              window.clearTimeout(o.current),
              u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
          })(i);
      },
      [t],
    ),
    a = r.useCallback(() => {
      (n.current = ""), window.clearTimeout(o.current);
    }, []);
  return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, c, a];
}
function hr(e, t, n) {
  const c = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let s = Tl(e, Math.max(a, 0));
  c.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) =>
    u.textValue.toLowerCase().startsWith(c.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function Tl(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const Sl = ml,
  Al = hl,
  kl = bl,
  Ol = $l,
  _l = wl,
  gr = "Checkbox",
  [Il, vu] = oe(gr),
  [Dl, hu] = Il(gr),
  Nl = r.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: o,
        checked: c,
        defaultChecked: a,
        required: s,
        disabled: i,
        value: l = "on",
        onCheckedChange: u,
        ...d
      } = e,
      [f, b] = r.useState(null),
      m = H(t, (g) => b(g)),
      v = r.useRef(!1),
      p = f ? !!f.closest("form") : !0,
      [h = !1, $] = ue({ prop: c, defaultProp: a, onChange: u }),
      w = r.useRef(h);
    return (
      r.useEffect(() => {
        const g = f == null ? void 0 : f.form;
        if (g) {
          const x = () => $(w.current);
          return (
            g.addEventListener("reset", x),
            () => g.removeEventListener("reset", x)
          );
        }
      }, [f, $]),
      r.createElement(
        Dl,
        { scope: n, state: h, disabled: i },
        r.createElement(
          j.button,
          C(
            {
              type: "button",
              role: "checkbox",
              "aria-checked": Me(h) ? "mixed" : h,
              "aria-required": s,
              "data-state": jl(h),
              "data-disabled": i ? "" : void 0,
              disabled: i,
              value: l,
            },
            d,
            {
              ref: m,
              onKeyDown: A(e.onKeyDown, (g) => {
                g.key === "Enter" && g.preventDefault();
              }),
              onClick: A(e.onClick, (g) => {
                $((x) => (Me(x) ? !0 : !x)),
                  p &&
                    ((v.current = g.isPropagationStopped()),
                    v.current || g.stopPropagation());
              }),
            },
          ),
        ),
        p &&
          r.createElement(Ml, {
            control: f,
            bubbles: !v.current,
            name: o,
            value: l,
            checked: h,
            required: s,
            disabled: i,
            style: { transform: "translateX(-100%)" },
          }),
      )
    );
  }),
  Ml = (e) => {
    const { control: t, checked: n, bubbles: o = !0, ...c } = e,
      a = r.useRef(null),
      s = xn(n),
      i = Io(t);
    return (
      r.useEffect(() => {
        const l = a.current,
          u = window.HTMLInputElement.prototype,
          f = Object.getOwnPropertyDescriptor(u, "checked").set;
        if (s !== n && f) {
          const b = new Event("click", { bubbles: o });
          (l.indeterminate = Me(n)),
            f.call(l, Me(n) ? !1 : n),
            l.dispatchEvent(b);
        }
      }, [s, n, o]),
      r.createElement(
        "input",
        C(
          {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: Me(n) ? !1 : n,
          },
          c,
          {
            tabIndex: -1,
            ref: a,
            style: {
              ...e.style,
              ...i,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          },
        ),
      )
    );
  };
function Me(e) {
  return e === "indeterminate";
}
function jl(e) {
  return Me(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ll = Nl;
r.forwardRef(({ children: e, ...t }, n) => {
  const o = r.Children.toArray(e)[0];
  return y.jsx(Kr, {
    asChild: !0,
    ref: n,
    ...t,
    children: o ?? y.jsx("button", { children: "Add button" }),
  });
});
var br = (e) => {
    const { target: t } = e;
    return !(
      !(t instanceof HTMLAnchorElement) ||
      t.hasAttribute("href") === !1 ||
      t.href === "#" ||
      (t.hasAttribute("target") && t.target === "_blank") ||
      e.ctrlKey ||
      e.metaKey
    );
  },
  Fl = r.forwardRef((e, t) => {
    const { open: n, onOpenChange: o } = e,
      { renderer: c } = r.useContext(Je);
    return (
      r.useEffect(() => {
        if (c !== void 0 || n === !1) return;
        const a = (s) => {
          const { target: i } = s;
          if (br(s) !== !1) {
            if (!(i instanceof HTMLAnchorElement)) return !1;
            i.closest('[role="dialog"]') && (o == null || o(!1));
          }
        };
        return (
          window.addEventListener("click", a),
          () => window.removeEventListener("click", a)
        );
      }, [n, o, c]),
      y.jsx(ta, { ...e })
    );
  }),
  zl = r.forwardRef(({ children: e, ...t }, n) => {
    const o = r.Children.toArray(e)[0];
    return y.jsx(na, {
      ref: n,
      asChild: !0,
      ...t,
      children: o ?? y.jsx("button", { children: "Add button or link" }),
    });
  }),
  ql = r.forwardRef((e, t) =>
    y.jsx(Wc, { children: y.jsx(oa, { ref: t, ...e }) }),
  ),
  Vl = r.forwardRef((e, t) => {
    const n = r.useRef(!1),
      { renderer: o } = r.useContext(Je);
    return (
      r.useEffect(() => {
        if (o !== void 0) return;
        n.current = !1;
        const c = (a) => {
          const { target: s } = a;
          if (br(a) !== !1) {
            if (!(s instanceof HTMLAnchorElement)) return !1;
            s.closest('[role="dialog"]') && (n.current = !0);
          }
        };
        return (
          window.addEventListener("click", c),
          () => window.removeEventListener("click", c)
        );
      }, [o]),
      y.jsx(ra, {
        ref: t,
        ...e,
        onCloseAutoFocus: (c) => {
          n.current && c.preventDefault();
        },
      })
    );
  }),
  Bl = ca,
  Hl = "h1";
r.forwardRef(({ tag: e = Hl, children: t, ...n }, o) =>
  y.jsx(Qc, { asChild: !0, children: y.jsx(e, { ref: o, ...n, children: t }) }),
);
r.forwardRef((e, t) => y.jsx(ys, { ...e }));
r.forwardRef(({ children: e, ...t }, n) => {
  const o = r.Children.toArray(e)[0];
  return y.jsx(Es, {
    asChild: !0,
    ref: n,
    ...t,
    children: o ?? y.jsx("button", { children: "Add button or link" }),
  });
});
r.forwardRef(
  (
    { sideOffset: e = 4, align: t = "center", hideWhenDetached: n = !0, ...o },
    c,
  ) =>
    y.jsx(Cs, {
      children: y.jsx(Ps, {
        ref: c,
        align: "center",
        sideOffset: e,
        hideWhenDetached: n,
        ...o,
      }),
    }),
);
r.forwardRef((e, t) => y.jsx(Ws, { children: y.jsx(Ks, { ...e }) }));
r.forwardRef(({ children: e, ...t }, n) => {
  const o = r.Children.toArray(e)[0];
  return y.jsx(Us, {
    asChild: !0,
    ref: n,
    ...t,
    children: o ?? y.jsx("button", { children: "Add button or link" }),
  });
});
r.forwardRef(({ sideOffset: e = 4, hideWhenDetached: t = !0, ...n }, o) =>
  y.jsx(Gs, {
    children: y.jsx(Ys, { ref: o, hideWhenDetached: t, sideOffset: e, ...n }),
  }),
);
r.forwardRef(({ value: e, ...t }, n) => {
  const o = Pt(t);
  return y.jsx(hi, { ref: n, value: e ?? o ?? "", ...t });
});
r.forwardRef(({ value: e, ...t }, n) => {
  const o = Pt(t);
  return y.jsx(gi, { ref: n, value: e ?? o ?? "", ...t });
});
r.forwardRef((e, t) => y.jsx($i, { ref: t, ...e }));
r.forwardRef((e, t) => y.jsx(_i, { ref: t, type: "single", ...e }));
r.forwardRef(({ value: e, ...t }, n) => {
  const o = Pt(t);
  return y.jsx(Ii, { ref: n, value: e ?? o ?? "", ...t });
});
var Jn = r.forwardRef(({ value: e, ...t }, n) => {
    const { renderer: o } = r.useContext(Je);
    let c = e;
    return (
      o === "canvas" && (c = c === "" ? "-1" : c),
      y.jsx(rl, { ref: n, value: c, ...t })
    );
  }),
  eo = cl,
  to = ll,
  Ie = r.forwardRef(({ value: e, ...t }, n) => {
    const o = Pt(t);
    return y.jsx(al, { ref: n, value: e ?? o, ...t });
  }),
  De = r.forwardRef(({ children: e, ...t }, n) => {
    const o = r.Children.toArray(e)[0];
    return y.jsx(il, {
      asChild: !0,
      ref: n,
      ...t,
      children: o ?? y.jsx("a", { children: "Add link component" }),
    });
  });
r.forwardRef(({ children: e, ...t }, n) => {
  const o = r.Children.toArray(e)[0];
  return y.jsx(sl, {
    asChild: !0,
    ref: n,
    ...t,
    children: o ?? y.jsx("button", { children: "Add button or link" }),
  });
});
r.forwardRef((e, t) => y.jsx(Sl, { ...e }));
r.forwardRef((e, t) => {
  const { renderer: n } = r.useContext(Je),
    o =
      n === "canvas"
        ? (c) => {
            c.preventDefault();
          }
        : void 0;
  return y.jsx(Al, { onPointerDown: o, ref: t, ...e });
});
r.forwardRef((e, t) => y.jsx(kl, { ref: t, ...e }));
r.forwardRef((e, t) =>
  y.jsx(Ol, { children: y.jsx(_l, { ref: t, ...e, position: "popper" }) }),
);
r.forwardRef((e, t) => y.jsx(Ll, { ref: t, ...e }));
const no = void 0,
  Wl = void 0,
  Kl = [
    {
      id: "2a3efd4b-f1e0-4064-947b-5cc5578a31d4",
      name: "Gilroy-ExtraBold_3kTHTP4Ztsk7jIBGkY4y0.ttf",
      description: null,
      projectId: "443741ca-dbfd-4955-92eb-42ade97f4e3c",
      size: 133044,
      type: "font",
      createdAt: "2024-02-11T11:54:02.469",
      format: "ttf",
      meta: { family: "Gilroy-ExtraBold", style: "normal", weight: 900 },
    },
    {
      id: "318a77be-df23-47b8-856c-07e38553bad6",
      name: "Gilroy-Bold_B8kWCl9z7OLYRuee-5syc.ttf",
      description: null,
      projectId: "443741ca-dbfd-4955-92eb-42ade97f4e3c",
      size: 137256,
      type: "font",
      createdAt: "2024-02-11T11:53:58.595",
      format: "ttf",
      meta: { family: "Gilroy-Bold", style: "normal", weight: 900 },
    },
    {
      id: "82c234fc-2bcb-4e79-a86c-0ceac94694c2",
      name: "Gilroy-Regular_17LELe86_Rw-B3uocl5ze.ttf",
      description: null,
      projectId: "443741ca-dbfd-4955-92eb-42ade97f4e3c",
      size: 145148,
      type: "font",
      createdAt: "2024-02-11T11:54:01.916",
      format: "ttf",
      meta: { family: "Gilroy-Regular", style: "normal", weight: 900 },
    },
  ],
  Ul = [],
  Gl = ({}) => {
    let [e, t] = r.useState(""),
      [n, o] = r.useState(""),
      [c, a] = r.useState(!1);
    return y.jsxs(Cr, {
      className:
        "w-body c1lyrd8g c1i4psos cudio2 c8ieroy ccaspz3 c6espuc c1520eu7 c607jub cxdi0sm",
      children: [
        y.jsxs(K, {
          className: "w-box cgqteq8 c1muvco8 c1rv7dgc cgi2p7l cam9nw5",
          children: [
            y.jsx(Pr, {
              className: "w-text",
              children: "Peretas LAE Admin Panel",
            }),
            y.jsxs(Jn, {
              value: e,
              onValueChange: (s) => {
                (e = s), t(e);
              },
              className:
                "w-navigation-menu c111922g c7zio92 cgqteq8 c1kd48m3 cgi2p7l cdnidzz cshogal",
              children: [
                y.jsxs(eo, {
                  className:
                    "w-menu-list cgqteq8 c1ur3iiw c14l1nf4 chquv0n c1bbynd2 cgi2p7l c1abbu66 cubprql c17sa8c3 c1xezabr c1bty9eg",
                  children: [
                    y.jsx(Ie, {
                      "data-ws-index": "0",
                      className: "w-menu-item",
                      children: y.jsx(De, {
                        className: "w-accessible-link-wrapper",
                        children: y.jsx(ne, {
                          href: "/adminpanel/getinfo",
                          className:
                            "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                          children: "Get Info",
                        }),
                      }),
                    }),
                    y.jsx(Ie, {
                      "data-ws-index": "1",
                      className: "w-menu-item",
                      children: y.jsx(De, {
                        className: "w-accessible-link-wrapper",
                        children: y.jsx(ne, {
                          href: "/adminpanel/postinfo",
                          className:
                            "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                          children: "POST Info",
                        }),
                      }),
                    }),
                    y.jsx(Ie, {
                      "data-ws-index": "2",
                      className: "w-menu-item",
                      children: y.jsx(De, {
                        className: "w-accessible-link-wrapper",
                        children: y.jsx(ne, {
                          href: "/adminpanel/deleteinfo",
                          className:
                            "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                          children: "DELETE Info",
                        }),
                      }),
                    }),
                  ],
                }),
                y.jsx(K, {
                  className: "w-box c1ao73xq cxrt34e ce8n2i4 cgqteq8 c1abbu66",
                  children: y.jsx(to, {
                    className:
                      "w-menu-viewport c111922g c5zndxf cnlf6m1 cubsbs1 cfozb82 cm97ar4 cfx14ju c1fa1msw c1ro6g6l c1cenmm5 c1lks077 c14774wn c15wbkfn cvdw690",
                  }),
                }),
              ],
            }),
            y.jsx(K, {
              className: "w-box c14j5b1n cvjy8yj ckzezjh cfs8w5e c5bmvt8",
              children: y.jsxs(Fl, {
                open: c,
                onOpenChange: (s) => {
                  (c = s), a(c);
                },
                children: [
                  y.jsx(zl, {
                    children: y.jsx(Rr, {
                      className:
                        "w-button col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 cjurjvo c1uzpgez c1ymjmca cfzk4cy c14qcf8g c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                      children: y.jsx(Tn, {
                        code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',
                        className: "w-html-embed",
                      }),
                    }),
                  }),
                  y.jsx(ql, {
                    className:
                      "w-dialog-overlay cg38plp cxrt34e c1bx1dvb cagcjm4 ccukouo csx7cf6 clyfitn c13pv1l0 cgqteq8 c1j1nkrh c16l6qc8 c1eqsx6h",
                    children: y.jsxs(Vl, {
                      className:
                        "w-dialog-content c1lyrd8g csx7cf6 cgqteq8 c1j1nkrh cp7nyx1 c1w5om5c clyfitn c1ro6g6l c111922g cudio2 ckzpk1 c1ur3iiw cvdw690 c1gfxoox",
                      children: [
                        y.jsx(K, {
                          tag: "nav",
                          role: "navigation",
                          className: "w-box ckzezjh c7ug9us",
                          children: y.jsxs(Jn, {
                            value: n,
                            onValueChange: (s) => {
                              (n = s), o(n);
                            },
                            className:
                              "w-navigation-menu c111922g c7zio92 ckzezjh cnugus8",
                            children: [
                              y.jsxs(eo, {
                                className:
                                  "w-menu-list cgqteq8 c1ur3iiw c14l1nf4 chquv0n c1bbynd2 cgi2p7l c1abbu66 cubprql c17sa8c3 c1xezabr c1bty9eg cnugus8",
                                children: [
                                  y.jsx(Ie, {
                                    "data-ws-index": "0",
                                    className: "w-menu-item",
                                    children: y.jsx(De, {
                                      className: "w-accessible-link-wrapper",
                                      children: y.jsx(ne, {
                                        className:
                                          "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                                        children: "Link One",
                                      }),
                                    }),
                                  }),
                                  y.jsx(Ie, {
                                    "data-ws-index": "1",
                                    className: "w-menu-item",
                                    children: y.jsxs(De, {
                                      className: "w-accessible-link-wrapper",
                                      children: [
                                        y.jsx(ne, {
                                          className:
                                            "w-link col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 cjurjvo c1uzpgez c1ymjmca cfzk4cy c1qwj500 clomtt6 cpyo7k5 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                                          children: "Link Two",
                                        }),
                                        y.jsx(ne, {
                                          className:
                                            "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                                          children: "Link Two",
                                        }),
                                      ],
                                    }),
                                  }),
                                  y.jsx(Ie, {
                                    "data-ws-index": "2",
                                    className: "w-menu-item",
                                    children: y.jsx(De, {
                                      className: "w-accessible-link-wrapper",
                                      children: y.jsx(ne, {
                                        className:
                                          "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                                        children: "Link Three",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              y.jsx(K, {
                                className:
                                  "w-box c1ao73xq cxrt34e ce8n2i4 cgqteq8 c1abbu66",
                                children: y.jsx(to, {
                                  className:
                                    "w-menu-viewport c111922g c5zndxf cnlf6m1 cubsbs1 cfozb82 cm97ar4 cfx14ju c1fa1msw c1ro6g6l c1cenmm5 c1lks077 c14774wn c15wbkfn cvdw690",
                                }),
                              }),
                              y.jsx(K, {
                                className:
                                  "w-box c9jjn2p c13h8iz9 cbmzexu c5ldj2j cyc4g3e cs8rtpg cpf350c ccth2io c1kd48m3 cjrpfrb csuy8wa c2txgsd c10x076s c17huk4e c13rucxa c131mjtt",
                                children: y.jsx(ne, {
                                  className:
                                    "w-link cubhim8 cs3ysub cn5lmeb cr8uy34 c1qvw83r cpyo7k5 c13h8iz9 c1kd48m3",
                                  children: "Button",
                                }),
                              }),
                              y.jsx(K, {
                                className:
                                  "w-box c14ob467 cmf9cqj cthb59i c7bmof7 c12xs21h c3f74gg cpf350c ccth2io cpyo7k5 cywpkqc c5kmxd5 c1rxx5hf c1ks6rhx cwr8e02 c1kd48m3 cjrpfrb csuy8wa c2txgsd c10x076s c17huk4e c11v2qnp",
                                children: y.jsx(ne, {
                                  className:
                                    "w-link cubhim8 cs3ysub cn5lmeb cr8uy34 c1qvw83r cpyo7k5 c13h8iz9 c1kd48m3 cvxkxom cjrje17",
                                  children: "Button",
                                }),
                              }),
                            ],
                          }),
                        }),
                        y.jsx(Bl, {
                          className:
                            "w-close-button c1ao73xq cdklxlg cdzmq0b c1tun4s6 c81solp c1nokibl crpptxx c12l9hu1 cgqteq8 cgi2p7l c1abbu66 c1ai7bvd cek2qhw col2suk ck9i8af cw0wklw c10q1tx0 ccf39sr c55ve24",
                          children: y.jsx(Tn, {
                            code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',
                            className: "w-html-embed",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        y.jsx(K, {
          className:
            "w-box col2suk cywpkqc cbmzexu c5ldj2j cyc4g3e cs8rtpg c1gvipaq c8pwc0m czhxsrn cutnmq3 c1ob5alq c1mes1rb cyiny2n cixjbos",
          children: y.jsxs(K, {
            className:
              "w-box cgqteq8 c1muvco8 cgi2p7l c1rv7dgc c1xsmw97 c8506lx cqqtz4w",
            children: [
              y.jsxs(K, {
                className:
                  "w-box col2suk cywpkqc cbmzexu c5ldj2j cyc4g3e cs8rtpg cef2r6n cv2isyn cgi2p7l c4r0rsb c1q3fsm7 c9brono c19e1ass",
                children: [
                  y.jsx(it, {
                    className:
                      "w-heading cubhim8 c1ibaqdq c1hn4h7o c1qkncey c1wokwk3",
                    children: "Admin Panel",
                  }),
                  y.jsx(lt, {
                    className:
                      "w-paragraph cubhim8 c1921ke9 c3rnz4y cr8uy34 c1qvw83r c1tmqf3e clyc9l4 c1lalaju ct0rl3f c1aaqwht",
                    children:
                      "Welcome to the Administration Panel. Please make sure that you have your authentication token ready. Please make DELETE info requests before POST requests to make sure there are no conflicts.",
                  }),
                ],
              }),
              y.jsxs(K, {
                className:
                  "w-box col2suk cywpkqc cbmzexu c5ldj2j cyc4g3e cs8rtpg c1kd48m3 cv2isyn cgi2p7l c4r0rsb c1q3fsm7 c9brono ccjhm83",
                children: [
                  y.jsxs(K, {
                    className:
                      "w-box col2suk cywpkqc cthb59i c7bmof7 c12xs21h c3f74gg c11mhp0k c1gawehw c3rmsex c1denla c1kd48m3 cv2isyn cgi2p7l c1rv7dgc c7xdr12 cw400w1 cjmemwb ct6jk67 c1muvco8 csg3c5s",
                    children: [
                      y.jsx(it, {
                        className: "w-heading",
                        children: "GET Information",
                      }),
                      y.jsx(lt, {
                        className:
                          "w-paragraph cubhim8 csg3c5s c3rnz4y cr8uy34 c1qvw83r c1tmqf3e clyc9l4 c1lalaju ct0rl3f c1aaqwht c187w9r1",
                        children:
                          "GET Information will get the information that is currently set on the API. This will fetch info that is public available to any user.",
                      }),
                      y.jsx(K, {
                        className:
                          "w-box cgqteq8 c1j1nkrh ch8q8u9 c4r0rsb c1mes1rb cj05sae c1sdrz63 crnv87w c10x2llg ci83k6p",
                        children: y.jsx(K, {
                          className:
                            "w-box cef2r6n cgqteq8 c1abbu66 cgi2p7l c1muvco8 cd5gpvf c1auf3yf c7ug9us",
                          children: y.jsx(ne, {
                            href: "/adminpanel/getinfo",
                            className:
                              "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                            children: "GET Info",
                          }),
                        }),
                      }),
                    ],
                  }),
                  y.jsxs(K, {
                    className:
                      "w-box col2suk cywpkqc cthb59i c7bmof7 c12xs21h c3f74gg c11mhp0k c1gawehw c3rmsex c1denla c1kd48m3 cv2isyn cgi2p7l c1rv7dgc c7xdr12 cw400w1 cjmemwb ct6jk67 c1muvco8 csg3c5s",
                    children: [
                      y.jsx(it, {
                        className: "w-heading",
                        children: "POST Information",
                      }),
                      y.jsx(lt, {
                        className:
                          "w-paragraph cubhim8 csg3c5s c3rnz4y cr8uy34 c1qvw83r c1tmqf3e clyc9l4 c1lalaju ct0rl3f c1aaqwht c187w9r1",
                        children:
                          "POST Information will allow you to update/add information that is available on the API. Requires an authentication key.",
                      }),
                      y.jsx(K, {
                        className:
                          "w-box cgqteq8 c1j1nkrh ch8q8u9 c4r0rsb c1mes1rb cj05sae c1sdrz63 crnv87w c10x2llg ci83k6p",
                        children: y.jsx(K, {
                          className:
                            "w-box cef2r6n cgqteq8 c1abbu66 cgi2p7l c1muvco8 cd5gpvf c1auf3yf c7ug9us",
                          children: y.jsx(ne, {
                            href: "/adminpanel/postinfo",
                            className:
                              "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                            children: "POST Info",
                          }),
                        }),
                      }),
                    ],
                  }),
                  y.jsxs(K, {
                    className:
                      "w-box col2suk cywpkqc cthb59i c7bmof7 c12xs21h c3f74gg c11mhp0k c1gawehw c3rmsex c1denla c1kd48m3 cv2isyn cgi2p7l c1rv7dgc c7xdr12 cw400w1 cjmemwb ct6jk67 c1muvco8 csg3c5s",
                    children: [
                      y.jsx(it, {
                        className: "w-heading",
                        children: "DELETE Information",
                      }),
                      y.jsx(lt, {
                        className:
                          "w-paragraph cubhim8 csg3c5s c3rnz4y cr8uy34 c1qvw83r c1tmqf3e clyc9l4 c1lalaju ct0rl3f c1aaqwht c187w9r1",
                        children:
                          "DELETE Information will allow you to Delete entries that are available on the API. ",
                      }),
                      y.jsx(K, {
                        className:
                          "w-box cgqteq8 c1j1nkrh ch8q8u9 c4r0rsb c1mes1rb cj05sae c1sdrz63 crnv87w c10x2llg ci83k6p",
                        children: y.jsx(K, {
                          className:
                            "w-box cef2r6n cgqteq8 c1abbu66 cgi2p7l c1muvco8 cd5gpvf c1auf3yf c7ug9us",
                          children: y.jsx(ne, {
                            href: "/adminpanel/deleteinfo",
                            className:
                              "w-link cubhim8 cs3ysub c3rnz4y cjurjvo c1uzpgez cpyo7k5 col2suk c1njlh7u cgi2p7l c1abbu66 cnlf6m1 cubsbs1 cfozb82 cm97ar4 c1ymjmca cfzk4cy c1qwj500 clomtt6 c1vprkkb c10q1tx0 cihzfjh cnvput4 c124tsoh c1q0f5cb c1snrw8z c1yy84gf c1lk1w0r",
                            children: "DELETE Info",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Yl = ({ data: e }) => {
    const { pageMeta: t } = e,
      { origin: n } = new URL(e.url);
    let o = t.socialImageUrl;
    return (
      t.socialImageAssetName &&
        (o = `${n}${oo({ src: t.socialImageAssetName, format: "raw" })}`),
      y.jsxs(y.Fragment, {
        children: [
          e.url && y.jsx("meta", { property: "og:url", content: e.url }),
          y.jsx("title", { children: t.title }),
          y.jsx("meta", { property: "og:title", content: t.title }),
          t.description &&
            y.jsxs(y.Fragment, {
              children: [
                y.jsx("meta", { name: "description", content: t.description }),
                y.jsx("meta", {
                  property: "og:description",
                  content: t.description,
                }),
              ],
            }),
          y.jsx("meta", { property: "og:type", content: "website" }),
          no,
          o &&
            y.jsx("meta", { property: "og:image", content: t.socialImageUrl }),
          no,
          t.excludePageFromSearch &&
            y.jsx("meta", { name: "robots", content: "noindex, nofollow" }),
          t.custom.map(({ property: c, content: a }) =>
            y.jsx("meta", { property: c, content: a }, c),
          ),
          Wl,
          Kl.map((c) =>
            y.jsx(
              "link",
              {
                rel: "preload",
                href: `${Ft}${c.name}`,
                as: "font",
                crossOrigin: "anonymous",
              },
              c.id,
            ),
          ),
          Ul.map((c) =>
            y.jsx(
              "link",
              { rel: "preload", href: `${Ft}${c.name}`, as: "image" },
              c.id,
            ),
          ),
        ],
      })
    );
  },
  Xl = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: Yl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Zl = ({ data: e }) => {
    const { system: t, resources: n, url: o } = e;
    return y.jsx(Je.Provider, {
      value: {
        imageLoader: oo,
        assetBaseUrl: Ft,
        imageBaseUrl: Tr,
        resources: n,
      },
      children: y.jsx(Gl, { system: t }, o),
    });
  },
  Ql = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Zl },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  gu = {
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
      valueSerialized: { type: "plus-file", exportValues: Sr },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/admin-panel/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: Xl },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/admin-panel/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: Ql },
    },
  };
export { gu as configValuesSerialized };
