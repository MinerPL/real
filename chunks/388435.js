"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("37983");
a("884691");
var s = a("446674"),
  l = a("77078"),
  o = a("26989"),
  i = a("305961"),
  r = a("697218"),
  u = a("476765"),
  d = a("549103"),
  c = a("233322"),
  f = a("982527"),
  E = a("183886"),
  I = a("444752"),
  R = a("49111"),
  m = a("782340"),
  C = function(e) {
    let {
      guildId: t,
      transitionState: a,
      ...C
    } = e, M = (0, u.useUID)(), N = (0, s.useStateFromStores)([f.default], () => f.default.getRequest(t), [t]), _ = (0, s.useStateFromStores)([i.default], () => i.default.getGuild(t), [t]), A = (0, s.useStateFromStores)([r.default], () => {
      var e;
      return null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
    }), h = (0, s.useStateFromStores)([o.default], () => null != A ? o.default.getMember(t, A) : null, [A, t]), T = async () => {
      if (null == _ ? void 0 : _.hasFeature(R.GuildFeatures.PREVIEW_ENABLED)) {
        try {
          await d.default.removeGuildJoinRequest(t)
        } catch (e) {
          throw e
        }
        C.onClose(), (0, c.openMemberVerificationModal)(t)
      } else d.default.resetGuildJoinRequest(t)
    };
    return (0, n.jsx)(l.ModalRoot, {
      size: l.ModalSize.DYNAMIC,
      transitionState: a,
      "aria-labelledby": M,
      children: (0, n.jsx)(I.default, {
        ...C,
        headerId: M,
        reapplyText: m.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
        onReapply: T,
        confirmText: m.default.Messages.OKAY,
        onConfirm: () => {
          C.onClose(), null == h && (0, E.default)()
        },
        rejectionReason: null == N ? void 0 : N.rejectionReason,
        guild: _
      })
    })
  }