            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r, a, l = n("37983"),
                s = n("884691"),
                o = n("414456"),
                u = n.n(o),
                i = n("597755"),
                c = n.n(i),
                d = n("394846"),
                f = n("171718"),
                m = n("446674"),
                p = n("77078"),
                g = n("774146"),
                v = n("161778"),
                h = n("271938"),
                x = n("697218"),
                O = n("476765"),
                D = n("599110"),
                L = n("98013"),
                A = n("49111"),
                S = n("782340"),
                N = n("777016");
            (a = r || (r = {}))[a.OSX = 0] = "OSX", a[a.WINDOWS = 1] = "WINDOWS", a[a.LINUX = 2] = "LINUX", a[a.IOS = 3] = "IOS", a[a.ANDROID = 4] = "ANDROID";
            let b = [{
                    getOs: () => S.default.Messages.PLATFORM_MACOS,
                    icon: N.apple,
                    url: () => (0, L.makeDesktopDownloadURL)("osx", !1),
                    platformKey: 0
                }, {
                    getOs: () => S.default.Messages.PLATFORM_WINDOWS,
                    icon: N.windows,
                    url: () => (0, L.makeDesktopDownloadURL)("win", !1),
                    platformKey: 1
                }, {
                    getOs: () => S.default.Messages.PLATFORM_LINUX,
                    icon: N.linux,
                    url: [{
                        url: () => (0, L.makeDesktopDownloadURL)("linux", !1, "deb"),
                        getText: () => S.default.Messages.DEB
                    }, {
                        url: () => (0, L.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
                        getText: () => S.default.Messages.TAR_GZ
                    }],
                    platformKey: 2
                }],
                R = [{
                    getOs: () => S.default.Messages.PLATFORM_IOS,
                    icon: N.ios,
                    url: () => A.DownloadLinks.IOS,
                    platformKey: 3
                }, {
                    getOs: () => S.default.Messages.PLATFORM_ANDROID,
                    icon: N.android,
                    url: () => A.DownloadLinks.ANDROID,
                    platformKey: 4
                }],
                M = e => {
                    let {
                        url: t,
                        text: n,
                        onClick: r
                    } = e;
                    return (0, l.jsx)(p.Anchor, {
                        useDefaultUnderlineStyles: !1,
                        href: t,
                        className: N.downloadButton,
                        onClick: r,
                        children: n
                    })
                },
                w = e => {
                    let t, {
                            platform: n,
                            onClick: r,
                            onMouseEnter: a,
                            isActive: s,
                            claimed: o,
                            theme: i
                        } = e,
                        {
                            getOs: c,
                            icon: d,
                            url: f,
                            platformKey: m
                        } = n,
                        g = c(),
                        v = u(N.icon, d, i);
                    if (Array.isArray(f)) t = f.map((e, t) => {
                        let n = o ? e.url() : "";
                        return (0, l.jsx)(M, {
                            url: n,
                            onClick: () => r(g),
                            text: e.getText()
                        }, "".concat(n, "-").concat(t))
                    });
                    else {
                        let e = o ? f() : void 0;
                        t = (0, l.jsx)(M, {
                            url: e,
                            onClick: () => r(g),
                            text: S.default.Messages.DOWNLOAD
                        })
                    }
                    return (0, l.jsx)("li", {
                        className: u(N.platform, {
                            [N.active]: s
                        }),
                        onMouseEnter: () => a(m),
                        children: (0, l.jsxs)("div", {
                            className: N.contentWrapper,
                            children: [(0, l.jsxs)("div", {
                                className: N.iconWrap,
                                children: [(0, l.jsx)("div", {
                                    className: v
                                }), (0, l.jsx)("div", {
                                    className: u(N.active, v)
                                })]
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(p.Heading, {
                                    className: N.platformName,
                                    variant: "heading-lg/semibold",
                                    children: g
                                }), (0, l.jsx)("div", {
                                    className: u(N.downloadButtons, {
                                        [N.list]: Array.isArray(t)
                                    }),
                                    children: t
                                })]
                            })]
                        })
                    })
                };

            function I(e) {
                let {
                    source: t,
                    onClose: n,
                    transitionState: r
                } = e, a = (0, m.useStateFromStores)([x.default], () => x.default.getCurrentUser()), o = (0, m.useStateFromStores)([v.default], () => v.default.theme), u = (0, m.useStateFromStores)([h.default], () => h.default.getFingerprint()), i = null == a || a.isClaimed(), [L, M] = s.useState(function() {
                    var e;
                    switch (null === (e = c.os) || void 0 === e ? void 0 : e.family) {
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

                function I(e) {
                    (null != f.default.getToken() || null != u) && D.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
                        platform: e,
                        ptb: !1,
                        released: !0,
                        has_e_mail: i,
                        referring_location: t,
                        qr_code: !1
                    }), !i && (n(), g.openClaimAccountModal())
                }

                function k(e) {
                    M(e)
                }
                s.useEffect(() => {
                    D.default.track(A.AnalyticEvents.OPEN_MODAL, {
                        type: "Download App",
                        source: {
                            location: t
                        }
                    })
                }, [t]);
                let y = (0, O.useUID)();
                return (0, l.jsx)(p.ModalRoot, {
                    className: N.downloadApps,
                    transitionState: r,
                    "aria-labelledby": y,
                    children: (0, l.jsx)("div", {
                        className: N.inner,
                        children: (0, l.jsxs)(p.HeadingLevel, {
                            component: (0, l.jsx)(p.HiddenVisually, {
                                children: (0, l.jsx)(p.H, {
                                    id: y,
                                    children: S.default.Messages.DOWNLOAD_APP
                                })
                            }),
                            children: [(0, l.jsx)(p.ModalCloseButton, {
                                onClick: n,
                                className: N.modalCloseButton
                            }), !d.isMobile && (0, l.jsx)("div", {
                                className: N.platformsWrap,
                                children: (0, l.jsx)(p.HeadingLevel, {
                                    component: (0, l.jsx)(p.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: N.header,
                                        children: S.default.Messages.DOWNLOAD_DESKTOP_TITLE
                                    }),
                                    children: (0, l.jsx)("ul", {
                                        className: N.platforms,
                                        children: b.map(e => (0, l.jsx)(w, {
                                            theme: o,
                                            isActive: L === e.platformKey,
                                            platform: e,
                                            onClick: I,
                                            onMouseEnter: k,
                                            claimed: i
                                        }, e.platformKey))
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: N.platformsWrap,
                                children: (0, l.jsxs)(p.HeadingLevel, {
                                    component: (0, l.jsx)(l.Fragment, {
                                        children: !d.isMobile && (0, l.jsx)(p.Heading, {
                                            variant: "heading-lg/semibold",
                                            className: N.header,
                                            children: S.default.Messages.DOWNLOAD_MOBILE_TITLE
                                        })
                                    }),
                                    children: [(0, l.jsx)("ul", {
                                        className: N.platforms,
                                        children: R.map(e => (0, l.jsx)(w, {
                                            theme: o,
                                            isActive: L === e.platformKey,
                                            platform: e,
                                            onClick: I,
                                            onMouseEnter: k,
                                            claimed: i
                                        }, e.platformKey))
                                    }), (0, l.jsx)(p.Text, {
                                        className: N.footer,
                                        variant: "text-sm/normal",
                                        children: S.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                    })]
                                })
                            })]
                        })
                    })
                })
            }