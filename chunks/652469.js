            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                i = s("539938"),
                n = s("922577"),
                u = s("567054"),
                r = s("782340"),
                o = s("462590"),
                d = function(e) {
                    let {
                        pendingGuildJoinRequestsTotal: t,
                        applicationStatus: s,
                        onTabItemSelect: d
                    } = e;
                    return (0, a.jsxs)(i.default, {
                        className: o.container,
                        hideSearch: !0,
                        toolbar: (0, a.jsx)("div", {}),
                        children: [(0, a.jsx)(i.default.Icon, {
                            icon: n.default,
                            disabled: !0,
                            "aria-label": r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Title, {
                            className: o.title,
                            children: r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Divider, {
                            className: o.divider
                        }), (0, a.jsxs)(l.TabBar, {
                            "aria-label": r.default.Messages.FRIENDS,
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: d,
                            className: o.tabBar,
                            children: [(0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.SUBMITTED,
                                children: 0 === t ? r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
                                    count: t
                                })
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.APPROVED,
                                children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.REJECTED,
                                children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
                            })]
                        })]
                    })
                }