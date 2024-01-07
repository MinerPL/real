            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("102499");

            function i(e) {
                let {
                    changePage: t,
                    offset: n,
                    totalResults: i,
                    pageLength: r
                } = e;
                return (0, a.jsx)("div", {
                    className: s.container,
                    children: (0, a.jsx)(l.Paginator, {
                        currentPage: Math.floor(n / r) + 1,
                        totalCount: i,
                        pageSize: r,
                        onPageChange: t,
                        maxVisiblePages: 5
                    })
                })
            }