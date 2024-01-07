            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("789207"),
                r = n("42203"),
                o = n("18494"),
                u = n("211248"),
                d = n("118530"),
                c = n("138217");
            n("440612");
            var f = n("49111"),
                E = n("782340");

            function _(e) {
                let {
                    closePopout: t,
                    onSelect: n
                } = e, u = (0, a.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
                    everyoneFilter: d,
                    roleFilter: _,
                    guildFilter: h
                } = (0, a.useStateFromStoresObject)([c.default], () => {
                    let {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    } = c.default;
                    return {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    }
                });
                return (0, l.jsxs)(s.Menu, {
                    navId: "mentions-filter",
                    "aria-label": E.default.Messages.FILTER,
                    onClose: t,
                    onSelect: n,
                    children: [(0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Everyone",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                        action: function() {
                            i.default.setGuildFilter({
                                everyoneFilter: !d
                            })
                        },
                        checked: d
                    }), (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Roles",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
                        action: function() {
                            i.default.setGuildFilter({
                                roleFilter: !_
                            })
                        },
                        checked: _
                    }), null == u || u.isPrivate() ? null : (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "All Servers",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                        action: function() {
                            i.default.setGuildFilter({
                                guildFilter: h === f.RecentMentionsFilters.THIS_SERVER ? f.RecentMentionsFilters.ALL_SERVERS : f.RecentMentionsFilters.THIS_SERVER
                            })
                        },
                        checked: h === f.RecentMentionsFilters.ALL_SERVERS
                    })]
                })
            }

            function h() {
                return (0, l.jsx)(s.Popout, {
                    align: "right",
                    animation: s.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(_, {
                            closePopout: t
                        })
                    },
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(u.default, {
                            tooltip: E.default.Messages.FILTER,
                            color: u.CircleIconButtonColors.SECONDARY,
                            icon: (0, l.jsx)(d.default, {}),
                            onClick: t
                        })
                    }
                })
            }