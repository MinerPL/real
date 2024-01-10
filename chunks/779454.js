            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("145131"),
                u = n("9461");
            class d extends s.PureComponent {
                render() {
                    let e;
                    let {
                        renderFooter: t,
                        selectable: n,
                        renderHeader: s,
                        className: l,
                        onClose: d,
                        children: c
                    } = this.props;
                    return null != t && (e = (0, a.jsx)(r.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        children: t()
                    })), (0, a.jsx)(r.Modal, {
                        onCloseRequest: d,
                        renderModal: t => {
                            let {
                                onClose: f,
                                ...h
                            } = t;
                            return (0, a.jsxs)(r.ModalRoot, {
                                className: u.modal,
                                ...h,
                                children: [(0, a.jsxs)(r.ModalHeader, {
                                    align: o.default.Justify.BETWEEN,
                                    separator: !1,
                                    children: [s(), (0, a.jsx)(o.default.Child, {
                                        grow: 0,
                                        children: (0, a.jsx)(r.ModalCloseButton, {
                                            onClick: () => {
                                                null != d && d(), f()
                                            }
                                        })
                                    })]
                                }), (0, a.jsx)(r.ModalContent, {
                                    className: i(l, u.content, {
                                        selectable: n
                                    }),
                                    scrollerRef: this.scrollerRef,
                                    onScroll: this.handleScroll,
                                    children: c
                                }), e]
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = s.createRef(), this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null != e) {
                            var t, n;
                            null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
                        }
                    }
                }
            }
            d.defaultProps = {
                selectable: !1
            };
            var c = d