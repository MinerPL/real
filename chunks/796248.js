"use strict";
n.r(t), n.d(t, {
  useDatePickerState: function() {
    return g
  },
  useDateFieldState: function() {
    return S
  },
  useDateRangePickerState: function() {
    return w
  },
  useTimeFieldState: function() {
    return D
  }
}), n("70102"), n("808653"), n("222007");
var r = n("336468"),
  o = n("811719"),
  a = n("679750"),
  i = n("884691"),
  s = n("647572");

function c(e, t, n) {
  return null != e && (null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0)
}
let l = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  },
  u = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

function d(e, t) {
  var n;
  e = {
    ...t.shouldForceLeadingZeros ? u : l,
    ...e
  };
  let r = t.granularity || "minute",
    o = Object.keys(e),
    a = o.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : "year");
  a < 0 && (a = 0);
  let i = o.indexOf(r);
  if (i < 0 && (i = 2), a > i) throw Error("maxGranularity must be greater than granularity");
  let s = o.slice(a, i + 1).reduce((t, n) => (t[n] = e[n], t), {});
  return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), s.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = "short"), t.showEra && 0 === a && (s.era = "short"), s
}

function p(e) {
  return e && "hour" in e ? e : new r.Time
}

function f(e, t) {
  return null === e ? null : e ? (0, r.toCalendar)(e, t) : void 0
}

function m(e, t, n, o) {
  if (e) return f(e, n);
  let a = (0, r.toCalendar)((0, r.now)(o).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return "year" === t || "month" === t || "day" === t ? (0, r.toCalendarDate)(a) : o ? a : (0, r.toCalendarDateTime)(a)
}

function h(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : void 0,
    r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
  let [o, a] = (0, i.useState)([r, n]);
  return e && (o[0] !== r || o[1] !== n) && a([r, n]), !t && (t = e ? r : o[0]), [t, e ? n : o[1]]
}

function g(e) {
  var t, n;
  let s = (0, o.useOverlayTriggerState)(e),
    [l, u] = (0, a.useControlledState)(e.value, e.defaultValue || null, e.onChange),
    f = l || e.placeholderValue,
    [m, g] = h(f, e.granularity),
    v = null != l ? l.toDate(null != g ? g : "UTC") : null,
    y = "hour" === m || "minute" === m || "second" === m,
    b = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
    [x, S] = (0, i.useState)(null),
    [w, D] = (0, i.useState)(null);
  if (l && (x = l, "hour" in l && (w = l)), f && !(m in f)) throw Error("Invalid granularity " + m + " for value " + f.toString());
  let C = (e, t) => {
      u("timeZone" in t ? t.set((0, r.toCalendarDate)(e)) : (0, r.toCalendarDateTime)(e, t)), S(null), D(null)
    },
    P = e.isInvalid || "invalid" === e.validationState || c(l, e.minValue, e.maxValue) || l && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, l)),
    k = e.validationState || (P ? "invalid" : null);
  return {
    value: l,
    setValue: u,
    dateValue: x,
    timeValue: w,
    setDateValue: t => {
      let n = "function" == typeof b ? b() : b;
      y ? w || n ? C(t, w || p(e.placeholderValue)) : S(t) : u(t), n && s.setOpen(!1)
    },
    setTimeValue: e => {
      x && e ? C(x, e) : D(e)
    },
    granularity: m,
    hasTime: y,
    ...s,
    setOpen(t) {
      !t && !l && x && y && C(x, w || p(e.placeholderValue)), s.setOpen(t)
    },
    validationState: k,
    isInvalid: P,
    formatValue(t, n) {
      if (!v) return "";
      let o = d(n, {
        granularity: m,
        timeZone: g,
        hideTimeZone: e.hideTimeZone,
        hourCycle: e.hourCycle,
        showEra: "gregory" === l.calendar.identifier && "BC" === l.era
      });
      return new r.DateFormatter(t, o).format(v)
    }
  }
}
let v = new s.LocalizedStringDictionary({
    ach: {
      year: "mwaka",
      month: "dwe",
      day: "nino"
    },
    af: {
      year: "jjjj",
      month: "mm",
      day: "dd"
    },
    am: {
      year: "ዓዓዓዓ",
      month: "ሚሜ",
      day: "ቀቀ"
    },
    an: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    ar: {
      year: "سنة",
      month: "شهر",
      day: "يوم"
    },
    ast: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    az: {
      year: "iiii",
      month: "aa",
      day: "gg"
    },
    be: {
      year: "гггг",
      month: "мм",
      day: "дд"
    },
    bg: {
      year: "гггг",
      month: "мм",
      day: "дд"
    },
    bn: {
      year: "yyyy",
      month: "মিমি",
      day: "dd"
    },
    br: {
      year: "bbbb",
      month: "mm",
      day: "dd"
    },
    bs: {
      year: "gggg",
      month: "mm",
      day: "dd"
    },
    ca: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    cak: {
      year: "jjjj",
      month: "ii",
      day: "q'q'"
    },
    ckb: {
      year: "ساڵ",
      month: "مانگ",
      day: "ڕۆژ"
    },
    cs: {
      year: "rrrr",
      month: "mm",
      day: "dd"
    },
    cy: {
      year: "bbbb",
      month: "mm",
      day: "dd"
    },
    da: {
      year: "\xe5\xe5\xe5\xe5",
      month: "mm",
      day: "dd"
    },
    de: {
      year: "jjjj",
      month: "mm",
      day: "tt"
    },
    dsb: {
      year: "llll",
      month: "mm",
      day: "źź"
    },
    el: {
      year: "εεεε",
      month: "μμ",
      day: "ηη"
    },
    en: {
      year: "yyyy",
      month: "mm",
      day: "dd"
    },
    eo: {
      year: "jjjj",
      month: "mm",
      day: "tt"
    },
    es: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    et: {
      year: "aaaa",
      month: "kk",
      day: "pp"
    },
    eu: {
      year: "uuuu",
      month: "hh",
      day: "ee"
    },
    fa: {
      year: "سال",
      month: "ماه",
      day: "روز"
    },
    ff: {
      year: "hhhh",
      month: "ll",
      day: "\xf1\xf1"
    },
    fi: {
      year: "vvvv",
      month: "kk",
      day: "pp"
    },
    fr: {
      year: "aaaa",
      month: "mm",
      day: "jj"
    },
    fy: {
      year: "jjjj",
      month: "mm",
      day: "dd"
    },
    ga: {
      year: "bbbb",
      month: "mm",
      day: "ll"
    },
    gd: {
      year: "bbbb",
      month: "mm",
      day: "ll"
    },
    gl: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    he: {
      year: "שנה",
      month: "חודש",
      day: "יום"
    },
    hr: {
      year: "gggg",
      month: "mm",
      day: "dd"
    },
    hsb: {
      year: "llll",
      month: "mm",
      day: "dd"
    },
    hu: {
      year: "\xe9\xe9\xe9\xe9",
      month: "hh",
      day: "nn"
    },
    ia: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    id: {
      year: "tttt",
      month: "bb",
      day: "hh"
    },
    it: {
      year: "aaaa",
      month: "mm",
      day: "gg"
    },
    ja: {
      year: " 年 ",
      month: "月",
      day: "日"
    },
    ka: {
      year: "წწწწ",
      month: "თთ",
      day: "რრ"
    },
    kk: {
      year: "жжжж",
      month: "аа",
      day: "кк"
    },
    kn: {
      year: "ವವವವ",
      month: "ಮಿಮೀ",
      day: "ದಿದಿ"
    },
    ko: {
      year: "연도",
      month: "월",
      day: "일"
    },
    lb: {
      year: "jjjj",
      month: "mm",
      day: "dd"
    },
    lo: {
      year: "ປປປປ",
      month: "ດດ",
      day: "ວວ"
    },
    lt: {
      year: "mmmm",
      month: "mm",
      day: "dd"
    },
    lv: {
      year: "gggg",
      month: "mm",
      day: "dd"
    },
    meh: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    ml: {
      year: "വർഷം",
      month: "മാസം",
      day: "തീയതി"
    },
    ms: {
      year: "tttt",
      month: "mm",
      day: "hh"
    },
    nl: {
      year: "jjjj",
      month: "mm",
      day: "dd"
    },
    nn: {
      year: "\xe5\xe5\xe5\xe5",
      month: "mm",
      day: "dd"
    },
    no: {
      year: "\xe5\xe5\xe5\xe5",
      month: "mm",
      day: "dd"
    },
    oc: {
      year: "aaaa",
      month: "mm",
      day: "jj"
    },
    pl: {
      year: "rrrr",
      month: "mm",
      day: "dd"
    },
    pt: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    rm: {
      year: "oooo",
      month: "mm",
      day: "dd"
    },
    ro: {
      year: "aaaa",
      month: "ll",
      day: "zz"
    },
    ru: {
      year: "гггг",
      month: "мм",
      day: "дд"
    },
    sc: {
      year: "aaaa",
      month: "mm",
      day: "dd"
    },
    scn: {
      year: "aaaa",
      month: "mm",
      day: "jj"
    },
    sk: {
      year: "rrrr",
      month: "mm",
      day: "dd"
    },
    sl: {
      year: "llll",
      month: "mm",
      day: "dd"
    },
    sr: {
      year: "гггг",
      month: "мм",
      day: "дд"
    },
    sv: {
      year: "\xe5\xe5\xe5\xe5",
      month: "mm",
      day: "dd"
    },
    szl: {
      year: "rrrr",
      month: "mm",
      day: "dd"
    },
    tg: {
      year: "сссс",
      month: "мм",
      day: "рр"
    },
    th: {
      year: "ปปปป",
      month: "ดด",
      day: "วว"
    },
    tr: {
      year: "yyyy",
      month: "aa",
      day: "gg"
    },
    uk: {
      year: "рррр",
      month: "мм",
      day: "дд"
    },
    "zh-CN": {
      year: "年",
      month: "月",
      day: "日"
    },
    "zh-TW": {
      year: "年",
      month: "月",
      day: "日"
    }
  }, "en"),
  y = {
    year: !0,
    month: !0,
    day: !0,
    hour: !0,
    minute: !0,
    second: !0,
    dayPeriod: !0,
    era: !0
  },
  b = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
  },
  x = {
    dayperiod: "dayPeriod"
  };

function S(e) {
  var t, n;
  let {
    locale: o,
    createCalendar: s,
    hideTimeZone: l,
    isDisabled: u,
    isReadOnly: p,
    isRequired: g
  } = e, S = e.value || e.defaultValue || e.placeholderValue, [w, D] = h(S, e.granularity), C = D || "UTC";
  if (S && !(w in S)) throw Error("Invalid granularity " + w + " for value " + S.toString());
  let P = (0, i.useMemo)(() => new r.DateFormatter(o), [o]),
    k = (0, i.useMemo)(() => s(P.resolvedOptions().calendar), [s, P]),
    [E, T] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange),
    R = (0, i.useMemo)(() => f(E, k), [E, k]),
    [M, O] = (0, i.useState)(() => m(e.placeholderValue, w, k, D)),
    I = R || M,
    A = "gregory" === k.identifier && "BC" === I.era,
    N = (0, i.useMemo)(() => ({
      granularity: w,
      maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : "year",
      timeZone: D,
      hideTimeZone: l,
      hourCycle: e.hourCycle,
      showEra: A,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros
    }), [e.maxGranularity, w, e.hourCycle, e.shouldForceLeadingZeros, D, l, A]),
    L = (0, i.useMemo)(() => d({}, N), [N]),
    j = (0, i.useMemo)(() => new r.DateFormatter(o, L), [o, L]),
    F = (0, i.useMemo)(() => j.resolvedOptions(), [j]),
    K = (0, i.useMemo)(() => j.formatToParts(new Date).filter(e => y[e.type]).reduce((e, t) => (e[t.type] = !0, e), {}), [j]),
    [_, z] = (0, i.useState)(() => e.value || e.defaultValue ? {
      ...K
    } : {}),
    V = (0, i.useRef)(),
    B = (0, i.useRef)(k.identifier);
  (0, i.useEffect)(() => {
    k.identifier !== B.current && (B.current = k.identifier, O(t => Object.keys(_).length > 0 ? (0, r.toCalendar)(t, k) : m(e.placeholderValue, w, k, D)))
  }, [k, w, _, D, e.placeholderValue]), E && Object.keys(_).length < Object.keys(K).length && z(_ = {
    ...K
  }), null == E && Object.keys(_).length === Object.keys(K).length && (z(_ = {}), O(m(e.placeholderValue, w, k, D)));
  let U = R && Object.keys(_).length >= Object.keys(K).length ? R : M,
    H = t => {
      if (e.isDisabled || e.isReadOnly) return;
      let n = Object.keys(_),
        o = Object.keys(K);
      null == t ? (T(null), O(m(e.placeholderValue, w, k, D)), z({})) : n.length >= o.length || n.length === o.length - 1 && K.dayPeriod && !_.dayPeriod && "dayPeriod" !== V.current ? T(t = (0, r.toCalendar)(t, (null == S ? void 0 : S.calendar) || new r.GregorianCalendar)) : O(t), V.current = null
    },
    G = (0, i.useMemo)(() => U.toDate(C), [U, C]),
    W = (0, i.useMemo)(() => j.formatToParts(G).map(e => {
      var t, n, a;
      let i = y[e.type];
      "era" === e.type && 1 === k.getEras().length && (i = !1);
      let s = y[e.type] && !_[e.type];
      let c = y[e.type] ? (t = e.type, n = e.value, a = o, "era" === t || "dayPeriod" === t ? n : "year" === t || "month" === t || "day" === t ? v.getStringForLocale(t, a) : "––") : null;
      return {
        type: x[e.type] || e.type,
        text: s ? c : e.value,
        ... function(e, t, n) {
          switch (t) {
            case "era": {
              let t = e.calendar.getEras();
              return {
                value: t.indexOf(e.era),
                minValue: 0,
                maxValue: t.length - 1
              }
            }
            case "year":
              return {
                value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e)
              };
            case "month":
              return {
                value: e.month, minValue: (0, r.getMinimumMonthInYear)(e), maxValue: e.calendar.getMonthsInYear(e)
              };
            case "day":
              return {
                value: e.day, minValue: (0, r.getMinimumDayInMonth)(e), maxValue: e.calendar.getDaysInMonth(e)
              }
          }
          if ("hour" in e) switch (t) {
            case "dayPeriod":
              return {
                value: e.hour >= 12 ? 12 : 0, minValue: 0, maxValue: 12
              };
            case "hour":
              if (n.hour12) {
                let t = e.hour >= 12;
                return {
                  value: e.hour,
                  minValue: t ? 12 : 0,
                  maxValue: t ? 23 : 11
                }
              }
              return {
                value: e.hour, minValue: 0, maxValue: 23
              };
            case "minute":
              return {
                value: e.minute, minValue: 0, maxValue: 59
              };
            case "second":
              return {
                value: e.second, minValue: 0, maxValue: 59
              }
          }
          return {}
        }(U, e.type, F),
        isPlaceholder: s,
        placeholder: c,
        isEditable: i
      }
    }), [G, _, j, F, U, k, o]);
  K.era && _.year && !_.era ? (_.era = !0, z({
    ..._
  })) : !K.era && _.era && (delete _.era, z({
    ..._
  }));
  let q = e => {
      _[e] = !0, "year" === e && K.era && (_.era = !0), z({
        ..._
      })
    },
    Z = (e, t) => {
      if (_[e]) H(function(e, t, n, r) {
        switch (t) {
          case "era":
          case "year":
          case "month":
          case "day":
            return e.cycle(t, n, {
              round: "year" === t
            })
        }
        if ("hour" in e) switch (t) {
          case "dayPeriod": {
            let t = e.hour;
            return e.set({
              hour: t >= 12 ? t - 12 : t + 12
            })
          }
          case "hour":
          case "minute":
          case "second":
            return e.cycle(t, n, {
              round: "hour" !== t,
              hourCycle: r.hour12 ? 12 : 24
            })
        }
      }(U, e, t, F));
      else {
        q(e);
        let t = Object.keys(_),
          n = Object.keys(K);
        (t.length >= n.length || t.length === n.length - 1 && K.dayPeriod && !_.dayPeriod) && H(U)
      }
    },
    Y = e.isInvalid || "invalid" === e.validationState || c(R, e.minValue, e.maxValue);
  return {
    value: R,
    dateValue: G,
    calendar: k,
    setValue: H,
    segments: W,
    dateFormatter: j,
    validationState: e.validationState || (Y ? "invalid" : null),
    isInvalid: Y,
    granularity: w,
    maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : "year",
    isDisabled: u,
    isReadOnly: p,
    isRequired: g,
    increment(e) {
      Z(e, 1)
    },
    decrement(e) {
      Z(e, -1)
    },
    incrementPage(e) {
      Z(e, b[e] || 1)
    },
    decrementPage(e) {
      Z(e, -(b[e] || 1))
    },
    setSegment(e, t) {
      q(e), H(function(e, t, n, r) {
        switch (t) {
          case "day":
          case "month":
          case "year":
          case "era":
            return e.set({
              [t]: n
            })
        }
        if ("hour" in e) switch (t) {
          case "dayPeriod": {
            let t = e.hour,
              r = t >= 12;
            if (n >= 12 === r) return e;
            return e.set({
              hour: r ? t - 12 : t + 12
            })
          }
          case "hour":
            if (r.hour12) {
              let t = e.hour >= 12;
              !t && 12 === n && (n = 0), t && n < 12 && (n += 12)
            }
          case "minute":
          case "second":
            return e.set({
              [t]: n
            })
        }
      }(U, e, t, F))
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly) return;
      let t = Object.keys(_),
        n = Object.keys(K);
      t.length === n.length - 1 && K.dayPeriod && !_.dayPeriod && (z(_ = {
        ...K
      }), H(U.copy()))
    },
    clearSegment(t) {
      delete _[t], V.current = t, z({
        ..._
      });
      let n = m(e.placeholderValue, w, k, D),
        r = U;
      if ("dayPeriod" === t && "hour" in U && "hour" in n) {
        let e = U.hour >= 12,
          t = n.hour >= 12;
        e && !t ? r = U.set({
          hour: U.hour - 12
        }) : !e && t && (r = U.set({
          hour: U.hour + 12
        }))
      } else t in U && (r = U.set({
        [t]: n[t]
      }));
      T(null), H(r)
    },
    formatValue(e) {
      if (!R) return "";
      let t = d(e, N);
      return new r.DateFormatter(o, t).format(G)
    }
  }
}

function w(e) {
  var t, n, s;
  let l = (0, o.useOverlayTriggerState)(e),
    [u, f] = (0, a.useControlledState)(e.value, e.defaultValue || null, e.onChange),
    [m, g] = (0, i.useState)(() => u || {
      start: null,
      end: null
    });
  null == u && m.start && m.end && g(m = {
    start: null,
    end: null
  });
  let v = u || m,
    y = e => {
      g(e), (null == e ? void 0 : e.start) && e.end ? f(e) : f(null)
    },
    [b] = h((null == v ? void 0 : v.start) || (null == v ? void 0 : v.end) || e.placeholderValue, e.granularity),
    x = "hour" === b || "minute" === b || "second" === b,
    S = null === (s = e.shouldCloseOnSelect) || void 0 === s || s,
    [w, D] = (0, i.useState)(null),
    [C, P] = (0, i.useState)(null);
  v && v.start && v.end && (w = v, "hour" in v.start && (C = v));
  let k = (e, t) => {
      y({
        start: "timeZone" in t.start ? t.start.set((0, r.toCalendarDate)(e.start)) : (0, r.toCalendarDateTime)(e.start, t.start),
        end: "timeZone" in t.end ? t.end.set((0, r.toCalendarDate)(e.end)) : (0, r.toCalendarDateTime)(e.end, t.end)
      }), D(null), P(null)
    },
    E = t => {
      let n = "function" == typeof S ? S() : S;
      x ? n || t.start && t.end && (null == C ? void 0 : C.start) && (null == C ? void 0 : C.end) ? k(t, {
        start: (null == C ? void 0 : C.start) || p(e.placeholderValue),
        end: (null == C ? void 0 : C.end) || p(e.placeholderValue)
      }) : D(t) : t.start && t.end ? y(t) : D(t), n && l.setOpen(!1)
    },
    T = e => {
      (null == w ? void 0 : w.start) && (null == w ? void 0 : w.end) && e.start && e.end ? k(w, e) : P(e)
    },
    R = e.isInvalid || "invalid" === e.validationState || null != v && (c(v.start, e.minValue, e.maxValue) || c(v.end, e.minValue, e.maxValue) || null != v.end && null != v.start && 0 > v.end.compare(v.start) || (null == v ? void 0 : v.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, v.start)) || (null == v ? void 0 : v.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, v.end))),
    M = e.validationState || (R ? "invalid" : null);
  return {
    value: v,
    setValue: y,
    dateRange: w,
    timeRange: C,
    granularity: b,
    hasTime: x,
    setDate(e, t) {
      E({
        ...w,
        [e]: t
      })
    },
    setTime(e, t) {
      T({
        ...C,
        [e]: t
      })
    },
    setDateTime(e, t) {
      y({
        ...v,
        [e]: t
      })
    },
    setDateRange: E,
    setTimeRange: T,
    ...l,
    setOpen(t) {
      !t && !((null == v ? void 0 : v.start) && (null == v ? void 0 : v.end)) && (null == w ? void 0 : w.start) && (null == w ? void 0 : w.end) && x && k(w, {
        start: (null == C ? void 0 : C.start) || p(e.placeholderValue),
        end: (null == C ? void 0 : C.end) || p(e.placeholderValue)
      }), l.setOpen(t)
    },
    validationState: M,
    isInvalid: R,
    formatValue(t, n) {
      let o;
      if (!v || !v.start || !v.end) return null;
      let a = "timeZone" in v.start ? v.start.timeZone : void 0,
        i = e.granularity || (v.start && "minute" in v.start ? "minute" : "day"),
        s = "timeZone" in v.end ? v.end.timeZone : void 0,
        c = e.granularity || (v.end && "minute" in v.end ? "minute" : "day"),
        l = d(n, {
          granularity: i,
          timeZone: a,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle,
          showEra: "gregory" === v.start.calendar.identifier && "BC" === v.start.era || "gregory" === v.end.calendar.identifier && "BC" === v.end.era
        }),
        u = v.start.toDate(a || "UTC"),
        p = v.end.toDate(s || "UTC"),
        f = new r.DateFormatter(t, l);
      if (a === s && i === c && 0 !== v.start.compare(v.end)) {
        try {
          let e = f.formatRangeToParts(u, p),
            t = -1;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if ("shared" === r.source && "literal" === r.type) t = n;
            else if ("endRange" === r.source) break
          }
          let n = "",
            r = "";
          for (let o = 0; o < e.length; o++) o < t ? n += e[o].value : o > t && (r += e[o].value);
          return {
            start: n,
            end: r
          }
        } catch (e) {}
        o = f
      } else {
        let a = d(n, {
          granularity: c,
          timeZone: s,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle
        });
        o = new r.DateFormatter(t, a)
      }
      return {
        start: f.format(u),
        end: o.format(p)
      }
    }
  }
}

function D(e) {
  let {
    placeholderValue: t = new r.Time,
    minValue: n,
    maxValue: o,
    granularity: s
  } = e, [c, l] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange), u = c || t, d = u && "day" in u ? u : void 0, p = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, f = (0, i.useMemo)(() => {
    let e = u && "timeZone" in u ? u.timeZone : void 0;
    return (e || p) && t ? (0, r.toZoned)(C(t), e || p) : C(t)
  }, [t, u, p]), m = (0, i.useMemo)(() => C(n, d), [n, d]), h = (0, i.useMemo)(() => C(o, d), [o, d]), g = (0, i.useMemo)(() => c && "day" in c ? (0, r.toTime)(c) : c, [c]), v = (0, i.useMemo)(() => null == c ? null : C(c), [c]);
  return {
    ...S({
      ...e,
      value: v,
      defaultValue: void 0,
      minValue: m,
      maxValue: h,
      onChange: e => {
        l(d || p ? e : e && (0, r.toTime)(e))
      },
      granularity: s || "minute",
      maxGranularity: "hour",
      placeholderValue: f,
      createCalendar: () => new r.GregorianCalendar
    }),
    timeValue: g
  }
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.today)((0, r.getLocalTimeZone)());
  return e ? "day" in e ? e : (0, r.toCalendarDateTime)(t, e) : null
}