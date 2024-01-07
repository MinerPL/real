            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                s = n("118810"),
                a = n("446674"),
                i = n("77078"),
                o = n("467914"),
                c = n("769264"),
                d = n("701909"),
                r = n("749866"),
                f = n("49111"),
                S = n("782340");

            function E(e) {
                let {
                    text: t = "",
                    target: n
                } = e, E = (0, a.useStateFromStores)([c.default], () => c.default.isEnabled()), p = (0, a.useStateFromStores)([c.default], () => c.default.hasLearnedWord(t), [t]), M = u.useRef({
                    ...e,
                    spellcheckEnabled: E
                });
                M.current = {
                    ...e,
                    spellcheckEnabled: E
                };
                let g = u.useRef(!1),
                    [m, C] = u.useState(!1),
                    [T, b] = u.useState([]),
                    h = u.useCallback(() => {
                        let {
                            spellcheckEnabled: e,
                            text: t,
                            onHeightUpdate: n
                        } = M.current;
                        e && (0, r.isSupported)() && Promise.all([(0, r.isMisspelled)(t, !0), (0, r.getCorrections)(t, !0)]).then(e => {
                            let [t, l] = e;
                            g.current && (C(t), b(l), n())
                        })
                    }, []),
                    _ = u.useCallback(() => {
                        if ((0, s.isElement)(n, HTMLInputElement) || (0, s.isElement)(n, HTMLTextAreaElement)) {
                            let {
                                selectionStart: e,
                                selectionEnd: t,
                                value: l
                            } = n;
                            n.value = "", n.value = l, "email" !== n.type && (n.selectionStart = e, n.selectionEnd = t)
                        }
                    }, [n]);
                if (u.useEffect(() => {
                        let e = (0, r.addResultListener)(h);
                        return g.current = !0, () => {
                            g.current = !1, e()
                        }
                    }, [h]), u.useEffect(() => {
                        h()
                    }, [t, E, h]), !(0, r.isSupported)()) return [null, null];
                let A = T.map((e, t) => (0, l.jsx)(i.MenuItem, {
                        id: "correction-".concat(t),
                        label: e,
                        action: () => {
                            (0, r.replaceWithCorrection)(e), n.focus()
                        }
                    }, "correction-".concat(t))),
                    I = (0, l.jsxs)(l.Fragment, {
                        children: [m ? (0, l.jsx)(i.MenuItem, {
                            id: "add-to-dictionary",
                            label: S.default.Messages.ADD_TO_DICTIONARY,
                            action: () => {
                                (0, o.learnWord)(t), _()
                            }
                        }) : null, p && (0, l.jsx)(i.MenuItem, {
                            id: "remove-from-dictionary",
                            label: S.default.Messages.REMOVE_FROM_DICTIONARY,
                            action: () => {
                                (0, o.unlearnWord)(t), _()
                            }
                        }), (0, l.jsx)(i.MenuCheckboxItem, {
                            id: "spellcheck",
                            label: S.default.Messages.SPELLCHECK,
                            checked: E,
                            action: () => {
                                (0, o.toggleSpellcheck)(), _()
                            }
                        }), E ? (0, l.jsx)(i.MenuItem, {
                            id: "languages",
                            label: S.default.Messages.LANGUAGES,
                            action: () => window.open(d.default.getArticleURL(f.HelpdeskArticles.SPELLCHECK))
                        }) : null]
                    });
                return [A, I]
            }