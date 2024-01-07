            "use strict";
            n.r(t), n.d(t, {
                SafetyHubView: function() {
                    return o
                },
                SafetyHubLinks: function() {
                    return E
                },
                SafetyHubPolicyNoticeKeys: function() {
                    return _
                },
                SafetySystemNotificationCtaType: function() {
                    return u
                },
                SafetySystemNotificationEmbedKeys: function() {
                    return h
                },
                SafetyHubAnalyticsActions: function() {
                    return d
                },
                SafetyHubAnalyticsActionSource: function() {
                    return c
                },
                DEFAULT_MEDIA_MAX_WIDTH: function() {
                    return p
                },
                DEFAULT_MEDIA_MAX_HEIGHT: function() {
                    return I
                }
            });
            var a, s, l, i, r, o, u, d, c, f, m = n("49111");
            (a = o || (o = {})).SETTINGS = "SETTINGS", a.ACCOUNT_STANDING = "ACCOUNT_STANDING";
            class E {}
            E.TOS_LINK = "https://discord.com/terms", E.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", E.APPEALS_LINK = "https://support.discord.com/hc/requests/new", E.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847", E.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
            class _ {}
            _.CLASSIFICATION_ID = "classification_id", _.INCIDENT_TIMESTAMP = "incident_time", (s = u || (u = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", s.LEARN_MORE_LINK = "learn_more_link";
            class h {}
            h.ICON_TYPE = "icon_type", h.HEADER = "header", h.BODY = "body", h.CTAS = "ctas", h.TIMESTAMP = "timestamp", h.THEME = "theme", h.CLIENT_VERSION_MESSAGE = "client_version_message", h.LEARN_MORE_LINK = "learn_more_link", h.CLASSIFICATION_ID = "classification_id", (l = d || (d = {}))[l.ViewViolationDetail = 0] = "ViewViolationDetail", l[l.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", l[l.ClickLetUsKnow = 2] = "ClickLetUsKnow", (i = c || (c = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", Object.freeze({
                SPEED_BUMP: m.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
                COLLECT_SIGNAL: m.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
                CONFIRM_SUBMISSION: m.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                REQUEST_SENT: m.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
                THANKS: m.AnalyticsSections.APPEAL_INGESTION_THANKS,
                SPAM: m.AnalyticsSections.APPEAL_INGESTION_SPAM
            }), (r = f || (f = {})).DIDNT_VIOLATE = "TODO i18n a", r.STRICT_OR_UNFAIR = "TODO i18n b", r.PENALTY = "TODO i18n c", r.SOMETHING_ELSE = "TODO i18n d";
            let p = 372,
                I = 279