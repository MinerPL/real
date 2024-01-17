"use strict";
n.r(t), n.d(t, {
  WelcomeCTAContainer: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("850391"),
  o = n("41170"),
  u = n("300322"),
  d = n("26989"),
  c = n("305961"),
  f = n("957255"),
  E = n("697218"),
  _ = n("718422"),
  T = n("825150"),
  I = n("49111"),
  m = n("782340"),
  N = n("727171");
let p = e => {
    let {
      channel: t,
      message: n
    } = e, [a, u] = l.useState(!1), d = (0, T.pickWelcomeSticker)(n.id), c = l.useCallback(() => {
      (0, _.applyChatRestrictions)({
        type: r.ChatInputTypes.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: s
        } = e;
        s && (0, T.handleWelcomeCtaClicked)(t, n, d.id)
      })
    }, [t, n, d]);
    return (0, s.jsx)("div", {
      className: N.welcomeCTA,
      children: (0, s.jsxs)(i.Button, {
        className: N.welcomeCTAButtonOuter,
        innerClassName: N.welcomeCTAButton,
        color: i.ButtonColors.PRIMARY,
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        onClick: c,
        children: [(0, s.jsx)(o.default, {
          className: N.welcomeCTASticker,
          isInteracting: a,
          sticker: d,
          size: 28
        }), m.default.Messages.WELCOME_CTA_LABEL]
      })
    })
  },
  S = e => {
    let {
      message: t,
      channel: n
    } = e, l = n.getGuildId(), i = (0, a.useStateFromStores)([E.default, f.default, c.default, d.default], () => {
      var e;
      let s = E.default.getCurrentUser(),
        a = (0, u.computeIsReadOnlyThread)(n),
        i = f.default.can(I.Permissions.SEND_MESSAGES, n),
        r = null != l && null != s && (null === (e = d.default.getMember(l, s.id)) || void 0 === e ? void 0 : e.isPending),
        o = t.author.bot,
        _ = c.default.getGuild(l),
        T = null != _ && (_.systemChannelFlags & I.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return i && !a && !r && !o && T
    });
    return null != l && i ? (0, s.jsx)(p, {
      message: t,
      channel: n
    }) : null
  }