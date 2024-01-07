            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("227645"),
                l = n("718776"),
                u = n("242670"),
                c = n("945330"),
                d = n("229915"),
                f = n("782340"),
                E = n("62184");
            let h = Object.freeze({
                    SMALL: E.small,
                    MEDIUM: E.medium,
                    LARGE: E.large
                }),
                p = e => {
                    let {
                        hasContent: t,
                        onClear: n,
                        className: s,
                        isLoading: l,
                        size: p = h.SMALL
                    } = e;
                    return (0, i.jsx)(o.Clickable, {
                        className: a(s, E.iconLayout, p, {
                            [E.pointer]: t
                        }),
                        onClick: e => {
                            e.stopPropagation(), null != n && n(e)
                        },
                        tabIndex: t ? 0 : -1,
                        "aria-hidden": !t,
                        onMouseDown: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, i.jsx)("div", {
                            className: E.iconContainer,
                            children: l ? (0, i.jsx)(u.Spinner, {
                                type: u.Spinner.Type.SPINNING_CIRCLE,
                                className: a(E.icon, E.visible)
                            }) : (0, i.jsxs)(r.Fragment, {
                                children: [(0, i.jsx)(d.default, {
                                    className: a(E.icon, {
                                        [E.visible]: !t
                                    }),
                                    "aria-label": f.default.Messages.SEARCH
                                }), (0, i.jsx)(c.default, {
                                    className: a(E.clear, {
                                        [E.visible]: t
                                    }),
                                    "aria-label": f.default.Messages.CLEAR
                                })]
                            })
                        })
                    })
                };
            p.Sizes = h;
            class _ extends r.PureComponent {
                focus() {
                    let {
                        current: e
                    } = this.inputRef;
                    null == e || e.focus()
                }
                blur() {
                    let {
                        current: e
                    } = this.inputRef;
                    null == e || e.blur()
                }
                render() {
                    let {
                        query: e,
                        autoFocus: t,
                        onClear: n,
                        className: r,
                        placeholder: s = f.default.Messages.SEARCH,
                        iconClassName: o,
                        onKeyDown: u,
                        onKeyUp: c,
                        onKeyPress: d,
                        isLoading: h,
                        size: _,
                        disabled: S,
                        onChange: m,
                        onBlur: T,
                        onFocus: g,
                        autoComplete: I,
                        inputProps: C,
                        hideSearchIcon: v,
                        "aria-label": A = f.default.Messages.SEARCH,
                        ...R
                    } = this.props;
                    return (0, i.jsx)(l.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, i.jsx)("div", {
                            className: a(r, E.container, _, {
                                [E.disabled]: S
                            }),
                            ref: this.containerRef,
                            ...R,
                            children: (0, i.jsxs)("div", {
                                className: E.inner,
                                children: [(0, i.jsx)("input", {
                                    ...C,
                                    onFocus: g,
                                    onBlur: T,
                                    className: E.input,
                                    value: e,
                                    onChange: this.handleOnChange,
                                    onKeyDown: u,
                                    onKeyUp: c,
                                    onKeyPress: d,
                                    placeholder: s,
                                    disabled: S,
                                    autoFocus: t,
                                    autoComplete: I,
                                    "aria-label": A,
                                    ref: this.inputRef
                                }), !v && (0, i.jsx)(p, {
                                    size: _,
                                    hasContent: e.length > 0,
                                    onClear: n,
                                    className: o,
                                    isLoading: h
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleOnChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            _.Sizes = h, _.defaultProps = {
                size: h.SMALL,
                isLoading: !1,
                disabled: !1
            };
            var S = _