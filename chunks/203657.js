            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return _
                }
            }), a("222007");
            var t = a("37983"),
                l = a("884691"),
                i = a("414456"),
                n = a.n(i),
                d = a("917351"),
                c = a.n(d),
                r = a("77078"),
                h = a("446674"),
                o = a("305961"),
                x = a("677099"),
                m = a("476263"),
                u = a("660279"),
                N = a("109264"),
                I = a("578706"),
                T = a("564875"),
                v = a("380353"),
                j = a("782340"),
                f = a("327461");

            function _(e) {
                let {
                    guildPlans: s,
                    overrideGuild: a
                } = e, i = (0, h.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds()), [n, d] = l.useMemo(() => c(s).values().sortBy(e => {
                    let s = i.indexOf(e.guildId);
                    return -1 === s ? i.length : s
                }).partition(e => e.mode === v.Mode.UseGreyDot).value(), [s, i]), o = l.useCallback(e => {
                    var t;
                    return a(e, (null !== (t = s[e].overrideMode) && void 0 !== t ? t : s[e].mode) === v.Mode.UseGreyDot ? v.Mode.KeepAsIs : v.Mode.UseGreyDot)
                }, [a, s]);
                return (0, t.jsx)("div", {
                    className: f.container,
                    children: (0, t.jsxs)(r.Scroller, {
                        className: f.scroller,
                        children: [(0, t.jsx)(g, {
                            header: j.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
                            subheader: j.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
                            guildPlans: n,
                            onClick: o
                        }), d.length > 0 ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: f.divider
                            }), (0, t.jsx)(g, {
                                header: j.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
                                guildPlans: d,
                                onClick: o
                            })]
                        }) : null]
                    })
                })
            }

            function g(e) {
                let {
                    header: s,
                    subheader: a,
                    guildPlans: l,
                    onClick: i
                } = e;
                return (0, t.jsxs)("div", {
                    className: f.guildsContainer,
                    children: [(0, t.jsxs)("div", {
                        className: f.header,
                        children: [(0, t.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-primary",
                            children: s
                        }), (0, t.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: a
                        })]
                    }), (0, t.jsx)("div", {
                        className: f.guilds,
                        children: l.map(e => (0, t.jsx)(O, {
                            plan: e,
                            onClick: i
                        }, e.guildId))
                    })]
                })
            }

            function O(e) {
                let {
                    plan: s,
                    onClick: a
                } = e, l = (0, h.useStateFromStores)([o.default], () => o.default.getGuild(s.guildId));
                return null == l ? null : (0, t.jsx)(r.Tooltip, {
                    text: (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: l.name
                        }), (0, t.jsxs)("div", {
                            className: f.tooltipRow,
                            children: [(0, t.jsx)(N.default, {
                                width: 12,
                                height: 12
                            }), (0, t.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: s.messagePain ? j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
                            })]
                        }), (0, t.jsxs)("div", {
                            className: f.tooltipRow,
                            children: [(0, t.jsx)(T.default, {
                                width: 12,
                                height: 12
                            }), (0, t.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: s.visitsALot ? j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
                            })]
                        }), (0, t.jsxs)("div", {
                            className: f.tooltipRow,
                            children: [(0, t.jsx)(u.default, {
                                width: 12,
                                height: 12
                            }), (0, t.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: s.muted ? j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : j.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
                            })]
                        })]
                    }),
                    "aria-label": s.debugReason,
                    tooltipClassName: f.tooltip,
                    children: e => {
                        var i;
                        return (0, t.jsxs)(r.Clickable, {
                            ...e,
                            className: n(f.guild, (null !== (i = s.overrideMode) && void 0 !== i ? i : s.mode) === v.Mode.UseGreyDot ? f.selected : void 0),
                            onClick: () => a(s.guildId),
                            children: [(0, t.jsx)(I.default, {
                                className: f.checkmark,
                                width: 16,
                                height: 16,
                                backgroundColor: "white"
                            }), (0, t.jsx)(m.default, {
                                "aria-hidden": !0,
                                className: f.guildIcon,
                                guild: l,
                                size: m.default.Sizes.MEDIUM,
                                active: !0,
                                tabIndex: -1
                            })]
                        })
                    }
                })
            }