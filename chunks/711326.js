"use strict";
n.r(t), n.d(t, {
  getMediaPostEmbedCommonData: function() {
    return _
  },
  getMediaPostEmbedChannelPath: function() {
    return c
  },
  canUseMediaPostEmbed: function() {
    return I
  }
}), n("702976");
var r = n("312016"),
  i = n("361572"),
  l = n("305961"),
  u = n("315102"),
  a = n("387111"),
  o = n("856220"),
  d = n("49111"),
  s = n("894488"),
  E = n("782340");

function _(e) {
  var t, n, r, i, l;
  let {
    mediaPostEmbedData: d,
    guild: _,
    parentChannel: c,
    postThread: I,
    user: S,
    selectedGuildId: T,
    canAccess: f = !1
  } = e;
  if (null == d) return null;
  let p = (0, o.getThumbnailImage)(d.thumbnail),
    N = !f && d.has_media_attachment,
    C = f ? E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
    A = null != S ? a.default.getName(d.guild_id, d.channel_id, S) : void 0,
    R = null == S ? void 0 : S.getAvatarURL(null == _ ? void 0 : _.id, 40);
  (null == R || T !== d.guild_id) && (R = u.default.getGuildIconURL({
    id: d.guild_id,
    icon: d.guild_icon,
    size: 40,
    canAnimate: !1
  }));
  let h = function(e) {
      if (null == e) return !1;
      let {
        height: t,
        width: n
      } = e;
      return null != t && null != n && t >= n
    }(d.thumbnail) && !N,
    O = (null === (t = d.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = d.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(s.SPOILER_ATTACHMENT_PREFIX));
  return {
    title: null !== (i = d.title) && void 0 !== i ? i : "",
    subtitle: d.description,
    ctaText: C,
    coverImage: p,
    coverImageOverlayText: N ? E.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
    parentChannelId: d.parent_channel_id,
    threadId: d.channel_id,
    postThread: I,
    messageId: d.message_id,
    canAccess: f,
    guildId: d.guild_id,
    guildName: null !== (l = null == _ ? void 0 : _.name) && void 0 !== l ? l : d.guild_name,
    authorId: null == d ? void 0 : d.author_id,
    authorName: A,
    channelName: null == c ? void 0 : c.name,
    avatarUrl: R,
    shouldShowBlurredThumbnailImage: N,
    shouldContainMediaWithBackground: h,
    shouldSpoiler: O,
    obscureAwaitingScan: !1,
    flags: d.flags,
    contentScanVersion: d.content_scan_version
  }
}

function c(e) {
  if (null == e) return;
  let t = (0, r.parseURLSafely)(e);
  if (null == t) return;
  let n = (0, r.remainingPathFromDiscordHostMatch)(t);
  if (null != n) return (0, i.tryParseChannelPath)(n)
}

function I(e, t) {
  let n = l.default.getGuild(e);
  if (null == n || null == t) return !1;
  let r = n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    i = !0 === t.isMediaChannel();
  return i && r
}