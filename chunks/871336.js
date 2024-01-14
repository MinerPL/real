"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("424973");
var s, i, r, a, o, d = n("666038"),
  u = n("858619"),
  l = n("315102");
(a = s || (s = {}))[a.GUILD = 0] = "GUILD", a[a.USER = 1] = "USER", (o = i || (i = {}))[o.DEFAULT = 48] = "DEFAULT", r = class e extends d.default {
  static fromServer(t) {
    let n = {
      id: t.id,
      name: t.name,
      icon: t.icon,
      content: {
        emojis: []
      },
      author: {
        id: t.id,
        type: 0
      },
      emojiById: {}
    };
    return t.content.emojis.forEach(e => {
      let s = {
        animated: e.animated,
        available: e.available,
        id: e.id,
        name: e.name,
        require_colons: e.require_colons,
        url: l.default.getEmojiURL({
          id: e.id,
          animated: e.animated,
          size: 48
        }),
        allNamesString: ":".concat(e.name, ":"),
        type: u.EmojiTypes.PACK,
        packId: t.id
      };
      n.emojiById[e.id] = s, n.content.emojis.push(s)
    }), new e(n)
  }
  constructor(e) {
    super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.author = e.author, this.content = e.content, this.emojiById = e.emojiById
  }
}