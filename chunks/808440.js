"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("970728"),
  r = n("901582"),
  o = n("685665"),
  u = n("398604"),
  d = n("914169"),
  c = n("42793"),
  f = n("141254"),
  m = n("116616"),
  E = n("271938"),
  _ = n("305961"),
  h = n("337543"),
  p = n("430625"),
  I = n("740589"),
  T = n("472315"),
  g = n("783940"),
  C = n("530078"),
  S = n("649112"),
  A = n("793079"),
  N = n("135666"),
  M = n("158783"),
  v = n("49111");

function x(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: x
  } = e, {
    invite: O,
    inviteError: L
  } = (0, l.useStateFromStoresObject)([h.default], () => ({
    invite: h.default.getInvite(t),
    inviteError: h.default.getInviteError(t)
  }), [t]);
  s.useEffect(() => {
    null == O && i.default.resolveInvite(t)
  }, [t]);
  let R = null != O ? O : {
      state: v.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: P
    } = (0, o.default)(),
    y = (0, l.useStateFromStores)([_.default], () => (null == O ? void 0 : O.guild) != null ? _.default.getGuild(O.guild.id) : null, [O]),
    D = (0, l.useStateFromStores)([E.default], () => E.default.getId()),
    j = (0, l.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = R.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [R]),
    U = () => {
      null != R.channel && i.default.transitionToInviteSync(R)
    },
    b = () => {
      (0, f.isAtGuildCapAndNonPremium)() ? (0, m.default)({
        analyticsSource: {
          page: v.AnalyticsPages.INVITE_EMBED
        },
        analyticsLocation: {
          page: v.AnalyticsPages.INVITE_EMBED,
          section: v.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: P
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: x("Invite Button Embed")
      })
    },
    G = (0, a.jsx)(C.default, {
      onTransitionToInviteChannel: U,
      onAcceptInstantInvite: b,
      currentUserId: D,
      guild: y,
      invite: R,
      author: n
    });
  switch (R.state) {
    case v.InviteStates.RESOLVING:
      G = (0, a.jsx)(A.default, {});
      break;
    case v.InviteStates.EXPIRED:
    case v.InviteStates.BANNED:
      G = (0, a.jsx)(S.default, {
        banned: R.state === v.InviteStates.BANNED,
        author: n
      });
      break;
    case v.InviteStates.ERROR:
      G = (0, a.jsx)(I.default, {
        author: n,
        inviteError: L
      });
      break;
    default:
      switch ((0, c.getInviteType)(R)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, a.jsx)(g.default, {
            onTransitionToInviteChannel: U,
            onAcceptInstantInvite: b,
            currentUserId: D,
            invite: R,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, a.jsx)(T.default, {
            invite: R,
            author: n,
            getAcceptInviteContext: x
          });
          break;
        default:
          if ((0, c.isStreamInvite)(R)) {
            G = (0, a.jsx)(M.default, {
              onTransitionToInviteChannel: U,
              onAcceptInstantInvite: b,
              currentUserId: D,
              guild: y,
              invite: R
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(R)) {
            G = (0, a.jsx)(d.default, {
              guildScheduledEvent: j,
              guild: R.guild,
              channel: R.channel,
              isMember: null != y,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: U
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(R)) {
            G = (0, a.jsx)(N.default, {
              stageInstance: R.stage_instance,
              guild: R.guild,
              isMember: null != y,
              onTransitionToInviteChannel: U,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(R) && (G = (0, a.jsx)(p.default, {
            invite: R,
            getAcceptInviteContext: x
          }))
      }
  }
  return (0, a.jsx)(r.default, {
    section: v.AnalyticsSections.INVITE_LINK,
    children: G
  })
}