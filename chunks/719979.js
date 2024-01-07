            "use strict";
            n.r(t), n.d(t, {
                useSelect: function() {
                    return d
                },
                HiddenSelect: function() {
                    return p
                }
            }), n("222007");
            var r = n("290895"),
                o = n("884691"),
                a = n("628364"),
                i = n("495912"),
                s = n("181551"),
                c = n("825167"),
                l = n("440295"),
                u = n("678760");

            function d(e, t, n) {
                let {
                    keyboardDelegate: u,
                    isDisabled: d
                } = e, p = (0, s.useCollator)({
                    usage: "search",
                    sensitivity: "base"
                }), f = (0, o.useMemo)(() => u || new a.ListKeyboardDelegate(t.collection, t.disabledKeys, null, p), [u, t.collection, t.disabledKeys, p]), {
                    menuTriggerProps: m,
                    menuProps: h
                } = (0, l.useMenuTrigger)({
                    isDisabled: d,
                    type: "listbox"
                }, t, n), {
                    typeSelectProps: g
                } = (0, a.useTypeSelect)({
                    keyboardDelegate: f,
                    selectionManager: t.selectionManager,
                    onTypeSelect(e) {
                        t.setSelectedKey(e)
                    }
                }), {
                    labelProps: v,
                    fieldProps: y,
                    descriptionProps: b,
                    errorMessageProps: x
                } = (0, c.useField)({
                    ...e,
                    labelElementType: "span"
                });
                g.onKeyDown = g.onKeyDownCapture, delete g.onKeyDownCapture;
                let S = (0, r.filterDOMProps)(e, {
                        labelable: !0
                    }),
                    w = (0, r.mergeProps)(g, m, y),
                    D = (0, r.useId)();
                return {
                    labelProps: {
                        ...v,
                        onClick: () => {
                            !e.isDisabled && (n.current.focus(), (0, i.setInteractionModality)("keyboard"))
                        }
                    },
                    triggerProps: (0, r.mergeProps)(S, {
                        ...w,
                        isDisabled: d,
                        onKeyDown: (0, r.chain)(w.onKeyDown, e => {
                            switch (e.key) {
                                case "ArrowLeft": {
                                    e.preventDefault();
                                    let n = null != t.selectedKey ? f.getKeyAbove(t.selectedKey) : f.getFirstKey();
                                    n && t.setSelectedKey(n);
                                    break
                                }
                                case "ArrowRight": {
                                    e.preventDefault();
                                    let n = null != t.selectedKey ? f.getKeyBelow(t.selectedKey) : f.getFirstKey();
                                    n && t.setSelectedKey(n)
                                }
                            }
                        }, e.onKeyDown),
                        onKeyUp: e.onKeyUp,
                        "aria-labelledby": [D, w["aria-labelledby"], w["aria-label"] && !w["aria-labelledby"] ? w.id : null].filter(Boolean).join(" "),
                        onFocus(n) {
                            !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                        },
                        onBlur(n) {
                            !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                        }
                    }),
                    valueProps: {
                        id: D
                    },
                    menuProps: {
                        ...h,
                        autoFocus: t.focusStrategy || !0,
                        shouldSelectOnPressUp: !0,
                        shouldFocusOnHover: !0,
                        disallowEmptySelection: !0,
                        onBlur: n => {
                            !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                        },
                        "aria-labelledby": [y["aria-labelledby"], w["aria-label"] && !y["aria-labelledby"] ? w.id : null].filter(Boolean).join(" ")
                    },
                    descriptionProps: b,
                    errorMessageProps: x
                }
            }

            function p(e) {
                var t;
                let {
                    state: n,
                    triggerRef: a,
                    label: s,
                    name: c,
                    isDisabled: l
                } = e, d = (0, o.useRef)(null), {
                    containerProps: p,
                    inputProps: f,
                    selectProps: m
                } = function(e, t, n) {
                    var o;
                    let {
                        autoComplete: a,
                        name: s,
                        isDisabled: c
                    } = e, l = (0, i.useInteractionModality)(), {
                        visuallyHiddenProps: d
                    } = (0, u.useVisuallyHidden)();
                    return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), {
                        containerProps: {
                            ...d,
                            "aria-hidden": !0,
                            "data-a11y-ignore": "aria-hidden-focus"
                        },
                        inputProps: {
                            type: "text",
                            tabIndex: null == l || t.isFocused || t.isOpen ? -1 : 0,
                            style: {
                                fontSize: 16
                            },
                            onFocus: () => n.current.focus(),
                            disabled: c
                        },
                        selectProps: {
                            tabIndex: -1,
                            autoComplete: a,
                            disabled: c,
                            name: s,
                            size: t.collection.size,
                            value: null !== (o = t.selectedKey) && void 0 !== o ? o : "",
                            onChange: e => t.setSelectedKey(e.target.value)
                        }
                    }
                }({
                    ...e,
                    selectRef: d
                }, n, a);
                return n.collection.size <= 300 ? o.createElement("div", {
                    ...p,
                    "data-testid": "hidden-select-container"
                }, o.createElement("input", f), o.createElement("label", null, s, o.createElement("select", {
                    ...m,
                    ref: d
                }, o.createElement("option", null), [...n.collection.getKeys()].map(e => {
                    let t = n.collection.getItem(e);
                    if ("item" === t.type) return o.createElement("option", {
                        key: t.key,
                        value: t.key
                    }, t.textValue)
                })))) : c ? o.createElement("input", {
                    type: "hidden",
                    autoComplete: m.autoComplete,
                    name: c,
                    disabled: l,
                    value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
                }) : null
            }