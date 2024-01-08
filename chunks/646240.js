            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                r = n.n(l),
                a = n("77078"),
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
                        inputClassName: l,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: I,
                        onKeyPress: v,
                        autoComplete: E,
                        forwardedRef: C,
                        closeIconClassName: _,
                        searchIconClassName: T,
                        cta: m
                    } = this.props, S = null != i && i.length > 0, A = null != C ? C : this._textInputRef;
                    return (0, s.jsx)(a.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, s.jsxs)("div", {
                            className: r(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, s.jsx)(a.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: r(d.searchBoxInput, l),
                                onChange: h,
                                onFocus: p,
                                onBlur: I,
                                onKeyPress: v,
                                value: S ? i : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: E ? "on" : "off"
                            }), null != m ? (0, s.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: m
                            }) : null, S ? (0, s.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, s.jsx)(u.default, {
                                    className: r(d.clearIcon, _)
                                })
                            }) : (0, s.jsx)(o.default, {
                                className: r(d.searchIcon, T),
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
            var h = i.forwardRef((e, t) => (0, s.jsx)(f, {
                forwardedRef: t,
                ...e
            }))