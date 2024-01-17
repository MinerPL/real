"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("970728"),
  r = n("901582"),
  o = n("685665"),
  u = n("398604"),
  d = n("914169"),
  c = n("42793"),
  f = n("141254"),
  E = n("116616"),
  _ = n("271938"),
  T = n("305961"),
  I = n("337543"),
  m = n("430625"),
  N = n("740589"),
  p = n("472315"),
  S = n("783940"),
  A = n("530078"),
  C = n("649112"),
  h = n("793079"),
  g = n("135666"),
  M = n("158783"),
  O = n("49111");

function R(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: R
  } = e, {
    invite: L,
    inviteError: v
  } = (0, a.useStateFromStoresObject)([I.default], () => ({
    invite: I.default.getInvite(t),
    inviteError: I.default.getInviteError(t)
  }), [t]);
  l.useEffect(() => {
    null == L && i.default.resolveInvite(t)
  }, [t]);
  let P = null != L ? L : {
      state: O.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: D
    } = (0, o.default)(),
    x = (0, a.useStateFromStores)([T.default], () => (null == L ? void 0 : L.guild) != null ? T.default.getGuild(L.guild.id) : null, [L]),
    y = (0, a.useStateFromStores)([_.default], () => _.default.getId()),
    U = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = P.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [P]),
    j = () => {
      null != P.channel && i.default.transitionToInviteSync(P)
    },
    b = () => {
      (0, f.isAtGuildCapAndNonPremium)() ? (0, E.default)({
        analyticsSource: {
          page: O.AnalyticsPages.INVITE_EMBED
        },
        analyticsLocation: {
          page: O.AnalyticsPages.INVITE_EMBED,
          section: O.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: D
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: R("Invite Button Embed")
      })
    },
    G = (0, s.jsx)(A.default, {
      onTransitionToInviteChannel: j,
      onAcceptInstantInvite: b,
      currentUserId: y,
      guild: x,
      invite: P,
      author: n
    });
  switch (P.state) {
    case O.InviteStates.RESOLVING:
      G = (0, s.jsx)(h.default, {});
      break;
    case O.InviteStates.EXPIRED:
    case O.InviteStates.BANNED:
      G = (0, s.jsx)(C.default, {
        banned: P.state === O.InviteStates.BANNED,
        author: n
      });
      break;
    case O.InviteStates.ERROR:
      G = (0, s.jsx)(N.default, {
        author: n,
        inviteError: v
      });
      break;
    default:
      switch ((0, c.getInviteType)(P)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, s.jsx)(S.default, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: b,
            currentUserId: y,
            invite: P,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, s.jsx)(p.default, {
            invite: P,
            author: n,
            getAcceptInviteContext: R
          });
          break;
        default:
          if ((0, c.isStreamInvite)(P)) {
            G = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b,
              currentUserId: y,
              guild: x,
              invite: P
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(P)) {
            G = (0, s.jsx)(d.default, {
              guildScheduledEvent: U,
              guild: P.guild,
              channel: P.channel,
              isMember: null != x,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: j
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(P)) {
            G = (0, s.jsx)(g.default, {
              stageInstance: P.stage_instance,
              guild: P.guild,
              isMember: null != x,
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(P) && (G = (0, s.jsx)(m.default, {
            invite: P,
            getAcceptInviteContext: R
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: O.AnalyticsSections.INVITE_LINK,
    children: G
  })
}