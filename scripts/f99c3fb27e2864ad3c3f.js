(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92336"], {
        408854: function(e, t, s) {
            "use strict";
            e.exports = s.p + "88f099e036a0d7620597.png"
        },
        378913: function(e, t, s) {
            "use strict";
            e.exports = s.p + "906a38cbd45d6780304c.svg"
        },
        356002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "682f1b679b5bdb117165.webm"
        },
        197492: function(e, t, s) {
            "use strict";
            e.exports = s.p + "87590a81cf78665e23ea.webm"
        },
        242777: function(e, t, s) {
            "use strict";
            e.exports = s.p + "27316f256e0a1fb24421.mov"
        },
        838623: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9492f371ccf5db4f0156.mp4"
        },
        844389: function(e, t, s) {
            "use strict";
            e.exports = s.p + "35b6e69b80885d349202.png"
        },
        392518: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b85e9e5e26daee13304b.webm"
        },
        336406: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0375f4834ae07b9d5de9.mov"
        },
        414298: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b9b0ab98fd3fcb65f4d5.mp4"
        },
        815143: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b7fb33c633b7ad9732e5.png"
        },
        134072: function(e, t, s) {
            "use strict";
            e.exports = s.p + "988b1594e4843a08ef39.webm"
        },
        143416: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var n = s("920040"),
                a = s("773670"),
                l = s("287377"),
                r = s("498225"),
                i = s("990746"),
                o = s("43982"),
                u = s("393414"),
                c = s("271938"),
                d = s("145131"),
                f = s("124969"),
                p = s("49111"),
                m = s("782340"),
                h = s("669727"),
                N = s("84811");
            r.default.initialize();
            let E = {
                HANDOFF: "handoff",
                DONE: "done",
                FAILED: "failed"
            };

            function T() {
                try {
                    window.close()
                } catch (e) {}
            }
            class g extends a.PureComponent {
                componentDidMount() {
                    let {
                        stage: e,
                        key: t
                    } = this.state;
                    e === E.DONE ? T() : c.default.isAuthenticated() ? i.default.post({
                        url: p.Endpoints.HANDOFF,
                        body: {
                            key: t
                        },
                        oldFormErrors: !0
                    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
                }
                handoff(e) {
                    o.default.requestRedirect(p.RPCCommands.BROWSER_HANDOFF, {
                        handoffToken: e,
                        fingerprint: c.default.getFingerprint()
                    }).then(this.done, this.failed)
                }
                renderDone() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.Image, {
                            src: s("203472"),
                            className: N.marginBottom20
                        }), (0, n.jsx)(f.Title, {
                            className: N.marginBottom8,
                            children: m.default.Messages.BROWSER_HANDOFF_DONE_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            className: N.marginBottom40,
                            children: m.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, n.jsx)(f.Button, {
                            onClick: this.handleOpenApp,
                            children: m.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderFailed() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.Image, {
                            src: s("203472"),
                            className: N.marginBottom20
                        }), (0, n.jsx)(f.Title, {
                            className: N.marginBottom8,
                            children: m.default.Messages.BROWSER_HANDOFF_FAILED_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            className: N.marginBottom40,
                            children: m.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, n.jsx)(f.Button, {
                            onClick: this.handleOpenApp,
                            children: m.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderHandoff() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.AuthSpinner, {}), (0, n.jsx)(f.Title, {
                            className: N.marginBottom8,
                            children: m.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            children: m.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
                        })]
                    })
                }
                render() {
                    let e;
                    let {
                        stage: t
                    } = this.state;
                    switch (t) {
                        case E.DONE:
                            e = this.renderDone();
                            break;
                        case E.FAILED:
                            e = this.renderFailed();
                            break;
                        case E.HANDOFF:
                        default:
                            e = this.renderHandoff()
                    }
                    return (0, n.jsx)(d.default, {
                        justify: d.default.Justify.CENTER,
                        align: d.default.Align.CENTER,
                        className: h.wrapper,
                        children: e
                    })
                }
                constructor(e) {
                    var t;
                    super(e), this.done = () => {
                        T(), this.setState({
                            stage: E.DONE
                        })
                    }, this.failed = () => {
                        this.setState({
                            stage: E.FAILED
                        }), T()
                    }, this.handleOpenApp = () => {
                        (0, u.transitionTo)(p.Routes.ME)
                    };
                    let {
                        search: s
                    } = e.location, n = null != s && "" !== s ? (0, l.parse)(s) : {};
                    this.state = {
                        key: null !== (t = n.key) && void 0 !== t ? t : "",
                        stage: "true" === n.done ? E.DONE : E.HANDOFF
                    }
                }
            }
        },
        843962: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getChannelIconURL: function() {
                    return i
                }
            });
            var n = s("697218"),
                a = s("315102"),
                l = s("449008"),
                r = s("49111");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case r.ChannelTypes.DM:
                        let [i] = e.recipients.map(n.default.getUser).filter(l.isNotNullish);
                        if (null == i) return null;
                        return i.getAvatarURL(void 0, t, s);
                    case r.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        11291: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useHalloween2023Enabled: function() {
                    return l
                },
                isHalloween2023Enabled: function() {
                    return r
                },
                subscribeToHalloweenExperiment: function() {
                    return i
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                    kind: "user",
                    id: "2023-10_halloween_2023",
                    label: "Halloween assets 2023",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Halloween assets enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                r = () => {
                    let {
                        enabled: e
                    } = a.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                i = e => a.subscribe({
                    location: "subscribe"
                }, e)
        },
        684581: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("11291"),
                a = s("782340"),
                l = s("356002"),
                r = s("197492");
            let i = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_HALLOWEEN + " \uD83C\uDF83",
                subscribeToEligibility: n.subscribeToHalloweenExperiment,
                isEligible: n.isHalloween2023Enabled,
                useIsEligible: n.useHalloween2023Enabled,
                getAppSpinnerSources: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return {
                        webmDark: l,
                        webmLight: r
                    }
                },
                getLoadingTips: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return [a.default.Messages.HALLOWEEN_LOADING_TEXT_1, a.default.Messages.HALLOWEEN_LOADING_TEXT_2, a.default.Messages.HALLOWEEN_LOADING_TEXT_3, a.default.Messages.HALLOWEEN_LOADING_TEXT_4, a.default.Messages.HALLOWEEN_LOADING_TEXT_5, a.default.Messages.HALLOWEEN_LOADING_TEXT_6, a.default.Messages.HALLOWEEN_LOADING_TEXT_7, a.default.Messages.HALLOWEEN_LOADING_TEXT_8, a.default.Messages.HALLOWEEN_LOADING_TEXT_9]
                }
            };
            var o = i
        },
        124969: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Title: function() {
                    return g
                },
                SubTitle: function() {
                    return x
                },
                Image: function() {
                    return _
                },
                Button: function() {
                    return A
                },
                Avatar: function() {
                    return b
                },
                GuildIcon: function() {
                    return O
                },
                ChannelIcon: function() {
                    return I
                },
                Input: function() {
                    return L
                },
                Block: function() {
                    return j
                },
                SubText: function() {
                    return D
                },
                AuthSpinner: function() {
                    return v
                },
                ActivityCount: function() {
                    return R
                },
                JoiningAs: function() {
                    return S
                },
                IncompatibleBrowser: function() {
                    return C
                },
                default: function() {
                    return F
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("575482"),
                l = s.n(a),
                r = s("77078"),
                i = s("843962"),
                o = s("145131"),
                u = s("109024"),
                c = s("476765"),
                d = s("637888"),
                f = s("98013"),
                p = s("701909"),
                m = s("439932"),
                h = s("49111"),
                N = s("782340"),
                E = s("612673");
            let T = r.Avatar;
            null == T && (T = () => null);
            let g = e => {
                    let {
                        className: t,
                        id: s,
                        children: a
                    } = e;
                    return (0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: l(E.title, t),
                        id: s,
                        children: a
                    })
                },
                x = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: t,
                        children: s
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        src: s
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: s,
                        className: l(E.image, t)
                    })
                },
                A = e => {
                    let {
                        className: t,
                        ...s
                    } = e, a = s.look === r.Button.Looks.LINK;
                    return (0, n.jsx)(r.Button, {
                        size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
                        fullWidth: !a,
                        className: l(t, {
                            [E.button]: !a,
                            [E.linkButton]: a
                        }),
                        ...s
                    })
                };
            A.Looks = r.Button.Looks, A.Colors = r.Button.Colors, A.Sizes = r.Button.Sizes;
            let b = e => {
                    let {
                        className: t,
                        src: s,
                        size: a
                    } = e;
                    return (0, n.jsx)(T, {
                        src: s,
                        size: a,
                        className: l(E.inviteLargeIcon, t),
                        "aria-hidden": !0
                    })
                },
                O = e => {
                    let {
                        guild: t,
                        size: s,
                        animate: a = !1,
                        className: l
                    } = e;
                    return (0, n.jsx)(u.default, {
                        active: !0,
                        guild: t,
                        size: s,
                        animate: a,
                        className: l
                    })
                };
            O.Sizes = u.default.Sizes;
            let I = e => {
                let {
                    className: t,
                    channel: s,
                    size: a
                } = e;
                return (0, n.jsx)(T, {
                    src: (0, i.getChannelIconURL)(s),
                    size: a,
                    className: l(E.inviteIcon, t),
                    "aria-hidden": !0
                })
            };
            I.Sizes = r.AvatarSizes;
            let L = e => {
                    let {
                        label: t,
                        error: s,
                        placeholder: a,
                        value: i,
                        className: o,
                        inputClassName: u,
                        setRef: d,
                        type: f = "text",
                        onChange: p,
                        autoComplete: m,
                        autoFocus: h,
                        maxLength: N,
                        spellCheck: T,
                        name: g,
                        description: x,
                        required: _,
                        onFocus: A,
                        onBlur: b
                    } = e, O = (0, c.useUID)();
                    return (0, n.jsxs)(r.FormItem, {
                        title: t,
                        error: s,
                        className: o,
                        required: _,
                        tag: "label",
                        htmlFor: O,
                        children: [(0, n.jsx)(r.TextInput, {
                            name: g,
                            type: f,
                            value: i,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: l(u, {
                                [E.inputError]: null != s
                            }),
                            "aria-label": t,
                            onChange: p,
                            autoComplete: m,
                            autoFocus: h,
                            maxLength: N,
                            spellCheck: T,
                            id: O,
                            onFocus: A,
                            onBlur: b
                        }), null != x ? (0, n.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: E.description,
                            children: x
                        }) : null]
                    })
                },
                j = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: l(E.block, t),
                        children: s
                    })
                },
                D = e => {
                    let {
                        className: t,
                        children: s,
                        isProminent: a
                    } = e;
                    return (0, n.jsx)(r.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: l(E.subText, t),
                        children: s
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)(o.default, {
                        direction: o.default.Direction.VERTICAL,
                        align: o.default.Align.CENTER,
                        className: t,
                        children: (0, n.jsx)(d.default, {
                            className: E.spinnerVideo
                        })
                    })
                },
                R = e => {
                    let t, {
                        online: s,
                        total: a,
                        className: i,
                        flat: u,
                        textClassName: c
                    } = e;
                    return null == a ? null : (null != s && s > 0 && (t = (0, n.jsxs)("div", {
                        className: l(E.pill, E.pillOnline, u && E.pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: E.pillIconOnline
                        }), (0, n.jsx)(r.Text, {
                            tag: "span",
                            className: l(E.pillMessage, c),
                            variant: "text-sm/normal",
                            children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    })), (0, n.jsxs)(o.default, {
                        justify: o.default.Justify.CENTER,
                        className: i,
                        children: [t, (0, n.jsxs)("div", {
                            className: l(E.pill, u && E.pillFlat),
                            children: [(0, n.jsx)("i", {
                                className: E.pillIconTotal
                            }), (0, n.jsx)(r.Text, {
                                tag: "span",
                                className: l(E.pillMessage, c),
                                variant: "text-sm/normal",
                                children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    }))
                },
                S = e => {
                    let {
                        user: t
                    } = e;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: E.joiningAs,
                        children: [(0, n.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(b, {
                            className: E.joiningAsAvatar,
                            src: t.getAvatarURL(void 0, 24),
                            size: r.AvatarSizes.SIZE_24,
                            "aria-label": t.username
                        }), (0, n.jsx)(r.Text, {
                            className: E.joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.username
                        })]
                    })
                },
                C = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsxs)(j, {
                        className: t,
                        children: [(0, n.jsx)(A, {
                            onClick: () => window.open((0, f.getCurrentPlatformDownloadURL)()),
                            children: N.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, f.getPlatformReadableName)()
                            })
                        }), (0, n.jsx)(D, {
                            className: E.downloadButtonSubtext,
                            children: N.default.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.default.getArticleURL(h.HelpdeskArticles.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            var F = e => {
                let {
                    className: t,
                    contentClassName: s,
                    tag: a = "section",
                    onSubmit: r,
                    children: i,
                    expanded: o = !1,
                    theme: u = h.ThemeTypes.DARK,
                    style: c
                } = e;
                return (0, n.jsxs)(a, {
                    "data-theme": u,
                    onSubmit: r,
                    style: c,
                    className: l(o ? E.authBoxExpanded : E.authBox, (0, m.getThemeClass)(u), t),
                    children: [(0, n.jsx)("div", {
                        className: E.discordLogo
                    }), (0, n.jsx)("div", {
                        className: l(E.centeringWrapper, s),
                        children: i
                    })]
                })
            }
        },
        637888: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n, a, l = s("920040"),
                r = s("773670"),
                i = s("819855"),
                o = s("77078"),
                u = s("684581"),
                c = s("560528"),
                d = s("242777"),
                f = s("336406"),
                p = s("58608"),
                m = s("49111"),
                h = s("838623"),
                N = s("844389"),
                E = s("392518"),
                T = s("414298"),
                g = s("815143"),
                x = s("134072");

            function _(e) {
                let {
                    movDark: t = d,
                    movLight: s = f,
                    mp4Dark: n = h,
                    mp4Light: a = T,
                    pngDark: r = N,
                    pngLight: i = g,
                    webmDark: o = E,
                    webmLight: u = x
                } = e, p = (0, c.getChromeVersion)(), _ = [(0, l.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "mp4"), (0, l.jsx)("img", {
                    alt: "",
                    src: r
                }, "png")], A = [(0, l.jsx)("source", {
                    src: a,
                    type: "video/mp4"
                }, "mp4"), (0, l.jsx)("img", {
                    alt: "",
                    src: i
                }, "png")];
                return (p > 52 || -1 === p) && (_.unshift((0, l.jsx)("source", {
                    src: o,
                    type: "video/webm"
                }, "webm")), A.unshift((0, l.jsx)("source", {
                    src: u,
                    type: "video/webm"
                }, "webm"))), (0, c.supportsHEVCAlpha)() && (_.unshift((0, l.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), A.unshift((0, l.jsx)("source", {
                    src: s,
                    type: "video/mp4"
                }, "hevc"))), {
                    [m.ThemeTypes.DARK]: _,
                    [m.ThemeTypes.LIGHT]: A
                }
            }
            let A = null === (n = (a = u.default).getAppSpinnerSources) || void 0 === n ? void 0 : n.call(a),
                b = null != A ? _(A) : null,
                O = _({});
            var I = e => {
                var t;
                let {
                    loop: s = !0,
                    autoPlay: n = !0,
                    setRef: a,
                    className: u,
                    onReady: c
                } = e, {
                    theme: d
                } = (0, o.useThemeContext)(), {
                    reducedMotion: f
                } = r.useContext(o.AccessibilityPreferencesContext), h = O;
                null != b && (h = b);
                let N = (0, i.isThemeDark)(d) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT,
                    E = null !== (t = h[N]) && void 0 !== t ? t : h[m.ThemeTypes.DARK];
                return (0, l.jsx)(p.default, {
                    ref: a,
                    onLoadedData: c,
                    className: u,
                    loop: !f.enabled && s,
                    autoPlay: !f.enabled && n,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: E
                }, d)
            }
        }
    }
]);