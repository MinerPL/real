            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("642622");

            function o(e) {
                let {
                    checked: t,
                    onChange: s,
                    disabled: n,
                    className: o,
                    tooltipProps: d
                } = e, u = e => {
                    e.stopPropagation(), e.preventDefault()
                };
                return (0, a.jsx)(i.Clickable, {
                    onClick: u,
                    onMouseDown: u,
                    onMouseUp: u,
                    className: l(r.switch, o),
                    ...d,
                    children: (0, a.jsx)(i.Switch, {
                        checked: t,
                        onChange: s,
                        disabled: n
                    })
                })
            }