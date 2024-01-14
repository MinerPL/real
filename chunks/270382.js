"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("383173"),
  r = n("952451"),
  o = n("336376"),
  u = n("677099"),
  d = n("402088"),
  c = n("471671"),
  f = n("357007"),
  h = n("117362"),
  C = n("49111"),
  p = n("782340");
let m = "app-download-item",
  E = "add-server-item";

function g() {
  return !1
}

function I(e) {
  var t;
  let n = r.default.getMutableGuildStates();
  return e === C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE && !d.default.hasViewed(C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE) || e !== m && e !== E && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.mentionCount) > 0
}
let S = (0, h.cachedFunction)((e, t, n) => ["null", ...t, ...e, E, C.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE, m]);
var _ = a.forwardRef(function(e, t) {
  let n = (0, s.useStateFromStoresArray)([u.default, o.default, r.default], () => S(u.default.getGuildFolders(), o.default.getUnreadPrivateChannelIds(), r.default.getStoreChangeSentinel())),
    a = (0, s.useStateFromStores)([c.default], () => c.default.isFocused()),
    d = (0, s.useStateFromStores)([i.default], () => i.default.getExpandedFolders());
  return (0, l.jsx)(f.default, {
    ...e,
    ref: t,
    items: n,
    isUnread: g,
    textUnread: p.default.Messages.NEW,
    textMention: p.default.Messages.NEW,
    isMentioned: I,
    animate: a,
    expandedFolders: d
  })
})