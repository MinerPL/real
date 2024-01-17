"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eM
  },
  default: function() {
    return ek
  }
}), n("222007");
var s = n("866227"),
  l = n.n(s),
  a = n("446674"),
  i = n("741397"),
  r = n("151426"),
  o = n("95410"),
  u = n("913144"),
  d = n("363996"),
  c = n("49671"),
  f = n("376556"),
  E = n("299285"),
  _ = n("7331"),
  T = n("889293"),
  I = n("10641"),
  m = n("180273"),
  N = n("579565"),
  p = n("789563"),
  S = n("619443"),
  A = n("875037"),
  C = n("398654"),
  h = n("54346"),
  g = n("681937"),
  M = n("619259"),
  O = n("179803"),
  R = n("38654"),
  L = n("267567"),
  v = n("167209"),
  P = n("104032"),
  D = n("897107"),
  x = n("44678"),
  y = n("807345"),
  U = n("840895"),
  j = n("143573"),
  b = n("703537"),
  G = n("662285"),
  B = n("808422"),
  F = n("374363"),
  k = n("271938"),
  w = n("250404"),
  H = n("533222"),
  V = n("42203"),
  Y = n("47319"),
  K = n("320268"),
  W = n("26989"),
  z = n("305961"),
  Z = n("42887"),
  J = n("385649"),
  Q = n("957255"),
  X = n("669280"),
  q = n("945956"),
  $ = n("568307"),
  ee = n("18494"),
  et = n("162771"),
  en = n("168851"),
  es = n("102985"),
  el = n("381684"),
  ea = n("330387"),
  ei = n("697218"),
  er = n("800762"),
  eo = n("160299"),
  eu = n("357957"),
  ed = n("521012"),
  ec = n("340412"),
  ef = n("437712"),
  eE = n("167726"),
  e_ = n("773336"),
  eT = n("719923"),
  eI = n("189459"),
  em = n("316661"),
  eN = n("352326"),
  ep = n("49111"),
  eS = n("492397"),
  eA = n("411511"),
  eC = n("646718"),
  eh = n("843455"),
  eg = n("353927");
let eM = {
    [ep.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [ep.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [ep.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [ep.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [ep.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [ep.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [ep.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [ep.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [ep.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [ep.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO
  },
  eO = {
    [ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [ep.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [ep.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [ep.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [ep.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [ep.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
  },
  eR = new Set([ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.BLOCKED_BY_PROXY]),
  eL = {},
  ev = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eP = null;

function eD(e) {
  return eO[e] + "-untilAtLeast"
}

function ex(e, t, n) {
  var s, l, a;
  if (null == e) return;
  let i = eO[e];
  if (null != i && !t && o.default.set(i, !0), eR.has(e) && (eL[e] = !0), null != n && null != i) {
    ;
    s = e, l = n, o.default.set(eD(s), l.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    a = e, o.default.remove(eD(a))
  }
}

function ey(e) {
  if (null == e) return !1;
  let t = eM[e];
  if (null != t) return (0, I.isDismissibleContentDismissed)(t);
  let n = eO[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(eD(e));
      return null != t ? l(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(l())
  }
  let s = eL[e];
  return !!s || (null != n && "" !== n ? o.default.get(n) : !!eR.has(e) && s)
}
let eU = [ep.NoticeTypes.QUARANTINED, ep.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ep.NoticeTypes.VIEWING_ROLES, ep.NoticeTypes.INVITED_TO_SPEAK, ep.NoticeTypes.LURKING_GUILD, ep.NoticeTypes.VOICE_DISABLED, ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.HARDWARE_MUTE, ep.NoticeTypes.H264_DISABLED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, ep.NoticeTypes.WIN32_DEPRECATED_MESSAGE, ep.NoticeTypes.BLOCKED_BY_PROXY, ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, ep.NoticeTypes.GUILD_RAID_NOTIFICATION, ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, ep.NoticeTypes.UNCLAIMED_ACCOUNT, ep.NoticeTypes.POMELO_ELIGIBLE, ep.NoticeTypes.PENDING_MEMBER, ep.NoticeTypes.OUTBOUND_PROMOTION, ep.NoticeTypes.CORRUPT_INSTALLATION, ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.SCHEDULED_MAINTENANCE, ep.NoticeTypes.BOUNCED_EMAIL_DETECTED, ep.NoticeTypes.UNVERIFIED_ACCOUNT, ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, ep.NoticeTypes.PREMIUM_UNCANCEL, ep.NoticeTypes.PREMIUM_MISSING_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ep.NoticeTypes.PREMIUM_REACTIVATE, ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, ep.NoticeTypes.MFA_SMS_BACKUP, ep.NoticeTypes.APPLICATION_TEST_MODE, ep.NoticeTypes.LOCALIZED_PRICING, ep.NoticeTypes.DOWNLOAD_NAG, ep.NoticeTypes.CONNECT_SPOTIFY, ep.NoticeTypes.CONNECT_PLAYSTATION, ep.NoticeTypes.SURVEY, ep.NoticeTypes.SERVER_USAGE_SURVEY, ep.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, ep.NoticeTypes.DROPS_GO_LIVE_BANNER, ep.NoticeTypes.DROPS_ENDED_INCOMPLETE, ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR],
  ej = [ep.NoticeTypes.QUARANTINED, ep.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ep.NoticeTypes.VIEWING_ROLES, ep.NoticeTypes.INVITED_TO_SPEAK, ep.NoticeTypes.LURKING_GUILD, ep.NoticeTypes.VOICE_DISABLED, ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.HARDWARE_MUTE, ep.NoticeTypes.H264_DISABLED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.BLOCKED_BY_PROXY, ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ep.NoticeTypes.PENDING_MEMBER, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.SCHEDULED_MAINTENANCE],
  eb = {
    [ep.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, C.shouldShowRaidNotificationNagbar)().show && !ey(ep.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: l().add(3, "hours").toDate()
        };
        return e
      }
    },
    [ep.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = W.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, g.hasAutomodQuarantinedProfile)(s)
      }
    },
    [ep.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(ep.UserFlags.QUARANTINED)
      }
    },
    [ep.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return R.default.isViewingRoles(t)
      }
    },
    [ep.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, B.getAudienceRequestToSpeakState)(t) === B.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [ep.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && L.default.isLurking(t)
      }
    },
    [ep.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != q.default.getRemoteDisconnectVoiceChannelId()
    },
    [ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != q.default.getLastSessionVoiceChannelId()
    },
    [ep.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = V.default.getChannel(t), l = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === Z.default.getInputDetected() && !l
      }
    },
    [ep.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = V.default.getChannel(t);
        return !Z.default.getOpenH264() && null != t && er.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [ep.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => q.default.isConnected() && Z.default.isHardwareMute(),
      metadata: () => {
        let e = Z.default.getInputDeviceId(),
          t = H.default.getVendor(e),
          n = H.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [ep.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eI.default.getLastError(),
      metadata: () => ({
        error: eI.default.getLastError()
      })
    },
    [ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != em.default.getLastProgress(),
      metadata: () => em.default.getLastProgress()
    },
    [ep.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => G.default.wasAutoPaused()
    },
    [ep.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !ey(ep.NoticeTypes.BLOCKED_BY_PROXY) && j.default.blockedByProxy && U.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [ep.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [ep.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: l,
          currentUser: a
        } = e;
        return null !== (s = null != l && null != a && !(null === (t = z.default.getGuild(l)) || void 0 === t ? void 0 : t.hasFeature(ep.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = W.default.getMember(l, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [ep.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, x.shouldShowOutboundPromotionNotice)()
    },
    [ep.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => e_.isPlatformEmbedded && (!i.default.supported() || eN.default.isCorruptInstallation())
    },
    [ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && er.default.hasVideo(t) && !Z.default.supports(eg.Features.VIDEO) && !ey(ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eT.default.canRedeemPremiumPerks(t) && K.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = K.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !ey(ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && K.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = K.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [ep.NoticeTypes.STREAMER_MODE]: {
      predicate: () => es.default.enabled
    },
    [ep.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !e_.isPlatformEmbedded && !ey(ep.NoticeTypes.DOWNLOAD_NAG)
    },
    [ep.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != en.default.getScheduledMaintenance(),
      metadata: () => {
        let e = en.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [ep.NoticeTypes.SURVEY]: {
      predicate: () => null != el.default.getCurrentSurvey(),
      metadata: () => el.default.getCurrentSurvey()
    },
    [ep.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && A.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !ey(ep.NoticeTypes.SERVER_USAGE_SURVEY)
      },
      metadata: e => {
        let {
          selectedGuildId: t,
          currentUser: n
        } = e;
        return {
          selectedGuildId: t,
          currentUser: n
        }
      }
    },
    [ep.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [ep.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [ep.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !G.default.hasConnectedAccount() && $.default.isObservedAppRunning(f.default.get(ep.PlatformTypes.SPOTIFY).name) && !ey(ep.NoticeTypes.CONNECT_SPOTIFY)
    },
    [ep.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = D.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === c.default || void 0 === c.default ? void 0 : c.default.os.arch) === "ia32" && (null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32"
      },
      metadata: () => {
        let e = {
          dismissUntil: l().add(5, "days").toDate()
        };
        return e
      }
    },
    [ep.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => Y.default.isSuggestedAccountType(ep.PlatformTypes.PLAYSTATION) && null == Y.default.getAccount(null, ep.PlatformTypes.PLAYSTATION) && !ey(ep.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eC.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !ey(ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eC.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !ey(ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [ep.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ep.SubscriptionStatusTypes.CANCELED && 1 >= l().diff(l(t.canceledAt), "days"), i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = null != t && t.status === ep.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, eT.isPremiumExactly)(n, eC.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ey(ep.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eT.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eT.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [ep.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != t ? l(t.currentPeriodEnd).diff(l(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = ef.default.applicationIdsFetched.has(eC.PREMIUM_SUBSCRIPTION_APPLICATION), o = ef.default.getForApplication(eC.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eT.getPremiumPlanItem)(t) : null, d = null != u ? eT.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== ep.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ey(ep.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eT.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eT.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && l(t.currentPeriodEnd).isBefore(l()), i = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ey(ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ey(ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ep.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(ep.UserFlags.MFA_SMS) && !t.hasFlag(ep.UserFlags.STAFF) && !t.hasFlag(ep.UserFlags.PARTNER) && !ey(ep.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [ep.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eE.default.testModeApplicationId,
      metadata: () => {
        if (null == eE.default.testModeApplicationId) return {};
        let e = eE.default.testModeApplicationId,
          t = E.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [ep.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !ey(ep.NoticeTypes.PREMIUM_REACTIVATE) && P.default.shouldShowReactivateNotice()
    },
    [ep.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !ey(ep.NoticeTypes.LOCALIZED_PRICING) && t
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && eh.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ey(ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === ep.SubscriptionStatusTypes.PAST_DUE ? l().diff(l(t.currentPeriodStart), "days") : 0, s = l(null == t ? void 0 : t.currentPeriodStart).add((0, eT.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: s
        }
      }
    },
    [ep.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !ey(ep.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(eA.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eA.PartnerGame.FORTNITE
      })
    },
    [ep.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => m.default.isCurrentQuestInterrupted && null != m.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: m.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [ep.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, v.isEligibleForPomelo)() && !ey(ep.NoticeTypes.POMELO_ELIGIBLE)
    },
    [ep.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !ey(ep.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(eA.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eA.PartnerGame.FORTNITE
      })
    },
    [ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? z.default.getGuild(t) : null;
        return null != t && null != M.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ep.GuildFeatures.COMMUNITY)) && !ey(ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: l().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = M.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !ey(ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
    },
    [ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !ey(ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, O.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [ep.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return b.isEligibleForNotice(t)
      }
    },
    [ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !ey(ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    }
  };

function eG() {
  if (!S.default.isConnected()) return !1;
  eP = null;
  let e = ei.default.getCurrentUser();
  if (null == e) return !1;
  let t = ed.default.getPremiumSubscription(),
    n = eo.default.isLocalizedPromoEnabled,
    s = et.default.getGuildId(),
    l = ee.default.getVoiceChannelId(),
    a = null != l ? er.default.getVoiceStateForChannel(l) : null,
    i = eS.CONFERENCE_MODE_ENABLED ? ej : eU;
  for (let u of i)
    if (null != eb[u] && eb[u].predicate({
        selectedGuildId: s,
        voiceChannelId: l,
        voiceState: a,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eb[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eP = {
        ...ev,
        type: u,
        metadata: n
      };
      break
    } null != eP && ey(eP.type) && (eP = null)
}

function eB() {
  return !es.default.enabled && delete eL[ep.NoticeTypes.STREAMER_MODE], eG()
}
class eF extends a.default.Store {
  initialize() {
    this.syncWith([el.default, X.default, K.default, et.default, y.default, ec.default, w.default, Y.default, F.default, h.default], eG), this.waitFor(ei.default, en.default, z.default, W.default, q.default, Z.default, es.default, p.default, et.default, ea.default, G.default, $.default, X.default, eI.default, em.default, eE.default, J.default, ed.default, eN.default, K.default, eu.default, Q.default, y.default, ef.default, ec.default, Y.default, L.default, m.default, T.default, j.default)
  }
  hasNotice() {
    return null != eP && null != eP.type
  }
  getNotice() {
    return null == ea.default.getAction() ? eP : null
  }
  isNoticeDismissed(e) {
    return ey(e)
  }
}
eF.displayName = "NoticeStore";
var ek = new eF(u.default, {
  CURRENT_USER_UPDATE: eG,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eG,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eG,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eG,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eG,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eG,
  GUILD_CREATE: eG,
  GUILD_DELETE: eG,
  AUDIO_INPUT_DETECTED: eG,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eG,
  CERTIFIED_DEVICES_SET: eG,
  AUDIO_SET_INPUT_DEVICE: eG,
  AUDIO_SET_OUTPUT_DEVICE: eG,
  MEDIA_ENGINE_DEVICES: eG,
  RTC_CONNECTION_STATE: eG,
  RPC_APP_AUTHENTICATED: eG,
  RPC_APP_DISCONNECTED: eG,
  USER_CONNECTIONS_UPDATE: eG,
  WINDOW_FOCUS: eG,
  INSTANT_INVITE_CREATE: eG,
  INSTANT_INVITE_REVOKE_SUCCESS: eG,
  SPOTIFY_PLAYER_PAUSE: eG,
  RUNNING_GAMES_CHANGE: eG,
  EXPERIMENTS_FETCH_SUCCESS: eG,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eG,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eG,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eG,
  DEVELOPER_TEST_MODE_RESET: eG,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eG,
  DISPATCH_APPLICATION_INSTALL: eG,
  IMPERSONATE_STOP: eG,
  IMPERSONATE_UPDATE: eG,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === k.default.getId() && eG()
  },
  GUILD_MEMBER_UPDATE: eG,
  SURVEY_FETCHED: eG,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eG,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eG,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eG,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eG,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== k.default.getId()
    }) && eG()
  },
  STREAMER_MODE_UPDATE: eB,
  RUNNING_STREAMER_TOOLS_CHANGE: eB,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eL[ep.NoticeTypes.DISPATCH_ERROR], eG()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eL[ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eG()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eG()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eG()
  },
  NOTICE_SHOW: function(e) {
    eP = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eP && (null == e.id || e.id === eP.id) && (ex(eP.type, e.isTemporary, e.untilAtLeast), eG())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ex(t), eG()
  },
  LOGOUT: function() {
    eL = {}, eP = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eG,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eG,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eG,
  PROXY_BLOCKED_REQUEST: eG
})