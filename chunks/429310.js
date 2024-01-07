            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("77078"),
                o = l("36694"),
                d = l("945330"),
                u = l("782340"),
                c = l("797962");
            let f = [!1, !0];

            function m(e) {
                let {
                    isDisabled: t,
                    currentValue: l,
                    onChange: s
                } = e, o = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: t
                }), d = a.useCallback(e => {
                    !t && e !== l && s(e)
                }, [t, l, s]);
                return (0, n.jsx)("div", {
                    className: i(c.group, {
                        [c.disabled]: t
                    }),
                    ...o,
                    children: f.map(e => (0, n.jsx)(I, {
                        isSelected: l === e,
                        itemValue: e,
                        onClick: () => d(e)
                    }, e.toString()))
                })
            }

            function I(e) {
                let {
                    isSelected: t,
                    itemValue: l,
                    onClick: a
                } = e, s = l ? c.allow : c.deny, f = l ? o.default : d.default, m = l ? u.default.Messages.PERMISSION_OVERRIDE_ALLOW : u.default.Messages.PERMISSION_OVERRIDE_DENY, I = (0, r.useRadioItem)({
                    isSelected: t,
                    label: m
                });
                return (0, n.jsx)(r.Clickable, {
                    className: i(c.item, s, {
                        [c.selected]: t
                    }),
                    onClick: a,
                    ...I,
                    children: (0, n.jsx)(f, {
                        width: 16,
                        height: 16
                    })
                })
            }