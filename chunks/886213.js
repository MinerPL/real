            "use strict";
            s.r(t), s.d(t, {
                OneWayToTwoWayLinkUpsell: function() {
                    return S
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("509802"),
                r = s("956089"),
                o = s("994428"),
                d = s("782340"),
                u = s("102123");
            let c = e => {
                    let {
                        markAsDismissed: t
                    } = e;
                    return n.useEffect(() => t(o.ContentDismissActionType.UNKNOWN), [t]), (0, a.jsx)(r.TextBadge, {
                        className: u.newBadge,
                        text: d.default.Messages.NEW
                    })
                },
                S = e => {
                    let {
                        title: t,
                        body: s,
                        img: n,
                        newIndicatorDismissibleContent: r,
                        onClick: o
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: u.container,
                        children: [n, (0, a.jsxs)("div", {
                            className: u.textContainer,
                            children: [(0, a.jsxs)("div", {
                                className: u.headerText,
                                children: [(0, a.jsx)(i.default, {
                                    contentTypes: [r],
                                    children: e => {
                                        let {
                                            visibleContent: t,
                                            markAsDismissed: s
                                        } = e;
                                        return t === r ? (0, a.jsx)(c, {
                                            markAsDismissed: s
                                        }) : null
                                    }
                                }), (0, a.jsx)(l.Text, {
                                    variant: "text-md/semibold",
                                    children: t
                                })]
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: s
                            })]
                        }), (0, a.jsx)(l.Button, {
                            size: l.ButtonSizes.MEDIUM,
                            onClick: o,
                            className: u.reconnectButton,
                            children: d.default.Messages.RECONNECT
                        })]
                    })
                }