            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("77078"),
                u = n("191145"),
                o = n("509802"),
                d = n("124824"),
                c = n("981913"),
                f = n("778588"),
                h = n("235660"),
                p = n("261552"),
                m = n("742898"),
                E = n("813893"),
                C = n("424024"),
                S = n("379304"),
                g = n("171644"),
                _ = n("49111"),
                I = n("994428"),
                T = n("782340"),
                v = n("309607");

            function x(e) {
                let {
                    onClose: t,
                    channel: n
                } = e, l = (0, S.default)(n);
                return (0, a.jsx)(r.Menu, {
                    onClose: t,
                    onSelect: () => null,
                    navId: "transfer-menu",
                    "aria-label": T.default.Messages.TRANSFER,
                    children: l
                })
            }

            function N(e) {
                let {
                    channel: t,
                    showLeftDivider: n = !1,
                    ...S
                } = e, N = (0, p.default)(), A = (0, s.useStateFromStores)([h.default], () => {
                    var e, t;
                    return null === (e = h.default.getSessionById(null !== (t = null == N ? void 0 : N.sessionId) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.clientInfo.os
                }), M = (0, s.useStateFromStores)([f.default], () => f.default.hasLayers()), [R, j] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.getMode(t.id), u.default.getLayout(t.id)]), L = (0, r.useModalsStore)(r.hasAnyModalOpenSelector), O = (0, m.default)(), y = O.filter(e => e.twoWayLink), [b, P] = l.useState(!1);
                if (null == N && 0 === O.length || t.isBroadcastChannel()) return null;
                let D = _.ChannelModes.VOICE !== R && [_.ChannelLayouts.NO_CHAT, _.ChannelLayouts.FULL_SCREEN].includes(j) ? "top" : "bottom",
                    U = [];
                return y.length > 0 && U.push(i.DismissibleContent.DONUT_DESKTOP_NUX), (0, a.jsx)(o.default, {
                    contentTypes: U,
                    children: e => {
                        let {
                            visibleContent: l,
                            markAsDismissed: s
                        } = e, u = l === i.DismissibleContent.DONUT_DESKTOP_NUX;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [n ? (0, a.jsx)("div", {
                                className: v.leftDivider
                            }) : null, (0, a.jsx)(r.Popout, {
                                position: D,
                                spacing: u ? 16 : void 0,
                                positionKey: "".concat(R, ":").concat(j),
                                onRequestClose: () => P(!1),
                                shouldShow: (u || b) && !M && !L,
                                renderPopout: e => {
                                    let {
                                        closePopout: n
                                    } = e;
                                    return (0, a.jsx)(d.default, {
                                        children: u ? (0, a.jsx)(E.default, {
                                            popoutPosition: D,
                                            onDismiss: () => s(I.ContentDismissActionType.UNKNOWN),
                                            onAccept: () => {
                                                s(I.ContentDismissActionType.UNKNOWN), P(!0)
                                            },
                                            gameConsoleAccounts: y
                                        }) : (0, a.jsx)(x, {
                                            onClose: () => {
                                                n()
                                            },
                                            channel: t
                                        })
                                    })
                                },
                                children: e => {
                                    var t;
                                    return (0, a.jsx)(c.default, {
                                        ...e,
                                        ...S,
                                        onClick: () => P(!0),
                                        label: null != (t = A) ? t === g.GameConsoleTypes.XBOX ? T.default.Messages.XBOX_REMOTE_CONNECTED_RAW : T.default.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW : T.default.Messages.CONSOLE_TRANSFER,
                                        iconComponent: (0, C.default)(A)
                                    })
                                }
                            })]
                        })
                    }
                })
            }