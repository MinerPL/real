            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            }), i("808653");
            var n = i("716241"),
                r = i("385976"),
                a = i("166465"),
                o = i("42203"),
                s = i("18494"),
                u = i("402671"),
                l = i("255214"),
                E = i("352046"),
                d = i("49111"),
                c = i("958706"),
                m = i("13030");

            function _(e) {
                var t;
                let {
                    intention: i,
                    containerWidth: _,
                    rowSize: f,
                    isBurstReaction: g,
                    analyticsObject: I
                } = e, p = o.default.getChannel(s.default.getChannelId()), C = null == p ? void 0 : p.getGuildId(), O = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), y = null != p ? r.default.getDisambiguatedEmojiContext(p.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], T = O.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), j = null != C ? r.default.getGuildEmoji(C) : [], S = a.default.getPacksForUser().map(e => e.content.emojis).reduce((e, t) => e.concat(t), []), A = null !== (t = r.default.getDisambiguatedEmojiContext(null == p ? void 0 : p.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, h = Object.values(A).reduce((e, t) => e += t.length, 0), {
                    topEmojis: M,
                    newlyAddedEmojis: R
                } = (0, E.getTopAndNewlyAddedEmojis)({
                    guildId: null == p ? void 0 : p.getGuildId(),
                    pickerIntention: i
                }), {
                    visibleTopEmojis: N,
                    visibleNewlyAddedEmojis: P
                } = (0, l.getEmojiHotrail)({
                    topEmojis: M,
                    newlyAddedEmojis: R,
                    rowSize: f
                });
                n.default.trackWithMetadata(i === c.EmojiIntention.REACTION ? d.AnalyticEvents.REACTION_PICKER_OPENED : d.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: _,
                    tab: m.ExpressionPickerViewType.EMOJI,
                    badged: !1,
                    num_expressions_favorites: y.length,
                    num_animated_expressions_favorites: y.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_favorites: y.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_favorites: y.filter(e => null == e.id).length,
                    num_expressions_frecent: T.length,
                    num_animated_expressions_frecent: T.filter(e => null == e ? void 0 : e.animated).length,
                    num_custom_expressions_frecent: T.filter(u.default.isCustomEmoji).length,
                    num_standard_expressions_frecent: T.filter(e => null == e.id).length,
                    num_current_guild_expressions: j.length,
                    num_current_pack_expressions: S.length,
                    num_custom_expressions_total: h,
                    num_expressions_top_server: N.length,
                    num_animated_expressions_top_server: N.filter(e => e.animated).length,
                    num_expressions_newly_added: P.length,
                    num_animated_expressions_newly_added: P.filter(e => e.animated).length,
                    ...i === c.EmojiIntention.REACTION && {
                        is_burst: g
                    },
                    ...null != I && {
                        location_object: I
                    }
                })
            }