            "use strict";
            n.r(t), n.d(t, {
                getCommandBlock: function() {
                    return h
                },
                getCurrentCommandOption: function() {
                    return E
                },
                getOptionNames: function() {
                    return S
                },
                getOptionValues: function() {
                    return g
                },
                optionToValues: function() {
                    return C
                },
                validateOptionValues: function() {
                    return T
                },
                validateOption: function() {
                    return v
                },
                findTextOptions: function() {
                    return y
                }
            }), n("424973"), n("222007");
            var l = n("798609"),
                i = n("507217"),
                r = n("383018"),
                o = n("343952"),
                s = n("474643"),
                a = n("18494"),
                u = n("585722"),
                d = n("149022"),
                c = n("970153"),
                f = n("385887"),
                p = n("566819");
            let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

            function h(e) {
                let t = f.EditorUtils.richValue(e)[0];
                return null == t || "applicationCommand" !== t.type ? null : [t, p.FIRST_BLOCK_PATH]
            }

            function E(e) {
                var t, n;
                if (null == e.selection) return null;
                let l = null !== (t = f.EditorUtils.above(e, {
                    at: e.selection.focus,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== t ? t : null;
                if (null != l || f.RangeUtils.isCollapsed(e.selection)) return l;
                let i = null !== (n = f.EditorUtils.above(e, {
                    at: e.selection.anchor,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== n ? n : null;
                return i
            }

            function S(e) {
                let t = h(e),
                    n = [],
                    l = null == t ? void 0 : t[0].children;
                if (null != l)
                    for (let e of l) f.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
                return n
            }

            function g(e, t) {
                let n = {};
                if (null == t.options) return {};
                let l = h(e),
                    i = Object.fromEntries(t.options.map(e => [e.name, e])),
                    r = null == l ? void 0 : l[0].children;
                if (null != r) {
                    for (let t of r)
                        if (f.NodeUtils.isType(t, "applicationCommandOption")) {
                            let l = i[t.optionName];
                            null != l && (n[t.optionName] = C(e, l, t))
                        }
                }
                return n
            }

            function C(e, t, n) {
                let i = a.default.getCurrentlySelectedChannelId(),
                    r = n.children.map(n => {
                        if (t.type === l.ApplicationCommandOptionType.ATTACHMENT) {
                            let e = u.default.getUpload(i, t.name, s.DraftType.SlashCommand);
                            if (null != e) {
                                var r;
                                return {
                                    type: "text",
                                    text: null !== (r = e.filename) && void 0 !== r ? r : ""
                                }
                            }
                        }
                        if (f.TextUtils.isText(n)) return {
                            type: "text",
                            text: n.text
                        };
                        if (f.EditorUtils.isVoid(e, n)) {
                            let e = (0, d.voidToOptionValue)(n);
                            if (null != e) return e
                        }
                        return {
                            type: "text",
                            text: (0, c.serializeDescendant)(n, {
                                mode: "raw"
                            })
                        }
                    });
                if (t.type !== l.ApplicationCommandOptionType.STRING) {
                    for (; r.length > 0 && "text" === r[0].type && "" === r[0].text.trim();) r.shift();
                    for (; r.length > 0 && "text" === r[r.length - 1].type && "" === r[r.length - 1].text.trim();) r.pop()
                }
                return r
            }

            function T(e, t, n, l, r) {
                if (null == e.options) return {};
                let s = Object.fromEntries(e.options.map(e => {
                    var i;
                    return [e.name, o.validateOptionContent({
                        option: e,
                        content: null !== (i = l[e.name]) && void 0 !== i ? i : null,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: r
                    })]
                }));
                return i.updateOptionValidationStates(n, s), s
            }

            function v(e, t, n, l, s) {
                var a;
                let [u] = l, d = r.default.getActiveCommand(n), c = null == d ? void 0 : null === (a = d.options) || void 0 === a ? void 0 : a.find(e => e.name === u.optionName);
                if (null == c) return;
                let f = C(e, c, u),
                    p = o.validateOptionContent({
                        option: c,
                        content: f,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: s
                    });
                return i.updateOptionStates(n, {
                    [u.optionName]: {
                        lastValidationResult: p
                    }
                }), p
            }

            function y(e, t) {
                if (null == t.options || 0 === t.options.length) return [];
                let n = f.EditorUtils.richValue(e),
                    l = [],
                    i = new Set(S(e)),
                    r = {},
                    o = new Set;
                for (let e of t.options) r[e.displayName] = e, !i.has(e.name) && o.add(e.displayName);
                let s = null;
                for (let t = 0; t < n.length; t++) {
                    let i = n[t];
                    if ("line" === i.type || "applicationCommand" === i.type)
                        for (let u = 0; u < i.children.length; u++) {
                            let d;
                            let p = i.children[u],
                                h = [t, u];
                            if (f.NodeUtils.isType(p, "applicationCommandOption")) {
                                if (null != s) {
                                    var a;
                                    s.valueRange.focus = null !== (a = f.EditorUtils.before(e, h)) && void 0 !== a ? a : f.EditorUtils.start(e, []), s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s), s = null
                                }
                                continue
                            }
                            if (!!f.TextUtils.isText(p))
                                for (m.lastIndex = 0; null != (d = m.exec(p.text));) {
                                    if (0 !== d.index && null == p.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                                    let e = d[1];
                                    if (!o.has(e)) continue;
                                    o.delete(e);
                                    let t = r[e];
                                    if (null == t) continue;
                                    let i = {
                                            path: h,
                                            offset: d.index
                                        },
                                        a = {
                                            path: h,
                                            offset: i.offset + d[0].length
                                        },
                                        u = {
                                            path: h,
                                            offset: a.offset
                                        },
                                        f = {
                                            name: t.name,
                                            displayName: t.displayName,
                                            type: t.type,
                                            keyRange: {
                                                anchor: i,
                                                focus: a
                                            },
                                            valueRange: {
                                                anchor: u,
                                                focus: u
                                            },
                                            text: ""
                                        };
                                    null != s && (s.valueRange.focus = f.keyRange.anchor, s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s)), s = f
                                }
                        }
                }
                return null != s && (s.valueRange.focus = f.EditorUtils.end(e, []), s.text = (0, c.toTextValue)(n, {
                    mode: "raw",
                    range: s.valueRange
                }).trim(), l.push(s)), l
            }