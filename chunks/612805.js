            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                i = a("77078"),
                o = a("418009"),
                u = a("95689"),
                c = a("100300"),
                d = a("782340"),
                E = a("105335");

            function _(e) {
                let {
                    label: t,
                    isSelected: a,
                    onClick: n,
                    children: s
                } = e, o = (0, i.useRadioItem)({
                    isSelected: a,
                    label: t
                });
                return (0, l.jsx)(i.Clickable, {
                    ...o,
                    onClick: n,
                    className: r(E.option, a && E.optionSelected),
                    children: s
                })
            }
            var f = function(e) {
                let {
                    selectedLayoutType: t,
                    onSelectedLayoutType: a
                } = e, s = (0, i.useRadioGroup)({
                    orientation: "horizontal"
                }), r = n.useMemo(() => [{
                    name: o.PollLayoutTypes.DEFAULT,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: c.default
                }, {
                    name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), f = e => {
                    a(e)
                };
                return (0, l.jsx)("div", {
                    className: E.container,
                    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: r.map(e => {
                        let a = e.icon;
                        return (0, l.jsx)(_, {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => f(e.name),
                            children: (0, l.jsx)(a, {
                                className: E.icon
                            })
                        }, e.name)
                    })
                })
            }