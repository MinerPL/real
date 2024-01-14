"use strict";
n.r(t), n.d(t, {
  getOptions: function() {
    return d
  },
  findMatchingAutocompleteType: function() {
    return f
  },
  findCommandOptionAutocompleteType: function() {
    return p
  }
}), n("222007"), n("70102");
var l = n("913144"),
  i = n("798609"),
  r = n("389153"),
  o = n("149022"),
  s = n("237700"),
  a = n("851745"),
  u = n("958706");

function d(e) {
  var t;
  let {
    activeCommandOption: n,
    canMentionUsers: l = !0,
    canMentionRoles: s = !0,
    canMentionChannels: u = !0,
    canMentionEveryone: d,
    canMentionClyde: c = !1,
    useNewSlashCommands: f,
    canOnlyUseTextCommands: p,
    canSendStickers: m,
    hideMentionDescription: h,
    hidePersonalInformation: E,
    type: S,
    emojiIntention: g,
    editorRef: C,
    onSendMessage: T,
    onSendSticker: v,
    setValue: y
  } = e, x = {
    mentions: {
      channel: a.ChannelMentionMode.DENY,
      global: a.GlobalMentionMode.DENY,
      role: a.RoleMentionMode.DENY,
      user: a.UserMentionMode.DENY,
      clyde: a.ClydeMentionMode.DENY
    },
    commands: a.CommandMode.DISABLED,
    allowStickers: !0 === m,
    forNonStringCommandOption: null != n && n.type !== i.ApplicationCommandOptionType.STRING,
    hideMentionDescription: !0 === h,
    hidePersonalInformation: !0 === E,
    chatInputType: S,
    emojiIntention: g,
    sendMessage: T,
    sendSticker: v,
    insertText: (e, t) => {
      var n;
      null === (n = C.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
    },
    replaceText: (e, t) => {
      y(e, null != t ? t : (0, o.toRichValue)(e))
    },
    getCommandOptionValues: () => {
      var e;
      return null === (e = C.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
    }
  };
  if (null != n) {
    let e = (0, r.getApplicationCommandOptionQueryOptions)(n);
    e.canMentionChannels && (x.mentions.channel = a.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (x.mentions.global = e.canMentionHere ? a.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : a.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (x.mentions.role = e.canMentionNonMentionableRoles ? a.RoleMentionMode.ALLOW_ALL : a.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (x.mentions.user = e.canMentionAnyGuildUser ? a.UserMentionMode.ALLOW_GUILD : a.UserMentionMode.ALLOW_CHANNEL), x.hideMentionDescription = !0
  } else u && (x.mentions.channel = a.ChannelMentionMode.ALLOW_SELECTABLE), s && (x.mentions.role = a.RoleMentionMode.ALLOW_MENTIONABLE), l && (x.mentions.user = a.UserMentionMode.ALLOW_CHANNEL), d && (x.mentions.global = a.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (x.mentions.clyde = a.ClydeMentionMode.ALLOW);
  return (null === (t = S.commands) || void 0 === t ? void 0 : t.enabled) && (f ? x.commands = p ? a.CommandMode.NEW_TEXT_ONLY : a.CommandMode.NEW : x.commands = a.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (x.allowedChannelTypes = n.channelTypes), x
}

function c(e) {
  let {
    type: t,
    channel: n,
    guild: l,
    query: i,
    isAtStart: r,
    options: o
  } = e, a = s.AUTOCOMPLETE_OPTIONS[t];
  if (null != a.sentinel) {
    if (!i.startsWith(a.sentinel)) return !1;
    i = i.substring(a.sentinel.length)
  }
  return !!(null == a.matches || a.matches(n, l, i, r, o)) || !1
}

function f(e) {
  let {
    channel: t,
    guild: n,
    options: i,
    currentWord: r,
    currentWordIsAtStart: o,
    textValue: d,
    optionText: f
  } = e, p = null;
  for (let e of s.AUTOCOMPLETE_PRIORITY) {
    var m, h, E, S, g, C;
    let T = s.AUTOCOMPLETE_OPTIONS[e];
    if (e === a.AutocompleteOptionTypes.GIFS || e === a.AutocompleteOptionTypes.CHOICES) {
      if (i.commands === a.CommandMode.OLD_BUILT_INS) {
        if (c({
            type: e,
            channel: t,
            guild: n,
            query: d,
            isAtStart: !1,
            options: i
          })) {
          p = {
            type: e,
            typeInfo: T,
            query: d
          };
          break
        }
      } else if (c({
          type: e,
          channel: t,
          guild: n,
          query: f,
          isAtStart: !1,
          options: i
        })) return {
        type: e,
        typeInfo: T,
        query: f
      }
    } else if (e === a.AutocompleteOptionTypes.COMMANDS && i.commands !== a.CommandMode.OLD_BUILT_INS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: d,
          isAtStart: !0,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: d.substring(null !== (h = null === (m = T.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0)
        };
        break
      }
    } else if (e === a.AutocompleteOptionTypes.LEGACY_COMMANDS) {
      if (c({
          type: e,
          channel: t,
          guild: n,
          query: d,
          isAtStart: o,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: d
        };
        break
      }
    } else if (e === a.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
      if (null != r && r.length > 0 && l.default.dispatch({
          type: "EMOJI_INTERACTION_INITIATED",
          interaction: u.EmojiInteractionPoint.AutocompleteTyped
        }), null != r && c({
          type: e,
          channel: t,
          guild: n,
          query: r,
          isAtStart: o,
          options: i
        })) {
        p = {
          type: e,
          typeInfo: T,
          query: r.substring(null !== (S = null === (E = T.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== S ? S : 0)
        };
        break
      }
    } else if (null != r && c({
        type: e,
        channel: t,
        guild: n,
        query: r,
        isAtStart: o,
        options: i
      })) {
      p = {
        type: e,
        typeInfo: T,
        query: r.substring(null !== (C = null === (g = T.sentinel) || void 0 === g ? void 0 : g.length) && void 0 !== C ? C : 0)
      };
      break
    }
  }
  return null == p ? null : (p.query = p.query.toLocaleLowerCase(), p)
}

function p(e, t) {
  let n;
  if (null == t || null == e) return null;
  if (null != e.choices || e.autocomplete) n = a.AutocompleteOptionTypes.CHOICES;
  else switch (e.type) {
    case i.ApplicationCommandOptionType.BOOLEAN:
      n = a.AutocompleteOptionTypes.CHOICES;
      break;
    case i.ApplicationCommandOptionType.CHANNEL:
      n = a.AutocompleteOptionTypes.CHANNELS;
      break;
    case i.ApplicationCommandOptionType.ROLE:
    case i.ApplicationCommandOptionType.USER:
    case i.ApplicationCommandOptionType.MENTIONABLE:
      n = a.AutocompleteOptionTypes.MENTIONS;
      break;
    default:
      return null
  }
  let l = s.AUTOCOMPLETE_OPTIONS[n];
  return {
    type: n,
    typeInfo: l,
    query: t
  }
}