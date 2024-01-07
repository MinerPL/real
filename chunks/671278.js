            "use strict";
            n.r(t), n.d(t, {
                QRCodeOverlaySizes: function() {
                    return o
                },
                QRCodeWithOverlay: function() {
                    return f
                },
                default: function() {
                    return C
                }
            });
            var s, o, r = n("37983"),
                i = n("884691"),
                a = n("82697"),
                l = n("56701");
            (s = o || (o = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
            let d = Object.freeze({
                    SIZE_40: "size-40",
                    SIZE_60: "size-60"
                }),
                c = n("527826");
            class u extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        text: t,
                        ...n
                    } = this.props;
                    return (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            width: n.size,
                            height: n.size,
                            backgroundColor: n.bgColor
                        },
                        className: e,
                        children: (0, r.jsx)(a.default, {
                            value: t,
                            level: "M",
                            ...n
                        })
                    })
                }
            }
            u.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            class f extends i.PureComponent {
                render() {
                    let {
                        overlaySize: e
                    } = this.props, t = d[null != e ? e : "SIZE_40"];
                    return (0, r.jsxs)("div", {
                        className: l.qrCodeContainer,
                        children: [(0, r.jsx)(u, {
                            ...this.props
                        }), (0, r.jsx)("div", {
                            className: l.qrCodeOverlay,
                            children: (0, r.jsx)("img", {
                                className: l[t],
                                src: c,
                                alt: ""
                            })
                        })]
                    })
                }
            }
            f.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var C = u