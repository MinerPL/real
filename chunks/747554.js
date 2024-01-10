            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("803182"),
                r = n("90915"),
                o = n("446674"),
                u = n("77078"),
                d = n("305961"),
                c = n("162771"),
                E = n("549103"),
                f = n("233322"),
                _ = n("567054"),
                h = n("982527"),
                C = n("49111"),
                T = n("724210"),
                I = n("782340"),
                S = n("884938"),
                N = n("105029"),
                A = () => {
                    var e, t;
                    let s = (0, o.useStateFromStores)([c.default], () => c.default.getGuildId(), []),
                        A = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(s), [s]),
                        p = (0, o.useStateFromStores)([h.default], () => null != s ? h.default.getRequest(s) : null, [s]),
                        m = (0, r.useLocation)(),
                        g = (null === (e = (0, l.matchPath)(m.pathname, C.Routes.CHANNEL(null == A ? void 0 : A.id, T.StaticChannelRoute.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
                    if (null == A || !A.hasVerificationGate() || g) return null;
                    let R = null !== (t = null == p ? void 0 : p.applicationStatus) && void 0 !== t ? t : _.GuildJoinRequestApplicationStatuses.STARTED,
                        O = null,
                        L = null,
                        v = null,
                        M = [S.notice, N.notice];
                    switch (R) {
                        case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
                            O = I.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, L = I.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, v = () => {
                                (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
                                    header: I.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                                    confirmText: I.default.Messages.CONFIRM,
                                    cancelText: I.default.Messages.CANCEL,
                                    onConfirm: () => E.default.removeGuildJoinRequest(A.id),
                                    confirmButtonColor: u.Button.Colors.BRAND,
                                    ...e,
                                    children: (0, a.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        children: I.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                                    })
                                }))
                            };
                            break;
                        case _.GuildJoinRequestApplicationStatuses.REJECTED:
                            O = I.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, L = I.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, v = () => {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("388435").then(n.bind(n, "388435"));
                                    return t => (0, a.jsx)(e, {
                                        guildId: A.id,
                                        ...t
                                    })
                                })
                            }, M.push(S.error);
                            break;
                        default:
                            O = I.default.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, L = I.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, v = () => {
                                (0, f.openMemberVerificationModal)(A.id)
                            }
                    }
                    return (0, a.jsxs)("div", {
                        className: i(...M),
                        children: [(0, a.jsx)(u.Text, {
                            className: S.header,
                            variant: "text-sm/normal",
                            children: O
                        }), (0, a.jsx)(u.Button, {
                            className: S.button,
                            look: u.Button.Looks.OUTLINED,
                            color: u.Button.Colors.WHITE,
                            size: u.Button.Sizes.NONE,
                            onClick: v,
                            children: L
                        })]
                    })
                }