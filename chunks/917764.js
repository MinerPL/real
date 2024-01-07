            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("587974"),
                o = i("333380"),
                u = e => {
                    let {
                        className: t,
                        guild: i,
                        isSelected: s = !0,
                        width: u = 32,
                        height: c = 32,
                        shouldAnimate: d = !0
                    } = e, [f, E] = l.useState(!1), m = i.getIconURL(32, d && s), I = () => E(!0), p = () => E(!1);
                    return (0, n.jsx)("div", {
                        onFocus: I,
                        onBlur: p,
                        onMouseOver: I,
                        onMouseLeave: p,
                        children: (0, n.jsx)(r.default, {
                            className: a(o.mask, t),
                            mask: s || f ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
                            width: u,
                            height: c,
                            children: null == m ? (0, n.jsx)("div", {
                                className: a(o.guildIcon, o.guildIconWithoutImage),
                                children: (0, n.jsx)("div", {
                                    className: o.guildAcronym,
                                    children: i.acronym
                                })
                            }) : (0, n.jsx)("img", {
                                alt: i.toString(),
                                src: m,
                                className: o.guildIcon
                            })
                        })
                    })
                }