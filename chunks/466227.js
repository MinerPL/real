"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("446674"),
  n = s("913144"),
  l = s("159794"),
  i = s("162771");
let r = {},
  o = {},
  d = 0;
class u extends a.default.Store {
  initialize() {
    this.waitFor(i.default)
  }
  isUploadingEmoji() {
    return d > 0
  }
  getEmojiRevision(e) {
    var t;
    return null !== (t = r[e]) && void 0 !== t ? t : 0
  }
  getEmojis(e) {
    return o[e]
  }
}
u.displayName = "GuildSettingsEmojiStore";
var c = new u(n.default, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: s
    } = e;
    o[t] = o[t].filter(e => e.id !== s)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: s
    } = e;
    o[t] = s.map(e => new l.default(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    o[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    d++
  },
  EMOJI_UPLOAD_STOP: function() {
    d--
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: s
    } = e;
    r[s] = (null !== (t = r[s]) && void 0 !== t ? t : 0) + 1
  }
})