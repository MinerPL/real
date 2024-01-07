            "use strict";
            n.r(t), n.d(t, {
                useTab: function() {
                    return l
                },
                useTabList: function() {
                    return d
                }
            }), n("222007"), n("781738");
            var r = n("628364"),
                o = n("290895"),
                a = n("884691"),
                i = n("181551");
            let s = new WeakMap;

            function c(e, t, n) {
                "string" == typeof t && (t = t.replace(/\s+/g, ""));
                let r = s.get(e);
                return "".concat(r, "-").concat(n, "-").concat(t)
            }

            function l(e, t, n) {
                let {
                    key: o,
                    isDisabled: a,
                    shouldSelectOnPressUp: i
                } = e, {
                    selectionManager: s,
                    selectedKey: l
                } = t, u = o === l, d = a || t.isDisabled || t.disabledKeys.has(o), {
                    itemProps: p,
                    isPressed: f
                } = (0, r.useSelectableItem)({
                    selectionManager: s,
                    key: o,
                    ref: n,
                    isDisabled: d,
                    shouldSelectOnPressUp: i
                }), m = c(t, o, "tab"), h = c(t, o, "tabpanel"), {
                    tabIndex: g
                } = p;
                return {
                    tabProps: {
                        ...p,
                        id: m,
                        "aria-selected": u,
                        "aria-disabled": d || void 0,
                        "aria-controls": u ? h : void 0,
                        tabIndex: d ? void 0 : g,
                        role: "tab"
                    },
                    isSelected: u,
                    isDisabled: d,
                    isPressed: f
                }
            }
            class u {
                getKeyLeftOf(e) {
                    return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e)
                }
                getKeyRightOf(e) {
                    return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e)
                }
                getKeyAbove(e) {
                    return this.getPreviousKey(e)
                }
                getKeyBelow(e) {
                    return this.getNextKey(e)
                }
                getFirstKey() {
                    let e = this.collection.getFirstKey();
                    return this.disabledKeys.has(e) && (e = this.getNextKey(e)), e
                }
                getLastKey() {
                    let e = this.collection.getLastKey();
                    return this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e
                }
                getNextKey(e) {
                    do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey()); while (this.disabledKeys.has(e));
                    return e
                }
                getPreviousKey(e) {
                    do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey()); while (this.disabledKeys.has(e));
                    return e
                }
                constructor(e, t, n, r = new Set) {
                    this.collection = e, this.flipDirection = "rtl" === t && "horizontal" === n, this.disabledKeys = r
                }
            }

            function d(e, t, n) {
                let {
                    orientation: c = "horizontal",
                    keyboardActivation: l = "automatic"
                } = e, {
                    collection: d,
                    selectionManager: p,
                    disabledKeys: f
                } = t, {
                    direction: m
                } = (0, i.useLocale)(), h = (0, a.useMemo)(() => new u(d, m, c, f), [d, f, c, m]), {
                    collectionProps: g
                } = (0, r.useSelectableCollection)({
                    ref: n,
                    selectionManager: p,
                    keyboardDelegate: h,
                    selectOnFocus: "automatic" === l,
                    disallowEmptySelection: !0,
                    scrollRef: n
                }), v = (0, o.useId)();
                s.set(t, v);
                let y = (0, o.useLabels)({
                    ...e,
                    id: v
                });
                return {
                    tabListProps: {
                        ...(0, o.mergeProps)(g, y),
                        role: "tablist",
                        "aria-orientation": c,
                        tabIndex: void 0
                    }
                }
            }