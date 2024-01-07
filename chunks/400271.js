            "use strict";
            l.r(t), l.d(t, {
                GuildEventStatus: function() {
                    return _
                },
                GuildEventDetails: function() {
                    return S
                },
                default: function() {
                    return D
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("446674"),
                u = l("77078"),
                i = l("26989"),
                c = l("155207"),
                d = l("158998"),
                o = l("398604"),
                E = l("397680"),
                f = l("466148"),
                v = l("189443"),
                h = l("822516"),
                T = l("909151"),
                N = l("255050"),
                m = l("393745"),
                g = l("745049"),
                x = l("782340"),
                C = l("629400");

            function _(e) {
                let {
                    className: t,
                    creator: l,
                    guildId: a,
                    isNew: T,
                    isHub: N = !1,
                    guildEventId: _,
                    eventPreview: S,
                    recurrenceId: D
                } = e, {
                    storedEvent: L,
                    userCount: R
                } = (0, r.useStateFromStoresObject)([o.default], () => ({
                    storedEvent: o.default.getGuildScheduledEvent(_),
                    userCount: o.default.getUserCount(_, D)
                })), I = null != L ? L : S, p = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == l ? void 0 : l.id), [a, l]);
                D = null == I || null != D ? D : (0, h.getNextRecurrenceIdInEvent)(I);
                let {
                    startTime: A
                } = (0, f.default)(_, D, S), j = (0, E.default)(D, _), w = null != j ? j.is_canceled ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == I) return null;
                let {
                    entity_type: M,
                    status: O,
                    recurrence_rule: G
                } = I;
                return (0, n.jsxs)("div", {
                    className: s(C.statusContainer, t),
                    children: [(0, n.jsx)(m.GuildEventTimeStatus, {
                        startTime: A.toISOString(),
                        status: null != w ? w : O,
                        eventType: M,
                        isNew: T,
                        recurrenceRule: (0, v.recurrenceRuleFromServer)(G),
                        guildEventId: _,
                        recurrenceId: D
                    }), (0, n.jsx)("div", {
                        className: C.spacer
                    }), !N && null != l && (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != p ? p : d.default.getName(l)
                        }),
                        children: e => (0, n.jsx)(u.Avatar, {
                            ...e,
                            src: l.getAvatarURL(a, 20),
                            size: u.AvatarSizes.SIZE_20,
                            "aria-label": null != p ? p : l.username,
                            className: C.creator
                        })
                    }), (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: R
                        }),
                        children: e => (0, n.jsxs)("div", {
                            className: C.rsvpCount,
                            ...e,
                            children: [(0, n.jsx)(c.default, {
                                width: 12,
                                height: 12,
                                className: C.rsvpIcon
                            }), (0, n.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: R
                            })]
                        })
                    })]
                })
            }

            function S(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: l,
                    name: a,
                    description: r,
                    truncate: i,
                    guildId: c,
                    imageSource: d
                } = e;
                return (0, n.jsxs)("div", {
                    className: s({
                        [C.withThumbnail]: null != d
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: s({
                            [C.descriptionWithThumbnail]: null != d
                        }),
                        children: [(0, n.jsx)(u.Heading, {
                            variant: t,
                            selectable: !0,
                            className: C.eventName,
                            children: a
                        }), null != r && (0, n.jsx)(T.default, {
                            description: r,
                            className: s(l, C.description),
                            truncate: i,
                            guildId: c
                        })]
                    }), null != d && (0, n.jsx)("div", {
                        className: C.thumbnailContainer,
                        children: (0, n.jsx)(N.default, {
                            source: d,
                            className: C.thumbnail
                        })
                    })]
                })
            }

            function D(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: l,
                    creator: a,
                    name: s,
                    description: r,
                    imageSource: u,
                    isHub: i = !1,
                    truncate: c,
                    guildId: d,
                    isNew: o,
                    guildEventId: E,
                    eventPreview: f,
                    recurrenceId: v
                } = e;
                return (0, n.jsxs)("div", {
                    className: C.container,
                    children: [(0, n.jsx)(_, {
                        className: C.eventInfoStatusContainer,
                        creator: a,
                        guildId: d,
                        isHub: i,
                        isNew: o,
                        guildEventId: E,
                        eventPreview: f,
                        recurrenceId: v
                    }), (0, n.jsx)(S, {
                        name: s,
                        description: r,
                        headerVariant: t,
                        descriptionClassName: l,
                        truncate: c,
                        guildId: d,
                        imageSource: u
                    })]
                })
            }