            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("697218"),
                r = n("153769"),
                o = n("719923"),
                u = n("805199"),
                d = n("513196"),
                c = n("42723"),
                f = n("605475");

            function h() {
                let [e, t, n] = (0, a.useStateFromStoresArray)([i.default, u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen, o.default.isPremium(i.default.getCurrentUser())]), h = f.ICONS_BY_ID[e], C = e !== d.FreemiumAppIconIds.DEFAULT && (n || t), p = (0, s.useRedesignIconContext)().enabled, m = (0, l.jsx)(r.default, {
                    width: 30,
                    height: p ? 30 : 22
                });
                return null != h && C ? (0, l.jsx)(c.default, {
                    id: e,
                    width: 48
                }) : m
            }