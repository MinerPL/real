"use strict";
n.r(t), n.d(t, {
  WelcomeCTAContainer: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("850391"),
  o = n("41170"),
  u = n("300322"),
  d = n("26989"),
  c = n("305961"),
  f = n("957255"),
  m = n("697218"),
  E = n("718422"),
  _ = n("825150"),
  h = n("49111"),
  p = n("782340"),
  I = n("727171");
let T = e => {
    let {
      channel: t,
      message: n
    } = e, [l, u] = s.useState(!1), d = (0, _.pickWelcomeSticker)(n.id), c = s.useCallback(() => {
      (0, E.applyChatRestrictions)({
        type: r.ChatInputTypes.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: a
        } = e;
        a && (0, _.handleWelcomeCtaClicked)(t, n, d.id)
      })
    }, [t, n, d]);
    return (0, a.jsx)("div", {
      className: I.welcomeCTA,
      children: (0, a.jsxs)(i.Button, {
        className: I.welcomeCTAButtonOuter,
        innerClassName: I.welcomeCTAButton,
        color: i.ButtonColors.PRIMARY,
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        onClick: c,
        children: [(0, a.jsx)(o.default, {
          className: I.welcomeCTASticker,
          isInteracting: l,
          sticker: d,
          size: 28
        }), p.default.Messages.WELCOME_CTA_LABEL]
      })
    })
  },
  g = e => {
    let {
      message: t,
      channel: n
    } = e, s = n.getGuildId(), i = (0, l.useStateFromStores)([m.default, f.default, c.default, d.default], () => {
      var e;
      let a = m.default.getCurrentUser(),
        l = (0, u.computeIsReadOnlyThread)(n),
        i = f.default.can(h.Permissions.SEND_MESSAGES, n),
        r = null != s && null != a && (null === (e = d.default.getMember(s, a.id)) || void 0 === e ? void 0 : e.isPending),
        o = t.author.bot,
        E = c.default.getGuild(s),
        _ = null != E && (E.systemChannelFlags & h.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return i && !l && !r && !o && _
    });
    return null != s && i ? (0, a.jsx)(T, {
      message: t,
      channel: n
    }) : null
  }