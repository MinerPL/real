"use strict";
l.r(t), l.d(t, {
  AVATAR_DECORATION_PADDING: function() {
    return R
  },
  default: function() {
    return T
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  r = l("414456"),
  i = l.n(r),
  u = l("769846"),
  s = l("77078"),
  o = l("502651"),
  d = l("390886"),
  c = l("357021"),
  f = l("106435"),
  m = l("79798"),
  h = l("982475"),
  p = l("928201"),
  E = l("118503"),
  v = l("11056"),
  _ = l("159885"),
  x = l("158998"),
  I = l("943722"),
  S = l("49111"),
  g = l("988268"),
  L = l("39141"),
  M = l("782340"),
  C = l("282730");
let R = (0, _.cssValueToNumber)(u.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
var T = function(e) {
  let {
    selected: t = !1,
    colorString: l,
    colorRoleName: r,
    isOwner: u,
    ownerTooltipText: _,
    lostPermissionTooltipText: R,
    isTyping: T = !1,
    nick: N,
    user: j,
    currentUser: A,
    activities: U,
    applicationStream: y,
    status: P,
    shouldAnimateStatus: b = !1,
    isMobile: F,
    premiumSince: O,
    channel: w,
    guildId: D,
    className: k,
    onMouseDown: B,
    onKeyDown: G,
    onClick: H,
    onContextMenu: V,
    onClickPremiumGuildIcon: z,
    onFocus: Z,
    "aria-controls": W,
    "aria-expanded": Y,
    "aria-posinset": q,
    "aria-setsize": K,
    id: J,
    tabIndex: X,
    itemProps: Q
  } = e, $ = x.default.useName(j), [ee, et] = n.useState(!1), [el, ea] = n.useState(null), {
    avatarDecorationSrc: en,
    avatarSrc: er,
    eventHandlers: ei
  } = (0, f.default)({
    user: j,
    size: s.AvatarSizes.SIZE_32,
    animateOnHover: !(t || ee),
    guildId: D
  }), eu = e => {
    ea(e)
  }, es = () => null != u && u && null == R ? (0, a.jsx)(s.Tooltip, {
    text: null != _ ? _ : M.default.Messages.GUILD_OWNER,
    children: e => (0, a.jsx)(p.default, {
      ...e,
      className: C.ownerIcon
    })
  }) : null, eo = () => null == O ? null : (0, a.jsx)(s.Tooltip, {
    text: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
      date: O
    }),
    children: e => (0, a.jsx)(s.Clickable, {
      onClick: z,
      tabIndex: -1,
      children: (0, a.jsx)(E.default, {
        ...e,
        className: C.premiumIcon
      })
    })
  }), ed = () => {
    let e = (null == j ? void 0 : j.isClyde()) ? g.BotTagTypes.AI : g.BotTagTypes.BOT;
    return null != j && j.bot ? (0, a.jsx)(m.default, {
      className: C.botTag,
      type: e,
      verified: j.isVerifiedBot()
    }) : null
  }, ec = () => (0, a.jsx)(s.NameWithRole, {
    roleName: r,
    color: null != l ? l : void 0,
    name: null != N ? N : $
  }), ef = P === S.StatusTypes.OFFLINE;
  return null == j ? (0, a.jsx)(h.default, {
    avatarSize: s.AvatarSizes.SIZE_32,
    className: C.placeholder
  }) : (0, a.jsx)(v.default, {
    selected: t,
    className: i(C.member, k, {
      [C.offline]: ef && !t
    }),
    innerClassName: C.memberInner,
    onClick: H,
    onKeyDown: G,
    onMouseDown: B,
    onContextMenu: V,
    onMouseEnter: () => {
      et(!0)
    },
    onMouseLeave: () => {
      et(!1)
    },
    name: null == R ? (0, a.jsx)("span", {
      className: C.username,
      children: ec()
    }) : (0, a.jsx)(s.Tooltip, {
      text: R,
      children: e => (0, a.jsx)("span", {
        ...e,
        className: i(C.username, C.lostPermission),
        children: ec()
      })
    }),
    avatar: ((e, t) => {
      let l = b ? s.AnimatedAvatar : s.Avatar,
        n = (0, o.default)(U) ? S.StatusTypes.STREAMING : P;
      return n = t ? void 0 : n, (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l, {
          ...ei,
          size: s.AvatarSizes.SIZE_32,
          src: er,
          isMobile: F,
          isTyping: T,
          status: n,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: en,
          typingIndicatorRef: eu
        }), (0, a.jsx)(c.default, {
          confettiSpawnRef: el,
          shouldFire: T && null != A && e.id !== A.id,
          confettiLocation: L.ConfettiLocation.MEMBER_USER
        })]
      })
    })(j, ef),
    subText: (() => {
      let e = null != U ? U.find(e => e.type === S.ActivityTypes.CUSTOM_STATUS) : null,
        t = null != e && null != j && (0, d.default)(e, j, w);
      return (0, a.jsx)(I.default, {
        className: C.activity,
        textClassName: C.activityText,
        emojiClassName: C.activityEmoji,
        activities: U,
        applicationStream: y,
        animate: ee,
        hideEmoji: !t,
        hideTooltip: !0,
        user: j
      })
    })(),
    decorators: (0, a.jsxs)(a.Fragment, {
      children: [ed(), es(), eo()]
    }),
    "aria-controls": W,
    "aria-expanded": Y,
    "aria-setsize": K,
    "aria-posinset": q,
    id: J,
    tabIndex: X,
    onFocus: Z,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4,
        left: 4,
        right: 4
      }
    },
    ...Q
  })
}