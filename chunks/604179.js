            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("808653"), n("222007");
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                u = n("404118"),
                r = n("166257"),
                d = n("300322"),
                o = n("957255"),
                c = n("315102"),
                f = n("402671"),
                E = n("49111"),
                M = n("782340");

            function m(e, t) {
                let {
                    reducedMotion: n
                } = i.useContext(s.AccessibilityPreferencesContext), m = (0, d.useIsActiveChannelOrUnarchivableThread)(t), g = (0, l.useStateFromStores)([o.default], () => o.default.can(E.Permissions.MANAGE_MESSAGES, t) && m, [t, m]), I = e.reactions.reduce((e, t) => {
                    var n;
                    return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
                }, []), S = (n, a) => {
                    n.shiftKey ? (0, r.removeEmojiReactions)(t.id, e.id, a) : u.default.show({
                        title: M.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                        body: M.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                        confirmText: M.default.Messages.YES_TEXT,
                        cancelText: M.default.Messages.NO_TEXT,
                        onConfirm: () => {
                            (0, r.removeEmojiReactions)(t.id, e.id, a)
                        }
                    })
                };
                return g && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(s.MenuItem, {
                    id: "remove-emoji-reactions",
                    label: M.default.Messages.REMOVE_EMOJI_REACTIONS,
                    color: "danger",
                    children: I.map(e => {
                        var t, i;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "remove-emoji-reactions-".concat(null !== (t = e.name) && void 0 !== t ? t : e.id),
                            label: null == e.id ? e.name : ":".concat(e.name, ":"),
                            action: t => S(t, e),
                            imageUrl: t => {
                                var a;
                                let {
                                    isFocused: i
                                } = t;
                                return null != e.id ? c.default.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated && (!n.enabled || i),
                                    size: 18
                                }) : f.default.getURL(null !== (a = e.name) && void 0 !== a ? a : "")
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, null !== (i = e.name) && void 0 !== i ? i : e.id)
                    })
                }) : null
            }