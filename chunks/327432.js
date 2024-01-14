"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("272030"),
  r = n("264732"),
  o = n("679653"),
  u = n("176347"),
  d = n("850391"),
  c = n("557809"),
  f = n("393414"),
  h = n("503220"),
  p = n("42203"),
  m = n("474643"),
  E = n("305961"),
  C = n("664336"),
  g = n("867965"),
  S = n("782340"),
  _ = n("435599");

function I(e) {
  let {
    channelId: t
  } = e, I = (0, s.useStateFromStores)([p.default], () => p.default.getChannel(t)), T = (0, s.useStateFromStores)([p.default], () => p.default.getChannel(null == I ? void 0 : I.parent_id)), v = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(null == I ? void 0 : I.getGuildId())), x = (0, o.default)(I), N = l.useRef(!1);
  if (l.useEffect(() => {
      null != I && !N.current && (N.current = !0, (0, g.trackForumPostSidebarViewed)(I))
    }, [I]), null == I || null == v) return null;
  let A = (0, a.jsx)(h.default, {
    channel: I
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.default, {
      channel: I,
      draftType: m.DraftType.ChannelMessage
    }), (0, a.jsx)(C.default, {
      toolbar: A,
      "aria-label": S.default.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, c.renderTitle)({
        channel: I,
        parentChannel: T,
        channelName: x,
        guild: v,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.el("994827").then(n.bind(n, "994827"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: I
            })
          })
        },
        handleClick: function() {
          null != I && (0, f.transitionToGuild)(I.guild_id, I.id)
        }
      })
    }), (0, a.jsx)("div", {
      className: _.chat,
      children: (0, a.jsx)(u.default, {
        channel: I,
        guild: v,
        chatInputType: d.ChatInputTypes.SIDEBAR
      }, t)
    })]
  })
}