            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("446674"),
                l = n("419135"),
                s = n("574933"),
                i = n("692038"),
                r = n("95045"),
                o = n("27618"),
                u = n("744983");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default, s.default], () => {
                        var t;
                        let n = u.default.getQuery(e),
                            a = u.default.getRawResults(e);
                        if (null == n || null == a) return [];
                        let o = (0, l.createASTHighlighter)(null !== (t = n.content) && void 0 !== t ? t : "");
                        return a.map(e => e.map(e => {
                            let t = s.default.getMessage(e.id, e.channel_id),
                                n = (0, i.createMessageRecord)(e);
                            return null != t && (n = n.merge({
                                attachments: t.attachments,
                                embeds: t.embeds
                            })), n.isSearchHit ? n.set("customRenderedContent", (0, r.default)(n, {
                                postProcessor: o,
                                allowHeading: !0,
                                allowList: !0
                            })) : n
                        }))
                    }, [e], a.statesWillNeverBeEqual),
                    [n, d] = (0, a.useStateFromStores)([o.default], () => {
                        let e = 0,
                            n = t.map(t => t.filter(t => {
                                let n = o.default.isBlocked(t.author.id);
                                return n && t.isSearchHit && e++, !n || t.isSearchHit
                            }));
                        return [n, e]
                    }, [t], a.statesWillNeverBeEqual);
                return {
                    searchResults: n,
                    blockCount: d
                }
            }