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
  p = n("579565"),
  N = n("789563"),
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
  F = n("143573"),
  b = n("703537"),
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
  ep = n("352326"),
  eN = n("49111"),
  eI = n("492397"),
  em = n("411511"),
  eA = n("646718"),
  eg = n("843455"),
  eC = n("353927");
let eR = {
    [eN.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eN.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eN.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eN.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eN.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eN.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eN.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eN.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eN.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eN.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO
  },
  eM = {
    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eN.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eN.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eN.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eN.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
  },
  eO = new Set([eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.BLOCKED_BY_PROXY]),
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
let eU = [eN.NoticeTypes.QUARANTINED, eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eN.NoticeTypes.VIEWING_ROLES, eN.NoticeTypes.INVITED_TO_SPEAK, eN.NoticeTypes.LURKING_GUILD, eN.NoticeTypes.VOICE_DISABLED, eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.HARDWARE_MUTE, eN.NoticeTypes.H264_DISABLED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eN.NoticeTypes.BLOCKED_BY_PROXY, eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eN.NoticeTypes.GUILD_RAID_NOTIFICATION, eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eN.NoticeTypes.UNCLAIMED_ACCOUNT, eN.NoticeTypes.POMELO_ELIGIBLE, eN.NoticeTypes.PENDING_MEMBER, eN.NoticeTypes.OUTBOUND_PROMOTION, eN.NoticeTypes.CORRUPT_INSTALLATION, eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.SCHEDULED_MAINTENANCE, eN.NoticeTypes.BOUNCED_EMAIL_DETECTED, eN.NoticeTypes.UNVERIFIED_ACCOUNT, eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eN.NoticeTypes.PREMIUM_UNCANCEL, eN.NoticeTypes.PREMIUM_MISSING_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eN.NoticeTypes.PREMIUM_REACTIVATE, eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eN.NoticeTypes.MFA_SMS_BACKUP, eN.NoticeTypes.APPLICATION_TEST_MODE, eN.NoticeTypes.LOCALIZED_PRICING, eN.NoticeTypes.DOWNLOAD_NAG, eN.NoticeTypes.CONNECT_SPOTIFY, eN.NoticeTypes.CONNECT_PLAYSTATION, eN.NoticeTypes.SURVEY, eN.NoticeTypes.SERVER_USAGE_SURVEY, eN.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eN.NoticeTypes.DROPS_GO_LIVE_BANNER, eN.NoticeTypes.DROPS_ENDED_INCOMPLETE, eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR],
  eF = [eN.NoticeTypes.QUARANTINED, eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eN.NoticeTypes.VIEWING_ROLES, eN.NoticeTypes.INVITED_TO_SPEAK, eN.NoticeTypes.LURKING_GUILD, eN.NoticeTypes.VOICE_DISABLED, eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.HARDWARE_MUTE, eN.NoticeTypes.H264_DISABLED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.BLOCKED_BY_PROXY, eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eN.NoticeTypes.PENDING_MEMBER, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.SCHEDULED_MAINTENANCE],
  eb = {
    [eN.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, A.shouldShowRaidNotificationNagbar)().show && !eP(eN.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: a().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
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
    [eN.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eN.UserFlags.QUARANTINED)
      }
    },
    [eN.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return O.default.isViewingRoles(t)
      }
    },
    [eN.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, G.getAudienceRequestToSpeakState)(t) === G.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eN.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && L.default.isLurking(t)
      }
    },
    [eN.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != J.default.getRemoteDisconnectVoiceChannelId()
    },
    [eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != J.default.getLastSessionVoiceChannelId()
    },
    [eN.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, l = V.default.getChannel(t), a = (null == l ? void 0 : l.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === W.default.getInputDetected() && !a
      }
    },
    [eN.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = V.default.getChannel(t);
        return !W.default.getOpenH264() && null != t && er.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eN.NoticeTypes.HARDWARE_MUTE]: {
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
    [eN.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eS.default.getLastError(),
      metadata: () => ({
        error: eS.default.getLastError()
      })
    },
    [eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eT.default.getLastProgress(),
      metadata: () => eT.default.getLastProgress()
    },
    [eN.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => j.default.wasAutoPaused()
    },
    [eN.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eP(eN.NoticeTypes.BLOCKED_BY_PROXY) && F.default.blockedByProxy && U.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eN.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eN.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, l;
        let {
          selectedGuildId: a,
          currentUser: s
        } = e;
        return null !== (l = null != a && null != s && !(null === (t = z.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eN.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = Q.default.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== l && l
      }
    },
    [eN.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, x.shouldShowOutboundPromotionNotice)()
    },
    [eN.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eh.isPlatformEmbedded && (!i.default.supported() || ep.default.isCorruptInstallation())
    },
    [eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && er.default.hasVideo(t) && !W.default.supports(eC.Features.VIDEO) && !eP(eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
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
    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eP(eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && K.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = K.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eN.NoticeTypes.STREAMER_MODE]: {
      predicate: () => el.default.enabled
    },
    [eN.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eh.isPlatformEmbedded && !eP(eN.NoticeTypes.DOWNLOAD_NAG)
    },
    [eN.NoticeTypes.SCHEDULED_MAINTENANCE]: {
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
    [eN.NoticeTypes.SURVEY]: {
      predicate: () => null != ea.default.getCurrentSurvey(),
      metadata: () => ea.default.getCurrentSurvey()
    },
    [eN.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && m.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eP(eN.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eN.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eN.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eN.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !j.default.hasConnectedAccount() && $.default.isObservedAppRunning(f.default.get(eN.PlatformTypes.SPOTIFY).name) && !eP(eN.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
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
    [eN.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => Y.default.isSuggestedAccountType(eN.PlatformTypes.PLAYSTATION) && null == Y.default.getAccount(null, eN.PlatformTypes.PLAYSTATION) && !eP(eN.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eP(eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eP(eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eN.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, l = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eN.SubscriptionStatusTypes.CANCELED && 1 >= a().diff(a(t.canceledAt), "days"), i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = null != t && t.status === eN.SubscriptionStatusTypes.CANCELED && !i && l <= 7 && l >= 0 && (0, e_.isPremiumExactly)(n, eA.PremiumTypes.TIER_2) && !s && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(eN.NoticeTypes.PREMIUM_UNCANCEL) && r
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
    [eN.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
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
        }).length > 0, f = null != t && l <= (s > 14 ? 7 : 2) && l >= 0 && t.status !== eN.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(eN.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
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
    [eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, l = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, s = null != t && a(t.currentPeriodEnd).isBefore(a()), i = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !s && null != l && l.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
    [eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !l && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s
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
    [eN.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eN.UserFlags.MFA_SMS) && !t.hasFlag(eN.UserFlags.STAFF) && !t.hasFlag(eN.UserFlags.PARTNER) && !eP(eN.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eN.NoticeTypes.APPLICATION_TEST_MODE]: {
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
    [eN.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eP(eN.NoticeTypes.PREMIUM_REACTIVATE) && D.default.shouldShowReactivateNotice()
    },
    [eN.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eP(eN.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, i = null != s && eg.PREPAID_PAYMENT_SOURCES.has(s.type), r = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !l && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eP(eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === eN.SubscriptionStatusTypes.PAST_DUE ? a().diff(a(t.currentPeriodStart), "days") : 0, l = a(null == t ? void 0 : t.currentPeriodStart).add((0, e_.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: l
        }
      }
    },
    [eN.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eP(eN.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, p.getShowDropsNoticeBanner)(em.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: em.PartnerGame.FORTNITE
      })
    },
    [eN.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => T.default.isCurrentQuestInterrupted && null != T.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: T.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eN.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, v.isEligibleForPomelo)() && !eP(eN.NoticeTypes.POMELO_ELIGIBLE)
    },
    [eN.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eP(eN.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, p.getShowDropsEndedIncompleteBanner)(em.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: em.PartnerGame.FORTNITE
      })
    },
    [eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? z.default.getGuild(t) : null;
        return null != t && null != R.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eN.GuildFeatures.COMMUNITY)) && !eP(eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
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
    [eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eP(eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== _.default.getEligibleGuildsForNagActivate().length && (0, h.isCreatorMonetizationNagActivateEnabled)()
    },
    [eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eP(eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, M.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eN.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return b.isEligibleForNotice(t)
      }
    },
    [eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !eP(eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
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
    i = eI.CONFERENCE_MODE_ENABLED ? eF : eU;
  for (let u of i)
    if (null != eb[u] && eb[u].predicate({
        selectedGuildId: l,
        voiceChannelId: a,
        voiceState: s,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eb[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
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
  return !el.default.enabled && delete eL[eN.NoticeTypes.STREAMER_MODE], ej()
}
class ek extends s.default.Store {
  initialize() {
    this.syncWith([ea.default, Z.default, K.default, et.default, P.default, ec.default, B.default, Y.default, k.default, g.default], ej), this.waitFor(ei.default, en.default, z.default, Q.default, J.default, W.default, el.default, N.default, et.default, es.default, j.default, $.default, Z.default, eS.default, eT.default, eE.default, q.default, ed.default, ep.default, K.default, eu.default, X.default, P.default, ef.default, ec.default, Y.default, L.default, T.default, _.default, F.default)
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
    return delete eL[eN.NoticeTypes.DISPATCH_ERROR], ej()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eL[eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ej()
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