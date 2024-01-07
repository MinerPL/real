            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                i = s.n(l),
                n = s("974667"),
                u = s("446674"),
                r = s("77078"),
                o = s("302437"),
                d = s("305961"),
                c = s("36694"),
                E = s("128295"),
                I = s("414868"),
                S = s("549103"),
                f = s("90490"),
                T = s("567054"),
                _ = s("122766"),
                R = s("859130"),
                p = s("667793"),
                m = s("782340"),
                N = s("297298");
            let A = () => null;

            function M(e) {
                let {
                    status: t
                } = e, s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
                switch (t) {
                    case T.GuildJoinRequestApplicationStatuses.REJECTED:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
                        break;
                    case T.GuildJoinRequestApplicationStatuses.APPROVED:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
                        break;
                    default:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
                }
                return (0, a.jsxs)("div", {
                    className: N.emptyContainer,
                    children: [(0, a.jsxs)("div", {
                        className: N.emptyIcon,
                        children: [(0, a.jsx)(I.default, {
                            className: N.star
                        }), (0, a.jsx)(c.default, {
                            className: N.checkmark
                        }), (0, a.jsx)(E.default, {
                            className: N.plus
                        })]
                    }), (0, a.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        children: s
                    }), (0, a.jsx)(r.Text, {
                        color: "header-secondary",
                        className: N.emptyBody,
                        variant: "text-sm/normal",
                        children: l
                    })]
                })
            }
            var h = function(e) {
                let {
                    applicationStatus: t,
                    guildJoinRequests: s,
                    guildId: l,
                    onScroll: c,
                    listRef: E
                } = e, I = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), h = (0, u.useStateFromStores)([f.default], () => f.default.isFetching()), g = h ? [s.length + 25] : [s.length], x = (0, _.useSelectedGuildJoinRequest)({
                    guildId: l
                }), G = (0, R.useSubmittedGuildJoinRequestTotal)({
                    guildId: l
                }), C = (0, o.default)("guild-join-requests"), v = e => {
                    let {
                        row: n
                    } = e, u = s[n];
                    return null == u ? (0, a.jsx)(p.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(p.MemberApplicationsListRow, {
                        className: i({
                            [N.selected]: x === u,
                            [N.siblingSelected]: x === s[n - 1]
                        }),
                        guild: I,
                        guildJoinRequest: u,
                        onClick: () => S.default.setSelectedGuildJoinRequest(l, u),
                        applicationStatus: t
                    }, "".concat(u.userId, "-").concat(u.applicationStatus, "-").concat(n))
                };
                return h || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
                    children: [0 !== G && t === T.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(r.Text, {
                        className: N.title,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: (function(e, t) {
                            let s = t.toLocaleString();
                            switch (e) {
                                case T.GuildJoinRequestApplicationStatuses.SUBMITTED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case T.GuildJoinRequestApplicationStatuses.REJECTED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case T.GuildJoinRequestApplicationStatuses.APPROVED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                default:
                                    return ""
                            }
                        })(t, G).toUpperCase()
                    }), (0, a.jsx)(n.ListNavigatorProvider, {
                        navigator: C,
                        children: (0, a.jsx)(n.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    role: s,
                                    ...l
                                } = e;
                                return (0, a.jsx)(r.List, {
                                    innerRole: s,
                                    innerAriaLabel: m.default.Messages.MEMBERS,
                                    ref: e => {
                                        var s;
                                        E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
                                    },
                                    paddingTop: 0,
                                    paddingBottom: 16,
                                    sectionHeight: 0,
                                    rowHeight: 64,
                                    renderSection: A,
                                    renderRow: v,
                                    sections: g,
                                    onScroll: c,
                                    fade: !0,
                                    ...l
                                }, "guild-application-review")
                            }
                        })
                    })]
                }) : (0, a.jsx)(M, {
                    status: t
                })
            }