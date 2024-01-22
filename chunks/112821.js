"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("819855"),
  r = n("77078"),
  o = n("828986"),
  u = n("519841"),
  d = n("787336"),
  c = n("508229"),
  f = n("660478"),
  h = n("590514"),
  p = n("249561"),
  m = n("782340");
let E = [];

function C(e) {
  let {
    channel: t,
    onJump: C
  } = e, {
    messages: g,
    loading: S
  } = (0, s.useStateFromStoresObject)([c.default], () => {
    let e = c.default.getPinnedMessages(t.id),
      n = null != e ? e.messages : E;
    return {
      messages: n,
      loading: null == n || null != e && e.loading
    }
  }), _ = (0, s.useStateFromStores)([f.default], () => f.default.hasUnreadPins(t.id));
  return l.useEffect(() => {
    u.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "pins"
    }).enabled && g.some(d.messageHasExpiredAttachmentUrl) && o.default.fetchPins(t.id, !0)
  }, []), l.useEffect(() => {
    _ && o.default.ackPins(t.id)
  }, [_, t.id]), (0, a.jsx)(r.Dialog, {
    "aria-label": m.default.Messages.PINNED_MESSAGES,
    children: (0, a.jsx)(h.default, {
      onFetch: function() {
        o.default.ackPins(t.id), o.default.fetchPins(t.id)
      },
      channel: t,
      messages: g,
      loading: S,
      analyticsName: "Channel Pins",
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.default.unpinMessage(t, e.id) : p.default.confirmUnpin(t, e))
      },
      onJump: C,
      getProTip: function() {
        return t.isPrivate() ? m.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : m.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL
      },
      renderHeader: () => (0, a.jsx)(h.Header, {
        title: m.default.Messages.PINNED_MESSAGES
      }),
      renderEmptyState: function(e) {
        let l = m.default.Messages.NO_PINS_IN_CHANNEL;
        t.isPrivate() && (l = m.default.Messages.NO_PINS_IN_DM);
        let s = (0, i.isThemeLight)(e) ? n("615184") : n("992507");
        return (0, a.jsx)(h.EmptyStateCenter, {
          msg: l,
          image: s
        }, "emptystate")
      },
      listName: "pins"
    })
  })
}