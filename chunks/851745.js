"use strict";
var l, i, r, o, s, a, u, d, c, f, p, m, h, E, S, g, C, T, v, y;
n.r(t), n.d(t, {
  MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
    return x
  },
  MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY: function() {
    return I
  },
  MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
    return N
  },
  GlobalMentionMode: function() {
    return l
  },
  UserMentionMode: function() {
    return i
  },
  RoleMentionMode: function() {
    return r
  },
  ChannelMentionMode: function() {
    return o
  },
  ClydeMentionMode: function() {
    return s
  },
  CommandMode: function() {
    return a
  },
  SelectType: function() {
    return u
  },
  AutocompleteOptionTypes: function() {
    return d
  },
  AutocompleteSelectionTypes: function() {
    return c
  },
  FocusMode: function() {
    return f
  }
});
let x = 3,
  I = 7,
  N = 20;
(p = l || (l = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", p[p.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (m = i || (i = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", m[m.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = r || (r = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (E = o || (o = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (S = s || (s = {}))[S.DENY = 0] = "DENY", S[S.ALLOW = 1] = "ALLOW", (g = a || (a = {}))[g.DISABLED = 0] = "DISABLED", g[g.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", g[g.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", g[g.NEW = 3] = "NEW", (C = u || (u = {}))[C.INSERT = 0] = "INSERT", C[C.SEND = 1] = "SEND", (T = d || (d = {})).MENTIONS = "MENTIONS", T.CHANNELS = "CHANNELS", T.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", T.REACTIONS = "REACTIONS", T.GIFS = "GIFS", T.LEGACY_COMMANDS = "LEGACY_COMMANDS", T.COMMANDS = "COMMANDS", T.COMMAND_OPTIONS = "COMMAND_OPTIONS", T.CHOICES = "CHOICES", (v = c || (c = {})).MENTION = "MENTION", v.CHANNEL = "CHANNEL", v.EMOJI = "EMOJI", v.STICKER = "STICKER", v.REACTION = "REACTION", v.GIF = "GIF", v.COMMAND = "COMMAND", v.COMMAND_OPTION = "COMMAND_OPTION", v.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", v.CHOICE = "CHOICE", v.EMOJI_UPSELL = "EMOJI_UPSELL", (y = f || (f = {}))[y.AUTO = 0] = "AUTO", y[y.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", y[y.MANUAL = 2] = "MANUAL"