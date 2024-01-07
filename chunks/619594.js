            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return K
                }
            }), l("222007"), l("424973"), l("808653");
            var n, a, s, r, o, i, u = l("37983"),
                d = l("884691"),
                c = l("414456"),
                h = l.n(c),
                m = l("714617"),
                N = l.n(m),
                f = l("448105"),
                x = l.n(f),
                O = l("446674"),
                E = l("77078"),
                g = l("137223"),
                v = l("656038"),
                I = l("679653"),
                T = l("419830"),
                R = l("405645"),
                C = l("19766"),
                L = l("42203"),
                _ = l("923959"),
                j = l("305961"),
                p = l("27618"),
                P = l("697218"),
                M = l("476765"),
                S = l("483093"),
                A = l("991170"),
                b = l("49111"),
                w = l("782340"),
                H = l("470514");
            let D = (0, M.uid)(),
                B = (0, M.uid)(),
                y = (0, M.uid)(),
                k = (0, M.uid)();

            function U(e) {
                return "ROLE" === e.type
            }

            function G(e) {
                return "CHANNEL" === e.type
            }

            function F(e) {
                let t = "".concat(e.name.includes(C.EVERYONE_ID) ? "" : "@").concat(e.name);
                return {
                    tag: {
                        type: g.RichTagTypes.ROLE,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: "ROLE",
                        record: e
                    }
                }
            }

            function z(e) {
                let t = (0, I.computeChannelName)(e, P.default, p.default);
                return {
                    tag: {
                        type: g.RichTagTypes.CHANNEL,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: "CHANNEL",
                        record: e
                    }
                }
            }(r = n || (n = {})).CHANNEL = "CHANNEL", r.ROLE = "ROLE";
            let V = d.memo(function(e) {
                let {
                    row: t,
                    guildId: l
                } = e, {
                    id: n,
                    name: a
                } = t.record, s = (0, R.useRoleIcon)({
                    guildId: l,
                    roleId: n,
                    size: 16
                }), r = a.includes(C.EVERYONE_ID) ? "" : "@";
                return (0, u.jsx)("div", {
                    className: H.roleTagContainer,
                    children: (0, u.jsxs)("div", {
                        className: H.roleTag,
                        children: [null != s ? (0, u.jsx)(S.default, {
                            className: H.roleTagIcon,
                            ...s,
                            enableTooltip: !1
                        }) : r, (0, u.jsx)(E.Text, {
                            className: H.roleTagLabel,
                            variant: "text-xs/medium",
                            children: a
                        })]
                    })
                }, n)
            });

            function Y(e, t) {
                return U(e) ? (0, u.jsx)(V, {
                    row: e,
                    guildId: t
                }) : G(e) ? (0, u.jsx)(X, {
                    channel: e.record,
                    className: H.noIndent,
                    children: e.display
                }, e.record.id) : null
            }

            function Q(e, t) {
                return {
                    ...e.tag,
                    label: Y(e.row, t)
                }
            }

            function X(e) {
                let {
                    channel: t,
                    children: l,
                    className: n
                } = e, a = null != t.parent_id, s = (0, T.getChannelIconComponent)(t), r = (0, u.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    children: l
                });
                return t.isCategory() && (r = (0, u.jsx)(E.Text, {
                    variant: "eyebrow",
                    children: l
                })), (0, u.jsxs)("div", {
                    className: h(H.rowLabel, H.channelLabel, {
                        [H.hasParent]: a
                    }, n),
                    children: [null != s && (0, u.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: H.channelIcon
                    }), r]
                })
            }

            function q(e) {
                let {
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    roleRows: a,
                    channelRows: s,
                    onChannelChange: r,
                    onRoleChange: o
                } = e, i = (0, O.useStateFromStores)([j.default], () => {
                    var e, l;
                    return null !== (l = null === (e = j.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== l ? l : {}
                }, [t]), c = d.useMemo(() => (function(e) {
                    if (null == e) return {};
                    let t = {};
                    return e.forEach(e => {
                        let l = L.default.getChannel(e);
                        null != l && (t[e] = z(l))
                    }), t
                })(l), [l]), m = d.useMemo(() => Object.keys(c), [c]), N = d.useMemo(() => (function(e, t) {
                    let l = {};
                    return e.forEach(e => {
                        e in t && (l[e] = F(t[e]))
                    }), l
                })(n, i), [n, i]), f = d.useMemo(() => Object.keys(N), [N]), [v, I] = d.useState(""), [T, R] = d.useState(""), [C, _] = d.useState(!1), [p, P] = d.useState(!1), [M, S] = d.useState(!1), [A, b] = d.useState(!1), [V, q] = d.useState(!1), [K, J] = d.useState(!1), {
                    sections: W,
                    sectionCounts: Z
                } = d.useMemo(() => {
                    let e = "" !== v ? s.filter(e => x(v, e.display.toLocaleLowerCase())) : s,
                        t = [],
                        l = [];
                    return t[0] = e, l[0] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [v, s]), {
                    sections: $,
                    sectionCounts: ee
                } = d.useMemo(() => {
                    let e = "" !== T ? a.filter(e => x(T, e.display.toLocaleLowerCase())) : a,
                        t = [],
                        l = [];
                    return t[1] = e, l[1] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [T, a]), et = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return G(t)
                        }).map(e => e.row.record.id);
                    r(new Set(l))
                }, [r]), el = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return U(t)
                        }).map(e => e.row.record.id);
                    o(new Set(l))
                }, [o]), en = e => {
                    e ? (_(!1), P(!1)) : (S(!1), b(!1))
                };
                d.useEffect(() => {
                    let e = setTimeout(() => {
                        q(C || p)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [C, p]), d.useEffect(() => {
                    let e = setTimeout(() => {
                        J(M || A)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [M, A]);
                let ea = (e, t, l, n) => {
                        l.stopPropagation(), l.preventDefault(), "INPUT" === t ? n ? _(e) : S(e) : "LIST" === t ? n ? P(e) : b(e) : n ? (_(e), P(e)) : (S(e), b(e))
                    },
                    es = d.useCallback(e => {
                        let t = {
                            ...c
                        };
                        t[e.id] = z(e.record), et(t), I("")
                    }, [et, c]),
                    er = d.useCallback(e => {
                        let t = {
                            ...N
                        };
                        t[e.id] = F(e.record), el(t), R("")
                    }, [el, N]),
                    eo = d.useRef(null),
                    ei = d.useRef(null),
                    eu = d.useCallback(e => {
                        let {
                            section: t,
                            row: l
                        } = e, n = W[t][l];
                        return (0, u.jsx)(E.Clickable, {
                            className: h(H.selectableSearchRow, H.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), es(n), null === (t = eo.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: H.rowContainer,
                                children: (0, u.jsx)(X, {
                                    channel: n.record,
                                    className: H.channelRowLabel,
                                    children: n.display
                                }, n.record.id)
                            })
                        }, n.id)
                    }, [es, W]),
                    ed = d.useCallback(e => {
                        let {
                            section: l,
                            row: n
                        } = e, a = $[l][n];
                        return (0, u.jsx)(E.Clickable, {
                            className: h(H.selectableSearchRow, H.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), er(a), null === (t = ei.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: H.rowContainer,
                                children: (0, u.jsx)(E.Text, {
                                    className: h(H.rowLabel, H.roleLabel),
                                    variant: "text-xs/medium",
                                    children: Y(a, t)
                                })
                            })
                        }, a.id)
                    }, [t, er, $]),
                    ec = d.useMemo(() => m.map(e => Q(c[e], t)), [c, m, t]),
                    eh = d.useMemo(() => f.map(e => Q(N[e], t)), [N, f, t]);
                return (0, u.jsxs)("div", {
                    className: H.channelAndRoleContainer,
                    children: [(0, u.jsx)("div", {
                        className: H.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: H.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: ec,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: v,
                                onRemoveTag: e => {
                                    let t = m[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = c;
                                    et(n), I(""), en(!0)
                                },
                                onQueryChange: e => {
                                    I(e.trim().toLocaleLowerCase())
                                },
                                placeholder: w.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                                sections: [m.length],
                                inputProps: {
                                    "aria-labelledby": D,
                                    "aria-controls": B,
                                    "aria-expanded": V,
                                    onFocus: e => ea(!0, "INPUT", e, !0),
                                    onBlur: e => ea(!1, "INPUT", e, !0)
                                }
                            }), V && (0, u.jsx)("div", {
                                ref: eo,
                                className: H.resultsListParent,
                                onFocus: e => ea(!0, "LIST", e, !0),
                                onBlur: e => ea(!1, "LIST", e, !0),
                                tabIndex: -1,
                                children: (0, u.jsx)(E.ListAuto, {
                                    className: H.resultsList,
                                    sections: Z,
                                    renderRow: eu,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: B,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(E.Text, {
                        className: H.helperText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS
                    }), (0, u.jsx)("div", {
                        className: H.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: H.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: eh,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: T,
                                onRemoveTag: e => {
                                    let t = f[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = N;
                                    el(n), R(""), en(!1)
                                },
                                onQueryChange: e => {
                                    R(e.trim().toLocaleLowerCase())
                                },
                                placeholder: w.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                                sections: [f.length],
                                inputProps: {
                                    "aria-labelledby": y,
                                    "aria-controls": k,
                                    "aria-expanded": K,
                                    onFocus: e => ea(!0, "INPUT", e, !1),
                                    onBlur: e => ea(!1, "INPUT", e, !1)
                                }
                            }), K && (0, u.jsx)("div", {
                                ref: ei,
                                className: H.resultsListParent,
                                onFocus: e => ea(!0, "LIST", e, !1),
                                onBlur: e => ea(!1, "LIST", e, !1),
                                tabIndex: -1,
                                children: (0, u.jsx)(E.ListAuto, {
                                    className: H.resultsList,
                                    sections: ee,
                                    renderRow: ed,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: k,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(E.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT
                    })]
                })
            }

            function K(e) {
                let {
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    onChannelChange: a,
                    onRoleChange: s,
                    disableEveryoneRole: r,
                    includeRoleRestrictedPrivateChannels: o = !1
                } = e, {
                    channelRows: i,
                    roleRows: d
                } = (0, O.useStateFromStores)([j.default, P.default, _.default], () => {
                    var e, a;
                    let s = _.default.getChannels(t)[b.ChannelTypes.GUILD_CATEGORY],
                        i = [..._.default.getChannels(t)[_.GUILD_SELECTABLE_CHANNELS_KEY], ..._.default.getChannels(t)[_.GUILD_VOCAL_CHANNELS_KEY]],
                        u = [],
                        d = {};
                    s.forEach(e => {
                        let {
                            channel: t,
                            comparator: l
                        } = e;
                        "null" !== t.id && (d[t.id] = [], u.push({
                            channel: t,
                            comparator: l
                        }))
                    }), i.forEach(e => {
                        let {
                            channel: t,
                            comparator: n
                        } = e;
                        if (!(t.isThread() || l.has(t.id))) !(!o && (0, v.default)(t)) && (null == t.parent_id ? u.push({
                            channel: t,
                            comparator: n
                        }) : (null == d[t.parent_id] && (d[t.parent_id] = []), d[t.parent_id].push({
                            channel: t,
                            comparator: n
                        })))
                    });
                    let c = u.sort((e, t) => {
                            let {
                                comparator: l,
                                channel: n
                            } = e, {
                                comparator: a,
                                channel: s
                            } = t;
                            return n.isCategory() && !s.isCategory() ? 1 : !n.isCategory() && s.isCategory() ? -1 : a - l
                        }).reduce((e, t) => {
                            let {
                                channel: n
                            } = t;
                            if (n.isGuildStageVoice() || n.isThread() || l.has(n.id)) return e;
                            e.push(z(n).row);
                            let a = d[n.id];
                            return null != a && a.length > 0 && a.forEach(t => {
                                let {
                                    channel: l
                                } = t;
                                e.push(z(l).row)
                            }), e
                        }, []),
                        h = j.default.getGuild(t),
                        m = P.default.getCurrentUser();
                    if (null == h || null == m) return {
                        channelRows: [],
                        roleRows: []
                    };
                    let N = A.default.getHighestRole(h, m.id),
                        f = Object.values(null !== (a = null === (e = j.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== a ? a : {}).filter(e => !e.managed).filter(e => !n.has(e.id)).filter(e => !r || e.id !== t).filter(e => A.default.isRoleHigher(h, m.id, N, e)).map(e => F(e).row);
                    return {
                        channelRows: c,
                        roleRows: f
                    }
                }, [r, t, o, l, n], N);
                return (0, u.jsx)(q, {
                    channelRows: i,
                    roleRows: d,
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    onChannelChange: a,
                    onRoleChange: s
                })
            }(o = a || (a = {}))[o.CHANNELS = 0] = "CHANNELS", o[o.ROLES = 1] = "ROLES", (i = s || (s = {})).NONE = "NONE", i.LIST = "LIST", i.INPUT = "INPUT"