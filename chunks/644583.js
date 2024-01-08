            "use strict";
            l.r(t), l.d(t, {
                roleToPendingAddition: function() {
                    return V
                },
                channelToPendingAddition: function() {
                    return B
                },
                default: function() {
                    return w
                }
            }), l("222007");
            var a, n, s, i, o, d, r = l("37983"),
                u = l("884691"),
                C = l("414456"),
                c = l.n(C),
                f = l("448105"),
                m = l.n(f),
                E = l("446674"),
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
                j = (0, S.uid)(),
                b = "text-sm/medium";

            function O(e) {
                return 1 === e.type
            }

            function D(e) {
                return 0 === e.type
            }

            function V(e) {
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

            function B(e) {
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
            let y = u.memo(function(e) {
                var t;
                let {
                    row: l,
                    guildId: a,
                    className: n
                } = e, {
                    id: s,
                    name: i
                } = l.record, o = (0, _.useRoleIcon)({
                    guildId: a,
                    roleId: s,
                    size: 16
                }), d = (0, E.useStateFromStores)([N.default], () => {
                    let e = N.default.getGuild(a);
                    return null == e ? null : e.roles[s]
                }, [s, a]), u = i.includes(H.EVERYONE_ID) ? "" : "@", C = (0, M.useToken)(M.tokens.unsafe_rawColors.PRIMARY_300).hsl(), f = null !== (t = null == d ? void 0 : d.colorString) && void 0 !== t ? t : C;
                return (0, r.jsxs)("div", {
                    className: c(v.rowLabel, v.roleTagContainer, n),
                    children: [(0, r.jsx)(M.RoleDot, {
                        className: v.roleDot,
                        color: f,
                        background: !1,
                        tooltip: !1
                    }), null != o ? (0, r.jsx)(L.default, {
                        className: v.roleTagIcon,
                        ...o,
                        enableTooltip: !1
                    }) : u, (0, r.jsx)(M.Text, {
                        variant: b,
                        className: v.roleTagLabel,
                        children: i
                    })]
                })
            });

            function U(e) {
                let {
                    channel: t,
                    row: l,
                    className: a
                } = e, n = null != t.parent_id, s = (0, x.getChannelIconComponent)(t);
                return (0, r.jsxs)("div", {
                    className: c(v.rowLabel, v.channelLabel, {
                        [v.hasParent]: n
                    }, a),
                    children: [null != s && (0, r.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: v.channelIcon
                    }), (0, r.jsx)(M.Text, {
                        variant: t.isCategory() ? "eyebrow" : b,
                        children: l.display
                    })]
                })
            }

            function F(e, t, l) {
                return O(e) ? (0, r.jsx)(y, {
                    row: e,
                    guildId: t,
                    className: l
                }, e.record.id) : D(e) ? (0, r.jsx)(U, {
                    row: e,
                    channel: e.record,
                    className: l
                }, e.record.id) : null
            }

            function w(e) {
                let {
                    guildId: t,
                    roleRows: l = [],
                    channelRows: a = [],
                    selectedChannelIds: n = new Set,
                    selectedRoleIds: s = new Set,
                    onChange: i,
                    placeholder: o,
                    helperText: d,
                    className: C
                } = e, f = (0, E.useStateFromStores)([N.default], () => {
                    var e, l;
                    return null !== (l = null === (e = N.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== l ? l : {}
                }, [t]), h = u.useMemo(() => (function(e, t, l) {
                    if (null == e) return {};
                    let a = {};
                    return e.forEach(e => {
                        let t = A.default.getChannel(e);
                        null != t && (a[e] = B(t))
                    }), t.forEach(e => {
                        e in l && (a[e] = V(l[e]))
                    }), a
                })(n, s, f), [n, s, f]), x = u.useMemo(() => Object.keys(h), [h]), [_, H] = u.useState(""), [p, g] = u.useState(!1), [S, L] = u.useState(!1), [b, y] = u.useState(!1), U = u.useRef(null), {
                    sections: w,
                    sectionCounts: Z
                } = u.useMemo(() => {
                    let e = "" !== _ ? a.filter(e => m(_, e.display.toLocaleLowerCase())) : a,
                        t = "" !== _ ? l.filter(e => m(_, e.display.toLocaleLowerCase())) : l,
                        n = [],
                        s = [];
                    return n[0] = e, s[0] = e.length, n[1] = t, s[1] = t.length, {
                        sections: n,
                        sectionCounts: s
                    }
                }, [_, a, l]), k = u.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return D(t)
                        }).map(e => e.row.record.id),
                        a = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return O(t)
                        }).map(e => e.row.record.id);
                    i(new Set(l), new Set(a))
                }, [i]), P = () => {
                    g(!1), L(!1)
                };
                u.useEffect(() => {
                    let e = setTimeout(() => {
                        y(p || S)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [p, S]);
                let Y = (e, t, l) => {
                        l.stopPropagation(), l.preventDefault(), 2 === t ? g(e) : (1 === t || g(e), L(e))
                    },
                    G = u.useCallback(e => {
                        let t = {
                            ...h
                        };
                        D(e) ? t[e.id] = B(e.record) : O(e) && (t[e.id] = V(e.record)), k(t), H(""), P(), setTimeout(() => {
                            var e;
                            let t = null === (e = U.current) || void 0 === e ? void 0 : e.containerRef.current,
                                l = null == t ? void 0 : t.firstChild;
                            null != l && l.scrollTo({
                                top: l.scrollHeight,
                                behavior: "smooth"
                            })
                        }, 16)
                    }, [k, h]),
                    J = u.useCallback(e => {
                        let {
                            section: l,
                            row: a
                        } = e, n = w[l][a];
                        return (0, r.jsx)(M.Clickable, {
                            className: c(v.selectableSearchRow, v.rowHeight),
                            onClick: e => {
                                e.stopPropagation(), G(n)
                            },
                            children: (0, r.jsx)("div", {
                                className: v.rowContainer,
                                children: F(n, t, v.searchRowLabel)
                            })
                        }, n.id)
                    }, [t, G, w]),
                    q = u.useMemo(() => x.map(e => {
                        var l, a;
                        return l = h[e], a = t, {
                            ...l.tag,
                            label: F(l.row, a, v.noIndent)
                        }
                    }), [h, x, t]);
                return (0, r.jsxs)("div", {
                    className: c(v.searchContainer, C),
                    children: [(0, r.jsxs)("div", {
                        className: v.searchBox,
                        children: [(0, r.jsx)(T.default, {
                            tags: q,
                            maxHeight: 98,
                            size: T.default.Sizes.MEDIUM,
                            query: _,
                            ref: U,
                            onRemoveTag: e => {
                                let t = x[e],
                                    {
                                        [t]: l,
                                        ...a
                                    } = h;
                                k(a), H(""), P()
                            },
                            onQueryChange: e => {
                                H(e.trim().toLocaleLowerCase())
                            },
                            placeholder: null != o ? o : I.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
                            sections: [x.length],
                            inputProps: {
                                "aria-labelledby": R,
                                "aria-controls": j,
                                "aria-expanded": b,
                                onFocus: e => Y(!0, 2, e),
                                onBlur: e => Y(!1, 2, e)
                            }
                        }), b && (0, r.jsx)("div", {
                            className: v.resultsListParent,
                            onFocus: e => Y(!0, 1, e),
                            onBlur: e => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, r.jsx)(M.ListAuto, {
                                className: v.resultsListContainer,
                                innerClassName: v.resultsList,
                                sections: Z,
                                renderRow: J,
                                rowHeight: 34,
                                renderSection: e => {
                                    let {
                                        section: t
                                    } = e;
                                    return 0 === t ? (0, r.jsx)(M.FormTitle, {
                                        tag: "h5",
                                        className: c(v.sectionTitle, v.sectionHeight),
                                        children: I.default.Messages.CHANNELS
                                    }, I.default.Messages.CHANNELS) : 1 === t ? (0, r.jsx)(M.FormTitle, {
                                        tag: "h5",
                                        className: c(v.sectionTitle, v.sectionHeight),
                                        children: I.default.Messages.ROLES
                                    }, I.default.Messages.ROLES) : null
                                },
                                renderFooter: e => {
                                    let {
                                        section: t
                                    } = e;
                                    if (0 === t) return 0 === Z[1] && Z[0] > 0 ? null : (0, r.jsx)("div", {
                                        className: v.sectionFooter,
                                        children: (0, r.jsx)(M.FormDivider, {})
                                    });
                                    return null
                                },
                                sectionHeight: 24,
                                footerHeight: e => {
                                    if (0 === e) return 0 === Z[1] && Z[0] > 0 ? 0 : 32;
                                    return 0
                                },
                                role: void 0,
                                innerRole: "listbox",
                                innerId: j,
                                innerAriaOrientation: "vertical"
                            })
                        })]
                    }), null != d && (0, r.jsx)(M.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        className: v.helperText,
                        children: d
                    })]
                })
            }(o = n || (n = {}))[o.CHANNELS = 0] = "CHANNELS", o[o.ROLES = 1] = "ROLES", (d = s || (s = {}))[d.NONE = 0] = "NONE", d[d.LIST = 1] = "LIST", d[d.INPUT = 2] = "INPUT"