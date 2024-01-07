            "use strict";
            n.r(t), n.d(t, {
                QuickSelectPopout: function() {
                    return _
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("974667"),
                u = n("77078"),
                o = n("145131"),
                d = n("476765"),
                c = n("79808");
            class f extends l.PureComponent {
                render() {
                    let {
                        label: e,
                        value: t,
                        renderValue: n,
                        className: l
                    } = this.props;
                    return (0, i.jsxs)(o.default, {
                        className: s(c.quickSelect, l),
                        align: o.default.Align.CENTER,
                        children: [(0, i.jsx)("div", {
                            className: c.quickSelectLabel,
                            children: e
                        }), (0, i.jsxs)(o.default, {
                            align: o.default.Align.CENTER,
                            className: c.quickSelectClick,
                            children: [(0, i.jsx)("div", {
                                className: c.quickSelectValue,
                                children: null != n ? n(t) : t.label
                            }), (0, i.jsx)("div", {
                                className: c.quickSelectArrow
                            })]
                        })]
                    })
                }
            }
            class E extends l.PureComponent {
                render() {
                    let {
                        selected: e,
                        renderOption: t,
                        option: n
                    } = this.props;
                    return (0, i.jsx)(a.ListNavigatorItem, {
                        id: n.key,
                        children: l => (0, i.jsx)(u.Clickable, {
                            focusProps: {
                                enabled: !1
                            },
                            className: s(c.quickSelectPopoutOption, {
                                selected: e
                            }),
                            onClick: this.handleClick,
                            ...l,
                            role: "option",
                            children: t(n, e)
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        let {
                            option: e,
                            onChange: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }

            function _(e) {
                let {
                    options: t,
                    value: n,
                    scroller: l,
                    renderOption: r,
                    onChange: o,
                    className: f
                } = e, _ = s(c.quickSelectPopout, f, {
                    [c.quickSelectPopoutScroll]: l
                }), p = t.map(e => {
                    let t = null != n && e.value === n.value,
                        l = t ? void 0 : o;
                    return (0, i.jsx)(E, {
                        className: c.quickSelectPopoutOption,
                        renderOption: r,
                        option: e,
                        onChange: l,
                        selected: t
                    }, e.key || e.value)
                }), h = (0, d.useUID)(), S = (0, a.default)({
                    id: h,
                    isEnabled: !0,
                    wrap: !0,
                    async scrollToStart() {},
                    async scrollToEnd() {}
                }), {
                    ref: m,
                    ...M
                } = S.containerProps;
                return (0, u.useFocusLock)(m), (0, i.jsx)(a.ListNavigatorProvider, {
                    navigator: S,
                    children: (0, i.jsx)("div", {
                        ref: m,
                        className: _,
                        ...M,
                        role: "listbox",
                        children: l ? (0, i.jsx)(u.Scroller, {
                            className: c.quickSelectScroller,
                            children: p
                        }) : p
                    })
                })
            }
            var p = f