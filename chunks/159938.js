            "use strict";
            n.r(t), n.d(t, {
                useMediaPostEmbedData: function() {
                    return I
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("203288"),
                i = n("361572"),
                r = n("271938"),
                o = n("42203"),
                u = n("26989"),
                d = n("305961"),
                c = n("162771"),
                f = n("697218"),
                m = n("639440"),
                E = n("690563"),
                _ = n("921387"),
                h = n("711326"),
                p = n("49111");

            function I(e, t) {
                let n = (0, E.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
                    I = (0, h.getMediaPostEmbedChannelPath)(e),
                    T = (0, s.default)([u.default, r.default], () => {
                        let e = r.default.getId();
                        return u.default.isMember(null == I ? void 0 : I.guildId, e)
                    }, [I]),
                    g = (0, s.default)([l.default], () => null != I && (null == I ? void 0 : I.channelId) != null && l.default.isChannelGated(I.guildId, I.channelId), [I]),
                    C = t.hasFlag(p.MessageFlags.IS_CROSSPOST),
                    {
                        rawMediaPostEmbedData: S,
                        guild: A,
                        parentChannel: N,
                        user: M,
                        selectedGuildId: v,
                        canAccess: x
                    } = (0, s.useStateFromStoresObject)([_.default, d.default, o.default, f.default, c.default], () => {
                        var e;
                        let t = null === (e = _.default.getMediaPostEmbed(null == I ? void 0 : I.threadId)) || void 0 === e ? void 0 : e.media,
                            n = d.default.getGuild(null == I ? void 0 : I.guildId),
                            a = o.default.getChannel(null == I ? void 0 : I.channelId),
                            s = f.default.getUser(null == t ? void 0 : t.author_id),
                            l = c.default.getGuildId(),
                            r = null != a && (0, i.canViewChannel)(a);
                        return {
                            rawMediaPostEmbedData: t,
                            guild: n,
                            parentChannel: a,
                            user: s,
                            selectedGuildId: l,
                            canAccess: r
                        }
                    }, [I]),
                    O = a.useMemo(() => {
                        let e = (0, h.getMediaPostEmbedCommonData)({
                            mediaPostEmbedData: S,
                            guild: A,
                            parentChannel: N,
                            user: M,
                            selectedGuildId: v,
                            canAccess: x
                        });
                        return null == e ? null : {
                            ...e,
                            user: M
                        }
                    }, [S, A, N, M, v, x]);
                return a.useEffect(() => {
                    if ((null == I ? void 0 : I.threadId) != null) {
                        let e = _.default.getEmbedFetchState(I.threadId);
                        !0 === n && e === _.FetchState.NOT_FETCHED && (!T || !1 !== g) && (T || !C) && (0, m.fetchMediaPostEmbed)(null == I ? void 0 : I.threadId)
                    }
                }, [I, n, T, g, C]), O
            }