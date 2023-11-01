(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11626"], {
        700468: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ItemSizes: function() {
                    return L
                },
                default: function() {
                    return P
                }
            });
            var a = s("926607"),
                n = s("37983"),
                i = s("884691"),
                r = s("414456"),
                l = s.n(r),
                o = s("458960"),
                d = s("77078"),
                h = s("737960"),
                u = s("933629"),
                c = s("87465"),
                p = s("963241"),
                m = s("560176"),
                g = s("265836"),
                C = s("952368"),
                I = s("468482"),
                E = s("659500"),
                f = s("49111"),
                x = s("662230");

            function M() {
                let e = (0, a._)(["grayscale(", ")"]);
                return M = function() {
                    return e
                }, e
            }
            let L = {
                    SMALL: {
                        width: 640,
                        height: 360,
                        margin: 15
                    },
                    MEDIUM: {
                        width: 880,
                        height: 495,
                        margin: 20
                    }
                },
                S = {
                    width: 1920,
                    height: 1080
                },
                y = {
                    width: 1280,
                    height: 720
                },
                O = e => (0, u.renderVideoComponent)({
                    ...e,
                    className: x.videoWrapper,
                    mediaPlayerClassName: x.mediaPlayer
                }),
                v = e => (0, n.jsx)(C.default, {
                    ...e
                }),
                A = e => {
                    let t, s, {
                        item: a,
                        size: i,
                        onPlay: r,
                        onEnded: l,
                        onClick: o,
                        playable: h,
                        volume: c,
                        isMuted: p,
                        onVolumeChange: g,
                        onMute: C
                    } = e;
                    if (a.type === f.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
                        url: (0, f.YOUTUBE_PREVIEW_URL)(a.youtubeVideoId),
                        ...S
                    }, s = {
                        url: "".concat((0, f.YOUTUBE_EMBED_URL)(a.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                        ...y
                    };
                    else {
                        let e = null != a.width ? a.width : 0,
                            n = null != a.height ? a.height : 0;
                        t = {
                            url: a.thumbnailSrc,
                            width: e,
                            height: n
                        }, s = {
                            url: a.src,
                            proxyURL: a.src,
                            width: e,
                            height: n
                        }
                    }
                    let I = (0, n.jsx)(m.EmbedVideo, {
                        href: null,
                        thumbnail: t,
                        video: s,
                        allowFullScreen: !0,
                        maxHeight: i.height,
                        maxWidth: i.width,
                        onPlay: r,
                        onEnded: l,
                        playable: h,
                        className: x.video,
                        volume: c,
                        onVolumeChange: g,
                        autoMute: p,
                        onMute: C,
                        autoPlay: h,
                        renderVideoComponent: O,
                        renderImageComponent: v,
                        renderLinkComponent: u.renderMaskedLinkComponent
                    });
                    return h ? I : (0, n.jsx)(d.Clickable, {
                        className: x.itemImageWrapper,
                        onClick: o,
                        children: I
                    })
                },
                N = () => (0, n.jsx)("div", {
                    className: x.paginationVideoOverlay,
                    children: (0, n.jsx)(I.default, {
                        inactive: !0,
                        className: x.paginationVideoPlayPill,
                        renderLinkComponent: u.renderMaskedLinkComponent
                    })
                });
            class _ extends i.PureComponent {
                componentDidMount() {
                    E.ComponentDispatch.subscribe(f.ComponentActions.CAROUSEL_PREV, this.manualPrevious), E.ComponentDispatch.subscribe(f.ComponentActions.CAROUSEL_NEXT, this.manualNext)
                }
                componentWillUnmount() {
                    E.ComponentDispatch.unsubscribe(f.ComponentActions.CAROUSEL_PREV, this.manualPrevious), E.ComponentDispatch.unsubscribe(f.ComponentActions.CAROUSEL_NEXT, this.manualNext)
                }
                getStyle(e, t) {
                    let s = t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                        extrapolate: o.default.Extrapolate.CLAMP
                    });
                    return {
                        opacity: t.interpolate({
                            inputRange: [0, 1],
                            outputRange: [.3, 1],
                            extrapolate: o.default.Extrapolate.CLAMP
                        }),
                        filter: o.default.template(M(), s)
                    }
                }
                handleCurrentItemClick(e, t) {
                    let {
                        onCurrentItemClick: s
                    } = this.props;
                    null != s && s(e, t), this.setState({
                        hasInteracted: !0
                    })
                }
                handleEdgeItemMouseEnter(e) {
                    let {
                        currentIndex: t
                    } = this.state;
                    e < t ? this.setState({
                        hoveringPreviousItem: !0
                    }) : e > t && this.setState({
                        hoveringNextItem: !0
                    })
                }
                renderCarousel() {
                    let {
                        items: e
                    } = this.props, {
                        currentIndex: t,
                        animate: s,
                        hoveringPreviousItem: a,
                        hoveringNextItem: i
                    } = this.state, r = (0, n.jsx)(p.default, {
                        items: e,
                        itemSize: this.getItemSize(),
                        renderItem: this.renderItem,
                        currentIndex: t,
                        animate: s,
                        edgeItems: 2
                    });
                    return e.length <= 1 ? r : (0, n.jsxs)("div", {
                        className: x.carouselButtonsContainer,
                        children: [r, (0, n.jsx)(c.CarouselPrevious, {
                            onClick: this.manualPrevious,
                            className: l(x.arrow, {
                                [x.arrowHovered]: a
                            })
                        }), (0, n.jsx)(c.CarouselNext, {
                            onClick: this.manualNext,
                            className: l(x.arrow, {
                                [x.arrowHovered]: i
                            })
                        })]
                    })
                }
                getPaginationSrc(e) {
                    return e.type === f.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, f.YOUTUBE_PREVIEW_URL)(e.youtubeVideoId) : e.type === f.CarouselMediaTypes.IMG ? e.src : e.type === f.CarouselMediaTypes.VIDEO ? e.thumbnailSrc : null
                }
                render() {
                    let {
                        items: e,
                        className: t,
                        autoplayInterval: s,
                        paused: a
                    } = this.props, {
                        currentIndex: i,
                        playingVideo: r,
                        hasInteracted: l
                    } = this.state;
                    return (0, n.jsxs)(g.default, {
                        pauseOnHover: !0,
                        onInterval: this.autoNext,
                        interval: s,
                        className: t,
                        disable: r || l || a,
                        children: [this.renderCarousel(), (0, n.jsx)("div", {
                            className: x.pagination,
                            children: (0, n.jsx)(c.default, {
                                renderItem: this.renderPaginationItem,
                                scrollToPadding: 85,
                                items: e,
                                selectedIndex: i,
                                onSetItem: e => this.setItem(e, !0),
                                paginationContainerClass: x.scroller,
                                align: e.length < 6 ? c.default.Align.LEFT : c.default.Align.CENTER
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        currentIndex: 0,
                        animate: !0,
                        playingVideo: !1,
                        hasInteracted: !1,
                        hoveringPreviousItem: !1,
                        hoveringNextItem: !1,
                        volume: 1,
                        isMuted: !0
                    }, this.getItemSize = () => {
                        let {
                            width: e
                        } = this.props, t = L.MEDIUM;
                        return null != e && e < t.width && (t = L.SMALL), t
                    }, this.setItem = (e, t) => {
                        let {
                            props: {
                                items: s,
                                onIntentionalChange: a
                            },
                            state: {
                                currentIndex: n
                            }
                        } = this, i = (0, p.normalizeIndex)(n, s.length), r = (0, p.normalizeIndex)(e, s.length), l = 1 === Math.abs(e - i) || e === s.length - 1 && 0 === i || 0 === e && i === s.length - 1;
                        this.setState({
                            playingVideo: !1,
                            currentIndex: r,
                            animate: l,
                            hasInteracted: t
                        }), t && null != a && a(s[r], i, r)
                    }, this.autoNext = () => {
                        this.setItem(this.state.currentIndex + 1, !1)
                    }, this.manualNext = () => {
                        this.setItem(this.state.currentIndex + 1, !0)
                    }, this.manualPrevious = () => {
                        this.setItem(this.state.currentIndex - 1, !0)
                    }, this.handlePlay = e => this.setState({
                        playingVideo: !0,
                        hasInteracted: !e
                    }), this.handleEnded = () => {
                        !this.state.hasInteracted && this.autoNext()
                    }, this.handleVolumeChange = e => {
                        this.setState({
                            volume: e,
                            hasInteracted: !0
                        })
                    }, this.handleMute = e => {
                        this.setState({
                            isMuted: e,
                            hasInteracted: !0
                        })
                    }, this.handleVideoClick = e => {
                        this.setItem(e, !0)
                    }, this.handleEdgeItemMouseLeave = () => {
                        this.setState({
                            hoveringPreviousItem: !1,
                            hoveringNextItem: !1
                        })
                    }, this.renderCarouselImage = (e, t, s) => s ? (0, n.jsx)(d.Clickable, {
                        onClick: () => this.handleCurrentItemClick(e, t),
                        className: x.itemImageWrapper,
                        children: (0, n.jsx)("img", {
                            src: e.src,
                            alt: "",
                            className: x.currentImage
                        })
                    }) : (0, n.jsx)(d.Clickable, {
                        onClick: () => this.setItem(t, !0),
                        className: x.itemImageWrapper,
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: x.itemImage,
                            src: e.src,
                            draggable: !1
                        })
                    }), this.renderItem = (e, t, s) => {
                        let {
                            currentIndex: a,
                            volume: i,
                            isMuted: r
                        } = this.state, d = t === (0, p.normalizeIndex)(a, this.props.items.length);
                        return (0, n.jsx)(o.default.div, {
                            className: l(x.item, {
                                [x.currentItem]: d
                            }),
                            style: null != s ? this.getStyle(t, s) : null,
                            onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                            onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                            children: e.type === f.CarouselMediaTypes.VIDEO || e.type === f.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, n.jsx)(A, {
                                item: e,
                                size: this.getItemSize(),
                                onPlay: this.handlePlay,
                                onEnded: this.handleEnded,
                                playable: d,
                                onClick: () => this.handleVideoClick(t),
                                volume: i,
                                onVolumeChange: this.handleVolumeChange,
                                isMuted: r,
                                onMute: this.handleMute
                            }) : this.renderCarouselImage(e, t, d)
                        })
                    }, this.renderPaginationItem = (e, t) => {
                        let {
                            currentIndex: s
                        } = this.state, a = s === t;
                        return (0, n.jsxs)("div", {
                            className: l(x.paginationItem, a ? x.selectedStorePaginationItem : x.unselectedStorePaginationItem),
                            children: [(0, n.jsx)("img", {
                                alt: null == e.alt ? t : e.alt,
                                className: x.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }), e.type === f.CarouselMediaTypes.YOUTUBE_VIDEO || e.type === f.CarouselMediaTypes.VIDEO ? (0, n.jsx)(N, {}) : null, a ? (0, n.jsx)("div", {
                                className: x.overlappingBorder
                            }) : null]
                        }, "page-".concat(t))
                    }
                }
            }
            _.defaultProps = {
                autoplayInterval: 8e3,
                paused: !1
            };
            var P = (0, h.default)(_)
        },
        439437: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("369470"),
                o = s.n(l),
                d = s("458960"),
                h = s("266491"),
                u = s("957954"),
                c = s("485328"),
                p = s("407063"),
                m = s("87465"),
                g = s("659500"),
                C = s("49111"),
                I = s("585292");
            let E = {
                friction: 10,
                tension: 100
            };

            function f(e, t) {
                return (e % t + t) % t
            }
            class x extends n.Component {
                componentWillEnter(e) {
                    let {
                        directionHistory: t
                    } = this.props, {
                        translate: s,
                        opacity: a
                    } = this.state;
                    s.setValue(t[t.length - 1]), a.setValue(0), e(), d.default.parallel([d.default.timing(a, {
                        toValue: 1,
                        easing: d.default.Easing.out(d.default.Easing.linear),
                        duration: 200
                    }), d.default.spring(s, {
                        toValue: 0,
                        ...E
                    })]).start()
                }
                componentWillLeave(e) {
                    let {
                        directionHistory: t
                    } = this.props, {
                        opacity: s,
                        translate: a
                    } = this.state;
                    d.default.parallel([d.default.timing(s, {
                        toValue: 0,
                        easing: d.default.Easing.in(d.default.Easing.linear),
                        duration: 200
                    }), d.default.spring(a, {
                        toValue: -1 * t[t.length - 1],
                        ...E
                    })]).start(e)
                }
                getStyle() {
                    let {
                        translate: e,
                        opacity: t
                    } = this.state;
                    return d.default.accelerate({
                        opacity: t,
                        transform: [{
                            translateX: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "300px"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        item: e
                    } = this.props, {
                        className: t
                    } = this.props;
                    return (0, a.jsx)(d.default.img, {
                        src: e.src,
                        alt: "",
                        className: r(I.slide, t),
                        style: this.getStyle()
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        translate: new d.default.Value(0),
                        opacity: new d.default.Value(1)
                    }
                }
            }
            class M extends n.Component {
                componentDidMount() {
                    this.preloadNextImages(), c.default.disable(), c.default.enableTemp(u.MODAL_CAROUSEL_LAYOUT), g.ComponentDispatch.subscribe(C.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), g.ComponentDispatch.subscribe(C.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                }
                componentWillUnmount() {
                    c.default.disableTemp(), g.ComponentDispatch.unsubscribe(C.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), g.ComponentDispatch.unsubscribe(C.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                }
                preloadNextImages() {
                    var e, t;
                    let {
                        currentIndex: s
                    } = this.state, {
                        items: a
                    } = this.props;
                    let n = ((s + 1) % (e = a.length) + e) % e;
                    let i = ((s - 1) % (t = a.length) + t) % t;
                    this.preloadImage(a[n]), this.preloadImage(a[i])
                }
                preloadImage(e) {
                    (0, p.loadImage)(e.src)
                }
                componentDidUpdate(e, t) {
                    let {
                        currentIndex: s
                    } = this.state;
                    s !== t.currentIndex && this.preloadNextImages()
                }
                navigateTo(e) {
                    var t, s, a;
                    let {
                        directionHistory: n,
                        currentIndex: i
                    } = this.state;
                    n.push(e - i), e = (e % (a = this.props.items.length) + a) % a, this.setState({
                        currentIndex: e,
                        directionHistory: n
                    }), null === (t = (s = this.props).onIndexChange) || void 0 === t || t.call(s, e)
                }
                render() {
                    var e;
                    let {
                        className: t
                    } = this.props, {
                        currentIndex: s,
                        directionHistory: n
                    } = this.state, {
                        modalCarouselItemClassName: i
                    } = this.props, l = this.props.items[s], o = this.props.items;
                    return (0, a.jsxs)(h.default, {
                        component: "div",
                        className: r(I.wrapper, t),
                        children: [o.length > 1 ? (0, a.jsx)(m.CarouselPrevious, {
                            className: I.navPrev,
                            onClick: this.gotoPrev
                        }) : null, null !== (e = l.component) && void 0 !== e ? e : (0, a.jsx)(x, {
                            item: l,
                            directionHistory: n,
                            className: i
                        }, l.src), o.length > 1 ? (0, a.jsx)(m.CarouselNext, {
                            className: I.navNext,
                            onClick: this.gotoNext
                        }) : null]
                    })
                }
                constructor(e) {
                    super(e), this.gotoNext = () => {
                        let {
                            currentIndex: e
                        } = this.state;
                        this.navigateTo(e + 1)
                    }, this.gotoPrev = () => {
                        let {
                            currentIndex: e
                        } = this.state;
                        this.navigateTo(e - 1)
                    }, this.gotoNextThrottled = o(this.gotoNext, 300), this.gotoPrevThrottled = o(this.gotoPrev, 300), this.state = {
                        currentIndex: e.startWith,
                        directionHistory: []
                    }
                }
            }
            M.defaultProps = {
                startWith: 0
            }
        },
        824021: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Rules: function() {
                    return C
                },
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("132710"),
                o = s.n(l),
                d = s("77078"),
                h = s("895530"),
                u = s("9074"),
                c = s("271560"),
                p = s("782340"),
                m = s("613743");
            let g = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
                C = {
                    ...u.default.rules,
                    heading: {
                        ...u.default.rules.heading,
                        react(e, t, s) {
                            let n = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
                            return (0, a.jsx)(h.default, {
                                tag: n,
                                children: t(e.content, s)
                            }, s.key)
                        }
                    },
                    assetImage: {
                        order: 5,
                        match(e, t) {
                            let s = e.match(g);
                            if (null != s) {
                                let e = s[2],
                                    a = t.assets.find(t => t.id === e);
                                return null != a && [...s, a, t.applicationId]
                            }
                            return !1
                        },
                        parse: e => ({
                            asset: e[3],
                            alt: e[1],
                            applicationId: e[4]
                        }),
                        react: (e, t, s) => (0, a.jsx)("div", {
                            className: m.assetWrapper,
                            children: (0, a.jsx)("img", {
                                alt: e.alt,
                                src: (0, c.getAssetURL)(e.applicationId, e.asset, 800),
                                className: m.asset
                            })
                        }, s.key)
                    }
                },
                I = o.parserFor(C),
                E = o.reactFor(o.ruleOutput(C, "react"));
            class f extends n.PureComponent {
                componentDidMount() {
                    if (null != this._container) {
                        let {
                            height: e
                        } = this._container.getBoundingClientRect();
                        this.setState({
                            collapsable: e > 400
                        })
                    }
                }
                render() {
                    let {
                        applicationId: e,
                        description: t,
                        blurb: s,
                        className: n,
                        assets: i
                    } = this.props, {
                        collapsed: l,
                        collapsable: o
                    } = this.state;
                    return (0, a.jsxs)("div", {
                        className: n,
                        children: [(0, a.jsx)("div", {
                            className: r({
                                [m.collapsed]: o && l
                            }),
                            children: (0, a.jsxs)("div", {
                                ref: this.setContentContainerRef,
                                children: [(0, a.jsx)("div", {
                                    className: m.blurb,
                                    children: s
                                }), (0, a.jsx)(u.default, {
                                    className: m.description,
                                    parser: I,
                                    output: E,
                                    state: {
                                        assets: i,
                                        applicationId: e
                                    },
                                    children: t
                                })]
                            })
                        }), o ? (0, a.jsx)(d.Button, {
                            className: m.toggleCollapseButton,
                            onClick: this.handleToggleCollapse,
                            color: d.Button.Colors.PRIMARY,
                            children: l ? p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
                        }) : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        collapsed: !0,
                        collapsable: !0
                    }, this.handleToggleCollapse = () => {
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }, this.setContentContainerRef = e => {
                        this._container = e
                    }
                }
            }
            var x = f
        },
        590177: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                transformAssetURL: function() {
                    return c
                },
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("77078"),
                r = s("700468"),
                l = s("439437"),
                o = s("180612"),
                d = s("75576"),
                h = s("49111"),
                u = s("782340");

            function c(e) {
                return "".concat(e.split("?")[0], "?size=").concat(2048)
            }
            let p = e => {
                let {
                    index: t,
                    items: s,
                    ...n
                } = e, i = s[t], r = 0, o = [];
                for (let e of s)
                    if (e.type === h.CarouselMediaTypes.IMG) {
                        let {
                            width: t,
                            height: s,
                            src: a
                        } = e;
                        e === i && (r = o.length), o.push({
                            src: c(a),
                            width: t,
                            height: s
                        })
                    } return (0, a.jsx)(l.default, {
                    ...n,
                    items: o,
                    startWith: r
                })
            };
            class m extends n.Component {
                render() {
                    let {
                        pageSize: e,
                        ...t
                    } = this.props, s = e === d.PageSizes.SMALL ? o.default : r.default;
                    return (0, a.jsx)(s, {
                        ...t,
                        onCurrentItemClick: this.handleCurrentItemClick
                    })
                }
                constructor(...e) {
                    super(...e), this.handleCurrentItemClick = (e, t) => {
                        e.type === h.CarouselMediaTypes.IMG && !(0, i.hasAnyModalOpen)() && (0, i.openModal)(e => (0, a.jsx)(i.ModalRoot, {
                            size: i.ModalSize.DYNAMIC,
                            "aria-label": u.default.Messages.IMAGE,
                            ...e,
                            children: (0, a.jsx)(p, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        }))
                    }
                }
            }
            var g = m
        },
        75576: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PAGE_WIDTH_THRESHOLD: function() {
                    return a
                },
                PageSizes: function() {
                    return n
                }
            });
            let a = 1e3,
                n = Object.freeze({
                    SMALL: "small",
                    LARGE: "large"
                })
        },
        180612: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("77078"),
                o = s("700468"),
                d = s("933629"),
                h = s("749344"),
                u = s("560176"),
                c = s("952368"),
                p = s("888673"),
                m = s("75576"),
                g = s("49111"),
                C = s("782340"),
                I = s("636851");
            let E = e => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, a.jsx)(p.default, {
                        ...s,
                        className: r(I.sizedToParent, t),
                        mediaPlayerClassName: I.sizedToParent,
                        renderLinkComponent: d.renderMaskedLinkComponent
                    })
                },
                f = e => {
                    let {
                        containerClassName: t,
                        className: s,
                        ...n
                    } = e;
                    return (0, a.jsx)(c.default, {
                        ...n,
                        className: r(s, t)
                    })
                },
                x = {
                    width: 1280,
                    height: 720
                },
                M = {
                    width: 640,
                    height: 360
                },
                L = e => {
                    let t, s, {
                        item: n,
                        onPlay: i,
                        volume: r,
                        onVolumeChange: l,
                        onMute: h,
                        isMuted: c,
                        autoPlay: p
                    } = e;
                    if (n.type === g.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
                        url: (0, g.YOUTUBE_PREVIEW_URL)(n.youtubeVideoId),
                        ...x
                    }, s = {
                        url: "".concat((0, g.YOUTUBE_EMBED_URL)(n.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                        ...M
                    };
                    else {
                        let e = null != n.width ? n.width : 0,
                            a = null != n.height ? n.height : 0;
                        t = {
                            url: n.thumbnailSrc,
                            width: e,
                            height: a
                        }, s = {
                            url: n.src,
                            proxyURL: n.src,
                            width: e,
                            height: a
                        }
                    }
                    return (0, a.jsx)("div", {
                        className: I.embedContainer,
                        children: (0, a.jsx)(u.EmbedVideo, {
                            className: I.sizedToParent,
                            iframeWrapperClassName: I.sizedToParent,
                            href: null,
                            thumbnail: t,
                            video: s,
                            maxHeight: o.ItemSizes.SMALL.height,
                            maxWidth: m.PageSizes.SMALL,
                            onPlay: i,
                            playable: !0,
                            volume: r,
                            onVolumeChange: l,
                            autoMute: c,
                            onMute: h,
                            autoPlay: p,
                            renderImageComponent: f,
                            renderVideoComponent: E,
                            renderLinkComponent: d.renderMaskedLinkComponent
                        })
                    })
                };
            class S extends n.PureComponent {
                componentDidMount() {
                    let {
                        items: e
                    } = this.props;
                    e.length > 0 && e[0].type === g.CarouselMediaTypes.IMG && this.setState({
                        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
                    })
                }
                handleCurrentItemClick(e, t) {
                    let {
                        onCurrentItemClick: s
                    } = this.props;
                    null != s && s(e, t), this.setState({
                        hasInteracted: !0
                    })
                }
                render() {
                    let {
                        items: e,
                        autoplayInterval: t,
                        className: s,
                        paused: n,
                        themedPagination: i
                    } = this.props, {
                        hasInteracted: l
                    } = this.state;
                    return (0, a.jsx)(h.default, {
                        items: e.slice(0, 12),
                        delay: t,
                        paused: n || l,
                        renderItem: this.renderItem,
                        className: r(I.smallCarousel, s),
                        themedPagination: i,
                        onIntentionalChange: this.handleIntentionalChange,
                        onChangeItem: this.handleChangeItem
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasInteracted: !1,
                        isVideoPlaying: !1,
                        isMuted: !0,
                        volume: 1,
                        status: new Map,
                        imageLoadingStartTime: new Map
                    }, this.handlePlay = e => {
                        this.setState({
                            isVideoPlaying: !0,
                            hasInteracted: !e
                        })
                    }, this.handleVolumeChange = e => {
                        this.setState({
                            volume: e,
                            hasInteracted: !0
                        })
                    }, this.handleMute = e => {
                        this.setState({
                            isMuted: e,
                            hasInteracted: !0
                        })
                    }, this.handleChangeItem = e => {
                        this.setState({
                            isVideoPlaying: !1
                        }), e.type === g.CarouselMediaTypes.IMG && this.setState({
                            imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
                        })
                    }, this.handleIntentionalChange = (e, t, s, a) => {
                        this.setState({
                            hasInteracted: !0
                        });
                        let {
                            onIntentionalChange: n
                        } = this.props;
                        null != n && n(e, t, s, a)
                    }, this.handleOnErrorImg = e => {
                        this.setState({
                            status: new Map(this.state.status).set(e.target.src, "errored")
                        })
                    }, this.handleOnLoadImg = e => {
                        let {
                            onImageLoad: t
                        } = this.props;
                        this.setState({
                            status: new Map(this.state.status).set(e.target.src, "loaded")
                        });
                        let s = this.state.imageLoadingStartTime.get(e.target.src),
                            a = null != s ? Date.now() - s : void 0;
                        null == t || t({
                            src: e.target.src,
                            loadTimeMs: a
                        })
                    }, this.renderItem = (e, t) => {
                        let s;
                        let {
                            isMuted: n,
                            volume: i
                        } = this.state, {
                            videoAutoPlay: o
                        } = this.props;
                        switch (e.type) {
                            case g.CarouselMediaTypes.YOUTUBE_VIDEO:
                            case g.CarouselMediaTypes.VIDEO:
                                s = (0, a.jsx)(L, {
                                    item: e,
                                    onPlay: this.handlePlay,
                                    isMuted: n,
                                    volume: i,
                                    onVolumeChange: this.handleVolumeChange,
                                    onMute: this.handleMute,
                                    autoPlay: o
                                });
                                break;
                            case g.CarouselMediaTypes.IMG:
                                if ("errored" === this.state.status.get(e.src)) {
                                    let e = (0, a.jsx)(l.Heading, {
                                        variant: "heading-xl/semibold",
                                        children: C.default.Messages.ERRORS_IMAGE_NOT_FOUND
                                    });
                                    return (0, a.jsx)("div", {
                                        className: I.errorContainer,
                                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                                    })
                                } {
                                    var d;
                                    let t = null !== (d = e.alt) && void 0 !== d ? d : C.default.Messages.IMAGE;
                                    s = (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(l.Spinner, {
                                            className: r(I.spinner, {
                                                [I.hidden]: void 0 !== this.state.status.get(e.src)
                                            }),
                                            type: l.Spinner.Type.SPINNING_CIRCLE
                                        }), (0, a.jsx)("img", {
                                            onError: this.handleOnErrorImg,
                                            onLoad: this.handleOnLoadImg,
                                            className: r(I.smallCarouselImage, {
                                                [I.hidden]: "loaded" !== this.state.status.get(e.src)
                                            }),
                                            src: e.src,
                                            alt: t
                                        })]
                                    })
                                }
                                break;
                            default:
                                throw Error("Unexpected MediaType")
                        }
                        return (0, a.jsx)(l.Clickable, {
                            className: I.smallCarouselItem,
                            onClick: () => this.handleCurrentItemClick(e, t),
                            children: s
                        })
                    }
                }
            }
            S.defaultProps = {
                paused: !1,
                videoAutoPlay: !0
            };
            var y = S
        },
        73579: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CAROUSEL_NEXT: function() {
                    return o
                },
                CAROUSEL_PREV: function() {
                    return d
                },
                MODAL_CAROUSEL_NEXT: function() {
                    return h
                },
                MODAL_CAROUSEL_PREV: function() {
                    return u
                },
                MODAL_CAROUSEL_CLOSE: function() {
                    return c
                }
            });
            var a = s("77078"),
                n = s("778588"),
                i = s("659500"),
                r = s("49111");
            let l = () => n.default.hasLayers() || (0, a.hasAnyModalOpen)(),
                o = {
                    binds: ["right"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!l()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_NEXT), !1
                    }
                },
                d = {
                    binds: ["left"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!l()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_PREV), !1
                    }
                },
                h = {
                    binds: ["right", "down", "space"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_NEXT), !1)
                },
                u = {
                    binds: ["left", "up"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_PREV), !1)
                },
                c = {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (i.ComponentDispatch.hasSubscribers(r.ComponentActions.MODAL_CLOSE)) return i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CLOSE), !1
                    }
                }
        },
        957954: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MODAL_CAROUSEL_LAYOUT: function() {
                    return i
                }
            });
            var a = s("73579"),
                n = s("49111");
            let i = {
                [n.KeybindActions.MODAL_CAROUSEL_NEXT]: a.MODAL_CAROUSEL_NEXT,
                [n.KeybindActions.MODAL_CAROUSEL_PREV]: a.MODAL_CAROUSEL_PREV,
                [n.KeybindActions.CLOSE_MODAL]: a.MODAL_CAROUSEL_CLOSE
            }
        }
    }
]);