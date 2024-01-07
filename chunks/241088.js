            "use strict";
            i.r(t), i.d(t, {
                getSanitizedRestrictedGuilds: function() {
                    return S
                },
                getSanitizedMessageRequestRestrictedGuilds: function() {
                    return o
                },
                getSanitizedActivityRestrictedGuilds: function() {
                    return E
                },
                getSanitizedActivityJoiningRestrictedGuilds: function() {
                    return T
                },
                computeFlags: function() {
                    return I
                },
                harvestDisabled: function() {
                    return _
                },
                NonSpamRetrainingOptInOptions: function() {
                    return s
                },
                NonSpamRetrainingOptInOptionsToValue: function() {
                    return g
                },
                generateNonSpamRetrainingOptInSettingOptions: function() {
                    return f
                }
            });
            var n, s, a = i("845579"),
                d = i("341542"),
                r = i("305961");
            i("599110");
            var u = i("49111"),
                l = i("782340");
            let c = 864e5 * u.REQUEST_DATA_LIMIT_DAYS;

            function S() {
                let e = a.RestrictedGuildIds.getSetting();
                return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
            }

            function o() {
                let e = a.MessageRequestRestrictedGuildIds.getSetting();
                return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
            }

            function E() {
                let e = a.ActivityRestrictedGuilds.getSetting();
                return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
            }

            function T() {
                let e = a.ActivityJoiningRestrictedGuilds.getSetting();
                return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
            }

            function I(e) {
                return (e & u.AllFriendSourceFlags) === u.AllFriendSourceFlags ? {
                    all: !0,
                    mutualFriends: !0,
                    mutualGuilds: !0
                } : {
                    all: !1,
                    mutualFriends: (e & u.FriendSourceFlags.MUTUAL_FRIENDS) === u.FriendSourceFlags.MUTUAL_FRIENDS,
                    mutualGuilds: (e & u.FriendSourceFlags.MUTUAL_GUILDS) === u.FriendSourceFlags.MUTUAL_GUILDS
                }
            }

            function _(e, t) {
                return !t.verified || null != e && c > Date.now() - new Date(e.created_at).getTime()
            }(n = s || (s = {}))[n.UNDECIDED = 0] = "UNDECIDED", n[n.OPTIN = 1] = "OPTIN", n[n.OPTOUT = 2] = "OPTOUT";
            let g = {
                0: void 0,
                1: !0,
                2: !1
            };

            function f() {
                return [{
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
                    value: 1
                }, {
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
                    value: 2
                }, {
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
                    value: 0
                }]
            }