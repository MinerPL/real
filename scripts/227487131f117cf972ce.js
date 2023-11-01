(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21465"], {
        439437: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                o = n("884691"),
                i = n("414456"),
                a = n.n(i),
                r = n("369470"),
                l = n.n(r),
                c = n("458960"),
                p = n("266491"),
                u = n("957954"),
                d = n("485328"),
                h = n("407063"),
                m = n("87465"),
                C = n("659500"),
                A = n("49111"),
                g = n("585292");
            let L = {
                friction: 10,
                tension: 100
            };

            function O(t, e) {
                return (t % e + e) % e
            }
            class E extends o.Component {
                componentWillEnter(t) {
                    let {
                        directionHistory: e
                    } = this.props, {
                        translate: n,
                        opacity: s
                    } = this.state;
                    n.setValue(e[e.length - 1]), s.setValue(0), t(), c.default.parallel([c.default.timing(s, {
                        toValue: 1,
                        easing: c.default.Easing.out(c.default.Easing.linear),
                        duration: 200
                    }), c.default.spring(n, {
                        toValue: 0,
                        ...L
                    })]).start()
                }
                componentWillLeave(t) {
                    let {
                        directionHistory: e
                    } = this.props, {
                        opacity: n,
                        translate: s
                    } = this.state;
                    c.default.parallel([c.default.timing(n, {
                        toValue: 0,
                        easing: c.default.Easing.in(c.default.Easing.linear),
                        duration: 200
                    }), c.default.spring(s, {
                        toValue: -1 * e[e.length - 1],
                        ...L
                    })]).start(t)
                }
                getStyle() {
                    let {
                        translate: t,
                        opacity: e
                    } = this.state;
                    return c.default.accelerate({
                        opacity: e,
                        transform: [{
                            translateX: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "300px"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        item: t
                    } = this.props, {
                        className: e
                    } = this.props;
                    return (0, s.jsx)(c.default.img, {
                        src: t.src,
                        alt: "",
                        className: a(g.slide, e),
                        style: this.getStyle()
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        translate: new c.default.Value(0),
                        opacity: new c.default.Value(1)
                    }
                }
            }
            class f extends o.Component {
                componentDidMount() {
                    this.preloadNextImages(), d.default.disable(), d.default.enableTemp(u.MODAL_CAROUSEL_LAYOUT), C.ComponentDispatch.subscribe(A.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.ComponentDispatch.subscribe(A.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                }
                componentWillUnmount() {
                    d.default.disableTemp(), C.ComponentDispatch.unsubscribe(A.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.ComponentDispatch.unsubscribe(A.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                }
                preloadNextImages() {
                    var t, e;
                    let {
                        currentIndex: n
                    } = this.state, {
                        items: s
                    } = this.props;
                    let o = ((n + 1) % (t = s.length) + t) % t;
                    let i = ((n - 1) % (e = s.length) + e) % e;
                    this.preloadImage(s[o]), this.preloadImage(s[i])
                }
                preloadImage(t) {
                    (0, h.loadImage)(t.src)
                }
                componentDidUpdate(t, e) {
                    let {
                        currentIndex: n
                    } = this.state;
                    n !== e.currentIndex && this.preloadNextImages()
                }
                navigateTo(t) {
                    var e, n, s;
                    let {
                        directionHistory: o,
                        currentIndex: i
                    } = this.state;
                    o.push(t - i), t = (t % (s = this.props.items.length) + s) % s, this.setState({
                        currentIndex: t,
                        directionHistory: o
                    }), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t)
                }
                render() {
                    var t;
                    let {
                        className: e
                    } = this.props, {
                        currentIndex: n,
                        directionHistory: o
                    } = this.state, {
                        modalCarouselItemClassName: i
                    } = this.props, r = this.props.items[n], l = this.props.items;
                    return (0, s.jsxs)(p.default, {
                        component: "div",
                        className: a(g.wrapper, e),
                        children: [l.length > 1 ? (0, s.jsx)(m.CarouselPrevious, {
                            className: g.navPrev,
                            onClick: this.gotoPrev
                        }) : null, null !== (t = r.component) && void 0 !== t ? t : (0, s.jsx)(E, {
                            item: r,
                            directionHistory: o,
                            className: i
                        }, r.src), l.length > 1 ? (0, s.jsx)(m.CarouselNext, {
                            className: g.navNext,
                            onClick: this.gotoNext
                        }) : null]
                    })
                }
                constructor(t) {
                    super(t), this.gotoNext = () => {
                        let {
                            currentIndex: t
                        } = this.state;
                        this.navigateTo(t + 1)
                    }, this.gotoPrev = () => {
                        let {
                            currentIndex: t
                        } = this.state;
                        this.navigateTo(t - 1)
                    }, this.gotoNextThrottled = l(this.gotoNext, 300), this.gotoPrevThrottled = l(this.gotoPrev, 300), this.state = {
                        currentIndex: t.startWith,
                        directionHistory: []
                    }
                }
            }
            f.defaultProps = {
                startWith: 0
            }
        },
        73579: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CAROUSEL_NEXT: function() {
                    return l
                },
                CAROUSEL_PREV: function() {
                    return c
                },
                MODAL_CAROUSEL_NEXT: function() {
                    return p
                },
                MODAL_CAROUSEL_PREV: function() {
                    return u
                },
                MODAL_CAROUSEL_CLOSE: function() {
                    return d
                }
            });
            var s = n("77078"),
                o = n("778588"),
                i = n("659500"),
                a = n("49111");
            let r = () => o.default.hasLayers() || (0, s.hasAnyModalOpen)(),
                l = {
                    binds: ["right"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!r()) return i.ComponentDispatch.dispatch(a.ComponentActions.CAROUSEL_NEXT), !1
                    }
                },
                c = {
                    binds: ["left"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (!r()) return i.ComponentDispatch.dispatch(a.ComponentActions.CAROUSEL_PREV), !1
                    }
                },
                p = {
                    binds: ["right", "down", "space"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(a.ComponentActions.MODAL_CAROUSEL_NEXT), !1)
                },
                u = {
                    binds: ["left", "up"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.ComponentDispatch.dispatch(a.ComponentActions.MODAL_CAROUSEL_PREV), !1)
                },
                d = {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (i.ComponentDispatch.hasSubscribers(a.ComponentActions.MODAL_CLOSE)) return i.ComponentDispatch.dispatch(a.ComponentActions.MODAL_CLOSE), !1
                    }
                }
        },
        957954: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                MODAL_CAROUSEL_LAYOUT: function() {
                    return i
                }
            });
            var s = n("73579"),
                o = n("49111");
            let i = {
                [o.KeybindActions.MODAL_CAROUSEL_NEXT]: s.MODAL_CAROUSEL_NEXT,
                [o.KeybindActions.MODAL_CAROUSEL_PREV]: s.MODAL_CAROUSEL_PREV,
                [o.KeybindActions.CLOSE_MODAL]: s.MODAL_CAROUSEL_CLOSE
            }
        },
        100814: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("414456"),
                i = n.n(o),
                a = n("77078"),
                r = n("439437"),
                l = n("398137");

            function c(t) {
                let {
                    className: e,
                    transitionState: n,
                    items: o,
                    startingIndex: c,
                    onClose: p,
                    onIndexChange: u,
                    modalCarouselClassName: d,
                    modalCarouselItemClassName: h
                } = t;
                return (0, s.jsx)(a.ModalRoot, {
                    hideShadow: !0,
                    className: i(l.carouselModal, e),
                    size: a.ModalSize.DYNAMIC,
                    transitionState: n,
                    "aria-label": "",
                    onClick: p,
                    children: (0, s.jsx)(r.default, {
                        className: d,
                        items: o,
                        startWith: c,
                        onIndexChange: u,
                        modalCarouselItemClassName: h
                    })
                })
            }
        }
    }
]);