            "use strict";
            s.r(t), s.d(t, {
                useSelectedSortOrder: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("90490");

            function i(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([l.default], () => l.default.getSelectedSortOrder(t), [t]);
                return s
            }