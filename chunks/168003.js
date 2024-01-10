            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                u = n("272030"),
                l = n("838446"),
                d = n("158534"),
                o = n("846883"),
                r = n("812204"),
                c = n("861370"),
                f = n("20209"),
                _ = n("972701"),
                p = n("390008"),
                E = n("41205"),
                S = n("936947"),
                m = n("379304"),
                g = n("534222"),
                N = n("601131"),
                T = n("47495"),
                A = n("834052"),
                M = n("715243"),
                v = n("458574"),
                O = n("963150"),
                I = n("308798"),
                h = n("47006"),
                C = n("809259"),
                U = n("878526"),
                L = n("44141"),
                b = n("531674"),
                D = n("619436"),
                x = n("625399"),
                y = n("339876"),
                R = n("702741"),
                G = n("782000"),
                F = n("45593"),
                V = n("604887"),
                P = n("958936"),
                w = n("49111"),
                H = n("782340");

            function k(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([A.default], () => d ? A.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, v.default)(t), m = (0, g.useActiveEvent)(t.id), M = (0, N.default)(null == m ? void 0 : m.id, n, t), O = (0, G.default)(t, r), I = (0, _.useAddToFavoritesItem)(t), U = (0, _.useRemoveFromFavoritesItem)(t), L = (0, p.default)(t), b = (0, E.default)(t), y = (0, S.default)(t), F = (0, C.default)(t), V = (0, D.default)(t), w = (0, h.default)(t), k = (0, P.default)(t, n), j = (0, c.default)({
                    id: t.id,
                    label: H.default.Messages.COPY_ID_CHANNEL
                }), B = (0, R.default)(t), Y = (0, o.default)(t), W = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), K = (0, x.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": H.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != m ? M : O
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [b, y, L, I]
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [F, W ? K : V, w]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: Y
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: U
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [k, f]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: B
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: j
                    })]
                })
            }

            function j(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([A.default], () => d ? A.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, L.default)(t), p = (0, v.default)(t), E = (0, g.useActiveEvent)(t.id), S = (0, N.default)(null == E ? void 0 : E.id, n, t), w = (0, G.default)(t, r), k = (0, _.useAddToFavoritesItem)(t), j = (0, _.useRemoveFromFavoritesItem)(t), B = (0, C.default)(t), Y = (0, D.default)(t), W = (0, h.default)(t), K = (0, U.default)(t, n, r), q = (0, P.default)(t, n), Z = (0, F.default)(t, n), X = (0, V.default)(t, n.id), z = (0, M.default)(t, n), Q = (0, O.default)(t, n), J = (0, I.default)(t), $ = (0, c.default)({
                    id: t.id,
                    label: H.default.Messages.COPY_ID_CHANNEL
                }), ee = (0, R.default)(t), et = (0, o.default)(t), en = (0, y.default)(t), ea = (0, m.default)(t), ei = (0, b.default)(t), es = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, x.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": H.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != E ? S : w
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: f
                    }, "mark-as-read"), (0, a.jsxs)(s.MenuGroup, {
                        children: [K, et, en, k, p]
                    }, "channel-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [X, q, Z, B, ea, ee]
                    }, "voice-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [ei, es ? eu : Y]
                    }, "notifications"), (0, a.jsx)(s.MenuGroup, {
                        children: j
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [W, z, Q, J]
                    }, "admin-actions"), (0, a.jsx)(s.MenuGroup, {
                        children: $
                    }, "developer-actions")]
                })
            }
            var B = (0, d.default)((0, l.default)(function(e) {
                let t = (0, f.default)();
                return t ? (0, a.jsx)(k, {
                    ...e
                }) : (0, a.jsx)(j, {
                    ...e
                })
            }, {
                object: w.AnalyticsObjects.CONTEXT_MENU
            }), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])