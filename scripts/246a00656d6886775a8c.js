(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4633"], {
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    i = t.length;
                if (i > n) return !1;
                if (i === n) return t === e;
                t: for (var u = 0, a = 0; u < i; u++) {
                    for (var r = t.charCodeAt(u); a < n;)
                        if (e.charCodeAt(a++) === r) continue t;
                    return !1
                }
                return !0
            }
        },
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return a
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return l
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var i = n("913144"),
                u = n("696605");

            function a(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function r(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function l(t, e, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function o(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: i,
                    height: a,
                    rowHeight: r
                } = t;

                function o(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / r)) + e)
                }
                let s = [];

                function d(t) {
                    let e = t + (u.MINIMUM_RANGE - 1);
                    return s.push([t, e]), e + 1
                }
                let c = o(.5 * a),
                    E = o(i, -c),
                    I = o(i + a, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; E <= I;) E = d(E);
                l(e, n, s)
            }
        },
        713841: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                u = n("592407"),
                a = n("482391"),
                r = n("611183"),
                l = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: t,
                            sectionId: e
                        })
                    },
                    startEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    stopEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    startEditingIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: t
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: t
                        })
                    },
                    startEditingWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: t
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: t
                        })
                    },
                    async saveApplicationPermissions(t, e, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.updateApplicationCommandPermissions({
                                applicationId: t,
                                commandId: t,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: e,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveIntegration(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await u.default.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveWebhook(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.default.update(t, e.id, e), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    }
                }
        },
        352674: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("913144"),
                u = {
                    startTyping(t) {
                        i.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: t
                        })
                    },
                    stopTyping(t) {
                        i.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: t
                        })
                    }
                }
        },
        611183: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("917351"),
                u = n.n(i),
                a = n("872717"),
                r = n("913144"),
                l = n("49111");
            let o = ["Spidey Bot", "Captain Hook"];
            var s = {
                fetchForGuild(t) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t
                    }), a.default.get({
                        url: l.Endpoints.GUILD_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: n
                        } = e;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            webhooks: n
                        })
                    }).catch(e => {
                        let {
                            body: n
                        } = e;
                        r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(t, e) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t,
                        channelId: e
                    }), a.default.get({
                        url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            channelId: e,
                            webhooks: i
                        })
                    })
                },
                create: (t, e, n) => (null == n && (n = o[u.random(0, o.length - 1)]), a.default.post({
                    url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: t,
                        webhook: n
                    }), n
                })),
                delete: (t, e) => a.default.delete({
                    url: l.Endpoints.WEBHOOK(e),
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: t,
                        webhookId: e
                    })
                }),
                update: (t, e, n) => a.default.patch({
                    url: l.Endpoints.WEBHOOK(e),
                    body: n,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: t,
                        webhook: n
                    }), n
                })
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var i = n("884691"),
                u = n("917351"),
                a = n.n(u);
            n("233736");
            var r = n("666020");

            function l(t) {
                i.useEffect(() => (a.forEach(t, (t, e) => (0, r.subscribeMembers)(e, t)), () => {
                    a.forEach(t, (t, e) => (0, r.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        991630: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                u = n("884691"),
                a = n("414456"),
                r = n.n(a),
                l = n("587974"),
                o = n("315102"),
                s = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(t) {
                let {
                    section: e,
                    isSelected: n,
                    width: a,
                    height: E,
                    className: I,
                    selectable: T = !1,
                    onFocus: f,
                    onBlur: _,
                    onMouseOver: S,
                    onMouseLeave: N,
                    ...p
                } = t, [A, C] = u.useState(!1), m = u.useCallback(() => {
                    C(!0), null == f || f()
                }, [f]), h = u.useCallback(() => {
                    C(!1), null == _ || _()
                }, [_]), O = u.useCallback(() => {
                    C(!0), null == S || S()
                }, [S]), D = u.useCallback(() => {
                    C(!1), null == N || N()
                }, [N]), G = u.useMemo(() => {
                    if (e.type === s.ApplicationCommandSectionType.APPLICATION) {
                        var t;
                        return o.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            bot: null === (t = e.application) || void 0 === t ? void 0 : t.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return c
                }, [e, a]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: r(d.wrapper, I, {
                        [d.selectable]: T,
                        [d.selected]: T && n
                    }),
                    onFocus: m,
                    onBlur: h,
                    onMouseOver: O,
                    onMouseLeave: D,
                    children: (0, i.jsx)(l.default, {
                        className: d.mask,
                        mask: T && (n || A) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: E,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: a,
                                height: E
                            },
                            src: G
                        })
                    })
                })
            }
        },
        943161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("414456"),
                a = n.n(u),
                r = n("83910"),
                l = n("93393"),
                o = n("317041"),
                s = n("749296");
            let d = t => {
                switch (t.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function c(t) {
                let {
                    section: e,
                    className: n,
                    width: u,
                    height: r,
                    padding: l,
                    isSelected: o,
                    selectable: c = !1,
                    ...E
                } = t, I = d(e);
                return (0, i.jsx)("div", {
                    className: a(s.wrapper, n, {
                        [s.selectable]: c,
                        [s.selected]: c && o
                    }),
                    style: {
                        width: u,
                        height: r,
                        padding: null != l ? l : 0
                    },
                    children: null != I ? (0, i.jsx)(I, {
                        className: s.icon,
                        width: u,
                        height: r,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return s
                }
            });
            var i = n("524768"),
                u = n("991630"),
                a = n("943161"),
                r = n("317041");
            let l = t => t.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : u.default;

            function o(t) {
                return "".concat(t / 16, "rem")
            }

            function s(t, e) {
                let n = e,
                    i = !1,
                    u = e.indexOf(":");
                if (u >= 0) {
                    let t = e.lastIndexOf(" ", u);
                    t >= 0 ? (e = e.substring(0, t), i = !0) : e = e.substring(0, u)
                } else e = e.substring(0, e.length);
                let a = e.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), e = a.join(" "), (n.length > e.length || e.endsWith(" ")) && (i = !0, e = e.trimEnd()), {
                    text: e,
                    parts: a,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("850572"),
                r = () => (0, i.jsx)("div", {
                    className: a.loadingWrapper,
                    children: (0, i.jsx)(u.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useShowApplicationInGDM: function() {
                    return r
                }
            });
            var i = n("65597"),
                u = n("42203"),
                a = n("337026");

            function r(t) {
                let e = (0, i.default)([u.default], () => u.default.getChannel(t)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(t) {
                    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
                }(e)
            }
        },
        149022: function(t, e, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function u(t) {
                return {
                    textValue: t,
                    richValue: r(t)
                }
            }
            n.r(e), n.d(e, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return u
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let a = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function r(t) {
                return "" !== t ? t.split("\n").map(t => ({
                    type: "line",
                    children: [{
                        text: t
                    }]
                })) : a
            }

            function l(t) {
                switch (t.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: t.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: t.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: t.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: t.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: t.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: t.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: t.emoji.name, surrogate: t.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: t.emoji.emojiId, name: t.emoji.name, animated: t.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        235275: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var i = n("446674"),
                u = n("862205"),
                a = n("305961"),
                r = n("980215");
            let l = (0, u.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function o() {
                let {
                    isDMsToClydeEnabled: t
                } = l.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), e = (0, i.useStateFromStoresArray)([a.default], () => a.default.getGuildIds()), n = e.some(t => (0, r.getClydeExperimentEnabled)(a.default.getGuild(t)));
                return t && n
            }
        },
        497660: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var i = n("37983"),
                u = n("884691"),
                a = n("446674"),
                r = n("77078"),
                l = n("713841"),
                o = n("592407"),
                s = n("305961"),
                d = n("957255"),
                c = n("49111"),
                E = n("782340"),
                I = n("460856");

            function T(t, e, n) {
                let T = s.default.getGuild(e),
                    f = (0, a.useStateFromStores)([d.default], () => null != T ? d.default.can(c.Permissions.MANAGE_GUILD, T) : null),
                    _ = u.useCallback(() => {
                        o.default.open(e, c.GuildSettingsSections.INTEGRATIONS), l.default.setSection(c.IntegrationSettingsSections.APPLICATION, t.id)
                    }, [t.id, e]),
                    S = n === c.AppContext.POPOUT;
                return t.bot && f && !S ? (0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: I.labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: I.label,
                            children: E.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        406043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserCommunicationDisabled: function() {
                    return l
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var i = n("446674"),
                u = n("26989"),
                a = n("697218"),
                r = n("509");

            function l(t) {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser());
                return d(null == e ? void 0 : e.id, t)
            }

            function o(t, e, n) {
                return null != e && null != t ? n.getMember(e, t) : null
            }

            function s(t) {
                var e;
                return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, r.isMemberCommunicationDisabled)(t)]
            }

            function d(t, e) {
                let n = (0, i.useStateFromStores)([u.default], () => o(t, e, u.default), [e, t]);
                return s(n)
            }

            function c(t, e) {
                let n = o(t, e, u.default);
                return s(n)
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingNickname: function() {
                    return _
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return A
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return m
                }
            });
            var i = n("872717"),
                u = n("913144"),
                a = n("54239"),
                r = n("49111");
            async function l(t, e) {
                let {
                    nick: n,
                    avatar: a
                } = e;
                if (null == t) throw Error("Need guildId");
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: a
                        },
                        oldFormErrors: !0
                    });
                    return u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), u.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function o(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function s(t, e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function d() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, a.popLayer)()
            }

            function c() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function I(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function T(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function f(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function _(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function S(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function N() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, u, a, r, l, o, s, d, c;
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var E = n("446674"),
                I = n("913144"),
                T = n("49111");
            let f = T.FormStates.CLOSED,
                _ = {},
                S = !1;

            function N() {
                f = T.FormStates.CLOSED, _ = {}, s = null, d = void 0, c = []
            }

            function p() {
                A(), C(), _ = {}, f = T.FormStates.OPEN
            }

            function A() {
                i = void 0, l = void 0
            }

            function C() {
                u = void 0, a = void 0, r = void 0, o = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return f
                }
                getErrors() {
                    return _
                }
                showNotice() {
                    return void 0 !== i || void 0 !== u || void 0 !== a || void 0 !== r || void 0 !== l || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return u
                }
                getPendingBio() {
                    return a
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingBio: a,
                        pendingPronouns: r,
                        pendingNickname: l,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var h = new m(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    s = t.guild, f = T.FormStates.OPEN, _ = {}, d = t.source, c = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    s = t.guild, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    f = T.FormStates.SUBMITTING, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (f !== T.FormStates.SUBMITTING) return !1;
                    f = T.FormStates.OPEN, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    f = T.FormStates.OPEN, _ = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    S = e
                }
            })
        },
        130037: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useTrackMemberSearchUsed: function() {
                    return T
                },
                useTrackMemberFilterRolesUsed: function() {
                    return f
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return _
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return S
                }
            });
            var i, u, a, r, l = n("884691"),
                o = n("812204"),
                s = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function I(t, e, n) {
                var i;
                let u = {
                    ...e,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(t, u)
            }

            function T(t) {
                let e = l.useCallback(e => {
                    ! function(t) {
                        let e = {
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
                    }(t)
                }, [t]);
                return e
            }

            function f(t) {
                let e = l.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            selected_role_count: e.size,
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(t, e)
                }, [t]);
                return e
            }(i = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function _(t) {
                let e = l.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            flag_type: e,
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(t, e)
                }, [t]);
                return e
            }

            function S(t, e) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: u
                } = e, a = l.useCallback(e => {
                    let a = {
                        action_type: e,
                        mod_user_id: d.default.getId(),
                        guild_id: t,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != u ? u : void 0
                    };
                    I(E.AnalyticEvents.MODERATION_ACTION, a)
                }, [t, n, i, u]);
                return a
            }(u = r || (r = {})).BAN = "ban", u.KICK = "kick", u.MUTE = "mute", u.TIMEOUT = "timeout", u.ADD_ROLE = "add_role", u.REMOVE_ROLE = "remove_role", u.COPY_ID = "copy_id", u.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return s
                },
                getApplicationCommands: function() {
                    return d
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return I
                },
                updateApplicationCommandPermissions: function() {
                    return T
                }
            });
            var i = n("872717"),
                u = n("913144"),
                a = n("507217"),
                r = n("389153"),
                l = n("49111");

            function o() {
                u.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function s(t, e, n) {
                u.default.dispatch({
                    applicationId: t,
                    commandId: e,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(t, e) {
                i.default.get(l.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
                    u.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: e,
                        commands: n.body.application_commands,
                        guildId: t,
                        permissions: n.body.permissions
                    })
                }, () => {
                    u.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: e
                    })
                })
            }
            async function c(t, e, n) {
                let a = [];
                try {
                    let u = await i.default.get(l.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
                    u.ok && (a = u.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        u.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: t,
                            commandId: n,
                            guildId: e
                        });
                        return
                    }
                }
                u.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: e,
                    permissions: a
                })
            }

            function E(t) {
                u.default.dispatch({
                    applicationId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function I(t) {
                u.default.dispatch({
                    commandId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function T(t) {
                let {
                    applicationId: e,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: l,
                    guildId: o,
                    permissions: s
                } = t, d = n === e ? function(t, e, n, i) {
                    if (!n || !i) return e;
                    let u = {
                        [t]: n,
                        [(0, r.allChannelsSentinel)(t)]: i
                    };
                    return e.filter(t => {
                        let e = u[t.id];
                        return null == e || t.permission !== e
                    })
                }(o, s, i, l) : s, c = await a.updateApplicationGuildCommandPermissions(e, o, n, d);
                c.ok && u.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: o,
                    permissions: c.body.permissions
                })
            }
        },
        274800: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                queueInteractionComponentState: function() {
                    return r
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var i = n("872717"),
                u = n("913144"),
                a = n("49111");

            function r(t, e, n, i) {
                u.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: t,
                    nonce: e,
                    state: n,
                    indices: i
                })
            }

            function l(t, e) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: a,
                    onSuccess: r,
                    onFailure: l
                } = e;
                u.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: t,
                    messageId: i,
                    onCreate: a,
                    onSuccess: r,
                    onFailure: l
                })
            }

            function o(t, e, n) {
                u.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: t,
                    errorMessage: n,
                    errorCode: e
                })
            }
            async function s(t, e) {
                let n = await i.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    u.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: t,
                        messageId: e,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(t, e, n) {
            "use strict";
            let i, u;
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var a = n("446674"),
                r = n("913144"),
                l = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                E = {};

            function I(t) {
                delete d[t];
                let e = E[t];
                null != e && delete c[e], delete E[t]
            }
            class T extends a.default.Store {
                getInteraction(t) {
                    let e = c[t.id];
                    return null != e ? d[e] : null
                }
                getMessageInteractionStates() {
                    let t = {};
                    for (let [e, n] of Object.entries(d)) {
                        let i = E[e];
                        null != i && (t[i] = n.state)
                    }
                    return t
                }
                canQueueInteraction(t, e) {
                    let n = c[t];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[e] || d[e].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return u
                }
                getIFrameModalKey() {
                    return i
                }
            }
            T.displayName = "InteractionStore";
            var f = new T(r.default, {
                LOGOUT: function() {
                    d = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(t) {
                    let {
                        nonce: e,
                        messageId: n,
                        data: i,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: r,
                        onFailure: l
                    } = t;
                    null != n && (c[n] = e, E[e] = n), d[e] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: r,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        interactionId: i
                    } = t;
                    if (null == n) return !1;
                    let u = d[n];
                    if (null == u || u.state !== s.InteractionState.QUEUED) return !1;
                    u.state = s.InteractionState.CREATED, null === (e = u.onCreate) || void 0 === e || e.call(u, i)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e;
                    let {
                        nonce: n
                    } = t;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (e = i.onSuccess) || void 0 === e || e.call(i), I(n)
                },
                INTERACTION_FAILURE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: u
                    } = t;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a) return !1;
                    null === (e = a.onFailure) || void 0 === e || e.call(a, i, u), a.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? I(n) : d[n] = {
                        ...a,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: u
                    }
                },
                MESSAGE_CREATE: function(t) {
                    let {
                        message: e
                    } = t;
                    if (null == e.nonce) return !1;
                    {
                        var n;
                        let t = d[e.nonce];
                        if (null == t) return !1;
                        null === (n = t.onSuccess) || void 0 === n || n.call(t), I(e.nonce)
                    }
                },
                CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t, n = o.default.getChannel(e);
                    if (null == n) return !1;
                    for (let [t, e] of Object.entries(d)) e.state === s.InteractionState.FAILED && I(t)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(t) {
                    let {
                        application: e
                    } = t;
                    u = e.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, u = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(t) {
                    let {
                        modalKey: e
                    } = t;
                    i = e
                }
            })
        },
        3765: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                InteractionState: function() {
                    return i
                }
            }), (u = i || (i = {}))[u.QUEUED = 0] = "QUEUED", u[u.CREATED = 1] = "CREATED", u[u.FAILED = 2] = "FAILED"
        },
        752598: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return N
                },
                handleInteractionResponse: function() {
                    return A
                },
                InteractionStatusViewState: function() {
                    return u
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return m
                }
            });
            var i, u, a = n("249654"),
                r = n("872717"),
                l = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                E = n("274800"),
                I = n("809810"),
                T = n("3765"),
                f = n("606981"),
                _ = n("49111");

            function S(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : a.default.extractTimestamp(t) + 9e5
            }
            let N = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: i,
                    customId: u,
                    indices: l,
                    applicationId: o,
                    channelId: T,
                    guildId: f,
                    localState: S
                } = t, N = a.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, N)) return;
                await d.default.unarchiveThreadIfNecessary(T), (0, E.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: u,
                        indices: l
                    },
                    onFailure: (t, e) => p(T, t, e)
                }), null != S && (0, E.queueInteractionComponentState)(n, N, S, l);
                let C = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: f,
                    channel_id: T,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: u,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === s.ComponentType.STRING_SELECT || t.type === s.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(S)
                    }
                };
                await r.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, t => {
                    A(N, T, f, t)
                })
            }, p = (t, e, n) => {
                null == n && null != e && o.default.sendClydeError(t, e)
            }, A = (t, e, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var u;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === _.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let u = (0, f.getFirstSkemaError)(i.body.errors);
                                null != u && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === u.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === u.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: n
                                }), (0, E.setFailed)(t, void 0, null == u ? void 0 : u.message);
                                return
                            }(0, E.setFailed)(t, void 0, i.body.message);
                            return
                        }(0, E.setFailed)(t, null === (u = i.body) || void 0 === u ? void 0 : u.code);
                        return
                    }(0, E.setFailed)(t)
                }
            };
            (i = u || (u = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (t, e) => {
                var n;
                let i = null == e ? void 0 : e.state,
                    r = t.state === _.MessageStates.SENT && S(t.id) < Date.now();
                let l = t.state === _.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == e ? void 0 : e.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    d = t.isCommandType();
                if (o && i === T.InteractionState.QUEUED || d && t.state === _.MessageStates.SENDING && null != e) return u.SENDING;
                if (o && i === T.InteractionState.CREATED || t.hasFlag(_.MessageFlags.LOADING) && !r) return u.CREATED;
                if (null != t.interaction && t.hasFlag(_.MessageFlags.LOADING) && r) return u.TIMED_OUT;
                else if (null != t.interaction && !t.hasFlag(_.MessageFlags.LOADING) && l) return u.TIMED_OUT;
                else if (d && t.state === _.MessageStates.SEND_FAILED) return u.FAILED
            };

            function m(t) {
                var e;
                let n = t.options;
                for (;
                    (null === (e = n) || void 0 === e ? void 0 : e.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let t of null != n ? n : [])
                    if (t.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getFirstSkemaError: function() {
                    return u
                }
            });
            let i = "_errors";

            function u(t) {
                return function t(e, n) {
                    let u = e[i];
                    if (null != u && Array.isArray(u)) return u[0];
                    for (let [u, a] of Object.entries(e))
                        if (u !== i && null != a && "object" == typeof a) return t(a, null != n ? n : u);
                    return null
                }(t, void 0)
            }
        },
        970755: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return s
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("746379");
            var i = n("981980"),
                u = n("872717"),
                a = n("913144");
            n("253981");
            var r = n("140596"),
                l = n("49111");
            n("843455"), n("782340");

            function o() {
                r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), u.default.get(l.Endpoints.APPLICATIONS_SHELF).then(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: t.body.applications
                })).catch(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function s(t) {
                let e = new i.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: t
                }), u.default.get({
                    url: l.Endpoints.CHANNEL_INTEGRATIONS(t),
                    backoff: e,
                    retries: 10
                }).then(e => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: t,
                        integrations: e.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: t
                    })
                })
            }

            function d(t, e) {
                return u.default.delete(l.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
                    var e;
                    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
                })
            }
        },
        252063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                usePrivateChannelIntegrationState: function() {
                    return s
                }
            });
            var i = n("884691"),
                u = n("446674"),
                a = n("201155"),
                r = n("21121"),
                l = n("970755"),
                o = n("140596");

            function s(t) {
                let {
                    channelId: e
                } = t;
                (0, r.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(e),
                    {
                        installedIntegrations: s,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, u.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(e),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(e),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === o.FetchState.NOT_FETCHED || c === o.FetchState.FETCH_FAILED) && (0, l.fetchPrivateChannelIntegrations)(e), (E === o.FetchState.NOT_FETCHED || E === o.FetchState.FETCH_FAILED) && (0, l.fetchApplicationsShelf)())
                }, [n, e, c, E]);
                let I = new Set(s.map(t => t.application.id)),
                    T = d.filter(t => !I.has(t.id));
                return {
                    installedIntegrations: s,
                    availableApplications: T,
                    applicationsShelf: d,
                    fetched: c !== o.FetchState.NOT_FETCHED && c !== o.FetchState.FETCHING && E !== o.FetchState.NOT_FETCHED && E !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                u = n("79112"),
                a = n("685665"),
                r = n("929423");
            n("424562");
            var l = n("49111"),
                o = n("397336");

            function s(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = t, {
                    analyticsLocations: E
                } = (0, a.default)(), I = (0, i.useCallback)(() => {
                    null != e && (0, r.initGuildIdentitySettings)(e, null != d ? d : E), u.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [e, n, s, d, c, E]);
                return I
            }
        },
        85166: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                r = n("42203"),
                l = n("305961"),
                o = n("957255"),
                s = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                I = n("782340");

            function T(t, e, n) {
                var T;
                let f = r.default.getChannel(n),
                    _ = (0, u.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                    S = (0, u.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(t.id, n), [n, t.id]),
                    N = (null === (T = s.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === t.id,
                    p = (0, u.useStateFromStores)([o.default], () => null != n && o.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != f && null != _ && (p || N) && S.speaker ? (0, i.jsx)(a.MenuItem, {
                    id: "audience",
                    label: N ? I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(f) : (0, d.moveUserToAudience)(t, f)
                    }
                }) : null
            }
        },
        834247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("272030"),
                r = n("838446"),
                l = n("158534"),
                o = n("798609"),
                s = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                I = n("873254"),
                T = n("235275"),
                f = n("861370"),
                _ = n("230947"),
                S = n("497660"),
                N = n("726750"),
                p = n("85166"),
                A = n("170990"),
                C = n("304582"),
                m = n("72057"),
                h = n("300925"),
                O = n("563816"),
                D = n("489836"),
                G = n("406703"),
                M = n("502533"),
                y = n("314838"),
                g = n("383161"),
                R = n("421602"),
                L = n("459870"),
                U = n("692986"),
                P = n("806179"),
                b = n("97508"),
                v = n("816106"),
                F = n("623879"),
                B = n("49111"),
                H = n("782340"),
                x = (0, l.default)((0, r.default)(function(t) {
                    let {
                        user: e,
                        guildId: n,
                        channel: r,
                        showMediaItems: l = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: x = !1,
                        showModalItems: j = !0,
                        showStageChannelItems: k = !1,
                        context: Y,
                        onSelect: w,
                        onHeightUpdate: V
                    } = t, K = (0, P.default)(e.id, n, r.id), W = (0, g.default)(e, n, Y), Q = (0, R.default)(e.id, Y), X = (0, F.default)(e.id), z = (0, G.default)(e, Y), q = (0, m.default)({
                        user: e,
                        guildId: n,
                        context: Y
                    }), Z = (0, C.default)(e), J = (0, v.default)(e.id), $ = (0, U.default)(e.id), tt = (0, _.default)({
                        guildId: n,
                        userId: e.id,
                        analyticsLocation: {
                            page: B.AnalyticsPages.GUILD_CHANNEL,
                            section: B.AnalyticsSections.CHAT_USERNAME,
                            object: B.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: Y
                    }), te = (0, y.default)(e, n), tn = (0, s.default)(null, e), ti = (0, A.default)(e), tu = (0, D.default)(e), ta = (0, h.default)(e, n, r.id), tr = (0, b.default)(e.id, n), tl = (0, L.default)(e, n), to = (0, f.default)({
                        id: e.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), ts = (0, M.default)(e.id, r.id), td = (0, E.default)(e.id), tc = (0, c.default)(r.id), tE = (0, N.default)(e), tI = (0, p.default)(e, n, r.id), tT = (0, O.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: e.id,
                        channel: r,
                        guildId: n,
                        onShow: V
                    }), tf = (0, I.default)(e.id), t_ = (0, S.default)(e, n, Y), tS = e.isNonUserBot(), tN = e.isClyde(), tp = (0, T.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [!tS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(u.MenuGroup, {
                                children: [tE, k && tI]
                            }), (0, i.jsxs)(u.MenuGroup, {
                                children: [j && K, d && W, Q, z, j && q, j && Z, X]
                            }), l && (0, i.jsx)(u.MenuGroup, {
                                children: J
                            }), (0, i.jsx)(u.MenuGroup, {
                                children: j && tn
                            }), (0, i.jsxs)(u.MenuGroup, {
                                children: [l && $, l && ts, j && tt, tT, t_, j && te, ti, j && tu, x && tf]
                            }), (0, i.jsx)(u.MenuGroup, {
                                children: ta
                            }), (0, i.jsxs)(u.MenuGroup, {
                                children: [tr, tl]
                            }), x && (0, i.jsxs)(u.MenuGroup, {
                                children: [tc, td]
                            })]
                        }), tN && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(u.MenuGroup, {
                                children: [j && K, tp && Q]
                            }), (0, i.jsx)(u.MenuGroup, {
                                children: ta
                            })]
                        }), (0, i.jsx)(u.MenuGroup, {
                            children: to
                        })]
                    })
                }, {
                    object: B.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                u = n("884691"),
                a = n("627445"),
                r = n.n(a),
                l = n("446674"),
                o = n("77078"),
                s = n("240249"),
                d = n("524768"),
                c = n("389153"),
                E = n("916565"),
                I = n("355263"),
                T = n("633043"),
                f = n("305961"),
                _ = n("317041"),
                S = n("782340"),
                N = n("205735"),
                p = t => {
                    let {
                        commandType: e,
                        commandTargetId: n,
                        channel: a,
                        guildId: p,
                        onShow: A
                    } = t, C = u.useRef(!1), m = u.useRef(0), h = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(null != p ? p : a.guild_id)), {
                        hasMoreAfter: O,
                        scrollDown: D,
                        sectionDescriptors: G,
                        commands: M,
                        placeholders: y
                    } = s.useDiscovery(a, {
                        commandType: e
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: g,
                        sections: R
                    } = u.useMemo(() => {
                        let t = M.concat(y),
                            e = {};
                        return G.forEach(t => {
                            e[t.id] = t
                        }), {
                            visibleCommands: t,
                            sections: e
                        }
                    }, [M, G, y]), L = u.useMemo(() => (0, c.canUseContextMenuCommands)(a, g.length, s.getCommandTypeCount(a, e, null == h ? void 0 : h.applicationCommandCounts)), [a, e, g.length, null == h ? void 0 : h.applicationCommandCounts]);
                    u.useEffect(() => {
                        if (L !== C.current) {
                            if (L) null == A || A();
                            C.current = L
                        }
                    }, [L, A]), u.useEffect(() => {
                        U(m.current)
                    }, [g]);
                    let U = u.useCallback(t => {
                            O && t + 500 > 34 * g.length - 40 && D(), m.current = t
                        }, [O, D, g]),
                        P = u.useCallback(t => {
                            if (t.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(o.MenuItem, {
                                id: "menu-command-".concat(t.id),
                                render: () => (0, i.jsx)(T.default, {})
                            }, "menu-command-".concat(t.id));
                            r(null != a, "menu item should not show if channel is null");
                            let e = R[t.applicationId],
                                u = null != e ? (0, I.getIconComponent)(e) : void 0;
                            return (0, i.jsx)(o.MenuItem, {
                                id: t.id,
                                label: t.displayName,
                                showIconFirst: !0,
                                icon: () => null != u ? (0, i.jsx)(u, {
                                    channel: a,
                                    section: e,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: t,
                                        optionValues: {},
                                        context: {
                                            channel: a,
                                            guild: h
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, t.id)
                        }, [a, h, n, R]);
                    return L && (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        onChildrenScroll: U,
                        childRowHeight: 34,
                        listClassName: N.list,
                        disabled: 0 === g.length,
                        children: g.map(P)
                    })
                }
        },
        383161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                mentionUser: function() {
                    return T
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                r = n("352674"),
                l = n("42203"),
                o = n("957255"),
                s = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                I = n("782340");

            function T(t, e) {
                let {
                    id: n
                } = t, i = "@".concat(c.default.getUserTag(t, {
                    decoration: "never"
                })), u = "<@".concat(n, ">");
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: u
                }), null != e && r.default.startTyping(e)
            }

            function f(t, e, n) {
                let [r, d] = (0, u.useStateFromStoresArray)([s.default, l.default, o.default], () => {
                    let t = s.default.getChannelId(e),
                        n = l.default.getChannel(t),
                        i = null != n && (n.isMultiUserDM() || o.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [t, i]
                }, [e]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(a.MenuItem, {
                    id: "mention",
                    label: I.default.Messages.MENTION,
                    action: function() {
                        T(t, r)
                    }
                })
            }
        },
        421602: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("450911"),
                r = n("54239"),
                l = n("271938"),
                o = n("49111"),
                s = n("782340");

            function d(t, e) {
                let n = l.default.getId(),
                    d = e === o.AppContext.POPOUT;
                return n === t || d ? null : (0, i.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: s.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(t), (0, r.popLayer)()
                    }
                })
            }
        },
        459870: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                r = n("851387"),
                l = n("987317"),
                o = n("679653"),
                s = n("271938"),
                d = n("42203"),
                c = n("923959"),
                E = n("26989"),
                I = n("305961"),
                T = n("957255"),
                f = n("27618"),
                _ = n("697218"),
                S = n("800762"),
                N = n("404008"),
                p = n("991170"),
                A = n("49111"),
                C = n("782340");

            function m(t, e) {
                let n = (0, u.useStateFromStores)([c.default], () => c.default.getChannels(e)[c.GUILD_VOCAL_CHANNELS_KEY], [e]),
                    m = (0, u.useStateFromStores)([S.default, d.default], () => {
                        let n = S.default.getUserVoiceChannelId(e, t.id);
                        return d.default.getChannel(n)
                    }, [e, t.id]),
                    h = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(e, t.id), [e, t.id]);
                if (h || null == m) return null;
                let O = t.id === s.default.getId();
                if (!O && !T.default.can(A.Permissions.MOVE_MEMBERS, m)) return null;
                let D = n.filter(e => {
                    let {
                        channel: n
                    } = e;
                    return n.id !== m.id && (O ? T.default.can(A.Permissions.CONNECT, n) && !(0, N.isChannelFull)(n, S.default, I.default) : T.default.can(A.Permissions.MOVE_MEMBERS, n) && (T.default.can(A.Permissions.CONNECT, n) || p.default.can({
                        permission: A.Permissions.CONNECT,
                        user: t,
                        context: n
                    })) && !(0, N.isChannelFull)(n, S.default, I.default))
                });
                return 0 === D.length ? null : (0, i.jsx)(a.MenuItem, {
                    id: "voice-move",
                    label: C.default.Messages.MOVE_TO,
                    children: D.map(n => {
                        let {
                            channel: u
                        } = n;
                        return (0, i.jsx)(a.MenuItem, {
                            id: u.id,
                            action: () => {
                                var n;
                                return n = u, void(t.id === s.default.getId() ? l.default.selectVoiceChannel(n.id) : r.default.setChannel(e, t.id, n.id))
                            },
                            label: (0, o.computeChannelName)(u, _.default, f.default)
                        }, u.id)
                    })
                })
            }
        }
    }
]);