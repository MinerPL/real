(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24864"], {
        840489: function(e, l, a) {
            "use strict";
            a.r(l), a.d(l, {
                default: function() {
                    return M
                }
            });
            var s = a("920040"),
                t = a("773670"),
                o = a("575482"),
                i = a.n(o),
                d = a("754013"),
                r = a("77078"),
                n = a("318738"),
                u = a("798609"),
                c = a("454273"),
                N = a("991170"),
                O = a("713955"),
                v = a("782340"),
                R = a("16125");
            let h = (e, l) => t.useCallback((a, s) => {
                    let t = (0, O.getAllRolesRows)(e),
                        o = new Set(s),
                        i = {
                            ...l.permissionOverwrites
                        },
                        r = [],
                        v = [];
                    return t.forEach(l => {
                        var s, t, n, O, R, h, m, E, _, f;
                        let M = l.id,
                            S = o.has(M);
                        S ? r.push({
                            id: M,
                            type: u.PermissionOverwriteType.ROLE,
                            allow: S ? d.default.add(null !== (O = null === (s = i[M]) || void 0 === s ? void 0 : s.allow) && void 0 !== O ? O : N.default.NONE, a) : d.default.remove(null !== (R = null === (t = i[M]) || void 0 === t ? void 0 : t.allow) && void 0 !== R ? R : N.default.NONE, a),
                            deny: d.default.remove(null !== (h = null === (n = i[M]) || void 0 === n ? void 0 : n.deny) && void 0 !== h ? h : N.default.NONE, a)
                        }) : (0, c.isEveryoneRoleId)(e.id, M) ? r.push({
                            id: M,
                            type: u.PermissionOverwriteType.ROLE,
                            allow: d.default.remove(null !== (_ = null === (m = i[M]) || void 0 === m ? void 0 : m.allow) && void 0 !== _ ? _ : N.default.NONE, a),
                            deny: d.default.add(null !== (f = null === (E = i[M]) || void 0 === E ? void 0 : E.deny) && void 0 !== f ? f : N.default.NONE, a)
                        }) : M in i && v.push(M)
                    }, []), (0, n.saveAndClearPermissionUpdates)(l.id, r, v)
                }, [e, l]),
                m = e => l => null != l && !(0, c.isEveryoneRoleId)(e, l),
                E = e => t.useMemo(() => (0, O.getAllRolesRows)(e).filter(l => m(e.id)(l.id)), [e]),
                _ = (e, l, a) => {
                    let s = N.default.canEveryoneRole(a, l),
                        [o, i] = t.useState(s);
                    return {
                        shouldEveryonePost: o,
                        setShouldEveryonePost: i
                    }
                },
                f = e => {
                    let {
                        rolesRow: l
                    } = e;
                    return (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: R.roleCircle,
                        style: {
                            backgroundColor: null == l ? void 0 : l.colorString
                        }
                    })
                };
            var M = e => {
                let {
                    guild: l,
                    channel: a,
                    permission: o,
                    onClose: d,
                    transitionState: n,
                    currentSelectedRoles: u = []
                } = e, {
                    shouldEveryonePost: c,
                    setShouldEveryonePost: N
                } = _(l, a, o), O = t.useRef(null), M = E(l), S = M.reduce((e, l) => (e.set(l.id, l), e), new Map), p = M.map(e => ({
                    key: e.key,
                    label: e.name,
                    value: e.id
                })), [x, A] = t.useState(u.map(e => e.id).filter(m(l.id))), [I, L] = t.useState(!1), [C, w] = t.useState(!1), j = x.length > 0 || c, g = h(l, a), y = async () => {
                    if (!j) return;
                    L(!0), w(!1);
                    let e = [...x];
                    if (c) {
                        let a = l.id;
                        e.push(a)
                    }
                    try {
                        await g(o, e), d()
                    } catch (e) {
                        w(!0)
                    } finally {
                        L(!1)
                    }
                };
                return I ? (0, s.jsx)(r.Spinner, {}) : (0, s.jsxs)(r.ModalRoot, {
                    transitionState: n,
                    "aria-label": v.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
                    children: [(0, s.jsx)(r.ModalHeader, {
                        separator: !1,
                        className: R.modalHeader,
                        children: (0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            className: R.header,
                            children: v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE
                        })
                    }), (0, s.jsx)(r.ModalContent, {
                        children: (0, s.jsxs)("div", {
                            className: R.container,
                            children: [(0, s.jsx)("div", {
                                className: R.row,
                                children: (0, s.jsx)("div", {
                                    ref: O,
                                    className: R.roleSelectorContainer,
                                    children: (0, s.jsx)(r.FocusRingScope, {
                                        containerRef: O,
                                        children: (0, s.jsx)(r.SearchableSelect, {
                                            closeOnSelect: !1,
                                            className: R.roleSelector,
                                            maxVisibleItems: 5,
                                            placeholder: v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                                            multi: !0,
                                            value: x,
                                            options: p,
                                            onChange: e => {
                                                A(e)
                                            },
                                            renderOptionPrefix: e => null != e ? (0, s.jsx)(f, {
                                                rolesRow: S.get(e.value)
                                            }) : null
                                        })
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: R.row,
                                children: [(0, s.jsx)(r.FormSwitch, {
                                    value: c,
                                    hideBorder: !0,
                                    onChange: N,
                                    className: R.switchGroup,
                                    children: v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST
                                }), (0, s.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format()
                                })]
                            }), C ? (0, s.jsx)("div", {
                                className: R.row,
                                children: (0, s.jsx)(r.Text, {
                                    className: i(R.row, R.error),
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR
                                })
                            }) : null]
                        })
                    }), (0, s.jsxs)(r.ModalFooter, {
                        className: R.footer,
                        children: [(0, s.jsx)(r.Button, {
                            type: "submit",
                            color: r.Button.Colors.BRAND_NEW,
                            size: r.Button.Sizes.SMALL,
                            className: R.button,
                            onClick: y,
                            disabled: !j,
                            autoFocus: !0,
                            children: v.default.Messages.SAVE
                        }), (0, s.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            size: r.Button.Sizes.SMALL,
                            className: R.button,
                            onClick: d,
                            children: v.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);