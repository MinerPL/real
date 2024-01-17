"use strict";
n.r(t), n.d(t, {
  sendRandomStickerOrEmoji: function() {
    return N
  }
}), n("834022");
var s = n("249654"),
  l = n("819689"),
  a = n("385976"),
  i = n("252931"),
  r = n("884351"),
  o = n("866353"),
  u = n("467094"),
  d = n("364685"),
  c = n("161585"),
  f = n("305961"),
  E = n("697218"),
  _ = n("402671"),
  T = n("49111"),
  I = n("958706");

function m(e) {
  let t = f.default.getGuild(e);
  return null != t && (t.nsfwLevel === T.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === T.GuildNSFWContentLevel.SAFE)
}
async function N(e, t) {
  var n, T, N;
  let p = t.getGuildId();
  if (null == p) return;
  let S = f.default.getGuild(p);
  if (null == S) return;
  let A = E.default.getCurrentUser();
  if (null == A) return;
  await (0, u.fetchStickerPacks)();
  let C = Array.from(d.default.getAllStickersIterator()),
    h = C.filter(e => e.type === c.MetaStickerType.GUILD),
    g = h.filter(e => m(e.guild_id) && (0, o.isSendableSticker)(e, A, t)).sort((e, t) => -s.default.compare(e.id, t.id));
  if (g.length > 5) {
    let s = [g[Math.floor(Math.pow(Math.random(), 2) * g.length)].id];
    l.default.sendStickers(t.id, s, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let M = (0, i.getInventoryGuildPacksUserExperimentConfig)({
      user: A,
      autoTrackExposure: !1
    }).viewAndUseEnabled,
    O = f.default.getGuilds(),
    R = Object.keys(O).filter(m).map(e => a.default.getUsableGuildEmoji(e)).flat().filter(e => null == _.default.getEmojiUnavailableReason({
      emoji: e,
      channel: t,
      guildId: p,
      intention: I.EmojiIntention.CHAT,
      canViewAndUsePackEmoji: M
    })).sort((e, t) => -s.default.compare(e.id, t.id));
  if (R.length > 10) {
    let n = R[Math.floor(Math.pow(Math.random(), 2) * R.length)];
    l.default.sendMessage(t.id, r.default.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (T = t.getGuildId()) && void 0 !== T ? T : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let L = C.filter(e => e.type === c.MetaStickerType.STANDARD),
    v = [L[Math.floor(Math.random() * L.length)].id];
  l.default.sendStickers(t.id, v, "", {
    messageReference: {
      guild_id: null !== (N = t.getGuildId()) && void 0 !== N ? N : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}