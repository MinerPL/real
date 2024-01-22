"use strict";
E.r(e), E.d(e, {
  ChannelItemIcon: function() {
    return R
  },
  default: function() {
    return x
  }
}), E("222007");
var C = E("37983"),
  n = E("884691"),
  l = E("414456"),
  t = E.n(l),
  F = E("974667"),
  i = E("617258"),
  u = E("446674"),
  a = E("77078"),
  o = E("430568"),
  r = E("789394"),
  D = E("843962"),
  d = E("679653"),
  s = E("419830"),
  A = E("565298"),
  c = E("965381"),
  _ = E("305961"),
  N = E("824563"),
  f = E("191542"),
  m = E("697218"),
  T = E("37785"),
  h = E("98292"),
  v = E("587974"),
  S = E("50885"),
  I = E("49111"),
  p = E("133335"),
  L = E("404135");
let g = (B, e, E) => {
    n.useLayoutEffect(() => {
      let C = null;
      return B > 0 && (clearTimeout(C), C = setTimeout(() => {
        E(), clearTimeout(C)
      }, 4 * e)), () => clearTimeout(C)
    }, [B, e, E])
  },
  O = {
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked
  };

function y(B) {
  B.preventDefault(), B.stopPropagation()
}
let U = S.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function j(B) {
  let {
    channel: e
  } = B;
  return (0, C.jsx)(U, {
    src: (0, D.getChannelIconURL)(e),
    "aria-hidden": !0,
    size: a.AvatarSizes.SIZE_20
  })
}

function M(B) {
  let {
    channel: e
  } = B, E = (0, u.useStateFromStores)([m.default], () => m.default.getUser(null == e ? void 0 : e.recipients[0])), n = (0, u.useStateFromStores)([f.default], () => !(null == E || null == e || e.isMultiUserDM()) && null != f.default.getTypingUsers(null == e ? void 0 : e.id)[null == E ? void 0 : E.id]), {
    status: l,
    isMobile: t
  } = (0, u.useStateFromStoresObject)([N.default], () => null == E || null == e || e.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: N.default.getStatus(E.id),
    isMobile: N.default.isMobileOnline(E.id)
  });
  return (0, C.jsx)(U, {
    size: a.AvatarSizes.SIZE_20,
    src: null == E ? void 0 : E.getAvatarURL(void 0, 40),
    status: l,
    isMobile: t,
    isTyping: n,
    "aria-label": null == E ? void 0 : E.username,
    statusTooltip: !0
  })
}
let G = [13, 11, 10, 10, 10, 10, 10],
  R = B => {
    var e;
    let {
      className: E,
      channel: n,
      locked: l,
      hasActiveThreads: F,
      withGuildIcon: o
    } = B, r = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(n.guild_id), [n.guild_id]), D = o ? null == r ? void 0 : r.getIconURL(48) : null, d = null != D, A = function(B, e, E) {
      switch (B.type) {
        case I.ChannelTypes.DM:
          return function() {
            return (0, C.jsx)(M, {
              channel: B
            })
          };
        case I.ChannelTypes.GROUP_DM:
          return function() {
            return (0, C.jsx)(j, {
              channel: B
            })
          };
        default:
          return (0, s.getChannelIconComponent)(B, e, E)
      }
    }(n, r, {
      locked: l,
      hasActiveThreads: F
    });
    if (null == A) return null;
    let c = (0, s.getChannelIconTooltipText)(n, r, l, F),
      N = d && null != r ? "".concat(r.name, " - ").concat(c, " icon") : "".concat(c, " icon"),
      f = (0, i.getAcronym)(null !== (e = null == r ? void 0 : r.toString()) && void 0 !== e ? e : null),
      m = n.type === I.ChannelTypes.DM || n.type === I.ChannelTypes.GROUP_DM;
    return (0, C.jsx)(a.Tooltip, {
      text: c,
      delay: 500,
      children: B => {
        var e;
        return (0, C.jsxs)("div", {
          ...B,
          role: "img",
          "aria-label": N,
          className: t(L.iconContainer, {
            [L.iconContainerWithGuildIcon]: d
          }),
          children: [d && (0, C.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, C.jsx)("img", {
              alt: "",
              src: D,
              className: L.channelGuildIcon
            })
          }), !d && o && !m && (0, C.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, C.jsx)("div", {
              className: t(L.channelGuildIcon, L.acronym),
              style: {
                fontSize: (e = f).length - 1 > G.length ? G[G.length - 1] : G[e.length - 1]
              },
              children: f
            })
          }), (0, C.jsx)(A, {
            className: t(L.icon, {
              [L.iconWithGuildIcon]: o
            }, E)
          })]
        })
      }
    })
  };

function x(B) {
  var e;
  let {
    channel: E,
    name: l,
    muted: i,
    selected: u,
    connected: D,
    unread: s,
    locked: _,
    hasActiveThreads: N,
    onClick: f,
    onMouseDown: m,
    onMouseUp: v,
    onContextMenu: S,
    connectDragPreview: U,
    className: j,
    iconClassName: M,
    subtitle: G,
    subtitleColor: x,
    enableHangStatus: H,
    channel: {
      type: b
    },
    onMouseEnter: P,
    onMouseLeave: w,
    "aria-label": k,
    children: V,
    guild: J,
    channelTypeOverride: K,
    forceInteractable: W,
    mentionCount: z,
    unreadMode: Y,
    isFavoriteSuggestion: Q,
    withGuildIcon: X
  } = B, {
    enabled: Z,
    left: q
  } = r.ChannelEmojisExperiment.useExperiment({
    location: "337985_1"
  }, {
    autoTrackExposure: !1
  }), $ = Y === p.UnreadMode.IMPORTANT || null != z && z > 0, {
    role: BB,
    ...Be
  } = (0, F.useListItem)(E.id), BE = n.useRef(null), BC = n.useRef(null), Bn = (0, A.default)(E), Bl = I.Routes.CHANNEL(Bn, E.id), Bt = (0, d.default)(E), BF = E.isGuildVocal(), {
    reducedMotion: Bi
  } = n.useContext(a.AccessibilityPreferencesContext), Bu = Bi.enabled, [Ba, Bo] = n.useState([]);
  g(Ba.length, 500, () => {
    Bo([])
  });
  let Br = B => {
      if (Bu) return;
      let e = B.currentTarget.getBoundingClientRect(),
        E = e.width > e.height ? e.width : e.height,
        C = B.pageX - e.x - E / 2,
        n = B.pageY - e.y - E / 2;
      Bo([...Ba, {
        x: C,
        y: n,
        size: E
      }])
    },
    {
      emoji: BD,
      color: Bd
    } = (0, c.useChannelEmojiAndColor)(E),
    Bs = Z ? (0, C.jsx)(o.default, {
      emojiName: BD.name,
      emojiId: BD.id,
      src: BD.url,
      className: L.twemoji
    }) : null,
    BA = (0, C.jsx)("div", {
      className: t({
        [L.favoritesSuggestion]: Q
      }),
      children: (0, C.jsxs)(T.default, {
        role: BF && !D ? "button" : "link",
        href: BF ? void 0 : Bl,
        target: "_blank",
        ref: BE,
        className: t(L.link, {
          [L.linkWithChannelEmoji]: null != Bs
        }),
        onMouseDown: B => {
          Z && 0 === B.button && Br(B)
        },
        onClick: () => null == f ? void 0 : f(E),
        ...Be,
        "aria-label": k,
        focusProps: {
          enabled: !1
        },
        children: [Z && (0, C.jsx)("div", {
          className: L.emojiColorFill,
          style: {
            backgroundColor: Bd,
            opacity: u ? 1 : 0
          }
        }), (0, C.jsxs)("div", {
          className: L.linkTop,
          children: [null != Bs && q && (0, C.jsx)("div", {
            className: t(L.channelEmoji, L.channelEmojiLeftOfIcon),
            style: {
              backgroundColor: Bd
            },
            children: Bs
          }), (0, C.jsx)(R, {
            className: M,
            channel: E,
            guild: J,
            hasActiveThreads: N,
            locked: _,
            withGuildIcon: X
          }), null != Bs && !q && (0, C.jsx)("div", {
            className: t(L.channelEmoji, L.channelEmojiRightOfIcon),
            style: {
              backgroundColor: Bd
            },
            children: Bs
          }), (0, C.jsx)(h.default, {
            className: t(L.name),
            "aria-hidden": !0,
            children: null == l ? Bt : l
          }), n.Children.count(V) > 0 ? (0, C.jsx)("div", {
            onClick: y,
            className: L.children,
            children: V
          }) : null]
        }), H || null == G ? null : (0, C.jsx)("div", {
          className: t(L.linkBottom, {
            [L.withGuildIcon]: X
          }),
          children: (0, C.jsx)(a.Text, {
            color: null != x ? x : "text-muted",
            variant: "text-xs/medium",
            className: L.subtitle,
            children: G
          })
        }), Z && Ba.length > 0 && Ba.map((B, e) => (0, C.jsx)("span", {
          className: L.ripple,
          style: {
            top: B.y,
            left: B.x,
            width: B.size,
            height: B.size,
            backgroundColor: Bd,
            animationDuration: "".concat(500, "ms"),
            opacity: .36
          }
        }, "ripple-".concat(e)))]
      })
    });
  return (0, C.jsx)(a.FocusRing, {
    focusTarget: BE,
    ringTarget: BC,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, C.jsxs)("div", {
      className: t(j, null != f || null != v || null != m || W ? L.wrapper : L.notInteractive, (() => {
        if (u && !Z) return O.SELECTED;
        if (D) return O.CONNECTED;
        if (_) return O.LOCKED;
        if (i) return O.MUTED;
        if (s) return $ ? O.UNREAD_IMPORTANT : O.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(B) {
        switch (B) {
          case I.ChannelTypes.GUILD_STAGE_VOICE:
          case I.ChannelTypes.GUILD_VOICE:
            return L.typeVoice;
          case I.ChannelTypes.ANNOUNCEMENT_THREAD:
          case I.ChannelTypes.PUBLIC_THREAD:
          case I.ChannelTypes.PRIVATE_THREAD:
            return L.typeThread;
          case I.ChannelTypes.GUILD_ANNOUNCEMENT:
          case I.ChannelTypes.GUILD_TEXT:
          case I.ChannelTypes.GUILD_STORE:
          case I.ChannelTypes.GUILD_FORUM:
          case I.ChannelTypes.GUILD_MEDIA:
          default:
            return L.typeDefault
        }
      }(null != K ? K : b)),
      onMouseUp: B => null == v ? void 0 : v(B, E),
      onMouseDown: B => null == m ? void 0 : m(B, E),
      onContextMenu: B => null == S ? void 0 : S(B, E),
      onMouseEnter: P,
      onMouseLeave: w,
      children: [i || !s || u && !BF ? null : (0, C.jsx)("div", {
        className: t(L.unread, $ ? L.unreadImportant : void 0)
      }), null !== (e = null == U ? void 0 : U(BA)) && void 0 !== e ? e : BA]
    })
  })
}