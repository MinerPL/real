            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            }), n("781738"), n("424973"), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("463928"),
                s = n.n(l),
                r = n("980215"),
                u = n("867805"),
                o = n("235004"),
                d = n("42203"),
                c = n("305961"),
                _ = n("697218"),
                E = n("387111"),
                f = n("158998"),
                h = n("946897"),
                p = n("632886"),
                T = n("270926"),
                C = n("647374"),
                m = n("693078"),
                S = n("290689"),
                I = n("839462"),
                g = n("646630"),
                A = n("788554"),
                N = n("49111"),
                O = n("317041"),
                R = n("680894"),
                y = n("782340");
            let v = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                M = /^$|\n *$/,
                L = /^ *>>> ?/,
                D = /^ *> ?/gm;

            function U(e) {
                let t = (0, C.punycodeLink)(e[1]);
                if (null == t) return {
                    type: "text",
                    content: e[1]
                };
                let {
                    displayTarget: n,
                    target: i
                } = t;
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: n
                    }],
                    target: i,
                    title: void 0
                }
            }
            let P = e => {
                    let t = d.default.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                b = e => null != e.guildId ? c.default.getGuild(e.guildId) : null != e.channelId ? c.default.getGuild(P(e.channelId)) : null,
                G = {
                    newline: s.defaultRules.newline,
                    paragraph: s.defaultRules.paragraph,
                    escape: {
                        ...s.defaultRules.escape,
                        match: (e, t, n) => !1 === t.allowEscape ? null : s.defaultRules.escape.match(e, t, n)
                    },
                    blockQuote: {
                        ...s.defaultRules.blockQuote,
                        requiredFirstCharacters: [" ", ">"],
                        match(e, t) {
                            let {
                                prevCapture: n,
                                inQuote: i,
                                nested: a
                            } = t;
                            if (i || a) return null;
                            if (null == n) return v.exec(e);
                            let l = n[0];
                            return M.test(l) ? v.exec(e) : null
                        },
                        parse(e, t, n) {
                            let i = e[0],
                                a = !!L.exec(i),
                                l = i.replace(a ? L : D, ""),
                                s = n.inQuote || !1,
                                r = n.inline || !1;
                            n.inQuote = !0, !a && (n.inline = !0);
                            let u = t(l, n);
                            return n.inQuote = s, n.inline = r, 0 === u.length && u.push({
                                type: "text",
                                content: " "
                            }), {
                                content: u,
                                type: "blockQuote"
                            }
                        }
                    },
                    link: C.default,
                    autolink: {
                        ...s.defaultRules.autolink,
                        parse: U
                    },
                    url: {
                        ...s.defaultRules.url,
                        requiredFirstCharacters: ["h", "s"],
                        match(e, t) {
                            if (!t.inline) return null;
                            let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                            if (null != n) {
                                let e = 0,
                                    t = n[0];
                                for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                                    let n = t.indexOf("(", e);
                                    if (-1 === n) {
                                        t = t.slice(0, t.length - 1);
                                        break
                                    }
                                    e = n + 1
                                }
                                n[0] = n[1] = t
                            }
                            return n
                        },
                        parse: U
                    },
                    strong: s.defaultRules.strong,
                    em: s.defaultRules.em,
                    u: s.defaultRules.u,
                    br: s.defaultRules.br,
                    text: S.default,
                    inlineCode: {
                        ...s.defaultRules.inlineCode,
                        parse(e, t, n) {
                            let i = s.defaultRules.inlineCode.parse(e, t, n);
                            return !0 === n.parseInlineCodeChildContent ? {
                                ...i,
                                validationChildContent: t(i.content, n)
                            } : i
                        }
                    },
                    emoticon: {
                        order: S.default.order,
                        requiredFirstCharacters: ["\xaf"],
                        match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: e[1]
                        })
                    },
                    codeBlock: {
                        order: s.defaultRules.codeBlock.order,
                        requiredFirstCharacters: ["`"],
                        match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                        parse(e, t, n) {
                            var i, a;
                            return {
                                lang: null !== (i = e[1]) && void 0 !== i ? i : "",
                                content: null !== (a = e[2]) && void 0 !== a ? a : "",
                                inQuote: n.inQuote || !1
                            }
                        }
                    },
                    roleMention: {
                        order: S.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [i, a] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: a
                            };
                            let l = b(n),
                                s = null != l ? l.roles[a] : null;
                            return null == s ? {
                                type: "text",
                                content: "@".concat(y.default.Messages.DELETED_ROLE_PLACEHOLDER)
                            } : {
                                type: "mention",
                                channelId: n.channelId,
                                guildId: null != l ? l.id : null,
                                roleId: a,
                                roleColor: s.color,
                                color: s.color,
                                colorString: s.colorString,
                                content: [{
                                    type: "text",
                                    content: "@".concat(s.name)
                                }]
                            }
                        }
                    },
                    mention: {
                        order: S.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, r.getClydeEnabled)(b(t), d.default.getChannel(t.channelId))) ? n : null
                        },
                        parse(e, t, n) {
                            let i, a;
                            if (n.returnMentionIds) return null == e[1] ? {
                                type: "mention",
                                text: e[0]
                            } : {
                                type: "mention",
                                id: e[1]
                            };
                            let l = _.default.getUser(e[1]),
                                s = d.default.getChannel(n.channelId);
                            if (null != l && (a = l.id, i = l.toString(), null != s)) {
                                var u;
                                i = null !== (u = E.default.getNickname(s.getGuildId(), n.channelId, l)) && void 0 !== u ? u : f.default.getName(l)
                            }
                            null == l && "@Clyde" === e[0] && (0, r.getClydeEnabled)(b(n), s) && (a = R.CLYDE_AI_USER_ID);
                            let o = e[1],
                                c = null != o && N.ID_REGEX.test(o.trim()),
                                h = c && n.unknownUserMentionPlaceholder ? "@".concat(y.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: a,
                                channelId: n.channelId,
                                guildId: null == s ? void 0 : s.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != i ? "@".concat(i) : h
                                }]
                            }
                        }
                    },
                    channelMention: p.default.channelMention,
                    channelOrMessageUrl: p.default.channelOrMessageUrl,
                    mediaPostLink: p.default.mediaPostLink,
                    attachmentLink: h.default.attachmentLink,
                    commandMention: {
                        order: s.defaultRules.text.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                        parse(e, t, n) {
                            if (n.returnMentionIds) return {
                                type: "commandMention",
                                id: e[2]
                            };
                            let [, ...i] = e[1].split(" "), a = "".concat(e[2]).concat([...i].map(e => "".concat(O.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
                            return {
                                channelId: n.channelId,
                                commandId: e[2],
                                commandName: e[1],
                                commandKey: a,
                                content: [{
                                    type: "text",
                                    content: "".concat(e[1])
                                }]
                            }
                        }
                    },
                    emoji: {
                        order: S.default.order,
                        requiredFirstCharacters: [":"],
                        match(e) {
                            let t = u.default.EMOJI_NAME_RE.exec(e);
                            return null != t && "" !== u.default.convertNameToSurrogate(t[1]) ? t : null
                        },
                        parse(e) {
                            let t = u.default.convertNameToSurrogate(e[1]);
                            return {
                                type: "text",
                                content: null == t || "" === t ? ":".concat(e[1], ":") : t
                            }
                        }
                    },
                    soundboard: {
                        order: S.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<sound:(\d+)>/.exec(e),
                        parse(e, t, n) {
                            var i;
                            let a = e[1],
                                l = o.default.getSoundById(a),
                                s = null !== (i = null == l ? void 0 : l.name) && void 0 !== i ? i : a;
                            return {
                                type: "soundboard",
                                id: a,
                                soundId: a,
                                channelId: n.channelId,
                                content: s
                            }
                        }
                    },
                    customEmoji: {
                        order: S.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: ":".concat(e[1], ":")
                        })
                    },
                    timestamp: {
                        order: S.default.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: e => g.TIMESTAMP_REGEX.exec(e),
                        parse(e) {
                            let [t, n, i] = e, a = (0, g.parseTimestamp)(n, i);
                            return null == a ? {
                                type: "text",
                                content: t
                            } : a
                        }
                    },
                    s: {
                        order: s.defaultRules.u.order,
                        requiredFirstCharacters: ["~"],
                        match: s.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                        parse: s.defaultRules.u.parse
                    },
                    spoiler: {
                        order: S.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => N.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: S.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => N.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                        parse(e, t, n) {
                            let i = {
                                home: y.default.Messages.SERVER_GUIDE,
                                guide: y.default.Messages.SERVER_GUIDE,
                                browse: y.default.Messages.CHANNEL_BROWSER_TITLE,
                                customize: y.default.Messages.CHANNELS_AND_ROLES
                            };
                            return {
                                content: [{
                                    type: "text",
                                    content: i[e[1]]
                                }],
                                channelId: e[1],
                                guildId: P(n.channelId),
                                id: e[1]
                            }
                        }
                    },
                    heading: T.default,
                    list: m.default
                },
                k = (0, A.default)([G, I.default]),
                F = a.omit(k, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                w = a.omit(k, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                H = a.omit(k, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
                x = a.omit((0, A.default)([k, {
                    inlineCode: {
                        match(e, t, n) {
                            let i = k.codeBlock.match(e, t, n);
                            if (null != i) return i;
                            let a = k.inlineCode.match(e, t, n);
                            if (null != a) return a
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                V = a.omit(k, ["codeBlock", "br", "blockQuote"]),
                B = a.omit(k, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
                Y = a.omit(k, ["codeBlock", "blockQuote", "br"]),
                K = a.omit(k, ["codeBlock", "br", "inlineCode"]);

            function j(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let W = (0, A.default)([{
                highlightWord: {
                    order: -1,
                    match(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        let n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        let i = !j(e, n);
                        if (i)
                            do n = e.indexOf(t.highlightWord, n + 1), i = !j(e, n); while (i && -1 !== n);
                        if (-1 === n) return null;
                        let a = e.substring(0, n),
                            l = e.substring(n + t.highlightWord.length);
                        return [e, t.highlightWord, a, l]
                    },
                    parse(e, t, n) {
                        let i = t(e[2], n),
                            a = t(e[3], n);
                        return [...i, {
                            type: "highlight",
                            content: e[1]
                        }, ...a]
                    }
                }
            }, a.omit(k, ["url"])]);
            a.omit((0, A.default)([k, {
                mention: {
                    match(e, t, n) {
                        let i = k.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let a = k.inlineCode.match(e, t, n);
                        if (null != a) return a
                    }
                }
            }]), ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]);
            var z = {
                RULES: k,
                CHANNEL_TOPIC_RULES: F,
                VOICE_CHANNEL_STATUS_RULES: w,
                EMBED_TITLE_RULES: H,
                INLINE_REPLY_RULES: x,
                GUILD_VERIFICATION_FORM_RULES: V,
                GUILD_EVENT_RULES: Y,
                PROFILE_BIO_RULES: B,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: W,
                NATIVE_SEARCH_RESULT_LINK_RULES: K
            }