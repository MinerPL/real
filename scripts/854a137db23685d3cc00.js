(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56096"], {
        745249: function(e, t, n) {
            var l = {
                "./2017-11-16.mp4": "720564",
                "./2019-12-17.mp4": "27510",
                "./channel-following.png": "595687",
                "./discovery.jpg": "26022",
                "./discriminator.mp4": "294795",
                "./g250k-cl.mp4": "968428",
                "./header.mp4": "243705",
                "./hypesquad-hack-week/header.png": "585113",
                "./hypesquad-hack-week/paladins-loot.png": "486667",
                "./ko-new-year.jpg": "811755",
                "./league-rp-cl.mp4": "533299",
                "./polish-week.png": "877016",
                "./special-template/desktop-cta.png": "772882",
                "./special-template/update-badge.svg": "659148",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_BlogHdr_2500x1000.png": "622690",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Left_180x220.png": "303679",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Right_180x220.png": "203661",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_Changelog_658X220.png": "927032",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_FooterCTA_238x220.png": "291544",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_MobileHero_375x190.png": "245490",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Mobile_FooterCTA_343x78.png": "322717",
                "./store.jpg": "938368"
            };

            function a(e) {
                return n(s(e))
            }

            function s(e) {
                if (!n.o(l, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return l[e]
            }
            a.id = '"745249"', a.keys = function() {
                return Object.keys(l)
            }, a.resolve = s, e.exports = a
        },
        720564: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca5a948d164f6ce225e5.mp4"
        },
        27510: function(e, t, n) {
            "use strict";
            e.exports = n.p + "918d75cfaf2f93685736.mp4"
        },
        595687: function(e, t, n) {
            "use strict";
            e.exports = n.p + "04166adfcb72e52bc295.png"
        },
        26022: function(e, t, n) {
            "use strict";
            e.exports = n.p + "cbfdbaf12547f2bc088d.jpg"
        },
        294795: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21b75d6e855402010caa.mp4"
        },
        968428: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6e26350a0e5a42564d84.mp4"
        },
        243705: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0c76c0ebcd143998b078.mp4"
        },
        585113: function(e, t, n) {
            "use strict";
            e.exports = n.p + "768e2db24b4be4cb5ada.png"
        },
        486667: function(e, t, n) {
            "use strict";
            e.exports = n.p + "eb675889271dd2dbc33b.png"
        },
        811755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b52d70718517aa0a80c5.jpg"
        },
        533299: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4f95bd8264236dafad87.mp4"
        },
        877016: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5283f308298742b4d40.png"
        },
        772882: function(e, t, n) {
            "use strict";
            e.exports = n.p + "79d88077390653508caa.png"
        },
        659148: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5c1996c0fa63a89f5182.svg"
        },
        622690: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b7074384432f11736b79.png"
        },
        303679: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6485daa6cdedfe5d8396.png"
        },
        203661: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3c1c9f559e95cbdbb7c9.png"
        },
        927032: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51c7fb00c7456a3c9c8b.png"
        },
        291544: function(e, t, n) {
            "use strict";
            e.exports = n.p + "92570c182c371886ade1.png"
        },
        245490: function(e, t, n) {
            "use strict";
            e.exports = n.p + "96a5f689acd225738eca.png"
        },
        322717: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14f41fc98f7994dad265.png"
        },
        938368: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3a2f3db8ffc94f41ad04.jpg"
        },
        170935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("717811"),
                o = n("114535"),
                i = n("599110"),
                c = n("562897"),
                u = n("49111"),
                d = n("234222"),
                h = n("782340"),
                p = n("287794");
            class f extends a.PureComponent {
                componentDidMount() {
                    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
                }
                componentWillUnmount() {
                    this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED)
                }
                render() {
                    return (0, l.jsx)(c.default, {
                        ...this.props,
                        onClose: this.close,
                        onScroll: this.handleScroll,
                        track: this.track
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.maxScrolledPercentage = 0, this.mountedAt = 0, this.close = () => {
                        (0, s.closeModal)(d.CHANGELOG_MODAL_KEY)
                    }, this.handleScroll = e => {
                        let {
                            offsetHeight: t,
                            scrollHeight: n,
                            scrollTop: l
                        } = e.getScrollerState();
                        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, l / (n - t)), 1)
                    }, this.track = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            {
                                changeLog: a
                            } = t.props,
                            {
                                date: s,
                                revision: r
                            } = a,
                            o = {
                                change_log_id: "".concat(s, ":").concat(r),
                                ...n
                            };
                        !l && (o = {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                            ...o
                        }), i.default.track(e, o)
                    }
                }
            }

            function g(e) {
                let {
                    changelog: t,
                    loaded: n,
                    clientTooOld: i
                } = (0, o.useCurrentChangelog)();
                if (a.useEffect(() => {
                        if (n && null != t) return () => r.default.markChangelogAsSeen(t.id, t.date)
                    }, [n, t]), i) return (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Heading, {
                            variant: "heading-lg/medium",
                            children: h.default.Messages.CHANGE_LOG_CLIENT_OLD
                        })
                    })
                });
                if (null == t) return n ? (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: h.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
                        })
                    })
                }) : (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Spinner, {
                            type: s.Spinner.Type.WANDERING_CUBES
                        })
                    })
                });
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)(f, {
                        changeLog: t
                    })
                })
            }
        },
        562897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("866227"),
                i = n.n(o),
                c = n("77078"),
                u = n("15649"),
                d = n("367376"),
                h = n("933629"),
                p = n("560176"),
                f = n("145131"),
                g = n("762740"),
                C = n("369952"),
                m = n("15435"),
                x = n("58608"),
                _ = n("142367"),
                v = n("49111"),
                k = n("782340"),
                L = n("722097"),
                E = n("9461");
            let R = d.default.reactParserFor(_.default.getDefaultRules(L)),
                M = {};
            class A extends a.PureComponent {
                track(e, t, n) {
                    this.props.track(e, t, n)
                }
                renderFooter() {
                    return (0, l.jsxs)("div", {
                        className: L.footer,
                        children: [(0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.TWITTER,
                            className: L.socialLink,
                            href: (0, u.default)(v.LocalizedLinks.TWITTER),
                            target: "blank",
                            children: (0, l.jsx)(m.default, {})
                        }), (0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.FACEBOOK,
                            className: L.socialLink,
                            href: v.SOCIAL_LINKS.FACEBOOK_URL,
                            target: "blank",
                            children: (0, l.jsx)(g.default, {})
                        }), (0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.INSTAGRAM,
                            className: L.socialLink,
                            href: v.SOCIAL_LINKS.INSTAGRAM_URL,
                            target: "blank",
                            children: (0, l.jsx)(C.default, {})
                        }), (0, l.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: k.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
                        })]
                    })
                }
                renderVideo() {
                    let {
                        changeLog: e
                    } = this.props, t = e.youtube_video_id, a = e.video, s = e.image;
                    if (null != t && "" !== t) return (0, l.jsx)(p.EmbedVideo, {
                        className: r(L.video),
                        allowFullScreen: !1,
                        href: "https://youtu.be/".concat(t),
                        thumbnail: {
                            url: "https://i.ytimg.com/vi/".concat(t, "/maxresdefault.jpg"),
                            width: 451,
                            height: 254
                        },
                        video: {
                            url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
                            width: 451,
                            height: 254
                        },
                        maxWidth: 451,
                        maxHeight: 254,
                        renderVideoComponent: h.renderVideoComponent,
                        renderImageComponent: h.renderImageComponent,
                        renderLinkComponent: h.renderMaskedLinkComponent,
                        onPlay: () => {
                            this.track(v.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                        }
                    });
                    if (null != a && "" !== a) {
                        let e = a.startsWith("https://") ? a : n("745249")("../../images/change-log/".concat(a).replace("../../images/change-log/", "./"));
                        return (0, l.jsx)(x.default, {
                            src: e,
                            poster: s,
                            width: 451,
                            height: 254,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            className: L.video,
                            onPlay: () => {
                                this.track(v.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                            }
                        })
                    }
                    if (null == s || "" === s) return null;
                    else {
                        let e = s.startsWith("https://") ? s : n("745249")("../../images/change-log/".concat(s).replace("../../images/change-log/", "./"));
                        return (0, l.jsx)("img", {
                            className: L.image,
                            alt: "",
                            src: e,
                            width: 451,
                            height: 254
                        })
                    }
                }
                render() {
                    let {
                        changeLog: e
                    } = this.props;
                    return (0, l.jsxs)(c.ModalRoot, {
                        transitionState: c.ModalTransitionState.ENTERED,
                        className: E.modal,
                        children: [(0, l.jsxs)(c.ModalHeader, {
                            align: f.default.Justify.BETWEEN,
                            separator: !1,
                            children: [this.renderHeader(), (0, l.jsx)(f.default.Child, {
                                grow: 0,
                                children: (0, l.jsx)(c.ModalCloseButton, {
                                    onClick: this.props.onClose
                                })
                            })]
                        }), (0, l.jsx)(c.ModalContent, {
                            className: r(E.content, L.container, {}),
                            scrollerRef: this.scrollerRef,
                            onScroll: this.handleScroll,
                            children: (0, l.jsxs)("div", {
                                tabIndex: 0,
                                role: "region",
                                "aria-label": k.default.Messages.CHANGELOG_CONTENT_LABEL,
                                children: [this.renderVideo(), R(e.body, !1, {
                                    changeLog: this,
                                    interpolations: M,
                                    onLinkClick: this.trackLinkClick
                                })]
                            })
                        }), (0, l.jsx)(c.ModalFooter, {
                            direction: f.default.Direction.HORIZONTAL,
                            children: this.renderFooter()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null != e) {
                            var t, n;
                            null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
                        }
                    }, this.trackLinkClick = e => {
                        this.props.track(v.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "inline_link",
                            target: e
                        }, !1)
                    }, this.renderHeader = () => {
                        let {
                            changeLog: e
                        } = this.props;
                        return (0, l.jsxs)(f.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, l.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                children: k.default.Messages.WHATS_NEW
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: L.date,
                                children: k.default.Messages.WHATS_NEW_DATE.format({
                                    date: null != e.date && "" !== e.date ? i(e.date).toDate() : new Date
                                })
                            })]
                        })
                    }
                }
            }
            var N = A
        },
        491589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FacebookIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 5.49 4.023 10.041 9.281 10.866V15.18H7.488V12h2.793V9.577c0-2.757 1.643-4.28 4.155-4.28 1.204 0 2.462.215 2.462.215v2.707h-1.387c-1.366 0-1.792.848-1.792 1.718V12h3.05l-.487 3.18h-2.563v7.686C18.977 22.041 23 17.491 23 12Z",
                        className: o
                    })
                })
            }
        },
        887560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstagramIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M7.956 4.068h-.003c-.876.041-1.383.174-1.789.333l-.005.002a2.9 2.9 0 0 0-1.079.705c-.345.347-.54.664-.701 1.081-.158.41-.289.919-.328 1.796-.044 1.018-.055 1.324-.05 4.03.005 2.707.017 3.01.067 4.03v.002c.042.876.174 1.384.333 1.79l.002.003c.162.417.358.734.705 1.08a2.9 2.9 0 0 0 1.082.7l.001.001c.41.158.92.29 1.794.328 1.019.044 1.326.055 4.03.05 2.706-.005 3.012-.017 4.033-.066 1.281-.06 2.235-.4 2.871-1.04.638-.64.974-1.595 1.03-2.876.044-1.022.055-1.327.05-4.032-.005-2.706-.017-3.01-.066-4.031-.06-1.282-.4-2.236-1.04-2.875-.638-.636-1.594-.972-2.876-1.027-1.02-.044-1.328-.056-4.032-.05-2.707.004-3.01.016-4.03.066ZM7.858 2.07c-1.064.05-1.79.22-2.425.47-.658.256-1.215.6-1.77 1.156a4.899 4.899 0 0 0-1.15 1.772c-.246.637-.413 1.364-.46 2.429-.047 1.064-.057 1.407-.052 4.122.005 2.716.017 3.056.069 4.123.05 1.064.22 1.79.47 2.426.256.657.6 1.214 1.156 1.769a4.894 4.894 0 0 0 1.774 1.15c.636.245 1.363.413 2.428.46 1.064.046 1.407.057 4.122.052 2.715-.005 3.056-.017 4.123-.068 1.552-.074 3.073-.5 4.194-1.626 1.121-1.127 1.542-2.647 1.61-4.2.046-1.068.057-1.409.052-4.124-.005-2.715-.018-3.056-.068-4.122-.074-1.554-.5-3.072-1.626-4.196-1.125-1.122-2.648-1.542-4.201-1.61-1.065-.045-1.407-.057-4.123-.052-2.716.005-3.056.017-4.123.069ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm10.25-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        850830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwitterIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M20.748 7.512c.013.194.013.388.013.584 0 5.964-4.54 12.842-12.843 12.842v-.003A12.777 12.777 0 0 1 1 18.91a9.064 9.064 0 0 0 6.68-1.87 4.52 4.52 0 0 1-4.217-3.135 4.5 4.5 0 0 0 2.038-.078 4.514 4.514 0 0 1-3.62-4.424v-.057c.627.35 1.329.543 2.048.565a4.52 4.52 0 0 1-1.397-6.027 12.81 12.81 0 0 0 9.302 4.716 4.519 4.519 0 0 1 7.692-4.117c1.01-.2 1.98-.57 2.866-1.096a4.53 4.53 0 0 1-1.984 2.497A8.975 8.975 0 0 0 23 5.174a9.17 9.17 0 0 1-2.252 2.338Z",
                        className: o
                    })
                })
            }
        },
        114535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentChangelog: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("717811"),
                r = n("915639"),
                o = n("34966"),
                i = n("234222");

            function c(e, t) {
                let {
                    changelog: n,
                    loadState: r,
                    defaultChangelog: c,
                    defaultLoadState: u
                } = (0, a.useStateFromStoresObject)([o.default], () => {
                    let n = null != e ? o.default.getChangelog(e, t) : null,
                        l = null != e ? o.default.getChangelog(e, "en-US") : null,
                        a = null != e && o.default.getChangelogLoadStatus(e, "en-US"),
                        s = null != e && o.default.getChangelogLoadStatus(e, t);
                    return {
                        changelog: n,
                        loadState: s,
                        defaultChangelog: l,
                        defaultLoadState: a
                    }
                }, [e, t]);
                return (l.useEffect(() => {
                    null != e && null == n && r === i.ChangelogLoadState.NOT_LOADED && s.default.fetchChangelog(e, t)
                }, [e, n, r, t]), null == e) ? {
                    id: e,
                    changelog: null,
                    loaded: !1
                } : null == n && r === i.ChangelogLoadState.LOADED_FAILURE ? {
                    id: e,
                    changelog: c,
                    loaded: u !== i.ChangelogLoadState.NOT_LOADED
                } : {
                    id: e,
                    changelog: n,
                    loaded: r !== i.ChangelogLoadState.NOT_LOADED
                }
            }

            function u() {
                let e = (0, a.default)([r.default], () => r.default.locale),
                    t = (0, a.default)([o.default], () => o.default.latestChangelogId()),
                    n = (0, a.default)([o.default], () => o.default.getConfig()),
                    l = null != n && 0 === Object.keys(n).length,
                    s = null != n && Object.keys(n).length > 0 && null == t,
                    i = (0, a.default)([o.default], () => o.default.overrideId()),
                    {
                        changelog: u,
                        loaded: d
                    } = c(t, e),
                    {
                        changelog: h,
                        loaded: p
                    } = c(i, e);
                return null == i || null == h && p ? {
                    id: t,
                    changelog: u,
                    loaded: !!l || d,
                    clientTooOld: s
                } : {
                    id: i,
                    changelog: h,
                    loaded: p,
                    clientTooOld: !1
                }
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                s = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, a.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(s.ConfettiCannonContext), t = (0, a.default)([r.default], () => r.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = l.useMemo(() => ({
                    fire: (l, a, s) => {
                        var r, o;
                        let i = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            c = n(i);
                        e(l, a, c, (null !== (r = null == s ? void 0 : s.count) && void 0 !== r ? r : i.confettiCount) * (null !== (o = null == s ? void 0 : s.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        762740: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("491589"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M0,1.99406028 C0,0.892771196 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.894513756 16,1.99406028 L16,14.0059397 C16,15.1072288 15.1054862,16 14.0059397,16 L1.99406028,16 C0.892771196,16 0,15.1054862 0,14.0059397 L0,1.99406028 Z M8.23182341,16 L10.3991764,16 L10.3991764,9.93141161 L12.5663127,9.93141161 L13,7.76405862 L10.3991764,7.76405862 L10.3246195,6.3468265 C10.3246195,5.66107601 10.5049432,5.17342158 11.4698488,5.17342158 L12.974642,5.17385505 L12.974642,3.12202197 C12.7618079,3.09319618 12.3142495,3 11.4644304,3 C9.69001851,3 8.18500859,4.20353112 8.18500859,6.23043964 L8.23182341,7.76405862 L6.06425368,7.76405862 L6.06425368,9.93141161 L8.23182341,9.93141161 L8.23182341,16 Z"
                            }), (0, l.jsx)("rect", {
                                width: "16",
                                height: "16"
                            })]
                        })
                    })
                }, s.FacebookIcon)
        },
        369952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("887560"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M4.70012698,0.0531746 C3.84888888,0.092 3.2675238,0.22720635 2.7588254,0.42492063 C2.23292063,0.62926983 1.78692063,0.90273016 1.3422857,1.34733333 C0.89768254,1.79196825 0.62422222,2.23796825 0.41987302,2.76387303 C0.22215872,3.27257143 0.08695238,3.85393651 0.04812698,4.7051746 C0.00920635,5.55819048 0,5.83053968 0,8.00253968 C0,10.1745079 0.00920635,10.4468571 0.04812698,11.299873 C0.08695238,12.1511111 0.22215873,12.7324762 0.41987302,13.2411746 C0.62422222,13.7670794 0.89768254,14.2130794 1.34228572,14.6577143 C1.78692062,15.1023175 2.23292062,15.3757778 2.7588254,15.5801587 C3.2675238,15.7778413 3.8488889,15.9130476 4.70012698,15.951873 C5.55314286,15.9907937 5.82549206,16 7.99749206,16 C10.1694603,16 10.4418095,15.9907937 11.2948254,15.951873 C12.1460635,15.9130476 12.7274286,15.7778413 13.236127,15.5801587 C13.7620317,15.3757778 14.2080317,15.1023175 14.6526667,14.6577143 C15.0972698,14.2130794 15.3707302,13.7670794 15.5751111,13.2411746 C15.7727937,12.7324762 15.908,12.1511111 15.9468254,11.299873 C15.985746,10.4468571 15.9949524,10.1745079 15.9949524,8.00253968 C15.9949524,5.83053968 15.985746,5.55819048 15.9468254,4.7051746 C15.908,3.8539365 15.7727937,3.27257143 15.5751111,2.76387302 C15.3707302,2.23796825 15.0972698,1.79196825 14.6526667,1.34733332 C14.2080317,0.90273016 13.7620317,0.62926984 13.236127,0.42492064 C12.7274286,0.22720634 12.1460635,0.092 11.2948254,0.0531746 C10.4418095,0.01425397 10.1694603,0.00504762 7.99749206,0.00504762 C5.82549206,0.00504762 5.55314286,0.01425397 4.70012698,0.0531746 L4.70012698,0.0531746 Z M8.00001453,2.00504762 C9.95416635,2.00504762 10.185649,2.01251386 10.9573741,2.04772432 C11.6709381,2.08026206 12.0584565,2.19948958 12.3163471,2.29971739 C12.6579641,2.43248289 12.9017646,2.59107525 13.157854,2.84719363 C13.4139723,3.10328295 13.5725647,3.34708347 13.7053302,3.68870053 C13.805558,3.94659105 13.9247856,4.33410953 13.9573233,5.04767346 C13.9925338,5.8193986 14,6.05088127 14,8.00506213 C14,9.95921396 13.9925338,10.1906966 13.9573233,10.9624217 C13.9247856,11.6759857 13.805558,12.0635042 13.7053302,12.3213947 C13.5725647,12.6630117 13.4139723,12.9068123 13.157854,13.1629016 C12.9017646,13.41902 12.6579641,13.5776123 12.3163471,13.7103779 C12.0584565,13.8106057 11.6709381,13.9298332 10.9573741,13.9623709 C10.1857652,13.9975814 9.9543116,14.0050476 8.00001453,14.0050476 C6.04568839,14.0050476 5.81426383,13.9975814 5.04262587,13.9623709 C4.32906195,13.9298332 3.94154347,13.8106057 3.68365294,13.7103779 C3.34203588,13.5776123 3.09823536,13.41902 2.84214604,13.1629016 C2.58605671,12.9068123 2.42743531,12.6630117 2.29466977,12.3213947 C2.19444197,12.0635042 2.07521444,11.6759857 2.04267671,10.9624217 C2.00746628,10.1906966 2,9.95921395 2,8.00506212 C2,6.05088125 2.00746625,5.81939858 2.0426767,5.04767347 C2.07521444,4.33410953 2.19444196,3.94659104 2.29466977,3.68870052 C2.42743531,3.34708346 2.58602767,3.10328294 2.84214604,2.84719362 C3.09823536,2.59107524 3.34203588,2.43248288 3.68365294,2.29971735 C3.94154346,2.19948953 4.32906194,2.08026201 5.04262587,2.04772428 C5.81435097,2.01251381 6.04583365,2.00504758 8.00001453,2.00504758 L8.00001453,2.00504762 Z"
                            }), (0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M8.0000119,10 C6.89542535,10 6,9.10457466 6,8.0000119 C6,6.89542535 6.89542534,6 8.0000119,6 C9.10457467,6 10,6.89542534 10,8.0000119 C10,9.10457467 9.10457466,10 8.0000119,10 L8.0000119,10 Z M8.00001546,4 C5.7908468,4 4,5.7908468 4,8.00001546 C4,10.2091532 5.7908468,12 8.00001546,12 C10.2091532,12 12,10.2091532 12,8.00001546 C12,5.7908468 10.2091532,4 8.00001546,4 L8.00001546,4 Z M13,4.00001654 C13,4.55230644 12.5522734,5 11.9999835,5 C11.4477266,5 11,4.55230645 11,4.00001654 C11,3.44772664 11.4477266,3 11.9999835,3 C12.5522734,3 13,3.44772663 13,4.00001654 L13,4.00001654 Z"
                            }), (0, l.jsx)("rect", {
                                width: "16",
                                height: "16"
                            })]
                        })
                    })
                }, s.InstagramIcon)
        },
        15435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("850830"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 20 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z"
                            }), (0, l.jsx)("rect", {
                                width: "20",
                                height: "16"
                            })]
                        })
                    })
                }, s.TwitterIcon)
        },
        142367: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("132710"),
                s = n.n(a),
                r = n("290689");
            let o = s.defaultRules.lheading,
                i = s.defaultRules.heading,
                c = s.defaultRules.link,
                u = s.defaultRules.image,
                d = s.defaultRules.list,
                h = s.defaultRules.blockQuote,
                p = s.defaultRules.paragraph,
                f = /\{(.+?)}/,
                g = /^\$(\w+?)\$/;
            l = n("159661");
            let C = e => {
                    let {
                        transformUpperCase: t = !1
                    } = e;
                    return (e, n, l) => {
                        let a = f.exec(e[1]),
                            r = e[1].replace(f, "");
                        return t && (r = r.toUpperCase()), {
                            className: null != a ? a[1] : null,
                            level: "=" === e[2] ? 1 : 2,
                            content: s.parseInline(n, r, l)
                        }
                    }
                },
                m = e => ({
                    ...l.baseRules,
                    image: {
                        ...u,
                        ..."function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image
                    },
                    link: {
                        ...c,
                        ..."function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link
                    },
                    list: {
                        ...d,
                        ..."function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list
                    },
                    interpolation: {
                        order: r.default.order,
                        match: e => g.exec(e),
                        parse(e, t, n) {
                            let l = n.interpolations[e[1]];
                            return null == l ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "interpolation",
                                renderer: l
                            }
                        },
                        react: e => e.renderer()
                    },
                    lheading: {
                        ...o,
                        parse: C({
                            transformUpperCase: !0
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    },
                    heading: {
                        ...i,
                        ..."function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading
                    },
                    blockQuote: {
                        ...h,
                        ..."function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote
                    },
                    paragraph: {
                        ...p,
                        ..."function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph
                    }
                }),
                x = e => ({
                    lheading: {
                        ...o,
                        parse: C({
                            transformUpperCase: !1
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    }
                });
            var _ = {
                getDefaultRules: e => ({
                    ...m(e)
                }),
                getSpecialRules: e => ({
                    ...m(e),
                    ...x(e)
                })
            }
        },
        159661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                baseRules: function() {
                    return v
                },
                customRules: function() {
                    return k
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("132710"),
                i = n.n(o),
                c = n("77078"),
                u = n("54239"),
                d = n("79112"),
                h = n("367376"),
                p = n("393414"),
                f = n("599110"),
                g = n("49111"),
                C = n("234222");
            let m = i.defaultRules.link,
                x = {
                    section: g.AnalyticsSections.SETTINGS_CHANGELOG
                },
                _ = e => {
                    var t, n;
                    let {
                        level: l,
                        children: s,
                        className: o = null,
                        styleSheet: i = {}
                    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(l, 10), h = isNaN(d) ? 1 : d;
                    return a.createElement("h".concat(u + h - 1), {
                        className: r(...(t = i, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
                    }, s)
                },
                v = h.default.defaultRules,
                k = {
                    link: {
                        parse(e, t, n) {
                            let l;
                            let a = e[2],
                                s = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
                                r = a.startsWith("https://discordapp.com/hypesquad") || a.startsWith("https://discord.com/hypesquad"),
                                o = a.startsWith("/shop/fullscreen?source=1");
                            return l = s || r ? e => {
                                f.default.track(g.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location: x
                                }), s ? d.default.open(g.UserSettingsSections.PREMIUM) : r && d.default.open(g.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    cta_type: "nitro"
                                }), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : o ? e => {
                                (0, p.transitionTo)(a), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...f.default.getCampaignParams(a)
                                }), (0, u.popAllLayers)(), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(a), n.changeLog.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...f.default.getCampaignParams(a)
                                })
                            }, {
                                ...m.parse(e, t, n),
                                callToAction: l
                            }
                        },
                        react(e, t, n) {
                            let a = (0, l.jsx)(c.Anchor, {
                                href: i.sanitizeUrl(e.target),
                                title: e.title,
                                onClick: e.callToAction,
                                target: "_blank",
                                className: e.callToAction ? "cta" : void 0,
                                children: t(e.content, n)
                            }, n.key);
                            return a
                        }
                    },
                    lheading: e => ({
                        react: (t, n, a) => (0, l.jsx)(_, {
                            level: t.level,
                            className: t.className,
                            styleSheet: e,
                            children: n(t.content, a)
                        }, a.key)
                    }),
                    heading: {
                        react: (e, t, n) => (0, l.jsx)(_, {
                            level: e.level,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    image: {
                        react(e, t, a) {
                            let s = n("745249")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
                            return (0, l.jsx)("img", {
                                alt: e.alt,
                                src: s
                            }, a.key)
                        }
                    },
                    blockQuote: {
                        react: v.blockQuote.react
                    },
                    paragraph: {
                        react: (e, t, n) => (0, l.jsx)("p", {
                            children: t(e.content, n)
                        }, n.key)
                    }
                }
        }
    }
]);