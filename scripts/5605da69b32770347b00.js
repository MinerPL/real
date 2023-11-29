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
                l = s("742270"),
                r = s("815157"),
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
                        n = (0, r.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, u.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, r.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: n
                    })
                }
                return "discord://"
            }
            async function b(e) {
                let t = await _(e),
                    s = (0, r.parseDynamicLink)(t);
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
                    return u
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
            var u = i
        },
        970366: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                trackAppUIViewed: function() {
                    return u
                }
            }), s("222007");
            var n = s("748820"),
                a = s("49671"),
                l = s("599110"),
                r = s("49111");
            let i = new class e {
                trackEvent(e, t) {
                    let s = Date.now();
                    requestIdleCallback(() => {
                        l.default.track(e, {
                            ... function() {
                                var e, t, s;
                                let n = "--campaign-id=",
                                    l = null !== (s = null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s ? s : [];
                                for (let e of l)
                                    if (e.startsWith(n)) return {
                                        referrer: e.substr(n.length)
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
                                        l = s.transferSize;
                                    null != a && null != n && (e = !0, t.total_compressed_byte_size += n, t.total_uncompressed_byte_size += a, null != l && (t.total_uncompressed_byte_size += l), "resource" === s.entryType && ("script" === s.initiatorType && null != s.name && null != s.name.match(/\.js/) && (t.js_compressed_byte_size += n, t.js_uncompressed_byte_size += a, null != l && (t.js_uncompressed_byte_size += l)), "link" === s.initiatorType && null != s.name && null != s.name.match(/\.css/) && (t.css_compressed_byte_size += n, t.css_uncompressed_byte_size += a, null != l && (t.css_uncompressed_byte_size += l))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: s - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(r.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
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
                l = s("913144"),
                r = s("49111");
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
                    return r.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
                }
                get fallbackRoute() {
                    return r.Routes.ME
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
            var d = new c(l.default, {
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
                    return Image
                },
                Button: function() {
                    return T
                },
                Avatar: function() {
                    return N
                },
                GuildIcon: function() {
                    return v
                },
                ChannelIcon: function() {
                    return I
                },
                Input: function() {
                    return A
                },
                Block: function() {
                    return y
                },
                SubText: function() {
                    return L
                },
                AuthSpinner: function() {
                    return w
                },
                ActivityCount: function() {
                    return S
                },
                JoiningAs: function() {
                    return j
                },
                IncompatibleBrowser: function() {
                    return O
                },
                default: function() {
                    return z
                }
            }), s("834022");
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                i = s("843962"),
                u = s("145131"),
                o = s("476263"),
                c = s("476765"),
                d = s("637888"),
                p = s("98013"),
                f = s("701909"),
                m = s("439932"),
                _ = s("49111"),
                b = s("782340"),
                g = s("79902");
            let E = r.Avatar;
            null == E && (E = () => null);
            let h = e => {
                    let {
                        className: t,
                        id: s,
                        children: a
                    } = e;
                    return (0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: l(g.title, t),
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
                Image = e => {
                    let {
                        className: t,
                        src: s
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: s,
                        className: l(g.image, t)
                    })
                },
                T = e => {
                    let {
                        className: t,
                        ...s
                    } = e, a = s.look === r.Button.Looks.LINK;
                    return (0, n.jsx)(r.Button, {
                        size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
                        fullWidth: !a,
                        className: l(t, {
                            [g.button]: !a,
                            [g.linkButton]: a
                        }),
                        ...s
                    })
                };
            T.Looks = r.Button.Looks, T.Colors = r.Button.Colors, T.Sizes = r.Button.Sizes;
            let N = e => {
                    let {
                        className: t,
                        src: s,
                        size: a
                    } = e;
                    return (0, n.jsx)(E, {
                        src: s,
                        size: a,
                        className: l(g.inviteLargeIcon, t),
                        "aria-hidden": !0
                    })
                },
                v = e => {
                    let {
                        guild: t,
                        size: s,
                        animate: a = !1,
                        className: l
                    } = e;
                    return (0, n.jsx)(o.default, {
                        active: !0,
                        guild: t,
                        size: s,
                        animate: a,
                        className: l
                    })
                };
            v.Sizes = o.default.Sizes;
            let I = e => {
                let {
                    className: t,
                    channel: s,
                    size: a
                } = e;
                return (0, n.jsx)(E, {
                    src: (0, i.getChannelIconURL)(s),
                    size: a,
                    className: l(g.inviteIcon, t),
                    "aria-hidden": !0
                })
            };
            I.Sizes = r.AvatarSizes;
            let A = e => {
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
                    return (0, n.jsxs)(r.FormItem, {
                        title: t,
                        error: s,
                        className: u,
                        required: T,
                        tag: "label",
                        htmlFor: I,
                        children: [(0, n.jsx)(r.TextInput, {
                            name: h,
                            type: p,
                            value: i,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: l(o, {
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
                        }), null != x ? (0, n.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: g.description,
                            children: x
                        }) : null]
                    })
                },
                y = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: l(g.block, t),
                        children: s
                    })
                },
                L = e => {
                    let {
                        className: t,
                        children: s,
                        isProminent: a
                    } = e;
                    return (0, n.jsx)(r.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: l(g.subText, t),
                        children: s
                    })
                },
                w = e => {
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
                S = e => {
                    let t, {
                        online: s,
                        total: a,
                        className: i,
                        flat: o,
                        textClassName: c
                    } = e;
                    return null == a ? null : (null != s && s > 0 && (t = (0, n.jsxs)("div", {
                        className: l(g.pill, g.pillOnline, o && g.pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: g.pillIconOnline
                        }), (0, n.jsx)(r.Text, {
                            tag: "span",
                            className: l(g.pillMessage, c),
                            variant: "text-sm/normal",
                            children: b.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    })), (0, n.jsxs)(u.default, {
                        justify: u.default.Justify.CENTER,
                        className: i,
                        children: [t, (0, n.jsxs)("div", {
                            className: l(g.pill, o && g.pillFlat),
                            children: [(0, n.jsx)("i", {
                                className: g.pillIconTotal
                            }), (0, n.jsx)(r.Text, {
                                tag: "span",
                                className: l(g.pillMessage, c),
                                variant: "text-sm/normal",
                                children: b.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    }))
                },
                j = e => {
                    let {
                        user: t
                    } = e;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: g.joiningAs,
                        children: [(0, n.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: b.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(N, {
                            className: g.joiningAsAvatar,
                            src: t.getAvatarURL(void 0, 24),
                            size: r.AvatarSizes.SIZE_24,
                            "aria-label": t.username
                        }), (0, n.jsx)(r.Text, {
                            className: g.joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.username
                        })]
                    })
                },
                O = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsxs)(y, {
                        className: t,
                        children: [(0, n.jsx)(T, {
                            onClick: () => window.open((0, p.getCurrentPlatformDownloadURL)()),
                            children: b.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, p.getPlatformReadableName)()
                            })
                        }), (0, n.jsx)(L, {
                            className: g.downloadButtonSubtext,
                            children: b.default.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: f.default.getArticleURL(_.HelpdeskArticles.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            var z = e => {
                let {
                    className: t,
                    contentClassName: s,
                    tag: a = "section",
                    onSubmit: r,
                    children: i,
                    expanded: u = !1,
                    theme: o = _.ThemeTypes.DARK,
                    style: c
                } = e;
                return (0, n.jsxs)(a, {
                    "data-theme": o,
                    onSubmit: r,
                    style: c,
                    className: l(u ? g.authBoxExpanded : g.authBox, (0, m.getThemeClass)(o), t),
                    children: [(0, n.jsx)("div", {
                        className: g.discordLogo
                    }), (0, n.jsx)("div", {
                        className: l(g.centeringWrapper, s),
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
            }), s("843762");
            var n, a = s("37983"),
                l = s("884691"),
                r = s("819855"),
                i = s("77078"),
                u = s("684581"),
                o = s("560528"),
                c = s("242777"),
                d = s("336406"),
                p = s("58608"),
                f = s("49111"),
                m = s("838623"),
                _ = s("844389"),
                b = s("392518"),
                g = s("414298"),
                E = s("815143"),
                h = s("134072");

            function x(e) {
                let {
                    movDark: t = c,
                    movLight: s = d,
                    mp4Dark: n = m,
                    mp4Light: l = g,
                    pngDark: r = _,
                    pngLight: i = E,
                    webmDark: u = b,
                    webmLight: p = h
                } = e, x = (0, o.getChromeVersion)(), T = [(0, a.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: r
                }, "png")], N = [(0, a.jsx)("source", {
                    src: l,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: i
                }, "png")];
                return (x > 52 || -1 === x) && (T.unshift((0, a.jsx)("source", {
                    src: u,
                    type: "video/webm"
                }, "webm")), N.unshift((0, a.jsx)("source", {
                    src: p,
                    type: "video/webm"
                }, "webm"))), (0, o.supportsHEVCAlpha)() && (T.unshift((0, a.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), N.unshift((0, a.jsx)("source", {
                    src: s,
                    type: "video/mp4"
                }, "hevc"))), {
                    [f.ThemeTypes.DARK]: T,
                    [f.ThemeTypes.LIGHT]: N
                }
            }
            let T = null === (n = u.default.getAppSpinnerSources) || void 0 === n ? void 0 : n.call(u.default),
                N = null != T ? x(T) : null,
                v = x({});
            var I = e => {
                var t;
                let {
                    loop: s = !0,
                    autoPlay: n = !0,
                    setRef: u,
                    className: o,
                    onReady: c
                } = e, {
                    theme: d
                } = (0, i.useThemeContext)(), {
                    reducedMotion: m
                } = l.useContext(i.AccessibilityPreferencesContext), _ = v;
                null != N && (_ = N);
                let b = (0, r.isThemeDark)(d) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
                    g = null !== (t = _[b]) && void 0 !== t ? t : _[f.ThemeTypes.DARK];
                return (0, a.jsx)(p.default, {
                    ref: u,
                    onLoadedData: c,
                    className: o,
                    loop: !m.enabled && s,
                    autoPlay: !m.enabled && n,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: g
                }, d)
            }
        }
    }
]);