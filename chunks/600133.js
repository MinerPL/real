"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eR
  },
  default: function() {
    return ew
  }
}), n("222007");
var l = n("866227"),
  a = n.n(l),
  s = n("446674"),
  i = n("741397"),
  r = n("151426"),
  o = n("95410"),
  u = n("913144"),
  d = n("363996"),
  c = n("49671"),
  f = n("376556"),
  E = n("299285"),
  h = n("7331"),
  _ = n("889293"),
  S = n("10641"),
  T = n("180273"),
  N = n("579565"),
  p = n("789563"),
  I = n("619443"),
  m = n("875037"),
  A = n("398654"),
  g = n("54346"),
  C = n("681937"),
  R = n("619259"),
  M = n("179803"),
  O = n("38654"),
  L = n("267567"),
  v = n("167209"),
  D = n("104032"),
  y = n("897107"),
  x = n("44678"),
  P = n("807345"),
  U = n("840895"),
  b = n("143573"),
  F = n("703537"),
  j = n("662285"),
  G = n("808422"),
  k = n("374363"),
  w = n("271938"),
  B = n("250404"),
  H = n("533222"),
  V = n("42203"),
  Y = n("47319"),
  K = n("320268"),
  Q = n("26989"),
  z = n("305961"),
  W = n("42887"),
  q = n("385649"),
  X = n("957255"),
  Z = n("669280"),
  J = n("945956"),
  $ = n("568307"),
  ee = n("18494"),
  et = n("162771"),
  en = n("168851"),
  el = n("102985"),
  ea = n("381684"),
  es = n("330387"),
  ei = n("697218"),
  er = n("800762"),
  eo = n("160299"),
  eu = n("357957"),
  ed = n("521012"),
  ec = n("340412"),
  ef = n("437712"),
  eE = n("167726"),
  eh = n("773336"),
  e_ = n("719923"),
  eS = n("189459"),
  eT = n("316661"),
  eN = n("352326"),
  ep = n("49111"),
  eI = n("492397"),
  em = n("411511"),
  eA = n("646718"),
  eg = n("843455"),
  eC = n("353927");
let eR = {
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
  eM = {
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
  eO = new Set([ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.BLOCKED_BY_PROXY]),
  eL = {},
  ev = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eD = null;

function ey(e) {
  return eM[e] + "-untilAtLeast"
}

function ex(e, t, n) {
  var l, a, s;
  if (null == e) return;
  let i = eM[e];
  if (null != i && !t && o.default.set(i, !0), eO.has(e) && (eL[e] = !0), null != n && null != i) {
    ;
    l = e, a = n, o.default.set(ey(l), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    s = e, o.default.remove(ey(s))
  }
}

function eP(e) {
  if (null == e) return !1;
  let t = eR[e];
  if (null != t) return (0, S.isDismissibleContentDismissed)(t);
  let n = eM[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(ey(e));
      return null != t ? a(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(a())
  }
  let l = eL[e];
  return !!l || (null != n && "" !== n ? o.default.get(n) : !!eO.has(e) && l)
}
let eU = [ep.NoticeTypes.QUARANTINED, ep.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ep.NoticeTypes.VIEWING_ROLES, ep.NoticeTypes.INVITED_TO_SPEAK, ep.NoticeTypes.LURKING_GUILD, ep.NoticeTypes.VOICE_DISABLED, ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.HARDWARE_MUTE, ep.NoticeTypes.H264_DISABLED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, ep.NoticeTypes.WIN32_DEPRECATED_MESSAGE, ep.NoticeTypes.BLOCKED_BY_PROXY, ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, ep.NoticeTypes.GUILD_RAID_NOTIFICATION, ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, ep.NoticeTypes.UNCLAIMED_ACCOUNT, ep.NoticeTypes.POMELO_ELIGIBLE, ep.NoticeTypes.PENDING_MEMBER, ep.NoticeTypes.OUTBOUND_PROMOTION, ep.NoticeTypes.CORRUPT_INSTALLATION, ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.SCHEDULED_MAINTENANCE, ep.NoticeTypes.BOUNCED_EMAIL_DETECTED, ep.NoticeTypes.UNVERIFIED_ACCOUNT, ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, ep.NoticeTypes.PREMIUM_UNCANCEL, ep.NoticeTypes.PREMIUM_MISSING_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ep.NoticeTypes.PREMIUM_REACTIVATE, ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, ep.NoticeTypes.MFA_SMS_BACKUP, ep.NoticeTypes.APPLICATION_TEST_MODE, ep.NoticeTypes.LOCALIZED_PRICING, ep.NoticeTypes.DOWNLOAD_NAG, ep.NoticeTypes.CONNECT_SPOTIFY, ep.NoticeTypes.CONNECT_PLAYSTATION, ep.NoticeTypes.SURVEY, ep.NoticeTypes.SERVER_USAGE_SURVEY, ep.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, ep.NoticeTypes.DROPS_GO_LIVE_BANNER, ep.NoticeTypes.DROPS_ENDED_INCOMPLETE, ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR],
  eb = [ep.NoticeTypes.QUARANTINED, ep.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ep.NoticeTypes.VIEWING_ROLES, ep.NoticeTypes.INVITED_TO_SPEAK, ep.NoticeTypes.LURKING_GUILD, ep.NoticeTypes.VOICE_DISABLED, ep.NoticeTypes.NO_INPUT_DETECTED, ep.NoticeTypes.HARDWARE_MUTE, ep.NoticeTypes.H264_DISABLED, ep.NoticeTypes.DISPATCH_ERROR, ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ep.NoticeTypes.SPOTIFY_AUTO_PAUSED, ep.NoticeTypes.BLOCKED_BY_PROXY, ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ep.NoticeTypes.PENDING_MEMBER, ep.NoticeTypes.STREAMER_MODE, ep.NoticeTypes.SCHEDULED_MAINTENANCE],
  eF = {
    [ep.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, A.shouldShowRaidNotificationNagbar)().show && !eP(ep.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: a().add(3, "hours").toDate()
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
        let l = Q.default.getMember(n, t.id);
        return null != l && !l.isPending && (0, C.hasAutomodQuarantinedProfile)(l)
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
        return O.default.isViewingRoles(t)
      }
    },
    [ep.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, G.getAudienceRequestToSpeakState)(t) === G.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
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
      predicate: () => null != J.default.getRemoteDisconnectVoiceChannelId()
    },
    [ep.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != J.default.getLastSessionVoiceChannelId()
    },
    [ep.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, l = V.default.getChannel(t), a = (null == l ? void 0 : l.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === W.default.getInputDetected() && !a
      }
    },
    [ep.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = V.default.getChannel(t);
        return !W.default.getOpenH264() && null != t && er.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [ep.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => J.default.isConnected() && W.default.isHardwareMute(),
      metadata: () => {
        let e = W.default.getInputDeviceId(),
          t = H.default.getVendor(e),
          n = H.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [ep.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eS.default.getLastError(),
      metadata: () => ({
        error: eS.default.getLastError()
      })
    },
    [ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eT.default.getLastProgress(),
      metadata: () => eT.default.getLastProgress()
    },
    [ep.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => j.default.wasAutoPaused()
    },
    [ep.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eP(ep.NoticeTypes.BLOCKED_BY_PROXY) && b.default.blockedByProxy && U.default.getCurrentConfig({
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
        var t, n, l;
        let {
          selectedGuildId: a,
          currentUser: s
        } = e;
        return null !== (l = null != a && null != s && !(null === (t = z.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(ep.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = Q.default.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== l && l
      }
    },
    [ep.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, x.shouldShowOutboundPromotionNotice)()
    },
    [ep.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eh.isPlatformEmbedded && (!i.default.supported() || eN.default.isCorruptInstallation())
    },
    [ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && er.default.hasVideo(t) && !W.default.supports(eC.Features.VIDEO) && !eP(ep.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return e_.default.canRedeemPremiumPerks(t) && K.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = K.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eP(ep.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && K.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = K.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [ep.NoticeTypes.STREAMER_MODE]: {
      predicate: () => el.default.enabled
    },
    [ep.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eh.isPlatformEmbedded && !eP(ep.NoticeTypes.DOWNLOAD_NAG)
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
      predicate: () => null != ea.default.getCurrentSurvey(),
      metadata: () => ea.default.getCurrentSurvey()
    },
    [ep.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && m.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eP(ep.NoticeTypes.SERVER_USAGE_SURVEY)
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
      predicate: () => !j.default.hasConnectedAccount() && $.default.isObservedAppRunning(f.default.get(ep.PlatformTypes.SPOTIFY).name) && !eP(ep.NoticeTypes.CONNECT_SPOTIFY)
    },
    [ep.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = y.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === c.default || void 0 === c.default ? void 0 : c.default.os.arch) === "ia32" && (null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32"
      },
      metadata: () => {
        let e = {
          dismissUntil: a().add(5, "days").toDate()
        };
        return e
      }
    },
    [ep.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => Y.default.isSuggestedAccountType(ep.PlatformTypes.PLAYSTATION) && null == Y.default.getAccount(null, ep.PlatformTypes.PLAYSTATION) && !eP(ep.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eP(ep.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eP(ep.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [ep.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, l = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ep.SubscriptionStatusTypes.CANCELED && 1 >= a().diff(a(t.canceledAt), "days"), i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = null != t && t.status === ep.SubscriptionStatusTypes.CANCELED && !i && l <= 7 && l >= 0 && (0, e_.isPremiumExactly)(n, eA.PremiumTypes.TIER_2) && !s && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(ep.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, l = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != n ? null === (t = (0, e_.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != s ? e_.default.getPremiumType(s) : null;
        return {
          daysLeft: l,
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
        } = e, l = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != t ? a(t.currentPeriodEnd).diff(a(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = ef.default.applicationIdsFetched.has(eA.PREMIUM_SUBSCRIPTION_APPLICATION), o = ef.default.getForApplication(eA.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, e_.getPremiumPlanItem)(t) : null, d = null != u ? e_.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && l <= (s > 14 ? 7 : 2) && l >= 0 && t.status !== ep.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(ep.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, l = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != n ? null === (t = (0, e_.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != s ? e_.default.getPremiumType(s) : null;
        return {
          daysLeft: l,
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
        } = e, l = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, s = null != t && a(t.currentPeriodEnd).isBefore(a()), i = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !s && null != l && l.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(ep.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
        } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !l && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(ep.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s
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
        return null != t && t.mfaEnabled && !t.hasFlag(ep.UserFlags.MFA_SMS) && !t.hasFlag(ep.UserFlags.STAFF) && !t.hasFlag(ep.UserFlags.PARTNER) && !eP(ep.NoticeTypes.MFA_SMS_BACKUP)
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
      predicate: () => !eP(ep.NoticeTypes.PREMIUM_REACTIVATE) && D.default.shouldShowReactivateNotice()
    },
    [ep.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eP(ep.NoticeTypes.LOCALIZED_PRICING) && t
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
        } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, i = null != s && eg.PREPAID_PAYMENT_SOURCES.has(s.type), r = null != t && t.status === ep.SubscriptionStatusTypes.PAST_DUE && !l && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(ep.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === ep.SubscriptionStatusTypes.PAST_DUE ? a().diff(a(t.currentPeriodStart), "days") : 0, l = a(null == t ? void 0 : t.currentPeriodStart).add((0, e_.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: l
        }
      }
    },
    [ep.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eP(ep.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(em.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: em.PartnerGame.FORTNITE
      })
    },
    [ep.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => T.default.isCurrentQuestInterrupted && null != T.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: T.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [ep.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, v.isEligibleForPomelo)() && !eP(ep.NoticeTypes.POMELO_ELIGIBLE)
    },
    [ep.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eP(ep.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(em.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: em.PartnerGame.FORTNITE
      })
    },
    [ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? z.default.getGuild(t) : null;
        return null != t && null != R.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ep.GuildFeatures.COMMUNITY)) && !eP(ep.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: a().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = R.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eP(ep.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== _.default.getEligibleGuildsForNagActivate().length && (0, h.isCreatorMonetizationNagActivateEnabled)()
    },
    [ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eP(ep.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, M.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [ep.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return F.isEligibleForNotice(t)
      }
    },
    [ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !eP(ep.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    }
  };

function ej() {
  if (!I.default.isConnected()) return !1;
  eD = null;
  let e = ei.default.getCurrentUser();
  if (null == e) return !1;
  let t = ed.default.getPremiumSubscription(),
    n = eo.default.isLocalizedPromoEnabled,
    l = et.default.getGuildId(),
    a = ee.default.getVoiceChannelId(),
    s = null != a ? er.default.getVoiceStateForChannel(a) : null,
    i = eI.CONFERENCE_MODE_ENABLED ? eb : eU;
  for (let u of i)
    if (null != eF[u] && eF[u].predicate({
        selectedGuildId: l,
        voiceChannelId: a,
        voiceState: s,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eF[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: l
      });
      eD = {
        ...ev,
        type: u,
        metadata: n
      };
      break
    } null != eD && eP(eD.type) && (eD = null)
}

function eG() {
  return !el.default.enabled && delete eL[ep.NoticeTypes.STREAMER_MODE], ej()
}
class ek extends s.default.Store {
  initialize() {
    this.syncWith([ea.default, Z.default, K.default, et.default, P.default, ec.default, B.default, Y.default, k.default, g.default], ej), this.waitFor(ei.default, en.default, z.default, Q.default, J.default, W.default, el.default, p.default, et.default, es.default, j.default, $.default, Z.default, eS.default, eT.default, eE.default, q.default, ed.default, eN.default, K.default, eu.default, X.default, P.default, ef.default, ec.default, Y.default, L.default, T.default, _.default, b.default)
  }
  hasNotice() {
    return null != eD && null != eD.type
  }
  getNotice() {
    return null == es.default.getAction() ? eD : null
  }
  isNoticeDismissed(e) {
    return eP(e)
  }
}
ek.displayName = "NoticeStore";
var ew = new ek(u.default, {
  CURRENT_USER_UPDATE: ej,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ej,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ej,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ej,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: ej,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ej,
  GUILD_CREATE: ej,
  GUILD_DELETE: ej,
  AUDIO_INPUT_DETECTED: ej,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: ej,
  CERTIFIED_DEVICES_SET: ej,
  AUDIO_SET_INPUT_DEVICE: ej,
  AUDIO_SET_OUTPUT_DEVICE: ej,
  MEDIA_ENGINE_DEVICES: ej,
  RTC_CONNECTION_STATE: ej,
  RPC_APP_AUTHENTICATED: ej,
  RPC_APP_DISCONNECTED: ej,
  USER_CONNECTIONS_UPDATE: ej,
  WINDOW_FOCUS: ej,
  INSTANT_INVITE_CREATE: ej,
  INSTANT_INVITE_REVOKE_SUCCESS: ej,
  SPOTIFY_PLAYER_PAUSE: ej,
  RUNNING_GAMES_CHANGE: ej,
  EXPERIMENTS_FETCH_SUCCESS: ej,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ej,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ej,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ej,
  DEVELOPER_TEST_MODE_RESET: ej,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: ej,
  DISPATCH_APPLICATION_INSTALL: ej,
  IMPERSONATE_STOP: ej,
  IMPERSONATE_UPDATE: ej,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === w.default.getId() && ej()
  },
  GUILD_MEMBER_UPDATE: ej,
  SURVEY_FETCHED: ej,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ej,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ej,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ej,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ej,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== w.default.getId()
    }) && ej()
  },
  STREAMER_MODE_UPDATE: eG,
  RUNNING_STREAMER_TOOLS_CHANGE: eG,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eL[ep.NoticeTypes.DISPATCH_ERROR], ej()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eL[ep.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ej()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return ej()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return ej()
  },
  NOTICE_SHOW: function(e) {
    eD = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eD && (null == e.id || e.id === eD.id) && (ex(eD.type, e.isTemporary, e.untilAtLeast), ej())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ex(t), ej()
  },
  LOGOUT: function() {
    eL = {}, eD = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: ej,
  AUTO_MODERATION_MENTION_RAID_DETECTION: ej,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ej,
  PROXY_BLOCKED_REQUEST: ej
})