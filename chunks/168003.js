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
                m = n("936947"),
                S = n("379304"),
                g = n("534222"),
                N = n("601131"),
                T = n("47495"),
                A = n("834052"),
                M = n("715243"),
                v = n("458574"),
                I = n("963150"),
                h = n("308798"),
                O = n("47006"),
                C = n("809259"),
                L = n("878526"),
                b = n("44141"),
                U = n("531674"),
                D = n("619436"),
                x = n("625399"),
                y = n("339876"),
                R = n("702741"),
                G = n("782000"),
                V = n("45593"),
                F = n("604887"),
                P = n("958936"),
                w = n("49111"),
                k = n("782340");

            function j(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([A.default], () => d ? A.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, v.default)(t), S = (0, g.useActiveEvent)(t.id), M = (0, N.default)(null == S ? void 0 : S.id, n, t), I = (0, G.default)(t, r), h = (0, _.useAddToFavoritesItem)(t), L = (0, _.useRemoveFromFavoritesItem)(t), b = (0, p.default)(t), U = (0, E.default)(t), y = (0, m.default)(t), V = (0, C.default)(t), F = (0, D.default)(t), w = (0, O.default)(t), j = (0, P.default)(t, n), H = (0, c.default)({
                    id: t.id,
                    label: k.default.Messages.COPY_ID_CHANNEL
                }), B = (0, R.default)(t), Y = (0, o.default)(t), W = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), K = (0, x.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": k.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != S ? M : I
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [U, y, b, h]
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [V, W ? K : F, w]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: Y
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: L
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [j, f]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: B
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: H
                    })]
                })
            }

            function H(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([A.default], () => d ? A.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, b.default)(t), p = (0, v.default)(t), E = (0, g.useActiveEvent)(t.id), m = (0, N.default)(null == E ? void 0 : E.id, n, t), w = (0, G.default)(t, r), j = (0, _.useAddToFavoritesItem)(t), H = (0, _.useRemoveFromFavoritesItem)(t), B = (0, C.default)(t), Y = (0, D.default)(t), W = (0, O.default)(t), K = (0, L.default)(t, n, r), q = (0, P.default)(t, n), Z = (0, V.default)(t, n), X = (0, F.default)(t, n.id), z = (0, M.default)(t, n), Q = (0, I.default)(t, n), J = (0, h.default)(t), $ = (0, c.default)({
                    id: t.id,
                    label: k.default.Messages.COPY_ID_CHANNEL
                }), ee = (0, R.default)(t), et = (0, o.default)(t), en = (0, y.default)(t), ea = (0, S.default)(t), ei = (0, U.default)(t), es = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, x.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": k.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: null != E ? m : w
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: f
                    }, "mark-as-read"), (0, a.jsxs)(s.MenuGroup, {
                        children: [K, et, en, j, p]
                    }, "channel-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [X, q, Z, B, ea, ee]
                    }, "voice-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [ei, es ? eu : Y]
                    }, "notifications"), (0, a.jsx)(s.MenuGroup, {
                        children: H
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [W, z, Q, J]
                    }, "admin-actions"), (0, a.jsx)(s.MenuGroup, {
                        children: $
                    }, "developer-actions")]
                })
            }
            var B = (0, d.default)((0, l.default)(function(e) {
                let t = (0, f.default)();
                return t ? (0, a.jsx)(j, {
                    ...e
                }) : (0, a.jsx)(H, {
                    ...e
                })
            }, {
                object: w.AnalyticsObjects.CONTEXT_MENU
            }), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])