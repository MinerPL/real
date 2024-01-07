            "use strict";
            n.r(t), n.d(t, {
                useComboBox: function() {
                    return Z
                }
            }), n("222007");
            var r = n("362561"),
                o = n("439991"),
                a = n("632710"),
                i = n("290895"),
                s = n("884691"),
                c = n("872834"),
                l = n("628364"),
                u = n("181551"),
                d = n("440295"),
                p = n("536571"),
                f = {},
                m = {},
                h = {},
                g = {},
                v = {},
                y = {},
                b = {},
                x = {},
                S = {},
                w = {},
                D = {},
                C = {},
                P = {},
                k = {},
                E = {},
                T = {},
                R = {},
                M = {},
                O = {},
                I = {},
                A = {},
                N = {},
                L = {},
                j = {},
                F = {},
                K = {},
                _ = {},
                z = {},
                V = {},
                B = {},
                U = {},
                H = {},
                G = {},
                W = {},
                q = {};

            function Z(e, t) {
                var n, m, h;
                let {
                    buttonRef: g,
                    popoverRef: v,
                    inputRef: y,
                    listBoxRef: b,
                    keyboardDelegate: x,
                    shouldFocusWrap: S,
                    isReadOnly: w,
                    isDisabled: D
                } = e;
                let C = (0, u.useLocalizedStringFormatter)((h = f) && h.__esModule ? h.default : h),
                    {
                        menuTriggerProps: P,
                        menuProps: k
                    } = (0, d.useMenuTrigger)({
                        type: "listbox",
                        isDisabled: D || w
                    }, t, g);
                a.listData.set(t, {
                    id: k.id
                });
                let E = (0, s.useMemo)(() => x || new l.ListKeyboardDelegate(t.collection, t.disabledKeys, b), [x, t.collection, t.disabledKeys, b]),
                    {
                        collectionProps: T
                    } = (0, l.useSelectableCollection)({
                        selectionManager: t.selectionManager,
                        keyboardDelegate: E,
                        disallowTypeAhead: !0,
                        disallowEmptySelection: !0,
                        shouldFocusWrap: S,
                        ref: y,
                        isVirtualized: !0
                    }),
                    {
                        labelProps: R,
                        inputProps: M,
                        descriptionProps: O,
                        errorMessageProps: I
                    } = (0, p.useTextField)({
                        ...e,
                        onChange: t.setInputValue,
                        onKeyDown: !w && (0, i.chain)(t.isOpen && T.onKeyDown, n => {
                            switch (n.key) {
                                case "Enter":
                                case "Tab":
                                    t.isOpen && "Enter" === n.key && n.preventDefault(), t.commit();
                                    break;
                                case "Escape":
                                    (null !== t.selectedKey || "" === t.inputValue || e.allowsCustomValue) && n.continuePropagation(), t.revert();
                                    break;
                                case "ArrowDown":
                                    t.open("first", "manual");
                                    break;
                                case "ArrowUp":
                                    t.open("last", "manual");
                                    break;
                                case "ArrowLeft":
                                case "ArrowRight":
                                    t.selectionManager.setFocusedKey(null)
                            }
                        }, e.onKeyDown),
                        onBlur: n => {
                            var r;
                            !(n.relatedTarget === (null == g ? void 0 : g.current) || (null === (r = v.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1))
                        },
                        value: t.inputValue,
                        onFocus: n => {
                            !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0))
                        },
                        autoComplete: "off"
                    }, y),
                    A = (0, i.useLabels)({
                        id: P.id,
                        "aria-label": C.format("buttonLabel"),
                        "aria-labelledby": e["aria-labelledby"] || R.id
                    }),
                    N = (0, i.useLabels)({
                        id: k.id,
                        "aria-label": C.format("listboxLabel"),
                        "aria-labelledby": e["aria-labelledby"] || R.id
                    }),
                    L = (0, s.useRef)(0),
                    j = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
                    F = null !== (n = null == j ? void 0 : j.parentKey) && void 0 !== n ? n : null,
                    K = null !== (m = t.selectionManager.focusedKey) && void 0 !== m ? m : null,
                    _ = (0, s.useRef)(F),
                    z = (0, s.useRef)(K);
                (0, s.useEffect)(() => {
                    if ((0, i.isAppleDevice)() && null != j && K !== z.current) {
                        let e = t.selectionManager.isSelected(K),
                            n = null != F ? t.collection.getItem(F) : null,
                            o = (null == n ? void 0 : n["aria-label"]) || ("string" == typeof(null == n ? void 0 : n.rendered) ? n.rendered : "") || "",
                            a = C.format("focusAnnouncement", {
                                isGroupChange: n && F !== _.current,
                                groupTitle: o,
                                groupCount: n ? [...(0, c.getChildNodes)(n, t.collection)].length : 0,
                                optionText: j["aria-label"] || j.textValue || "",
                                isSelected: e
                            });
                        (0, r.announce)(a)
                    }
                    _.current = F, z.current = K
                });
                let V = (0, c.getItemCount)(t.collection),
                    B = (0, s.useRef)(V),
                    U = (0, s.useRef)(t.isOpen);
                (0, s.useEffect)(() => {
                    let e = t.isOpen !== U.current && (null == t.selectionManager.focusedKey || (0, i.isAppleDevice)());
                    if (t.isOpen && (e || V !== B.current)) {
                        let e = C.format("countAnnouncement", {
                            optionCount: V
                        });
                        (0, r.announce)(e)
                    }
                    B.current = V, U.current = t.isOpen
                });
                let H = (0, s.useRef)(t.selectedKey);
                return (0, s.useEffect)(() => {
                    if ((0, i.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== H.current) {
                        let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                            n = C.format("selectedAnnouncement", {
                                optionText: e
                            });
                        (0, r.announce)(n)
                    }
                    H.current = t.selectedKey
                }), (0, s.useEffect)(() => {
                    if (t.isOpen) return (0, o.ariaHideOutside)([y.current, v.current])
                }, [t.isOpen, y, v]), {
                    labelProps: R,
                    buttonProps: {
                        ...P,
                        ...A,
                        excludeFromTabOrder: !0,
                        onPress: e => {
                            "touch" === e.pointerType && (y.current.focus(), t.toggle(null, "manual"))
                        },
                        onPressStart: e => {
                            "touch" !== e.pointerType && (y.current.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                        },
                        isDisabled: D || w
                    },
                    inputProps: (0, i.mergeProps)(M, {
                        role: "combobox",
                        "aria-expanded": P["aria-expanded"],
                        "aria-controls": t.isOpen ? k.id : void 0,
                        "aria-autocomplete": "list",
                        "aria-activedescendant": j ? (0, a.getItemId)(t, j.key) : void 0,
                        onTouchEnd: e => {
                            if (D || w) return;
                            if (e.timeStamp - L.current < 500) {
                                e.preventDefault(), y.current.focus();
                                return
                            }
                            let n = e.target.getBoundingClientRect(),
                                r = e.changedTouches[0],
                                o = Math.ceil(n.left + .5 * n.width),
                                a = Math.ceil(n.top + .5 * n.height);
                            r.clientX === o && r.clientY === a && (e.preventDefault(), y.current.focus(), t.toggle(null, "manual"), L.current = e.timeStamp)
                        },
                        autoCorrect: "off",
                        spellCheck: "false"
                    }),
                    listBoxProps: (0, i.mergeProps)(k, N, {
                        autoFocus: t.focusStrategy,
                        shouldUseVirtualFocus: !0,
                        shouldSelectOnPressUp: !0,
                        shouldFocusOnHover: !0
                    }),
                    descriptionProps: O,
                    errorMessageProps: I
                }
            }
            f = {
                "ar-AE": m = {
                    buttonLabel: "عرض المقترحات",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " خيار"),
                        other: () => "".concat(t.number(e.optionCount), " خيارات")
                    }), " متاحة."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "المجموعة المدخلة ".concat(e.groupTitle, ", مع ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " خيار"),
                            other: () => "".concat(t.number(e.groupCount), " خيارات")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", محدد",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "مقترحات",
                    selectedAnnouncement: e => "".concat(e.optionText, "، محدد")
                },
                "bg-BG": h = {
                    buttonLabel: "Покажи предложения",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " опция"),
                        other: () => "".concat(t.number(e.optionCount), " опции")
                    }), " на разположение."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Въведена група ".concat(e.groupTitle, ", с ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " опция"),
                            other: () => "".concat(t.number(e.groupCount), " опции")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", избрани",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Предложения",
                    selectedAnnouncement: e => "".concat(e.optionText, ", избрани")
                },
                "cs-CZ": g = {
                    buttonLabel: "Zobrazit doporučen\xed",
                    countAnnouncement: (e, t) => "K dispozici ".concat(t.plural(e.optionCount, {
                        one: () => "je ".concat(t.number(e.optionCount), " možnost"),
                        other: () => "jsou/je ".concat(t.number(e.optionCount), " možnosti/-\xed")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Zadan\xe1 skupina „".concat(e.groupTitle, "“ ").concat(t.plural(e.groupCount, {
                            one: () => "s ".concat(t.number(e.groupCount), " možnost\xed"),
                            other: () => "se ".concat(t.number(e.groupCount), " možnostmi")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: " (vybr\xe1no)",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "N\xe1vrhy",
                    selectedAnnouncement: e => "".concat(e.optionText, ", vybr\xe1no")
                },
                "da-DK": v = {
                    buttonLabel: "Vis forslag",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " mulighed tilg\xe6ngelig"),
                        other: () => "".concat(t.number(e.optionCount), " muligheder tilg\xe6ngelige")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Angivet gruppe ".concat(e.groupTitle, ", med ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " mulighed"),
                            other: () => "".concat(t.number(e.groupCount), " muligheder")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", valgt",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Forslag",
                    selectedAnnouncement: e => "".concat(e.optionText, ", valgt")
                },
                "de-DE": y = {
                    buttonLabel: "Empfehlungen anzeigen",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " Option"),
                        other: () => "".concat(t.number(e.optionCount), " Optionen")
                    }), " verf\xfcgbar."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Eingetretene Gruppe ".concat(e.groupTitle, ", mit ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " Option"),
                            other: () => "".concat(t.number(e.groupCount), " Optionen")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", ausgew\xe4hlt",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Empfehlungen",
                    selectedAnnouncement: e => "".concat(e.optionText, ", ausgew\xe4hlt")
                },
                "el-GR": b = {
                    buttonLabel: "Προβολή προτάσεων",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " επιλογή"),
                        other: () => "".concat(t.number(e.optionCount), " επιλογές ")
                    }), " διαθέσιμες."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Εισαγμένη ομάδα ".concat(e.groupTitle, ", με ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " επιλογή"),
                            other: () => "".concat(t.number(e.groupCount), " επιλογές")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", επιλεγμένο",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Προτάσεις",
                    selectedAnnouncement: e => "".concat(e.optionText, ", επιλέχθηκε")
                },
                "en-US": x = {
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Entered group ".concat(e.groupTitle, ", with ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " option"),
                            other: () => "".concat(t.number(e.groupCount), " options")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", selected",
                        other: ""
                    }, e.isSelected)),
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " option"),
                        other: () => "".concat(t.number(e.optionCount), " options")
                    }), " available."),
                    selectedAnnouncement: e => "".concat(e.optionText, ", selected"),
                    buttonLabel: "Show suggestions",
                    listboxLabel: "Suggestions"
                },
                "es-ES": S = {
                    buttonLabel: "Mostrar sugerencias",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opci\xf3n"),
                        other: () => "".concat(t.number(e.optionCount), " opciones")
                    }), " disponible(s)."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Se ha unido al grupo ".concat(e.groupTitle, ", con ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opci\xf3n"),
                            other: () => "".concat(t.number(e.groupCount), " opciones")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", seleccionado",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Sugerencias",
                    selectedAnnouncement: e => "".concat(e.optionText, ", seleccionado")
                },
                "et-EE": w = {
                    buttonLabel: "Kuva soovitused",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " valik"),
                        other: () => "".concat(t.number(e.optionCount), " valikud")
                    }), " saadaval."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Sisestatud r\xfchm ".concat(e.groupTitle, ", valikuga ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " valik"),
                            other: () => "".concat(t.number(e.groupCount), " valikud")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", valitud",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Soovitused",
                    selectedAnnouncement: e => "".concat(e.optionText, ", valitud")
                },
                "fi-FI": D = {
                    buttonLabel: "N\xe4yt\xe4 ehdotukset",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " vaihtoehto"),
                        other: () => "".concat(t.number(e.optionCount), " vaihtoehdot")
                    }), " saatavilla."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Mentiin ryhm\xe4\xe4n ".concat(e.groupTitle, ", ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " vaihtoehdon"),
                            other: () => "".concat(t.number(e.groupCount), " vaihtoehdon")
                        }), " kanssa."),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", valittu",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Ehdotukset",
                    selectedAnnouncement: e => "".concat(e.optionText, ", valittu")
                },
                "fr-FR": C = {
                    buttonLabel: "Afficher les suggestions",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " option"),
                        other: () => "".concat(t.number(e.optionCount), " options")
                    }), " disponible(s)."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Groupe ".concat(e.groupTitle, " saisi, avec ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " option"),
                            other: () => "".concat(t.number(e.groupCount), " options")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", s\xe9lectionn\xe9(s)",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Suggestions",
                    selectedAnnouncement: e => "".concat(e.optionText, ", s\xe9lectionn\xe9")
                },
                "he-IL": P = {
                    buttonLabel: "הצג הצעות",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "אפשרות ".concat(t.number(e.optionCount)),
                        other: () => "".concat(t.number(e.optionCount), " אפשרויות")
                    }), " במצב זמין."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "נכנס לקבוצה ".concat(e.groupTitle, ", עם ").concat(t.plural(e.groupCount, {
                            one: () => "אפשרות ".concat(t.number(e.groupCount)),
                            other: () => "".concat(t.number(e.groupCount), " אפשרויות")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", נבחר",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "הצעות",
                    selectedAnnouncement: e => "".concat(e.optionText, ", נבחר")
                },
                "hr-HR": k = {
                    buttonLabel: "Prikaži prijedloge",
                    countAnnouncement: (e, t) => "Dostupno još: ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opcija"),
                        other: () => "".concat(t.number(e.optionCount), " opcije/a")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Unesena skupina ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opcijom"),
                            other: () => "".concat(t.number(e.groupCount), " opcije/a")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", odabranih",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Prijedlozi",
                    selectedAnnouncement: e => "".concat(e.optionText, ", odabrano")
                },
                "hu-HU": E = {
                    buttonLabel: "Javaslatok megjelen\xedt\xe9se",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " lehetős\xe9g"),
                        other: () => "".concat(t.number(e.optionCount), " lehetős\xe9g")
                    }), " \xe1ll rendelkez\xe9sre."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Bel\xe9pett a(z) ".concat(e.groupTitle, " csoportba, amely ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " lehetős\xe9get"),
                            other: () => "".concat(t.number(e.groupCount), " lehetős\xe9get")
                        }), " tartalmaz. "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", kijel\xf6lve",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Javaslatok",
                    selectedAnnouncement: e => "".concat(e.optionText, ", kijel\xf6lve")
                },
                "it-IT": T = {
                    buttonLabel: "Mostra suggerimenti",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opzione disponibile"),
                        other: () => "".concat(t.number(e.optionCount), " opzioni disponibili")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Ingresso nel gruppo ".concat(e.groupTitle, ", con ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opzione"),
                            other: () => "".concat(t.number(e.groupCount), " opzioni")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", selezionato",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Suggerimenti",
                    selectedAnnouncement: e => "".concat(e.optionText, ", selezionato")
                },
                "ja-JP": R = {
                    buttonLabel: "候補を表示",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " 個のオプション"),
                        other: () => "".concat(t.number(e.optionCount), " 個のオプション")
                    }), "を利用できます。"),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "入力されたグループ ".concat(e.groupTitle, "、").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " 個のオプション"),
                            other: () => "".concat(t.number(e.groupCount), " 個のオプション")
                        }), "を含む。"),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: "、選択済み",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "候補",
                    selectedAnnouncement: e => "".concat(e.optionText, "、選択済み")
                },
                "ko-KR": M = {
                    buttonLabel: "제안 사항 표시",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), "개 옵션"),
                        other: () => "".concat(t.number(e.optionCount), "개 옵션")
                    }), "을 사용할 수 있습니다."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "입력한 그룹 ".concat(e.groupTitle, ", ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), "개 옵션"),
                            other: () => "".concat(t.number(e.groupCount), "개 옵션")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", 선택됨",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "제안",
                    selectedAnnouncement: e => "".concat(e.optionText, ", 선택됨")
                },
                "lt-LT": O = {
                    buttonLabel: "Rodyti pasiūlymus",
                    countAnnouncement: (e, t) => "Yra ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " parinktis"),
                        other: () => "".concat(t.number(e.optionCount), " parinktys (-ių)")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Įvesta grupė ".concat(e.groupTitle, ", su ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " parinktimi"),
                            other: () => "".concat(t.number(e.groupCount), " parinktimis (-ių)")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", pasirinkta",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Pasiūlymai",
                    selectedAnnouncement: e => "".concat(e.optionText, ", pasirinkta")
                },
                "lv-LV": I = {
                    buttonLabel: "Rādīt ieteikumus",
                    countAnnouncement: (e, t) => "Pieejamo opciju skaits: ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opcija"),
                        other: () => "".concat(t.number(e.optionCount), " opcijas")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Ievadīta grupa ".concat(e.groupTitle, ", ar ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opciju"),
                            other: () => "".concat(t.number(e.groupCount), " opcijām")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", atlasīta",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Ieteikumi",
                    selectedAnnouncement: e => "".concat(e.optionText, ", atlasīta")
                },
                "nb-NO": A = {
                    buttonLabel: "Vis forslag",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " alternativ"),
                        other: () => "".concat(t.number(e.optionCount), " alternativer")
                    }), " finnes."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Angitt gruppe ".concat(e.groupTitle, ", med ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " alternativ"),
                            other: () => "".concat(t.number(e.groupCount), " alternativer")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", valgt",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Forslag",
                    selectedAnnouncement: e => "".concat(e.optionText, ", valgt")
                },
                "nl-NL": N = {
                    buttonLabel: "Suggesties weergeven",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " optie"),
                        other: () => "".concat(t.number(e.optionCount), " opties")
                    }), " beschikbaar."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Groep ".concat(e.groupTitle, " ingevoerd met ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " optie"),
                            other: () => "".concat(t.number(e.groupCount), " opties")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", geselecteerd",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Suggesties",
                    selectedAnnouncement: e => "".concat(e.optionText, ", geselecteerd")
                },
                "pl-PL": L = {
                    buttonLabel: "Wyświetlaj sugestie",
                    countAnnouncement: (e, t) => "dostępna/dostępne(-nych) ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opcja"),
                        other: () => "".concat(t.number(e.optionCount), " opcje(-i)")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Dołączono do grupy ".concat(e.groupTitle, ", z ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opcją"),
                            other: () => "".concat(t.number(e.groupCount), " opcjami")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", wybrano",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Sugestie",
                    selectedAnnouncement: e => "".concat(e.optionText, ", wybrano")
                },
                "pt-BR": j = {
                    buttonLabel: "Mostrar sugest\xf5es",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " op\xe7\xe3o"),
                        other: () => "".concat(t.number(e.optionCount), " op\xe7\xf5es")
                    }), " dispon\xedvel."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Grupo inserido ".concat(e.groupTitle, ", com ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " op\xe7\xe3o"),
                            other: () => "".concat(t.number(e.groupCount), " op\xe7\xf5es")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", selecionado",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Sugest\xf5es",
                    selectedAnnouncement: e => "".concat(e.optionText, ", selecionado")
                },
                "pt-PT": F = {
                    buttonLabel: "Apresentar sugest\xf5es",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " op\xe7\xe3o"),
                        other: () => "".concat(t.number(e.optionCount), " op\xe7\xf5es")
                    }), " dispon\xedvel."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Grupo introduzido ".concat(e.groupTitle, ", com ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " op\xe7\xe3o"),
                            other: () => "".concat(t.number(e.groupCount), " op\xe7\xf5es")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", selecionado",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Sugest\xf5es",
                    selectedAnnouncement: e => "".concat(e.optionText, ", selecionado")
                },
                "ro-RO": K = {
                    buttonLabel: "Afișare sugestii",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opțiune"),
                        other: () => "".concat(t.number(e.optionCount), " opțiuni")
                    }), " disponibile."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Grup ".concat(e.groupTitle, " introdus, cu ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opțiune"),
                            other: () => "".concat(t.number(e.groupCount), " opțiuni")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", selectat",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Sugestii",
                    selectedAnnouncement: e => "".concat(e.optionText, ", selectat")
                },
                "ru-RU": _ = {
                    buttonLabel: "Показать предложения",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " параметр"),
                        other: () => "".concat(t.number(e.optionCount), " параметров")
                    }), " доступно."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Введенная группа ".concat(e.groupTitle, ", с ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " параметром"),
                            other: () => "".concat(t.number(e.groupCount), " параметрами")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", выбранными",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Предложения",
                    selectedAnnouncement: e => "".concat(e.optionText, ", выбрано")
                },
                "sk-SK": z = {
                    buttonLabel: "Zobraziť n\xe1vrhy",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " možnosť"),
                        other: () => "".concat(t.number(e.optionCount), " možnosti/-\xed")
                    }), " k dispoz\xedcii."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Zadan\xe1 skupina ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " možnosťou"),
                            other: () => "".concat(t.number(e.groupCount), " možnosťami")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", vybrat\xe9",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "N\xe1vrhy",
                    selectedAnnouncement: e => "".concat(e.optionText, ", vybrat\xe9")
                },
                "sl-SI": V = {
                    buttonLabel: "Prikaži predloge",
                    countAnnouncement: (e, t) => "Na voljo je ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opcija"),
                        other: () => "".concat(t.number(e.optionCount), " opcije")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Vnesena skupina ".concat(e.groupTitle, ", z ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opcija"),
                            other: () => "".concat(t.number(e.groupCount), " opcije")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", izbrano",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Predlogi",
                    selectedAnnouncement: e => "".concat(e.optionText, ", izbrano")
                },
                "sr-SP": B = {
                    buttonLabel: "Prikaži predloge",
                    countAnnouncement: (e, t) => "Dostupno još: ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " opcija"),
                        other: () => "".concat(t.number(e.optionCount), " opcije/a")
                    }), "."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Unesena grupa ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " opcijom"),
                            other: () => "".concat(t.number(e.groupCount), " optione/a")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", izabranih",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Predlozi",
                    selectedAnnouncement: e => "".concat(e.optionText, ", izabrano")
                },
                "sv-SE": U = {
                    buttonLabel: "Visa f\xf6rslag",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " alternativ"),
                        other: () => "".concat(t.number(e.optionCount), " alternativ")
                    }), " tillg\xe4ngliga."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Ingick i gruppen ".concat(e.groupTitle, " med ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " alternativ"),
                            other: () => "".concat(t.number(e.groupCount), " alternativ")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", valda",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "F\xf6rslag",
                    selectedAnnouncement: e => "".concat(e.optionText, ", valda")
                },
                "tr-TR": H = {
                    buttonLabel: "\xd6nerileri g\xf6ster",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " se\xe7enek"),
                        other: () => "".concat(t.number(e.optionCount), " se\xe7enekler")
                    }), " kullanılabilir."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Girilen grup ".concat(e.groupTitle, ", ile ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " se\xe7enek"),
                            other: () => "".concat(t.number(e.groupCount), " se\xe7enekler")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", se\xe7ildi",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "\xd6neriler",
                    selectedAnnouncement: e => "".concat(e.optionText, ", se\xe7ildi")
                },
                "uk-UA": G = {
                    buttonLabel: "Показати пропозиції",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " параметр"),
                        other: () => "".concat(t.number(e.optionCount), " параметри(-ів)")
                    }), " доступно."),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "Введена група ".concat(e.groupTitle, ", з ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " параметр"),
                            other: () => "".concat(t.number(e.groupCount), " параметри(-ів)")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", вибрано",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "Пропозиції",
                    selectedAnnouncement: e => "".concat(e.optionText, ", вибрано")
                },
                "zh-CN": W = {
                    buttonLabel: "显示建议",
                    countAnnouncement: (e, t) => "有 ".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " 个选项"),
                        other: () => "".concat(t.number(e.optionCount), " 个选项")
                    }), "可用。"),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "进入了 ".concat(e.groupTitle, " 组，其中有 ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " 个选项"),
                            other: () => "".concat(t.number(e.groupCount), " 个选项")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", 已选择",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "建议",
                    selectedAnnouncement: e => "".concat(e.optionText, ", 已选择")
                },
                "zh-TW": q = {
                    buttonLabel: "顯示建議",
                    countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
                        one: () => "".concat(t.number(e.optionCount), " 選項"),
                        other: () => "".concat(t.number(e.optionCount), " 選項")
                    }), " 可用。"),
                    focusAnnouncement: (e, t) => "".concat(t.select({
                        true: () => "輸入的群組 ".concat(e.groupTitle, ", 有 ").concat(t.plural(e.groupCount, {
                            one: () => "".concat(t.number(e.groupCount), " 選項"),
                            other: () => "".concat(t.number(e.groupCount), " 選項")
                        }), ". "),
                        other: ""
                    }, e.isGroupChange)).concat(e.optionText).concat(t.select({
                        true: ", 已選取",
                        other: ""
                    }, e.isSelected)),
                    listboxLabel: "建議",
                    selectedAnnouncement: e => "".concat(e.optionText, ", 已選取")
                }
            }