"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("797350"),
  o = n("237020"),
  u = n("352567"),
  d = n("305861"),
  c = n("715072"),
  f = n("77078"),
  h = n("917397"),
  p = n("290491"),
  m = n("305961"),
  E = n("124969"),
  C = n("153769"),
  g = n("136281"),
  S = n("782340"),
  _ = n("63893");

function I(e) {
  let {
    member: t
  } = e, n = (0, i.default)([m.default], () => m.default.getGuild(t.guildId), [t.guildId]), l = (0, h.useUserAccountVerified)(t.userId), I = (0, h.useUserRulesAgreementLevel)(t.userId, t.guildId), T = (0, h.useUserAccountAgeDate)(t.userId), v = (0, h.useGuildMemberJoinedAtDate)(t.userId, t.guildId);
  return null == n ? null : (0, a.jsx)("div", {
    className: s(_.safetySignalsMainContainer),
    children: (0, a.jsx)(f.FormItem, {
      title: S.default.Messages.ACCOUNT,
      titleClassName: _.infoTitle,
      children: (0, a.jsxs)(g.UserModInfoItemContainer, {
        children: [(0, a.jsx)(g.UserModInfoItem, {
          icon: (0, a.jsx)(d.ShieldUserIcon, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX,
            className: _.unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: S.default.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
          }),
          description: l ? (0, a.jsx)(o.CheckmarkBoldIcon, {
            className: s(_.verifiedIcon),
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX
          }) : (0, a.jsx)(u.CloseLargeBoldIcon, {
            className: s(_.unverifiedIcon),
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX
          })
        }), I !== h.UserRulesAgreementLevel.NO_GATE && (0, a.jsx)(g.UserModInfoItem, {
          icon: (0, a.jsx)(r.BookCheckIcon, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX,
            className: _.unusualDMLabelIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
          }),
          description: I === h.UserRulesAgreementLevel.AGREED ? (0, a.jsx)(o.CheckmarkBoldIcon, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, a.jsx)(u.CloseLargeBoldIcon, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX,
            color: f.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), (0, a.jsx)(g.UserModInfoItem, {
          icon: (0, a.jsx)(C.default, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: T
          })
        }), (0, a.jsx)(g.UserModInfoItem, {
          icon: (0, a.jsx)(E.GuildIcon, {
            guild: n,
            size: E.GuildIcon.Sizes.SMOL,
            animate: !1,
            className: _.guildIcon
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: v
          })
        }), (0, a.jsx)(g.UserModInfoItem, {
          icon: (0, a.jsx)(c.UserPlusIcon, {
            width: g.USER_MOD_ICON_SIZE_PX,
            height: g.USER_MOD_ICON_SIZE_PX
          }),
          name: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
          }),
          description: (0, a.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: (0, a.jsx)(p.default, {
              userId: t.userId,
              guildId: t.guildId
            })
          })
        })]
      })
    })
  })
}