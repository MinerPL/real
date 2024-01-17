"use strict";
l.r(r), l.d(r, {
  default: function() {
    return J
  }
}), l("222007");
var t, o, i = l("37983"),
  n = l("884691"),
  a = l("414456"),
  s = l.n(a),
  u = l("509043"),
  f = l("446674"),
  d = l("669491"),
  c = l("77078"),
  P = l("79112"),
  E = l("812204"),
  T = l("685665"),
  p = l("462274"),
  O = l("618017"),
  U = l("190045"),
  _ = l("335031"),
  h = l("252063"),
  y = l("38766"),
  m = l("845579"),
  v = l("271938"),
  S = l("42203"),
  I = l("305961"),
  N = l("18494"),
  A = l("697218"),
  L = l("471671"),
  g = l("275623"),
  R = l("945330"),
  C = l("474571"),
  M = l("216422"),
  B = l("987772"),
  b = l("956089"),
  D = l("599110"),
  x = l("315102"),
  H = l("719923"),
  w = l("713135"),
  k = l("581295"),
  F = l("878569"),
  G = l("236100"),
  j = l("590456"),
  W = l("49111"),
  z = l("646718"),
  Y = l("782340"),
  X = l("220817");
(o = t || (t = {}))[o.SHOULD_LOAD = 0] = "SHOULD_LOAD", o[o.LOADING = 1] = "LOADING", o[o.COMPLETE = 2] = "COMPLETE";
let V = {
    [j.UserProfileTypes.POPOUT]: 18,
    [j.UserProfileTypes.MODAL]: 24,
    [j.UserProfileTypes.SETTINGS]: 0,
    [j.UserProfileTypes.PANEL]: 18,
    [j.UserProfileTypes.POMELO_POPOUT]: 18,
    [j.UserProfileTypes.CANCEL_MODAL]: 0
  },
  Z = {
    [j.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
    [j.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
    [j.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
    [j.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
    [j.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
    [j.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
  };

function K(e) {
  let {
    type: r,
    shown: t,
    onClick: o
  } = e, a = (0, f.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return H.default.canUsePremiumProfileCustomization(e)
  }), u = n.useRef(!1), {
    analyticsLocations: d
  } = (0, T.default)(E.default.BADGE);
  return n.useEffect(() => {
    t && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: Z[r],
        section: W.AnalyticsSections.NITRO_BANNER,
        object: W.AnalyticsObjects.NITRO_BADGE
      },
      location_stack: d
    }))
  }, [d, t, r]), (0, i.jsx)(c.Tooltip, {
    tooltipContentClassName: X.premiumIconTooltipContent,
    text: a ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(c.Clickable, {
      ...e,
      onClick: a ? void 0 : () => {
        var e;
        e = d, (0, c.openModalLazy)(async () => {
          let {
            default: r
          } = await l.el("292890").then(l.bind(l, "292890"));
          return l => {
            let {
              onClose: t,
              ...o
            } = l;
            return (0, i.jsx)(r, {
              analyticsLocations: e,
              title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  t(), P.default.open(W.UserSettingsSections.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: t,
              ...o
            })
          }
        }), null == o || o()
      },
      className: s(X.premiumIconWrapper, {
        [X.visible]: t,
        [X.clickable]: !a
      }),
      children: (0, i.jsx)(b.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(M.default, {
          width: 16,
          height: 16,
          className: X.premiumIcon
        })
      })
    })
  })
}

function q(e) {
  let {
    darkenOnHover: r,
    profileType: l,
    profileLabel: t,
    icon: o,
    ...n
  } = e, a = V[l], s = "pencil" === o ? B.default : C.default;
  return (0, i.jsx)(c.Clickable, {
    ...n,
    "aria-label": t,
    className: r ? X.pencilContainerDark : X.pencilContainer,
    children: (0, i.jsx)(c.Tooltip, {
      text: t,
      children: e => (0, i.jsx)(s, {
        ...e,
        width: a,
        height: a,
        className: X.editIcon
      })
    })
  })
}

function J(e) {
  var r, l, t;
  let {
    user: o,
    displayProfile: a,
    bannerSrc: P,
    onClose: E,
    guildId: T,
    profileType: A = j.UserProfileTypes.POPOUT,
    isHovering: C,
    animateOnHover: M,
    allowEdit: B = !0,
    showPremiumBadgeUpsell: b = !0,
    hasProfileEffect: D = !1
  } = e, [V, Z] = n.useState((null == a ? void 0 : a.banner) == null ? 2 : 0), J = (0, f.useStateFromStores)([I.default], () => I.default.getGuild(T)), Q = (0, f.useStateFromStores)([v.default], () => v.default.getId()), $ = Q === o.id && B || o.isClyde() && null != J && (0, O.canEditClydeAIProfile)(J), ee = H.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, z.PremiumTypes.TIER_2), [er, el] = n.useState(!1), et = (0, f.useStateFromStores)([L.default], () => L.default.isFocused()), eo = m.GifAutoPlay.getSetting(), ei = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), en = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, p.default)(o.getAvatarURL(T, en), ei, !1)), es = (0, _.default)(null !== (r = null == a ? void 0 : a.primaryColor) && void 0 !== r ? r : ea).hsl, eu = (0, F.getUserBannerSize)(A), ef = null != P ? P : null == a ? void 0 : a.getBannerURL({
    size: eu,
    canAnimate: M || !eo ? er : et
  }), ed = null != ef, ec = (0, f.useStateFromStores)([w.default], () => w.default.getUserProfile(o.id)), eP = S.default.getChannel(N.default.getChannelId()), {
    appsInGDMEnabled: eE,
    availableApplications: eT
  } = (0, h.usePrivateChannelIntegrationState)({
    channelId: null !== (l = null == eP ? void 0 : eP.id) && void 0 !== l ? l : ""
  }), ep = null == ec ? void 0 : ec.application, eO = eE && null != eT.find(e => e.id === (null == ep ? void 0 : ep.id));
  (0, n.useEffect)(() => {
    if (ed && (ee || o.isClyde()) && 0 === V) {
      Z(1);
      let e = new Image;
      e.src = ef, e.onload = () => Z(2)
    }
  }, [o, ed, ee, ef, V]), n.useEffect(() => {
    if (eo || !ee) return;
    let e = null != P ? P : null == a ? void 0 : a.getBannerURL({
      size: eu,
      canAnimate: !0
    });
    if (null == e) return;
    let r = new Image;
    r.src = e
  }, [eo, ee, P, a, eu]);
  let eU = (0, y.default)({
    analyticsLocation: {
      page: W.AnalyticsPages.USER_POPOUT,
      section: W.AnalyticsSections.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(k.default, {
    isPremium: ee,
    hasThemeColors: null !== (t = null == a ? void 0 : a.canEditThemes) && void 0 !== t && t,
    profileType: A,
    hasBanner: ed,
    hasProfileEffect: D,
    children: (0, i.jsxs)("div", {
      className: s(X.banner, (0, F.getUserBannerStyles)({
        profileType: A,
        user: {
          hasBanner: ed,
          isPremium: ee,
          hasProfileEffect: D
        }
      }), {
        [X.reducedMotion]: !eo
      }),
      onMouseMove: () => el(!0),
      onMouseLeave: () => el(!1),
      style: {
        backgroundImage: ed && ee ? "url(".concat(ef, ")") : void 0,
        backgroundColor: 2 !== V ? d.default.unsafe_rawColors.PRIMARY_800.css : es
      },
      children: [$ ? null != J || o.isClyde() ? null != J && o.isClyde() && (0, O.canEditClydeAIProfile)(J) ? (0, i.jsx)(q, {
        profileType: A,
        profileLabel: Y.default.Messages.CLYDE_SETTINGS,
        icon: "gear",
        onClick: () => {
          null == E || E(), (0, U.default)(J.id)
        }
      }) : null == J ? null : (0, i.jsx)(c.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: r
          } = e;
          return (0, i.jsx)(G.default, {
            onClose: r,
            onSelect: E,
            guild: J
          })
        },
        children: e => (0, i.jsx)(q, {
          darkenOnHover: D && C,
          profileLabel: Y.default.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: A
        })
      }) : (0, i.jsx)(q, {
        darkenOnHover: D && C,
        profileType: A,
        profileLabel: Y.default.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          null == E || E(), eU()
        }
      }) : (() => {
        let e = b && ed && A !== j.UserProfileTypes.SETTINGS;
        return e ? (0, i.jsx)(K, {
          type: A,
          shown: void 0 === C ? er : C,
          onClick: E
        }) : null
      })(), eO ? A !== j.UserProfileTypes.MODAL ? null : (0, i.jsx)(c.Clickable, {
        onClick: E,
        "aria-label": Y.default.Messages.BACK,
        className: X.pencilContainer,
        children: (0, i.jsx)(c.Tooltip, {
          text: Y.default.Messages.BACK,
          children: e => (0, i.jsx)(R.default, {
            ...e,
            className: X.closeIcon,
            color: "white"
          })
        })
      }) : null, !eo && (0, x.isAnimatedImageURL)(ef) && (0, i.jsx)(g.default, {
        className: X.gifTag
      })]
    })
  })
}