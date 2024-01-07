            "use strict";
            n.r(t), n.d(t, {
                getChannelListSectionFooterHeight: function() {
                    return h
                },
                getKeyForSectionFooter: function() {
                    return C
                },
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("811305"),
                i = n("404008"),
                r = n("319839"),
                o = n("175632"),
                u = n("708186"),
                d = n("249181"),
                c = n("272125");
            let f = a.memo(function(e) {
                let {
                    guildChannels: t,
                    guildChannelsVersion: n
                } = e, s = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
                return null == s ? null : (0, l.jsx)(u.VoiceChannelCategoryButton, {
                    category: s
                })
            });

            function h(e) {
                let {
                    sectionIndex: t,
                    guildChannels: n,
                    voiceStates: l,
                    selectedChannelId: a,
                    selectedVoiceChannelId: s,
                    optInEnabled: i
                } = e;
                if (t === n.voiceChannelsSectionNumber) return 44;
                let {
                    hasDivider: u,
                    canHaveVoiceSummary: c
                } = (0, o.getSectionFooterConfig)(n, i, t), f = u ? d.HEIGHT_SECTION_DIVIDER : 0;
                if (!c || t === r.SECTION_INDEX_COMMUNITY) return f;
                let h = n.getNamedCategoryFromSection(t);
                if (null == h) return f;
                let C = (0, o.isSectionFooterWithActiveVoiceChannels)({
                    category: h,
                    selectedChannelId: a,
                    selectedVoiceChannelId: s,
                    voiceStates: l
                });
                return C ? d.HEIGHT_CHANNEL + f : f
            }

            function C(e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let {
                    hasDivider: l,
                    canHaveVoiceSummary: a
                } = (0, o.getSectionFooterConfig)(t, n, e);
                return "section-footer-".concat(e).concat(l ? "-divider" : "").concat(a ? "-voice-summary" : "")
            }
            var p = a.memo(function(e) {
                let {
                    sectionIndex: t,
                    guildChannels: n,
                    guildChannelsVersion: u,
                    voiceStates: d,
                    guildId: h,
                    selectedChannelId: C,
                    selectedVoiceChannelId: p,
                    optInEnabled: m
                } = e, {
                    hasDivider: E,
                    canHaveVoiceSummary: g
                } = a.useMemo(() => (0, o.getSectionFooterConfig)(n, m, t), [n, m, t, u]), I = a.useMemo(() => t === r.SECTION_INDEX_COMMUNITY ? null : n.getCategoryFromSection(t), [n, t, u]), S = a.useMemo(() => null != I && I.isCollapsed ? (0, i.computeSummarizedVoiceUsers)({
                    channels: I.getChannelRecords(),
                    selectedChannelId: C,
                    selectedVoiceChannelId: p,
                    voiceStates: d
                }) : [], [I, C, p, d]);
                if (t === n.voiceChannelsSectionNumber) return (0, l.jsx)(f, {
                    guildChannels: n,
                    guildChannelsVersion: u
                });
                let _ = E ? (0, l.jsx)("div", {
                    className: c.sectionDivider
                }) : null;
                return g && 0 !== S.length ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: c.voiceUserSummary,
                        children: (0, l.jsx)(s.default, {
                            renderIcon: !0,
                            users: S,
                            max: 8,
                            showUserPopout: !0,
                            guildId: h
                        })
                    }), _]
                }) : _
            })