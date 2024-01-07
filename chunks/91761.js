            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            }), i("222007");
            var l = i("446674"),
                a = i("84460"),
                n = i("807106"),
                r = i("119420"),
                d = i("243244");

            function o(e) {
                let {
                    guildId: t,
                    isWatchTogetherPromoEnabled: i = !1,
                    disableFilter: o = !1
                } = e, {
                    enableDeveloperActivityShelf: u,
                    filter: c
                } = (0, l.useStateFromStoresObject)([a.default], () => ({
                    enableDeveloperActivityShelf: a.default.getIsEnabled(),
                    filter: a.default.getFilter()
                })), s = (0, d.default)(t, i), f = (0, n.default)(s), p = (0, r.useDeveloperActivityShelfItems)();
                return [...p, ...f].map(e => {
                    let [t, i] = e;
                    return [t, i.filter(e => o || !u || "" === c || e.application.name.toLocaleLowerCase().includes(c.toLocaleLowerCase()))]
                })
            }