(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60291"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        340126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageXIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M22.335 13.019c.317.035.637-.169.652-.487.009-.176.013-.354.013-.532 0-6.075-4.925-11-11-11S1 5.925 1 12c0 2.3.706 4.436 1.914 6.202.339.496 1.045.51 1.452.068l.02-.02c.334-.364.349-.914.078-1.328a9 9 0 1 1 16.529-4.561c-.015.38.368.683.746.65.198-.017.398-.014.596.008Z",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.594 16.029c.237.023.407.227.446.463.1.597.379 1.17.839 1.63l.525.524a.5.5 0 0 1 0 .708l-.525.525a2.994 2.994 0 0 0-.86 2.456c.035.317-.169.637-.487.652a10.955 10.955 0 0 1-5.393-1.117c-.689-.34-1.06-1.115-.808-1.84a6.003 6.003 0 0 1 6.263-4.001ZM13.13 14.78a3 3 0 1 1-2.259-5.56 3 3 0 0 1 2.258 5.56Z",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M18.79 13.712c-.077.301-.449.387-.669.167a2.995 2.995 0 0 0-.814-.58.62.62 0 0 1-.351-.63 5 5 0 1 0-9.564 1.274c.174.413.136.901-.168 1.23l-.054.06c-.428.463-1.176.42-1.454-.145a7 7 0 1 1 13.073-1.376ZM16.707 15.293a1 1 0 0 0-1.414 1.414L17.586 19l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 20.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 19l2.293-2.293a1 1 0 0 0-1.414-1.414L19 17.586l-2.293-2.293Z",
                        className: u
                    })]
                })
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return p
                },
                inviteUserToStage: function() {
                    return g
                },
                audienceAckRequestToSpeak: function() {
                    return h
                },
                moveSelfToAudience: function() {
                    return C
                },
                setUserSuppress: function() {
                    return N
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return R
                },
                startStage: function() {
                    return M
                },
                editStage: function() {
                    return v
                },
                endStage: function() {
                    return O
                }
            });
            var a = n("627445"),
                l = n.n(a),
                s = n("316693"),
                i = n("872717"),
                u = n("450911");
            n("851387");
            var r = n("798609"),
                d = n("716241"),
                o = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                _ = n("230324"),
                T = n("738983"),
                I = n("808422"),
                S = n("49111");

            function p(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                l(null != a, "This channel cannot be guildless.");
                let s = c.default.getVoiceStateForChannel(e.id),
                    u = (0, I.getAudienceRequestToSpeakState)(s);
                return u === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(a),
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

            function C(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let a = e.getGuildId();
                return l(null != a, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), N(t, e.id, !0), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function R(e, t, n) {
                let a = e.getGuildId();
                l(null != a, "Channel cannot be guildless");
                let i = e.permissionOverwrites[a],
                    d = {
                        id: a,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...i
                    };
                n ? (d.allow = s.default.add(d.allow, t), d.deny = s.default.remove(d.deny, t)) : (d.allow = s.default.remove(d.allow, t), d.deny = s.default.add(d.deny, t)), u.default.updatePermissionOverwrite(e.id, d)
            }
            async function M(e, t, n, a) {
                if ("" === t) return;
                let l = o.default.getVoiceChannelId() === e.id;
                !l && (0, E.connectToStage)(e);
                let s = await (0, T.startStageInstance)(e.id, t, n, a);
                return h(e, !1, !0), s
            }
            async function v(e, t, n) {
                if ("" === t) return;
                let a = await (0, T.updateStageInstance)(e.id, t, n);
                return a
            }
            async function O(e) {
                await (0, T.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("917351");
            var a = n("945956"),
                l = n("387111"),
                s = n("991170"),
                i = n("834052"),
                u = n("837979"),
                r = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, a) {
                let s = t[0],
                    i = l.default.getName(e, n, s),
                    u = null != a ? a : t.length;
                return 1 === u && null != s ? i : null == s ? o.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: u - 1
                })
            }

            function f(e, t) {
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

            function E(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: s.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("872717"),
                l = n("49111");
            async function s(e, t, n, s, i) {
                let u = await a.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: s
                    }
                });
                return u.body
            }
            async function i(e, t, n) {
                let s = await a.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return s.body
            }

            function u(e) {
                return a.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        281645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("987317"),
                i = n("476765"),
                u = n("674083"),
                r = n("244480"),
                d = n("119184"),
                o = n("782340"),
                c = n("225946");

            function f(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: f
                } = e, E = (0, i.useUID)();

                function _() {
                    s.default.disconnect(), f()
                }
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": E,
                    children: [(0, a.jsxs)(l.ModalContent, {
                        className: c.content,
                        children: [(0, a.jsx)(d.default, {
                            children: (0, a.jsx)("div", {
                                className: c.iconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: c.headerIcon
                                })
                            })
                        }), (0, a.jsx)(l.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: c.title,
                            children: o.default.Messages.EXPLICIT_END_STAGE_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: c.subtitle,
                            children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                        })]
                    }), (0, a.jsxs)(l.ModalFooter, {
                        children: [(0, a.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: function() {
                                (0, r.endStage)(t), _()
                            },
                            children: o.default.Messages.EXPLICIT_END_STAGE_CONFIRM
                        }), (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: c.cancelButton,
                            onClick: _,
                            children: o.default.Messages.EXPLICIT_END_STAGE_CANCEL
                        })]
                    })]
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
            var l = n("414456"),
                s = n.n(l),
                i = n("782340"),
                u = n("53061"),
                r = n("284434"),
                d = n("315956");

            function o(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: s(u.container, t),
                    children: [(0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d,
                        className: s(u.sparkleIcon, u.sparkleBottom)
                    }), n, (0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: r,
                        className: s(u.sparkleIcon, u.sparkleTop)
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return r
                }
            });
            var a = n("995008"),
                l = n.n(a),
                s = n("775560");
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                u = () => (0, s.useLazyValue)(() => i()),
                r = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        674083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("340126"),
                i = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 40,
                        height: n = 40,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                            fill: l
                        })]
                    })
                }, s.StageXIcon)
        }
    }
]);