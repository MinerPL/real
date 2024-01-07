            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("84190"),
                i = s("782340"),
                r = s("469735"),
                o = e => {
                    let {
                        guild: t
                    } = e;
                    return (0, a.jsxs)(n.FormSection, {
                        title: i.default.Messages.DISCOVERY,
                        tag: "h2",
                        children: [(0, a.jsx)("div", {
                            className: r.background
                        }), (0, a.jsxs)("div", {
                            className: r.discoverySettings,
                            children: [(0, a.jsx)("div", {
                                className: r.image
                            }), (0, a.jsx)(n.Heading, {
                                className: r.header,
                                variant: "heading-xl/semibold",
                                children: i.default.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED
                            }), (0, a.jsx)(n.Text, {
                                className: r.description,
                                variant: "text-md/normal",
                                children: i.default.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED_DESCRIPTION.format()
                            }), (0, a.jsx)(l.default, {
                                className: r.checklist,
                                guild: t,
                                guildId: t.id,
                                noHeader: !0,
                                failedItemsOnly: !0
                            })]
                        })]
                    })
                }