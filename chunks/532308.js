            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("448105"),
                l = a.n(n),
                r = a("446674"),
                i = a("77078"),
                o = a("430568"),
                u = a("385976"),
                d = a("547896"),
                c = a("680986"),
                m = a("782340"),
                h = a("224300");
            let f = e => {
                let {
                    tag: t
                } = e, {
                    id: a,
                    name: n,
                    emojiId: l,
                    emojiName: c
                } = t, m = (0, r.useStateFromStores)([u.default], () => null != l ? u.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
                return (0, s.jsx)(i.ComboboxItem, {
                    value: a,
                    children: (0, s.jsx)(i.ComboboxItem.Label, {
                        children: (0, s.jsxs)("div", {
                            className: h.row,
                            children: [f ? (0, s.jsx)(o.default, {
                                className: h.emoji,
                                emojiId: l,
                                emojiName: c,
                                animated: !!(null == m ? void 0 : m.animated)
                            }) : (0, s.jsx)(d.default, {
                                className: h.emoji
                            }), (0, s.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-secondary",
                                children: n
                            })]
                        })
                    })
                }, a)
            };

            function g(e) {
                let {
                    parentChannel: t,
                    appliedTags: a,
                    maxTagsApplied: n,
                    onSelectTag: r,
                    onClose: o
                } = e, u = (0, c.useVisibleForumTags)(t), d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
                return (0, s.jsx)(i.ComboboxPopout, {
                    showScrollbar: !0,
                    value: a,
                    onChange: e => {
                        (!n || a.has(e)) && (r(e), o())
                    },
                    placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    children: e => d(e, u).map(e => (0, s.jsx)(f, {
                        tag: e
                    }, e.id))
                })
            }