(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51719"], {
        653711: function(e, t, a) {
            "use strict";
            e.exports = a.p + "772249b152057988b646.svg"
        },
        570459: function(e, t, a) {
            "use strict";
            e.exports = a.p + "f0e84f5784fdd3cc6b42.svg"
        },
        503021: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchGuildForPopout: function() {
                    return i
                }
            });
            var l = a("990746"),
                n = a("913144"),
                s = a("49111");
            async function i(e) {
                n.default.dispatch({
                    type: "GUILD_POPOUT_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                        url: s.Endpoints.GUILD_PREVIEW(e),
                        oldFormErrors: !0
                    });
                    n.default.dispatch({
                        type: "GUILD_POPOUT_FETCH_SUCCESS",
                        guildId: e,
                        guild: t.body
                    })
                } catch (t) {
                    n.default.dispatch({
                        type: "GUILD_POPOUT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
        },
        757414: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var l, n, s = a("498225"),
                i = a("913144"),
                u = a("271938"),
                d = a("141302");
            (l = n || (n = {})).UNSET = "unset", l.FETCHING = "fetching", l.FAILED = "failed", l.SUCCEEDED = "succeeded";
            let r = {
                guilds: {}
            };
            class o extends s.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                isFetchingGuild(e) {
                    let t = r.guilds[e];
                    return null != t && t.fetchState === n.FETCHING
                }
                getGuild(e) {
                    let t = r.guilds[e];
                    return null != t ? t.guild : null
                }
                hasFetchFailed(e) {
                    let t = r.guilds[e];
                    return null != t && t.fetchState === n.FAILED
                }
            }
            o.displayName = "GuildPopoutStore";
            var c = new o(i.default, {
                GUILD_POPOUT_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.guilds[t] = {
                        ...r.guilds[t],
                        fetchState: n.FETCHING
                    }
                },
                GUILD_POPOUT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        guild: a
                    } = e, l = (0, d.makeDiscoverableGuild)(a);
                    r.guilds[t] = {
                        ...r.guilds[t],
                        guild: l,
                        fetchState: n.SUCCEEDED
                    }
                },
                GUILD_POPOUT_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.guilds[t] = {
                        ...r.guilds[t],
                        fetchState: n.FAILED
                    }
                }
            })
        },
        246060: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildUnavilableDialog: function() {
                    return R
                },
                GuildDialog: function() {
                    return j
                },
                default: function() {
                    return b
                }
            });
            var l = a("920040"),
                n = a("773670"),
                s = a("575482"),
                i = a.n(s),
                u = a("498225"),
                d = a("912557"),
                r = a("819855"),
                o = a("77078"),
                c = a("841098"),
                f = a("407063"),
                h = a("393414"),
                g = a("271938"),
                E = a("26989"),
                m = a("580357"),
                _ = a("587974"),
                T = a("315102"),
                S = a("141302"),
                p = a("503021"),
                I = a("757414"),
                N = a("49111"),
                v = a("782340"),
                A = a("179510"),
                O = a("653711"),
                x = a("570459");

            function P() {
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: A.splashPlaceholder
                    }), (0, l.jsxs)("div", {
                        className: i(A.body, A.hasSplash),
                        children: [(0, l.jsx)("div", {
                            className: A.iconPlaceholder
                        }), (0, l.jsx)("div", {
                            className: A.headerText,
                            children: (0, l.jsx)("div", {
                                className: A.namePlaceholder
                            })
                        }), (0, l.jsxs)("div", {
                            className: A.memberInfo,
                            children: [(0, l.jsx)("div", {
                                className: A.memberCount,
                                children: (0, l.jsx)("div", {
                                    className: A.memberInfoPlaceholder
                                })
                            }), (0, l.jsx)("div", {
                                className: A.memberCount,
                                children: (0, l.jsx)("div", {
                                    className: A.memberInfoPlaceholder
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: A.viewButtonPlaceholder
                        })]
                    })]
                })
            }

            function R() {
                let e = (0, c.default)();
                return (0, l.jsx)(o.Dialog, {
                    "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
                    className: A.guildPopout,
                    children: (0, l.jsxs)("div", {
                        className: A.body,
                        children: [(0, l.jsx)("img", {
                            src: (0, r.isThemeDark)(e) ? O : x,
                            className: A.unavailableIcon,
                            width: 80,
                            height: 80,
                            alt: ""
                        }), (0, l.jsx)(o.Heading, {
                            className: A.unavailableHeader,
                            variant: "heading-md/semibold",
                            children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
                        }), (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
                        })]
                    })
                })
            }

            function j(e) {
                var t, a;
                let {
                    guild: s,
                    channelId: r,
                    messageId: c
                } = e, {
                    name: p,
                    id: I,
                    discoverySplash: O,
                    icon: x,
                    description: P,
                    presenceCount: R,
                    memberCount: j,
                    emojis: b
                } = s, C = (0, u.useStateFromStores)([g.default], () => g.default.getId()), U = (0, u.useStateFromStores)([E.default], () => E.default.isMember(I, C), [I, C]), [D, M] = n.useState(!1), y = e => {
                    if (e.stopPropagation(), U)(0, h.transitionToGuild)(I, r, c);
                    else {
                        let e = {
                            page: N.AnalyticsPages.GUILD_CHANNEL,
                            section: N.AnalyticsSections.GUILD_POPOUT,
                            object: N.AnalyticsObjects.CARD
                        };
                        (0, S.startLurking)(I, e)
                    }
                    M(!0)
                }, L = T.default.getGuildDiscoverySplashURL({
                    id: I,
                    splash: O,
                    size: 250 * (0, f.getDevicePixelRatio)()
                }), G = null !== (t = T.default.getGuildIconURL({
                    id: I,
                    icon: x,
                    size: 80
                })) && void 0 !== t ? t : void 0, F = b, w = null;
                return null != F && F.length > 6 && null != b && (F = null !== (a = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== a ? a : [], w = b.length - 6), (0, l.jsxs)(o.Dialog, {
                    "aria-label": p,
                    className: A.guildPopout,
                    children: [null != L ? (0, l.jsx)("img", {
                        src: L,
                        alt: "",
                        className: A.splashImage
                    }) : null, (0, l.jsxs)("div", {
                        className: i(A.body, {
                            [A.hasSplash]: null != L
                        }),
                        children: [(0, l.jsx)("div", {
                            className: i({
                                [A.iconWithSplash]: null != L
                            }),
                            children: (0, l.jsx)(o.Clickable, {
                                onClick: y,
                                children: (0, l.jsx)(_.default, {
                                    mask: _.default.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, l.jsx)("div", {
                                        className: A.iconMask,
                                        children: (0, l.jsx)(_.default, {
                                            mask: _.default.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, l.jsx)("img", {
                                                src: G,
                                                alt: "",
                                                className: A.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }), null != p ? (0, l.jsxs)("div", {
                            className: A.guildNameWrapper,
                            children: [(0, l.jsx)(m.default, {
                                className: A.badge,
                                guild: s,
                                tooltipPosition: "top",
                                tooltipColor: o.Tooltip.Colors.PRIMARY,
                                badgeColor: d.default.unsafe_rawColors.PRIMARY_500.css
                            }), (0, l.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                className: A.guildName,
                                children: p
                            })]
                        }) : null, null != P ? (0, l.jsx)(o.Text, {
                            color: "header-secondary",
                            className: A.description,
                            variant: "text-sm/normal",
                            children: P
                        }) : null, (0, l.jsxs)("div", {
                            className: A.memberInfo,
                            children: [null != R ? (0, l.jsxs)("div", {
                                className: A.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: A.dotOnline
                                }), (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: A.memberText,
                                    children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: R
                                    })
                                })]
                            }) : null, null != j ? (0, l.jsxs)("div", {
                                className: A.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: A.dotOffline
                                }), (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: A.memberText,
                                    children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: j
                                    })
                                })]
                            }) : null]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: A.footer,
                        children: [null != F && F.length > 0 ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.Heading, {
                                variant: "heading-deprecated-12/semibold",
                                className: A.emojiHeader,
                                color: "header-secondary",
                                children: v.default.Messages.SERVER_EMOJI
                            }), (0, l.jsxs)("div", {
                                className: i(A.emojiContainer, {
                                    [A.withCounter]: null != w
                                }),
                                children: [F.map(e => {
                                    let t = T.default.getEmojiURL({
                                        id: e.id,
                                        animated: !1,
                                        size: 24
                                    });
                                    return (0, l.jsx)(o.Tooltip, {
                                        text: ":".concat(e.name, ":"),
                                        children: e => (0, l.jsx)("img", {
                                            ...e,
                                            width: 24,
                                            height: 24,
                                            src: t,
                                            className: i({
                                                [A.emoji]: null == w
                                            }),
                                            alt: ""
                                        })
                                    }, e.id)
                                }), null != w ? (0, l.jsx)(o.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: A.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(w)
                                }) : null]
                            })]
                        }) : null, (0, l.jsx)(o.Button, {
                            look: o.Button.Looks.FILLED,
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            onClick: y,
                            submitting: D,
                            autoFocus: !0,
                            children: v.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
                        })]
                    })]
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    channelId: a,
                    messageId: s
                } = e, {
                    loading: i,
                    unavailable: d,
                    guild: r
                } = (0, u.useStateFromStoresObject)([I.default], () => ({
                    guild: I.default.getGuild(t),
                    loading: I.default.isFetchingGuild(t),
                    unavailable: I.default.hasFetchFailed(t)
                }), [t]);
                return (n.useEffect(() => {
                    null == r && !i && !d && (0, p.fetchGuildForPopout)(t)
                }, [r, t, i, d]), i) ? (0, l.jsx)(o.Dialog, {
                    "aria-label": v.default.Messages.LOADING,
                    className: A.guildPopout,
                    children: (0, l.jsx)(P, {})
                }) : null == r || d ? (0, l.jsx)(R, {}) : (0, l.jsx)(j, {
                    guild: r,
                    channelId: a,
                    messageId: s
                })
            }
        },
        687521: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("920040"),
                n = a("773670"),
                s = a("498225"),
                i = a("77078"),
                u = a("503021"),
                d = a("757414"),
                r = a("246060");

            function o(e) {
                let {
                    guildId: t,
                    channelId: a,
                    messageId: o,
                    ...c
                } = e, {
                    unavailable: f,
                    guild: h
                } = (0, s.useStateFromStoresObject)([d.default], () => ({
                    guild: d.default.getGuild(t),
                    unavailable: d.default.hasFetchFailed(t)
                }), [t]), g = null != h, E = n.useCallback(async () => {
                    try {
                        !g && await (0, u.fetchGuildForPopout)(t)
                    } catch {}
                }, [g, t]);
                return f ? (0, l.jsx)(i.Popout, {
                    position: "right",
                    renderPopout: e => (0, l.jsx)(r.GuildUnavilableDialog, {}),
                    ...c
                }) : (0, l.jsx)(i.Popout, {
                    position: "right",
                    preload: E,
                    renderPopout: e => null == h ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(r.GuildDialog, {
                        ...e,
                        guild: h,
                        channelId: a,
                        messageId: o
                    }),
                    ...c
                })
            }
        },
        244480: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                toggleRequestToSpeak: function() {
                    return T
                },
                inviteUserToStage: function() {
                    return S
                },
                audienceAckRequestToSpeak: function() {
                    return p
                },
                moveSelfToAudience: function() {
                    return I
                },
                setUserSuppress: function() {
                    return N
                },
                moveUserToAudience: function() {
                    return v
                },
                setEveryoneRolePermissionAllowed: function() {
                    return A
                },
                startStage: function() {
                    return O
                },
                editStage: function() {
                    return x
                },
                endStage: function() {
                    return P
                }
            });
            var l = a("161179"),
                n = a.n(l),
                s = a("754013"),
                i = a("990746"),
                u = a("450911");
            a("851387");
            var d = a("798609"),
                r = a("716241"),
                o = a("18494"),
                c = a("800762"),
                f = a("991170"),
                h = a("716214"),
                g = a("230324"),
                E = a("738983"),
                m = a("808422"),
                _ = a("49111");

            function T(e, t) {
                let a = e.getGuildId();
                return n(null != a, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(_.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, g.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(a),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function S(e, t) {
                let a = e.getGuildId();
                return n(null != a, "This channel cannot be guildless."), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                n(null != l, "This channel cannot be guildless.");
                let s = c.default.getVoiceStateForChannel(e.id),
                    u = (0, m.getAudienceRequestToSpeakState)(s);
                return u === m.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(_.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, g.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...a ? {
                            silent: a
                        } : {}
                    }
                })
            }

            function I(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return n(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, a) {
                let l = e.getGuildId();
                return n(null != l, "This channel cannot be guildless."), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: a,
                        channel_id: e.id
                    }
                })
            }

            function v(e, t) {
                if (null == t || null == e) return;
                let a = t.getGuildId();
                return n(null != a, "This channel cannot be guildless."), N(t, e.id, !0), i.default.patch({
                    url: _.Endpoints.UPDATE_VOICE_STATE(a, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function A(e, t, a) {
                let l = e.getGuildId();
                n(null != l, "Channel cannot be guildless");
                let i = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: d.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...i
                    };
                a ? (r.allow = s.default.add(r.allow, t), r.deny = s.default.remove(r.deny, t)) : (r.allow = s.default.remove(r.allow, t), r.deny = s.default.add(r.deny, t)), u.default.updatePermissionOverwrite(e.id, r)
            }
            async function O(e, t, a, l) {
                if ("" === t) return;
                let n = o.default.getVoiceChannelId() === e.id;
                !n && (0, h.connectToStage)(e);
                let s = await (0, E.startStageInstance)(e.id, t, a, l);
                return p(e, !1, !0), s
            }
            async function x(e, t, a) {
                if ("" === t) return;
                let l = await (0, E.updateStageInstance)(e.id, t, a);
                return l
            }
            async function P(e) {
                await (0, E.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return h
                }
            }), a("427964");
            var l = a("945956"),
                n = a("387111"),
                s = a("991170"),
                i = a("834052"),
                u = a("837979"),
                d = a("49111"),
                r = a("606762"),
                o = a("782340");

            function c(e, t, a, l) {
                let s = t[0],
                    i = n.default.getName(e, a, s),
                    u = null != l ? l : t.length;
                return 1 === u && null != s ? i : null == s ? o.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: u - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function h(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: s.default.canEveryoneRole(d.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                startStageInstance: function() {
                    return s
                },
                updateStageInstance: function() {
                    return i
                },
                endStageInstance: function() {
                    return u
                }
            });
            var l = a("990746"),
                n = a("49111");
            async function s(e, t, a, s, i) {
                let u = await l.default.post({
                    url: n.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: a,
                        guild_scheduled_event_id: i,
                        send_start_notification: s
                    }
                });
                return u.body
            }
            async function i(e, t, a) {
                let s = await l.default.patch({
                    url: n.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: a
                    }
                });
                return s.body
            }

            function u(e) {
                return l.default.delete(n.Endpoints.STAGE_INSTANCE(e))
            }
        }
    }
]);