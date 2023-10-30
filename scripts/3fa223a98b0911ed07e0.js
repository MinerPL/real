(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83063"], {
        351105: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("872717"),
                l = s("49111"),
                r = {
                    async updateEstimate(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                            s = arguments.length > 2 ? arguments[2] : void 0,
                            r = await a.default.get({
                                url: l.Endpoints.GUILD_PRUNE(e),
                                query: {
                                    days: t,
                                    include_roles: s
                                },
                                oldFormErrors: !0
                            });
                        return r.body.pruned
                    },
                    prune: (e, t, s) => a.default.post({
                        url: l.Endpoints.GUILD_PRUNE(e),
                        body: {
                            days: t,
                            compute_prune_count: !1,
                            include_roles: s
                        },
                        oldFormErrors: !0
                    })
                }
        },
        494440: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("917351"),
                o = s.n(r),
                n = s("446674"),
                u = s("77078"),
                d = s("351105"),
                i = s("581583"),
                c = s("957255"),
                f = s("954419"),
                m = s("782340"),
                p = s("432948"),
                E = e => {
                    let {
                        guild: t,
                        transitionState: s,
                        onClose: r
                    } = e, [E, g] = l.useState(7), [_, h] = l.useState(null), [R, M] = l.useState([]), S = l.useCallback(async () => {
                        h(null);
                        let e = await d.default.updateEstimate(t.id, E, R);
                        h(e)
                    }, [E, t.id, R]);
                    l.useEffect(() => {
                        S()
                    }, [S]);
                    let v = (0, n.useStateFromStoresArray)([c.default], () => {
                        let e = c.default.getHighestRole(t);
                        return o(t.roles).sortBy(e => e.position).filter(e => e.id !== t.id).filter(s => c.default.isRoleHigher(t, e, s)).value().map(e => {
                            let {
                                id: t,
                                name: s
                            } = e;
                            return {
                                label: s,
                                value: t
                            }
                        })
                    }, [t]);
                    return (0, a.jsxs)(u.ModalRoot, {
                        transitionState: s,
                        children: [(0, a.jsx)(u.ModalHeader, {
                            separator: !1,
                            children: (0, a.jsxs)(u.Heading, {
                                variant: "heading-lg/semibold",
                                children: [m.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
                            })
                        }), (0, a.jsxs)("div", {
                            className: p.content,
                            children: [(0, a.jsx)(u.FormItem, {
                                title: m.default.Messages.FORM_LABEL_LAST_SEEN,
                                children: (0, a.jsx)(u.RadioGroup, {
                                    value: E,
                                    options: [{
                                        name: m.default.Messages.LAST_SEEN.format({
                                            days: 7
                                        }),
                                        value: 7
                                    }, {
                                        name: m.default.Messages.LAST_SEEN.format({
                                            days: 30
                                        }),
                                        value: 30
                                    }],
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e;
                                        g(t)
                                    },
                                    className: p.spacing
                                })
                            }), (0, a.jsx)(u.FormItem, {
                                title: m.default.Messages.PRUNE_WITH_ROLES,
                                children: (0, a.jsx)(f.default, {
                                    isMulti: !0,
                                    options: v,
                                    onChange: e => {
                                        M(e.map(e => e.value))
                                    },
                                    value: R,
                                    multiValueRenderer: e => {
                                        let {
                                            value: s
                                        } = e, l = t.getRole(s);
                                        if (null == l) return null;
                                        let r = R.indexOf(s);
                                        return (0, a.jsx)(i.MemberRole, {
                                            className: p.role,
                                            role: l,
                                            canRemove: !0,
                                            onRemove: () => {
                                                M([...R.slice(0, r), ...R.slice(r + 1)])
                                            },
                                            onMouseDown: e => {
                                                e.stopPropagation(), e.preventDefault()
                                            },
                                            guildId: t.id
                                        })
                                    },
                                    maxMenuHeight: 200
                                })
                            }), (0, a.jsx)(u.FormText, {
                                type: u.FormText.Types.DESCRIPTION,
                                className: p.spacing,
                                children: R.length > 0 ? m.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
                                    members: _,
                                    days: E
                                }) : m.default.Messages.FORM_HELP_LAST_SEEN_1.format({
                                    members: _,
                                    days: E
                                })
                            })]
                        }), (0, a.jsxs)(u.ModalFooter, {
                            children: [(0, a.jsx)(u.Button, {
                                onClick: () => {
                                    d.default.prune(t.id, E, R), r()
                                },
                                children: m.default.Messages.PRUNE
                            }), (0, a.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: r,
                                children: m.default.Messages.CANCEL
                            })]
                        })]
                    })
                }
        }
    }
]);