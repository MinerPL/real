            "use strict";
            n.r(t), n.d(t, {
                getSectionFooterConfig: function() {
                    return o
                },
                isSectionFooterWithActiveVoiceChannels: function() {
                    return u
                }
            });
            var l = n("870691"),
                a = n("957255"),
                s = n("319839"),
                i = n("796618"),
                r = n("49111");

            function o(e, t, n) {
                var l, a, r, o, u;
                return {
                    hasDivider: (l = e, a = t, ! function(e, t) {
                        if (t === s.SECTION_INDEX_COMMUNITY) {
                            let t = e.getCommunitySection().getRows();
                            return 1 === t.length && t[0] === i.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR || e.getCommunitySection().isEmpty()
                        }
                        return 0 === e.getSections()[t]
                    }(l, r = n) && (r === s.SECTION_INDEX_COMMUNITY || !!a && (r === s.SECTION_INDEX_FAVORITES || r !== s.SECTION_INDEX_UNCATEGORIZED_CHANNELS && (r === l.recentsSectionNumber || (l.voiceChannelsSectionNumber, !1))))),
                    canHaveVoiceSummary: (o = e, !((u = n) === s.SECTION_INDEX_COMMUNITY || u === s.SECTION_INDEX_FAVORITES || u === s.SECTION_INDEX_UNCATEGORIZED_CHANNELS || u === o.recentsSectionNumber || u === o.voiceChannelsSectionNumber))
                }
            }

            function u(e) {
                let {
                    category: t,
                    voiceStates: n,
                    selectedChannelId: s,
                    selectedVoiceChannelId: i
                } = e, o = function(e) {
                    let {
                        category: t,
                        voiceStates: n,
                        selectedChannelId: s,
                        selectedVoiceChannelId: i
                    } = e;
                    if (!0 !== l.default.isCollapsed(t.record.id)) return [];
                    let o = t.getChannelRecords();
                    return o.filter(e => {
                        var t;
                        if (!a.default.can(r.Permissions.VIEW_CHANNEL, e)) return !1;
                        let l = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                        return e.id !== i && e.id !== s && l.length > 0
                    })
                }({
                    category: t,
                    selectedChannelId: s,
                    selectedVoiceChannelId: i,
                    voiceStates: n
                });
                return o.length > 0
            }