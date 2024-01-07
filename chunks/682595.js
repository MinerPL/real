            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("419830"),
                u = n("42203"),
                o = n("305961"),
                i = n("346955"),
                r = n("307311"),
                d = n("704257"),
                c = n("184406"),
                m = n("49111"),
                p = n("928123");

            function f(e) {
                var t;
                let {
                    channelTypes: n
                } = e, f = (0, r.useComponentStateContext)(), E = null == f ? void 0 : null === (t = f.message) || void 0 === t ? void 0 : t.getChannelId(), C = u.default.getChannel(E), S = o.default.getGuild(null == C ? void 0 : C.getGuildId()), T = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == S ? void 0 : S.id, n), [e.defaultValues, S, n]);
                return (0, l.jsx)(c.default, {
                    selectActionComponent: e,
                    queryOptions: e => (0, d.queryChannels)(e, E, n),
                    renderIcon: (e, t) => {
                        let n = u.default.getChannel(null == e ? void 0 : e.value);
                        if (null == n) return null;
                        let a = n.type === m.ChannelTypes.GUILD_CATEGORY ? i.default : (0, s.getChannelIconComponent)(n);
                        return null != a ? (0, l.jsx)(a, {
                            width: t,
                            height: t
                        }) : null
                    },
                    renderOptionLabel: e => (0, l.jsx)("span", {
                        className: p.label,
                        children: e.label
                    }),
                    defaultValues: T
                })
            }