            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends r.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: r,
                        inputClassName: i,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: I,
                        onKeyPress: v,
                        autoComplete: C,
                        forwardedRef: E,
                        closeIconClassName: T,
                        searchIconClassName: m,
                        cta: _
                    } = this.props, S = null != r && r.length > 0, A = null != E ? E : this._textInputRef;
                    return (0, s.jsx)(a.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, s.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, s.jsx)(a.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: l(d.searchBoxInput, i),
                                onChange: h,
                                onFocus: p,
                                onBlur: I,
                                onKeyPress: v,
                                value: S ? r : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: C ? "on" : "off"
                            }), null != _ ? (0, s.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: _
                            }) : null, S ? (0, s.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, s.jsx)(u.default, {
                                    className: l(d.clearIcon, T)
                                })
                            }) : (0, s.jsx)(o.default, {
                                className: l(d.searchIcon, m),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = r.createRef(), this._containerRef = r.createRef(), this.handleClear = () => {
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
            var h = r.forwardRef((e, t) => (0, s.jsx)(f, {
                forwardedRef: t,
                ...e
            }))