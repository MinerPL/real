"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var s = n("132710"),
  i = n.n(s),
  r = n("385976"),
  a = n("867805"),
  o = n("402671"),
  d = n("290689");
let u = {
  s: {
    requiredFirstCharacters: ["~"],
    match: i.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
  },
  highlight: {
    order: d.default.order,
    match: () => null
  },
  emoji: {
    order: d.default.order,
    requiredFirstCharacters: [":"],
    match(e) {
      let t = a.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
      return null != t && "" !== a.default.convertNameToSurrogate(t[1]) ? t : null
    },
    parse(e) {
      let [t, n] = e, s = a.default.convertNameToSurrogate(n);
      return null == s || "" === s ? {
        type: "text",
        content: t
      } : {
        name: ":".concat(n, ":"),
        surrogate: s,
        src: o.default.getURL(s)
      }
    }
  },
  customEmoji: {
    order: i.defaultRules.codeBlock.order,
    requiredFirstCharacters: ["<"],
    match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
    parse(e, t, n) {
      let [s, i, a, o] = e, {
        guildId: d
      } = n, u = r.default.getDisambiguatedEmojiContext(d).getById(o), l = null == u || u.require_colons;
      return null != u && (a = u.name), {
        emojiId: o,
        name: l ? ":".concat(a, ":") : a,
        animated: "a" === i
      }
    }
  },
  text: {
    parse(e) {
      let t = a.default.findInlineEmojisFromSurrogates(e[0]),
        n = 0;
      return t.map(e => {
        if ("text" === e.type) {
          let t = {
            index: n,
            0: e.text
          };
          return n += e.text.length, {
            type: "text",
            content: e.text,
            originalMatch: t
          }
        } {
          let t = {
            index: n,
            0: e.surrogate
          };
          return n += e.surrogate.length, {
            type: "emoji",
            name: e.emojiName,
            surrogate: e.surrogate,
            src: o.default.getURL(e.surrogate),
            originalMatch: t
          }
        }
      })
    }
  },
  looseEm: {
    ...i.defaultRules.em,
    match: i.inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
    parse: (e, t, n) => ({
      type: "em",
      content: t(e[1], n),
      originalMatch: e
    })
  }
};
var l = u