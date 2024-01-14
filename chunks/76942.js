"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("843762"), n("222007");
var l = n("298386"),
  i = n("123225"),
  r = n("679653"),
  o = n("42203"),
  s = n("923959"),
  a = n("501536"),
  u = n("25292"),
  d = n("200294"),
  c = n("851745"),
  f = n("406291"),
  p = n("724210"),
  m = n("782340");
let h = {
  sentinel: f.CHANNEL_SENTINEL,
  matches: (e, t, n, l, i) => i.mentions.channel !== c.ChannelMentionMode.DENY && !e.isPrivate(),
  queryResults(e, t, n, l, r) {
    let o, a, d = s.GUILD_SELECTABLE_CHANNELS_KEY;
    return n.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = s.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), l.forNonStringCommandOption ? o = u.default.queryApplicationCommandChannelResults({
      query: n,
      channel: e,
      channelTypes: l.allowedChannelTypes
    }) : (o = u.default.queryChannelResults({
      query: n,
      channel: e,
      type: d
    }), null != t && (a = u.default.queryStaticRouteChannels({
      query: n,
      guild: t
    }), o.channels.unshift(...a))), {
      results: o,
      staticRouteChannels: a
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          channels: l
        },
        selectedIndex: r,
        query: s,
        options: u,
        onHover: c,
        onClick: p
      } = e,
      h = s.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL;
    return h ? (t = m.default.Messages.VOICE_CHANNELS_MATCHING, n = m.default.Messages.VOICE_CHANNELS, s = s.substring(1)) : u.forNonStringCommandOption ? (t = m.default.Messages.CHANNELS_MATCHING, n = m.default.Messages.CHANNELS) : (t = m.default.Messages.TEXT_CHANNELS_MATCHING, n = m.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
      query: s,
      selectedIndex: r,
      autocompletes: l,
      onHover: c,
      onClick: p,
      titleWithQuery: t,
      titleWithoutQuery: n,
      Component: a.default.Channel,
      getProps: e => ({
        channel: e,
        key: e.id,
        category: o.default.getChannel(e.parent_id)
      }),
      getQuery: e => h ? "".concat(f.CHANNEL_SENTINEL).concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(f.CHANNEL_SENTINEL).concat(e),
      key: "channels"
    })
  },
  onSelect(e) {
    let {
      results: {
        channels: t
      },
      index: n,
      options: i
    } = e, o = t[n];
    return i.insertText(function(e) {
      switch (e.type) {
        case l.ChannelTypes.PUBLIC_THREAD:
        case l.ChannelTypes.PRIVATE_THREAD:
        case l.ChannelTypes.ANNOUNCEMENT_THREAD:
        case l.ChannelTypes.GUILD_VOICE:
        case l.ChannelTypes.GUILD_STAGE_VOICE:
        case l.ChannelTypes.GUILD_CATEGORY:
          return '#"'.concat((0, r.escapeChannelName)(e.name), '"');
        default:
          let t = s.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
          return "#".concat(null != t ? t.name : e.name)
      }
    }(o), function(e) {
      return p.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
    }(o)), {
      type: c.AutocompleteSelectionTypes.CHANNEL
    }
  }
};
var E = h