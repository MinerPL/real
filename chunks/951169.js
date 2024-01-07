            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("75766"),
                r = n("994428"),
                o = n("782340"),
                u = n("935344");

            function d(e) {
                let {
                    onClick: t,
                    onSecondaryClick: n,
                    onComponentMount: d,
                    markAsDismissed: c
                } = e;
                s.useEffect(() => {
                    null == d || d()
                }, [d]);
                let E = s.useCallback(e => {
                        t(e), null == c || c(r.ContentDismissActionType.PRIMARY)
                    }, [t, c]),
                    f = s.useCallback(() => {
                        null == n || n(), null == c || c(r.ContentDismissActionType.SECONDARY)
                    }, [n, c]);
                return (0, a.jsxs)("div", {
                    className: u.tooltipWrapper,
                    children: [(0, a.jsx)(i.Heading, {
                        className: u.tooltipHeader,
                        variant: "heading-md/semibold",
                        children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
                    }), (0, a.jsx)(i.Text, {
                        className: u.tooltipText,
                        variant: "text-sm/normal",
                        children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({
                            count: l.LOWERED_MINIMUM_SIZE
                        })
                    }), (0, a.jsxs)("div", {
                        className: u.buttonsContainer,
                        children: [(0, a.jsx)(i.Button, {
                            fullWidth: !0,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.BRAND,
                            onClick: E,
                            children: o.default.Messages.LEARN_MORE
                        }), (0, a.jsx)(i.Button, {
                            fullWidth: !0,
                            size: i.Button.Sizes.SMALL,
                            look: i.Button.Looks.BLANK,
                            onClick: f,
                            children: o.default.Messages.NO_THANKS
                        })]
                    })]
                })
            }