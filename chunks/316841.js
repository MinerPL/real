            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("462392"),
                i = s("490291");

            function r(e) {
                var t;
                let {
                    action: s,
                    actionType: r,
                    triggerType: o
                } = e, d = (0, l.getActionInfo)(null !== (t = null == s ? void 0 : s.type) && void 0 !== t ? t : r, s, o);
                if (null == d) return null;
                let {
                    headerText: u,
                    helperText: c,
                    icon: E
                } = d;
                return (0, a.jsxs)("div", {
                    className: i.actionContainer,
                    children: [(0, a.jsx)("div", {
                        className: i.actionIconContainer,
                        children: (0, a.jsx)(E, {
                            width: 14,
                            height: 14,
                            className: i.actionIcon
                        })
                    }), (0, a.jsx)("div", {
                        className: i.actionTextContainer,
                        children: (0, a.jsxs)(n.Text, {
                            className: i.actionTextHeader,
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: [u, null != c && (0, a.jsx)(n.Text, {
                                className: i.actionTextHelper,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                children: c
                            })]
                        })
                    })]
                })
            }