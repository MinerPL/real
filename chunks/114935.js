            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("917351"),
                i = a.n(s),
                d = a("866227"),
                r = a.n(d),
                u = a("151426"),
                o = a("77078"),
                c = a("834897"),
                f = a("10641"),
                m = a("398604"),
                h = a("534222"),
                E = a("821435"),
                g = a("515631"),
                I = a("782340"),
                _ = a("850858");

            function x(e) {
                let {
                    guild: t
                } = e, s = (0, c.default)(g.COLLAPSED_SIZE_MEDIA_QUERY), d = (0, h.default)(t.id), x = n.useMemo(() => {
                    let e = d.filter(e => (0, m.isGuildScheduledEventActive)(e));
                    return s && e.length > 0 ? i.head(e) : i.chain(d).filter(e => !(0, m.isGuildScheduledEventActive)(e)).minBy(e => r(e.scheduled_start_time)).value()
                }, [d, s]);
                if (null == x) return null;
                async function v() {
                    await (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("659707").then(a.bind(a, "659707"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            guildId: t.id
                        })
                    }), (0, f.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
                }
                return (0, l.jsxs)("div", {
                    className: _.container,
                    children: [(0, l.jsxs)("div", {
                        className: _.header,
                        children: [(0, l.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: s ? I.default.Messages.GUILD_EVENTS : I.default.Messages.GUILD_HOME_EVENTS_TITLE
                        }), d.length >= 2 ? (0, l.jsx)(o.Clickable, {
                            onClick: v,
                            children: (0, l.jsx)(o.Text, {
                                className: _.showEvents,
                                variant: "text-sm/normal",
                                children: I.default.Messages.GUILD_HOME_SEE_ALL.format({
                                    count: d.length
                                })
                            })
                        }) : null]
                    }), (0, l.jsx)("div", {
                        className: _.events,
                        children: (0, l.jsx)(E.default, {
                            event: x,
                            isInList: !1
                        })
                    })]
                })
            }