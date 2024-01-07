            "use strict";
            n.r(t), n.d(t, {
                useSearchField: function() {
                    return V
                }
            });
            var r = n("290895"),
                o = n("181551"),
                a = n("536571"),
                i = {},
                s = {},
                c = {},
                l = {},
                u = {},
                d = {},
                p = {},
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
                z = {};

            function V(e, t, n) {
                var s;
                let c = (0, o.useLocalizedStringFormatter)((s = i) && s.__esModule ? s.default : s),
                    {
                        isDisabled: l,
                        isReadOnly: u,
                        onSubmit: d = () => {},
                        onClear: p,
                        type: f = "search"
                    } = e,
                    {
                        labelProps: m,
                        inputProps: h,
                        descriptionProps: g,
                        errorMessageProps: v
                    } = (0, a.useTextField)({
                        ...e,
                        value: t.value,
                        onChange: t.setValue,
                        onKeyDown: (0, r.chain)(e => {
                            let n = e.key;
                            ("Enter" === n || "Escape" === n) && e.preventDefault(), !l && !u && ("Enter" === n && d(t.value), "Escape" === n && (t.setValue(""), p && p()))
                        }, e.onKeyDown),
                        type: f
                    }, n);
                return {
                    labelProps: m,
                    inputProps: {
                        ...h,
                        defaultValue: void 0
                    },
                    clearButtonProps: {
                        "aria-label": c.format("Clear search"),
                        excludeFromTabOrder: !0,
                        preventFocusOnPress: !0,
                        isDisabled: l || u,
                        onPress: () => {
                            t.setValue(""), p && p()
                        },
                        onPressStart: () => {
                            n.current.focus()
                        }
                    },
                    descriptionProps: g,
                    errorMessageProps: v
                }
            }
            i = {
                "ar-AE": s = {
                    "Clear search": "مسح البحث"
                },
                "bg-BG": c = {
                    "Clear search": "Изчистване на търсене"
                },
                "cs-CZ": l = {
                    "Clear search": "Vymazat hled\xe1n\xed"
                },
                "da-DK": u = {
                    "Clear search": "Ryd s\xf8gning"
                },
                "de-DE": d = {
                    "Clear search": "Suche zur\xfccksetzen"
                },
                "el-GR": p = {
                    "Clear search": "Απαλοιφή αναζήτησης"
                },
                "en-US": f = {
                    "Clear search": "Clear search"
                },
                "es-ES": m = {
                    "Clear search": "Borrar b\xfasqueda"
                },
                "et-EE": h = {
                    "Clear search": "T\xfchjenda otsing"
                },
                "fi-FI": g = {
                    "Clear search": "Tyhjenn\xe4 haku"
                },
                "fr-FR": v = {
                    "Clear search": "Effacer la recherche"
                },
                "he-IL": y = {
                    "Clear search": "נקה חיפוש"
                },
                "hr-HR": b = {
                    "Clear search": "Obriši pretragu"
                },
                "hu-HU": x = {
                    "Clear search": "Keres\xe9s t\xf6rl\xe9se"
                },
                "it-IT": S = {
                    "Clear search": "Cancella ricerca"
                },
                "ja-JP": w = {
                    "Clear search": "検索をクリア"
                },
                "ko-KR": D = {
                    "Clear search": "검색 지우기"
                },
                "lt-LT": C = {
                    "Clear search": "Išvalyti iešką"
                },
                "lv-LV": P = {
                    "Clear search": "Notīrīt meklēšanu"
                },
                "nb-NO": k = {
                    "Clear search": "T\xf8m s\xf8k"
                },
                "nl-NL": E = {
                    "Clear search": "Zoekactie wissen"
                },
                "pl-PL": T = {
                    "Clear search": "Wyczyść zawartość wyszukiwania"
                },
                "pt-BR": R = {
                    "Clear search": "Limpar pesquisa"
                },
                "pt-PT": M = {
                    "Clear search": "Limpar pesquisa"
                },
                "ro-RO": O = {
                    "Clear search": "Ştergeţi căutarea"
                },
                "ru-RU": I = {
                    "Clear search": "Очистить поиск"
                },
                "sk-SK": A = {
                    "Clear search": "Vymazať vyhľad\xe1vanie"
                },
                "sl-SI": N = {
                    "Clear search": "Počisti iskanje"
                },
                "sr-SP": L = {
                    "Clear search": "Obriši pretragu"
                },
                "sv-SE": j = {
                    "Clear search": "Rensa s\xf6kning"
                },
                "tr-TR": F = {
                    "Clear search": "Aramayı temizle"
                },
                "uk-UA": K = {
                    "Clear search": "Очистити пошук"
                },
                "zh-CN": _ = {
                    "Clear search": "清除搜索"
                },
                "zh-TW": z = {
                    "Clear search": "清除搜尋條件"
                }
            }