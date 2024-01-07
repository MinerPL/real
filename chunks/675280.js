            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            });
            var n = i("37983"),
                l = i("884691"),
                s = i("23411"),
                a = i("811986"),
                r = i("648439"),
                o = i("841811"),
                u = i("432335"),
                c = i("849976"),
                d = i("742223"),
                f = i("877220"),
                E = i("258752"),
                m = i("216422"),
                I = i("290581"),
                p = i("742219"),
                g = i("115279");
            let _ = e => {
                    switch (e) {
                        case g.EmojiCategories.RECENT:
                            return o.default;
                        case g.EmojiCategories.FAVORITES:
                            return I.default;
                        case g.EmojiCategories.TOP_GUILD_EMOJI:
                            return p.default;
                        case g.EmojiCategories.PEOPLE:
                            return d.default;
                        case g.EmojiCategories.NATURE:
                            return u.default;
                        case g.EmojiCategories.FOOD:
                            return r.default;
                        case g.EmojiCategories.ACTIVITY:
                            return s.default;
                        case g.EmojiCategories.TRAVEL:
                            return E.default;
                        case g.EmojiCategories.OBJECTS:
                            return c.default;
                        case g.EmojiCategories.SYMBOLS:
                            return f.default;
                        case g.EmojiCategories.FLAGS:
                            return a.default;
                        case g.EmojiCategories.PREMIUM_UPSELL:
                            return m.default;
                        default:
                            return
                    }
                },
                S = l.memo(function(e) {
                    let {
                        categoryId: t,
                        ...i
                    } = e, l = _(t);
                    return null == l ? null : (0, n.jsx)(l, {
                        ...i
                    })
                });
            var h = S