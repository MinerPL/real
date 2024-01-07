            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return x
                }
            }), a("222007");
            var l = a("37983"),
                t = a("884691"),
                n = a("446674"),
                i = a("77078"),
                d = a("716241"),
                r = a("592407"),
                c = a("525065"),
                o = a("476765"),
                u = a("324105"),
                m = a("49111"),
                f = a("782340"),
                h = a("140631"),
                x = e => {
                    let {
                        transitionState: s,
                        onClose: a,
                        guild: x
                    } = e, v = (0, o.useUID)();
                    t.useEffect(() => {
                        d.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                        })
                    }, []);
                    let [N, S] = (0, n.useStateFromStoresArray)([c.default], () => [c.default.getOnlineCount(x.id), c.default.getMemberCount(x.id)], [x.id]);
                    return (0, l.jsxs)(i.ModalRoot, {
                        transitionState: s,
                        "aria-labelledby": v,
                        className: h.root,
                        children: [(0, l.jsx)(i.ModalHeader, {
                            className: h.modalHeader,
                            separator: !1,
                            children: (0, l.jsx)(i.ModalCloseButton, {
                                onClick: a,
                                className: h.modalCloseButton
                            })
                        }), (0, l.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            id: v,
                            className: h.header,
                            children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
                        }), (0, l.jsxs)(i.ModalContent, {
                            className: h.modalContent,
                            children: [(0, l.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: h.subheader,
                                children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
                                    onServerSettingsClick: () => {
                                        a(), r.default.setSection(m.GuildSettingsSections.DISCOVERY), d.default.trackWithMetadata(m.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                                            settings_type: "guild",
                                            origin_pane: "DISCOVERY",
                                            destination_pane: "DISCOVERY"
                                        })
                                    }
                                })
                            }), (0, l.jsx)(u.default, {
                                className: h.previewCard,
                                guild: x,
                                presenceCount: N,
                                memberCount: S
                            })]
                        }), (0, l.jsx)(i.ModalFooter, {
                            children: (0, l.jsx)(i.Button, {
                                onClick: a,
                                children: f.default.Messages.GOT_IT
                            })
                        })]
                    })
                }