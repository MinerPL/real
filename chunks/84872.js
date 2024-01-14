"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("37983");
n("884691");
var i = n("551042"),
  r = n("166465"),
  o = n("866353"),
  s = n("467094"),
  a = n("364685"),
  u = n("161585"),
  d = n("41170"),
  c = n("305961"),
  f = n("501536"),
  p = n("25292"),
  m = n("200294"),
  h = n("851745"),
  E = n("406291"),
  S = n("49111"),
  g = n("782340"),
  C = n("106226");

function T(e, t) {
  return (0, l.jsx)(d.default, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}
let v = {
  sentinel: E.EMOJI_SENTINEL,
  stores: [a.default],
  matches: (e, t, n, l, i) => n.length > 1,
  queryResults(e, t, n, l, i) {
    var r;
    let a = l.allowStickers ? 0 : 40,
      u = S.MAX_AUTOCOMPLETE_RESULTS + a,
      {
        emojis: {
          unlocked: d
        }
      } = p.default.queryEmojiResults({
        query: n,
        channel: e,
        intention: l.emojiIntention,
        canViewAndUsePackEmoji: null !== (r = l.canViewAndUsePackEmoji) && void 0 !== r && r,
        maxCount: u
      });
    "-" === n[0] && (d = d.filter(e => {
      var t;
      return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
    }));
    let c = [];
    if (l.allowStickers) {
      (0, s.fetchStickerPacks)();
      let t = p.default.queryStickers([n], !0, [e, (e, t) => t === o.StickerSendability.SENDABLE]),
        l = Math.max(4, 8 - d.length);
      c = t.slice(0, l), "-" === n[0] && (c = t.filter(e => e.sticker.name === n))
    }
    let f = d.slice(0, u - c.length);
    return {
      results: {
        emojis: f,
        emojisLocked: [],
        stickers: c
      },
      metadata: {
        numEmojiResults: f.length,
        numStickerResults: c.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: o,
        emojisLocked: s
      },
      selectedIndex: a,
      query: u,
      onHover: d,
      onClick: p
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, m.renderAutocompleteGroup)({
        query: u,
        selectedIndex: a,
        autocompletes: t,
        onHover: d,
        onClick: p,
        titleWithQuery: g.default.Messages.EMOJI_MATCHING,
        titleWithoutQuery: g.default.Messages.EMOJI,
        Component: f.default.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: E.EMOJI_SENTINEL,
          guild: null != e.guildId ? c.default.getGuild(e.guildId) : null,
          pack: null != e.packId ? r.default.getPackByPackId({
            packId: e.packId
          }) : null
        }),
        getQuery: e => "".concat(E.EMOJI_SENTINEL).concat(e),
        key: "emoji"
      }), s.length > 0 ? (0, m.renderAutocompleteGroup)({
        query: u,
        selectedIndex: a,
        autocompletes: s,
        onHover: d,
        onClick: () => {
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("499237").then(n.bind(n, "499237"));
            return t => (0, l.jsx)(e, {
              ...t
            })
          })
        },
        titleWithQuery: 0 === t.length ? g.default.Messages.EMOJI_MATCHING : null,
        titleWithoutQuery: 0 === t.length ? g.default.Messages.EMOJI : null,
        Component: f.default.EmojiUpsell,
        getProps: e => {
          let {
            emojis: t
          } = e;
          return {
            key: "emoji-upsell",
            emojis: t
          }
        },
        getQuery: e => "".concat(E.EMOJI_SENTINEL).concat(e),
        key: "emoji-upsell",
        indexOffset: t.length
      }) : null, (t.length > 0 || s.length > 0) && o.length > 0 && (0, l.jsx)(f.default.Divider, {
        className: C.emojiStickersDivider
      }), (0, m.renderAutocompleteGroup)({
        query: u,
        selectedIndex: a,
        autocompletes: o,
        onHover: d,
        onClick: p,
        titleWithQuery: g.default.Messages.STICKERS_MATCHING,
        titleWithoutQuery: g.default.Messages.STICKER,
        Component: f.default.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: T,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length + s.length,
        headerClassName: t.length > 0 ? C.stickersHeaderWithEmojiResults : void 0
      })]
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t,
        emojisLocked: n,
        stickers: l
      },
      index: i,
      options: r
    } = e;
    if (i < t.length) {
      let e = t[i];
      return r.insertText(function(e) {
        return "".concat(E.EMOJI_SENTINEL).concat(e.name).concat(E.EMOJI_SENTINEL)
      }(e), function(e) {
        var t;
        let n = e.animated ? "a" : "";
        return e.managed || null == e.id ? "".concat(E.EMOJI_SENTINEL).concat(e.name).concat(E.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
      }(e)), {
        type: h.AutocompleteSelectionTypes.EMOJI,
        metadata: {
          emojiId: e.id,
          numEmojiResults: t.length,
          numStickerResults: l.length,
          expressionName: e.name,
          isCustom: null != e.id,
          isAnimated: e.animated
        }
      }
    }
    if ((i -= t.length) < n.length) return {
      type: null
    };
    if ((i -= n.length) < l.length) {
      let e = l[i];
      return r.insertText(""), r.sendSticker(e.sticker, u.StickerSelectLocation.AUTOCOMPLETE), {
        type: h.AutocompleteSelectionTypes.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: l.length,
          stickerId: e.sticker.id
        }
      }
    }
    return {
      type: null
    }
  }
};
var y = v