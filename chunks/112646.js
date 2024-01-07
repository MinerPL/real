            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("446674"),
                u = n("77078"),
                a = n("685665"),
                i = n("697218"),
                s = n("476765"),
                c = n("719923"),
                l = n("78581"),
                d = n("846325"),
                f = n("782340");

            function p(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)(), p = (0, o.useStateFromStores)([i.default], () => i.default.getCurrentUser()), h = (0, s.useUID)(), O = (0, s.useUID)();
                return null != t && c.default.canUseCustomCallSounds(p) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.MenuItem, {
                        id: h,
                        label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                        action: () => (0, l.updateCustomJoinSound)(t, e, n)
                    }), (0, r.jsx)(u.MenuItem, {
                        id: O,
                        label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                        action: () => (0, l.updateCustomJoinSound)(d.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, e, n)
                    })]
                }) : null
            }