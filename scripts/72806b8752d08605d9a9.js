(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23992"], {
        803452: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b77d7b48860bbefdeeb2.svg"
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
        724038: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            });
            var n = s("597755"),
                a = s.n(n),
                r = s("742270"),
                l = s("815157"),
                i = s("391679"),
                u = s("327037"),
                o = s("393414"),
                c = s("271938"),
                d = s("476108"),
                p = s("599110"),
                f = s("65300"),
                m = s("49111");
            async function _(e) {
                var t, s;
                let n = null === (t = a.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === n || "iOS" === n) {
                    let t = null !== (s = c.default.getFingerprint()) && void 0 !== s ? s : c.default.getId(),
                        n = (0, l.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, u.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, l.default)((0, r.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: n
                    })
                }
                return "discord://"
            }
            async function b(e) {
                let t = await _(e),
                    s = (0, l.parseDynamicLink)(t);
                null != s && p.default.track(m.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, i.maybeExtractId)(s.fingerprint),
                    attempt_id: s.attemptId,
                    source: s.utmSource
                }), f.default.launch(t, e => {
                    !e && (0, o.replaceWith)(d.default.fallbackRoute)
                })
            }
        },
        11291: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useHalloween2023Enabled: function() {
                    return r
                },
                isHalloween2023Enabled: function() {
                    return l
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
                r = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                l = () => {
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
                    return u
                }
            });
            var n = s("11291"),
                a = s("782340"),
                r = s("356002"),
                l = s("197492");
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
                        webmDark: r,
                        webmLight: l
                    }
                },
                getLoadingTips: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return [a.default.Messages.HALLOWEEN_LOADING_TEXT_1, a.default.Messages.HALLOWEEN_LOADING_TEXT_2, a.default.Messages.HALLOWEEN_LOADING_TEXT_3, a.default.Messages.HALLOWEEN_LOADING_TEXT_4, a.default.Messages.HALLOWEEN_LOADING_TEXT_5, a.default.Messages.HALLOWEEN_LOADING_TEXT_6, a.default.Messages.HALLOWEEN_LOADING_TEXT_7, a.default.Messages.HALLOWEEN_LOADING_TEXT_8, a.default.Messages.HALLOWEEN_LOADING_TEXT_9]
                }
            };
            var u = i
        },
        970366: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                trackAppUIViewed: function() {
                    return u
                }
            });
            var n = s("748820"),
                a = s("49671"),
                r = s("599110"),
                l = s("49111");
            let i = new class e {
                trackEvent(e, t) {
                    let s = Date.now();
                    requestIdleCallback(() => {
                        r.default.track(e, {
                            ... function() {
                                var e, t, s, n;
                                let r = "--campaign-id=",
                                    l = null !== (n = null === (s = a.default) || void 0 === s ? void 0 : null === (t = s.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of l)
                                    if (e.startsWith(r)) return {
                                        referrer: e.substr(r.length)
                                    };
                                return {}
                            }(),
                            ... function() {
                                let e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(s => {
                                    let n = null != s.encodedBodySize ? s.encodedBodySize : s.decodedBodySize,
                                        a = null != s.decodedBodySize ? s.decodedBodySize : s.encodedBodySize,
                                        r = s.transferSize;
                                    null != a && null != n && (e = !0, t.total_compressed_byte_size += n, t.total_uncompressed_byte_size += a, null != r && (t.total_uncompressed_byte_size += r), "resource" === s.entryType && ("script" === s.initiatorType && null != s.name && null != s.name.match(/\.js/) && (t.js_compressed_byte_size += n, t.js_uncompressed_byte_size += a, null != r && (t.js_uncompressed_byte_size += r)), "link" === s.initiatorType && null != s.name && null != s.name.match(/\.css/) && (t.css_compressed_byte_size += n, t.css_uncompressed_byte_size += a, null != r && (t.css_uncompressed_byte_size += r))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: s - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, n.v4)(), this.appUIViewed = !1
                }
            };

            function u(e) {
                i.trackAppUIViewed(e)
            }
        },
        476108: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("446674"),
                a = s("95410"),
                r = s("913144"),
                l = s("49111");
            let i = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = i,
                o = "LAST_VIEWED_PATH";
            class c extends n.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                    u = null != e ? e : i
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = a.default.get(o, null);
                return a.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(r.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        124969: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Title: function() {
                    return h
                },
                SubTitle: function() {
                    return x
                },
                Image: function() {
                    return T
                },
                Button: function() {
                    return N
                },
                Avatar: function() {
                    return v
                },
                GuildIcon: function() {
                    return I
                },
                ChannelIcon: function() {
                    return A
                },
                Input: function() {
                    return y
                },
                Block: function() {
                    return L
                },
                SubText: function() {
                    return w
                },
                AuthSpinner: function() {
                    return S
                },
                ActivityCount: function() {
                    return j
                },
                JoiningAs: function() {
                    return O
                },
                IncompatibleBrowser: function() {
                    return z
                },
                default: function() {
                    return D
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                r = s.n(a),
                l = s("77078"),
                i = s("843962"),
                u = s("145131"),
                o = s("109024"),
                c = s("476765"),
                d = s("637888"),
                p = s("98013"),
                f = s("701909"),
                m = s("439932"),
                _ = s("49111"),
                b = s("782340"),
                g = s("79902");
            let E = l.Avatar;
            null == E && (E = () => null);
            let h = e => {
                    let {
                        className: t,
                        id: s,
                        children: a
                    } = e;
                    return (0, n.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: r(g.title, t),
                        id: s,
                        children: a
                    })
                },
                x = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: t,
                        children: s
                    })
                },
                T = e => {
                    let {
                        className: t,
                        src: s
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: s,
                        className: r(g.image, t)
                    })
                },
                N = e => {
                    let {
                        className: t,
                        ...s
                    } = e, a = s.look === l.Button.Looks.LINK;
                    return (0, n.jsx)(l.Button, {
                        size: a ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
                        fullWidth: !a,
                        className: r(t, {
                            [g.button]: !a,
                            [g.linkButton]: a
                        }),
                        ...s
                    })
                };
            N.Looks = l.Button.Looks, N.Colors = l.Button.Colors, N.Sizes = l.Button.Sizes;
            let v = e => {
                    let {
                        className: t,
                        src: s,
                        size: a
                    } = e;
                    return (0, n.jsx)(E, {
                        src: s,
                        size: a,
                        className: r(g.inviteLargeIcon, t),
                        "aria-hidden": !0
                    })
                },
                I = e => {
                    let {
                        guild: t,
                        size: s,
                        animate: a = !1,
                        className: r
                    } = e;
                    return (0, n.jsx)(o.default, {
                        active: !0,
                        guild: t,
                        size: s,
                        animate: a,
                        className: r
                    })
                };
            I.Sizes = o.default.Sizes;
            let A = e => {
                let {
                    className: t,
                    channel: s,
                    size: a
                } = e;
                return (0, n.jsx)(E, {
                    src: (0, i.getChannelIconURL)(s),
                    size: a,
                    className: r(g.inviteIcon, t),
                    "aria-hidden": !0
                })
            };
            A.Sizes = l.AvatarSizes;
            let y = e => {
                    let {
                        label: t,
                        error: s,
                        placeholder: a,
                        value: i,
                        className: u,
                        inputClassName: o,
                        setRef: d,
                        type: p = "text",
                        onChange: f,
                        autoComplete: m,
                        autoFocus: _,
                        maxLength: b,
                        spellCheck: E,
                        name: h,
                        description: x,
                        required: T,
                        onFocus: N,
                        onBlur: v
                    } = e, I = (0, c.useUID)();
                    return (0, n.jsxs)(l.FormItem, {
                        title: t,
                        error: s,
                        className: u,
                        required: T,
                        tag: "label",
                        htmlFor: I,
                        children: [(0, n.jsx)(l.TextInput, {
                            name: h,
                            type: p,
                            value: i,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: r(o, {
                                [g.inputError]: null != s
                            }),
                            "aria-label": t,
                            onChange: f,
                            autoComplete: m,
                            autoFocus: _,
                            maxLength: b,
                            spellCheck: E,
                            id: I,
                            onFocus: N,
                            onBlur: v
                        }), null != x ? (0, n.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: g.description,
                            children: x
                        }) : null]
                    })
                },
                L = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r(g.block, t),
                        children: s
                    })
                },
                w = e => {
                    let {
                        className: t,
                        children: s,
                        isProminent: a
                    } = e;
                    return (0, n.jsx)(l.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: r(g.subText, t),
                        children: s
                    })
                },
                S = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)(u.default, {
                        direction: u.default.Direction.VERTICAL,
                        align: u.default.Align.CENTER,
                        className: t,
                        children: (0, n.jsx)(d.default, {
                            className: g.spinnerVideo
                        })
                    })
                },
                j = e => {
                    let t, {
                        online: s,
                        total: a,
                        className: i,
                        flat: o,
                        textClassName: c
                    } = e;
                    return null == a ? null : (null != s && s > 0 && (t = (0, n.jsxs)("div", {
                        className: r(g.pill, g.pillOnline, o && g.pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: g.pillIconOnline
                        }), (0, n.jsx)(l.Text, {
                            tag: "span",
                            className: r(g.pillMessage, c),
                            variant: "text-sm/normal",
                            children: b.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    })), (0, n.jsxs)(u.default, {
                        justify: u.default.Justify.CENTER,
                        className: i,
                        children: [t, (0, n.jsxs)("div", {
                            className: r(g.pill, o && g.pillFlat),
                            children: [(0, n.jsx)("i", {
                                className: g.pillIconTotal
                            }), (0, n.jsx)(l.Text, {
                                tag: "span",
                                className: r(g.pillMessage, c),
                                variant: "text-sm/normal",
                                children: b.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    }))
                },
                O = e => {
                    let {
                        user: t
                    } = e;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: g.joiningAs,
                        children: [(0, n.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: b.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(v, {
                            className: g.joiningAsAvatar,
                            src: t.getAvatarURL(void 0, 24),
                            size: l.AvatarSizes.SIZE_24,
                            "aria-label": t.username
                        }), (0, n.jsx)(l.Text, {
                            className: g.joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.username
                        })]
                    })
                },
                z = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsxs)(L, {
                        className: t,
                        children: [(0, n.jsx)(N, {
                            onClick: () => window.open((0, p.getCurrentPlatformDownloadURL)()),
                            children: b.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, p.getPlatformReadableName)()
                            })
                        }), (0, n.jsx)(w, {
                            className: g.downloadButtonSubtext,
                            children: b.default.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: f.default.getArticleURL(_.HelpdeskArticles.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            var D = e => {
                let {
                    className: t,
                    contentClassName: s,
                    tag: a = "section",
                    onSubmit: l,
                    children: i,
                    expanded: u = !1,
                    theme: o = _.ThemeTypes.DARK,
                    style: c
                } = e;
                return (0, n.jsxs)(a, {
                    "data-theme": o,
                    onSubmit: l,
                    style: c,
                    className: r(u ? g.authBoxExpanded : g.authBox, (0, m.getThemeClass)(o), t),
                    children: [(0, n.jsx)("div", {
                        className: g.discordLogo
                    }), (0, n.jsx)("div", {
                        className: r(g.centeringWrapper, s),
                        children: i
                    })]
                })
            }
        },
        637888: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var n, a, r = s("37983"),
                l = s("884691"),
                i = s("819855"),
                u = s("77078"),
                o = s("684581"),
                c = s("560528"),
                d = s("242777"),
                p = s("336406"),
                f = s("58608"),
                m = s("49111"),
                _ = s("838623"),
                b = s("844389"),
                g = s("392518"),
                E = s("414298"),
                h = s("815143"),
                x = s("134072");

            function T(e) {
                let {
                    movDark: t = d,
                    movLight: s = p,
                    mp4Dark: n = _,
                    mp4Light: a = E,
                    pngDark: l = b,
                    pngLight: i = h,
                    webmDark: u = g,
                    webmLight: o = x
                } = e, f = (0, c.getChromeVersion)(), T = [(0, r.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "mp4"), (0, r.jsx)("img", {
                    alt: "",
                    src: l
                }, "png")], N = [(0, r.jsx)("source", {
                    src: a,
                    type: "video/mp4"
                }, "mp4"), (0, r.jsx)("img", {
                    alt: "",
                    src: i
                }, "png")];
                return (f > 52 || -1 === f) && (T.unshift((0, r.jsx)("source", {
                    src: u,
                    type: "video/webm"
                }, "webm")), N.unshift((0, r.jsx)("source", {
                    src: o,
                    type: "video/webm"
                }, "webm"))), (0, c.supportsHEVCAlpha)() && (T.unshift((0, r.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), N.unshift((0, r.jsx)("source", {
                    src: s,
                    type: "video/mp4"
                }, "hevc"))), {
                    [m.ThemeTypes.DARK]: T,
                    [m.ThemeTypes.LIGHT]: N
                }
            }
            let N = null === (n = (a = o.default).getAppSpinnerSources) || void 0 === n ? void 0 : n.call(a),
                v = null != N ? T(N) : null,
                I = T({});
            var A = e => {
                var t;
                let {
                    loop: s = !0,
                    autoPlay: n = !0,
                    setRef: a,
                    className: o,
                    onReady: c
                } = e, {
                    theme: d
                } = (0, u.useThemeContext)(), {
                    reducedMotion: p
                } = l.useContext(u.AccessibilityPreferencesContext), _ = I;
                null != v && (_ = v);
                let b = (0, i.isThemeDark)(d) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT,
                    g = null !== (t = _[b]) && void 0 !== t ? t : _[m.ThemeTypes.DARK];
                return (0, r.jsx)(f.default, {
                    ref: a,
                    onLoadedData: c,
                    className: o,
                    loop: !p.enabled && s,
                    autoPlay: !p.enabled && n,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: g
                }, d)
            }
        }
    }
]);