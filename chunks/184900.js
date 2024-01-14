"use strict";
t.r(a), t.d(a, {
  default: function() {
    return el
  }
}), t("222007");
var l = t("37983"),
  i = t("884691"),
  n = t("414456"),
  r = t.n(n),
  s = t("509043"),
  o = t("446674"),
  u = t("669491"),
  d = t("77078"),
  c = t("272030"),
  f = t("875212"),
  m = t("841098"),
  v = t("206230"),
  h = t("685665"),
  p = t("462274"),
  g = t("606292"),
  I = t("335031"),
  x = t("608684"),
  S = t("635471"),
  A = t("388491"),
  U = t("217513"),
  N = t("581295"),
  E = t("878569"),
  T = t("430312"),
  j = t("552243"),
  y = t("10532"),
  C = t("935409"),
  P = t("648149"),
  b = t("369869"),
  M = t("802279"),
  R = t("465215"),
  _ = t("491250"),
  k = t("106435"),
  w = t("845579"),
  B = t("26989"),
  O = t("824563"),
  z = t("102985"),
  F = t("471671"),
  L = t("275623"),
  D = t("832132"),
  G = t("315102"),
  W = t("719923"),
  H = t("158998"),
  V = t("50885"),
  Z = t("360871"),
  Y = t("771325"),
  q = t("453252"),
  K = t("49111"),
  X = t("75015"),
  J = t("590456"),
  Q = t("782340"),
  $ = t("923843"),
  ee = t("375832");
let ea = V.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  et = (0, E.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: $.avatarUploaderPremium,
    premiumUserWithoutBanner: $.avatarUploaderPremiumNoBanner,
    default: $.avatarUploaderNormal
  });

function el(e) {
  var a, n, E;
  let {
    user: V,
    guild: el,
    canUsePremiumCustomization: ei,
    onUpsellClick: en,
    onAvatarChange: er,
    onBannerChange: es,
    pendingAccentColor: eo,
    pendingBanner: eu,
    pendingBio: ed,
    pendingPronouns: ec,
    pendingAvatar: ef,
    pendingAvatarDecoration: em,
    pendingNickname: ev,
    pendingGlobalName: eh,
    pendingThemeColors: ep,
    pendingProfileEffectId: eg,
    avatarClassName: eI,
    activityName: ex,
    activityCharacter: eS,
    isTryItOutFlow: eA = !1,
    disabledInputs: eU = !1,
    hideExampleButton: eN = !1,
    hideFakeActivity: eE = !1,
    hideBioSection: eT = !1,
    forProfileEffectModal: ej = !1,
    hideMemberStatusSection: ey = !0,
    bodyClassName: eC,
    slideInAvatarDecoration: eP = !1,
    useLargeBanner: eb = !1
  } = e, eM = i.useRef(null), [eR, e_] = i.useState(!1), ek = w.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: ew,
    avatarSrc: eB,
    eventHandlers: eO
  } = (0, k.default)({
    user: V,
    guildId: null == el ? void 0 : el.id,
    avatarDecorationOverride: em,
    avatarOverride: ef,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), ez = (0, U.default)(V.id, null == el ? void 0 : el.id), eF = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eL = (0, m.default)(), eD = (0, o.useStateFromStores)([B.default], () => null == el ? null : B.default.getMember(el.id, V.id)), eG = void 0 === ef ? V.getAvatarURL(void 0, 80) : ef, eW = (0, p.default)(eG, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eH = null == ez ? void 0 : ez.getPreviewThemeColors(ep), eV = null !== (a = null == eH ? void 0 : eH[0]) && void 0 !== a ? a : null == ez ? void 0 : ez.primaryColor, eZ = eF ? eL : (0, A.getProfileTheme)(eV), eY = (0, I.default)(null !== (n = null != eo ? eo : eV) && void 0 !== n ? n : (0, s.hex2int)(eW)).hsl, eq = (0, o.useStateFromStores)([F.default], () => F.default.isFocused()), eK = null == ez ? void 0 : ez.getPreviewBanner(eu, ek ? eq : eR), eX = null != eK || null != eg, eJ = eb || (null == ez ? void 0 : ez.profileEffectId) != null, eQ = null !== (E = (0, Y.getPreviewNickname)(ev, null == eD ? void 0 : eD.nick)) && void 0 !== E ? E : (0, Y.getPreviewDisplayName)(eh, H.default.getName(V)), [e$, e0] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.findActivity(V.id, e => e.type === K.ActivityTypes.CUSTOM_STATUS), O.default.getStatus(V.id)]), e1 = (0, d.useStatusFillColor)(e0), e2 = (0, o.useStateFromStores)([z.default], () => z.default.hidePersonalInformation), e5 = (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) || ei, e8 = i.useCallback(() => {
    var e, a;
    null === (a = eM.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), e3 = i.useCallback((e, a) => {
    null == e || null == a ? er(null) : "image/gif" !== a.type || W.default.canUseAnimatedAvatar(V) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await t.el("57015").then(t.bind(t, "57015"));
      return t => (0, l.jsx)(i, {
        onCrop: er,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    }) : (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await t.el("805923").then(t.bind(t, "805923"));
      return t => (0, l.jsx)(a, {
        ...t,
        imgURI: e,
        onChangeAvatar: () => {
          t.onClose(), e8()
        }
      })
    })
  }, [V, e8, er]), e7 = (e, a) => {
    if (null == e || null == a) return es(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await t.el("57015").then(t.bind(t, "57015"));
      return t => (0, l.jsx)(i, {
        onCrop: es,
        uploadType: X.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    })
  };

  function e4() {
    let e = null != eZ ? (0, d.getStatusBackdropColor)(eZ) : null;
    return (0, l.jsxs)("div", {
      className: $.status,
      children: [null != e && (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: $.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e0, e)
        }
      }), (0, l.jsx)("svg", {
        className: $.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e1,
          mask: "url(#".concat((0, d.getStatusMask)(e0, !1), ")")
        })
      })]
    })
  }
  let e6 = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: e6 + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: e6 + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: e9
  } = (0, h.default)();
  i.useEffect(() => {
    if (ek) return;
    let e = null == ez ? void 0 : ez.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!G.isAnimatedImageURL(e)) return;
    let a = new Image;
    a.src = null != e ? e : ""
  }, [ez, ek]);
  let ae = null == el,
    aa = null == ez ? void 0 : ez.profileEffectId;
  return (0, l.jsxs)(T.default, {
    forceShowPremium: ei,
    user: V,
    guildId: null == el ? void 0 : el.id,
    profileType: J.UserProfileTypes.POPOUT,
    pendingThemeColors: ep,
    pendingProfileEffectId: eg,
    className: ej ? e5 ? $.profileEffectsModalCustomizationPreviewWithTheme : $.profileEffectsModalCustomizationPreviewWithoutTheme : e5 ? $.profileCustomizationPreviewWithTheme : $.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(S.default, {
      profileEffectId: void 0 !== eg ? eg : aa
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(N.default, {
        profileType: J.UserProfileTypes.POPOUT,
        hasBanner: eX,
        isPremium: ei,
        hasThemeColors: e5,
        forProfileEffectModal: ej,
        hasProfileEffect: eJ,
        children: ei ? (0, l.jsxs)("div", {
          onMouseMove: () => e_(!0),
          onMouseLeave: () => e_(!1),
          children: [(0, l.jsx)(x.default, {
            className: $.bannerUploader,
            showRemoveButton: !1,
            disabled: !ei || eU,
            image: eK,
            makeURL: () => eK,
            onChange: e7,
            imageStyle: {
              backgroundColor: eY
            },
            imageClassName: r(eX ? $.bannerUploaderInnerSquare : $.bannerUploaderInnerSquareEmpty),
            hint: Q.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.BANNER, null == eD ? void 0 : eD.guildId, eA, void 0),
            hideSize: !0,
            maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: Y.showFileSizeErrorModal
          }), !ek && G.isAnimatedImageURL(eK) ? (0, l.jsx)(L.default, {
            className: $.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: eJ ? $.bannerUploaderInnerSquare : $.bannerNormal,
          style: {
            backgroundColor: eY
          },
          children: eU ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == en ? void 0 : en({
              object: K.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: $.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: $.bannerNitroUpsellText,
              variant: "eyebrow",
              children: Q.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), ae ? function() {
        let e = () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA),
          a = () => (0, g.openAvatarDecorationModal)({
            analyticsLocations: e9,
            isTryItOutFlow: eA
          });
        return (0, l.jsxs)(d.Clickable, {
          ...eO,
          "aria-disabled": eU,
          onClick: eU ? void 0 : i => {
            (0, c.openContextMenuLazy)(i, async () => {
              let {
                default: i
              } = await t.el("609516").then(t.bind(t, "609516"));
              return () => (0, l.jsx)(i, {
                changeAvatarAction: e,
                changeDecorationAction: a
              })
            })
          },
          className: r(et({
            isPremium: ei,
            hasBanner: eX,
            hasProfileEffect: eJ
          }), {
            [$.defaultCursor]: eU
          }),
          children: [(0, l.jsx)(ea, {
            className: $.avatarUploaderInner,
            src: eB,
            avatarDecoration: eP ? null : ew,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": V.username
          }), eP && (0, l.jsx)(j.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, l.jsx)(ea, {
              src: ee,
              avatarDecoration: ew,
              size: d.AvatarSizes.SIZE_80,
              status: K.StatusTypes.UNKNOWN,
              className: $.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, ew), eU ? null : (0, l.jsx)("div", {
            className: $.hoverIconWrapper,
            children: (0, l.jsx)(D.default, {
              className: $.hoverIcon,
              color: "white"
            })
          }), e4()]
        })
      }() : function() {
        let e = null != eD && !ei,
          a = (0, l.jsxs)("div", {
            className: et({
              isPremium: ei,
              hasBanner: eX,
              hasProfileEffect: eJ
            }),
            children: [(0, l.jsx)(x.default, {
              disabled: eU,
              ref: eM,
              showIcon: null == ew,
              hint: e ? Q.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r(eI, $.avatarUploaderInner),
              image: eB,
              onChange: e3,
              makeURL: () => eB,
              maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: Y.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA, void 0)
            }), null != ew && (0, l.jsx)("img", {
              className: $.avatarDecoration,
              src: ew,
              alt: " ",
              "aria-hidden": !0
            }), e4()]
          });
        return e ? (0, l.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == en || en({
              object: K.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, l.jsx)(C.UserPopoutBadgeList, {
        user: V,
        guildId: null == el ? void 0 : el.id,
        isTryItOutFlow: eA,
        forProfileEffectModal: ej
      }), function() {
        let e = null == ez ? void 0 : ez.getPreviewBio(ed);
        return (0, l.jsxs)(T.default.Inner, {
          className: r($.body, eC),
          children: [(0, l.jsx)(_.default, {
            isTryItOut: eA,
            user: V,
            nickname: null != eQ ? eQ : V.username,
            pronouns: null != ec ? ec : null == ez ? void 0 : ez.pronouns,
            usernameIcon: (() => {
              let e = null != eD;
              if (!e) return;
              let a = null === ef;
              if (a) return;
              let t = null != eD.avatar || null != ef;
              if (t) return (0, l.jsx)(P.default, {
                user: V,
                nickname: eQ
              })
            })()
          }), !ej && (0, l.jsx)(M.default, {
            customStatusActivity: e$
          }), (0, l.jsx)(y.default, {}), !eT && (0, l.jsx)(b.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: el,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: e2,
            lastSection: eE,
            lineClamp: ej ? 3 : void 0
          }), !ey && (0, l.jsx)(R.default, {
            userId: V.id,
            guild: el,
            guildMember: eD
          }), !eE && (0, l.jsx)(Z.default, {
            activityName: ex,
            activityCharacter: eS,
            showExampleButton: null == el && !eN
          })]
        })
      }()]
    })]
  })
}