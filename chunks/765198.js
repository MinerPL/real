            "use strict";
            n.r(t), n.d(t, {
                useTabListState: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691"),
                o = n("789292");

            function a(e) {
                var t;
                let n = (0, o.useSingleSelectListState)({
                        ...e,
                        suppressTextValueWarning: !0,
                        defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : i(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set)
                    }),
                    {
                        selectionManager: a,
                        collection: s,
                        selectedKey: c
                    } = n,
                    l = (0, r.useRef)(c);
                return (0, r.useEffect)(() => {
                    let e = c;
                    (a.isEmpty || !s.getItem(e)) && null != (e = i(s, n.disabledKeys)) && a.setSelectedKeys([e]), (null != e && null == a.focusedKey || !a.isFocused && e !== l.current) && a.setFocusedKey(e), l.current = e
                }), {
                    ...n,
                    isDisabled: e.isDisabled || !1
                }
            }

            function i(e, t) {
                let n = null;
                if (e) {
                    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey();) n = e.getKeyAfter(n);
                    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey())
                }
                return n
            }