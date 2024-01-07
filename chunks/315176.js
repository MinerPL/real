            "use strict";
            n.r(t), n.d(t, {
                sendRandomStickerOrEmoji: function() {
                    return I
                }
            }), n("834022");
            var a = n("249654"),
                s = n("819689"),
                l = n("385976"),
                i = n("252931"),
                r = n("884351"),
                o = n("866353"),
                u = n("467094"),
                d = n("364685"),
                c = n("161585"),
                f = n("305961"),
                m = n("697218"),
                E = n("402671"),
                _ = n("49111"),
                h = n("958706");

            function p(e) {
                let t = f.default.getGuild(e);
                return null != t && (t.nsfwLevel === _.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === _.GuildNSFWContentLevel.SAFE)
            }
            async function I(e, t) {
                var n, _, I;
                let T = t.getGuildId();
                if (null == T) return;
                let g = f.default.getGuild(T);
                if (null == g) return;
                let C = m.default.getCurrentUser();
                if (null == C) return;
                await (0, u.fetchStickerPacks)();
                let S = Array.from(d.default.getAllStickersIterator()),
                    A = S.filter(e => e.type === c.MetaStickerType.GUILD),
                    N = A.filter(e => p(e.guild_id) && (0, o.isSendableSticker)(e, C, t)).sort((e, t) => -a.default.compare(e.id, t.id));
                if (N.length > 5) {
                    let a = [N[Math.floor(Math.pow(Math.random(), 2) * N.length)].id];
                    s.default.sendStickers(t.id, a, "", {
                        messageReference: {
                            guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                            channel_id: t.id,
                            message_id: e
                        }
                    });
                    return
                }
                let M = (0, i.getInventoryGuildPacksUserExperimentConfig)({
                        user: C,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    v = f.default.getGuilds(),
                    x = Object.keys(v).filter(p).map(e => l.default.getUsableGuildEmoji(e)).flat().filter(e => null == E.default.getEmojiUnavailableReason({
                        emoji: e,
                        channel: t,
                        guildId: T,
                        intention: h.EmojiIntention.CHAT,
                        canViewAndUsePackEmoji: M
                    })).sort((e, t) => -a.default.compare(e.id, t.id));
                if (x.length > 10) {
                    let n = x[Math.floor(Math.pow(Math.random(), 2) * x.length)];
                    s.default.sendMessage(t.id, r.default.parse(t, n.allNamesString), !1, {
                        messageReference: {
                            guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
                            channel_id: t.id,
                            message_id: e
                        }
                    });
                    return
                }
                let O = S.filter(e => e.type === c.MetaStickerType.STANDARD),
                    L = [O[Math.floor(Math.random() * O.length)].id];
                s.default.sendStickers(t.id, L, "", {
                    messageReference: {
                        guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
                        channel_id: t.id,
                        message_id: e
                    }
                })
            }