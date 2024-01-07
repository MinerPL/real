            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("42203"),
                a = l("49111");

            function r(e) {
                if (null == e.parent_id) return e.type === a.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                {
                    var t, l;
                    let a = ((null !== (l = null === (t = n.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== l ? l : 0) + 1) * 1e3;
                    return e.isGuildVocal() ? a + e.position + 500 : a + e.position
                }
            }

            function i(e, t) {
                var l, n, a, i, u, o;
                if (e.score !== t.score) return t.score - e.score;
                let s = r(e.record),
                    c = r(t.record);
                if (s !== c) return s - c;
                let d = null !== (i = null !== (a = e.sortable) && void 0 !== a ? a : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== i ? i : "",
                    f = null !== (o = null !== (u = e.sortable) && void 0 !== u ? u : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== o ? o : "";
                return d < f ? -1 : d > f ? 1 : 0
            }