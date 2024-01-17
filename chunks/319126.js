"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("866227"),
  l = n.n(i),
  a = n("782340");
let s = 3600,
  r = 24 * s,
  u = 30 * r,
  d = 12 * u,
  o = () => ({
    seconds: a.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
    minutes: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
    hours: a.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
    days: a.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
    months: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
    years: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
  }),
  c = (e, t) => null != t && null != t[e],
  _ = (e, t, n) => {
    var i, l, a;
    return c(e, t) ? null !== (l = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== l ? l : null : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null
  };
var f = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = l().diff(l(e), "s"),
    a = null != t ? t() : void 0,
    c = o(),
    f = (e, t) => {
      let i = _(e, a, n ? c : void 0);
      return null == i ? null : "string" == typeof i ? i : i.format({
        count: t
      })
    };
  if (i < 60) {
    let e = (null == a ? void 0 : a.seconds) != null ? f("seconds", i) : f("minutes", 1);
    if (null != e) return e
  }
  if (i < s) {
    let e = f("minutes", Math.floor(i / 60));
    if (null != e) return e
  }
  if (i < r) {
    let e = f("hours", Math.floor(i / s));
    if (null != e) return e
  }
  if (i < u) {
    let e = f("days", Math.floor(i / r));
    if (null != e) return e
  }
  if (i < d) {
    let e = f("months", Math.floor(i / u));
    if (null != e) return e
  }
  if (i >= d && (null == a ? void 0 : a.years) != null) {
    let e = f("years", Math.floor(i / d));
    if (null != e) return e
  }
  return l(e).format("LL")
}