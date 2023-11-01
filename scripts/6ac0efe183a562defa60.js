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
                    return _
                }
            });
            var s = a("37983"),
                n = a("884691"),
                r = a("627445"),
                l = a.n(r),
                i = a("759843"),
                d = a("446674"),
                o = a("77078"),
                c = a("404118"),
                u = a("216503"),
                m = a("157357"),
                N = a("700507"),
                f = a("76393"),
                h = a("782340"),
                x = a("817718"),
                v = a("818430");

            function O(e) {
                let {
                    name: t,
                    subText: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: x.deviceItemName,
                    children: [(0, s.jsx)(m.default, {
                        className: x.deviceItemIcon
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: t
                        }), a]
                    })]
                })
            }

            function S(e) {
                let {
                    devices: t,
                    onFinished: a,
                    selectedDeviceId: n,
                    onSelectDeviceId: r,
                    transferring: l
                } = e, i = t.map(e => {
                    let {
                        id: t,
                        name: a,
                        platform: n
                    } = e;
                    return {
                        value: t,
                        name: (0, s.jsx)(O, {
                            name: a,
                            platform: n
                        })
                    }
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: x.modalHeaderContainer,
                        children: [(0, s.jsx)(o.Heading, {
                            className: x.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
                        })]
                    }), (0, s.jsxs)(o.ModalContent, {
                        className: x.content,
                        children: [(0, s.jsx)(o.RadioGroup, {
                            radioPosition: "right",
                            radioItemClassName: x.deviceItem,
                            size: o.RadioGroup.Sizes.NOT_SET,
                            value: n,
                            options: i,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return r(t)
                            }
                        }), (0, s.jsx)(u.default, {
                            children: h.default.Messages.PLAYSTATION_DEVICES_INFOBOX
                        })]
                    }), (0, s.jsx)(o.ModalFooter, {
                        children: (0, s.jsx)(o.Button, {
                            disabled: null == n,
                            submitting: l,
                            onClick: a,
                            children: h.default.Messages.CONSOLE_TRANSFER_VOICE
                        })
                    })]
                })
            }

            function I() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: x.modalHeaderContainer,
                        children: [(0, s.jsx)(o.Heading, {
                            className: x.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
                        })]
                    }), (0, s.jsx)(o.ModalContent, {
                        className: x.emptyArt,
                        children: (0, s.jsx)("img", {
                            src: v,
                            width: "189",
                            height: "177",
                            alt: ""
                        })
                    })]
                })
            }

            function _(e) {
                var t;
                let a, {
                        channel: r,
                        platform: u,
                        transitionState: m,
                        onClose: v
                    } = e,
                    O = (0, d.useStateFromStores)([f.default], () => f.default.getDevicesForPlatform(u), [u]),
                    _ = (0, d.useStateFromStores)([f.default], () => f.default.getLastSelectedDeviceByPlatform(u)),
                    E = n.useMemo(() => Object.values(O), [O]),
                    g = (0, d.useStateFromStores)([f.default], () => f.default.getFetchingDevices(u)),
                    j = (0, d.useStateFromStores)([f.default], () => {
                        var e;
                        return null === (e = f.default.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
                    }),
                    [C, p] = n.useState(!1),
                    [A, T] = n.useState(() => {
                        var e;
                        return null !== (t = null === (e = O[null != j ? j : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null
                    });
                n.useEffect(() => {
                    N.fetchDevices(u)
                }, [u]), n.useEffect(() => {
                    1 === E.length ? T(E[0].id) : null != _ && T(_)
                }, [E, _]);
                let D = async () => {
                    let e = O[null != A ? A : ""];
                    l(null != e, "Cannot transfer without selected device");
                    try {
                        p(!0), await N.transferToPlayStation(u, e.id, r), v()
                    } catch (t) {
                        p(!1), c.default.show({
                            title: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                            body: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                                deviceName: e.name
                            })
                        })
                    }
                };
                return a = g ? (0, s.jsx)("div", {
                    className: x.spinnerContainer,
                    children: (0, s.jsx)(o.Spinner, {})
                }) : 0 === E.length ? (0, s.jsx)(I, {}) : (0, s.jsx)(S, {
                    devices: E,
                    onFinished: D,
                    selectedDeviceId: A,
                    transferring: C || null != j,
                    onSelectDeviceId: e => {
                        T(e), (0, N.persistSelectedDeviceId)(u, e)
                    }
                }), (0, s.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    className: x.modalRoot,
                    transitionState: m,
                    impression: {
                        impressionName: i.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
                    },
                    children: [a, (0, s.jsx)(o.ModalCloseButton, {
                        className: x.closeButton,
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
                    return f
                }
            });
            var s, n, r = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                d = a("77078"),
                o = a("266926"),
                c = a("423487"),
                u = a("759538");
            (s = n || (n = {})).INFO = "info", s.WARNING = "warning";
            let m = {
                    [n.INFO]: u.info,
                    [n.WARNING]: u.warning
                },
                N = {
                    [n.INFO]: o.default,
                    [n.WARNING]: c.default
                };

            function f(e) {
                let {
                    children: t,
                    className: a,
                    look: s = n.INFO
                } = e, l = N[s];
                return (0, r.jsxs)("div", {
                    className: i(u.root, a, m[s]),
                    children: [(0, r.jsx)(l, {
                        className: u.icon
                    }), (0, r.jsx)(d.Text, {
                        className: u.text,
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: t
                    })]
                })
            }
        }
    }
]);