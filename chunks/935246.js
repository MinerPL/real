"use strict";
n.r(t), n.d(t, {
  DismissibleContentNotices: function() {
    return P
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("151426"),
  i = n("77078"),
  r = n("327037"),
  o = n("79112"),
  u = n("376556"),
  d = n("926994"),
  c = n("889293"),
  f = n("757557"),
  E = n("994750"),
  _ = n("966003"),
  T = n("363861"),
  I = n("695827"),
  m = n("425538"),
  N = n("393414"),
  p = n("600133"),
  S = n("936629"),
  A = n("489622"),
  C = n("599110"),
  h = n("384997"),
  g = n("994428"),
  M = n("49111"),
  O = n("935583"),
  R = n("646718"),
  L = n("782340"),
  v = n("185401");
let P = e => {
  let {
    dismissibleContent: t,
    noticeType: P
  } = e, D = (0, l.useStateFromStores)([p.default], () => p.default.getNotice());
  return (0, s.jsx)(h.default, {
    contentTypes: [t],
    groupName: g.DismissibleContentGroupName.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      var t, l;
      let {
        visibleContent: p,
        markAsDismissed: h
      } = e;
      switch (p) {
        case a.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR:
          return (0, s.jsx)(_.default, {
            dismissCurrentNotice: () => h(g.ContentDismissActionType.UNKNOWN)
          });
        case a.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), L.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: v.iconApple
            }), (0, s.jsx)("i", {
              className: v.iconAndroid
            }), (0, s.jsx)("i", {
              className: v.iconWindows
            }), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("649486").then(n.bind(n, "649486"));
                  return t => (0, s.jsx)(e, {
                    source: "Top Bar Nag",
                    ...t
                  })
                })
              },
              children: L.default.Messages.DOWNLOAD
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), (0, s.jsx)(S.default, {
              className: v.platformIcon
            }), L.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => (0, d.default)(M.PlatformTypes.SPOTIFY, "Notice Bar"),
              noticeType: P,
              children: L.default.Messages.CONNECT
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: v.platformIcon,
              src: u.default.get(M.PlatformTypes.PLAYSTATION).icon.whiteSVG
            }), L.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(A.NoticeButton, {
              onClick: () => (0, d.default)(M.PlatformTypes.PLAYSTATION, "Notice Bar"),
              children: L.default.Messages.CONNECT
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), L.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => o.default.open(M.UserSettingsSections.ACCOUNT),
              noticeType: P,
              children: L.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: v.premiumLogo
            }), (0, s.jsx)("span", {
              className: v.premiumText,
              children: L.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              className: v.premiumAction,
              noticeType: P,
              onClick: () => {
                C.default.track(M.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                  location_section: M.AnalyticsSections.NOTIFICATION_BAR,
                  location_object: M.AnalyticsObjects.BUTTON_CTA
                }), o.default.open(M.UserSettingsSections.PREMIUM)
              },
              children: L.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => {
                h(g.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(M.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: P
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(m.default, {
            dismissCurrentNotice: () => h(g.ContentDismissActionType.UNKNOWN),
            subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2
          });
        case a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(m.default, {
            dismissCurrentNotice: () => h(g.ContentDismissActionType.UNKNOWN),
            subscriptionTier: R.PremiumSubscriptionSKUs.TIER_0
          });
        case a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              noticeType: P,
              onClick: () => h(g.ContentDismissActionType.UNKNOWN)
            }), L.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                h(g.ContentDismissActionType.UNKNOWN), o.default.open(M.UserSettingsSections.PREMIUM)
              },
              children: L.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(I.default, {
            notice: D,
            noticeType: P,
            dismissCurrentNotice: () => h(g.ContentDismissActionType.UNKNOWN)
          });
        case a.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
          let x = null == D ? void 0 : null === (t = D.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(E.default, {
            noticeType: P,
            markAsDismissed: () => h(g.ContentDismissActionType.UNKNOWN),
            partnerGame: x
          });
        case a.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
          let y = null == D ? void 0 : null === (l = D.metadata) || void 0 === l ? void 0 : l.partnerGame;
          return (0, s.jsx)(f.default, {
            noticeType: P,
            markAsDismissed: () => h(g.ContentDismissActionType.UNKNOWN),
            partnerGame: y
          });
        case a.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DANGER,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), L.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                (0, N.transitionTo)(M.Routes.SETTINGS("account"))
              },
              children: L.default.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case a.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let U = c.default.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), L.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                h(g.ContentDismissActionType.PRIMARY), (0, N.transitionTo)(1 === U.length ? M.Routes.GUILD_SETTINGS(U[0], "role-subscriptions") : M.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: L.default.Messages.LETS_GO
            })]
          });
        case a.DismissibleContent.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.WARNING,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => h(g.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), L.default.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => (0, T.default)(O.PomeloEntrypoints.NOTICE),
              noticeType: P,
              children: L.default.Messages.GET_STARTED
            })]
          })
      }
    }
  })
}