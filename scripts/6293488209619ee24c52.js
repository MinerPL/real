(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22032"], {
        538969: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var i = a("37983");
            a("884691");
            var s = a("750485"),
                n = a("77078"),
                l = a("887657"),
                r = a("549586"),
                d = a("564875"),
                o = a("959097"),
                c = a("368874"),
                h = a("775032"),
                u = a("821586"),
                T = a("922832"),
                C = a("782340"),
                x = a("353530"),
                p = a("392963");
            let A = {
                    [T.TeenActionDisplayType.USER_INTERACTION]: (0, i.jsx)(u.default, {
                        width: 18,
                        height: 18
                    }),
                    [T.TeenActionDisplayType.USER_CALLED]: (0, i.jsx)(l.default, {
                        width: 22,
                        height: 22
                    }),
                    [T.TeenActionDisplayType.USER_ADD]: (0, i.jsx)(d.default, {
                        className: x.personWavingIcon,
                        width: 22,
                        height: 22
                    }),
                    [T.TeenActionDisplayType.GUILD_ADD]: (0, i.jsx)(r.default, {
                        width: 22,
                        height: 22
                    }),
                    [T.TeenActionDisplayType.GUILD_INTERACTION]: (0, i.jsx)(o.default, {
                        className: x.threadIcon,
                        width: 22,
                        height: 22
                    })
                },
                f = e => {
                    let {
                        header: t,
                        description: a,
                        icon: l
                    } = e;
                    return (0, i.jsxs)(s.default, {
                        className: x.row,
                        grow: 0,
                        children: [(0, i.jsx)("div", {
                            className: x.iconContainer,
                            children: l
                        }), (0, i.jsxs)("div", {
                            className: x.rowContent,
                            children: [(0, i.jsx)(n.Text, {
                                className: x.rowHeader,
                                variant: "text-sm/bold",
                                children: t
                            }), (0, i.jsx)(n.Text, {
                                variant: "text-xs/medium",
                                children: a
                            })]
                        })]
                    })
                };
            var E = e => {
                let {
                    transitionState: t,
                    onClose: a
                } = e, l = (0, c.useAgeSpecificText)(C.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, C.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, h.default)(), d = Array.from(T.ACTION_TO_TEXT.entries());
                return (0, i.jsxs)(n.ModalRoot, {
                    transitionState: t,
                    children: [(0, i.jsx)("img", {
                        className: x.art,
                        src: p,
                        alt: C.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                    }), (0, i.jsx)(n.ModalContent, {
                        className: x.content,
                        children: (0, i.jsxs)(s.default, {
                            direction: s.default.Direction.VERTICAL,
                            align: s.default.Align.CENTER,
                            children: [(0, i.jsx)(n.Heading, {
                                className: x.header,
                                color: "header-primary",
                                variant: "heading-lg/semibold",
                                children: (0, i.jsx)(n.HeadingLevel, {
                                    children: l
                                })
                            }), d.map(e => {
                                let [t, a] = e;
                                return (0, i.jsx)(f, {
                                    icon: A[t],
                                    header: a.tooltipHeader(),
                                    description: a.tooltipDescription(null != r ? r : void 0)
                                }, t)
                            })]
                        })
                    }), (0, i.jsx)(n.ModalFooter, {
                        children: (0, i.jsx)(n.Button, {
                            className: x.button,
                            type: "button",
                            color: n.Button.Colors.BRAND,
                            onClick: a,
                            children: C.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        821586: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var i = a("37983");
            a("884691");
            var s = a("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = "currentColor",
                    ...l
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(l),
                    width: t,
                    height: a,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: n
                    }), (0, i.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: n
                    })]
                })
            }
        }
    }
]);