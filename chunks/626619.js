            "use strict";
            n.r(t), n.d(t, {
                useGridState: function() {
                    return i
                },
                GridCollection: function() {
                    return s
                }
            }), n("222007"), n("424973");
            var r = n("872834"),
                o = n("884691"),
                a = n("919740");

            function i(e) {
                let {
                    collection: t,
                    focusMode: n
                } = e, i = (0, a.useMultipleSelectionState)(e), s = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = i.setFocusedKey;
                i.setFocusedKey = (e, o) => {
                    if ("cell" === n && null != e) {
                        let n = t.getItem(e);
                        if ((null == n ? void 0 : n.type) === "item") {
                            var a, i;
                            let s = (0, r.getChildNodes)(n, t);
                            e = "last" === o ? null === (a = (0, r.getLastItem)(s)) || void 0 === a ? void 0 : a.key : null === (i = (0, r.getFirstItem)(s)) || void 0 === i ? void 0 : i.key
                        }
                    }
                    c(e, o)
                };
                let l = (0, o.useMemo)(() => new a.SelectionManager(t, i), [t, i]),
                    u = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    if (null != i.focusedKey && !t.getItem(i.focusedKey)) {
                        let e;
                        let n = u.current.getItem(i.focusedKey),
                            o = null != n.parentKey && ("cell" === n.type || "rowheader" === n.type || "column" === n.type) ? u.current.getItem(n.parentKey) : n,
                            a = u.current.rows,
                            s = t.rows,
                            c = a.length - s.length,
                            d = Math.min(c > 1 ? Math.max(o.index - c + 1, 0) : o.index, s.length - 1);
                        for (; d >= 0;) {
                            if (!l.isDisabled(s[d].key) && "headerrow" !== s[d].type) {
                                e = s[d];
                                break
                            }
                            d < s.length - 1 ? d++ : (d > o.index && (d = o.index), d--)
                        }
                        if (e) {
                            let a = e.hasChildNodes ? [...(0, r.getChildNodes)(e, t)] : [],
                                s = e.hasChildNodes && o !== n && n.index < a.length ? a[n.index].key : e.key;
                            i.setFocusedKey(s)
                        } else i.setFocusedKey(null)
                    }
                    u.current = t
                }, [t, l, i, i.focusedKey]), {
                    collection: t,
                    disabledKeys: s,
                    isKeyboardNavigationDisabled: !1,
                    selectionManager: l
                }
            }
            class s {
                *[Symbol.iterator]() {
                    yield*[...this.rows]
                }
                get size() {
                    return [...this.rows].length
                }
                getKeys() {
                    return this.keyMap.keys()
                }
                getKeyBefore(e) {
                    let t = this.keyMap.get(e);
                    return t ? t.prevKey : null
                }
                getKeyAfter(e) {
                    let t = this.keyMap.get(e);
                    return t ? t.nextKey : null
                }
                getFirstKey() {
                    var e;
                    return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key
                }
                getLastKey() {
                    var e;
                    let t = [...this.rows];
                    return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
                }
                getItem(e) {
                    return this.keyMap.get(e)
                }
                at(e) {
                    let t = [...this.getKeys()];
                    return this.getItem(t[e])
                }
                getChildren(e) {
                    let t = this.keyMap.get(e);
                    return (null == t ? void 0 : t.childNodes) || []
                }
                constructor(e) {
                    let t;
                    this.keyMap = new Map, this.keyMap = new Map, this.columnCount = null == e ? void 0 : e.columnCount, this.rows = [];
                    let n = t => {
                            let o, a = this.keyMap.get(t.key);
                            e.visitNode && (t = e.visitNode(t)), this.keyMap.set(t.key, t);
                            let i = new Set;
                            for (let e of t.childNodes) "cell" === e.type && null == e.parentKey && (e.parentKey = t.key), i.add(e.key), o ? (o.nextKey = e.key, e.prevKey = o.key) : e.prevKey = null, n(e), o = e;
                            if (o && (o.nextKey = null), a)
                                for (let e of a.childNodes) !i.has(e.key) && r(e)
                        },
                        r = e => {
                            for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && r(t)
                        };
                    e.items.forEach((e, r) => {
                        let o = {
                            level: 0,
                            key: "row-" + r,
                            type: "row",
                            value: void 0,
                            hasChildNodes: !0,
                            childNodes: [...e.childNodes],
                            rendered: void 0,
                            textValue: void 0,
                            ...e
                        };
                        t ? (t.nextKey = o.key, o.prevKey = t.key) : o.prevKey = null, this.rows.push(o), n(o), t = o
                    }), t && (t.nextKey = null)
                }
            }