            "use strict";
            l.r(t), l.d(t, {
                roleToPendingAddition: function() {
                    return D
                },
                channelToPendingAddition: function() {
                    return V
                },
                default: function() {
                    return F
                }
            }), l("222007");
            var a, n, s, i, o, d, C = l("37983"),
                r = l("884691"),
                u = l("414456"),
                c = l.n(u),
                f = l("448105"),
                E = l.n(f),
                m = l("446674"),
                M = l("77078"),
                T = l("137223"),
                h = l("679653"),
                x = l("419830"),
                _ = l("405645"),
                H = l("19766"),
                A = l("42203"),
                N = l("305961"),
                p = l("27618"),
                g = l("697218"),
                S = l("476765"),
                L = l("483093"),
                I = l("782340"),
                v = l("159260");
            let R = (0, S.uid)(),
                j = (0, S.uid)();

            function b(e) {
                return 1 === e.type
            }

            function O(e) {
                return 0 === e.type
            }

            function D(e) {
                let t = "".concat(e.name.includes(H.EVERYONE_ID) ? "" : "@").concat(e.name);
                return {
                    tag: {
                        type: T.RichTagTypes.ROLE,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: 1,
                        record: e
                    }
                }
            }

            function V(e) {
                let t = (0, h.computeChannelName)(e, g.default, p.default);
                return {
                    tag: {
                        type: T.RichTagTypes.CHANNEL,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: 0,
                        record: e
                    }
                }
            }(i = a || (a = {}))[i.CHANNEL = 0] = "CHANNEL", i[i.ROLE = 1] = "ROLE";
            let B = r.memo(function(e) {
                let {
                    row: t,
                    guildId: l
                } = e, {
                    id: a,
                    name: n
                } = t.record, s = (0, _.useRoleIcon)({
                    guildId: l,
                    roleId: a,
                    size: 16
                }), i = n.includes(H.EVERYONE_ID) ? "" : "@";
                return (0, C.jsx)("div", {
                    className: v.roleTagContainer,
                    children: (0, C.jsxs)("div", {
                        className: v.roleTag,
                        children: [null != s ? (0, C.jsx)(L.default, {
                            className: v.roleTagIcon,
                            ...s,
                            enableTooltip: !1
                        }) : i, (0, C.jsx)("span", {
                            className: v.roleTagLabel,
                            children: n
                        })]
                    })
                }, a)
            });

            function y(e, t) {
                return b(e) ? (0, C.jsx)(B, {
                    row: e,
                    guildId: t
                }) : O(e) ? (0, C.jsx)(U, {
                    channel: e.record,
                    className: v.noIndent,
                    children: e.display
                }, e.record.id) : null
            }

            function U(e) {
                let {
                    channel: t,
                    children: l,
                    className: a
                } = e, n = null != t.parent_id, s = (0, x.getChannelIconComponent)(t), i = (0, C.jsx)(M.Text, {
                    variant: "text-xs/medium",
                    children: l
                });
                return t.isCategory() && (i = (0, C.jsx)(M.Text, {
                    variant: "eyebrow",
                    children: l
                })), (0, C.jsxs)("div", {
                    className: c(v.rowLabel, v.channelLabel, {
                        [v.hasParent]: n
                    }, a),
                    children: [null != s && (0, C.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: v.channelIcon
                    }), i]
                })
            }

            function F(e) {
                let {
                    guildId: t,
                    roleRows: l = [],
                    channelRows: a = [],
                    selectedChannelIds: n = new Set,
                    selectedRoleIds: s = new Set,
                    onChange: i,
                    placeholder: o
                } = e, d = (0, m.useStateFromStores)([N.default], () => {
                    var e, l;
                    return null !== (l = null === (e = N.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== l ? l : {}
                }, [t]), u = r.useMemo(() => (function(e, t, l) {
                    if (null == e) return {};
                    let a = {};
                    return e.forEach(e => {
                        let t = A.default.getChannel(e);
                        null != t && (a[e] = V(t))
                    }), t.forEach(e => {
                        e in l && (a[e] = D(l[e]))
                    }), a
                })(n, s, d), [n, s, d]), f = r.useMemo(() => Object.keys(u), [u]), [h, x] = r.useState(""), [_, H] = r.useState(!1), [p, g] = r.useState(!1), [S, L] = r.useState(!1), {
                    sections: B,
                    sectionCounts: F
                } = r.useMemo(() => {
                    let e = "" !== h ? a.filter(e => E(h, e.display.toLocaleLowerCase())) : a,
                        t = "" !== h ? l.filter(e => E(h, e.display.toLocaleLowerCase())) : l,
                        n = [],
                        s = [];
                    return n[0] = e, s[0] = e.length, n[1] = t, s[1] = t.length, {
                        sections: n,
                        sectionCounts: s
                    }
                }, [h, a, l]), w = r.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return O(t)
                        }).map(e => e.row.record.id),
                        a = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return b(t)
                        }).map(e => e.row.record.id);
                    i(new Set(l), new Set(a))
                }, [i]), Z = () => {
                    H(!1), g(!1)
                };
                r.useEffect(() => {
                    let e = setTimeout(() => {
                        L(_ || p)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [_, p]);
                let P = (e, t, l) => {
                        l.stopPropagation(), l.preventDefault(), 2 === t ? H(e) : (1 === t || H(e), g(e))
                    },
                    k = r.useCallback(e => {
                        let t = {
                            ...u
                        };
                        O(e) ? t[e.id] = V(e.record) : b(e) && (t[e.id] = D(e.record)), w(t), x(""), Z()
                    }, [w, u]),
                    Y = r.useCallback(e => {
                        let {
                            section: l,
                            row: a
                        } = e, n = B[l][a], s = O(n), i = b(n);
                        return (0, C.jsx)(M.Clickable, {
                            className: c(v.selectableSearchRow, v.rowHeight),
                            onClick: e => {
                                e.stopPropagation(), k(n)
                            },
                            children: (0, C.jsx)("div", {
                                className: v.rowContainer,
                                children: s ? (0, C.jsx)(U, {
                                    channel: n.record,
                                    className: v.channelRowLabel,
                                    children: n.display
                                }, n.record.id) : i ? (0, C.jsx)(M.Text, {
                                    className: c(v.rowLabel, v.roleLabel),
                                    variant: "text-xs/medium",
                                    children: y(n, t)
                                }) : null
                            })
                        }, n.id)
                    }, [t, k, B]),
                    G = r.useMemo(() => f.map(e => {
                        var l, a;
                        return l = u[e], a = t, {
                            ...l.tag,
                            label: y(l.row, a)
                        }
                    }), [u, f, t]);
                return (0, C.jsx)("div", {
                    className: v.searchContainer,
                    children: (0, C.jsxs)("div", {
                        className: v.searchBox,
                        children: [(0, C.jsx)(T.default, {
                            tags: G,
                            maxHeight: 98,
                            size: T.default.Sizes.MEDIUM,
                            query: h,
                            onRemoveTag: e => {
                                let t = f[e],
                                    {
                                        [t]: l,
                                        ...a
                                    } = u;
                                w(a), x(""), Z()
                            },
                            onQueryChange: e => {
                                x(e.trim().toLocaleLowerCase())
                            },
                            placeholder: null != o ? o : I.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
                            sections: [f.length],
                            inputProps: {
                                "aria-labelledby": R,
                                "aria-controls": j,
                                "aria-expanded": S,
                                onFocus: e => P(!0, 2, e),
                                onBlur: e => P(!1, 2, e)
                            }
                        }), S && (0, C.jsx)("div", {
                            className: v.resultsListParent,
                            onFocus: e => P(!0, 1, e),
                            onBlur: e => P(!1, 1, e),
                            tabIndex: -1,
                            children: (0, C.jsx)(M.ListAuto, {
                                className: v.resultsList,
                                sections: F,
                                renderRow: Y,
                                rowHeight: 24,
                                renderSection: e => {
                                    let {
                                        section: t
                                    } = e;
                                    return 0 === t ? (0, C.jsx)(M.FormTitle, {
                                        tag: "h5",
                                        className: c(v.sectionTitle, v.sectionHeight),
                                        children: I.default.Messages.TEXT_CHANNELS
                                    }, I.default.Messages.TEXT_CHANNELS) : 1 === t ? (0, C.jsx)(M.FormTitle, {
                                        tag: "h5",
                                        className: c(v.sectionTitle, v.sectionHeight),
                                        children: I.default.Messages.ROLES
                                    }, I.default.Messages.ROLES) : null
                                },
                                renderFooter: e => {
                                    let {
                                        section: t
                                    } = e;
                                    if (0 === t) return 0 === F[1] && F[0] > 0 ? null : (0, C.jsx)("div", {
                                        className: v.sectionFooter,
                                        children: (0, C.jsx)(M.FormDivider, {})
                                    });
                                    return null
                                },
                                sectionHeight: 32,
                                footerHeight: e => {
                                    if (0 === e) return 0 === F[1] && F[0] > 0 ? 0 : 32;
                                    return 0
                                },
                                role: void 0,
                                innerRole: "listbox",
                                innerId: j,
                                innerAriaOrientation: "vertical"
                            })
                        })]
                    })
                })
            }(o = n || (n = {}))[o.CHANNELS = 0] = "CHANNELS", o[o.ROLES = 1] = "ROLES", (d = s || (s = {}))[d.NONE = 0] = "NONE", d[d.LIST = 1] = "LIST", d[d.INPUT = 2] = "INPUT"