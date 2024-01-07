            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("472850"),
                r = s("933351"),
                o = s("977618"),
                d = function(e) {
                    let {
                        formField: t,
                        index: s,
                        isDragEnabled: n,
                        isDropHovered: d,
                        onDrop: u,
                        onEdit: c,
                        onRemove: E
                    } = e, {
                        label: _
                    } = t;
                    return (0, a.jsx)(r.default, {
                        field: t,
                        index: s,
                        isDragEnabled: n,
                        isDropHovered: d,
                        onDrop: u,
                        onEdit: c,
                        onRemove: E,
                        title: _,
                        children: (0, a.jsx)(i.MultipleChoiceFieldBody, {
                            field: t,
                            value: void 0,
                            radioItemClassName: l(o.fieldBackground, o.multipleChoiceFixedTextColor),
                            disabled: !1
                        })
                    })
                }