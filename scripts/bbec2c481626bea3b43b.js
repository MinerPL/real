(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67288"], {
        818430: function(e, t, a) {
            "use strict";
            e.exports = a.p + "8d1c641db1d81daae0da.svg"
        },
        962512: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var s = a("920040"),
                n = a("773670"),
                l = a("161179"),
                r = a.n(l),
                i = a("64379"),
                d = a("498225"),
                o = a("77078"),
                c = a("404118"),
                u = a("216503"),
                f = a("157357"),
                C = a("700507"),
                m = a("76393"),
                h = a("782340"),
                N = a("286614"),
                v = a("818430");

            function x(e) {
                let {
                    name: t,
                    subText: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: N.deviceItemName,
                    children: [(0, s.jsx)(f.default, {
                        className: N.deviceItemIcon
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: t
                        }), a]
                    })]
                })
            }

            function I(e) {
                let {
                    devices: t,
                    onFinished: a,
                    selectedDeviceId: n,
                    onSelectDeviceId: l,
                    transferring: r
                } = e, i = t.map(e => {
                    let {
                        id: t,
                        name: a,
                        platform: n
                    } = e;
                    return {
                        value: t,
                        name: (0, s.jsx)(x, {
                            name: a,
                            platform: n
                        })
                    }
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: N.modalHeaderContainer,
                        children: [(0, s.jsx)(o.Heading, {
                            className: N.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
                        })]
                    }), (0, s.jsxs)(o.ModalContent, {
                        className: N.content,
                        children: [(0, s.jsx)(o.RadioGroup, {
                            radioPosition: "right",
                            radioItemClassName: N.deviceItem,
                            size: o.RadioGroup.Sizes.NOT_SET,
                            value: n,
                            options: i,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return l(t)
                            }
                        }), (0, s.jsx)(u.default, {
                            children: h.default.Messages.PLAYSTATION_DEVICES_INFOBOX
                        })]
                    }), (0, s.jsx)(o.ModalFooter, {
                        children: (0, s.jsx)(o.Button, {
                            disabled: null == n,
                            submitting: r,
                            onClick: a,
                            children: h.default.Messages.CONSOLE_TRANSFER_VOICE
                        })
                    })]
                })
            }

            function O() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: N.modalHeaderContainer,
                        children: [(0, s.jsx)(o.Heading, {
                            className: N.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
                        })]
                    }), (0, s.jsx)(o.ModalContent, {
                        className: N.emptyArt,
                        children: (0, s.jsx)("img", {
                            src: v,
                            width: "189",
                            height: "177",
                            alt: ""
                        })
                    })]
                })
            }

            function S(e) {
                var t;
                let a, {
                        channel: l,
                        platform: u,
                        transitionState: f,
                        onClose: v
                    } = e,
                    x = (0, d.useStateFromStores)([m.default], () => m.default.getDevicesForPlatform(u), [u]),
                    S = (0, d.useStateFromStores)([m.default], () => m.default.getLastSelectedDeviceByPlatform(u)),
                    g = n.useMemo(() => Object.values(x), [x]),
                    j = (0, d.useStateFromStores)([m.default], () => m.default.getFetchingDevices(u)),
                    p = (0, d.useStateFromStores)([m.default], () => {
                        var e;
                        return null === (e = m.default.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
                    }),
                    [_, E] = n.useState(!1),
                    [M, R] = n.useState(() => {
                        var e;
                        return null !== (t = null === (e = x[null != p ? p : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null
                    });
                n.useEffect(() => {
                    C.fetchDevices(u)
                }, [u]), n.useEffect(() => {
                    1 === g.length ? R(g[0].id) : null != S && R(S)
                }, [g, S]);
                let A = async () => {
                    let e = x[null != M ? M : ""];
                    r(null != e, "Cannot transfer without selected device");
                    try {
                        E(!0), await C.transferToPlayStation(u, e.id, l), v()
                    } catch (t) {
                        E(!1), c.default.show({
                            title: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                            body: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                                deviceName: e.name
                            })
                        })
                    }
                };
                return a = j ? (0, s.jsx)("div", {
                    className: N.spinnerContainer,
                    children: (0, s.jsx)(o.Spinner, {})
                }) : 0 === g.length ? (0, s.jsx)(O, {}) : (0, s.jsx)(I, {
                    devices: g,
                    onFinished: A,
                    selectedDeviceId: M,
                    transferring: _ || null != p,
                    onSelectDeviceId: e => {
                        R(e), (0, C.persistSelectedDeviceId)(u, e)
                    }
                }), (0, s.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    className: N.modalRoot,
                    transitionState: f,
                    impression: {
                        impressionName: i.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
                    },
                    children: [a, (0, s.jsx)(o.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: v
                    })]
                })
            }
        },
        216503: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                InfoBoxLooks: function() {
                    return n
                },
                default: function() {
                    return m
                }
            });
            var s, n, l = a("920040");
            a("773670");
            var r = a("575482"),
                i = a.n(r),
                d = a("77078"),
                o = a("266926"),
                c = a("423487"),
                u = a("704674");
            (s = n || (n = {})).INFO = "info", s.WARNING = "warning";
            let f = {
                    [n.INFO]: u.info,
                    [n.WARNING]: u.warning
                },
                C = {
                    [n.INFO]: o.default,
                    [n.WARNING]: c.default
                };

            function m(e) {
                let {
                    children: t,
                    className: a,
                    look: s = n.INFO
                } = e, r = C[s];
                return (0, l.jsxs)("div", {
                    className: i(u.root, a, f[s]),
                    children: [(0, l.jsx)(r, {
                        className: u.icon
                    }), (0, l.jsx)(d.Text, {
                        className: u.text,
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: t
                    })]
                })
            }
        },
        266926: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("469563"),
                l = a("225389"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        backgroundColor: l,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [null != l ? (0, s.jsx)("circle", {
                            r: 8,
                            cx: 12,
                            cy: 12,
                            fill: l
                        }) : null, (0, s.jsx)("path", {
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 6.751C12.69 6.751 13.25 7.311 13.25 8.001C13.25 8.692 12.69 9.251 12 9.251C11.31 9.251 10.75 8.691 10.75 8C10.75 7.31 11.31 6.751 12 6.751ZM15 17H9V15H11V12H10V10H12C12.553 10 13 10.448 13 11V15H15V17Z",
                            fill: n
                        })]
                    })
                }, l.CircleInformationIcon)
        },
        157357: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: l = "currentColor",
                    foreground: r,
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, n.default)(i),
                    width: t,
                    height: a,
                    viewBox: "0 0 24 25",
                    children: [(0, s.jsx)("path", {
                        className: r,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                        "aria-hidden": !0
                    }), (0, s.jsx)("path", {
                        className: r,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                        "aria-hidden": !0
                    }), (0, s.jsx)("path", {
                        className: r,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
                        "aria-hidden": !0
                    })]
                })
            }
        }
    }
]);