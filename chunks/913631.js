            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("617258"),
                o = i("246511"),
                u = i("557562"),
                c = i("587974"),
                d = i("469744"),
                f = e => {
                    let {
                        className: t,
                        pack: i,
                        isSelected: s = !0,
                        width: f = 32,
                        height: E = 32,
                        shouldAnimate: m = !0
                    } = e, [I, p] = l.useState(!1), g = (0, u.getPackIconURL)(i, 32, m && s), _ = () => p(!0), S = () => p(!1);
                    return (0, n.jsx)("div", {
                        onFocus: _,
                        onBlur: S,
                        onMouseOver: _,
                        onMouseLeave: S,
                        children: (0, n.jsx)(c.default, {
                            className: a(d.mask, t),
                            mask: s || I ? c.MaskIDs.SQUIRCLE : c.MaskIDs.AVATAR_DEFAULT,
                            width: f,
                            height: E,
                            children: null == g ? (0, n.jsx)("div", {
                                className: a(d.packIcon, d.packIconWithoutImage),
                                children: (0, n.jsx)("div", {
                                    className: d.packAcronym,
                                    children: (0, r.getAcronym)(i.name)
                                })
                            }) : (0, n.jsx)("img", {
                                "data-type": o.PickerContextMenuDataTypes.PACK_ICON,
                                "data-pack-id": i.id,
                                alt: i.name,
                                src: g,
                                className: d.packIcon
                            })
                        })
                    })
                }