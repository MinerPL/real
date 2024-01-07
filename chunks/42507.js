            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return o
                }
            });
            var n = r("884691"),
                i = r("446674"),
                a = r("872173"),
                l = r("374363");

            function o() {
                return n.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }