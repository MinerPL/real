"use strict";
l.r(t), l.d(t, {
  useIsChecked: function() {
    return d
  },
  useIsDisabled: function() {
    return r
  },
  useDisabledTooltip: function() {
    return o
  }
});
var n = l("446674"),
  a = l("282109"),
  s = l("986003"),
  i = l("782340");

function d(e, t, l) {
  return (0, n.useStateFromStores)([a.default], () => {
    var n, i, d;
    if (t === l) return a.default.isChannelOptedIn(e, t, !0);
    return n = e, i = t, d = a.default, !!(0, s.hasNotSetUpChannelOptIn)(n) || d.isChannelOptedIn(n, i, !0) || null != l && a.default.isChannelOptedIn(e, l, !0)
  })
}

function r(e, t, l) {
  return (0, n.useStateFromStores)([a.default], () => t !== l && null != l && a.default.isChannelOptedIn(e, l, !0))
}

function o(e, t) {
  return (0, n.useStateFromStores)([a.default], () => {
    if (null != t && a.default.isChannelOptedIn(e, t, !0)) return i.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY
  })
}