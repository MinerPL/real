            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("817736"),
                i = n("118810"),
                r = n("446674"),
                o = n("715315"),
                u = n("471671"),
                d = n("53889"),
                c = n("612246");
            class f extends s.Component {
                componentDidMount() {
                    let {
                        visible: e,
                        inlineSpecs: t
                    } = this.props;
                    null == t && this.show(e)
                }
                componentWillUnmount() {
                    let {
                        inlineSpecs: e
                    } = this.props;
                    null == e && this.show(!1)
                }
                componentDidUpdate(e) {
                    let {
                        position: t,
                        offsetX: n,
                        offsetY: a,
                        tutorialId: s,
                        visible: l,
                        windowSize: i
                    } = e;
                    s !== this.props.tutorialId ? o.default.hide(s) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || a !== this.props.offsetY || i !== this.props.windowSize) && this.show(this.props.visible)
                }
                show(e) {
                    let {
                        tutorialId: t,
                        position: n,
                        offsetX: a,
                        offsetY: s,
                        visible: r,
                        inlineSpecs: u,
                        autoInvert: d
                    } = this.props;
                    if (e && null == u) {
                        let e = (0, l.findDOMNode)(this);
                        if (!(0, i.isElement)(e)) return;
                        let {
                            top: r,
                            left: u,
                            right: c,
                            bottom: f
                        } = e.getBoundingClientRect();
                        o.default.show(t, {
                            position: n,
                            targetWidth: c - u,
                            targetHeight: f - r,
                            autoInvert: d,
                            origin: {
                                x: u,
                                y: r
                            },
                            offset: {
                                x: a,
                                y: s
                            }
                        })
                    } else r && o.default.hide(t)
                }
                render() {
                    let {
                        inlineSpecs: e,
                        tutorialId: t,
                        children: n,
                        visible: l,
                        windowFocused: i,
                        position: r,
                        autoInvert: o
                    } = this.props, u = c.default.getData()[t];
                    return null != e && null != u ? (0, a.jsxs)(a.Fragment, {
                        children: [n, l && (0, a.jsx)(d.TutorialIndicator, {
                            autoInvert: o,
                            position: r,
                            tutorialId: t,
                            tutorialDefinition: u,
                            focused: i,
                            ...e
                        })]
                    }) : s.Children.only(n)
                }
            }

            function h(e) {
                let {
                    tutorialId: t
                } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.shouldShow(t), [t]), s = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, r.useStateFromStores)([u.default], () => u.default.windowSize(), []);
                return (0, a.jsx)(f, {
                    ...e,
                    visible: n,
                    windowFocused: s,
                    windowSize: l
                })
            }
            f.defaultProps = {
                position: "top",
                offsetX: 0,
                offsetY: 0,
                autoInvert: !0
            }