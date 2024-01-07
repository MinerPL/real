            "use strict";
            n.r(t), n.d(t, {
                useComboBoxState: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var r = n("872834"),
                o = n("789292"),
                a = n("884691"),
                i = n("679750"),
                s = n("318408");

            function c(e) {
                var t, n, c, l, u, d, p, f;
                let {
                    defaultFilter: m,
                    menuTrigger: h = "input",
                    allowsEmptyCollection: g = !1,
                    allowsCustomValue: v,
                    shouldCloseOnBlur: y = !0
                } = e, [b, x] = (0, a.useState)(!1), [S, w] = (0, a.useState)(!1), {
                    collection: D,
                    selectionManager: C,
                    selectedKey: P,
                    setSelectedKey: k,
                    selectedItem: E,
                    disabledKeys: T
                } = (0, o.useSingleSelectListState)({
                    ...e,
                    onSelectionChange: t => {
                        e.onSelectionChange && e.onSelectionChange(t), t === P && (z(), K())
                    },
                    items: null !== (c = e.items) && void 0 !== c ? c : e.defaultItems
                }), [R, M] = (0, i.useControlledState)(e.inputValue, null !== (u = null !== (l = e.defaultInputValue) && void 0 !== l ? l : null === (t = D.getItem(P)) || void 0 === t ? void 0 : t.textValue) && void 0 !== u ? u : "", e.onInputChange), O = (0, a.useMemo)(() => null == e.items && m ? function(e, t, n) {
                    return new o.ListCollection(function e(t, n, o, a) {
                        let i = [];
                        for (let s of n)
                            if ("section" === s.type && s.hasChildNodes) {
                                let n = e(t, (0, r.getChildNodes)(s, t), o, a);
                                [...n].some(e => "item" === e.type) && i.push({
                                    ...s,
                                    childNodes: n
                                })
                            } else "item" === s.type && a(s.textValue, o) ? i.push({
                                ...s
                            }) : "item" !== s.type && i.push({
                                ...s
                            });
                        return i
                    }(e, e, t, n))
                }(D, R, m) : D, [D, R, m, e.items]), [I, A] = (0, a.useState)(O), N = (0, a.useRef)("focus"), L = (0, s.useMenuTriggerState)({
                    ...e,
                    onOpenChange: t => {
                        e.onOpenChange && e.onOpenChange(t, t ? N.current : void 0), C.setFocused(t), !t && C.setFocusedKey(null)
                    },
                    isOpen: void 0,
                    defaultOpen: void 0
                }), j = (t, n) => {
                    let r = "manual" === n || "focus" === n && "focus" === h;
                    (g || O.size > 0 || r && D.size > 0 || e.items) && (r && !L.isOpen && void 0 === e.items && x(!0), N.current = n, L.open(t))
                }, F = (0, a.useCallback)(e => {
                    L.isOpen && A(O), L.toggle(e)
                }, [L, O]), K = (0, a.useCallback)(() => {
                    L.isOpen && (A(O), L.close())
                }, [L, O]), _ = (0, a.useRef)(R), z = () => {
                    var e, t;
                    let n = null !== (t = null === (e = D.getItem(P)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
                    _.current = n, M(n)
                }, V = (0, a.useRef)(null !== (p = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== p ? p : null), B = (0, a.useRef)(null !== (f = null === (n = D.getItem(P)) || void 0 === n ? void 0 : n.textValue) && void 0 !== f ? f : "");
                (0, a.useEffect)(() => {
                    var t, n;
                    S && (O.size > 0 || g) && !L.isOpen && R !== _.current && "manual" !== h && j(null, "input"), !b && !g && L.isOpen && 0 === O.size && K(), null != P && P !== V.current && K(), R !== _.current && (C.setFocusedKey(null), x(!1), "" === R && (void 0 === e.inputValue || void 0 === e.selectedKey) && k(null)), P !== V.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? z() : _.current = R;
                    let r = null !== (n = null === (t = D.getItem(P)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
                    !S && null != P && void 0 === e.inputValue && P === V.current && B.current !== r && (_.current = r, M(r)), V.current = P, B.current = r
                });
                let U = () => {
                        V.current = null, k(null), K()
                    },
                    H = () => {
                        if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                            var t, n;
                            e.onSelectionChange(P);
                            let r = null !== (n = null === (t = D.getItem(P)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
                            _.current = r, K()
                        } else z(), K()
                    },
                    G = () => {
                        if (v) {
                            var e, t;
                            let n = null !== (t = null === (e = D.getItem(P)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
                            R === n ? H() : U()
                        } else H()
                    },
                    W = (0, a.useMemo)(() => L.isOpen ? b ? D : O : I, [L.isOpen, D, O, b, I]);
                return {
                    ...L,
                    toggle: (t, n) => {
                        let r = "manual" === n || "focus" === n && "focus" === h;
                        (g || O.size > 0 || r && D.size > 0 || e.items || L.isOpen) && (r && !L.isOpen && void 0 === e.items && x(!0), !L.isOpen && (N.current = n), F(t))
                    },
                    open: j,
                    close: G,
                    selectionManager: C,
                    selectedKey: P,
                    setSelectedKey: k,
                    disabledKeys: T,
                    isFocused: S,
                    setFocused: e => {
                        e ? "focus" === h && j(null, "focus") : y && G(), w(e)
                    },
                    selectedItem: E,
                    collection: W,
                    inputValue: R,
                    setInputValue: M,
                    commit: () => {
                        L.isOpen && null != C.focusedKey ? P === C.focusedKey ? H() : k(C.focusedKey) : G()
                    },
                    revert: () => {
                        v && null == P ? U() : H()
                    }
                }
            }