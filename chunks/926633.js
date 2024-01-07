            "use strict";
            s.r(t), s.d(t, {
                SlideDirection: function() {
                    return n
                },
                default: function() {
                    return T
                }
            });
            var a, n, l = s("37983"),
                i = s("884691"),
                r = s("414456"),
                o = s.n(r),
                d = s("458960"),
                u = s("266491"),
                c = s("187615");
            (a = n || (n = {}))[a.RIGHT = -1] = "RIGHT", a[a.LEFT = 1] = "LEFT";
            let E = {
                friction: 10,
                tension: 40,
                overshootClamping: !0
            };
            class _ extends i.PureComponent {
                componentWillEnter(e) {
                    var t, s;
                    null === (t = (s = this.props).onAnimationStart) || void 0 === t || t.call(s), this._animated.setValue(-this.props.direction), d.default.spring(this._animated, {
                        toValue: 0,
                        ...E
                    }).start(() => {
                        var t, s;
                        e(), null === (t = (s = this.props).onAnimationEnd) || void 0 === t || t.call(s)
                    })
                }
                componentDidAppear() {
                    this._animated.setValue(0)
                }
                componentWillLeave(e) {
                    d.default.spring(this._animated, {
                        toValue: this.props.direction,
                        ...E
                    }).start(e)
                }
                getStyle() {
                    return d.default.accelerate({
                        transform: [{
                            translateX: this._animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0%", "-100%"]
                            })
                        }]
                    })
                }
                render() {
                    return (0, l.jsx)(d.default.div, {
                        style: this.getStyle(),
                        className: c.item,
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this._animated = new d.default.Value(-1 * e.direction)
                }
            }
            var T = e => {
                let {
                    children: t,
                    step: s,
                    direction: a,
                    className: n,
                    onAnimationStart: i,
                    onAnimationEnd: r
                } = e;
                return (0, l.jsx)(u.default, {
                    component: "div",
                    className: o(c.animator, n),
                    children: (0, l.jsx)(_, {
                        direction: a,
                        onAnimationStart: i,
                        onAnimationEnd: r,
                        children: t
                    }, s)
                })
            }