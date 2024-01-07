            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("414456"),
                i = l.n(u),
                a = l("249654"),
                o = l("446674"),
                r = l("77078"),
                d = l("718517"),
                c = l("933326"),
                E = l("398604"),
                f = l("822516"),
                h = l("123030"),
                C = l("782340"),
                N = l("849882");

            function v(e) {
                let {
                    guildId: t,
                    recurrenceRule: l,
                    guildEventId: u,
                    onRecurrenceClick: v,
                    hideScroller: g = !1,
                    activeRecurrenceId: S
                } = e, L = (0, o.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(u)), [I, _] = s.useState(null != l && null != L ? (0, f.generateNextRecurrences)(4, (0, f.getRRule)(l), new Date(L.scheduled_start_time)) : []);
                s.useEffect(() => {
                    if (null == t) return;
                    let e = I.map(e => a.default.fromTimestamp(Math.floor(e.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND));
                    c.default.getGuildEventUserCounts(t, u, e)
                }, [u, t, I]);
                let m = s.useMemo(() => {
                    if (null == l || 0 === I.length || (null == L ? void 0 : L.scheduled_start_time) == null) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + f.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = I[I.length - 1],
                        n = (0, f.getRRule)(l),
                        s = n.after(t);
                    return null != s && !(s > e) && !0
                }, [l, I, null == L ? void 0 : L.scheduled_start_time]);
                return (0, n.jsxs)("div", {
                    className: N.recurrences,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-sm/medium",
                        className: N.heading,
                        children: C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, n.jsxs)(r.Scroller, {
                        className: i(N.scroller, {
                            [N.showScroller]: !g
                        }),
                        children: [I.map(e => {
                            let t = a.default.fromTimestamp(Math.floor(e.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND);
                            return (0, n.jsx)(h.default, {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: u,
                                onClick: v,
                                isActive: t === S
                            }, t)
                        }), m && (0, n.jsx)(r.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == l || null == L) return;
                                let t = (0, f.getRRule)(l),
                                    n = I[I.length - 1];
                                _([...I, ...(0, f.generateNextRecurrences)(4, t, n, !0)])
                            },
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.MIN,
                            color: r.Button.Colors.LINK,
                            className: N.button,
                            children: C.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }