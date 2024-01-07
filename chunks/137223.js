            "use strict";
            n.r(t), n.d(t, {
                RichTagTypes: function() {
                    return i
                },
                SearchBarIcon: function() {
                    return T
                },
                default: function() {
                    return N
                }
            }), n("424973"), n("222007");
            var i, r, l = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("77078"),
                c = n("476263"),
                d = n("945330"),
                f = n("229915"),
                E = n("439932"),
                _ = n("49111"),
                I = n("782340"),
                h = n("515315");
            let p = Object.freeze({
                SMALL: h.small,
                MEDIUM: h.medium,
                LARGE: h.large
            });
            (r = i || (i = {})).MEMBER = "MEMBER", r.ROLE = "ROLE", r.CHANNEL = "CHANNEL", r.GUILD = "GUILD", r.USER = "USER";
            let T = e => {
                let {
                    hasContent: t,
                    onClear: n,
                    className: i,
                    themeOverride: r,
                    size: o = p.SMALL
                } = e;
                return (0, l.jsx)(u.Clickable, {
                    className: a(i, h.iconLayout, o, (0, E.getThemeClass)(r), {
                        [h.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != n && n(e)
                    },
                    onMouseDown: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    tabIndex: t ? 0 : -1,
                    "aria-hidden": !t,
                    "aria-label": I.default.Messages.SEARCH_CLEAR,
                    focusProps: {
                        offset: 4
                    },
                    children: (0, l.jsxs)("div", {
                        className: h.iconContainer,
                        children: [(0, l.jsx)(f.default, {
                            className: a({
                                [h.icon]: !0,
                                [h.visible]: !t
                            })
                        }), (0, l.jsx)(d.default, {
                            className: a({
                                [h.icon]: !0,
                                [h.visible]: t
                            })
                        })]
                    })
                })
            };
            class S extends o.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: n
                    } = this.props;
                    t && !e.isReady && n && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: n,
                        sections: i,
                        query: r,
                        tags: l,
                        onSelectionChange: o,
                        onSelect: s,
                        onRemoveTag: a,
                        preventEscapePropagation: u
                    } = this.props;
                    if (0 !== i.length) {
                        switch (e.keyCode) {
                            case _.KeyboardKeys.BACKSPACE:
                                (null == r || 0 === r.length) && null != l && l.length > 0 && (e.preventDefault(), e.stopPropagation(), null == a || a(l.length - 1));
                                break;
                            case _.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                                break;
                            case _.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
                                break;
                            case _.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
                                break;
                            case _.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
                                break;
                            case _.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
                                null != s && s(t, n, e);
                                return;
                            case _.KeyboardKeys.ESCAPE:
                                e.preventDefault(), u && e.stopPropagation(), null != s && s(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != o && o(t, n)
                    }
                }
                handleKeyDownList(e) {
                    let {
                        sections: t,
                        selectedSection: n,
                        selectedRow: i,
                        onSelect: r,
                        onSelectionChange: l,
                        query: o,
                        tags: s,
                        preventEscapePropagation: a
                    } = this.props, {
                        current: u
                    } = this.ref;
                    if (null != u) switch (e.keyCode) {
                        case _.KeyboardKeys.BACKSPACE:
                            if ((null == o || 0 === o.length) && null != s && s.length > 0) {
                                var c, d;
                                e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, s.length - 1)
                            }
                            break;
                        case _.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == l || l(n, i);
                            break;
                        case _.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == l || l(n, i);
                            break;
                        case _.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == r || r(n, i, e));
                            break;
                        case _.KeyboardKeys.ESCAPE:
                            e.preventDefault(), a && e.stopPropagation(), null == r || r(null, null, e), u.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: n = I.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: i,
                        disabled: r,
                        onClear: o,
                        size: s,
                        maxHeight: f,
                        tags: _,
                        onActivate: p,
                        className: S,
                        inputProps: N,
                        focusAfterReady: A
                    } = this.props, C = null != t && t.length > 0, g = !1, v = [];
                    return null != _ && _.length > 0 && ("string" == typeof _[0] ? _.forEach((e, t) => v.push((0, l.jsxs)(u.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: h.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, l.jsx)(d.default, {
                            className: h.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))) : (g = !0, _.forEach((e, t) => v.push((0, l.jsxs)(u.Anchor, {
                        className: a(h.tag, h.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, l.jsx)(u.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: u.AvatarSizes.SIZE_16
                        }), "ROLE" === e.type && null != e.color && (0, l.jsx)("span", {
                            className: h.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), "GUILD" === e.type && null != e.guild && (0, l.jsx)(c.default, {
                            guild: e.guild,
                            active: !0,
                            size: c.default.Sizes.SMOL
                        }), (0, l.jsx)("span", {
                            className: h.tagLabel,
                            children: e.label
                        }), (0, l.jsx)(d.default, {
                            className: h.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))))), (0, l.jsx)(u.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, l.jsx)("div", {
                            ref: this.containerRef,
                            className: a(S, h.container, s, (0, E.getThemeClass)(i), {
                                [h.disabled]: r
                            }),
                            children: (0, l.jsxs)(u.ScrollerThin, {
                                className: h.inner,
                                style: {
                                    maxHeight: f
                                },
                                children: [v, (0, l.jsx)("input", {
                                    className: a(h.input, {
                                        [h.richTagInput]: g
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: n,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: r,
                                    "aria-disabled": r,
                                    autoFocus: !A && e,
                                    onMouseDown: p,
                                    ...this.defaultInputProps,
                                    ...N
                                }), null != o ? (0, l.jsx)(T, {
                                    size: s,
                                    themeOverride: i,
                                    hasContent: C,
                                    onClear: this.handleClear
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultInputProps = {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    }, this.ref = o.createRef(), this.containerRef = o.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: n,
                            onQueryChange: i,
                            useKeyboardNavigation: r
                        } = this.props;
                        null != n && n(e);
                        let {
                            current: l
                        } = this.ref;
                        if (null == l || null != t) {
                            e.keyCode !== _.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === _.KeyboardKeys.ESCAPE && null != l.value && "" !== l.value && l.value.length > 0) {
                            l.value = "", null != i && i("");
                            return
                        }
                        r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
                    }, this.handleChange = e => {
                        let {
                            onQueryChange: t
                        } = this.props;
                        null != t && t(e.currentTarget.value)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleClear = () => {
                        let {
                            onClear: e
                        } = this.props, {
                            current: t
                        } = this.ref;
                        null != e && e(), null != t && t.focus()
                    }, this.handleRemoveTag = e => {
                        let {
                            onRemoveTag: t
                        } = this.props;
                        null == t || t(e)
                    }, this.focus = () => {
                        let {
                            current: e
                        } = this.ref;
                        null != e && e.focus()
                    }
                }
            }
            S.Sizes = p, S.defaultProps = {
                size: p.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            var N = S