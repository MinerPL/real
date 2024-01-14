"use strict";
n.r(t), n.d(t, {
  SafetyHubView: function() {
    return u
  },
  SafetyHubLinks: function() {
    return h
  },
  SafetyHubPolicyNoticeKeys: function() {
    return p
  },
  SafetySystemNotificationCtaType: function() {
    return d
  },
  SafetySystemNotificationEmbedKeys: function() {
    return I
  },
  SafetyHubAnalyticsActions: function() {
    return c
  },
  SafetyHubAnalyticsActionSource: function() {
    return f
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return T
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return g
  },
  AppealIngestionSlideTypes: function() {
    return E
  },
  SlidesOrderDsaEligible: function() {
    return C
  },
  SlidesOrderNonDsaEligible: function() {
    return S
  }
});
var a, s, l, i, r, o, u, d, c, f, m, E, _ = n("49111");
(a = u || (u = {})).SETTINGS = "SETTINGS", a.ACCOUNT_STANDING = "ACCOUNT_STANDING";
class h {}
h.TOS_LINK = "https://discord.com/terms", h.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", h.APPEALS_LINK = "https://support.discord.com/hc/requests/new", h.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847", h.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731", h.SPAM_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
class p {}
p.CLASSIFICATION_ID = "classification_id", p.INCIDENT_TIMESTAMP = "incident_time", (s = d || (d = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", s.LEARN_MORE_LINK = "learn_more_link";
class I {}
I.ICON_TYPE = "icon_type", I.HEADER = "header", I.BODY = "body", I.CTAS = "ctas", I.TIMESTAMP = "timestamp", I.THEME = "theme", I.CLIENT_VERSION_MESSAGE = "client_version_message", I.LEARN_MORE_LINK = "learn_more_link", I.CLASSIFICATION_ID = "classification_id", (l = c || (c = {}))[l.ViewViolationDetail = 0] = "ViewViolationDetail", l[l.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", l[l.ClickLetUsKnow = 2] = "ClickLetUsKnow", (i = f || (f = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", Object.freeze({
  SPEED_BUMP: _.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: _.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: _.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: _.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: _.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: _.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (r = m || (m = {})).DIDNT_VIOLATE = "TODO i18n a", r.STRICT_OR_UNFAIR = "TODO i18n b", r.PENALTY = "TODO i18n c", r.SOMETHING_ELSE = "TODO i18n d";
let T = 372,
  g = 279;
(o = E || (E = {})).SPEED_BUMP = "speed-bump", o.COLLECT_SIGNAL = "collect-signal", o.CONFIRM_SUBMISSION = "confirm-submission", o.REQUEST_SENT = "request-sent", o.THANKS = "thanks";
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
  S = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  }