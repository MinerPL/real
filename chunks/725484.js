            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i, a, l = n("37983"),
                s = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("458960"),
                d = n("77078"),
                c = n("49111"),
                _ = n("603127");
            (i = class extends s.Component {
                componentDidMount() {
                    this.props.show && this.animate(1)
                }
                componentDidUpdate(e) {
                    e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
                }
                getAnimatedStyle() {
                    let {
                        anim: e
                    } = this, {
                        reducedMotion: t
                    } = this.context;
                    return {
                        opacity: e,
                        transform: t.enabled ? void 0 : [{
                            translateY: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-100px", "0px"]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                }
                render() {
                    return (0, l.jsx)(o.default.a, {
                        href: c.Routes.INDEX,
                        target: "_blank",
                        rel: "noopener",
                        className: u(_.logo, this.props.className),
                        style: this.getAnimatedStyle()
                    })
                }
                constructor(...e) {
                    super(...e), this.anim = new o.default.Value(0), this.animate = e => {
                        o.default.spring(this.anim, {
                            toValue: e,
                            friction: 10,
                            tension: 100
                        }).start()
                    }
                }
            }).contextType = d.AccessibilityPreferencesContext, a = i