            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var o = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                i = n("685665"),
                u = n("697218"),
                s = n("476765"),
                d = n("719923"),
                l = n("78581"),
                c = n("846325"),
                f = n("782340");

            function p(e, t) {
                let {
                    analyticsLocations: n
                } = (0, i.default)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), O = (0, s.useUID)(), h = (0, s.useUID)();
                return null != t && d.default.canUseCustomCallSounds(p) ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(a.MenuItem, {
                        id: O,
                        label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                        action: () => (0, l.updateCustomJoinSound)(t, e, n)
                    }), (0, o.jsx)(a.MenuItem, {
                        id: h,
                        label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                        action: () => (0, l.updateCustomJoinSound)(c.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID, e, n)
                    })]
                }) : null
            }