            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("132710"),
                o = n("77078"),
                u = n("340616"),
                d = n("269936"),
                c = n("385976"),
                m = n("855920"),
                f = n("393414"),
                h = n("305961"),
                p = n("666897"),
                g = n("505684"),
                E = n("36694"),
                v = n("413709"),
                C = n("873218"),
                I = n("250832"),
                x = n("22248"),
                _ = n("28236"),
                S = n("306160"),
                N = n("794818"),
                M = n("844659"),
                T = n("657057"),
                A = n("886125"),
                j = n("180161"),
                y = n("781423"),
                R = n("47677"),
                L = n("49111"),
                b = n("724210"),
                O = n("782340"),
                D = n("862839");
            n("706250");
            var P = n("632215");

            function w(e) {
                let {
                    text: t
                } = e, [n, s] = a.useState(!1);
                return (0, l.jsx)(o.Clickable, {
                    onClick: () => {
                        try {
                            (0, S.copy)(t), s(!0)
                        } catch (e) {
                            s(!1)
                        }
                    },
                    children: n ? (0, l.jsx)(E.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(v.default, {
                        width: 16,
                        height: 16
                    })
                })
            }
            let U = {
                blockQuote: {
                    react: (e, t, n) => (0, l.jsxs)("div", {
                        className: P.blockquoteContainer,
                        children: [(0, l.jsx)("div", {
                            className: P.blockquoteDivider
                        }), (0, l.jsx)("blockquote", {
                            children: t(e.content, n)
                        })]
                    }, n.key)
                },
                s: {
                    react: (e, t, n) => (0, l.jsx)("s", {
                        children: t(e.content, n)
                    }, n.key)
                },
                highlight: {
                    react: (e, t, n) => (0, l.jsx)("span", {
                        className: "highlight",
                        children: e.content
                    }, n.key)
                },
                paragraph: {
                    react: (e, t, n) => (0, l.jsx)("p", {
                        children: t(e.content, n)
                    }, n.key)
                },
                inlineCode: {
                    react: (e, t, n) => (0, l.jsx)("code", {
                        className: "inline",
                        children: (0, M.smartOutput)(e, t, n)
                    }, n.key)
                },
                codeBlock: {
                    react(e, t, a) {
                        let s = () => (0, l.jsx)("code", {
                            className: i(D.scrollbarGhostHairline, "hljs"),
                            children: (0, M.smartOutput)(e, t, a)
                        });
                        return (0, l.jsx)("pre", {
                            children: (0, l.jsxs)("div", {
                                className: P.codeContainer,
                                children: [S.SUPPORTS_COPY ? (0, l.jsx)("div", {
                                    className: P.codeActions,
                                    children: (0, l.jsx)(w, {
                                        text: e.content
                                    })
                                }) : null, (0, l.jsx)(d.LazyLibrary, {
                                    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                    webpackId: "86256",
                                    renderFallback: s,
                                    render: t => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n ? s() : (0, l.jsx)("code", {
                                                className: i(D.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }
                                    }
                                })]
                            })
                        }, a.key)
                    }
                },
                text: {
                    react: (e, t, n) => "string" == typeof e.content ? (0, l.jsx)("span", {
                        children: e.content
                    }, n.key) : (0, l.jsx)("span", {
                        children: t(e.content, n)
                    }, n.key)
                },
                spoiler: {
                    react: (e, t, n) => (0, l.jsx)(g.default, {
                        type: g.default.Types.TEXT,
                        inline: n.formatInline,
                        renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : a.cloneElement(e, {
                            tabIndex: -1
                        }),
                        children: () => t(e.content, n)
                    }, n.key)
                },
                soundboard: {
                    react: e => (0, l.jsx)(_.default, {
                        channelId: e.channelId,
                        soundId: e.soundId,
                        jumbo: e.jumboable
                    })
                },
                staticRouteLink: {
                    react(e, t, n) {
                        let a = () => {
                            ! function(e, t) {
                                let n = h.default.getGuild(e);
                                if (null == e || null == n || !n.hasFeature(L.GuildFeatures.COMMUNITY)) return;
                                let l = {
                                        home: b.StaticChannelRoute.GUILD_HOME,
                                        browse: b.StaticChannelRoute.CHANNEL_BROWSER,
                                        customize: b.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                        guide: b.StaticChannelRoute.GUILD_HOME
                                    },
                                    a = l[t],
                                    s = h.default.getGuild(e);
                                if ((null == s ? void 0 : s.joinedAt) == null) {
                                    N.startLurking(e, {}, {
                                        channelId: a
                                    });
                                    return
                                }(0, f.transitionTo)(L.Routes.CHANNEL(e, a))
                            }(e.guildId, e.channelId)
                        };
                        if (!(0, M.isStaticRouteIconType)(e.channelId)) return null;
                        let s = "".concat(e.channelId);
                        switch (e.channelId) {
                            case b.StaticChannelId.GUILD_HOME:
                            case b.StaticChannelId.SERVER_GUIDE:
                                s = O.default.Messages.SERVER_GUIDE;
                                break;
                            case b.StaticChannelId.CHANNEL_BROWSER:
                                s = O.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                                break;
                            case b.StaticChannelId.CUSTOMIZE_COMMUNITY:
                                s = O.default.Messages.CHANNELS_AND_ROLES
                        }
                        return (0, l.jsx)(o.Tooltip, {
                            text: s,
                            position: "top",
                            children: s => {
                                let {
                                    onMouseEnter: i,
                                    onMouseLeave: r
                                } = s;
                                return (0, l.jsx)(p.default, {
                                    role: "link",
                                    onClick: a,
                                    onMouseEnter: i,
                                    onMouseLeave: r,
                                    className: "channelMention",
                                    iconType: e.channelId,
                                    children: t(e.content, n)
                                }, n.key)
                            }
                        }, n.key)
                    }
                },
                timestamp: {
                    react: (e, t, n) => (0, l.jsx)(T.default, {
                        node: e
                    }, n.key)
                },
                list: {
                    react: (e, t, n) => {
                        let l = e.ordered ? "ol" : "ul",
                            a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                        return (0, r.reactElement)(l, "".concat(n.key), {
                            start: e.start,
                            className: n.formatInline ? P.inlineFormat : null,
                            style: {
                                "--totalCharacters": a
                            },
                            children: e.items.map((e, l) => {
                                let a = (0, r.reactElement)("span", "".concat(n.key, "-").concat(l, "-innerSpan"), {
                                    children: t(e, n)
                                });
                                return (0, r.reactElement)("li", "".concat(n.key, "-").concat(l) + l, {
                                    children: a
                                })
                            })
                        })
                    }
                },
                heading: {
                    react: (e, t, n) => {
                        let l = (0, r.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                            children: t(e.content, n)
                        });
                        return (0, r.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                            children: l,
                            className: n.formatInline ? P.inlineFormat : null
                        })
                    }
                },
                guild: {
                    react: (e, t, n) => {
                        let a = h.default.getGuild(e.guildId);
                        return (0, l.jsx)(I.default, {
                            guild: a,
                            children: (0, M.smartOutput)(e, t, n)
                        }, n.key)
                    }
                },
                channel: {
                    react: (e, t, n) => (0, l.jsx)(C.default, {
                        iconType: e.iconType,
                        children: (0, M.smartOutput)(e, t, n)
                    }, n.key)
                },
                message: {
                    react: (e, t, n) => (0, l.jsx)(x.default, {}, n.key)
                }
            };

            function k(e) {
                return {
                    ...U,
                    link: (0, R.default)(e),
                    emoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, s) {
                                let {
                                    key: i
                                } = s;
                                return e.src ? (0, l.jsx)(m.MessageStandardEmoji, {
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, i) : (0, l.jsx)("span", {
                                    children: e.surrogate
                                }, i)
                            }
                        }
                    }(e),
                    customEmoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, s) {
                                let {
                                    key: i,
                                    guildId: r,
                                    isInteracting: o
                                } = s, u = c.default.getDisambiguatedEmojiContext(r).getById(e.emojiId);
                                if (null != u) {
                                    let t = u.require_colons;
                                    e = {
                                        ...e,
                                        name: t ? ":".concat(u.name, ":") : u.name
                                    }
                                }
                                return (0, l.jsx)(m.MessageCustomEmoji, {
                                    isInteracting: o,
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, i)
                            }
                        }
                    }(e),
                    channelMention: (0, j.default)(e),
                    commandMention: (0, y.default)(e),
                    attachmentLink: (0, A.default)(e)
                }
            }