            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("272030"),
                d = n("901582"),
                i = n("861370"),
                r = n("455933"),
                s = n("248900"),
                o = n("385752"),
                c = n("222971"),
                E = n("601131"),
                f = n("876725"),
                _ = n("367989"),
                S = n("891603"),
                T = n("510692"),
                v = n("49111"),
                I = n("782340");

            function N(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: N,
                    guild: g,
                    analyticsContext: m,
                    isRecurrenceItem: R = !1,
                    onSelect: h
                } = e, p = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), M = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), C = (0, c.default)({
                    guildEventId: t,
                    guild: g,
                    channel: N,
                    recurrenceId: n,
                    isRecurrenceItem: R
                }), D = (0, E.default)(t, g, N), O = (0, T.default)(t, g, N), A = (0, s.default)(t, g.id, n), L = (0, f.default)(t), x = (0, i.default)({
                    id: null != n ? n : t,
                    label: I.default.Messages.COPY_ID_EVENT
                }), y = (0, r.default)(t, g.id, N, n), G = (0, S.default)({
                    guildEventId: t,
                    guildId: g.id,
                    recurrenceId: n
                });
                return (0, l.jsx)(d.default, {
                    context: m,
                    object: v.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [y, !R && O, C, !R && D, M, p, A, R && G]
                        }), !R && (0, l.jsx)(u.MenuGroup, {
                            children: L
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: x
                        })]
                    })
                })
            }