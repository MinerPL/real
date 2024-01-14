"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eA
  }
});
var a = s("37983");
s("884691");
var n = s("759843"),
  l = s("151426"),
  i = s("669491"),
  r = s("77078"),
  o = s("913144"),
  d = s("437822"),
  u = s("152584"),
  c = s("79112"),
  S = s("534291"),
  E = s("545158"),
  f = s("788434"),
  T = s("311207"),
  m = s("824357"),
  _ = s("20606"),
  g = s("192845"),
  h = s("929423"),
  I = s("424562"),
  N = s("880731"),
  p = s("317654"),
  C = s("580758"),
  A = s("763417"),
  O = s("470022"),
  x = s("610109"),
  R = s("368694"),
  M = s("42887"),
  v = s("790618"),
  D = s("860957"),
  L = s("893011"),
  P = s("423487"),
  j = s("956089"),
  b = s("599110"),
  U = s("128259"),
  B = s("773336"),
  y = s("546605"),
  F = s("733051"),
  G = s("474775"),
  k = s("413622"),
  H = s("479290"),
  w = s("825958"),
  V = s("20604"),
  Y = s("836833"),
  W = s("625393"),
  K = s("152891"),
  z = s("921600"),
  Q = s("250972"),
  q = s("89563"),
  Z = s("41525"),
  X = s("59574"),
  J = s("602806"),
  $ = s("462506"),
  ee = s("500517"),
  et = s("814953"),
  es = s("409862"),
  ea = s("175077"),
  en = s("688413"),
  el = s("477596"),
  ei = s("9047"),
  er = s("656395"),
  eo = s("960261"),
  ed = s("436112"),
  eu = s("194200"),
  ec = s("974926"),
  eS = s("905818"),
  eE = s("819638"),
  ef = s("114582"),
  eT = s("995350"),
  em = s("409462"),
  e_ = s("799458"),
  eg = s("227473"),
  eh = s("21811"),
  eI = s("49111"),
  eN = s("782340"),
  ep = s("622990");
let eC = e_.default;

function eA(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eA,
    impressionSource: eO,
    numOfPendingFamilyRequests: ex,
    isClipsBetaTagShowing: eR = !1
  } = e, eM = [{
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.USER_SETTINGS
  }, {
    section: eI.UserSettingsSections.ACCOUNT,
    label: eN.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eN.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Q.default
  }, {
    section: eI.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eN.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eN.default.Messages.USER_SETTINGS_PROFILES,
    element: O.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eN.default.Messages.NEW
    }),
    notice: {
      stores: [v.default, I.default],
      element: A.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eI.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eI.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eN.default.Messages.PRIVACY_AND_SAFETY,
    element: eS.default
  }, {
    section: eI.UserSettingsSections.FAMILY_CENTER,
    label: eN.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eN.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: es.default,
    badgeCount: ex,
    newIndicator: (0, a.jsx)(j.TextBadge, {
      text: eN.default.Messages.NEW,
      color: _.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eI.UserSettingsSections.AUTHORIZED_APPS,
    label: eN.default.Messages.AUTHORIZED_APPS,
    element: J.default
  }, {
    section: eI.UserSettingsSections.SESSIONS,
    label: eN.default.Messages.AUTH_SESSIONS,
    ariaLabel: eN.default.Messages.AUTH_SESSIONS,
    element: eE.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => y.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eI.UserSettingsSections.CONNECTIONS,
    label: eN.default.Messages.CONNECTIONS,
    ariaLabel: eN.default.Messages.CONNECTIONS,
    element: ee.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eO
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eI.UserSettingsSections.CLIPS,
    label: eN.default.Messages.CLIPS,
    ariaLabel: eN.default.Messages.CLIPS,
    icon: eR ? (0, a.jsx)(T.default, {}) : void 0,
    element: m.default
  }, {
    section: eI.UserSettingsSections.FRIEND_REQUESTS,
    label: eN.default.Messages.FRIEND_REQUESTS,
    element: ea.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.BILLING_SETTINGS
  }, {
    section: eI.UserSettingsSections.PREMIUM,
    ariaLabel: eN.default.Messages.PREMIUM,
    label: eN.default.Messages.PREMIUM,
    element: w.default,
    className: ep.premiumTab
  }, {
    section: eI.UserSettingsSections.GUILD_BOOSTING,
    label: eN.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: ec.default
  }, {
    section: eI.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eN.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eN.default.Messages.SUBSCRIPTIONS_TITLE,
    element: C.default,
    icon: eA ? (0, a.jsx)(P.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eI.UserSettingsSections.INVENTORY,
    label: eN.default.Messages.GIFT_INVENTORY,
    element: ei.default,
    ariaLabel: eN.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eI.UserSettingsSections.BILLING,
    label: eN.default.Messages.BILLING,
    element: $.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.APP_SETTINGS
  }, {
    section: eI.UserSettingsSections.APPEARANCE,
    label: eN.default.Messages.APPEARANCE,
    ariaLabel: eN.default.Messages.APPEARANCE,
    element: X.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eN.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eI.UserSettingsSections.ACCESSIBILITY,
    label: eN.default.Messages.ACCESSIBILITY,
    element: z.default
  }, {
    section: eI.UserSettingsSections.VOICE,
    label: eN.default.Messages.VOICE_AND_VIDEO,
    element: eh.default,
    predicate: () => M.default.isSupported()
  }, {
    section: eI.UserSettingsSections.POGGERMODE,
    label: eN.default.Messages.POGGERMODE,
    ariaLabel: eN.default.Messages.POGGERMODE,
    element: p.default,
    predicate: () => N.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("226992"),
      className: ep.poggermodeIcon
    })
  }, {
    section: eI.UserSettingsSections.TEXT,
    label: eN.default.Messages.TEXT_AND_IMAGES,
    element: eT.default
  }, {
    section: eI.UserSettingsSections.NOTIFICATIONS,
    label: eN.default.Messages.NOTIFICATIONS,
    element: ed.default
  }, {
    section: eI.UserSettingsSections.KEYBINDS,
    label: eN.default.Messages.KEYBINDS,
    element: er.default
  }, {
    section: eI.UserSettingsSections.LOCALE,
    label: eN.default.Messages.LANGUAGE,
    element: eo.default
  }, {
    section: eI.UserSettingsSections.WINDOWS,
    label: eN.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: e_.default,
    predicate: () => B.isPlatformEmbedded && (0, B.isWindows)()
  }, {
    section: eI.UserSettingsSections.LINUX,
    label: eN.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eC,
    predicate: () => B.isPlatformEmbedded && (0, B.isLinux)()
  }, {
    section: eI.UserSettingsSections.STREAMER_MODE,
    label: eN.default.Messages.STREAMER_MODE,
    element: ef.default
  }, {
    section: eI.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: Y.default,
    predicate: () => x.default.isSupported() && F.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eI.UserSettingsSections.ADVANCED,
    label: eN.default.Messages.SETTINGS_ADVANCED,
    element: Z.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.ACTIVITY_SETTINGS
  }, {
    section: eI.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eN.default.Messages.ACTIVITY_PRIVACY,
    element: q.default
  }, {
    section: eI.UserSettingsSections.REGISTERED_GAMES,
    label: eN.default.Messages.REGISTERED_GAMES,
    element: en.default,
    predicate: () => B.isPlatformEmbedded
  }, {
    section: eI.UserSettingsSections.OVERLAY,
    label: eN.default.Messages.OVERLAY,
    element: eu.default,
    predicate: () => D.default.isSupported() || !1
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, f.openChangelog)(!0),
    label: eN.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      b.default.track(eI.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, U.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          b.default.track(eI.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eN.default.Messages.MERCHANDISE,
    ariaLabel: eN.default.Messages.MERCHANDISE
  }, {
    section: eI.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eN.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: el.default
  }, {
    section: eI.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eg.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: et.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: k.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: H.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: em.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: W.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eN.default.Messages.LOGOUT,
        confirmText: eN.default.Messages.LOGOUT,
        cancelText: eN.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eN.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eN.default.Messages.LOGOUT,
    ariaLabel: eN.default.Messages.LOGOUT,
    icon: (0, a.jsx)(L.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: V.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: G.default
  }];
  return eM
}