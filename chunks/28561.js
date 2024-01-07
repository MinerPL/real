            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("545158"),
                o = n("206230"),
                u = n("164586"),
                d = n("713135"),
                c = n("305961"),
                f = n("145131"),
                h = n("449008"),
                p = n("701909"),
                m = n("335189"),
                E = n("190045"),
                C = n("680894"),
                g = n("49111"),
                S = n("994428"),
                _ = n("782340"),
                I = n("400496"),
                T = n("382719"),
                v = n("559016");

            function x(e) {
                let {
                    channel: t,
                    markAsDismissed: n
                } = e, [x, N] = l.useState(!0), A = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), M = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t.guild_id)), R = (0, s.useStateFromStores)([d.default], () => {
                    var e;
                    return d.default.getGuildMemberProfile(C.CLYDE_AI_USER_ID, null !== (e = null == M ? void 0 : M.id) && void 0 !== e ? e : "")
                }), j = () => {
                    var e;
                    (0, E.default)(null !== (e = null == M ? void 0 : M.id) && void 0 !== e ? e : ""), n(S.ContentDismissActionType.UNKNOWN)
                }, L = () => {
                    (0, r.default)(p.default.getArticleURL(g.HelpdeskArticles.CLYDE_AI), !0)
                };
                return (l.useEffect(() => {
                    let e = async () => {
                        if ((0, h.isNotNullish)(M) && null == R) try {
                            await (0, m.addClydeGuildMember)(M.id), N(!1)
                        } catch {} else N(!1)
                    };
                    e()
                }, [R, M]), null == M) ? null : (0, a.jsx)(u.default, {
                    type: g.ChannelNoticeTypes.CLYDE_PERSONALITIES_NUX,
                    image: A ? T : v,
                    imageStyles: {
                        borderRadius: "50%"
                    },
                    imageMarginTop: 8,
                    guild: M,
                    onDismissed: () => n(S.ContentDismissActionType.UNKNOWN),
                    centerText: !0,
                    imageMarginX: 64,
                    title: _.default.Messages.CLYDE_PERSONALITY_NUX_HEADER,
                    message: _.default.Messages.CLYDE_PERSONALITY_NUX_INFO,
                    cta: () => (0, a.jsxs)(f.default, {
                        grow: 0,
                        shrink: 0,
                        direction: f.default.Direction.VERTICAL,
                        justify: f.default.Justify.START,
                        align: f.default.Align.STRETCH,
                        wrap: f.default.Wrap.NO_WRAP,
                        className: I.footer,
                        children: [(0, a.jsx)(i.Button, {
                            type: "submit",
                            submitting: x,
                            color: i.Button.Colors.BRAND,
                            onClick: j,
                            children: _.default.Messages.CLYDE_CUSTOMIZE
                        }), (0, a.jsx)(i.Button, {
                            type: "button",
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.LINK,
                            onClick: L,
                            children: _.default.Messages.LEARN_MORE
                        })]
                    })
                })
            }