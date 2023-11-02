(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6062"], {
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                l = n("725502"),
                s = n("591350"),
                a = n("476540"),
                o = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && r(e),
                    d = !n && !c && s(e),
                    E = !n && !c && !d && o(e),
                    f = n || c || d || E,
                    _ = f ? i(e.length, String) : [],
                    I = _.length;
                for (var m in e)(t || u.call(e, m)) && !(f && ("length" == m || d && ("offset" == m || "parent" == m) || E && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || a(m, I))) && _.push(m);
                return _
            }
        },
        562132: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                l = n("270879"),
                s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && r(e.length) && !!s[i(e)]
            }
        },
        205873: function(e, t, n) {
            var i = n("733228"),
                r = n("541349"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                l = r && "object" == typeof e && e && !e.nodeType && e,
                s = l && l.exports === r && i.process,
                a = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = a
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                l = "object" == typeof t && t && !t.nodeType && t,
                s = l && "object" == typeof e && e && !e.nodeType && e,
                a = s && s.exports === l ? i.Buffer : void 0,
                o = a ? a.isBuffer : void 0;
            e.exports = o || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                l = n("276440"),
                s = l && l.isTypedArray,
                a = s ? r(s) : i;
            e.exports = a
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                l = n("603108");
            e.exports = function(e) {
                return l(e) ? i(e) : r(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        288661: function(e, t, n) {
            "use strict";
            var i = n("817736");
            t.createRoot = i.createRoot, t.hydrateRoot = i.hydrateRoot
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("782340"),
                u = n("347129");
            class c extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: I,
                        retrySuccessMessage: m
                    } = this.props, {
                        code: h,
                        errorMessage: S,
                        retrySuccess: p
                    } = this.state, N = r.Children.count(l) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, A = null != I ? (0, i.jsxs)(a.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, g = p ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: f,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, N, g, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : S
                                    }) : null, A]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === h.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class s extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = r || (r = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        246511: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", l[l.MOUSE_EVENT = 1] = "MOUSE_EVENT", (s = r || (r = {})).EMOJI = "emoji", s.STICKER = "sticker", s.PACK_ICON = "pack-icon"
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                s = n("38654"),
                a = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = c.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, m = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: m
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return m
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                E = 150,
                f = 150,
                _ = 1e3,
                I = 300,
                m = "Membership Gating",
                h = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => s),
                o = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                s = n("50926"),
                a = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return o
                }
            });
            var i = n("316693"),
                r = n("923510"),
                l = n("49111");
            let s = l.Permissions.VIEW_CHANNEL,
                a = i.default.combine(s, l.Permissions.CONNECT),
                o = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return p
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return g
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return O
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                s = n("42203"),
                a = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                f = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                m = n("49111"),
                h = n("724210");

            function S(e, t) {
                f.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function p(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (f.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), A(e))
            }

            function N(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    i = null != t && (0, h.isStaticChannelRoute)(t);
                if (!i && !c.default.can(m.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(m.Routes.CHANNEL(e, t.id))
                }
            }

            function g(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && g(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function O(e, t) {
                p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                s = n("719923"),
                a = n("782340");
            let o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, a = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: a ? i : l
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), s = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = u({
                        user: r,
                        config: s
                    }), E = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return I
                },
                getManageResourcePermissions: function() {
                    return m
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                }
            });
            var i = n("884691"),
                r = n("316693"),
                l = n("446674"),
                s = n("252931"),
                a = n("813006");
            n("923959");
            var o = n("957255"),
                u = n("697218");
            n("991170");
            var c = n("270161"),
                d = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                _ = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = c.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = c.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = c.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, d.Permissions.CREATE_EVENTS), r.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                I = e => {
                    let [t, n] = e instanceof a.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e), [r, s, c, I] = (0, l.useStateFromStoresArray)([o.default], () => [o.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), m = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), h = i.useCallback(e => f(e, m, s, r), [r, s, m]), S = i.useCallback(e => f(e, m, I, c), [I, c, m]);
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: s,
                        canManageAllEvents: I,
                        canManageGuildExpression: h,
                        canManageGuildEvent: S
                    }
                },
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                        [i, r] = e instanceof a.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e),
                        l = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        c = t.can(i, e),
                        I = t.can(r, e),
                        m = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: s,
                        canManageAllEvents: I,
                        canManageGuildExpression: e => f(e, m, s, l),
                        canManageGuildEvent: e => f(e, m, I, c)
                    }
                },
                h = e => {
                    let t = (0, l.useStateFromStores)([o.default], () => o.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, s.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return h
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                E = n("646718"),
                f = n("49111");
            let _ = "nonSubscriber";
            async function I() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                S(r, i, t, n)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    S(s, l, t, n)
                }, [s, l, t, n])
            }

            function S(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        664113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("460029"),
                a = n("129722"),
                o = n("723961"),
                u = n("782340"),
                c = n("341479"),
                d = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: r = !1,
                        onChange: d
                    } = e, {
                        file: E
                    } = (0, a.useAudioTrimmerStore)();
                    return (0, i.jsx)(l.FormSection, {
                        className: c.section,
                        title: u.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: c.fakeInput,
                            children: [null != t && (0, i.jsx)(o.default, {
                                sound: t,
                                volume: n,
                                disabled: r
                            }), null == t && null != E && (0, i.jsx)(s.default, {
                                className: c.audioTrimmer,
                                volume: n,
                                disabled: r,
                                onChange: d
                            })]
                        })
                    })
                })
        },
        460029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("132755"),
                u = n("78404"),
                c = n("812809"),
                d = n("129722"),
                E = n("278175"),
                f = n("859971"),
                _ = n("846325"),
                I = n("193326");
            let m = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var h = r.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: l,
                    disabled: h = !1,
                    onChange: S
                } = e, {
                    audio: p
                } = (0, d.useAudioTrimmerStore)(), [N, A] = r.useState(!1), [g, T] = r.useState(m), {
                    playheadPositionMs: O,
                    endPositionMs: v,
                    startPositionMs: C
                } = g, D = null != p, L = v - C, R = L > 1e3 * _.MAX_SOUND_LENGTH_SECONDS;
                r.useEffect(() => {
                    null != p && T({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * p.duration,
                        startPositionMs: 0
                    })
                }, [p]);
                let M = r.useCallback(e => {
                        null != p && (p.pause(), null != e && (p.currentTime = e), A(!1))
                    }, [p]),
                    b = r.useCallback(() => {
                        if (null != p) {
                            if (N) {
                                M();
                                return
                            }
                            O >= v ? p.currentTime = (0, f.toSeconds)(C) : p.currentTime = (0, f.toSeconds)(O), p.volume = (0, c.default)(l), p.play(), A(!0)
                        }
                    }, [p, v, M, O, N, C, l]),
                    U = r.useCallback(e => {
                        T(e), null == S || S({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [S]),
                    y = r.useCallback(e => {
                        null != p && (p.currentTime = e)
                    }, [p]);
                return (0, i.jsxs)("div", {
                    className: s(I.container, {
                        [I.initialized]: D,
                        [I.disabled]: !D || h
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: I.playButtonContainer,
                        children: [(0, i.jsx)(a.Clickable, {
                            className: I.playButton,
                            onClick: D ? b : void 0,
                            children: N ? (0, i.jsx)(u.default, {
                                className: I.playButtonIcon
                            }) : (0, i.jsx)(o.default, {
                                className: I.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: I.durationContainer,
                            children: (0, i.jsx)(a.Text, {
                                className: I.duration,
                                variant: "text-xs/normal",
                                color: R ? "text-warning" : "text-positive",
                                children: (t = L, "".concat((0, f.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(E.default, {
                        playing: N,
                        onPlaybackChange: y,
                        onPausePlayback: M,
                        onChangePosition: U,
                        disabled: h
                    })]
                })
            })
        },
        89050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defaultWaveformConfig: function() {
                    return i
                },
                getWaveformId: function() {
                    return r
                },
                getAudioFileId: function() {
                    return l
                },
                SUPPORTED_AUDIO_FILE_TYPES: function() {
                    return s
                }
            });
            let i = {
                    waveformBlockWidth: 2,
                    waveformBarWidth: .5,
                    fineTuningDelay: 500,
                    fineTuningScale: 10,
                    loudnessThreshold: .3
                },
                r = (e, t) => {
                    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
                    return "".concat(n, "-").concat(JSON.stringify(t))
                },
                l = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
                s = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])
        },
        129722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioTrimmerStore: function() {
                    return a
                }
            });
            var i = n("308503"),
                r = n("16470"),
                l = n("859971");
            let s = (0, i.default)(e => ({
                audio: null,
                file: null,
                loading: !1,
                loadAudioFromFile: async t => {
                    if (e({
                            file: t,
                            audio: null,
                            loading: null != t
                        }), null == t) return;
                    let n = await (0, l.loadAudioFromFile)(t);
                    null != n && e({
                        audio: n,
                        loading: !1
                    })
                },
                maxVolume: 1,
                setMaxVolume: t => {
                    e({
                        maxVolume: t
                    })
                }
            }));

            function a() {
                return s(e => ({
                    audio: e.audio,
                    file: e.file,
                    loading: e.loading,
                    loadAudioFromFile: e.loadAudioFromFile,
                    maxVolume: e.maxVolume,
                    setMaxVolume: e.setMaxVolume
                }), r.default)
            }
        },
        278175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("461380"),
                c = n("129722"),
                d = n("859971"),
                E = n("184692"),
                f = n("89050"),
                _ = n("721013");
            (i = r || (r = {}))[i.START = 0] = "START", i[i.PLAYHEAD = 1] = "PLAYHEAD", i[i.END = 2] = "END";
            var I = s.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: a,
                    disabled: I = !1
                } = e, m = {
                    ...f.defaultWaveformConfig
                }, {
                    audio: h
                } = (0, c.useAudioTrimmerStore)(), S = null != h, p = s.useRef(null), N = s.useRef(null), A = s.useRef(null), [g, T] = s.useState(0), [O, v] = s.useState(0), [C, D] = s.useState(0), [L, R] = s.useState(!1), [M, b] = s.useState(!1), [U, y] = s.useState(!1), [P, F] = s.useState(0), [w, x] = s.useState(-1), V = s.useMemo(() => P / m.fineTuningScale, [m.fineTuningScale, P]);
                s.useEffect(() => {
                    if (null == h) return;
                    let e = 1e3 * h.duration;
                    T(0), v(0), D(e), F(e)
                }, [h]);
                let G = s.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case r.START:
                                R(!0);
                                break;
                            case r.PLAYHEAD:
                                b(!0);
                                break;
                            case r.END:
                                y(!0)
                        }
                    }, [n]),
                    B = s.useCallback(e => {
                        switch (e) {
                            case r.START:
                                R(!1);
                                break;
                            case r.PLAYHEAD:
                                b(!1);
                                break;
                            case r.END:
                                y(!1)
                        }
                        x(-1)
                    }, []),
                    k = s.useCallback(e => {
                        if (null == h || !L) return;
                        let t = parseInt(e.target.value),
                            n = t > C ? C : t;
                        i((0, d.toSeconds)(n)), T(n), v(n)
                    }, [h, i, C, L]),
                    j = s.useCallback(e => {
                        if (null == h || !M) return;
                        let t = parseInt(e.target.value);
                        t < g ? (i((0, d.toSeconds)(g)), v(g)) : t > C ? (i((0, d.toSeconds)(C)), v(C)) : (i((0, d.toSeconds)(t)), v(t))
                    }, [h, i, C, M, g]),
                    H = s.useCallback(e => {
                        if (null == h || !U) return;
                        let t = parseInt(e.target.value),
                            n = t > g ? t : g;
                        i((0, d.toSeconds)(g)), v(g), D(n)
                    }, [h, i, U, g]);
                return s.useEffect(() => {
                    null != a && S && a({
                        startPositionMs: g,
                        endPositionMs: C,
                        playheadPositionMs: O
                    })
                }, [g, C, a, S, O]), s.useEffect(() => {
                    let e;
                    if (null != h) return t && (e = setInterval(() => {
                        h.currentTime < (0, d.toSeconds)(C) ? h.currentTime >= (0, d.toSeconds)(O) && v(1e3 * h.currentTime) : (n((0, d.toSeconds)(g)), v(g))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [h, C, n, O, t, g]), s.useEffect(() => {
                    if (m.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        L && g == g && -1 === w ? x(g) : U && C == C && -1 === w ? x(C) : M && O == O && -1 === w && x(O)
                    }, m.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [m.fineTuningDelay, U, C, w, M, O, L, g]), (0, l.jsxs)("div", {
                    className: o(_.timeline, {
                        [_.initialized]: S
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: _.rangeHandleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: _.rangeHandleFrame,
                            children: [(0, l.jsx)("input", {
                                ref: p,
                                className: o(_.rangeHandle, _.rangeHandleStart),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: g,
                                onChange: k,
                                onMouseDown: e => G(e, r.START),
                                onMouseUp: () => B(r.START),
                                disabled: !S || I
                            }), (0, l.jsx)("input", {
                                ref: A,
                                className: o(_.rangeHandle, _.rangeHandleEnd),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: C,
                                onChange: H,
                                onMouseDown: e => G(e, r.END),
                                onMouseUp: () => B(r.END),
                                disabled: !S || I
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: N,
                                className: o(_.rangeHandle, _.rangeHandlePlayhead),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: O,
                                onChange: j,
                                onMouseDown: e => G(e, r.PLAYHEAD),
                                onMouseUp: () => B(r.PLAYHEAD),
                                disabled: !S || I
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: _.handleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: o(_.handleFrame, {
                                [_.startDragging]: L,
                                [_.endDragging]: U
                            }),
                            style: {
                                left: "".concat((0, d.getStartHandleValue)(g, w, V, P), "%"),
                                right: "".concat((0, d.getEndHandleValue)(C, w, V, P), "%")
                            },
                            children: [(0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameStart),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.start),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.RIGHT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameEnd),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.end),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.LEFT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.playheadTrack,
                            children: (0, l.jsx)("div", {
                                className: o(_.playhead, {
                                    [_.dragging]: M || L || U || t
                                }),
                                style: {
                                    left: "".concat((0, d.getStartHandleValue)(O, w, V, P), "%")
                                }
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: _.waveformContainer,
                        children: (0, l.jsx)(E.default, {
                            fineTuning: w,
                            fineTuningResolution: V,
                            duration: P
                        })
                    })]
                })
            })
        },
        859971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinValue: function() {
                    return l
                },
                toSeconds: function() {
                    return s
                },
                getMaxValue: function() {
                    return a
                },
                getStartHandleValue: function() {
                    return o
                },
                getEndHandleValue: function() {
                    return u
                },
                loadAudioFromFile: function() {
                    return c
                },
                loadAudioFileFromUrl: function() {
                    return d
                }
            });
            var i = n("89050"),
                r = n("782340");
            let l = (e, t, n) => -1 === e ? 0 : e - t * e / n;

            function s(e) {
                return e / 1e3
            }
            let a = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
                o = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? (e - (t - n * t / i)) * 100 / n : 100 * e / i).toFixed(4)
                },
                u = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? -((e - (t + n * (i - t) / i)) * 100) / n : -100 * e / i + 100).toFixed(4)
                };
            async function c(e) {
                var t;
                if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !i.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(r.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                    fileType: e.type
                }));
                let n = URL.createObjectURL(e),
                    l = new Audio(n);
                return await (t = l, new Promise(e => {
                    let n = () => {
                        e(), t.removeEventListener("canplaythrough", n)
                    };
                    t.addEventListener("canplaythrough", n), t.load()
                })), l
            }
            async function d(e, t) {
                let n = await fetch(e),
                    i = await n.blob();
                return new File([i], t, {
                    type: "audio/mp3"
                })
            }
        },
        102432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDataUrlFromFile: function() {
                    return u
                },
                uploadFileReadPromise: function() {
                    return c
                },
                trimAndEncodeAudio: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("305122"),
                s = n("108391");
            let a = new AudioContext({
                sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
            });
            async function o(e) {
                let t = await e.arrayBuffer(),
                    n = t instanceof ArrayBuffer;
                if (!n) throw Error("Unexpected file type");
                return a.decodeAudioData(t)
            }
            async function u(e) {
                var t;
                let n = await (t = t => {
                    t.readAsDataURL(e)
                }, new Promise((e, n) => {
                    let i = new FileReader,
                        r = () => {
                            i.removeEventListener("load", r), i.removeEventListener("error", n), e(i.result)
                        };
                    i.addEventListener("load", r), i.addEventListener("error", n), t(i)
                }));
                if ("string" != typeof n) throw Error("Unexpected file type");
                return n
            }
            async function c(e) {
                let {
                    readPromise: t,
                    guildId: n,
                    name: i,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                } = e;
                return (0, l.uploadSound)({
                    guildId: n,
                    name: i,
                    sound: await t,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                })
            }
            async function d(e) {
                let t = [],
                    n = function(e) {
                        let {
                            numberOfChannels: t
                        } = e, n = [];
                        for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                        return n
                    }(e),
                    i = function(e) {
                        if (1 === e.length) return e[0];
                        if (2 === e.length) {
                            let t = e[0],
                                n = e[1],
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                            let r = new Float32Array(i.length);
                            return r.set(i), r
                        }
                        throw Error("Only handles up to 2 channels")
                    }(n),
                    l = new AudioData({
                        format: "f32",
                        sampleRate: e.sampleRate,
                        numberOfFrames: e.length,
                        numberOfChannels: e.numberOfChannels,
                        timestamp: 1e6 * e.duration,
                        data: i
                    }),
                    a = new AudioEncoder({
                        output: function(n) {
                            r(null != n.duration, "Chunk duration must not be null");
                            let i = n.duration / 1e6 * e.sampleRate,
                                l = new Uint8Array(n.byteLength);
                            n.copyTo(l), t.push({
                                buffer: l,
                                numSamples: i
                            })
                        },
                        error: e => {
                            throw Error("Audio encoding error: ".concat(e.message))
                        }
                    });
                a.configure({
                    codec: "opus",
                    sampleRate: e.sampleRate,
                    numberOfChannels: e.numberOfChannels
                }), a.encode(l), await a.flush();
                let o = (0, s.default)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                });
                return new Blob([o], {
                    type: "audio/ogg"
                })
            }
            async function E(e, t) {
                let n = await o(e),
                    i = function(e, t) {
                        let {
                            startMs: n,
                            endMs: i
                        } = t, {
                            sampleRate: r,
                            numberOfChannels: l,
                            duration: s
                        } = e, o = 1e3 * s, u = Math.min(i, o);
                        if (0 === n && u === o) return e;
                        let c = Math.floor(n / o * e.length),
                            d = Math.floor(u / o * e.length),
                            E = a.createBuffer(l, d - c, r);
                        for (let t = 0; t < l; t++) {
                            let n = E.getChannelData(t),
                                i = e.getChannelData(t),
                                r = 0;
                            for (let e = c; e <= d; e++) n[r] = i[e], r++
                        }
                        return E
                    }(n, t),
                    r = await d(i);
                return new File([r], "sound.ogg", {
                    type: "audio/ogg"
                })
            }
        },
        184692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("129722"),
                s = n("527246"),
                a = r.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: r
                    } = e, {
                        file: a,
                        audio: o
                    } = (0, l.useAudioTrimmerStore)();
                    return (0, i.jsx)(s.default, {
                        file: a,
                        audio: o,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: r
                        }
                    })
                })
        },
        527246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("917351"),
                o = n("819855"),
                u = n("77078"),
                c = n("841098"),
                d = n("449918"),
                E = n("302185"),
                f = n("89050"),
                _ = n("843455"),
                I = n("353295"),
                m = r.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: l,
                        waveformSettings: m
                    } = e, [h, S] = r.useState({
                        width: 0,
                        height: 0
                    }), p = r.useRef(null), N = r.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / f.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != m ? m : {}
                        }
                    }, [n, m]), A = (0, E.useAudioBufferData)(t), g = (0, E.useAudioWaveformData)(A, p.current, N), T = (0, c.default)(), O = (0, d.useColorValue)((0, o.isThemeDark)(T) ? _.Color.PRIMARY_300 : _.Color.PRIMARY_700), v = null == A || null == g, C = 0 === h.width || 0 === h.height, D = (C || v) && null != t, L = r.useCallback(() => {
                        null != p.current && S({
                            width: p.current.offsetWidth,
                            height: p.current.offsetHeight
                        })
                    }, []);
                    return r.useEffect(() => {
                        if (null != p.current) {
                            let e = new ResizeObserver((0, a.debounce)(L, 50));
                            return e.observe(p.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [L]), r.useEffect(() => {
                        if (null == p.current) return;
                        let e = p.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== h.width && 0 !== h.height && null != g && g.length > 0) {
                            let e = n / g.length,
                                r = -(e * (f.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = O.hex;
                            for (let n = 0; n < g.length; n++) {
                                let l = g[n] * i,
                                    s = n * e + r,
                                    a = i / 2 - l / 2;
                                t.fillRect(s, a, e - r, l)
                            }
                        }
                    }, [O, h, T, g]), (0, i.jsxs)("div", {
                        className: s(I.container, l),
                        children: [(0, i.jsx)("canvas", {
                            className: I.waveformCanvas,
                            ref: p,
                            width: 4 * h.width,
                            height: 4 * h.height
                        }), D && (0, i.jsx)("div", {
                            className: I.loading,
                            children: (0, i.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })
        },
        302185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return c
                },
                useAudioWaveformData: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("129722"),
                s = n("89050");
            let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
                o = new AudioContext;
            async function u(e) {
                let t = await e.arrayBuffer(),
                    n = await o.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function c(e) {
                let [t, n] = i.useState(null), [r, l] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, s.getAudioFileId)(e);
                    t !== r && (l(t), n(null), u(e).then(n))
                }, [r, e]), t
            }
            let d = {
                ...s.defaultWaveformConfig
            };

            function E(e, t, n) {
                let [o, u] = i.useState(null), [c, E] = i.useState(null), [f, _] = i.useState(1), {
                    setMaxVolume: I
                } = (0, l.useAudioTrimmerStore)(), m = i.useCallback((e, t) => {
                    var i, l, s, o, u;
                    E(null), (i = e, l = t.offsetWidth, s = n, o = d, u = _, new Promise(e => {
                        let t = (0, r.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: r,
                                        id: l,
                                        normalizedVolumeMultipler: s
                                    }
                                } = i;
                                t === l && (e(r), u(s)), null == a || a.removeEventListener("message", n)
                            };
                        null == a || a.addEventListener("message", n), null == a || a.postMessage({
                            id: t,
                            options: s,
                            config: o,
                            width: l,
                            rawBufferData: i
                        })
                    })).then(E)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, s.getWaveformId)(e, n);
                    o !== i && (u(i), m(e, t))
                }, [e, m, t, n, o]), i.useEffect(() => {
                    I(f)
                }, [f, I]), c
            }
        },
        723961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("132755"),
                a = n("78404"),
                o = n("520497"),
                u = n("812809"),
                c = n("129722"),
                d = n("859971"),
                E = n("527246"),
                f = n("782340"),
                _ = n("803336"),
                I = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: I
                    } = e, [m, h] = r.useState(!1), S = r.useRef(null), {
                        file: p,
                        audio: N,
                        loadAudioFromFile: A
                    } = (0, c.useAudioTrimmerStore)(), g = r.useMemo(() => (0, o.default)(t.soundId), [t]);
                    return r.useEffect(() => {
                        null == S.current && (S.current = (0, d.loadAudioFileFromUrl)(g, t.name).then(A))
                    }, [g, A, t.name]), (0, i.jsxs)("div", {
                        className: _.previewContainer,
                        children: [(0, i.jsx)(l.Clickable, {
                            onClick: I ? void 0 : function() {
                                null != N && (N.paused ? (N.volume = (0, u.default)(n), N.currentTime = 0, N.play(), h(!0), N.addEventListener("ended", () => h(!1), {
                                    once: !0
                                })) : (N.pause(), h(!1)))
                            },
                            className: _.playButton,
                            "aria-label": m ? f.default.Messages.STOP : f.default.Messages.PLAY,
                            children: m ? (0, i.jsx)(a.default, {
                                className: _.playIcon
                            }) : (0, i.jsx)(s.default, {
                                className: _.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: _.waveformContainer,
                            children: (0, i.jsx)(E.default, {
                                className: _.waveform,
                                file: p,
                                audio: N
                            })
                        })]
                    })
                })
        },
        108391: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.CONTINUATION = 1] = "CONTINUATION", l[l.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM", l[l.END_OF_STREAM = 4] = "END_OF_STREAM";
            class a {
                appendBytes(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        let t = this._offset + e.length,
                            n = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))),
                            i = new Uint8Array(n);
                        i.set(this._buffer.subarray(0, this._offset)), this._buffer = i
                    }
                    this._buffer.set(e, this._offset), this._offset += e.length
                }
                addPage(e) {
                    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    for (let [t, n] of e.segments.entries())
                        if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
                    let t = e.segments.reduce((e, t) => e + t.length, 0),
                        n = 27 + e.segments.length + t;
                    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
                    let r = this._offset,
                        l = 0;
                    switch (e.pageType) {
                        case i.CONTINUATION:
                            l = 1;
                            break;
                        case i.BEGINNING_OF_STREAM:
                            l = 2;
                            break;
                        case i.END_OF_STREAM:
                            l = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, l, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    let s = this._offset;
                    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
                    let a = function(e) {
                        return e.reduce((e, t) => e << 8 >>> 0 ^ u[e >>> 24 ^ t], 0) >>> 0
                    }(this._buffer.subarray(r, this._offset));
                    this._buffer.set([255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255], s), this._pageSequenceNumber++
                }
                finalize(e) {
                    this.addPage({
                        pageType: i.END_OF_STREAM,
                        granulePosition: e,
                        segments: []
                    });
                    let t = this._buffer,
                        n = this._offset;
                    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
                }
                constructor() {
                    this._buffer = new Uint8Array(4096), this._pageSequenceNumber = 0, this._offset = 0
                }
            }

            function o(e, t) {
                let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 15, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
                    r = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    l = new a;
                l.addPage({
                    pageType: i.BEGINNING_OF_STREAM,
                    granulePosition: 0,
                    segments: [n]
                });
                let s = 0;
                for (let t of (l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: [r]
                    }), e)) {
                    let e = function(e) {
                        let t = Math.floor(e.length / 255),
                            n = [];
                        for (let i = 0; i <= t; i++) {
                            let r = 0 === i ? 0 : 255 * i,
                                l = i === t ? e.length : (i + 1) * 255;
                            n.push(e.slice(r, l))
                        }
                        return n
                    }(t.buffer);
                    s += t.numSamples, l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: e
                    })
                }
                return l.finalize(s)
            }(s = r || (r = {}))[s.ZERO = 0] = "ZERO";
            let u = function() {
                let e = new Uint32Array(256);
                for (let t = 256; t > 0; t--) {
                    let n = t << 24;
                    for (let e = 8; e > 0; e--) n = 2147483648 & n ? 79764919 ^ n << 1 : n << 1;
                    e[t] = n
                }
                return e
            }()
        },
        823749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("627445"),
                c = n.n(u),
                d = n("77078"),
                E = n("599417"),
                f = n("208548"),
                _ = n("104945"),
                I = n("599110"),
                m = n("305122"),
                h = n("664113"),
                S = n("129722"),
                p = n("102432"),
                N = n("876189"),
                A = n("846325"),
                g = n("49111"),
                T = n("782340"),
                O = n("921389");
            (i = r || (r = {})).READY = "ready", i.ENCODING_FAILED = "encoding-failed", i.ENCODING = "encoding", i.UPLOADING = "uploading";
            let v = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function C(e) {
                var t, n, i, a;
                let {
                    guildId: u,
                    sourceFile: C,
                    existingSound: D,
                    onClose: L,
                    transitionState: R,
                    showGuildPicker: M = !1
                } = e, [b, U] = s.useState(null !== (n = null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : null == D ? void 0 : D.name) && void 0 !== n ? n : ""), [y, P] = s.useState(null !== (i = null == D ? void 0 : D.volume) && void 0 !== i ? i : 1), [F, w] = s.useState(null == D ? void 0 : D.emojiId), [x, V] = s.useState(null == D ? void 0 : D.emojiName), {
                    file: G,
                    loadAudioFromFile: B,
                    maxVolume: k,
                    setMaxVolume: j
                } = (0, S.useAudioTrimmerStore)(), [H, W] = s.useState(!1), [K, Y] = s.useState(null), [q, z] = s.useState(null), [X, J] = s.useState(r.READY), [Q, Z] = s.useState(u);
                async function $(e) {
                    try {
                        await B(null != e ? e : null), J(r.READY), Y(null)
                    } catch (e) {
                        ee(e)
                    }
                }

                function ee(e) {
                    if (e instanceof E.default) Y(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        Y(new E.default(t))
                    } else Y(new E.default(e))
                }
                s.useEffect(() => {
                    async function e(e) {
                        try {
                            await B(e), J(r.READY), Y(null)
                        } catch (e) {
                            ee(e)
                        }
                    }(null == C ? void 0 : C.file) != null && e(C.file)
                }, [null == C ? void 0 : C.file, B]);
                let et = function(e) {
                        switch (e) {
                            case r.ENCODING:
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case r.ENCODING_FAILED:
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case r.UPLOADING:
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(X),
                    en = X === r.UPLOADING || X === r.ENCODING,
                    ei = null != D,
                    er = b.length >= 2 && (ei || null != G) && null != Q && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= A.MAX_SOUND_LENGTH_SECONDS
                    }(q),
                    el = s.useCallback(async (e, t) => {
                        J(r.ENCODING);
                        try {
                            let n = await (0, p.trimAndEncodeAudio)(e, t);
                            return J(r.READY), n
                        } catch (e) {
                            throw J(r.ENCODING_FAILED), e
                        }
                    }, []),
                    es = s.useCallback(async () => {
                        if (null == G) return;
                        c(null != Q, "Cannot submit soundboard sound with no guildId");
                        let e = G;
                        if (null != q) {
                            let t = await el(G, q);
                            if (null == t) return;
                            e = t
                        }
                        let t = (0, p.getDataUrlFromFile)(e);
                        J(r.UPLOADING);
                        try {
                            await (0, p.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: Q,
                                name: b,
                                volume: y,
                                emojiId: F,
                                emojiName: x
                            }), J(r.READY)
                        } catch (e) {
                            throw new E.default(e)
                        }
                    }, [G, Q, b, el, q, y, F, x]),
                    ea = s.useCallback(async () => {
                        c(null != Q, "Cannot submit soundboard sound with no guildId"), W(!0), Y(null);
                        try {
                            ei ? await (0, m.updateSound)({
                                guildId: Q,
                                soundId: D.soundId,
                                name: b,
                                volume: y,
                                emojiId: F,
                                emojiName: x
                            }) : await es(), L()
                        } catch (e) {
                            ee(e)
                        } finally {
                            J(r.READY), W(!1), P(1), j(1)
                        }
                    }, [ei, L, Q, D, b, y, F, x, es, j]);
                s.useEffect(() => {
                    B(null), I.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: Q
                    })
                }, []), s.useEffect(() => {
                    P(Math.min(y, k))
                }, [y, P, k]);
                let eo = (0, l.jsx)(f.default, {
                    guildId: Q,
                    emojiId: F,
                    emojiName: x,
                    setEmojiId: w,
                    setEmojiName: V,
                    error: null == K ? void 0 : K.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: R,
                    children: [(0, l.jsx)(d.ModalCloseButton, {
                        onClick: L,
                        className: O.modalClose
                    }), (0, l.jsx)(d.ModalHeader, {
                        className: O.headerContainer,
                        separator: !1,
                        children: (0, l.jsx)(d.Heading, {
                            className: O.header,
                            variant: "heading-xl/extrabold",
                            children: ei ? T.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: O.content,
                        children: [null != K && !K.hasFieldErrors() && (0, l.jsx)(d.FormErrorBlock, {
                            className: O.section,
                            children: K.message
                        }), M ? (0, l.jsx)(d.FormItem, {
                            required: !0,
                            className: O.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, l.jsx)(N.default, {
                                value: Q,
                                onChange: Z
                            })
                        }) : null, (ei || null != G) && (0, l.jsx)(h.default, {
                            sound: D,
                            volume: y,
                            disabled: en,
                            onChange: z
                        }), ei || null != C ? null : (0, l.jsx)(d.FormItem, {
                            required: !0,
                            error: null == K ? void 0 : K.getFirstFieldErrorMessage("sound"),
                            className: O.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, l.jsx)(_.default, {
                                filename: null !== (a = null == G ? void 0 : G.name) && void 0 !== a ? a : "",
                                buttonText: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: $,
                                filters: v
                            })
                        }), (0, l.jsxs)("div", {
                            className: O.multiInput,
                            children: [(0, l.jsx)(d.FormItem, {
                                required: !0,
                                error: null == K ? void 0 : K.getFirstFieldErrorMessage("name"),
                                className: o(O.section, O.halfInput),
                                title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, l.jsx)(d.TextInput, {
                                    placeholder: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: b,
                                    onChange: U,
                                    maxLength: A.MAX_LENGTH_SOUND_NAME
                                })
                            }), eo]
                        }), (0, l.jsx)(d.FormItem, {
                            error: null == K ? void 0 : K.getFirstFieldErrorMessage("volume"),
                            className: O.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, l.jsx)(d.Slider, {
                                initialValue: y,
                                onValueChange: e => P(e),
                                minValue: 0,
                                maxValue: k
                            })
                        })]
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            disabled: !er,
                            submitting: H,
                            size: d.Button.Sizes.SMALL,
                            onClick: ea,
                            children: ei ? T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, l.jsx)(d.Button, {
                            disabled: H,
                            onClick: L,
                            size: d.Button.Sizes.SMALL,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            children: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != et && (0, l.jsx)("div", {
                            className: O.soundStateHint,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et
                            })
                        })]
                    })]
                })
            }
        },
        876189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("817963"),
                c = n("305961"),
                d = n("957255"),
                E = n("677099"),
                f = n("697218"),
                _ = n("109024"),
                I = n("368121"),
                m = n("427459"),
                h = n("305122"),
                S = n("235004"),
                p = n("846325"),
                N = n("782340"),
                A = n("151355");

            function g(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(o.Text, {
                    className: s(A.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(I.default, {
                        className: A.speakerIcon
                    }), N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function T(e) {
                let {
                    value: t,
                    className: n,
                    onChange: l
                } = e, I = (0, a.useStateFromStoresObject)([E.default, d.default, f.default, c.default], () => {
                    let e = {};
                    for (let t of E.default.getFlattenedGuildIds()) {
                        let n = c.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, u.getManageResourcePermissions)(n, d.default, f.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), T = (0, a.useStateFromStoresObject)([S.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(I)) {
                        var t;
                        let r = (0, m.getAvailableSoundboardSoundCount)(null !== (t = S.default.getSoundsForGuild(n)) && void 0 !== t ? t : p.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = r
                    }
                    return e
                }, [I]);
                r.useEffect(() => {
                    (0, h.maybeFetchSoundboardSounds)()
                }, []);
                let O = r.useMemo(() => Object.values(I).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: T[n] <= 0
                        }
                    }), [I, T]),
                    v = r.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(_.default, {
                        className: s(A.guildSelectOptionIcon, {
                            [A.disabledOption]: e.disabled
                        }),
                        guild: I[e.value],
                        size: _.default.Sizes.SMOL,
                        active: !0
                    }), [I]),
                    C = r.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(g, {
                            className: s({
                                [A.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: T[t]
                        })
                    }, [T]),
                    D = r.useCallback(e => (0, i.jsx)("div", {
                        className: s({
                            [A.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    L = r.useCallback(e => {
                        !(T[e] <= 0) && l(e)
                    }, [T, l]),
                    R = (() => {
                        let e = T[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(o.SearchableSelect, {
                    className: n,
                    onChange: L,
                    value: R,
                    multi: !1,
                    options: O,
                    renderOptionPrefix: v,
                    renderOptionSuffix: C,
                    renderOptionLabel: D,
                    placeholder: 0 === O.length ? N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : N.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var l = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return c
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, r, l = n("991170"),
                s = n("719923"),
                a = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let c = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = s.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                d = (e, t, n) => c(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                a = n("80507"),
                o = n("374363"),
                u = n("364685"),
                c = n("49111"),
                d = n("397336");
            let E = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let f = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    u.default.isLoaded && f.compute()
                },
                I = () => {
                    _()
                };

            function m() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                f.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class h extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], I), this.syncWith([o.default], m)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            h.displayName = "StickersPersistedStore", h.persistKey = "StickersPersistedStoreV2";
            var S = new h(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        f.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class s extends l.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                s = n("49111");
            let a = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = a[e],
                    o = null != r ? {
                        state: s.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), a = {
                    ...a,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                a = n("816454");
            let o = new Map;

            function u(e) {
                let t = o.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(s.default, {
                WINDOW_INIT: function(e) {
                    r(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (o.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return o.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = d
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let c = i(_, d, s);

                function d() {
                    null == o || o()
                }

                function E(e) {
                    r(c), n(e)
                }

                function f(e) {
                    r(c), l(e)
                }

                function _(e) {
                    return a(c, _, d, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    a(c, _, d, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = o,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, o;
                    if (r = e, o = s, r.body && 60008 === r.body.code || o && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(r) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        563680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFullScreenNode: function() {
                    return r
                },
                requestFullScreen: function() {
                    return l
                },
                exitFullScreen: function() {
                    return s
                },
                isFullScreen: function() {
                    return a
                },
                FULLSCREEN_CHANGE_EVENT: function() {
                    return o
                },
                subscribeDocumentToFullScreenChange: function() {
                    return u
                }
            });
            var i = n("605250");

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find(e => null != e && function(e) {
                    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
                }(e))
            }

            function l(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function s(e, t) {
                let n = null != t ? t : document;
                a(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function a(e, t) {
                let n = null != t ? t : document;
                return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            let o = (() => {
                if ("undefined" != typeof document) {
                    let e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen);
                    else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            })();

            function u(e, t) {
                return e.addEventListener(o, t), e.addEventListener("webkitfullscreenchange", t), () => {
                    e.removeEventListener(o, t), e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
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

            function o(e, t, n, i) {
                return (0, r.updateModal)(e, s(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = l) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);