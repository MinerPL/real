(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22032"], {
        202998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PhoneCallIcon: function() {
                    return n
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M2 7.4A5.4 5.4 0 0 1 7.4 2a.9.9 0 0 1 .83.554l1.93 4.631a1 1 0 0 1-.426 1.253L7 10a8.516 8.516 0 0 0 7 7l1.121-2.242a1 1 0 0 1 1.189-.509l5.062 1.558a.89.89 0 0 1 .628.85A5.342 5.342 0 0 1 16.658 22h-.372C8.396 22 2 15.604 2 7.714V7.4ZM13 3a1 1 0 0 1 1-1 8 8 0 0 1 8 8 1 1 0 1 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1-1-1Z",
                        className: r
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M13 7a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1Z",
                        className: r
                    })]
                })
            }
        },
        538969: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("750485"),
                i = a("77078"),
                n = a("887657"),
                r = a("549586"),
                o = a("564875"),
                d = a("959097"),
                c = a("368874"),
                u = a("775032"),
                h = a("821586"),
                C = a("922832"),
                f = a("782340"),
                T = a("353530"),
                x = a("392963");
            let p = {
                    [C.TeenActionDisplayType.USER_INTERACTION]: (0, s.jsx)(h.default, {
                        width: 18,
                        height: 18
                    }),
                    [C.TeenActionDisplayType.USER_CALLED]: (0, s.jsx)(n.default, {
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.USER_ADD]: (0, s.jsx)(o.default, {
                        className: T.personWavingIcon,
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.GUILD_ADD]: (0, s.jsx)(r.default, {
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.GUILD_INTERACTION]: (0, s.jsx)(d.default, {
                        className: T.threadIcon,
                        width: 22,
                        height: 22
                    })
                },
                A = e => {
                    let {
                        header: t,
                        description: a,
                        icon: n
                    } = e;
                    return (0, s.jsxs)(l.default, {
                        className: T.row,
                        grow: 0,
                        children: [(0, s.jsx)("div", {
                            className: T.iconContainer,
                            children: n
                        }), (0, s.jsxs)("div", {
                            className: T.rowContent,
                            children: [(0, s.jsx)(i.Text, {
                                className: T.rowHeader,
                                variant: "text-sm/bold",
                                children: t
                            }), (0, s.jsx)(i.Text, {
                                variant: "text-xs/medium",
                                children: a
                            })]
                        })]
                    })
                };
            var g = e => {
                let {
                    transitionState: t,
                    onClose: a
                } = e, n = (0, c.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, u.default)(), o = Array.from(C.ACTION_TO_TEXT.entries());
                return (0, s.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    children: [(0, s.jsx)("img", {
                        className: T.art,
                        src: x,
                        alt: f.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                    }), (0, s.jsx)(i.ModalContent, {
                        className: T.content,
                        children: (0, s.jsxs)(l.default, {
                            direction: l.default.Direction.VERTICAL,
                            align: l.default.Align.CENTER,
                            children: [(0, s.jsx)(i.Heading, {
                                className: T.header,
                                color: "header-primary",
                                variant: "heading-lg/semibold",
                                children: (0, s.jsx)(i.HeadingLevel, {
                                    children: n
                                })
                            }), o.map(e => {
                                let [t, a] = e;
                                return (0, s.jsx)(A, {
                                    icon: p[t],
                                    header: a.tooltipHeader(),
                                    description: a.tooltipDescription(null != r ? r : void 0)
                                }, t)
                            })]
                        })
                    }), (0, s.jsx)(i.ModalFooter, {
                        children: (0, s.jsx)(i.Button, {
                            className: T.button,
                            type: "button",
                            color: i.Button.Colors.BRAND,
                            onClick: a,
                            children: f.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        821586: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = "currentColor",
                    ...n
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(n),
                    width: t,
                    height: a,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [(0, s.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: i
                    }), (0, s.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: i
                    })]
                })
            }
        },
        887657: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("202998"),
                n = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: i,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"
                        })
                    })
                }, i.PhoneCallIcon)
        }
    }
]);