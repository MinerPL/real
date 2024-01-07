            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("621115"),
                l = s("933351"),
                i = s("977618"),
                r = function(e) {
                    let {
                        formField: t,
                        index: s,
                        isDragEnabled: r,
                        isDropHovered: o,
                        onDrop: d,
                        onEdit: u,
                        onRemove: c
                    } = e, {
                        label: E,
                        placeholder: _
                    } = t;
                    return (0, a.jsx)(l.default, {
                        field: t,
                        index: s,
                        isDragEnabled: r,
                        isDropHovered: o,
                        onDrop: d,
                        onEdit: u,
                        onRemove: c,
                        title: E,
                        children: (0, a.jsx)(n.TextInputFieldBody, {
                            className: i.fieldBackground,
                            placeholder: _,
                            disabled: !0
                        })
                    })
                }