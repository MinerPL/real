            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends i.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: i,
                        inputClassName: a,
                        className: f,
                        onChange: p,
                        onFocus: h,
                        onBlur: I,
                        onKeyPress: E,
                        autoComplete: v,
                        forwardedRef: _,
                        closeIconClassName: C,
                        searchIconClassName: T,
                        cta: S
                    } = this.props, A = null != i && i.length > 0, m = null != _ ? _ : this._textInputRef;
                    return (0, s.jsx)(r.FocusRing, {
                        focusTarget: m,
                        ringTarget: this._containerRef,
                        children: (0, s.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, s.jsx)(r.TextInput, {
                                inputRef: m,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: l(d.searchBoxInput, a),
                                onChange: p,
                                onFocus: h,
                                onBlur: I,
                                onKeyPress: E,
                                value: A ? i : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: v ? "on" : "off"
                            }), null != S ? (0, s.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: S
                            }) : null, A ? (0, s.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, s.jsx)(u.default, {
                                    className: l(d.clearIcon, C)
                                })
                            }) : (0, s.jsx)(o.default, {
                                className: l(d.searchIcon, T),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = i.createRef(), this._containerRef = i.createRef(), this.handleClear = () => {
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
            var p = i.forwardRef((e, t) => (0, s.jsx)(f, {
                forwardedRef: t,
                ...e
            }))