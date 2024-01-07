            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("77078"),
                s = a("433487"),
                i = a("782340"),
                d = a("225409");

            function r(e) {
                e.stopPropagation()
            }

            function u(e) {
                let {
                    onContextMenu: t
                } = e, a = i.default.Messages.MORE;
                return (0, l.jsx)("div", {
                    onClick: r,
                    onContextMenu: r,
                    children: (0, l.jsx)(n.Tooltip, {
                        text: a,
                        hideOnClick: !0,
                        children: e => {
                            let {
                                onMouseEnter: i,
                                onMouseLeave: r,
                                onClick: u
                            } = e;
                            return (0, l.jsx)(n.Button, {
                                onMouseEnter: i,
                                onMouseLeave: r,
                                look: n.Button.Looks.BLANK,
                                size: n.Button.Sizes.NONE,
                                onClick: e => {
                                    null == u || u(), t(e)
                                },
                                "aria-label": a,
                                className: d.overflowButton,
                                children: (0, l.jsx)(s.default, {
                                    className: d.icon
                                })
                            })
                        }
                    })
                })
            }