            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("446674"),
                o = n("77078"),
                u = n("851387"),
                d = n("393414"),
                c = n("305961"),
                E = n("162771"),
                f = n("531470"),
                _ = n("794818"),
                h = n("267567"),
                C = n("49111"),
                I = n("782340"),
                T = n("600323"),
                S = n("105029"),
                N = () => {
                    let e = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId(), []),
                        t = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(e), [e]),
                        n = (0, r.useStateFromStores)([h.default], () => h.default.getHistorySnapshot(), []),
                        [i, N] = s.useState(!1);
                    if (null == t) return null;
                    let A = async () => {
                        N(!0);
                        try {
                            _.trackGuildJoinClicked(t.id), await u.default.joinGuild(t.id, {
                                source: C.JoinGuildSources.NOTICE_BAR
                            })
                        } catch {
                            N(!1)
                        }
                    };
                    return (0, a.jsxs)("div", {
                        className: l(T.notice, S.notice),
                        children: [(0, a.jsxs)(o.Button, {
                            look: o.Button.Looks.OUTLINED,
                            color: o.Button.Colors.WHITE,
                            size: o.Button.Sizes.NONE,
                            className: l(T.button, T.back),
                            innerClassName: T.iconButton,
                            onClick: () => {
                                let e = (0, d.getHistory)();
                                null != n && null != n.location ? (0, d.replaceWith)({
                                    ...n.location
                                }) : e.goBack()
                            },
                            children: [(0, a.jsx)(f.default, {
                                width: 16,
                                height: 16,
                                className: T.arrow
                            }), I.default.Messages.BACK]
                        }), (0, a.jsx)(o.Text, {
                            className: T.header,
                            variant: "text-sm/normal",
                            children: I.default.Messages.LURKER_MODE_NAG_BAR_HEADER
                        }), (0, a.jsx)(o.Button, {
                            className: T.button,
                            look: o.Button.Looks.OUTLINED,
                            color: o.Button.Colors.WHITE,
                            size: o.Button.Sizes.NONE,
                            submitting: i,
                            onClick: A,
                            children: I.default.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({
                                guild: t.name
                            })
                        })]
                    })
                }