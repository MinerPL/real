            "use strict";
            n.r(t), n.d(t, {
                QuickSelectPopout: function() {
                    return _
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("974667"),
                o = n("77078"),
                u = n("145131"),
                d = n("476765"),
                c = n("79808");
            class f extends i.PureComponent {
                render() {
                    let {
                        label: e,
                        value: t,
                        renderValue: n,
                        className: i
                    } = this.props;
                    return (0, l.jsxs)(u.default, {
                        className: s(c.quickSelect, i),
                        align: u.default.Align.CENTER,
                        children: [(0, l.jsx)("div", {
                            className: c.quickSelectLabel,
                            children: e
                        }), (0, l.jsxs)(u.default, {
                            align: u.default.Align.CENTER,
                            className: c.quickSelectClick,
                            children: [(0, l.jsx)("div", {
                                className: c.quickSelectValue,
                                children: null != n ? n(t) : t.label
                            }), (0, l.jsx)("div", {
                                className: c.quickSelectArrow
                            })]
                        })]
                    })
                }
            }
            class E extends i.PureComponent {
                render() {
                    let {
                        selected: e,
                        renderOption: t,
                        option: n
                    } = this.props;
                    return (0, l.jsx)(a.ListNavigatorItem, {
                        id: n.key,
                        children: i => (0, l.jsx)(o.Clickable, {
                            focusProps: {
                                enabled: !1
                            },
                            className: s(c.quickSelectPopoutOption, {
                                selected: e
                            }),
                            onClick: this.handleClick,
                            ...i,
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
                    scroller: i,
                    renderOption: r,
                    onChange: u,
                    className: f
                } = e, _ = s(c.quickSelectPopout, f, {
                    [c.quickSelectPopoutScroll]: i
                }), p = t.map(e => {
                    let t = null != n && e.value === n.value,
                        i = t ? void 0 : u;
                    return (0, l.jsx)(E, {
                        className: c.quickSelectPopoutOption,
                        renderOption: r,
                        option: e,
                        onChange: i,
                        selected: t
                    }, e.key || e.value)
                }), h = (0, d.useUID)(), S = (0, a.default)({
                    id: h,
                    isEnabled: !0,
                    wrap: !0,
                    async scrollToStart() {},
                    async scrollToEnd() {}
                }), {
                    ref: T,
                    ...m
                } = S.containerProps;
                return (0, o.useFocusLock)(T), (0, l.jsx)(a.ListNavigatorProvider, {
                    navigator: S,
                    children: (0, l.jsx)("div", {
                        ref: T,
                        className: _,
                        ...m,
                        role: "listbox",
                        children: i ? (0, l.jsx)(o.Scroller, {
                            className: c.quickSelectScroller,
                            children: p
                        }) : p
                    })
                })
            }
            var p = f