            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("817736"),
                o = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                p = n("901165"),
                E = n("62843"),
                I = n("315102"),
                h = n("402671"),
                m = n("866190"),
                A = n("115279");
            class C extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: a,
                            shouldAnimate: s,
                            isFocused: i,
                            isInteracting: r,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = A.EMOJI_SIZE_MAP[o];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: i && !0 === a && (!0 === s || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != l) return h.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: s,
                        className: r,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: p,
                        isInteracting: E,
                        ...I
                    } = this.props, h = this.getSrc();
                    return null == h || "" === h ? (0, l.jsx)("span", {
                        className: i("emoji", "emoji-text"),
                        children: n
                    }) : (s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: h,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: i("emoji", r, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            C.defaultProps = {
                isInteracting: !1
            };
            let _ = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    s = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let a = l[1];
                            if (e.intersectionRatio >= .7) {
                                var s, i;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function i(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
                }

                function r(e) {
                    let l = o.findDOMNode(e);
                    s.unobserve(l);
                    let a = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? i(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: s,
                                ...i
                            } = this.props;
                        return (0, l.jsx)(E.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...i,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                            })
                        })
                    }
                }
            }(C);

            function T(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([p.default], () => p.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, l.jsx)(_, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }