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
                o = n("158534"),
                r = n("846883"),
                d = n("812204"),
                c = n("861370"),
                f = n("20209"),
                _ = n("972701"),
                p = n("390008"),
                E = n("41205"),
                S = n("936947"),
                m = n("379304"),
                g = n("534222"),
                N = n("601131"),
                v = n("47495"),
                A = n("834052"),
                T = n("715243"),
                h = n("458574"),
                M = n("963150"),
                I = n("308798"),
                O = n("47006"),
                C = n("809259"),
                U = n("878526"),
                L = n("44141"),
                b = n("531674"),
                D = n("619436"),
                y = n("625399"),
                R = n("339876"),
                x = n("702741"),
                F = n("782000"),
                G = n("45593"),
                V = n("604887"),
                P = n("958936"),
                k = n("49111"),
                w = n("782340");

            function H(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, o = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([A.default], () => o ? A.default.getStageInstanceByChannel(t.id) : void 0, [o, t.id]), f = (0, h.default)(t), m = (0, g.useActiveEvent)(t.id), T = (0, N.default)(null == m ? void 0 : m.id, n, t), M = (0, F.default)(t, d), I = (0, _.useAddToFavoritesItem)(t), U = (0, _.useRemoveFromFavoritesItem)(t), L = (0, p.default)(t), b = (0, E.default)(t), R = (0, S.default)(t), G = (0, C.default)(t), V = (0, D.default)(t), k = (0, O.default)(t), H = (0, P.default)(t, n), j = (0, c.default)({
                    id: t.id,
                    label: w.default.Messages.COPY_ID_CHANNEL
                }), B = (0, x.default)(t), Y = (0, r.default)(t), W = (0, v.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), K = (0, y.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != m ? T : M
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [b, R, L, I]
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [G, W ? K : V, k]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: Y
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: U
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [H, f]
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
                } = e, o = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([A.default], () => o ? A.default.getStageInstanceByChannel(t.id) : void 0, [o, t.id]), f = (0, L.default)(t), p = (0, h.default)(t), E = (0, g.useActiveEvent)(t.id), S = (0, N.default)(null == E ? void 0 : E.id, n, t), k = (0, F.default)(t, d), H = (0, _.useAddToFavoritesItem)(t), j = (0, _.useRemoveFromFavoritesItem)(t), B = (0, C.default)(t), Y = (0, D.default)(t), W = (0, O.default)(t), K = (0, U.default)(t, n, d), q = (0, P.default)(t, n), Q = (0, G.default)(t, n), Z = (0, V.default)(t, n.id), X = (0, T.default)(t, n), z = (0, M.default)(t, n), J = (0, I.default)(t), $ = (0, c.default)({
                    id: t.id,
                    label: w.default.Messages.COPY_ID_CHANNEL
                }), ee = (0, x.default)(t), et = (0, r.default)(t), en = (0, R.default)(t), ea = (0, m.default)(t), ei = (0, b.default)(t), es = (0, v.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, y.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != E ? S : k
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: f
                    }, "mark-as-read"), (0, a.jsxs)(s.MenuGroup, {
                        children: [K, et, en, H, p]
                    }, "channel-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [Z, q, Q, B, ea, ee]
                    }, "voice-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [ei, es ? eu : Y]
                    }, "notifications"), (0, a.jsx)(s.MenuGroup, {
                        children: j
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [W, X, z, J]
                    }, "admin-actions"), (0, a.jsx)(s.MenuGroup, {
                        children: $
                    }, "developer-actions")]
                })
            }
            var B = (0, o.default)((0, l.default)(function(e) {
                let t = (0, f.default)();
                return t ? (0, a.jsx)(H, {
                    ...e
                }) : (0, a.jsx)(j, {
                    ...e
                })
            }, {
                object: k.AnalyticsObjects.CONTEXT_MENU
            }), [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])