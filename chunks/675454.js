            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("424973");
            var s, a, i = n("37983"),
                o = n("884691"),
                l = n("316693"),
                r = n("151426"),
                c = n("669491"),
                d = n("77078"),
                u = n("592407"),
                _ = n("766419"),
                E = n("978970"),
                I = n("124969"),
                S = n("578706"),
                N = n("68238"),
                T = n("315102"),
                O = n("991170"),
                f = n("580362"),
                p = n("49111"),
                m = n("994428"),
                A = n("69741"),
                R = n("782340"),
                M = n("233602");

            function C(e) {
                let {
                    guild: t,
                    headerText: s,
                    headerSubtext: a,
                    step: o
                } = e, l = T.default.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 120
                });
                return (0, i.jsxs)(d.ModalHeader, {
                    className: M.header,
                    children: [(0, i.jsxs)("div", {
                        className: M.headerIconContainer,
                        children: [null != l ? (0, i.jsx)(d.Avatar, {
                            src: l,
                            "aria-label": t.name,
                            size: d.AvatarSizes.SIZE_120,
                            className: M.guildIcon
                        }) : (0, i.jsx)("div", {
                            className: M.acronym,
                            children: t.acronym
                        }), 2 === o ? (0, i.jsx)(S.default, {
                            className: M.greenPing,
                            color: c.default.unsafe_rawColors.GREEN_360.css,
                            backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                        }) : (0, i.jsx)(I.Image, {
                            src: n("824859"),
                            className: M.redPing
                        })]
                    }), (0, i.jsxs)("div", {
                        className: M.headerText,
                        children: [(0, i.jsx)(d.Heading, {
                            variant: "heading-lg/extrabold",
                            color: "header-primary",
                            children: s
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "header-primary",
                            children: a
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    guild: t
                } = e, n = t.getRole(t.id);
                if (null == n) return null;
                let {
                    name: s,
                    color: a
                } = n;
                return (0, i.jsxs)("span", {
                    className: M.roleRow,
                    children: [(0, i.jsx)(d.RoleDot, {
                        className: M.roleDot,
                        color: a.toString(),
                        background: !1,
                        tooltip: !1
                    }), (0, i.jsx)(d.Text, {
                        className: M.roleName,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: s
                    })]
                })
            }(a = s || (s = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.SUBMITTING = 1] = "SUBMITTING", a[a.SUBMITTED = 2] = "SUBMITTED";
            let D = e => {
                if (e.toString() === p.Permissions.MENTION_EVERYONE.toString()) return R.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                return (0, E.getPermissionName)(e)
            };

            function U(e) {
                let {
                    permissions: t,
                    step: n
                } = e;
                return 2 === n ? null : (0, i.jsxs)("div", {
                    className: M.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: M.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: 0 === n ? R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: M.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: M.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: 0 === n ? M.bulletPositive : M.bulletWarning
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: D(e)
                            })]
                        }, t))
                    })]
                })
            }

            function h(e) {
                let {
                    permissions: t,
                    step: n
                } = e;
                return 0 === t.length && 2 !== n ? null : (2 === n && (t = A.MODERATOR_PERMISSIONS), (0, i.jsxs)("div", {
                    className: M.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: M.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: 2 === n ? R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: M.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: M.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: M.bullet
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: D(e)
                            })]
                        }, t))
                    })]
                }))
            }

            function x(e) {
                let {
                    permissions: t,
                    step: n
                } = e, {
                    enabledPermissions: s,
                    disabledPermissions: a
                } = t;
                return 0 === s.length && 2 !== n ? null : (0, i.jsxs)("div", {
                    className: M.table,
                    children: [2 !== n ? (0, i.jsx)(U, {
                        permissions: s,
                        step: n
                    }) : null, (0, i.jsx)(h, {
                        permissions: a,
                        step: n
                    })]
                })
            }

            function g(e) {
                let {
                    guild: t,
                    permissions: n,
                    step: s,
                    canEveryoneModerate: a,
                    isDefaultNotificationsAllMessages: o
                } = e;
                return (0, i.jsx)(d.ModalContent, {
                    children: (0, i.jsxs)("div", {
                        className: M.updatedForm,
                        children: [o ? (0, i.jsxs)("div", {
                            className: M.checklistRow,
                            children: [(0, i.jsx)(S.default, {
                                className: M.checklistIcon,
                                color: c.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, i.jsx)(d.Tooltip, {
                                        text: R.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": R.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, i.jsx)(N.default, {
                                            className: M.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }) : null, a ? (0, i.jsxs)("div", {
                            className: M.checklistRow,
                            children: [(0, i.jsx)(S.default, {
                                className: M.checklistIcon,
                                color: c.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, i.jsx)(L, {
                                guild: t
                            })]
                        }) : null, (0, i.jsx)(x, {
                            permissions: n,
                            step: s
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    onConfirm: t,
                    onDismiss: n,
                    canEveryoneModerate: s,
                    step: a
                } = e;
                return (0, i.jsxs)(d.ModalFooter, {
                    className: M.footer,
                    children: [(0, i.jsx)(d.Button, {
                        onClick: t,
                        submitting: 1 === a,
                        children: 0 === a ? s ? R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : R.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION : R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
                    }), 0 === a ? (0, i.jsx)(d.Button, {
                        look: d.Button.Looks.LINK,
                        onClick: n,
                        color: d.Button.Colors.PRIMARY,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
                        })
                    }) : null]
                })
            }

            function F(e) {
                let {
                    guild: t,
                    canEveryoneModerate: n,
                    isDefaultNotificationsAllMessages: s,
                    transitionState: a,
                    onClose: c
                } = e, [E, I] = o.useState(0), S = o.useMemo(() => {
                    let e = [],
                        n = [];
                    return A.MODERATOR_PERMISSIONS.map(s => {
                        let a = O.default.canEveryone(s, t);
                        a ? e.push(s) : n.push(s)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: n
                    }
                }, [t]);
                if (null == t) return null;
                let N = () => {
                        let e = null == t ? void 0 : t.getRole(t.id);
                        if (null == e) return;
                        let n = l.default.remove(e.permissions, A.MODERATOR_PERMISSIONS_FLAG);
                        (0, _.saveRoleSettings)(t.id, [{
                            ...e,
                            permissions: n
                        }])
                    },
                    T = () => {
                        u.default.updateGuild({
                            defaultMessageNotifications: p.UserNotificationSettings.ONLY_MENTIONS
                        }), u.default.saveGuild(t.id, {
                            defaultMessageNotifications: p.UserNotificationSettings.ONLY_MENTIONS
                        })
                    },
                    L = () => {
                        n && N(), s && T()
                    };
                return (0, i.jsxs)(d.ModalRoot, {
                    transitionState: a,
                    size: d.ModalSize.SMALL,
                    className: M.modal,
                    children: [(0, i.jsx)(C, {
                        guild: t,
                        headerText: n ? R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : R.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
                        headerSubtext: n ? R.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : R.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
                        step: E
                    }), (0, i.jsx)(g, {
                        guild: t,
                        permissions: S,
                        step: E,
                        canEveryoneModerate: n,
                        isDefaultNotificationsAllMessages: s
                    }), (0, i.jsx)(v, {
                        onConfirm: () => {
                            var e, s;
                            !n && (L(), c(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "", !0, m.ContentDismissActionType.PRIMARY)), 0 === E ? (I(1), setTimeout(() => I(2), 3e3)) : 2 === E && (L(), c(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : "", !0, m.ContentDismissActionType.PRIMARY))
                        },
                        onDismiss: () => {
                            c(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, m.ContentDismissActionType.DISMISS)
                        },
                        step: E,
                        canEveryoneModerate: n
                    })]
                })
            }