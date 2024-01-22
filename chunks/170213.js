"use strict";
n.r(t), n.d(t, {
  SafetyHubView: function() {
    return u
  },
  SafetyHubLinks: function() {
    return I
  },
  SafetyHubPolicyNoticeKeys: function() {
    return m
  },
  SafetySystemNotificationCtaType: function() {
    return d
  },
  SafetySystemNotificationEmbedKeys: function() {
    return N
  },
  SafetyHubAnalyticsActions: function() {
    return c
  },
  SafetyHubAnalyticsActionSource: function() {
    return f
  },
  AppealIngestionSignal: function() {
    return E
  },
  AppealIngestionSignalOrder: function() {
    return p
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return S
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return A
  },
  AppealIngestionSlideTypes: function() {
    return _
  },
  SlidesOrderDsaEligible: function() {
    return C
  },
  SlidesOrderNonDsaEligible: function() {
    return h
  }
});
var s, l, a, i, r, o, u, d, c, f, E, _, T = n("49111");
(s = u || (u = {})).SETTINGS = "SETTINGS", s.ACCOUNT_STANDING = "ACCOUNT_STANDING";
class I {}
I.TOS_LINK = "https://discord.com/terms", I.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", I.APPEALS_LINK = "https://support.discord.com/hc/requests/new", I.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847", I.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731", I.SPAM_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
class m {}
m.CLASSIFICATION_ID = "classification_id", m.INCIDENT_TIMESTAMP = "incident_time", (l = d || (d = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", l.LEARN_MORE_LINK = "learn_more_link";
class N {}
N.ICON_TYPE = "icon_type", N.HEADER = "header", N.BODY = "body", N.CTAS = "ctas", N.TIMESTAMP = "timestamp", N.THEME = "theme", N.CLIENT_VERSION_MESSAGE = "client_version_message", N.LEARN_MORE_LINK = "learn_more_link", N.CLASSIFICATION_ID = "classification_id", (a = c || (c = {}))[a.ViewViolationDetail = 0] = "ViewViolationDetail", a[a.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", a[a.ClickLetUsKnow = 2] = "ClickLetUsKnow", a[a.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", a[a.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", a[a.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", a[a.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", a[a.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (i = f || (f = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", i[i.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: T.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: T.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: T.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: T.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: T.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: T.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (r = E || (E = {}))[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let p = [0, 1, 2, 3],
  S = 372,
  A = 279;
(o = _ || (_ = {})).SPEED_BUMP = "speed-bump", o.COLLECT_SIGNAL = "collect-signal", o.CONFIRM_SUBMISSION = "confirm-submission", o.REQUEST_SENT = "request-sent", o.THANKS = "thanks";
let C = {
    "speed-bump": {
      next: "collect-signal",
      prev: null
    },
    "collect-signal": {
      next: "confirm-submission",
      prev: "speed-bump"
    },
    "confirm-submission": {
      next: "request-sent",
      prev: "collect-signal"
    },
    "request-sent": {
      next: null,
      prev: null
    }
  },
  h = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  }