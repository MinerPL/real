            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("381546"),
                u = n("229915"),
                d = n("782340"),
                c = n("913893");
            class f extends l.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: l,
                        inputClassName: s,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: m,
                        onKeyPress: E,
                        autoComplete: C,
                        forwardedRef: g,
                        closeIconClassName: S,
                        searchIconClassName: _,
                        cta: I
                    } = this.props, T = null != l && l.length > 0, v = null != g ? g : this._textInputRef;
                    return (0, a.jsx)(r.FocusRing, {
                        focusTarget: v,
                        ringTarget: this._containerRef,
                        children: (0, a.jsxs)("div", {
                            className: i(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, a.jsx)(r.TextInput, {
                                inputRef: v,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: i(c.searchBoxInput, s),
                                onChange: h,
                                onFocus: p,
                                onBlur: m,
                                onKeyPress: E,
                                value: T ? l : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: C ? "on" : "off"
                            }), null != I ? (0, a.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: I
                            }) : null, T ? (0, a.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, a.jsx)(o.default, {
                                    className: i(c.clearIcon, S)
                                })
                            }) : (0, a.jsx)(u.default, {
                                className: i(c.searchIcon, _),
                                "aria-label": d.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = l.createRef(), this._containerRef = l.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var h = l.forwardRef((e, t) => (0, a.jsx)(f, {
                forwardedRef: t,
                ...e
            }))