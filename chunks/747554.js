"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("424973"), n("222007");
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("803182"),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("305961"),
  c = n("162771"),
  f = n("549103"),
  E = n("233322"),
  _ = n("567054"),
  T = n("982527"),
  I = n("49111"),
  m = n("724210"),
  N = n("782340"),
  p = n("884938"),
  S = n("105029"),
  A = () => {
    var e, t;
    let l = (0, o.useStateFromStores)([c.default], () => c.default.getGuildId(), []),
      A = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]),
      C = (0, o.useStateFromStores)([T.default], () => null != l ? T.default.getRequest(l) : null, [l]),
      h = (0, r.useLocation)(),
      g = (null === (e = (0, i.matchPath)(h.pathname, I.Routes.CHANNEL(null == A ? void 0 : A.id, m.StaticChannelRoute.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == A || !A.hasVerificationGate() || g) return null;
    let M = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : _.GuildJoinRequestApplicationStatuses.STARTED,
      O = null,
      R = null,
      L = null,
      v = [p.notice, S.notice];
    switch (M) {
      case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
        O = N.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, R = N.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, L = () => {
          (0, u.openModal)(e => (0, s.jsx)(u.ConfirmModal, {
            header: N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
            confirmText: N.default.Messages.CONFIRM,
            cancelText: N.default.Messages.CANCEL,
            onConfirm: () => f.default.removeGuildJoinRequest(A.id),
            confirmButtonColor: u.Button.Colors.BRAND,
            ...e,
            children: (0, s.jsx)(u.Text, {
              variant: "text-md/normal",
              children: N.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
            })
          }))
        };
        break;
      case _.GuildJoinRequestApplicationStatuses.REJECTED:
        O = N.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, R = N.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, L = () => {
          (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("388435").then(n.bind(n, "388435"));
            return t => (0, s.jsx)(e, {
              guildId: A.id,
              ...t
            })
          })
        }, v.push(p.error);
        break;
      default:
        O = N.default.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, R = N.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, L = () => {
          (0, E.openMemberVerificationModal)(A.id)
        }
    }
    return (0, s.jsxs)("div", {
      className: a(...v),
      children: [(0, s.jsx)(u.Text, {
        className: p.header,
        variant: "text-sm/normal",
        children: O
      }), (0, s.jsx)(u.Button, {
        className: p.button,
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.WHITE,
        size: u.Button.Sizes.NONE,
        onClick: L,
        children: R
      })]
    })
  }