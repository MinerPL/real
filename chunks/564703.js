            "use strict";
            n.r(t), n.d(t, {
                calculateAnalyticsMetadata: function() {
                    return l
                }
            });
            var r = n("49111");

            function l(e, t, n) {
                let l = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: a,
                        limit: i,
                        results: u,
                        totalResults: s
                    } = null != n ? n : {};
                return {
                    search_type: r.SearchTypes.GIF,
                    load_id: e,
                    limit: i,
                    offset: a,
                    page: null != i && null != a ? Math.floor(a / i) + 1 : 1,
                    total_results: s,
                    page_results: null != u ? u.length : null,
                    num_modifiers: Object.keys(l).length,
                    modifiers: l
                }
            }