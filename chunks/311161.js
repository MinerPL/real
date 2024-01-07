            "use strict";
            n.r(t), n.d(t, {
                DATE_CONFIG: function() {
                    return d
                },
                hasDetectedActivity: function() {
                    return s
                },
                hasDetectedRaid: function() {
                    return o
                },
                hasDetectedDMRaid: function() {
                    return c
                },
                getIncidentAlertType: function() {
                    return f
                },
                getEnabledInterventions: function() {
                    return _
                },
                getDisabledInterventions: function() {
                    return A
                },
                isUnderLockdown: function() {
                    return D
                },
                hasDMsDisabled: function() {
                    return I
                },
                hasInvitesDisabled: function() {
                    return E
                },
                getSecurityActionDetailsString: function() {
                    return S
                }
            }), n("424973");
            var i = n("866227"),
                l = n.n(i),
                u = n("712125"),
                a = n("421127"),
                r = n("782340");
            let d = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function s(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l() || null != e.raidDetectedAt && l(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function o(e) {
                return null != e.raidDetectedAt && l(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function c(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function f(e) {
                return null == e ? void 0 : o(e) ? u.GuildIncidentAlertTypes.JOIN_RAID : u.GuildIncidentAlertTypes.DM_RAID
            }

            function _(e, t) {
                let n = [];
                return e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function A(e, t) {
                let n = [];
                return !e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function D(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function I(e) {
                return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
            }

            function E(e) {
                return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
            }

            function S(e, t) {
                var n;
                let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
                if (null == i) return "";
                let l = null != e.dmsDisabledUntil,
                    u = null != e.invitesDisabledUntil;
                switch (!0) {
                    case l && u:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(r.default.getLocale(), d)
                        });
                    case l:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(r.default.getLocale(), d)
                        });
                    case u:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(r.default.getLocale(), d)
                        });
                    default:
                        return ""
                }
            }