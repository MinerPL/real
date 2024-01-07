            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983"),
                l = i("884691"),
                s = i("77078"),
                a = i("782340"),
                r = i("21104");

            function o(e) {
                let {
                    pack: t,
                    disabled: i = !1,
                    "aria-label": o = !1,
                    children: u
                } = e;
                return (0, n.jsx)(s.Tooltip, {
                    hideOnClick: !0,
                    spacing: 20,
                    position: "right",
                    text: i ? null : (0, n.jsx)("span", {
                        children: a.default.Messages.EMOJI_CATEGORY_PACK.format({
                            packName: t.name
                        })
                    }),
                    "aria-label": o,
                    tooltipClassName: r.listItemTooltip,
                    children: e => {
                        let {
                            onFocus: t,
                            onBlur: i,
                            ...s
                        } = e;
                        return (0, n.jsx)("div", {
                            onFocus: t,
                            onBlur: i,
                            children: l.cloneElement(l.Children.only(u), {
                                ...s
                            })
                        })
                    }
                })
            }