            "use strict";
            n.r(t), n.d(t, {
                OVERLAY_SUPPORTED: function() {
                    return _
                },
                OverlayNudgeTypes: function() {
                    return u
                },
                getOverlayNotificationGroup: function() {
                    return S
                },
                OverlayNotificationGroup: function() {
                    return d
                },
                OverlayNotificationType: function() {
                    return f
                },
                OverlayNotificationAction: function() {
                    return E
                },
                BackgroundOpacityClasses: function() {
                    return m
                },
                OverlayMethod: function() {
                    return h
                },
                OpacityBounds: function() {
                    return T
                }
            });
            var i, r, s, a, o, l, u, c, d, f, E, h, p = n("773336");
            let _ = p.isPlatformEmbedded && ((0, p.isWindows)() || !1);

            function S(e) {
                switch (e) {
                    case "News Nudge":
                    case "Welcome Nudge":
                    case "Go Live Nudge":
                    case "Go Live Non Voice Nudge":
                    case "Start Broadcast Notification":
                        return 0;
                    case "Text Chat":
                        return 1;
                    case "Activity User Join":
                    case "Activity Invite":
                        return 3;
                    case "Incoming Call":
                        return 2;
                    case "Clips Reminder Notification":
                    case "Clips Notification":
                        return 4;
                    default:
                        return 5
                }
            }(i = u || (u = {}))[i.WELCOME = 0] = "WELCOME", i[i.NEWS = 1] = "NEWS", i[i.GO_LIVE_VOICE = 2] = "GO_LIVE_VOICE", i[i.GO_LIVE_NON_VOICE = 3] = "GO_LIVE_NON_VOICE", i[i.BROADCAST = 4] = "BROADCAST", i[i.KEYBIND_INDICATORS = 5] = "KEYBIND_INDICATORS", (r = c || (c = {})).PRIMARY = "PRIMARY", r.BRAND = "BRAND", r.DANGER = "DANGER", (s = d || (d = {}))[s.Nudge = 0] = "Nudge", s[s.TextChat = 1] = "TextChat", s[s.VoiceCall = 2] = "VoiceCall", s[s.Activity = 3] = "Activity", s[s.Clips = 4] = "Clips", s[s.Other = 5] = "Other", (a = f || (f = {})).NewsNudge = "News Nudge", a.WelcomeNudge = "Welcome Nudge", a.TextChat = "Text Chat", a.ActivityUserJoin = "Activity User Join", a.ActivityInvite = "Activity Invite", a.IncomingCall = "Incoming Call", a.GoLiveNudge = "Go Live Nudge", a.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge", a.OverlayCrashed = "Overlay Crashed", a.StartBroadcastNotification = "Start Broadcast Notification", a.ClipsReminderNotification = "Clips Reminder Notification", a.ClipsNotification = "Clips Notification", a.KeybindIndicatorsNotification = "Keybind Indicators Notification", (o = E || (E = {}))[o.Viewed = 0] = "Viewed", o[o.Clicked = 1] = "Clicked";
            let m = Object.freeze({
                LOW: "background-opacity-low",
                MEDIUM: "background-opacity-medium",
                HIGH: "background-opacity-high",
                FULL: "background-opacity-full",
                DISABLED: null
            });
            (l = h || (h = {}))[l.Disabled = 0] = "Disabled", l[l.Hook = 1] = "Hook", l[l.OutOfProcess = 2] = "OutOfProcess";
            let T = Object.freeze({
                BOTTOM: 0,
                LOWER: .25,
                UPPER: .75,
                TOP: 1
            })