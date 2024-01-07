            "use strict";
            n.r(t), n.d(t, {
                HistoryUtils: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var l = n("385887");
            let i = new WeakMap,
                r = new WeakMap,
                o = {
                    isMerging(e) {
                        var t;
                        return null === (t = r.get(e)) || void 0 === t || t
                    },
                    isSaving(e) {
                        var t;
                        return null === (t = i.get(e)) || void 0 === t || t
                    },
                    withoutMerging(e, t) {
                        let n = this.isMerging(e);
                        r.set(e, !1);
                        try {
                            t()
                        } finally {
                            r.set(e, n)
                        }
                    },
                    withoutSaving(e, t) {
                        let n = this.isSaving(e);
                        i.set(e, !1);
                        try {
                            t()
                        } finally {
                            i.set(e, n)
                        }
                    },
                    withSingleEntry: (e, t) => s(e, "other", !1, t),
                    withMergedEntry: (e, t) => s(e, "other", !0, t),
                    currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
                    insertOrMergeEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            l = o.currentEntry(e);
                        o.isMerging(e) && (null == l ? void 0 : l.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
                    },
                    insertEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        r = null != r ? r : e.selection, i = null != i ? i : l.EditorUtils.richValue(e);
                        let {
                            history: s
                        } = e, a = o.currentEntry(e);
                        for (null != a && (a.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1); s.stack.length >= 250;) s.stack.shift();
                        s.stack.push({
                            type: t,
                            mergeable: n,
                            createdAt: Date.now(),
                            value: i,
                            selection: r
                        }), s.index = s.stack.length - 1
                    },
                    mergeEntry(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            {
                                selection: n
                            } = e,
                            i = l.EditorUtils.richValue(e),
                            r = o.currentEntry(e);
                        null != r && (r.value = i, r.selection = n, !t && (r.mergeable = !1))
                    }
                };

            function s(e, t, n, r) {
                let s = e.children,
                    a = e.selection,
                    u = o.isSaving(e);
                i.set(e, !1);
                try {
                    let i = r();
                    return u && (n ? o.mergeEntry(e) : e.children !== s ? o.insertEntry(e, t, !1) : o.isMerging(e) && null != e.selection && (null == a || !l.RangeUtils.equals(e.selection, a)) && o.mergeEntry(e)), i
                } finally {
                    i.set(e, u)
                }
            }