"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  r = l("77078"),
  i = l("419830"),
  u = l("267567"),
  d = l("42203"),
  o = l("305961"),
  c = l("697218"),
  E = l("718550"),
  f = l("189443"),
  _ = l("841363"),
  I = l("93550"),
  T = l("617347"),
  N = l("745049"),
  h = l("782340"),
  v = l("151990");

function m(e) {
  var t, l, m;
  let {
    guildId: S,
    guildEvent: g,
    guildEventId: C,
    error: x
  } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(g, S), [g, S]), {
    channel_id: A,
    name: O,
    image: R,
    description: M
  } = p, L = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(S), [S]), y = (0, _.getLocationFromEvent)(p), j = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(S), [S]), U = (0, i.getChannelIconComponent)(L, D);
  return (0, n.jsxs)("div", {
    className: v.content,
    children: [(0, n.jsx)(T.default, {
      className: v.previewCard,
      guild: D,
      channel: L,
      location: null != y ? y : void 0,
      creator: j,
      name: O,
      description: M,
      imageSource: (l = (0, f.convertToFakeGuildEvent)(g, S, C), null == (m = R) && null == l.image ? null : null != m && /^data:/.test(m) ? m : (0, I.default)(l)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: N.FAKE_EVENT_ID,
      eventPreview: p
    }), (0, n.jsxs)("div", {
      className: v.textContainer,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: h.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, n.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: v.subheader,
        children: null != location ? h.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : h.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, n.jsxs)("div", {
              className: v.channelName,
              children: [null != U ? (0, n.jsx)(U, {
                width: 20,
                height: 20,
                className: v.icon
              }) : (0, n.jsx)(E.default, {
                height: 18,
                width: 18,
                className: v.locationIcon
              }), null !== (e = null == L ? void 0 : L.name) && void 0 !== e ? e : y]
            })
          }
        })
      }), null != x && (0, n.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: v.subheader,
        children: x.getAnyErrorMessage()
      })]
    })]
  })
}