            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getGuildIdForGenericRedirect: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("162771"),
                l = n("379881"),
                s = n("49111");

            function r(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.getGuildId());
                return null != t ? t : e.getGuildId()
            }

            function u(e) {
                return a.default.getGuildId() !== s.FAVORITES ? e.getGuildId() : l.default.isFavorite(e.id) || e.isThread() && l.default.isFavorite(e.parent_id) ? s.FAVORITES : e.getGuildId()
            }