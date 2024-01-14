"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("957255"),
  i = n("501536"),
  r = n("25292"),
  o = n("200294"),
  s = n("851745"),
  a = n("406291"),
  u = n("49111"),
  d = n("958706"),
  c = n("782340");
let f = {
  sentinel: a.REACTION_START_SENTINEL,
  matches(e, t, n, i, r) {
    var o, s;
    return i && null !== (s = null === (o = r.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== s && s && (l.default.can(u.Permissions.ADD_REACTIONS, e) || e.isPrivate())
  },
  queryResults(e, t, n, l, i) {
    var o;
    let {
      emojis: s
    } = r.default.queryEmojiResults({
      query: n,
      channel: e,
      intention: d.EmojiIntention.REACTION,
      canViewAndUsePackEmoji: null !== (o = l.canViewAndUsePackEmoji) && void 0 !== o && o
    });
    return {
      results: {
        emojis: s.unlocked
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t
      },
      selectedIndex: n,
      query: l,
      onHover: r,
      onClick: s
    } = e;
    return (0, o.renderAutocompleteGroup)({
      query: l,
      selectedIndex: n,
      autocompletes: t,
      onHover: r,
      onClick: s,
      titleWithQuery: c.default.Messages.REACTIONS_MATCHING,
      titleWithoutQuery: c.default.Messages.EMOJI,
      Component: i.default.Emoji,
      getProps: e => ({
        emoji: e,
        key: e.id || e.uniqueName || e.name,
        sentinel: a.EMOJI_SENTINEL
      }),
      getQuery: e => "".concat(a.REACTION_START_SENTINEL).concat(e),
      key: "reactions"
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t
      },
      index: n,
      options: l
    } = e, i = t[n];
    return l.sendMessage(function(e) {
      return "".concat(a.REACTION_START_SENTINEL).concat(e.name).concat(a.REACTION_END_SENTINEL)
    }(i)), {
      type: s.AutocompleteSelectionTypes.REACTION
    }
  }
};
var p = f