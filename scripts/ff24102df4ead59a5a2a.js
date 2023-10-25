(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91517"], {
        824859: function(e, s, t) {
            "use strict";
            e.exports = t.p + "21e8fbccab4a4553fc99.svg"
        },
        675454: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return B
                }
            });
            var a, l, i = t("920040"),
                n = t("773670"),
                o = t("754013"),
                r = t("975162"),
                d = t("912557"),
                E = t("77078"),
                I = t("592407"),
                N = t("766419"),
                c = t("978970"),
                S = t("124969"),
                u = t("578706"),
                T = t("68238"),
                _ = t("315102"),
                M = t("991170"),
                m = t("580362"),
                A = t("49111"),
                O = t("994428"),
                D = t("69741"),
                x = t("782340"),
                f = t("154234");

            function U(e) {
                let {
                    guild: s,
                    headerText: a,
                    headerSubtext: n,
                    step: o
                } = e, r = _.default.getGuildIconURL({
                    id: s.id,
                    icon: s.icon,
                    size: 120
                });
                return (0, i.jsxs)(E.ModalHeader, {
                    className: f.header,
                    children: [(0, i.jsxs)("div", {
                        className: f.headerIconContainer,
                        children: [null != r ? (0, i.jsx)(E.Avatar, {
                            src: r,
                            "aria-label": s.name,
                            size: E.AvatarSizes.SIZE_120,
                            className: f.guildIcon
                        }) : (0, i.jsx)("div", {
                            className: f.acronym,
                            children: s.acronym
                        }), o === l.SUBMITTED ? (0, i.jsx)(u.default, {
                            className: f.greenPing,
                            color: d.default.unsafe_rawColors.GREEN_360.css,
                            backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
                        }) : (0, i.jsx)(S.Image, {
                            src: t("824859"),
                            className: f.redPing
                        })]
                    }), (0, i.jsxs)("div", {
                        className: f.headerText,
                        children: [(0, i.jsx)(E.Heading, {
                            variant: "heading-lg/extrabold",
                            color: "header-primary",
                            children: a
                        }), (0, i.jsx)(E.Text, {
                            variant: "text-md/normal",
                            color: "header-primary",
                            children: n
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    guild: s
                } = e, t = s.getRole(s.id);
                if (null == t) return null;
                let {
                    name: a,
                    color: l
                } = t;
                return (0, i.jsxs)("span", {
                    className: f.roleRow,
                    children: [(0, i.jsx)(E.RoleDot, {
                        className: f.roleDot,
                        color: l.toString(),
                        background: !1,
                        tooltip: !1
                    }), (0, i.jsx)(E.Text, {
                        className: f.roleName,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: a
                    })]
                })
            }(a = l || (l = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.SUBMITTING = 1] = "SUBMITTING", a[a.SUBMITTED = 2] = "SUBMITTED";
            let C = e => {
                if (e.toString() === A.Permissions.MENTION_EVERYONE.toString()) return x.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                return (0, c.getPermissionName)(e)
            };

            function R(e) {
                let {
                    permissions: s,
                    step: t
                } = e;
                return t === l.SUBMITTED ? null : (0, i.jsxs)("div", {
                    className: f.tableContainer,
                    children: [(0, i.jsx)(E.Text, {
                        className: f.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: t === l.DEFAULT ? x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: f.permissionsTable,
                        children: s.map((e, s) => (0, i.jsxs)("div", {
                            className: f.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: t === l.DEFAULT ? f.bulletPositive : f.bulletWarning
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: C(e)
                            })]
                        }, s))
                    })]
                })
            }

            function h(e) {
                let {
                    permissions: s,
                    step: t
                } = e;
                return 0 === s.length && t !== l.SUBMITTED ? null : (t === l.SUBMITTED && (s = D.MODERATOR_PERMISSIONS), (0, i.jsxs)("div", {
                    className: f.tableContainer,
                    children: [(0, i.jsx)(E.Text, {
                        className: f.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: t === l.SUBMITTED ? x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: f.permissionsTable,
                        children: s.map((e, s) => (0, i.jsxs)("div", {
                            className: f.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: f.bullet
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C(e)
                            })]
                        }, s))
                    })]
                }))
            }

            function g(e) {
                let {
                    permissions: s,
                    step: t
                } = e, {
                    enabledPermissions: a,
                    disabledPermissions: n
                } = s;
                return 0 === a.length && t !== l.SUBMITTED ? null : (0, i.jsxs)("div", {
                    className: f.table,
                    children: [t !== l.SUBMITTED ? (0, i.jsx)(R, {
                        permissions: a,
                        step: t
                    }) : null, (0, i.jsx)(h, {
                        permissions: n,
                        step: t
                    })]
                })
            }

            function j(e) {
                let {
                    guild: s,
                    permissions: t,
                    step: a,
                    canEveryoneModerate: l,
                    isDefaultNotificationsAllMessages: n
                } = e;
                return (0, i.jsx)(E.ModalContent, {
                    children: (0, i.jsxs)("div", {
                        className: f.updatedForm,
                        children: [n ? (0, i.jsxs)("div", {
                            className: f.checklistRow,
                            children: [(0, i.jsx)(u.default, {
                                className: f.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-md/normal",
                                children: x.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, i.jsx)(E.Tooltip, {
                                        text: x.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": x.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, i.jsx)(T.default, {
                                            className: f.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }) : null, l ? (0, i.jsxs)("div", {
                            className: f.checklistRow,
                            children: [(0, i.jsx)(u.default, {
                                className: f.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-md/normal",
                                children: x.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, i.jsx)(L, {
                                guild: s
                            })]
                        }) : null, (0, i.jsx)(g, {
                            permissions: t,
                            step: a
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    onConfirm: s,
                    onDismiss: t,
                    canEveryoneModerate: a,
                    step: n
                } = e;
                return (0, i.jsxs)(E.ModalFooter, {
                    className: f.footer,
                    children: [(0, i.jsx)(E.Button, {
                        onClick: s,
                        submitting: n === l.SUBMITTING,
                        children: n === l.DEFAULT ? a ? x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : x.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION : x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
                    }), n === l.DEFAULT ? (0, i.jsx)(E.Button, {
                        look: E.Button.Looks.LINK,
                        onClick: t,
                        color: E.Button.Colors.PRIMARY,
                        children: (0, i.jsx)(E.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
                        })
                    }) : null]
                })
            }

            function B(e) {
                let {
                    guild: s,
                    canEveryoneModerate: t,
                    isDefaultNotificationsAllMessages: a,
                    transitionState: d,
                    onClose: c
                } = e, [S, u] = n.useState(l.DEFAULT), T = n.useMemo(() => {
                    let e = [],
                        t = [];
                    return D.MODERATOR_PERMISSIONS.map(a => {
                        let l = M.default.canEveryone(a, s);
                        l ? e.push(a) : t.push(a)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: t
                    }
                }, [s]);
                if (null == s) return null;
                let _ = () => {
                        let e = null == s ? void 0 : s.getRole(s.id);
                        if (null == e) return;
                        let t = o.default.remove(e.permissions, D.MODERATOR_PERMISSIONS_FLAG);
                        (0, N.saveRoleSettings)(s.id, [{
                            ...e,
                            permissions: t
                        }])
                    },
                    L = () => {
                        I.default.updateGuild({
                            defaultMessageNotifications: A.UserNotificationSettings.ONLY_MENTIONS
                        }), I.default.saveGuild(s.id, {
                            defaultMessageNotifications: A.UserNotificationSettings.ONLY_MENTIONS
                        })
                    },
                    C = () => {
                        t && _(), a && L()
                    };
                return (0, i.jsxs)(E.ModalRoot, {
                    transitionState: d,
                    size: E.ModalSize.SMALL,
                    className: f.modal,
                    children: [(0, i.jsx)(U, {
                        guild: s,
                        headerText: t ? x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : x.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
                        headerSubtext: t ? x.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : x.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
                        step: S
                    }), (0, i.jsx)(j, {
                        guild: s,
                        permissions: T,
                        step: S,
                        canEveryoneModerate: t,
                        isDefaultNotificationsAllMessages: a
                    }), (0, i.jsx)(v, {
                        onConfirm: () => {
                            var e, a;
                            !t && (C(), c(), (0, m.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : "", !0, O.ContentDismissActionType.PRIMARY)), S === l.DEFAULT ? (u(l.SUBMITTING), setTimeout(() => u(l.SUBMITTED), 3e3)) : S === l.SUBMITTED && (C(), c(), (0, m.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : "", !0, O.ContentDismissActionType.PRIMARY))
                        },
                        onDismiss: () => {
                            c(), (0, m.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, s.id, !0, O.ContentDismissActionType.DISMISS)
                        },
                        step: S,
                        canEveryoneModerate: t
                    })]
                })
            }
        }
    }
]);