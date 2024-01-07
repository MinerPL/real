            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("424973");
            var i, a, l, s, r, u = n("666038"),
                o = n("858619"),
                d = n("315102");
            (s = i || (i = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER", (r = a || (a = {}))[r.DEFAULT = 48] = "DEFAULT", l = class e extends u.default {
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
                        let i = {
                            animated: e.animated,
                            available: e.available,
                            id: e.id,
                            name: e.name,
                            require_colons: e.require_colons,
                            url: d.default.getEmojiURL({
                                id: e.id,
                                animated: e.animated,
                                size: 48
                            }),
                            allNamesString: ":".concat(e.name, ":"),
                            type: o.EmojiTypes.PACK,
                            packId: t.id
                        };
                        n.emojiById[e.id] = i, n.content.emojis.push(i)
                    }), new e(n)
                }
                constructor(e) {
                    super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.author = e.author, this.content = e.content, this.emojiById = e.emojiById
                }
            }