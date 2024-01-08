            "use strict";
            l.r(t), l.d(t, {
                MemberRole: function() {
                    return w
                },
                default: function() {
                    return V
                }
            }), l("222007"), l("70102");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                u = l("748820"),
                d = l("974667"),
                c = l("509043"),
                f = l("446674"),
                m = l("669491"),
                p = l("77078"),
                E = l("272030"),
                T = l("851387"),
                h = l("737960"),
                _ = l("206230"),
                S = l("339023"),
                I = l("405645"),
                g = l("592407"),
                A = l("26989"),
                v = l("957255"),
                C = l("697218"),
                N = l("145131"),
                y = l("476765"),
                O = l("945330"),
                M = l("907566"),
                x = l("151185"),
                R = l("483093"),
                L = l("991170"),
                P = l("487311"),
                b = l("49111"),
                D = l("782340"),
                U = l("618600");
            let j = () => Promise.resolve();

            function F(e) {
                let {
                    userRoles: t,
                    position: l,
                    ...a
                } = e, s = (0, y.useUID)();
                return (0, n.jsxs)(p.Dialog, {
                    className: i(U.overflowRolesPopout, {
                        [U.popoutBottom]: "bottom" === l,
                        [U.popoutTop]: "top" === l
                    }),
                    "aria-labelledby": s,
                    children: [(0, n.jsx)("div", {
                        className: U.overflowRolesPopoutArrowWrapper,
                        children: (0, n.jsx)("div", {
                            className: U.overflowRolesPopoutArrow
                        })
                    }), (0, n.jsxs)(N.default, {
                        className: U.overflowRolesPopoutHeader,
                        align: N.default.Align.CENTER,
                        children: [(0, n.jsx)(M.default, {
                            color: m.default.unsafe_rawColors.PRIMARY_400.css,
                            className: U.overflowRolesPopoutHeaderIcon
                        }), (0, n.jsx)("div", {
                            className: U.overflowRolesPopoutHeaderText,
                            id: s,
                            children: D.default.Messages.ROLES_LIST.format({
                                numRoles: t.length
                            })
                        })]
                    }), (0, n.jsx)(B, {
                        ...a,
                        wrap: !0,
                        userRoles: t
                    })]
                })
            }
            let w = a.forwardRef(function(e, t) {
                var s, r, o;
                let u;
                let {
                    canRemove: T,
                    className: h,
                    role: g,
                    onRemove: A,
                    guildId: v,
                    disableBorderColor: C,
                    onMouseDown: N
                } = e, {
                    tabIndex: y,
                    ...M
                } = (0, d.useListItem)(g.id), x = (0, I.useRoleIcon)({
                    roleId: g.id,
                    size: 16,
                    guildId: v
                }), L = (0, f.useStateFromStores)([_.default], () => _.default.roleStyle), P = (null === (s = g.tags) || void 0 === s ? void 0 : s.guild_connections) === null, b = a.useCallback(e => {
                    (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: g.id,
                            label: D.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [g.id]), j = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), F = null !== (r = g.colorString) && void 0 !== r ? r : j, w = null !== (o = (0, c.hex2rgb)(F, .6)) && void 0 !== o ? o : void 0, G = m.default.unsafe_rawColors.WHITE_500.css, k = (0, c.hex2int)(F);
                null != k && .3 > (0, c.getDarkness)(k) && (G = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(S.default, {
                    className: U.roleFlowerStar,
                    iconClassName: T ? U.roleVerifiedIcon : void 0,
                    color: F,
                    size: 14
                }) : "dot" === L ? (0, n.jsx)(p.RoleDot, {
                    className: U.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                }) : (0, n.jsx)(p.RoleCircle, {
                    color: F
                });
                let B = a.useMemo(() => {
                    var t;
                    return {
                        borderColor: C ? void 0 : w,
                        ...null !== (t = e.style) && void 0 !== t ? t : {}
                    }
                }, [w, C, e.style]);
                return (0, n.jsx)(p.FocusRing, {
                    children: (0, n.jsxs)("div", {
                        ref: t,
                        className: i(U.role, h),
                        style: B,
                        onContextMenu: b,
                        onMouseDown: N,
                        "aria-label": g.name,
                        tabIndex: y,
                        ...M,
                        children: [(0, n.jsxs)(p.Clickable, {
                            className: U.roleRemoveButton,
                            onClick: T ? A : void 0,
                            tabIndex: T ? y : -1,
                            focusProps: {
                                focusClassName: U.roleRemoveIconFocused
                            },
                            "aria-hidden": !T,
                            "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                                roleName: g.name
                            }),
                            children: [u, T ? (0, n.jsx)(O.default, {
                                color: G,
                                className: U.roleRemoveIcon,
                                "aria-hidden": !0
                            }) : null]
                        }), null != x ? (0, n.jsx)(R.default, {
                            className: U.roleIcon,
                            ...x,
                            enableTooltip: !1
                        }) : null, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: U.roleName,
                            children: (0, n.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                className: U.roleNameOverflow,
                                children: g.name
                            })
                        })]
                    })
                })
            });

            function G(e) {
                let {
                    user: t,
                    numRolesHidden: l,
                    roleClassName: a
                } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
                return (0, n.jsx)(p.Popout, {
                    renderPopout: t => {
                        let {
                            position: l
                        } = t;
                        return (0, n.jsx)(F, {
                            ...e,
                            position: null != l ? l : "top"
                        })
                    },
                    position: "top",
                    align: "center",
                    children: e => (0, n.jsx)(p.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(U.overflowButton, a),
                            ...s,
                            children: "+".concat(l)
                        })
                    })
                })
            }

            function k(e) {
                let {
                    guild: t,
                    user: l,
                    handleAddRole: a,
                    roleClassName: s
                } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), o = (0, f.useStateFromStores)([_.default], () => _.default.roleStyle), u = v.default.getHighestRole(t), c = A.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && v.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
                return (0, n.jsx)(p.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: l
                        } = e;
                        return (0, n.jsx)(P.default, {
                            guild: t,
                            roleStyle: o,
                            roleFilter: m,
                            onSelect: a,
                            onClose: l
                        })
                    },
                    position: "bottom",
                    align: "center",
                    children: e => (0, n.jsx)(p.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(U.addButton, s),
                            "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                            type: "button",
                            ...r,
                            children: (0, n.jsx)(x.default, {
                                className: U.addButtonIcon,
                                "aria-hidden": !0
                            })
                        })
                    })
                })
            }

            function B(e) {
                let t;
                let {
                    user: l,
                    guild: s,
                    userRoles: r,
                    wrap: c = !0,
                    width: f,
                    className: m,
                    readOnly: p,
                    roleClassName: E,
                    disableBorderColor: h
                } = e, _ = a.useRef({}), S = a.useCallback(e => {
                    var t;
                    let n = r.filter(t => t !== e.id);
                    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? T.default.unassignGuildRoleConnection(s.id, e.id) : g.default.updateMemberRoles(s.id, l.id, n, [], [e.id])
                }, [r, s.id, l.id]), I = a.useCallback(e => {
                    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), g.default.updateMemberRoles(s.id, l.id, t, [e], [])
                }, [r, s.id, l.id]), [A, N] = a.useState(null), y = a.useMemo(() => {
                    let e = Object.values(s.roles).filter(e => r.includes(e.id)).sort((e, t) => {
                        var l, n;
                        let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
                            s = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
                        return a && !s ? 1 : !a && s ? -1 : 0
                    });
                    return null != A ? e.slice(0, A) : e
                }, [s.roles, A, r]), O = r.length - y.length;
                a.useLayoutEffect(() => {
                    if (c) return;
                    if ("number" != typeof f) throw Error("Unexpected null width");
                    let e = 0,
                        t = 0,
                        l = f - 30 - 4;
                    for (let n = 0; n < y.length; n++) {
                        let a = y[n],
                            s = _.current[a.id];
                        if (null == s) continue;
                        let i = s.offsetWidth;
                        if ((t += i + 4) > l) break;
                        e++
                    }
                    N(t => e < y.length ? e : t)
                }, [c, f, y]);
                let M = C.default.getCurrentUser();
                o(null != M, "MemberRolesList: currentUser cannot be undefined");
                let x = !p && v.default.can(b.Permissions.MANAGE_ROLES, s),
                    R = L.default.getHighestRole(s, M.id),
                    P = a.useMemo(() => "roles-".concat((0, u.v4)()), []),
                    F = (0, d.default)({
                        id: P,
                        isEnabled: !0,
                        scrollToStart: j,
                        scrollToEnd: j,
                        wrap: !0
                    }),
                    B = y.map(e => {
                        var t;
                        return (0, n.jsx)(w, {
                            className: E,
                            role: e,
                            canRemove: x && L.default.isRoleHigher(s, M.id, R, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === M.id,
                            onRemove: () => S(e),
                            ref: t => {
                                var l, n;
                                return l = e.id, void(null != (n = t) ? _.current[l] = n : delete _.current[l])
                            },
                            guildId: s.id,
                            disableBorderColor: h
                        }, e.id)
                    });
                return null != A && 0 !== O ? t = (0, n.jsx)(G, {
                    ...e,
                    numRolesHidden: O
                }) : x && (t = (0, n.jsx)(k, {
                    ...e,
                    handleAddRole: I
                })), (0, n.jsx)(d.ListNavigatorProvider, {
                    navigator: F,
                    children: (0, n.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: l,
                                ...a
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: i(U.root, m),
                                "aria-label": D.default.Messages.ROLES_LIST.format({
                                    numRoles: r.length
                                }),
                                ref: l,
                                ...a,
                                children: [B, t]
                            })
                        }
                    })
                })
            }
            let Y = (0, h.default)(B);

            function V(e) {
                return (0, f.useStateFromStores)([v.default], () => {
                    var t;
                    return v.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                }), !1 === e.wrap ? (0, n.jsx)(Y, {
                    ...e
                }) : (0, n.jsx)(B, {
                    ...e
                })
            }