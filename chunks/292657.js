            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("750560"),
                r = n("95045"),
                o = n("14526"),
                u = n("27618"),
                d = n("93427"),
                c = n("719347"),
                f = n("741566");

            function m(e) {
                let {
                    message: t,
                    channel: n
                } = e, m = (0, l.useStateFromStores)([u.default], () => u.default.isBlocked(t.author.id)), E = s.useMemo(() => ({
                    [n.guild_id]: [t.author.id]
                }), [n.guild_id, t.author.id]);
                (0, i.useSubscribeGuildMembers)(E);
                let _ = s.useMemo(() => null != t.content && "" !== t.content ? (0, r.default)(t, {
                    formatInline: !0
                }).content : null, [t]);
                return (0, a.jsxs)("div", {
                    className: f.threadMessageAccessory,
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: t.author.getAvatarURL(n.guild_id, 16),
                        className: f.threadMessageAccessoryAvatar
                    }), (0, a.jsx)(o.default, {
                        message: t,
                        channel: n,
                        compact: !0
                    }), (0, a.jsx)("div", {
                        className: f.threadMessageAccessoryPreview,
                        children: function(e, t, n) {
                            let {
                                contentPlaceholder: s,
                                renderedContent: l,
                                icon: i
                            } = (0, d.renderSingleLineMessage)(e, t, n, f.threadMessageAccessoryContent, {
                                iconClass: f.threadMessageAccessoryContentIcon,
                                iconSize: c.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [null != l ? l : (0, a.jsx)("span", {
                                    className: f.threadMessageAccessoryPlaceholder,
                                    children: s
                                }), i]
                            })
                        }(t, _, m)
                    })]
                })
            }