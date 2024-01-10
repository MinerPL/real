            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("969176"),
                i = l.n(s),
                o = l("65597"),
                d = l("77078"),
                C = l("4845"),
                r = l("635731"),
                u = l("491401"),
                c = l("864982"),
                f = l("130037"),
                m = l("536999"),
                E = l("178406"),
                M = l("645266"),
                h = l("49111"),
                T = l("782340"),
                x = l("253665");

            function H(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, s = (0, o.default)([E.default], () => E.default.getSearchStateByGuildId(t), [t], i), H = (0, f.useTrackMemberFilterSafetyFlagsUsed)(t), _ = (0, m.isInMembersTableSafetySignalsExperiment)(t), A = n.useCallback(() => {
                    !s.requireUnusualDmActivity && H(f.MemberSafetyFlagType.UNUSUAL_DM_ACTIVITY), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUnusualDmActivity: !s.requireUnusualDmActivity
                    })
                }, [t, s, H]), L = n.useCallback(() => {
                    !s.requireCommunicationDisabled && H(f.MemberSafetyFlagType.COMMUNICATION_DISABLED), (0, M.updateSearchState)(t, {
                        ...s,
                        requireCommunicationDisabled: !s.requireCommunicationDisabled
                    })
                }, [t, s, H]), g = n.useCallback(() => {
                    !s.requireUnusualAccountActivity && H(f.MemberSafetyFlagType.UNUSUAL_ACCOUNT_ACTIVITY), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUnusualAccountActivity: !s.requireUnusualAccountActivity
                    })
                }, [t, s, H]), N = n.useCallback(() => {
                    !s.requireUsernameQuarantined && H(f.MemberSafetyFlagType.USERNAME_QUARANTINED), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUsernameQuarantined: !s.requireUsernameQuarantined
                    })
                }, [t, s, H]);
                return (0, a.jsx)(d.Menu, {
                    navId: "member-safety-flags",
                    onClose: l,
                    "aria-label": T.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
                    onSelect: h.NOOP,
                    children: (0, a.jsxs)(d.MenuGroup, {
                        children: [(0, a.jsx)(d.MenuCheckboxItem, {
                            id: "toggle-require-unusual-dm-activity",
                            label: (0, a.jsxs)("div", {
                                className: x.checkboxLabel,
                                children: [(0, a.jsx)(C.default, {
                                    width: 16,
                                    height: 16,
                                    className: x.unusualDMLabelIcon
                                }), T.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
                            }),
                            action: A,
                            checked: s.requireUnusualDmActivity
                        }), (0, a.jsx)(d.MenuCheckboxItem, {
                            id: "toggle-require-communication-disabled",
                            label: (0, a.jsxs)("div", {
                                className: x.checkboxLabel,
                                children: [(0, a.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: x.timeoutLabelIcon
                                }), T.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
                            }),
                            action: L,
                            checked: s.requireCommunicationDisabled
                        }), _ && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(d.MenuCheckboxItem, {
                                id: "toggle-require-unusual-account-activity",
                                label: (0, a.jsxs)("div", {
                                    className: x.checkboxLabel,
                                    children: [(0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16,
                                        className: x.unusualAccountActivityLabelIcon
                                    }), T.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
                                }),
                                action: g,
                                checked: s.requireUnusualAccountActivity
                            }), (0, a.jsx)(d.MenuCheckboxItem, {
                                id: "toggle-require-username-quarantined",
                                label: (0, a.jsxs)("div", {
                                    className: x.checkboxLabel,
                                    children: [(0, a.jsx)(r.default, {
                                        width: 16,
                                        height: 16,
                                        className: x.quarantinedLabelIcon
                                    }), T.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
                                }),
                                action: N,
                                checked: s.requireUsernameQuarantined
                            })]
                        })]
                    })
                })
            }