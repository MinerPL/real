(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25417"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return l.default
                }
            });
            var r = n("14716"),
                a = n("745510"),
                l = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");

            function a() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let a = {};

            function l(e) {
                let t = (0, r.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("48174");
            let l = [];

            function s(e, t) {
                let n = (0, r.useRef)(),
                    s = (0, r.useRef)(l);
                return s.current === l ? (n.current = e(), s.current = t) : !(0, a.default)(t, s.current) && (n.current = e(), s.current = t), n.current
            }
        },
        819074: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6ecd83d0dec80c3b73d.svg"
        },
        96154: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c6385e608fcdaec54ef4.svg"
        },
        976078: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b2bc10c8c9d44f0ff644.svg"
        },
        742203: function(e, t, n) {
            "use strict";
            e.exports = n.p + "838d4bac7b80d28fd676.svg"
        },
        381e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8cd255a58ce1af51e9ef.svg"
        },
        637816: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a2c736476ce092c94a5b.svg"
        },
        637099: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55067ac9356cb0674ad3.svg"
        },
        389902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dcb57f386a6bf90a27c9.svg"
        },
        321211: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bb0ba69615cae0dd25b7.svg"
        },
        786937: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ecc4859664616ed5ad9a.svg"
        },
        774146: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openNewUserAgeGateModal: function() {
                    return o
                },
                openClaimAccountModal: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("586391"),
                s = n("843455");

            function o(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("377531").then(n.bind(n, "377531"));
                    return t => (0, r.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: l.NEW_USER_AGE_GATE_MODAL_KEY,
                    onCloseRequest: s.NOOP,
                    onCloseCallback: e
                })
            }

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("633156").then(n.bind(n, "633156"));
                    return n => (0, r.jsx)(t, {
                        claimRequired: e,
                        ...n
                    })
                }, {
                    onCloseRequest: e ? s.NOOP : null,
                    onCloseCallback: t
                })
            }
        },
        649486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r, a, l = n("37983"),
                s = n("884691"),
                o = n("414456"),
                i = n.n(o),
                u = n("597755"),
                c = n.n(u),
                d = n("394846"),
                f = n("171718"),
                m = n("446674"),
                p = n("77078"),
                g = n("774146"),
                O = n("161778"),
                v = n("271938"),
                x = n("697218"),
                h = n("476765"),
                D = n("599110"),
                S = n("98013"),
                N = n("49111"),
                A = n("782340"),
                L = n("777016");
            (r = a || (a = {}))[r.OSX = 0] = "OSX", r[r.WINDOWS = 1] = "WINDOWS", r[r.LINUX = 2] = "LINUX", r[r.IOS = 3] = "IOS", r[r.ANDROID = 4] = "ANDROID";
            let R = [{
                    getOs: () => A.default.Messages.PLATFORM_MACOS,
                    icon: L.apple,
                    url: () => (0, S.makeDesktopDownloadURL)("osx", !1),
                    platformKey: a.OSX
                }, {
                    getOs: () => A.default.Messages.PLATFORM_WINDOWS,
                    icon: L.windows,
                    url: () => (0, S.makeDesktopDownloadURL)("win", !1),
                    platformKey: a.WINDOWS
                }, {
                    getOs: () => A.default.Messages.PLATFORM_LINUX,
                    icon: L.linux,
                    url: [{
                        url: () => (0, S.makeDesktopDownloadURL)("linux", !1, "deb"),
                        getText: () => A.default.Messages.DEB
                    }, {
                        url: () => (0, S.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
                        getText: () => A.default.Messages.TAR_GZ
                    }],
                    platformKey: a.LINUX
                }],
                b = [{
                    getOs: () => A.default.Messages.PLATFORM_IOS,
                    icon: L.ios,
                    url: () => N.DownloadLinks.IOS,
                    platformKey: a.IOS
                }, {
                    getOs: () => A.default.Messages.PLATFORM_ANDROID,
                    icon: L.android,
                    url: () => N.DownloadLinks.ANDROID,
                    platformKey: a.ANDROID
                }],
                I = e => {
                    let {
                        url: t,
                        text: n,
                        onClick: r
                    } = e;
                    return (0, l.jsx)(p.Anchor, {
                        useDefaultUnderlineStyles: !1,
                        href: t,
                        className: L.downloadButton,
                        onClick: r,
                        children: n
                    })
                },
                M = e => {
                    let t, {
                            platform: n,
                            onClick: r,
                            onMouseEnter: a,
                            isActive: s,
                            claimed: o,
                            theme: u
                        } = e,
                        {
                            getOs: c,
                            icon: d,
                            url: f,
                            platformKey: m
                        } = n,
                        g = c(),
                        O = i(L.icon, d, u);
                    if (Array.isArray(f)) t = f.map((e, t) => {
                        let n = o ? e.url() : "";
                        return (0, l.jsx)(I, {
                            url: n,
                            onClick: () => r(g),
                            text: e.getText()
                        }, "".concat(n, "-").concat(t))
                    });
                    else {
                        let e = o ? f() : void 0;
                        t = (0, l.jsx)(I, {
                            url: e,
                            onClick: () => r(g),
                            text: A.default.Messages.DOWNLOAD
                        })
                    }
                    return (0, l.jsx)("li", {
                        className: i(L.platform, {
                            [L.active]: s
                        }),
                        onMouseEnter: () => a(m),
                        children: (0, l.jsxs)("div", {
                            className: L.contentWrapper,
                            children: [(0, l.jsxs)("div", {
                                className: L.iconWrap,
                                children: [(0, l.jsx)("div", {
                                    className: O
                                }), (0, l.jsx)("div", {
                                    className: i(L.active, O)
                                })]
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(p.Heading, {
                                    className: L.platformName,
                                    variant: "heading-lg/semibold",
                                    children: g
                                }), (0, l.jsx)("div", {
                                    className: i(L.downloadButtons, {
                                        [L.list]: Array.isArray(t)
                                    }),
                                    children: t
                                })]
                            })]
                        })
                    })
                };

            function w(e) {
                let {
                    source: t,
                    onClose: n,
                    transitionState: r
                } = e, o = (0, m.useStateFromStores)([x.default], () => x.default.getCurrentUser()), i = (0, m.useStateFromStores)([O.default], () => O.default.theme), u = (0, m.useStateFromStores)([v.default], () => v.default.getFingerprint()), S = null == o || o.isClaimed(), [I, w] = s.useState(function() {
                    var e;
                    switch (null === (e = c.os) || void 0 === e ? void 0 : e.family) {
                        case "OS X":
                            return a.OSX;
                        case "Windows":
                            return a.WINDOWS;
                        case "Ubuntu":
                        case "Debian":
                        case "Fedora":
                        case "Red Hat":
                        case "SuSE":
                        case "Linux":
                            return a.LINUX;
                        case "iOS":
                            return a.IOS;
                        case "Android":
                            return a.ANDROID;
                        default:
                            return
                    }
                }());

                function k(e) {
                    (null != f.default.getToken() || null != u) && D.default.track(N.AnalyticEvents.DOWNLOAD_APP, {
                        platform: e,
                        ptb: !1,
                        released: !0,
                        has_e_mail: S,
                        referring_location: t,
                        qr_code: !1
                    }), !S && (n(), g.openClaimAccountModal())
                }

                function j(e) {
                    w(e)
                }
                s.useEffect(() => {
                    D.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: "Download App",
                        source: {
                            location: t
                        }
                    })
                }, [t]);
                let y = (0, h.useUID)();
                return (0, l.jsx)(p.ModalRoot, {
                    className: L.downloadApps,
                    transitionState: r,
                    "aria-labelledby": y,
                    children: (0, l.jsx)("div", {
                        className: L.inner,
                        children: (0, l.jsxs)(p.HeadingLevel, {
                            component: (0, l.jsx)(p.HiddenVisually, {
                                children: (0, l.jsx)(p.H, {
                                    id: y,
                                    children: A.default.Messages.DOWNLOAD_APP
                                })
                            }),
                            children: [(0, l.jsx)(p.ModalCloseButton, {
                                onClick: n,
                                className: L.modalCloseButton
                            }), !d.isMobile && (0, l.jsx)("div", {
                                className: L.platformsWrap,
                                children: (0, l.jsx)(p.HeadingLevel, {
                                    component: (0, l.jsx)(p.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: L.header,
                                        children: A.default.Messages.DOWNLOAD_DESKTOP_TITLE
                                    }),
                                    children: (0, l.jsx)("ul", {
                                        className: L.platforms,
                                        children: R.map(e => (0, l.jsx)(M, {
                                            theme: i,
                                            isActive: I === e.platformKey,
                                            platform: e,
                                            onClick: k,
                                            onMouseEnter: j,
                                            claimed: S
                                        }, e.platformKey))
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: L.platformsWrap,
                                children: (0, l.jsxs)(p.HeadingLevel, {
                                    component: (0, l.jsx)(l.Fragment, {
                                        children: !d.isMobile && (0, l.jsx)(p.Heading, {
                                            variant: "heading-lg/semibold",
                                            className: L.header,
                                            children: A.default.Messages.DOWNLOAD_MOBILE_TITLE
                                        })
                                    }),
                                    children: [(0, l.jsx)("ul", {
                                        className: L.platforms,
                                        children: b.map(e => (0, l.jsx)(M, {
                                            theme: i,
                                            isActive: I === e.platformKey,
                                            platform: e,
                                            onClick: k,
                                            onMouseEnter: j,
                                            claimed: S
                                        }, e.platformKey))
                                    }), (0, l.jsx)(p.Text, {
                                        className: L.footer,
                                        variant: "text-sm/normal",
                                        children: A.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return d
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return m
                }
            });
            var r = n("597755"),
                a = n.n(r),
                l = n("815157"),
                s = n("271938"),
                o = n("49111");
            let i = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = null != n ? "&format=".concat(n) : "";
                return "".concat(o.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(r)
            }

            function c() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? i : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function d(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [i]: "Linux"
                })[c(e)]
            }

            function f() {
                let e = c(),
                    t = e === i ? "tar.gz" : null;
                return u(e, !1, t)
            }

            function m(e, t, n) {
                let r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: s.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: s.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        815157: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateAttemptId: function() {
                    return i
                },
                parseDynamicLink: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var r = n("383536"),
                a = n.n(r),
                l = n("748820"),
                s = n("530334");
            let o = "https://discordapp.page.link";

            function i() {
                return (0, l.v4)()
            }

            function u(e) {
                if (!e.startsWith(o)) return null;
                try {
                    var t;
                    let n = new URL(e),
                        r = n.searchParams,
                        a = r.get("link");
                    if (null == a) return null;
                    let l = decodeURIComponent(a),
                        s = new URL(l).searchParams,
                        o = {
                            utmSource: null !== (t = r.get("utm_source")) && void 0 !== t ? t : void 0
                        };
                    for (let [e, t] of s.entries()) o[e] = t;
                    return o
                } catch {
                    return null
                }
            }

            function c(e, t) {
                let {
                    utmSource: n,
                    androidFallbackLink: r,
                    iosFallbackLink: l,
                    ...i
                } = t, u = new URL(e);
                for (let e in i) {
                    let t = i[e];
                    null != t && u.searchParams.set(e, t)
                }
                let c = encodeURIComponent(u.toString()),
                    d = encodeURIComponent((0, s.default)()),
                    f = ! function() {
                        var e, t;
                        let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                            r = (null == a ? void 0 : null === (e = a.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                            l = (null == a ? void 0 : a.name) === "Safari" && !r;
                        return (null == a ? void 0 : null === (t = a.os) || void 0 === t ? void 0 : t.family) !== "iOS" || l
                    }() ? 0 : 1,
                    m = null != r ? encodeURIComponent(r) : null,
                    p = null != l ? encodeURIComponent(l) : null,
                    g = "".concat(o, "/?link=").concat(c, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(d, "&efr=").concat(f);
                return null != m && (g += "&afl=".concat(m)), null != p && (g += "&ifl=".concat(p)), g
            }
        },
        530334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            let r = () => "";
            var a = r = n("466237").default
        },
        466237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("792788");

            function a() {
                return r.default.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);