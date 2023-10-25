(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22032"], {
        202998: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PhoneCallIcon: function() {
                    return a
                }
            });
            var i = l("920040");
            l("773670");
            var n = l("912557"),
                s = l("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7.4 2A5.4 5.4 0 0 0 2 7.4v.314C2 15.604 8.396 22 16.286 22h.372A5.342 5.342 0 0 0 22 16.658a.89.89 0 0 0-.628-.851l-5.062-1.558a1 1 0 0 0-1.189.509L14 17a8.516 8.516 0 0 1-7-7l2.734-1.562a1 1 0 0 0 .427-1.253L8.23 2.554A.9.9 0 0 0 7.4 2Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M14 2a1 1 0 1 0 0 2 6 6 0 0 1 6 6 1 1 0 1 0 2 0 8 8 0 0 0-8-8Zm0 4a1 1 0 1 0 0 2 2 2 0 0 1 2 2 1 1 0 1 0 2 0 4 4 0 0 0-4-4Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        538969: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var i = l("920040");
            l("773670");
            var n = l("758480"),
                s = l("77078"),
                a = l("887657"),
                r = l("549586"),
                d = l("564875"),
                o = l("959097"),
                c = l("368874"),
                u = l("775032"),
                h = l("821586"),
                C = l("922832"),
                f = l("782340"),
                T = l("834183"),
                p = l("392963");
            let x = {
                    [C.TeenActionDisplayType.USER_INTERACTION]: (0, i.jsx)(h.default, {
                        width: 18,
                        height: 18
                    }),
                    [C.TeenActionDisplayType.USER_CALLED]: (0, i.jsx)(a.default, {
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.USER_ADD]: (0, i.jsx)(d.default, {
                        className: T.personWavingIcon,
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.GUILD_ADD]: (0, i.jsx)(r.default, {
                        width: 22,
                        height: 22
                    }),
                    [C.TeenActionDisplayType.GUILD_INTERACTION]: (0, i.jsx)(o.default, {
                        className: T.threadIcon,
                        width: 22,
                        height: 22
                    })
                },
                A = e => {
                    let {
                        header: t,
                        description: l,
                        icon: a
                    } = e;
                    return (0, i.jsxs)(n.default, {
                        className: T.row,
                        grow: 0,
                        children: [(0, i.jsx)("div", {
                            className: T.iconContainer,
                            children: a
                        }), (0, i.jsxs)("div", {
                            className: T.rowContent,
                            children: [(0, i.jsx)(s.Text, {
                                className: T.rowHeader,
                                variant: "text-sm/bold",
                                children: t
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-xs/medium",
                                children: l
                            })]
                        })]
                    })
                };
            var v = e => {
                let {
                    transitionState: t,
                    onClose: l
                } = e, a = (0, c.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, u.default)(), d = Array.from(C.ACTION_TO_TEXT.entries());
                return (0, i.jsxs)(s.ModalRoot, {
                    transitionState: t,
                    children: [(0, i.jsx)("img", {
                        className: T.art,
                        src: p,
                        alt: f.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                    }), (0, i.jsx)(s.ModalContent, {
                        className: T.content,
                        children: (0, i.jsxs)(n.default, {
                            direction: n.default.Direction.VERTICAL,
                            align: n.default.Align.CENTER,
                            children: [(0, i.jsx)(s.Heading, {
                                className: T.header,
                                color: "header-primary",
                                variant: "heading-lg/semibold",
                                children: (0, i.jsx)(s.HeadingLevel, {
                                    children: a
                                })
                            }), d.map(e => {
                                let [t, l] = e;
                                return (0, i.jsx)(A, {
                                    icon: x[t],
                                    header: l.tooltipHeader(),
                                    description: l.tooltipDescription(null != r ? r : void 0)
                                }, t)
                            })]
                        })
                    }), (0, i.jsx)(s.ModalFooter, {
                        children: (0, i.jsx)(s.Button, {
                            className: T.button,
                            type: "button",
                            color: s.Button.Colors.BRAND,
                            onClick: l,
                            children: f.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        821586: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var i = l("920040");
            l("773670");
            var n = l("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = "currentColor",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, n.default)(a),
                    width: t,
                    height: l,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: s
                    }), (0, i.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: s
                    })]
                })
            }
        },
        887657: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var i = l("920040");
            l("773670");
            var n = l("469563"),
                s = l("202998"),
                a = l("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"
                        })
                    })
                }, s.PhoneCallIcon)
        }
    }
]);