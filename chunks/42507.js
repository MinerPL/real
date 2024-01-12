            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return i
                }
            });
            var r = n("884691"),
                u = n("446674"),
                s = n("872173"),
                l = n("374363");

            function i() {
                return r.useEffect(() => {
                    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }