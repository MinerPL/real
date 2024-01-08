            "use strict";
            n.r(t), n.d(t, {
                handleLegacyCommands: function() {
                    return E
                }
            }), n("222007"), n("781738");
            var a = n("463928"),
                s = n.n(a),
                l = n("223468"),
                i = n("819689"),
                r = n("716241"),
                o = n("385976"),
                u = n("166257"),
                d = n("432173"),
                c = n("845579"),
                f = n("377253"),
                h = n("49111");
            let C = /\\([*?+/])/g,
                p = {
                    tts: {
                        action: () => ({
                            tts: c.EnableTTSCommand.getSetting()
                        })
                    },
                    me: {
                        action: e => ({
                            content: "_".concat(e, "_")
                        })
                    },
                    tableflip: {
                        action: e => ({
                            content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                        })
                    },
                    unflip: {
                        action: e => ({
                            content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                        })
                    },
                    shrug: {
                        action: e => ({
                            content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
                        })
                    },
                    nick: {
                        action(e, t) {
                            let {
                                channel: n
                            } = t;
                            if (null != n.guild_id) return l.default.changeNickname(n.guild_id, n.id, h.ME, e), {
                                content: ""
                            }
                        }
                    },
                    reaction: {
                        match: s.anyScopeRegex(/^\+:(.+?): *$/),
                        action(e, t) {
                            let {
                                isEdit: n,
                                channel: a
                            } = t;
                            if (n || !f.default.hasPresent(a.id)) return;
                            let s = f.default.getMessages(a.id).last();
                            if (null == s || null == s.id) return;
                            let l = o.default.getDisambiguatedEmojiContext(a.guild_id).getByName(e.trim().slice(2, -1));
                            if (null != l) return (0, u.addReaction)(a.id, s.id, (0, d.toReactionEmoji)(l)), {
                                content: ""
                            }
                        }
                    },
                    searchReplace: {
                        match: s.anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
                        action(e, t) {
                            var n;
                            let {
                                isEdit: a,
                                channel: s
                            } = t;
                            if (a) return;
                            let l = f.default.getLastEditableMessage(s.id);
                            if (null == l || null == l.id) return {
                                content: ""
                            };
                            let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
                            r = r.replace(C, (e, t) => t), o = o.replace(C, (e, t) => t);
                            let u = l.content.replace(r, o);
                            return (null == u || "" === u) && 0 === l.attachments.length ? i.default.deleteMessage(s.id, l.id) : e !== l.content && i.default.editMessage(s.id, l.id, {
                                content: u
                            }), {
                                content: ""
                            }
                        }
                    },
                    spoiler: {
                        action: e => ({
                            content: (0, h.MARKDOWN_SPOILER_WRAPPER)(e).trim()
                        })
                    }
                };

            function m(e, t, n, a) {
                return r.default.trackWithMetadata(h.AnalyticEvents.SLASH_COMMAND_USED, {
                    command: e
                }), t.action(n, a)
            }

            function E(e, t) {
                for (let a in p) {
                    let s = p[a];
                    if (null != s.match) {
                        var n;
                        if (null === (n = s.match.regex) || void 0 === n ? void 0 : n.test(e)) return m(a, s, e, t);
                        continue
                    }
                    if (c.UseLegacyChatInput.getSetting() && "/" === e[0]) {
                        let n = e.split(" "),
                            l = n[0].slice(1);
                        if (a === l && null != s.action) return m(a, s, n.slice(1).join(" "), t)
                    }
                }
            }
            Object.setPrototypeOf(p, null)