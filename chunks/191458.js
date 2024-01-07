            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l("37983"),
                n = l("884691"),
                a = l("137223"),
                i = l("520479");
            let r = n.forwardRef(function(e, t) {
                let {
                    query: l,
                    onQueryChange: n,
                    onRemoveTag: r,
                    onSelect: o,
                    onSelectionChange: d,
                    selectedSection: c,
                    selectedRow: u,
                    tags: S,
                    sections: h,
                    placeholder: m = "",
                    focusAfterReady: E,
                    isReady: R,
                    "aria-labelledby": f,
                    "aria-controls": x
                } = e;
                return (0, s.jsx)(a.default, {
                    autoFocus: !0,
                    className: i.searchBar,
                    maxHeight: 100,
                    onQueryChange: n,
                    onRemoveTag: r,
                    selectedSection: c,
                    selectedRow: u,
                    onSelect: o,
                    onSelectionChange: d,
                    placeholder: 0 === S.length ? m : "",
                    query: l,
                    ref: t,
                    size: a.default.Sizes.MEDIUM,
                    tags: S,
                    sections: h,
                    focusAfterReady: E,
                    isReady: R,
                    inputProps: {
                        "aria-labelledby": f,
                        "aria-controls": x,
                        "aria-expanded": !0,
                        "aria-activedescendant": "user-row-".concat(u)
                    }
                })
            });
            var o = r