            "use strict";
            i.r(t), i.d(t, {
                getReactionTooltipText: function() {
                    return p
                }
            });
            var a = i("917351"),
                l = i.n(a),
                n = i("432173"),
                o = i("42203"),
                s = i("486996"),
                r = i("27618"),
                u = i("387111"),
                d = i("875978"),
                c = i("782340");

            function p(e, t) {
                var i;
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ReactionTypes.NORMAL,
                    p = arguments.length > 3 ? arguments[3] : void 0,
                    h = s.default.getReactions(e.getChannelId(), e.id, t, 3, a),
                    f = o.default.getChannel(e.getChannelId()),
                    T = null == f || f.isPrivate() ? null : f.getGuildId(),
                    m = e.getReaction(t),
                    E = a === d.ReactionTypes.BURST,
                    g = l(h).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(T, null == f ? void 0 : f.id, e)).value();
                if (0 === g.length) return "";
                let _ = {
                        standard: {
                            reactionTooltip1NInteractive: c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    R = E ? _.burst : _.standard,
                    I = null !== (i = E ? null == m ? void 0 : m.burst_count : null == m ? void 0 : m.count) && void 0 !== i ? i : 0,
                    C = Math.max(0, I - g.length),
                    O = (0, n.getReactionEmojiName)(t);
                if (1 === g.length) return C > 0 ? null != p ? R.reactionTooltip1NInteractive.format({
                    a: g[0],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip1N.format({
                    a: g[0],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip1.format({
                    a: g[0],
                    emojiName: O
                });
                if (2 === g.length) return C > 0 ? null != p ? R.reactionTooltip2NInteractive.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip2N.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip2.format({
                    a: g[0],
                    b: g[1],
                    emojiName: O
                });
                if (3 === g.length) return C > 0 ? null != p ? R.reactionTooltip3NInteractive.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip3N.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip3.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    emojiName: O
                });
                else return null != p ? R.reactionTooltipNInteractive.format({
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltipN.format({
                    n: C,
                    emojiName: O
                })
            }