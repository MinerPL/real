"use strict";
a.r(t), a.d(t, {
  default: function() {
    return G
  }
}), a("424973");
var l = a("37983"),
  n = a("884691"),
  s = a("446674"),
  i = a("272030"),
  d = a("264732"),
  r = a("738073"),
  u = a("716241"),
  o = a("850391"),
  c = a("347895"),
  f = a("698882"),
  m = a("778613"),
  h = a("934288"),
  E = a("353054"),
  g = a("557809"),
  I = a("267567"),
  _ = a("393414"),
  x = a("208021"),
  v = a("42203"),
  S = a("474643"),
  C = a("247013"),
  N = a("305961"),
  p = a("377253"),
  T = a("957255"),
  A = a("697218"),
  j = a("945330"),
  M = a("664336"),
  D = a("679653"),
  F = a("176347"),
  L = a("49111"),
  R = a("782340"),
  b = a("768922");

function G(e) {
  let {
    channelId: t,
    baseChannelId: G,
    channelViewSource: O = "Split View",
    isResourceChannelView: y
  } = e, H = (0, s.useStateFromStores)([v.default], () => v.default.getChannel(t)), k = (0, s.useStateFromStores)([N.default], () => N.default.getGuild(null == H ? void 0 : H.getGuildId())), U = (0, s.useStateFromStores)([A.default], () => A.default.getCurrentUser()), w = (0, s.useStateFromStores)([C.default], () => C.default.didAgree(null == H ? void 0 : H.guild_id)), B = (null == U ? void 0 : U.nsfwAllowed) === !0, P = (0, D.default)(H), V = (0, s.useStateFromStores)([I.default], () => (null == k ? void 0 : k.id) != null && I.default.isLurking(k.id), [k]), W = (0, s.useStateFromStores)([T.default], () => T.default.can(L.Permissions.SEND_MESSAGES, H)), K = (0, m.useHasPendingMemberAction)(null == k ? void 0 : k.id, null == H ? void 0 : H.id), z = (0, h.default)(t), Y = (0, s.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getResourceForChannel(null == k ? void 0 : k.id, t)) || void 0 === e ? void 0 : e.title
  }), Z = n.useRef(!1);
  if (n.useEffect(() => {
      null != H && !Z.current && (Z.current = !0, (0, u.trackWithMetadata)(L.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(H.id),
        channel_id: H.id,
        guild_id: H.guild_id,
        parent_id: H.parent_id,
        channel_view: O,
        can_send_message: W,
        has_pending_member_action: K
      }))
    }, [H, O, W, K]), null == H || null == k) return null;
  let X = [];
  return (!V && X.push((0, l.jsx)(E.default, {
    channel: H
  }, "notifications")), X.push((0, l.jsx)(M.default.Icon, {
    icon: j.default,
    tooltip: R.default.Messages.CLOSE,
    onClick: () => x.default.closeChannelSidebar(G)
  }, "close")), !H.isNSFW() || B && w) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.default, {
      channel: H,
      draftType: S.DraftType.ChannelMessage
    }), (0, l.jsx)(M.default, {
      toolbar: X,
      "aria-label": R.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, g.renderTitle)({
        channel: H,
        channelName: z ? Y : P,
        guild: k,
        inSidebar: !0,
        handleContextMenu: e => {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await a.el("229233").then(a.bind(a, "229233"));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: H,
              guild: k
            })
          })
        },
        handleClick: () => {
          let e = p.default.getMessages(H.id);
          if (y) {
            (0, _.transitionTo)(L.Routes.CHANNEL(H.guild_id, H.id)), (0, c.selectHomeResourceChannel)(H.guild_id, null);
            return
          }(0, _.transitionToGuild)(H.guild_id, H.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: b.chat,
      children: (0, l.jsx)(F.default, {
        channel: H,
        guild: k,
        chatInputType: o.ChatInputTypes.SIDEBAR
      }, t)
    })]
  }) : (0, l.jsx)(r.default, {
    guild: k
  })
}