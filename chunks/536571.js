            "use strict";
            n.r(t), n.d(t, {
                useTextField: function() {
                    return s
                },
                useFormattedTextField: function() {
                    return l
                }
            });
            var r = n("290895"),
                o = n("825167"),
                a = n("780095"),
                i = n("884691");

            function s(e, t) {
                var n;
                let {
                    inputElementType: i = "input",
                    isDisabled: s = !1,
                    isRequired: c = !1,
                    isReadOnly: l = !1,
                    validationState: u,
                    isInvalid: d = !1,
                    type: p = "text",
                    value: f,
                    defaultValue: m,
                    onChange: h = () => {}
                } = e, {
                    focusableProps: g
                } = (0, a.useFocusable)(e, t), {
                    labelProps: v,
                    fieldProps: y,
                    descriptionProps: b,
                    errorMessageProps: x
                } = (0, o.useField)(e), S = (0, r.filterDOMProps)(e, {
                    labelable: !0
                }), w = {
                    type: p,
                    pattern: e.pattern
                };
                return (0, r.useFormReset)(t, null !== (n = null != f ? f : m) && void 0 !== n ? n : "", h), {
                    labelProps: v,
                    inputProps: (0, r.mergeProps)(S, "input" === i && w, {
                        disabled: s,
                        readOnly: l,
                        "aria-required": c || void 0,
                        "aria-invalid": d || "invalid" === u || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-activedescendant": e["aria-activedescendant"],
                        "aria-autocomplete": e["aria-autocomplete"],
                        "aria-haspopup": e["aria-haspopup"],
                        value: e.value,
                        defaultValue: e.value ? void 0 : e.defaultValue,
                        onChange: e => h(e.target.value),
                        autoComplete: e.autoComplete,
                        maxLength: e.maxLength,
                        minLength: e.minLength,
                        name: e.name,
                        placeholder: e.placeholder,
                        inputMode: e.inputMode,
                        onCopy: e.onCopy,
                        onCut: e.onCut,
                        onPaste: e.onPaste,
                        onCompositionEnd: e.onCompositionEnd,
                        onCompositionStart: e.onCompositionStart,
                        onCompositionUpdate: e.onCompositionUpdate,
                        onSelect: e.onSelect,
                        onBeforeInput: e.onBeforeInput,
                        onInput: e.onInput,
                        ...g,
                        ...y
                    }),
                    descriptionProps: b,
                    errorMessageProps: x
                }
            }

            function c() {
                return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
            }

            function l(e, t, n) {
                let o = (0, r.useEffectEvent)(e => {
                    let r, o = n.current;
                    switch (e.inputType) {
                        case "historyUndo":
                        case "historyRedo":
                            return;
                        case "deleteContent":
                        case "deleteByCut":
                        case "deleteByDrag":
                            r = o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
                            break;
                        case "deleteContentForward":
                            r = o.selectionEnd === o.selectionStart ? o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd + 1) : o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
                            break;
                        case "deleteContentBackward":
                            r = o.selectionEnd === o.selectionStart ? o.value.slice(0, o.selectionStart - 1) + o.value.slice(o.selectionStart) : o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
                            break;
                        case "deleteSoftLineBackward":
                        case "deleteHardLineBackward":
                            r = o.value.slice(o.selectionStart);
                            break;
                        default:
                            null != e.data && (r = o.value.slice(0, o.selectionStart) + e.data + o.value.slice(o.selectionEnd))
                    }(null == r || !t.validate(r)) && e.preventDefault()
                });
                (0, i.useEffect)(() => {
                    if (!c()) return;
                    let e = n.current;
                    return e.addEventListener("beforeinput", o, !1), () => {
                        e.removeEventListener("beforeinput", o, !1)
                    }
                }, [n, o]);
                let a = c() ? null : e => {
                        let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                        !t.validate(n) && e.preventDefault()
                    },
                    {
                        labelProps: l,
                        inputProps: u,
                        descriptionProps: d,
                        errorMessageProps: p
                    } = s(e, n),
                    f = (0, i.useRef)(null);
                return {
                    inputProps: (0, r.mergeProps)(u, {
                        onBeforeInput: a,
                        onCompositionStart() {
                            let {
                                value: e,
                                selectionStart: t,
                                selectionEnd: r
                            } = n.current;
                            f.current = {
                                value: e,
                                selectionStart: t,
                                selectionEnd: r
                            }
                        },
                        onCompositionEnd() {
                            if (!t.validate(n.current.value)) {
                                let {
                                    value: e,
                                    selectionStart: r,
                                    selectionEnd: o
                                } = f.current;
                                n.current.value = e, n.current.setSelectionRange(r, o), t.setInputValue(e)
                            }
                        }
                    }),
                    labelProps: l,
                    descriptionProps: d,
                    errorMessageProps: p
                }
            }