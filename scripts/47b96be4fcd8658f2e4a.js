(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36976"], {
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
                    return r.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var l = n("14716"),
                r = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");

            function r() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691");
            let r = {};

            function u(e) {
                let t = (0, l.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("48174");
            let u = [];

            function s(e, t) {
                let n = (0, l.useRef)(),
                    s = (0, l.useRef)(u);
                return s.current === u ? (n.current = e(), s.current = t) : !(0, r.default)(t, s.current) && (n.current = e(), s.current = t), n.current
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
                    return r
                },
                popLayer: function() {
                    return u
                },
                popAllLayers: function() {
                    return s
                }
            });
            var l = n("913144");

            function r(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function u() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("872717"),
                r = n("95410"),
                u = n("913144"),
                s = n("211895"),
                a = n("26092"),
                i = n("599110"),
                o = n("315102"),
                d = n("730622"),
                c = n("49111"),
                _ = n("191349"),
                S = n("782340"),
                f = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, s.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = a.default.onClose;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: s,
                            emailToken: a,
                            password: f,
                            avatar: E,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: h
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: s,
                                    email_token: a,
                                    password: f,
                                    avatar: E,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                u = r.default.get(c.DEVICE_TOKEN),
                                i = (0, _.getDevicePushProvider)();
                            null != i && null != u && (t.push_provider = i, t.push_token = u);
                            let o = r.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: S.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => u.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return i.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, u.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), u.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && u.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != f && null != p && u.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (u.default.dispatch({
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
                r = n("884691"),
                u = n("414456"),
                s = n.n(u),
                a = n("77078"),
                i = n("782340"),
                o = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: u,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: S,
                        helpMessage: f,
                        retryPrompt: E,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: I
                    } = this.state, g = r.Children.count(u) > 0 ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: u
                        })
                    }) : null, C = null != E ? (0, l.jsxs)(a.Text, {
                        className: s(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(a.Clickable, {
                            className: s(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(a.Anchor, {
                                children: E
                            })
                        })]
                    }) : null, O = I ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, l.jsx)(a.ModalRoot, {
                        transitionState: S,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                children: [null != f ? (0, l.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: f
                                }) : null, g, O, (0, l.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : h
                                    }) : null, C]
                                })]
                            }), (0, l.jsxs)(a.ModalFooter, {
                                children: [(0, l.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: c || 0 === T.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, l.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
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
        340126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageXIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M22.335 13.019c.317.035.637-.169.652-.487.009-.176.013-.354.013-.532 0-6.075-4.925-11-11-11S1 5.925 1 12c0 2.3.706 4.436 1.914 6.202.339.496 1.045.51 1.452.068l.02-.02c.334-.364.349-.914.078-1.328a9 9 0 1 1 16.529-4.561c-.015.38.368.683.746.65.198-.017.398-.014.596.008Zm-9.742 3.01c.238.023.408.227.447.463.1.597.379 1.17.839 1.63l.525.524a.5.5 0 0 1 0 .708l-.525.525a2.994 2.994 0 0 0-.86 2.456c.035.317-.169.637-.487.652a10.955 10.955 0 0 1-5.393-1.117c-.689-.34-1.06-1.115-.808-1.84a6.003 6.003 0 0 1 6.263-4.001Zm.536-1.249a3 3 0 1 1-2.259-5.56 3 3 0 0 1 2.26 5.56Zm5.66-1.068c-.076.301-.448.387-.668.167a2.995 2.995 0 0 0-.814-.58.62.62 0 0 1-.351-.63 5 5 0 1 0-9.564 1.274c.174.413.136.901-.168 1.23l-.054.06c-.428.463-1.176.42-1.454-.145a7 7 0 1 1 13.073-1.376Zm-2.082 1.58a1 1 0 0 0-1.414 1.415L17.586 19l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 20.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 19l2.293-2.293a1 1 0 0 0-1.414-1.414L19 17.586l-2.293-2.293Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return s
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var l, r, u = n("773336");
            let s = null;

            function a() {
                return (0, u.isAndroid)(), null
            }(l = r || (r = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return h
                },
                inviteUserToStage: function() {
                    return I
                },
                audienceAckRequestToSpeak: function() {
                    return g
                },
                moveSelfToAudience: function() {
                    return C
                },
                setUserSuppress: function() {
                    return O
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return N
                },
                startStage: function() {
                    return R
                },
                editStage: function() {
                    return v
                },
                endStage: function() {
                    return m
                }
            });
            var l = n("627445"),
                r = n.n(l),
                u = n("316693"),
                s = n("872717"),
                a = n("450911");
            n("851387");
            var i = n("798609"),
                o = n("716241"),
                d = n("18494"),
                c = n("800762"),
                _ = n("991170"),
                S = n("716214"),
                f = n("230324"),
                E = n("738983"),
                p = n("808422"),
                T = n("49111");

            function h(e, t) {
                let n = e.getGuildId();
                return r(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(T.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                let n = e.getGuildId();
                return r(null != n, "This channel cannot be guildless."), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                r(null != l, "This channel cannot be guildless.");
                let u = c.default.getVoiceStateForChannel(e.id),
                    a = (0, p.getAudienceRequestToSpeakState)(u);
                return a === p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(T.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(l),
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
                return r(null != t, "This channel cannot be guildless."), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function O(e, t, n) {
                let l = e.getGuildId();
                return r(null != l, "This channel cannot be guildless."), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return r(null != n, "This channel cannot be guildless."), O(t, e.id, !0), s.default.patch({
                    url: T.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let l = e.getGuildId();
                r(null != l, "Channel cannot be guildless");
                let s = e.permissionOverwrites[l],
                    o = {
                        id: l,
                        type: i.PermissionOverwriteType.ROLE,
                        allow: _.default.NONE,
                        deny: _.default.NONE,
                        ...s
                    };
                n ? (o.allow = u.default.add(o.allow, t), o.deny = u.default.remove(o.deny, t)) : (o.allow = u.default.remove(o.allow, t), o.deny = u.default.add(o.deny, t)), a.default.updatePermissionOverwrite(e.id, o)
            }
            async function R(e, t, n, l) {
                if ("" === t) return;
                let r = d.default.getVoiceChannelId() === e.id;
                !r && (0, S.connectToStage)(e);
                let u = await (0, E.startStageInstance)(e.id, t, n, l);
                return g(e, !1, !0), u
            }
            async function v(e, t, n) {
                if ("" === t) return;
                let l = await (0, E.updateStageInstance)(e.id, t, n);
                return l
            }
            async function m(e) {
                await (0, E.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return _
                },
                getStageChannelMetadata: function() {
                    return S
                }
            }), n("917351");
            var l = n("945956"),
                r = n("387111"),
                u = n("991170"),
                s = n("834052"),
                a = n("837979"),
                i = n("49111"),
                o = n("606762"),
                d = n("782340");

            function c(e, t, n, l) {
                let u = t[0],
                    s = r.default.getName(e, n, u),
                    a = null != l ? l : t.length;
                return 1 === a && null != u ? s : null == u ? d.default.Messages.SPEAKING_COUNT.format({
                    count: a
                }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: s,
                    count: a - 1
                })
            }

            function _(e, t) {
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

            function S(e) {
                let t = s.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(i.Permissions.REQUEST_TO_SPEAK, e) ? a.RequestToSpeakPermissionStates.EVERYONE : a.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return u
                },
                updateStageInstance: function() {
                    return s
                },
                endStageInstance: function() {
                    return a
                }
            });
            var l = n("872717"),
                r = n("49111");
            async function u(e, t, n, u, s) {
                let a = await l.default.post({
                    url: r.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: s,
                        send_start_notification: u
                    }
                });
                return a.body
            }
            async function s(e, t, n) {
                let u = await l.default.patch({
                    url: r.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return u.body
            }

            function a(e) {
                return l.default.delete(r.Endpoints.STAGE_INSTANCE(e))
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
            var r = n("414456"),
                u = n.n(r),
                s = n("782340"),
                a = n("53061"),
                i = n("284434"),
                o = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: u(a.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: u(a.sparkleIcon, a.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: i,
                        className: u(a.sparkleIcon, a.sparkleTop)
                    })]
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("913144"),
                r = n("54239"),
                u = n("49111");

            function s() {
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
                }), (0, r.pushLayer)(u.Layers.USER_SETTINGS)
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
                r = n.n(l),
                u = n("446674"),
                s = n("913144"),
                a = n("697218"),
                i = n("49111");
            let o = i.FormStates.CLOSED,
                d = null,
                c = null,
                _ = {},
                S = {},
                f = {},
                E = null,
                p = null,
                T = !1,
                h = !1,
                I = null,
                g = null,
                C = null,
                O = [],
                A = null,
                N = null;

            function R(e) {
                var t, n, l, r, u, s;
                let d = a.default.getCurrentUser();
                if (null == d) return v();
                c = null !== (t = e.section) && void 0 !== t ? t : c, A = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (_[c] = e.subsection), null != e.scrollPosition && null != c && (S[c] = e.scrollPosition), h = !!e.openWithoutBackstack, o = i.FormStates.OPEN, f = {}, p = {
                    ...E = {
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
                }, g = null !== (l = e.onClose) && void 0 !== l ? l : null, C = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, O = null !== (u = e.analyticsLocations) && void 0 !== u ? u : [], N = null !== (s = e.impressionSource) && void 0 !== s ? s : null
            }

            function v() {
                o = i.FormStates.CLOSED, T = !1, E = null, A = null, p = null, d = null, c = null, _ = {}, S = {}, g = null, C = null, O = [], N = null
            }

            function m() {
                o = i.FormStates.OPEN, f = {}
            }
            class M extends u.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != p && null != E && (!!this.isOpen() || I === i.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(p, E)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? _[c] : null
                }
                getScrollPosition() {
                    return null != c ? S[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: o === i.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? _[c] : null,
                        scrollPosition: null != c ? S[c] : null,
                        settings: p,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: C,
                        analyticsLocations: O,
                        initialSection: A,
                        impressionSource: N
                    }
                }
                get onClose() {
                    return g
                }
            }
            M.displayName = "UserSettingsModalStore";
            var U = new M(s.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: v,
                LOGOUT: v,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = i.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== i.FormStates.SUBMITTING) return !1;
                    o = i.FormStates.OPEN, c = i.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, C = null, O = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != c && delete _[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete S[t] : null != c && delete S[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[i.UserSettingsSections.ACCOUNT];
                    p[i.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    m(), null != e && (p = {
                        ...E = {
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
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return i
                }
            });
            var l = n("995008"),
                r = n.n(l),
                u = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                a = () => (0, u.useLazyValue)(() => s()),
                i = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        674083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("340126"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 40,
                        height: n = 40,
                        color: r = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                            fill: r
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                            fill: r
                        })]
                    })
                }, u.StageXIcon)
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return u
                }
            });
            var l = n("917351"),
                r = n.n(l);
            let u = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => u(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: u,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == l) {
                    null == i || i();
                    return
                }
                let d = l(f, c, s);

                function c() {
                    null == i || i()
                }

                function _(e) {
                    r(d), n(e)
                }

                function S(e) {
                    r(d), u(e)
                }

                function f(e) {
                    return a(d, f, c, {
                        ...s,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: _,
                        reject: S,
                        code: e,
                        mfaCodeHandler: E,
                        isModalOpen: !0
                    })
                }

                function E(e) {
                    let {
                        res: t
                    } = e;
                    a(d, f, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: r,
                    mfaCodeHandler: u = i,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, i;
                    if (r = e, i = s, r.body && 60008 === r.body.code || i && 429 === r.status) return u({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...a
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: r = null !== (l = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(r) ? i : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("551042"),
                u = n("920636");
            let s = (e, t, n) => function(r) {
                return (0, l.jsx)(u.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, l) {
                return (0, r.updateModal)(e, s(t, n, l))
            }
        }
    }
]);