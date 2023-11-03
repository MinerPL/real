(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3038"], {
        529861: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ebd4163d89c2d849ec54.svg"
        },
        156465: function(e, t, n) {
            "use strict";
            e.exports = n.p + "42b086ee3d9863ea45bc.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return a
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: h,
                        errorMessage: T,
                        retrySuccess: m
                    } = this.state, S = i.Children.count(l) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, C = null != I ? (0, r.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, A = m ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, S, A, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : T
                                    }) : null, C]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
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
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                i = n("49111"),
                l = n("782340");
            class a extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                i = n("49111"),
                l = n("782340");
            class a extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        297267: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openCreateGuildModal: function() {
                    return f
                },
                updateCreateGuildModal: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("42963"),
                a = n("599110"),
                s = n("169626"),
                o = n("243338"),
                u = n("49111"),
                d = n("149806");

            function c(e, t, n, i) {
                return (0, r.jsx)(s.default, {
                    onSuccess: t => {
                        l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.SUCCESS), e.onClose(), null == i || i(t)
                    },
                    onSlideChange: e => (function(e, t) {
                        switch (e) {
                            case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
                                l.default.flowStepOrStart(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_TEMPLATES), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Templates",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_CREATE), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Step 2",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CREATION_INTENT:
                                a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.JOIN_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.JOIN_GUILD), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Join Guild",
                                    location: t
                                })
                        }
                    })(e, n),
                    initialSlide: t,
                    hasJoinButton: !0,
                    ...e
                })
            }
            let f = e => {
                    let {
                        initialSlide: t,
                        location: n,
                        onSuccess: r
                    } = e;
                    (0, i.openModal)(e => c(e, t, n, r), {
                        modalKey: o.CREATE_GUILD_MODAL_KEY
                    })
                },
                E = e => {
                    let {
                        slide: t,
                        location: n
                    } = e;
                    (0, i.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => c(e, t, n))
                }
        },
        169626: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                a = n.n(l),
                s = n("759843"),
                o = n("77078"),
                u = n("84339"),
                d = n("599110"),
                c = n("439932"),
                f = n("818351"),
                E = n("21214"),
                _ = n("622210"),
                I = n("72405"),
                p = n("110337"),
                h = n("243338"),
                T = n("49111"),
                m = n("91140");

            function S(e) {
                let {
                    transitionState: t,
                    initialSlide: n = h.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    onSuccess: l,
                    onClose: S,
                    onSlideChange: C,
                    hasJoinButton: A
                } = e, [N, g] = i.useState(n), v = (0, u.default)(N), [R, M] = i.useState(null), [O, L] = i.useState(null), [y, D] = i.useState(null), [w, U] = i.useState(!1);
                i.useEffect(() => {
                    g(n)
                }, [g, n]), i.useEffect(() => {
                    N !== v && C(N)
                }, [C, N, v]);
                let F = i.useCallback(e => {
                        g(h.CreateGuildSlideTypes.CREATION_INTENT), L(e), d.default.track(T.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }, []),
                    x = i.useCallback(e => {
                        U(e), g(h.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
                    }, []),
                    G = i.useCallback(() => g(h.CreateGuildSlideTypes.JOIN_GUILD), [g]),
                    P = i.useCallback(() => {
                        if (N === h.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
                            g(h.CreateGuildSlideTypes.CREATION_INTENT);
                            return
                        }
                        g(h.CreateGuildSlideTypes.GUILD_TEMPLATES), L(null)
                    }, [N]),
                    b = i.useCallback(e => {
                        D(e), l(e)
                    }, [l, D]),
                    V = i.useCallback(() => {
                        a(null != y, "handleSuccess called before onGuildCreated"), l(y)
                    }, [l, y]),
                    k = {
                        impression_group: s.ImpressionGroups.GUILD_ADD_FLOW
                    };
                return (0, r.jsx)("div", {
                    className: (0, c.getThemeClass)(T.ThemeTypes.LIGHT),
                    children: (0, r.jsx)(o.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, r.jsx)("div", {
                            className: m.container,
                            children: (0, r.jsxs)(o.Slides, {
                                activeSlide: N,
                                width: 440,
                                onSlideReady: e => M(e),
                                children: [(0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: s.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: k,
                                    children: (0, r.jsx)(I.default, {
                                        isNewUser: !1,
                                        onJoin: A ? G : void 0,
                                        onChooseTemplate: F,
                                        onClose: S
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CREATION_INTENT,
                                    impressionName: s.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: k,
                                    children: (0, r.jsx)(E.default, {
                                        onClose: S,
                                        onBack: P,
                                        onCreationIntentChosen: x
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                    impressionName: s.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: k,
                                    children: (0, r.jsx)(_.default, {
                                        guildTemplate: O,
                                        onGuildCreated: b,
                                        onClose: S,
                                        onBack: P,
                                        isSlideReady: R === h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                        isCommunity: w
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CHANNEL_PROMPT,
                                    impressionName: s.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: k,
                                    children: (0, r.jsx)(f.default, {
                                        createdGuildId: y,
                                        onClose: S,
                                        onChannelPromptCompleted: V,
                                        isSlideReady: R === h.CreateGuildSlideTypes.CHANNEL_PROMPT
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.JOIN_GUILD,
                                    impressionName: s.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: k,
                                    children: (0, r.jsx)(p.default, {
                                        onBack: P,
                                        onClose: S,
                                        isSlideReady: R === h.CreateGuildSlideTypes.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        243338: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                CreateGuildSlideTypes: function() {
                    return r
                },
                CREATE_GUILD_MODAL_KEY: function() {
                    return l
                }
            }), (i = r || (r = {})).GUILD_TEMPLATES = "guild-templates", i.CUSTOMIZE_GUILD = "customize-guild", i.CHANNEL_PROMPT = "channel-prompt", i.JOIN_GUILD = "join-guild", i.CREATION_INTENT = "creation-intent";
            let l = "create-guild"
        },
        110337: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("77078"),
                d = n("970728"),
                c = n("448993"),
                f = n("393414"),
                E = n("145131"),
                _ = n("476765"),
                I = n("883029"),
                p = n("49111"),
                h = n("782340"),
                T = n("479030"),
                m = n("529861"),
                S = n("156465");
            let C = "hTKzmak",
                A = (0, _.uid)();
            let N = (r = window.GLOBAL_ENV.INVITE_HOST, i = "", null == r && (r = location.host, i = p.Routes.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(i, "/")),
                g = [C, "".concat(N).concat(C), "".concat(N).concat("cool-people")],
                v = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsxs)(u.Clickable, {
                        className: T.rowContainer,
                        onClick: () => {
                            t(), (0, f.transitionTo)(p.Routes.GUILD_DISCOVERY)
                        },
                        children: [(0, l.jsx)("img", {
                            width: 40,
                            height: 40,
                            className: T.rowIcon,
                            alt: "",
                            src: S
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(u.Heading, {
                                className: T.rowText,
                                variant: "heading-md/semibold",
                                children: h.default.Messages.DISCOVERY_UPSELL_HEADER
                            }), (0, l.jsx)(u.Text, {
                                className: T.rowText,
                                variant: "text-xs/normal",
                                children: h.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
                            })]
                        }), (0, l.jsx)("img", {
                            className: T.rowArrow,
                            alt: "",
                            src: m
                        })]
                    })
                };

            function R(e) {
                let {
                    onBack: t,
                    onClose: n,
                    isSlideReady: r
                } = e, [i, s] = a.useState(""), [f, _] = a.useState(!1), [p, m] = a.useState(null), S = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    r && (null === (e = S.current) || void 0 === e || e.focus())
                }, [r]);
                let R = e => {
                    e.preventDefault();
                    let t = i.trim();
                    if ("" === t) {
                        m(h.default.Messages.INVALID_INVITE_LINK_ERROR);
                        return
                    }
                    m(null), _(!0);
                    let r = t.split("/"),
                        l = r[r.length - 1];
                    d.default.resolveInvite(l, "Join Guild", {
                        inputValue: t
                    }).then(e => {
                        let {
                            invite: t
                        } = e;
                        if (_(!1), null == t) {
                            m(h.default.Messages.INSTANT_INVITE_EXPIRED);
                            return
                        }
                        if (null != t.channel) {
                            let e = d.default.getInviteContext("Join Guild", t);
                            d.default.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: e => {
                                    n(), d.default.transitionToInvite(e)
                                }
                            }).then(() => {}, e => {
                                if (e instanceof c.V6OrEarlierAPIError || e instanceof c.APIError) {
                                    let t = (0, I.getInviteError)(e.code);
                                    m(t)
                                } else m(h.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                            })
                        }
                    }, e => {
                        _(!1);
                        let t = new c.V6OrEarlierAPIError(e),
                            n = (0, I.getInviteError)(t.code);
                        m(n)
                    })
                };
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: T.header,
                        direction: E.default.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            className: T.title,
                            variant: "heading-xl/semibold",
                            children: h.default.Messages.JOIN_SERVER_TITLE
                        }), (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: h.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: n
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: T.content,
                        children: [(0, l.jsx)("form", {
                            onSubmit: R,
                            className: T.inputForm,
                            children: (0, l.jsxs)(u.FormItem, {
                                children: [(0, l.jsx)(u.FormTitle, {
                                    id: A,
                                    error: p,
                                    className: o(T.formTitle, {
                                        [T.error]: null != p
                                    }),
                                    required: !0,
                                    children: h.default.Messages.FORM_LABEL_INVITE_LINK
                                }), (0, l.jsx)(u.TextInput, {
                                    value: i,
                                    onChange: s,
                                    className: T.input,
                                    inputClassName: T.inputInner,
                                    placeholder: "".concat(N).concat(C),
                                    inputRef: S,
                                    required: !0,
                                    "aria-labelledby": A
                                })]
                            })
                        }), (0, l.jsx)(u.FormItem, {
                            title: h.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                            titleClassName: T.formTitle,
                            className: T.examplesForm,
                            children: g.map(e => (0, l.jsx)(u.Clickable, {
                                className: T.sampleLink,
                                onClick: () => s(e),
                                children: e
                            }, e))
                        }), (0, l.jsx)(v, {
                            onClick: n
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: T.footer,
                        children: [(0, l.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            submitting: f,
                            onClick: R,
                            children: h.default.Messages.NUF_JOIN_SERVER_BUTTON
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.MIN,
                            onClick: t,
                            children: h.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return i.default.dispatch({
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
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            });
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([i.VerificationFormFieldTypes.TERMS]),
                a = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                _ = 1e3,
                I = 300,
                p = "Membership Gating",
                h = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, r.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return T
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return S
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return N
                },
                updateImpersonatedData: function() {
                    return g
                }
            });
            var r = n("913144"),
                i = n("716241"),
                l = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                h = n("724210");

            function T(e, t) {
                E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function m(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function S(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    r = null != t && (0, h.isStaticChannelRoute)(t);
                if (!r && !d.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function N(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            l = i.filter(e => !n.includes(e));
                        return l.length > 0 && A(e, l, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function g(e, t) {
                m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
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
                let a = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        149806: function(e, t, n) {
            "use strict";
            var r, i, l, a, s, o, u, d, c, f;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return r
                },
                AgeGateSteps: function() {
                    return i
                },
                ClaimAccountSteps: function() {
                    return l
                },
                CreateGuildSteps: function() {
                    return a
                },
                RegistrationSteps: function() {
                    return s
                }
            }), (o = r || (r = {})).UNKNOWN = "unknown", o.ANY = "any", o.INVITE = "invite", o.ORGANIC = "organic_registration", o.ORGANIC_MARKETING = "organic_marketing", o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", o.CREATE_GUILD = "create_guild", (u = i || (i = {})).AGE_GATE = "age_gate", u.AGE_GATE_UNDERAGE = "age_gate_underage", (d = l || (l = {})).CLAIM_ACCOUNT = "claim_account", d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (c = a || (a = {})).GUILD_TEMPLATES = "guild_templates", c.GUILD_CREATE = "guild_create", c.CREATION_INTENT = "creation_intent", c.CHANNEL_PROMPT = "channel_prompt", c.JOIN_GUILD = "join_guild", c.SUCCESS = "create_success", (f = s || (s = {})).NUF_STARTED = "nuf_started", f.AGE_GATE = "age_gate", f.NUF_COMPLETE = "nuf_complete", f.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("308503"),
                i = n("95410"),
                l = n("605250"),
                a = n("599110"),
                s = n("149806"),
                o = n("49111");
            let u = "UserFlowAnalyticsStore_current",
                d = "UserFlowAnalyticsStore";

            function c(e) {
                if (e === s.FlowType.UNKNOWN) return null;
                let t = i.default.get("".concat(d, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...r
                } = t;
                return 1 !== n ? null : r
            }
            new l.default("UserFlowAnalytics");
            let f = (0, r.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : i.default.get(u);
                    if (null == n) return null;
                    let {
                        [n]: r
                    } = t().flows, l = null != r ? r : c(n);
                    return (null == l ? void 0 : l.currentStep) != null ? n : null
                }
            }));

            function E(e, t) {
                let {
                    [e]: n, ...r
                } = f.getState().flows, i = null != n ? n : c(e);
                if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t) f.setState({
                    flows: {
                        ...r,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === s.FlowType.ANY) {
                    var i;
                    r = null !== (i = f.getState().activeFlow()) && void 0 !== i ? i : s.FlowType.UNKNOWN
                }
                let {
                    [r]: l, ...a
                } = f.getState().flows, o = null != l ? l : c(r);
                if (null != o && null != o.currentStep) o.currentStep !== t && f.setState({
                    flows: {
                        ...a,
                        [r]: {
                            ...o,
                            lastStep: o.currentStep,
                            lastTimestamp: o.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: r
                })
            }
            f.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === s.FlowType.UNKNOWN) return;
                        let t = "".concat(d, "-").concat(e.type);
                        e.ended ? (i.default.remove(t), i.default.remove(u)) : (i.default.set("".concat(d, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), i.default.set(u, e.type))
                    }(e), a.default.track(o.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ...f.getState().flows
                    };
                    delete t[e.type], f.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function I() {
                return null != f.getState().activeFlow()
            }
            var p = {
                flowStart: E,
                flowStepOrStart: function(e, t) {
                    I() ? _(e, t) : E(e, t)
                },
                flowStep: _,
                hasActiveFlow: I
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("866227"),
                i = n.n(r),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
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
                    return E
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                a = n("49111");
            let s = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    o = null != i ? {
                        state: a.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                a = n("913144"),
                s = n("816454");
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
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(a.default, {
                WINDOW_INIT: function(e) {
                    i(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: l
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
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
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: d,
                    ...c
                } = e, f = i.Children.only(t), E = (0, s.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: a(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(o.default, {
                        ...c,
                        className: a(d, u.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var r = n("995008"),
                i = n.n(r),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                s = () => (0, l.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("276825"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        651879: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("693566"),
                s = n.n(a),
                o = n("851387"),
                u = n("305961"),
                d = n("697218"),
                c = n("158998"),
                f = n("782340");
            let E = new s({
                maxAge: 6e4
            });

            function _(e, t, n) {
                null != r && clearTimeout(r), r = setTimeout(() => {
                    let r = [],
                        i = e => {
                            r.push(e.id)
                        };
                    if (null == e) l.forEach(u.default.getGuilds(), i);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = u.default.getGuild(e);
                        null != t && i(t)
                    });
                    else {
                        let t = u.default.getGuild(e);
                        null != t && i(t)
                    }
                    r.length > 0 && o.default.requestMembers(r, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function I(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    r = E.get(n);
                if (null != r) return r;
                E.set(n, !0)
            }
            var p = {
                getGuildNameSuggestion: function(e) {
                    let t = d.default.getCurrentUser(),
                        n = c.getName(t);
                    return null == n || 0 === n.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = Array.isArray(e),
                        i = [],
                        l = !1;
                    if (r) e.forEach(e => {
                        let n = I(e, t);
                        null == n && i.push(e)
                    });
                    else {
                        let n = I(e, t);
                        null == n && (l = !0)
                    }
                    i.length > 0 && r ? _(i, t, n) : l && _(e, t, n)
                }
            }
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return m
                },
                dataUrlToFile: function() {
                    return S
                },
                isPNGAnimated: function() {
                    return C
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("917351"),
                a = n.n(l),
                s = n("48648"),
                o = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: l = 0,
                    minHeight: a = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), a);
                    let s = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), l), n = Math.max(Math.round(n * s), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, l = 1;
                t > r && (l = r / t), t = Math.round(t * l);
                let a = 1;
                return (n = Math.round(n * l)) > i && (a = i / n), Math.min(l * a, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return _;
                let l = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, l, a);
                let s = i.getImageData(0, 0, l, a).data,
                    u = function(e, t, n) {
                        let r = [];
                        for (let i = 0, l, a, s, o, u; i < t; i += n) a = e[(l = 4 * i) + 0], s = e[l + 1], o = e[l + 2], (void 0 === (u = e[l + 3]) || u >= 125) && !(a > 250 && s > 250 && o > 250) && r.push([a, s, o]);
                        return r
                    }(s, l * a, n),
                    d = o(u, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = e => h(e),
                h = a.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function T(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function m(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function S(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function C(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        883029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDescriptiveInviteError: function() {
                    return o
                },
                getInviteError: function() {
                    return u
                }
            });
            var r = n("697218"),
                i = n("701909"),
                l = n("719923"),
                a = n("49111"),
                s = n("782340");

            function o(e) {
                switch (e) {
                    case a.AbortCodes.TOO_MANY_USER_GUILDS:
                        let t = r.default.getCurrentUser(),
                            n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
                            i = n ? a.MAX_USER_GUILDS_PREMIUM : a.MAX_USER_GUILDS;
                        return {
                            title: s.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: i
                            }), description: s.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case a.AbortCodes.GUILD_AT_CAPACITY:
                        return {
                            title: s.default.Messages.SERVER_IS_CURRENTLY_FULL, description: s.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case a.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: s.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: s.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function u(e) {
                switch (e) {
                    case a.AbortCodes.TOO_MANY_USER_GUILDS:
                        return s.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case a.AbortCodes.GUILD_AT_CAPACITY:
                        return s.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case a.AbortCodes.INVALID_COUNTRY_CODE:
                        return s.default.Messages.INVALID_COUNTRY_CODE;
                    case a.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
                        return s.default.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case a.AbortCodes.INVITES_DISABLED:
                        return s.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: i.default.getArticleURL(a.HelpdeskArticles.INVITE_DISABLED)
                        });
                    default:
                        return s.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("697218"),
                a = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == r) {
                    null == o || o();
                    return
                }
                let d = r(_, c, a);

                function c() {
                    null == o || o()
                }

                function f(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), l(e)
                }

                function _(e) {
                    return s(d, _, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(d, _, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = o,
                    isModalOpen: a = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = a, i.body && 60008 === i.body.code || o && 429 === i.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...s
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, r) {
                return (0, i.updateModal)(e, a(t, n, r))
            }
        }
    }
]);