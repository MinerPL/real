            "use strict";
            n.r(t), n.d(t, {
                toTextValue: function() {
                    return h
                },
                serializeDescendant: function() {
                    return S
                }
            }), n("222007"), n("424973"), n("781738");
            var l = n("627445"),
                i = n.n(l),
                r = n("679653"),
                o = n("646630"),
                s = n("235004"),
                a = n("42203"),
                u = n("305961"),
                d = n("27618"),
                c = n("162771"),
                f = n("697218"),
                p = n("158998"),
                m = n("385887");

            function h(e, t) {
                let {
                    mode: n,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                } = null != t ? t : {}, [r, o] = (null == t ? void 0 : t.range) != null ? m.RangeUtils.edges(t.range) : [void 0, void 0];
                return E(e, {
                    mode: n,
                    start: r,
                    end: o,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                })
            }

            function E(e, t) {
                var n, l;
                let {
                    mode: i,
                    start: r,
                    end: o,
                    separator: s,
                    ignoreEmptyNodes: a,
                    ignoreTrailingEmptyNodes: u,
                    preventEmojiSurrogates: d
                } = null != t ? t : {}, c = e.length > 0 && !m.TextUtils.isText(e[0]);
                null == s && (s = c ? "\n" : "");
                let f = null !== (n = null == r ? void 0 : r.path[0]) && void 0 !== n ? n : 0,
                    p = null !== (l = null == o ? void 0 : o.path[0]) && void 0 !== l ? l : e.length - 1;
                if (u)
                    for (let t = p; t >= f; t--) {
                        let n = e[t];
                        if (m.TextUtils.isText(n)) {
                            if (n.text.length > 0) {
                                p = t;
                                break
                            }
                        } else if (!m.ElementUtils.isEmpty(n)) {
                            p = t;
                            break
                        }
                        if (t === f) return ""
                    }
                let h = f > 0 && m.NodeUtils.isType(e[f - 1], "blockQuote"),
                    E = m.NodeUtils.isType(e[f], "blockQuote"),
                    g = m.NodeUtils.isType(e[p], "blockQuote"),
                    C = [];
                for (let t = f; t <= p; t++) {
                    let n = e[t];
                    if (a && m.TextUtils.isText(n) && 0 === n.text.length) continue;
                    let l = null != r && t === f ? {
                            path: r.path.slice(1),
                            offset: r.offset
                        } : void 0,
                        s = null != o && t === p ? {
                            path: o.path.slice(1),
                            offset: o.offset
                        } : void 0,
                        u = null == r || null == o || !h && (!E || g),
                        c = S(n, {
                            mode: i,
                            start: l,
                            end: s,
                            allowBlockQuotePrefix: u,
                            preventEmojiSurrogates: d
                        });
                    (!a || c.length > 0) && C.push(c)
                }
                return C.join(s)
            }

            function S(e, t) {
                let {
                    mode: n,
                    start: l,
                    allowBlockQuotePrefix: h = !1,
                    preventEmojiSurrogates: S = !1
                } = null != t ? t : {};
                if (m.TextUtils.isText(e)) return function(e, t) {
                    var n, l;
                    let {
                        start: r,
                        end: o
                    } = null != t ? t : {};
                    return i(null == r || 0 === r.path.length, "Invalid start provided to serializeText"), i(null == o || 0 === o.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == r ? void 0 : r.offset) && void 0 !== n ? n : 0, null !== (l = null == o ? void 0 : o.offset) && void 0 !== l ? l : e.length)
                }(e.text, t);
                switch (e.type) {
                    case "line":
                    case "testInline":
                        return E(e.children, t);
                    case "testInlineVoid":
                        return "";
                    case "blockQuote": {
                        let n = E(e.children, t),
                            i = null != l && 1 === l.path.length && 0 === l.path[0] && 0 === l.offset;
                        if (h && (null == l || i)) return "> ".concat(n);
                        return n
                    }
                    case "emoji": {
                        let t = e.emoji;
                        if (!S && null != t.surrogate) return t.surrogate;
                        return t.name
                    }
                    case "customEmoji": {
                        let t = e.emoji;
                        if ("raw" === n) {
                            let e = t.animated ? "a" : "",
                                n = t.name.replace(/:/g, "").split("~")[0];
                            return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
                        }
                        return t.name
                    }
                    case "textMention":
                        return e.name;
                    case "channelMention": {
                        let t = "<#".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "soundboard": {
                        let t = "<sound:".concat(e.soundId, ">");
                        if ("raw" === n) return t;
                        let l = s.default.getSoundById(e.soundId);
                        if (null == l) return t;
                        return l.name
                    }
                    case "staticRouteLink": {
                        let t = "<id:".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "roleMention": {
                        let t = "<@&".concat(e.roleId, ">");
                        if ("raw" === n) return t;
                        let l = u.default.getGuild(c.default.getGuildId()),
                            i = null == l ? void 0 : l.roles[e.roleId];
                        if (null == i) return t;
                        return "@".concat(i.name)
                    }
                    case "userMention": {
                        let t = "<@".concat(e.userId, ">");
                        if ("raw" === n) return t;
                        let l = f.default.getUser(e.userId);
                        if (null == l) return t;
                        return "@".concat(p.default.getUserTag(l, {
                            decoration: "never"
                        }))
                    }
                    case "commandMention":
                        return "</".concat(e.commandName, ":").concat(e.commandId, ">");
                    case "timestamp":
                        return (0, o.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
                    case "applicationCommand":
                        return E(e.children, {
                            ...t,
                            separator: " ",
                            ignoreEmptyNodes: !0
                        });
                    case "applicationCommandOption": {
                        let n = E(e.children, t);
                        if (null == l) return "".concat(e.optionDisplayName, ":").concat(n);
                        return n
                    }
                }
            }