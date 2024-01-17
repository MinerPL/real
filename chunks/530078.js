"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("702976");
var s = n("37983");
n("884691");
var l = n("498574"),
  a = n("77078"),
  i = n("974755"),
  r = n("233069"),
  o = n("174622"),
  u = n("266926"),
  d = n("568734"),
  c = n("427459"),
  f = n("665618"),
  E = n("605953"),
  _ = n("793079"),
  T = n("49111"),
  I = n("782340"),
  m = n("18978");

function N(e) {
  var t, N;
  let p, S, A, {
      onTransitionToInviteChannel: C,
      onAcceptInstantInvite: h,
      guild: g,
      invite: M,
      author: O,
      currentUserId: R
    } = e,
    L = R === O.id,
    {
      channel: v,
      approximate_member_count: P,
      approximate_presence_count: D
    } = M,
    x = M.state === T.InviteStates.ACCEPTING,
    y = null != v ? (0, r.createChannelRecordFromInvite)(v) : null,
    U = null != g,
    j = null != y,
    b = null != y && y.isGuildVocal(),
    G = null != y && y.isGuildStageVoice(),
    B = (0, d.hasFlag)(null !== (t = M.flags) && void 0 !== t ? t : 0, l.GuildInviteFlags.IS_GUEST_INVITE),
    F = null !== (N = null == g ? void 0 : g.hasFeature(T.GuildFeatures.HUB)) && void 0 !== N && N;
  if (null == g) {
    if (null == M.guild) return (0, s.jsx)(_.default, {});
    g = f.fromInviteGuild(M.guild);
    let e = (0, c.getGuildTierFromAppliedBoostCount)(M.guild.premium_subscription_count, M.guild.id);
    g.premiumTier = e
  }
  let k = U ? C : h,
    w = (0, E.getHeaderTextForInvite)({
      isVoiceChannel: b,
      isOwnInvite: L,
      isGuest: B,
      isHubGuild: F,
      isStage: G,
      isStream: !1
    });
  return S = (0, s.jsxs)("span", {
    className: m.infoTitle,
    children: [(0, s.jsx)(o.default.GuildName, {
      guild: g
    }), (0, s.jsx)("span", {
      className: m.infoBadge,
      children: (0, s.jsx)(i.default, {
        guild: g,
        isBannerVisible: !1,
        disableBoostClick: !0
      })
    })]
  }), B && (A = (0, s.jsx)(a.TooltipContainer, {
    className: m.tooltipContainer,
    text: I.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
    children: (0, s.jsx)(u.default, {
      className: m.infoIcon
    })
  })), b ? (S = (0, s.jsx)(o.default.Channel, {
    channel: y
  }), p = (0, s.jsxs)("span", {
    className: m.infoTitle,
    children: [I.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
      guildName: g.name
    }), (0, s.jsx)("span", {
      className: m.infoBadge,
      children: (0, s.jsx)(i.default, {
        guild: g,
        isBannerVisible: !1
      })
    })]
  })) : null != P && P >= 5 || null != D && D > 0 ? p = (0, s.jsx)(o.default.Data, {
    members: P,
    membersOnline: D
  }) : j && (p = (0, s.jsx)(o.default.Channel, {
    channel: y,
    guild: g
  })), (0, s.jsxs)(o.default, {
    children: [(0, s.jsx)(o.default.GuildSplash, {
      guild: g
    }), (0, s.jsx)(o.default.Header, {
      text: w,
      extra: A
    }), (0, s.jsxs)(o.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
        children: [(0, s.jsx)(o.default.Icon, {
          guild: g
        }), (0, s.jsx)(o.default.Info, {
          title: S,
          onClick: U ? k : null,
          children: p
        })]
      }), (0, s.jsx)(o.default.Button, {
        onClick: k,
        submitting: x,
        color: o.default.Button.Colors.GREEN,
        children: b ? G ? I.default.Messages.STAGE_CHANNEL_JOIN : I.default.Messages.INVITE_VOICE_CHANNEL_JOIN : U ? I.default.Messages.JOINED_GUILD : I.default.Messages.JOIN_GUILD
      })]
    }), g.hasFeature(T.GuildFeatures.HUB) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: m.separator
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: I.default.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
          onClick: () => (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("927475").then(n.bind(n, "927475"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          })
        })
      })]
    })]
  })
}