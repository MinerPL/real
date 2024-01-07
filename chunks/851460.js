            "use strict";
            n.r(t), n.d(t, {
                MultiAccountActionType: function() {
                    return s
                },
                default: function() {
                    return M
                }
            }), n("506083");
            var s, a, l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                o = n.n(i),
                u = n("446674"),
                d = n("77078"),
                c = n("437822"),
                f = n("272030"),
                E = n("766274"),
                h = n("271938"),
                _ = n("102985"),
                m = n("697218"),
                g = n("433487"),
                p = n("599110"),
                A = n("158998"),
                T = n("694787"),
                R = n("770032"),
                I = n("927101"),
                N = n("49111"),
                S = n("782340"),
                C = n("31295");

            function L(e) {
                let {
                    actionText: t,
                    user: n,
                    onAction: s
                } = e, {
                    currentUser: a,
                    hidePrivateData: r,
                    isAuthenticated: i
                } = (0, u.useStateFromStoresObject)([m.default, _.default, h.default], () => ({
                    currentUser: m.default.getCurrentUser(),
                    hidePrivateData: _.default.hidePersonalInformation,
                    isAuthenticated: h.default.isAuthenticated()
                })), I = new E.default(n), L = i && (null == a ? void 0 : a.id) === I.id, M = n.tokenStatus === R.MultiAccountTokenStatus.INVALID, O = r || I.isPomelo() ? null : "#".concat(I.discriminator), x = null;
                return L ? x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: C.hintText,
                    color: "text-positive",
                    children: S.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : M && (x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: C.hintText,
                    color: "text-danger",
                    children: S.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, l.jsx)("div", {
                    className: C.accountCard,
                    children: (0, l.jsxs)("div", {
                        className: C.userDetails,
                        children: [(0, l.jsx)(d.Avatar, {
                            src: I.getAvatarURL(void 0, 40),
                            size: d.AvatarSizes.SIZE_40,
                            "aria-label": n.username
                        }), (0, l.jsxs)("div", {
                            className: o(C.usernameSection, {
                                [C.hasActionMaxWidth]: !L
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: C.username,
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: C.textOverflow,
                                    children: A.default.getUserTag(I, {
                                        mode: "username",
                                        identifiable: r ? "never" : "always"
                                    })
                                }), (0, l.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: O
                                })]
                            }), x]
                        }), (0, l.jsxs)("div", {
                            className: C.userActions,
                            children: [!L && (0, l.jsx)(d.Button, {
                                onClick: function() {
                                    if (M) {
                                        s(0, n.id);
                                        return
                                    }
                                    p.default.track(N.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: N.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), T.switchAccount(n.id), s(1, n.id)
                                },
                                color: d.Button.Colors.PRIMARY,
                                children: M ? S.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, l.jsx)(d.Button, {
                                className: C.userActionMenu,
                                onClick: function(e) {
                                    (0, f.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, l.jsx)(d.Menu, {
                                            "aria-label": S.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: f.closeContextMenu,
                                            onSelect: t,
                                            children: (0, l.jsx)(d.MenuItem, {
                                                id: "remove-account",
                                                label: S.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        c.default.logout(null, n.id).finally(() => {
                                                            T.removeAccount(n.id)
                                                        });
                                                        let e = {};
                                                        null != a ? e.section = N.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = N.PageAnalyticsLocations.LOGIN, p.default.track(N.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e
                                                        }), s(2, n.id)
                                                    }(), null != t && t()
                                                },
                                                color: "danger"
                                            })
                                        })
                                    })
                                },
                                size: d.Button.Sizes.ICON,
                                look: d.Button.Looks.BLANK,
                                color: d.Button.Colors.WHITE,
                                "aria-label": S.default.Messages.MORE_OPTIONS,
                                children: (0, l.jsx)(g.default, {
                                    className: C.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function M(e) {
                let {
                    actionText: t,
                    onAction: n
                } = e, {
                    isLoading: s,
                    multiAccountUsers: a
                } = (0, I.useMultiAccountUsers)();
                return (0, l.jsx)("div", {
                    className: C.list,
                    children: s ? (0, l.jsx)(d.Spinner, {}) : a.map((e, s) => (0, l.jsxs)(r.Fragment, {
                        children: [(0, l.jsx)(L, {
                            user: e,
                            actionText: t,
                            onAction: n
                        }, e.id), a.length - 1 !== s && (0, l.jsx)("div", {
                            role: "separator",
                            className: C.separator
                        })]
                    }, e.id))
                })
            }(a = s || (s = {}))[a.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", a[a.SWITCHED = 1] = "SWITCHED", a[a.REMOVED = 2] = "REMOVED"