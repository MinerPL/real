"use strict";
n.r(t), n.d(t, {
  useLocale: function() {
    return g
  },
  useLocalizedStringFormatter: function() {
    return y
  },
  useDateFormatter: function() {
    return b
  },
  useNumberFormatter: function() {
    return S
  },
  useCollator: function() {
    return D
  },
  useFilter: function() {
    return C
  }
}), n("222007");
var r = n("884691"),
  o = n("46397"),
  a = n("647572"),
  i = n("336468"),
  s = n("290895"),
  c = n("676231");
let l = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
  u = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

function d() {
  let e = "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e])
  } catch (t) {
    e = "en-US"
  }
  return {
    locale: e,
    direction: ! function(e) {
      if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize().script;
        return l.has(t)
      }
      let t = e.split("-")[0];
      return u.has(t)
    }(e) ? "ltr" : "rtl"
  }
}
let p = d(),
  f = new Set;

function m() {
  for (let e of (p = d(), f)) e(p)
}
let h = r.createContext(null);

function g() {
  let e = function() {
    let e = (0, o.useIsSSR)(),
      [t, n] = (0, r.useState)(p);
    return ((0, r.useEffect)(() => (0 === f.size && window.addEventListener("languagechange", m), f.add(n), () => {
      f.delete(n), 0 === f.size && window.removeEventListener("languagechange", m)
    }), []), e) ? {
      locale: "en-US",
      direction: "ltr"
    } : t
  }();
  return (0, r.useContext)(h) || e
}
let v = new WeakMap;

function y(e) {
  let {
    locale: t
  } = g(), n = (0, r.useMemo)(() => {
    var t;
    let n;
    return t = e, !(n = v.get(t)) && (n = new a.LocalizedStringDictionary(t), v.set(t, n)), n
  }, [e]);
  return (0, r.useMemo)(() => new a.LocalizedStringFormatter(t, n), [t, n])
}

function b(e) {
  e = (0, s.useDeepMemo)(e, x);
  let {
    locale: t
  } = g();
  return (0, r.useMemo)(() => new i.DateFormatter(t, e), [t, e])
}

function x(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (t[r] !== e[r]) return !1;
  return !0
}

function S() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      locale: t
    } = g();
  return (0, r.useMemo)(() => new c.NumberFormatter(t, e), [t, e])
}
let w = new Map;

function D(e) {
  let {
    locale: t
  } = g(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (w.has(n)) return w.get(n);
  let r = new Intl.Collator(t, e);
  return w.set(n, r), r
}

function C(e) {
  let t = D({
      usage: "search",
      ...e
    }),
    n = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
    o = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
    a = (0, r.useCallback)((e, n) => {
      if (0 === n.length) return !0;
      e = e.normalize("NFC"), n = n.normalize("NFC");
      let r = 0,
        o = n.length;
      for (; r + o <= e.length; r++) {
        let a = e.slice(r, r + o);
        if (0 === t.compare(n, a)) return !0
      }
      return !1
    }, [t]);
  return (0, r.useMemo)(() => ({
    startsWith: n,
    endsWith: o,
    contains: a
  }), [n, o, a])
}