            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("446674"),
                a = n("77078"),
                s = n("430568"),
                c = n("133403"),
                d = n("252744"),
                f = n("86678"),
                E = n("923959"),
                _ = n("882641"),
                I = n("384830"),
                T = n("958706"),
                p = n("782340"),
                S = n("545456");

            function N(e) {
                let {
                    className: t,
                    guildId: n,
                    error: l,
                    emojiId: N,
                    emojiName: C,
                    isRequiredField: h = !0,
                    shouldUpdateBothEmojiFields: v = !1,
                    setEmojiId: A,
                    setEmojiName: R
                } = e, L = (0, I.default)({
                    emojiId: N,
                    emojiName: C
                }), g = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), m = i.createRef(), P = (0, d.default)(m), U = () => {
                    R(void 0), A(void 0)
                }, D = e => (t, n) => {
                    let r = (null == t ? void 0 : t.id) == null;
                    U(), r ? R(null == t ? void 0 : t.optionallyDiverseSequence) : (v && R(null == t ? void 0 : t.name), A(null == t ? void 0 : t.id)), n && e()
                }, O = e => {
                    e.stopPropagation(), U()
                };
                return (0, r.jsx)(a.FormItem, {
                    required: h,
                    title: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: u(t, S.section),
                    error: l,
                    children: (0, r.jsx)(a.Popout, {
                        animation: a.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, r.jsx)(f.default, {
                                closePopout: t,
                                pickerIntention: T.EmojiIntention.SOUNDBOARD,
                                onNavigateAway: t,
                                onSelectEmoji: D(t),
                                guildId: n,
                                channel: g
                            })
                        },
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, r.jsxs)("div", {
                                ...e,
                                className: S.emojiInput,
                                ref: m,
                                children: [(0, r.jsx)(_.default, {
                                    className: S.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != N || null != C ? () => (0, r.jsx)(s.default, {
                                        emojiName: C,
                                        emojiId: N
                                    }) : null
                                }), (0, r.jsx)(a.TextInput, {
                                    inputClassName: S.emojiText,
                                    placeholder: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != L ? ":".concat(L, ":") : "",
                                    readOnly: !0
                                }), P && null != L && (0, r.jsx)(c.default, {
                                    ...e,
                                    onClick: O,
                                    className: S.removeButton
                                })]
                            })
                        }
                    })
                })
            }