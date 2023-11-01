(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29290"], {
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
                    return r.default
                }
            });
            var l = n("14716"),
                s = n("745510"),
                r = n("315378")
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
                    return r
                }
            });
            var l = n("884691");
            let s = {};

            function r(e) {
                let t = (0, l.useRef)(s);
                return t.current === s && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                s = n("48174");
            let r = [];

            function u(e, t) {
                let n = (0, l.useRef)(),
                    u = (0, l.useRef)(r);
                return u.current === r ? (n.current = e(), u.current = t) : !(0, s.default)(t, u.current) && (n.current = e(), u.current = t), n.current
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
                    return r
                },
                popAllLayers: function() {
                    return u
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
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
                r = n("913144"),
                u = n("211895"),
                a = n("26092"),
                i = n("599110"),
                o = n("315102"),
                d = n("730622"),
                c = n("49111"),
                _ = n("191349"),
                S = n("782340"),
                E = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, u.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = a.default.onClose;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: u,
                            emailToken: a,
                            password: E,
                            avatar: f,
                            newPassword: T,
                            discriminator: p
                        } = e, {
                            close: h
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: a,
                                    password: E,
                                    avatar: f,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != p && "" !== p ? p : void 0
                                },
                                r = s.default.get(c.DEVICE_TOKEN),
                                i = (0, _.getDevicePushProvider)();
                            null != i && null != r && (t.push_provider = i, t.push_token = r);
                            let o = s.default.get(c.DEVICE_VOIP_TOKEN);
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
                                onEarlyClose: () => r.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return i.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != E && null != T && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (r.default.dispatch({
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
                r = n("414456"),
                u = n.n(r),
                a = n("77078"),
                i = n("782340"),
                o = n("347129");
            class d extends s.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: S,
                        helpMessage: E,
                        retryPrompt: f,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: p,
                        errorMessage: h,
                        retrySuccess: I
                    } = this.state, O = s.Children.count(r) > 0 ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, g = null != f ? (0, l.jsxs)(a.Text, {
                        className: u(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(a.Clickable, {
                            className: u(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(a.Anchor, {
                                children: f
                            })
                        })]
                    }) : null, A = I ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: T
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
                                children: [null != E ? (0, l.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: E
                                }) : null, O, A, (0, l.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : h
                                    }) : null, g]
                                })]
                            }), (0, l.jsxs)(a.ModalFooter, {
                                children: [(0, l.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
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
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return u
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var l, s, r = n("773336");
            let u = null;

            function a() {
                return (0, r.isAndroid)(), null
            }(l = s || (s = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
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
                    return O
                },
                moveSelfToAudience: function() {
                    return g
                },
                setUserSuppress: function() {
                    return A
                },
                moveUserToAudience: function() {
                    return N
                },
                setEveryoneRolePermissionAllowed: function() {
                    return C
                },
                startStage: function() {
                    return R
                },
                editStage: function() {
                    return m
                },
                endStage: function() {
                    return v
                }
            });
            var l = n("627445"),
                s = n.n(l),
                r = n("316693"),
                u = n("872717"),
                a = n("450911");
            n("851387");
            var i = n("798609"),
                o = n("716241"),
                d = n("18494"),
                c = n("800762"),
                _ = n("991170"),
                S = n("716214"),
                E = n("230324"),
                f = n("738983"),
                T = n("808422"),
                p = n("49111");

            function h(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(p.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n, t),
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
                let r = c.default.getVoiceStateForChannel(e.id),
                    a = (0, T.getAudienceRequestToSpeakState)(r);
                return a === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(p.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(l),
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
                return s(null != t, "This channel cannot be guildless."), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function A(e, t, n) {
                let l = e.getGuildId();
                return s(null != l, "This channel cannot be guildless."), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), A(t, e.id, !0), u.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function C(e, t, n) {
                let l = e.getGuildId();
                s(null != l, "Channel cannot be guildless");
                let u = e.permissionOverwrites[l],
                    o = {
                        id: l,
                        type: i.PermissionOverwriteType.ROLE,
                        allow: _.default.NONE,
                        deny: _.default.NONE,
                        ...u
                    };
                n ? (o.allow = r.default.add(o.allow, t), o.deny = r.default.remove(o.deny, t)) : (o.allow = r.default.remove(o.allow, t), o.deny = r.default.add(o.deny, t)), a.default.updatePermissionOverwrite(e.id, o)
            }
            async function R(e, t, n, l) {
                if ("" === t) return;
                let s = d.default.getVoiceChannelId() === e.id;
                !s && (0, S.connectToStage)(e);
                let r = await (0, f.startStageInstance)(e.id, t, n, l);
                return O(e, !1, !0), r
            }
            async function m(e, t, n) {
                if ("" === t) return;
                let l = await (0, f.updateStageInstance)(e.id, t, n);
                return l
            }
            async function v(e) {
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
                    return _
                },
                getStageChannelMetadata: function() {
                    return S
                }
            }), n("917351");
            var l = n("945956"),
                s = n("387111"),
                r = n("991170"),
                u = n("834052"),
                a = n("837979"),
                i = n("49111"),
                o = n("606762"),
                d = n("782340");

            function c(e, t, n, l) {
                let r = t[0],
                    u = s.default.getName(e, n, r),
                    a = null != l ? l : t.length;
                return 1 === a && null != r ? u : null == r ? d.default.Messages.SPEAKING_COUNT.format({
                    count: a
                }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: u,
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
                let t = u.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: r.default.canEveryoneRole(i.Permissions.REQUEST_TO_SPEAK, e) ? a.RequestToSpeakPermissionStates.EVERYONE : a.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return r
                },
                updateStageInstance: function() {
                    return u
                },
                endStageInstance: function() {
                    return a
                }
            });
            var l = n("872717"),
                s = n("49111");
            async function r(e, t, n, r, u) {
                let a = await l.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: u,
                        send_start_notification: r
                    }
                });
                return a.body
            }
            async function u(e, t, n) {
                let r = await l.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return r.body
            }

            function a(e) {
                return l.default.delete(s.Endpoints.STAGE_INSTANCE(e))
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
                r = n.n(s),
                u = n("782340"),
                a = n("53061"),
                i = n("284434"),
                o = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: r(a.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: u.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: r(a.sparkleIcon, a.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: u.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: i,
                        className: r(a.sparkleIcon, a.sparkleTop)
                    })]
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("913144"),
                s = n("54239"),
                r = n("49111");

            function u() {
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
                }), (0, s.pushLayer)(r.Layers.USER_SETTINGS)
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
                r = n("446674"),
                u = n("913144"),
                a = n("697218"),
                i = n("49111");
            let o = i.FormStates.CLOSED,
                d = null,
                c = null,
                _ = {},
                S = {},
                E = {},
                f = null,
                T = null,
                p = !1,
                h = !1,
                I = null,
                O = null,
                g = null,
                A = [],
                N = null,
                C = null;

            function R(e) {
                var t, n, l, s, r, u;
                let d = a.default.getCurrentUser();
                if (null == d) return m();
                c = null !== (t = e.section) && void 0 !== t ? t : c, N = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (_[c] = e.subsection), null != e.scrollPosition && null != c && (S[c] = e.scrollPosition), h = !!e.openWithoutBackstack, o = i.FormStates.OPEN, E = {}, T = {
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
                }, O = null !== (l = e.onClose) && void 0 !== l ? l : null, g = null !== (s = e.analyticsLocation) && void 0 !== s ? s : null, A = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], C = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function m() {
                o = i.FormStates.CLOSED, p = !1, f = null, N = null, T = null, d = null, c = null, _ = {}, S = {}, O = null, g = null, A = [], C = null
            }

            function v() {
                o = i.FormStates.OPEN, E = {}
            }
            class M extends r.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != T && null != f && (!!this.isOpen() || I === i.DrawerTabTypes.USER_SETTINGS) && !s.isEqual(T, f)
                }
                isOpen() {
                    return p
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
                        settings: T,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: g,
                        analyticsLocations: A,
                        initialSection: N,
                        impressionSource: C
                    }
                }
                get onClose() {
                    return O
                }
            }
            M.displayName = "UserSettingsModalStore";
            var U = new M(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    p = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: m,
                LOGOUT: m,
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
                    d = c, c = e.section, g = null, A = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[c] = e.subsection)
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
                    null == T && (T = {});
                    let n = T[i.UserSettingsSections.ACCOUNT];
                    T[i.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: v,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    v(), null != e && (T = {
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
                    return r
                }
            });
            var l = n("917351"),
                s = n.n(l);
            let r = e => "function" == typeof e ? e() : e;
            s.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("697218"),
                u = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, a = e.updateModalProps, s = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == l) {
                    null == i || i();
                    return
                }
                let d = l(E, c, u);

                function c() {
                    null == i || i()
                }

                function _(e) {
                    s(d), n(e)
                }

                function S(e) {
                    s(d), r(e)
                }

                function E(e) {
                    return a(d, E, c, {
                        ...u,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: _,
                        reject: S,
                        code: e,
                        mfaCodeHandler: f,
                        isModalOpen: !0
                    })
                }

                function f(e) {
                    let {
                        res: t
                    } = e;
                    a(d, E, c, {
                        ...u,
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
                    mfaCodeHandler: r = i,
                    isModalOpen: u = !1,
                    ...a
                } = e;
                return t(null != s ? {
                    code: s
                } : {}).then(n, e => {
                    var s, i;
                    if (s = e, i = u, s.body && 60008 === s.body.code || i && 429 === s.status) return r({
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
                    checkEnabled: s = null !== (l = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, u.resolveThunk)(s) ? i : o)({
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
            var s = n("551042"),
                r = n("920636");
            let u = (e, t, n) => function(s) {
                return (0, l.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...s
                })
            };

            function a(e, t, n) {
                return (0, s.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, l) {
                return (0, s.updateModal)(e, u(t, n, l))
            }
        }
    }
]);