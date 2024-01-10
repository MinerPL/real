            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("933805"),
                r = n("409129"),
                o = n("193865"),
                u = n("843257"),
                d = n("950576"),
                c = n("256572"),
                f = n("27618"),
                h = n("93427"),
                C = n("700097"),
                p = n("95045"),
                m = n("574073"),
                E = n("909917"),
                g = n("380986"),
                S = n("49111"),
                _ = n("782340");
            let A = a.memo(function(e) {
                var t, n, A;
                let {
                    baseMessage: T,
                    referencedMessage: M,
                    channel: N,
                    compact: I = !1,
                    referencedUsernameProfile: L,
                    referencedAvatarProfile: v,
                    setPopout: R
                } = e, x = M.state === c.ReferencedMessageState.LOADED ? M.message : void 0, y = (0, m.useNullableMessageAuthor)(x), D = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = T.editedTimestamp) && void 0 !== t ? t : T.timestamp).valueOf()), O = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == N ? void 0 : N.guild_id) && void 0 !== n ? n : "", (null !== (A = T.editedTimestamp) && void 0 !== A ? A : T.timestamp).valueOf()), j = a.useMemo(() => {
                    if (null == x) return null;
                    if (x.type === S.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(x.id).astFormat({
                        username: null != y ? y.nick : x.author.username,
                        usernameHook: e => e
                    }));
                    if (x.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, u.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
                        username: null != y ? y.nick : x.author.username,
                        guildId: null == N ? void 0 : N.guild_id,
                        roleSubscriptionData: x.roleSubscriptionData
                    }));
                    if (x.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
                        application: null == x ? void 0 : x.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
                        application: null == x ? void 0 : x.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
                        application: null == x ? void 0 : x.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (x.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== x.content ? x.content : _.default.Messages.DEADCHAT_PROMPT_1;
                    if (null != x.content && "" !== x.content) {
                        let e = x.isFirstMessageInForumPost(N) ? {
                            formatInline: !0,
                            noStyleAndInteraction: !0,
                            allowHeading: !0,
                            allowList: !0,
                            allowLinks: D.showMaskedLinks || O.showMaskedLinks
                        } : {
                            formatInline: !0,
                            allowHeading: D.showListsAndHeaders || O.showListsAndHeaders,
                            allowList: D.showListsAndHeaders || O.showListsAndHeaders,
                            allowLinks: D.showMaskedLinks || O.showMaskedLinks
                        };
                        return (0, p.default)(x, e).content
                    }
                    return null
                }, [x, y, N, D, O]), b = (0, l.useStateFromStores)([f.default], () => null != x && f.default.isBlocked(x.author.id), [x]), P = (0, g.useContextMenuUser)(null == x ? void 0 : x.author.id, N.id), U = (0, g.useClickReply)(T, x, b), F = (0, g.useClickReferencedMessageAuthorUsername)(x, N, L, R), H = (0, g.useClickReferencedMessageAuthorAvatar)(v, R), k = a.useCallback(() => R({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }), [R]), G = (0, m.useNullableMessageAuthor)(T);
                return (0, s.jsx)(h.default, {
                    repliedAuthor: y,
                    baseMessage: T,
                    channel: N,
                    baseAuthor: G,
                    referencedMessage: M,
                    content: j,
                    compact: I,
                    isReplyAuthorBlocked: b,
                    showAvatarPopout: v,
                    showUsernamePopout: L,
                    renderPopout: E.default,
                    onClickAvatar: H,
                    onClickUsername: F,
                    onClickReply: U,
                    onContextMenu: P,
                    onPopoutRequestClose: k
                })
            });

            function T(e, t, n, a, l) {
                let {
                    message: i,
                    channel: r,
                    compact: o
                } = e, {
                    referencedUsernameProfile: u,
                    referencedAvatarProfile: d
                } = n, c = i.type === S.MessageTypes.REPLY && null != a && (0, s.jsx)(A, {
                    baseMessage: i,
                    replyReference: a,
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    setPopout: t,
                    referencedUsernameProfile: u,
                    referencedAvatarProfile: d
                });
                return (0, s.jsx)(s.Fragment, {
                    children: c
                })
            }