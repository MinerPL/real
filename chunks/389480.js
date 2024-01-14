"use strict";
var l, a, s, i, r, o, u, d, c, m, f, h, p, g;

function E(e, t) {
  let {
    sound_id: n,
    emoji_id: l,
    emoji_name: a,
    user_id: s,
    available: i,
    ...r
  } = e;
  return {
    ...r,
    soundId: n,
    guildId: t,
    emojiId: l,
    emojiName: a,
    userId: s,
    available: null == i || i
  }
}

function v(e) {
  let {
    soundId: t,
    guildId: n,
    emojiId: l,
    emojiName: a,
    userId: s,
    ...i
  } = e;
  return {
    ...i,
    sound_id: t,
    guild_id: n,
    emoji_id: l,
    emoji_name: a,
    user_id: s
  }
}
n.r(t), n.d(t, {
  SoundButtonOverlay: function() {
    return l
  },
  AnalyticsSoundType: function() {
    return a
  },
  AnalyticsChangeType: function() {
    return s
  },
  AnalyticsSoundSource: function() {
    return i
  },
  soundboardSoundFromAPI: function() {
    return E
  },
  soundboardSoundToAPI: function() {
    return v
  },
  SoundboardSoundGridSectionType: function() {
    return r
  },
  SoundboardSoundItemType: function() {
    return o
  },
  LocalSoundTrigger: function() {
    return u
  }
}), (d = l || (l = {}))[d.PLAY = 0] = "PLAY", d[d.ADD = 1] = "ADD", (c = a || (a = {})).ENTRY = "entry_sound", c.EXIT = "exit_sound", c.DEFAULT = "default", (m = s || (s = {})).ADDED = "added", m.UPDATED = "updated", m.REMOVED = "removed", (f = i || (i = {})).DEFAULT = "default", f.CUSTOM = "custom", (h = r || (r = {}))[h.FAVORITES = 0] = "FAVORITES", h[h.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", h[h.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", h[h.GUILD = 3] = "GUILD", h[h.DEFAULTS = 4] = "DEFAULTS", h[h.SEARCH = 5] = "SEARCH", (p = o || (o = {}))[p.SOUND = 0] = "SOUND", p[p.ADD_SOUND = 1] = "ADD_SOUND", (g = u || (u = {}))[g.GIFT_CODE = 0] = "GIFT_CODE", g[g.SOUNDBOARD = 1] = "SOUNDBOARD", g[g.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"