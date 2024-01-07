            "use strict";
            n.r(t), n.d(t, {
                GuildNewMemberActionsProgressBar: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("449918"),
                o = n("698882"),
                u = n("675305"),
                d = n("393414"),
                c = n("461380"),
                f = n("49111"),
                h = n("724210"),
                C = n("782340"),
                p = n("374407");

            function m(e, t) {
                return (0, l.jsx)(i.Text, {
                    variant: "text-xs/bold",
                    color: "text-normal",
                    children: e
                }, t)
            }
            let E = a.memo(function(e) {
                let {
                    guild: t
                } = e, n = (0, s.useStateFromStores)([o.default], () => o.default.getNewMemberActions(t.id), [t.id]), E = (0, s.useStateFromStores)([u.default], () => u.default.getCompletedActions(t.id)), g = a.useMemo(() => {
                    if (null == n || null == E) return 0;
                    let e = 0;
                    return n.forEach(t => {
                        null != E[t.channelId] && e++
                    }), e
                }, [E, n]), I = null == n ? 0 : n.length;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.Clickable, {
                        className: p.progressBarContainer,
                        onClick: function() {
                            (0, d.transitionTo)(f.Routes.CHANNEL(t.id, h.StaticChannelRoute.GUILD_HOME))
                        },
                        children: [(0, l.jsxs)("div", {
                            className: p.progressBarText,
                            children: [(0, l.jsx)(i.Heading, {
                                variant: "heading-sm/bold",
                                children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
                            }), (0, l.jsxs)("div", {
                                className: p.rightContainer,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: p.rightText,
                                    children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
                                        numberHook: m,
                                        total: I.toString(),
                                        completed: g.toString()
                                    })
                                }), (0, l.jsx)(c.default, {
                                    className: p.arrow,
                                    width: 16,
                                    height: 16,
                                    direction: c.default.Directions.RIGHT
                                })]
                            })]
                        }), (0, l.jsx)(i.Progress, {
                            className: p.progressBar,
                            foregroundGradientColor: [(0, r.getColor)(f.Color.GREEN_300), (0, r.getColor)(f.Color.GREEN_230)],
                            percent: g / I * 100 + 3,
                            animate: !0
                        })]
                    }), (0, l.jsx)("div", {
                        role: "separator",
                        className: p.divider
                    })]
                })
            })