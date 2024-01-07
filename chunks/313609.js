            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("508330");
            let u = e => new Promise((t, n) => {
                null == e && n(Error("No image src passed"));
                let i = new Image;
                i.src = e, i.onload = () => t(i), i.onerror = e => n(e)
            });
            class o extends a.PureComponent {
                componentDidUpdate(e) {
                    e.src !== this.props.src && this.setState({
                        loaded: !1
                    }, () => this.initialize())
                }
                initialize() {
                    u(this.props.src).then(() => {
                        !this.unmounting && this.setState({
                            loaded: !0
                        })
                    })
                }
                componentWillUnmount() {
                    this.unmounting = !0
                }
                render() {
                    let {
                        className: e,
                        src: t,
                        alt: n,
                        width: a,
                        height: l,
                        onLoad: u,
                        style: o,
                        imageClassName: d
                    } = this.props, {
                        loaded: c
                    } = this.state;
                    return (0, i.jsx)("div", {
                        className: e,
                        style: {
                            ...o,
                            width: a,
                            height: l
                        },
                        children: (0, i.jsx)("img", {
                            className: s(r.image, d, {
                                [r.loaded]: c
                            }),
                            width: a,
                            height: l,
                            src: t,
                            alt: n,
                            onLoad: u
                        })
                    })
                }
                constructor(e) {
                    super(e), this.unmounting = !1, this.state = {
                        loaded: !1
                    }, this.initialize()
                }
            }
            o.defaultProps = {
                width: 0,
                height: 0,
                alt: ""
            };
            var d = o