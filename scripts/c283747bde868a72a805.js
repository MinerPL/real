(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45490"], {
        745249: function(e, t, n) {
            var a = {
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

            function l(e) {
                return n(s(e))
            }

            function s(e) {
                if (!n.o(a, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return a[e]
            }
            l.id = '"745249"', l.keys = function() {
                return Object.keys(a)
            }, l.resolve = s, e.exports = l
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
                    return f
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                r = n("717811"),
                o = n("114535"),
                i = n("599110"),
                c = n("562897"),
                u = n("49111"),
                d = n("234222"),
                p = n("782340"),
                h = n("287794");
            class g extends l.PureComponent {
                componentDidMount() {
                    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
                }
                componentWillUnmount() {
                    this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED)
                }
                render() {
                    return (0, a.jsx)(c.default, {
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
                            scrollTop: a
                        } = e.getScrollerState();
                        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (n - t)), 1)
                    }, this.track = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            {
                                changeLog: l
                            } = t.props,
                            {
                                date: s,
                                revision: r
                            } = l,
                            o = {
                                change_log_id: "".concat(s, ":").concat(r),
                                ...n
                            };
                        !a && (o = {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                            ...o
                        }), i.default.track(e, o)
                    }
                }
            }

            function f(e) {
                let {
                    changelog: t,
                    loaded: n,
                    clientTooOld: i
                } = (0, o.useCurrentChangelog)();
                if (l.useEffect(() => {
                        if (n && null != t) return () => r.default.markChangelogAsSeen(t.id, t.date)
                    }, [n, t]), i) return (0, a.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, a.jsx)("div", {
                        className: h.empty,
                        children: (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/medium",
                            children: p.default.Messages.CHANGE_LOG_CLIENT_OLD
                        })
                    })
                });
                if (null == t) return n ? (0, a.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, a.jsx)("div", {
                        className: h.empty,
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: p.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
                        })
                    })
                }) : (0, a.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, a.jsx)("div", {
                        className: h.empty,
                        children: (0, a.jsx)(s.Spinner, {
                            type: s.Spinner.Type.WANDERING_CUBES
                        })
                    })
                });
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, a.jsx)(g, {
                        changeLog: t
                    })
                })
            }
        },
        562897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("866227"),
                i = n.n(o),
                c = n("77078"),
                u = n("15649"),
                d = n("367376"),
                p = n("933629"),
                h = n("560176"),
                g = n("145131"),
                f = n("762740"),
                m = n("369952"),
                _ = n("15435"),
                C = n("58608"),
                k = n("142367"),
                x = n("49111"),
                E = n("782340"),
                S = n("722097"),
                v = n("9461");
            let R = d.default.reactParserFor(k.default.getDefaultRules(S)),
                b = {};
            class A extends l.PureComponent {
                track(e, t, n) {
                    this.props.track(e, t, n)
                }
                renderFooter() {
                    return (0, a.jsxs)("div", {
                        className: S.footer,
                        children: [(0, a.jsx)(c.Anchor, {
                            "aria-label": E.default.Messages.TWITTER,
                            className: S.socialLink,
                            href: (0, u.default)(x.LocalizedLinks.TWITTER),
                            target: "blank",
                            children: (0, a.jsx)(_.default, {})
                        }), (0, a.jsx)(c.Anchor, {
                            "aria-label": E.default.Messages.FACEBOOK,
                            className: S.socialLink,
                            href: x.SOCIAL_LINKS.FACEBOOK_URL,
                            target: "blank",
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(c.Anchor, {
                            "aria-label": E.default.Messages.INSTAGRAM,
                            className: S.socialLink,
                            href: x.SOCIAL_LINKS.INSTAGRAM_URL,
                            target: "blank",
                            children: (0, a.jsx)(m.default, {})
                        }), (0, a.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: E.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
                        })]
                    })
                }
                renderVideo() {
                    let {
                        changeLog: e
                    } = this.props, t = e.youtube_video_id, l = e.video, s = e.image;
                    if (null != t && "" !== t) return (0, a.jsx)(h.EmbedVideo, {
                        className: r(S.video),
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
                        renderVideoComponent: p.renderVideoComponent,
                        renderImageComponent: p.renderImageComponent,
                        renderLinkComponent: p.renderMaskedLinkComponent,
                        onPlay: () => {
                            this.track(x.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                        }
                    });
                    if (null != l && "" !== l) {
                        let e = l.startsWith("https://") ? l : n("745249")("../../images/change-log/".concat(l).replace("../../images/change-log/", "./"));
                        return (0, a.jsx)(C.default, {
                            src: e,
                            poster: s,
                            width: 451,
                            height: 254,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            className: S.video,
                            onPlay: () => {
                                this.track(x.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                            }
                        })
                    }
                    if (null == s || "" === s) return null;
                    else {
                        let e = s.startsWith("https://") ? s : n("745249")("../../images/change-log/".concat(s).replace("../../images/change-log/", "./"));
                        return (0, a.jsx)("img", {
                            className: S.image,
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
                    return (0, a.jsxs)(c.ModalRoot, {
                        transitionState: c.ModalTransitionState.ENTERED,
                        className: v.modal,
                        children: [(0, a.jsxs)(c.ModalHeader, {
                            align: g.default.Justify.BETWEEN,
                            separator: !1,
                            children: [this.renderHeader(), (0, a.jsx)(g.default.Child, {
                                grow: 0,
                                children: (0, a.jsx)(c.ModalCloseButton, {
                                    onClick: this.props.onClose
                                })
                            })]
                        }), (0, a.jsx)(c.ModalContent, {
                            className: r(v.content, S.container, {}),
                            scrollerRef: this.scrollerRef,
                            onScroll: this.handleScroll,
                            children: (0, a.jsxs)("div", {
                                tabIndex: 0,
                                role: "region",
                                "aria-label": E.default.Messages.CHANGELOG_CONTENT_LABEL,
                                children: [this.renderVideo(), R(e.body, !1, {
                                    changeLog: this,
                                    interpolations: b,
                                    onLinkClick: this.trackLinkClick
                                })]
                            })
                        }), (0, a.jsx)(c.ModalFooter, {
                            direction: g.default.Direction.HORIZONTAL,
                            children: this.renderFooter()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = l.createRef(), this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null != e) {
                            var t, n;
                            null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
                        }
                    }, this.trackLinkClick = e => {
                        this.props.track(x.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "inline_link",
                            target: e
                        }, !1)
                    }, this.renderHeader = () => {
                        let {
                            changeLog: e
                        } = this.props;
                        return (0, a.jsxs)(g.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                children: E.default.Messages.WHATS_NEW
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: S.date,
                                children: E.default.Messages.WHATS_NEW_DATE.format({
                                    date: null != e.date && "" !== e.date ? i(e.date).toDate() : new Date
                                })
                            })]
                        })
                    }
                }
            }
            var L = A
        },
        114535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentChangelog: function() {
                    return u
                }
            });
            var a = n("884691"),
                l = n("65597"),
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
                } = (0, l.useStateFromStoresObject)([o.default], () => {
                    let n = null != e ? o.default.getChangelog(e, t) : null,
                        a = null != e ? o.default.getChangelog(e, "en-US") : null,
                        l = null != e && o.default.getChangelogLoadStatus(e, "en-US"),
                        s = null != e && o.default.getChangelogLoadStatus(e, t);
                    return {
                        changelog: n,
                        loadState: s,
                        defaultChangelog: a,
                        defaultLoadState: l
                    }
                }, [e, t]);
                return (a.useEffect(() => {
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
                let e = (0, l.default)([r.default], () => r.default.locale),
                    t = (0, l.default)([o.default], () => o.default.latestChangelogId()),
                    n = (0, l.default)([o.default], () => o.default.getConfig()),
                    a = null != n && 0 === Object.keys(n).length,
                    s = null != n && Object.keys(n).length > 0 && null == t,
                    i = (0, l.default)([o.default], () => o.default.overrideId()),
                    {
                        changelog: u,
                        loaded: d
                    } = c(t, e),
                    {
                        changelog: p,
                        loaded: h
                    } = c(i, e);
                return null == i || null == p && h ? {
                    id: t,
                    changelog: u,
                    loaded: !!a || d,
                    clientTooOld: s
                } : {
                    id: i,
                    changelog: p,
                    loaded: h,
                    clientTooOld: !1
                }
            }
        },
        327467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startMediaViewerSession: function() {
                    return i
                },
                endMediaViewerSession: function() {
                    return c
                },
                incrementSelectedItemChanges: function() {
                    return u
                }
            });
            var a = n("308503"),
                l = n("599110"),
                s = n("49111");
            let r = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                o = (0, a.default)(() => r);

            function i(e, t, n, a) {
                o.setState({
                    ...r,
                    guildId: e,
                    channelId: t,
                    channelType: n,
                    numMediaItems: a
                })
            }

            function c() {
                let e = o.getState();
                l.default.track(s.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                }), o.setState({
                    ...r
                })
            }

            function u() {
                o.setState(e => ({
                    selectedItemChanges: e.selectedItemChanges + 1
                }))
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, l.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, a.jsx)(a.Fragment, {
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
            var a = n("884691"),
                l = n("65597"),
                s = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(s.ConfettiCannonContext), t = (0, l.default)([r.default], () => r.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = a.useMemo(() => ({
                    fire: (a, l, s) => {
                        var r, o;
                        let i = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            c = n(i);
                        e(a, l, c, (null !== (r = null == s ? void 0 : s.count) && void 0 !== r ? r : i.confettiCount) * (null !== (o = null == s ? void 0 : s.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        142367: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var l = n("132710"),
                s = n.n(l),
                r = n("290689");
            let o = s.defaultRules.lheading,
                i = s.defaultRules.heading,
                c = s.defaultRules.link,
                u = s.defaultRules.image,
                d = s.defaultRules.list,
                p = s.defaultRules.blockQuote,
                h = s.defaultRules.paragraph,
                g = /\{(.+?)}/,
                f = /^\$(\w+?)\$/;
            a = n("159661");
            let m = e => {
                    let {
                        transformUpperCase: t = !1
                    } = e;
                    return (e, n, a) => {
                        let l = g.exec(e[1]),
                            r = e[1].replace(g, "");
                        return t && (r = r.toUpperCase()), {
                            className: null != l ? l[1] : null,
                            level: "=" === e[2] ? 1 : 2,
                            content: s.parseInline(n, r, a)
                        }
                    }
                },
                _ = e => ({
                    ...a.baseRules,
                    image: {
                        ...u,
                        ..."function" == typeof a.customRules.image ? a.customRules.image(e) : a.customRules.image
                    },
                    link: {
                        ...c,
                        ..."function" == typeof a.customRules.link ? a.customRules.link(e) : a.customRules.link
                    },
                    list: {
                        ...d,
                        ..."function" == typeof a.customRules.list ? a.customRules.list(e) : a.customRules.list
                    },
                    interpolation: {
                        order: r.default.order,
                        match: e => f.exec(e),
                        parse(e, t, n) {
                            let a = n.interpolations[e[1]];
                            return null == a ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "interpolation",
                                renderer: a
                            }
                        },
                        react: e => e.renderer()
                    },
                    lheading: {
                        ...o,
                        parse: m({
                            transformUpperCase: !0
                        }),
                        ..."function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading
                    },
                    heading: {
                        ...i,
                        ..."function" == typeof a.customRules.heading ? a.customRules.heading(e) : a.customRules.heading
                    },
                    blockQuote: {
                        ...p,
                        ..."function" == typeof a.customRules.blockQuote ? a.customRules.blockQuote(e) : a.customRules.blockQuote
                    },
                    paragraph: {
                        ...h,
                        ..."function" == typeof a.customRules.paragraph ? a.customRules.paragraph(e) : a.customRules.paragraph
                    }
                }),
                C = e => ({
                    lheading: {
                        ...o,
                        parse: m({
                            transformUpperCase: !1
                        }),
                        ..."function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading
                    }
                });
            var k = {
                getDefaultRules: e => ({
                    ..._(e)
                }),
                getSpecialRules: e => ({
                    ..._(e),
                    ...C(e)
                })
            }
        },
        159661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                baseRules: function() {
                    return x
                },
                customRules: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("132710"),
                i = n.n(o),
                c = n("77078"),
                u = n("54239"),
                d = n("79112"),
                p = n("367376"),
                h = n("393414"),
                g = n("599110"),
                f = n("49111"),
                m = n("234222");
            let _ = i.defaultRules.link,
                C = {
                    section: f.AnalyticsSections.SETTINGS_CHANGELOG
                },
                k = e => {
                    var t, n;
                    let {
                        level: a,
                        children: s,
                        className: o = null,
                        styleSheet: i = {}
                    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(a, 10), p = isNaN(d) ? 1 : d;
                    return l.createElement("h".concat(u + p - 1), {
                        className: r(...(t = i, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
                    }, s)
                },
                x = p.default.defaultRules,
                E = {
                    link: {
                        parse(e, t, n) {
                            let a;
                            let l = e[2],
                                s = l.startsWith("https://discordapp.com/nitro") || l.startsWith("https://discord.com/nitro"),
                                r = l.startsWith("https://discordapp.com/hypesquad") || l.startsWith("https://discord.com/hypesquad"),
                                o = l.startsWith("/shop/fullscreen?source=1");
                            return a = s || r ? e => {
                                g.default.track(f.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location: C
                                }), s ? d.default.open(f.UserSettingsSections.PREMIUM) : r && d.default.open(f.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    cta_type: "nitro"
                                }), (0, c.closeModal)(m.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : o ? e => {
                                (0, h.transitionTo)(l), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...g.default.getCampaignParams(l)
                                }), (0, u.popAllLayers)(), (0, c.closeModal)(m.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(l), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...g.default.getCampaignParams(l)
                                })
                            }, {
                                ..._.parse(e, t, n),
                                callToAction: a
                            }
                        },
                        react(e, t, n) {
                            let l = (0, a.jsx)(c.Anchor, {
                                href: i.sanitizeUrl(e.target),
                                title: e.title,
                                onClick: e.callToAction,
                                target: "_blank",
                                className: e.callToAction ? "cta" : void 0,
                                children: t(e.content, n)
                            }, n.key);
                            return l
                        }
                    },
                    lheading: e => ({
                        react: (t, n, l) => (0, a.jsx)(k, {
                            level: t.level,
                            className: t.className,
                            styleSheet: e,
                            children: n(t.content, l)
                        }, l.key)
                    }),
                    heading: {
                        react: (e, t, n) => (0, a.jsx)(k, {
                            level: e.level,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    image: {
                        react(e, t, l) {
                            let s = n("745249")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
                            return (0, a.jsx)("img", {
                                alt: e.alt,
                                src: s
                            }, l.key)
                        }
                    },
                    blockQuote: {
                        react: x.blockQuote.react
                    },
                    paragraph: {
                        react: (e, t, n) => (0, a.jsx)("p", {
                            children: t(e.content, n)
                        }, n.key)
                    }
                }
        }
    }
]);