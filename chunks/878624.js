            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n("884691"),
                a = n("316693"),
                l = n("446674"),
                s = n("701916"),
                o = n("939398"),
                r = n("42203"),
                d = n("923959"),
                u = n("26989"),
                c = n("305961"),
                f = n("957255"),
                h = n("18494"),
                p = n("162771"),
                g = n("697218"),
                m = n("901165"),
                S = n("819068"),
                E = n("49111");
            class v extends i.Component {
                componentDidUpdate(e) {
                    if (this.props.locked) return null;
                    let {
                        selectedGuild: t,
                        selectedChannel: n,
                        isNSFWChannel: i,
                        isMemberPending: a,
                        hasPreviewEnabled: l,
                        postableChannelCount: d
                    } = this.props;
                    if ((t !== e.selectedGuild || a && !e.isMemberPending) && (0, o.trackWithOverlayMetadata)(E.AnalyticEvents.GUILD_VIEWED, {
                            ...a ? {
                                is_pending: a,
                                preview_enabled: l
                            } : {},
                            postable_channels: d
                        }), null != n && n !== e.selectedChannel) {
                        let e = (0, s.collectThreadMetadata)(r.default.getChannel(n), !0);
                        (0, o.trackWithOverlayMetadata)(E.AnalyticEvents.CHANNEL_OPENED, {
                            channel_is_nsfw: i,
                            ...e
                        })
                    }
                }
                render() {
                    return null
                }
            }
            var y = l.default.connectStores([p.default, h.default, r.default, c.default, g.default, m.default, u.default, d.default, f.default], () => {
                var e, t, n;
                let i = p.default.getGuildId(),
                    l = h.default.getChannelId(i),
                    s = r.default.getChannel(l),
                    o = c.default.getGuild(i),
                    v = g.default.getCurrentUser(),
                    y = null !== (t = d.default.getChannels(null == o ? void 0 : o.id)[d.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
                    C = y.length > 0 ? y.filter(e => {
                        let {
                            channel: t
                        } = e;
                        return f.default.can(a.default.combine(E.Permissions.SEND_MESSAGES, E.Permissions.VIEW_CHANNEL), t)
                    }).length : 0,
                    I = null != v && null != i && null !== (n = null === (e = u.default.getMember(i, v.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
                return {
                    selectedGuild: i,
                    selectedChannel: l,
                    isNSFWChannel: null == s ? void 0 : s.nsfw,
                    locked: m.default.isUILocked((0, S.getPID)()),
                    hasPreviewEnabled: null == o ? void 0 : o.features.has(E.GuildFeatures.PREVIEW_ENABLED),
                    isMemberPending: I,
                    postableChannelCount: C
                }
            })(v)