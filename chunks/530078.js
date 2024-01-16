"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("702976");
var a = n("37983");
n("884691");
var s = n("498574"),
  l = n("77078"),
  i = n("974755"),
  r = n("233069"),
  o = n("174622"),
  u = n("266926"),
  d = n("568734"),
  c = n("427459"),
  f = n("665618"),
  m = n("605953"),
  E = n("793079"),
  _ = n("49111"),
  h = n("782340"),
  p = n("18978");

function I(e) {
  var t, I;
  let T, g, C, {
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: A,
      guild: N,
      invite: M,
      author: v,
      currentUserId: x
    } = e,
    O = x === v.id,
    {
      channel: L,
      approximate_member_count: R,
      approximate_presence_count: P
    } = M,
    y = M.state === _.InviteStates.ACCEPTING,
    D = null != L ? (0, r.createChannelRecordFromInvite)(L) : null,
    j = null != N,
    U = null != D,
    b = null != D && D.isGuildVocal(),
    G = null != D && D.isGuildStageVoice(),
    B = (0, d.hasFlag)(null !== (t = M.flags) && void 0 !== t ? t : 0, s.GuildInviteFlags.IS_GUEST_INVITE),
    k = null !== (I = null == N ? void 0 : N.hasFeature(_.GuildFeatures.HUB)) && void 0 !== I && I;
  if (null == N) {
    if (null == M.guild) return (0, a.jsx)(E.default, {});
    N = f.fromInviteGuild(M.guild);
    let e = (0, c.getGuildTierFromAppliedBoostCount)(M.guild.premium_subscription_count, M.guild.id);
    N.premiumTier = e
  }
  let w = j ? S : A,
    H = (0, m.getHeaderTextForInvite)({
      isVoiceChannel: b,
      isOwnInvite: O,
      isGuest: B,
      isHubGuild: k,
      isStage: G,
      isStream: !1
    });
  return g = (0, a.jsxs)("span", {
    className: p.infoTitle,
    children: [(0, a.jsx)(o.default.GuildName, {
      guild: N
    }), (0, a.jsx)("span", {
      className: p.infoBadge,
      children: (0, a.jsx)(i.default, {
        guild: N,
        isBannerVisible: !1,
        disableBoostClick: !0
      })
    })]
  }), B && (C = (0, a.jsx)(l.TooltipContainer, {
    className: p.tooltipContainer,
    text: h.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
    children: (0, a.jsx)(u.default, {
      className: p.infoIcon
    })
  })), b ? (g = (0, a.jsx)(o.default.Channel, {
    channel: D
  }), T = (0, a.jsxs)("span", {
    className: p.infoTitle,
    children: [h.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
      guildName: N.name
    }), (0, a.jsx)("span", {
      className: p.infoBadge,
      children: (0, a.jsx)(i.default, {
        guild: N,
        isBannerVisible: !1
      })
    })]
  })) : null != R && R >= 5 || null != P && P > 0 ? T = (0, a.jsx)(o.default.Data, {
    members: R,
    membersOnline: P
  }) : U && (T = (0, a.jsx)(o.default.Channel, {
    channel: D,
    guild: N
  })), (0, a.jsxs)(o.default, {
    children: [(0, a.jsx)(o.default.GuildSplash, {
      guild: N
    }), (0, a.jsx)(o.default.Header, {
      text: H,
      extra: C
    }), (0, a.jsxs)(o.default.Body, {
      children: [(0, a.jsxs)("div", {
        className: p.headerLine,
        children: [(0, a.jsx)(o.default.Icon, {
          guild: N
        }), (0, a.jsx)(o.default.Info, {
          title: g,
          onClick: j ? w : null,
          children: T
        })]
      }), (0, a.jsx)(o.default.Button, {
        onClick: w,
        submitting: y,
        color: o.default.Button.Colors.GREEN,
        children: b ? G ? h.default.Messages.STAGE_CHANNEL_JOIN : h.default.Messages.INVITE_VOICE_CHANNEL_JOIN : j ? h.default.Messages.JOINED_GUILD : h.default.Messages.JOIN_GUILD
      })]
    }), N.hasFeature(_.GuildFeatures.HUB) && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: p.separator
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.default.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
          onClick: () => (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("927475").then(n.bind(n, "927475"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          })
        })
      })]
    })]
  })
}