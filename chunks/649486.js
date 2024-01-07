            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var a, s, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("597755"),
                d = n.n(u),
                c = n("394846"),
                f = n("171718"),
                m = n("446674"),
                E = n("77078"),
                _ = n("774146"),
                h = n("161778"),
                p = n("271938"),
                I = n("697218"),
                T = n("476765"),
                g = n("599110"),
                C = n("98013"),
                S = n("49111"),
                A = n("782340"),
                N = n("777016");
            (s = a || (a = {}))[s.OSX = 0] = "OSX", s[s.WINDOWS = 1] = "WINDOWS", s[s.LINUX = 2] = "LINUX", s[s.IOS = 3] = "IOS", s[s.ANDROID = 4] = "ANDROID";
            let M = [{
                    getOs: () => A.default.Messages.PLATFORM_MACOS,
                    icon: N.apple,
                    url: () => (0, C.makeDesktopDownloadURL)("osx", !1),
                    platformKey: 0
                }, {
                    getOs: () => A.default.Messages.PLATFORM_WINDOWS,
                    icon: N.windows,
                    url: () => (0, C.makeDesktopDownloadURL)("win", !1),
                    platformKey: 1
                }, {
                    getOs: () => A.default.Messages.PLATFORM_LINUX,
                    icon: N.linux,
                    url: [{
                        url: () => (0, C.makeDesktopDownloadURL)("linux", !1, "deb"),
                        getText: () => A.default.Messages.DEB
                    }, {
                        url: () => (0, C.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
                        getText: () => A.default.Messages.TAR_GZ
                    }],
                    platformKey: 2
                }],
                v = [{
                    getOs: () => A.default.Messages.PLATFORM_IOS,
                    icon: N.ios,
                    url: () => S.DownloadLinks.IOS,
                    platformKey: 3
                }, {
                    getOs: () => A.default.Messages.PLATFORM_ANDROID,
                    icon: N.android,
                    url: () => S.DownloadLinks.ANDROID,
                    platformKey: 4
                }],
                x = e => {
                    let {
                        url: t,
                        text: n,
                        onClick: a
                    } = e;
                    return (0, l.jsx)(E.Anchor, {
                        useDefaultUnderlineStyles: !1,
                        href: t,
                        className: N.downloadButton,
                        onClick: a,
                        children: n
                    })
                },
                O = e => {
                    let t, {
                            platform: n,
                            onClick: a,
                            onMouseEnter: s,
                            isActive: i,
                            claimed: r,
                            theme: u
                        } = e,
                        {
                            getOs: d,
                            icon: c,
                            url: f,
                            platformKey: m
                        } = n,
                        _ = d(),
                        h = o(N.icon, c, u);
                    if (Array.isArray(f)) t = f.map((e, t) => {
                        let n = r ? e.url() : "";
                        return (0, l.jsx)(x, {
                            url: n,
                            onClick: () => a(_),
                            text: e.getText()
                        }, "".concat(n, "-").concat(t))
                    });
                    else {
                        let e = r ? f() : void 0;
                        t = (0, l.jsx)(x, {
                            url: e,
                            onClick: () => a(_),
                            text: A.default.Messages.DOWNLOAD
                        })
                    }
                    return (0, l.jsx)("li", {
                        className: o(N.platform, {
                            [N.active]: i
                        }),
                        onMouseEnter: () => s(m),
                        children: (0, l.jsxs)("div", {
                            className: N.contentWrapper,
                            children: [(0, l.jsxs)("div", {
                                className: N.iconWrap,
                                children: [(0, l.jsx)("div", {
                                    className: h
                                }), (0, l.jsx)("div", {
                                    className: o(N.active, h)
                                })]
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(E.Heading, {
                                    className: N.platformName,
                                    variant: "heading-lg/semibold",
                                    children: _
                                }), (0, l.jsx)("div", {
                                    className: o(N.downloadButtons, {
                                        [N.list]: Array.isArray(t)
                                    }),
                                    children: t
                                })]
                            })]
                        })
                    })
                };

            function L(e) {
                let {
                    source: t,
                    onClose: n,
                    transitionState: a
                } = e, s = (0, m.useStateFromStores)([I.default], () => I.default.getCurrentUser()), r = (0, m.useStateFromStores)([h.default], () => h.default.theme), o = (0, m.useStateFromStores)([p.default], () => p.default.getFingerprint()), u = null == s || s.isClaimed(), [C, x] = i.useState(function() {
                    var e;
                    switch (null === (e = d.os) || void 0 === e ? void 0 : e.family) {
                        case "OS X":
                            return 0;
                        case "Windows":
                            return 1;
                        case "Ubuntu":
                        case "Debian":
                        case "Fedora":
                        case "Red Hat":
                        case "SuSE":
                        case "Linux":
                            return 2;
                        case "iOS":
                            return 3;
                        case "Android":
                            return 4;
                        default:
                            return
                    }
                }());

                function L(e) {
                    (null != f.default.getToken() || null != o) && g.default.track(S.AnalyticEvents.DOWNLOAD_APP, {
                        platform: e,
                        ptb: !1,
                        released: !0,
                        has_e_mail: u,
                        referring_location: t,
                        qr_code: !1
                    }), !u && (n(), _.openClaimAccountModal())
                }

                function R(e) {
                    x(e)
                }
                i.useEffect(() => {
                    g.default.track(S.AnalyticEvents.OPEN_MODAL, {
                        type: "Download App",
                        source: {
                            location: t
                        }
                    })
                }, [t]);
                let y = (0, T.useUID)();
                return (0, l.jsx)(E.ModalRoot, {
                    className: N.downloadApps,
                    transitionState: a,
                    "aria-labelledby": y,
                    children: (0, l.jsx)("div", {
                        className: N.inner,
                        children: (0, l.jsxs)(E.HeadingLevel, {
                            component: (0, l.jsx)(E.HiddenVisually, {
                                children: (0, l.jsx)(E.H, {
                                    id: y,
                                    children: A.default.Messages.DOWNLOAD_APP
                                })
                            }),
                            children: [(0, l.jsx)(E.ModalCloseButton, {
                                onClick: n,
                                className: N.modalCloseButton
                            }), !c.isMobile && (0, l.jsx)("div", {
                                className: N.platformsWrap,
                                children: (0, l.jsx)(E.HeadingLevel, {
                                    component: (0, l.jsx)(E.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: N.header,
                                        children: A.default.Messages.DOWNLOAD_DESKTOP_TITLE
                                    }),
                                    children: (0, l.jsx)("ul", {
                                        className: N.platforms,
                                        children: M.map(e => (0, l.jsx)(O, {
                                            theme: r,
                                            isActive: C === e.platformKey,
                                            platform: e,
                                            onClick: L,
                                            onMouseEnter: R,
                                            claimed: u
                                        }, e.platformKey))
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: N.platformsWrap,
                                children: (0, l.jsxs)(E.HeadingLevel, {
                                    component: (0, l.jsx)(l.Fragment, {
                                        children: !c.isMobile && (0, l.jsx)(E.Heading, {
                                            variant: "heading-lg/semibold",
                                            className: N.header,
                                            children: A.default.Messages.DOWNLOAD_MOBILE_TITLE
                                        })
                                    }),
                                    children: [(0, l.jsx)("ul", {
                                        className: N.platforms,
                                        children: v.map(e => (0, l.jsx)(O, {
                                            theme: r,
                                            isActive: C === e.platformKey,
                                            platform: e,
                                            onClick: L,
                                            onMouseEnter: R,
                                            claimed: u
                                        }, e.platformKey))
                                    }), (0, l.jsx)(E.Text, {
                                        className: N.footer,
                                        variant: "text-sm/normal",
                                        children: A.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                    })]
                                })
                            })]
                        })
                    })
                })
            }