(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72829"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return g
                },
                inviteUserToStage: function() {
                    return h
                },
                audienceAckRequestToSpeak: function() {
                    return A
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return p
                },
                moveUserToAudience: function() {
                    return O
                },
                setEveryoneRolePermissionAllowed: function() {
                    return m
                },
                startStage: function() {
                    return R
                },
                editStage: function() {
                    return M
                },
                endStage: function() {
                    return v
                }
            });
            var a = n("627445"),
                s = n.n(a),
                l = n("316693"),
                i = n("872717"),
                r = n("450911");
            n("851387");
            var u = n("798609"),
                d = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                _ = n("716214"),
                f = n("230324"),
                S = n("738983"),
                T = n("808422"),
                I = n("49111");

            function g(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(I.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function h(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                s(null != a, "This channel cannot be guildless.");
                let l = c.default.getVoiceStateForChannel(e.id),
                    r = (0, T.getAudienceRequestToSpeakState)(l);
                return r === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(a),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return s(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function p(e, t, n) {
                let a = e.getGuildId();
                return s(null != a, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), p(t, e.id, !0), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let a = e.getGuildId();
                s(null != a, "Channel cannot be guildless");
                let i = e.permissionOverwrites[a],
                    d = {
                        id: a,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...i
                    };
                n ? (d.allow = l.default.add(d.allow, t), d.deny = l.default.remove(d.deny, t)) : (d.allow = l.default.remove(d.allow, t), d.deny = l.default.add(d.deny, t)), r.default.updatePermissionOverwrite(e.id, d)
            }
            async function R(e, t, n, a) {
                if ("" === t) return;
                let s = o.default.getVoiceChannelId() === e.id;
                !s && (0, _.connectToStage)(e);
                let l = await (0, S.startStageInstance)(e.id, t, n, a);
                return A(e, !1, !0), l
            }
            async function M(e, t, n) {
                if ("" === t) return;
                let a = await (0, S.updateStageInstance)(e.id, t, n);
                return a
            }
            async function v(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return _
                }
            }), n("917351");
            var a = n("945956"),
                s = n("387111"),
                l = n("991170"),
                i = n("834052"),
                r = n("837979"),
                u = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, a) {
                let l = t[0],
                    i = s.default.getName(e, n, l),
                    r = null != a ? a : t.length;
                return 1 === r && null != l ? i : null == l ? o.default.Messages.SPEAKING_COUNT.format({
                    count: r
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: r - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function _(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: l.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return l
                },
                updateStageInstance: function() {
                    return i
                },
                endStageInstance: function() {
                    return r
                }
            });
            var a = n("872717"),
                s = n("49111");
            async function l(e, t, n, l, i) {
                let r = await a.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: l
                    }
                });
                return r.body
            }
            async function i(e, t, n) {
                let l = await a.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return l.body
            }

            function r(e) {
                return a.default.delete(s.Endpoints.STAGE_INSTANCE(e))
            }
        },
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return I
                },
                BlockedUser: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("669491"),
                i = n("77078"),
                r = n("272030"),
                u = n("328275"),
                d = n("849467"),
                o = n("258078"),
                c = n("823050"),
                E = n("158998"),
                _ = n("325861"),
                f = n("151642"),
                S = n("782340"),
                T = n("960236");
            let I = e => {
                    let {
                        channelId: t
                    } = e, n = (0, f.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, a.jsxs)("div", {
                        className: T.blockedNotice,
                        children: [(0, a.jsx)(u.default, {
                            className: T.blockedIcon,
                            color: l.default.unsafe_rawColors.RED_400.css
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: S.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, a.jsx)(i.Clickable, {
                            className: T.blockedButton,
                            onClick: e => {
                                (0, r.openContextMenu)(e, e => (0, a.jsx)(h, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: S.default.Messages.VIEW_ALL
                        })]
                    })
                },
                g = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: l,
                        channelId: r
                    } = e, u = (0, s.useStateFromStores)([_.default], () => _.default.isModerator(t.id, r)), f = null;
                    return n && (f = l ? S.default.Messages.STAGE_SPEAKER : u ? S.default.Messages.STAGE_MODERATOR_TOOLTIP : S.default.Messages.STAGE_AUDIENCE), (0, a.jsxs)("div", {
                        className: T.user,
                        children: [(0, a.jsx)(c.default, {
                            src: t.getAvatarURL(null, 32),
                            size: i.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: l ? () => (0, a.jsx)(d.default, {
                                className: T.icon
                            }) : null
                        }, t.id), (0, a.jsxs)("div", {
                            className: T.userInfo,
                            children: [(0, a.jsxs)("div", {
                                className: T.username,
                                children: [(0, a.jsx)(o.default, {
                                    size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    children: E.default.getName(t)
                                }), (0, a.jsx)(o.default, {
                                    size: n ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    color: o.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, a.jsxs)("div", {
                                className: T.username,
                                children: [(0, a.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: S.default.Messages.BLOCKED
                                }), (0, a.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", f]
                                })]
                            })]
                        })]
                    })
                },
                h = e => {
                    let {
                        channelId: t
                    } = e, n = (0, f.useStageBlockedUsers)(t);
                    return (0, a.jsx)(i.Scroller, {
                        className: T.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, a.jsx)(g, {
                                user: n,
                                channelId: t
                            }, n.id)
                        })
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("782340"),
                r = n("53061"),
                u = n("284434"),
                d = n("315956");

            function o(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(r.container, t),
                    children: [(0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d,
                        className: l(r.sparkleIcon, r.sparkleBottom)
                    }), n, (0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: l(r.sparkleIcon, r.sparkleTop)
                    })]
                })
            }
        },
        337649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("476765"),
                i = n("849467"),
                r = n("155207"),
                u = n("228427"),
                d = n("244480"),
                o = n("151642"),
                c = n("29846"),
                E = n("119184"),
                _ = n("782340"),
                f = n("262999");

            function S(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: S,
                    ...T
                } = e, I = (0, l.useUID)(), g = (0, o.useStageBlockedUsersCount)(t.id), h = async () => {
                    await (0, d.moveSelfToAudience)(t), S()
                }, A = async () => {
                    await (0, d.audienceAckRequestToSpeak)(t, !1), S()
                };
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": I,
                    ...T,
                    size: s.ModalSize.SMALL,
                    children: (0, a.jsxs)(s.ModalContent, {
                        className: f.content,
                        children: [(0, a.jsx)(E.default, {
                            children: (0, a.jsx)("div", {
                                className: f.stageIconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: f.stageIcon
                                })
                            })
                        }), (0, a.jsx)(s.Heading, {
                            id: I,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: f.headerTitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: f.headerSubtitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), g > 0 && (0, a.jsx)(c.BlockedUsersNotice, {
                            channelId: t.id
                        }), (0, a.jsxs)("div", {
                            className: f.buttonsContainer,
                            children: [(0, a.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: f.button,
                                innerClassName: f.innerButton,
                                onClick: A,
                                children: [(0, a.jsx)("div", {
                                    className: f.icon,
                                    children: (0, a.jsx)(i.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, a.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: f.button,
                                innerClassName: f.innerButton,
                                onClick: h,
                                children: [(0, a.jsx)("div", {
                                    className: f.icon,
                                    children: (0, a.jsx)(r.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
                        })]
                    })
                })
            }
        }
    }
]);