(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16959"], {
        327769: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d6e0ab2f94e516718aa7.svg"
        },
        807739: function(e, t, n) {
            "use strict";
            e.exports = n.p + "53814dd70e4c42ddc91a.svg"
        },
        908324: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7e6eaccd59abc7101676.svg"
        },
        383819: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f1e156a1ccaa37121bca.svg"
        },
        278410: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca0c73b091af297f35d1.svg"
        },
        410957: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c16a806b7f3b5fc35ade.svg"
        },
        730708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "239fe09dcb288889fca7.svg"
        },
        754702: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d2fef1f3542b417e129.svg"
        },
        987224: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d752b8cc85d981730031.svg"
        },
        602416: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e06145e06880de9e47ee.svg"
        },
        822637: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("318981"),
                o = n("49111"),
                s = {
                    search(e, t) {
                        null == r.default.getResults(e, t) && (i.default.dispatch({
                            type: "INTEGRATION_QUERY",
                            integration: e,
                            query: t
                        }), l.default.get({
                            url: o.Endpoints.INTEGRATION_SEARCH("tenor"),
                            query: {
                                q: t
                            },
                            oldFormErrors: !0
                        }).then(n => {
                            i.default.dispatch({
                                type: "INTEGRATION_QUERY_SUCCESS",
                                integration: e,
                                query: t,
                                results: n.body
                            })
                        }, () => i.default.dispatch({
                            type: "INTEGRATION_QUERY_FAILURE",
                            integration: e,
                            query: t
                        })))
                    }
                }
        },
        373807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("151426"),
                s = n("77078"),
                a = n("509802"),
                u = n("778588"),
                d = n("599110"),
                c = n("49111"),
                f = n("782340"),
                p = n("843011"),
                m = n("987224");

            function h(e) {
                let {
                    updatePosition: t,
                    onComplete: n
                } = e;
                return i.useEffect(() => {
                    d.default.track(c.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                        type: "holiday_gifting_tip"
                    })
                }, []), (0, l.jsxs)("div", {
                    className: p.container,
                    children: [(0, l.jsx)("img", {
                        className: p.image,
                        alt: "",
                        src: m,
                        onLoad: () => t()
                    }), (0, l.jsxs)("div", {
                        className: p.body,
                        children: [(0, l.jsx)(s.Heading, {
                            className: p.text,
                            variant: "heading-sm/semibold",
                            children: f.default.Messages.SEASONAL_GIFTING_POPUP_HEADER
                        }), (0, l.jsx)(s.Text, {
                            className: p.text,
                            variant: "text-sm/normal",
                            children: f.default.Messages.SEASONAL_GIFTING_SPREAD_CHEER_TOOLTIP
                        })]
                    }), (0, l.jsx)(s.Button, {
                        className: p.button,
                        look: s.Button.Looks.INVERTED,
                        color: s.Button.Colors.BRAND,
                        onClick: () => n(),
                        children: f.default.Messages.GOT_IT
                    }), (0, l.jsx)("div", {
                        className: p.pointer
                    })]
                })
            }

            function E(e) {
                let {
                    hovered: t,
                    onComplete: n
                } = e, i = (0, r.useStateFromStores)([u.default], () => {
                    var e;
                    return !(null === (e = u.default) || void 0 === e ? void 0 : e.hasLayers())
                });
                return t && i ? (0, l.jsx)(a.default, {
                    contentTypes: [o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2022],
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: i
                        } = e;
                        return t === o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2022 ? (0, l.jsx)(s.Popout, {
                            spacing: 0,
                            shouldShow: !0,
                            position: "top",
                            align: "center",
                            renderPopout: e => (0, l.jsx)(h, {
                                ...e,
                                onComplete: () => {
                                    n(), i()
                                }
                            }),
                            onRequestClose: () => void 0,
                            closeOnScroll: !1,
                            ignoreModalClicks: !0,
                            children: () => (0, l.jsx)("div", {
                                className: p.popoutTarget
                            })
                        }) : null
                    }
                }) : null
            }
        },
        362544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullyEmojiAutocompleteExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-05_fullyemojiautocomplete",
                label: "Only show emoji in autocomplete",
                defaultConfig: {
                    hideStickers: !1,
                    moreEmojisToShow: 0,
                    showMobileStickerToggle: !1
                },
                treatments: [{
                    id: 1,
                    label: "Hide Stickers, only show 10 Emojis",
                    config: {
                        hideStickers: !0,
                        moreEmojisToShow: 0,
                        showMobileStickerToggle: !1
                    }
                }, {
                    id: 2,
                    label: "Hide Stickers, show more Emojis without scrollbar",
                    config: {
                        hideStickers: !0,
                        moreEmojisToShow: 4,
                        showMobileStickerToggle: !1
                    }
                }, {
                    id: 3,
                    label: "Hide Stickers, show more Emojis with scrollbar",
                    config: {
                        hideStickers: !0,
                        moreEmojisToShow: 40,
                        showMobileStickerToggle: !1
                    }
                }, {
                    id: 4,
                    label: "Show Autocomplete Stickers Toggle on mobile",
                    config: {
                        hideStickers: !0,
                        moreEmojisToShow: 40,
                        showMobileStickerToggle: !0
                    }
                }]
            })
        },
        292655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("206230"),
                d = n("491605"),
                c = n("782340"),
                f = n("491422");

            function p(e) {
                let {
                    hovered: t
                } = e, i = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                async function r() {
                    let {
                        default: e
                    } = await n.el("984138").then(n.t.bind(n, "984138", 19));
                    return e
                }
                return (0, l.jsx)(d.default, {
                    pauseAtFrame: t ? void 0 : 0,
                    importData: r,
                    shouldAnimate: t && !i,
                    className: o(f.rocket, {
                        [f.rocketHovered]: t
                    })
                })
            }

            function m(e) {
                let {
                    tabIndex: t,
                    className: n,
                    onClick: r,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d
                } = e, [m, h] = i.useState(!1);

                function E() {
                    h(!0)
                }

                function S() {
                    h(!1)
                }
                return (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: t,
                    className: o(f.activityButton, n),
                    onMouseEnter: E,
                    onMouseOver: E,
                    onMouseLeave: S,
                    onFocus: E,
                    onBlur: S,
                    onClick: r,
                    "aria-label": c.default.Messages.SELECT_ACTIVITY,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d,
                    children: (0, l.jsx)(p, {
                        hovered: m
                    })
                })
            }
        },
        343952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateOptionContent: function() {
                    return a
                }
            });
            var l = n("118200"),
                i = n("524768"),
                r = n("810065"),
                o = n("317041"),
                s = n("782340");

            function a(e) {
                let {
                    option: t,
                    content: n,
                    guildId: a,
                    channelId: u,
                    allowEmptyValues: d,
                    commandOrigin: c = i.CommandOrigin.CHAT
                } = e, f = null != n ? (0, l.getString)({
                    content: n
                }, "content").trim() : "", p = t.required, m = null != n, h = "" === f;
                if (!m) return p ? {
                    success: !1,
                    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                } : {
                    success: !0
                };
                if (h) return d ? {
                    success: !0
                } : p ? {
                    success: !1,
                    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                } : {
                    success: !1,
                    error: (0, o.getValidationErrorText)(t)
                };
                let E = n.length > 1 ? {
                        type: "text",
                        text: f
                    } : n[0],
                    S = (0, r.default)[t.type](E, t, u, a, c);
                return !S.success && null == S.error && (S.error = (0, o.getValidationErrorText)(t)), S
            }
        },
        810065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("798609"),
                i = n("118851"),
                r = n("915639"),
                o = n("585722"),
                s = n("246598"),
                a = n("118200"),
                u = n("389153"),
                d = n("317041"),
                c = n("782340");
            let f = {
                    [l.ApplicationCommandOptionType.SUB_COMMAND]: () => ({
                        success: !1
                    }),
                    [l.ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({
                        success: !1
                    }),
                    [l.ApplicationCommandOptionType.STRING]: (e, t, n) => {
                        var i, r, o;
                        let a = null === (i = function(e) {
                            switch (e.type) {
                                case "emoji":
                                    return e.surrogate;
                                case "text":
                                    return e.text
                            }
                        }(e)) || void 0 === i ? void 0 : i.trim();
                        if (t.autocomplete) {
                            let e = s.default.getAutocompleteLastChoices(n, t.name);
                            null != e && (a = String(null !== (o = null === (r = e.find(e => e.name === a)) || void 0 === r ? void 0 : r.value) && void 0 !== o ? o : a))
                        }
                        return null == t.choices || null != a && t.choices.map(e => e.displayName).includes(a) ? t.type === l.ApplicationCommandOptionType.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength) ? void 0 !== a ? function(e, t, n) {
                            if (void 0 !== t.minLength && e.length < t.minLength || void 0 !== t.maxLength && e.length > t.maxLength) {
                                if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength) return {
                                    success: !1,
                                    error: n.exactRangeErrorMessage.format({
                                        value: h(t.minLength)
                                    })
                                };
                                if (void 0 !== t.maxLength && void 0 !== t.minLength) return {
                                    success: !1,
                                    error: n.rangeErrorMessage.format({
                                        minimum: h(t.minLength),
                                        maximum: h(t.maxLength)
                                    })
                                };
                                else if (void 0 !== t.minLength) return {
                                    success: !1,
                                    error: n.minErrorMessage.format({
                                        minimum: h(t.minLength)
                                    })
                                };
                                else if (void 0 !== t.maxLength) return {
                                    success: !1,
                                    error: n.maxErrorMessage.format({
                                        maximum: h(t.maxLength)
                                    })
                                }
                            }
                            return {
                                success: !0
                            }
                        }(a, t, {
                            exactRangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                            rangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                            minErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                            maxErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
                        }) : {
                            success: !0
                        } : {
                            success: !0
                        } : {
                            success: !1
                        }
                    },
                    [l.ApplicationCommandOptionType.BOOLEAN]: e => {
                        if ("text" !== e.type) return {
                            success: !1
                        };
                        let t = e.text.trim();
                        return {
                            success: d.BOOLEAN_CHOICES.map(e => e.displayName.toLowerCase()).includes(t.toLowerCase())
                        }
                    },
                    [l.ApplicationCommandOptionType.INTEGER]: (e, t, n) => {
                        if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.INTEGER) return {
                            success: !1
                        };
                        let i = e.text.trim();
                        if (0 === i.length) return {
                            success: !1
                        };
                        if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                            success: !0
                        } : {
                            success: !1
                        };
                        let o = s.default.getAutocompleteLastChoices(n, t.name);
                        if (null != o && o.map(e => e.displayName).includes(i)) return {
                            success: !0
                        };
                        let u = Number(a.normalizeNumericString(r.default.locale, i));
                        return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? m(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR) : {
                            success: !1
                        }
                    },
                    [l.ApplicationCommandOptionType.NUMBER]: (e, t, n) => {
                        if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.NUMBER) return {
                            success: !1
                        };
                        let i = e.text.trim();
                        if (0 === i.length) return {
                            success: !1
                        };
                        if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                            success: !0
                        } : {
                            success: !1
                        };
                        let o = s.default.getAutocompleteLastChoices(n, t.name);
                        if (null != o && o.map(e => e.displayName).includes(i)) return {
                            success: !0
                        };
                        let u = Number(a.normalizeNumericString(r.default.locale, i));
                        return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? {
                            success: !1
                        } : m(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR)
                    },
                    [l.ApplicationCommandOptionType.USER]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "userMention" === e.type
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                                allowRoles: !1
                            });
                            return {
                                success: (null == t ? void 0 : t.type) === "userMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.CHANNEL]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "channelMention" === e.type
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                            return {
                                success: (null == t ? void 0 : t.type) === "channelMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.ROLE]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: p(e)
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                                allowUsers: !1
                            });
                            return {
                                success: (null == t ? void 0 : t.type) === "roleMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.MENTIONABLE]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "userMention" === e.type || p(e)
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                            return {
                                success: null != t && ("userMention" === t.type || p(t))
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.ATTACHMENT]: (e, t, n, l, i) => {
                        if ("text" !== e.type) return {
                            success: !1
                        };
                        let r = o.default.getUpload(n, t.name, (0, u.getCommandAttachmentDraftType)(i));
                        return {
                            success: null != r && r.filename === e.text
                        }
                    }
                },
                p = e => "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text;

            function m(e, t, n, l, i) {
                if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
                    if (null != t.maxValue && null != t.minValue) return {
                        success: !1,
                        error: n.format({
                            minimum: h(t.minValue),
                            maximum: h(t.maxValue)
                        })
                    };
                    if (null != t.minValue) return {
                        success: !1,
                        error: l.format({
                            minimum: h(t.minValue)
                        })
                    };
                    else if (null != t.maxValue) return {
                        success: !1,
                        error: i.format({
                            maximum: h(t.maxValue)
                        })
                    }
                }
                return {
                    success: !0
                }
            }

            function h(e) {
                return e.toLocaleString(c.default.getLocale(), {
                    useGrouping: !1
                })
            }
            var E = f
        },
        228226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("272030"),
                a = n("406291"),
                u = n("782340"),
                d = n("755203");

            function c(e) {
                var t;
                let r, c, f, {
                        className: p,
                        activeCommand: m,
                        activeOption: h,
                        optionStates: E
                    } = e,
                    S = i.useCallback(e => {
                        var t;
                        let i = null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id;
                        if (null == i) {
                            e.preventDefault();
                            return
                        }(0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("443070").then(n.bind(n, "443070"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                id: i,
                                label: u.default.Messages.COPY_ID_COMMAND
                            })
                        })
                    }, [null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id]);
                if (null == m) return null;
                if (null != h) {
                    let e = E[h.name].lastValidationResult;
                    r = h.displayName, c = h.displayDescription, f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
                } else r = "".concat(a.COMMAND_SENTINEL).concat(m.displayName), c = m.displayDescription, f = null;
                return (0, l.jsxs)("div", {
                    className: o(p, d.bar),
                    onContextMenu: S,
                    children: [(0, l.jsx)("span", {
                        className: d.name,
                        children: r
                    }), null != f ? (0, l.jsx)("span", {
                        className: d.error,
                        children: f
                    }) : (0, l.jsx)("span", {
                        className: d.description,
                        children: c
                    })]
                })
            }
        },
        529190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ITEM_HEIGHT: function() {
                    return M
                },
                default: function() {
                    return U
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("96386"),
                d = n("798609"),
                c = n("716241"),
                f = n("296141"),
                p = n("986632"),
                m = n("45961"),
                h = n("515059"),
                E = n("501536"),
                S = n("124299"),
                g = n("476765"),
                T = n("507217"),
                v = n("240249"),
                C = n("972620"),
                y = n("524768"),
                I = n("389153"),
                N = n("586450"),
                _ = n("41884"),
                x = n("355263"),
                A = n("317041"),
                O = n("49111"),
                R = n("782340"),
                b = n("253184"),
                k = n("327769");
            let M = 56,
                P = [8, 8, 0, 8],
                L = a.debounce(() => {
                    (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
                }, 300);
            var U = i.forwardRef(function(e, t) {
                let {
                    channel: n,
                    canOnlyUseTextCommands: r
                } = e, s = i.useRef(!1), a = i.useRef(0), [U, j] = i.useState(0), w = i.useRef(null), [B, K] = i.useState(!1), F = p.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
                i.useEffect(() => {
                    (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
                }, []);
                let {
                    sectionDescriptors: G,
                    activeSections: V,
                    commandsByActiveSection: H,
                    hasMoreAfter: W,
                    commands: q,
                    filteredSectionId: Y,
                    scrollDown: z,
                    filterSection: Q
                } = v.useDiscovery(n, {
                    commandType: d.ApplicationCommandType.CHAT,
                    builtIns: r ? C.BuiltInCommandFilter.ONLY_TEXT : C.BuiltInCommandFilter.ALLOW,
                    applicationCommands: !r
                }, {
                    placeholderCount: 7,
                    limit: A.DISCOVERY_COMMANDS_QUERY_LIMIT,
                    includeFrecency: !0
                }), X = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: F,
                    isScrolling: s,
                    listRef: w,
                    onActiveCategoryIndexChange: e => {
                        let t = V[e];
                        if (null != t) {
                            let e = G.findIndex(e => e.id === t.id);
                            p.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                        }
                    },
                    scrollOffset: 20,
                    searchQuery: ""
                }), J = e => {
                    let t = V.length,
                        n = H.reduce((e, t) => e + t.data.length, 0) - (W ? 7 : 0);
                    W && e + 420 > 48 * t + n * M - 512 && z(), X(e), L(), a.current = e
                };
                i.useEffect(() => {
                    J(a.current)
                }, [q]);
                let Z = i.useCallback(e => {
                        let t = e === V.length - 1;
                        return t && !W ? 0 : 16
                    }, [V.length, W]),
                    $ = H.map(e => e.data.length);
                i.useEffect(() => {
                    null != w.current && B && null != U && w.current.scrollRowIntoView(U)
                }, [B, U]), i.useLayoutEffect(() => {
                    if (null != Y) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.scrollToSectionTop(0)
                    }
                }, [q, Y]);
                let ee = i.useCallback(e => {
                        if (e.id === Y || e.id === A.BuiltInSectionId.FRECENCY) {
                            var t;
                            Q(null), null === (t = w.current) || void 0 === t || t.scrollToSectionTop(0)
                        } else Q(e.id)
                    }, [Q, Y]),
                    et = i.useCallback((e, t, l) => {
                        T.setActiveCommand({
                            channelId: n.id,
                            command: e,
                            section: t,
                            location: y.ApplicationCommandTriggerLocations.DISCOVERY,
                            triggerSection: l
                        })
                    }, [n.id]);
                i.useImperativeHandle(t, () => ({
                    onTabOrEnter: e => {
                        if (null == U) return !e && (j(0), !0);
                        if (null == U) return !1;
                        let t = 0,
                            n = 0;
                        for (let e of H)
                            if (t = n, U < (n += e.data.length)) {
                                let n = e.data[U - t],
                                    l = G.find(e => e.id === n.applicationId);
                                et(n, l, (0, I.getCommandTriggerSection)(e.section));
                                break
                            } return !0
                    },
                    onMoveSelection: e => {
                        if (0 === q.length) return !0;
                        let t = W ? 7 : 0,
                            n = q.length + t,
                            l = null == U ? 0 : U + e;
                        return l >= n ? l = n - 1 : l < 0 && (l = 0), j(l), K(!0), !0
                    }
                }), [q.length, H, W, G, et, U]);
                let en = i.useCallback(e => {
                        let t = V[e];
                        if (null == t) return null;
                        let i = (0, x.getIconComponent)(t),
                            r = (0, l.jsx)(i, {
                                channel: n,
                                section: t,
                                width: 16,
                                height: 16,
                                padding: 0
                            });
                        return (0, l.jsx)(h.default, {
                            className: b.categoryHeader,
                            icon: r,
                            children: t.name
                        }, e)
                    }, [n, V]),
                    el = i.useCallback((e, t) => {
                        let n = e === V.length - 1,
                            i = V[e],
                            {
                                data: r
                            } = H[e];
                        return (0, l.jsxs)("ul", {
                            role: "group",
                            "aria-label": i.name,
                            className: o(b.categorySection, {
                                [b.categorySectionLast]: n
                            }),
                            children: [t, 0 === r.length && (0, l.jsx)(u.default, {
                                message: R.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                                    applicationName: i.name
                                }),
                                noResultsImageURL: k,
                                className: b.noSearchResults
                            })]
                        }, e)
                    }, [V, H]),
                    ei = i.useCallback((e, t) => {
                        var i;
                        let r = H[t.sectionIndex],
                            o = r.data[t.sectionRowIndex],
                            s = "".concat(r.section.id, ":").concat(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : e);
                        if (null == o || r.section.id !== o.applicationId && r.section.id !== A.BuiltInSectionId.FRECENCY || o.inputType === y.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(_.default, {}, s);
                        let a = G.find(e => e.id === o.applicationId);
                        return (0, l.jsx)(E.default.NewCommand, {
                            index: e,
                            command: o,
                            channel: n,
                            className: b.itemWrapper,
                            selected: U === e,
                            showImage: r.section.id !== o.applicationId,
                            section: a,
                            onClick: () => et(o, a, (0, I.getCommandTriggerSection)(r.section)),
                            onHover: () => {
                                j(null), K(!1)
                            }
                        }, s)
                    }, [n, H, et, G, U]),
                    er = (0, g.useUID)();
                return (0, f.useChannelEditorPopup)(er, !0, (0, E.getAutocompleteRowId)(U)), i.useEffect(() => () => {
                    (0, f.dismissChannelEditorPopup)()
                }, []), (0, l.jsxs)(E.default, {
                    id: er,
                    className: b.outerWrapper,
                    innerClassName: b.wrapper,
                    onMouseDown: D,
                    children: [(0, l.jsx)(N.default, {
                        className: b.rail,
                        channel: n,
                        sections: G,
                        filteredSectionId: Y,
                        activeCategoryIndex: F,
                        onSectionClick: ee,
                        applicationCommandListRef: w
                    }), (0, l.jsx)(S.default, {
                        role: "listbox",
                        className: b.list,
                        listPadding: P,
                        onScroll: J,
                        renderRow: ei,
                        renderSection: el,
                        renderSectionHeader: en,
                        rowCount: V.length,
                        rowCountBySection: $,
                        rowHeight: M,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: Z,
                        ref: w,
                        stickyHeaders: !0
                    })]
                })
            });

            function D(e) {
                e.preventDefault()
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("587974"),
                a = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: f,
                    className: p,
                    selectable: m = !1,
                    onFocus: h,
                    onBlur: E,
                    onMouseOver: S,
                    onMouseLeave: g,
                    ...T
                } = e, [v, C] = i.useState(!1), y = i.useCallback(() => {
                    C(!0), null == h || h()
                }, [h]), I = i.useCallback(() => {
                    C(!1), null == E || E()
                }, [E]), N = i.useCallback(() => {
                    C(!0), null == S || S()
                }, [S]), _ = i.useCallback(() => {
                    C(!1), null == g || g()
                }, [g]), x = i.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return a.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [t, r]);
                return (0, l.jsx)("div", {
                    ...T,
                    className: o(d.wrapper, p, {
                        [d.selectable]: m,
                        [d.selected]: m && n
                    }),
                    onFocus: y,
                    onBlur: I,
                    onMouseOver: N,
                    onMouseLeave: _,
                    children: (0, l.jsx)(s.default, {
                        className: d.mask,
                        mask: m && (n || v) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: f,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: r,
                                height: f
                            },
                            src: x
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("83910"),
                s = n("93393"),
                a = n("317041"),
                u = n("749296");
            let d = e => {
                switch (e.id) {
                    case a.BuiltInSectionId.BUILT_IN:
                        return o.default;
                    case a.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: i,
                    height: o,
                    padding: s,
                    isSelected: a,
                    selectable: c = !1,
                    ...f
                } = e, p = d(t);
                return (0, l.jsx)("div", {
                    className: r(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && a
                    }),
                    style: {
                        width: i,
                        height: o,
                        padding: null != s ? s : 0
                    },
                    children: null != p ? (0, l.jsx)(p, {
                        className: u.icon,
                        width: i,
                        height: o,
                        ...f
                    }) : null
                })
            }
        },
        586450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("986632"),
                u = n("405607"),
                d = n("524768"),
                c = n("355263"),
                f = n("65557");
            let p = [16, 12, 8, 12];

            function m(e) {
                let {
                    className: t,
                    channel: n,
                    sections: r,
                    activeCategoryIndex: m,
                    filteredSectionId: h,
                    onSectionClick: E,
                    applicationCommandListRef: S
                } = e, g = i.useRef(null), T = i.useCallback((e, t) => {
                    var n;
                    let l = 8;
                    return (null === (n = r[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (l += 8), 32 + l
                }, [r]), v = i.useCallback((e, t) => {
                    var n;
                    if (!t) return 0 === e ? 0 : 8;
                    return (null === (n = r[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
                }, [r]), C = i.useCallback((e, t) => {
                    let i = r[t];
                    if (null == i) return;
                    let o = (0, c.getIconComponent)(i),
                        a = i.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                        u = 32 - 2 * a,
                        p = (0, l.jsx)(o, {
                            channel: n,
                            section: i,
                            isSelected: null != h ? i.id === h : m === t,
                            padding: a,
                            width: u,
                            height: u,
                            selectable: !0
                        }),
                        S = i.type !== d.ApplicationCommandSectionType.BUILT_IN && t < r.length - 1 && r[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
                    return (0, l.jsxs)("div", {
                        className: f.section,
                        children: [(0, l.jsx)(s.Tooltip, {
                            text: i.name,
                            position: "right",
                            children: e => {
                                let {
                                    onClick: t,
                                    ...n
                                } = e;
                                return (0, l.jsx)(s.Clickable, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        E(i), null == t || t()
                                    },
                                    ...n,
                                    children: p
                                })
                            }
                        }), S ? (0, l.jsx)("hr", {
                            className: f.builtInSeparator
                        }) : null]
                    }, i.id)
                }, [m, n, E, r, h]);
                return 0 === r.length ? null : (0, l.jsx)("div", {
                    className: o(t, f.wrapper),
                    children: (0, l.jsx)(u.default, {
                        categoryListRef: g,
                        expressionsListRef: S,
                        store: a.ApplicationCommandDiscoveryPickerStore,
                        categories: r,
                        className: f.list,
                        renderCategoryListItem: C,
                        rowCount: r.length,
                        categoryHeight: T,
                        listPadding: p,
                        getScrollOffsetForIndex: v
                    })
                })
            }
        },
        596182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("563911"),
                u = n("258078"),
                d = n("286217"),
                c = n("355263"),
                f = n("406291"),
                p = n("782340"),
                m = n("333209");

            function h(e, t, n) {
                return (0, l.jsx)(d.default, {
                    className: m.option,
                    name: e.displayName,
                    state: t,
                    onClick: n
                }, e.name)
            }

            function E(e) {
                let {
                    command: t,
                    optionStates: n,
                    onOptionClick: r
                } = e, {
                    requiredOptions: o,
                    setOptionalOptions: a,
                    unsetOptionalOptions: d
                } = i.useMemo(() => {
                    var e, l, i, r;
                    let o = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
                        s = null !== (r = null === (l = t.options) || void 0 === l ? void 0 : l.filter(e => !e.required)) && void 0 !== r ? r : [],
                        a = s.filter(e => {
                            var t;
                            return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                        }),
                        u = s.filter(e => {
                            var t;
                            return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                        });
                    return {
                        requiredOptions: o,
                        setOptionalOptions: a,
                        unsetOptionalOptions: u
                    }
                }, [t.options, n]), c = (0, l.jsx)("div", {
                    className: m.optionalNames,
                    children: d.map(e => (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.displayName
                    }, e.name))
                }), f = o.map(e => h(e, null == n ? void 0 : n[e.name], r)), E = a.length > 0 ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(s.Heading, {
                        className: m.optionalHeader,
                        variant: "heading-deprecated-12/semibold",
                        children: p.default.Messages.COMMANDS_OPTIONAL_HEADER
                    }), a.map(e => h(e, null == n ? void 0 : n[e.name], r))]
                }) : null, S = d.length > 0 ? (0, l.jsx)(s.Tooltip, {
                    text: c,
                    "aria-label": !1,
                    delay: 200,
                    children: e => (0, l.jsx)(u.default, {
                        className: m.optionalCount,
                        color: u.default.Colors.MUTED,
                        ...e,
                        children: 0 === a.length ? p.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                            count: d.length
                        }) : p.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                            count: d.length
                        })
                    })
                }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [f, null != E || null != S ? (0, l.jsxs)("div", {
                        className: m.optionals,
                        children: [E, S]
                    }) : null]
                })
            }

            function S(e) {
                var t, n, r;
                let s, {
                        command: u,
                        activeOptionName: d,
                        channel: p,
                        showOptions: h,
                        showImage: S,
                        optionStates: g,
                        onOptionClick: T,
                        section: v,
                        isSelectable: C = !0
                    } = e,
                    y = i.useMemo(() => {
                        var e;
                        return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
                    }, [d, u]),
                    I = null != d ? null == g ? void 0 : g[d] : null;
                s = null != I && (null === (t = I.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = I.lastValidationResult.error) && void 0 !== n ? n : "" : null;
                let N = S && null != v ? (0, c.getIconComponent)(v) : null;
                return (0, l.jsxs)("div", {
                    className: o(m.wrapper, C ? null : m.disabled),
                    children: [null != N ? (0, l.jsx)(N, {
                        className: m.image,
                        channel: p,
                        section: v,
                        width: 32,
                        height: 32
                    }) : null, (0, l.jsxs)("div", {
                        className: m.infoWrapper,
                        children: [(0, l.jsxs)("div", {
                            className: m.usageWrapper,
                            children: [(0, l.jsx)(a.AutocompleteRowHeading, {
                                className: m.title,
                                children: f.COMMAND_SENTINEL + u.displayName
                            }), h ? (0, l.jsx)(E, {
                                command: u,
                                optionStates: g,
                                onOptionClick: T
                            }) : null]
                        }), (0, l.jsx)(a.AutocompleteRowSubheading, {
                            className: o(m.description, null != s ? m.error : null),
                            children: null !== (r = null != s ? s : null == y ? void 0 : y.displayDescription) && void 0 !== r ? r : u.displayDescription
                        })]
                    }), (0, l.jsx)(a.AutocompleteRowContentSecondary, {
                        className: m.source,
                        children: null == v ? void 0 : v.name
                    })]
                })
            }
        },
        286217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("258078"),
                a = n("504515");

            function u(e) {
                var t;
                let {
                    name: n,
                    className: i,
                    state: u,
                    isInline: d,
                    onClick: c
                } = e, f = n + (d ? ":" : ""), p = null, m = s.default.Colors.HEADER_PRIMARY;
                (null == u ? void 0 : u.isActive) && !d ? p = a.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? p = a.error : (null == u ? void 0 : u.hasValue) && !d && (p = a.set);
                let h = (0, l.jsx)(s.default, {
                    size: d ? s.default.Sizes.SIZE_16 : s.default.Sizes.SIZE_14,
                    color: m,
                    className: r(a.option, {
                        [a.inline]: d
                    }, p, i),
                    children: f
                });
                return null == c ? h : (0, l.jsx)(o.Clickable, {
                    className: a.clickable,
                    onClick: () => c(n),
                    children: h
                })
            }
        },
        41884: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n.n(r),
                s = n("355263"),
                a = n("406122"),
                u = e => {
                    let {
                        showImage: t
                    } = e, {
                        usageWidth: n,
                        descriptionWidth: r,
                        sourceWidth: u
                    } = i.useMemo(() => ({
                        usageWidth: o.random(60, 120),
                        descriptionWidth: o.random(200, 600),
                        sourceWidth: o.random(45, 90)
                    }), []);
                    return (0, l.jsxs)("div", {
                        className: a.wrapper,
                        children: [t ? (0, l.jsx)("div", {
                            className: a.image
                        }) : null, (0, l.jsxs)("div", {
                            className: a.infoWrapper,
                            children: [(0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(n)
                                },
                                className: a.usageWrapper
                            }), (0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(r)
                                },
                                className: a.description
                            })]
                        }), (0, l.jsx)("div", {
                            style: {
                                width: (0, s.pxToRem)(u)
                            },
                            className: a.source
                        })]
                    })
                }
        },
        396465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("798609"),
                o = n("200294"),
                s = n("851745"),
                a = n("501536"),
                u = n("124299"),
                d = n("240249"),
                c = n("524768"),
                f = n("529190"),
                p = n("41884"),
                m = n("406291"),
                h = n("782340"),
                E = n("253184");

            function S(e) {
                let {
                    query: t,
                    onHover: n,
                    onClick: S,
                    channel: g,
                    selectedIndex: T
                } = e, v = i.useRef(null), {
                    commands: C,
                    sections: y,
                    scrollDown: I
                } = d.useQuery(g, {
                    commandType: r.ApplicationCommandType.CHAT,
                    text: t
                }, {
                    limit: s.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: s.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    sortByScore: !0
                }), N = i.useCallback(e => {
                    var t;
                    if (null == C) return null;
                    let i = C[e],
                        r = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : e;
                    if (null == i || i.inputType === c.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(p.default, {}, r);
                    let o = y.find(e => e.id === i.applicationId);
                    return (0, l.jsx)(a.default.NewCommand, {
                        index: e,
                        command: i,
                        channel: g,
                        className: E.itemWrapper,
                        selected: T === e,
                        showImage: !0,
                        section: o,
                        onClick: S,
                        onHover: n
                    }, r)
                }, [g, C, y, S, n, T]);
                return null == C || 0 === C.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, o.renderHeader)({
                        titleWithQuery: h.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: h.default.Messages.COMMANDS,
                        query: t,
                        getQuery: e => "".concat(m.COMMAND_SENTINEL).concat(e)
                    }), (0, l.jsx)(u.default, {
                        ref: v,
                        role: "listbox",
                        className: E.list,
                        listPadding: [0, 8, 0, 8],
                        onScroll: e => {
                            if (null == C) return;
                            let t = C.length * f.ITEM_HEIGHT,
                                n = v.current.getListDimensions().height;
                            t - e - n < 9 * f.ITEM_HEIGHT && I()
                        },
                        renderRow: N,
                        rowCount: C.length,
                        rowHeight: f.ITEM_HEIGHT
                    })]
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return a
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var l = n("524768"),
                i = n("991630"),
                r = n("943161"),
                o = n("317041");
            let s = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? r.default : i.default;

            function a(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    l = !1,
                    i = t.indexOf(":");
                if (i >= 0) {
                    let e = t.lastIndexOf(" ", i);
                    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, i)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", o.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > o.MAX_SUBCOMMAND_LEVEL && (l = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: l
                }
            }
        },
        829290: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowPTONotice: function() {
                    return S
                },
                StaffPTOBar: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("913144"),
                s = n("42203"),
                a = n("26989"),
                u = n("18494"),
                d = n("697218"),
                c = n("381546"),
                f = n("782340"),
                p = n("387213");
            let m = new Set;
            class h extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (m = new Set(e))
                }
                hasId(e) {
                    return m.has(e)
                }
                getState() {
                    return [...m]
                }
            }
            h.displayName = "PTOStore", h.persistKey = "PTOStore";
            let E = new h(o.default, {}),
                S = e => (0, i.useStateFromStores)([a.default, d.default, E], () => {
                    let t = d.default.getCurrentUser();
                    if (null == t || !t.isStaff() || !e.isDM()) return !1;
                    let n = d.default.getUser(e.getRecipientId());
                    if (!(null == n ? void 0 : n.isStaff())) return !1;
                    let l = a.default.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !E.hasId(n.id) && l : (m.delete(n.id) && E.emitChange(), !1)
                }),
                g = () => (0, l.jsxs)("div", {
                    className: p.bar,
                    children: [f.default.Messages.STAFF_PTO_NOTICE, (0, l.jsx)(r.Clickable, {
                        className: p.closeButton,
                        onClick: () => {
                            let e = u.default.getChannelId();
                            if (null == e) return;
                            let t = s.default.getChannel(e);
                            null != t && t.isPrivate() && !m.has(t.getRecipientId()) && (m.add(t.getRecipientId()), E.emitChange())
                        },
                        children: (0, l.jsx)(c.default, {
                            className: p.closeIcon
                        })
                    })]
                })
        },
        758650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutocompleteUpsellExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-07_autocomplete_emojis_nitro_upsell",
                label: "Autocomplete Emojis Nitro Upsell",
                defaultConfig: {
                    emojiAutocompleteUpsellEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show emoji autocomplete upsell",
                    config: {
                        emojiAutocompleteUpsellEnabled: !0
                    }
                }]
            })
        },
        511104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PREFIX_COMMAND_REGEX: function() {
                    return l
                },
                BOT_MENTION_COMMAND_REGEX: function() {
                    return i
                }
            });
            let l = /^(?:(?:(?:[A-Za-z!$%?;+.=\-~]{1,2})[@#>]{1,3})|(?:(?:[A-Za-z]{1,2})?(?:~|[!$%?;+.=-]{1,3})))[A-Za-z]/u,
                i = /^<@!?(\d+)>/u
        },
        418062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-07_popout_autocomplete",
                label: "Popout Autocomplete experiment",
                defaultConfig: {
                    usePopoutAutocomplete: !1
                },
                treatments: [{
                    id: 1,
                    label: "New autocomplete style",
                    config: {
                        usePopoutAutocomplete: !0
                    }
                }]
            })
        },
        842343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("446674"),
                u = n("77078"),
                d = n("296141"),
                c = n("305961"),
                f = n("501536"),
                p = n("476765"),
                m = n("983782"),
                h = n("659186"),
                E = n("418062"),
                S = n("851745"),
                g = n("280214"),
                T = n("497858"),
                v = n("551221"),
                C = i.forwardRef(function(e, t) {
                    var n, r, C, y, I, N;
                    let {
                        channel: _,
                        type: x,
                        editorHeight: A,
                        onVisibilityChange: O
                    } = e, R = (0, p.useUID)(), b = (0, a.useStateFromStores)([c.default], () => null !== (r = c.default.getGuild(_.guild_id)) && void 0 !== r ? r : null, [_.guild_id]), k = i.useRef(), [M, P, L] = (0, T.default)({
                        ...e,
                        guild: b
                    }, t, k), U = (null === (n = x.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? h.default : m.default, D = (0, f.getAutocompleteRowId)(M.selectedIndex);
                    (0, d.useChannelEditorPopup)(R, M.isVisible, D), E.default.trackExposure({
                        location: "6e9811_1"
                    });
                    let {
                        usePopoutAutocomplete: j
                    } = E.default.useExperiment({
                        location: "6e9811_2"
                    }, {
                        autoTrackExposure: !1
                    }), w = (0, g.useChannelAutocompleteLayerPosition)({
                        editorHeight: A,
                        type: x,
                        state: M,
                        isInPopoutExperiment: j
                    }), B = i.useMemo(() => null == w ? "" : String(Date.now()), [null == w ? void 0 : w.top, null == w ? void 0 : w.left, null == w ? void 0 : w.bottom, null == w ? void 0 : w.right]);
                    if (i.useEffect(() => {
                            O(M.isVisible)
                        }, [O, M.isVisible]), !M.isVisible || null == M.query || void 0 === w) return null;
                    let K = null !== (C = M.query.typeInfo.renderResults({
                        results: M.query.results,
                        selectedIndex: M.selectedIndex,
                        channel: _,
                        guild: b,
                        query: M.query.queryText,
                        options: M.query.options,
                        onHover: e => P.onResultHover(e),
                        onClick: e => P.onResultClick(e)
                    })) && void 0 !== C ? C : null;
                    if (null == K) return null;
                    let F = {
                            [v.autocompleteAttached]: null == w,
                            [v.autocompletePopout]: null != w,
                            [v.bottom]: null == w && "bottom" === e.position
                        },
                        G = 490;
                    null != w && (G = (null === (y = x.autocomplete) || void 0 === y ? void 0 : y.small) ? 200 : (null === (I = M.query) || void 0 === I ? void 0 : I.type) === S.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245);
                    let V = (0, l.jsx)(f.default, {
                        id: R,
                        className: o(v.autocomplete, F),
                        innerClassName: v.autocompleteInner,
                        onMouseDown: e => e.preventDefault(),
                        children: (0, l.jsx)(s.ListNavigatorProvider, {
                            navigator: L,
                            children: (0, l.jsx)(s.ListNavigatorContainer, {
                                children: e => {
                                    let {
                                        ref: t,
                                        ...n
                                    } = e;
                                    return (0, l.jsx)(u.AdvancedScrollerThin, {
                                        id: R,
                                        ref: e => {
                                            var n;
                                            t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, k.current = e
                                        },
                                        ...n,
                                        className: v.scroller,
                                        style: {
                                            maxHeight: G
                                        },
                                        role: "listbox",
                                        "aria-labelledby": (0, f.getAutocompleteTitleId)(R),
                                        children: K
                                    })
                                }
                            })
                        })
                    });
                    return null != w ? (0, l.jsx)(U, {
                        children: (0, l.jsx)(u.ReferencePositionLayer, {
                            reference: () => w,
                            positionKey: B,
                            position: null !== (N = e.position) && void 0 !== N ? N : "top",
                            align: "left",
                            spacing: 8,
                            autoInvert: !0,
                            nudgeAlignIntoViewport: !0,
                            children: () => V
                        })
                    }) : V
                })
        },
        234246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createInitialState: function() {
                    return f
                },
                default: function() {
                    return p
                }
            });
            var l = n("44170"),
                i = n("362544"),
                r = n("507217"),
                o = n("834725"),
                s = n("252931"),
                a = n("845579"),
                u = n("697218"),
                d = n("851745"),
                c = n("962254");

            function f() {
                return {
                    query: null,
                    selectedIndex: null,
                    isVisible: !1,
                    didInitialQuery: !1
                }
            }
            class p extends l.EventEmitter {
                updateProps(e) {
                    let t = this.props.focused !== e.focused,
                        n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
                        l = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
                    if (this.props = e, n || l) this.updateResults(l, n), !this.state.didInitialQuery && (this.state = {
                        ...this.state,
                        didInitialQuery: !0
                    });
                    else if (t) {
                        let e = this.state.query;
                        this.setState({
                            isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
                        })
                    }
                }
                setSelectedIndex(e) {
                    this.setState({
                        selectedIndex: e
                    })
                }
                onTabOrEnter(e) {
                    if (!this.state.isVisible) return !1;
                    if (null == this.state.selectedIndex) {
                        var t;
                        let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
                        return !e && (n === d.FocusMode.MANUAL || n === d.FocusMode.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
                    }
                    return this.selectResult(this.state.selectedIndex, e, !0)
                }
                onMoveSelection(e) {
                    var t, n;
                    if (!this.state.isVisible) return !1;
                    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === d.AutocompleteOptionTypes.COMMANDS) {
                        let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
                        null != e && r.setPreferredCommandId(this.props.channel.id, e.id)
                    }
                    return !0
                }
                onMaybeShowAutocomplete() {
                    this.emit("update")
                }
                onHideAutocomplete() {
                    let e = this.state.query;
                    null != e && this.setState({
                        isVisible: !1
                    })
                }
                onResultHover(e) {
                    this.props.navigator.setFocus(null), this.setSelectedIndex(null)
                }
                onResultClick(e) {
                    this.selectResult(e, !0)
                }
                clearQuery() {
                    this.setState({
                        query: null,
                        isVisible: !1,
                        selectedIndex: null
                    })
                }
                queryResults() {
                    this.updateResults()
                }
                isVisible() {
                    return this.state.isVisible
                }
                updateResults() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == this.props.editorRef.current) return;
                    let r = (0, c.getOptions)(this.props),
                        f = (0, c.findMatchingAutocompleteType)({
                            channel: this.props.channel,
                            guild: this.props.guild,
                            options: r,
                            currentWord: this.props.currentWord,
                            currentWordIsAtStart: this.props.currentWordIsAtStart,
                            textValue: this.props.textValue,
                            optionText: this.props.optionText
                        }),
                        p = r.commands !== d.CommandMode.DISABLED ? (0, c.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
                    if (null == f && null != p) f = p;
                    else if (null == f || null != p && f.type !== p.type) {
                        this.clearQuery();
                        return
                    }
                    let {
                        type: m,
                        typeInfo: h,
                        query: E
                    } = f, S = l || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== E || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== h), {
                        hideStickers: g
                    } = i.FullyEmojiAutocompleteExperiment.getCurrentConfig({
                        location: "5abe44_1"
                    }), T = u.default.getCurrentUser(), v = (0, s.getInventoryGuildPacksUserExperimentConfig)({
                        user: T,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled;
                    r.canViewAndUsePackEmoji = v;
                    let C = a.IncludeStickersInAutocomplete.getSetting();
                    r.allowStickers = r.allowStickers ? !g || C : r.allowStickers;
                    let {
                        results: y,
                        metadata: I
                    } = h.queryResults(this.props.channel, this.props.guild, E, r, S), N = 0;
                    for (let e of Object.values(y)) Array.isArray(e) && (N += e.length);
                    let _ = !0 === y.isLoading,
                        x = this.shouldShow(N, _, h),
                        A = this.state.selectedIndex;
                    !x || _ ? A = null : null != A && A >= N && (A = N - 1), x && !this.state.isVisible && (0, o.trackAutocompleteOpen)(m, this.props.channel, I), this.setState({
                        query: {
                            type: m,
                            typeInfo: h,
                            queryText: E,
                            results: y,
                            resultCount: N,
                            options: r,
                            isLoading: _
                        },
                        isVisible: x,
                        selectedIndex: A
                    })
                }
                shouldShow(e, t, n) {
                    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
                }
                selectResult(e, t, n) {
                    var l, i, r;
                    if (!this.state.isVisible) return !1;
                    let {
                        type: s,
                        typeInfo: a,
                        results: u,
                        resultCount: c,
                        options: f
                    } = this.state.query;
                    if (e >= c) return !1;
                    let p = null === (i = a.onSelect) || void 0 === i ? void 0 : i.call(a, {
                        results: u,
                        index: e,
                        type: t ? d.SelectType.SEND : d.SelectType.INSERT,
                        options: f,
                        channel: this.props.channel,
                        tabOrEnter: n,
                        queryText: null === (l = this.state.query) || void 0 === l ? void 0 : l.queryText
                    });
                    return null != p && (0, o.trackAutocompleteSelect)(s, null !== (r = p.type) && void 0 !== r ? r : null, this.props.channel, p.metadata), !0
                }
                setState(e) {
                    for (let t in e)
                        if (e[t] !== this.state[t]) {
                            this.state = {
                                ...this.state,
                                ...e
                            }, this.emit("change", this.state);
                            return
                        }
                }
                constructor(e) {
                    super(), this.props = e, this.state = f()
                }
            }
        },
        237700: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOCOMPLETE_PRIORITY: function() {
                    return p
                },
                AUTOCOMPLETE_OPTIONS: function() {
                    return m
                }
            });
            var l = n("851745"),
                i = n("76942"),
                r = n("825871"),
                o = n("116189"),
                s = n("714343"),
                a = n("84872"),
                u = n("729079"),
                d = n("845247"),
                c = n("122270"),
                f = n("684396");
            let p = [l.AutocompleteOptionTypes.CHOICES, l.AutocompleteOptionTypes.GIFS, l.AutocompleteOptionTypes.COMMAND_OPTIONS, l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, l.AutocompleteOptionTypes.REACTIONS, l.AutocompleteOptionTypes.CHANNELS, l.AutocompleteOptionTypes.MENTIONS, l.AutocompleteOptionTypes.COMMANDS, l.AutocompleteOptionTypes.LEGACY_COMMANDS],
                m = {
                    [l.AutocompleteOptionTypes.CHANNELS]: i.default,
                    [l.AutocompleteOptionTypes.COMMANDS]: r.default,
                    [l.AutocompleteOptionTypes.COMMAND_OPTIONS]: s.default,
                    [l.AutocompleteOptionTypes.CHOICES]: o.default,
                    [l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: a.default,
                    [l.AutocompleteOptionTypes.GIFS]: u.default,
                    [l.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
                    [l.AutocompleteOptionTypes.MENTIONS]: c.default,
                    [l.AutocompleteOptionTypes.REACTIONS]: f.default
                }
        },
        200294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderHeader: function() {
                    return o
                },
                renderAutocompleteGroup: function() {
                    return s
                }
            });
            var l = n("37983"),
                i = n("884691");
            n("41170");
            var r = n("501536");

            function o(e) {
                let {
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: i,
                    getQuery: o,
                    headerClassName: s,
                    headerTrailingContent: a
                } = e, u = i.length > 0 ? t.format({
                    prefix: o(i)
                }) : n;
                return (0, l.jsx)(r.default.Title, {
                    className: s,
                    title: u,
                    children: a
                }, "autocomplete-title-".concat(u))
            }

            function s(e) {
                let {
                    query: t,
                    selectedIndex: n,
                    autocompletes: r,
                    onHover: s,
                    onClick: a,
                    titleWithQuery: u,
                    titleWithoutQuery: d,
                    Component: c,
                    getProps: f,
                    getQuery: p,
                    key: m,
                    indexOffset: h = 0,
                    headerClassName: E,
                    headerTrailingContent: S,
                    footer: g
                } = e;
                if (null == g && (null == r || 0 === r.length)) return null;
                let T = null == r ? void 0 : r.map((e, t) => {
                    let l = t + h,
                        r = f(e, l);
                    return (0, i.createElement)(c, {
                        onClick: a,
                        onHover: s,
                        selected: n === l,
                        index: l,
                        ...r,
                        key: r.key
                    })
                });
                return (0, l.jsxs)(i.Fragment, {
                    children: [null != u && null != d ? o({
                        titleWithQuery: u,
                        titleWithoutQuery: d,
                        query: t,
                        getQuery: p,
                        headerClassName: E,
                        headerTrailingContent: S
                    }) : null, T, g]
                }, m)
            }
        },
        851745: function(e, t, n) {
            "use strict";
            var l, i, r, o, s, a, u, d, c, f, p, m, h, E, S, g, T, v, C, y;
            n.r(t), n.d(t, {
                MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
                    return I
                },
                MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
                    return N
                },
                GlobalMentionMode: function() {
                    return l
                },
                UserMentionMode: function() {
                    return i
                },
                RoleMentionMode: function() {
                    return r
                },
                ChannelMentionMode: function() {
                    return o
                },
                ClydeMentionMode: function() {
                    return s
                },
                CommandMode: function() {
                    return a
                },
                SelectType: function() {
                    return u
                },
                AutocompleteOptionTypes: function() {
                    return d
                },
                AutocompleteSelectionTypes: function() {
                    return c
                },
                FocusMode: function() {
                    return f
                }
            });
            let I = 3,
                N = 7;
            (p = l || (l = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", p[p.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (m = i || (i = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", m[m.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = r || (r = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (E = o || (o = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (S = s || (s = {}))[S.DENY = 0] = "DENY", S[S.ALLOW = 1] = "ALLOW", (g = a || (a = {}))[g.DISABLED = 0] = "DISABLED", g[g.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", g[g.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", g[g.NEW = 3] = "NEW", (T = u || (u = {}))[T.INSERT = 0] = "INSERT", T[T.SEND = 1] = "SEND", (v = d || (d = {})).MENTIONS = "MENTIONS", v.CHANNELS = "CHANNELS", v.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", v.REACTIONS = "REACTIONS", v.GIFS = "GIFS", v.LEGACY_COMMANDS = "LEGACY_COMMANDS", v.COMMANDS = "COMMANDS", v.COMMAND_OPTIONS = "COMMAND_OPTIONS", v.CHOICES = "CHOICES", (C = c || (c = {})).MENTION = "MENTION", C.CHANNEL = "CHANNEL", C.EMOJI = "EMOJI", C.STICKER = "STICKER", C.REACTION = "REACTION", C.GIF = "GIF", C.COMMAND = "COMMAND", C.COMMAND_OPTION = "COMMAND_OPTION", C.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", C.CHOICE = "CHOICE", C.EMOJI_UPSELL = "EMOJI_UPSELL", (y = f || (f = {}))[y.AUTO = 0] = "AUTO", y[y.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", y[y.MANUAL = 2] = "MANUAL"
        },
        962254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getOptions: function() {
                    return d
                },
                findMatchingAutocompleteType: function() {
                    return f
                },
                findCommandOptionAutocompleteType: function() {
                    return p
                }
            });
            var l = n("798609"),
                i = n("389153"),
                r = n("149022"),
                o = n("765969"),
                s = n("557562"),
                a = n("237700"),
                u = n("851745");

            function d(e) {
                var t;
                let {
                    activeCommandOption: n,
                    canMentionUsers: o = !0,
                    canMentionRoles: s = !0,
                    canMentionChannels: a = !0,
                    canMentionEveryone: d,
                    canMentionClyde: c = !1,
                    useNewSlashCommands: f,
                    canOnlyUseTextCommands: p,
                    canSendStickers: m,
                    hideMentionDescription: h,
                    hidePersonalInformation: E,
                    type: S,
                    emojiIntention: g,
                    editorRef: T,
                    onSendMessage: v,
                    onSendSticker: C,
                    setValue: y
                } = e, I = {
                    mentions: {
                        channel: u.ChannelMentionMode.DENY,
                        global: u.GlobalMentionMode.DENY,
                        role: u.RoleMentionMode.DENY,
                        user: u.UserMentionMode.DENY,
                        clyde: u.ClydeMentionMode.DENY
                    },
                    commands: u.CommandMode.DISABLED,
                    allowStickers: !0 === m,
                    forNonStringCommandOption: null != n && n.type !== l.ApplicationCommandOptionType.STRING,
                    hideMentionDescription: !0 === h,
                    hidePersonalInformation: !0 === E,
                    chatInputType: S,
                    emojiIntention: g,
                    sendMessage: v,
                    sendSticker: C,
                    insertText: (e, t) => {
                        var n;
                        null === (n = T.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
                    },
                    replaceText: (e, t) => {
                        y(e, null != t ? t : (0, r.toRichValue)(e))
                    },
                    getCommandOptionValues: () => {
                        var e;
                        return null === (e = T.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
                    }
                };
                if (null != n) {
                    let e = (0, i.getApplicationCommandOptionQueryOptions)(n);
                    e.canMentionChannels && (I.mentions.channel = u.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (I.mentions.global = e.canMentionHere ? u.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : u.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (I.mentions.role = e.canMentionNonMentionableRoles ? u.RoleMentionMode.ALLOW_ALL : u.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (I.mentions.user = e.canMentionAnyGuildUser ? u.UserMentionMode.ALLOW_GUILD : u.UserMentionMode.ALLOW_CHANNEL), I.hideMentionDescription = !0
                } else a && (I.mentions.channel = u.ChannelMentionMode.ALLOW_SELECTABLE), s && (I.mentions.role = u.RoleMentionMode.ALLOW_MENTIONABLE), o && (I.mentions.user = u.UserMentionMode.ALLOW_CHANNEL), d && (I.mentions.global = u.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (I.mentions.clyde = u.ClydeMentionMode.ALLOW);
                return (null === (t = S.commands) || void 0 === t ? void 0 : t.enabled) && (f ? I.commands = p ? u.CommandMode.NEW_TEXT_ONLY : u.CommandMode.NEW : I.commands = u.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (I.allowedChannelTypes = n.channelTypes), I
            }

            function c(e) {
                let {
                    type: t,
                    channel: n,
                    guild: l,
                    query: i,
                    isAtStart: r,
                    options: o
                } = e, s = a.AUTOCOMPLETE_OPTIONS[t];
                if (null != s.sentinel) {
                    if (!i.startsWith(s.sentinel)) return !1;
                    i = i.substring(s.sentinel.length)
                }
                return !!(null == s.matches || s.matches(n, l, i, r, o)) || !1
            }

            function f(e) {
                let {
                    channel: t,
                    guild: n,
                    options: l,
                    currentWord: i,
                    currentWordIsAtStart: r,
                    textValue: d,
                    optionText: f
                } = e, p = null;
                for (let e of a.AUTOCOMPLETE_PRIORITY) {
                    var m, h, E, S, g, T;
                    let v = a.AUTOCOMPLETE_OPTIONS[e];
                    if (e === u.AutocompleteOptionTypes.GIFS || e === u.AutocompleteOptionTypes.CHOICES) {
                        if (l.commands === u.CommandMode.OLD_BUILT_INS) {
                            if (c({
                                    type: e,
                                    channel: t,
                                    guild: n,
                                    query: d,
                                    isAtStart: !1,
                                    options: l
                                })) {
                                p = {
                                    type: e,
                                    typeInfo: v,
                                    query: d
                                };
                                break
                            }
                        } else if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: f,
                                isAtStart: !1,
                                options: l
                            })) return {
                            type: e,
                            typeInfo: v,
                            query: f
                        }
                    } else if (e === u.AutocompleteOptionTypes.COMMANDS && l.commands !== u.CommandMode.OLD_BUILT_INS) {
                        if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: d,
                                isAtStart: !0,
                                options: l
                            })) {
                            p = {
                                type: e,
                                typeInfo: v,
                                query: d.substring(null !== (h = null === (m = v.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0)
                            };
                            break
                        }
                    } else if (e === u.AutocompleteOptionTypes.LEGACY_COMMANDS) {
                        if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: d,
                                isAtStart: r,
                                options: l
                            })) {
                            p = {
                                type: e,
                                typeInfo: v,
                                query: d
                            };
                            break
                        }
                    } else if (e === u.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                        if (null != i && i.length > 0 && ((0, s.maybeGetPacksForUser)("autocomplete"), (0, o.maybeGetEmojiCaptionsForUser)("autocomplete")), null != i && c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: i,
                                isAtStart: r,
                                options: l
                            })) {
                            p = {
                                type: e,
                                typeInfo: v,
                                query: i.substring(null !== (S = null === (E = v.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== S ? S : 0)
                            };
                            break
                        }
                    } else if (null != i && c({
                            type: e,
                            channel: t,
                            guild: n,
                            query: i,
                            isAtStart: r,
                            options: l
                        })) {
                        p = {
                            type: e,
                            typeInfo: v,
                            query: i.substring(null !== (T = null === (g = v.sentinel) || void 0 === g ? void 0 : g.length) && void 0 !== T ? T : 0)
                        };
                        break
                    }
                }
                return null == p ? null : (p.query = p.query.toLocaleLowerCase(), p)
            }

            function p(e, t) {
                let n;
                if (null == t || null == e) return null;
                if (null != e.choices || e.autocomplete) n = u.AutocompleteOptionTypes.CHOICES;
                else switch (e.type) {
                    case l.ApplicationCommandOptionType.BOOLEAN:
                        n = u.AutocompleteOptionTypes.CHOICES;
                        break;
                    case l.ApplicationCommandOptionType.CHANNEL:
                        n = u.AutocompleteOptionTypes.CHANNELS;
                        break;
                    case l.ApplicationCommandOptionType.ROLE:
                    case l.ApplicationCommandOptionType.USER:
                    case l.ApplicationCommandOptionType.MENTIONABLE:
                        n = u.AutocompleteOptionTypes.MENTIONS;
                        break;
                    default:
                        return null
                }
                let i = a.AUTOCOMPLETE_OPTIONS[n];
                return {
                    type: n,
                    typeInfo: i,
                    query: t
                }
            }
        },
        404345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("685665"),
                o = n("563911"),
                s = n("587974"),
                a = n("599110"),
                u = n("49111"),
                d = n("646718"),
                c = n("782340"),
                f = n("104234"),
                p = e => {
                    let {
                        emojis: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, r.default)();
                    i.useEffect(() => {
                        a.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                            location_stack: n
                        })
                    }, [n]);
                    let p = (0, l.jsx)("div", {
                        className: f.emojis,
                        children: t.slice(0, 3).map((e, t) => {
                            if ("" === e.url) return null;
                            let n = (0, l.jsx)("div", {
                                className: f.emojiBackground,
                                children: (0, l.jsx)("img", {
                                    alt: e.name,
                                    className: f.emoji,
                                    src: e.url
                                })
                            }, e.id);
                            return 2 === t ? n : (0, l.jsx)(s.default, {
                                className: f.emojiMask,
                                mask: s.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                                children: n
                            }, e.id)
                        })
                    });
                    return (0, l.jsxs)(o.AutocompleteRowContent, {
                        className: f.upsell,
                        children: [(0, l.jsx)(o.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(o.AutocompleteRowHeading, {
                                children: c.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                                    count: t.length
                                })
                            })
                        }), (0, l.jsx)(o.AutocompleteRowContentSecondary, {
                            children: p
                        })]
                    })
                }
        },
        76942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("298386"),
                i = n("123225"),
                r = n("679653"),
                o = n("42203"),
                s = n("923959"),
                a = n("501536"),
                u = n("25292"),
                d = n("200294"),
                c = n("851745"),
                f = n("406291"),
                p = n("724210"),
                m = n("782340");
            let h = {
                sentinel: f.CHANNEL_SENTINEL,
                matches: (e, t, n, l, i) => i.mentions.channel !== c.ChannelMentionMode.DENY && !e.isPrivate(),
                queryResults(e, t, n, l, r) {
                    let o, a, d = s.GUILD_SELECTABLE_CHANNELS_KEY;
                    return n.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = s.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), l.forNonStringCommandOption ? o = u.default.queryApplicationCommandChannelResults({
                        query: n,
                        channel: e,
                        channelTypes: l.allowedChannelTypes
                    }) : (o = u.default.queryChannelResults({
                        query: n,
                        channel: e,
                        type: d
                    }), null != t && (a = u.default.queryStaticRouteChannels({
                        query: n,
                        guild: t
                    }), o.channels.unshift(...a))), {
                        results: o,
                        staticRouteChannels: a
                    }
                },
                renderResults(e) {
                    let t, n, {
                            results: {
                                channels: l
                            },
                            selectedIndex: r,
                            query: s,
                            options: u,
                            onHover: c,
                            onClick: p
                        } = e,
                        h = s.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL;
                    return h ? (t = m.default.Messages.VOICE_CHANNELS_MATCHING, n = m.default.Messages.VOICE_CHANNELS, s = s.substring(1)) : u.forNonStringCommandOption ? (t = m.default.Messages.CHANNELS_MATCHING, n = m.default.Messages.CHANNELS) : (t = m.default.Messages.TEXT_CHANNELS_MATCHING, n = m.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
                        query: s,
                        selectedIndex: r,
                        autocompletes: l,
                        onHover: c,
                        onClick: p,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: a.default.Channel,
                        getProps: e => ({
                            channel: e,
                            key: e.id,
                            category: o.default.getChannel(e.parent_id)
                        }),
                        getQuery: e => h ? "".concat(f.CHANNEL_SENTINEL).concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(f.CHANNEL_SENTINEL).concat(e),
                        key: "channels"
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            channels: t
                        },
                        index: n,
                        options: i
                    } = e, o = t[n];
                    return i.insertText(function(e) {
                        switch (e.type) {
                            case l.ChannelTypes.PUBLIC_THREAD:
                            case l.ChannelTypes.PRIVATE_THREAD:
                            case l.ChannelTypes.ANNOUNCEMENT_THREAD:
                            case l.ChannelTypes.GUILD_VOICE:
                            case l.ChannelTypes.GUILD_STAGE_VOICE:
                            case l.ChannelTypes.GUILD_CATEGORY:
                                return '#"'.concat((0, r.escapeChannelName)(e.name), '"');
                            default:
                                let t = s.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                return "#".concat(null != t ? t.name : e.name)
                        }
                    }(o), function(e) {
                        return p.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
                    }(o)), {
                        type: c.AutocompleteSelectionTypes.CHANNEL
                    }
                }
            };
            var E = h
        },
        825871: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMPTY_RESULTS: function() {
                    return x
                },
                FakeFooter: function() {
                    return A
                },
                default: function() {
                    return b
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("271841"),
                r = n("551042"),
                o = n("798609"),
                s = n("507217"),
                a = n("589777"),
                u = n("988721"),
                d = n("240249"),
                c = n("166004"),
                f = n("383018"),
                p = n("524768"),
                m = n("389153"),
                h = n("396465"),
                E = n("355263"),
                S = n("957255"),
                g = n("501536"),
                T = n("655518"),
                v = n("200294"),
                C = n("851745"),
                y = n("406291"),
                I = n("317041"),
                N = n("782340"),
                _ = n("94885");
            let x = {
                results: {
                    entries: []
                }
            };

            function A() {
                return d.useSearchOpenState(), null
            }

            function O() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("496896").then(n.bind(n, "496896"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }
            let R = {
                sentinel: y.COMMAND_SENTINEL,
                stores: [f.default, c.default, u.default, S.default],
                matches: (e, t, n, l, i) => i.commands !== C.CommandMode.DISABLED && null == f.default.getActiveCommand(e.id) && (l || i.commands !== C.CommandMode.OLD_BUILT_INS),
                queryResults(e, t, n, l, i) {
                    if (0 === n.length && l.commands !== C.CommandMode.OLD_BUILT_INS) return x;
                    if (l.commands === C.CommandMode.OLD_BUILT_INS) {
                        let l = (0, a.getBuiltInCommands)(o.ApplicationCommandType.CHAT, !1, !1),
                            i = RegExp("^".concat(T.default.escape(n)), "i"),
                            r = (0, m.getMatchingGroupCommands)(l, i, {
                                channel: e,
                                guild: t
                            }, C.MAX_COMMAND_AUTOCOMPLETE_RESULTS),
                            s = a.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN];
                        return 0 === r.length ? x : {
                            results: {
                                entries: r.map(e => ({
                                    command: e,
                                    section: s
                                }))
                            }
                        }
                    }
                    let r = (0, E.getCommandQuery)(e, n),
                        {
                            commands: s,
                            sections: u
                        } = d.executeQuery(e, {
                            commandType: o.ApplicationCommandType.CHAT,
                            text: r.text
                        }, {
                            limit: C.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                            placeholderCount: C.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                            sortByScore: !0,
                            allowFetch: i
                        });
                    if (null == s) return x;
                    let c = s;
                    if (r.hasSpaceTerminator) {
                        let e = r.text.trim(),
                            t = e + " ";
                        c = c.filter(n => n.name === e || n.name.startsWith(t))
                    }
                    return 0 === c.length ? x : {
                        results: {
                            entries: c.map(e => ({
                                command: e,
                                section: null == u ? void 0 : u.find(t => t.id === e.applicationId)
                            }))
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            entries: t
                        },
                        selectedIndex: n,
                        channel: r,
                        query: o,
                        options: s,
                        onHover: a,
                        onClick: u
                    } = e, c = (0, E.getCommandQuery)(r, o);
                    if (s.commands !== C.CommandMode.OLD_BUILT_INS && !d.isInIndexExperiment({
                            location: "CommandAutocompletes"
                        })) return (0, l.jsx)(h.default, {
                        channel: r,
                        query: c.text,
                        selectedIndex: n,
                        onHover: a,
                        onClick: u
                    });
                    let f = s.commands === C.CommandMode.OLD_BUILT_INS;
                    return (0, v.renderAutocompleteGroup)({
                        query: c.text,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: a,
                        onClick: u,
                        titleWithQuery: N.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: N.default.Messages.COMMANDS,
                        getQuery: e => "".concat(y.COMMAND_SENTINEL).concat(e),
                        Component: f ? g.default.Command : g.default.NewCommand,
                        getProps: e => {
                            let {
                                command: t,
                                section: n
                            } = e;
                            return {
                                key: t.id,
                                command: t,
                                channel: r,
                                guildId: r.guild_id,
                                showImage: !0,
                                section: n
                            }
                        },
                        key: "commands",
                        headerClassName: f ? _.legacyInputCommandHeader : null,
                        headerTrailingContent: f ? (0, l.jsx)(i.Button, {
                            type: "button",
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MIN,
                            onClick: O,
                            children: N.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                        }) : null,
                        footer: (0, l.jsx)(A, {})
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            entries: t
                        },
                        index: n,
                        queryText: l,
                        options: i,
                        channel: r,
                        location: o,
                        tabOrEnter: a
                    } = e, {
                        command: u,
                        section: d
                    } = t[n];
                    if (u.inputType === p.ApplicationCommandInputType.PLACEHOLDER) return null;
                    if (i.commands === C.CommandMode.OLD_BUILT_INS) i.insertText(function(e) {
                        return "".concat(y.COMMAND_SENTINEL).concat(e.name)
                    }(u));
                    else {
                        let e = o;
                        null == e && (e = a ? p.ApplicationCommandTriggerLocations.QUERY : p.ApplicationCommandTriggerLocations.DISCOVERY), s.setActiveCommand({
                            channelId: r.id,
                            command: u,
                            section: null != d ? d : null,
                            location: e,
                            queryLength: null == l ? void 0 : l.length
                        })
                    }
                    return {
                        type: C.AutocompleteSelectionTypes.COMMAND
                    }
                }
            };
            var b = R
        },
        116189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("917351"),
                r = n.n(i),
                o = n("96386"),
                s = n("798609"),
                a = n("246598"),
                u = n("383018"),
                d = n("916565"),
                c = n("501536"),
                f = n("25292"),
                p = n("200294"),
                m = n("851745"),
                h = n("317041"),
                E = n("782340"),
                S = n("269175"),
                g = n("327769");
            let T = {
                    results: {
                        choices: []
                    }
                },
                v = {
                    results: {
                        choices: [],
                        isLoading: !0
                    }
                },
                C = Array.from({
                    length: 5
                }, () => ({
                    name: "",
                    displayName: "",
                    value: ""
                })),
                y = {
                    results: {
                        choices: [],
                        isError: !0
                    }
                },
                I = r.debounce(d.default, h.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
                    leading: !0,
                    trailing: !0
                }),
                N = {
                    stores: [u.default, a.default],
                    showEmpty: !0,
                    matches(e, t, n, l, i) {
                        let r = u.default.getActiveOption(e.id);
                        return i.commands !== m.CommandMode.DISABLED && null != r && (r.type === s.ApplicationCommandOptionType.BOOLEAN || !!(null == r ? void 0 : r.autocomplete) || (null == r ? void 0 : r.choices) != null && r.choices.length > 0)
                    },
                    queryResults(e, t, n, l, i) {
                        var r;
                        let o = u.default.getActiveOption(e.id);
                        if (null == o) return T;
                        if (o.autocomplete) {
                            if (i) {
                                let i = u.default.getActiveCommand(e.id),
                                    r = l.getCommandOptionValues();
                                I({
                                    command: i,
                                    optionValues: r,
                                    context: {
                                        channel: e,
                                        guild: t,
                                        autocomplete: {
                                            name: o.name,
                                            query: n
                                        }
                                    }
                                })
                            }
                            let r = a.default.getLastErrored(e.id);
                            if (r) return y;
                            let s = a.default.getAutocompleteChoices(e.id, o.name, n);
                            return null == s ? v : {
                                results: {
                                    choices: s
                                }
                            }
                        }
                        let d = f.default.queryChoiceResults({
                            query: n,
                            choices: o.type === s.ApplicationCommandOptionType.BOOLEAN ? h.BOOLEAN_CHOICES : null !== (r = o.choices) && void 0 !== r ? r : []
                        });
                        return {
                            results: d
                        }
                    },
                    renderResults(e) {
                        let {
                            results: {
                                choices: t,
                                isLoading: n,
                                isError: i
                            },
                            selectedIndex: r,
                            query: s,
                            onHover: a,
                            onClick: u
                        } = e;
                        return i ? (0, l.jsx)(o.default, {
                            message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                            noResultsImageURL: g,
                            className: S.noAutocompleteResults
                        }) : 0 !== t.length || n ? (0, p.renderAutocompleteGroup)({
                            query: s,
                            selectedIndex: r,
                            autocompletes: n ? C : t,
                            onHover: a,
                            onClick: u,
                            titleWithQuery: E.default.Messages.OPTIONS_MATCHING,
                            titleWithoutQuery: E.default.Messages.OPTIONS,
                            Component: n ? c.default.Loading : c.default.Generic,
                            getProps: (e, t) => ({
                                key: t.toString(),
                                text: e.displayName
                            }),
                            getQuery: e => e,
                            key: "choice"
                        }) : (0, l.jsx)(o.default, {
                            message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                            noResultsImageURL: g,
                            className: S.noAutocompleteResults
                        })
                    },
                    onSelect(e) {
                        let {
                            results: {
                                choices: t
                            },
                            index: n,
                            options: l
                        } = e, i = t[n];
                        return l.insertText(function(e) {
                            return e.displayName
                        }(i)), {
                            type: m.AutocompleteSelectionTypes.CHOICE
                        }
                    }
                };
            var _ = N
        },
        714343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("383018"),
                r = n("501536"),
                o = n("200294"),
                s = n("851745"),
                a = n("782340");
            let u = {
                    results: {
                        commandOptions: []
                    }
                },
                d = {
                    stores: [i.default],
                    focusMode: s.FocusMode.AUTO_WHEN_FILTERED,
                    matches: (e, t, n, l, r) => !(l || null == i.default.getActiveCommand(e.id) || null != i.default.getActiveOption(e.id)),
                    queryResults(e, t, n, l, r) {
                        let o = i.default.getActiveCommand(e.id);
                        if ((null == o ? void 0 : o.options) == null) return u;
                        let s = i.default.getOptionStates(e.id),
                            a = o.options.filter(e => {
                                var t;
                                return e.displayName.startsWith(n) && !(null === (t = s[e.name]) || void 0 === t ? void 0 : t.hasValue)
                            });
                        return 0 === a.length ? u : {
                            results: {
                                commandOptions: a
                            }
                        }
                    },
                    renderResults(e) {
                        let {
                            results: {
                                commandOptions: t
                            },
                            selectedIndex: n,
                            query: i,
                            onHover: s,
                            onClick: u
                        } = e, d = [], c = [];
                        t.forEach(e => {
                            (e.required ? d : c).push(e)
                        });
                        let f = d.length > 0 ? (0, o.renderAutocompleteGroup)({
                                query: i,
                                selectedIndex: n,
                                autocompletes: d,
                                onHover: s,
                                onClick: u,
                                titleWithQuery: a.default.Messages.REQUIRED_OPTIONS_MATCHING,
                                titleWithoutQuery: a.default.Messages.REQUIRED_OPTIONS,
                                Component: r.default.Generic,
                                getProps: (e, t) => ({
                                    key: t.toString(),
                                    text: e.displayName,
                                    description: e.displayDescription
                                }),
                                getQuery: e => e,
                                key: "required-options"
                            }) : null,
                            p = c.length > 0 ? (0, o.renderAutocompleteGroup)({
                                query: i,
                                selectedIndex: n,
                                autocompletes: c,
                                onHover: s,
                                onClick: u,
                                titleWithQuery: a.default.Messages.OPTIONS_MATCHING,
                                titleWithoutQuery: d.length > 0 ? a.default.Messages.OTHER_OPTIONS : a.default.Messages.OPTIONS,
                                Component: r.default.Generic,
                                getProps: (e, t) => ({
                                    key: t.toString(),
                                    text: e.displayName,
                                    description: e.displayDescription
                                }),
                                getQuery: e => e,
                                key: "optional-options",
                                indexOffset: d.length
                            }) : null;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [f, p]
                        })
                    },
                    onSelect(e) {
                        let {
                            results: {
                                commandOptions: t
                            },
                            index: n,
                            options: l
                        } = e, i = t[n];
                        return l.insertText(function(e) {
                            return "".concat(e.displayName, ":")
                        }(i)), {
                            type: s.AutocompleteSelectionTypes.COMMAND_OPTION
                        }
                    }
                };
            var c = d
        },
        84872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("362544"),
                o = n("166465"),
                s = n("866353"),
                a = n("467094"),
                u = n("364685"),
                d = n("161585"),
                c = n("41170"),
                f = n("305961"),
                p = n("501536"),
                m = n("25292"),
                h = n("758650"),
                E = n("200294"),
                S = n("851745"),
                g = n("406291"),
                T = n("49111"),
                v = n("782340"),
                C = n("106226");

            function y(e, t) {
                return (0, l.jsx)(c.default, {
                    sticker: e,
                    isInteracting: t,
                    size: 40
                })
            }
            let I = {
                sentinel: g.EMOJI_SENTINEL,
                stores: [u.default],
                matches: (e, t, n, l, i) => n.length > 1,
                queryResults(e, t, n, l, i) {
                    var o;
                    let u = l.allowStickers ? 0 : r.FullyEmojiAutocompleteExperiment.getCurrentConfig({
                            location: "345e6d_1"
                        }, {
                            autoTrackExposure: !1
                        }).moreEmojisToShow,
                        d = T.MAX_AUTOCOMPLETE_RESULTS + u,
                        {
                            emojiAutocompleteUpsellEnabled: c
                        } = h.AutocompleteUpsellExperiment.getCurrentConfig({
                            location: "345e6d_2"
                        }, {
                            autoTrackExposure: !1
                        }),
                        {
                            emojis: {
                                locked: f,
                                unlocked: p
                            }
                        } = m.default.queryEmojiResults({
                            query: n,
                            channel: e,
                            intention: l.emojiIntention,
                            canViewAndUsePackEmoji: null !== (o = l.canViewAndUsePackEmoji) && void 0 !== o && o,
                            maxCount: d
                        });
                    if ("-" === n[0]) {
                        let e = e => {
                            var t;
                            return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
                        };
                        f = f.filter(e), p = p.filter(e)
                    }
                    let E = [];
                    if (l.allowStickers) {
                        (0, a.fetchStickerPacks)();
                        let t = m.default.queryStickers([n], !0, [e, (e, t) => t === s.StickerSendability.SENDABLE]),
                            l = Math.max(4, 8 - p.length);
                        E = t.slice(0, l), "-" === n[0] && (E = t.filter(e => e.sticker.name === n))
                    }
                    let S = p.slice(0, d - E.length),
                        g = S.length < 14 && !l.allowStickers && f.length > 0 ? [{
                            emojis: f
                        }] : [];
                    return g.length > 0 && h.AutocompleteUpsellExperiment.trackExposure({
                        location: "345e6d_3"
                    }), {
                        results: {
                            emojis: S,
                            emojisLocked: c ? g : [],
                            stickers: E
                        },
                        metadata: {
                            numEmojiResults: S.length,
                            numStickerResults: E.length
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            emojis: t,
                            stickers: r,
                            emojisLocked: s
                        },
                        selectedIndex: a,
                        query: u,
                        onHover: d,
                        onClick: c
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, E.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: t,
                            onHover: d,
                            onClick: c,
                            titleWithQuery: v.default.Messages.EMOJI_MATCHING,
                            titleWithoutQuery: v.default.Messages.EMOJI,
                            Component: p.default.Emoji,
                            getProps: e => ({
                                emoji: e,
                                key: e.id || e.uniqueName || e.name,
                                sentinel: g.EMOJI_SENTINEL,
                                guild: null != e.guildId ? f.default.getGuild(e.guildId) : null,
                                pack: null != e.packId ? o.default.getPackByPackId({
                                    packId: e.packId
                                }) : null
                            }),
                            getQuery: e => "".concat(g.EMOJI_SENTINEL).concat(e),
                            key: "emoji"
                        }), s.length > 0 ? (0, E.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: s,
                            onHover: d,
                            onClick: () => {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("499237").then(n.bind(n, "499237"));
                                    return t => (0, l.jsx)(e, {
                                        ...t
                                    })
                                })
                            },
                            titleWithQuery: 0 === t.length ? v.default.Messages.EMOJI_MATCHING : null,
                            titleWithoutQuery: 0 === t.length ? v.default.Messages.EMOJI : null,
                            Component: p.default.EmojiUpsell,
                            getProps: e => {
                                let {
                                    emojis: t
                                } = e;
                                return {
                                    key: "emoji-upsell",
                                    emojis: t
                                }
                            },
                            getQuery: e => "".concat(g.EMOJI_SENTINEL).concat(e),
                            key: "emoji-upsell",
                            indexOffset: t.length
                        }) : null, (t.length > 0 || s.length > 0) && r.length > 0 && (0, l.jsx)(p.default.Divider, {
                            className: C.emojiStickersDivider
                        }), (0, E.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: r,
                            onHover: d,
                            onClick: c,
                            titleWithQuery: v.default.Messages.STICKERS_MATCHING,
                            titleWithoutQuery: v.default.Messages.STICKER,
                            Component: p.default.Sticker,
                            getProps: e => {
                                let {
                                    comparator: t,
                                    sticker: n
                                } = e;
                                return {
                                    renderSticker: y,
                                    queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                                    sticker: n,
                                    key: n.id
                                }
                            },
                            getQuery: e => e,
                            key: "stickers",
                            indexOffset: t.length + s.length,
                            headerClassName: t.length > 0 ? C.stickersHeaderWithEmojiResults : void 0
                        })]
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            emojis: t,
                            emojisLocked: n,
                            stickers: l
                        },
                        index: i,
                        options: r
                    } = e;
                    if (i < t.length) {
                        let e = t[i];
                        return r.insertText(function(e) {
                            return "".concat(g.EMOJI_SENTINEL).concat(e.name).concat(g.EMOJI_SENTINEL)
                        }(e), function(e) {
                            var t;
                            let n = e.animated ? "a" : "";
                            return e.managed || null == e.id ? "".concat(g.EMOJI_SENTINEL).concat(e.name).concat(g.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                        }(e)), {
                            type: S.AutocompleteSelectionTypes.EMOJI,
                            metadata: {
                                emojiId: e.id,
                                numEmojiResults: t.length,
                                numStickerResults: l.length,
                                expressionName: e.name,
                                isCustom: null != e.id,
                                isAnimated: e.animated
                            }
                        }
                    }
                    if ((i -= t.length) < n.length) return {
                        type: null
                    };
                    if ((i -= n.length) < l.length) {
                        let e = l[i];
                        return r.insertText(""), r.sendSticker(e.sticker, d.StickerSelectLocation.AUTOCOMPLETE), {
                            type: S.AutocompleteSelectionTypes.STICKER,
                            metadata: {
                                numEmojiResults: t.length,
                                numStickerResults: l.length,
                                stickerId: e.sticker.id
                            }
                        }
                    }
                    return {
                        type: null
                    }
                }
            };
            var N = I
        },
        729079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n.n(r),
                s = n("77078"),
                a = n("822637"),
                u = n("716241"),
                d = n("383018"),
                c = n("524768"),
                f = n("318981"),
                p = n("501536"),
                m = n("145131"),
                h = n("851745"),
                E = n("406291"),
                S = n("49111"),
                g = n("782340"),
                T = n("567484");
            let v = {
                results: {
                    command: null,
                    integrations: [],
                    isLoading: !1
                }
            };

            function C(e, t, n) {
                var l, i;
                let r;
                return n.commands === h.CommandMode.OLD_BUILT_INS ? (r = t.split(" ")[0].substring(E.COMMAND_SENTINEL.length), t = t.substring((null !== (l = r.length) && void 0 !== l ? l : 0) + E.COMMAND_SENTINEL.length)) : r = null === (i = d.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name, {
                    command: r,
                    query: t.trim()
                }
            }
            let y = {
                stores: [d.default, f.default],
                matches(e, t, n, l, i) {
                    var r;
                    return i.commands !== h.CommandMode.DISABLED && (i.commands === h.CommandMode.OLD_BUILT_INS ? n.startsWith(E.COMMAND_SENTINEL + "gif") || n.startsWith(E.COMMAND_SENTINEL + "tenor") : (null === (r = d.default.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.integrationType) === S.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
                },
                queryResults(e, t, n, l, i) {
                    let {
                        command: r,
                        query: s
                    } = C(e, n, l);
                    if (null == r) return v;
                    let u = o.findKey(S.ChannelTextAreaIntegrations, e => e.command === r);
                    i && null != u && s.length > 0 && a.default.search(u, s);
                    let d = f.default.getResults(u, s);
                    return null == d ? v : {
                        results: {
                            command: r,
                            integrations: d.results,
                            isLoading: d.loading
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            integrations: t,
                            isLoading: n
                        },
                        selectedIndex: r,
                        channel: o,
                        query: a,
                        options: u,
                        onHover: c,
                        onClick: f
                    } = e, {
                        command: E,
                        query: v
                    } = C(o, a, u);
                    if (null == E || 0 === v.length) return null;
                    if (n) return (0, l.jsx)(s.Spinner, {
                        className: T.spinner,
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    if (null != t) {
                        var y, I;
                        let e = !1,
                            n = t.map((t, n) => {
                                if (t.type === S.ChannelTextAreaIntegrationTypes.GIF) {
                                    var i, o, s;
                                    return e = !0, (0, l.jsx)(p.default.GIFIntegration, {
                                        className: T.horizontalAutocomplete,
                                        onClick: f,
                                        onHover: c,
                                        selected: r === n,
                                        index: n,
                                        width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                        height: null !== (o = t.meta.height) && void 0 !== o ? o : 0,
                                        src: null !== (s = t.meta.src) && void 0 !== s ? s : "",
                                        url: t.meta.url
                                    }, "".concat(t.meta.url).concat(t.meta.src))
                                }
                            }),
                            s = u.commands === h.CommandMode.OLD_BUILT_INS ? E : null !== (I = null === (y = d.default.getActiveCommand(o.id)) || void 0 === y ? void 0 : y.integrationTitle) && void 0 !== I ? I : E,
                            a = v.length > 0 && null != s ? g.default.Messages.CONTENT_MATCHING.format({
                                query: v,
                                command: s
                            }) : null != s ? s : E;
                        return (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(p.default.Title, {
                                title: a
                            }), e ? (0, l.jsx)(m.default, {
                                className: T.horizontalAutocompletes,
                                children: n
                            }) : n]
                        }, "gifs")
                    }
                },
                onSelect(e) {
                    let {
                        results: {
                            command: t,
                            integrations: n
                        },
                        index: l,
                        type: i,
                        options: r,
                        channel: o
                    } = e;
                    if (null == t) return {
                        type: null
                    };
                    let s = n[l];
                    if (i === h.SelectType.INSERT ? r.replaceText(function(e) {
                            return e.meta.url
                        }(s)) : r.sendMessage(function(e) {
                            return e.meta.url
                        }(s)), u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                            search_type: S.SearchTypes.GIF,
                            index_num: l,
                            source_object: "/".concat(t)
                        }), r.commands !== h.CommandMode.OLD_BUILT_INS) {
                        let e = d.default.getActiveCommand(o.id);
                        (null == e ? void 0 : e.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(S.AnalyticEvents.APPLICATION_COMMAND_USED, {
                            command_id: e.id,
                            application_id: e.applicationId,
                            command_type: e.type
                        })
                    }
                    return {
                        type: h.AutocompleteSelectionTypes.GIF
                    }
                }
            };

            function I(e) {
                return e.meta.url
            }
            var N = y
        },
        845247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("798609"),
                r = n("240249"),
                o = n("524768"),
                s = n("355263"),
                a = n("845579"),
                u = n("697218"),
                d = n("501536"),
                c = n("387111"),
                f = n("511104"),
                p = n("200294"),
                m = n("851745"),
                h = n("825871"),
                E = n("782340");

            function S(e) {
                let t = f.PREFIX_COMMAND_REGEX.exec(e);
                if (null != t) return {
                    type: "prefix",
                    cleanedQuery: e.substring(t[0].length).trim()
                };
                let n = f.BOT_MENTION_COMMAND_REGEX.exec(e);
                if (null != n) {
                    let t = n[1],
                        l = u.default.getUser(t);
                    return null == l || !l.bot || l.isClyde() ? null : {
                        type: "mention",
                        cleanedQuery: e.substring(n[0].length).trim(),
                        user: l
                    }
                }
                return null
            }
            let g = {
                ...h.default,
                sentinel: void 0,
                focusMode: m.FocusMode.MANUAL,
                matches(e, t, n, l, i) {
                    if (i.commands === m.CommandMode.DISABLED || i.commands === m.CommandMode.OLD_BUILT_INS || n.length < 2 || !a.ShowCommandSuggestions.getSetting()) return !1;
                    let r = S(n);
                    return null != r && r.cleanedQuery.length > 0
                },
                queryResults(e, t, n, l, o) {
                    if (!a.ShowCommandSuggestions.getSetting()) return h.EMPTY_RESULTS;
                    let u = S(n);
                    if (null == u) return h.EMPTY_RESULTS;
                    let d = (0, s.getCommandQuery)(e, u.cleanedQuery),
                        {
                            commands: c,
                            sections: f
                        } = r.executeQuery(e, {
                            commandType: i.ApplicationCommandType.CHAT,
                            text: d.text
                        }, {
                            limit: m.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                            placeholderCount: m.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                            sortByScore: !0,
                            allowFetch: o
                        });
                    if (null == c) return h.EMPTY_RESULTS;
                    let p = c;
                    if (d.hasSpaceTerminator) {
                        let e = d.text.trim(),
                            t = e + " ";
                        p = p.filter(n => n.name === e || n.name.startsWith(t))
                    }
                    return 0 === p.length ? h.EMPTY_RESULTS : {
                        results: {
                            entries: p.map(e => ({
                                command: e,
                                section: null == f ? void 0 : f.find(t => t.id === e.applicationId)
                            }))
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            entries: t
                        },
                        selectedIndex: n,
                        guild: i,
                        channel: r,
                        query: o,
                        options: s,
                        onHover: a,
                        onClick: u
                    } = e;
                    return (0, p.renderAutocompleteGroup)({
                        query: o,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: a,
                        onClick: u,
                        titleWithQuery: E.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: E.default.Messages.COMMANDS,
                        Component: s.commands === m.CommandMode.OLD_BUILT_INS ? d.default.Command : d.default.NewCommand,
                        getProps: e => {
                            let {
                                command: t,
                                section: n
                            } = e;
                            return {
                                key: t.id,
                                command: t,
                                channel: r,
                                guildId: r.guild_id,
                                showImage: !0,
                                section: n
                            }
                        },
                        getQuery: e => {
                            let t = S(e);
                            if ("mention" !== t.type) return e;
                            let n = c.default.getName(null == i ? void 0 : i.id, r.id, t.user);
                            return e.replace(f.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                        },
                        key: "commands",
                        footer: (0, l.jsx)(h.FakeFooter, {})
                    })
                },
                onSelect(e) {
                    let {
                        results: t,
                        index: n,
                        type: l,
                        options: i,
                        channel: r
                    } = e, s = h.default.onSelect({
                        results: t,
                        index: n,
                        type: l,
                        options: i,
                        channel: r,
                        location: o.ApplicationCommandTriggerLocations.SUGGESTION
                    });
                    return null == s ? null : {
                        ...s,
                        type: m.AutocompleteSelectionTypes.COMMAND_SUGGESTION
                    }
                }
            };
            var T = g
        },
        122270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("26989"),
                o = n("501536"),
                s = n("25292"),
                a = n("158998"),
                u = n("200294"),
                d = n("851745"),
                c = n("406291"),
                f = n("782340");
            let p = {
                sentinel: c.MENTION_SENTINEL,
                stores: [r.default],
                matches: (e, t, n, l, i) => (i.mentions.user !== d.UserMentionMode.DENY || i.mentions.role !== d.RoleMentionMode.DENY || i.mentions.global !== d.GlobalMentionMode.DENY) && !0,
                queryResults(e, t, n, l, i) {
                    let r = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                        o = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                        a = l.mentions.user !== d.UserMentionMode.DENY,
                        u = l.mentions.role !== d.RoleMentionMode.DENY,
                        c = l.mentions.clyde !== d.ClydeMentionMode.DENY,
                        f = l.mentions.user === d.UserMentionMode.ALLOW_GUILD,
                        p = l.mentions.role === d.RoleMentionMode.ALLOW_ALL,
                        m = s.default.queryMentionResults({
                            query: n,
                            channel: e,
                            canMentionEveryone: r,
                            canMentionHere: o,
                            canMentionUsers: a,
                            canMentionRoles: u,
                            canMentionClyde: c,
                            includeAllGuildUsers: f,
                            includeNonMentionableRoles: p,
                            request: i
                        });
                    return {
                        results: m
                    }
                },
                renderResults(e) {
                    let t, n, {
                            results: {
                                users: r,
                                globals: s,
                                roles: a
                            },
                            selectedIndex: p,
                            channel: m,
                            query: h,
                            options: E,
                            onHover: S,
                            onClick: g
                        } = e,
                        T = r.map((e, t) => (0, l.jsx)(o.default.User, {
                            guildId: m.guild_id,
                            onClick: g,
                            onHover: S,
                            selected: p === t,
                            index: t,
                            user: e.user,
                            nick: e.nick,
                            status: e.status,
                            hidePersonalInformation: E.hidePersonalInformation
                        }, e.user.id)),
                        v = s.map((e, t) => (0, l.jsx)(o.default.Generic, {
                            onClick: g,
                            onHover: S,
                            selected: p === t + r.length,
                            index: r.length + t,
                            text: e.text,
                            description: E.hideMentionDescription ? null : e.description,
                            "aria-label": e.text
                        }, e.text)),
                        C = a.map((e, t) => (0, l.jsx)(o.default.Role, {
                            onClick: g,
                            onHover: S,
                            selected: p === t + r.length + s.length,
                            index: r.length + s.length + t,
                            role: e,
                            hideDescription: E.hideMentionDescription
                        }, e.id)),
                        y = E.mentions.user === d.UserMentionMode.DENY;
                    return y ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), (0, l.jsxs)(i.Fragment, {
                        children: [(0, u.renderHeader)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: h,
                            getQuery: e => "".concat(c.MENTION_SENTINEL).concat(e)
                        }), T, r.length > 0 && s.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, v, r.length > 0 && a.length > 0 || s.length > 0 && a.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, C]
                    }, "mentions")
                },
                onSelect(e) {
                    let {
                        results: {
                            users: t,
                            globals: n,
                            roles: l
                        },
                        index: i,
                        options: r,
                        channel: o
                    } = e, u = t[i], f = n[i - t.length], p = l[i - t.length - n.length];
                    return null != u ? r.insertText(function(e, t, n) {
                        return s.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(a.default.getUserTag(e, {
                            identifiable: n ? "never" : "always"
                        }))
                    }(u.user, o, r.hidePersonalInformation), function(e) {
                        return "<@".concat(e.id, ">")
                    }(u.user)) : null != f ? r.insertText(function(e) {
                        return e.text
                    }(f)) : null != p && r.insertText(function(e) {
                        return "".concat(c.MENTION_SENTINEL).concat(e.name)
                    }(p), function(e) {
                        return "<@&".concat(e.id, ">")
                    }(p)), {
                        type: d.AutocompleteSelectionTypes.MENTION
                    }
                }
            };
            var m = p
        },
        684396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("957255"),
                i = n("501536"),
                r = n("25292"),
                o = n("200294"),
                s = n("851745"),
                a = n("406291"),
                u = n("49111"),
                d = n("958706"),
                c = n("782340");
            let f = {
                sentinel: a.REACTION_START_SENTINEL,
                matches(e, t, n, i, r) {
                    var o, s;
                    return i && null !== (s = null === (o = r.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== s && s && (l.default.can(u.Permissions.ADD_REACTIONS, e) || e.isPrivate())
                },
                queryResults(e, t, n, l, i) {
                    var o;
                    let {
                        emojis: s
                    } = r.default.queryEmojiResults({
                        query: n,
                        channel: e,
                        intention: d.EmojiIntention.REACTION,
                        canViewAndUsePackEmoji: null !== (o = l.canViewAndUsePackEmoji) && void 0 !== o && o
                    });
                    return {
                        results: {
                            emojis: s.unlocked
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            emojis: t
                        },
                        selectedIndex: n,
                        query: l,
                        onHover: r,
                        onClick: s
                    } = e;
                    return (0, o.renderAutocompleteGroup)({
                        query: l,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: r,
                        onClick: s,
                        titleWithQuery: c.default.Messages.REACTIONS_MATCHING,
                        titleWithoutQuery: c.default.Messages.EMOJI,
                        Component: i.default.Emoji,
                        getProps: e => ({
                            emoji: e,
                            key: e.id || e.uniqueName || e.name,
                            sentinel: a.EMOJI_SENTINEL
                        }),
                        getQuery: e => "".concat(a.REACTION_START_SENTINEL).concat(e),
                        key: "reactions"
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            emojis: t
                        },
                        index: n,
                        options: l
                    } = e, i = t[n];
                    return l.sendMessage(function(e) {
                        return "".concat(a.REACTION_START_SENTINEL).concat(e.name).concat(a.REACTION_END_SENTINEL)
                    }(i)), {
                        type: s.AutocompleteSelectionTypes.REACTION
                    }
                }
            };
            var p = f
        },
        280214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelAutocompleteLayerPosition: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("244201"),
                r = n("851745");

            function o(e) {
                let {
                    editorHeight: t,
                    type: n,
                    state: o,
                    isInPopoutExperiment: s = !1
                } = e, [a, u] = l.useState(void 0), d = null == o ? void 0 : o.query, c = null == o ? void 0 : o.isVisible, {
                    renderWindow: f
                } = l.useContext(i.default), p = l.useCallback(() => {
                    var e, t, l, i, a;
                    if (null != o && (null == d || !c)) {
                        u(void 0);
                        return
                    }
                    if ((null == d ? void 0 : d.type) === r.AutocompleteOptionTypes.GIFS || null != n && !s && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
                        u(null);
                        return
                    }
                    let p = f.document.getSelection(),
                        m = null != p && p.rangeCount > 0 ? p.getRangeAt(0) : null;
                    if (null == m) return;
                    let h = m.startContainer,
                        E = m.startOffset;
                    for (; null != h;) {
                        if (h.nodeType !== Node.TEXT_NODE || null == h.nodeValue) {
                            u(null);
                            return
                        }
                        if ((null === (t = h.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                            E = null !== (a = null === (i = h = h.previousSibling) || void 0 === i ? void 0 : null === (l = i.nodeValue) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0;
                            continue
                        }
                        null != d && (E >= d.queryText.length ? E -= d.queryText.length : E = 0);
                        break
                    }
                    if (null == h) return;
                    let S = f.document.createRange();
                    S.setStart(h, E), S.setEnd(h, E);
                    let g = S.getBoundingClientRect();
                    (null == g ? void 0 : g.height) !== 0 && u(null != g ? g : null)
                }, [s, f.document, o, c, d, n]);
                return l.useEffect(() => (f.document.addEventListener("selectionchange", p), () => f.document.removeEventListener("selectionchange", p)), [f.document, p]), l.useEffect(() => {
                    p()
                }, [p, t]), a
            }
        },
        689299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("974667"),
                r = n("942367"),
                o = n("244201"),
                s = n("851745");

            function a(e) {
                var t, n, a;
                let {
                    navId: u,
                    scrollerRef: d,
                    state: c,
                    onFocus: f
                } = e, {
                    renderWindow: p
                } = l.useContext(o.default), m = (e, t) => {
                    var n;
                    if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
                        let e = c.query.typeInfo.focusMode,
                            n = !(e === s.FocusMode.MANUAL || e === s.FocusMode.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
                        c.isVisible && (!0 !== t || !1 !== n) ? (E.setFocus("0"), null == f || f(0)) : (E.setFocus(null), null == f || f(null))
                    }
                }, h = e => {
                    var t;
                    if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
                        let e = c.query.resultCount - 1;
                        E.setFocus(e.toString()), null == f || f(e)
                    }
                }, E = (0, i.default)({
                    id: u,
                    isEnabled: c.isVisible,
                    orientation: r.Orientations.VERTICAL,
                    useVirtualFocus: !0,
                    setFocus: (e, t) => {
                        var n;
                        let l = p.document.querySelector(e);
                        null != l && (null === (n = d.current) || void 0 === n || n.scrollIntoViewNode({
                            node: l
                        })), null == f || f(+t)
                    },
                    onNavigateNextAtEnd: () => m(!0),
                    onNavigatePreviousAtStart: () => h(!0),
                    scrollToStart: () => (m(!1, !1), Promise.resolve()),
                    scrollToEnd: () => (h(!1), Promise.resolve())
                });
                return l.useEffect(() => {
                    m(!0, !0)
                }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (a = c.query) || void 0 === a ? void 0 : a.isLoading, c.isVisible]), E
            }
        },
        497858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("884691"),
                i = n("775560"),
                r = n("446674"),
                o = n("118200"),
                s = n("383018"),
                a = n("850391"),
                u = n("980215"),
                d = n("26989"),
                c = n("957255"),
                f = n("102985"),
                p = n("697218"),
                m = n("234246"),
                h = n("689299"),
                E = n("49111"),
                S = n("680894"),
                g = n("958706");

            function T(e, t, n) {
                var T, v, C, y, I, N, _;
                let {
                    channel: x,
                    type: A
                } = e, [O, R] = l.useState(() => (0, m.createInitialState)()), b = (0, i.useForceUpdate)(), k = (0, r.useStateFromStores)([d.default], () => {
                    if (null != e.guild) {
                        var t;
                        return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.CLYDE_AI_USER_ID)
                    }
                    return !1
                }), M = (0, u.useClydeEnabled)(e.guild, e.channel) && !k && !(0, u.canUseCustomClydeProfiles)(e.guild), P = (0, r.useStateFromStores)([d.default, p.default], () => {
                    var e, t;
                    let n = p.default.getCurrentUser();
                    return null !== (t = null != x.guild_id && null != n ? null === (e = d.default.getMember(x.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                }), {
                    canMentionEveryone: L,
                    hidePersonalInformation: U
                } = (0, r.useStateFromStoresObject)([c.default, f.default], () => {
                    let e = x.isPrivate();
                    return {
                        canMentionEveryone: e || P || A === a.ChatInputTypes.RULES_INPUT || c.default.can(E.Permissions.MENTION_EVERYONE, x),
                        hidePersonalInformation: f.default.hidePersonalInformation
                    }
                }, [x, A, P]), {
                    activeCommand: D,
                    activeCommandOption: j
                } = (0, r.useStateFromStoresObject)([s.default], () => ({
                    activeCommand: s.default.getActiveCommand(x.id),
                    activeCommandOption: s.default.getActiveOption(x.id)
                })), w = (0, h.default)({
                    navId: "channel-autocomplete",
                    scrollerRef: n,
                    state: O,
                    onFocus: e => F.setSelectedIndex(e)
                }), B = null === (T = e.editorRef.current) || void 0 === T ? void 0 : T.getCurrentWord(), K = {
                    ...e,
                    navigator: w,
                    activeCommand: D,
                    activeCommandOption: j,
                    canMentionUsers: null !== (I = null === (v = A.users) || void 0 === v ? void 0 : v.allowMentioning) && void 0 !== I && I,
                    canMentionEveryone: L,
                    canMentionClyde: M,
                    hidePersonalInformation: U,
                    hideMentionDescription: A === a.ChatInputTypes.RULES_INPUT,
                    emojiIntention: A === a.ChatInputTypes.RULES_INPUT ? g.EmojiIntention.COMMUNITY_CONTENT : g.EmojiIntention.CHAT,
                    currentWord: null !== (N = null == B ? void 0 : B.word) && void 0 !== N ? N : "",
                    currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
                    optionText: null != j ? (0, o.getString)({
                        [j.name]: null !== (_ = null === (C = e.editorRef.current) || void 0 === C ? void 0 : C.getCurrentCommandOptionValue()) && void 0 !== _ ? _ : []
                    }, j.name) : ""
                }, [F] = l.useState(() => new m.default(K));
                return l.useEffect(() => {
                    F.updateProps(K)
                }), l.useImperativeHandle(t, () => F, [F]), l.useEffect(() => {
                    let e = e => R(e);
                    return F.on("change", e), F.on("update", b), () => {
                        F.off("change", e), F.off("update", b)
                    }
                }, [b, F]), l.useEffect(() => {
                    var e;
                    let t = null === (e = O.query) || void 0 === e ? void 0 : e.typeInfo.stores;
                    if (null != t) {
                        let e = () => F.queryResults();
                        for (let n of t) n.addChangeListener(e);
                        return () => {
                            for (let n of t) n.removeChangeListener(e)
                        }
                    }
                }, [F, null === (y = O.query) || void 0 === y ? void 0 : y.typeInfo]), [O, F, w]
            }
        },
        545054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHereMentionCallback: function() {
                    return f
                }
            });
            var l = n("884691"),
                i = n("917351"),
                r = n.n(i),
                o = n("666020"),
                s = n("696605"),
                a = n("217535"),
                u = n("19766");
            let d = "@here";

            function c(e) {
                return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
            }

            function f(e, t, n) {
                let i = (0, a.default)(),
                    [f, p] = l.useState(!1),
                    m = l.useMemo(() => r.debounce(e => {
                        (function(e, t, n, l) {
                            let i = u.default.getProps(n, l).groups;
                            return !!c(i) || !(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, o.subscribeChannel)(n, l, s.DEFAULT_RANGES), !0)
                        })(e, i, t, n) && p(!0)
                    }, 200, {
                        maxWait: 500
                    }), [i, t, n]);
                l.useEffect(() => {
                    let l = u.default.getProps(t, n).groups;
                    if (null != t && !c(l) && !f) return e.addListener("text-changed", m), () => {
                        e.removeListener("text-changed", m), m.cancel()
                    }
                }, [f, m, e, t, n])
            }
        },
        23690: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                id: "2022-12_timestamp_tooltip",
                label: "Timestamp Tooltip",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        459343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnifiedChatInputExpressionIconExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_unified_chat_input_expression_icon",
                label: "Unified chat input expression icon",
                defaultConfig: {
                    enableUnifiedIconOpenLastViewedTab: !1,
                    enableUnifiedIconOpenEmojiTab: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable unified chat input expression icon opening last viewed tab",
                    config: {
                        enableUnifiedIconOpenLastViewedTab: !0,
                        enableUnifiedIconOpenEmojiTab: !1
                    }
                }, {
                    id: 2,
                    label: "Enable unified chat input expression icon opening emoji tab",
                    config: {
                        enableUnifiedIconOpenLastViewedTab: !1,
                        enableUnifiedIconOpenEmojiTab: !0
                    }
                }]
            })
        },
        998206: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("151426"),
                u = n("77078"),
                d = n("244201"),
                c = n("206230"),
                f = n("427953"),
                p = n("550766"),
                m = n("292655"),
                h = n("478272"),
                E = n("685665"),
                S = n("509802"),
                g = n("128295"),
                T = n("414868"),
                v = n("49111"),
                C = n("13030"),
                y = n("782340"),
                I = n("851855");

            function N(e) {
                let {
                    disabled: t,
                    channel: n,
                    markAsDismissed: r,
                    visibleContent: S,
                    innerRef: N
                } = e, _ = (0, d.useAppContext)(), {
                    analyticsLocations: x
                } = (0, E.default)(), A = _ === v.AppContext.POPOUT, O = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
                    isActivitiesInTextEnabled: R
                } = f.ActivitiesInTextExperiment.useExperiment({
                    location: "ChannelActivityPickerButton"
                }, {
                    autoTrackExposure: !1
                }), b = i.useCallback(() => {
                    r(), (0, h.default)({
                        channel: R ? n : void 0,
                        guildId: n.guild_id,
                        locationObject: {
                            page: v.AnalyticsPages.GUILD_CHANNEL,
                            section: v.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: v.AnalyticsObjects.BUTTON_ICON,
                            objectType: v.AnalyticsObjectTypes.ACTIVITY
                        },
                        openInPopout: A,
                        enableSelectedTextChannelInvite: !0,
                        analyticsLocations: x
                    }), (0, p.fetchShelf)({
                        guildId: n.guild_id
                    })
                }, [x, n, R, r, A]), k = () => {
                    if (S === a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES) return (0, l.jsxs)("div", {
                        className: I.sparkleContainer,
                        children: [(0, l.jsx)(T.default, {
                            className: o(I.sparkleStar, {
                                [I.noAnimation]: O
                            })
                        }), (0, l.jsx)(g.default, {
                            className: o(I.sparklePlus, {
                                [I.noAnimation]: O
                            })
                        })]
                    });
                    return null
                };
                return t ? null : (0, l.jsx)(u.Tooltip, {
                    text: y.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
                    children: e => (0, l.jsxs)("div", {
                        ...e,
                        className: o(C.CHAT_INPUT_BUTTON_CLASSNAME, I.buttonContainer),
                        ref: N,
                        children: [(0, l.jsx)(m.default, {
                            onClick: b,
                            tabIndex: 0,
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: -4,
                                    right: -4
                                }
                            }
                        }), k()]
                    })
                })
            }
            let _ = [a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES];
            var x = i.memo(i.forwardRef(function(e, t) {
                return (0, l.jsx)(S.default, {
                    contentTypes: _,
                    children: n => {
                        let {
                            visibleContent: i,
                            markAsDismissed: r
                        } = n;
                        return (0, l.jsx)(N, {
                            ...e,
                            innerRef: t,
                            visibleContent: i,
                            markAsDismissed: r
                        })
                    }
                })
            }))
        },
        743825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("87682"),
                d = n.n(u),
                c = n("746379"),
                f = n("394846"),
                p = n("295426"),
                m = n("81594"),
                h = n("798609"),
                E = n("966724"),
                S = n("383018"),
                g = n("605250"),
                T = n("585722"),
                v = n("378765"),
                C = n("254490"),
                y = n("850391"),
                I = n("149022"),
                N = n("296141"),
                _ = n("606013"),
                x = n("32647"),
                A = n("970153"),
                O = n("49111"),
                R = n("782340"),
                b = n("537461");
            new g.default("ChannelEditor.tsx");
            let k = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                },
                M = {
                    12: b.fontSize12Padding,
                    14: b.fontSize14Padding,
                    15: b.fontSize15Padding,
                    16: b.fontSize16Padding,
                    18: b.fontSize18Padding,
                    20: b.fontSize20Padding,
                    24: b.fontSize24Padding
                };
            class P extends i.Component {
                componentDidMount() {
                    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
                }
                componentDidUpdate(e) {
                    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                        var t, n;
                        let e;
                        e = this.props.useSlate ? this.props.textValue : (0, A.toTextValue)(this.props.richValue, {
                            mode: "plain"
                        }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, I.toRichValue)(e))
                    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
                }
                componentWillUnmount() {
                    var e;
                    this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
                }
                blur() {
                    let e = this.ref.current;
                    null != e && e.blur()
                }
                submit(e) {
                    var t;
                    null === (t = this.ref.current) || void 0 === t || t.submit(e)
                }
                insertEmoji(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            textValue: l
                        } = this.props,
                        i = this.ref.current;
                    null != e && null != i && (n && !l.endsWith(" ") && i.insertText(" ", void 0, !1), i.insertEmoji(e, t), t && this.focus())
                }
                insertGIF(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
                }
                insertSound(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
                }
                handleOuterClick() {
                    this.focus()
                }
                clearValue() {
                    let {
                        channel: e,
                        type: t
                    } = this.props;
                    this.setState({
                        focused: !0,
                        submitting: !1
                    }), p.default.saveDraft(e.id, "", t.drafts.type)
                }
                getCurrentWord() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
                        word: null,
                        isAtStart: !1
                    }
                }
                insertAutocomplete(e, t, n) {
                    let l = this.ref.current;
                    return null == l ? void 0 : l.insertAutocomplete(e, t, n)
                }
                getCurrentCommandOption() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                getCurrentCommandOptionValue() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
                }
                getCommandOptionValues() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
                }
                getFirstText() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
                }
                getSlateEditor() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                fixFocus(e) {
                    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
                }
                appendText(e, t) {
                    var n;
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, l)
                }
                getPlaceholder() {
                    let {
                        disabled: e,
                        placeholder: t,
                        isPreviewing: n
                    } = this.props;
                    return e && !n ? R.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
                }
                render() {
                    var e, t, n, i, r, s;
                    let {
                        textValue: a,
                        richValue: u,
                        disabled: d,
                        onChange: c,
                        onKeyDown: p,
                        onResize: m,
                        onSubmit: h,
                        channel: E,
                        type: S,
                        fontSize: g,
                        useSlate: T,
                        spellcheckEnabled: C,
                        useNewSlashCommands: N,
                        canOnlyUseTextCommands: A,
                        className: R,
                        id: k,
                        required: P,
                        maxCharacterCount: L,
                        allowNewLines: U,
                        "aria-describedby": D,
                        "aria-labelledby": j,
                        accessibilityLabel: w
                    } = this.props, {
                        submitting: B,
                        popup: K
                    } = this.state, F = {
                        channel: E,
                        className: o(R, b.textArea, {
                            [b.textAreaSlate]: T,
                            [b.textAreaDisabled]: d || B
                        }),
                        id: k,
                        placeholder: this.getPlaceholder(),
                        required: P,
                        accessibilityLabel: w,
                        disabled: d || !1,
                        submitting: B,
                        isEdit: S === y.ChatInputTypes.EDIT,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onPaste: this.handlePaste,
                        onTab: this.handleTab,
                        onEnter: this.handleEnter,
                        moveSelection: this.handleMoveSelection,
                        maybeShowAutocomplete: this.maybeShowAutocomplete,
                        hideAutocomplete: this.hideAutocomplete,
                        allowNewLines: U,
                        onChange: c,
                        onResize: m,
                        onKeyDown: p,
                        onSubmit: h,
                        textAreaPaddingClassName: o(M[g], {
                            [b.textAreaWithoutAttachmentButton]: S !== y.ChatInputTypes.NORMAL && S !== y.ChatInputTypes.OVERLAY && S !== y.ChatInputTypes.THREAD_CREATION && S !== y.ChatInputTypes.SIDEBAR,
                            [b.textAreaForPostCreation]: S === y.ChatInputTypes.CREATE_FORUM_POST
                        }),
                        spellcheckEnabled: C,
                        useNewSlashCommands: N,
                        disableAutoFocus: f.isMobile || null !== (n = S.disableAutoFocus) && void 0 !== n && n,
                        disableEnterToSubmit: null !== (i = null === (e = S.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== i && i,
                        "aria-controls": null !== (r = K.id) && void 0 !== r ? r : void 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": null !== K.id || void 0,
                        "aria-activedescendant": null !== (s = K.activeDescendant) && void 0 !== s ? s : void 0,
                        "aria-invalid": a.length > L,
                        "aria-describedby": D,
                        "aria-labelledby": j,
                        "aria-autocomplete": "list"
                    }, G = T ? (0, l.jsx)(x.default, {
                        ref: this.ref,
                        ...F,
                        type: S,
                        value: d ? (0, I.toRichValue)("") : u,
                        canUseCommands: null === (t = S.commands) || void 0 === t ? void 0 : t.enabled,
                        canOnlyUseTextCommands: A
                    }) : (0, l.jsx)(_.default, {
                        ref: this.ref,
                        ...F,
                        value: d ? "" : a
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(v.ComponentAction, {
                            event: O.ComponentActions.INSERT_TEXT,
                            handler: this.handleInsertText
                        }), (0, l.jsx)(v.ComponentAction, {
                            event: O.ComponentActions.CLEAR_TEXT,
                            handler: this.handleClearText
                        }), G]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.ref = i.createRef(), this._focusBlurQueue = Promise.resolve(), this.handleSelectionChange = () => {
                        if (this.props.focused) {
                            var e, t, n;
                            this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString())
                        }
                    }, this.focus = () => {
                        var e;
                        null === (e = this._focusBlurQueue) || void 0 === e || e.then(() => {
                            this.setState({
                                focused: !0
                            }, () => {
                                let e = this.ref.current;
                                null != e && e.focus()
                            })
                        })
                    }, this.saveCurrentText = function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            {
                                type: n,
                                channel: l
                            } = t.props;
                        n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(l.id))
                    }, this.handleBeforeUnload = () => this.saveCurrentText(), this.saveCurrentTextThrottled = a.throttle(this.saveCurrentText.bind(this, !1), 500), this.handleEnter = e => {
                        var t, n;
                        return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.handleTab = () => {
                        var e, t;
                        return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleMoveSelection = e => {
                        var t, n;
                        return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.maybeShowAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.hideAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleSaveCurrentText = e => {
                        p.default.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
                    }, this.handleClearText = () => {
                        var e, t;
                        null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, I.toRichValue)(""))
                    }, this.handleInsertText = e => {
                        let {
                            plainText: t,
                            rawText: n,
                            addSpace: l = !1
                        } = e;
                        !this.props.disabled && (this.appendText(t, n, l), this.focus())
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), !n && this.setState({
                            focused: !0
                        })
                    }, this.handleBlur = e => {
                        let {
                            onBlur: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), n && this.setState({
                            focused: !1
                        })
                    }, this.handlePaste = e => {
                        let {
                            channel: t,
                            canPasteFiles: n,
                            uploadPromptCharacterCount: l,
                            promptToUpload: i,
                            maxCharacterCount: r,
                            type: o
                        } = this.props;
                        if (null == i || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
                        let s = null != l ? l : r,
                            {
                                files: a
                            } = function(e, t) {
                                let n = [],
                                    l = [],
                                    i = null,
                                    r = null;
                                for (let t of e.items)
                                    if ("file" === t.kind) {
                                        let e = t.getAsFile();
                                        if (null == e) continue;
                                        null != e.path && e.path.length > 0 ? n.push(e) : l.push(e)
                                    } else "string" === t.kind && ("text/plain" === t.type && null == i ? i = t : "text/html" === t.type && null == r && (r = t));
                                if (n.length > 0) return {
                                    files: n
                                };
                                if (l.length > 0) {
                                    if (1 === l.length && "image/png" === l[0].type && null != r) {
                                        var o;
                                        let t = l[0],
                                            n = e.getData(r.type),
                                            i = null !== (o = function(e) {
                                                let t = new DOMParser,
                                                    n = t.parseFromString(e, "text/html"),
                                                    l = n.querySelector("img");
                                                if (null != l) {
                                                    let e;
                                                    try {
                                                        let {
                                                            pathname: t
                                                        } = c.parse(l.src);
                                                        null != t && t.length > 0 && (e = d.basename(t).split(".")[0])
                                                    } catch (e) {}
                                                    if (null != e && e.length > 0) return "".concat(e, ".png")
                                                }
                                            }(n)) && void 0 !== o ? o : t.name;
                                        return {
                                            files: [(0, C.makeFile)(t, i, t.type)]
                                        }
                                    }
                                    return {
                                        files: l
                                    }
                                }
                                if (null != i && null != t) {
                                    let n = e.getData(i.type);
                                    if (n.length > t) {
                                        let e = new Blob([n], {
                                            type: "text/plain"
                                        });
                                        return {
                                            files: [(0, C.makeFile)(e, "message.txt")],
                                            convertedStringToFile: !0
                                        }
                                    }
                                }
                                return {
                                    files: []
                                }
                            }(e.clipboardData, o.uploadLongMessages ? s : null);
                        return k("onPaste", [...e.clipboardData.items].map(e => {
                            if ("file" !== e.kind) return {
                                kind: e.kind,
                                type: e.type
                            };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                }
                            }
                        })), 0 !== a.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), ((e, n) => {
                            var l;
                            let r = S.default.getActiveCommand(t.id);
                            if (null == r) return i(e, t, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: void 0
                            });
                            let s = null === (l = r.options) || void 0 === l ? void 0 : l.find(e => e.type === h.ApplicationCommandOptionType.ATTACHMENT && null == T.default.getUpload(t.id, e.name, o.drafts.type));
                            null != s && m.default.setFile({
                                channelId: t.id,
                                id: s.name,
                                draftType: o.drafts.type,
                                file: {
                                    id: s.name,
                                    platform: E.UploadPlatform.WEB,
                                    file: e[0]
                                }
                            })
                        })(a), this.focus(), !0)
                    }, this._unsubscribe = N.channelEditorPopupStore.subscribe(e => {
                        requestAnimationFrame(() => {
                            this.setState({
                                popup: e
                            })
                        })
                    }), this.state = {
                        focused: !1,
                        submitting: !1,
                        popup: N.channelEditorPopupStore.getState()
                    }
                }
            }
        },
        296141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                channelEditorPopupStore: function() {
                    return o
                },
                useChannelEditorPopup: function() {
                    return s
                },
                dismissChannelEditorPopup: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("308503");
            let r = Object.freeze({
                    id: null,
                    activeDescendant: null
                }),
                o = (0, i.default)(() => r);

            function s(e, t, n) {
                (0, l.useEffect)(() => {
                    t ? o.setState({
                        id: e,
                        activeDescendant: n
                    }) : o.setState({
                        id: null,
                        activeDescendant: null
                    })
                }, [e, t, n])
            }

            function a() {
                o.setState(() => r)
            }
        },
        35385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("65597"),
                u = n("151426"),
                d = n("77078"),
                c = n("10641"),
                f = n("538282"),
                p = n("13162"),
                m = n("166465"),
                h = n("824986"),
                E = n("921228"),
                S = n("929531"),
                g = n("848877"),
                T = n("882641"),
                v = n("850391"),
                C = n("13030"),
                y = n("365058"),
                I = n("782340"),
                N = n("537461"),
                _ = n("807739"),
                x = i.memo(i.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        type: r
                    } = e, x = (0, a.default)([m.default], () => m.default.getHasPackAddedNotification(), []);
                    i.useEffect(() => {
                        x && setTimeout(() => {
                            (0, p.dismissPackAddedNotification)()
                        }, y.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
                    }, [x]);
                    let [A, O, R] = (0, f.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), b = r === v.ChatInputTypes.NORMAL, k = (0, c.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP), M = (0, E.useIsPremiumTutorialEnabled)("ChannelEmojiPicker");
                    i.useEffect(() => {
                        A === C.ExpressionPickerViewType.EMOJI && O === v.ChatInputTypes.NORMAL && (0, g.dismissPremiumTutorialTooltip)(u.DismissibleContent.PREMIUM_TUTORIAL_EMOJI_PICKER_COMPOSER_TOOLTIP)
                    }, [A, O]);
                    let P = i.useCallback(() => {
                        (0, f.toggleExpressionPicker)(C.ExpressionPickerViewType.EMOJI, r)
                    }, [r]);
                    if (n) return null;
                    let L = M && b && !k ? () => (0, l.jsx)(S.default, {
                        tutorialType: h.PremiumTutorialTooltips.EMOJI_PICKER,
                        text: I.default.Messages.PREMIUM_TRIAL_TUTORIAL_EMOJI_TOOLTIP.format(),
                        unformattedText: I.default.Messages.PREMIUM_TRIAL_TUTORIAL_EMOJI_TOOLTIP_UNFORMATTED,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            src: _,
                            className: N.premiumTutorialEmojiImage
                        })
                    }) : null;
                    return (0, l.jsx)(d.Tooltip, {
                        color: d.TooltipColors.GREEN,
                        text: x ? I.default.Messages.INVENTORY_PACK_ADDED.format({
                            number: 1
                        }) : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            className: o(C.CHAT_INPUT_BUTTON_CLASSNAME, N.buttonContainer),
                            ref: t,
                            ...e,
                            children: (0, l.jsx)(T.default, {
                                className: N.emojiButton,
                                onClick: P,
                                active: A === C.ExpressionPickerViewType.EMOJI && O === r,
                                "aria-controls": R,
                                tabIndex: 0,
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                renderButtonContents: L
                            })
                        })
                    })
                }))
        },
        740483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("65597"),
                u = n("77078"),
                d = n("538282"),
                c = n("13162"),
                f = n("166465"),
                p = n("882641"),
                m = n("13030"),
                h = n("365058"),
                E = n("782340"),
                S = n("537461"),
                g = i.memo(i.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        type: r,
                        className: g,
                        onClick: T
                    } = e, v = (0, a.default)([f.default], () => f.default.getHasPackAddedNotification(), []);
                    i.useEffect(() => {
                        v && setTimeout(() => {
                            (0, c.dismissPackAddedNotification)()
                        }, h.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
                    }, [v]);
                    let [C, y] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], s.default), I = i.useCallback(() => {
                        (0, d.toggleMultiExpressionPicker)(r), null == T || T()
                    }, [r, T]);
                    return n ? null : (0, l.jsx)(u.Tooltip, {
                        color: u.TooltipColors.GREEN,
                        text: v ? E.default.Messages.INVENTORY_PACK_ADDED.format({
                            number: 1
                        }) : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            className: o(m.CHAT_INPUT_BUTTON_CLASSNAME, S.buttonContainer),
                            ref: t,
                            ...e,
                            children: (0, l.jsx)(p.default, {
                                className: o(S.emojiButton, g),
                                onClick: I,
                                active: (C === m.ExpressionPickerViewType.GIF || C === m.ExpressionPickerViewType.EMOJI || C === m.ExpressionPickerViewType.STICKER) && y === r,
                                tabIndex: 0,
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                }
                            })
                        })
                    })
                }))
        },
        695369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("446674"),
                u = n("77078"),
                d = n("538282"),
                c = n("374363"),
                f = n("551305"),
                p = n("110006"),
                m = n("378765"),
                h = n("49111"),
                E = n("13030"),
                S = n("782340"),
                g = n("537461"),
                T = i.memo(i.forwardRef(function(e, t) {
                    var n;
                    let {
                        disabled: r,
                        type: T
                    } = e, [v, C] = i.useState(!1), y = (0, a.useStateFromStores)([c.default], () => {
                        var e;
                        return v && Object.values(null !== (n = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== n ? n : {}).length <= 2
                    }), [I, N, _] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), x = i.useRef(0), A = i.useCallback(() => {
                        C(!0), clearTimeout(x.current), x.current = setTimeout(() => {
                            C(!1)
                        }, 1500)
                    }, []);
                    i.useEffect(() => () => {
                        clearTimeout(x.current)
                    }), (0, m.useComponentAction)({
                        event: h.ComponentActions.FAVORITE_GIF,
                        handler: A
                    });
                    let O = i.useCallback(() => {
                        (0, d.toggleExpressionPicker)(E.ExpressionPickerViewType.GIF, T)
                    }, [T]);
                    if (r) return null;
                    let R = I === E.ExpressionPickerViewType.GIF && N === T;
                    return (0, l.jsx)(u.Tooltip, {
                        text: y ? S.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            ref: t,
                            className: o(E.CHAT_INPUT_BUTTON_CLASSNAME, g.buttonContainer),
                            ...e,
                            children: (0, l.jsx)(f.default, {
                                innerClassName: g.button,
                                icon: p.default,
                                onClick: O,
                                isActive: R,
                                pulse: v,
                                "aria-label": S.default.Messages.GIF_BUTTON_LABEL,
                                "aria-expanded": R,
                                "aria-haspopup": "dialog",
                                "aria-controls": _
                            })
                        })
                    })
                }))
        },
        198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("812204"),
                s = n("685665"),
                a = n("649844"),
                u = n("551305"),
                d = n("978679"),
                c = n("158998"),
                f = n("49111"),
                p = n("646718"),
                m = n("782340"),
                h = n("537461"),
                E = i.memo(function(e) {
                    let {
                        disabled: t,
                        channel: n
                    } = e, {
                        analyticsLocations: i
                    } = (0, s.default)(o.default.GIFT_BUTTON), E = (0, c.useDirectMessageRecipient)(n);
                    if (t) return null;
                    let S = () => (0, a.default)({
                        isGift: !0,
                        giftRecipient: null === E ? void 0 : E,
                        initialPlanId: null,
                        subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: i,
                        analyticsObject: {
                            page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
                            section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: f.AnalyticsObjects.BUTTON_ICON,
                            objectType: f.AnalyticsObjectTypes.GIFT
                        }
                    });
                    return (0, l.jsx)(r.Tooltip, {
                        text: m.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
                        children: e => (0, l.jsx)(u.default, {
                            ...e,
                            innerClassName: h.button,
                            isActive: !1,
                            "aria-label": m.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                            "aria-haspopup": "dialog",
                            onClick: S,
                            children: (0, l.jsx)(d.default, {})
                        })
                    })
                })
        },
        315814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414055"),
                o = n("819855"),
                s = n("206625"),
                a = n("841098"),
                u = n("812204"),
                d = n("685665"),
                c = n("166960"),
                f = n("488705"),
                p = n("551305"),
                m = n("433328"),
                h = n("599110"),
                E = n("49111"),
                S = n("646718"),
                g = n("782340"),
                T = n("537461"),
                v = i.memo(function(e) {
                    let {
                        disabled: t,
                        referralsRemaining: n,
                        channel: v,
                        isResending: C
                    } = e, {
                        enabled: y
                    } = c.default.useExperiment({
                        location: "ec41f5_1"
                    }, {
                        autoTrackExposure: !0
                    }), I = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : C ? g.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : g.default.Messages.SHARE_NITRO_TOOLTIP, N = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [_, x] = i.useState(!1), [A, O] = i.useState(!1), R = (0, s.default)(null, () => O(!1)), {
                        analyticsLocations: b
                    } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), k = v.isDM() && void 0 !== v.recipients ? v.recipients[0] : null, M = (0, a.default)();
                    return t ? null : (0, l.jsxs)("div", {
                        ref: R,
                        className: T.buttonContainer,
                        children: [(0, l.jsx)(f.default, {
                            shouldShowPopout: A,
                            referralsRemaining: n,
                            channel: v,
                            onClose: () => O(!1),
                            isResending: C
                        }), (0, l.jsx)(r.Tooltip, {
                            text: I,
                            shouldShow: !A,
                            "aria-label": null != N ? N : I,
                            children: e => (0, l.jsx)("div", {
                                onMouseEnter: () => {
                                    !A && !_ && (x(!0), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: b,
                                        step: S.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                                        other_user_id: Number(k)
                                    }))
                                },
                                onMouseLeave: () => {
                                    x(!1)
                                },
                                children: (0, l.jsx)(p.default, {
                                    ...e,
                                    innerClassName: T.button,
                                    isActive: A,
                                    "aria-label": null != N ? N : I,
                                    "aria-haspopup": "dialog",
                                    onClick: () => {
                                        O(e => !e), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                            location_stack: b,
                                            step: S.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                            other_user_id: Number(k)
                                        })
                                    },
                                    children: (0, l.jsx)(m.default, {
                                        referralsRemaining: n,
                                        hovered: _,
                                        isResending: C,
                                        shouldShowBirthdayUX: y,
                                        isLightTheme: (0, o.isThemeLight)(M)
                                    })
                                })
                            })
                        })]
                    })
                })
        },
        503063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("716241"),
                d = n("574073"),
                c = n("529805"),
                f = n("393414"),
                p = n("300322"),
                m = n("967241"),
                h = n("377253"),
                E = n("116320"),
                S = n("381546"),
                g = n("49111"),
                T = n("782340"),
                v = n("650593");

            function C(e) {
                let {
                    channel: t,
                    message: n,
                    replyChainLength: r
                } = e;
                return i.useEffect(() => {
                    (0, u.trackWithMetadata)(g.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                        type: "Reply Chain (".concat(3, ")"),
                        reply_chain_length: r + 1,
                        channel_id: t.id,
                        guild_id: t.guild_id
                    })
                }, [t]), (0, l.jsxs)(a.Clickable, {
                    onClick: function() {
                        (0, c.deletePendingReply)(t.id), (0, m.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
                    },
                    className: v.threadSuggestionBar,
                    focusProps: {
                        offset: {
                            right: -4,
                            left: -4
                        }
                    },
                    children: [(0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        className: v.text,
                        variant: "text-sm/normal",
                        children: T.default.Messages.THREAD_REPLY_SUGGESTION.format({
                            count: Math.min(10, r + 1)
                        })
                    }), (0, l.jsx)(a.Text, {
                        color: "text-link",
                        className: v.createThreadButton,
                        variant: "text-sm/semibold",
                        children: T.default.Messages.CREATE_THREAD
                    })]
                })
            }

            function y(e) {
                let {
                    reply: t,
                    chatInputType: n
                } = e, {
                    channel: i,
                    message: r,
                    shouldMention: u,
                    showMentionToggle: m
                } = t, {
                    nick: y,
                    colorString: I,
                    colorRoleName: N
                } = (0, d.default)(r), _ = function(e, t) {
                    let n = e.id,
                        l = t.id;
                    return (0, s.useStateFromStores)([h.default], () => {
                        let e = l;
                        for (let t = 0; t < 10; t++) {
                            let l = h.default.getMessage(n, e);
                            if ((null == l ? void 0 : l.type) !== g.MessageTypes.REPLY || null == l.messageReference) return t;
                            e = l.messageReference.message_id
                        }
                        return 10
                    }, [n, l])
                }(i, r), x = (0, p.useCanStartPublicThread)(i, r), A = n.showThreadPromptOnReply && _ >= 2 && x;

                function O(e) {
                    e.stopPropagation(), (0, c.setPendingReplyShouldMention)(i.id, !u)
                }
                return (0, l.jsx)("div", {
                    className: v.clipContainer,
                    children: (0, l.jsxs)("div", {
                        className: v.container,
                        children: [(0, l.jsxs)("div", {
                            className: v.replyBar,
                            children: [(0, l.jsx)(a.Clickable, {
                                onClick: () => (0, f.transitionTo)(g.Routes.CHANNEL(i.getGuildId(), i.id, r.id)),
                                focusProps: {
                                    offset: {
                                        top: -8,
                                        right: -4,
                                        bottom: -8,
                                        left: -4
                                    }
                                },
                                children: (0, l.jsx)(a.Text, {
                                    color: "header-secondary",
                                    className: o(v.text, v.replyLabel),
                                    variant: "text-sm/normal",
                                    children: T.default.Messages.REPLYING_TO.format({
                                        userHook: (e, t) => (0, l.jsx)(a.NameWithRole, {
                                            className: v.name,
                                            name: y,
                                            color: I,
                                            roleName: N
                                        }, t)
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: v.actions,
                                children: [m && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(a.Tooltip, {
                                        text: u ? T.default.Messages.REPLY_MENTION_ON_TOOLTIP : T.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                        children: e => {
                                            let {
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r
                                            } = e;
                                            return (0, l.jsx)(a.Clickable, {
                                                role: "switch",
                                                "aria-checked": u,
                                                onClick: O,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r,
                                                children: (0, l.jsxs)(a.Text, {
                                                    variant: "text-sm/bold",
                                                    color: u ? "text-link" : "text-muted",
                                                    className: v.mentionButton,
                                                    children: [(0, l.jsx)(E.default, {
                                                        "aria-label": T.default.Messages.MENTION,
                                                        className: v.mentionIcon
                                                    }), u ? T.default.Messages.REPLY_MENTION_ON : T.default.Messages.REPLY_MENTION_OFF]
                                                })
                                            })
                                        }
                                    }), (0, l.jsx)("div", {
                                        className: v.separator,
                                        "aria-hidden": !0
                                    })]
                                }), (0, l.jsx)(a.Clickable, {
                                    className: v.closeButton,
                                    onClick: function(e) {
                                        e.stopPropagation(), (0, c.deletePendingReply)(i.id)
                                    },
                                    children: (0, l.jsx)(S.default, {
                                        className: v.closeIcon
                                    })
                                })]
                            })]
                        }), A && (0, l.jsx)(C, {
                            channel: i,
                            message: r,
                            replyChainLength: _
                        })]
                    })
                })
            }
        },
        108486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("301165"),
                o = n("151426"),
                s = n("819855"),
                a = n("77078"),
                u = n("373807"),
                d = n("841098"),
                c = n("812204"),
                f = n("685665"),
                p = n("10641"),
                m = n("393171"),
                h = n("649844"),
                E = n("551305"),
                S = n("978679"),
                g = n("953957"),
                T = n("762974"),
                v = n("158998"),
                C = n("49111"),
                y = n("646718"),
                I = n("782340"),
                N = n("426068"),
                _ = n("537461");
            let x = [{
                    box: "#FFD89E",
                    ribbon: "#FF7476"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#EED169",
                    ribbon: "#51A1EB"
                }, {
                    box: "#509C65",
                    ribbon: "#FFC96E"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                A = [{
                    box: "#EABB75",
                    ribbon: "#E4595C"
                }, {
                    box: "#2D7AA5",
                    ribbon: "#64C7C2"
                }, {
                    box: "#ECBF21",
                    ribbon: "#51A1EB"
                }, {
                    box: "#439359",
                    ribbon: "#D5A24C"
                }, {
                    box: "#FC90C4",
                    ribbon: "#777FCE"
                }, {
                    box: "#549DC6",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6F6F",
                    ribbon: "#81C29F"
                }],
                O = 1 / 300,
                R = (0, r.animated)(g.default),
                b = (0, r.animated)(T.default),
                k = (0, r.animated)(S.default);

            function M(e) {
                let {
                    hovered: t
                } = e, n = (0, d.default)(), [a, u] = function(e) {
                    let [t, n] = i.useState(!1), [l, r] = i.useState(Math.floor(7 * Math.random()));
                    return i.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= O;
                        if (n(t), !t) {
                            let e;
                            do e = Math.floor(7 * Math.random()); while (e === l);
                            r(e)
                        }
                    }, [e]), [t, l]
                }(t), c = (0, m.useIsDismissibleContentTypeDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2022), f = (0, r.useSpring)({
                    reverse: !t,
                    reset: !0,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 1.14
                    },
                    config: {
                        tension: 800,
                        friction: 24
                    }
                }), p = c ? u : 0, h = (0, s.isThemeDark)(n) ? x[p] : A[p];
                return !t && c ? (0, l.jsx)(k, {
                    style: f
                }) : c && a ? (0, l.jsx)(b, {
                    isDark: (0, s.isThemeDark)(n),
                    style: f
                }) : (0, l.jsx)(R, {
                    boxColor: h.box,
                    ribbonColor: h.ribbon,
                    style: f
                })
            }
            var P = i.memo(function(e) {
                let {
                    disabled: t,
                    channel: n
                } = e, {
                    analyticsLocations: r
                } = (0, f.default)(c.default.GIFT_BUTTON), [s, d] = i.useState(!1), S = (0, m.useIsDismissibleContentTypeDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2022), g = (0, v.useDirectMessageRecipient)(n);
                if (t) return null;
                let T = () => {
                        (0, h.default)({
                            isGift: !0,
                            giftRecipient: null == g ? void 0 : g,
                            initialPlanId: null,
                            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
                            analyticsLocations: r,
                            analyticsObject: {
                                page: n.isPrivate() ? C.AnalyticsPages.DM_CHANNEL : C.AnalyticsPages.GUILD_CHANNEL,
                                section: C.AnalyticsSections.CHANNEL_TEXT_AREA,
                                object: C.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                                objectType: C.AnalyticsObjectTypes.GIFT
                            }
                        })
                    },
                    x = (0, l.jsxs)("div", {
                        className: N.container,
                        onMouseEnter: () => {
                            !s && d(!0)
                        },
                        onMouseLeave: () => {
                            d(!1)
                        },
                        children: [S ? null : (0, l.jsx)(u.default, {
                            hovered: s,
                            onComplete: () => d(!1)
                        }), (0, l.jsx)(E.default, {
                            innerClassName: _.button,
                            "aria-label": I.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                            isActive: !1,
                            onClick: () => {
                                d(!1), (0, p.markDismissibleContentAsDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2022), T()
                            },
                            children: (0, l.jsx)(M, {
                                hovered: s
                            })
                        })]
                    });
                return S ? (0, l.jsx)(a.TooltipContainer, {
                    className: N.container,
                    text: I.default.Messages.SEASONAL_GIFTING_SPREAD_CHEER_TOOLTIP,
                    children: x
                }) : x
            })
        },
        923582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("551305"),
                a = n("164424"),
                u = n("782340"),
                d = n("67046"),
                c = i.memo(function(e) {
                    let {
                        onClick: t,
                        disabled: n = !1
                    } = e;
                    return (0, l.jsx)("div", {
                        className: d.separator,
                        children: (0, l.jsx)("div", {
                            className: d.buttonContainer,
                            children: (0, l.jsx)(s.default, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                childClassName: o(d.buttonChild, {
                                    [d.disabled]: n,
                                    [d.activeButtonChild]: !n
                                }),
                                onClick: t,
                                disabled: n,
                                isActive: !1,
                                "aria-label": u.default.Messages.SEND_MESSAGE,
                                children: (0, l.jsx)(a.default, {
                                    className: d.sendIcon
                                })
                            })
                        })
                    })
                })
        },
        80921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("151426"),
                u = n("77078"),
                d = n("200197"),
                c = n("10641"),
                f = n("538282"),
                p = n("824986"),
                m = n("921228"),
                h = n("929531"),
                E = n("848877"),
                S = n("551305"),
                g = n("791106"),
                T = n("595086"),
                v = n("88497"),
                C = n("850391"),
                y = n("13030"),
                I = n("782340"),
                N = n("537461"),
                _ = i.memo(i.forwardRef(function(e, t) {
                    let n, {
                            disabled: r,
                            type: v
                        } = e,
                        [_, x, A] = (0, f.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default),
                        O = i.useContext(d.default),
                        [R, b] = i.useState(!1),
                        k = _ === y.ExpressionPickerViewType.STICKER,
                        M = v === C.ChatInputTypes.NORMAL,
                        P = (0, c.useIsDismissibleContentDismissed)(a.DismissibleContent.PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP),
                        L = (0, m.useIsPremiumTutorialEnabled)("ChannelStickerPickerButton"),
                        U = L && M && !P;
                    i.useEffect(() => {
                        _ === y.ExpressionPickerViewType.STICKER && x === C.ChatInputTypes.NORMAL && (0, E.dismissPremiumTutorialTooltip)(a.DismissibleContent.PREMIUM_TUTORIAL_STICKER_PICKER_COMPOSER_TOOLTIP)
                    }, [_, x]);
                    let D = i.useCallback(() => {
                        (0, f.toggleExpressionPicker)(y.ExpressionPickerViewType.STICKER, v)
                    }, [v]);
                    i.useEffect(() => {
                        let e = () => {
                                requestAnimationFrame(() => {
                                    b(!0)
                                })
                            },
                            t = () => {
                                requestAnimationFrame(() => {
                                    b(!1)
                                })
                            };
                        return O.addListener("sticker-suggestions-shown", e), O.addListener("sticker-suggestions-hidden", t), () => {
                            O.removeListener("sticker-suggestions-shown", e), O.removeListener("sticker-suggestions-hidden", t)
                        }
                    }, [O]);
                    let j = (0, u.useRedesignIconContext)().enabled;
                    return r ? null : (n = (0, l.jsx)(T.default, {
                        className: j ? "" : N.stickerIcon,
                        winking: R,
                        color: U ? g.GradientCssUrls.PREMIUM_TRIAL_TUTORIAL : "currentColor"
                    }), (0, l.jsx)("div", {
                        className: o(y.CHAT_INPUT_BUTTON_CLASSNAME, N.buttonContainer),
                        ref: t,
                        children: (0, l.jsx)(S.default, {
                            innerClassName: o(N.button, N.stickerButton, {
                                [N.stickerButtonWithNotification]: !1,
                                [N.stickerButtonTilted]: R && !k
                            }),
                            onClick: D,
                            isActive: k,
                            "aria-label": I.default.Messages.STICKER_BUTTON_LABEL,
                            "aria-expanded": k,
                            "aria-haspopup": "dialog",
                            "aria-controls": A,
                            sparkle: !1,
                            notification: null,
                            children: U ? (0, l.jsx)(h.default, {
                                tutorialType: p.PremiumTutorialTooltips.STICKER_PICKER,
                                text: I.default.Messages.PREMIUM_TRIAL_TUTORIAL_STICKER_TOOLTIP.format(),
                                unformattedText: I.default.Messages.PREMIUM_TRIAL_TUTORIAL_STICKER_TOOLTIP_UNFORMATTED,
                                children: n
                            }) : n
                        })
                    }))
                }))
        },
        231868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("77078"),
                s = n("328511"),
                a = n("467094"),
                u = n("41170"),
                d = n("381546"),
                c = n("898260"),
                f = n("782340"),
                p = n("108755"),
                m = i.memo(function(e) {
                    var t;
                    let {
                        channelId: n,
                        chatInputType: m
                    } = e, [h, E] = i.useState(null), S = (0, r.useStateFromStores)([s.default], () => s.default.getStickerPreview(n, m.drafts.type));
                    return (null === (t = m.stickers) || void 0 === t ? void 0 : t.allowSending) && null != S && 0 !== S.length ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: p.stickerPreviews,
                            children: S.map(e => (0, l.jsxs)("div", {
                                className: p.stickerPreviewContainer,
                                children: [(0, l.jsx)(o.Clickable, {
                                    onFocus: () => E(e.id),
                                    onBlur: () => E(null),
                                    className: p.closeButton,
                                    "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                                        name: e.name
                                    }),
                                    onClick: () => (0, a.clearStickerPreview)(n, m.drafts.type),
                                    children: (0, l.jsx)("div", {
                                        className: p.closeIconContainer,
                                        children: (0, l.jsx)(d.default, {
                                            className: p.closeIcon
                                        })
                                    })
                                }), (0, l.jsx)(u.default, {
                                    isInteracting: h === e.id,
                                    className: p.stickerPreview,
                                    size: 48,
                                    sticker: e
                                })]
                            }, e.id))
                        }), (0, l.jsx)(c.default, {
                            className: p.stickerPreviewDivider
                        })]
                    }) : null
                })
        },
        834725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAutocompleteOpen: function() {
                    return u
                },
                trackAutocompleteSelect: function() {
                    return d
                },
                trackStickerPreviewSelect: function() {
                    return c
                }
            });
            var l, i, r = n("716241"),
                o = n("161585"),
                s = n("599110"),
                a = n("49111");

            function u(e, t, n) {
                var l, i;
                s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, {
                    ...(0, r.collectChannelAnalyticsMetadata)(t),
                    ...(0, r.collectGuildAnalyticsMetadata)(t.guild_id),
                    autocomplete_type: e,
                    num_emoji_results: null !== (l = null == n ? void 0 : n.numEmojiResults) && void 0 !== l ? l : 0,
                    num_sticker_results: null !== (i = null == n ? void 0 : n.numStickerResults) && void 0 !== i ? i : 0
                })
            }

            function d(e, t, n, l) {
                var i, o, u, d, c;
                s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, {
                    ...(0, r.collectChannelAnalyticsMetadata)(n),
                    ...(0, r.collectGuildAnalyticsMetadata)(n.guild_id),
                    autocomplete_type: e,
                    selection_type: t,
                    emoji_id: null == l ? void 0 : l.emojiId,
                    sticker_id: null == l ? void 0 : l.stickerId,
                    num_emoji_results: null !== (i = null == l ? void 0 : l.numEmojiResults) && void 0 !== i ? i : 0,
                    num_sticker_results: null !== (o = null == l ? void 0 : l.numStickerResults) && void 0 !== o ? o : 0,
                    emoji_name: null !== (u = null == l ? void 0 : l.expressionName) && void 0 !== u ? u : "",
                    is_custom: null !== (d = null == l ? void 0 : l.isCustom) && void 0 !== d && d,
                    is_animated: null !== (c = null == l ? void 0 : l.isAnimated) && void 0 !== c && c
                })
            }(l = i || (i = {})).AUTOCOMPLETE = "autocomplete", l.AUTOSUGGEST = "autosuggest", l.STICKER_PICKER = "picker";

            function c(e) {
                let {
                    sticker: t,
                    stickerSelectLocation: n,
                    isReplacement: l,
                    analyticsLocations: r
                } = e;
                s.default.track(a.AnalyticEvents.STICKER_ATTACHED, {
                    replaced: l,
                    source: function(e) {
                        switch (e) {
                            case o.StickerSelectLocation.AUTOCOMPLETE:
                                return i.AUTOCOMPLETE;
                            case o.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                                return i.AUTOSUGGEST;
                            case o.StickerSelectLocation.STICKER_PICKER:
                                return i.STICKER_PICKER;
                            default:
                                return null
                        }
                    }(n),
                    sticker_id: t.id,
                    location_stack: r
                })
            }
        },
        537566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("383018"),
                u = n("228226"),
                d = n("829290"),
                c = n("503063"),
                f = n("537461"),
                p = i.memo(e => {
                    let {
                        channel: t,
                        type: n,
                        activeCommand: i,
                        pendingReply: r
                    } = e, {
                        activeCommandOption: p,
                        activeCommandOptionStates: m
                    } = (0, s.useStateFromStoresObject)([a.default], () => ({
                        activeCommandOption: a.default.getActiveOption(t.id),
                        activeCommandOptionStates: a.default.getOptionStates(t.id)
                    })), h = (0, d.useShouldShowPTONotice)(t), E = [];
                    return (null != i && E.push((0, l.jsx)(u.default, {
                        activeCommand: i,
                        activeOption: null != p ? p : null,
                        optionStates: m
                    })), null != r && E.push((0, l.jsx)(c.default, {
                        reply: r,
                        chatInputType: n
                    })), h && E.push((0, l.jsx)(d.StaffPTOBar, {})), 0 === (E = E.map((e, t) => {
                        let n = t === E.length - 1;
                        return (0, l.jsx)("div", {
                            className: o({
                                [f.stackedAttachedBar]: !n
                            }),
                            children: e
                        }, t)
                    })).length) ? null : (0, l.jsx)("div", {
                        className: f.attachedBars,
                        children: E
                    })
                })
        },
        912823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("394846"),
                o = n("446674"),
                s = n("798609"),
                a = n("206230"),
                u = n("427953"),
                d = n("383018"),
                c = n("619935"),
                f = n("540692"),
                p = n("53253"),
                m = n("1607"),
                h = n("328511"),
                E = n("585722"),
                S = n("697218"),
                g = n("719923"),
                T = n("459343"),
                v = n("998206"),
                C = n("35385"),
                y = n("740483"),
                I = n("695369"),
                N = n("198"),
                _ = n("315814"),
                x = n("108486"),
                A = n("923582"),
                O = n("80921"),
                R = n("49111"),
                b = n("646718"),
                k = n("537461");

            function M(e) {
                let {
                    disabled: t,
                    channel: n
                } = e, {
                    enabled: r
                } = p.default.useExperiment({
                    location: "dc120b_1"
                }, {
                    autoTrackExposure: !1
                }), o = (0, p.useIsSeasonalGiftingActive)();
                i.useEffect(() => {
                    o && p.default.trackExposure({
                        location: "dc120b_2"
                    })
                }, [o]);
                let s = r && o;
                return s ? (0, l.jsx)(x.default, {
                    disabled: t,
                    channel: n
                }) : (0, l.jsx)(N.default, {
                    disabled: t,
                    channel: n
                })
            }
            var P = i.memo(function(e) {
                var t, n, i, p, N, x, P, L, U, D, j, w;
                let {
                    type: B,
                    disabled: K,
                    channel: F,
                    handleSubmit: G,
                    isEmpty: V
                } = e, H = (0, o.useStateFromStores)([a.default], () => a.default.isSubmitButtonEnabled), W = (0, o.useStateFromStores)([h.default], () => h.default.getStickerPreview(F.id, B.drafts.type)), q = null != W && W.length > 0, Y = (0, o.useStateFromStores)([E.default], () => E.default.getUploads(F.id, B.drafts.type)), {
                    activeCommand: z,
                    activeCommandOption: Q
                } = (0, o.useStateFromStoresObject)([d.default], () => ({
                    activeCommand: d.default.getActiveCommand(F.id),
                    activeCommandOption: d.default.getActiveOption(F.id)
                })), {
                    paymentsBlocked: X
                } = c.default.useExperiment({
                    location: "dc120b_3"
                }, {
                    autoTrackExposure: !1
                }), J = [], {
                    enabled: Z
                } = m.default.getCurrentConfig({
                    location: "dc120b_4"
                }, {
                    autoTrackExposure: !1
                }), $ = S.default.getCurrentUser(), ee = null !== (P = (0, o.useStateFromStores)([f.default], () => Z && g.default.isPremiumExactly($, b.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== P ? P : 0, et = (0, o.useStateFromStores)([f.default], () => {
                    if (!F.isDM() || void 0 === F.recipients || F.recipients.length > 1 || !Z) return !1;
                    let e = F.recipients[0],
                        t = f.default.getSentUserIds();
                    return t.includes(e)
                }), [en, el] = (0, o.useStateFromStoresArray)([f.default, S.default], () => {
                    let e = [!1, !1];
                    if (!F.isDM() || void 0 === F.recipients || F.recipients.length > 1) return e;
                    let t = F.recipients[0],
                        n = S.default.getUser(t);
                    if (null == n) return e;
                    let l = n.bot;
                    if (l) return e;
                    let i = f.default.getRecipientEligibility(t),
                        r = Z && (et || ee > 0) && i;
                    return [r, i]
                }), {
                    isActivitiesInTextEnabled: ei
                } = u.ActivitiesInTextExperiment.useExperiment({
                    location: "ChannelTextAreaButtons"
                }, {
                    autoTrackExposure: !1
                }), er = F.isDM() || F.isGroupDM(), eo = er && !r.isMobile, {
                    enableUnifiedIconOpenLastViewedTab: es,
                    enableUnifiedIconOpenEmojiTab: ea
                } = T.UnifiedChatInputExpressionIconExperiment.useExperiment({
                    location: "DM Channel"
                }, {
                    autoTrackExposure: eo
                }), eu = eo && es, ed = eo && ea;
                return (!r.isMobile && (F.isDM() && (null === (L = B.gifts) || void 0 === L ? void 0 : L.button) != null && null == z && (g.default.isPremiumExactly($, b.PremiumTypes.TIER_2) && el && m.default.trackExposure({
                    location: "dc120b_5"
                }), en && J.push((0, l.jsx)(_.default, {
                    disabled: K,
                    referralsRemaining: ee,
                    channel: F,
                    isResending: et
                }, "referral"))), ei && F.type === R.ChannelTypes.GUILD_TEXT && null == z && (null === (U = B.commands) || void 0 === U ? void 0 : U.enabled) && J.push((0, l.jsx)(v.default, {
                    disabled: K,
                    channel: F,
                    type: B
                }, "activity")), (null === (D = B.gifts) || void 0 === D ? void 0 : D.button) != null && null == z && !X && J.push((0, l.jsx)(M, {
                    disabled: K,
                    channel: F
                }, "gift")), (null === (j = B.gifs) || void 0 === j ? void 0 : j.button) != null && !eu && !ed && null == z && J.push((0, l.jsx)(I.default, {
                    disabled: K,
                    type: B
                }, "gif")), (null === (w = B.stickers) || void 0 === w ? void 0 : w.button) != null && !eu && !ed && null == z && J.push((0, l.jsx)(O.default, {
                    disabled: K,
                    type: B
                }, "sticker"))), (null === (t = B.emojis) || void 0 === t ? void 0 : t.button) != null && (ed || !eu) && (null == z || null != Q && Q.type !== s.ApplicationCommandOptionType.ATTACHMENT) && J.push((0, l.jsx)(C.default, {
                    disabled: K,
                    type: B
                }, "emoji")), eu && ((null === (n = B.gifs) || void 0 === n ? void 0 : n.button) != null || (null === (i = B.stickers) || void 0 === i ? void 0 : i.button) != null || (null === (p = B.emojis) || void 0 === p ? void 0 : p.button) != null) && null == z && J.push((0, l.jsx)(y.default, {
                    disabled: K,
                    type: B
                }, "expression")), (null === (N = B.submit) || void 0 === N ? void 0 : N.button) != null && ((null === (x = B.submit) || void 0 === x ? void 0 : x.ignorePreference) || H) && J.push((0, l.jsx)(A.default, {
                    onClick: G,
                    disabled: K || 0 === Y.length && V && !q
                }, "submit")), 0 === J.length) ? null : (0, l.jsx)("div", {
                    className: k.buttons,
                    children: J
                })
            })
        },
        681060: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eo
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("44170"),
                a = n("627445"),
                u = n.n(a),
                d = n("16470"),
                c = n("394846"),
                f = n("316693"),
                p = n("446674"),
                m = n("77078"),
                h = n("295426"),
                E = n("206230"),
                S = n("812204"),
                g = n("685665"),
                T = n("383018"),
                v = n("529190"),
                C = n("829290"),
                y = n("842343"),
                I = n("200197"),
                N = n("538282"),
                _ = n("241488"),
                x = n("292936"),
                A = n("791234"),
                O = n("267567"),
                R = n("217535"),
                b = n("558901"),
                k = n("328511"),
                M = n("467094"),
                P = n("24373"),
                L = n("300322"),
                U = n("845579"),
                D = n("26989"),
                j = n("957255"),
                w = n("18494"),
                B = n("769264"),
                K = n("585722"),
                F = n("697218"),
                G = n("378765"),
                V = n("991170"),
                H = n("773336"),
                W = n("545054"),
                q = n("850391"),
                Y = n("743825"),
                z = n("231868"),
                Q = n("834725"),
                X = n("537566"),
                J = n("912823"),
                Z = n("376215"),
                $ = n("830618"),
                ee = n("848471"),
                et = n("153213"),
                en = n("49111"),
                el = n("406291"),
                ei = n("13030"),
                er = n("537461"),
                eo = i.memo(i.forwardRef(function(e, t) {
                    var r, a, eo, es, ea, eu, ed, ec, ef, ep, em, eh, eE;
                    let {
                        textValue: eS,
                        richValue: eg,
                        className: eT,
                        innerClassName: ev,
                        id: eC,
                        required: ey,
                        disabled: eI,
                        placeholder: eN,
                        accessibilityLabel: e_,
                        channel: ex,
                        type: eA,
                        focused: eO,
                        renderAttachButton: eR,
                        renderApplicationCommandIcon: eb,
                        pendingReply: ek,
                        onChange: eM,
                        onResize: eP,
                        onBlur: eL,
                        onFocus: eU,
                        onKeyDown: eD,
                        onSubmit: ej,
                        promptToUpload: ew,
                        highlighted: eB,
                        canMentionRoles: eK,
                        canMentionChannels: eF,
                        maxCharacterCount: eG,
                        allowNewLines: eV = !0,
                        characterCountClassName: eH,
                        "aria-describedby": eW,
                        "aria-labelledby": eq,
                        setEditorRef: eY,
                        autoCompletePosition: ez,
                        children: eQ,
                        disableThemedBackground: eX = !1,
                        emojiPickerCloseOnModalOuterClick: eJ,
                        parentModalKey: eZ
                    } = e;
                    u(null != eA, "chat input type must be set");
                    let {
                        AnalyticsLocationProvider: e$
                    } = (0, g.default)(S.default.CHANNEL_TEXT_AREA), e0 = function(e) {
                        let t = i.useRef(null);
                        if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
                        return null == e ? t : e
                    }(t), e1 = i.useRef(null), e8 = i.useRef(null), e4 = i.useRef(null), e6 = i.useRef(null);
                    null == eY || eY(e8.current);
                    let {
                        activeCommand: e2,
                        activeCommandSection: e3
                    } = (0, p.useStateFromStoresObject)([T.default], () => {
                        var e, t;
                        return {
                            activeCommand: (null === (e = eA.commands) || void 0 === e ? void 0 : e.enabled) ? T.default.getActiveCommand(ex.id) : null,
                            activeCommandSection: (null === (t = eA.commands) || void 0 === t ? void 0 : t.enabled) ? T.default.getActiveCommandSection(ex.id) : null
                        }
                    }), {
                        isLurking: e7,
                        isPendingMember: e9,
                        disabled: e5,
                        canAttachFiles: te,
                        canCreateThreads: tt,
                        canEveryoneSendMessages: tn
                    } = function(e, t, n, l) {
                        let i = e.getGuildId(),
                            r = (0, p.useStateFromStores)([O.default], () => null != i && O.default.isLurking(i), [i]),
                            o = (0, p.useStateFromStores)([D.default, F.default], () => {
                                var e, t;
                                let n = F.default.getCurrentUser();
                                return null !== (t = null != i && null != n ? null === (e = D.default.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                            }),
                            s = (0, p.useStateFromStoresObject)([j.default], () => {
                                var i, r;
                                let s = e.isPrivate(),
                                    a = j.default.computePermissions(e),
                                    u = f.default.has(a, en.Permissions.CREATE_PUBLIC_THREADS) || f.default.has(a, en.Permissions.CREATE_PRIVATE_THREADS),
                                    d = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireSendMessages) || f.default.has(a, en.Permissions.SEND_MESSAGES)),
                                    c = d && f.default.has(a, en.Permissions.ATTACH_FILES),
                                    p = null != n,
                                    m = (0, L.computeIsReadOnlyThread)(e);
                                return {
                                    disabled: l || o || !s && !d || m,
                                    canAttachFiles: !0 === t.attachments && (s || o || c || p),
                                    canCreateThreads: u,
                                    canEveryoneSendMessages: V.default.canEveryoneRole(en.Permissions.SEND_MESSAGES, e)
                                }
                            }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, o]);
                        return {
                            isLurking: r,
                            isPendingMember: o,
                            ...s
                        }
                    }(ex, eA, e2, eI), tl = eA.toolbarType === q.SlateToolbarTypes.STATIC, ti = !U.UseLegacyChatInput.useSetting() && !(0, H.isAndroidWeb)() && null != window.ResizeObserver, tr = !ti || !(null === (r = eA.commands) || void 0 === r ? void 0 : r.enabled) || !eO || eS !== el.COMMAND_SENTINEL, to = (0, R.default)(), {
                        isSubmitButtonEnabled: ts,
                        fontSize: ta
                    } = (0, p.useStateFromStoresObject)([E.default], () => ({
                        fontSize: E.default.fontSize,
                        isSubmitButtonEnabled: E.default.isSubmitButtonEnabled
                    })), tu = (0, p.useStateFromStores)([B.default], () => B.default.isEnabled());
                    ! function(e, t) {
                        let n = i.useCallback(() => {
                                !t && (0, N.toggleExpressionPicker)(ei.ExpressionPickerViewType.EMOJI, e)
                            }, [t, e]),
                            l = i.useCallback(() => {
                                var n;
                                !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, N.toggleExpressionPicker)(ei.ExpressionPickerViewType.GIF, e)
                            }, [t, e]),
                            r = i.useCallback(() => {
                                var n;
                                !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, N.toggleExpressionPicker)(ei.ExpressionPickerViewType.STICKER, e)
                            }, [t, e]);
                        (0, G.useComponentAction)({
                            event: en.ComponentActions.TOGGLE_EMOJI_POPOUT,
                            handler: n
                        }), (0, G.useComponentAction)({
                            event: en.ComponentActions.TOGGLE_GIF_PICKER,
                            handler: l
                        }), (0, G.useComponentAction)({
                            event: en.ComponentActions.TOGGLE_STICKER_PICKER,
                            handler: r
                        })
                    }(eA, e5);
                    let {
                        eventEmitter: td,
                        handleEditorSelectionChanged: tc
                    } = function(e, t, n) {
                        let [l] = i.useState(() => new s.EventEmitter);
                        return i.useEffect(() => {
                            l.emit("text-changed", t, n)
                        }, [t, n, l]), {
                            eventEmitter: l,
                            handleEditorSelectionChanged: t => {
                                null != e.current && l.emit("selection-changed", t)
                            }
                        }
                    }(e8, eS, eg), {
                        submitting: tf,
                        submit: tp,
                        handleSubmit: tm
                    } = function(e, t, r, o) {
                        let [s, a] = i.useState(!1), u = i.useCallback((i, d, c, f, p) => {
                            var E, S, g;
                            if (s) return;
                            a(!0);
                            let T = null !== (S = null === (E = k.default.getStickerPreview(o, t.drafts.type)) || void 0 === E ? void 0 : E.map(e => e.id)) && void 0 !== S ? S : [],
                                v = null !== (g = K.default.getUploads(o, t.drafts.type)) && void 0 !== g ? g : [];
                            if (null == d && !f && !p && (0, A.shouldShowAddMediaToOriginalPostModal)(v, o)) {
                                a(!1), (0, m.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("67994").then(n.bind(n, "67994"));
                                    return t => (0, l.jsx)(e, {
                                        ...t,
                                        threadId: o,
                                        attachments: v,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                    })
                                });
                                return
                            }
                            e({
                                value: i,
                                uploads: v,
                                stickers: T,
                                command: d,
                                commandOptionValues: c,
                                isGif: f
                            }).then(e => {
                                var n, l, i, s;
                                let {
                                    shouldClear: u,
                                    shouldRefocus: d
                                } = e;
                                let c = (n = u, l = t, null !== (s = n && (null === (i = l.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== s && s),
                                    f = null != r.current;
                                if (c) {
                                    if (o !== w.default.getChannelId()) h.default.saveDraft(o, "", t.drafts.type);
                                    else f && r.current.clearValue()
                                }
                                f && (a(!1), (0, N.closeExpressionPicker)(), d && r.current.focus())
                            })
                        }, [r, e, s, t, o]), d = i.useCallback(e => {
                            var t;
                            null == r || null === (t = r.current) || void 0 === t || t.submit(e)
                        }, []);
                        return {
                            submitting: s,
                            submit: u,
                            handleSubmit: d
                        }
                    }(ej, eA, e8, ex.id), {
                        autocompleteRef: th,
                        handleMaybeShowAutocomplete: tE,
                        handleHideAutocomplete: tS
                    } = function() {
                        let e = i.useRef(null),
                            t = i.useCallback(() => {
                                var t;
                                null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
                            }, []),
                            n = i.useCallback(() => {
                                var t;
                                null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
                            }, []);
                        return {
                            autocompleteRef: e,
                            handleMaybeShowAutocomplete: t,
                            handleHideAutocomplete: n
                        }
                    }();
                    let tg = (ef = tp, ep = eA, em = e8, i.useCallback(e => {
                        var t, n;
                        ep === q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = em.current) || void 0 === n || n.insertGIF(e) : ef(e.url, void 0, void 0, !0), (0, N.closeExpressionPicker)(), null === (t = em.current) || void 0 === t || t.focus()
                    }, [em, ef, ep]));
                    let tT = (eh = e8, i.useCallback(function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                l = eh.current;
                            null != e && null != l && l.insertEmoji(e, t, n), t && (0, N.closeExpressionPicker)()
                        }, [eh])),
                        tv = function(e) {
                            let {
                                editorRef: t,
                                disabled: n,
                                textValue: l,
                                channelId: r,
                                chatInputType: o,
                                submit: s
                            } = e, {
                                analyticsLocations: a
                            } = (0, g.default)();
                            return i.useCallback((e, i) => {
                                var u, d;
                                !n && ((0, P.shouldAttachSticker)(i, l, r, o.drafts.type) ? ((0, Q.trackStickerPreviewSelect)({
                                    sticker: e,
                                    stickerSelectLocation: i,
                                    isReplacement: null != k.default.getStickerPreview(r, o.drafts.type),
                                    analyticsLocations: a
                                }), (0, M.addStickerPreview)(r, e, o.drafts.type)) : (s({
                                    value: "",
                                    uploads: void 0,
                                    stickers: [e.id]
                                }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, N.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
                            }, [n, l, r, o.drafts.type, t, a, s])
                        }({
                            editorRef: e8,
                            disabled: e5,
                            textValue: eS,
                            channelId: ex.id,
                            chatInputType: eA,
                            submit: ej
                        });
                    let tC = (eE = e8, i.useCallback(e => {
                            let t = eE.current;
                            null != e && null != t && t.insertSound(e), (0, N.closeExpressionPicker)()
                        }, [eE])),
                        ty = i.useCallback(() => {
                            var e;
                            return null == e6 ? void 0 : null === (e = e6.current) || void 0 === e ? void 0 : e.hide()
                        }, []),
                        {
                            editorHeight: tI,
                            handleResize: tN
                        } = function(e) {
                            let [t, n] = i.useState(0), l = i.useCallback(t => {
                                n(null != t ? t : 0), null == e || e(t)
                            }, [e]);
                            return {
                                editorHeight: t,
                                handleResize: l
                            }
                        }(eP),
                        {
                            handleTab: t_,
                            handleEnter: tx,
                            handleMoveSelection: tA
                        } = function(e, t, n) {
                            let l = i.useCallback(() => {
                                    var l, i;
                                    return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
                                }, [n]),
                                r = i.useCallback(() => {
                                    var l, i;
                                    return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
                                }, [n]),
                                o = i.useCallback(l => {
                                    var i, r;
                                    return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(l))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onMoveSelection(l)) || !1
                                }, [n]);
                            return {
                                handleTab: l,
                                handleEnter: r,
                                handleMoveSelection: o
                            }
                        }(th, e1, tr),
                        {
                            expressionPickerView: tO,
                            shouldHideExpressionPicker: tR,
                            handleAutocompleteVisibilityChange: tb,
                            handleOuterClick: tk
                        } = function(e, t, n) {
                            let [l, r] = (0, N.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
                            i.useEffect(() => () => {
                                (0, N.closeExpressionPicker)(e)
                            }, [e]);
                            let o = i.useCallback(e => {
                                    t.emit("autocomplete-visibility-change", e), e && (0, N.closeExpressionPicker)()
                                }, [t]),
                                s = i.useCallback(() => {
                                    var e;
                                    null == l && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
                                }, [l]),
                                a = null == l || null == r || r !== e;
                            return {
                                expressionPickerView: l,
                                shouldHideExpressionPicker: a,
                                handleAutocompleteVisibilityChange: o,
                                handleOuterClick: s
                            }
                        }(eA, td, e8);
                    (0, W.useHereMentionCallback)(td, ex.guild_id, ex.id);
                    let tM = null != ek,
                        tP = e5 && !((e7 || e9) && tn) || tf && (null === (a = eA.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit),
                        tL = null;
                    null != e2 ? tL = null == eb ? void 0 : eb(e2, e3, er.attachButton) : (!e5 || tt) && (tL = null == eR ? void 0 : eR(eA === q.ChatInputTypes.NORMAL, tM, er.attachButton));
                    let tU = ti && null != eg && !e5 && eA.showCharacterCount && null == e2,
                        tD = ti && !__OVERLAY__ && null != eg && null == e2,
                        tj = function(e, t, n, l) {
                            var i, r;
                            let o = U.ExpressionSuggestionsEnabled.useSetting(),
                                s = (0, p.useStateFromStores)([k.default], () => k.default.getStickerPreview(e.id, t.drafts.type)),
                                a = null != s && s.length > 0;
                            return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !a && (null === (r = l.current) || void 0 === r ? void 0 : r.isVisible()) !== !0 && !__OVERLAY__ && null != n
                        }(ex, eA, eg, th),
                        tw = (0, C.useShouldShowPTONotice)(ex),
                        tB = null != e2 || null != ek || tw;
                    return (0, l.jsx)(I.EventEmitterProvider, {
                        value: td,
                        children: (0, l.jsxs)(e$, {
                            children: [tD && tl ? (0, l.jsx)(et.default, {
                                editorRef: e8,
                                options: eA.markdown,
                                channel: ex
                            }) : tD ? (0, l.jsx)(ee.default, {
                                ref: e6,
                                editorRef: e8,
                                containerRef: e4,
                                options: eA.markdown
                            }) : null, (0, l.jsxs)("div", {
                                ref: e0,
                                className: o(eT, {
                                    [er.channelTextArea]: !0,
                                    [er.channelTextAreaDisabled]: tP,
                                    [er.highlighted]: eB,
                                    [er.textAreaMobileThemed]: c.isMobile
                                }),
                                onMouseDown: tk,
                                children: [(0, l.jsx)(X.default, {
                                    type: eA,
                                    channel: ex,
                                    activeCommand: e2,
                                    pendingReply: ek
                                }), (0, l.jsxs)("div", {
                                    ref: e4,
                                    onScroll: ty,
                                    className: o(ev, {
                                        [er.scrollableContainer]: !0,
                                        [er.themedBackground]: !eX,
                                        [er.webkit]: "Blink" === platform.layout,
                                        [er.hasConnectedBar]: tB
                                    }),
                                    children: [(0, l.jsx)(z.default, {
                                        channelId: ex.id,
                                        chatInputType: eA
                                    }), eA.hideAttachmentArea ? null : (0, l.jsx)(Z.default, {
                                        channelId: ex.id,
                                        type: eA,
                                        canAttachFiles: te
                                    }), (0, l.jsxs)("div", {
                                        className: o(er.inner, {
                                            [er.innerDisabled]: tP,
                                            [er.sansAttachButton]: eA !== q.ChatInputTypes.EDIT && (null != tL || tP && null == tL || e7),
                                            [er.sansAttachButtonCreateThread]: eA === q.ChatInputTypes.THREAD_CREATION,
                                            [er.sansAttachButtonCreatePost]: eA === q.ChatInputTypes.CREATE_FORUM_POST
                                        }),
                                        children: [tL, (0, l.jsx)(m.FocusRing, {
                                            ringTarget: e0,
                                            ringClassName: er.focusRing,
                                            children: (0, l.jsx)(Y.default, {
                                                ref: e8,
                                                id: eC,
                                                focused: eO,
                                                useSlate: ti,
                                                textValue: eS,
                                                richValue: eg,
                                                disabled: e5,
                                                placeholder: eN,
                                                required: ey,
                                                accessibilityLabel: e_,
                                                isPreviewing: (e7 || e9) && tn,
                                                channel: ex,
                                                type: eA,
                                                canPasteFiles: te,
                                                uploadPromptCharacterCount: en.MAX_MESSAGE_LENGTH_PREMIUM,
                                                maxCharacterCount: null != eG ? eG : to,
                                                allowNewLines: eV,
                                                "aria-describedby": eW,
                                                onChange: eM,
                                                onResize: tN,
                                                onBlur: eL,
                                                onFocus: eU,
                                                onKeyDown: eD,
                                                onSubmit: tp,
                                                onTab: t_,
                                                onEnter: tx,
                                                onMoveSelection: tA,
                                                onSelectionChanged: tc,
                                                onMaybeShowAutocomplete: tE,
                                                onHideAutocomplete: tS,
                                                promptToUpload: ew,
                                                fontSize: ta,
                                                spellcheckEnabled: tu,
                                                canOnlyUseTextCommands: tM,
                                                className: o({
                                                    [er.textAreaThreadCreation]: eA === q.ChatInputTypes.THREAD_CREATION,
                                                    [er.profileBioInput]: eA === q.ChatInputTypes.PROFILE_BIO_INPUT
                                                }),
                                                "aria-labelledby": eq
                                            })
                                        }), (0, l.jsx)(J.default, {
                                            type: eA,
                                            disabled: e5,
                                            channel: ex,
                                            handleSubmit: tm,
                                            isEmpty: 0 === eS.trim().length
                                        })]
                                    })]
                                }), tr ? null : (0, l.jsx)(v.default, {
                                    ref: e1,
                                    channel: ex,
                                    canOnlyUseTextCommands: tM
                                }), (0, l.jsx)(y.default, {
                                    ref: th,
                                    channel: ex,
                                    canMentionRoles: eK,
                                    canMentionChannels: eF,
                                    useNewSlashCommands: ti,
                                    canOnlyUseTextCommands: tM,
                                    canSendStickers: null === (eo = eA.stickers) || void 0 === eo ? void 0 : eo.allowSending,
                                    textValue: eS,
                                    focused: eO,
                                    expressionPickerView: tO,
                                    type: eA,
                                    editorRef: e8,
                                    onSendMessage: tp,
                                    onSendSticker: tv,
                                    onVisibilityChange: tb,
                                    editorHeight: tI,
                                    setValue: (e, t) => null == eM ? void 0 : eM(null, e, t),
                                    position: ez
                                }), (0, l.jsx)(b.default, {
                                    textValue: eS,
                                    editorHeight: tI
                                }), tU ? (0, l.jsx)($.default, {
                                    type: eA,
                                    textValue: eS,
                                    className: eH,
                                    maxCharacterCount: eG
                                }) : null, tj ? (0, l.jsx)(x.default, {
                                    editorRef: e8,
                                    channel: ex,
                                    isEditorFocused: eO,
                                    onSelectSticker: tv,
                                    submitButtonVisible: (null === (es = eA.submit) || void 0 === es ? void 0 : es.button) && (null !== (ed = null === (ea = eA.submit) || void 0 === ea ? void 0 : ea.ignorePreference) && void 0 !== ed ? ed : ts),
                                    stickerIconVisible: null !== (ec = null === (eu = eA.stickers) || void 0 === eu ? void 0 : eu.button) && void 0 !== ec && ec
                                }) : null, eQ]
                            }), tR ? null : (0, l.jsx)(_.default, {
                                positionTargetRef: e0,
                                type: eA,
                                onSelectGIF: tg,
                                onSelectEmoji: tT,
                                onSelectSticker: tv,
                                onSelectSound: tC,
                                channel: ex,
                                closeOnModalOuterClick: eJ,
                                parentModalKey: eZ
                            })]
                        })
                    })
                }))
        },
        186188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Emoji: function() {
                    return _
                },
                CustomEmoji: function() {
                    return x
                },
                TextMention: function() {
                    return A
                },
                UserMention: function() {
                    return O
                },
                RoleMention: function() {
                    return R
                },
                ChannelMention: function() {
                    return b
                },
                SoundboardMention: function() {
                    return k
                },
                StaticRouteMention: function() {
                    return M
                },
                CommandMention: function() {
                    return P
                },
                Timestamp: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("430568"),
                s = n("308289"),
                a = n("206230"),
                u = n("980215"),
                d = n("361572"),
                c = n("82300"),
                f = n("235004"),
                p = n("42203"),
                m = n("305961"),
                h = n("102985"),
                E = n("697218"),
                S = n("666897"),
                g = n("404008"),
                T = n("387111"),
                v = n("158998"),
                C = n("680894"),
                y = n("782340"),
                I = n("503241"),
                N = n("632215");

            function _(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        src: t.src,
                        emojiName: t.name,
                        animated: !1,
                        ...e
                    })
                })
            }

            function x(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        emojiId: t.emojiId,
                        emojiName: t.name,
                        animated: t.animated,
                        ...e
                    })
                })
            }

            function A(e) {
                let {
                    text: t,
                    channelId: n,
                    guildId: i
                } = e, r = m.default.getGuild(i), o = p.default.getChannel(n), s = (0, u.useClydeEnabled)(r, o), a = s && "@Clyde" === t ? C.CLYDE_AI_MENTION_COLOR : null;
                return (0, l.jsx)(S.default, {
                    color: a,
                    children: t
                })
            }

            function O(e) {
                let {
                    id: t,
                    guildId: n,
                    channelId: o
                } = e, a = (0, i.useStateFromStores)([E.default], () => E.default.getUser(t)), u = (0, i.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), d = T.default.useName(n, o, a), c = (0, l.jsx)(S.default, {
                    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
                });
                if (null != a) {
                    let e = u || a.isPomelo() ? null : "#".concat(a.discriminator);
                    return (0, l.jsx)(r.Tooltip, {
                        text: (0, l.jsxs)("div", {
                            className: I.userTooltip,
                            children: [(0, l.jsx)(s.default, {
                                user: a,
                                animate: !0,
                                size: r.AvatarSizes.SIZE_16,
                                className: I.avatar
                            }), v.default.getUserTag(a, {
                                mode: "username",
                                identifiable: u ? "never" : "always"
                            }), (0, l.jsx)("span", {
                                className: I.discriminator,
                                children: e
                            })]
                        }),
                        delay: 750,
                        position: "top",
                        "aria-label": v.default.getUserTag(a, {
                            decoration: "never"
                        }),
                        children: e => (0, l.jsx)(r.Clickable, {
                            tag: "span",
                            ...e,
                            children: c
                        })
                    })
                }
                return c
            }

            function R(e) {
                let {
                    id: t,
                    guildId: n
                } = e, o = (0, i.useStateFromStores)([m.default], () => {
                    let e = m.default.getGuild(n);
                    return null == e ? null : e.roles[t]
                }), s = (0, i.useStateFromStores)([a.default], () => a.default.roleStyle);
                if (null == o) return (0, l.jsx)("span", {
                    children: "@deleted-role"
                });
                let u = null != o.color && 0 !== o.color;
                return (0, l.jsxs)(S.default, {
                    color: "username" === s && u ? o.color : null,
                    children: ["dot" === s && (0, l.jsx)(r.RoleDot, {
                        color: o.colorString,
                        background: !1,
                        tooltip: !1
                    }), "@", o.name]
                })
            }

            function b(e) {
                let {
                    id: t
                } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getChannel(t)), r = y.default.Messages.UNKNOWN_CHANNEL, o = "text", s = !0;
                if (null != n) {
                    var a;
                    r = (0, d.canViewChannel)(n) ? n.name : y.default.Messages.NO_ACCESS, o = (0, d.canViewChannel)(n) ? null !== (a = (0, g.getMentionIconType)(n)) && void 0 !== a ? a : "text" : "locked", s = (0, c.isChannelTypeMentionable)(n.type)
                }
                return s ? (0, l.jsx)(S.default, {
                    iconType: o,
                    children: r
                }) : (0, l.jsx)("span", {
                    children: "#" + r
                })
            }

            function k(e) {
                var t;
                let {
                    id: n
                } = e, r = (0, i.useStateFromStores)([f.default], () => f.default.getSoundById(n));
                return (0, l.jsx)(S.default, {
                    children: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : "Sound"
                })
            }

            function M(e) {
                let {
                    id: t
                } = e, n = {
                    home: y.default.Messages.SERVER_GUIDE,
                    guide: y.default.Messages.SERVER_GUIDE,
                    browse: y.default.Messages.CHANNEL_BROWSER_TITLE,
                    customize: y.default.Messages.CHANNELS_AND_ROLES
                };
                return (0, l.jsx)(S.default, {
                    iconType: t,
                    children: n[t]
                })
            }

            function P(e) {
                let {
                    text: t,
                    id: n
                } = e;
                return (0, l.jsxs)(S.default, {
                    children: [t, "(", n, ")"]
                })
            }

            function L(e) {
                let {
                    timestamp: t
                } = e;
                return (0, l.jsx)("span", {
                    className: N.timestamp,
                    children: t.formatted
                })
            }
        },
        30278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("812204"),
                d = n("685665"),
                c = n("154889"),
                f = n("917247"),
                p = n("956597"),
                m = n("42203"),
                h = n("18494"),
                E = n("791106"),
                S = n("216422"),
                g = n("599110"),
                T = n("49111"),
                v = n("646718"),
                C = n("782340"),
                y = n("317478");

            function I() {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("532210").then(n.bind(n, "532210"));
                    return t => (0, l.jsx)(e, {
                        channel: null,
                        ...t
                    })
                })
            }

            function N(e) {
                var t;
                let {
                    className: n,
                    iconOnly: r,
                    remaining: N
                } = e, _ = (0, s.useStateFromStores)([h.default, m.default], () => {
                    let e = m.default.getChannel(h.default.getChannelId());
                    return (null == e ? void 0 : e.isPrivate()) ? T.AnalyticsPages.DM_CHANNEL : T.AnalyticsPages.GUILD_CHANNEL
                }), {
                    analyticsLocations: x
                } = (0, d.default)(u.default.PREMIUM_UPSELL), A = (0, c.usePremiumDiscountOffer)(), O = (0, f.usePremiumTrialOffer)(), R = (0, c.discountOfferHasTier)(A, v.PremiumSubscriptionSKUs.TIER_2), b = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.PremiumSubscriptionSKUs.TIER_2;
                return (i.useEffect(() => {
                    g.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: "longer messages inline",
                        location: {
                            location_page: _,
                            location_section: T.AnalyticsSections.CHANNEL_TEXT_AREA
                        },
                        location_stack: x
                    })
                }, [_, x]), (b || R) && N < 0) ? (0, l.jsx)(p.default, {
                    type: v.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
                    subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
                    context: N,
                    discountOffer: A,
                    trialOffer: O,
                    children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                        onLearnMore: I
                    })
                }) : r ? (0, l.jsx)(a.Clickable, {
                    className: y.iconOnly,
                    onClick: () => I(),
                    children: (0, l.jsx)(a.Tooltip, {
                        text: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                        position: "top",
                        children: e => (0, l.jsx)(S.default, {
                            className: y.premium,
                            ...e
                        })
                    })
                }) : (0, l.jsxs)("div", {
                    className: o(y.root, n),
                    children: [(0, l.jsx)(S.default, {
                        className: y.premium,
                        color: E.GradientCssUrls.PREMIUM_TIER_2
                    }), (0, l.jsx)(a.Text, {
                        className: y.text,
                        variant: "text-sm/normal",
                        children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                            onLearnMore: I
                        })
                    })]
                })
            }
        },
        606013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("272030"),
                u = n("507217"),
                d = n("383018"),
                c = n("378765"),
                f = n("773336"),
                p = n("573055"),
                m = n("149022"),
                h = n("49111");
            let E = /(\t|\s)/;
            class S extends i.PureComponent {
                componentDidMount() {
                    !this.props.disableAutoFocus && (Promise.resolve().then(() => {
                        var e;
                        let {
                            value: t
                        } = this.props;
                        null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length)
                    }), this.focus()), null != d.default.getActiveCommand(this.props.channel.id) && u.setActiveCommand({
                        channelId: this.props.channel.id,
                        command: null,
                        section: null
                    })
                }
                componentDidUpdate(e, t) {
                    this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
                }
                getCurrentWord() {
                    let e = this._ref;
                    if (null == e) return {
                        word: null,
                        isAtStart: !1
                    };
                    let {
                        value: t
                    } = this.props;
                    if (0 === t.trim().length) return {
                        word: null,
                        isAtStart: !1
                    };
                    let n = e.selectionStart,
                        l = e.selectionEnd;
                    for (; n > 0;) {
                        let e = E.test(t[n - 1]);
                        if (e) break;
                        n--
                    }
                    return {
                        word: t.slice(n, l),
                        isAtStart: 0 === n
                    }
                }
                blur() {
                    let {
                        _ref: e
                    } = this;
                    null != e && e.blur()
                }
                submit(e) {
                    return e.preventDefault(), this.props.onSubmit(this.props.value)
                }
                insertAutocomplete(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        {
                            word: l
                        } = this.getCurrentWord();
                    if (null == l) this.insertText(e, t, n);
                    else {
                        let t = this._ref;
                        if (null == t) return;
                        let i = t.value.slice(0, t.selectionStart - l.length),
                            r = t.value.slice(t.selectionEnd);
                        this._insertText(e, i, r, n)
                    }
                }
                insertText(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        l = this._ref;
                    if (null == l) return;
                    let i = l.value.slice(0, l.selectionStart),
                        r = l.value.slice(l.selectionEnd);
                    this._insertText(e, i, r, n)
                }
                _insertText(e, t, n, l) {
                    let i = this._ref;
                    if (null == i) return;
                    l && (e += " ");
                    let r = t + e + n,
                        {
                            onChange: o
                        } = this.props;
                    null == o || o(null, r, (0, m.toRichValue)(r));
                    let s = t.length + e.length;
                    this.setState({
                        nextSelection: s
                    }, () => {
                        this.props.maybeShowAutocomplete()
                    })
                }
                hasOpenCodeBlock() {
                    let e = this._ref;
                    if (null == e) return !1;
                    let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
                    return null != t && t.length > 0 && t.length % 2 != 0
                }
                render() {
                    let {
                        value: e,
                        disabled: t,
                        placeholder: n,
                        required: i,
                        onResize: r,
                        className: a,
                        id: u,
                        submitting: d,
                        textAreaPaddingClassName: f,
                        spellcheckEnabled: p,
                        "aria-controls": m,
                        "aria-expanded": E,
                        "aria-activedescendant": S
                    } = this.props;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ComponentAction, {
                            event: h.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                            handler: this.handleGlobalPaste
                        }), (0, l.jsx)(s.TextAreaAutosize, {
                            ref: this.handleSetRef,
                            className: o(a, f),
                            id: u,
                            rows: 1,
                            fontWidthEstimate: 6,
                            placeholder: n,
                            disabled: t || d,
                            required: i,
                            onChange: this.handleOnChange,
                            onResize: r,
                            onKeyPress: this.handleKeyPress,
                            onKeyDown: this.handleKeyDown,
                            onKeyUp: this.handleKeyUp,
                            onFocus: this.props.onFocus,
                            onBlur: this.props.onBlur,
                            onPaste: this.handlePaste,
                            onClick: this.handleClick,
                            onContextMenu: this.handleContextMenu,
                            value: t ? "" : e,
                            tabIndex: 0,
                            spellCheck: p,
                            "aria-controls": m,
                            "aria-expanded": E,
                            "aria-activedescendant": S,
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list",
                            "aria-multiline": !0
                        })]
                    })
                }
                handleTabOrEnterDown(e) {
                    e.which === h.KeyboardKeys.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.KeyboardKeys.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
                }
                insertEmoji(e, t) {
                    this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
                }
                getFirstText() {
                    return this.props.value
                }
                constructor(...e) {
                    super(...e), this.state = {
                        nextSelection: -1
                    }, this.focus = () => {
                        let {
                            _ref: e
                        } = this;
                        null != e && e.focus()
                    }, this.handleSetRef = e => {
                        this._ref = e
                    }, this.handleKeyPress = e => {
                        if (e.which === h.KeyboardKeys.ENTER) {
                            if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
                        }
                    }, this.handleKeyDown = e => {
                        switch (e.which) {
                            case h.KeyboardKeys.ARROW_DOWN:
                                this.props.moveSelection(1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.N:
                                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                this.props.moveSelection(-1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.P:
                                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.TAB:
                            case h.KeyboardKeys.ENTER:
                                this.handleTabOrEnterDown(e)
                        }
                        let {
                            onKeyDown: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleKeyUp = e => {
                        switch (e.which) {
                            case h.KeyboardKeys.ARROW_RIGHT:
                            case h.KeyboardKeys.ARROW_LEFT:
                            case h.KeyboardKeys.HOME:
                            case h.KeyboardKeys.END:
                                this.props.maybeShowAutocomplete()
                        }
                        let {
                            onKeyUp: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleGlobalPaste = e => {
                        let {
                            event: t
                        } = e, n = this.handlePaste(t);
                        !n && this.focus()
                    }, this.handlePaste = e => {
                        let t = this.props.onPaste(e);
                        return t && e.preventDefault(), t
                    }, this.handleClick = () => {
                        this.props.maybeShowAutocomplete()
                    }, this.handleContextMenu = e => {
                        f.isPlatformEmbedded && (0, a.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("188503").then(n.bind(n, "188503"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                isChannelTextArea: !0,
                                text: (0, p.getSelectionText)()
                            })
                        }, {
                            align: "bottom",
                            enableSpellCheck: !0
                        })
                    }, this.handleOnChange = e => {
                        let {
                            onChange: t,
                            allowNewLines: n
                        } = this.props, l = e.currentTarget.value, i = n ? l : l.replace("\n", "");
                        null == t || t(e, i, (0, m.toRichValue)(i))
                    }
                }
            }
            var g = S
        },
        32647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("798609"),
                a = n("716241"),
                u = n("383018"),
                d = n("585722"),
                c = n("378765"),
                f = n("659500"),
                p = n("640830"),
                m = n("83800"),
                h = n("776574"),
                E = n("970153"),
                S = n("939563"),
                g = n("385887"),
                T = n("755604"),
                v = n("664610"),
                C = n("688893"),
                y = n("684607"),
                I = n("803322"),
                N = n("127875"),
                _ = n("169694"),
                x = n("100576"),
                A = n("765446"),
                O = n("461593"),
                R = n("49111"),
                b = n("147320"),
                k = i.forwardRef(function(e, t) {
                    let {
                        value: n,
                        type: r,
                        channel: k,
                        className: M,
                        id: P,
                        disabled: L,
                        submitting: U,
                        placeholder: D,
                        required: j,
                        textAreaPaddingClassName: w,
                        onChange: B,
                        onPaste: K,
                        onResize: F,
                        onFocus: G,
                        onBlur: V,
                        onKeyDown: H,
                        onKeyUp: W,
                        onTab: q,
                        onEnter: Y,
                        onSubmit: z,
                        maybeShowAutocomplete: Q,
                        hideAutocomplete: X,
                        moveSelection: J,
                        spellcheckEnabled: Z,
                        canUseCommands: $,
                        canOnlyUseTextCommands: ee,
                        disableAutoFocus: et,
                        disableEnterToSubmit: en,
                        allowNewLines: el,
                        "aria-owns": ei,
                        "aria-expanded": er,
                        "aria-haspopup": eo,
                        "aria-activedescendant": es,
                        "aria-controls": ea,
                        "aria-invalid": eu,
                        "aria-describedby": ed,
                        "aria-labelledby": ec,
                        "aria-autocomplete": ef
                    } = e, ep = i.useRef(null), em = i.useRef(null), eh = i.useRef(!0), eE = i.useRef(!0), eS = L || U, eg = i.useCallback((e, t, n) => {
                        var l;
                        let {
                            value: i,
                            selection: r
                        } = n, o = g.EditorUtils.richValue(e), s = e.selection, a = !1;
                        if (void 0 !== i && i !== o) {
                            if (e.children = i, "parent" === t && !e.previewMarkdown) {
                                try {
                                    e.previewMarkdown = !0, (0, x.run)(e, k.guild_id, k.id)
                                } finally {
                                    e.previewMarkdown = !1
                                }(0, x.run)(e, k.guild_id, k.id), r = void 0
                            }
                            "undo" !== t && void 0 !== i && i !== o && m.HistoryUtils.insertEntry(e, "other", !1, o, s), a = !0
                        }
                        if (null != r && !g.SelectionUtils.isValid(e, r) && (r = void 0), (a || !g.SelectionUtils.isValid(e, s)) && void 0 === r) {
                            let t = g.EditorUtils.end(e, []);
                            r = {
                                anchor: t,
                                focus: t
                            }
                        }
                        if (null != r && !g.SelectionUtils.equals(r, s)) {
                            e.selection = r;
                            let t = m.HistoryUtils.currentEntry(e);
                            null != t && (t.selection = r), a = !0
                        }
                        let d = p.getCommandBlock(e);
                        if (null != d && d[0].command.id !== (null === (l = u.default.getActiveCommand(k.id)) || void 0 === l ? void 0 : l.id) && m.HistoryUtils.withMergedEntry(e, () => {
                                (0, _.unsetCommand)(e, k.id, null, !0)
                            }), a) {
                            if (!et && g.EditorUtils.focus(e), "parent" === t) try {
                                eE.current = !1, e.onChange()
                            } finally {
                                eE.current = !0
                            } else e.onChange()
                        }
                    }, [k.id, k.guild_id, et]), eT = i.useCallback(() => {
                        eh.current = !1
                    }, []), ev = i.useCallback(() => {
                        eh.current = !0
                    }, []), eC = (0, v.default)({
                        channel: k,
                        chatInputType: r,
                        canUseCommands: $,
                        canOnlyUseTextCommands: ee,
                        onChangeStart: eT,
                        onChangeEnd: ev,
                        updateState: eg
                    }), ey = i.useCallback((e, t) => {
                        let n = p.getOptionValues(eC, e),
                            l = p.validateOptionValues(e, k.guild_id, k.id, n, t);
                        return {
                            values: n,
                            results: l
                        }
                    }, [k.guild_id, k.id, eC]), eI = i.useCallback(() => {
                        var e, t, n;
                        let l;
                        let i = $ ? u.default.getActiveCommand(k.id) : null;
                        if (null != i && null != i.options) {
                            let r = ey(i, !1);
                            l = r.values;
                            let o = p.getOptionNames(eC),
                                u = o.filter(e => !r.results[e].success).map(t => (null !== (e = i.options) && void 0 !== e ? e : []).find(e => e.name === t));
                            for (let e of i.options) e.required && !(e.name in r.values) && (S.SlateTransforms.insertCommandOption(eC, e), u.push(e));
                            if (u.length > 0) {
                                let e = u[0];
                                S.SlateTransforms.selectCommandOption(eC, e.name), f.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }), (0, a.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                                    application_id: null == i ? void 0 : i.applicationId,
                                    command_id: null == i ? void 0 : null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id,
                                    argument_type: s.ApplicationCommandOptionType[null !== (n = null == e ? void 0 : e.type) && void 0 !== n ? n : 3],
                                    is_required: null == e ? void 0 : e.required
                                });
                                return
                            }
                        }
                        null == z || z((0, E.toTextValue)(g.EditorUtils.richValue(eC), {
                            mode: "raw",
                            ignoreTrailingEmptyNodes: !0
                        }), i, l)
                    }, [k.id, eC, z, ey, $]);
                    (0, C.default)(t, eC, k, eI), (0, N.default)(eC, ep, F);
                    let {
                        handleKeyDown: eN,
                        handleKeyUp: e_
                    } = (0, y.default)({
                        editor: eC,
                        channel: k,
                        disableEnterToSubmit: en,
                        onKeyDown: H,
                        onKeyUp: W,
                        onTab: q,
                        onEnter: Y,
                        allowNewLines: el,
                        submit: eI,
                        hideAutocomplete: X,
                        moveSelection: J
                    }), {
                        handlePaste: ex,
                        handleGlobalPaste: eA
                    } = (0, I.default)(eC, eS, K), eO = i.useCallback(e => {
                        null == Q || Q()
                    }, [Q]), eR = i.useCallback(e => {
                        if (e !== em.current) {
                            if (eE.current) null == B || B(null, (0, E.toTextValue)(e, {
                                mode: "raw"
                            }), e)
                        } else eE.current && Q()
                    }, [Q, B]);
                    i.useLayoutEffect(() => {
                        eh.current && (em.current = n, eg(eC, "parent", {
                            value: n
                        }))
                    }, [eC, n, eg]), i.useEffect(() => {
                        let e = () => {
                            var e;
                            let t = null !== (e = u.default.getActiveCommand(k.id)) && void 0 !== e ? e : null;
                            null !== t && null != t.options && ey(t, !0)
                        };
                        return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
                    }, [k, eC, ey]);
                    let eb = i.useCallback((e, t) => (0, T.default)(e, t), []),
                        ek = i.useCallback(e => (0, A.default)(eC, e, k.id), [k.id, eC]),
                        eM = i.useCallback(e => (0, O.default)(e), []);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ComponentAction, {
                            event: R.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                            handler: eA
                        }), (0, l.jsx)("div", {
                            ref: ep,
                            className: o(M, b.slateContainer),
                            children: (0, l.jsx)(h.default, {
                                id: P,
                                editor: eC,
                                channelId: k.id,
                                guildId: k.guild_id,
                                className: o(b.slateTextArea, w),
                                placeholder: D,
                                readOnly: eS,
                                spellCheck: Z,
                                autoFocus: !et,
                                canFocus: !L,
                                onChange: eR,
                                onFocus: G,
                                onBlur: V,
                                onClick: eO,
                                onPaste: ex,
                                onKeyDown: eN,
                                onKeyUp: e_,
                                decorateExtra: eb,
                                renderExtraElement: ek,
                                renderExtraLeaf: eM,
                                "aria-owns": ei,
                                "aria-haspopup": eo,
                                "aria-expanded": er,
                                "aria-activedescendant": es,
                                "aria-controls": ea,
                                "aria-labelledby": ec,
                                "aria-describedby": ed,
                                "aria-invalid": eu,
                                "aria-autocomplete": ef,
                                "aria-required": j
                            })
                        })]
                    })
                })
        },
        376215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("942367"),
                u = n("446674"),
                d = n("913144"),
                c = n("81594"),
                f = n("798609"),
                p = n("206230"),
                m = n("302437"),
                h = n("383018"),
                E = n("474643"),
                S = n("585722"),
                g = n("898260"),
                T = n("378765"),
                v = n("393377"),
                C = n("761354"),
                y = n("49111"),
                I = n("735189"),
                N = n("862839");
            let _ = [];

            function x(e) {
                let {
                    channelId: t,
                    type: n
                } = e, r = (0, u.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled), x = (0, m.default)("attachments", a.Orientations.HORIZONTAL), A = (0, u.useStateFromStores)([S.default], () => S.default.getUploads(t, n.drafts.type)), {
                    isApplicationCommand: O,
                    commandOptions: R,
                    commandOptionStates: b
                } = (0, u.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.getActiveCommand(t);
                    if (null == e) return {
                        isApplicationCommand: !1,
                        commandOptions: _,
                        commandOptionStates: null
                    };
                    let n = h.default.getOptionStates(t);
                    return {
                        isApplicationCommand: !0,
                        commandOptions: e.options,
                        commandOptionStates: n
                    }
                }), k = i.useMemo(() => {
                    var e;
                    return null !== (e = null == R ? void 0 : R.filter(e => {
                        var t;
                        return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == b ? void 0 : null === (t = b[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    })) && void 0 !== e ? e : []
                }, [R, b]), [M, P] = i.useState([]);
                i.useEffect(() => {
                    let e = () => {
                        c.default.clearAll(t, n.drafts.type)
                    };
                    return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
                }, [t, n]);
                let L = i.useCallback(() => {
                    x.focusFirstVisibleItem()
                }, [x]);
                return ((0, T.useComponentAction)({
                    event: y.ComponentActions.FOCUS_ATTACHMENT_AREA,
                    handler: L
                }), i.useEffect(() => {
                    if (O) {
                        let e = [];
                        M.forEach(t => {
                            !k.some(e => t.name === e.name) && e.push(t)
                        }), e.forEach(e => {
                            c.default.remove(t, e.name, n.drafts.type)
                        }), P(k)
                    }
                }, [t, k.length, n]), !O && 0 === A.length || O && 0 === k.length) ? null : (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(s.ListNavigatorProvider, {
                        navigator: x,
                        children: (0, l.jsx)(s.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: i,
                                    ...s
                                } = e;
                                return (0, l.jsx)("ul", {
                                    ref: i,
                                    ...s,
                                    className: o(I.channelAttachmentArea, N.scrollbarGhost),
                                    children: O ? k.map(e => (0, l.jsx)(v.default, {
                                        channelId: t,
                                        keyboardModeEnabled: r,
                                        option: e
                                    }, e.name)) : A.map(e => (0, l.jsx)(C.default, {
                                        channelId: t,
                                        draftType: n.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: r
                                    }, e.id))
                                })
                            }
                        })
                    }), n.drafts.type === E.DraftType.FirstThreadMessage ? null : (0, l.jsx)(g.default, {})]
                })
            }
            var A = i.memo(function(e) {
                let {
                    channelId: t,
                    type: n,
                    canAttachFiles: i
                } = e;
                return i ? (0, l.jsx)(x, {
                    channelId: t,
                    type: n
                }) : null
            })
        },
        393377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("81594"),
                u = n("371642"),
                d = n("966724"),
                c = n("474643"),
                f = n("585722"),
                p = n("271972"),
                m = n("761354"),
                h = n("49111"),
                E = n("91310"),
                S = n("602416");

            function g(e) {
                let {
                    channelId: t,
                    option: n,
                    keyboardModeEnabled: r
                } = e, g = i.useRef(null), [T, v] = i.useState(!1), C = f.default.getUpload(t, n.name, c.DraftType.ChannelMessage), y = i.useRef(null), I = i.useCallback(() => {
                    v(!0)
                }, []), N = i.useCallback(() => {
                    v(!1)
                }, []), _ = i.useCallback(e => {
                    var l;
                    v(!1);
                    let i = {
                        id: n.name,
                        file: null === (l = e.dataTransfer) || void 0 === l ? void 0 : l.files[0],
                        platform: d.UploadPlatform.WEB
                    };
                    a.default.setFile({
                        channelId: t,
                        id: n.name,
                        file: i,
                        draftType: c.DraftType.ChannelMessage
                    })
                }, [t, n]);
                return (i.useEffect(() => {
                    let e = y.current;
                    if (null == C) null == e || e.addEventListener("dragover", I, !1), null == e || e.addEventListener("dragleave", N, !1), null == e || e.addEventListener("drop", _, !1);
                    return () => {
                        null == e || e.removeEventListener("dragover", I, !1), null == e || e.removeEventListener("dragleave", N, !1), null == e || e.removeEventListener("drop", _, !1)
                    }
                }, [C, I, N, _]), null != C) ? (0, l.jsx)(m.default, {
                    channelId: t,
                    upload: C,
                    keyboardModeEnabled: r,
                    draftType: c.DraftType.ChannelMessage,
                    label: (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: [n.name, ": "]
                        }), (0, l.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-brand",
                            children: C.filename
                        })]
                    }),
                    canEdit: !1
                }) : (0, l.jsxs)(p.default, {
                    id: n.name,
                    channelId: t,
                    keyboardModeEnabled: r,
                    onKeyDown: e => {
                        if (e.which === h.KeyboardKeys.ENTER) {
                            var t;
                            e.preventDefault(), null === (t = g.current) || void 0 === t || t.activateUploadDialogue()
                        }
                    },
                    className: o(E.emptyOption, {
                        [E.emptyOptionActive]: T
                    }),
                    draftType: c.DraftType.ChannelMessage,
                    ref: y,
                    children: [(0, l.jsx)("span", {
                        className: o(E.optionName, {
                            [E.optionNameActive]: T
                        }),
                        children: n.name
                    }), (0, l.jsx)(s.Clickable, {
                        className: E.clickContainer,
                        onClick: () => {
                            var e;
                            return null === (e = g.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                        },
                        children: (0, l.jsxs)("div", {
                            className: E.commandOptionContainer,
                            children: [(0, l.jsx)("img", {
                                src: S,
                                className: E.optionIcon,
                                alt: ""
                            }), (0, l.jsx)(s.Text, {
                                className: E.optionHelp,
                                variant: "text-sm/normal",
                                children: "Drag and drop or click to upload file"
                            }), (0, l.jsx)(u.default, {
                                ref: g,
                                onChange: e => {
                                    var l, i;
                                    if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (l = i.files) || void 0 === l ? void 0 : l[0]) != null) {
                                        let l = {
                                            id: n.name,
                                            file: e.currentTarget.files[0],
                                            platform: d.UploadPlatform.WEB
                                        };
                                        a.default.setFile({
                                            channelId: t,
                                            id: n.name,
                                            file: l,
                                            draftType: c.DraftType.ChannelMessage
                                        }), e.currentTarget.value = ""
                                    }
                                },
                                multiple: !1,
                                tabIndex: -1,
                                "aria-hidden": !0,
                                className: E.fileInput
                            })]
                        })
                    })]
                })
            }
        },
        640830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCommandBlock: function() {
                    return h
                },
                getCurrentCommandOption: function() {
                    return E
                },
                getOptionNames: function() {
                    return S
                },
                getOptionValues: function() {
                    return g
                },
                optionToValues: function() {
                    return T
                },
                validateOptionValues: function() {
                    return v
                },
                validateOption: function() {
                    return C
                },
                findTextOptions: function() {
                    return y
                }
            });
            var l = n("798609"),
                i = n("507217"),
                r = n("383018"),
                o = n("343952"),
                s = n("474643"),
                a = n("18494"),
                u = n("585722"),
                d = n("149022"),
                c = n("970153"),
                f = n("385887"),
                p = n("566819");
            let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

            function h(e) {
                let t = f.EditorUtils.richValue(e)[0];
                return null == t || "applicationCommand" !== t.type ? null : [t, p.FIRST_BLOCK_PATH]
            }

            function E(e) {
                var t, n;
                if (null == e.selection) return null;
                let l = null !== (t = f.EditorUtils.above(e, {
                    at: e.selection.focus,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== t ? t : null;
                if (null != l || f.RangeUtils.isCollapsed(e.selection)) return l;
                let i = null !== (n = f.EditorUtils.above(e, {
                    at: e.selection.anchor,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== n ? n : null;
                return i
            }

            function S(e) {
                let t = h(e),
                    n = [],
                    l = null == t ? void 0 : t[0].children;
                if (null != l)
                    for (let e of l) f.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
                return n
            }

            function g(e, t) {
                let n = {};
                if (null == t.options) return {};
                let l = h(e),
                    i = Object.fromEntries(t.options.map(e => [e.name, e])),
                    r = null == l ? void 0 : l[0].children;
                if (null != r) {
                    for (let t of r)
                        if (f.NodeUtils.isType(t, "applicationCommandOption")) {
                            let l = i[t.optionName];
                            null != l && (n[t.optionName] = T(e, l, t))
                        }
                }
                return n
            }

            function T(e, t, n) {
                let i = a.default.getCurrentlySelectedChannelId(),
                    r = n.children.map(n => {
                        if (t.type === l.ApplicationCommandOptionType.ATTACHMENT) {
                            let e = u.default.getUpload(i, t.name, s.DraftType.ChannelMessage);
                            if (null != e) {
                                var r;
                                return {
                                    type: "text",
                                    text: null !== (r = e.filename) && void 0 !== r ? r : ""
                                }
                            }
                        }
                        if (f.TextUtils.isText(n)) return {
                            type: "text",
                            text: n.text
                        };
                        if (f.EditorUtils.isVoid(e, n)) {
                            let e = (0, d.voidToOptionValue)(n);
                            if (null != e) return e
                        }
                        return {
                            type: "text",
                            text: (0, c.serializeDescendant)(n, {
                                mode: "raw"
                            })
                        }
                    });
                if (t.type !== l.ApplicationCommandOptionType.STRING) {
                    for (; r.length > 0 && "text" === r[0].type && "" === r[0].text.trim();) r.shift();
                    for (; r.length > 0 && "text" === r[r.length - 1].type && "" === r[r.length - 1].text.trim();) r.pop()
                }
                return r
            }

            function v(e, t, n, l, r) {
                var s;
                if (null == e.options) return {};
                let a = Object.fromEntries(e.options.map(e => [e.name, o.validateOptionContent({
                    option: e,
                    content: null !== (s = l[e.name]) && void 0 !== s ? s : null,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: r
                })]));
                return i.updateOptionValidationStates(n, a), a
            }

            function C(e, t, n, l, s) {
                var a;
                let [u] = l, d = r.default.getActiveCommand(n), c = null == d ? void 0 : null === (a = d.options) || void 0 === a ? void 0 : a.find(e => e.name === u.optionName);
                if (null == c) return;
                let f = T(e, c, u),
                    p = o.validateOptionContent({
                        option: c,
                        content: f,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: s
                    });
                return i.updateOptionStates(n, {
                    [u.optionName]: {
                        lastValidationResult: p
                    }
                }), p
            }

            function y(e, t) {
                if (null == t.options || 0 === t.options.length) return [];
                let n = f.EditorUtils.richValue(e),
                    l = [],
                    i = new Set(S(e)),
                    r = {},
                    o = new Set;
                for (let e of t.options) r[e.displayName] = e, !i.has(e.name) && o.add(e.displayName);
                let s = null;
                for (let t = 0; t < n.length; t++) {
                    let i = n[t];
                    if ("line" === i.type || "applicationCommand" === i.type)
                        for (let u = 0; u < i.children.length; u++) {
                            let d;
                            let p = i.children[u],
                                h = [t, u];
                            if (f.NodeUtils.isType(p, "applicationCommandOption")) {
                                if (null != s) {
                                    var a;
                                    s.valueRange.focus = null !== (a = f.EditorUtils.before(e, h)) && void 0 !== a ? a : f.EditorUtils.start(e, []), s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s), s = null
                                }
                                continue
                            }
                            if (!!f.TextUtils.isText(p))
                                for (m.lastIndex = 0; null != (d = m.exec(p.text));) {
                                    if (0 !== d.index && null == p.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                                    let e = d[1];
                                    if (!o.has(e)) continue;
                                    o.delete(e);
                                    let t = r[e];
                                    if (null == t) continue;
                                    let i = {
                                            path: h,
                                            offset: d.index
                                        },
                                        a = {
                                            path: h,
                                            offset: i.offset + d[0].length
                                        },
                                        u = {
                                            path: h,
                                            offset: a.offset
                                        },
                                        f = {
                                            name: t.name,
                                            displayName: t.displayName,
                                            type: t.type,
                                            keyRange: {
                                                anchor: i,
                                                focus: a
                                            },
                                            valueRange: {
                                                anchor: u,
                                                focus: u
                                            },
                                            text: ""
                                        };
                                    null != s && (s.valueRange.focus = f.keyRange.anchor, s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s)), s = f
                                }
                        }
                }
                return null != s && (s.valueRange.focus = f.EditorUtils.end(e, []), s.text = (0, c.toTextValue)(n, {
                    mode: "raw",
                    range: s.valueRange
                }).trim(), l.push(s)), l
            }
        },
        83800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HistoryUtils: function() {
                    return o
                }
            });
            var l = n("385887");
            let i = new WeakMap,
                r = new WeakMap,
                o = {
                    isMerging(e) {
                        var t;
                        return null === (t = r.get(e)) || void 0 === t || t
                    },
                    isSaving(e) {
                        var t;
                        return null === (t = i.get(e)) || void 0 === t || t
                    },
                    withoutMerging(e, t) {
                        let n = this.isMerging(e);
                        r.set(e, !1);
                        try {
                            t()
                        } finally {
                            r.set(e, n)
                        }
                    },
                    withoutSaving(e, t) {
                        let n = this.isSaving(e);
                        i.set(e, !1);
                        try {
                            t()
                        } finally {
                            i.set(e, n)
                        }
                    },
                    withSingleEntry: (e, t) => s(e, "other", !1, t),
                    withMergedEntry: (e, t) => s(e, "other", !0, t),
                    currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
                    insertOrMergeEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            l = o.currentEntry(e);
                        o.isMerging(e) && (null == l ? void 0 : l.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
                    },
                    insertEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        r = null != r ? r : e.selection, i = null != i ? i : l.EditorUtils.richValue(e);
                        let {
                            history: s
                        } = e, a = o.currentEntry(e);
                        for (null != a && (a.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1); s.stack.length >= 250;) s.stack.shift();
                        s.stack.push({
                            type: t,
                            mergeable: n,
                            createdAt: Date.now(),
                            value: i,
                            selection: r
                        }), s.index = s.stack.length - 1
                    },
                    mergeEntry(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            {
                                selection: n
                            } = e,
                            i = l.EditorUtils.richValue(e),
                            r = o.currentEntry(e);
                        null != r && (r.value = i, r.selection = n, !t && (r.mergeable = !1))
                    }
                };

            function s(e, t, n, r) {
                let s = e.children,
                    a = e.selection,
                    u = o.isSaving(e);
                i.set(e, !1);
                try {
                    let i = r();
                    return u && (n ? o.mergeEntry(e) : e.children !== s ? o.insertEntry(e, t, !1) : o.isMerging(e) && null != e.selection && (null == a || !l.RangeUtils.equals(e.selection, a)) && o.mergeEntry(e)), i
                } finally {
                    i.set(e, u)
                }
            }
        },
        96342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parse: function() {
                    return R
                }
            });
            var l = n("627445"),
                i = n.n(l),
                r = n("693566"),
                o = n.n(r),
                s = n("132710"),
                a = n("176309"),
                u = n("605250"),
                d = n("647374"),
                c = n("888198"),
                f = n("290689"),
                p = n("788554"),
                m = n("23690"),
                h = n("10680");
            let E = {
                    link: {
                        type: "skip"
                    },
                    highlight: {
                        type: "skip"
                    },
                    blockQuote: {
                        type: "skip"
                    },
                    codeBlock: {
                        type: "skip"
                    },
                    list: {
                        type: "skip"
                    },
                    heading: {
                        type: "skip"
                    },
                    channelOrMessageUrl: {
                        type: "skip"
                    },
                    mediaPostLink: {
                        type: "skip"
                    },
                    newline: {
                        type: "verbatim"
                    },
                    br: {
                        type: "verbatim"
                    },
                    paragraph: {
                        type: "verbatim"
                    },
                    text: {
                        type: "verbatim"
                    },
                    emoticon: {
                        type: "verbatim"
                    },
                    mention: {
                        type: "inlineObject"
                    },
                    roleMention: {
                        type: "inlineObject"
                    },
                    commandMention: {
                        type: "inlineObject"
                    },
                    channelMention: {
                        type: "inlineObject"
                    },
                    emoji: {
                        type: "inlineObject"
                    },
                    customEmoji: {
                        type: "inlineObject"
                    },
                    em: {
                        type: "inlineStyle",
                        before: "*",
                        after: "*"
                    },
                    looseEm: {
                        type: "inlineStyle",
                        before: "*",
                        after: " *"
                    },
                    autolink: {
                        type: "inlineStyle",
                        before: "<",
                        after: ">"
                    },
                    strong: {
                        type: "inlineStyle",
                        before: "**",
                        after: "**"
                    },
                    u: {
                        type: "inlineStyle",
                        before: "__",
                        after: "__"
                    },
                    s: {
                        type: "inlineStyle",
                        before: "~~",
                        after: "~~"
                    },
                    escape: {
                        type: "inlineStyle",
                        before: "\\",
                        after: ""
                    },
                    inlineCode: {
                        type: "inlineStyle",
                        before: "`",
                        after: "`"
                    },
                    staticRouteLink: {
                        type: "inlineStyle",
                        before: "<id:",
                        after: ">"
                    },
                    soundboard: {
                        type: "inlineStyle",
                        before: "<sound:",
                        after: ">"
                    },
                    spoiler: {
                        type: "inlineStyle",
                        before: "||",
                        after: "||"
                    },
                    url: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockText: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockSyntax: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockLang: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    timestamp: {
                        type: "inlineObject"
                    }
                },
                S = new Set(["*", "_", "\\"]),
                g = {},
                T = {};
            for (let e in c.default.RULES) {
                if (!(e in E)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
                let t = E[e];
                "skip" !== t.type && (g[e] = v(c.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (T[e] = v("text" === e ? f.default : c.default.RULES[e]))
            }

            function v(e) {
                i(null != e.parse, "Slate: rule must have a parse function");
                let t = e.parse;
                return {
                    ...e,
                    parse(e, n, l) {
                        let i = t.call(this, e, n, l);
                        return !(i instanceof Array) && (i.originalMatch = e), i
                    }
                }
            }
            let C = {
                    url: {
                        parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                            type: "text",
                            content: e[0],
                            originalMatch: e
                        } : {
                            type: "link",
                            content: e[1],
                            originalMatch: e
                        }
                    },
                    autolink: {
                        parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                            type: "text",
                            content: e[0],
                            originalMatch: e
                        } : {
                            type: "autolink",
                            content: e[1],
                            originalMatch: e
                        }
                    },
                    codeBlockSyntax: {
                        order: s.defaultRules.inlineCode.order - .1,
                        match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
                        parse: e => null != e[2] && "" !== e[2] && h.isKnownLang(e[2]) ? [{
                            type: "codeBlockSyntax",
                            content: e[1],
                            originalMatch: e
                        }, {
                            type: "codeBlockLang",
                            content: e[2],
                            originalMatch: e
                        }] : {
                            type: "codeBlockSyntax",
                            content: e[0],
                            originalMatch: e
                        }
                    }
                },
                y = (0, p.default)([g, C]),
                I = (0, p.default)([T, C]),
                N = a.astParserFor(y),
                _ = a.astParserFor(I),
                x = {
                    max: 1 / 0,
                    maxAge: 6e4,
                    updateAgeOnGet: !0
                },
                A = new o(x),
                O = new o(x);

            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = h.findBackticks(e);
                if (i.push(e.length), 1 === i.length && n) return [];
                let r = 0,
                    o = n,
                    s = [];
                for (let n of i) {
                    if (o) s.push({
                        text: e.substring(r, n),
                        start: r,
                        attributes: ["codeBlockText"],
                        data: void 0
                    });
                    else {
                        let o = n === i[i.length - 2],
                            a = o ? e.substring(n + 3) : "",
                            u = null != a.match(h.caseInsensitiveLangRegex),
                            d = u ? a : "";
                        n += 3 + d.length;
                        let c = e.substring(r, n);
                        if ("" !== c) {
                            let e = function(e, t, n) {
                                let l = [],
                                    i = n ? O : A,
                                    r = i.get(e);
                                if (null != r) return r;
                                let o = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                                    s = {
                                        originalMatch: {
                                            index: 0,
                                            0: ""
                                        },
                                        type: "paragraph",
                                        content: (n ? _ : N)(o, !1, {
                                            returnMentionIds: !0,
                                            disableAutoBlockNewlines: !0,
                                            guildId: t
                                        })
                                    };
                                b(l, o, s, 0, []);
                                let a = function(e) {
                                    if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
                                    let t = [e[0]];
                                    for (let n = 1; n < e.length; n++) {
                                        let l = t[t.length - 1],
                                            i = l.start + l.text.length,
                                            r = e[n];
                                        r.start === i && null == l.data && null == r.data && l.attributes.join("-") === r.attributes.join("-") ? l.text += r.text : t.push(r)
                                    }
                                    return t
                                }(l);
                                return i.set(e, a), a
                            }(c, t, l);
                            e.forEach(e => {
                                s.push({
                                    ...e,
                                    start: e.start + r
                                })
                            })
                        }
                    }
                    o = !o, r = n
                }
                return s
            }

            function b(e, t, n, l, r) {
                let {
                    content: o,
                    type: s,
                    originalMatch: a
                } = n;
                switch (i(null != a, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), s) {
                    case "newline":
                    case "br":
                    case "paragraph":
                    case "text":
                    case "emoticon":
                        return k(e, t, o || "", l, r);
                    case "emoji":
                    case "customEmoji": {
                        let i = t.substring(l);
                        if (!i.startsWith(a[0]) && (l = U(e, t, l, t.length), i = t.substring(l)), i.startsWith(a[0])) return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: n
                        });
                        throw Error("Slate: Unable to find emoji: ".concat(a[0], " in ").concat(t, " at ").concat(l))
                    }
                    case "mention":
                    case "roleMention":
                    case "channelMention":
                    case "commandMention":
                    case "staticRouteLink":
                    case "soundboard":
                    case "channel": {
                        let {
                            text: r,
                            id: o
                        } = n;
                        if (null != r) return i(r === a[0], "Slate: text mentions must exactly match the regex match"), P({
                            result: e,
                            sourceText: t,
                            text: r,
                            originalStart: l,
                            attributes: ["textMention"],
                            data: {
                                text: r
                            }
                        });
                        return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: {
                                id: o
                            }
                        })
                    }
                    case "timestamp":
                        if (m.default.getCurrentConfig({
                                location: "c70cbb_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled) return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: n
                        });
                        return k(e, t, a[0], l, r);
                    case "em":
                    case "autolink":
                    case "strong":
                    case "u":
                    case "s":
                    case "escape":
                    case "inlineCode":
                    case "codeBlockSyntax":
                    case "codeBlockLang":
                    case "spoiler":
                    case "url":
                    case "link": {
                        l = L(t, l);
                        let {
                            before: n,
                            after: i
                        } = function(e, t, n, l) {
                            if ("inlineCode" === t) return {
                                before: l[1],
                                after: l[1]
                            };
                            if ("em" === t && "_" === e.substring(n, n + 1)) return {
                                before: "_",
                                after: "_"
                            };
                            let i = E["link" === t ? "url" : t];
                            if ("inlineStyle" === i.type) return i;
                            throw Error("Slate: rule must be an inlineStyle")
                        }(t, s, l, a);
                        return l = M(e, t, n, l, "syntaxBefore"), r.push(s), l = k(e, t, null != o ? o : "", l, r), r.pop(), l = M(e, t, i, l, "syntaxAfter"), L(t, l)
                    }
                    default:
                        throw Error("Slate: Unknown rule type: ".concat(s))
                }
            }

            function k(e, t, n, l, i) {
                return "string" == typeof n ? l = P({
                    result: e,
                    sourceText: t,
                    text: n,
                    originalStart: l,
                    attributes: i,
                    data: null
                }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
                    l = b(e, t, n, l, i)
                })), L(t, l)
            }

            function M(e, t, n, l, r) {
                if (n.length > 0) {
                    let o = t.indexOf(n, l),
                        s = t.substring(l, o + n.length);
                    i(o >= 0, "Slate: Unable to find syntax characters"), e.push({
                        text: s,
                        attributes: [r],
                        start: l,
                        data: null
                    }), l = o + n.length
                }
                return l
            }

            function P(e) {
                let {
                    result: t,
                    sourceText: n,
                    text: l,
                    originalStart: i,
                    attributes: r,
                    data: o
                } = e, s = L(n, i);
                for (;
                    "\n" === l.charAt(0) || " " === l.charAt(0);) l = l.substring(1);
                let a = n.indexOf(l, s);
                if (a !== s ? s = i = U(t, n, s, a) : "\\" === l && "\\" === n.charAt(a + 1) && (a++, i = ++s), a !== s) throw new(0, u.default)("MarkdownToSlate").error(JSON.stringify({
                    sourceText: n,
                    searchText: l,
                    searchStartsAt: n.substring(s),
                    startPos: s
                })), Error("Slate: Unable to find content in source text!");
                let d = s + l.length,
                    c = n.substring(i, d);
                return t.push({
                    text: c,
                    attributes: r.slice(),
                    start: i,
                    data: o
                }), d
            }

            function L(e, t) {
                for (;
                    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
                return t
            }

            function U(e, t, n, l) {
                for (; n < l;)
                    if (S.has(t[n])) n = M(e, t, t[n], n, "syntaxBefore"), n = L(t, n);
                    else break;
                return n
            }
        },
        830618: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("446674"),
                s = n("77078"),
                a = n("812204"),
                u = n("685665"),
                d = n("217535"),
                c = n("917247"),
                f = n("697218"),
                p = n("216422"),
                m = n("719923"),
                h = n("30278"),
                E = n("49111"),
                S = n("646718"),
                g = n("782340"),
                T = n("789539");

            function v(e) {
                var t, n, i;
                let {
                    type: v,
                    textValue: C,
                    maxCharacterCount: y,
                    className: I
                } = e, N = (0, o.useStateFromStores)([f.default], () => m.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), _ = (0, d.default)(), x = null != y ? y : _, A = C.length, O = null != v.upsellLongMessages && (null != A ? A : 0) > E.MAX_MESSAGE_LENGTH && N, R = null != v.upsellLongMessages && !N, b = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2, k = x - A, M = k > (null != y ? y : _ / 10), P = 0 === k ? g.default.Messages.CHARACTER_COUNT_AT_LIMIT : k > 0 ? g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                    count: k
                }) : g.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
                    AnalyticsLocationProvider: L
                } = (0, u.default)(a.default.CHARACTER_COUNT);
                return O && k >= 0 || !M || R && !M ? (0, l.jsx)(L, {
                    children: (0, l.jsxs)("div", {
                        className: r(I, T.characterCount, {
                            [T.error]: k < 0
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: T.flairContainer,
                            children: [O && k >= 0 ? (0, l.jsx)(s.Tooltip, {
                                text: g.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                                    maxLength: x
                                }),
                                position: "top",
                                children: e => (0, l.jsx)(p.default, {
                                    className: T.premiumFlair,
                                    ...e
                                })
                            }) : null, M || k < 0 && b ? null : (0, l.jsx)(s.Tooltip, {
                                text: P,
                                position: "top",
                                children: e => (0, l.jsx)("span", {
                                    "aria-hidden": !0,
                                    ...e,
                                    children: k
                                })
                            })]
                        }), (0, l.jsx)(s.HiddenVisually, {
                            children: g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                                count: k
                            })
                        }), R && !M ? (0, l.jsx)(h.default, {
                            className: T.upsell,
                            iconOnly: (null === (i = v.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                            remaining: k
                        }) : null]
                    })
                }) : null
            }
        },
        10680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                caseInsensitiveLangRegex: function() {
                    return s
                },
                isKnownLang: function() {
                    return a
                },
                findBackticks: function() {
                    return u
                }
            });
            var l = n("436443");
            n("86256");
            let i = l.default.listLanguages(),
                r = {};
            for (let e of i) {
                e = e.toLowerCase();
                let t = l.default.getLanguage(e);
                if (null == t) continue;
                let n = t.aliases;
                if (r[e] = e, null != n)
                    for (let t of n) r[t.toLowerCase()] = e
            }
            let o = /^[a-z0-9_+\-.#]+$/,
                s = /^[a-z0-9_+\-.#]+$/i;
            for (let e in r)
                if (null == e.match(o)) throw Error("Language name does not match regex: ".concat(e));

            function a(e) {
                return e.toLowerCase() in r
            }

            function u(e) {
                let t;
                let n = [],
                    l = /\\|```/g;
                for (; null != (t = l.exec(e));) {
                    if ("\\" === t[0]) {
                        l.lastIndex += 1;
                        continue
                    }
                    n.push(t.index)
                }
                return n
            }
        },
        566819: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FIRST_BLOCK_PATH: function() {
                    return l
                },
                FIRST_TEXT_PATH: function() {
                    return i
                },
                FIRST_TEXT_POINT: function() {
                    return r
                },
                WHITESPACE_RE: function() {
                    return o
                },
                SELECTABLE_VOIDS: function() {
                    return s
                }
            });
            let l = [0],
                i = [0, 0],
                r = {
                    path: [0, 0],
                    offset: 0
                },
                o = /(\t|\s)/,
                s = ["applicationCommandOption"]
        },
        903782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasDomParent: function() {
                    return r
                },
                normalizeDOMPoint: function() {
                    return o
                }
            });
            var l = n("278419");
            let i = !1;
            {
                l.ReactEditor.toSlateRange = (e, t, n) => {
                    let i, r, o, s, a, {
                        exactMatch: u,
                        suppressThrow: c
                    } = n;
                    if (function(e) {
                            let t = e && e.anchorNode && d(e.anchorNode);
                            return null != t && e instanceof t.Selection
                        }(t) ? (i = t.anchorNode, r = t.anchorOffset, o = t.focusNode, s = t.focusOffset, a = t.isCollapsed) : (i = t.startContainer, r = t.startOffset, o = t.endContainer, s = t.endOffset, a = t.collapsed), null == i || null == o || null == r || null == s) {
                        if (c) return null;
                        throw Error("Cannot resolve a Slate range from DOM range")
                    }
                    let f = l.ReactEditor.toSlatePoint(e, [i, r], {
                            exactMatch: u,
                            suppressThrow: c
                        }),
                        p = a ? f : l.ReactEditor.toSlatePoint(e, [o, s], {
                            exactMatch: u,
                            suppressThrow: c
                        });
                    return null != f && null != p ? {
                        anchor: f,
                        focus: p
                    } : null
                };
                let e = l.ReactEditor.toSlatePoint;
                l.ReactEditor.toSlatePoint = (t, n, l) => {
                    let {
                        exactMatch: i,
                        suppressThrow: r,
                        direction: s = "forward"
                    } = l;
                    !i && (n = o(n, s));
                    try {
                        return e(t, n, {
                            exactMatch: !0,
                            suppressThrow: r
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }, i = !0
            }

            function r(e, t) {
                if (null == t) return !1;
                for (; null != e;) {
                    if (e === t) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function o(e, t) {
                let n, [l, i] = e;
                if (!a(l) || 0 === l.childNodes.length) return e;
                for ("forward" === t && i === l.childNodes.length && (t = "backward"), "backward" === t && i--, [l, n] = s(l, i, t), "forward" === t && n < i ? t = "backward" : "backward" === t && n > i && (t = "forward"), i = n; a(l) && l.childNodes.length > 0;) {
                    let e = "backward" === t ? l.childNodes.length - 1 : 0;
                    l = s(l, e, t)[0]
                }
                let r = "backward" === t && null != l.textContent ? l.textContent.length : 0;
                return [l, r]
            }

            function s(e, t, n) {
                let {
                    childNodes: l
                } = e, i = l[t], r = t, o = !1, s = !1;
                for (;
                    (function(e) {
                        return u(e) && 8 === e.nodeType
                    }(i) || a(i) && 0 === i.childNodes.length || a(i) && "false" === i.getAttribute("contenteditable")) && (!o || !s);) {
                    ;
                    if (r >= l.length) {
                        o = !0, r = t - 1, n = "backward";
                        continue
                    }
                    if (r < 0) {
                        s = !0, r = t + 1, n = "forward";
                        continue
                    }
                    i = l[r], t = r, r += "forward" === n ? 1 : -1
                }
                return [i, t]
            }

            function a(e) {
                return u(e) && 1 === e.nodeType
            }

            function u(e) {
                let t = d(e);
                return null != t && e instanceof t.Node
            }

            function d(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView || null
            }
        },
        776574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("278419"),
                a = n("272030"),
                u = n("773336"),
                d = n("286235"),
                c = n("149022"),
                f = n("83800"),
                p = n("903782"),
                m = n("939563"),
                h = n("385887"),
                E = n("368555"),
                S = n("30550"),
                g = n("760120"),
                T = n("632550"),
                v = n("783059"),
                C = n("632215");
            class y extends i.PureComponent {
                componentDidMount() {
                    this.props.editor.events.addListener("onChange", this.handleOnChange)
                }
                componentDidUpdate(e, t, n) {
                    e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
                }
                componentWillUnmount() {
                    this.props.editor.events.removeListener("onChange", this.handleOnChange)
                }
                componentDidCatch(e, t) {
                    d.default.captureException(e, {
                        extra: t
                    }), this.setState({
                        initialValue: [...this.props.editor.children]
                    })
                }
                decorate(e) {
                    var t;
                    let {
                        editor: n,
                        guildId: l,
                        decorateExtra: i
                    } = this.props;
                    return [...(0, S.default)(n, e, l), ...(0, E.default)(n, e), ...null !== (t = null == i ? void 0 : i(n, e)) && void 0 !== t ? t : []]
                }
                renderElement(e) {
                    var t;
                    let {
                        guildId: n,
                        channelId: i,
                        renderExtraElement: r
                    } = this.props, {
                        attributes: o,
                        children: s
                    } = e;
                    "rtl" === o.dir && (o.style = {
                        ...o.style,
                        textAlign: "right"
                    });
                    let a = null !== (t = null == r ? void 0 : r(e)) && void 0 !== t ? t : (0, g.default)(e, n, i);
                    return null != a ? a : (0, l.jsx)("div", {
                        ...o,
                        children: s
                    })
                }
                renderLeaf(e) {
                    var t;
                    let {
                        editor: n,
                        renderExtraLeaf: i
                    } = this.props, {
                        attributes: r,
                        children: o
                    } = e, s = null !== (t = null == i ? void 0 : i(e)) && void 0 !== t ? t : (0, T.default)(n, e);
                    return null != s ? s : (0, l.jsx)("span", {
                        ...r,
                        children: o
                    })
                }
                handleOnChange() {
                    var e, t;
                    let {
                        editor: n
                    } = this.props, l = h.EditorUtils.isEditorEmpty(n) && null == n.composition;
                    if (l !== this.state.showPlaceholder && this.setState({
                            showPlaceholder: l
                        }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, h.EditorUtils.richValue(n)), !1 === this.props.canFocus) {
                        let e = s.ReactEditor.findDocumentOrShadowRoot(n),
                            t = e.getSelection();
                        null != t && this.isSelectionPartiallyInside(t) && (null == t || t.removeAllRanges())
                    }
                }
                handleKeyDown(e) {
                    var t, n;
                    if (null != this.props.editor.composition) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e)
                }
                handleKeyUp(e) {
                    var t, n;
                    if (null != this.props.editor.composition) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e)
                }
                handleBeforeInput(e) {
                    var t;
                    let {
                        editor: n
                    } = this.props, l = s.ReactEditor.findDocumentOrShadowRoot(n), i = l.getSelection(), r = null != i && i.rangeCount > 0 ? i.getRangeAt(0) : null, o = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
                    if (null == n.composition) {
                        if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == o && (o = r), null != o)) {
                            let t = h.EditorUtils.toSlateRange(n, o, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            null != t && null != e.data && (h.RangeUtils.isExpanded(t) ? f.HistoryUtils.withSingleEntry(n, () => {
                                n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
                            }) : (n.insertText(e.data), e.preventDefault()))
                        }
                        if (e.inputType.startsWith("deleteContent") && null != r && !r.collapsed) {
                            let t = h.EditorUtils.toSlateRange(n, r, {
                                exactMatch: !0,
                                suppressThrow: !0
                            });
                            null != t && h.RangeUtils.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
                        }
                    }
                }
                handleCompositionStart() {
                    var e, t;
                    let {
                        editor: n
                    } = this.props, l = {
                        insertedPrefix: !1,
                        startedInsideInline: !1
                    };
                    this.state.showPlaceholder && this.setState({
                        showPlaceholder: !1
                    });
                    let i = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.leaf(n, n.selection.anchor.path) : null;
                    if (null == i) {
                        n.composition = l;
                        return
                    }
                    let r = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.above(n, {
                        at: i[1],
                        match: e => h.EditorUtils.isInline(n, e),
                        mode: "lowest"
                    }) : null;
                    if (null != r && (l.startedInsideInline = !0), h.EditorUtils.isEditorEmpty(n)) {
                        m.SlateTransforms.insertNodes(n, {
                            text: "\uFEFF"
                        }, {
                            select: !0
                        }), l.insertedPrefix = !0, n.composition = l;
                        return
                    }
                    let o = s.ReactEditor.findDocumentOrShadowRoot(this.props.editor),
                        a = o.getSelection(),
                        u = (null !== (e = null == a ? void 0 : a.rangeCount) && void 0 !== e ? e : 0) > 0 ? null == a ? void 0 : a.getRangeAt(0) : null,
                        d = null != u ? h.EditorUtils.toSlateRange(n, u, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }) : null;
                    if (null == d && null != u) {
                        let e = h.EditorUtils.toSlateRange(n, u, {
                            exactMatch: !1,
                            suppressThrow: !0
                        });
                        n.selection = null, null != e ? m.SlateTransforms.select(n, e) : m.SlateTransforms.select(n, null !== (t = n.selection) && void 0 !== t ? t : h.EditorUtils.end(n, []))
                    }
                    n.composition = l
                }
                handleCompositionEnd(e) {
                    let {
                        editor: t
                    } = this.props;
                    if (null == t.composition) return;
                    let {
                        insertedPrefix: n
                    } = t.composition;
                    if (n && null != t.selection && h.RangeUtils.isCollapsed(t.selection)) {
                        let e = t.selection.anchor.path,
                            n = h.NodeUtils.leaf(t, e);
                        h.EditorUtils.withoutNormalizing(t, () => {
                            let e = n.text.replace(/^\uFEFF/, "");
                            m.SlateTransforms.delete(t, {
                                unit: "offset",
                                distance: n.text.length,
                                reverse: !0
                            }), h.EditorUtils.insertText(t, e)
                        })
                    }
                    t.composition = null
                }
                handleFocusCapture(e) {
                    let {
                        onFocus: t
                    } = this.props;
                    null == t || t(e)
                }
                handleBlurCapture(e) {
                    let {
                        editor: t,
                        onBlur: n
                    } = this.props, l = e.relatedTarget, i = s.ReactEditor.findDocumentOrShadowRoot(this.props.editor), r = i.getElementById("textarea-context"), o = i.getElementById("slate-toolbar");
                    if (null != l && !(0, p.hasDomParent)(l, r) && !(0, p.hasDomParent)(l, o)) {
                        let e = s.ReactEditor.findDocumentOrShadowRoot(t),
                            n = e.getSelection();
                        null != n && this.isSelectionEscaping(n) && n.removeAllRanges()
                    }
                    null == n || n(e)
                }
                isSelectionPartiallyInside(e) {
                    let t = this.containerRef.current;
                    if (null != e && null != t)
                        for (let n = e.rangeCount - 1; n >= 0; n--) {
                            let l = e.getRangeAt(n);
                            if ((0, p.hasDomParent)(l.startContainer, t) || !l.collapsed && (0, p.hasDomParent)(l.endContainer, t)) return !0
                        }
                    return !1
                }
                isSelectionEscaping(e) {
                    let t = this.containerRef.current,
                        n = !1,
                        l = !1;
                    if (null != e && null != t)
                        for (let i = e.rangeCount - 1; i >= 0; i--) {
                            let r = e.getRangeAt(i);
                            if ((0, p.hasDomParent)(r.startContainer, t)) {
                                if (l) return !0;
                                n = !0
                            } else {
                                if (n) return !0;
                                l = !0
                            }
                            if (!r.collapsed) {
                                if ((0, p.hasDomParent)(r.startContainer, t)) {
                                    if (l) return !0;
                                    n = !0
                                } else {
                                    if (n) return !0;
                                    l = !0
                                }
                            }
                        }
                    return !1
                }
                handleContextMenu(e) {
                    let {
                        editor: t
                    } = this.props, i = e.pageY, r = window.innerHeight;
                    u.isPlatformEmbedded ? (0, a.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("875602").then(n.bind(n, "875602"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            editor: t,
                            text: h.EditorUtils.getSelectedText(t, !0)
                        })
                    }, {
                        align: null != i && null != r && i < r / 2 ? "top" : "bottom",
                        enableSpellCheck: !0
                    }) : blur()
                }
                render() {
                    let {
                        editor: e,
                        className: t,
                        containerClassName: n,
                        canFocus: i,
                        autoFocus: r,
                        placeholder: a,
                        onPaste: u,
                        channelId: d,
                        guildId: c,
                        onChange: f,
                        onFocus: p,
                        onBlur: m,
                        onKeyDown: h,
                        onKeyUp: E,
                        decorateExtra: S,
                        renderExtraElement: g,
                        renderExtraLeaf: T,
                        ...y
                    } = this.props;
                    return (0, l.jsxs)("div", {
                        ref: this.containerRef,
                        className: n,
                        children: [this.state.showPlaceholder ? (0, l.jsx)("div", {
                            className: o(v.placeholder, t),
                            "aria-hidden": !0,
                            children: a
                        }) : null, (0, l.jsx)(s.Slate, {
                            editor: e,
                            value: [...this.state.initialValue],
                            children: (0, l.jsx)(s.Editable, {
                                ...y,
                                className: o(C.markup, v.editor, t),
                                decorate: this.decorate,
                                renderElement: this.renderElement,
                                renderLeaf: this.renderLeaf,
                                onFocusCapture: this.handleFocusCapture,
                                onBlurCapture: this.handleBlurCapture,
                                onContextMenu: this.handleContextMenu,
                                onKeyDown: this.handleKeyDown,
                                onKeyUp: this.handleKeyUp,
                                onDOMBeforeInput: this.handleBeforeInput,
                                onCompositionStart: this.handleCompositionStart,
                                onCompositionEnd: this.handleCompositionEnd,
                                onPasteCapture: u,
                                autoFocus: r && !1 !== i,
                                autoCorrect: "off",
                                "data-can-focus": !1 !== i,
                                "aria-label": a,
                                "aria-multiline": !0
                            })
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.containerRef = i.createRef(), this.decorate = this.decorate.bind(this), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), h.EditorUtils.isEditorEmpty(e.editor) ? this.state = {
                        initialValue: (0, c.createEmptyState)().richValue,
                        showPlaceholder: !0
                    } : this.state = {
                        initialValue: h.EditorUtils.richValue(e.editor),
                        showPlaceholder: !1
                    }
                }
            }
            var I = y
        },
        135038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPointFromPosition: function() {
                    return i
                }
            });
            var l = n("385887");

            function i(e, t, n, i) {
                var r, o;
                let s = 0;
                for (let r = 0; r < n.length; r++) {
                    let o = n[r];
                    if (null == o) continue;
                    let a = s + o.length;
                    if (i <= a) {
                        let n = l.PathUtils.child(t, r),
                            o = l.EditorUtils.node(e, n)[0];
                        if (l.TextUtils.isText(o)) return {
                            path: n,
                            offset: Math.min(Math.max(i - s, 0), o.text.length)
                        }
                    }
                    s = a
                }
                let a = n.length - 1;
                return {
                    path: l.PathUtils.child(t, a),
                    offset: null !== (o = null === (r = n[a]) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0
                }
            }
        },
        970153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toTextValue: function() {
                    return h
                },
                serializeDescendant: function() {
                    return S
                }
            });
            var l = n("627445"),
                i = n.n(l),
                r = n("679653"),
                o = n("646630"),
                s = n("235004"),
                a = n("42203"),
                u = n("305961"),
                d = n("27618"),
                c = n("162771"),
                f = n("697218"),
                p = n("158998"),
                m = n("385887");

            function h(e, t) {
                let {
                    mode: n,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                } = null != t ? t : {}, [r, o] = (null == t ? void 0 : t.range) != null ? m.RangeUtils.edges(t.range) : [void 0, void 0];
                return E(e, {
                    mode: n,
                    start: r,
                    end: o,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                })
            }

            function E(e, t) {
                var n, l;
                let {
                    mode: i,
                    start: r,
                    end: o,
                    separator: s,
                    ignoreEmptyNodes: a,
                    ignoreTrailingEmptyNodes: u,
                    preventEmojiSurrogates: d
                } = null != t ? t : {}, c = e.length > 0 && !m.TextUtils.isText(e[0]);
                null == s && (s = c ? "\n" : "");
                let f = null !== (n = null == r ? void 0 : r.path[0]) && void 0 !== n ? n : 0,
                    p = null !== (l = null == o ? void 0 : o.path[0]) && void 0 !== l ? l : e.length - 1;
                if (u)
                    for (let t = p; t >= f; t--) {
                        let n = e[t];
                        if (m.TextUtils.isText(n)) {
                            if (n.text.length > 0) {
                                p = t;
                                break
                            }
                        } else if (!m.ElementUtils.isEmpty(n)) {
                            p = t;
                            break
                        }
                        if (t === f) return ""
                    }
                let h = f > 0 && m.NodeUtils.isType(e[f - 1], "blockQuote"),
                    E = m.NodeUtils.isType(e[f], "blockQuote"),
                    g = m.NodeUtils.isType(e[p], "blockQuote"),
                    T = [];
                for (let t = f; t <= p; t++) {
                    let n = e[t];
                    if (a && m.TextUtils.isText(n) && 0 === n.text.length) continue;
                    let l = null != r && t === f ? {
                            path: r.path.slice(1),
                            offset: r.offset
                        } : void 0,
                        s = null != o && t === p ? {
                            path: o.path.slice(1),
                            offset: o.offset
                        } : void 0,
                        u = null == r || null == o || !h && (!E || g),
                        c = S(n, {
                            mode: i,
                            start: l,
                            end: s,
                            allowBlockQuotePrefix: u,
                            preventEmojiSurrogates: d
                        });
                    (!a || c.length > 0) && T.push(c)
                }
                return T.join(s)
            }

            function S(e, t) {
                let {
                    mode: n,
                    start: l,
                    allowBlockQuotePrefix: h = !1,
                    preventEmojiSurrogates: S = !1
                } = null != t ? t : {};
                if (m.TextUtils.isText(e)) return function(e, t) {
                    var n, l;
                    let {
                        start: r,
                        end: o
                    } = null != t ? t : {};
                    return i(null == r || 0 === r.path.length, "Invalid start provided to serializeText"), i(null == o || 0 === o.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == r ? void 0 : r.offset) && void 0 !== n ? n : 0, null !== (l = null == o ? void 0 : o.offset) && void 0 !== l ? l : e.length)
                }(e.text, t);
                switch (e.type) {
                    case "line":
                    case "testInline":
                        return E(e.children, t);
                    case "testInlineVoid":
                        return "";
                    case "blockQuote": {
                        let n = E(e.children, t),
                            i = null != l && 1 === l.path.length && 0 === l.path[0] && 0 === l.offset;
                        if (h && (null == l || i)) return "> ".concat(n);
                        return n
                    }
                    case "emoji": {
                        let t = e.emoji;
                        if (!S && null != t.surrogate) return t.surrogate;
                        return t.name
                    }
                    case "customEmoji": {
                        let t = e.emoji;
                        if ("raw" === n) {
                            let e = t.animated ? "a" : "",
                                n = t.name.replace(/:/g, "").split("~")[0];
                            return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
                        }
                        return t.name
                    }
                    case "textMention":
                        return e.name;
                    case "channelMention": {
                        let t = "<#".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "soundboard": {
                        let t = "<sound:".concat(e.soundId, ">");
                        if ("raw" === n) return t;
                        let l = s.default.getSoundById(e.soundId);
                        if (null == l) return t;
                        return l.name
                    }
                    case "staticRouteLink": {
                        let t = "<id:".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "roleMention": {
                        let t = "<@&".concat(e.roleId, ">");
                        if ("raw" === n) return t;
                        let l = u.default.getGuild(c.default.getGuildId()),
                            i = null == l ? void 0 : l.roles[e.roleId];
                        if (null == i) return t;
                        return "@".concat(i.name)
                    }
                    case "userMention": {
                        let t = "<@".concat(e.userId, ">");
                        if ("raw" === n) return t;
                        let l = f.default.getUser(e.userId);
                        if (null == l) return t;
                        return "@".concat(p.default.getUserTag(l, {
                            decoration: "never"
                        }))
                    }
                    case "commandMention":
                        return "</".concat(e.commandName, ":").concat(e.commandId, ">");
                    case "timestamp":
                        return (0, o.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
                    case "applicationCommand":
                        return E(e.children, {
                            ...t,
                            separator: " ",
                            ignoreEmptyNodes: !0
                        });
                    case "applicationCommandOption": {
                        let n = E(e.children, t);
                        if (null == l) return "".concat(e.optionDisplayName, ":").concat(n);
                        return n
                    }
                }
            }
        },
        916429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parseSelectedSyntax: function() {
                    return d
                },
                toggleMarkdownStyle: function() {
                    return h
                },
                toggleBlockStyle: function() {
                    return E
                }
            });
            var l = n("627445"),
                i = n.n(l),
                r = n("83800"),
                o = n("939563"),
                s = n("385887");
            let a = new Set(["*", "_", "~", "`", "|"]),
                u = {
                    bold: "**",
                    italics: "*",
                    underline: "__",
                    strikethrough: "~~",
                    inlineCode: "`",
                    spoiler: "||"
                };

            function d(e, t, n) {
                if (null == e.selection) return {
                    before: {},
                    after: {}
                };
                let l = c(e, t),
                    i = c(e, n);
                for (let e in l) !(e in i) && delete l[e];
                for (let e in i) !(e in l) && delete i[e];
                return {
                    before: l,
                    after: i
                }
            }

            function c(e, t) {
                let [n] = s.EditorUtils.node(e, t.path);
                if (!s.TextUtils.isText(n)) return {};
                let l = n.text,
                    i = t.offset;
                for (let e = i - 1; e >= 0 && a.has(l.charAt(e)); e--) i--;
                let r = t.offset;
                for (let e = r; e < l.length && a.has(l.charAt(e)); e++) r++;
                let o = l.substring(i, r),
                    u = {};
                return p({
                    result: u,
                    text: o,
                    startIndex: i,
                    syntax: "***",
                    type1: "italics",
                    type2: "bold"
                }), p({
                    result: u,
                    text: o,
                    startIndex: i,
                    syntax: "___",
                    type1: "italics",
                    type2: "underline"
                }), f(u, o, i, "**", "bold"), f(u, o, i, "*", "italics"), f(u, o, i, "_", "italics"), f(u, o, i, "__", "underline"), f(u, o, i, "`", "inlineCode"), f(u, o, i, "~~", "strikethrough"), f(u, o, i, "||", "spoiler"), u
            }

            function f(e, t, n, l, i) {
                let r = m(t, l);
                r >= 0 && (e[i] = {
                    chars: l,
                    location: n + r
                })
            }

            function p(e) {
                let {
                    result: t,
                    text: n,
                    startIndex: l,
                    syntax: i,
                    type1: r,
                    type2: o
                } = e, s = m(n, i);
                s >= 0 && (t[r] = {
                    chars: i.substring(0, 1),
                    location: s + l
                }, t[o] = {
                    chars: i.substring(1),
                    location: s + l + 1
                })
            }

            function m(e, t) {
                let n = e.indexOf(t);
                if (n >= 0) {
                    let l = t.charAt(0);
                    if (n > 0 && e.charAt(n - 1) === l || n < e.length - 1 && e.charAt(n + t.length) === l) return -1
                }
                return n
            }

            function h(e, t) {
                r.HistoryUtils.withSingleEntry(e, () => {
                    s.EditorUtils.withoutNormalizing(e, () => {
                        i(null != e.selection, "Editor has no selection");
                        let [n, l] = s.RangeUtils.edges(e.selection), r = d(e, n, l), a = r.before[t], c = r.after[t], f = s.EditorUtils.node(e, n.path), p = s.EditorUtils.node(e, l.path);
                        if (null == f || null == p || !s.TextUtils.isText(f[0]) || !s.TextUtils.isText(p[0])) return;
                        let m = s.PathUtils.equals(f[1], p[1]);
                        if (null != a && null != c) {
                            let t = {
                                    path: n.path,
                                    offset: a.location
                                },
                                i = {
                                    path: l.path,
                                    offset: c.location
                                };
                            o.SlateTransforms.delete(e, {
                                at: i,
                                distance: c.chars.length
                            }), o.SlateTransforms.delete(e, {
                                at: t,
                                distance: a.chars.length
                            });
                            let r = n.offset,
                                u = l.offset;
                            !s.PointUtils.isBefore(n, t) && (r -= a.chars.length), m && !s.PointUtils.isBefore(l, t) && (u -= a.chars.length), s.PointUtils.isAfter(l, i) && (u -= c.chars.length), o.SlateTransforms.select(e, {
                                anchor: {
                                    path: n.path,
                                    offset: Math.max(0, r)
                                },
                                focus: {
                                    path: l.path,
                                    offset: Math.max(0, u)
                                }
                            })
                        } else {
                            let i = u[t];
                            o.SlateTransforms.insertText(e, i, {
                                at: l
                            }), o.SlateTransforms.insertText(e, i, {
                                at: n
                            });
                            let r = f[0].text.length + i.length,
                                s = p[0].text.length + (m ? 2 * i.length : i.length);
                            o.SlateTransforms.select(e, {
                                anchor: {
                                    path: n.path,
                                    offset: Math.min(r, n.offset + i.length)
                                },
                                focus: {
                                    path: l.path,
                                    offset: Math.min(s, l.offset + (m ? i.length : 0))
                                }
                            })
                        }
                    })
                }), s.EditorUtils.focus(e)
            }

            function E(e, t) {
                let n = e.selection;
                if (null == n) return;
                let l = !0;
                for (let [i, r] of s.EditorUtils.blocks(e))("line" === i.type || i.type === t) && s.RangeUtils.includes(n, r) && (l = l && i.type === t);
                s.EditorUtils.withoutNormalizing(e, () => {
                    for (let [i, r] of s.EditorUtils.blocks(e)) s.RangeUtils.includes(n, r) && (l || "line" !== i.type ? l && i.type === t && o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: r
                    }) : o.SlateTransforms.setNodes(e, {
                        type: t
                    }, {
                        at: r
                    }))
                }), s.EditorUtils.focus(e)
            }
        },
        848471: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ToolbarButtons: function() {
                    return N
                },
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("278419"),
                a = n("77078"),
                u = n("244201"),
                d = n("520089"),
                c = n("769215"),
                f = n("204591"),
                p = n("685020"),
                m = n("265363"),
                h = n("528465"),
                E = n("983782"),
                S = n("791776"),
                g = n("83800"),
                T = n("916429"),
                v = n("939563"),
                C = n("385887"),
                y = n("395364"),
                I = n("223797");

            function N(e) {
                var t;
                let {
                    editorRef: n,
                    options: i,
                    iconClassName: r,
                    dividerClassName: s
                } = e, a = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
                return null == a ? null : (0, l.jsxs)("div", {
                    className: I.buttons,
                    children: [(0, l.jsx)(x, {
                        slateEditor: a,
                        markdownSyntax: "bold",
                        children: (0, l.jsx)(c.default, {
                            className: o(I.icon, r)
                        })
                    }), (0, l.jsx)(x, {
                        slateEditor: a,
                        markdownSyntax: "italics",
                        children: (0, l.jsx)(p.default, {
                            className: o(I.icon, r)
                        })
                    }), (0, l.jsx)(x, {
                        slateEditor: a,
                        markdownSyntax: "strikethrough",
                        children: (0, l.jsx)(h.default, {
                            className: o(I.icon, r)
                        })
                    }), (0, l.jsx)("div", {
                        className: o(I.divider, s)
                    }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, l.jsx)(A, {
                        slateEditor: a,
                        blockType: "blockQuote",
                        children: (0, l.jsx)(d.default, {
                            className: o(I.icon, r)
                        })
                    }), (0, l.jsx)(x, {
                        slateEditor: a,
                        markdownSyntax: "inlineCode",
                        children: (0, l.jsx)(f.default, {
                            className: o(I.icon, r)
                        })
                    }), (0, l.jsx)(x, {
                        slateEditor: a,
                        markdownSyntax: "spoiler",
                        children: (0, l.jsx)(m.default, {
                            className: o(I.icon, r)
                        })
                    })]
                })
            }
            var _ = i.forwardRef(function(e, t) {
                var n;
                let {
                    editorRef: r,
                    containerRef: o,
                    options: a
                } = e, d = i.useRef(null), [c, f] = i.useState(!1), p = i.useRef(), m = i.useContext(u.default), h = i.useCallback(() => {
                    f(!1), clearTimeout(p.current)
                }, []), g = i.useCallback(e => {
                    var t;
                    let n = m.renderWindow,
                        l = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
                    !l && h()
                }, [m, h]), T = i.useCallback(e => {
                    let t = m.renderWindow;
                    if (e.target instanceof t.Element) {
                        if (0 !== e.button) h();
                        else {
                            var n;
                            let l = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                            clearTimeout(p.current), p.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, S.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = o.current;
                                f(l || null != n && null != i && i.contains(n))
                            }, 100)
                        }
                    } else h()
                }, [m, o, h]);
                i.useImperativeHandle(t, () => ({
                    hide: h
                }), [h]), i.useEffect(() => {
                    let e = m.renderWindow;
                    return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", g), e.document.addEventListener("mouseup", T), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
                        e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", g), e.document.removeEventListener("mouseup", T), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(p.current)
                    }
                }, [m, h, g, T]);
                let {
                    x: v,
                    y
                } = i.useMemo(() => {
                    var e, t, n, l;
                    let i = null === (e = r.current) || void 0 === e ? void 0 : e.getSlateEditor();
                    if ((null == i ? void 0 : i.selection) == null || C.RangeUtils.isCollapsed(i.selection) || !c) return {
                        x: null,
                        y: null
                    };
                    let a = s.ReactEditor.findDocumentOrShadowRoot(i),
                        u = a.getSelection();
                    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                        x: null,
                        y: null
                    };
                    let d = a.createRange();
                    d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
                    let f = d.getBoundingClientRect(),
                        p = a.createRange();
                    p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.anchorNode, u.anchorOffset);
                    let m = p.getBoundingClientRect(),
                        h = a.createRange();
                    h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
                    let E = h.getBoundingClientRect(),
                        S = f.x === m.x,
                        g = S ? E.x : Math.min(f.x, m.x),
                        T = S ? E.x + E.width : Math.max(f.x, m.x),
                        v = null !== (l = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== l ? l : 0,
                        y = Math.max(v, Math.min(m.y, f.y));
                    return {
                        x: g + (T - g) / 2,
                        y
                    }
                }, [o, c, r]), [_, x] = i.useState(0), [A, R] = i.useState(0);
                if (i.useLayoutEffect(() => {
                        if (null == v || null == y || null == d.current) return;
                        let e = d.current.getBoundingClientRect();
                        R(e.width / 2), x(e.height + 12)
                    }, [v, y]), null == v || null == y) return null;
                let b = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
                return null == b ? null : (0, l.jsx)(E.default, {
                    children: (0, l.jsxs)("div", {
                        id: "slate-toolbar",
                        ref: d,
                        className: I.toolbar,
                        style: {
                            top: y - _,
                            left: v - A
                        },
                        onMouseDown: e => {
                            e.stopPropagation()
                        },
                        onMouseUp: e => {
                            e.stopPropagation()
                        },
                        children: [(0, l.jsx)(O, {
                            slateEditor: b
                        }), (0, l.jsx)(N, {
                            editorRef: r,
                            options: a
                        })]
                    })
                })
            });

            function x(e) {
                let {
                    slateEditor: t,
                    markdownSyntax: n,
                    children: i
                } = e, r = !1;
                if ((null == t ? void 0 : t.selection) != null) {
                    let [e, l] = C.RangeUtils.edges(t.selection);
                    r = null != (0, T.parseSelectedSyntax)(t, e, l).before[n]
                }
                return (0, l.jsx)(a.Button, {
                    className: I.button,
                    innerClassName: I.buttonInner,
                    color: r ? I.active : I.inactive,
                    hover: I.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != t && g.HistoryUtils.withSingleEntry(t, () => (0, T.toggleMarkdownStyle)(t, n))
                    },
                    children: i
                })
            }

            function A(e) {
                let {
                    blockType: t,
                    slateEditor: n,
                    children: i
                } = e, r = null != n ? C.EditorUtils.getCurrentBlock(n) : null, o = null != r && C.NodeUtils.isType(r[0], t);
                return (0, l.jsx)(a.Button, {
                    className: I.button,
                    innerClassName: I.buttonInner,
                    color: o ? I.active : I.inactive,
                    hover: I.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != n && g.HistoryUtils.withSingleEntry(n, () => (0, T.toggleBlockStyle)(n, t))
                    },
                    children: i
                })
            }

            function O(e) {
                var t;
                let {
                    slateEditor: n
                } = e, [l, r] = null !== (t = C.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], o = i.useCallback(e => {
                    if ((null == n ? void 0 : n.selection) == null || null == r) return;
                    let t = n.selection;
                    g.HistoryUtils.withSingleEntry(n, () => {
                        v.SlateTransforms.voidToText(n, e, r), v.SlateTransforms.select(n, t)
                    })
                }, [n, r]);
                return null == l ? null : (0, y.default)(l, {
                    replace: o
                })
            }
        },
        939563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlateTransforms: function() {
                    return s
                }
            });
            var l = n("987295"),
                i = n("640830"),
                r = n("385887"),
                o = n("566819");
            let s = {
                ...l.Transforms,
                resetSelectionToStart(e) {
                    l.Transforms.select(e, r.EditorUtils.start(e, []))
                },
                resetSelectionToEnd(e) {
                    l.Transforms.select(e, r.EditorUtils.end(e, []))
                },
                delete(e, t) {
                    let {
                        at: n,
                        distance: i,
                        unit: o,
                        reverse: s = !1,
                        select: a = !1,
                        bounds: u,
                        voids: d
                    } = t;
                    if (null == n) {
                        if (null == e.selection) return;
                        n = e.selection
                    }
                    let [c, f] = r.RangeUtils.isRange(n) ? r.RangeUtils.edges(n) : r.EditorUtils.edges(e, n);
                    if (null != i || null != o) {
                        var p, m, h;
                        if (s) {
                            let t = null !== (p = r.EditorUtils.before(e, c, {
                                distance: i,
                                unit: o
                            })) && void 0 !== p ? p : r.EditorUtils.start(e, []);
                            if ("character" === o && (null != i ? i : 1) === 1 && r.PathUtils.equals(c.path, f.path)) {
                                let n = r.EditorUtils.leaf(e, c.path),
                                    l = null != n ? n[0].text : "";
                                l.length > 0 && null != l[l.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (m = r.EditorUtils.before(e, c, {
                                    distance: i,
                                    unit: "offset"
                                })) && void 0 !== m ? m : r.EditorUtils.start(e, []))
                            }
                            c = t
                        } else f = null !== (h = r.EditorUtils.after(e, f, {
                            distance: i,
                            unit: o
                        })) && void 0 !== h ? h : r.EditorUtils.end(e, [])
                    }
                    if (null != u) {
                        let [e, t] = r.RangeUtils.edges(u);
                        r.PointUtils.isBefore(c, e) && (c = e), r.PointUtils.isAfter(f, t) && (f = t)
                    }!r.PointUtils.equals(c, f) && (l.Transforms.delete(e, {
                        at: {
                            anchor: c,
                            focus: f
                        },
                        hanging: !0,
                        voids: d
                    }), a && r.EditorUtils.hasPath(e, c.path) && l.Transforms.select(e, c))
                },
                textToText(e, t, n) {
                    var i;
                    let o = r.EditorUtils.getSelectionOverlap(e, n),
                        [s, a] = r.RangeUtils.edges(n),
                        d = null !== (i = r.EditorUtils.before(e, s)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
                        c = r.EditorUtils.after(e, a);
                    r.RangeUtils.isExpanded(n) && l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), l.Transforms.insertText(e, t, {
                        at: d
                    }), d = null != d ? d : r.EditorUtils.start(e, []), c = null != c ? c : r.EditorUtils.end(e, []), u(e, o, d, c, c)
                },
                textToVoid(e, t, n) {
                    let i = r.EditorUtils.getSelectionOverlap(e, n),
                        o = r.RangeUtils.start(n),
                        s = r.PathUtils.next(o.path),
                        a = {
                            path: r.PathUtils.next(s),
                            offset: 0
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), 0 === o.offset && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: o.path
                    }), l.Transforms.insertNodes(e, [t], {
                        at: o
                    }), (!r.EditorUtils.hasPath(e, a.path) || !r.TextUtils.isText(r.EditorUtils.node(e, a.path)[0])) && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: a.path
                    }), u(e, i, o, a, a)
                },
                textToInline(e, t, n) {
                    let i = r.EditorUtils.getSelectionOverlap(e, n),
                        o = t.children[t.children.length - 1],
                        s = r.RangeUtils.start(n),
                        a = r.PathUtils.next(s.path),
                        d = {
                            path: r.PathUtils.child(a, t.children.length - 1),
                            offset: r.TextUtils.isText(o) ? o.text.length : 0
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), 0 === s.offset && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: s.path
                    }), l.Transforms.insertNodes(e, [t], {
                        at: s
                    }), u(e, i, s, d, d)
                },
                voidToText(e, t, n) {
                    var i;
                    let o = r.EditorUtils.getSelectionOverlap(e, n),
                        s = null !== (i = r.EditorUtils.before(e, n)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
                        a = {
                            path: s.path,
                            offset: s.offset + t.length
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), l.Transforms.insertText(e, t, {
                        at: s
                    }), u(e, o, s, s, a)
                },
                removeInline(e, t) {
                    var n;
                    let i = r.EditorUtils.getSelectionOverlap(e, t),
                        o = null !== (n = r.EditorUtils.before(e, t)) && void 0 !== n ? n : r.EditorUtils.start(e, []);
                    l.Transforms.delete(e, {
                        at: t,
                        voids: !0
                    }), u(e, i, o, o, o)
                },
                removeInlineChildren(e, t) {
                    let [n, i] = t, o = r.EditorUtils.getSelectionOverlap(e, i), s = {
                        path: r.PathUtils.child(i, 0),
                        offset: 0
                    };
                    r.EditorUtils.withoutNormalizing(e, () => {
                        for (let t = n.children.length - 1; t >= 0; t--) l.Transforms.removeNodes(e, {
                            at: r.PathUtils.child(i, t),
                            voids: !0
                        })
                    }), u(e, o, null, s, null)
                },
                selectCommandOption(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        o = i.getCommandBlock(e);
                    if (null != o)
                        for (let i = 0; i < o[0].children.length; i++) {
                            let s = o[0].children[i];
                            if (r.NodeUtils.isType(s, "applicationCommandOption") && s.optionName === t) {
                                n ? l.Transforms.select(e, [0, i]) : l.Transforms.select(e, r.EditorUtils.end(e, [0, i]));
                                return
                            }
                        }
                },
                selectPreviousCommandOption(e) {
                    let t = i.getCommandBlock(e);
                    if (null == t) return;
                    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.end(e, o.FIRST_BLOCK_PATH).path,
                        s = i.getCurrentCommandOption(e),
                        a = r.EditorUtils.previous(e, {
                            at: n,
                            match: e => e !== (null == s ? void 0 : s[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
                        });
                    null != a ? l.Transforms.select(e, a[1]) : r.PathUtils.isAfter(n, o.FIRST_TEXT_PATH) && l.Transforms.select(e, r.EditorUtils.end(e, o.FIRST_TEXT_PATH))
                },
                selectNextCommandOption(e) {
                    let t = i.getCommandBlock(e);
                    if (null == t) return;
                    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.start(e, o.FIRST_BLOCK_PATH).path,
                        a = i.getCurrentCommandOption(e),
                        u = r.EditorUtils.next(e, {
                            at: n,
                            match: e => e !== (null == a ? void 0 : a[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
                        });
                    null != u ? l.Transforms.select(e, u[1]) : s.resetSelectionToEnd(e)
                },
                insertCommandOption(e, t) {
                    s.resetSelectionToEnd(e), s.insertNodes(e, [{
                        type: "applicationCommandOption",
                        optionName: t.name,
                        optionDisplayName: t.displayName,
                        optionType: t.type,
                        children: [{
                            text: ""
                        }]
                    }])
                },
                keyboardMove(e, t) {
                    let {
                        reverse: n = !1,
                        unit: i = "character",
                        edge: o
                    } = null != t ? t : {}, s = e.selection;
                    if (null == s) return;
                    if (void 0 === o && r.RangeUtils.isExpanded(s)) {
                        l.Transforms.collapse(e, {
                            edge: n ? "start" : "end"
                        });
                        return
                    }
                    let a = r.EditorUtils.leaf(e, s.anchor.path);
                    if (null == a) return;
                    let u = n ? r.EditorUtils.before : r.EditorUtils.after,
                        d = s.focus;
                    for (; null != d;) {
                        let t = i;
                        n || s.focus.offset !== a[0].text.length ? n && 0 === s.focus.offset && (t = "offset") : t = "offset";
                        let l = u(e, d, {
                            unit: t
                        });
                        if (null == l || r.PointUtils.equals(d, l)) {
                            d = void 0;
                            break
                        }
                        if (d = l, null == r.EditorUtils.getParentVoid(e, d)) break
                    }
                    null != d && ("focus" === o ? l.Transforms.setSelection(e, {
                        focus: d
                    }) : l.Transforms.setSelection(e, {
                        focus: d,
                        anchor: d
                    }))
                }
            };

            function a(e, t, n, l, i) {
                switch (t) {
                    case "start":
                        return n;
                    case "inside":
                        return l;
                    case "end":
                        return i
                }
                return e
            }

            function u(e, t, n, l, i) {
                var r, o;
                if (null == t.anchor && null == t.focus) return;
                let u = a(null === (r = e.selection) || void 0 === r ? void 0 : r.anchor, t.anchor, n, l, i),
                    d = a(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, l, i);
                if (null != u && null != d) s.select(e, {
                    anchor: u,
                    focus: d
                })
            }
        },
        385887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EditorUtils: function() {
                    return d
                },
                NodeUtils: function() {
                    return c
                },
                ElementUtils: function() {
                    return f
                },
                TextUtils: function() {
                    return p
                },
                PathUtils: function() {
                    return m
                },
                PointUtils: function() {
                    return h
                },
                RangeUtils: function() {
                    return E
                },
                SelectionUtils: function() {
                    return S
                },
                DOMUtils: function() {
                    return C
                }
            });
            var l = n("627445"),
                i = n.n(l),
                r = n("987295"),
                o = n("278419"),
                s = n("96342"),
                a = n("566819");
            n("903782");
            let u = !1;
            {
                let e = o.ReactEditor.findDocumentOrShadowRoot;
                o.ReactEditor.findDocumentOrShadowRoot = t => {
                    var n, l;
                    return null !== (l = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== l ? l : e(t)
                }, u = !0
            }
            let d = {
                    ...r.Editor,
                    ...o.ReactEditor,
                    richValue: e => e.children,
                    blocks: e => d.richValue(e).map((e, t) => [e, [t]]),
                    isBlock: (e, t) => f.isElement(t) && r.Editor.isBlock(e, t),
                    isInline: (e, t) => f.isElement(t) && r.Editor.isInline(e, t),
                    isVoid: (e, t) => f.isElement(t) && r.Editor.isVoid(e, t),
                    isEditorEmpty(e) {
                        let t = d.richValue(e);
                        return !(t.length > 1) && (0 === t.length || "line" === t[0].type && f.isEmpty(t[0]))
                    },
                    getFirstText(e) {
                        let t = d.node(e, a.FIRST_TEXT_PATH);
                        return p.isText(t[0]) ? t[0] : null
                    },
                    getCurrentBlock(e) {
                        return null == e.selection ? null : this.getParentBlock(e, e.selection)
                    },
                    getCurrentElement(e) {
                        return null == e.selection ? null : this.getParentElement(e, e.selection)
                    },
                    getCurrentInline(e) {
                        return null == e.selection ? null : this.getParentInline(e, e.selection)
                    },
                    getCurrentVoid(e) {
                        return null == e.selection ? null : this.getParentVoid(e, e.selection)
                    },
                    getCurrentText(e) {
                        let t = null != e.selection ? E.toPoint(e.selection) : null;
                        return null == t ? null : d.node(e, t.path)
                    },
                    getParentBlock(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => f.isElement(t) && d.isBlock(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentElement(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: e => f.isElement(e),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentInline(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => d.isInline(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentVoid(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => d.isVoid(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getSelectedVoid(e) {
                        let t;
                        if (null == e.selection) return null;
                        if (E.isExpanded(e.selection)) {
                            let [n, l] = E.edges(e.selection), i = d.after(e, n, {
                                unit: "offset"
                            }), r = d.before(e, l, {
                                unit: "offset"
                            });
                            if (null == i || null == r || !h.equals(i, r)) return null;
                            t = i
                        } else t = e.selection.anchor;
                        return null == t ? null : d.getParentVoid(e, t)
                    },
                    getSelectedText(e, t) {
                        let n = null;
                        if (t) {
                            let t = o.ReactEditor.findDocumentOrShadowRoot(e),
                                l = t.getSelection();
                            if (null != l && l.rangeCount > 0) {
                                let t = l.getRangeAt(0);
                                null != t && (n = o.ReactEditor.toSlateRange(e, t, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                }))
                            }
                        } else n = e.selection;
                        return null == n ? "" : this.getTextFromRange(e, n)
                    },
                    getTextFromRange(e, t) {
                        let [n, l] = E.edges(t), i = d.nodes(e, {
                            at: t,
                            mode: "lowest",
                            match: e => p.isText(e)
                        }), r = "";
                        for (let [e, t] of i) {
                            let i = m.equals(t, n.path) ? n.offset : 0,
                                o = m.equals(t, l.path) ? l.offset : 0;
                            r += e.text.substring(i, o)
                        }
                        return r
                    },
                    withoutNormalizing(e, t) {
                        let n = d.isNormalizing(e);
                        d.setNormalizing(e, !1);
                        try {
                            t()
                        } finally {
                            d.setNormalizing(e, n)
                        }!1 !== n && d.normalize(e)
                    },
                    areStylesDisabled(e) {
                        var t;
                        if (!e.previewMarkdown) return !0;
                        let n = d.richValue(e),
                            l = n[0],
                            i = (null == l ? void 0 : l.type) === "line" ? l.children[0] : null;
                        if (null == i || !p.isText(i)) return !1;
                        let r = e.chatInputType,
                            o = i.text;
                        return 1 === n.length && 1 === l.children.length && (!0 === r.sedReplace && o.startsWith("s/") || (null === (t = r.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && o.startsWith("+"))
                    },
                    focus(e) {
                        !o.ReactEditor.isFocused(e) && (o.ReactEditor.focus(e), o.ReactEditor.deselect(e))
                    },
                    getSelectionOverlap(e, t) {
                        if (null == e.selection) return {
                            anchor: null,
                            focus: null
                        };
                        if (m.isPath(t)) {
                            let n = d.range(e, t),
                                [l] = d.node(e, t);
                            if (f.isElement(l)) {
                                let l = d.before(e, t),
                                    i = d.after(e, t);
                                t = {
                                    anchor: null != l ? l : n.anchor,
                                    focus: null != i ? i : n.focus
                                }
                            } else t = n
                        }
                        let [n, l] = E.edges(t), i = null, r = null;
                        return h.equals(e.selection.anchor, n) ? i = "start" : h.equals(e.selection.anchor, l) ? i = "end" : E.includes(t, e.selection.anchor) && (i = "inside"), h.equals(e.selection.focus, n) ? r = "start" : h.equals(e.selection.focus, l) ? r = "end" : E.includes(t, e.selection.focus) && (r = "inside"), {
                            anchor: i,
                            focus: r
                        }
                    }
                },
                c = {
                    ...r.Node,
                    isType: (e, t) => r.Element.isElement(e) && e.type === t,
                    isInTypes: (e, t) => r.Element.isElement(e) && t.has(e.type)
                },
                f = {
                    ...r.Element,
                    updateElement(e, t) {
                        let n = d.node(e, t[1]);
                        return i(!d.isEditor(t[0]), "Element is the root node"), i(null != n, "Failed to find element"), i(f.isElement(n[0]), "Node at this path is no longer an element"), i(n[0].type === t[0].type, "Node at this path is a different type"), n
                    },
                    markdown(e, t, n) {
                        var l;
                        let i = "line" === e.type && (null === (l = e.codeBlockState) || void 0 === l ? void 0 : l.wasInCodeBlock) === !0,
                            r = e.children.map(e => p.isText(e) ? e.text : " "),
                            o = r.join(""),
                            a = s.parse(o, null != t ? t : null, i, n);
                        return {
                            entries: a,
                            serializedChildren: r
                        }
                    },
                    isEmpty(e) {
                        if (e.children.length > 1) return !1;
                        if (0 === e.children.length) return !0;
                        let t = e.children[0];
                        return p.isText(t) && 0 === t.text.length
                    }
                },
                p = {
                    ...r.Text
                },
                m = {
                    ...r.Path,
                    isFirstEditorBlock: e => m.equals(e, a.FIRST_BLOCK_PATH),
                    isFirstEditorText: e => m.equals(e, a.FIRST_TEXT_PATH),
                    isFirstChild: (e, t) => m.equals(t, m.child(e, 0)),
                    child: (e, t) => [...e, t]
                },
                h = {
                    ...r.Point,
                    start(e) {
                        let [, t] = e;
                        return {
                            path: m.child(t, 0),
                            offset: 0
                        }
                    },
                    end(e) {
                        let [t, n] = e, l = t.children[t.children.length - 1];
                        return {
                            path: m.child(n, t.children.length - 1),
                            offset: p.isText(l) ? l.text.length : 0
                        }
                    },
                    isAtStart(e, t) {
                        return h.equals(e, this.start(t))
                    },
                    isAtEnd(e, t) {
                        return h.equals(e, this.end(t))
                    },
                    clamp(e, t) {
                        let [n, l] = E.edges(t);
                        return h.isBefore(e, n) && (e = n), h.isAfter(e, l) && (e = l), e
                    }
                },
                E = {
                    ...r.Range,
                    toPoint: e => null == e || E.isExpanded(e) ? null : e.anchor,
                    children(e) {
                        let [t, n] = e, l = t.children[t.children.length - 1];
                        return {
                            anchor: {
                                path: m.child(n, 0),
                                offset: 0
                            },
                            focus: {
                                path: m.child(n, t.children.length - 1),
                                offset: p.isText(l) ? l.text.length : 0
                            }
                        }
                    },
                    clamp(e, t) {
                        let [n, l] = E.edges(e), [i, r] = E.edges(t);
                        return (h.isBefore(n, i) && (n = i), h.isAfter(l, r) && (l = r), E.isForward(e)) ? {
                            anchor: n,
                            focus: l
                        } : {
                            anchor: l,
                            focus: n
                        }
                    }
                },
                S = {
                    equals: (e, t) => null == e && null == t || null != e && null != t && E.equals(e, t),
                    isValid(e, t) {
                        if (null == t) return !1;
                        let {
                            anchor: n,
                            focus: l
                        } = t;
                        if (!d.hasPath(e, n.path) || !d.hasPath(e, l.path)) return !1;
                        let [i] = d.node(e, n.path), [r] = d.node(e, l.path);
                        return p.isText(i) && p.isText(r) && n.offset <= i.text.length && l.offset <= r.text.length
                    }
                },
                g = (e, t) => {
                    let n = (t.top + t.bottom) / 2;
                    return e.top <= n && e.bottom >= n
                },
                T = (e, t, n) => {
                    let l = d.toDOMRange(e, t).getBoundingClientRect(),
                        i = d.toDOMRange(e, n).getBoundingClientRect();
                    return g(l, i) && g(i, l)
                },
                v = (e, t, n, l) => {
                    let i = {
                            anchor: t,
                            focus: t
                        },
                        r = 0,
                        o = n.length,
                        s = Math.floor((r + o) / 2);
                    for (; s !== r;) {
                        let t = {
                            anchor: n[s],
                            focus: n[s]
                        };
                        if (T(e, t, i) ? l ? o = s : r = s : l ? r = s : o = s, s = Math.floor((r + o) / 2), !l && s === n.length - 2 && o === n.length - 1) {
                            let t = n[n.length - 1];
                            T(e, {
                                anchor: t,
                                focus: t
                            }, i) && (s = o)
                        }
                    }
                    return n[s]
                },
                C = {
                    getLineStart(e, t, n) {
                        let l;
                        let i = d.getParentElement(e, t);
                        if (null == i) return null;
                        let r = d.previous(e, {
                            at: t,
                            match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                        });
                        null != r && (l = d.after(e, r[1])), null == l && (l = d.start(e, i[1]));
                        let o = {
                                anchor: l,
                                focus: t
                            },
                            s = Array.from(d.positions(e, {
                                at: o
                            })),
                            a = v(e, t, s, !0);
                        if (n && h.equals(t, a) && !h.isAtEnd(t, i)) {
                            let n = d.after(e, t);
                            if (null == n) return a;
                            a = v(e, n, s, !0)
                        }
                        return a
                    },
                    getLineEnd(e, t, n) {
                        let l;
                        let i = d.getParentElement(e, t);
                        if (null == i) return null;
                        let r = d.next(e, {
                            at: t,
                            match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                        });
                        null != r && (l = d.before(e, r[1])), null == l && (l = d.end(e, i[1]));
                        let o = {
                                anchor: t,
                                focus: l
                            },
                            s = Array.from(d.positions(e, {
                                at: o
                            })),
                            a = v(e, t, s, !1);
                        if (n && h.equals(t, a) && !h.isAtEnd(t, i)) {
                            let n = d.after(e, t);
                            if (null == n) return a;
                            a = v(e, n, s, !1)
                        }
                        return a
                    },
                    getLineActionRange(e, t) {
                        let n = E.toPoint(e.selection);
                        if (null == n) return null;
                        if (t) {
                            let t = C.getLineStart(e, n, !1);
                            return null == t ? null : {
                                anchor: t,
                                focus: n
                            }
                        } {
                            let t = C.getLineEnd(e, n, !0);
                            return null == t ? null : {
                                anchor: n,
                                focus: t
                            }
                        }
                    }
                }
        },
        153213: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("86678"),
                s = n("538282"),
                a = n("882641"),
                u = n("848471"),
                d = n("958706"),
                c = n("223797");

            function f(e) {
                var t;
                let {
                    editorRef: n,
                    options: f,
                    channel: p
                } = e, m = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), h = i.useCallback((e, t) => {
                    let l = n.current;
                    null != e && null != l && l.insertEmoji(e, t, !1), t && (0, s.closeExpressionPicker)()
                }, [n]);
                return null == m ? null : (0, l.jsxs)("div", {
                    id: "slate-toolbar",
                    className: c.staticToolbar,
                    children: [(0, l.jsx)("div", {
                        className: c.staticButtons,
                        children: (0, l.jsx)(u.ToolbarButtons, {
                            editorRef: n,
                            options: f,
                            iconClassName: c.staticIcon,
                            dividerClassName: c.staticDivider
                        })
                    }), (0, l.jsx)(r.Popout, {
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, l.jsx)(o.default, {
                                persistSearch: !0,
                                channel: p,
                                closePopout: t,
                                onSelectEmoji: (e, n) => {
                                    h(e, n), n && t()
                                },
                                pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT
                            })
                        },
                        position: "bottom",
                        animation: r.Popout.Animation.NONE,
                        align: "left",
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.jsx)(a.default, {
                                ...e,
                                active: n,
                                className: c.emojiButton,
                                tabIndex: 0
                            })
                        }
                    })]
                })
            }
        },
        368555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("135038"),
                i = n("385887");

            function r(e, t) {
                if (i.EditorUtils.areStylesDisabled(e)) return [];
                let [n, r] = t, o = [];
                if (!i.NodeUtils.isType(n, "line") || null == n.codeBlockState) return o;
                let {
                    hljsTypes: s,
                    isStyledCodeBlockLine: a
                } = n.codeBlockState;
                if (null == s || 0 === s.length || !a) return [];
                for (let t of s) {
                    let s = n.children.map(e => i.TextUtils.isText(e) ? e.text : null);
                    o.push({
                        hljsTypes: t.types,
                        anchor: (0, l.getPointFromPosition)(e, r, s, t.start),
                        focus: (0, l.getPointFromPosition)(e, r, s, t.end)
                    })
                }
                return o
            }
        },
        755604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("385887");

            function i(e, t) {
                if (l.EditorUtils.areStylesDisabled(e)) return [];
                let [n, i] = t, r = [];
                if (!l.TextUtils.isText(n)) return r;
                let [o] = l.EditorUtils.node(e, l.PathUtils.parent(i));
                return l.NodeUtils.isType(o, "applicationCommand") ? (n === o.children[0] && r.push({
                    anchor: {
                        path: i,
                        offset: 0
                    },
                    focus: {
                        path: i,
                        offset: 0 + o.command.displayName.length + 1
                    },
                    commandName: !0
                }), r) : r
            }
        },
        30550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("135038"),
                i = n("385887");
            let r = new Set(["line", "blockQuote"]),
                o = [];

            function s(e, t, n) {
                if (i.EditorUtils.areStylesDisabled(e)) return [];
                let [s, a] = t;
                if (1 !== a.length || !i.NodeUtils.isInTypes(s, r)) return o;
                let {
                    entries: u,
                    serializedChildren: d
                } = i.ElementUtils.markdown(s, n, !0), c = [];
                for (let t = 0; t < u.length; t++) {
                    let n = u[t];
                    if (n.attributes.length > 0 && n.text.length > 0) {
                        let r = u[t - 1],
                            o = u[t + 1],
                            s = (0, l.getPointFromPosition)(e, a, d, n.start),
                            f = (0, l.getPointFromPosition)(e, a, d, n.start + n.text.length),
                            p = {
                                anchor: s,
                                focus: f
                            },
                            m = i.EditorUtils.nodes(e, {
                                at: p,
                                mode: "lowest",
                                voids: !1
                            }),
                            h = {};
                        for (let e of n.attributes)
                            if (h[e] = !0, "syntaxBefore" === e && null != o)
                                for (let e of o.attributes) h["before_".concat(e)] = !0;
                            else if ("syntaxAfter" === e && null != r)
                            for (let e of r.attributes) h["after_".concat(e)] = !0;
                        for (let [t, n] of m) {
                            if (i.EditorUtils.isVoid(e, t)) continue;
                            let l = {
                                anchor: i.EditorUtils.start(e, n),
                                focus: i.EditorUtils.end(e, n)
                            };
                            i.PointUtils.isBefore(l.anchor, p.anchor) && (l.anchor = p.anchor), i.PointUtils.isAfter(l.focus, p.focus) && (l.focus = p.focus), c.push({
                                ...h,
                                ...l
                            })
                        }
                    }
                }
                return c
            }
        },
        664610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("884691"),
                i = n("44170"),
                r = n("987295"),
                o = n("244201"),
                s = n("988721"),
                a = n("166004"),
                u = n("383018"),
                d = n("845579"),
                c = n("149022"),
                f = n("169694"),
                p = n("646220"),
                m = n("467123"),
                h = n("506038"),
                E = n("663190"),
                S = n("93640"),
                g = n("100576"),
                T = n("665613");
            n("473752");
            var v = n("541926"),
                C = n("926970"),
                y = n("755107"),
                I = n("518542"),
                N = n("269149"),
                _ = n("566819");

            function x(e) {
                let t = l.useContext(o.default),
                    n = d.UseRichChatInput.useSetting(),
                    [x] = l.useState(() => {
                        let l = (0, r.createEditor)();
                        return l.children = (0, c.toRichValue)(""), l.selection = {
                                anchor: _.FIRST_TEXT_POINT,
                                focus: _.FIRST_TEXT_POINT
                            },
                            function(e) {
                                var t, n, l;
                                let {
                                    editor: r,
                                    chatInputType: o,
                                    channel: s,
                                    canUseCommands: a,
                                    canOnlyUseTextCommands: u,
                                    windowContext: d,
                                    previewMarkdown: c,
                                    forTests: _,
                                    onChangeStart: x,
                                    onChangeEnd: A,
                                    updateState: O
                                } = e, R = r, {
                                    onChange: b
                                } = R;
                                R.chatInputType = o, R.windowContext = d, R.previewMarkdown = c, R.composition = null, R.events = new i.EventEmitter, R.isMac = "MacIntel" === navigator.platform, R.onChange = () => {
                                    R.events.emit("onChange"), b()
                                }, R = (0, C.withReact)(R, !0 === _), R = (0, v.default)(R), R = (0, T.default)(R), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (R = (0, f.default)(R, s, !0 === a, !0 === u)), R = (0, g.default)(R, s.guild_id, s.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (R = (0, p.default)(R)), !(null === (l = o.markdown) || void 0 === l ? void 0 : l.disableCodeBlocks) && (R = (0, m.default)(R)), _ && (R = (0, I.default)(R)), R = (0, S.default)(R), R = (0, h.default)(R), R = (0, y.default)(R), R = (0, N.default)(R, x, A), R = (0, E.default)(R, e => {
                                    let {
                                        newValue: t,
                                        newSelection: n
                                    } = e;
                                    return O(R, "undo", {
                                        value: t,
                                        selection: n
                                    })
                                })
                            }({
                                ...e,
                                editor: l,
                                windowContext: t,
                                previewMarkdown: n
                            }), l
                    });
                return l.useEffect(() => {
                    let e = () => x.onChange();
                    return u.default.addChangeListener(e), a.default.addChangeListener(e), s.default.addChangeListener(e), () => {
                        u.default.removeChangeListener(e), a.default.removeChangeListener(e), s.default.removeChangeListener(e)
                    }
                }, [x]), l.useEffect(() => {
                    x.previewMarkdown !== n && (x.previewMarkdown = n, x.onChange())
                }, [x, n]), x
            }
        },
        688893: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("884691"),
                i = n("278419"),
                r = n("798609"),
                o = n("383018"),
                s = n("640830"),
                a = n("83800"),
                u = n("939563"),
                d = n("385887"),
                c = n("467123"),
                f = n("100576"),
                p = n("566819");
            let m = (e, t, n) => ({
                getSlateEditor: () => e,
                submit(e) {
                    e.preventDefault(), n()
                },
                focus() {
                    d.EditorUtils.focus(e)
                },
                blur() {
                    i.ReactEditor.blur(e)
                },
                getCurrentWord() {
                    let t = e.selection;
                    if (null == t || !d.SelectionUtils.isValid(e, t) || d.RangeUtils.isExpanded(t) || (0, c.hasOpenPlainTextCodeBlock)(e)) return {
                        word: null,
                        isAtStart: !1
                    };
                    let [n, l] = d.EditorUtils.node(e, d.PathUtils.parent(t.anchor.path)), [i, r] = d.EditorUtils.node(e, t.anchor.path), o = t.anchor.offset;
                    if (!d.PathUtils.hasPrevious(r) && d.TextUtils.isText(i)) {
                        let e = i.text.substring(0, o);
                        if (d.NodeUtils.isType(n, "applicationCommand") && o < n.command.displayName.length + 2) return {
                            word: e,
                            isAtStart: !0
                        }
                    }
                    let s = "",
                        a = !1;
                    for (;;) {
                        if (--o < 0) {
                            if (!d.PathUtils.hasPrevious(r)) {
                                a = !0;
                                break
                            } [i, r] = d.EditorUtils.node(e, d.PathUtils.previous(r))
                        }
                        if (!d.TextUtils.isText(i)) break;
                        let t = i.text[o];
                        if (p.WHITESPACE_RE.test(t)) break;
                        s = t + s
                    }
                    return {
                        word: s,
                        isAtStart: a && d.PathUtils.isFirstEditorBlock(l)
                    }
                },
                getFirstText() {
                    var t, n;
                    return null !== (n = null === (t = d.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
                },
                getCurrentCommandOption() {
                    let t = s.getCurrentCommandOption(e);
                    return null == t ? null : t[0].optionName
                },
                getCurrentCommandOptionValue() {
                    var n;
                    let l = s.getCurrentCommandOption(e);
                    if (null == l) return [];
                    let i = o.default.getActiveCommand(t.id),
                        r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === l[0].optionName);
                    return null == r ? [] : s.optionToValues(e, r, l[0])
                },
                getCommandOptionValues() {
                    let n = o.default.getActiveCommand(t.id);
                    return null == n ? {} : s.getOptionValues(e, n)
                },
                insertText(n) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        let r = s.getCurrentCommandOption(e),
                            o = null != r && h(t, r[0]);
                        if (null != l && o && (u.SlateTransforms.removeInlineChildren(e, r), i = !1), E(e, n, l, i), null != l && o) {
                            let n = s.getCommandBlock(e);
                            if (r = d.ElementUtils.updateElement(e, r), null != n) {
                                let l = d.ElementUtils.markdown(n[0], t.id);
                                (0, f.convertRawToInlineVoids)(e, r, t.id, l) && (r = d.ElementUtils.updateElement(e, r))
                            }
                            s.validateOption(e, t.guild_id, t.id, d.ElementUtils.updateElement(e, r), !1), u.SlateTransforms.selectNextCommandOption(e)
                        }
                    })
                },
                insertAutocomplete(n) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        let r = s.getCurrentCommandOption(e),
                            o = null != r && h(t, r[0]);
                        if (o) u.SlateTransforms.removeInlineChildren(e, r), i = !1;
                        else {
                            let {
                                word: t
                            } = this.getCurrentWord();
                            null != t && t.length > 0 && u.SlateTransforms.delete(e, {
                                distance: t.length,
                                unit: "character",
                                reverse: !0
                            })
                        }
                        E(e, n, l, i), o && u.SlateTransforms.selectNextCommandOption(e)
                    })
                },
                insertEmoji(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        var l, i;
                        let r = t.animated ? "a" : "",
                            o = null !== (i = null !== (l = t.originalName) && void 0 !== l ? l : t.name) && void 0 !== i ? i : "",
                            s = ":".concat(t.name, ":"),
                            a = null != t.id ? "<".concat(r, ":").concat(o.replace(/:/g, ""), ":").concat(t.id, ">") : null;
                        E(e, s, a, n)
                    })
                }
            });

            function h(e, t) {
                var n;
                let l = o.default.getActiveCommand(e.id),
                    i = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
                return null != i && (i.type !== r.ApplicationCommandOptionType.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete))
            }

            function E(e, t, n, l) {
                let i = d.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
                a.HistoryUtils.withSingleEntry(e, () => {
                    u.SlateTransforms.insertText(e, l ? i + " " : i)
                })
            }

            function S(e, t, n, i) {
                l.useImperativeHandle(e, () => m(t, n, i), [t, n, i])
            }
        },
        684607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                i = n("383018"),
                r = n("939563"),
                o = n("467123"),
                s = n("93640"),
                a = n("49111");

            function u(e) {
                let {
                    editor: t,
                    channel: n,
                    disableEnterToSubmit: u,
                    onKeyDown: d,
                    onKeyUp: c,
                    onTab: f,
                    onEnter: p,
                    allowNewLines: m,
                    submit: h,
                    hideAutocomplete: E,
                    moveSelection: S
                } = e, g = l.useCallback(e => {
                    var l;
                    switch (e.which) {
                        case a.KeyboardKeys.ARROW_UP:
                            if (S(-1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.ARROW_DOWN:
                            if (S(1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.P:
                            if ((0, s.checkModifiers)(e, {
                                    ctrl: !0
                                }) && S(-1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.N:
                            if ((0, s.checkModifiers)(e, {
                                    ctrl: !0
                                }) && S(1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.ESCAPE:
                            null == E || E();
                            break;
                        case a.KeyboardKeys.TAB:
                            if ((0, s.checkModifiers)(e, {}) && (null == f ? void 0 : f())) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                            let c = i.default.getActiveCommand(n.id);
                            if (null != c) {
                                e.preventDefault(), e.stopPropagation(), e.shiftKey ? r.SlateTransforms.selectPreviousCommandOption(t) : r.SlateTransforms.selectNextCommandOption(t);
                                return
                            }
                            break;
                        case a.KeyboardKeys.ENTER:
                            if ((0, s.checkModifiers)(e, {}) && (null == p ? void 0 : p(e))) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                    }
                    if ((null === (l = t.onKeyDown) || void 0 === l ? void 0 : l.call(t, e)) === !0) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    e.which === a.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, o.hasOpenPlainTextCodeBlock)(t) || !m) && (e.preventDefault(), e.stopPropagation(), h()), null == d || d(e)
                }, [m, n.id, u, t, E, S, p, d, f, h]), T = l.useCallback(e => {
                    null == c || c(e)
                }, [c]);
                return {
                    handleKeyDown: g,
                    handleKeyUp: T
                }
            }
        },
        803322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                i = n("385887");

            function r(e, t, n) {
                let r = l.useCallback(e => {
                        if (t) return !0;
                        if (!0 === e.defaultPrevented) return !1;
                        let l = n(e);
                        return l && (e.preventDefault(), e.stopPropagation()), l
                    }, [t, n]),
                    o = l.useCallback(t => {
                        let {
                            event: n
                        } = t, l = r(n);
                        !l && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.EditorUtils.focus(e)))
                    }, [e, r]);
                return {
                    handlePaste: r,
                    handleGlobalPaste: o
                }
            }
        },
        127875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("278419"),
                r = n("385887");

            function o(e, t, n) {
                l.useEffect(() => {
                    let l = i.ReactEditor.findDocumentOrShadowRoot(e),
                        o = l.defaultView;
                    if ((null == o ? void 0 : o.ResizeObserver) == null) return;
                    let s = r.EditorUtils.toDOMNode(e, e),
                        a = s.offsetHeight,
                        u = new o.ResizeObserver(() => {
                            let l = r.EditorUtils.toDOMNode(e, e).offsetHeight;
                            if (a !== l) null != t.current && (t.current.style.height = "".concat(l, "px")), a = l, null == n || n(l)
                        });
                    return u.observe(s), () => u.disconnect()
                }, [t, e, n])
            }
        },
        169694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                },
                unsetCommand: function() {
                    return A
                }
            });
            var l = n("798609"),
                i = n("507217"),
                r = n("118200"),
                o = n("240249"),
                s = n("383018"),
                a = n("524768"),
                u = n("389153"),
                d = n("343952"),
                c = n("355263"),
                f = n("511104"),
                p = n("42203"),
                m = n("305961"),
                h = n("697218"),
                E = n("640830"),
                S = n("83800"),
                g = n("970153"),
                T = n("939563"),
                v = n("385887"),
                C = n("566819"),
                y = n("406291");
            let I = new Set(["applicationCommandOption"]),
                N = new Set([l.ApplicationCommandOptionType.ATTACHMENT]),
                _ = new Set(["line", "applicationCommand"]);

            function x(e, t, n, d) {
                let {
                    insertData: p,
                    isInline: m,
                    isVoid: h,
                    onChange: x,
                    deleteBackward: P,
                    deleteForward: L,
                    deleteFragment: U
                } = e;
                e.insertData = n => {
                    if (null != t && v.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                        let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                            {
                                commandKey: d,
                                interactionOptions: c
                            } = (0, u.extractInteractionDataProps)(e),
                            {
                                application: f,
                                command: p
                            } = o.getCachedCommand(t, d);
                        if (null != p) {
                            var l, s;
                            let e = null != f ? {
                                type: a.ApplicationCommandSectionType.APPLICATION,
                                id: f.id,
                                icon: f.icon,
                                name: null !== (s = null === (l = f.bot) || void 0 === l ? void 0 : l.username) && void 0 !== s ? s : f.name,
                                application: f
                            } : null;
                            return i.setActiveCommand({
                                channelId: t.id,
                                command: p,
                                section: e,
                                location: a.ApplicationCommandTriggerLocations.PASTE,
                                initialValues: (0, r.getInitialValuesFromInteractionOptions)(p, null != c ? c : [])
                            }), null
                        }
                    }
                    return p(n)
                }, e.isInline = e => !!I.has(e.type) || m(e), e.isVoid = e => !!("applicationCommandOption" === e.type && N.has(e.optionType)) || h(e), e.deleteBackward = t => {
                    k(e, () => P(t))
                }, e.deleteForward = t => {
                    k(e, () => L(t))
                }, e.deleteFragment = t => {
                    k(e, () => U(t))
                };
                let D = null,
                    j = null,
                    w = null,
                    B = null,
                    K = null;
                return e.onChange = () => {
                    if (null != t) {
                        var r;
                        let u = s.default.getState(t.id),
                            p = v.EditorUtils.getFirstText(e),
                            m = (0, c.getCommandQuery)(t, null !== (r = null == p ? void 0 : p.text) && void 0 !== r ? r : ""),
                            h = o.getChangeKeys(t, l.ApplicationCommandType.CHAT, m.text);
                        if (v.EditorUtils.richValue(e) !== D || !v.SelectionUtils.equals(e.selection, j) || u.activeCommand !== w || null == K || h.some((e, t) => K[t] !== e)) {
                            let r = S.HistoryUtils.withMergedEntry(e, () => {
                                var r, s;
                                return function(e) {
                                    var t;
                                    let {
                                        editor: n,
                                        storeCommandState: r,
                                        channel: s,
                                        canUseCommands: u,
                                        canOnlyUseTextCommands: d,
                                        commandChanged: p,
                                        previousOptionValues: m
                                    } = e, {
                                        command: h,
                                        commandText: S
                                    } = b(n), I = r.activeCommand;
                                    if (!u || d && (null == I ? void 0 : I.inputType) !== a.ApplicationCommandInputType.BUILT_IN_TEXT && (null == I ? void 0 : I.inputType) !== a.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != h && A(n, s.id, I, !0), null;
                                    if (null != h) {
                                        if (v.EditorUtils.isEditorEmpty(n) || null == I) return A(n, s.id, I, !1), null;
                                        let e = "".concat(y.COMMAND_SENTINEL).concat(h.displayName);
                                        if (null == S || !S.startsWith(e) || 0 === E.getOptionNames(n).length && (S.length < e.length + 1 || " " !== S[e.length])) return A(n, s.id, I, !0), null
                                    } else {
                                        if (null != I && p) {
                                            let e = function(e, t, n) {
                                                    var l, i, r, o, s;
                                                    let a;
                                                    let {
                                                        initialValues: u,
                                                        activeCommand: d
                                                    } = n;
                                                    if (null == d) return null;
                                                    let c = (null !== (r = null === (l = d.options) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0) > 0 ? E.findTextOptions(e, d) : null,
                                                        p = (0, g.toTextValue)(v.EditorUtils.richValue(e), {
                                                            mode: "raw",
                                                            range: {
                                                                anchor: v.EditorUtils.start(e, []),
                                                                focus: null !== (o = null == c ? void 0 : null === (i = c[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== o ? o : v.EditorUtils.end(e, [])
                                                            }
                                                        }),
                                                        m = "",
                                                        h = p.toLocaleLowerCase(),
                                                        S = f.PREFIX_COMMAND_REGEX.exec(h);
                                                    null != S && (h = y.COMMAND_SENTINEL + h.substring(S.length));
                                                    let I = "".concat(y.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                                                        _ = "".concat(y.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                                                    h.startsWith(I) && h.length > I.length ? m = p.substring(I.length).trim() : h.startsWith(_) && h.length > _.length && (m = p.substring(_.length).trim());
                                                    let x = [],
                                                        A = null,
                                                        R = null;
                                                    if (null != d.options) {
                                                        let e = new Set;
                                                        if (null != c)
                                                            for (let l of c) {
                                                                e.add(l.name);
                                                                let i = null !== (s = M(n, t, l.name)) && void 0 !== s ? s : l.text,
                                                                    r = {
                                                                        type: "applicationCommandOption",
                                                                        optionName: l.name,
                                                                        optionDisplayName: l.displayName,
                                                                        optionType: l.type,
                                                                        children: [{
                                                                            text: i
                                                                        }]
                                                                    };
                                                                x.push(r), 0 === l.text.length && null == A && (A = r)
                                                            }
                                                        for (let l of d.options)
                                                            if (!e.has(l.name) && (l.required || null != u[l.name])) {
                                                                let e, i;
                                                                m.length > 0 && !N.has(l.type) ? (e = m, m = "") : e = null != (i = M(n, t, l.name)) ? i : "";
                                                                let r = {
                                                                    type: "applicationCommandOption",
                                                                    optionName: l.name,
                                                                    optionDisplayName: l.displayName,
                                                                    optionType: l.type,
                                                                    children: [{
                                                                        text: e
                                                                    }]
                                                                };
                                                                x.push(r), 0 === e.length && null == A && (A = r), null == i && (R = r)
                                                            }
                                                    }
                                                    a = m.length > 0 ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ").concat(m.replace(/\r|\n/g, " ")) : 0 === x.length ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(y.COMMAND_SENTINEL).concat(d.displayName), x.unshift({
                                                        text: a
                                                    });
                                                    let b = {
                                                        type: "applicationCommand",
                                                        children: x,
                                                        command: {
                                                            id: d.id,
                                                            name: d.name,
                                                            displayName: d.displayName
                                                        }
                                                    };
                                                    v.EditorUtils.withoutNormalizing(e, () => {
                                                        for (let [, t] of(T.SlateTransforms.insertNodes(e, [b], {
                                                                at: C.FIRST_BLOCK_PATH
                                                            }), v.EditorUtils.blocks(e).reverse())) v.PathUtils.isAfter(t, C.FIRST_BLOCK_PATH) && T.SlateTransforms.removeNodes(e, {
                                                            at: t,
                                                            voids: !0
                                                        })
                                                    });
                                                    let k = null;
                                                    return null != A ? (T.SlateTransforms.selectCommandOption(e, A.optionName), k = A.optionName) : null != R ? (T.SlateTransforms.selectCommandOption(e, R.optionName, !1), k = R.optionName) : T.SlateTransforms.resetSelectionToEnd(e), null == R && O(e, d), k
                                                }(n, s, r),
                                                t = E.getOptionValues(n, I);
                                            return R({
                                                guildId: s.guild_id,
                                                channelId: s.id,
                                                command: I,
                                                activeOption: e,
                                                currentOptionValues: t,
                                                previousOptionValues: null,
                                                validateAll: !0,
                                                allowEmpty: !0
                                            }), {
                                                commandId: I.id,
                                                optionValues: t
                                            }
                                        }
                                        if (null != I && !p) return i.setActiveCommand({
                                            channelId: s.id,
                                            command: null,
                                            section: null
                                        }), null;
                                        let e = v.EditorUtils.richValue(n),
                                            t = e[0],
                                            u = t.children[0];
                                        if (_.has(t.type) && v.TextUtils.isText(u)) {
                                            let e = function(e, t) {
                                                if (!e.startsWith("/")) return null;
                                                let n = (0, c.getCommandQuery)(t, e.substring(1));
                                                if (!n.hasSpaceTerminator) return null;
                                                let {
                                                    commands: i,
                                                    sections: r
                                                } = o.getCachedResults(t, l.ApplicationCommandType.CHAT, n.text);
                                                if (0 === i.length) return null;
                                                let s = n.text.trim(),
                                                    u = s + " ",
                                                    d = i.filter(e => e.inputType !== a.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(u)));
                                                if (1 === d.length && d[0].displayName === s) {
                                                    let e = d[0],
                                                        t = r.find(t => {
                                                            var n;
                                                            return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                                                        });
                                                    return {
                                                        command: e,
                                                        section: t
                                                    }
                                                }
                                                return null
                                            }(u.text, s);
                                            if (null != e) return i.setActiveCommand({
                                                channelId: s.id,
                                                command: e.command,
                                                section: e.section
                                            }), null
                                        }
                                    }
                                    if (null != I && null != h) {
                                        ! function(e, t) {
                                            if (null == t.options || 0 === t.options.length) return !1;
                                            let n = E.findTextOptions(e, t);
                                            return 0 !== n.length && (v.EditorUtils.withoutNormalizing(e, () => {
                                                for (let t = n.length - 1; t >= 0; t--) {
                                                    let l = n[t];
                                                    T.SlateTransforms.textToInline(e, {
                                                        type: "applicationCommandOption",
                                                        optionName: l.name,
                                                        optionDisplayName: l.displayName,
                                                        optionType: l.type,
                                                        children: [{
                                                            text: l.text
                                                        }]
                                                    }, {
                                                        anchor: l.keyRange.anchor,
                                                        focus: l.valueRange.focus
                                                    })
                                                }
                                                let t = v.EditorUtils.getFirstText(e);
                                                if (null == t) return !1;
                                                let l = t.text.trim();
                                                t.text !== l && T.SlateTransforms.textToText(e, l, {
                                                    anchor: {
                                                        path: C.FIRST_TEXT_PATH,
                                                        offset: 0
                                                    },
                                                    focus: {
                                                        path: C.FIRST_TEXT_PATH,
                                                        offset: t.text.length
                                                    }
                                                })
                                            }), !0)
                                        }(n, I) && O(n, I);
                                        let e = E.getOptionValues(n, I),
                                            l = v.EditorUtils.above(n, {
                                                match: e => v.EditorUtils.isInline(n, e) && "applicationCommandOption" === e.type,
                                                mode: "lowest"
                                            }),
                                            i = null !== (t = null == l ? void 0 : l[0].optionName) && void 0 !== t ? t : null;
                                        return R({
                                            guildId: s.guild_id,
                                            channelId: s.id,
                                            command: I,
                                            activeOption: i,
                                            currentOptionValues: e,
                                            previousOptionValues: m,
                                            validateAll: !1,
                                            allowEmpty: !1
                                        }), {
                                            commandId: h.id,
                                            optionValues: e
                                        }
                                    }
                                    return null
                                }({
                                    editor: e,
                                    storeCommandState: u,
                                    channel: t,
                                    canUseCommands: n,
                                    canOnlyUseTextCommands: d,
                                    commandChanged: (null === (r = u.activeCommand) || void 0 === r ? void 0 : r.id) !== (null === (s = w) || void 0 === s ? void 0 : s.id),
                                    previousOptionValues: B
                                })
                            });
                            if (null != r) {
                                let t = S.HistoryUtils.currentEntry(e);
                                null != t && (t.commandId = r.commandId), B = r.optionValues
                            } else B = null;
                            D = v.EditorUtils.richValue(e), j = e.selection, w = u.activeCommand, K = h
                        }
                    }
                    x()
                }, e
            }

            function A(e, t, n, l) {
                let [r] = v.EditorUtils.blocks(e)[0], o = l ? (0, g.serializeDescendant)(r, {
                    mode: "plain"
                }).trimEnd() : "", s = o.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })), a = [s.length - 1];
                for (let [, t] of(T.SlateTransforms.insertNodes(e, s, {
                        at: C.FIRST_BLOCK_PATH
                    }), v.EditorUtils.blocks(e).reverse())) v.PathUtils.isAfter(t, a) && T.SlateTransforms.removeNodes(e, {
                    at: t,
                    voids: !0
                });
                null != n && i.setActiveCommand({
                    channelId: t,
                    command: null,
                    section: null
                })
            }

            function O(e, t) {
                if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || N.has(t.options[0].type) || E.getOptionNames(e).length > 0) return !1;
                let n = E.getCommandBlock(e);
                if (null == n) return !1;
                let l = v.EditorUtils.getFirstText(e);
                if (null == l) return !1;
                let i = t.options[0],
                    r = {
                        path: C.FIRST_TEXT_PATH,
                        offset: t.displayName.length + 2
                    },
                    o = {
                        path: C.FIRST_TEXT_PATH,
                        offset: l.text.length
                    };
                return !(!l.text.startsWith("".concat(y.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || v.PointUtils.equals(r, o)) && (T.SlateTransforms.textToInline(e, {
                    type: "applicationCommandOption",
                    optionName: i.name,
                    optionDisplayName: i.displayName,
                    optionType: i.type,
                    children: [{
                        text: l.text.substring(t.displayName.length + 2)
                    }]
                }, {
                    anchor: r,
                    focus: o
                }), !0)
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    command: l,
                    activeOption: r,
                    currentOptionValues: o,
                    previousOptionValues: a,
                    validateAll: u,
                    allowEmpty: c
                } = e;
                if (null == l.options) return !1;
                let f = u ? null : s.default.getActiveOptionName(n),
                    p = {},
                    m = s.default.getOptionStates(n),
                    h = !1;
                for (let e of l.options) {
                    var E, S, g;
                    let l = m[e.name],
                        i = u || e.name === f && f !== r || (null == l ? void 0 : null === (E = l.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == a ? void 0 : a[e.name]),
                        s = {
                            hasValue: null != o && e.name in o,
                            isActive: e.name === r,
                            lastValidationResult: i ? (0, d.validateOptionContent)({
                                option: e,
                                content: null !== (g = null == o ? void 0 : o[e.name]) && void 0 !== g ? g : null,
                                guildId: t,
                                channelId: n,
                                allowEmptyValues: c
                            }) : null == l ? void 0 : l.lastValidationResult
                        };
                    (null == l || l.hasValue !== s.hasValue || l.isActive !== s.isActive || i && (null === (S = l.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (p[e.name] = s, h = !0)
                }
                h && i.updateOptionStates(n, p)
            }

            function b(e) {
                let t = E.getCommandBlock(e);
                if (null == t) return {
                    command: null,
                    commandText: null
                };
                let [n] = t, l = n.children[0];
                return v.TextUtils.isText(l) ? {
                    command: n.command,
                    commandText: l.text
                } : {
                    command: n.command,
                    commandText: null
                }
            }

            function k(e, t) {
                let n = E.getOptionNames(e)[0];
                t();
                let l = v.RangeUtils.toPoint(e.selection);
                if (null == l || n === E.getOptionNames(e)[0]) return;
                let {
                    command: i,
                    commandText: r
                } = b(e);
                !(null == i || null == r || r.endsWith(" ")) && v.PointUtils.equals(l, {
                    path: C.FIRST_TEXT_PATH,
                    offset: i.displayName.length + 1
                }) && T.SlateTransforms.insertText(e, " ")
            }

            function M(e, t, n) {
                var i, r, o, s, a;
                let u = null === (r = e.activeCommand) || void 0 === r ? void 0 : null === (i = r.options) || void 0 === i ? void 0 : i.find(e => e.name === n),
                    d = e.initialValues[n];
                if (null == u || null == d) return null;
                if (null != u.choices) return null === (a = u.choices.find(e => e.value === d.value)) || void 0 === a ? void 0 : a.displayName;
                let c = null === (o = d.value) || void 0 === o ? void 0 : o.toString();
                return u.type === l.ApplicationCommandOptionType.CHANNEL || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getChannel(c) ? "<#".concat(c, ">	") : u.type === l.ApplicationCommandOptionType.USER || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != h.default.getUser(c) ? "<@".concat(c, ">") : u.type === l.ApplicationCommandOptionType.ROLE || u.type === l.ApplicationCommandOptionType.MENTIONABLE && (null === (s = m.default.getGuild(t.guild_id)) || void 0 === s ? void 0 : s.getRole(null != c ? c : "")) != null ? "<@&".concat(c, ">") : c
            }
        },
        646220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("83800"),
                i = n("939563"),
                r = n("385887"),
                o = n("467123");
            let s = new Set(["line", "blockQuote"]);

            function a(e) {
                let {
                    deleteBackward: t,
                    deleteFragment: n,
                    insertBreak: a,
                    onChange: u
                } = e;
                e.deleteBackward = n => {
                    let l = r.EditorUtils.getCurrentBlock(e);
                    if ((null == l ? void 0 : l[0].type) === "blockQuote") {
                        let t = r.RangeUtils.toPoint(e.selection);
                        if (null != t && r.PathUtils.isFirstChild(l[1], t.path) && 0 === t.offset) {
                            i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: l[1]
                            });
                            return
                        }
                    }
                    t(n)
                }, e.deleteFragment = t => {
                    if (null != e.selection) {
                        let [o, s] = r.RangeUtils.edges(e.selection), a = [o.path[0]], u = r.EditorUtils.node(e, a), d = [s.path[0]], c = r.PathUtils.equals(a, d) ? null : r.EditorUtils.node(e, d);
                        l.HistoryUtils.withSingleEntry(e, () => {
                            (null == u ? void 0 : u[0].type) === "blockQuote" && r.PointUtils.isAtStart(o, u) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: a
                            }), (null == c ? void 0 : c[0].type) === "blockQuote" && r.PointUtils.isAtEnd(s, c) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), n(t)
                        });
                        return
                    }
                    n(t)
                }, e.insertBreak = () => {
                    let t = r.EditorUtils.getCurrentBlock(e);
                    if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                        let n = r.RangeUtils.toPoint(e.selection);
                        if (null == n) return;
                        ! function(e, t, n) {
                            if (!r.EditorUtils.isEmpty(e, t[0])) return !1;
                            let l = r.EditorUtils.previous(e, {
                                at: t[1]
                            });
                            return !!(null != l && r.NodeUtils.isType(l[0], "blockQuote") && r.EditorUtils.isEmpty(e, l[0]) && r.PointUtils.isAtStart(n, t)) && (i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: t[1]
                            }), i.SlateTransforms.removeNodes(e, {
                                at: l[1]
                            }), !0)
                        }(e, t, n) && i.SlateTransforms.splitNodes(e, {
                            at: n,
                            always: !0
                        });
                        return
                    }
                    a()
                };
                let d = null,
                    c = !0;
                return e.onChange = () => {
                    let t = r.EditorUtils.richValue(e);
                    (t !== d || e.previewMarkdown !== c) && (l.HistoryUtils.withMergedEntry(e, () => {
                        r.EditorUtils.withoutNormalizing(e, () => (function(e) {
                            let t = !1;
                            for (let a of r.EditorUtils.blocks(e)) {
                                let [u, d] = a;
                                if (!s.has(u.type)) continue;
                                let c = {
                                    path: r.PathUtils.child(d, 0),
                                    offset: 0
                                };
                                if ((0, o.isPointInCodeBlock)(e, c)) {
                                    "blockQuote" === u.type && (i.SlateTransforms.setNodes(e, {
                                        type: "line"
                                    }, {
                                        at: d
                                    }), i.SlateTransforms.insertText(e, "> ", {
                                        at: c
                                    }));
                                    continue
                                }
                                if ("blockQuote" === u.type || r.EditorUtils.areStylesDisabled(e)) continue;
                                let f = u.children[0];
                                if (!r.TextUtils.isText(f)) continue;
                                let p = f.text.match(/^\s*>>> /),
                                    m = f.text.match(/^\s*> /);
                                if ((null != m || null != p || t) && (i.SlateTransforms.setNodes(e, {
                                        type: "blockQuote"
                                    }, {
                                        at: d
                                    }), !t)) {
                                    var n, l;
                                    let o = null !== (l = null !== (n = null == m ? void 0 : m[0].length) && void 0 !== n ? n : null == p ? void 0 : p[0].length) && void 0 !== l ? l : 0,
                                        s = r.PathUtils.child(d, 0);
                                    i.SlateTransforms.delete(e, {
                                        at: {
                                            anchor: {
                                                path: s,
                                                offset: 0
                                            },
                                            focus: {
                                                path: s,
                                                offset: o
                                            }
                                        }
                                    }), t = null != p
                                }
                            }
                        })(e))
                    }), d = t, c = e.previewMarkdown), u()
                }, e
            }
        },
        467123: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                isPointInCodeBlock: function() {
                    return v
                },
                hasOpenPlainTextCodeBlock: function() {
                    return C
                }
            });
            var l = n("436443"),
                i = n("693566"),
                r = n.n(i),
                o = n("86256"),
                s = n("83800"),
                a = n("970153"),
                u = n("939563"),
                d = n("385887"),
                c = n("566819");
            let f = new Set(["line"]),
                p = l.default.listLanguages(),
                m = {};
            for (let e of p) {
                e = e.toLowerCase();
                let t = l.default.getLanguage(e);
                if (null == t) continue;
                let n = t.aliases;
                if (m[e] = e, null != n)
                    for (let t of n) m[t.toLowerCase()] = e
            }
            let h = /^[a-z0-9_+\-.#]+$/,
                E = /^[a-z0-9_+\-.#]+$/i;
            for (let e in m)
                if (null == e.match(h)) throw Error("Language name does not match regex: ".concat(e));

            function S(e) {
                let {
                    onChange: t
                } = e, n = null;
                return e.onChange = () => {
                    d.EditorUtils.richValue(e) !== n && (s.HistoryUtils.withMergedEntry(e, () => {
                        d.EditorUtils.withoutNormalizing(e, () => (function(e) {
                            let t = function(e) {
                                let t = [],
                                    n = null;
                                for (let l of d.EditorUtils.blocks(e)) {
                                    let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                        r = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                        o = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
                                    n = function(e, t, n, l, i) {
                                        var r;
                                        let o = function(e) {
                                                let t;
                                                let [n, l] = e;
                                                if (!f.has(n.type)) return [];
                                                let i = [],
                                                    r = /\\|```/g;
                                                for (let e = 0; e < n.children.length; e++) {
                                                    let o = n.children[e];
                                                    if (d.TextUtils.isText(o))
                                                        for (r.lastIndex = 0; null != (t = r.exec(o.text));) {
                                                            if ("\\" === t[0]) {
                                                                r.lastIndex += 1;
                                                                continue
                                                            }
                                                            i.push({
                                                                path: d.PathUtils.child(l, e),
                                                                offset: t.index
                                                            })
                                                        }
                                                }
                                                return i
                                            }(t),
                                            s = o[0],
                                            a = o[o.length - 1],
                                            u = null;
                                        if (null != a) {
                                            let [t] = d.EditorUtils.node(e, a.path);
                                            u = t.text.substring(a.offset + 3)
                                        }
                                        let c = n && null != s,
                                            p = n && 0 === o.length,
                                            h = l && 0 === o.length,
                                            S = c ? o.slice(1) : o,
                                            g = S.length % 2 == 1,
                                            T = g && (null == u || "" === u || null != u.match(E)),
                                            v = T && null != u && null !== (r = m[u.toLowerCase()]) && void 0 !== r ? r : null;
                                        return {
                                            blockEntry: t,
                                            wasInCodeBlock: n,
                                            isInCodeBlock: p,
                                            isStyledCodeBlockLine: h,
                                            lang: g || c ? v : i,
                                            hljsTypes: null,
                                            closesCodeBlock: c,
                                            opensCodeBlock: g,
                                            opensCodeBlockOnOwnLine: T
                                        }
                                    }(e, l, i, r, o), t.push(n)
                                }
                                return function(e) {
                                    let t = [],
                                        n = !1;
                                    for (let i of e) {
                                        let r = i === e[e.length - 1];
                                        if ((i.closesCodeBlock || r) && (n && r && !i.closesCodeBlock && t.push(i), n = !1, t.length > 0)) {
                                            let e = t.map(e => (0, a.serializeDescendant)(e.blockEntry[0])).join("\n"),
                                                n = t[0],
                                                i = n.lang;
                                            if (null != i && null != l.default.getLanguage(i)) {
                                                let n = function(e, t) {
                                                    let n = "".concat(e, "-").concat(t),
                                                        l = T.get(n);
                                                    if (null != l) return l;
                                                    let i = o.default.highlight(t, e, !1);
                                                    if (null == i || i.illegal) return null;
                                                    let r = i.value.split("\n");
                                                    return T.set(n, r), r
                                                }(e, i);
                                                if (null != n && n.length === t.length) {
                                                    let e = [];
                                                    for (let l = 0; l < t.length; l++) {
                                                        let i;
                                                        let r = n[l].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                                                            o = [],
                                                            s = 0,
                                                            a = 0;
                                                        for (; null != (i = g.exec(r));) {
                                                            let t = i.index + i[0].length,
                                                                n = i.index - a;
                                                            i.index > a && (e.length > 0 && o.push({
                                                                types: [...e],
                                                                start: s,
                                                                end: s + n
                                                            }), s += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), a = t
                                                        }
                                                        if (e.length > 0) {
                                                            let t = r.length - a;
                                                            o.push({
                                                                types: [...e],
                                                                start: s,
                                                                end: s + t
                                                            })
                                                        }
                                                        t[l].hljsTypes = o
                                                    }
                                                } else
                                                    for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                                            }
                                            t = []
                                        }
                                        n && t.push(i), i.opensCodeBlock && (n = !0)
                                    }
                                }(t), t
                            }(e);
                            (function(e, t) {
                                for (let n of t) {
                                    let [t, l] = n.blockEntry, i = function(e) {
                                        return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                            lang: e.lang,
                                            wasInCodeBlock: e.wasInCodeBlock,
                                            isInCodeBlock: e.isInCodeBlock,
                                            isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                            hljsTypes: e.hljsTypes
                                        } : null
                                    }(n);
                                    (null == t ? void 0 : t.codeBlockState) != i && u.SlateTransforms.setNodes(e, {
                                        codeBlockState: i
                                    }, {
                                        at: l
                                    })
                                }
                            })(e, t)
                        })(e))
                    }), n = d.EditorUtils.richValue(e)), t()
                }, e
            }
            let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
                T = new r({
                    max: 1 / 0,
                    maxAge: 6e4,
                    updateAgeOnGet: !0
                });

            function v(e, t) {
                let n = 0;
                for (let i of d.EditorUtils.nodes(e, {
                        at: {
                            anchor: {
                                path: c.FIRST_TEXT_PATH,
                                offset: 0
                            },
                            focus: t
                        },
                        mode: "lowest",
                        match: e => d.TextUtils.isText(e)
                    })) {
                    var l;
                    let e = i[0].text;
                    d.PathUtils.equals(i[1], t.path) && (e = e.substring(0, t.offset));
                    let r = e.match(/```/g);
                    n += null !== (l = null == r ? void 0 : r.length) && void 0 !== l ? l : 0
                }
                return n % 2 != 0
            }

            function C(e) {
                if (null == e.selection) return !1;
                let t = d.RangeUtils.start(e.selection);
                return v(e, t)
            }
        },
        506038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("83800"),
                i = n("939563"),
                r = n("385887");
            let o = ["applicationCommand"];

            function s(e) {
                let {
                    insertBreak: t,
                    insertText: n
                } = e;
                return e.insertBreak = () => {
                    a(e) && t()
                }, e.insertSoftBreak = () => {
                    e.insertBreak()
                }, e.insertText = t => {
                    if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                        n(t);
                        return
                    }
                    let r = t.split(/\r\n|\r|\n/);
                    if (!a(e)) {
                        n(r.join(" "));
                        return
                    }
                    l.HistoryUtils.withSingleEntry(e, () => {
                        let t = !1;
                        for (let l of r) t && i.SlateTransforms.splitNodes(e, {
                            always: !0
                        }), n(l), t = !0
                    })
                }, e
            }

            function a(e) {
                let t = r.EditorUtils.getCurrentBlock(e);
                return null != t && !o.includes(t[0].type)
            }
        },
        663190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("83800"),
                i = n("385887");

            function r(e, t) {
                let {
                    apply: n,
                    deleteBackward: r,
                    deleteForward: s,
                    deleteFragment: a,
                    insertData: u,
                    insertText: d,
                    onChange: c
                } = e;

                function f(n) {
                    let i = l.HistoryUtils.currentEntry(e);
                    if (null != i && (i.mergeable = !1), n >= e.history.stack.length) return;
                    e.history.index = n;
                    let r = l.HistoryUtils.currentEntry(e);
                    t({
                        newValue: r.value,
                        newSelection: r.selection
                    })
                }
                e.history = {
                    index: 0,
                    stack: []
                }, e.onChange = () => {
                    let {
                        history: t
                    } = e;
                    0 === t.stack.length && (t.stack = [o(e)], t.index = 0), null != e.selection && (l.HistoryUtils.currentEntry(e).selection = e.selection), m = null, c()
                }, e.undo = () => {
                    e.history.index > 0 && f(e.history.index - 1)
                }, e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && f(e.history.index + 1)
                };
                let p = null,
                    m = null,
                    h = null;
                return e.apply = t => {
                    let {
                        history: r
                    } = e;
                    n(t);
                    let s = i.EditorUtils.richValue(e);
                    s !== h && (0 === r.stack.length && (r.stack = [o(e)], r.index = 0), l.HistoryUtils.isSaving(e) && (function(e, t, n) {
                        let i;
                        let {
                            selection: r
                        } = e, o = l.HistoryUtils.currentEntry(e), s = !0, a = !0;
                        if ("insert_text" === t.type && 1 === t.text.length) i = "insert", a = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")));
                        else "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = !1, a = !1);
                        if ("set_selection" === t.type && null != o) {
                            o.selection = r;
                            return
                        }
                        s && function(e, t) {
                            return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                        }(o, i) ? l.HistoryUtils.insertOrMergeEntry(e, i, a) : l.HistoryUtils.insertEntry(e, i, a)
                    }(e, t, p), p = t), m = t, h = s)
                }, e.deleteBackward = t => {
                    l.HistoryUtils.withSingleEntry(e, () => r(t))
                }, e.deleteForward = t => {
                    l.HistoryUtils.withSingleEntry(e, () => s(t))
                }, e.deleteFragment = t => {
                    l.HistoryUtils.withSingleEntry(e, () => a(t))
                }, e.insertText = t => {
                    var n;
                    1 === t.length && (null === (n = m) || void 0 === n ? void 0 : n.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && i.RangeUtils.isExpanded(e.selection) ? l.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
                }, e.insertData = t => {
                    var n;
                    (null === (n = m) || void 0 === n ? void 0 : n.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => u(t)): l.HistoryUtils.withSingleEntry(e, () => u(t))
                }, e
            }

            function o(e) {
                return {
                    type: "other",
                    mergeable: !1,
                    createdAt: Date.now(),
                    value: i.EditorUtils.richValue(e),
                    selection: e.selection
                }
            }
        },
        93640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkModifiers: function() {
                    return f
                },
                default: function() {
                    return p
                }
            });
            var l = n("717837"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                s = n("83800"),
                a = n("916429"),
                u = n("939563"),
                d = n("385887"),
                c = n("49111");

            function f(e, t) {
                let {
                    cmd: n = !1,
                    ctrl: l = !1,
                    alt: i = !1,
                    shift: r = !1
                } = t;
                return (null == n || e.metaKey === n) && (null == l || e.ctrlKey === l) && (null == i || e.altKey === i) && (null == r || e.shiftKey === r)
            }

            function p(e) {
                return e.onKeyDown = t => {
                    var n, l, r, p;
                    let m = e.isMac;
                    switch (t.which) {
                        case c.KeyboardKeys.B:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "bold"), !0;
                            break;
                        case c.KeyboardKeys.I:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "italics"), !0;
                            break;
                        case c.KeyboardKeys.U:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "underline"), !0;
                            break;
                        case c.KeyboardKeys.S:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m,
                                    shift: !0
                                })) return (0, a.toggleMarkdownStyle)(e, "strikethrough"), !0;
                            break;
                        case c.KeyboardKeys.TAB:
                            if (null != e.selection && f(t, {
                                    shift: null
                                })) {
                                let [l, i] = d.RangeUtils.edges(e.selection), r = d.EditorUtils.blocks(e).slice(l.path[0], i.path[0] + 1), o = !0;
                                for (let [e] of r)
                                    if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                        o = !1;
                                        break
                                    } if (o) {
                                    if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                                    let n = !t.shiftKey;
                                    return s.HistoryUtils.withSingleEntry(e, () => {
                                        var t, l, i, o;
                                        let s = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : d.EditorUtils.start(e, []),
                                            a = null !== (o = null === (l = e.selection) || void 0 === l ? void 0 : l.focus) && void 0 !== o ? o : d.EditorUtils.end(e, []);
                                        for (let [t, l] of r) {
                                            let i = t.children[0];
                                            if (!d.TextUtils.isText(t.children[0])) continue;
                                            let r = d.PathUtils.child(l, 0),
                                                o = {
                                                    path: r,
                                                    offset: 0
                                                };
                                            if (n) u.SlateTransforms.insertText(e, "  ", {
                                                at: o
                                            }), d.PathUtils.equals(s.path, r) && 0 !== s.offset && (s = {
                                                path: r,
                                                offset: s.offset + 2
                                            }), d.PathUtils.equals(a.path, r) && 0 !== a.offset && (a = {
                                                path: r,
                                                offset: a.offset + 2
                                            });
                                            else if (i.text.startsWith("  ")) {
                                                let t = {
                                                    path: d.PathUtils.child(l, 0),
                                                    offset: 2
                                                };
                                                u.SlateTransforms.delete(e, {
                                                    at: {
                                                        anchor: o,
                                                        focus: t
                                                    }
                                                }), d.PathUtils.equals(s.path, r) && (s = {
                                                    path: r,
                                                    offset: Math.max(0, s.offset - 2)
                                                }), d.PathUtils.equals(a.path, r) && (a = {
                                                    path: r,
                                                    offset: Math.max(0, a.offset - 2)
                                                })
                                            }
                                        }
                                        u.SlateTransforms.select(e, {
                                            anchor: s,
                                            focus: a
                                        })
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.ARROW_LEFT:
                        case c.KeyboardKeys.ARROW_RIGHT: {
                            let n, o;
                            if (f(t, {
                                    shift: null
                                })) n = "character";
                            else if (f(t, {
                                    ctrl: !m,
                                    alt: m,
                                    shift: null
                                })) n = "word";
                            else if (m && f(t, {
                                    cmd: !0,
                                    shift: null
                                })) return !1;
                            else return !1;
                            t.shiftKey && (o = "focus");
                            let s = e.children[null !== (p = null === (r = e.selection) || void 0 === r ? void 0 : null === (l = r.focus) || void 0 === l ? void 0 : l.path[0]) && void 0 !== p ? p : 0],
                                a = "rtl" === i(d.NodeUtils.string(s)),
                                h = t.which === c.KeyboardKeys.ARROW_LEFT == !a;
                            return u.SlateTransforms.keyboardMove(e, {
                                reverse: h,
                                unit: n,
                                edge: o
                            }), !0
                        }
                        case c.KeyboardKeys.A:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [, n] = t, l = d.PathUtils.child(n, 0), i = {
                                        path: l,
                                        offset: 0
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: i,
                                        focus: i
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.E:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [n, l] = t, i = d.PathUtils.child(l, n.children.length - 1), [r] = d.EditorUtils.node(e, i), o = {
                                        path: i,
                                        offset: r.text.length
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: o,
                                        focus: o
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.BACKSPACE:
                        case c.KeyboardKeys.DELETE:
                        case c.KeyboardKeys.K:
                            let h = t.which === c.KeyboardKeys.BACKSPACE;
                            if ((!m && t.which !== c.KeyboardKeys.K && f(t, {
                                    ctrl: !0,
                                    shift: !0
                                }) || m && t.which !== c.KeyboardKeys.K && f(t, {
                                    cmd: !0
                                }) || m && t.which === c.KeyboardKeys.K && f(t, {
                                    ctrl: !0
                                })) && null != e.selection) {
                                let [t, n] = d.RangeUtils.edges(e.selection), [l, i] = d.EditorUtils.node(e, [h ? t.path[0] : n.path[0]]);
                                if (o(d.ElementUtils.isElement(l) && d.EditorUtils.isBlock(e, l), "Top-most node of selection is not a block"), h && !d.PointUtils.isAtStart(t, [l, i]) || !h && !d.PointUtils.isAtEnd(n, [l, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), !0
                            }
                    }
                    return !1
                }, e
            }
        },
        100576: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                run: function() {
                    return g
                },
                convertRawToInlineVoids: function() {
                    return C
                }
            });
            var l = n("627445"),
                i = n.n(l),
                r = n("798609"),
                o = n("383018"),
                s = n("118851"),
                a = n("83800"),
                u = n("135038"),
                d = n("970153"),
                c = n("939563"),
                f = n("385887");
            let p = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
                m = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
                h = new Set(["line", "blockQuote"]),
                E = new Set(["applicationCommandOption"]);

            function S(e, t, n) {
                let {
                    isInline: l,
                    isVoid: i,
                    onChange: r
                } = e;
                e.isVoid = e => !!m.has(e.type) || i(e), e.isInline = e => !!m.has(e.type) || l(e);
                let o = null,
                    s = !0;
                return e.onChange = () => {
                    let l = f.EditorUtils.richValue(e);
                    (l !== o || e.previewMarkdown !== s) && (a.HistoryUtils.withMergedEntry(e, () => {
                        f.EditorUtils.withoutNormalizing(e, () => g(e, t, n))
                    }), o = l, s = e.previewMarkdown), r()
                }, e
            }

            function g(e, t, n) {
                let l = f.EditorUtils.areStylesDisabled(e),
                    i = f.EditorUtils.blocks(e);
                for (let r of i)
                    if (h.has(r[0].type)) l ? v(e, r, !0, null) : T(e, r, t, n);
                    else {
                        let [i, o] = r;
                        for (let r = i.children.length - 1; r >= 0; r--) {
                            let s = i.children[r];
                            if (E.has(s.type)) {
                                let i = [s, f.PathUtils.child(o, r)];
                                l ? v(e, i, !0, null) : T(e, i, t, n)
                            }
                        }
                    }
            }

            function T(e, t, n, l) {
                var r;
                let o = "line" === t[0].type && (null === (r = t[0].codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock) === !0,
                    a = f.ElementUtils.markdown(t[0], n);
                v(e, t, o, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), !o && (C(e, t, l, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), function(e, t, n, l, r) {
                    let [o, a] = t, u = !1;
                    for (let d = o.children.length - 1; d >= 0; d--) {
                        let m;
                        let h = o.children[d];
                        if (!f.TextUtils.isText(h)) continue;
                        let E = f.PathUtils.child(a, d),
                            S = [];
                        for (p.lastIndex = 0; null != (m = p.exec(h.text));) {
                            if (0 !== m.index && null == h.text.charAt(m.index - 1).match(/(\t|\s)/)) {
                                p.lastIndex = m.index + 1;
                                continue
                            }
                            let i = {
                                path: E,
                                offset: m.index
                            };
                            if (y(e, a, i, r)) continue;
                            let o = (0, s.resolvePlaintextInlineVoid)(m[0], n, l);
                            null != o && I(l, t[0], o) ? S.push({
                                index: m.index,
                                length: m[0].length,
                                node: o
                            }) : p.lastIndex = m.index + 1
                        }
                        for (let t of S.reverse()) {
                            let n = [h, f.PathUtils.child(a, d)];
                            (function(e, t, n, l, r) {
                                let [o, s] = t, a = {
                                    path: s,
                                    offset: n
                                }, u = {
                                    path: s,
                                    offset: n + l
                                };
                                i(a.offset >= 0 && a.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), i(u.offset >= 0 && u.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), c.SlateTransforms.textToVoid(e, r, {
                                    anchor: a,
                                    focus: u
                                })
                            })(e, n, t.index, t.length, t.node), u = !0
                        }
                    };
                }(e, t, n, l, a))
            }

            function v(e, t, n, l) {
                let [i, r] = t, o = !1;
                for (let t = i.children.length - 1; t >= 0; t--) {
                    let s = i.children[t],
                        a = t < i.children.length - 1 ? i.children[t + 1] : null;
                    if (f.TextUtils.isText(s) && !n) {
                        if (null == a || !e.isVoid(a)) continue;
                        let n = !1,
                            l = 0;
                        for (;;) {
                            let e = s.text.indexOf("\\", l);
                            if (-1 === e) break;
                            if (e === s.text.length - 1) {
                                n = !0;
                                break
                            }
                            l = e + 2
                        }
                        if (n) {
                            let n = f.PathUtils.child(r, t + 1);
                            c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(a, {
                                mode: "plain",
                                preventEmojiSurrogates: !0
                            }), n), o = !0
                        }
                    } else if (e.isVoid(s)) {
                        let i = f.PathUtils.child(r, t),
                            a = {
                                path: f.PathUtils.child(i, 0),
                                offset: 0
                            };
                        (n || null != l && y(e, r, a, l)) && (c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(s, {
                            mode: "plain",
                            preventEmojiSurrogates: !0
                        }), i), o = !0)
                    }
                }
                return o
            }

            function C(e, t, n, l) {
                let i = t[1],
                    r = !1,
                    o = [...l.entries].reverse();
                for (let s of o) {
                    let o;
                    switch (s.attributes[0]) {
                        case "emoji":
                            o = {
                                type: "emoji",
                                emoji: {
                                    name: s.data.name,
                                    src: s.data.src,
                                    surrogate: s.data.surrogate,
                                    jumboable: !0 === s.data.jumboable
                                },
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "customEmoji":
                            o = {
                                type: "customEmoji",
                                emoji: {
                                    emojiId: s.data.emojiId,
                                    name: s.data.name,
                                    animated: s.data.animated,
                                    jumboable: !0 === s.data.jumboable
                                },
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "textMention":
                            o = {
                                type: "textMention",
                                name: s.data.text,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "mention":
                            o = {
                                type: "userMention",
                                userId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "roleMention":
                            o = {
                                type: "roleMention",
                                roleId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "channelMention":
                            o = {
                                type: "channelMention",
                                channelId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "staticRouteLink":
                            o = {
                                type: "staticRouteLink",
                                channelId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "soundboard":
                            o = {
                                type: "soundboard",
                                soundId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "timestamp":
                            o = {
                                type: "timestamp",
                                parsed: s.data,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        default:
                            continue
                    }
                    if (!I(n, t[0], o)) continue;
                    let a = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start),
                        d = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start + s.text.length);
                    c.SlateTransforms.textToVoid(e, o, {
                        anchor: a,
                        focus: d
                    }), r = !0
                }
                return r
            }

            function y(e, t, n, l) {
                let i = 0;
                for (let [l, r] of f.EditorUtils.nodes(e, {
                        at: {
                            anchor: f.EditorUtils.start(e, t),
                            focus: n
                        },
                        mode: "lowest"
                    })) f.TextUtils.isText(l) ? f.PathUtils.equals(r, n.path) ? i += n.offset : i += l.text.length : i += 1;
                for (let e of l.entries) {
                    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
                    let t = e.start,
                        n = e.start + e.text.length;
                    if (t <= i && n >= i) return !0
                }
                return !1
            }

            function I(e, t, n) {
                if ("applicationCommandOption" !== t.type) return !0;
                switch (t.optionType) {
                    case r.ApplicationCommandOptionType.CHANNEL:
                        return "channelMention" === n.type;
                    case r.ApplicationCommandOptionType.ROLE:
                        return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
                    case r.ApplicationCommandOptionType.USER:
                        return "userMention" === n.type;
                    case r.ApplicationCommandOptionType.MENTIONABLE:
                        return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
                    case r.ApplicationCommandOptionType.STRING: {
                        let n = null != e ? o.default.getOption(e, t.optionName) : null;
                        return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
                    }
                    default:
                        return !1
                }
            }
        },
        665613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("987295"),
                i = n("939563"),
                r = n("385887");

            function o(e) {
                let {
                    apply: t,
                    deleteBackward: n,
                    deleteForward: o,
                    deleteFragment: a,
                    insertText: d
                } = e;
                return e.apply = n => {
                    var l;
                    if ("set_selection" === n.type && (null === (l = e.composition) || void 0 === l ? void 0 : l.startedInsideInline) && r.RangeUtils.isRange(n.properties) && r.RangeUtils.isRange(n.newProperties) && r.RangeUtils.isCollapsed(n.newProperties)) {
                        let t = r.EditorUtils.getParentInline(e, n.properties),
                            l = r.EditorUtils.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !r.PathUtils.equals(t[1], l[1]))) return
                    }
                    t(n)
                }, e.insertText = t => {
                    if (null != e.selection) {
                        let n = r.EditorUtils.getCurrentInline(e);
                        if (null != n) {
                            i.SlateTransforms.insertText(e, t);
                            return
                        }
                    }
                    d(t)
                }, e.deleteBackward = t => {
                    !s(e, t, !0) && n(t)
                }, e.deleteForward = t => {
                    !s(e, t, !1) && o(t)
                }, e.deleteFragment = t => {
                    if (null != e.selection && r.RangeUtils.isExpanded(e.selection)) {
                        var n, l, o, s;
                        let u = e.selection.anchor,
                            d = e.selection.focus,
                            c = r.EditorUtils.getParentInline(e, u),
                            f = r.EditorUtils.getParentInline(e, d);
                        if (null != c && null != f && r.PathUtils.equals(c[1], f[1])) {
                            a(t);
                            return
                        }
                        let p = r.RangeUtils.isForward(e.selection);
                        if (null != c) {
                            let [, t] = c, [i, o] = r.EditorUtils.edges(e, t);
                            p && r.PointUtils.equals(u, i) ? u = null !== (n = r.EditorUtils.before(e, i)) && void 0 !== n ? n : r.EditorUtils.start(e, []) : !p && r.PointUtils.equals(u, o) && (u = null !== (l = r.EditorUtils.after(e, o)) && void 0 !== l ? l : r.EditorUtils.end(e, []))
                        }
                        if (null != f) {
                            let [, t] = f, [n, l] = r.EditorUtils.edges(e, t);
                            !p && r.PointUtils.equals(d, n) ? d = null !== (o = r.EditorUtils.before(e, n)) && void 0 !== o ? o : r.EditorUtils.start(e, []) : p && r.PointUtils.equals(d, l) && (d = null !== (s = r.EditorUtils.after(e, l)) && void 0 !== s ? s : r.EditorUtils.end(e, []))
                        }
                        i.SlateTransforms.delete(e, {
                            at: {
                                anchor: u,
                                focus: d
                            },
                            reverse: "backward" === t,
                            select: !0
                        });
                        return
                    }
                    a(t)
                }, l.Editor.positions = u, e
            }

            function s(e, t, n) {
                let l = r.EditorUtils.getCurrentInline(e),
                    o = r.EditorUtils.getCurrentBlock(e),
                    s = r.RangeUtils.toPoint(e.selection);
                if (null == s || null == o || "block" === t) return !0;
                if ("line" === t && null == l) return !1;
                let a = l;
                if (null == a) {
                    let t = (n ? r.EditorUtils.before : r.EditorUtils.after)(e, s);
                    null != t && null != (a = r.EditorUtils.getParentInline(e, t)) && (s = t)
                }
                if (null != a) {
                    let [l, o] = a;
                    if (r.EditorUtils.isEmpty(e, l) || r.EditorUtils.isVoid(e, l)) i.SlateTransforms.removeInline(e, o);
                    else {
                        let [l, a] = r.EditorUtils.edges(e, o);
                        i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: l,
                                focus: a
                            }
                        })
                    }
                    return !0
                }
                let u = !1;
                if (null != o) {
                    let [, t] = o, [l, i] = r.EditorUtils.edges(e, t);
                    u = n && r.PointUtils.equals(s, l) || !n && r.PointUtils.equals(s, i)
                }
                if ("word" === t && !u) {
                    let l = r.EditorUtils.getCurrentText(e);
                    if (null != l) {
                        let [, o] = l, [a, u] = r.EditorUtils.edges(e, o);
                        return i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: a,
                                focus: u
                            }
                        }), !0
                    }
                }
                return i.SlateTransforms.delete(e, {
                    at: s,
                    unit: t,
                    reverse: n,
                    select: !0
                }), !0
            }
            let a = l.Editor.positions;

            function* u(e) {
                var t, n, l, i, o, s, u, d;
                let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: f = e.selection,
                        unit: p = "offset",
                        reverse: m = !1,
                        voids: h = !1
                    } = null != c ? c : {};
                if ("word" !== p) {
                    for (let t of a(e, {
                            ...c,
                            voids: h || "block" === p
                        })) yield t;
                    return
                }
                if (null == f) return;
                let E = r.EditorUtils.range(e, f),
                    [S, g] = r.RangeUtils.edges(E),
                    T = r.EditorUtils.richValue(e),
                    v = m ? -1 : 1,
                    C = null !== (l = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : 0,
                    y = null !== (i = null === (n = g.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : T.length - 1,
                    I = m ? C : y,
                    N = m ? y : C;
                for (;;) {
                    let t = T[N],
                        n = null !== (u = N === C ? null === (o = S.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== u ? u : 0,
                        l = null !== (d = N === y ? null === (s = g.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== d ? d : t.children.length - 1,
                        i = m ? l : n,
                        f = m ? n : l,
                        p = i;
                    for (;;) {
                        let n, l;
                        let i = t.children[p],
                            o = [N, p];
                        if (n = r.PathUtils.equals(o, S.path) || r.PathUtils.isAncestor(o, S.path) ? !m && r.EditorUtils.isEnd(e, S, o) ? null : S : r.EditorUtils.start(e, o), l = r.PathUtils.equals(o, g.path) || r.PathUtils.isAncestor(o, g.path) ? m && r.EditorUtils.isStart(e, g, o) ? null : g : r.EditorUtils.end(e, o), null != n && null != l) {
                            if (r.TextUtils.isText(i) && 0 === i.text.length) {
                                let e = {
                                    path: o,
                                    offset: 0
                                };
                                yield e, yield e
                            } else if (r.EditorUtils.isInline(e, i) && r.TextUtils.isText(i.children[0]) && 0 === i.children[0].text.length) {
                                let e = {
                                    path: r.PathUtils.child(o, 0),
                                    offset: 0
                                };
                                yield e, yield e
                            } else {
                                let t = {
                                    anchor: n,
                                    focus: l
                                };
                                for (let n of a(e, {
                                        ...c,
                                        at: t
                                    })) yield n
                            }
                        }
                        if (p === f) break;
                        p += v
                    }
                    if (N === I) break;
                    N += v
                }
            }
        },
        473752: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        541926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("970153"),
                i = n("939563"),
                r = n("385887");

            function o(e) {
                return e.setFragmentData = t => {
                    if (null != e.selection) {
                        let n = (0, l.toTextValue)(r.EditorUtils.richValue(e), {
                            mode: "plain",
                            range: e.selection,
                            preventEmojiSurrogates: !0
                        });
                        t.setData("text/plain", n)
                    }
                }, e.insertData = t => {
                    e.insertTextData(t)
                }, e.insertFragmentData = e => !1, e.insertTextData = t => {
                    let n = t.getData("text/plain");
                    return 0 !== n.length && (null != e.selection && r.RangeUtils.isExpanded(e.selection) && i.SlateTransforms.delete(e, {
                        at: e.selection
                    }), e.insertText(n), !0)
                }, e
            }
        },
        926970: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withReact: function() {
                    return o
                }
            });
            var l = n("278419"),
                i = n("939563"),
                r = n("385887");
            let o = (e, t) => {
                let {
                    addMark: n,
                    removeMark: o,
                    deleteBackward: s,
                    deleteForward: a,
                    setFragmentData: u,
                    insertData: d,
                    insertFragmentData: c,
                    insertTextData: f
                } = e;
                return (e = (0, l.withReact)(e)).addMark = n, e.removeMark = o, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = c, e.insertTextData = f, e.deleteBackward = n => {
                    if ("line" !== n || t) s(n);
                    else {
                        let t = r.DOMUtils.getLineActionRange(e, !0);
                        null != t && i.SlateTransforms.delete(e, {
                            at: t
                        })
                    }
                }, e.deleteForward = n => {
                    if ("line" !== n || t) a(n);
                    else {
                        let t = r.DOMUtils.getLineActionRange(e, !1);
                        null != t && i.SlateTransforms.delete(e, {
                            at: t
                        })
                    }
                }, e
            }
        },
        755107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("939563"),
                i = n("385887"),
                r = n("566819");

            function o(e) {
                let {
                    apply: t,
                    onChange: n
                } = e;
                return e.apply = n => {
                    t(n), i.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
                }, e.onChange = () => {
                    if (!i.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                            let t;
                            if (i.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                            else {
                                let n = i.EditorUtils.end(e, []);
                                t = {
                                    anchor: n,
                                    focus: n
                                }
                            }
                            return t
                        }(e)), null != e.selection) {
                        let t, n, [o, s] = i.RangeUtils.edges(e.selection),
                            a = !1;
                        for (; null != o && null != (t = i.EditorUtils.getParentVoid(e, o)) && !r.SELECTABLE_VOIDS.includes(t[0].type);) o = i.EditorUtils.before(e, o, {
                            unit: "offset"
                        }), a = !0;
                        for (; null != s && null != (n = i.EditorUtils.getParentVoid(e, s)) && !r.SELECTABLE_VOIDS.includes(n[0].type);) s = i.EditorUtils.after(e, s, {
                            unit: "offset"
                        }), a = !0;
                        a && null != o && null != s && (i.RangeUtils.isForward(e.selection) ? l.SlateTransforms.select(e, {
                            anchor: o,
                            focus: s
                        }) : l.SlateTransforms.select(e, {
                            anchor: s,
                            focus: o
                        }))
                    }
                    n()
                }, e
            }
        },
        518542: function(e, t, n) {
            "use strict";

            function l(e) {
                let {
                    isInline: t,
                    isVoid: n
                } = e;
                return e.isInline = e => "testInline" === e.type || "testInlineVoid" === e.type || t(e), e.isVoid = e => "testInlineVoid" === e.type || n(e), e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        269149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });

            function l(e, t, n) {
                let {
                    onChange: l
                } = e, i = !1, r = !1;
                return e.onChange = () => {
                    if (i) {
                        r = !0;
                        return
                    }
                    i = !0;
                    try {
                        let e = 0;
                        do {
                            if (r = !1, e++ >= 5) break;
                            null == t || t();
                            try {
                                l()
                            } finally {
                                null == n || n()
                            }
                        } while (r)
                    } finally {
                        i = !1
                    }
                }, e
            }
        },
        765446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("278419"),
                a = n("446674"),
                u = n("798609"),
                d = n("383018"),
                c = n("585722"),
                f = n("640830"),
                p = n("939563"),
                m = n("385887"),
                h = n("782340"),
                E = n("835906");

            function S(e, t, n) {
                let {
                    attributes: i,
                    children: r,
                    element: o
                } = t;
                switch (o.type) {
                    case "applicationCommand":
                        let s = d.default.getActiveCommand(n),
                            a = 0,
                            u = 0;
                        if (null != s && s.id === o.command.id) {
                            var c;
                            let t = f.getOptionNames(e);
                            for (let e of null !== (c = s.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : a++
                        }
                        let p = {};
                        if (a > 0) {
                            let e;
                            e = u > 0 ? h.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                                count: a
                            }) : h.default.Messages.COMMANDS_OPTION_COUNT.format({
                                count: a
                            }), p["data-trailing-placeholder"] = e
                        }
                        return (0, l.jsx)("div", {
                            className: E.applicationCommand,
                            ...i,
                            ...p,
                            children: r
                        });
                    case "applicationCommandOption":
                        return (0, l.jsx)(g, {
                            attributes: i,
                            channelId: n,
                            element: o,
                            children: r
                        });
                    default:
                        return null
                }
            }
            let g = e => {
                let t, {
                        channelId: n,
                        element: r,
                        attributes: f,
                        children: S
                    } = e,
                    g = (0, s.useSelected)(),
                    T = (0, s.useFocused)(),
                    v = (0, s.useSlateStatic)(),
                    {
                        optionType: C,
                        errored: y
                    } = (0, a.useStateFromStoresObject)([d.default], () => {
                        var e, t, l;
                        return {
                            optionType: null === (e = d.default.getOption(n, r.optionName)) || void 0 === e ? void 0 : e.type,
                            errored: (null === (l = d.default.getOptionState(n, r.optionName)) || void 0 === l ? void 0 : null === (t = l.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                        }
                    }, [n, r.optionName]),
                    I = (0, a.useStateFromStores)([c.default], () => c.default.getUpload(n, r.optionName, v.chatInputType.drafts.type), [n, v.chatInputType.drafts.type, r.optionName]),
                    N = r.children[r.children.length - 1],
                    _ = null != N && m.TextUtils.isText(N) && N.text.endsWith("\n"),
                    x = o(E.inlineElement, E.optionPill, {
                        [E.selectedPill]: T && g,
                        [E.erroredPill]: (!T || !g) && y
                    }),
                    A = i.useCallback(() => {
                        !m.EditorUtils.isVoid(v, r) && p.SlateTransforms.selectCommandOption(v, r.optionName, !0)
                    }, [v, r]);
                if (C === u.ApplicationCommandOptionType.ATTACHMENT) t = (null == I ? void 0 : I.filename) != null ? (0, l.jsxs)("span", {
                    className: o(E.optionPillValue, E.attachmentFilename),
                    contentEditable: !1,
                    children: [I.filename, S]
                }) : (0, l.jsxs)("span", {
                    className: o(E.optionPillValue, E.readonlyPillValue),
                    contentEditable: !1,
                    children: [h.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, S]
                });
                else t = (0, l.jsxs)("span", {
                    className: E.optionPillValue,
                    children: [S, _ ? (0, l.jsx)("span", {
                        className: E.newLine,
                        contentEditable: !1
                    }) : null]
                });
                return (0, l.jsxs)("span", {
                    ...f,
                    className: x,
                    children: [(0, l.jsxs)("span", {
                        className: E.optionPillKey,
                        contentEditable: !1,
                        onClick: A,
                        children: [r.optionDisplayName, "​"]
                    }), t, (0, l.jsx)("span", {
                        contentEditable: !1,
                        children: "​"
                    })]
                })
            }
        },
        461593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("835906");

            function s(e) {
                let {
                    attributes: t,
                    children: n,
                    leaf: i,
                    text: s
                } = e;
                if (i.commandName) {
                    let e = r(o.commandName, {
                        [o.emptyText]: "" === s.text
                    });
                    return (0, l.jsx)("span", {
                        ...t,
                        className: e,
                        spellCheck: !1,
                        children: n
                    })
                }
                return null
            }
        },
        760120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("186188"),
                s = n("328634"),
                a = n("835906"),
                u = n("632215");

            function d(e, t, n) {
                let {
                    attributes: i,
                    children: a,
                    element: d
                } = e;
                switch (d.type) {
                    case "line":
                        var f;
                        if (null === (f = d.codeBlockState) || void 0 === f ? void 0 : f.isInCodeBlock) return (0, l.jsx)("div", {
                            className: s.codeLine,
                            spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                            ...i,
                            children: a
                        });
                        return (0, l.jsx)("div", {
                            ...i,
                            children: a
                        });
                    case "blockQuote": {
                        let e = r(u.blockquoteContainer, u.slateBlockquoteContainer);
                        return (0, l.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [(0, l.jsx)("span", {
                                contentEditable: !1,
                                className: u.blockquoteDivider
                            }), (0, l.jsx)("blockquote", {
                                children: a
                            })]
                        })
                    }
                    case "emoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Emoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CustomEmoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "textMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.TextMention, {
                                text: d.name,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "userMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.UserMention, {
                                id: d.userId,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "roleMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.RoleMention, {
                                id: d.roleId,
                                guildId: t
                            }), a]
                        });
                    case "channelMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.ChannelMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.StaticRouteMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "soundboard":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.SoundboardMention, {
                                id: d.soundId
                            }), a]
                        });
                    case "commandMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CommandMention, {
                                text: d.commandName,
                                id: d.commandId
                            }), a]
                        });
                    case "timestamp":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Timestamp, {
                                timestamp: d.parsed
                            }), a]
                        });
                    default:
                        return null
                }
            }
            let c = e => {
                let {
                    className: t,
                    attributes: n,
                    children: i
                } = e, o = r(a.inlineElement, a.inlineVoid, t);
                return (0, l.jsx)("span", {
                    ...n,
                    className: o,
                    contentEditable: !1,
                    children: i
                })
            }
        },
        632550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("385887"),
                s = n("328634"),
                a = n("835906"),
                u = n("145719");
            let d = {
                strong: s.bold,
                em: s.italics,
                u: s.underline,
                s: s.strikethrough,
                inlineCode: s.inlineCode,
                link: s.fakeLink,
                url: s.fakeLink,
                autolink: s.fakeLink,
                spoiler: r(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, s.spoiler),
                staticRouteLink: s.fakeLink,
                syntaxBefore: s.syntaxBefore,
                syntaxAfter: s.syntaxAfter,
                codeBlockText: s.codeBlockText,
                codeBlockSyntax: s.codeBlockSyntax,
                codeBlockLang: s.codeBlockLang
            };

            function c(e, t) {
                let n;
                let {
                    attributes: i,
                    children: u,
                    leaf: c,
                    text: f
                } = t, p = !1, [m] = o.EditorUtils.node(e, o.PathUtils.parent(o.EditorUtils.findPath(e, f))), h = o.EditorUtils.isEditor(m) ? "editor" : m.type;
                switch (h) {
                    case "line":
                    case "blockQuote": {
                        p = void 0;
                        let e = Object.entries(c).filter(e => {
                            let [t] = e;
                            return "text" !== t
                        }).flatMap(e => {
                            let [t, n] = e;
                            if ("hljsTypes" === t) return n;
                            if (!0 === n) {
                                if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (p = !1), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
                                if (t in d) return [d[t]];
                                throw Error("Slate: Unknown decoration attribute: ".concat(t))
                            }
                        }).filter(e => null != e).join(" ");
                        n = r(e, {
                            [s.syntaxOverride]: "||" === c.text || "\\" === c.text
                        })
                    }
                }
                return n = r(n, {
                    [a.emptyText]: "" === f.text
                }), (0, l.jsx)("span", {
                    ...i,
                    className: n,
                    spellCheck: p,
                    children: u
                })
            }
        },
        395364: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("646630"),
                o = n("433417");

            function s(e, t) {
                if (!("type" in e)) return null;
                if ("timestamp" === e.type) return (0, l.jsx)(a, {
                    ...t,
                    timestamp: e.parsed
                });
                return null
            }

            function a(e) {
                var t;
                let {
                    timestamp: n,
                    replace: s
                } = e, a = e => {
                    let {
                        timestamp: t,
                        format: l
                    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, o = null != l ? l : n.format, a = (0, r.unparseTimestamp)(i, o);
                    s(a)
                };
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsx)(i.DateInput, {
                        value: n.parsed,
                        onSelect: e => {
                            a({
                                timestamp: e.toDate()
                            })
                        }
                    }), (0, l.jsx)(i.TimeInput, {
                        value: n.parsed,
                        onChange: e => {
                            a({
                                timestamp: e.toDate()
                            })
                        }
                    }), (0, l.jsx)(i.RadioGroup, {
                        options: Object.entries(r.TIMESTAMP_FORMATS).map(e => {
                            let [t, l] = e;
                            return {
                                name: l(n.parsed),
                                value: t
                            }
                        }),
                        value: null !== (t = n.format) && void 0 !== t ? t : r.DEFAULT_TIMESTAMP_FORMAT,
                        size: i.RadioGroup.Sizes.SMALL,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            a({
                                format: t
                            })
                        }
                    })]
                })
            }
        },
        393171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsDismissibleContentTypeDismissed: function() {
                    return s
                }
            });
            var l = n("446674"),
                i = n("374363"),
                r = n("674268"),
                o = n("846614");

            function s(e) {
                let t = (0, o.useNewUserDismissibleContent)([e]),
                    n = (0, l.useStateFromStores)([i.default], () => {
                        var e;
                        return null === (e = i.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    });
                return 0 === t.length || null != n && (0, r.hasBit)(n, e)
            }
        },
        241488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("394846"),
                d = n("118810"),
                c = n("446674"),
                f = n("551042"),
                p = n("77078"),
                m = n("452804"),
                h = n("901582"),
                E = n("594203"),
                S = n("244201"),
                g = n("716241"),
                T = n("850391"),
                v = n("86678"),
                C = n("873622"),
                y = n("277855"),
                I = n("191191"),
                N = n("256860"),
                _ = n("364685"),
                x = n("889701"),
                A = n("168973"),
                O = n("983782"),
                R = n("659500"),
                b = n("791776"),
                k = n("538282"),
                M = n("13030"),
                P = n("49111"),
                L = n("115279"),
                U = n("958706"),
                D = n("560241"),
                j = n("782340"),
                w = n("300441");
            let B = M.MIN_EXPRESSION_PICKER_WIDTH + L.EmojiSize.MEDIUM,
                K = i.memo(function(e) {
                    let {
                        isActive: t,
                        className: n,
                        viewType: i,
                        autoFocus: r = !1,
                        "aria-controls": s,
                        ...a
                    } = e;
                    return (0, l.jsx)(p.Button, {
                        role: "tab",
                        autoFocus: r,
                        "aria-controls": t ? s : void 0,
                        ...a,
                        onClick: () => {
                            g.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                                tab: i,
                                badged: !1
                            }), (0, k.setExpressionPickerView)(i)
                        },
                        "aria-current": t ? "page" : void 0,
                        className: o(n, w.navButton, w.navItem, {
                            [w.navButtonActive]: t
                        }),
                        look: p.Button.Looks.BLANK,
                        size: p.Button.Sizes.NONE
                    })
                }),
                F = e => {
                    let {
                        positionContainerRef: t,
                        drawerRef: n
                    } = e, l = (0, c.useStateFromStores)([A.default], () => A.default.expressionPickerWidth), [r, o] = i.useState(window.innerWidth), [s, u] = i.useState(null != l ? l : M.ExpressionPickerWidths.MIN), d = i.useMemo(() => {
                        switch (s) {
                            case M.ExpressionPickerWidths.MIN:
                                return M.MIN_EXPRESSION_PICKER_WIDTH;
                            case M.ExpressionPickerWidths.MAX:
                                return null;
                            default:
                                return s
                        }
                    }, [s]), f = i.useCallback(e => {
                        let t = e >= r ? M.ExpressionPickerWidths.MAX : e <= M.MIN_EXPRESSION_PICKER_WIDTH ? M.ExpressionPickerWidths.MIN : e;
                        null == t && null != n.current && (n.current.style.width = ""), m.default.updatedUnsyncedSettings({
                            expressionPickerWidth: t
                        }), u(t)
                    }, [n, r]), p = (0, E.default)({
                        initialElementDimension: d,
                        maxDimension: r,
                        minDimension: M.MIN_EXPRESSION_PICKER_WIDTH,
                        resizableDomNodeRef: n,
                        onElementResize: f,
                        orientation: E.ResizeOrientation.HORIZONTAL_LEFT
                    });
                    i.useEffect(() => {
                        let e = a.debounce(() => {
                            null != t.current && o(t.current.offsetWidth)
                        }, 500);
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [t]), i.useLayoutEffect(() => {
                        null != t.current && o(t.current.offsetWidth)
                    }, [t]);
                    let h = i.useCallback(e => {
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), p(e)
                    }, [t, p]);
                    return {
                        drawerWidth: d,
                        handleDrawerResizeHandleMouseDown: h
                    }
                };
            var G = i.memo(function(e) {
                var t, n, r;
                let {
                    positionTargetRef: s,
                    onSelectGIF: a,
                    onSelectEmoji: m,
                    onSelectSticker: E,
                    onSelectSound: A,
                    channel: G,
                    type: V,
                    closeOnModalOuterClick: H = !1,
                    parentModalKey: W
                } = e, q = i.useRef(null), Y = i.useRef(!1), z = i.useRef(), Q = i.useRef(null), {
                    drawerWidth: X,
                    handleDrawerResizeHandleMouseDown: J
                } = F({
                    positionContainerRef: q,
                    drawerRef: Q
                }), Z = (0, k.useExpressionPickerStore)(e => e.activeView), $ = (0, N.useHasSendableSticker)(G), {
                    renderWindow: ee,
                    windowDispatch: et
                } = i.useContext(S.default), en = (0, c.useStateFromStores)([_.default], () => !_.default.hasLoadedStickerPacks), el = (0, y.useSoundmojiExperiment)("expression_picker"), ei = null != W, er = (0, f.useIsModalAtTop)(null != W ? W : ""), eo = i.useCallback(e => {
                    var t;
                    if (!ei && (0, f.hasAnyModalOpen)() || ei && !(er && H)) return;
                    let {
                        target: n
                    } = e;
                    if ((0, d.isElement)(n) && null != n.closest("." + M.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                    for (;
                        (0, d.isElement)(n);) {
                        if (n === Q.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                        n = n.parentNode
                    }(0, k.closeExpressionPicker)();
                    let l = null === (t = (0, b.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                    (null == l || "BODY" === l.tagName) && R.ComponentDispatch.dispatchToLastSubscribed(P.ComponentActions.TEXTAREA_FOCUS)
                }, [H, er, ei]), es = i.useCallback(() => {
                    (0, k.closeExpressionPicker)()
                }, []);
                i.useLayoutEffect(() => {
                    let e = () => {
                        Z === M.ExpressionPickerViewType.GIF && (0, k.closeExpressionPicker)()
                    };
                    return ee.addEventListener("mousedown", eo), ee.addEventListener("contextmenu", eo), et.subscribe(P.ComponentActions.POPOUT_CLOSE, es), R.ComponentDispatch.subscribe(P.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                        ee.removeEventListener("mousedown", eo), ee.removeEventListener("contextmenu", eo), et.unsubscribe(P.ComponentActions.POPOUT_CLOSE, es), R.ComponentDispatch.unsubscribe(P.ComponentActions.CLOSE_GIF_PICKER, e)
                    }
                }, [Z, es, eo, ee, et]), (0, p.useFocusLock)(q), i.useEffect(() => {
                    (0, k.setSearchQuery)("")
                }, []), i.useEffect(() => {
                    (!ei && (0, f.hasAnyModalOpen)() || ei && !er) && (0, k.closeExpressionPicker)()
                }, [er, ei]), i.useEffect(() => {
                    if (null != Q.current && !Y.current) {
                        var e, t, n, l;
                        Z === M.ExpressionPickerViewType.EMOJI ? (null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == z || null === (t = z.current) || void 0 === t || t.onPickerOpen(), Y.current = !0) : Z === M.ExpressionPickerViewType.STICKER ? (null == z ? void 0 : null === (n = z.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !en && (null == z || null === (l = z.current) || void 0 === l || l.onPickerOpen(), Y.current = !0) : (g.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                            width: Q.current.offsetWidth,
                            tab: Z,
                            badged: !1
                        }), Y.current = !0)
                    }
                });
                let ea = (null === (t = V.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile,
                    eu = null === (n = V.stickers) || void 0 === n ? void 0 : n.allowSending,
                    ed = !(null === (r = V.expressionPicker) || void 0 === r ? void 0 : r.onlyEmojis) && (ea || eu);
                return (0, l.jsx)(h.default, {
                    section: P.AnalyticsSections.EXPRESSION_PICKER,
                    children: (0, l.jsx)(O.AppReferencePositionLayer, {
                        className: w.positionLayer,
                        reference: s,
                        position: "top",
                        align: "right",
                        spacing: 8,
                        autoInvert: !0,
                        children: e => {
                            let {
                                isPositioned: t
                            } = e;
                            return (0, l.jsx)("section", {
                                className: o(w.positionContainer, {
                                    [w.positionContainerOnlyEmoji]: !ed
                                }),
                                ref: q,
                                role: "dialog",
                                "aria-label": j.default.Messages.EXPRESSION_PICKER,
                                children: t ? (0, l.jsxs)("div", {
                                    className: w.drawerSizingWrapper,
                                    style: {
                                        width: null == X ? void 0 : X
                                    },
                                    ref: Q,
                                    children: [(0, l.jsx)("div", {
                                        className: w.resizeHandle,
                                        onMouseDown: J
                                    }), (0, l.jsxs)("div", {
                                        className: w.contentWrapper,
                                        children: [ed ? (0, l.jsx)("nav", {
                                            className: w.nav,
                                            children: (0, l.jsxs)("div", {
                                                className: w.navList,
                                                role: "tablist",
                                                "aria-label": j.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                                children: [ea && (0, l.jsx)(K, {
                                                    id: L.GIF_PICKER_TAB_ID,
                                                    "aria-controls": L.GIF_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": Z === M.ExpressionPickerViewType.GIF,
                                                    isActive: Z === M.ExpressionPickerViewType.GIF,
                                                    viewType: M.ExpressionPickerViewType.GIF,
                                                    children: j.default.Messages.EXPRESSION_PICKER_GIF
                                                }), eu ? (0, l.jsx)(K, {
                                                    id: D.STICKER_PICKER_TAB_ID,
                                                    "aria-controls": D.STICKER_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": Z === M.ExpressionPickerViewType.STICKER,
                                                    isActive: Z === M.ExpressionPickerViewType.STICKER,
                                                    autoFocus: !$,
                                                    viewType: M.ExpressionPickerViewType.STICKER,
                                                    children: (0, l.jsx)("div", {
                                                        className: w.stickersNavItem,
                                                        children: j.default.Messages.EXPRESSION_PICKER_STICKER
                                                    })
                                                }) : null, (0, l.jsx)(K, {
                                                    id: L.EMOJI_PICKER_TAB_ID,
                                                    "aria-controls": L.EMOJI_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": Z === M.ExpressionPickerViewType.EMOJI,
                                                    isActive: Z === M.ExpressionPickerViewType.EMOJI,
                                                    viewType: M.ExpressionPickerViewType.EMOJI,
                                                    children: j.default.Messages.EXPRESSION_PICKER_EMOJI
                                                }), el && null != A && (0, l.jsx)(K, {
                                                    id: L.SOUNDBOARD_PICKER_TAB_ID,
                                                    "aria-controls": L.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": Z === M.ExpressionPickerViewType.SOUNDBOARD,
                                                    isActive: Z === M.ExpressionPickerViewType.SOUNDBOARD,
                                                    viewType: M.ExpressionPickerViewType.SOUNDBOARD,
                                                    children: "Sounds"
                                                })]
                                            })
                                        }) : null, Z === M.ExpressionPickerViewType.STICKER && ed ? (0, l.jsx)(x.default, {
                                            isLoading: en,
                                            channel: G,
                                            containerWidth: X,
                                            onSelectSticker: E,
                                            closePopout: es,
                                            ref: e => {
                                                z.current = e
                                            }
                                        }) : null, Z === M.ExpressionPickerViewType.GIF && ed ? (0, l.jsx)(C.default, {
                                            onSelectGIF: a,
                                            persistSearch: !0
                                        }) : null, Z === M.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(v.default, {
                                            hasTabWrapper: !0,
                                            persistSearch: !0,
                                            channel: G,
                                            containerWidth: X,
                                            emojiSize: null != X && X < B ? L.EmojiSize.MEDIUM : L.EmojiSize.LARGE,
                                            pickerIntention: U.EmojiIntention.CHAT,
                                            closePopout: es,
                                            onSelectEmoji: m,
                                            ref: e => {
                                                z.current = e
                                            },
                                            disableEmojiTutorialFlow: V === T.ChatInputTypes.PROFILE_BIO_INPUT
                                        }) : null, Z === M.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                                            className: w.soundboardContainer,
                                            children: (0, l.jsx)(I.default, {
                                                guildId: G.guild_id,
                                                channel: G,
                                                containerWidth: X,
                                                onClose: es,
                                                onSelect: A,
                                                analyticsSource: "expression-picker",
                                                autoWidth: !0
                                            })
                                        }) : null]
                                    })]
                                }) : null
                            })
                        }
                    })
                })
            })
        },
        522096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("538282"),
                o = n("45961"),
                s = n("794707"),
                a = n("195638"),
                u = n("44058");

            function d(e) {
                let {
                    categories: t,
                    collapsedCategories: n,
                    containerWidth: d,
                    store: c,
                    onSelectItem: f,
                    onSearchExpressions: p,
                    hasSearchResults: m,
                    defaultSearchPlaceholder: h,
                    emptySearchPlaceholder: E,
                    renderEmptyState: S,
                    renderRow: g,
                    renderSection: T,
                    renderSectionHeader: v,
                    renderSectionFooter: C,
                    renderInspector: y,
                    renderEmptySearchState: I,
                    renderCategoryList: N,
                    renderHeaderAccessories: _,
                    rowHeight: x,
                    sectionHeaderHeight: A,
                    sectionFooterHeight: O,
                    itemNodeWidth: R,
                    listPaddingRight: b,
                    itemNodeMargin: k,
                    listPadding: M,
                    gridNavigatorId: P,
                    gridNotice: L,
                    renderHeader: U
                } = e, D = i.useRef(null), j = i.useRef(null), w = i.useRef(null), B = 0 === t.length, K = (0, r.useExpressionPickerStore)(e => e.searchQuery), F = c.useStore(e => e.inspectedExpressionPosition), G = (0, o.useExpressionPickerGridWidth)({
                    gridWrapperRef: D,
                    containerWidth: d,
                    showingEmptyState: B
                }), {
                    expressionsGrid: V,
                    rowCount: H,
                    rowCountBySection: W,
                    columnCounts: q,
                    gutterWidth: Y
                } = (0, o.useExpressionGrid)({
                    categories: t,
                    collapsedCategories: n,
                    gridWidth: G,
                    listPaddingRight: b,
                    itemNodeWidth: R,
                    itemNodeMargin: k
                }), {
                    getItemProps: z,
                    getRowProps: Q,
                    gridContainerProps: X,
                    handleGridContainerKeyDown: J,
                    isUsingKeyboardNavigation: Z
                } = (0, o.useKeyboardNavigation)({
                    columnCounts: q,
                    expressionsListRef: j,
                    expressionsGrid: V,
                    onSelectItem: f,
                    store: c,
                    gridNavigatorId: P
                }), $ = i.useCallback(e => {
                    let t = V[e];
                    return g(t, Q(e), {
                        isUsingKeyboardNavigation: Z.current,
                        gutterWidth: Y,
                        rowIndex: e
                    }, t => z(e, t), t => c.setInspectedExpressionPosition(t, e))
                }, [V, z, Q, Y, Z, g, c]), ee = i.useCallback(e => null == T ? void 0 : T(t[e]), [t, T]), et = i.useCallback(e => null == v ? void 0 : v(t[e], e), [t, v]), en = i.useCallback(e => null == C ? void 0 : C(t[e]), [t, C]), el = i.useCallback(() => {
                    var e;
                    return null == y ? void 0 : y(null == V ? void 0 : null === (e = V[F.rowIndex]) || void 0 === e ? void 0 : e[F.columnIndex])
                }, [V, F.columnIndex, F.rowIndex, y]);
                i.useEffect(() => {
                    p(K)
                }, [p, K]), i.useEffect(() => c.resetStoreState, [c.resetStoreState]), i.useLayoutEffect(() => {
                    var e;
                    null === (e = w.current) || void 0 === e || e.focus()
                }, []);
                let ei = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(a.default, {
                        ref: w,
                        store: c,
                        hasSendableExpressions: !0,
                        onKeyDown: J,
                        expressionsListRef: j,
                        gridNavigatorId: P,
                        defaultSearchPlaceholder: h,
                        emptySearchPlaceholder: E
                    }), null == _ ? void 0 : _()]
                });
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != U ? U(ei) : (0, l.jsxs)("div", {
                        className: u.header,
                        children: [" ", ei, " "]
                    }), B && null != S ? S(u.emptyState) : (0, l.jsxs)(l.Fragment, {
                        children: [N(j), null != L && (0, l.jsx)("div", {
                            className: u.gridNoticeWrapper,
                            children: L
                        }), (0, l.jsx)("div", {
                            ref: D,
                            className: u.listWrapper,
                            id: P,
                            ...X,
                            children: null != G ? (0, l.jsx)(s.default, {
                                ref: j,
                                store: c,
                                hasSearchResults: m,
                                listPadding: M,
                                renderRow: $,
                                renderSection: null != T ? ee : void 0,
                                renderSectionHeader: null != v ? et : void 0,
                                renderSectionFooter: null != C ? en : void 0,
                                renderInspector: null != y ? el : void 0,
                                renderEmptySearchState: I,
                                rowCount: H,
                                rowCountBySection: W,
                                rowHeight: x,
                                sectionHeaderHeight: A,
                                sectionFooterHeight: O
                            }) : null
                        })]
                    })]
                })
            }
        },
        794707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("124299"),
                o = n("538282"),
                s = n("45961"),
                a = n("594755");
            let u = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSearchResults: u,
                    listPadding: d,
                    renderRow: c,
                    renderSection: f,
                    renderSectionHeader: p,
                    renderSectionFooter: m,
                    renderInspector: h,
                    renderEmptySearchState: E,
                    rowCount: S,
                    rowCountBySection: g,
                    rowHeight: T,
                    sectionHeaderHeight: v,
                    sectionFooterHeight: C
                } = e, y = i.useRef(!1), I = i.useRef(null), N = (0, o.useExpressionPickerStore)(e => e.searchQuery), _ = n.useStore(e => e.activeCategoryIndex), x = (0, s.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: _,
                    isScrolling: y,
                    listRef: I,
                    onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                    scrollOffset: 20,
                    searchQuery: N
                });
                return (0, s.useSynchronizedScrollPositionForActiveCategoryIndex)({
                    searchQuery: N,
                    activeCategoryIndex: _,
                    listRef: I
                }), i.useImperativeHandle(t, () => {
                    var e, t, n;
                    return {
                        scrollTo: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = I.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                        },
                        getRowDescriptors: () => {
                            var t;
                            return null !== (e = null === (t = I.current) || void 0 === t ? void 0 : t.getRowDescriptors()) && void 0 !== e ? e : []
                        },
                        getSectionDescriptors: () => {
                            var e;
                            return null !== (t = null === (e = I.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                        },
                        scrollToSectionTop: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = I.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                        },
                        scrollRowIntoView: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = I.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                        },
                        getScrollerNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = I.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                        },
                        scrollIntoViewNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = I.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                        },
                        getListDimensions: function() {
                            for (var e, t = arguments.length, l = Array(t), i = 0; i < t; i++) l[i] = arguments[i];
                            return null !== (n = null === (e = I.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== n ? n : {
                                height: -1,
                                totalHeight: -1
                            }
                        }
                    }
                }, []), (0, l.jsxs)("div", {
                    className: a.wrapper,
                    children: [N.length > 0 && !u && null != E ? E() : (0, l.jsx)(r.default, {
                        role: "none presentation",
                        listPadding: d,
                        onScroll: x,
                        renderRow: c,
                        renderSection: f,
                        renderSectionHeader: p,
                        renderSectionFooter: m,
                        rowCount: S,
                        rowCountBySection: g,
                        rowHeight: T,
                        sectionHeaderHeight: v,
                        sectionFooterHeight: C,
                        stickyHeaders: !0,
                        ref: I
                    }), null == h ? void 0 : h()]
                })
            });
            var d = u
        },
        195638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("74139"),
                s = n("137223"),
                a = n("986632"),
                u = n("538282"),
                d = n("595713");
            let c = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSendableExpressions: c,
                    onKeyDown: f,
                    gridNavigatorId: p,
                    expressionsListRef: m,
                    defaultSearchPlaceholder: h,
                    emptySearchPlaceholder: E
                } = e, S = i.useRef(null), [g, T] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], r.default), v = n.useStore(e => e.searchPlaceholder), C = n.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
                    var t;
                    n.setActiveCategoryIndex("" === e ? 0 : a.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
                }, [m, n]), I = i.useCallback(() => {
                    (0, u.setSearchQuery)("")
                }, []);
                return i.useImperativeHandle(t, () => ({
                    focus: () => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }
                })), i.useLayoutEffect(() => {
                    if (T) {
                        var e;
                        null === (e = S.current) || void 0 === e || e.focus()
                    }
                }, [T]), (0, l.jsx)("div", {
                    className: d.wrapper,
                    children: (0, l.jsx)(s.default, {
                        autoFocus: c,
                        disabled: !c,
                        query: g,
                        ref: S,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: null != v ? v : c || null == E ? h : E,
                        onClear: I,
                        onKeyDown: f,
                        onQueryChange: y,
                        className: d.searchBar,
                        preventEscapePropagation: !1,
                        useKeyboardNavigation: !1,
                        inputProps: {
                            "aria-haspopup": "grid",
                            "aria-controls": p,
                            "aria-expanded": !0,
                            "aria-activedescendant": (0, o.makeGridId)(p, C.columnIndex, C.rowIndex)
                        }
                    })
                })
            });
            var f = c
        },
        510500: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStickerSuggestionResults: function() {
                    return S
                },
                useTextChangeHandler: function() {
                    return g
                }
            });
            var l = n("884691"),
                i = n("483366"),
                r = n.n(i),
                o = n("446674"),
                s = n("866353"),
                a = n("467094"),
                u = n("256860"),
                d = n("364685"),
                c = n("697218"),
                f = n("25292"),
                p = n("117362"),
                m = n("171209"),
                h = n("721423");
            let E = (0, p.promiseThrottle)(a.fetchStickerPacks, h.REQUEST_THROTTLE_DURATION_MS),
                S = (e, t, n) => {
                    let i = (0, u.useHasSendableSticker)(n),
                        r = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                        a = l.useMemo(() => {
                            let l = (0, m.getQueriesFromUserInput)(e);
                            if (t || null == e || "" === e || l.length > h.MAX_NUM_USER_INPUT_WORDS || !i) return [];
                            let o = [],
                                a = [],
                                u = (0, m.removePunctuation)(e),
                                d = u === l[0] ? l : [u, ...l],
                                c = f.default.queryStickers(d, !1);
                            c.forEach(e => {
                                let {
                                    sticker: t
                                } = e, l = (0, s.getStickerSendability)(t, r, n), i = {
                                    sticker: t,
                                    sendability: l
                                };
                                l === s.StickerSendability.SENDABLE ? o.push(i) : l === s.StickerSendability.SENDABLE_WITH_PREMIUM && a.push(i)
                            });
                            let p = [];
                            return o.length > 0 && (p = o.slice(0, h.MAX_NUM_SUGGESTED_STICKERS), 0 !== a.length && (p.length === h.MAX_NUM_SUGGESTED_STICKERS && p.pop(), p.push(a[0]))), p
                        }, [e, n, i, t, r]);
                    return a
                },
                g = e => {
                    let {
                        setTextInputValue: t,
                        setHasDismissed: n,
                        setHasSelection: i,
                        setFocusedSuggestionType: o,
                        delayBeforeSuggestions: s
                    } = e, a = l.useRef(null), u = l.useRef(!1), c = l.useRef(!1), f = l.useMemo(() => r(t, null != s ? s : h.DELAY_BEFORE_SUGGESTIONS_MS), [t, s]), p = async e => {
                        var l;
                        if (null == e || "" === e) f.cancel(), null == t || t(""), null == n || n(!1), null == i || i(!1), null == o || o(null), a.current = null, u.current = !1;
                        else if (!u.current && e.trim() !== (null === (l = a.current) || void 0 === l ? void 0 : l.trim())) {
                            if (a.current = e, (0, m.getQueriesFromUserInput)(e).length > h.MAX_NUM_USER_INPUT_WORDS) {
                                u.current = !0, f.cancel(), t("");
                                return
                            }
                            if (!0 === c.current) return;
                            !d.default.hasLoadedStickerPacks && (c.current = !0, await E(), c.current = !1), f(a.current)
                        }
                    };
                    return {
                        handleTextChange: p,
                        debouncedSetTextInputValue: f
                    }
                }
        },
        292936: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            });
            var l, i, r = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("974667"),
                d = n("942367"),
                c = n("617258"),
                f = n("769846"),
                p = n("77078"),
                m = n("812204"),
                h = n("685665"),
                E = n("200197"),
                S = n("538282"),
                g = n("866353"),
                T = n("364685"),
                v = n("161585"),
                C = n("24373"),
                y = n("41170"),
                I = n("591522"),
                N = n("209069"),
                _ = n("845579"),
                x = n("945330"),
                A = n("587974"),
                O = n("599110"),
                R = n("510500"),
                b = n("171209"),
                k = n("49111"),
                M = n("782340"),
                P = n("612729");
            let L = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
                U = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
                D = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN),
                j = 2 * U + D + 2 * L,
                w = () => Promise.resolve();

            function B(e) {
                let {
                    isFocused: t,
                    isHidden: n,
                    sendability: l,
                    listIndex: i,
                    sticker: o,
                    onMouseOver: s,
                    onSelectSticker: d
                } = e, {
                    tabIndex: c,
                    ...f
                } = (0, u.useListItem)("".concat(i));
                return (0, r.jsxs)(p.Clickable, {
                    ...f,
                    tabIndex: n ? -1 : c,
                    className: a(P.suggestedExpression, {
                        [P.suggestedExpressionFocused]: t
                    }),
                    focusProps: {
                        enabled: !1
                    },
                    onClick: () => d(o, l),
                    onMouseOver: s,
                    children: [(0, r.jsx)(A.default, {
                        mask: A.default.Masks.STICKER_ROUNDED_RECT,
                        width: U + 4,
                        height: U + 4,
                        className: P.mask,
                        children: (0, r.jsx)("div", {
                            className: P.maskBackground
                        })
                    }), (0, r.jsx)(y.default, {
                        maskAsset: !0,
                        size: U,
                        sticker: o,
                        className: P.sticker
                    }), l !== g.StickerSendability.SENDABLE && (0, r.jsx)(I.default, {
                        size: 14
                    })]
                })
            }(l = i || (i = {}))[l.STICKER = 0] = "STICKER";
            var K = o.memo(function(e) {
                var t;
                let {
                    editorRef: n,
                    channel: l,
                    isEditorFocused: s,
                    onSelectSticker: c,
                    stickerIconVisible: f = !1,
                    submitButtonVisible: y = !1
                } = e, I = o.useContext(E.default), [A, L] = o.useState(null), [U, D] = o.useState(!1), [K, F] = o.useState(null), G = (0, S.useExpressionPickerStore)(e => null != e.activeView), V = o.useRef(null), [H, W] = o.useState(""), [q, Y] = o.useState(""), [z, Q] = o.useState(!1), [X, J] = o.useState(!1), Z = (0, R.useStickerSuggestionResults)(H, U, l), {
                    analyticsLocations: $,
                    AnalyticsLocationProvider: ee
                } = (0, h.default)(m.default.EXPRESSION_SUGGESTIONS), {
                    handleTextChange: et,
                    debouncedSetTextInputValue: en
                } = (0, R.useTextChangeHandler)({
                    setTextInputValue: W,
                    setHasDismissed: D,
                    setHasSelection: J,
                    setFocusedSuggestionType: L
                });
                o.useEffect(() => {
                    let e = e => {
                            Q(e)
                        },
                        t = e => {
                            let t = "" !== e && null != e;
                            if (J(t), t) {
                                var l;
                                L(null), null === (l = n.current) || void 0 === l || l.focus()
                            }
                        };
                    return I.addListener("text-changed", et), I.addListener("autocomplete-visibility-change", e), I.addListener("selection-changed", t), () => {
                        I.removeListener("text-changed", et), I.removeListener("autocomplete-visibility-change", e), I.removeListener("selection-changed", t)
                    }
                }, [et, n, I]), o.useLayoutEffect(() => {
                    null == A && F(null)
                }, [A]);
                let [el, ei] = o.useState(!1);
                o.useLayoutEffect(() => {
                    requestAnimationFrame(() => {
                        let e = V.current;
                        ei(s || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
                    })
                }, [s]);
                let er = Z.length > 0,
                    eo = el && !G && !z && !U && !X && er,
                    {
                        stickersNavigator: es
                    } = function(e) {
                        let {
                            editorRef: t,
                            hasStickerResults: n,
                            shouldRenderSuggestions: l,
                            focusedSuggestionType: r,
                            setFocusedStickerListItem: s,
                            setFocusedSuggestionType: a,
                            setHasDismissed: c,
                            setTextInputValue: f
                        } = e, p = o.useCallback((e, t) => {
                            s(t)
                        }, [s]), m = (0, u.default)({
                            id: "expression-suggestions-stickers",
                            isEnabled: !0,
                            scrollToStart: w,
                            scrollToEnd: w,
                            orientation: d.Orientations.HORIZONTAL,
                            setFocus: p,
                            useVirtualFocus: !0
                        });
                        return o.useEffect(() => {
                            let e = e => {
                                var o, s;
                                if (l && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                                    switch (e.key) {
                                        case "ArrowUp":
                                            e.preventDefault(), null == r && n && (m.focusFirstVisibleItem(), a(i.STICKER));
                                            break;
                                        case "ArrowDown":
                                            a(null), null === (o = t.current) || void 0 === o || o.focus();
                                            break;
                                        case "Escape":
                                            a(null), c(!0), f(""), null === (s = t.current) || void 0 === s || s.focus()
                                    }
                                    r === i.STICKER && m.containerProps.onKeyDown(e)
                                }
                            };
                            return window.addEventListener("keydown", e, {
                                capture: !0
                            }), () => window.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [m, l, r, a, n, t, c, s, f]), {
                            stickersNavigator: m
                        }
                    }({
                        editorRef: n,
                        hasStickerResults: er,
                        shouldRenderSuggestions: eo,
                        focusedSuggestionType: A,
                        setFocusedSuggestionType: L,
                        setHasDismissed: D,
                        setFocusedStickerListItem: F,
                        setTextInputValue: W
                    }),
                    ea = (e, t) => {
                        if (eo) {
                            if (O.default.track(k.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                                    sticker_id: e.id,
                                    suggestion_trigger: q
                                }), t === g.StickerSendability.SENDABLE) D(!0), c(e, v.StickerSelectLocation.EXPRESSION_SUGGESTIONS), en.cancel(), W("");
                            else if ((0, C.isStandardSticker)(e)) {
                                let t = T.default.getStickerPack(e.pack_id);
                                null != t && (0, N.default)({
                                    stickerPack: t,
                                    analyticsLocations: $
                                })
                            }
                            I.emit("sticker-suggestions-hidden")
                        }
                    },
                    eu = o.useRef([]),
                    ed = o.useRef(!1);
                o.useEffect(() => {
                    eo && (eu.current = Z), eo !== ed.current && (I.emit(eo ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), eo && ((0, b.throttledTrackExpressionSuggestionDisplayed)(H), Y(H))), ed.current = eo
                }, [I, eo, Z, H]);
                let ec = !eo,
                    ef = eo ? Z : eu.current;
                return (0, r.jsx)(ee, {
                    children: (0, r.jsxs)(p.Clickable, {
                        tabIndex: ec ? -1 : 0,
                        "aria-hidden": ec,
                        className: a(P.container, {
                            [P.hidden]: ec,
                            [P.submitButtonOffset]: y,
                            [P.stickerIconOffset]: f
                        }),
                        innerRef: V,
                        style: {
                            minWidth: j
                        },
                        onClick: () => {
                            var e;
                            return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                        },
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.ListNavigatorProvider, {
                                navigator: es,
                                children: (0, r.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            tabIndex: n,
                                            ...l
                                        } = e;
                                        return (0, r.jsx)("div", {
                                            className: P.stickerResults,
                                            ref: e => {
                                                t.current = e
                                            },
                                            onMouseLeave: () => {
                                                null == A && F(null)
                                            },
                                            tabIndex: ec ? -1 : n,
                                            ...l,
                                            children: ef.map((e, t) => {
                                                let {
                                                    sticker: n,
                                                    sendability: l
                                                } = e;
                                                return (0, r.jsx)(B, {
                                                    isFocused: K === "".concat(t),
                                                    isHidden: ec,
                                                    sendability: l,
                                                    listIndex: t,
                                                    onMouseOver: () => {
                                                        es.setFocus("".concat(t)), F("".concat(t))
                                                    },
                                                    onSelectSticker: ea,
                                                    sticker: n
                                                }, n.id)
                                            })
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("div", {
                                className: P.bottomInformationTextContainer,
                                children: [(0, r.jsx)("div", {
                                    className: P.textDivider
                                }), (0, r.jsxs)("div", {
                                    className: P.bottomInformationLayout,
                                    children: [(0, r.jsx)(p.Text, {
                                        className: P.descriptionText,
                                        style: {
                                            maxWidth: j
                                        },
                                        variant: "text-sm/normal",
                                        children: null != K ? M.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                            stickerName: null === (t = Z[+K]) || void 0 === t ? void 0 : t.sticker.name
                                        }) : M.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                            upHook: (e, t) => (0, r.jsx)(p.KeyCombo, {
                                                shortcut: "up",
                                                className: P.keybind
                                            }, t)
                                        })
                                    }), (0, r.jsx)(p.Clickable, {
                                        onClick: () => {
                                            O.default.track(k.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                enabled: !1,
                                                location: {
                                                    section: k.AnalyticsSections.EXPRESSION_PICKER
                                                }
                                            }), _.ExpressionSuggestionsEnabled.updateSetting(!1)
                                        },
                                        children: (0, r.jsx)(p.Tooltip, {
                                            text: M.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                            children: e => (0, r.jsx)(x.default, {
                                                ...e,
                                                className: P.closeIcon
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: P.containerBackground
                        })]
                    })
                })
            })
        },
        558901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("280214"),
                s = n("271938"),
                a = n("18494"),
                u = n("943551"),
                d = n("232268"),
                c = n("798592"),
                f = n("39141"),
                p = n("172858");

            function m(e) {
                var t, n;
                let {
                    editorHeight: l,
                    textValue: d
                } = e, f = i.useRef(d), m = (0, o.useChannelAutocompleteLayerPosition)({
                    editorHeight: l
                }), h = (0, c.default)(), E = (0, r.useStateFromStores)([u.default, s.default, a.default], () => {
                    var e;
                    return u.default.isComboing(s.default.getId(), null !== (e = a.default.getChannelId()) && void 0 !== e ? e : "")
                }), S = null !== (t = null == m ? void 0 : m.left) && void 0 !== t ? t : 0, g = (null !== (n = null == m ? void 0 : m.top) && void 0 !== n ? n : 0) - 16, T = i.useMemo(() => .05 > Math.random(), [0 === d.length]);
                return i.useEffect(() => {
                    0 !== d.length && d !== f.current && E && (h.fire(S, g, T ? {
                        sprite: p.DUCK_CONFETTI_SPRITE
                    } : null), f.current = d)
                }, [d, E, S, g, T, h]), null
            }

            function h(e) {
                return (0, l.jsx)(d.default, {
                    confettiLocation: f.ConfettiLocation.CHAT_INPUT,
                    children: (0, l.jsx)(m, {
                        ...e
                    })
                })
            }
        },
        488705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("866227"),
                a = n.n(s),
                u = n("442761"),
                d = n("77078"),
                c = n("54239"),
                f = n("812204"),
                p = n("685665"),
                m = n("599110"),
                h = n("888400"),
                E = n("701909"),
                S = n("179935"),
                g = n("166960"),
                T = n("646718"),
                v = n("49111"),
                C = n("782340"),
                y = n("503330"),
                I = n("278410"),
                N = n("410957"),
                _ = n("730708"),
                x = n("754702");
            let A = async (e, t, n) => {
                n(!0), await (0, S.createReferralTrial)(e).then(() => {
                    t(), (0, c.popAllLayers)()
                }).finally(() => {
                    n(!1)
                })
            }, O = e => {
                let {
                    onClose: t,
                    referralsRemaining: n,
                    recipient: r,
                    analyticsLocations: s,
                    shouldShowBirthdayUX: a
                } = e, [u, c] = i.useState(!1), f = n - 1;
                return (0, l.jsxs)("div", {
                    className: y.confirmationContainer,
                    children: [(0, l.jsxs)("div", {
                        className: o({
                            [y.confirmationBody]: !a,
                            [y.confirmationBirthdayBody]: a
                        }),
                        children: [(0, l.jsx)(d.ModalCloseButton, {
                            onClick: t,
                            className: y.closeButton
                        }), (0, l.jsx)("img", {
                            alt: "",
                            src: a ? N : _,
                            className: y.confirmationImage
                        }), (0, l.jsx)(d.Heading, {
                            variant: "heading-xl/bold",
                            color: "interactive-active",
                            className: y.confirmationHeading,
                            children: C.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                        }), (0, l.jsx)(d.Text, {
                            className: y.confirmationBodyCopy,
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: f > 0 ? C.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                                count: f
                            }) : C.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                        }), (0, l.jsx)("hr", {
                            className: y.confirmationBodySeparator
                        })]
                    }), (0, l.jsxs)("div", {
                        className: y.confirmationButtonContainer,
                        children: [(0, l.jsx)(d.Button, {
                            className: y.confirmationShareButton,
                            submitting: u,
                            onClick: () => {
                                A(r, t, c), m.default.track(v.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: s,
                                    step: T.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                                    other_user_id: Number(r)
                                })
                            },
                            children: C.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                        }), (0, l.jsx)("div", {
                            className: y.confirmationCancelButtonContainer,
                            children: (0, l.jsx)(d.Clickable, {
                                onClick: t,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    className: y.confirmationCancelCopy,
                                    children: C.default.Messages.CANCEL
                                })
                            })
                        })]
                    })]
                })
            };

            function R(e) {
                let {
                    referralsRemaining: t,
                    channel: n,
                    onClose: r,
                    isResending: s
                } = e, [u, c] = i.useState(!1), [S, _] = i.useState(!1), R = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
                    analyticsLocations: b
                } = (0, p.default)(f.default.REFERRAL_TRIALS_POPOUT), {
                    enabled: k
                } = g.default.useExperiment({
                    location: "200c24_1"
                }, {
                    autoTrackExposure: !0
                }), M = new Date("2023-06-15T08:00:00-08:00");
                return null == R ? null : u ? (0, l.jsx)(O, {
                    onClose: r,
                    referralsRemaining: t,
                    recipient: R,
                    analyticsLocations: b,
                    shouldShowBirthdayUX: k
                }) : (0, l.jsxs)("div", {
                    className: y.generalContainer,
                    children: [(0, l.jsxs)("div", {
                        className: y.generalBodyContainer,
                        children: [(0, l.jsx)("img", {
                            alt: "",
                            src: k ? N : x,
                            className: y.generalBodyImage
                        }), (0, l.jsxs)("div", {
                            className: y.innerContent,
                            children: [(0, l.jsx)(d.ModalCloseButton, {
                                onClick: r,
                                className: y.closeButton
                            }), (0, l.jsx)(d.Heading, {
                                className: y.generalHeading,
                                variant: "heading-xl/bold",
                                children: s ? C.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : C.default.Messages.SHARE_NITRO_MODAL_HEADER
                            }), (0, l.jsxs)(d.Text, {
                                className: y.generalBodyCopy,
                                variant: "text-md/normal",
                                children: [(0, l.jsx)(d.Anchor, {
                                    className: o(y.learnMore, {
                                        [y.learnMoreResendUnderlinedText]: s
                                    }),
                                    href: E.default.getArticleURL(v.HelpdeskArticles.SHARE_NITRO_FAQ),
                                    children: s ? C.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : C.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                        count: t
                                    })
                                }), s ? (0, l.jsx)("div", {
                                    className: y.shareNitroResendCopySuffix,
                                    children: C.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                                }) : (0, l.jsx)("div", {
                                    children: C.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                        date: (0, h.dateFormat)(a(M), "LL")
                                    })
                                })]
                            })]
                        }), k && (0, l.jsx)("img", {
                            alt: "",
                            src: I,
                            className: y.birthdayBackgroundImage
                        })]
                    }), (0, l.jsx)("div", {
                        className: y.generalButtonContainer,
                        children: (0, l.jsx)(d.Button, {
                            className: y.generalShareButton,
                            submitting: S,
                            onClick: () => {
                                s ? A(R, r, _) : (c(!0), m.default.track(v.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: b,
                                    step: T.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                                    other_user_id: Number(R)
                                }))
                            },
                            children: s ? C.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : C.default.Messages.SHARE_NITRO_BUTTON_TEXT
                        })
                    })]
                })
            }

            function b(e) {
                let {
                    shouldShowPopout: t,
                    referralsRemaining: n,
                    channel: i,
                    onClose: r,
                    isResending: o
                } = e;
                return t ? (0, l.jsx)("div", {
                    onMouseDown: e => e.stopPropagation(),
                    children: (0, l.jsx)(u.Popout, {
                        shouldShow: !0,
                        position: "top",
                        align: "center",
                        renderPopout: e => (0, l.jsx)(R, {
                            ...e,
                            referralsRemaining: n,
                            channel: i,
                            onClose: r,
                            isResending: o
                        }),
                        onRequestClose: () => void 0,
                        closeOnScroll: !1,
                        ignoreModalClicks: !0,
                        children: () => (0, l.jsx)("div", {
                            className: y.popoutTarget
                        })
                    })
                }) : null
            }
        },
        929531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("685665"),
                s = n("599110"),
                a = n("824986"),
                u = n("49111"),
                d = n("506653"),
                c = n("908324"),
                f = n("383819");
            let p = e => {
                switch (e) {
                    case a.PremiumTutorialTooltips.EMOJI_PICKER:
                        return d.emojiSparkle;
                    case a.PremiumTutorialTooltips.STICKER_PICKER:
                        return d.stickerSparkle;
                    case a.PremiumTutorialTooltips.FILE_UPLOAD:
                        return d.fileUploadSparkle;
                    case a.PremiumTutorialTooltips.BOOSTING_FLOW:
                    default:
                        return
                }
            };
            var m = e => {
                let {
                    tutorialType: t,
                    text: n,
                    unformattedText: m,
                    children: h
                } = e, [E, S] = i.useState(!1), g = t === a.PremiumTutorialTooltips.EMOJI_PICKER ? c : f, {
                    analyticsLocations: T
                } = (0, o.default)();
                return (0, l.jsx)(r.Tooltip, {
                    "aria-label": null != m ? m : n,
                    text: n,
                    position: "top",
                    tooltipContentClassName: d.tooltipText,
                    children: e => {
                        let {
                            onMouseEnter: n,
                            onMouseLeave: i
                        } = e;
                        return (0, l.jsxs)("div", {
                            onMouseEnter: () => {
                                null == n || n(), S(!0), s.default.track(u.AnalyticEvents.PREMIUM_TUTORIAL_TOOLTIP_VIEWED, {
                                    location_stack: T,
                                    feature: t
                                })
                            },
                            onMouseLeave: () => {
                                null == i || i(), S(!1)
                            },
                            children: [E && (0, l.jsx)("img", {
                                alt: "",
                                src: g,
                                className: p(t)
                            }), h]
                        })
                    }
                })
            }
        },
        262439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("448105"),
                i = n.n(l),
                r = n("385976"),
                o = n("867805"),
                s = n("389480"),
                a = n("78581");
            let u = [];

            function d(e, t, n, l) {
                if (0 === e.length) return u;
                let d = t.reduce((e, t) => {
                        for (let n of t.items) t.categoryInfo.type !== s.SoundboardSoundGridSectionType.FAVORITES && n.type === s.SoundboardSoundItemType.SOUND && e.push(n.sound);
                        return e
                    }, []),
                    c = d.reduce((t, s) => (t[s.soundId] = function(e, t, n, l) {
                        var s;
                        let u = 0,
                            d = t.name.toLocaleLowerCase(),
                            c = null != t.emojiId ? r.default.getCustomEmojiById(t.emojiId) : null,
                            f = null != t.emojiName ? o.default.convertSurrogateToName(t.emojiName, !1) : null,
                            p = null != f ? o.default.getByName(f) : null,
                            m = null != c ? [c.name] : null !== (s = null == p ? void 0 : p.names) && void 0 !== s ? s : [];
                        return e === d && (u += 8), m.includes(e) && (u += 7), d.startsWith(e) && (u += 6), m.some(t => t.startsWith(e)) && (u += 5), d.endsWith(e) && (u += 4), m.some(t => t.endsWith(e)) && (u += 3), i(e, t.name.toLocaleLowerCase()) && (u += 2), m.some(t => i(e, t)) && (u += 1), u > 0 && (0, a.canUseSoundboardSound)(n, t, l) && (u += 100), u
                    }(e.toLocaleLowerCase(), s, n, l), t), {}),
                    f = d.filter(e => c[e.soundId] > 0).sort((e, t) => c[t.soundId] - c[e.soundId]);
                return f
            }
        },
        774473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSortedGuildIdsForSoundboard: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("65597"),
                r = n("957255"),
                o = n("677099"),
                s = n("697218"),
                a = n("719923"),
                u = n("843455");

            function d(e, t) {
                var n;
                let d = (0, i.default)([s.default], () => s.default.getCurrentUser()),
                    c = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : "",
                    f = (0, i.default)([o.default], () => o.default.getFlattenedGuildIds()),
                    p = (0, i.default)([r.default], () => null == e || null == e.guild_id || r.default.can(u.Permissions.USE_EXTERNAL_SOUNDS, e)),
                    m = l.useMemo(() => {
                        if ((a.default.canUseSoundboardEverywhere(d) || !t) && p) {
                            let e = "" !== c,
                                t = e ? f.filter(e => e !== c) : f;
                            return e && t.unshift(c), t
                        }
                        return [c]
                    }, [d, t, c, f, p]);
                return m
            }
        },
        557585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                useSearchCategories: function() {
                    return g
                }
            });
            var l = n("884691"),
                i = n("249654"),
                r = n("446674"),
                o = n("817963"),
                s = n("305961"),
                a = n("957255"),
                u = n("697218"),
                d = n("719923"),
                c = n("235004"),
                f = n("389480"),
                p = n("774473"),
                m = n("846325");

            function h(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e.map(e => ({
                        type: f.SoundboardSoundItemType.SOUND,
                        sound: e
                    }));
                return t ? n.sort((e, t) => i.default.compare(e.sound.soundId, t.sound.soundId)) : n
            }

            function E(e, t) {
                e.push({
                    key: f.SoundboardSoundGridSectionType.DEFAULTS,
                    categoryInfo: {
                        type: f.SoundboardSoundGridSectionType.DEFAULTS
                    },
                    items: h(t)
                })
            }

            function S(e) {
                var t;
                let {
                    filterOutEmptyCurrentGuild: n = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], S = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), [g, T, v, C] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.getSounds(), c.default.getFavorites(), null !== (t = c.default.getDefaultSounds()) && void 0 !== t ? t : m.EMPTY_SOUND_LIST, c.default.isFetching()]), y = (0, p.useSortedGuildIdsForSoundboard)(e, !1), I = (0, r.useStateFromStoresArray)([s.default], () => {
                    let e = [];
                    return y.forEach(t => {
                        let n = s.default.getGuild(t);
                        null != n && e.push(n)
                    }), e
                }), N = d.default.canUseSoundboardEverywhere(S), _ = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(null == e ? void 0 : e.guild_id)), x = (0, r.useStateFromStores)([a.default], () => {
                    let {
                        canCreateExpressions: e
                    } = (0, o.getManageResourcePermissions)(_);
                    return e
                }, [_]), A = l.useMemo(() => {
                    let e = [];
                    return ! function(e, t, n, l) {
                        let i = [],
                            r = [...t, m.DEFAULT_SOUND_GUILD_ID];
                        for (let e of r) {
                            var o;
                            let t = null !== (o = n.get(e)) && void 0 !== o ? o : [];
                            for (let e of t) l.has(e.soundId) && i.push(e)
                        }
                        let s = h(i);
                        s.length > 0 && e.push({
                            key: f.SoundboardSoundGridSectionType.FAVORITES,
                            categoryInfo: {
                                type: f.SoundboardSoundGridSectionType.FAVORITES
                            },
                            items: s
                        })
                    }(e, y, g, T), ! function(e, t, n, l, i) {
                        var r;
                        if (null == t) return;
                        let o = null !== (r = l.get(t.id)) && void 0 !== r ? r : [],
                            s = h(o),
                            a = o.length < t.getMaxSoundboardSlots() && n,
                            u = 0 === s.length;
                        (a || u) && !i && s.push({
                            type: f.SoundboardSoundItemType.ADD_SOUND,
                            guild: t
                        });
                        !(i && u) && e.push({
                            categoryInfo: {
                                type: f.SoundboardSoundGridSectionType.GUILD,
                                guild: t
                            },
                            key: t.id,
                            items: s
                        })
                    }(e, _, x, g, n), !N && E(e, v), !i && ! function(e, t, n, l) {
                        for (let r of t) {
                            var i;
                            if (r.id === n) continue;
                            let t = null !== (i = l.get(r.id)) && void 0 !== i ? i : [],
                                o = h(t);
                            o.length > 0 && e.push({
                                categoryInfo: {
                                    type: f.SoundboardSoundGridSectionType.GUILD,
                                    guild: r
                                },
                                key: r.id,
                                items: o
                            })
                        }
                    }(e, I, null == _ ? void 0 : _.id, g), N && E(e, v), e
                }, [y, g, T, _, x, n, N, I, v, i]);
                return {
                    categories: A,
                    isFetching: C
                }
            }

            function g(e, t, n) {
                return l.useMemo(() => n.length > 0 ? [{
                    key: f.SoundboardSoundGridSectionType.SEARCH,
                    categoryInfo: {
                        type: f.SoundboardSoundGridSectionType.SEARCH
                    },
                    items: h(t, !1)
                }] : e, [e, n.length, t])
            }
        },
        23106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("462550"),
                o = n("235004"),
                s = n("78581"),
                a = n("520497"),
                u = n("812809");

            function d(e, t) {
                let {
                    currentPreviewRef: n
                } = l.useContext(r.default), d = (0, i.useStateFromStores)([o.default], () => o.default.isPlayingSound(e.soundId), [e]), c = l.useCallback(l => {
                    null != n.current && n.current.pause(), null != t && (0, s.playSound)(e, t, l)
                }, [e, n, t]), f = l.useCallback(() => {
                    let t = new Audio((0, a.default)(e.soundId));
                    null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.default)(e.volume), t.play()
                }, [e, n]);
                return l.useCallback(() => () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
                }, [n]), {
                    playSoundboardSound: c,
                    isPlayingSound: d,
                    previewSound: f
                }
            }
        },
        553372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SecondaryActionButton: function() {
                    return b
                },
                default: function() {
                    return k
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("446674"),
                u = n("862337"),
                d = n("669491"),
                c = n("77078"),
                f = n("430568"),
                p = n("206230"),
                m = n("526887"),
                h = n("697218"),
                E = n("118849"),
                S = n("671434"),
                g = n("132755"),
                T = n("151185"),
                v = n("368121"),
                C = n("305122"),
                y = n("235004"),
                I = n("389480"),
                N = n("78581"),
                _ = n("23106"),
                x = n("796864"),
                A = n("172858"),
                O = n("782340"),
                R = n("955761");

            function b(e) {
                let {
                    disabled: t = !1,
                    onClick: n,
                    text: i,
                    children: r
                } = e;
                return (0, l.jsx)(c.Tooltip, {
                    text: i,
                    children: e => (0, l.jsx)(c.Clickable, {
                        ...e,
                        "aria-label": i,
                        className: o(R.secondaryButton, {
                            [R.buttonDisabled]: t
                        }),
                        onClick: n,
                        children: r
                    })
                })
            }
            var k = i.forwardRef(function(e, t) {
                var n, r, k;
                let {
                    sound: M,
                    channel: P,
                    className: L,
                    focused: U,
                    forceSecondaryActions: D = !1,
                    interactive: j = !0,
                    enableSecondaryActions: w = !1,
                    suppressPlaySound: B,
                    onMouseEnter: K,
                    onSelectItem: F,
                    analyticsLocations: G,
                    buttonOverlay: V = I.SoundButtonOverlay.PLAY,
                    ...H
                } = e, {
                    soundId: W,
                    name: q,
                    emojiId: Y,
                    emojiName: z
                } = M, Q = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), X = (0, x.useSoundButtonContextMenu)(M, null == P ? void 0 : P.guild_id), {
                    playSoundboardSound: J,
                    previewSound: Z,
                    isPlayingSound: $
                } = (0, _.default)(M, null !== (n = null == P ? void 0 : P.id) && void 0 !== n ? n : null), {
                    createMultipleConfettiAt: ee
                } = i.useContext(m.ConfettiCannonContext), et = i.useRef(null);
                let en = (r = M.soundId, k = et.current, i.useMemo(() => {
                        if (null == k || "1" !== r) return {
                            x: 0,
                            y: 0
                        };
                        let e = k.getBoundingClientRect();
                        return {
                            x: e.left + e.width / 2,
                            y: e.top + e.height / 2
                        }
                    }, [k, r])),
                    el = (0, a.useStateFromStores)([p.default], () => p.default.useReducedMotion),
                    ei = i.useRef(.01),
                    er = i.useRef(new u.Interval),
                    eo = "1" === M.soundId,
                    es = (0, a.useStateFromStores)([y.default], () => y.default.isFavoriteSound(W), [W]),
                    ea = "sound-".concat(M.soundId),
                    eu = (0, s.useListItem)(ea),
                    ed = null != Y || null != z,
                    ec = !(0, N.canUseSoundboardSound)(Q, M, P);

                function ef(e) {
                    e.stopPropagation(), e.currentTarget.blur(), es ? (0, C.removeFavoriteSound)(W) : (0, C.addFavoriteSound)(W)
                }

                function ep(e) {
                    e.stopPropagation(), e.currentTarget.blur(), Z()
                }
                let em = D || w && !ec,
                    eh = () => (0, l.jsxs)("div", {
                        className: R.buttonOverlay,
                        children: [(0, l.jsx)("div", {
                            className: o({
                                [R.buttonOverlayBackground]: !B
                            })
                        }), (0, l.jsxs)("div", {
                            className: R.buttonOverlayActions,
                            children: [eS(), !B && (0, l.jsx)(g.default, {
                                className: R.playIcon
                            }), eE()]
                        })]
                    });

                function eE() {
                    return em ? (0, l.jsx)(b, {
                        disabled: !j && !D,
                        onClick: ef,
                        text: O.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                            emojiName: M.emojiName,
                            soundName: M.name
                        }),
                        children: es ? (0, l.jsx)(S.default, {
                            className: o(R.secondaryIcon, R.favoriteIconFavorite),
                            color: d.default.unsafe_rawColors.GOLD.css
                        }) : (0, l.jsx)(E.default, {
                            className: R.secondaryIcon
                        })
                    }) : null
                }

                function eS() {
                    return em ? (0, l.jsx)(b, {
                        disabled: !j && !D,
                        onClick: ep,
                        text: O.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                            emojiName: M.emojiName,
                            soundName: M.name
                        }),
                        children: (0, l.jsx)(v.default, {
                            className: R.secondaryIcon
                        })
                    }) : null
                }
                return i.useEffect(() => {
                    let e = er.current;
                    return eo && e.start(1e3, () => {
                        ei.current = Math.max(ei.current - .01, .01)
                    }), () => e.stop()
                }, [eo]), (0, l.jsxs)("li", {
                    ref: t,
                    className: R.soundButtonWrapper,
                    onMouseEnter: K,
                    children: [(0, l.jsxs)(c.ClickableContainer, {
                        ...H,
                        buttonProps: {
                            ...eu,
                            id: ea,
                            role: "button"
                        },
                        "aria-label": O.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                            emojiName: M.emojiName,
                            soundName: M.name
                        }),
                        className: o(L, R.soundButton, {
                            [R.playing]: $,
                            [R.hoverActiveBackground]: B,
                            [R.soundButtonInteractive]: j,
                            [R.buttonDisabled]: !j && !D,
                            [R.premiumDisabled]: ec && !D,
                            [R.buttonDisabledSecondaryActionsEnabled]: !j && D,
                            [R.focused]: j && U
                        }),
                        onClick: function() {
                            if (eo && !el && (ei.current = Math.min(ei.current + .01, .1), Math.random() < ei.current && ee(en.x, en.y, void 0, void 0, {
                                    sprite: A.DUCK_CONFETTI_SPRITE
                                })), null != F) {
                                F();
                                return
                            }
                            B || J(G)
                        },
                        onContextMenu: w && !ec ? X : void 0,
                        children: [(0, l.jsxs)("div", {
                            className: R.soundInfo,
                            "aria-hidden": !0,
                            ref: et,
                            children: [ed && (0, l.jsx)(f.default, {
                                emojiId: Y,
                                emojiName: z,
                                className: R.emoji
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: j ? "header-primary" : "text-muted",
                                className: o(R.soundName, {
                                    [R.hasEmoji]: ed
                                }),
                                children: q
                            })]
                        }), function() {
                            switch (V) {
                                case I.SoundButtonOverlay.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: R.addButtonOverlay,
                                        children: [(0, l.jsx)("div", {
                                            className: R.buttonOverlayBackground
                                        }), (0, l.jsxs)("div", {
                                            className: R.buttonOverlayActions,
                                            children: [eS(), (0, l.jsxs)("div", {
                                                className: R.addButton,
                                                children: [(0, l.jsx)(T.default, {
                                                    className: R.plusSign
                                                }), (0, l.jsx)(c.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "header-primary",
                                                    children: O.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                                })]
                                            }), eE()]
                                        })]
                                    });
                                case I.SoundButtonOverlay.PLAY:
                                default:
                                    return eh()
                            }
                        }()]
                    }), !M.available && (0, l.jsx)(c.Tooltip, {
                        text: O.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: e => (0, l.jsx)("div", {
                            className: R.unavailableTooltip,
                            ...e
                        })
                    })]
                })
            })
        },
        122557: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("817963"),
                a = n("151185"),
                u = n("569717"),
                d = n("782340"),
                c = n("231641");

            function f(e) {
                let {
                    guild: t,
                    focused: n,
                    ...i
                } = e, {
                    canCreateExpressions: f
                } = (0, s.useManageResourcePermissions)(t);
                return (0, l.jsx)(o.Tooltip, {
                    text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
                    shouldShow: !f,
                    children: e => (0, l.jsx)("li", {
                        className: c.soundButtonWrapper,
                        ...e,
                        children: (0, l.jsxs)(o.ClickableContainer, {
                            ...i,
                            "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                                guildName: t.name
                            }),
                            className: r(c.soundAddButton, {
                                [c.focused]: n,
                                [c.disabled]: !f
                            }),
                            onClick: () => (0, u.default)(t.id),
                            children: [(0, l.jsx)(a.default, {
                                className: c.soundAddIcon
                            }), (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: f ? "header-primary" : "text-muted",
                                children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                            })]
                        })
                    })
                })
            }
        },
        478477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("917764"),
                u = n("986632"),
                d = n("405607"),
                c = n("423080"),
                f = n("153769"),
                p = n("671434"),
                m = n("389480"),
                h = n("782340"),
                E = n("510585");
            let S = [8, 8, 8, 8];

            function g(e) {
                let {
                    icon: t,
                    isSelected: n,
                    onClick: i,
                    ...r
                } = e;
                return (0, l.jsx)(s.Clickable, {
                    ...r,
                    onClick: i,
                    className: o(E.categoryIcon, {
                        [E.selected]: n
                    }),
                    children: (0, l.jsx)(t, {
                        className: E.categoryIconIcon
                    })
                })
            }

            function T(e, t, n, i) {
                return (0, l.jsx)(s.Tooltip, {
                    text: function(e) {
                        switch (e.categoryInfo.type) {
                            case m.SoundboardSoundGridSectionType.FAVORITES:
                                return h.default.Messages.FAVORITES;
                            case m.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(c.GuildTooltipText, {
                                    guild: e.categoryInfo.guild,
                                    includeActivity: !1
                                });
                            case m.SoundboardSoundGridSectionType.DEFAULTS:
                                return h.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    "aria-label": function(e) {
                        switch (e.categoryInfo.type) {
                            case m.SoundboardSoundGridSectionType.FAVORITES:
                                return h.default.Messages.FAVORITES;
                            case m.SoundboardSoundGridSectionType.GUILD:
                                return e.categoryInfo.guild.name;
                            case m.SoundboardSoundGridSectionType.DEFAULTS:
                                return h.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    position: "right",
                    children: t => (function(e, t, n, i) {
                        switch (e.categoryInfo.type) {
                            case m.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, l.jsx)(g, {
                                    ...i,
                                    icon: p.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case m.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(s.Clickable, {
                                    ...i,
                                    className: E.category,
                                    onClick: t,
                                    children: (0, l.jsx)(a.default, {
                                        guild: e.categoryInfo.guild,
                                        isSelected: n
                                    })
                                }, e.key);
                            case m.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, l.jsx)(g, {
                                    ...i,
                                    icon: f.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            default:
                                return null
                        }
                    })(e, n, i, t)
                })
            }

            function v(e) {
                let {
                    soundboardListRef: t,
                    categories: n,
                    listPadding: r = S
                } = e, o = i.useRef(null);
                return (0, l.jsx)(d.default, {
                    className: E.categoryList,
                    categoryListRef: o,
                    expressionsListRef: t,
                    store: u.SoundboardPickerStore,
                    categories: n,
                    listPadding: r,
                    renderCategoryListItem: T,
                    rowCount: n.length,
                    categoryHeight: 40
                })
            }
        },
        181021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("65597"),
                r = n("151426"),
                o = n("77078"),
                s = n("430568"),
                a = n("206230"),
                u = n("10641"),
                d = n("917764"),
                c = n("538282"),
                f = n("562323"),
                p = n("305961"),
                m = n("227602"),
                h = n("471671"),
                E = n("945330"),
                S = n("95689"),
                g = n("423487"),
                T = n("773336"),
                v = n("13798"),
                C = n("235004"),
                y = n("49111"),
                I = n("782340"),
                N = n("762484");

            function _(e) {
                let {
                    soundboardSound: t,
                    closePicker: _
                } = e, x = (0, c.useExpressionPickerStore)(e => e.searchQuery), A = (0, i.default)([C.default], () => null != t && C.default.isFavoriteSound(t.soundId)), O = (0, i.default)([p.default], () => p.default.getGuild(null == t ? void 0 : t.guildId)), R = (0, i.default)([a.default], () => a.default.useReducedMotion, []), b = (0, i.default)([h.default], () => h.default.isFocused()), k = (0, i.default)([m.default], () => m.default.getKeybindForAction(y.GlobalKeybindActions.SOUNDBOARD_HOLD));
                if (null != t && x.length > 0) return (0, l.jsx)(f.default, {
                    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, l.jsx)(s.default, {
                        emojiId: t.emojiId,
                        emojiName: t.emojiName,
                        className: N.emoji
                    }) : (0, l.jsx)(S.default, {
                        className: N.emoji
                    }),
                    graphicSecondary: null != O ? (0, l.jsx)(d.default, {
                        guild: O,
                        shouldAnimate: !R && b
                    }) : null,
                    titlePrimary: t.name,
                    titleSecondary: null == O ? void 0 : O.name,
                    isFavorite: A
                });
                let M = () => {
                        _(), (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("644926").then(n.bind(n, "644926"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    P = (0, u.isDismissibleContentDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                    L = null != k && (0, T.isWindows)() && !P ? I.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                        keybind: (0, v.toString)(k.shortcut, !0),
                        openSettingsHook: (e, t) => (0, l.jsx)(o.Anchor, {
                            onClick: M,
                            children: e
                        }, t)
                    }) : null;
                return null == L ? null : (0, l.jsxs)("div", {
                    className: N.keybindHint,
                    children: [(0, l.jsx)(g.default, {
                        className: N.warningIcon
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        className: N.keybindHintText,
                        children: L
                    }), (0, l.jsx)(o.Clickable, {
                        className: N.closeButton,
                        onClick: () => (0, u.markDismissibleContentAsDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                        children: (0, l.jsx)(E.default, {
                            width: 16,
                            height: 16
                        })
                    })]
                })
            }
        },
        299069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("819855"),
                a = n("77078"),
                u = n("997289"),
                d = n("841098"),
                c = n("812204"),
                f = n("685665"),
                p = n("626301"),
                m = n("635956"),
                h = n("599110"),
                E = n("719923"),
                S = n("49111"),
                g = n("646718"),
                T = n("782340"),
                v = n("665946"),
                C = n("350028");

            function y(e) {
                let {
                    onClose: t,
                    closePopout: r
                } = e, y = (0, d.default)(), [I, N] = i.useState(!1), {
                    location: _
                } = (0, u.useAnalyticsContext)(), x = i.useMemo(() => ({
                    ..._,
                    section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
                }), [_]), {
                    analyticsLocations: A
                } = (0, f.default)(c.default.PREMIUM_UPSELL), O = (0, s.isThemeLight)(y) ? n("602291") : n("609708");
                i.useEffect(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: g.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                        is_external: !0,
                        location: {
                            ...x,
                            object: S.AnalyticsObjects.SOUNDBOARD_SOUND
                        },
                        location_stack: A,
                        sku_id: E.default.getSkuIdForPremiumType(g.PremiumTypes.TIER_2)
                    })
                }, [A, x]);
                let R = i.useCallback(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
                    }), (0, p.navigateToPremiumMarketingPage)(), r()
                }, [r]);
                return (0, l.jsxs)("div", {
                    className: o(C.premiumPromo, v.container),
                    children: [(0, l.jsx)(a.Clickable, {
                        className: C.premiumPromoClose,
                        onClick: t,
                        children: T.default.Messages.CLOSE
                    }), (0, l.jsx)("img", {
                        "aria-hidden": !0,
                        alt: "",
                        className: o(C.premiumPromoImage, C.premiumPromoImageSmaller, v.image),
                        src: O
                    }), (0, l.jsx)(a.Heading, {
                        variant: "heading-lg/normal",
                        color: "header-primary",
                        className: C.premiumPromoTitle,
                        children: T.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: C.premiumPromoDescription,
                        children: T.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                            onClick: R
                        })
                    }), (0, l.jsx)(m.default, {
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        submitting: I,
                        premiumModalAnalyticsLocation: {
                            section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                            object: S.AnalyticsObjects.BUTTON_CTA
                        },
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.GREEN,
                        onClick: () => {
                            N(!0)
                        },
                        onSubscribeModalClose: e => {
                            N(!1), e && t()
                        }
                    })]
                })
            }
        },
        534108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("272030"),
                d = n("96386"),
                c = n("685665"),
                f = n("917764"),
                p = n("986632"),
                m = n("538282"),
                h = n("522096"),
                E = n("845579"),
                S = n("697218"),
                g = n("800762"),
                T = n("476765"),
                v = n("461380"),
                C = n("153769"),
                y = n("671434"),
                I = n("229915"),
                N = n("368121"),
                _ = n("719923"),
                x = n("389480"),
                A = n("78581"),
                O = n("262439"),
                R = n("557585"),
                b = n("553372"),
                k = n("122557"),
                M = n("478477"),
                P = n("181021"),
                L = n("299069"),
                U = n("569717"),
                D = n("782340"),
                j = n("872759");
            let w = [8, 0, 8, 8];

            function B(e) {
                return 0 === e ? 16 : 32
            }

            function K(e) {
                let {
                    categoryInfo: t,
                    collapsed: n,
                    toggleCollapsed: i,
                    index: r
                } = e;
                return (0, l.jsxs)(a.Clickable, {
                    className: o(j.sectionHeader, {
                        [j.notFirstSectionHeader]: 0 !== r
                    }),
                    onClick: i,
                    children: [function() {
                        switch (t.type) {
                            case x.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, l.jsx)(y.default, {
                                    className: j.headerIcon
                                });
                            case x.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(f.default, {
                                    guild: t.guild,
                                    height: 16,
                                    width: 16
                                });
                            case x.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, l.jsx)(C.default, {
                                    className: j.headerIcon
                                });
                            case x.SoundboardSoundGridSectionType.SEARCH:
                                return (0, l.jsx)(I.default, {
                                    className: j.headerIcon
                                })
                        }
                    }(), (0, l.jsx)(a.Heading, {
                        variant: "eyebrow",
                        color: "none",
                        className: j.sectionTitle,
                        children: function() {
                            switch (t.type) {
                                case x.SoundboardSoundGridSectionType.FAVORITES:
                                    return D.default.Messages.FAVORITES;
                                case x.SoundboardSoundGridSectionType.GUILD:
                                    return t.guild.name;
                                case x.SoundboardSoundGridSectionType.DEFAULTS:
                                    return D.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                                case x.SoundboardSoundGridSectionType.SEARCH:
                                    return D.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                            }
                        }()
                    }), (0, l.jsx)(v.default, {
                        className: j.headerIcon,
                        direction: n ? v.default.Directions.RIGHT : v.default.Directions.DOWN
                    })]
                })
            }

            function F() {
                return (0, l.jsx)(d.default, {
                    message: D.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
                })
            }

            function G(e) {
                let {
                    descriptors: t,
                    soundButtonProps: n,
                    rowIndex: r,
                    isUsingKeyboardNavigation: o,
                    suppressPlaySound: s,
                    gridRowProps: a,
                    getItemProps: u,
                    onSelectItem: d,
                    onItemMouseEnter: c,
                    buttonOverlay: f
                } = e, m = p.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
                return (0, l.jsx)("ul", {
                    ...a,
                    className: j.soundRow,
                    children: t.map((e, t) => {
                        let l = "item-".concat(t),
                            a = o && m.rowIndex === r && m.columnIndex === t;
                        switch (e.item.type) {
                            case x.SoundboardSoundItemType.SOUND:
                                return (0, i.createElement)(b.default, {
                                    ...u(t),
                                    ...n,
                                    key: "".concat(l, "-").concat(e.item.sound.soundId),
                                    sound: e.item.sound,
                                    suppressPlaySound: s,
                                    focused: a,
                                    onMouseEnter: () => c(t),
                                    onSelectItem: () => d(e),
                                    enableSecondaryActions: !0,
                                    buttonOverlay: f
                                });
                            case x.SoundboardSoundItemType.ADD_SOUND:
                                return (0, i.createElement)(k.default, {
                                    ...u(t),
                                    key: l,
                                    guild: e.item.guild,
                                    focused: a
                                })
                        }
                    })
                })
            }

            function V(e) {
                var t;
                let {
                    guildId: r,
                    channel: o,
                    containerWidth: d,
                    onClose: f,
                    onSelect: v,
                    suppressPlaySound: C = !1,
                    shouldShowUpsell: y = !0,
                    gridNotice: I,
                    soundButtonOverlay: b,
                    listPadding: k,
                    renderHeader: V,
                    defaultSoundsOnly: H = !1
                } = e, {
                    analyticsLocations: W
                } = (0, c.default)(), [q, Y] = i.useState(!1), z = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), Q = (0, s.useStateFromStores)([g.default], () => g.default.getVoiceState(r, null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : "")), X = (null == Q ? void 0 : Q.selfDeaf) || (null == Q ? void 0 : Q.mute) || (null == Q ? void 0 : Q.suppress), J = (0, m.useExpressionPickerStore)(e => e.searchQuery), Z = (0, T.useUID)(), {
                    categories: $
                } = (0, R.default)(o, void 0, H), [ee, et] = i.useState([]), en = (0, R.useSearchCategories)($, ee, J), el = E.SoundboardPickerCollapsedSections.useSetting(), ei = i.useMemo(() => new Set(el), [el]), er = null == o, eo = _.default.canUseCustomCallSounds(z), es = i.useCallback(e => {
                    let t = !ei.has(e);
                    t ? ei.add(e) : ei.delete(e), E.SoundboardPickerCollapsedSections.updateSetting(Array.from(ei))
                }, [ei]), ea = i.useCallback((e, t, n) => {
                    if (!C && (0, A.canUseSoundboardSound)(z, e, o, !1)) {
                        var l;
                        (0, A.playSound)(e, null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : "", n)
                    } else {
                        if ((0, A.canUseSoundboardSound)(z, e, o)) return;
                        y && Y(!0)
                    }
                }, [C, z, o, y]), eu = i.useCallback(e => {
                    switch (e.item.type) {
                        case x.SoundboardSoundItemType.SOUND:
                            return null == v || v(e.item.sound), ea(e.item.sound, r, W);
                        case x.SoundboardSoundItemType.ADD_SOUND:
                            return (0, U.default)(e.item.guild.id)
                    }
                }, [W, r, ea, v]), ed = i.useCallback((e, t, n, i, r) => (0, l.jsx)(G, {
                    descriptors: e,
                    rowIndex: n.rowIndex,
                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                    gridRowProps: t,
                    getItemProps: i,
                    onItemMouseEnter: r,
                    suppressPlaySound: C,
                    onSelectItem: eu,
                    soundButtonProps: {
                        channel: o,
                        interactive: er ? eo : !X,
                        forceSecondaryActions: er,
                        analyticsLocations: W
                    },
                    buttonOverlay: b
                }, "row-".concat(t["aria-rowindex"])), [eu, o, X, C, W, er, eo, b]), ec = i.useCallback((e, t) => {
                    let n = "".concat(e.key);
                    return (0, l.jsx)(K, {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => es(n),
                        collapsed: ei.has(n),
                        index: t
                    }, "header-".concat(n))
                }, [ei, es]), ef = i.useCallback(e => et((0, O.default)(e, $, z, o)), [o, z, $]), ep = i.useCallback(e => {
                    (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136137").then(n.bind(n, "136137"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                }, []), em = i.useCallback(() => (0, l.jsx)(a.Clickable, {
                    tabIndex: 0,
                    className: j.settingsClickArea,
                    onClick: ep,
                    "aria-label": D.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, l.jsx)(N.default, {
                        className: j.settingsIcon
                    })
                }), [ep]), eh = i.useCallback(e => (0, l.jsx)(M.default, {
                    soundboardListRef: e,
                    categories: $,
                    listPadding: k
                }), [$, k]), eE = i.useCallback(e => {
                    var t;
                    if ((null == e ? void 0 : e.item.type) === x.SoundboardSoundItemType.SOUND) return (0, l.jsx)(P.default, {
                        closePicker: f,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                    return null
                }, [f]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [q && (0, l.jsx)(L.default, {
                        onClose: () => Y(!1),
                        closePopout: f
                    }), (0, l.jsx)(h.default, {
                        categories: en,
                        collapsedCategories: ei,
                        containerWidth: d,
                        store: p.SoundboardPickerStore,
                        onSelectItem: eu,
                        onSearchExpressions: ef,
                        hasSearchResults: ee.length > 0,
                        defaultSearchPlaceholder: D.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                        renderRow: ed,
                        renderSectionHeader: ec,
                        renderCategoryList: eh,
                        renderHeaderAccessories: em,
                        rowHeight: 48,
                        sectionHeaderHeight: B,
                        listPadding: w,
                        itemNodeWidth: 150,
                        gridNavigatorId: Z,
                        renderEmptySearchState: F,
                        renderInspector: eE,
                        gridNotice: I,
                        renderHeader: V
                    })]
                })
            }
        },
        191191: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("759843"),
                a = n("446674"),
                u = n("77078"),
                d = n("812204"),
                c = n("685665"),
                f = n("428958"),
                p = n("538282"),
                m = n("872173"),
                h = n("945956"),
                E = n("305122"),
                S = n("235004"),
                g = n("534108"),
                T = n("808910");

            function v(e) {
                let {
                    guildId: t,
                    channel: n,
                    containerWidth: r,
                    onClose: v,
                    onSelect: C,
                    analyticsSource: y,
                    suppressPlaySound: I,
                    shouldShowUpsell: N = !0,
                    gridNotice: _,
                    autoWidth: x = !1,
                    soundButtonOverlay: A,
                    listPadding: O,
                    renderHeader: R,
                    defaultSoundsOnly: b
                } = e, k = (0, a.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), M = (0, a.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
                    AnalyticsLocationProvider: P
                } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
                return (0, f.default)({
                    type: s.ImpressionTypes.POPOUT,
                    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: y,
                        guild_id: t,
                        media_session_id: M
                    }
                }), i.useEffect(() => {
                    E.maybeFetchSoundboardSounds(), m.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, p.setSearchQuery)("")
                }, []), (0, l.jsx)(P, {
                    children: (0, l.jsx)("div", {
                        className: o(T.picker, {
                            [T.fetching]: k,
                            [T.autoWidth]: x
                        }),
                        children: k ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(g.default, {
                            guildId: t,
                            channel: n,
                            onClose: v,
                            onSelect: C,
                            containerWidth: r,
                            suppressPlaySound: I,
                            shouldShowUpsell: N,
                            gridNotice: _,
                            soundButtonOverlay: A,
                            listPadding: O,
                            renderHeader: R,
                            defaultSoundsOnly: b
                        })
                    })
                })
            }
        },
        796864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSoundButtonContextMenu: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("272030"),
                o = n("305961"),
                s = n("697218"),
                a = n("78581");

            function u(e, t) {
                return i.useCallback(i => {
                    i.stopPropagation();
                    let u = o.default.getGuild(e.guildId),
                        d = s.default.getCurrentUser();
                    (null != u || (0, a.canUseCustomCallSounds)(d, !1)) && ! function(e, t, i, o) {
                        let u = s.default.getCurrentUser();
                        (null != t || (0, a.canUseCustomCallSounds)(u, !1)) && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("632507").then(n.bind(n, "632507"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                soundGuild: t,
                                activeCallGuildId: o,
                                sound: i
                            })
                        })
                    }(i, u, e, t)
                }, [e, t])
            }
        },
        569717: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("592407"),
                o = n("49111");

            function s(e) {
                r.default.open(e, o.GuildSettingsSections.SOUNDBOARD), (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("823749").then(n.bind(n, "823749"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }
        },
        570759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setShowPremiumUpsell: function() {
                    return o
                },
                useStickerPickerUpsellStore: function() {
                    return s
                }
            });
            var l = n("308503");
            let i = Object.freeze({
                    showPremiumUpsell: !1
                }),
                r = (0, l.default)(e => i),
                o = e => {
                    r.setState({
                        showPremiumUpsell: e
                    })
                },
                s = r
        },
        178207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackStickerPickerOpen: function() {
                    return u
                },
                trackStickerFavorited: function() {
                    return d
                },
                trackStickerSearchStart: function() {
                    return c
                },
                trackStickerSearchResultsViewed: function() {
                    return f
                },
                trackStickerSearchSelect: function() {
                    return p
                },
                trackStickerSelect: function() {
                    return m
                },
                trackStickerSearchEmpty: function() {
                    return h
                }
            });
            var l = n("716241"),
                i = n("599110"),
                r = n("161585"),
                o = n("49111"),
                s = n("13030"),
                a = n("646718");
            let u = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: i,
                        guildStickers: a,
                        stickersTotal: u
                    } = e;
                    l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: s.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: i.length,
                        num_custom_expressions_frecent: i.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: i.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: i.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: a.length,
                        num_custom_expressions_total: u
                    })
                },
                d = e => {
                    let t, {
                        sticker: n,
                        location: i
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: s.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                c = () => {
                    i.default.track(o.AnalyticEvents.SEARCH_STARTED, {
                        search_type: o.SearchTypes.STICKER
                    })
                },
                f = (e, t, n) => {
                    l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: o.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                p = (e, t, n) => {
                    let i;
                    let {
                        sticker: s
                    } = e;
                    s.type === r.MetaStickerType.GUILD && (i = s.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: s.id,
                        search_type: o.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: i,
                        sticker_id: s.id,
                        query: t
                    })
                },
                m = e => {
                    let t;
                    let {
                        sticker: n,
                        category: i
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: a.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: i,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                h = e => {
                    null != e && "" !== e && l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: o.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        386543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchAllStickers: function() {
                    return i
                }
            });
            var l = n("25292");
            n("866353");
            let i = e => l.default.queryStickers([e], !0).map(e => {
                let {
                    sticker: t
                } = e;
                return t
            })
        },
        585948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useKeyboardNavigation: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("880317"),
                r = n("997289"),
                o = n("246511"),
                s = n("45961");
            let a = e => {
                let {
                    columnCounts: t,
                    stickersGrid: n,
                    stickersListRef: a,
                    store: u,
                    gridNavigatorId: d,
                    setInspectedStickerPosition: c,
                    onGridItemSelect: f
                } = e, p = (0, r.useAnalyticsContext)(), m = l.useCallback(e => {
                    f(e, p)
                }, [f, p]), h = l.useCallback((e, t) => {
                    c(e, t, o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
                }, [c]), {
                    gridDispatch: E,
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: T,
                    handleGridContainerKeyDown: v,
                    isUsingKeyboardNavigation: C
                } = (0, s.useExpressionPickerGridKeyboardNavigation)({
                    columnCounts: t,
                    gridNavigatorId: d,
                    itemGrid: n,
                    itemList: a,
                    onGridNavigatorItemSelect: m,
                    onGridNavigatorPositionChange: h
                });
                return l.useEffect(() => u.useStore.subscribe(e => {
                    if (null == e) return;
                    let {
                        columnIndex: t,
                        rowIndex: n,
                        source: l
                    } = e;
                    l !== o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && E({
                        type: i.GridActionType.SET_FOCUSED_POSITION,
                        x: t,
                        y: n
                    })
                }, e => e.inspectedExpressionPosition), [E, u]), {
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: T,
                    handleGridContainerKeyDown: v,
                    isUsingKeyboardNavigation: C
                }
            }
        },
        591522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("45029"),
                r = n("826079"),
                o = e => {
                    let {
                        size: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r.unownedStickerLockContainer,
                        style: {
                            width: t,
                            height: t
                        },
                        children: (0, l.jsx)(i.default, {
                            width: 12,
                            height: 12,
                            className: r.unownedStickerLockIcon
                        })
                    })
                }
        },
        889701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("483366"),
                o = n.n(r),
                s = n("16470"),
                a = n("446674"),
                u = n("769846"),
                d = n("77078"),
                c = n("997289"),
                f = n("812204"),
                p = n("685665"),
                m = n("986632"),
                h = n("538282"),
                E = n("45961"),
                S = n("626301"),
                g = n("716849"),
                T = n("552917"),
                v = n("917247"),
                C = n("845579"),
                y = n("697218"),
                I = n("599110"),
                N = n("159885"),
                _ = n("570759"),
                x = n("866353"),
                A = n("178207"),
                O = n("256860"),
                R = n("364685"),
                b = n("161585"),
                k = n("585948"),
                M = n("234175"),
                P = n("451300"),
                L = n("668333"),
                U = n("313790"),
                D = n("908408"),
                j = n("641680"),
                w = n("560241"),
                B = n("49111"),
                K = n("642358");
            let F = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
                G = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
                V = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
                H = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
                W = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
                q = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
                Y = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
                z = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
                Q = q + 2 * z,
                X = Y + 2 * z,
                J = o(A.trackStickerSearchEmpty, 200),
                Z = o(A.trackStickerSearchResultsViewed, 200),
                $ = i.forwardRef(function(e, t) {
                    var r;
                    let {
                        containerWidth: o,
                        channel: u,
                        onSelectSticker: N,
                        closePopout: q
                    } = e, {
                        location: Y
                    } = (0, c.useAnalyticsContext)(), {
                        AnalyticsLocationProvider: z
                    } = (0, p.default)(f.default.STICKER_PICKER);
                    (0, g.useMaybeFetchPremiumLikelihood)(T.default);
                    let $ = (null === (r = (0, v.usePremiumTrialOffer)()) || void 0 === r ? void 0 : r.subscription_trial) != null,
                        ee = i.useRef(null),
                        et = i.useRef(null),
                        en = i.useRef(null),
                        el = (0, _.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
                        [ei, er] = (0, h.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], s.default),
                        eo = i.useRef("");
                    i.useImperativeHandle(t, () => ({
                        onPickerOpen: eP
                    }));
                    let es = (0, O.useFilteredStickerPackCategories)(u),
                        ea = 0 === es.filter(e => e.type !== b.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
                        eu = (0, E.useExpressionPickerGridWidth)({
                            gridWrapperRef: ee,
                            containerWidth: o,
                            showingEmptyState: ea,
                            listPaddingLeft: G,
                            listScrollbarWidth: 8
                        }),
                        ed = C.StickerPickerCollapsedSections.useSetting(),
                        ec = i.useMemo(() => new Set(ed), [ed]),
                        ef = (0, a.useStateFromStores)([y.default], () => y.default.getCurrentUser()),
                        ep = i.useMemo(() => (0, j.getFilteredStickers)(ei, ef, u), [ei, ef, u]),
                        em = (0, O.useFavoriteStickers)(),
                        eh = (0, O.useLatestFrecentStickers)(),
                        eE = (0, a.useStateFromStoresObject)([R.default], () => R.default.getAllGuildStickers()),
                        {
                            sendable: eS = [],
                            sendableWithPremium: eg = []
                        } = null != ep ? ep : {},
                        eT = eS.length + eg.length,
                        ev = i.useCallback(e => {
                            "" === ei ? (0, A.trackStickerSelect)(e) : (0, A.trackStickerSearchSelect)(e, ei, eT), N(e.sticker, b.StickerSelectLocation.STICKER_PICKER)
                        }, [N, ei, eT]),
                        eC = null != eu && eu > F,
                        {
                            rowCount: ey,
                            rowCountBySection: eI,
                            stickersGrid: eN,
                            gutterWidth: e_,
                            columnCounts: ex
                        } = (0, O.useStickersGrid)({
                            filteredStickers: ep,
                            stickersCategories: es,
                            collapsedStickersCategories: ec,
                            listWidth: eu,
                            listPaddingRight: V,
                            stickerNodeMargin: eC ? H : W,
                            stickerNodeWidth: eC ? Q : X
                        }),
                        eA = i.useCallback((e, t) => {
                            let {
                                location: i
                            } = t;
                            switch (e.type) {
                                case b.StickerGridItemTypes.CREATE_STICKER:
                                    I.default.track(B.AnalyticEvents.OPEN_MODAL, {
                                        type: B.AnalyticsSections.CREATE_STICKER_MODAL,
                                        location: Y
                                    }), (0, d.openModalLazy)(async () => {
                                        let {
                                            default: t
                                        } = await n.el("54666").then(n.bind(n, "54666"));
                                        return n => (0, l.jsx)(t, {
                                            guildId: e.guild_id,
                                            ...n
                                        })
                                    });
                                    break;
                                case b.StickerGridItemTypes.STICKER:
                                    null != e.sticker && (0, x.isSendableSticker)(e.sticker, ef, u) && ev(e)
                            }
                        }, [Y, ef, u, ev]),
                        {
                            getItemProps: eO,
                            getRowProps: eR,
                            gridContainerProps: eb,
                            handleGridContainerKeyDown: ek,
                            isUsingKeyboardNavigation: eM
                        } = (0, k.useKeyboardNavigation)({
                            columnCounts: ex,
                            stickersListRef: et,
                            stickersGrid: eN,
                            onGridItemSelect: eA,
                            store: m.StickerPickerStore,
                            setInspectedStickerPosition: m.StickerPickerStore.setInspectedExpressionPosition,
                            gridNavigatorId: w.GRID_NAVIGATOR_ID
                        });
                    i.useEffect(() => m.StickerPickerStore.resetStoreState, []);
                    let eP = () => {
                        let e = u.getGuildId(),
                            t = [];
                        if (null !== e) {
                            var n;
                            t = null !== (n = R.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
                        }
                        let l = 0;
                        null != eE && [...eE.values()].forEach(e => {
                            l += e.length
                        }), (0, A.trackStickerPickerOpen)({
                            containerWidth: o,
                            favoriteStickers: em,
                            frequentlyUsedStickers: eh,
                            guildStickers: t,
                            stickersTotal: l
                        })
                    };
                    i.useEffect(() => {
                        "" === eo.current && "" !== ei && (0, A.trackStickerSearchStart)(), eo.current = ei
                    }, [ei]), i.useEffect(() => {
                        0 === eT ? J(ei) : Z(ei, eT, er)
                    }, [ei, eT, er]), i.useLayoutEffect(() => {
                        var e;
                        null === (e = en.current) || void 0 === e || e.focus()
                    }, []);
                    let eL = i.useCallback(() => {
                        q(), I.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_section: B.AnalyticsSections.STICKER_PICKER_UPSELL
                        }), (0, S.navigateToPremiumMarketingPage)()
                    }, [q]);
                    return (0, l.jsxs)(z, {
                        children: [!($ && ea) && (0, l.jsx)("div", {
                            className: K.header,
                            children: (0, l.jsx)(U.default, {
                                ref: en,
                                onKeyDown: ek,
                                stickersListRef: et,
                                channel: u
                            })
                        }), ea ? (0, l.jsx)(P.default, {
                            className: K.emptyState,
                            onClose: q
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                ref: ee,
                                className: K.listWrapper,
                                id: w.GRID_NAVIGATOR_ID,
                                ...eb,
                                children: null != eu ? (0, l.jsx)(L.default, {
                                    ref: et,
                                    collapsedStickersCategories: ec,
                                    filteredStickers: ep,
                                    getStickerItemProps: eO,
                                    getStickerRowProps: eR,
                                    gridWidth: eu,
                                    gutterWidth: e_,
                                    isUsingKeyboardNavigation: eM,
                                    onSelectSticker: ev,
                                    rowCount: ey,
                                    rowCountBySection: eI,
                                    stickersCategories: es,
                                    stickersGrid: eN,
                                    channel: u
                                }) : null
                            }), (0, l.jsx)(M.default, {
                                stickersListRef: et,
                                channel: u
                            })]
                        }), el && (0, l.jsx)(D.StickersPremiumUpsell, {
                            onLearnMore: eL
                        })]
                    })
                });
            var ee = i.forwardRef((e, t) => ((0, O.useFetchStickerPacks)(), (0, l.jsx)("div", {
                className: K.wrapper,
                id: w.STICKER_PICKER_TAB_PANEL_ID,
                "aria-labelledby": w.STICKER_PICKER_TAB_ID,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(d.Spinner, {
                    className: K.loadingIndicator
                }) : (0, l.jsx)($, {
                    ...e,
                    ref: t
                })
            })))
        },
        234175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("769846"),
                a = n("77078"),
                u = n("997289"),
                d = n("917764"),
                c = n("986632"),
                f = n("538282"),
                p = n("405607"),
                m = n("305961"),
                h = n("841811"),
                E = n("290581"),
                S = n("595086"),
                g = n("599110"),
                T = n("159885"),
                v = n("256860"),
                C = n("364685"),
                y = n("161585"),
                I = n("24373"),
                N = n("41170"),
                _ = n("49111"),
                x = n("13030"),
                A = n("782340"),
                O = n("75754");
            let R = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
                b = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
                k = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
                M = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
                P = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
                L = (0, T.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
                U = [R, R, R, R],
                D = (b + k) * 2 + R,
                j = P + 2 * L,
                w = e => {
                    let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: r,
                        firstStandardStickerCategoryOffsetTop: s,
                        setShouldRenderShortcut: c
                    } = e, p = (0, u.useAnalyticsContext)(), S = (0, f.useExpressionPickerStore)(e => "" !== e.searchQuery), T = i.useCallback((e, r, s) => {
                        var u, c;
                        let f;
                        let T = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === y.StickerCategoryTypes.FAVORITE,
                            v = T ? 1 : 0,
                            R = (null === (c = n[v]) || void 0 === c ? void 0 : c.type) === y.StickerCategoryTypes.RECENT,
                            k = n.length > 0,
                            P = n.length;
                        if (0 === r && T) return (0, l.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": P,
                            "aria-posinset": r,
                            children: (0, l.jsx)(a.Clickable, {
                                "aria-label": A.default.Messages.CATEGORY_FAVORITE,
                                className: o(O.stickerCategory, O.stickerCategoryGeneric, {
                                    [O.stickerCategoryGenericDisabled]: k && !T,
                                    [O.stickerCategoryGenericSelected]: !S && T && 0 === t
                                }),
                                onClick: s,
                                children: (0, l.jsx)(E.default, {
                                    className: O.stickerCategoryGenericIcon,
                                    height: M,
                                    width: M
                                })
                            })
                        }, "favorites");
                        if (r === v && R) return (0, l.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": P,
                            "aria-posinset": r,
                            children: (0, l.jsx)(a.Clickable, {
                                "aria-label": A.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                                className: o(O.stickerCategory, O.stickerCategoryGeneric, {
                                    [O.stickerCategoryGenericDisabled]: k && !R,
                                    [O.stickerCategoryGenericSelected]: !S && R && t === v
                                }),
                                onClick: s,
                                children: (0, l.jsx)(h.default, {
                                    className: O.stickerCategoryGenericIcon,
                                    height: M,
                                    width: M
                                })
                            })
                        }, "recent");
                        let L = t === r,
                            U = n[r],
                            D = n[r + 1],
                            j = null != D && U.type === y.StickerCategoryTypes.GUILD && D.type !== y.StickerCategoryTypes.GUILD,
                            w = U.type === y.StickerCategoryTypes.PACK,
                            B = "",
                            K = null;
                        if (U.type === y.StickerCategoryTypes.GUILD || U.type === y.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                            let e = m.default.getGuild(U.id);
                            null != e && (f = e.id, B = e.name, K = (0, l.jsx)(d.default, {
                                guild: e,
                                isSelected: L
                            }))
                        } else if (w) {
                            let e = C.default.getStickerPack(U.id);
                            null != e && (B = e.name, K = (0, l.jsx)(N.default, {
                                disableAnimation: !L || S,
                                size: b,
                                sticker: (0, I.getStickerPackPreviewSticker)(e)
                            }))
                        }
                        return (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(a.Tooltip, {
                                position: "right",
                                text: B,
                                tooltipContentClassName: O.tooltip,
                                children: e => (0, l.jsx)("div", {
                                    role: "listitem",
                                    "aria-setsize": P,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(a.Clickable, {
                                        ...e,
                                        "aria-label": B,
                                        className: o(O.stickerCategory, {
                                            [O.firstPartyCategory]: w,
                                            [O.firstPartyCategorySelected]: !S && L && w
                                        }),
                                        onClick: () => {
                                            if (U.type === y.StickerCategoryTypes.PACK) g.default.track(_.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                location: null == p ? void 0 : p.location,
                                                tab: x.ExpressionPickerViewType.STICKER,
                                                sticker_pack_id: U.id,
                                                guild_id: f
                                            });
                                            s()
                                        },
                                        children: K
                                    })
                                })
                            }), j ? (0, l.jsx)("hr", {
                                className: O.guildCategorySeparator
                            }, "separator") : null]
                        }, U.id)
                    }, [t, p, S, n]), v = i.useCallback((e, t) => t ? D : 0, []), R = i.useCallback((e, t) => {
                        let l = n[t],
                            i = n[t + 1],
                            r = null != i && l.type === y.StickerCategoryTypes.GUILD && i.type !== y.StickerCategoryTypes.GUILD;
                        return b + (r ? j : k)
                    }, [n]), L = i.useCallback(e => {
                        var t;
                        let n = null === (t = r.current) || void 0 === t ? void 0 : t.getListDimensions();
                        if (null == n) return;
                        let l = e + n.height,
                            i = l - P < s;
                        c(i)
                    }, [s]);
                    return {
                        getScrollOffsetForIndex: v,
                        renderCategoryListItem: T,
                        rowHeight: R,
                        onScroll: L
                    }
                };
            var B = e => {
                let {
                    stickersListRef: t,
                    channel: n
                } = e, r = i.useRef(null), [s, u] = i.useState(!0), d = c.StickerPickerStore.useStore(e => e.activeCategoryIndex), f = (0, v.useFilteredStickerPackCategories)(n), {
                    firstStandardStickerCategoryIndex: m,
                    firstStandardStickerCategoryOffsetTop: h,
                    guildCategoryCount: E,
                    hasFirstPartyStickerPacks: g
                } = i.useMemo(() => {
                    var e, t;
                    let n = f.filter(e => e.type === y.StickerCategoryTypes.GUILD).length,
                        l = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === y.StickerCategoryTypes.RECENT,
                        i = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === y.StickerCategoryTypes.FAVORITE,
                        r = n + (l ? 1 : 0) + (i ? 1 : 0),
                        o = null != f.find(e => e.type === y.StickerCategoryTypes.PACK);
                    return {
                        firstStandardStickerCategoryIndex: r + 1,
                        firstStandardStickerCategoryOffsetTop: r * (b + k) - k + j,
                        guildCategoryCount: n,
                        hasFirstPartyStickerPacks: o
                    }
                }, [f]);
                i.useLayoutEffect(() => {
                    u(E >= 7)
                }, [E]);
                let {
                    renderCategoryListItem: T,
                    rowHeight: C,
                    onScroll: I
                } = w({
                    activeIndex: d,
                    stickerPickerCategories: f,
                    categoryListRef: r,
                    firstStandardStickerCategoryOffsetTop: h,
                    setShouldRenderShortcut: u
                }), N = i.useCallback(e => {
                    var t;
                    e(m), null === (t = r.current) || void 0 === t || t.scrollTo(h)
                }, [m, h]);
                return (0, l.jsx)(p.default, {
                    className: O.categoryList,
                    categoryListRef: r,
                    expressionsListRef: t,
                    store: c.StickerPickerStore,
                    listPadding: U,
                    onScroll: I,
                    renderCategoryListItem: T,
                    rowCount: f.length,
                    categories: f,
                    categoryHeight: C,
                    children: e => g && s && (0, l.jsx)(a.Clickable, {
                        className: o(O.standardStickerShortcut, {
                            [O.invisibleShortcut]: !s
                        }),
                        onClick: () => N(e),
                        children: (0, l.jsx)(S.default, {
                            height: 24,
                            width: 24
                        })
                    })
                })
            }
        },
        801396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("997289"),
                d = n("716241"),
                c = n("685665"),
                f = n("538282"),
                p = n("379532"),
                m = n("592407"),
                h = n("817963"),
                E = n("305961"),
                S = n("326880"),
                g = n("595086"),
                T = n("427459"),
                v = n("49111"),
                C = n("944305"),
                y = n("782340"),
                I = n("12180"),
                N = e => {
                    let {
                        className: t,
                        guildId: n,
                        channel: r,
                        shouldTrackUpsellViewed: N,
                        setTrackedUpsellViewed: _
                    } = e, {
                        location: x
                    } = (0, u.useAnalyticsContext)(), {
                        analyticsLocations: A
                    } = (0, c.default)(), O = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(n)), {
                        canManageAllExpressions: R
                    } = (0, h.useManageResourcePermissions)(O), b = null != O && 0 === (0, T.getTotalStickerCountForTier)(O.premiumTier) && !O.hasFeature(v.GuildFeatures.MORE_STICKERS);
                    return (i.useEffect(() => {
                        if (R && b && N)(0, d.trackWithMetadata)(v.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                            location: x,
                            guild_id: null == O ? void 0 : O.id,
                            channel_id: null == r ? void 0 : r.id,
                            type: "Expression Picker Inline Sticker Upsell",
                            location_stack: A
                        }), _(!0)
                    }, [b, O, r, x, N, _, A, R]), null != O && R) ? b ? (0, l.jsxs)("div", {
                        className: o(I.upsell, t),
                        children: [(0, l.jsx)(S.default, {
                            className: I.icon,
                            width: 24,
                            height: 24
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: I.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                                count: (0, T.getTotalStickerCountForTier)(v.BoostedGuildTiers.TIER_1)
                            })
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, p.default)({
                                    analyticsLocations: A,
                                    analyticsSourceLocation: x,
                                    guild: O,
                                    perks: (0, C.guildBoostingPerks)()
                                })
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: o(I.upsell, t),
                        children: [(0, l.jsx)(g.default, {
                            className: I.icon,
                            width: 20,
                            height: 20
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: I.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, f.closeExpressionPicker)(), m.default.open(n, v.GuildSettingsSections.STICKERS, x)
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                        })]
                    }) : null
                }
        },
        451300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("812204"),
                d = n("685665"),
                c = n("154889"),
                f = n("917247"),
                p = n("956597"),
                m = n("599110"),
                h = n("256860"),
                E = n("364685"),
                S = n("41170"),
                g = n("281072"),
                T = n("560241"),
                v = n("49111"),
                C = n("646718"),
                y = n("782340"),
                I = n("817028");

            function N(e) {
                var t, n, r;
                let {
                    className: N,
                    onClose: _
                } = e;
                (0, h.useFetchStickerPacks)();
                let {
                    analyticsLocations: x
                } = (0, d.default)(u.default.EMPTY_STATE), A = (0, s.useStateFromStoresArray)([E.default], () => T.EMPTY_STATE_STICKERS.map(e => E.default.getStickerById(e)));
                i.useEffect(() => {
                    m.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: C.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        source: {
                            section: v.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                        },
                        location_stack: x
                    })
                }, [x]);
                let O = (0, f.usePremiumTrialOffer)(),
                    R = (0, c.usePremiumDiscountOffer)(),
                    b = null != O || null != R,
                    k = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_0;
                return (0, l.jsxs)("div", {
                    className: o(I.emptyState, N, {
                        [I.unifyTrialUpsell]: b
                    }),
                    children: [b ? (0, l.jsx)(p.default, {
                        discountOffer: R,
                        trialOffer: O,
                        onClose: _,
                        type: C.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        subscriptionTier: null !== (r = null == O ? void 0 : null === (n = O.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : C.PremiumSubscriptionSKUs.TIER_2,
                        children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.Heading, {
                            className: I.header,
                            variant: "heading-xl/semibold",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }), (0, l.jsx)(a.Text, {
                            className: I.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                        }), (0, l.jsx)("div", {
                            className: I.stickersRow,
                            children: A.filter(e => null != e).map(e => (0, l.jsx)(S.default, {
                                sticker: e,
                                className: I.sticker,
                                size: 80
                            }, null == e ? void 0 : e.id))
                        })]
                    }), !b && (0, l.jsx)(g.default, {
                        analyticsSection: v.AnalyticsSections.EXPRESSION_PICKER,
                        buttonText: b ? k ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                    })]
                })
            }
        },
        355494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("769846"),
                o = n("917764"),
                s = n("986632"),
                a = n("562323"),
                u = n("305961"),
                d = n("151185"),
                c = n("159885"),
                f = n("364685"),
                p = n("161585"),
                m = n("24373"),
                h = n("41170"),
                E = n("782340"),
                S = n("13763");
            let g = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
                T = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
                v = e => {
                    let t = null,
                        n = null;
                    if (!(0, m.isStandardSticker)(e) && !(0, m.isGuildSticker)(e) || (0, m.isGuildSticker)(e)) {
                        let i = u.default.getGuild(e.guild_id);
                        null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                            source: i.name
                        }), n = (0, l.jsx)(o.default, {
                            guild: i
                        }))
                    } else if ((0, m.isStandardSticker)(e)) {
                        let i = f.default.getStickerPack(e.pack_id);
                        null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                            source: i.name
                        }), n = (0, l.jsx)(h.default, {
                            size: T,
                            sticker: (0, m.getStickerPackPreviewSticker)(i),
                            disableAnimation: !0
                        }))
                    }
                    return {
                        title: t,
                        graphic: n
                    }
                },
                C = i.memo(function(e) {
                    let {
                        stickersGrid: t
                    } = e, n = s.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), r = i.useMemo(() => {
                        var e;
                        let {
                            rowIndex: l,
                            columnIndex: i
                        } = n, r = null === (e = t[l]) || void 0 === e ? void 0 : e[i];
                        return (null == r ? void 0 : r.type) === p.StickerGridItemTypes.CREATE_STICKER ? {
                            guild_id: r.guild_id,
                            name: r.name
                        } : (null == r ? void 0 : r.type) !== p.StickerGridItemTypes.STICKER ? null : r.sticker
                    }, [t, n]);
                    if (null == r) return null;
                    let {
                        graphic: o,
                        title: u
                    } = v(r), c = (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? (0, l.jsx)(h.default, {
                        isInteracting: !0,
                        size: g,
                        sticker: r,
                        disableAnimation: !0
                    }) : (0, l.jsx)("div", {
                        className: S.iconWrapper,
                        children: (0, l.jsx)(d.default, {
                            className: S.icon
                        })
                    });
                    return (0, l.jsx)(a.default, {
                        graphicPrimary: c,
                        graphicSecondary: o,
                        titlePrimary: r.name,
                        titleSecondary: (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? u : null
                    })
                });
            var y = C
        },
        668333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ec
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("446674"),
                s = n("769846"),
                a = n("77078"),
                u = n("96386"),
                d = n("997289"),
                c = n("812204"),
                f = n("685665"),
                p = n("917764"),
                m = n("986632"),
                h = n("538282"),
                E = n("246511"),
                S = n("45961"),
                g = n("515059"),
                T = n("845579"),
                v = n("305961"),
                C = n("697218"),
                y = n("124299"),
                I = n("841811"),
                N = n("290581"),
                _ = n("599110"),
                x = n("159885"),
                A = n("570759"),
                O = n("866353"),
                R = n("364685"),
                b = n("161585"),
                k = n("24373"),
                M = n("41170"),
                P = n("801396"),
                L = n("355494"),
                U = n("77162"),
                D = n("209069"),
                j = n("49111"),
                w = n("13030"),
                B = n("782340"),
                K = n("327518"),
                F = n("327769");
            let G = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
                V = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
                H = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
                W = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
                q = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
                Y = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
                z = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
                Q = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
                X = (0, x.cssValueToNumber)(s.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
                J = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
                Z = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
                $ = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
                ee = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
                et = J + 2 * $ + ee,
                en = Z + 2 * $ + ee,
                el = [H, q, Y, z],
                ei = [W, q, Y, z],
                er = (0, x.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
                eo = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
                es = e => {
                    let {
                        onSuggestionClick: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: K.searchSuggestions,
                        children: eo.map(e => (0, l.jsx)(a.Clickable, {
                            className: K.searchSuggestion,
                            onClick: () => t(e),
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: e
                            })
                        }, e))
                    })
                },
                ea = e => {
                    let {
                        onSelectSticker: t,
                        channel: n,
                        currentUser: l
                    } = e, r = (0, d.useAnalyticsContext)(), {
                        analyticsLocations: o
                    } = (0, f.default)(), s = (0, h.useExpressionPickerStore)(e => e.searchQuery), a = i.useCallback(e => {
                        let {
                            visibleRowIndex: t,
                            columnIndex: n,
                            gridSectionIndex: l
                        } = e;
                        m.StickerPickerStore.setActiveCategoryIndex(l), m.StickerPickerStore.setInspectedExpressionPosition(n, t, E.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === b.StickerGridItemTypes.STICKER && m.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
                    }, []), u = i.useCallback(e => {
                        if (e.type !== b.StickerGridItemTypes.STICKER) return;
                        let {
                            packId: i,
                            sticker: a,
                            type: u
                        } = e, d = {
                            ...r.location,
                            object: "" === s ? j.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : j.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                        };
                        if (null != a && !(0, O.isSendableSticker)(a, l, n)) {
                            let e = R.default.getStickerPack(i);
                            null != e && (_.default.track(j.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                                sticker_id: a.id,
                                sticker_pack_id: i,
                                location: d,
                                location_stack: o
                            }), (0, D.default)({
                                stickerPack: e,
                                analyticsLocations: o
                            }));
                            let t = (0, k.isGuildSticker)(a),
                                r = (0, O.getStickerSendability)(a, l, n);
                            r === O.StickerSendability.SENDABLE_WITH_PREMIUM && (0, A.setShowPremiumUpsell)(!0), t && O.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                            return
                        }
                        u === b.StickerGridItemTypes.STICKER && null != a && t(e)
                    }, [r.location, s, l, n, o, t]);
                    return {
                        handleStickerInspect: a,
                        handleSelect: u
                    }
                },
                eu = e => {
                    let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        onSelectSticker: r,
                        getStickerItemProps: s,
                        getStickerRowProps: u,
                        gutterWidth: c,
                        inspectedStickerPosition: f,
                        isScrolling: m,
                        isUsingKeyboardNavigation: h,
                        stickersGrid: E,
                        stickersCategories: S,
                        filteredStickers: y,
                        ownedStickerPacks: x,
                        channel: A
                    } = e, O = (0, d.useAnalyticsContext)(), L = (0, o.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
                        handleStickerInspect: D,
                        handleSelect: F
                    } = ea({
                        onSelectSticker: r,
                        channel: A,
                        currentUser: L
                    }), [H, W] = i.useState(!1), q = i.useCallback(e => {
                        T.StickerPickerCollapsedSections.updateSetting(Array.from(e))
                    }, []), Y = i.useCallback(e => {
                        let t = E[e];
                        return null != t ? (0, l.jsx)(U.default, {
                            getStickerItemProps: s,
                            getStickerRowProps: u,
                            gutterWidth: c,
                            inspectedStickerPosition: f,
                            isScrolling: m,
                            isUsingKeyboardNavigation: h,
                            onInspect: D,
                            onSelect: F,
                            rowIndex: e,
                            stickerClassName: K.sticker,
                            stickerDescriptors: t,
                            stickerSize: n > G ? J : Z,
                            preferAnimation: n <= V,
                            ownedStickerPacks: x,
                            isDisplayingIndividualStickers: !0,
                            channel: A,
                            currentUser: L
                        }, e) : null
                    }, [E, s, u, c, f, m, h, D, F, n, x, A, L]), z = i.useCallback((e, t) => (0, l.jsx)("div", {
                        children: t
                    }, e), []), $ = i.useCallback(function(e) {
                        let {
                            isStickerPack: n = !0
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = new Set(t), i = t.has(e);
                        i ? l.delete(e) : l.add(e), _.default.track(j.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == O ? void 0 : O.location,
                            tab: w.ExpressionPickerViewType.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }), q(l)
                    }, [O, t, q]), ee = i.useCallback(e => {
                        let n = S[e];
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return null;
                            let i = t.length > 0 && n.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [i ? (0, l.jsx)("div", {
                                    className: K.divider,
                                    children: (0, l.jsx)(a.FormDivider, {})
                                }) : null, (0, l.jsx)(g.default, {
                                    className: K.packHeader,
                                    "aria-label": B.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                                    children: B.default.Messages.STICKERS_YOU_MIGHT_LIKE
                                }, "stickers-you-might-like-header")]
                            })
                        }
                        switch (n.type) {
                            case b.StickerCategoryTypes.FAVORITE:
                                return (0, l.jsx)(g.default, {
                                    className: K.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(N.default, {
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case b.StickerCategoryTypes.RECENT:
                                return (0, l.jsx)(g.default, {
                                    className: K.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(I.default, {}),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case b.StickerCategoryTypes.GUILD:
                            case b.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                                let e = v.default.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: K.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(p.default, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                            case b.StickerCategoryTypes.PACK: {
                                let e = R.default.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: K.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(M.default, {
                                        disableAnimation: !0,
                                        size: 12,
                                        sticker: (0, k.getStickerPackPreviewSticker)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                        }
                    }, [t, S, $, y]), et = i.useCallback(e => {
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return 0;
                            let l = t.length > 0 && n.length > 0 ? Q : 0;
                            return X + l
                        }
                        return X
                    }, [y]), en = i.useCallback(e => {
                        let n = S[e],
                            i = t.has(n.id);
                        return n.type !== b.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != y || i ? null : (0, l.jsx)(P.default, {
                            className: K.emptyGuildUpsell,
                            guildId: n.id,
                            channel: A,
                            shouldTrackUpsellViewed: !H,
                            setTrackedUpsellViewed: W
                        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
                    }, [S, t, y, A, H]), el = i.useCallback(e => {
                        let n = S[e],
                            l = t.has(n.id);
                        return n.type !== b.StickerCategoryTypes.EMPTY_GUILD_UPSELL || l ? 0 : er
                    }, [S, t]);
                    return {
                        renderRow: Y,
                        renderSection: z,
                        renderSectionHeader: ee,
                        sectionHeaderHeight: et,
                        renderSectionFooter: en,
                        sectionFooterHeight: el
                    }
                },
                ed = i.forwardRef(function(e, t) {
                    let {
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        filteredStickers: a,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: T,
                        rowCount: v,
                        rowCountBySection: C,
                        stickersCategories: I,
                        stickersGrid: N,
                        channel: _
                    } = e, x = i.useRef(!1), A = i.useRef(null), [O, b] = m.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], r.default), {
                        AnalyticsLocationProvider: k
                    } = (0, f.default)(c.default.STICKER_PICKER), M = (0, h.useExpressionPickerStore)(e => e.searchQuery), P = (0, o.useStateFromStores)([R.default], () => R.default.getPremiumPacks()), U = i.useMemo(() => new Set(P.map(e => e.id)), [P]), {
                        renderRow: D,
                        renderSection: j,
                        renderSectionFooter: w,
                        sectionFooterHeight: V,
                        renderSectionHeader: H,
                        sectionHeaderHeight: W
                    } = eu({
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        stickersCategories: I,
                        stickersGrid: N,
                        isScrolling: x,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: T,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        inspectedStickerPosition: b,
                        filteredStickers: a,
                        ownedStickerPacks: U,
                        channel: _
                    }), q = (0, S.useSynchronizedActiveCategoryIndexForScrollPosition)({
                        activeCategoryIndex: O,
                        isScrolling: x,
                        listRef: A,
                        onActiveCategoryIndexChange: m.StickerPickerStore.setActiveCategoryIndex,
                        scrollOffset: 20,
                        searchQuery: M
                    });
                    return (0, S.useSynchronizedScrollPositionForActiveCategoryIndex)({
                        searchQuery: M,
                        activeCategoryIndex: O,
                        listRef: A
                    }), i.useImperativeHandle(t, () => {
                        var e, t, n;
                        return {
                            scrollTo: function() {
                                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                                return null === (e = A.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                            },
                            getRowDescriptors: () => {
                                var t;
                                return null !== (e = null === (t = A.current) || void 0 === t ? void 0 : t.getRowDescriptors()) && void 0 !== e ? e : []
                            },
                            getSectionDescriptors: () => {
                                var e;
                                return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                            },
                            scrollToSectionTop: function() {
                                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                                return null === (e = A.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                            },
                            scrollRowIntoView: function() {
                                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                                return null === (e = A.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                            },
                            getScrollerNode: function() {
                                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                                return null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                            },
                            scrollIntoViewNode: function() {
                                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                                return null === (e = A.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                            },
                            getListDimensions: function() {
                                for (var e, t = arguments.length, l = Array(t), i = 0; i < t; i++) l[i] = arguments[i];
                                return null !== (n = null === (e = A.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== n ? n : {
                                    height: -1,
                                    totalHeight: -1
                                }
                            }
                        }
                    }, []), (0, l.jsx)(k, {
                        children: (0, l.jsxs)("div", {
                            className: K.wrapper,
                            children: [null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length ? (0, l.jsx)(u.default, {
                                message: B.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                                className: K.noSearchResultsContainer,
                                noResultsImageURL: F,
                                suggestions: (0, l.jsx)(es, {
                                    onSuggestionClick: e => (0, h.setSearchQuery)(e, !0)
                                })
                            }) : (0, l.jsx)(y.default, {
                                role: "none presentation",
                                listPadding: null != a ? ei : el,
                                onScroll: q,
                                renderRow: D,
                                renderSection: null == a ? j : void 0,
                                renderSectionHeader: H,
                                renderSectionFooter: w,
                                rowCount: v,
                                rowCountBySection: C,
                                rowHeight: s > G ? et : en,
                                sectionHeaderHeight: W,
                                sectionFooterHeight: V,
                                stickyHeaders: !0,
                                ref: A
                            }), (0, l.jsx)(L.default, {
                                stickersGrid: N
                            })]
                        })
                    })
                });
            var ec = ed
        },
        77162: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n("617258"),
                u = n("77078"),
                d = n("272030"),
                c = n("997289"),
                f = n("246511"),
                p = n("151185"),
                m = n("599110"),
                h = n("866353"),
                E = n("161585"),
                S = n("24373"),
                g = n("41170"),
                T = n("591522"),
                v = n("49111"),
                C = n("782340"),
                y = n("267005");
            let I = (0, a.cssValueToNumber)(y.stickerPickerPreviewDimensions),
                N = (0, a.cssValueToNumber)(y.stickerPickerPreviewPadding),
                _ = i.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: r = !0,
                        getStickerItemProps: a,
                        getStickerRowProps: _,
                        gutterWidth: x,
                        inspectedStickerPosition: A,
                        isScrolling: O,
                        isUsingKeyboardNavigation: R,
                        onInspect: b,
                        onSelect: k,
                        rowIndex: M,
                        stickerClassName: P,
                        stickerDescriptors: L,
                        stickerPadding: U = N,
                        stickerSize: D = I,
                        ownedStickerPacks: j,
                        enlargeOnInteraction: w = !1,
                        channel: B,
                        currentUser: K,
                        checkSendability: F = !0
                    } = e, {
                        location: G
                    } = (0, c.useAnalyticsContext)(), V = D + 2 * U, H = i.useMemo(() => ({
                        gridColumnGap: x,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
                        height: V,
                        paddingRight: t ? void 0 : V
                    }), [t, x, V]), W = i.useMemo(() => ({
                        width: D,
                        height: D,
                        padding: U
                    }), [U, D]);
                    return (0, l.jsx)("div", {
                        className: y.row,
                        style: H,
                        ...null == _ ? void 0 : _(M),
                        children: L.map(e => {
                            var c;
                            let I = e.visibleRowIndex === (null == A ? void 0 : A.rowIndex) && e.columnIndex === (null == A ? void 0 : A.columnIndex),
                                N = e.type === E.StickerGridItemTypes.STICKER && w && I,
                                _ = (0, s.throttle)(() => {
                                    (null == O ? void 0 : O.current) !== !0 && (null == R ? void 0 : R.current) !== !0 && !I && (null == b || b(e))
                                }, 250),
                                {
                                    ref: x,
                                    tabIndex: L,
                                    onFocus: U,
                                    ...V
                                } = null !== (c = null == a ? void 0 : a(e.columnIndex, M)) && void 0 !== c ? c : {};
                            switch (e.type) {
                                case E.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, l.jsx)("div", {
                                        ...V,
                                        children: (0, l.jsxs)(u.Clickable, {
                                            "aria-label": e.name,
                                            className: o(y.createSticker, P, {
                                                [y.createInspected]: I
                                            }),
                                            innerRef: x,
                                            tabIndex: L,
                                            onFocus: null != U ? U : _,
                                            onMouseMove: _,
                                            onClick: () => {
                                                e.type === E.StickerGridItemTypes.CREATE_STICKER && (m.default.track(v.AnalyticEvents.OPEN_MODAL, {
                                                    type: v.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: G
                                                }), (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await n.el("54666").then(n.bind(n, "54666"));
                                                    return n => (0, l.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...n
                                                    })
                                                }))
                                            },
                                            style: W,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)("div", {
                                                className: y.iconWrapper,
                                                children: (0, l.jsx)(p.default, {
                                                    className: y.icon
                                                })
                                            }), (0, l.jsx)(u.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: C.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case E.StickerGridItemTypes.STICKER: {
                                    let s = t && null != j && (0, S.isStandardSticker)(e.sticker) && !j.has(e.sticker.pack_id);
                                    return (0, i.createElement)("div", {
                                        ...V,
                                        key: e.sticker.id
                                    }, (0, l.jsxs)(u.Clickable, {
                                        className: o(y.sticker, P, {
                                            [y.stickerInspected]: I
                                        }),
                                        innerRef: x,
                                        tabIndex: L,
                                        onFocus: null != U ? U : _,
                                        onMouseMove: _,
                                        onClick: t => {
                                            (null == O ? void 0 : O.current) !== !0 && (null == R ? void 0 : R.current) !== !0 && (null == k || k(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("367343").then(n.bind(n, "367343"));
                                                return t => (0, l.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: W,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, l.jsx)(u.HiddenVisually, {
                                            children: (0, g.getStickerAltText)(e.sticker)
                                        }), (0, l.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)(g.default, {
                                                className: o(y.stickerNode, {
                                                    [y.stickerNodeDimmed]: w && !I && null != A && -1 !== A.rowIndex && -1 !== A.columnIndex,
                                                    [y.stickerNodeHidden]: N,
                                                    [y.stickerUnsendable]: F && !(0, h.isSendableSticker)(e.sticker, K, B)
                                                }),
                                                disableAnimation: !I && !r,
                                                enlargeOnInteraction: w,
                                                isInteracting: I,
                                                maskAsset: I,
                                                sticker: e.sticker,
                                                size: D
                                            }), s ? (0, l.jsx)(T.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var x = _
        },
        313790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("74139"),
                s = n("137223"),
                a = n("986632"),
                u = n("538282"),
                d = n("256860"),
                c = n("560241"),
                f = n("782340"),
                p = n("296937");
            let m = i.forwardRef(function(e, t) {
                let {
                    onKeyDown: n,
                    stickersListRef: m,
                    channel: h
                } = e, E = (0, d.useHasSendableSticker)(h), S = i.useRef(null), {
                    searchQuery: g,
                    isSearchSuggestion: T
                } = (0, u.useExpressionPickerStore)(e => ({
                    searchQuery: e.searchQuery,
                    isSearchSuggestion: e.isSearchSuggestion
                }), r.default), v = a.StickerPickerStore.useStore(e => e.searchPlaceholder), C = a.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
                    var t;
                    a.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), a.StickerPickerStore.setInspectedExpressionPosition(0, 0), a.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
                }, [m]), I = i.useCallback(() => {
                    (0, u.setSearchQuery)("")
                }, []);
                return i.useImperativeHandle(t, () => ({
                    focus: () => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }
                })), i.useLayoutEffect(() => {
                    if (T) {
                        var e;
                        null === (e = S.current) || void 0 === e || e.focus()
                    }
                }, [T]), (0, l.jsx)("div", {
                    className: p.wrapper,
                    children: (0, l.jsx)(s.default, {
                        autoFocus: E,
                        disabled: !E,
                        query: g,
                        ref: S,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: null != v ? v : E ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                        onClear: I,
                        onKeyDown: n,
                        onQueryChange: y,
                        className: p.searchBar,
                        preventEscapePropagation: !1,
                        useKeyboardNavigation: !1,
                        inputProps: {
                            "aria-haspopup": "grid",
                            "aria-controls": c.GRID_NAVIGATOR_ID,
                            "aria-expanded": !0,
                            "aria-activedescendant": (0, o.makeGridId)(c.GRID_NAVIGATOR_ID, C.columnIndex, C.rowIndex)
                        }
                    })
                })
            });
            var h = m
        },
        281072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("181114"),
                o = n("216422"),
                s = n("113270"),
                a = n("782340"),
                u = n("72270");

            function d(e) {
                let {
                    analyticsSection: t,
                    buttonText: n
                } = e;
                return (0, l.jsxs)(r.default, {
                    className: u.premiumButton,
                    innerClassName: u.premiumButtonInner,
                    color: i.Button.Colors.GREEN,
                    size: i.Button.Sizes.SMALL,
                    onClick: () => (0, s.default)({
                        section: t
                    }),
                    children: [(0, l.jsx)(o.default, {
                        className: u.premiumButtonNitroWheel
                    }), null != n ? n : a.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
                })
            }
        },
        908408: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickersPremiumUpsell: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("812204"),
                u = n("685665"),
                d = n("154889"),
                c = n("917247"),
                f = n("956597"),
                p = n("945330"),
                m = n("599110"),
                h = n("719923"),
                E = n("570759"),
                S = n("281072"),
                g = n("49111"),
                T = n("646718"),
                v = n("782340"),
                C = n("416841"),
                y = n("481927");
            let I = () => (0, E.setShowPremiumUpsell)(!1),
                N = e => {
                    var t, n, r;
                    let {
                        onLearnMore: E
                    } = e, {
                        analyticsLocations: N
                    } = (0, u.default)(a.default.PREMIUM_UPSELL);
                    i.useEffect(() => {
                        m.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            location_section: g.AnalyticsSections.STICKER_PICKER_UPSELL,
                            type: T.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            location_stack: N
                        })
                    }, [N]);
                    let _ = (0, c.usePremiumTrialOffer)(),
                        x = (0, d.usePremiumDiscountOffer)(),
                        A = (null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === T.PremiumSubscriptionSKUs.TIER_0,
                        O = null != _ || null != x;
                    return (0, l.jsxs)("div", {
                        className: o(C.upsellWrapper, {
                            [C.unifyTrialUpsell]: O
                        }),
                        children: [O ? (0, l.jsx)(f.default, {
                            trialOffer: _,
                            discountOffer: x,
                            onClose: I,
                            type: T.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            subscriptionTier: null !== (r = null == _ ? void 0 : null === (n = _.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : T.PremiumSubscriptionSKUs.TIER_2,
                            children: A ? v.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                                planName: (0, h.getTierDisplayName)(T.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: E
                            }) : v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                onClick: E
                            })
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("img", {
                                className: C.upsellImage,
                                src: y,
                                alt: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                            }), (0, l.jsx)(s.Text, {
                                className: C.upsellTitle,
                                color: "header-primary",
                                variant: "text-lg/semibold",
                                children: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                className: C.upsellDescription,
                                variant: "text-md/normal",
                                children: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                    onClick: E
                                })
                            })]
                        }), !O && (0, l.jsx)(S.default, {
                            analyticsSection: g.AnalyticsSections.EXPRESSION_PICKER,
                            buttonText: O ? A ? v.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : v.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                        }), (0, l.jsx)(s.Clickable, {
                            className: C.upsellClose,
                            onClick: I,
                            children: (0, l.jsx)(p.default, {})
                        })]
                    })
                }
        },
        641680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFilteredStickers: function() {
                    return r
                }
            });
            var l = n("866353"),
                i = n("386543");
            let r = (e, t, n) => {
                if ("" === e) return null;
                let r = [],
                    o = [];
                return (0, i.searchAllStickers)(e).forEach(e => {
                    let i = (0, l.getStickerSendability)(e, t, n);
                    i === l.StickerSendability.SENDABLE ? r.push(e) : i === l.StickerSendability.SENDABLE_WITH_PREMIUM && o.push(e)
                }), {
                    sendable: r,
                    sendableWithPremium: o
                }
            }
        },
        113270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("599110"),
                o = n("49111");

            function s(e) {
                r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: o.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("122846").then(n.bind(n, "122846"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        209069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("599110"),
                o = n("49111");

            function s(e) {
                let {
                    stickerPack: t,
                    sourceSticker: s,
                    analyticsLocations: a,
                    analyticsLocation: u
                } = e;
                return r.default.track(o.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                    sticker_id: null == s ? void 0 : s.id,
                    sticker_pack_id: t.id,
                    location: u,
                    location_stack: a
                }), r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: o.AnalyticsSections.STICKER_PACK_VIEW_ALL,
                    location: u
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("656137").then(n.bind(n, "656137"));
                    return n => (0, l.jsx)(e, {
                        stickerPack: t,
                        ...n
                    })
                })
            }
        },
        318981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("49111");
            let o = {},
                s = {
                    integration: "",
                    query: ""
                };
            class a extends l.default.Store {
                getResults(e, t) {
                    if (null == e || null == t) return null;
                    let n = o[e];
                    return null != n && null != n[t] ? n[t] : null
                }
                getQuery() {
                    return s
                }
            }
            a.displayName = "IntegrationQueryStore";
            var u = new a(i.default, {
                INTEGRATION_QUERY: function(e) {
                    var t;
                    let {
                        integration: n,
                        query: l
                    } = e;
                    o[n] = null !== (t = o[n]) && void 0 !== t ? t : {}, o[n][l] = {
                        loading: !0,
                        results: []
                    }
                },
                INTEGRATION_QUERY_SUCCESS: function(e) {
                    let {
                        integration: t,
                        query: n,
                        results: l
                    } = e;
                    o[t][n] = {
                        loading: !1,
                        results: l.map(e => ({
                            type: r.ChannelTextAreaIntegrations[t].type,
                            meta: e
                        }))
                    }, s = {
                        query: n,
                        integration: t
                    }
                },
                INTEGRATION_QUERY_FAILURE: function(e) {
                    let {
                        integration: t,
                        query: n
                    } = e;
                    delete o[t][n]
                }
            })
        },
        769264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                i = n("95410"),
                r = n("913144"),
                o = n("749866");
            let s = "SpellcheckStore",
                a = !0,
                u = new Set;

            function d() {
                i.default.set(s, {
                    enabled: a,
                    learnedWords: u
                })
            }
            class c extends l.default.Store {
                initialize() {
                    let e = i.default.get(s);
                    null != e && (a = e.enabled, u = new Set(e.learnedWords), (0, o.setEnabled)(a), (0, o.setLearnedWords)(u))
                }
                isEnabled() {
                    return a
                }
                hasLearnedWord(e) {
                    return u.has(e.toLocaleLowerCase())
                }
            }
            c.displayName = "SpellcheckStore";
            var f = new c(r.default, {
                SPELLCHECK_TOGGLE() {
                    a = !a, (0, o.setEnabled)(a), d()
                },
                SPELLCHECK_LEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    u.add(t.toLocaleLowerCase()), (0, o.setLearnedWords)(u), d()
                },
                SPELLCHECK_UNLEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    u.delete(t.toLocaleLowerCase()), (0, o.setLearnedWords)(u), d()
                },
                I18N_LOAD_SUCCESS(e) {
                    let {
                        locale: t
                    } = e;
                    (0, o.setAppLocale)(t)
                }
            })
        },
        378765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ComponentDispatchGroupContext: function() {
                    return a
                },
                ComponentDispatchGroupProvider: function() {
                    return u
                },
                useComponentAction: function() {
                    return d
                },
                ComponentAction: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("44170"),
                o = n("659500");
            class s {
                subscribe(e, t) {
                    o.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
                }
                unsubscribe(e, t) {
                    o.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
                }
                bumpDispatchPriority() {
                    for (let e of this.emitter.eventNames())
                        for (let t of this.emitter.listeners(e)) o.ComponentDispatch.resubscribe(e, t)
                }
                constructor() {
                    this.emitter = new r.EventEmitter
                }
            }
            let a = i.createContext(new class e {
                    subscribe(e, t) {
                        o.ComponentDispatch.subscribe(e, t)
                    }
                    unsubscribe(e, t) {
                        o.ComponentDispatch.unsubscribe(e, t)
                    }
                    bumpDispatchPriority() {}
                }),
                u = i.forwardRef(function(e, t) {
                    let {
                        children: n
                    } = e, r = i.useRef(null);

                    function o() {
                        return null === r.current && (r.current = new s), r.current
                    }
                    return i.useImperativeHandle(t, o), (0, l.jsx)(a.Provider, {
                        value: o(),
                        children: n
                    })
                });

            function d(e) {
                let {
                    event: t,
                    handler: n
                } = e, l = i.useContext(a), r = i.useRef(n);
                i.useEffect(() => {
                    r.current = n
                }, [n]);
                let o = null == n;
                return i.useEffect(() => {
                    if (o) return;
                    let e = function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        null === (e = r.current) || void 0 === e || e.call(r, ...n)
                    };
                    return l.subscribe(t, e), () => {
                        l.unsubscribe(t, e)
                    }
                }, [l, t, o]), null
            }

            function c(e) {
                return d(e), null
            }
        },
        347647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            let l = {
                    1: "bold",
                    4: "underline"
                },
                i = {
                    30: "black",
                    31: "red",
                    32: "green",
                    33: "yellow",
                    34: "blue",
                    35: "magenta",
                    36: "cyan",
                    37: "white"
                },
                r = {
                    40: "black",
                    41: "red",
                    42: "green",
                    43: "yellow",
                    44: "blue",
                    45: "magenta",
                    46: "cyan",
                    47: "white"
                },
                o = /\x1B\[(\d+(?:[:;]\d+)*)m/,
                s = new RegExp("(?=".concat(o.source, ")"));

            function a() {
                let e = [...u("foreground", i, ["38", "39"], !0), ...u("background", r, ["48", "49"], !0), ...u("style", l, [], !1), {
                    className: "ansi-control-sequence",
                    begin: o,
                    starts: {
                        end: s,
                        endsParent: !0
                    }
                }];
                return function(e) {
                    for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
                }(e), {
                    contains: [{
                        begin: s,
                        contains: e
                    }]
                }
            }

            function u(e, t, n, l) {
                let i = ["0", ...n];
                return l && i.push(...Object.keys(t)), Object.entries(t).map(t => {
                    var n, l, r, o;
                    let [a, u] = t;
                    return n = e, l = u, r = a, o = i, {
                        className: "ansi-".concat(n, "-").concat(l),
                        endsParent: !0,
                        begin: s,
                        "on:begin": (e, t) => {
                            let n = e[1].split(";");
                            for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), n)) e === r ? t.data.isOn = !0 : o.includes(e) && (t.data.isOn = !1);
                            !t.data.isOn && t.ignoreMatch()
                        }
                    }
                })
            }
        },
        86256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("436443"),
                i = n("917351"),
                r = n.n(i),
                o = n("347647");
            l.default.registerLanguage("ansi", o.default);
            var s = {
                highlight(e, t, n) {
                    if (! function(e) {
                            if (e.indexOf(a) >= 0) return !1;
                            let t = 0,
                                n = e.split("\n");
                            for (let e of n) {
                                if (e.length > 1e3) return !1;
                                null == e.match(/^\s*[/][/]/) && null != e.match(/[^/]/) && (t = 0);
                                let n = e.match(/[/]/g);
                                if (null != n && (t += n.length) > 30) return !1
                            }
                            return !0
                        }(t)) return null;
                    Date.now();
                    let i = l.default.highlight(e, t, n);
                    return Date.now(), i
                },
                hasLanguage: e => null != l.default.getLanguage(e)
            };
            let a = r.repeat("/", 15)
        },
        573055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSelectionText: function() {
                    return r
                },
                contextMenuCallbackNative: function() {
                    return o
                },
                contextMenuCallbackWeb: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("272030");

            function r() {
                let e;
                if (null != window.getSelection) {
                    var t;
                    e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
                } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
                return null != e ? e : ""
            }

            function o(e) {
                var t;
                let o = r(),
                    s = e.target;
                if ((null == s ? void 0 : s.tagName) === "TEXTAREA" || (null == s ? void 0 : s.tagName) === "INPUT") {
                    if ((null == s ? void 0 : s.type) !== "checkbox") return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("188503").then(n.bind(n, "188503"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            text: o
                        })
                    }, {
                        enableSpellCheck: !0
                    })
                } else if ("none" === window.getComputedStyle(s).getPropertyValue("-webkit-user-select")) {
                    e.preventDefault();
                    return
                } else {
                    let r, s, a, u = e.target;
                    for (; null != u;) "src" in u && null != u.src && (s = u.src), "href" in u && null != u.href && (r = u.href, a = u.textContent), u = null === (t = u) || void 0 === t ? void 0 : t.parentNode;
                    if (null != s) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("467592").then(n.bind(n, "467592"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            src: null != s ? s : ""
                        })
                    });
                    if (null != r) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("399758").then(n.bind(n, "399758"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            href: r,
                            textContent: a
                        })
                    });
                    else if (null != o && "" !== o) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("622618").then(n.bind(n, "622618"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            text: o
                        })
                    })
                }
                return e.preventDefault(), null
            }

            function s(e) {
                var t;
                let n = !1,
                    l = e.target;
                if ((null == l ? void 0 : l.tagName) === "INPUT" || (null == l ? void 0 : l.tagName) === "TEXTAREA") n = !0;
                else if ((null == l ? void 0 : l.closest) != null && (null == l ? void 0 : l.closest("[contenteditable=true]")) != null) n = !0;
                else if (null != r() && "" !== r()) n = !0;
                else {
                    let l, i, r = e.target;
                    for (; null != r;) "src" in r && null != r.src && (i = r.src), "href" in r && null != r.href && (l = r.href), r = null === (t = r) || void 0 === t ? void 0 : t.parentNode;
                    (null != l || null != i) && (n = !0)
                }!n && e.preventDefault()
            }
        }
    }
]);