            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("311340"),
                i = n("429479"),
                d = n("782340"),
                u = n("605717");

            function o(e) {
                let {
                    guildId: t,
                    transitionState: n,
                    onClose: o
                } = e, [_, S] = l.useState([]), c = l.useCallback(() => {
                    (0, s.trackReportRaidViewed)(t, _), (0, s.handleReportRaid)(t), o()
                }, [t, o, _]), I = l.useCallback(e => () => {
                    S(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                }, []), A = l.useCallback(() => {
                    open(i.COMMUNITY_PORTAL_SERVER_SAFETY_PAGE)
                }, []);
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: n,
                    size: r.ModalSize.SMALL,
                    children: [(0, a.jsx)(r.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: d.default.Messages.GUILD_REPORT_RAID_MODAL_TITLE
                        })
                    }), (0, a.jsxs)(r.ModalContent, {
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: d.default.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format({
                                onClick: A
                            })
                        }), (0, a.jsx)("div", {
                            className: u.mainCheckboxContainer,
                            children: i.REPORT_RAID_OPTIONS.map(e => (0, a.jsxs)(r.Clickable, {
                                className: u.checkboxContainer,
                                onClick: I(e),
                                children: [(0, a.jsx)(r.Checkbox, {
                                    type: r.Checkbox.Types.INVERTED,
                                    className: u.checkbox,
                                    value: _.includes(e),
                                    displayOnly: !0
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, i.getReportRaidTypeLabel)(e)
                                })]
                            }, e))
                        })]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        children: [(0, a.jsx)(r.Button, {
                            onClick: c,
                            color: r.Button.Colors.BRAND_NEW,
                            look: r.Button.Looks.FILLED,
                            children: d.default.Messages.SUBMIT
                        }), (0, a.jsx)(r.Button, {
                            onClick: o,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            children: d.default.Messages.CANCEL
                        })]
                    })]
                })
            }