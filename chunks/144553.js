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
                    channel: I,
                    compact: N = !1,
                    referencedUsernameProfile: L,
                    referencedAvatarProfile: v,
                    setPopout: x
                } = e, R = M.state === c.ReferencedMessageState.LOADED ? M.message : void 0, y = (0, m.useNullableMessageAuthor)(R), O = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = T.editedTimestamp) && void 0 !== t ? t : T.timestamp).valueOf()), D = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == I ? void 0 : I.guild_id) && void 0 !== n ? n : "", (null !== (A = T.editedTimestamp) && void 0 !== A ? A : T.timestamp).valueOf()), j = a.useMemo(() => {
                    if (null == R) return null;
                    if (R.type === S.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(R.id).astFormat({
                        username: null != y ? y.nick : R.author.username,
                        usernameHook: e => e
                    }));
                    if (R.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, u.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
                        username: null != y ? y.nick : R.author.username,
                        guildId: null == I ? void 0 : I.guild_id,
                        roleSubscriptionData: R.roleSubscriptionData
                    }));
                    if (R.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
                        application: null == R ? void 0 : R.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (R.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
                        application: null == R ? void 0 : R.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (R.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
                        application: null == R ? void 0 : R.application,
                        username: null == y ? void 0 : y.nick
                    }));
                    else if (R.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== R.content ? R.content : _.default.Messages.DEADCHAT_PROMPT_1;
                    if (null != R.content && "" !== R.content) {
                        let e = R.isFirstMessageInForumPost(I) ? {
                            formatInline: !0,
                            noStyleAndInteraction: !0,
                            allowHeading: !0,
                            allowList: !0,
                            allowLinks: O.showMaskedLinks || D.showMaskedLinks
                        } : {
                            formatInline: !0,
                            allowHeading: O.showListsAndHeaders || D.showListsAndHeaders,
                            allowList: O.showListsAndHeaders || D.showListsAndHeaders,
                            allowLinks: O.showMaskedLinks || D.showMaskedLinks
                        };
                        return (0, p.default)(R, e).content
                    }
                    return null
                }, [R, y, I, O, D]), b = (0, l.useStateFromStores)([f.default], () => null != R && f.default.isBlocked(R.author.id), [R]), P = (0, g.useContextMenuUser)(null == R ? void 0 : R.author.id, I.id), U = (0, g.useClickReply)(T, R, b), F = (0, g.useClickReferencedMessageAuthorUsername)(R, I, L, x), H = (0, g.useClickReferencedMessageAuthorAvatar)(v, x), k = a.useCallback(() => x({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }), [x]), G = (0, m.useNullableMessageAuthor)(T);
                return (0, s.jsx)(h.default, {
                    repliedAuthor: y,
                    baseMessage: T,
                    channel: I,
                    baseAuthor: G,
                    referencedMessage: M,
                    content: j,
                    compact: N,
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