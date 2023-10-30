(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45891"], {
        349406: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                d = i("347924"),
                r = i("916650"),
                u = i("845579"),
                l = i("701909"),
                c = i("241088"),
                S = i("49111"),
                o = i("782340"),
                E = i("593217");

            function T(e) {
                var t;
                let {
                    isGuildRestricted: i,
                    handleRestrictedGuildChange: s,
                    isGuildActivityRestricted: u,
                    handleActivityRestrictedGuildChange: c,
                    isGuildActivityJoiningRestricted: T,
                    handleActivityJoiningRestrictedGuildChange: I,
                    isGuildMessageRequestRestricted: _,
                    handleMessageRequestRestrictedGuildChange: g,
                    guild: N,
                    transitionState: f,
                    onClose: R
                } = e, A = (0, r.default)(), C = "".concat(o.default.Messages.PRIVACY_SETTINGS, "—").concat(null != N ? N.toString() : "??"), G = N.hasFeature(S.GuildFeatures.HUB), M = (0, d.useInServerBadgingExperiment)(null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : "");
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: f,
                    size: a.ModalSize.SMALL,
                    "aria-label": C,
                    children: [(0, n.jsx)(a.ModalHeader, {
                        children: (0, n.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: C
                        })
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: E.content,
                        children: [(0, n.jsx)(a.FormItem, {
                            children: (0, n.jsx)(a.FormSwitch, {
                                value: !i,
                                note: G ? o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
                                onChange: s,
                                hideBorder: !0,
                                children: o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
                            })
                        }), (0, n.jsx)(a.FormDivider, {
                            className: E.divider
                        }), !A && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(a.FormItem, {
                                children: (0, n.jsx)(a.FormSwitch, {
                                    value: !_,
                                    note: G ? o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
                                        helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
                                    }) : o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
                                        helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
                                    }),
                                    onChange: g,
                                    disabled: i,
                                    hideBorder: !0,
                                    children: o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
                                })
                            }), (0, n.jsx)(a.FormDivider, {
                                className: E.divider
                            })]
                        }), (0, n.jsx)(a.FormItem, {
                            children: (0, n.jsx)(a.FormSwitch, {
                                value: !u,
                                onChange: c,
                                hideBorder: !0,
                                note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
                                    helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
                                }),
                                children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
                            })
                        }), (0, n.jsx)(a.FormDivider, {
                            className: E.divider
                        }), (0, n.jsx)(a.FormItem, {
                            children: (0, n.jsx)(a.FormSwitch, {
                                value: !T,
                                onChange: I,
                                hideBorder: !0,
                                note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
                                    helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
                                }),
                                children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
                            })
                        }), M ? (0, n.jsxs)(a.FormItem, {
                            className: E.disclaimer,
                            children: [(0, n.jsx)(a.FormDivider, {
                                className: E.divider
                            }), (0, n.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: o.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
                                    policyLink: "https://discord.com/safety/360043709612-our-policies"
                                })
                            })]
                        }) : null]
                    }), (0, n.jsx)(a.ModalFooter, {
                        children: (0, n.jsx)(a.Button, {
                            onClick: () => R(),
                            children: o.default.Messages.DONE
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    guild: t,
                    transitionState: i,
                    onClose: a
                } = e, d = t.id, r = u.RestrictedGuildIds.useSetting().includes(d), l = u.MessageRequestRestrictedGuildIds.useSetting().includes(d), S = u.ActivityRestrictedGuilds.useSetting().includes(d), o = u.ActivityJoiningRestrictedGuilds.useSetting().includes(d), E = s.useCallback(e => {
                    let t = new Set((0, c.getSanitizedRestrictedGuilds)());
                    e ? t.delete(d) : t.add(d), u.RestrictedGuildIds.updateSetting(Array.from(t))
                }, [d]), I = s.useCallback(e => {
                    let t = new Set((0, c.getSanitizedActivityRestrictedGuilds)());
                    e ? t.delete(d) : t.add(d), u.ActivityRestrictedGuilds.updateSetting([...t])
                }, [d]), _ = s.useCallback(e => {
                    let t = new Set((0, c.getSanitizedActivityJoiningRestrictedGuilds)());
                    e ? t.delete(d) : t.add(d), u.ActivityJoiningRestrictedGuilds.updateSetting([...t])
                }, [d]), g = s.useCallback(e => {
                    let t = new Set((0, c.getSanitizedMessageRequestRestrictedGuilds)());
                    e ? t.delete(d) : t.add(d), u.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t))
                }, [d]);
                return (0, n.jsx)(T, {
                    isGuildRestricted: r,
                    handleRestrictedGuildChange: E,
                    isGuildActivityRestricted: S,
                    handleActivityRestrictedGuildChange: I,
                    isGuildActivityJoiningRestricted: o,
                    handleActivityJoiningRestrictedGuildChange: _,
                    isGuildMessageRequestRestricted: l,
                    handleMessageRequestRestrictedGuildChange: g,
                    guild: t,
                    transitionState: i,
                    onClose: a
                })
            }
        },
        347924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useInServerBadgingExperiment: function() {
                    return a
                }
            });
            var n = i("862205");
            let s = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                let {
                    enabled: t
                } = s.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        16108: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                acceptMessageRequest: function() {
                    return u
                },
                clearMessageRequestState: function() {
                    return l
                },
                markAsMessageRequest: function() {
                    return c
                },
                rejectMessageRequest: function() {
                    return S
                },
                rejectMessageRequestBatch: function() {
                    return o
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var n = i("872717"),
                s = i("913144"),
                a = i("437822"),
                d = i("773163"),
                r = i("49111");
            async function u(e) {
                await n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), s.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function l(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function c(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function S(e) {
                return n.default.delete({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function o(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                a.default.getLocationMetadata()
            }
        },
        773163: function(e, t, i) {
            "use strict";
            var n, s;
            i.r(t), i.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return n
                }
            }), (s = n || (n = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.PENDING = 1] = "PENDING", s[s.ACCEPTED = 2] = "ACCEPTED", s[s.REJECTED = 3] = "REJECTED"
        },
        916650: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("884691"),
                s = i("446674"),
                a = i("697218"),
                d = i("16108"),
                r = i("288518");
            let u = new Set(["GB"]);

            function l() {
                let e = (0, s.useStateFromStores)([r.default], () => r.default.getUserCountryCode()),
                    t = !1 === (0, s.useStateFromStores)([a.default], () => {
                        var e;
                        return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                    });
                return n.useEffect(() => {
                    null == e && (0, d.fetchUserCountryCode)()
                }, [e]), !!(null != e && u.has(e.alpha2)) && !!t || !1
            }
        },
        241088: function(e, t, i) {
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
                    return N
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
                [s.UNDECIDED]: void 0,
                [s.OPTIN]: !0,
                [s.OPTOUT]: !1
            };

            function N() {
                return [{
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
                    value: s.OPTIN
                }, {
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
                    value: s.OPTOUT
                }, {
                    name: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
                    desc: l.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
                    value: s.UNDECIDED
                }]
            }
        }
    }
]);