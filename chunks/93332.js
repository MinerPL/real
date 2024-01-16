"use strict";
i.r(e), i.d(e, {
  useUsername: function() {
    return G
  },
  useAvatar: function() {
    return H
  },
  BaseMessageHeader: function() {
    return F
  },
  default: function() {
    return W
  }
}), i("222007"), i("424973"), i("702976");
var l = i("37983"),
  r = i("884691"),
  n = i("414456"),
  a = i.n(n),
  s = i("394846"),
  o = i("446674"),
  d = i("77078"),
  c = i("793621"),
  h = i("406043"),
  u = i("28913"),
  f = i("321905"),
  x = i("865343"),
  m = i("253299"),
  g = i("119001"),
  j = i("626301"),
  w = i("256572"),
  p = i("436595"),
  v = i("713135"),
  N = i("506885"),
  C = i("106435"),
  y = i("168973"),
  T = i("305961"),
  E = i("957255"),
  I = i("697218"),
  _ = i("491401"),
  O = i("483093"),
  M = i("315102"),
  S = i("659500"),
  A = i("568734"),
  R = i("719923"),
  P = i("587904"),
  b = i("473374"),
  L = i("195483"),
  B = i("49111"),
  D = i("782340"),
  U = i("741566"),
  k = i("809764");

function V(t) {
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
      className: a(f, U.avatar, {
        [U.compact]: r,
        [U.clickable]: null != n,
        [U.communicationDisabledOpacity]: u
      }),
      alt: " "
    }), null == i || r ? null : (0, l.jsx)("img", {
      className: U.avatarDecoration,
      src: i,
      alt: " ",
      "aria-hidden": !0
    })]
  })
}

function G(t, e, i) {
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
    children: [(0, l.jsx)(L.default, {
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
        className: U.separator,
        children: ":"
      }), " "]
    })]
  })
}

function H(t) {
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
    animate: m = !0,
    onContextMenu: g,
    onClickAvatar: j,
    onPopoutRequestClose: w,
    showAvatarPopout: p
  } = e, [v, T] = r.useState(!1), E = (0, o.useStateFromStores)([y.default], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : y.default.displayCompactAvatars
  }), I = null != h.messageReference && null != h.webhookId, _ = h.author, {
    id: O
  } = _, {
    avatarSrc: A,
    avatarDecorationSrc: R,
    eventHandlers: P
  } = (0, C.default)({
    user: _,
    guildId: i,
    size: f ? 32 : 80,
    animateOnHover: null != x ? !v : !m,
    showPending: !0
  });
  if (r.useEffect(() => {
      if (null != x) return S.ComponentDispatch.subscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(x, ":").concat(O), T), () => void S.ComponentDispatch.unsubscribeKeyed(B.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(x, ":").concat(O), T)
    }, [O, x]), !f || E) {
    if (null != n && null != p) return (0, l.jsx)(d.Popout, {
      preload: I ? void 0 : function() {
        return (0, N.default)(h.author.id, null != u.guildMemberAvatar && null != i ? (0, M.getGuildMemberAvatarURLSimple)({
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
      children: t => V({
        ...P,
        avatarSrc: A,
        avatarDecorationSrc: R,
        compact: f,
        onClick: j,
        onContextMenu: g,
        onMouseDown: t.onMouseDown,
        onKeyDown: t.onKeyDown,
        showCommunicationDisabledStyles: a,
        className: c
      })
    });
    else return V({
      ...P,
      avatarSrc: A,
      avatarDecorationSrc: R,
      compact: f,
      onClick: j,
      onContextMenu: g,
      onMouseDown: void 0,
      onKeyDown: void 0,
      showCommunicationDisabledStyles: a,
      className: c
    })
  }
}

function F(t) {
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
    className: m,
    messageClassname: g,
    badges: j
  } = t;
  return (0, l.jsxs)(l.Fragment, {
    children: [!o && i, (0, l.jsxs)(d.H, {
      className: a(U.header, m),
      "aria-describedby": f,
      "aria-labelledby": u,
      children: [c && o && (0, l.jsx)(P.default, {
        id: (0, x.getMessageTimestampId)(e),
        compact: !0,
        timestamp: e.timestamp,
        isVisibleOnlyOnHover: h,
        className: g,
        isInline: !1
      }), o && i, (0, l.jsx)("span", {
        id: n,
        className: s,
        children: r
      }), c && !o && (0, l.jsx)(P.default, {
        id: (0, x.getMessageTimestampId)(e),
        timestamp: e.timestamp,
        className: g
      }), null != j && j.length > 0 ? (0, l.jsx)("div", {
        className: U.badgesContainer,
        children: j
      }) : null]
    })]
  })
}
let Z = t => {
  !t && (0, j.navigateToPremiumMarketingPage)()
};

function z(t) {
  let {
    currentUserIsPremium: e,
    author: i
  } = t, r = (0, o.useStateFromStores)([v.default], () => {
    var t;
    return null === (t = v.default.getUserProfile(i.id)) || void 0 === t ? void 0 : t.premiumSince
  });
  return (0, l.jsx)(d.Tooltip, {
    tooltipClassName: U.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: D.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, N.default)(i.id),
    children: t => (0, l.jsx)(d.Clickable, {
      className: U.nitroAuthorBadgeContainer,
      onClick: () => Z(e),
      "aria-label": D.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, l.jsx)("img", {
        alt: "",
        className: U.nitroBadgeSvg,
        src: k,
        ...t
      })
    })
  })
}

function W(t) {
  let {
    message: e,
    repliedMessage: i,
    compact: n = !1,
    renderPopout: s,
    showTimestampOnHover: j,
    roleIcon: v,
    subscribeToGroupId: N,
    hideTimestamp: C,
    className: M,
    channel: S
  } = t, P = r.useMemo(() => null != s ? t => s(t, e) : void 0, [s, e]), [, k] = (0, h.default)(e.author.id, t.guildId), V = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(t.guildId), [t.guildId]), Z = null != e.author && null != V && E.default.canManageUser(B.Permissions.MODERATE_MEMBERS, e.author, V), W = k && Z, K = H({
    props: t,
    guildId: t.guildId,
    handleRenderPopout: P,
    showCommunicationDisabledStyles: W
  }), Y = (0, o.useStateFromStores)([y.default], () => {
    var e;
    return null !== (e = t.displayCompactAvatars) && void 0 !== e ? e : y.default.displayCompactAvatars
  }), X = (!n || Y) && null != v && null != V ? (0, l.jsx)(d.Popout, {
    animation: d.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, l.jsx)(m.default, {
      roleIcon: v,
      guild: V
    }),
    children: t => {
      let {
        onClick: e
      } = t;
      return (0, l.jsx)(O.default, {
        ...v,
        className: U.roleIcon,
        onClick: e
      })
    }
  }, "role-icon-children") : (!n || Y) && null != v ? (0, l.jsx)(O.default, {
    ...v,
    className: U.roleIcon
  }, "role-icon-children") : null, q = (0, b.renderSystemTag)({
    message: e,
    channel: S,
    user: null == e ? void 0 : e.author,
    compact: n,
    isRepliedMessage: !1
  }), J = [], Q = I.default.getCurrentUser(), $ = R.default.isPremium(e.author), tt = R.default.isPremium(Q), te = null == S ? void 0 : S.isPrivate();
  (0, f.shouldShowNitroBadge)(null != v, "Message Username") && $ && !n && !te && J.push((0, l.jsx)(z, {
    currentUserIsPremium: tt,
    author: e.author
  }, "nitro-author")), null != X && J.push(X), null != V && J.push((0, l.jsx)(u.default, {
    guild: V,
    message: e
  }, "new-member")), null != S && null != V && J.push((0, l.jsx)(c.default, {
    guild: V,
    channel: S,
    userId: e.author.id
  }, "connections"));
  let ti = [];
  (0, A.hasFlag)(e.flags, B.MessageFlags.SUPPRESS_NOTIFICATIONS) && ti.push((0, l.jsx)(p.default, {}, "suppress-notifications")), e.isPoll() && ti.push((0, l.jsx)(g.default, {
    className: U.pollBadgeDefault
  }, "poll"));
  let tl = {};
  tl[L.UsernameDecorationTypes.SYSTEM_TAG] = q, tl[L.UsernameDecorationTypes.BADGES] = J;
  let tr = G(t, P, tl),
    tn = (0, x.getMessageUsernameId)(e, N),
    ta = (0, x.getMessageTimestampId)(e),
    ts = C ? "".concat(tn) : "".concat(tn, " ").concat(ta),
    to = (null == i ? void 0 : i.state) === w.ReferencedMessageState.LOADED ? (0, x.getMessageReplyId)(e) : void 0;
  return (0, l.jsx)(F, {
    message: e,
    avatar: K,
    username: (0, l.jsxs)(l.Fragment, {
      children: [W && (0, l.jsx)(d.Tooltip, {
        text: D.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: t => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(_.default, {
            ...t,
            width: 12,
            height: 12,
            className: n ? U.compactCommunicationDisabled : U.communicationDisabled
          }), (0, l.jsx)(d.HiddenVisually, {
            children: D.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), tr]
    }),
    usernameSpanId: (0, x.getMessageUsernameId)(e, N),
    usernameClassName: a(U.headerText, {
      [U.hasRoleIcon]: null != X,
      [U.hasBadges]: null != q || ti.length > 0
    }),
    compact: n,
    showTimestamp: !0 !== C,
    showTimestampOnHover: j,
    ariaLabelledBy: ts,
    ariaDescribedBy: to,
    className: M,
    badges: ti
  })
}