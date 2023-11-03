(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83063"], {
        351105: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var o = r("872717"),
                a = r("49111"),
                n = {
                    async updateEstimate(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            n = await o.default.get({
                                url: a.Endpoints.GUILD_PRUNE(e),
                                query: {
                                    days: t,
                                    include_roles: r
                                },
                                oldFormErrors: !0
                            });
                        return n.body.pruned
                    },
                    prune: (e, t, r) => o.default.post({
                        url: a.Endpoints.GUILD_PRUNE(e),
                        body: {
                            days: t,
                            compute_prune_count: !1,
                            include_roles: r
                        },
                        oldFormErrors: !0
                    })
                }
        },
        494440: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return g
                }
            });
            var o = r("37983"),
                a = r("884691"),
                n = r("917351"),
                l = r.n(n),
                s = r("446674"),
                i = r("77078"),
                u = r("351105"),
                d = r("581583"),
                c = r("957255"),
                p = r("954419"),
                h = r("782340"),
                v = r("432948"),
                g = e => {
                    let {
                        guild: t,
                        transitionState: r,
                        onClose: n
                    } = e, [g, f] = a.useState(7), [m, b] = a.useState(null), [x, E] = a.useState([]), S = a.useCallback(async () => {
                        b(null);
                        let e = await u.default.updateEstimate(t.id, g, x);
                        b(e)
                    }, [g, t.id, x]);
                    a.useEffect(() => {
                        S()
                    }, [S]);
                    let M = (0, s.useStateFromStoresArray)([c.default], () => {
                        let e = c.default.getHighestRole(t);
                        return l(t.roles).sortBy(e => e.position).filter(e => e.id !== t.id).filter(r => c.default.isRoleHigher(t, e, r)).value().map(e => {
                            let {
                                id: t,
                                name: r
                            } = e;
                            return {
                                label: r,
                                value: t
                            }
                        })
                    }, [t]);
                    return (0, o.jsxs)(i.ModalRoot, {
                        transitionState: r,
                        children: [(0, o.jsx)(i.ModalHeader, {
                            separator: !1,
                            children: (0, o.jsxs)(i.Heading, {
                                variant: "heading-lg/semibold",
                                children: [h.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
                            })
                        }), (0, o.jsxs)("div", {
                            className: v.content,
                            children: [(0, o.jsx)(i.FormItem, {
                                title: h.default.Messages.FORM_LABEL_LAST_SEEN,
                                children: (0, o.jsx)(i.RadioGroup, {
                                    value: g,
                                    options: [{
                                        name: h.default.Messages.LAST_SEEN.format({
                                            days: 7
                                        }),
                                        value: 7
                                    }, {
                                        name: h.default.Messages.LAST_SEEN.format({
                                            days: 30
                                        }),
                                        value: 30
                                    }],
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e;
                                        f(t)
                                    },
                                    className: v.spacing
                                })
                            }), (0, o.jsx)(i.FormItem, {
                                title: h.default.Messages.PRUNE_WITH_ROLES,
                                children: (0, o.jsx)(p.default, {
                                    isMulti: !0,
                                    options: M,
                                    onChange: e => {
                                        E(e.map(e => e.value))
                                    },
                                    value: x,
                                    multiValueRenderer: e => {
                                        let {
                                            value: r
                                        } = e, a = t.getRole(r);
                                        if (null == a) return null;
                                        let n = x.indexOf(r);
                                        return (0, o.jsx)(d.MemberRole, {
                                            className: v.role,
                                            role: a,
                                            canRemove: !0,
                                            onRemove: () => {
                                                E([...x.slice(0, n), ...x.slice(n + 1)])
                                            },
                                            onMouseDown: e => {
                                                e.stopPropagation(), e.preventDefault()
                                            },
                                            guildId: t.id
                                        })
                                    },
                                    maxMenuHeight: 200
                                })
                            }), (0, o.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: v.spacing,
                                children: x.length > 0 ? h.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
                                    members: m,
                                    days: g
                                }) : h.default.Messages.FORM_HELP_LAST_SEEN_1.format({
                                    members: m,
                                    days: g
                                })
                            })]
                        }), (0, o.jsxs)(i.ModalFooter, {
                            children: [(0, o.jsx)(i.Button, {
                                onClick: () => {
                                    u.default.prune(t.id, g, x), n()
                                },
                                children: h.default.Messages.PRUNE
                            }), (0, o.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: n,
                                children: h.default.Messages.CANCEL
                            })]
                        })]
                    })
                }
        },
        954419: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DEFAULT_SELECT_STYLES: function() {
                    return v
                },
                default: function() {
                    return g
                }
            });
            var o, a, n = r("37983"),
                l = r("884691"),
                s = r("414456"),
                i = r.n(s),
                u = r("773392"),
                d = r("77078"),
                c = r("49111"),
                p = r("782340"),
                h = r("599619");
            (o = a || (a = {})).TOP = "top", o.BOTTOM = "bottom";
            let v = {
                container: (e, t) => {
                    let {
                        isDisabled: r
                    } = t;
                    return {
                        ...e,
                        cursor: r ? "not-allowed" : void 0,
                        pointerEvents: void 0,
                        fontSize: 16,
                        fontWeight: 500,
                        width: "100%"
                    }
                },
                control: (e, t) => {
                    let {
                        isDisabled: r,
                        menuIsOpen: o
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: r ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: o ? "4px 4px 0 0" : "4px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: r ? "not-allowed" : void 0,
                        pointerEvents: r ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                singleValue: (e, t) => {
                    let {
                        isDisabled: r
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        opacity: r ? .5 : 1
                    }
                },
                input: e => ({
                    ...e,
                    color: "var(--interactive-normal)"
                }),
                menu: e => ({
                    ...e,
                    backgroundColor: "var(--background-secondary)",
                    border: "1px solid var(--background-tertiary)",
                    borderRadius: "0 0 4px 4px",
                    color: "var(--interactive-normal)",
                    marginTop: -1,
                    marginBottom: -1
                }),
                clearIndicator: (e, t) => {
                    let {
                        isDisabled: r
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: r ? void 0 : "pointer",
                        opacity: .3,
                        padding: "8px 0",
                        transform: "scale(0.8)",
                        ":hover": {
                            color: "var(--text-danger)",
                            opacity: 1
                        }
                    }
                },
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start"
                }),
                dropdownIndicator: (e, t) => {
                    let {
                        isDisabled: r
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: r ? void 0 : "pointer",
                        opacity: r ? .3 : 1,
                        padding: "8px 8px 8px 0",
                        ":hover": {
                            color: "var(--interactive-hover)",
                            opacity: r ? .3 : 1
                        }
                    }
                },
                menuList: e => ({
                    ...e,
                    padding: 0,
                    "&::-webkit-scrollbar": {
                        width: 8,
                        padding: "0px 2px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "var(--scrollbar-thin-thumb)",
                        border: "2px solid transparent",
                        backgroundClip: "padding-box",
                        borderRadius: 4
                    },
                    "&::-webkit-scrollbar-track-piece": {
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                    }
                }),
                option: (e, t) => {
                    let {
                        isSelected: r,
                        isFocused: o
                    } = t;
                    return {
                        ...e,
                        ...r ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : o ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        }
                    }
                },
                placeholder: e => ({
                    ...e,
                    color: "var(--text-muted)"
                })
            };
            class g extends l.Component {
                focus() {
                    var e;
                    null === (e = this._selectRef.current) || void 0 === e || e.focus()
                }
                render() {
                    let e;
                    let {
                        className: t,
                        selectClassName: r,
                        error: o,
                        valueRenderer: a,
                        optionRenderer: l,
                        multiValueRenderer: s,
                        options: c,
                        value: g,
                        autofocus: f,
                        disabled: m,
                        clearable: b,
                        searchable: x,
                        styleOverrides: E,
                        isMulti: S,
                        placeholder: M,
                        filterOption: R,
                        closeMenuOnSelect: _ = !0,
                        ...C
                    } = this.props, y = {
                        ...C
                    };
                    null != f && (y.autoFocus = f), null != m && (y.isDisabled = m), null != b && (y.isClearable = b), null != x && (y.isSearchable = x);
                    let k = {
                        IndicatorSeparator: () => null
                    };
                    null != l && (k.Option = e => (0, n.jsx)(u.components.Option, {
                        ...e,
                        children: l(e.data)
                    })), null != a && (k.SingleValue = e => (0, n.jsx)(u.components.SingleValue, {
                        ...e,
                        children: a(e.data)
                    })), null != s && (k.MultiValue = e => s(e.data));
                    if (S && Array.isArray(g)) {
                        let t = {};
                        c.forEach(e => {
                            t[String(e.value)] = e
                        }), e = g.map(e => t[String(e)])
                    } else e = null != g ? c.find(e => e.value === g) : null;
                    return (0, n.jsx)(d.FocusRing, {
                        focused: this.state.isFocused && !this.state.isOpen,
                        ringTarget: this._containerRef,
                        children: (0, n.jsxs)("div", {
                            className: i(h.select, t, {
                                [h.error]: null != o
                            }),
                            ref: this._containerRef,
                            children: [(0, n.jsx)(u.default, {
                                ...y,
                                className: r,
                                ref: this._selectRef,
                                isMulti: S,
                                components: k,
                                options: c,
                                styles: null != E ? E : v,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onMenuOpen: this.handleMenuOpen,
                                onMenuClose: this.handleMenuClose,
                                closeMenuOnSelect: _,
                                value: e,
                                onKeyDown: this.handleKeyDown,
                                placeholder: null != M ? M : p.default.Messages.SELECT,
                                noOptionsMessage: () => p.default.Messages.NO_RESULTS_FOUND,
                                filterOption: R
                            }), null != o ? (0, n.jsx)("div", {
                                className: h.errorMessage,
                                children: o
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._selectRef = l.createRef(), this._containerRef = l.createRef(), this.state = {
                        isFocused: !1,
                        isOpen: !1
                    }, this.handleFocus = e => {
                        var t, r;
                        this.setState({
                            isFocused: !0
                        }), null === (t = (r = this.props).onFocus) || void 0 === t || t.call(r, e)
                    }, this.handleBlur = e => {
                        var t, r;
                        this.setState({
                            isFocused: !1
                        }), null === (t = (r = this.props).onBlur) || void 0 === t || t.call(r, e)
                    }, this.handleKeyDown = e => {
                        e.which === c.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
                    }, this.handleMenuOpen = () => {
                        this.setState({
                            isOpen: !0
                        })
                    }, this.handleMenuClose = () => {
                        this.setState({
                            isOpen: !1
                        })
                    }
                }
            }
            g.MenuPlacements = a
        }
    }
]);