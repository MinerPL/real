            "use strict";
            i.r(t), i.d(t, {
                EmojiPickerInspector: function() {
                    return M
                }
            });
            var n = i("37983"),
                l = i("884691"),
                s = i("446674"),
                a = i("77078"),
                r = i("206230"),
                o = i("858619"),
                u = i("575226"),
                c = i("305781"),
                d = i("986632"),
                f = i("562323"),
                E = i("166465"),
                m = i("845579"),
                I = i("305961"),
                p = i("471671"),
                g = i("351825"),
                _ = i("315102"),
                S = i("402671"),
                h = i("788506"),
                C = i("352046"),
                T = i("917764"),
                N = i("83017"),
                A = i("913631"),
                y = i("115279"),
                v = i("782340"),
                j = i("783935");

            function R(e) {
                return "animated" in e
            }
            let O = e => {
                    let {
                        inspectedEmoji: t,
                        channel: i,
                        guildId: n,
                        intention: l,
                        pack: s,
                        guild: a
                    } = e, r = R(t);
                    if (null != s) {
                        let e = !!r && S.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: i,
                            intention: l,
                            canViewAndUsePackEmoji: !0,
                            guildId: n
                        });
                        return e ? v.default.Messages.INVENTORY_LOCKED_PACK_EMOJI_UPSELL.format({
                            packName: s.name
                        }) : v.default.Messages.EMOJI_FROM_PACK_V2.format({
                            packName: s.name
                        })
                    }
                    return null != a && r ? v.default.Messages.EMOJI_FROM_GUILD.format({
                        guildName: a.name
                    }) : null
                },
                M = l.memo(function(e) {
                    let t, {
                            className: i,
                            emojiGrid: S,
                            guildId: v,
                            pickerIntention: M,
                            channel: x
                        } = e,
                        P = d.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
                        L = l.useMemo(() => {
                            var e;
                            let {
                                rowIndex: t,
                                columnIndex: i
                            } = P;
                            return null === (e = S[t]) || void 0 === e ? void 0 : e[i]
                        }, [S, P]),
                        D = (null == L ? void 0 : L.type) === N.EmojiGridItemTypes.EMOJI ? null == L ? void 0 : L.emoji : {
                            type: "CREATE_EMOJI",
                            guildId: null == L ? void 0 : L.guildId,
                            allNamesString: null == L ? void 0 : L.name
                        },
                        b = (0, s.useStateFromStores)([I.default], () => null !== D && D.type === o.EmojiTypes.GUILD ? I.default.getGuild(D.guildId) : null, [D]),
                        U = (0, s.useStateFromStores)([E.default], () => null != L && L.type === N.EmojiGridItemTypes.EMOJI && null != L.emoji && L.emoji.type === o.EmojiTypes.PACK ? E.default.getPackByPackId({
                            packId: L.emoji.packId
                        }) : null, [L]),
                        w = (0, s.useStateFromStores)([p.default], () => p.default.isFocused()),
                        G = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion, []),
                        k = m.AnimateEmoji.useSetting(),
                        F = (0, h.useIsFavoriteEmoji)(v, R(D) ? D : null),
                        {
                            newlyAddedEmojis: V
                        } = (0, C.default)(v, M),
                        K = D.id,
                        H = (null == L ? void 0 : L.type) === N.EmojiGridItemTypes.EMOJI ? L.subCategory : y.EmojiSubCategory.NONE;
                    if (l.useEffect(() => {
                            let e = Date.now();
                            return () => {
                                let t = Date.now() - e;
                                t >= 250 && R(D) && H !== y.EmojiSubCategory.NONE && (H === y.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== D && D.type === o.EmojiTypes.GUILD && (0, c.updateNewlyAddedEmojiSeenAcknowledged)(D.guildId, V[0].id), null != P.source && (0, h.trackEmojiFocus)({
                                    emoji: D,
                                    subCategory: H,
                                    position: L.columnIndex + 1,
                                    newlyAddedHighlight: H === y.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(v, K)
                                }))
                            }
                        }), null == D) return null;
                    if (R(D)) {
                        var B;
                        let e = null != D.id ? _.default.getEmojiURL({
                            id: D.id,
                            animated: k && D.animated,
                            size: 28
                        }) : D.url;
                        t = "" === e ? (0, n.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: j.glyphEmoji,
                            children: "surrogates" in D ? D.surrogates : null
                        }) : (0, n.jsx)("img", {
                            alt: null !== (B = D.allNamesString) && void 0 !== B ? B : "",
                            src: e,
                            className: j.emoji
                        })
                    } else t = (0, n.jsx)(g.default, {
                        className: j.icon,
                        foreground: j.icon,
                        width: 24,
                        height: 24
                    });
                    let J = null != U ? (0, n.jsx)(A.default, {
                        className: j.guildIcon,
                        pack: U
                    }) : null != b ? (0, n.jsx)(T.default, {
                        className: j.guildIcon,
                        guild: b,
                        shouldAnimate: !G && w
                    }) : null;
                    return (0, n.jsx)(f.default, {
                        className: i,
                        graphicPrimary: t,
                        graphicSecondary: J,
                        titlePrimary: D.allNamesString,
                        titleSecondary: O({
                            inspectedEmoji: D,
                            channel: x,
                            guildId: v,
                            intention: M,
                            pack: U,
                            guild: b
                        }),
                        isFavorite: F,
                        emojiSubCategory: H
                    })
                })