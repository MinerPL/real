            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("616225"),
                o = l("387111"),
                u = l("996866"),
                d = l("228974");

            function c(e) {
                let {
                    activity: t,
                    user: l,
                    channelId: a,
                    guildId: c,
                    source: f,
                    size: m,
                    className: p,
                    ...E
                } = e, {
                    tooltip: T,
                    loading: h,
                    disabled: _,
                    onClick: S
                } = (0, u.useSpotifySyncAction)(t, l, f, o.default.getNickname(c, a, l));
                return (0, n.jsx)(i.Tooltip, {
                    text: T,
                    children: e => {
                        let {
                            onMouseEnter: l,
                            onMouseLeave: a
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...E,
                            size: s(m, d.iconButtonSize),
                            className: s(p, d.iconButton),
                            onClick: S,
                            onMouseEnter: l,
                            onMouseLeave: a,
                            disabled: _,
                            submitting: h,
                            "aria-label": null != T ? T : t.name,
                            children: (0, n.jsx)(r.default, {
                                className: d.listenAlongIcon
                            })
                        })
                    }
                })
            }