            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            }), l("808653"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("627445"),
                i = l.n(s),
                r = l("917351"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("851387"),
                f = l("716241"),
                m = l("524768"),
                I = l("389153"),
                T = l("702411"),
                N = l("15639"),
                E = l("5667"),
                h = l("271938"),
                g = l("305961"),
                p = l("697218"),
                S = l("228220"),
                O = l("599110"),
                _ = l("387111"),
                A = l("299039"),
                C = l("952943"),
                x = l("683830"),
                R = l("892692"),
                M = l("581511"),
                v = l("429310"),
                L = l("49111"),
                j = l("782340"),
                b = l("566818");

            function P(e) {
                let {
                    commandId: t,
                    editPermissions: l,
                    guildId: s,
                    noneSelectedText: r,
                    overwrites: f,
                    hasAccessToMutatePermissions: T
                } = e, E = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(s), [s]);
                i(null != E, "");
                let [h, S] = a.useState(new Set), O = a.useMemo(() => {
                    let e = (0, I.allChannelsSentinel)(s),
                        t = o(E.roles).sortBy(e => e.position).reduce((e, t, l) => (e[t.id] = l, e), {});
                    return Object.values(f).filter(e => e.canRead).sort((l, n) => {
                        let a = l.type - n.type;
                        if (0 !== a) return a;
                        switch (l.type) {
                            case m.ApplicationCommandPermissionType.USER:
                                return function(e, t, l) {
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    if (0 !== n) return n;
                                    let a = p.default.getUser(e.id),
                                        s = p.default.getUser(t.id);
                                    if (null != a && null != s) {
                                        let e = _.default.getName(l, void 0, a),
                                            t = _.default.getName(l, void 0, s);
                                        return null == e ? void 0 : e.localeCompare(t)
                                    }
                                    return A.default.compare(e.id, t.id)
                                }(l, n, s);
                            case m.ApplicationCommandPermissionType.ROLE:
                                return function(e, t, l, n) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let a = n[e.id],
                                        s = n[t.id];
                                    return a > s ? -1 : 1
                                }(l, n, s, t);
                            case m.ApplicationCommandPermissionType.CHANNEL:
                                return function(e, t, l) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    return 0 !== n ? n : A.default.compare(e.id, t.id)
                                }(l, n, e)
                        }
                    })
                }, [s, f, E]), M = a.useCallback((e, t) => {
                    let n = (0, R.toPermissionKey)(e, t);
                    l({}, [n])
                }, [l]), v = a.useCallback((e, t, n) => {
                    let a = (0, R.toPermissionKey)(e, t),
                        s = f[a];
                    null != s && l({
                        [a]: {
                            id: e,
                            permission: n,
                            type: t
                        }
                    }, [])
                }, [l, f]);
                a.useEffect(() => {
                    let e = Object.values(f).filter(e => e.type === m.ApplicationCommandPermissionType.USER && !e.canRead && !h.has(e.id)).map(e => e.id);
                    0 !== e.length && (c.default.requestMembersById(s, e, !1), S(t => new Set([...t, ...e])))
                }, [s, f, h, S]);
                let L = (0, d.useStateFromStores)([x.default], () => x.default.getApplicationId()),
                    j = (0, d.useStateFromStores)([C.default], () => null == L ? void 0 : C.default.integrations.find(e => {
                        var t;
                        return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === L
                    })),
                    P = (0, d.useStateFromStores)([N.default], () => void 0 !== j && N.default.canShowToggleTooltip(j.id));
                return (0, n.jsx)(a.Fragment, {
                    children: O.length > 0 ? O.map(e => (0, n.jsx)(D, {
                        guild: E,
                        commandId: t,
                        onChange: t => v(e.id, e.type, t),
                        onRemove: () => M(e.id, e.type),
                        overwrite: e,
                        integration: j,
                        canShowMigrationTooltip: P,
                        hasAccessToMutatePermissions: T
                    }, e.id)) : (0, n.jsx)("div", {
                        className: b.noItemsSelected,
                        children: (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: r
                        })
                    })
                })
            }

            function D(e) {
                var t, l, s;
                let i, {
                        guild: r,
                        commandId: o,
                        onChange: d,
                        onRemove: c,
                        overwrite: N,
                        integration: g,
                        canShowMigrationTooltip: p,
                        hasAccessToMutatePermissions: S
                    } = e,
                    _ = N.id === r.id || N.id === (0, I.allChannelsSentinel)(r.id),
                    A = null == g ? void 0 : null === (l = g.application) || void 0 === l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.username,
                    C = !N.canWrite || !S,
                    x = h.default.getId();
                S ? !N.canWrite && (N.type === m.ApplicationCommandPermissionType.USER ? i = N.id === x ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : N.type === m.ApplicationCommandPermissionType.ROLE && (i = j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : i = null != o ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
                let R = p && null != g && N.id === r.id && void 0 !== A && !N.permission;
                a.useEffect(() => {
                    if (R) {
                        var e;
                        O.default.track(L.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                            ...(0, f.collectGuildAnalyticsMetadata)(r.id),
                            application_id: null == g ? void 0 : null === (e = g.application) || void 0 === e ? void 0 : e.id,
                            location: "toggle"
                        })
                    }
                }, [r.id, null == g ? void 0 : null === (s = g.application) || void 0 === s ? void 0 : s.id, R]);
                let P = (0, n.jsx)(u.Tooltip, {
                        tooltipClassName: b.tooltip,
                        text: i,
                        shouldShow: C,
                        position: "left",
                        hideOnClick: !1,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(v.default, {
                                isDisabled: C,
                                currentValue: N.permission,
                                onChange: R ? e => {
                                    T.default.dismissToggleTooltip(null == g ? void 0 : g.id), d(e)
                                } : d
                            })
                        })
                    }),
                    D = (0, n.jsx)(u.Popout, {
                        renderPopout: () => (0, n.jsx)(u.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), T.default.dismissToggleTooltip(r.id, g)
                            },
                            children: (0, n.jsx)(E.default, {
                                className: b.tooltip,
                                content: j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
                                    botName: A,
                                    link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
                                }),
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: u.Popout.Animation.TRANSLATE,
                        onRequestClose: () => T.default.dismissToggleTooltip(r.id, g),
                        shouldShow: R,
                        closeOnScroll: !0,
                        children: () => P
                    });
                return (0, n.jsxs)("div", {
                    className: b.entryItem,
                    children: [(0, n.jsx)("div", {
                        className: b.entryName,
                        children: (0, n.jsx)(M.default, {
                            guild: r,
                            id: N.id,
                            type: N.type,
                            isLocked: C,
                            lockTooltipText: i
                        })
                    }), (0, n.jsxs)("div", {
                        className: b.entryActions,
                        children: [(0, n.jsx)(y, {
                            commandId: o,
                            isSentinel: _,
                            isDisabled: !S,
                            onRemove: c
                        }), D]
                    })]
                }, N.id)
            }

            function y(e) {
                let {
                    commandId: t,
                    isSentinel: l,
                    isDisabled: a,
                    onRemove: s
                } = e;
                return a ? null : null != t || !l ? (0, n.jsx)("div", {
                    className: b.removeActions,
                    children: (0, n.jsx)(u.Clickable, {
                        className: b.removeContainer,
                        "aria-label": j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                        onClick: s,
                        children: (0, n.jsx)(S.default, {
                            width: 24,
                            height: 24,
                            className: b.removeIcon
                        })
                    })
                }) : null
            }