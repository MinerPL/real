            "use strict";
            n.r(t), n.d(t, {
                packStageChannelPartyId: function() {
                    return d
                },
                unpackStageChannelParty: function() {
                    return c
                },
                isStageActivity: function() {
                    return _
                },
                shouldShowActivity: function() {
                    return E
                }
            }), n("222007");
            var i = n("271938"),
                a = n("42203"),
                l = n("305961"),
                s = n("325861"),
                r = n("837979"),
                u = n("49111");
            let o = "stage:";

            function d(e, t) {
                let n = 0,
                    a = i.default.getId(),
                    r = s.default.isSpeaker(a, e.id);
                r && (n |= 1);
                let d = l.default.getGuild(e.getGuildId());
                null != d && (d.hasFeature(u.GuildFeatures.PARTNERED) && (n |= 2), d.hasFeature(u.GuildFeatures.VERIFIED) && (n |= 4));
                let c = n.toString(16);
                return "".concat(o).concat(e.guild_id, ":").concat(e.id, ":").concat(c, ":").concat(t.id)
            }

            function c(e) {
                if (null == e || null == e.party) return;
                let {
                    id: t,
                    size: n
                } = e.party;
                try {
                    if (null == t || !t.startsWith(o)) return;
                    let [, e, i, a, l] = t.split(":"), s = parseInt(a, 16);
                    return {
                        guildId: e,
                        channelId: i,
                        size: n,
                        userIsSpeaker: (1 & s) != 0,
                        guildIsPartnered: (2 & s) != 0,
                        guildIsVerified: (4 & s) != 0,
                        stageInstanceId: l
                    }
                } catch (e) {
                    return null
                }
            }

            function _(e) {
                return (null == e ? void 0 : e.application_id) === r.STAGE_APPLICATION_ID
            }

            function E(e) {
                let t = c(e);
                if (null == t) return !1;
                let {
                    channelId: n
                } = t, i = a.default.getChannel(n);
                return null != i
            }