            "use strict";
            n.r(t), n.d(t, {
                useListBox: function() {
                    return u
                },
                useOption: function() {
                    return d
                },
                useListBoxSection: function() {
                    return p
                },
                listData: function() {
                    return c
                },
                getItemId: function() {
                    return l
                }
            }), n("222007"), n("781738"), n("70102");
            var r = n("290895"),
                o = n("495912"),
                a = n("825167"),
                i = n("628364"),
                s = n("872834");
            let c = new WeakMap;

            function l(e, t) {
                var n;
                let r = c.get(e);
                if (!r) throw Error("Unknown list");
                return "".concat(r.id, "-option-").concat("string" == typeof(n = t) ? n.replace(/\s*/g, "") : "" + n)
            }

            function u(e, t, n) {
                let s = (0, r.filterDOMProps)(e, {
                        labelable: !0
                    }),
                    {
                        listProps: l
                    } = (0, i.useSelectableList)({
                        ...e,
                        ref: n,
                        selectionManager: t.selectionManager,
                        collection: t.collection,
                        disabledKeys: t.disabledKeys
                    }),
                    {
                        focusWithinProps: u
                    } = (0, o.useFocusWithin)({
                        onFocusWithin: e.onFocus,
                        onBlurWithin: e.onBlur,
                        onFocusWithinChange: e.onFocusChange
                    }),
                    d = (0, r.useId)(e.id);
                c.set(t, {
                    id: d,
                    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
                    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
                    shouldFocusOnHover: e.shouldFocusOnHover,
                    isVirtualized: e.isVirtualized,
                    onAction: e.onAction
                });
                let {
                    labelProps: p,
                    fieldProps: f
                } = (0, a.useLabel)({
                    ...e,
                    id: d,
                    labelElementType: "span"
                });
                return {
                    labelProps: p,
                    listBoxProps: (0, r.mergeProps)(s, u, "multiple" === t.selectionManager.selectionMode ? {
                        "aria-multiselectable": "true"
                    } : {}, {
                        role: "listbox",
                        ...(0, r.mergeProps)(f, l)
                    })
                }
            }

            function d(e, t, n) {
                var a, u, d, p, f, m, h;
                let {
                    key: g
                } = e, v = c.get(t), y = null !== (a = e.isDisabled) && void 0 !== a ? a : t.disabledKeys.has(g), b = null !== (u = e.isSelected) && void 0 !== u ? u : t.selectionManager.isSelected(g), x = null !== (d = e.shouldSelectOnPressUp) && void 0 !== d ? d : null == v ? void 0 : v.shouldSelectOnPressUp, S = null !== (p = e.shouldFocusOnHover) && void 0 !== p ? p : null == v ? void 0 : v.shouldFocusOnHover, w = null !== (f = e.shouldUseVirtualFocus) && void 0 !== f ? f : null == v ? void 0 : v.shouldUseVirtualFocus, D = null !== (m = e.isVirtualized) && void 0 !== m ? m : null == v ? void 0 : v.isVirtualized, C = (0, r.useSlotId)(), P = (0, r.useSlotId)(), k = {
                    role: "option",
                    "aria-disabled": y || void 0,
                    "aria-selected": "none" !== t.selectionManager.selectionMode ? b : void 0
                };
                if (!((0, r.isMac)() && (0, r.isWebKit)()) && (k["aria-label"] = e["aria-label"], k["aria-labelledby"] = C, k["aria-describedby"] = P), D) {
                    let e = Number(null === (h = t.collection.getItem(g)) || void 0 === h ? void 0 : h.index);
                    k["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, k["aria-setsize"] = (0, s.getItemCount)(t.collection)
                }
                let {
                    itemProps: E,
                    isPressed: T,
                    isFocused: R,
                    hasAction: M,
                    allowsSelection: O
                } = (0, i.useSelectableItem)({
                    selectionManager: t.selectionManager,
                    key: g,
                    ref: n,
                    shouldSelectOnPressUp: x,
                    allowsDifferentPressOrigin: x && S,
                    isVirtualized: D,
                    shouldUseVirtualFocus: w,
                    isDisabled: y,
                    onAction: (null == v ? void 0 : v.onAction) ? () => {
                        var e;
                        return null == v ? void 0 : null === (e = v.onAction) || void 0 === e ? void 0 : e.call(v, g)
                    } : void 0
                }), {
                    hoverProps: I
                } = (0, o.useHover)({
                    isDisabled: y || !S,
                    onHoverStart() {
                        !(0, o.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(g))
                    }
                });
                return {
                    optionProps: {
                        ...k,
                        ...(0, r.mergeProps)(E, I),
                        id: l(t, g)
                    },
                    labelProps: {
                        id: C
                    },
                    descriptionProps: {
                        id: P
                    },
                    isFocused: R,
                    isFocusVisible: R && (0, o.isFocusVisible)(),
                    isSelected: b,
                    isDisabled: y,
                    isPressed: T,
                    allowsSelection: O,
                    hasAction: M
                }
            }

            function p(e) {
                let {
                    heading: t,
                    "aria-label": n
                } = e, o = (0, r.useId)();
                return {
                    itemProps: {
                        role: "presentation"
                    },
                    headingProps: t ? {
                        id: o,
                        role: "presentation"
                    } : {},
                    groupProps: {
                        role: "group",
                        "aria-label": n,
                        "aria-labelledby": t ? o : void 0
                    }
                }
            }