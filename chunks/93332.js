"use strict";
i.r(e), i.d(e, {
  useUsername: function() {
    return F
  },
  useAvatar: function() {
    return Z
  },
  BaseMessageHeader: function() {
    return z
  },
  default: function() {
    return Y
  }
}), i("222007"), i("424973"), i("702976");
var l = i("37983"),
  r = i("884691"),
  n = i("414456"),
  a = i.n(n),
  s = i("394846"),
  o = i("446674"),
  d = i("77078"),
  c = i("563143"),
  h = i("250813"),
  u = i("793621"),
  f = i("406043"),
  x = i("28913"),
  g = i("321905"),
  m = i("865343"),
  j = i("253299"),
  w = i("119001"),
  p = i("626301"),
  v = i("256572"),
  C = i("436595"),
  N = i("713135"),
  y = i("506885"),
  T = i("106435"),
  I = i("168973"),
  E = i("305961"),
  _ = i("957255"),
  M = i("697218"),
  O = i("491401"),
  S = i("483093"),
  A = i("315102"),
  R = i("659500"),
  P = i("568734"),
  b = i("719923"),
  L = i("587904"),
  B = i("473374"),
  D = i("195483"),
  U = i("49111"),
  k = i("782340"),
  G = i("741566"),
  V = i("809764");

function H(t) {
  let {
    avatarSrc: e,
    avatarDecorationSrc: i,
    compact: r,
    onClick: n,
    onContextMenu: s,
    onMouseDown: o,
    onMouseEnter: d,
    onMouseLeave: c,
    onKeyDown: h,
    showCommunicationDisabledStyles: u = !1,
    className: f
  } = t;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("img", {
      onClick: n,
      onContextMenu: s,
      onMouseDown: o,
      onKeyDown: h,
      onMouseEnter: d,
      onMouseLeave: c,
      src: e,
      "aria-hidden": !0,
      className: a(f, G.avatar, {
        [G.compact]: r,
        [G.clickable]: null != n,
        [G.communicationDisabledOpacity]: u
      }),
      alt: " "
    }), null == i || r ? null : (0, l.jsx)("img", {
      className: G.avatarDecoration,
      src: i,
      alt: " ",
      "aria-hidden": !0
    })]
  })
}

function F(t, e, i) {
  let {
    message: r,
    channel: n,
    author: a,
    compact: s = !1,
    onContextMenu: o,
    showUsernamePopout: d,
    roleIcon: c,
    onClickUsername: h,
    onPopoutRequestClose: u
  } = t;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(D.default, {
      message: r,
      channel: n,
      author: a,
      compact: s,
      roleIcon: c,
      showPopout: d,
      renderPopout: e,
      onClick: h,
      onContextMenu: o,
      onPopoutRequestClose: u,
      decorations: i,
      renderRemixTag: !0
    }), s && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("i", {
        className: G.separator,
        children: ":"
      }), " "]
    })]
  })
}

function Z(t) {
  let {
    props: e,
    guildId: i,
    handleRenderPopout: n,
    showCommunicationDisabledStyles: a = !1,
    className: c
  } = t, {
    message: h,
    author: u,
    compact: f = !1,
    subscribeToGroupId: x,
    animate: g = !0,
    onContextMenu: m,
    onClickAvatar: j,
    onPopoutRequestClose: w,
    showAvatarPopout: p
  } = e, [v, C] = r.useState(!1), N = (0, o.useStateFromStores)([I.default], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : I.default.displayCompactAvatars
  }), E = null != h.messageReference && null != h.webhookId, _ = h.author, {
    id: M
  } = _, O = _;
  _.isClyde() && null != i && (null == u ? void 0 : u.guildMemberAvatar) != null && (O = _.addGuildAvatarHash(i, u.guildMemberAvatar));
  let {
    avatarSrc: S,
    avatarDecorationSrc: P,
    eventHandlers: b
  } = (0, T.default)({
    user: O,
    guildId: i,
    size: f ? 32 : 80,
    animateOnHover: null != x ? !v : !g,
    showPending: !0
  });
  if (r.useEffect(() => {
      if (null != x) return R.ComponentDispatch.subscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(x, ":").concat(M), C), () => void R.ComponentDispatch.unsubscribeKeyed(U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(x, ":").concat(M), C)
    }, [M, x]), !f || N) {
    if (null != n && null != p) return (0, l.jsx)(d.Popout, {
      preload: E ? void 0 : function() {
        return (0, y.default)(h.author.id, null != u.guildMemberAvatar && null != i ? (0, A.getGuildMemberAvatarURLSimple)({
          guildId: i,
          userId: h.author.id,
          avatar: u.guildMemberAvatar,
          size: 80
        }) : h.author.getAvatarURL(void 0, 80, !1), {
          guildId: i,
          channelId: h.channel_id
        })
      },
      renderPopout: n,
      shouldShow: p,
      position: s.isMobile ? "window_center" : "right",
      onRequestClose: w,
      children: t => H({
        ...b,
        avatarSrc: S,
        avatarDecorationSrc: P,
        compact: f,
        onClick: j,
        onContextMenu: m,
        onMouseDown: t.onMouseDown,
        onKeyDown: t.onKeyDown,
        showCommunicationDisabledStyles: a,
        className: c
      })
    });
    else return H({
      ...b,
      avatarSrc: S,
      avatarDecorationSrc: P,
      compact: f,
      onClick: j,
      onContextMenu: m,
      onMouseDown: void 0,
      onKeyDown: void 0,
      showCommunicationDisabledStyles: a,
      className: c
    })
  }
}

function z(t) {
  let {
    message: e,
    avatar: i,
    username: r,
    usernameSpanId: n,
    usernameClassName: s,
    compact: o,
    showTimestamp: c,
    showTimestampOnHover: h,
    ariaLabelledBy: u,
    ariaDescribedBy: f,
    className: x,
    messageClassname: g,
    badges: j
  } = t;
  return (0, l.jsxs)(l.Fragment, {
    children: [!o && i, (0, l.jsxs)(d.H, {
      className: a(G.header, x),
      "aria-describedby": f,
      "aria-labelledby": u,
      children: [c && o && (0, l.jsx)(L.default, {
        id: (0, m.getMessageTimestampId)(e),
        compact: !0,
        timestamp: e.timestamp,
        isVisibleOnlyOnHover: h,
        className: g,
        isInline: !1
      }), o && i, (0, l.jsx)("span", {
        id: n,
        className: s,
        children: r
      }), c && !o && (0, l.jsx)(L.default, {
        id: (0, m.getMessageTimestampId)(e),
        timestamp: e.timestamp,
        className: g
      }), null != j && j.length > 0 ? (0, l.jsx)("div", {
        className: G.badgesContainer,
        children: j
      }) : null]
    })]
  })
}
let W = t => {
  !t && (0, p.navigateToPremiumMarketingPage)()
};

function K(t) {
  let {
    currentUserIsPremium: e,
    author: i
  } = t, r = (0, o.useStateFromStores)([N.default], () => {
    var t;
    return null === (t = N.default.getUserProfile(i.id)) || void 0 === t ? void 0 : t.premiumSince
  });
  return (0, l.jsx)(d.Tooltip, {
    tooltipClassName: G.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, y.default)(i.id),
    children: t => (0, l.jsx)(d.Clickable, {
      className: G.nitroAuthorBadgeContainer,
      onClick: () => W(e),
      "aria-label": k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, l.jsx)("img", {
        alt: "",
        className: G.nitroBadgeSvg,
        src: V,
        ...t
      })
    })
  })
}

function Y(t) {
  var e;
  let i;
  let {
    message: n,
    repliedMessage: s,
    compact: p = !1,
    renderPopout: N,
    showTimestampOnHover: y,
    roleIcon: T,
    subscribeToGroupId: A,
    hideTimestamp: R,
    className: L,
    channel: V
  } = t, H = r.useMemo(() => null != N ? t => N(t, n) : void 0, [N, n]), [, W] = (0, f.default)(n.author.id, t.guildId), Y = (0, o.useStateFromStores)([E.default], () => E.default.getGuild(t.guildId), [t.guildId]), X = (0, c.useIsClydePersonalityModified)(null !== (e = null == Y ? void 0 : Y.id) && void 0 !== e ? e : "", !1), q = null != n.author && null != Y && _.default.canManageUser(U.Permissions.MODERATE_MEMBERS, n.author, Y), J = W && q, Q = Z({
    props: t,
    guildId: t.guildId,
    handleRenderPopout: H,
    showCommunicationDisabledStyles: J
  }), $ = (0, o.useStateFromStores)([I.default], () => {
    var e;
    return null !== (e = t.displayCompactAvatars) && void 0 !== e ? e : I.default.displayCompactAvatars
  }), tt = (!p || $) && null != T && null != Y ? (0, l.jsx)(d.Popout, {
    animation: d.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, l.jsx)(j.default, {
      roleIcon: T,
      guild: Y
    }),
    children: t => {
      let {
        onClick: e
      } = t;
      return (0, l.jsx)(S.default, {
        ...T,
        className: G.roleIcon,
        onClick: e
      })
    }
  }, "role-icon-children") : (!p || $) && null != T ? (0, l.jsx)(S.default, {
    ...T,
    className: G.roleIcon
  }, "role-icon-children") : null;
  i = null != Y && n.author.isClyde() && X ? (0, B.renderSystemTag)({
    message: n,
    channel: V,
    user: null == n ? void 0 : n.author,
    compact: p,
    hideIcon: !0,
    isRepliedMessage: !1,
    children: (0, l.jsx)(h.default, {}, "clyde-personality")
  }) : (0, B.renderSystemTag)({
    message: n,
    channel: V,
    user: null == n ? void 0 : n.author,
    compact: p,
    isRepliedMessage: !1
  });
  let te = [],
    ti = M.default.getCurrentUser(),
    tl = b.default.isPremium(n.author),
    tr = b.default.isPremium(ti),
    tn = null == V ? void 0 : V.isPrivate();
  (0, g.shouldShowNitroBadge)(null != T, "Message Username") && tl && !p && !tn && te.push((0, l.jsx)(K, {
    currentUserIsPremium: tr,
    author: n.author
  }, "nitro-author")), null != tt && te.push(tt), null != Y && te.push((0, l.jsx)(x.default, {
    guild: Y,
    message: n
  }, "new-member")), null != V && null != Y && te.push((0, l.jsx)(u.default, {
    guild: Y,
    channel: V,
    userId: n.author.id
  }, "connections"));
  let ta = [];
  (0, P.hasFlag)(n.flags, U.MessageFlags.SUPPRESS_NOTIFICATIONS) && ta.push((0, l.jsx)(C.default, {}, "suppress-notifications")), n.isPoll() && ta.push((0, l.jsx)(w.default, {
    className: G.pollBadgeDefault
  }, "poll"));
  let ts = {};
  ts[D.UsernameDecorationTypes.SYSTEM_TAG] = i, ts[D.UsernameDecorationTypes.BADGES] = te;
  let to = F(t, H, ts),
    td = (0, m.getMessageUsernameId)(n, A),
    tc = (0, m.getMessageTimestampId)(n),
    th = R ? "".concat(td) : "".concat(td, " ").concat(tc),
    tu = (null == s ? void 0 : s.state) === v.ReferencedMessageState.LOADED ? (0, m.getMessageReplyId)(n) : void 0;
  return (0, l.jsx)(z, {
    message: n,
    avatar: Q,
    username: (0, l.jsxs)(l.Fragment, {
      children: [J && (0, l.jsx)(d.Tooltip, {
        text: k.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: t => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(O.default, {
            ...t,
            width: 12,
            height: 12,
            className: p ? G.compactCommunicationDisabled : G.communicationDisabled
          }), (0, l.jsx)(d.HiddenVisually, {
            children: k.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), to]
    }),
    usernameSpanId: (0, m.getMessageUsernameId)(n, A),
    usernameClassName: a(G.headerText, {
      [G.hasRoleIcon]: null != tt,
      [G.hasBadges]: null != i || ta.length > 0
    }),
    compact: p,
    showTimestamp: !0 !== R,
    showTimestampOnHover: y,
    ariaLabelledBy: th,
    ariaDescribedBy: tu,
    className: L,
    badges: ta
  })
}