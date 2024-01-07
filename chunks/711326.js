            "use strict";
            n.r(t), n.d(t, {
                getMediaPostEmbedCommonData: function() {
                    return _
                },
                getMediaPostEmbedChannelPath: function() {
                    return E
                },
                canUseMediaPostEmbed: function() {
                    return f
                }
            }), n("702976");
            var i = n("312016"),
                a = n("361572"),
                l = n("305961"),
                s = n("315102"),
                r = n("387111"),
                u = n("856220"),
                o = n("49111"),
                d = n("894488"),
                c = n("782340");

            function _(e) {
                var t, n, i, a, l;
                let {
                    mediaPostEmbedData: o,
                    guild: _,
                    parentChannel: E,
                    postThread: f,
                    user: h,
                    selectedGuildId: p,
                    canAccess: T = !1
                } = e;
                if (null == o) return null;
                let C = (0, u.getThumbnailImage)(o.thumbnail),
                    m = !T && o.has_media_attachment,
                    S = T ? c.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : c.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    I = null != h ? r.default.getName(o.guild_id, o.channel_id, h) : void 0,
                    g = null == h ? void 0 : h.getAvatarURL(null == _ ? void 0 : _.id, 40);
                (null == g || p !== o.guild_id) && (g = s.default.getGuildIconURL({
                    id: o.guild_id,
                    icon: o.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                let A = function(e) {
                        if (null == e) return !1;
                        let {
                            height: t,
                            width: n
                        } = e;
                        return null != t && null != n && t >= n
                    }(o.thumbnail) && !m,
                    N = (null === (t = o.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (i = o.thumbnail) || void 0 === i ? void 0 : null === (n = i.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
                return {
                    title: null !== (a = o.title) && void 0 !== a ? a : "",
                    subtitle: o.description,
                    ctaText: S,
                    coverImage: C,
                    coverImageOverlayText: m ? c.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: o.parent_channel_id,
                    threadId: o.channel_id,
                    postThread: f,
                    messageId: o.message_id,
                    canAccess: T,
                    guildId: o.guild_id,
                    guildName: null !== (l = null == _ ? void 0 : _.name) && void 0 !== l ? l : o.guild_name,
                    authorId: null == o ? void 0 : o.author_id,
                    authorName: I,
                    channelName: null == E ? void 0 : E.name,
                    avatarUrl: g,
                    shouldShowBlurredThumbnailImage: m,
                    shouldContainMediaWithBackground: A,
                    shouldSpoiler: N,
                    obscureAwaitingScan: !1,
                    flags: o.flags,
                    contentScanVersion: o.content_scan_version
                }
            }

            function E(e) {
                if (null == e) return;
                let t = (0, i.parseURLSafely)(e);
                if (null == t) return;
                let n = (0, i.remainingPathFromDiscordHostMatch)(t);
                if (null != n) return (0, a.tryParseChannelPath)(n)
            }

            function f(e, t) {
                let n = l.default.getGuild(e);
                if (null == n || null == t) return !1;
                let i = n.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
                    a = !0 === t.isMediaChannel();
                return a && i
            }