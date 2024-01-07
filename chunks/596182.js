            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("563911"),
                u = n("258078"),
                d = n("286217"),
                c = n("355263"),
                f = n("406291"),
                p = n("782340"),
                m = n("333209");

            function h(e, t, n) {
                return (0, l.jsx)(d.default, {
                    className: m.option,
                    name: e.displayName,
                    state: t,
                    onClick: n
                }, e.name)
            }

            function E(e) {
                let {
                    command: t,
                    optionStates: n,
                    onOptionClick: r
                } = e, {
                    requiredOptions: o,
                    setOptionalOptions: a,
                    unsetOptionalOptions: d
                } = i.useMemo(() => {
                    var e, l, i, r;
                    let o = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
                        s = null !== (r = null === (l = t.options) || void 0 === l ? void 0 : l.filter(e => !e.required)) && void 0 !== r ? r : [],
                        a = s.filter(e => {
                            var t;
                            return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                        }),
                        u = s.filter(e => {
                            var t;
                            return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                        });
                    return {
                        requiredOptions: o,
                        setOptionalOptions: a,
                        unsetOptionalOptions: u
                    }
                }, [t.options, n]), c = (0, l.jsx)("div", {
                    className: m.optionalNames,
                    children: d.map(e => (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.displayName
                    }, e.name))
                }), f = o.map(e => h(e, null == n ? void 0 : n[e.name], r)), E = a.length > 0 ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(s.Heading, {
                        className: m.optionalHeader,
                        variant: "heading-deprecated-12/semibold",
                        children: p.default.Messages.COMMANDS_OPTIONAL_HEADER
                    }), a.map(e => h(e, null == n ? void 0 : n[e.name], r))]
                }) : null, S = d.length > 0 ? (0, l.jsx)(s.Tooltip, {
                    text: c,
                    "aria-label": !1,
                    delay: 200,
                    children: e => (0, l.jsx)(u.default, {
                        className: m.optionalCount,
                        color: u.default.Colors.MUTED,
                        ...e,
                        children: 0 === a.length ? p.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                            count: d.length
                        }) : p.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                            count: d.length
                        })
                    })
                }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [f, null != E || null != S ? (0, l.jsxs)("div", {
                        className: m.optionals,
                        children: [E, S]
                    }) : null]
                })
            }

            function S(e) {
                var t, n, r;
                let s, {
                        command: u,
                        activeOptionName: d,
                        channel: p,
                        showOptions: h,
                        showImage: S,
                        optionStates: g,
                        onOptionClick: C,
                        section: T,
                        isSelectable: v = !0
                    } = e,
                    y = i.useMemo(() => {
                        var e;
                        return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
                    }, [d, u]),
                    x = null != d ? null == g ? void 0 : g[d] : null;
                s = null != x && (null === (t = x.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = x.lastValidationResult.error) && void 0 !== n ? n : "" : null;
                let I = S && null != T ? (0, c.getIconComponent)(T) : null;
                return (0, l.jsxs)("div", {
                    className: o(m.wrapper, v ? null : m.disabled),
                    children: [null != I ? (0, l.jsx)(I, {
                        className: m.image,
                        channel: p,
                        section: T,
                        width: 32,
                        height: 32
                    }) : null, (0, l.jsxs)("div", {
                        className: m.infoWrapper,
                        children: [(0, l.jsxs)("div", {
                            className: m.usageWrapper,
                            children: [(0, l.jsx)(a.AutocompleteRowHeading, {
                                className: m.title,
                                children: f.COMMAND_SENTINEL + u.displayName
                            }), h ? (0, l.jsx)(E, {
                                command: u,
                                optionStates: g,
                                onOptionClick: C
                            }) : null]
                        }), (0, l.jsx)(a.AutocompleteRowSubheading, {
                            className: o(m.description, null != s ? m.error : null),
                            children: null !== (r = null != s ? s : null == y ? void 0 : y.displayDescription) && void 0 !== r ? r : u.displayDescription
                        })]
                    }), (0, l.jsx)(a.AutocompleteRowContentSecondary, {
                        className: m.source,
                        children: null == T ? void 0 : T.name
                    })]
                })
            }