            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                l = a("627445"),
                i = a.n(l),
                r = a("759843"),
                d = a("446674"),
                o = a("77078"),
                c = a("404118"),
                u = a("216503"),
                f = a("157357"),
                C = a("700507"),
                m = a("76393"),
                h = a("782340"),
                v = a("817718"),
                x = a("818430");

            function N(e) {
                let {
                    name: t,
                    subText: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: v.deviceItemName,
                    children: [(0, n.jsx)(f.default, {
                        className: v.deviceItemIcon
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: t
                        }), a]
                    })]
                })
            }

            function g(e) {
                let {
                    devices: t,
                    onFinished: a,
                    selectedDeviceId: s,
                    onSelectDeviceId: l,
                    transferring: i
                } = e, r = t.map(e => {
                    let {
                        id: t,
                        name: a,
                        platform: s
                    } = e;
                    return {
                        value: t,
                        name: (0, n.jsx)(N, {
                            name: a,
                            platform: s
                        })
                    }
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: v.modalHeaderContainer,
                        children: [(0, n.jsx)(o.Heading, {
                            className: v.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
                        })]
                    }), (0, n.jsxs)(o.ModalContent, {
                        className: v.content,
                        children: [(0, n.jsx)(o.RadioGroup, {
                            radioPosition: "right",
                            radioItemClassName: v.deviceItem,
                            size: o.RadioGroup.Sizes.NOT_SET,
                            value: s,
                            options: r,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return l(t)
                            }
                        }), (0, n.jsx)(u.default, {
                            children: h.default.Messages.PLAYSTATION_DEVICES_INFOBOX
                        })]
                    }), (0, n.jsx)(o.ModalFooter, {
                        children: (0, n.jsx)(o.Button, {
                            disabled: null == s,
                            submitting: i,
                            onClick: a,
                            children: h.default.Messages.CONSOLE_TRANSFER_VOICE
                        })
                    })]
                })
            }

            function S() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: v.modalHeaderContainer,
                        children: [(0, n.jsx)(o.Heading, {
                            className: v.modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        className: v.emptyArt,
                        children: (0, n.jsx)("img", {
                            src: x,
                            width: "189",
                            height: "177",
                            alt: ""
                        })
                    })]
                })
            }

            function j(e) {
                let t, {
                        channel: a,
                        platform: l,
                        transitionState: u,
                        onClose: f
                    } = e,
                    x = (0, d.useStateFromStores)([m.default], () => m.default.getDevicesForPlatform(l), [l]),
                    N = (0, d.useStateFromStores)([m.default], () => m.default.getLastSelectedDeviceByPlatform(l)),
                    j = s.useMemo(() => Object.values(x), [x]),
                    O = (0, d.useStateFromStores)([m.default], () => m.default.getFetchingDevices(l)),
                    I = (0, d.useStateFromStores)([m.default], () => {
                        var e;
                        return null === (e = m.default.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
                    }),
                    [p, _] = s.useState(!1),
                    [E, M] = s.useState(() => {
                        var e, t;
                        return null !== (t = null === (e = x[null != I ? I : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null
                    });
                s.useEffect(() => {
                    C.fetchDevices(l)
                }, [l]), s.useEffect(() => {
                    1 === j.length ? M(j[0].id) : null != N && M(N)
                }, [j, N]);
                let R = async () => {
                    let e = x[null != E ? E : ""];
                    i(null != e, "Cannot transfer without selected device");
                    try {
                        _(!0), await C.transferToPlayStation(l, e.id, a), f()
                    } catch (t) {
                        _(!1), c.default.show({
                            title: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                            body: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                                deviceName: e.name
                            })
                        })
                    }
                };
                return t = O ? (0, n.jsx)("div", {
                    className: v.spinnerContainer,
                    children: (0, n.jsx)(o.Spinner, {})
                }) : 0 === j.length ? (0, n.jsx)(S, {}) : (0, n.jsx)(g, {
                    devices: j,
                    onFinished: R,
                    selectedDeviceId: E,
                    transferring: p || null != I,
                    onSelectDeviceId: e => {
                        M(e), (0, C.persistSelectedDeviceId)(l, e)
                    }
                }), (0, n.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    className: v.modalRoot,
                    transitionState: u,
                    impression: {
                        impressionName: r.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
                    },
                    children: [t, (0, n.jsx)(o.ModalCloseButton, {
                        className: v.closeButton,
                        onClick: f
                    })]
                })
            }