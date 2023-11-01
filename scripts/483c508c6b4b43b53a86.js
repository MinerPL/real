(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36697"], {
        48174: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return s.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var l = n("14716"),
                s = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");

            function s() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");
            let s = {};

            function a(e) {
                let t = (0, l.useRef)(s);
                return t.current === s && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                s = n("48174");
            let a = [];

            function r(e, t) {
                let n = (0, l.useRef)(),
                    r = (0, l.useRef)(a);
                return r.current === a ? (n.current = e(), r.current = t) : !(0, s.default)(t, r.current) && (n.current = e(), r.current = t), n.current
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return s
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return r
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("872717"),
                s = n("95410"),
                a = n("913144"),
                r = n("211895"),
                u = n("26092"),
                i = n("599110"),
                o = n("315102"),
                d = n("730622"),
                c = n("49111"),
                S = n("191349"),
                _ = n("782340"),
                E = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, r.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = u.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: r,
                            emailToken: u,
                            password: E,
                            avatar: f,
                            newPassword: T,
                            discriminator: h
                        } = e, {
                            close: p
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: r,
                                    email_token: u,
                                    password: E,
                                    avatar: f,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != h && "" !== h ? h : void 0
                                },
                                a = s.default.get(c.DEVICE_TOKEN),
                                i = (0, S.getDevicePushProvider)();
                            null != i && null != a && (t.push_provider = i, t.push_token = a);
                            let o = s.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return i.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != E && null != T && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), p ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("77078"),
                i = n("782340"),
                o = n("347129");
            class d extends s.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: S,
                        transitionState: _,
                        helpMessage: E,
                        retryPrompt: f,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: h,
                        errorMessage: p,
                        retrySuccess: I
                    } = this.state, O = s.Children.count(a) > 0 ? (0, l.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, g = null != f ? (0, l.jsxs)(u.Text, {
                        className: r(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(u.Clickable, {
                            className: r(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(u.Anchor, {
                                children: f
                            })
                        })]
                    }) : null, N = I ? (0, l.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, l.jsx)(u.ModalRoot, {
                        transitionState: _,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(u.ModalContent, {
                                children: [null != E ? (0, l.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: E
                                }) : null, O, N, (0, l.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != S ? S : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : p
                                    }) : null, g]
                                })]
                            }), (0, l.jsxs)(u.ModalFooter, {
                                children: [(0, l.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, l.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return r
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var l, s, a = n("773336");
            let r = null;

            function u() {
                return (0, a.isAndroid)(), null
            }(l = s || (s = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return p
                },
                inviteUserToStage: function() {
                    return I
                },
                audienceAckRequestToSpeak: function() {
                    return O
                },
                moveSelfToAudience: function() {
                    return g
                },
                setUserSuppress: function() {
                    return N
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return m
                },
                startStage: function() {
                    return R
                },
                editStage: function() {
                    return C
                },
                endStage: function() {
                    return M
                }
            });
            var l = n("627445"),
                s = n.n(l),
                a = n("316693"),
                r = n("872717"),
                u = n("450911");
            n("851387");
            var i = n("798609"),
                o = n("716241"),
                d = n("18494"),
                c = n("800762"),
                S = n("991170"),
                _ = n("716214"),
                E = n("230324"),
                f = n("738983"),
                T = n("808422"),
                h = n("49111");

            function p(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(h.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                s(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    u = (0, T.getAudienceRequestToSpeakState)(a);
                return u === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(h.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(l),
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

            function g(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return s(null != t, "This channel cannot be guildless."), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let l = e.getGuildId();
                return s(null != l, "This channel cannot be guildless."), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), N(t, e.id, !0), r.default.patch({
                    url: h.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let l = e.getGuildId();
                s(null != l, "Channel cannot be guildless");
                let r = e.permissionOverwrites[l],
                    o = {
                        id: l,
                        type: i.PermissionOverwriteType.ROLE,
                        allow: S.default.NONE,
                        deny: S.default.NONE,
                        ...r
                    };
                n ? (o.allow = a.default.add(o.allow, t), o.deny = a.default.remove(o.deny, t)) : (o.allow = a.default.remove(o.allow, t), o.deny = a.default.add(o.deny, t)), u.default.updatePermissionOverwrite(e.id, o)
            }
            async function R(e, t, n, l) {
                if ("" === t) return;
                let s = d.default.getVoiceChannelId() === e.id;
                !s && (0, _.connectToStage)(e);
                let a = await (0, f.startStageInstance)(e.id, t, n, l);
                return O(e, !1, !0), a
            }
            async function C(e, t, n) {
                if ("" === t) return;
                let l = await (0, f.updateStageInstance)(e.id, t, n);
                return l
            }
            async function M(e) {
                await (0, f.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return S
                },
                getStageChannelMetadata: function() {
                    return _
                }
            }), n("917351");
            var l = n("945956"),
                s = n("387111"),
                a = n("991170"),
                r = n("834052"),
                u = n("837979"),
                i = n("49111"),
                o = n("606762"),
                d = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    r = s.default.getName(e, n, a),
                    u = null != l ? l : t.length;
                return 1 === u && null != a ? r : null == a ? d.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: r,
                    count: u - 1
                })
            }

            function S(e, t) {
                switch (e) {
                    case o.RowType.OWNER:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case o.RowType.ADMINISTRATOR:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case o.RowType.MEMBER:
                    case o.RowType.ROLE:
                        return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case o.RowType.EMPTY_STATE:
                }
                return null
            }

            function _(e) {
                let t = r.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(i.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return r
                },
                endStageInstance: function() {
                    return u
                }
            });
            var l = n("872717"),
                s = n("49111");
            async function a(e, t, n, a, r) {
                let u = await l.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: r,
                        send_start_notification: a
                    }
                });
                return u.body
            }
            async function r(e, t, n) {
                let a = await l.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function u(e) {
                return l.default.delete(s.Endpoints.STAGE_INSTANCE(e))
            }
        },
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return h
                },
                BlockedUser: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("669491"),
                r = n("77078"),
                u = n("272030"),
                i = n("328275"),
                o = n("849467"),
                d = n("258078"),
                c = n("823050"),
                S = n("158998"),
                _ = n("325861"),
                E = n("151642"),
                f = n("782340"),
                T = n("960236");
            let h = e => {
                    let {
                        channelId: t
                    } = e, n = (0, E.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, l.jsxs)("div", {
                        className: T.blockedNotice,
                        children: [(0, l.jsx)(i.default, {
                            className: T.blockedIcon,
                            color: a.default.unsafe_rawColors.RED_400.css
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: f.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, l.jsx)(r.Clickable, {
                            className: T.blockedButton,
                            onClick: e => {
                                (0, u.openContextMenu)(e, e => (0, l.jsx)(I, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: f.default.Messages.VIEW_ALL
                        })]
                    })
                },
                p = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: a,
                        channelId: u
                    } = e, i = (0, s.useStateFromStores)([_.default], () => _.default.isModerator(t.id, u)), E = null;
                    return n && (E = a ? f.default.Messages.STAGE_SPEAKER : i ? f.default.Messages.STAGE_MODERATOR_TOOLTIP : f.default.Messages.STAGE_AUDIENCE), (0, l.jsxs)("div", {
                        className: T.user,
                        children: [(0, l.jsx)(c.default, {
                            src: t.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a ? () => (0, l.jsx)(o.default, {
                                className: T.icon
                            }) : null
                        }, t.id), (0, l.jsxs)("div", {
                            className: T.userInfo,
                            children: [(0, l.jsxs)("div", {
                                className: T.username,
                                children: [(0, l.jsx)(d.default, {
                                    size: n ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    children: S.default.getName(t)
                                }), (0, l.jsx)(d.default, {
                                    size: n ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    color: d.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: T.username,
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: f.default.Messages.BLOCKED
                                }), (0, l.jsxs)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", E]
                                })]
                            })]
                        })]
                    })
                },
                I = e => {
                    let {
                        channelId: t
                    } = e, n = (0, E.useStageBlockedUsers)(t);
                    return (0, l.jsx)(r.Scroller, {
                        className: T.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, l.jsx)(p, {
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
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                r = n("782340"),
                u = n("53061"),
                i = n("284434"),
                o = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: a(u.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: a(u.sparkleIcon, u.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: i,
                        className: a(u.sparkleIcon, u.sparkleTop)
                    })]
                })
            }
        },
        337649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("476765"),
                r = n("849467"),
                u = n("155207"),
                i = n("228427"),
                o = n("244480"),
                d = n("151642"),
                c = n("29846"),
                S = n("119184"),
                _ = n("782340"),
                E = n("262999");

            function f(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: f,
                    ...T
                } = e, h = (0, a.useUID)(), p = (0, d.useStageBlockedUsersCount)(t.id), I = async () => {
                    await (0, o.moveSelfToAudience)(t), f()
                }, O = async () => {
                    await (0, o.audienceAckRequestToSpeak)(t, !1), f()
                };
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": h,
                    ...T,
                    size: s.ModalSize.SMALL,
                    children: (0, l.jsxs)(s.ModalContent, {
                        className: E.content,
                        children: [(0, l.jsx)(S.default, {
                            children: (0, l.jsx)("div", {
                                className: E.stageIconBackground,
                                children: (0, l.jsx)(i.default, {
                                    width: 40,
                                    height: 40,
                                    className: E.stageIcon
                                })
                            })
                        }), (0, l.jsx)(s.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: E.headerTitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: E.headerSubtitle,
                            children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), p > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
                            channelId: t.id
                        }), (0, l.jsxs)("div", {
                            className: E.buttonsContainer,
                            children: [(0, l.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: E.button,
                                innerClassName: E.innerButton,
                                onClick: O,
                                children: [(0, l.jsx)("div", {
                                    className: E.icon,
                                    children: (0, l.jsx)(r.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, l.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: E.button,
                                innerClassName: E.innerButton,
                                onClick: I,
                                children: [(0, l.jsx)("div", {
                                    className: E.icon,
                                    children: (0, l.jsx)(u.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
                        })]
                    })
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("913144"),
                s = n("54239"),
                a = n("49111");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, s.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("917351"),
                s = n.n(l),
                a = n("446674"),
                r = n("913144"),
                u = n("697218"),
                i = n("49111");
            let o = i.FormStates.CLOSED,
                d = null,
                c = null,
                S = {},
                _ = {},
                E = {},
                f = null,
                T = null,
                h = !1,
                p = !1,
                I = null,
                O = null,
                g = null,
                N = [],
                A = null,
                m = null;

            function R(e) {
                var t, n, l, s, a, r;
                let d = u.default.getCurrentUser();
                if (null == d) return C();
                c = null !== (t = e.section) && void 0 !== t ? t : c, A = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (_[c] = e.scrollPosition), p = !!e.openWithoutBackstack, o = i.FormStates.OPEN, E = {}, T = {
                    ...f = {
                        [i.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, O = null !== (l = e.onClose) && void 0 !== l ? l : null, g = null !== (s = e.analyticsLocation) && void 0 !== s ? s : null, N = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], m = null !== (r = e.impressionSource) && void 0 !== r ? r : null
            }

            function C() {
                o = i.FormStates.CLOSED, h = !1, f = null, A = null, T = null, d = null, c = null, S = {}, _ = {}, O = null, g = null, N = [], m = null
            }

            function M() {
                o = i.FormStates.OPEN, E = {}
            }
            class v extends a.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                hasChanges() {
                    return null != T && null != f && (!!this.isOpen() || I === i.DrawerTabTypes.USER_SETTINGS) && !s.isEqual(T, f)
                }
                isOpen() {
                    return h
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? S[c] : null
                }
                getScrollPosition() {
                    return null != c ? _[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: o === i.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? S[c] : null,
                        scrollPosition: null != c ? _[c] : null,
                        settings: T,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: g,
                        analyticsLocations: N,
                        initialSection: A,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return O
                }
            }
            v.displayName = "UserSettingsModalStore";
            var U = new v(r.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    h = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: C,
                LOGOUT: C,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = i.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== i.FormStates.SUBMITTING) return !1;
                    o = i.FormStates.OPEN, c = i.UserSettingsSections.ACCOUNT, E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, g = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (S[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete S[t] : null != c && delete S[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != c && delete _[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == T && (T = {});
                    let n = T[i.UserSettingsSections.ACCOUNT];
                    T[i.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = u.default.getCurrentUser();
                    M(), null != e && (T = {
                        ...f = {
                            [i.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return I = e.tab, null == c && I === i.DrawerTabTypes.USER_SETTINGS && R({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var l = n("917351"),
                s = n.n(l);
            let a = e => "function" == typeof e ? e() : e;
            s.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("697218"),
                r = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, u = e.updateModalProps, s = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == l) {
                    null == i || i();
                    return
                }
                let d = l(E, c, r);

                function c() {
                    null == i || i()
                }

                function S(e) {
                    s(d), n(e)
                }

                function _(e) {
                    s(d), a(e)
                }

                function E(e) {
                    return u(d, E, c, {
                        ...r,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: S,
                        reject: _,
                        code: e,
                        mfaCodeHandler: f,
                        isModalOpen: !0
                    })
                }

                function f(e) {
                    let {
                        res: t
                    } = e;
                    u(d, E, c, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: s,
                    mfaCodeHandler: a = i,
                    isModalOpen: r = !1,
                    ...u
                } = e;
                return t(null != s ? {
                    code: s
                } : {}).then(n, e => {
                    var s, i;
                    if (s = e, i = r, s.body && 60008 === s.body.code || i && 429 === s.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...u
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: s = null !== (l = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(s) ? i : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("551042"),
                a = n("920636");
            let r = (e, t, n) => function(s) {
                return (0, l.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...s
                })
            };

            function u(e, t, n) {
                return (0, s.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, l) {
                return (0, s.updateModal)(e, r(t, n, l))
            }
        }
    }
]);