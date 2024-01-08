            "use strict";
            i.r(t), i.d(t, {
                RichTagTypes: function() {
                    return n
                },
                SearchBarIcon: function() {
                    return _
                },
                default: function() {
                    return h
                }
            }), i("424973"), i("222007");
            var n, l, s = i("37983"),
                a = i("884691"),
                r = i("414456"),
                o = i.n(r),
                u = i("77078"),
                c = i("476263"),
                d = i("945330"),
                f = i("229915"),
                E = i("439932"),
                m = i("49111"),
                I = i("782340"),
                p = i("515315");
            let g = Object.freeze({
                SMALL: p.small,
                MEDIUM: p.medium,
                LARGE: p.large
            });
            (l = n || (n = {})).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.GUILD = "GUILD", l.USER = "USER";
            let _ = e => {
                let {
                    hasContent: t,
                    onClear: i,
                    className: n,
                    themeOverride: l,
                    size: a = g.SMALL
                } = e;
                return (0, s.jsx)(u.Clickable, {
                    className: o(n, p.iconLayout, a, (0, E.getThemeClass)(l), {
                        [p.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != i && i(e)
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
                    children: (0, s.jsxs)("div", {
                        className: p.iconContainer,
                        children: [(0, s.jsx)(f.default, {
                            className: o({
                                [p.icon]: !0,
                                [p.visible]: !t
                            })
                        }), (0, s.jsx)(d.default, {
                            className: o({
                                [p.icon]: !0,
                                [p.visible]: t
                            })
                        })]
                    })
                })
            };
            class S extends a.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: i
                    } = this.props;
                    t && !e.isReady && i && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: i,
                        sections: n,
                        query: l,
                        tags: s,
                        onSelectionChange: a,
                        onSelect: r,
                        onRemoveTag: o,
                        preventEscapePropagation: u
                    } = this.props;
                    if (0 !== n.length) {
                        switch (e.keyCode) {
                            case m.KeyboardKeys.BACKSPACE:
                                (null == l || 0 === l.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(s.length - 1));
                                break;
                            case m.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, i = 0) : ((t += 1) >= n.length && (t = n.length - 1), i >= n[t] && (i = n[t] - 1));
                                break;
                            case m.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, i = 0) : i >= n[t] && (i = n[t] - 1);
                                break;
                            case m.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (i -= 1) < 0 && ((t -= 1) >= 0 ? i = n[t] - 1 : t < 0 && (t = 0, i = 0));
                                break;
                            case m.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (i += 1) >= n[t] && (i = 0, (t += 1) >= n.length && (t = n.length - 1, i = n[t] - 1));
                                break;
                            case m.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === i && (i = 0), t >= n.length || i >= n[t]) return;
                                null != r && r(t, i, e);
                                return;
                            case m.KeyboardKeys.ESCAPE:
                                e.preventDefault(), u && e.stopPropagation(), null != r && r(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != a && a(t, i)
                    }
                }
                handleKeyDownList(e) {
                    let {
                        sections: t,
                        selectedSection: i,
                        selectedRow: n,
                        onSelect: l,
                        onSelectionChange: s,
                        query: a,
                        tags: r,
                        preventEscapePropagation: o
                    } = this.props, {
                        current: u
                    } = this.ref;
                    if (null != u) switch (e.keyCode) {
                        case m.KeyboardKeys.BACKSPACE:
                            if ((null == a || 0 === a.length) && null != r && r.length > 0) {
                                var c, d;
                                e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, r.length - 1)
                            }
                            break;
                        case m.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), t.length > i && ++n >= t[i] && (++i >= t.length && (i = 0), n = 0), null == s || s(i, n);
                            break;
                        case m.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --n < 0 && (--i < 0 && (i = t.length - 1), n = t[i] - 1), null == s || s(i, n);
                            break;
                        case m.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), t.length > i && t[i] > n && (null == l || l(i, n, e));
                            break;
                        case m.KeyboardKeys.ESCAPE:
                            e.preventDefault(), o && e.stopPropagation(), null == l || l(null, null, e), u.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: i = I.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: n,
                        disabled: l,
                        onClear: a,
                        size: r,
                        maxHeight: f,
                        tags: m,
                        onActivate: g,
                        className: S,
                        inputProps: h,
                        focusAfterReady: C
                    } = this.props, T = null != t && t.length > 0, N = !1, A = [];
                    return null != m && m.length > 0 && ("string" == typeof m[0] ? m.forEach((e, t) => A.push((0, s.jsxs)(u.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: p.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, s.jsx)(d.default, {
                            className: p.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))) : (N = !0, m.forEach((e, t) => A.push((0, s.jsxs)(u.Anchor, {
                        className: o(p.tag, p.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, s.jsx)(u.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: u.AvatarSizes.SIZE_16
                        }), "ROLE" === e.type && null != e.color && (0, s.jsx)("span", {
                            className: p.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), "GUILD" === e.type && null != e.guild && (0, s.jsx)(c.default, {
                            guild: e.guild,
                            active: !0,
                            size: c.default.Sizes.SMOL
                        }), (0, s.jsx)("span", {
                            className: p.tagLabel,
                            children: e.label
                        }), (0, s.jsx)(d.default, {
                            className: p.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))))), (0, s.jsx)(u.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            ref: this.containerRef,
                            className: o(S, p.container, r, (0, E.getThemeClass)(n), {
                                [p.disabled]: l
                            }),
                            children: (0, s.jsxs)(u.ScrollerThin, {
                                className: p.inner,
                                style: {
                                    maxHeight: f
                                },
                                children: [A, (0, s.jsx)("input", {
                                    className: o(p.input, {
                                        [p.richTagInput]: N
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: i,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: l,
                                    "aria-disabled": l,
                                    autoFocus: !C && e,
                                    onMouseDown: g,
                                    ...this.defaultInputProps,
                                    ...h
                                }), null != a ? (0, s.jsx)(_, {
                                    size: r,
                                    themeOverride: n,
                                    hasContent: T,
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
                    }, this.ref = a.createRef(), this.containerRef = a.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: i,
                            onQueryChange: n,
                            useKeyboardNavigation: l
                        } = this.props;
                        null != i && i(e);
                        let {
                            current: s
                        } = this.ref;
                        if (null == s || null != t) {
                            e.keyCode !== m.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === m.KeyboardKeys.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                            s.value = "", null != n && n("");
                            return
                        }
                        l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
            S.Sizes = g, S.defaultProps = {
                size: g.SMALL,
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
            var h = S