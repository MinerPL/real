            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getGuildIdForGenericRedirect: function() {
                    return d
                }
            });
            var s = n("446674"),
                i = n("162771"),
                r = n("379881"),
                a = n("49111");

            function o(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.getGuildId());
                return null != t ? t : e.getGuildId()
            }

            function d(e) {
                return i.default.getGuildId() !== a.FAVORITES ? e.getGuildId() : r.default.isFavorite(e.id) || e.isThread() && r.default.isFavorite(e.parent_id) ? a.FAVORITES : e.getGuildId()
            }