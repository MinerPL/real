            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            }), s("424973"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("913139"),
                o = s("850166"),
                d = s("42203"),
                u = s("923959"),
                c = s("305961"),
                S = s("162771"),
                E = s("145131"),
                f = s("409082"),
                T = s("375822"),
                m = s("782340"),
                _ = s("279309");

            function g() {}
            let h = [T.AutocompleterResultTypes.VOICE_CHANNEL];

            function I(e) {
                e.setOptions({
                    voiceChannelGuildFilter: null
                }), e.setLimit(1 / 0)
            }

            function N(e) {
                let {
                    height: t
                } = e;
                return (0, a.jsx)("div", {
                    style: {
                        height: t
                    }
                })
            }

            function p() {
                return (0, a.jsx)(N, {
                    height: 16
                }, "footer")
            }

            function C() {
                return (0, a.jsx)(N, {
                    height: 8
                }, "header")
            }

            function A() {
                return (0, a.jsx)("div", {
                    className: _.voiceListSearchEmpty,
                    children: (0, a.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        className: _.noVoiceChannelSelected,
                        children: m.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_NO_RESULTS_FOUND
                    })
                })
            }

            function O(e) {
                var t, s;
                let {
                    keybind: l
                } = e, o = n.useRef(l);
                n.useEffect(() => void(o.current = l));
                let [d, u] = n.useState(null !== (s = null === (t = l.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== s ? s : void 0), c = n.useCallback(() => {
                    (0, i.openModalLazy)(async () => e => (0, a.jsx)(x, {
                        ...e,
                        onSelect: e => {
                            u(e), r.default.setKeybind({
                                ...o.current,
                                params: {
                                    channelId: e
                                }
                            })
                        }
                    }))
                }, []);
                return (0, a.jsx)(i.FormSection, {
                    title: m.default.Messages.USER_SETTINGS_KEYBIND_SWITCH_SERVER_SETTINGS_SECTION,
                    className: _.channelIdSection,
                    children: (0, a.jsxs)(E.default, {
                        align: E.default.Align.STRETCH,
                        children: [(0, a.jsx)("div", {
                            className: _.selectedVoiceChannel,
                            children: (0, a.jsx)(R, {
                                channelId: d
                            })
                        }), (0, a.jsx)(E.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, a.jsx)(i.Button, {
                                onClick: c,
                                children: m.default.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
                            })
                        })]
                    })
                })
            }

            function x(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    onSelect: r
                } = e, E = n.useId(), g = n.useRef(null), {
                    mouseFocusEnabled: N,
                    enableMouseFocus: O,
                    disableMouseFocus: x
                } = function() {
                    let e = n.useRef(!1),
                        t = n.useCallback(() => {
                            e.current = !0
                        }, []),
                        s = n.useCallback(() => {
                            e.current = !1
                        }, []);
                    return {
                        mouseFocusEnabled: e,
                        enableMouseFocus: t,
                        disableMouseFocus: s
                    }
                }(), {
                    query: R,
                    updateQuery: M,
                    queryResults: v
                } = (0, o.default)({
                    visible: !0,
                    autocompleterResultTypes: h,
                    autocompleterBeforeCreateSearchContext: I
                }), D = function(e) {
                    let t = "" !== e,
                        s = (0, l.useStateFromStoresArray)([u.default, d.default, S.default], () => {
                            let e = S.default.getGuildId();
                            if (t || null == e) return [];
                            let s = [];
                            for (let t of u.default.getVocalChannelIds(e)) {
                                let e = d.default.getChannel(t);
                                null != e && s.push(e)
                            }
                            return s
                        }, [t]);
                    return t ? null : s
                }(R), {
                    focusedIndex: L,
                    setFocusedIndex: P
                } = function(e) {
                    let [t, s] = n.useState(0), a = n.useRef(e);
                    return e !== a.current && 0 !== t && s(0), n.useEffect(() => void(a.current = e)), {
                        focusedIndex: t,
                        setFocusedIndex: s
                    }
                }(R);
                n.useEffect(() => {
                    let {
                        current: e
                    } = g;
                    !(null == e || e.isItemVisible(0, L, !0)) && e.scrollToIndex({
                        section: 0,
                        row: L
                    })
                }, [L]);
                let j = null != D ? D.length : v.length,
                    b = (() => {
                        if (null != D) {
                            var e;
                            return null === (e = D[L]) || void 0 === e ? void 0 : e.id
                        }
                        let t = v[L];
                        if ((null == t ? void 0 : t.type) === T.AutocompleterResultTypes.VOICE_CHANNEL) return t.record.id
                    })();
                return (0, a.jsx)("div", {
                    className: _.voiceModalContainer,
                    onMouseMove: O,
                    children: (0, a.jsxs)(i.ModalRoot, {
                        transitionState: t,
                        size: i.ModalSize.MEDIUM,
                        className: _.voiceModalRootContainer,
                        children: [(0, a.jsx)("div", {
                            className: _.inputWrapper,
                            children: (0, a.jsx)(i.TextInput, {
                                value: R,
                                onChange: M,
                                onKeyDown: function(e) {
                                    x();
                                    let t = e.key.toLowerCase();
                                    if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
                                        case "escape":
                                            s();
                                            break;
                                        case "enter": {
                                            let e = (() => {
                                                if (null != D) return D[L];
                                                let e = v[L];
                                                if ((null == e ? void 0 : e.type) === T.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
                                            })();
                                            null == e ? r(void 0) : r(e.id), s();
                                            break
                                        }
                                        case "arrowup":
                                            0 === L ? P(j - 1) : P(L - 1);
                                            break;
                                        case "arrowdown":
                                            L >= j - 1 ? P(0) : P(L + 1)
                                    }
                                },
                                placeholder: m.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_VOICE,
                                role: "combobox",
                                "aria-controls": E,
                                "aria-expanded": j > 0,
                                "aria-activedescendant": j > 0 && null != b ? b : void 0,
                                "aria-autocomplete": "list",
                                spellCheck: !1
                            })
                        }), 0 === j && "" !== R && (0, a.jsx)(A, {}), (j > 0 || "" === R) && (0, a.jsx)(i.ListThin, {
                            innerId: E,
                            innerRole: "listbox",
                            "aria-label": m.default.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
                            ref: g,
                            sections: [j],
                            renderRow: function(e) {
                                let {
                                    row: t
                                } = e, n = (() => {
                                    if (null != D) return D[t];
                                    let e = v[t];
                                    if ((null == e ? void 0 : e.type) === T.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
                                })();
                                if (null == n) return null;
                                let l = null != n.parent_id ? d.default.getChannel(n.parent_id) : void 0,
                                    i = c.default.getGuild(n.guild_id);
                                return (0, a.jsx)(f.Channel, {
                                    id: n.id,
                                    channel: n,
                                    category: l,
                                    focused: L === t,
                                    onMouseEnter: () => N.current && P(t),
                                    onClick: () => {
                                        r(n.id), s()
                                    },
                                    onFocus: () => P(t),
                                    children: null != i ? (0, a.jsx)("div", {
                                        className: _.guildName,
                                        children: i.name
                                    }) : null
                                }, n.id)
                            },
                            renderListHeader: C,
                            renderFooter: p,
                            sectionHeight: 0,
                            rowHeight: 34,
                            className: _.voiceChannelList,
                            listHeaderHeight: 8,
                            footerHeight: 16
                        })]
                    })
                })
            }

            function R(e) {
                let {
                    channelId: t
                } = e, {
                    channel: s,
                    category: n,
                    guild: r
                } = (0, l.useStateFromStoresObject)([d.default, c.default], () => {
                    let e = null != t ? d.default.getChannel(t) : void 0;
                    return null != e ? {
                        channel: e,
                        category: null != e.parent_id ? d.default.getChannel(e.parent_id) : void 0,
                        guild: null != e.guild_id ? c.default.getGuild(e.guild_id) : void 0
                    } : {
                        channel: void 0,
                        category: void 0,
                        guild: void 0
                    }
                });
                return null == s ? (0, a.jsx)(i.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    className: _.noVoiceChannelSelected,
                    children: m.default.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
                }) : (0, a.jsx)(f.Channel, {
                    channel: s,
                    id: s.id,
                    category: n,
                    onClick: g,
                    onFocus: g,
                    onMouseEnter: g,
                    focused: !1,
                    children: null != r ? (0, a.jsx)("div", {
                        className: _.guildName,
                        children: r.name
                    }) : null
                })
            }