            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("186188"),
                s = n("328634"),
                a = n("835906"),
                u = n("632215");

            function d(e, t, n) {
                let {
                    attributes: i,
                    children: a,
                    element: d
                } = e;
                switch (d.type) {
                    case "line":
                        var f;
                        if (null === (f = d.codeBlockState) || void 0 === f ? void 0 : f.isInCodeBlock) return (0, l.jsx)("div", {
                            className: s.codeLine,
                            spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                            ...i,
                            children: a
                        });
                        return (0, l.jsx)("div", {
                            ...i,
                            children: a
                        });
                    case "blockQuote": {
                        let e = r(u.blockquoteContainer, u.slateBlockquoteContainer);
                        return (0, l.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [(0, l.jsx)("span", {
                                contentEditable: !1,
                                className: u.blockquoteDivider
                            }), (0, l.jsx)("blockquote", {
                                children: a
                            })]
                        })
                    }
                    case "emoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Emoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CustomEmoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "textMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.TextMention, {
                                text: d.name,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "userMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.UserMention, {
                                id: d.userId,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "roleMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.RoleMention, {
                                id: d.roleId,
                                guildId: t
                            }), a]
                        });
                    case "channelMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.ChannelMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.StaticRouteMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "soundboard":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.SoundboardMention, {
                                id: d.soundId
                            }), a]
                        });
                    case "commandMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CommandMention, {
                                text: d.commandName,
                                id: d.commandId
                            }), a]
                        });
                    case "timestamp":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Timestamp, {
                                timestamp: d.parsed
                            }), a]
                        });
                    default:
                        return null
                }
            }
            let c = e => {
                let {
                    className: t,
                    attributes: n,
                    children: i
                } = e, o = r(a.inlineElement, a.inlineVoid, t);
                return (0, l.jsx)("span", {
                    ...n,
                    className: o,
                    contentEditable: !1,
                    children: i
                })
            }