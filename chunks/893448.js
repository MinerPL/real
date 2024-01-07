            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("272030"),
                u = s("599417"),
                c = s("750560"),
                E = s("506885"),
                _ = s("981601"),
                T = s("697218"),
                I = s("555158"),
                S = s("810567"),
                N = s("381546"),
                g = s("155207"),
                f = s("599110"),
                A = s("36402"),
                L = s("592407"),
                m = s("531493"),
                C = s("986654"),
                O = s("50693"),
                h = s("91816"),
                R = s("120318"),
                D = s("53948"),
                M = s("49111"),
                G = s("782340"),
                x = s("681453"),
                p = s("219638");
            async function U(e, t, s) {
                let n = e.roles.filter(e => e !== s);
                try {
                    await L.default.updateMemberRoles(t, e.id, n, [], [s])
                } catch (t) {
                    let e = new u.default(t);
                    (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
                        ...t,
                        header: G.default.Messages.ERROR_GENERIC_TITLE,
                        confirmText: G.default.Messages.OKAY,
                        confirmButtonColor: o.Button.Colors.BRAND,
                        children: (0, a.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: e.getAnyErrorMessage()
                        })
                    }))
                }
            }

            function v(e) {
                let {
                    member: t,
                    guildId: l,
                    roleId: r,
                    locked: u
                } = e, I = n.useMemo(() => ({
                    [l]: [t.id]
                }), [l, t.id]);

                function S(e) {
                    if (e.stopPropagation(), !u) {
                        if (e.shiftKey) {
                            U(t, l, r);
                            return
                        }! function(e, t, s) {
                            let n = m.default.getRole(s);
                            (0, o.openModal)(l => (0, a.jsxs)(o.ConfirmModal, {
                                ...l,
                                header: G.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                                confirmText: G.default.Messages.REMOVE,
                                cancelText: G.default.Messages.CANCEL,
                                onConfirm: () => U(e, t, s),
                                children: [(0, a.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    children: G.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
                                        username: e.name,
                                        roleName: null == n ? void 0 : n.name
                                    })
                                }), (0, a.jsx)(o.Text, {
                                    className: x.removeTip,
                                    color: "text-muted",
                                    variant: "text-md/normal",
                                    children: G.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
                                })]
                            }))
                        }(t, l, r)
                    }
                }

                function g(e) {
                    let n = T.default.getUser(t.id);
                    null != n && (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await s.el("539593").then(s.bind(s, "539593"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            user: n,
                            guildId: l,
                            showChatItems: !1
                        })
                    })
                }
                return (0, c.useSubscribeGuildMembers)(I), (0, a.jsx)("div", {
                    className: p.contentWidth,
                    children: (0, a.jsx)(o.Popout, {
                        renderPopout: e => (0, a.jsx)(_.default, {
                            guildId: l,
                            userId: t.id,
                            ...e
                        }),
                        position: "left",
                        preload: () => (0, E.default)(t.id, t.avatarURL, {
                            guildId: l
                        }),
                        children: e => (0, a.jsxs)(o.Clickable, {
                            ...e,
                            className: x.memberRow,
                            onContextMenu: g,
                            children: [(0, a.jsx)(R.default, {
                                className: x.memberDetails,
                                avatarURL: t.avatarURL,
                                name: t.name,
                                bot: t.bot,
                                verifiedBot: t.verifiedBot,
                                userTag: t.userTag
                            }), (0, a.jsx)("div", {
                                className: x.removeButtonContainer,
                                children: (0, a.jsx)(o.Tooltip, {
                                    text: u ? G.default.Messages.ROLE_REMOVE_MEMBER_MANAGED : G.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                                    position: "top",
                                    children: e => (0, a.jsx)(o.Clickable, {
                                        ...e,
                                        className: i(x.removeButton, {
                                            [x.removeButtonDisabled]: u
                                        }),
                                        onClick: S,
                                        children: (0, a.jsx)(N.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }

            function j(e) {
                let {
                    handleAddClick: t,
                    locked: s
                } = e;
                return (0, a.jsx)("div", {
                    className: p.contentWidth,
                    children: (0, a.jsxs)("div", {
                        className: i(x.memberRow, x.emptyRowContainer),
                        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(o.Text, {
                            className: x.emptyRowText,
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: G.default.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
                                addMembersHook: function(e, n) {
                                    return s ? null : (0, a.jsx)(o.Anchor, {
                                        onClick: t,
                                        children: e
                                    }, n)
                                }
                            })
                        })]
                    })
                })
            }

            function P(e) {
                let {
                    guildId: t,
                    roleId: s,
                    query: l,
                    headerHeight: i,
                    locked: r,
                    onScroll: d,
                    roleMembers: u,
                    handleAddClick: c
                } = e, E = n.useMemo(() => l.trim().toLowerCase(), [l]);
                (0, C.useQueryGuildMembers)(t, E);
                let _ = n.useMemo(() => u.filter(e => (0, C.filterFullMembersByQuery)(E, e)), [u, E]),
                    T = n.useMemo(() => _.sort((e, t) => e.name.localeCompare(t.name)), [_]);
                return (0, a.jsx)(o.ListAuto, {
                    className: x.list,
                    sections: [Math.max(_.length, 1)],
                    sectionHeight: i,
                    renderSection: () => (0, a.jsx)("div", {
                        style: {
                            height: i
                        }
                    }, "section"),
                    style: {
                        scrollPaddingTop: i
                    },
                    rowHeight: 40,
                    renderRow: function(e) {
                        let {
                            row: n
                        } = e;
                        if (0 === T.length) return (0, a.jsx)(j, {
                            handleAddClick: c,
                            locked: r
                        }, "empty");
                        let l = T[n];
                        return (0, a.jsx)(v, {
                            member: l,
                            guildId: t,
                            roleId: s,
                            locked: r
                        }, l.id)
                    },
                    onScroll: d
                })
            }

            function y(e) {
                let {
                    query: t,
                    setQuery: s,
                    locked: n,
                    handleAddClick: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: x.searchContainer,
                    children: [(0, a.jsx)(S.default, {
                        size: S.default.Sizes.MEDIUM,
                        query: t,
                        onChange: s,
                        onClear: () => s(""),
                        placeholder: G.default.Messages.SEARCH_MEMBERS,
                        "aria-label": G.default.Messages.SEARCH_MEMBERS
                    }), (0, a.jsx)(o.Button, {
                        className: x.addButton,
                        size: o.Button.Sizes.SMALL,
                        onClick: l,
                        disabled: n,
                        children: G.default.Messages.ROLE_ADD_MEMBERS_BUTTON
                    })]
                })
            }

            function b(e) {
                let {
                    guild: t,
                    role: l,
                    locked: d,
                    setSelectedSection: u
                } = e, [c, E] = n.useState(""), {
                    headerHeight: _,
                    headerRef: T
                } = (0, O.default)(0), {
                    scrolledToTop: S,
                    handleScroll: N
                } = (0, h.useScrolledToTop)(), g = l.managed || d, L = (0, C.useGuildRoleMembers)(t.id, l.id), m = (0, r.useStateFromStores)([A.default], () => {
                    var e, s;
                    return null !== (s = null === (e = A.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[l.id]) && void 0 !== s ? s : 0
                }), R = m > L.length, U = () => {
                    f.default.track(M.AnalyticEvents.OPEN_MODAL, {
                        type: "Add Role Members",
                        location_page: "Role Settings",
                        location_section: "Members"
                    }), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("744581").then(s.bind(s, "744581"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            roleId: l.id,
                            guildId: t.id
                        })
                    })
                };
                return (0, a.jsxs)("div", {
                    className: x.container,
                    children: [(0, a.jsx)("div", {
                        className: x.headerContainer,
                        ref: T,
                        children: (0, a.jsx)("div", {
                            className: p.contentWidth,
                            children: (0, a.jsxs)("div", {
                                className: i(p.header, {
                                    [p.stickyHeaderElevated]: !S
                                }),
                                children: [(0, a.jsx)(h.default, {
                                    guild: t,
                                    role: l,
                                    selectedSection: D.GuildSettingsRoleEditSections.MEMBERS,
                                    setSelectedSection: u
                                }), (0, a.jsx)(y, {
                                    query: c,
                                    setQuery: E,
                                    locked: g,
                                    handleAddClick: U
                                }), R ? (0, a.jsx)(I.default, {
                                    className: x.searchWarning,
                                    messageType: I.HelpMessageTypes.INFO,
                                    children: G.default.Messages.ROLE_EDIT_MEMBERS_MISSING
                                }) : null]
                            })
                        })
                    }), (0, a.jsx)(P, {
                        headerHeight: _ + 8,
                        query: c,
                        guildId: t.id,
                        roleId: l.id,
                        locked: g,
                        onScroll: N,
                        roleMembers: L,
                        handleAddClick: U
                    })]
                })
            }