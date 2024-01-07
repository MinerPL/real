            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var n, r = s("37983"),
                a = s("884691"),
                o = s("458960"),
                i = s("77078"),
                l = s("83148");
            n = class extends a.Component {
                componentWillEnter(e) {
                    let {
                        offset: t
                    } = this.state;
                    t.setValue(1), o.default.spring(t, {
                        toValue: 0,
                        duration: 75
                    }).start(e)
                }
                componentWillLeave(e) {
                    let {
                        offset: t
                    } = this.state;
                    t.setValue(0), this.setState({
                        isExiting: !0
                    }, () => {
                        o.default.spring(t, {
                            toValue: -1,
                            duration: 75
                        }).start(e)
                    })
                }
                render() {
                    let {
                        isExiting: e,
                        offset: t
                    } = this.state;
                    return (0, r.jsx)(o.default.div, {
                        className: l.wrapper,
                        style: {
                            left: 0,
                            position: e ? "absolute" : "relative",
                            top: 0,
                            transform: [{
                                translateX: t.interpolate({
                                    inputRange: [-1, 1],
                                    outputRange: ["-100%", "100%"]
                                })
                            }]
                        },
                        children: (0, r.jsx)(i.ModalContent, {
                            className: l.contentWrapper,
                            children: this.props.children
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isExiting: !1,
                        offset: new o.default.Value(0),
                        selectedValue: null
                    }
                }
            }