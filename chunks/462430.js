            "use strict";
            l.r(t), l.d(t, {
                AddMembersBody: function() {
                    return N
                },
                MemberRoleSelector: function() {
                    return j
                },
                default: function() {
                    return C
                }
            }), l("222007"), l("424973");
            var s = l("37983"),
                n = l("884691"),
                a = l("446674"),
                i = l("77078"),
                r = l("318738"),
                o = l("137223"),
                d = l("233069"),
                c = l("42203"),
                u = l("26989"),
                S = l("305961"),
                h = l("145131"),
                m = l("476765"),
                E = l("361777"),
                R = l("944633"),
                f = l("599110"),
                x = l("404008"),
                T = l("651879"),
                g = l("655518"),
                y = l("454273"),
                p = l("355313"),
                A = l("606762"),
                M = l("49111"),
                b = l("782340"),
                w = l("265821");
            let L = (0, m.uid)();

            function v(e, t) {
                return t ? e.slice(1) : e
            }

            function N(e) {
                let t, {
                        guild: l,
                        channel: i,
                        permission: r,
                        pendingAdditions: d,
                        setPendingAdditions: c,
                        isStageChannel: S = null != i && i.isGuildStageVoice(),
                        description: h
                    } = e,
                    [m, E] = n.useState(!1),
                    [R, f] = n.useState("");

                function x(e) {
                    let t = v(R.trim(), m),
                        l = RegExp("".concat(g.default.escape(t)), "i");
                    return l.test(e)
                }
                let M = (0, a.useStateFromStores)([u.default], () => u.default.getMemberIds(l.id));
                m ? t = [] : S ? t = y.getRolesRowsWithPermissionDisabled(l, i, r, x) : 0 === (t = y.getRolesRows(l, i, r, x)).length && "" === R.trim() && !y.hasCustomRoles(l) && (t = y.getNoRolesRow());
                let w = y.getMembersRows(M, i, l, r, x),
                    {
                        placeholderText: L,
                        hintText: N,
                        renderEmptyText: C
                    } = function() {
                        return {
                            placeholderText: b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
                            hintText: b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
                            renderEmptyText: e => b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                query: e
                            })
                        }
                    }();
                return (0, s.jsx)(j, {
                    pendingAdditions: d,
                    query: R,
                    onQueryChange: function(e) {
                        let t = e.trim(),
                            s = "@" === t.charAt(0);
                        T.default.requestMembers(l.id, v(t, s), A.MEMBER_REQUEST_COUNT), f(e), E(s)
                    },
                    onClickRow: function(e) {
                        let t = (0, p.getFullRowId)(e);
                        c(l => {
                            let s = {
                                ...l
                            };
                            if (t in s) delete s[t];
                            else {
                                let l;
                                e.rowType === A.RowType.ROLE || e.rowType === A.RowType.ADMINISTRATOR ? l = {
                                    type: o.RichTagTypes.ROLE,
                                    label: e.name,
                                    color: e.colorString
                                } : (e.rowType === A.RowType.MEMBER || e.rowType === A.RowType.OWNER) && (l = {
                                    type: o.RichTagTypes.MEMBER,
                                    label: e.name,
                                    avatar: e.avatarURL
                                }), null != l && (s[t] = {
                                    display: l,
                                    row: e
                                })
                            }
                            return s
                        })
                    },
                    onRemovePendingAddition: function(e) {
                        c(t => {
                            let {
                                [e]: l, ...s
                            } = t;
                            return s
                        })
                    },
                    roles: t,
                    members: w,
                    placeholderText: L,
                    hintText: N,
                    renderEmptyText: C,
                    isStageChannel: S,
                    description: h
                })
            }

            function j(e) {
                let t, {
                    listClassName: l,
                    pendingAdditions: n,
                    query: a,
                    onQueryChange: r,
                    onClickRow: o,
                    onRemovePendingAddition: d,
                    roles: c,
                    members: u,
                    placeholderText: S,
                    hintText: h,
                    renderEmptyText: m,
                    isStageChannel: E,
                    focusSearchAfterReady: R,
                    isReady: f,
                    description: x
                } = e;
                return (0, s.jsxs)("div", {
                    className: w.content,
                    children: [(null == (t = x) && E && (t = b.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION), null == t || "" === t) ? null : (0, s.jsx)(i.Text, {
                        color: "header-secondary",
                        className: w.description,
                        variant: "text-sm/normal",
                        children: t
                    }), (0, s.jsx)(p.default, {
                        listClassName: l,
                        pendingAdditions: n,
                        query: a,
                        onQueryChange: r,
                        onClickRow: o,
                        onRemovePendingAddition: d,
                        roles: c,
                        members: u,
                        placeholderText: S,
                        hintText: h,
                        renderEmptyText: m,
                        disabledText: E ? b.default.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS : null,
                        focusSearchAfterReady: R,
                        isReady: f
                    })]
                })
            }

            function C(e) {
                let {
                    transitionState: t,
                    onClose: l,
                    channelId: o,
                    newChannel: u,
                    inSettings: m
                } = e, [T, g] = n.useState(!1), [y, p] = n.useState({}), v = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(o), [o]), j = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(null == v ? void 0 : v.getGuildId()));
                if (n.useEffect(() => {
                        f.default.track(M.AnalyticEvents.OPEN_MODAL, {
                            type: "Grant Channel Access"
                        })
                    }, []), null == v || null == j) return null;
                let C = u && 0 === Object.keys(y).length;
                async function _() {
                    if (null == v || 0 === Object.keys(y).length) {
                        l();
                        return
                    }
                    g(!0);
                    try {
                        await

                        function(e, t, l) {
                            let s = [];
                            return Object.values(t).forEach(t => {
                                let {
                                    row: l
                                } = t;
                                null != l.id && "" !== l.id && (l.rowType === A.RowType.ROLE ? s.push((0, x.permissionOverwriteForRole)(l.id, e.type)) : l.rowType === A.RowType.MEMBER && s.push((0, x.permissionOverwriteForUser)(l.id, e.type)))
                            }), (0, r.savePermissionUpdates)(e.id, s, l)
                        }(v, y, m), l(), g(!1)
                    } catch (e) {
                        g(!1)
                    }
                }
                let I = (0, d.isGuildTextChannelType)(v.type) ? E.default : R.default;
                return (0, s.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    size: i.ModalSize.SMALL,
                    "aria-labelledby": L,
                    className: w.modalRoot,
                    children: [(0, s.jsxs)(i.ModalHeader, {
                        separator: !1,
                        direction: h.default.Direction.VERTICAL,
                        align: h.default.Align.CENTER,
                        className: w.header,
                        children: [(0, s.jsx)(i.Heading, {
                            id: L,
                            variant: "heading-xl/semibold",
                            children: b.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                        }), (0, s.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: w.headerSubtitle,
                            children: [(0, s.jsx)(I, {
                                height: 16,
                                width: 16,
                                className: w.headerSubtitleIcon
                            }), v.name]
                        })]
                    }), (0, s.jsx)(N, {
                        guild: j,
                        channel: v,
                        permission: v.accessPermissions,
                        pendingAdditions: y,
                        setPendingAdditions: p
                    }), (0, s.jsxs)(i.ModalFooter, {
                        children: [!C && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.Button, {
                                onClick: _,
                                look: i.Button.Looks.FILLED,
                                size: i.Button.Sizes.SMALL,
                                className: w.button,
                                submitting: T,
                                children: b.default.Messages.DONE
                            }), (0, s.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.TRANSPARENT,
                                onClick: l,
                                size: i.Button.Sizes.SMALL,
                                children: b.default.Messages.CANCEL
                            })]
                        }), C && (0, s.jsx)(i.Button, {
                            look: i.Button.Looks.FILLED,
                            color: i.Button.Colors.PRIMARY,
                            onClick: l,
                            size: i.Button.Sizes.SMALL,
                            children: b.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP
                        })]
                    })]
                })
            }