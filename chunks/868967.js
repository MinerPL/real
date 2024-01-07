            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
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
                E = l("536999"),
                m = l("178406"),
                M = l("645266"),
                T = l("49111"),
                h = l("782340"),
                x = l("253665");

            function _(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, s = (0, o.default)([m.default], () => m.default.getSearchStateByGuildId(t), [t], i), _ = (0, f.useTrackMemberFilterSafetyFlagsUsed)(t), H = (0, E.isInMembersTableSafetySignalsExperiment)(t), A = n.useCallback(() => {
                    !s.requireUnusualDmActivity && _(f.MemberSafetyFlagType.UNUSUAL_DM_ACTIVITY), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUnusualDmActivity: !s.requireUnusualDmActivity
                    })
                }, [t, s, _]), N = n.useCallback(() => {
                    !s.requireCommunicationDisabled && _(f.MemberSafetyFlagType.COMMUNICATION_DISABLED), (0, M.updateSearchState)(t, {
                        ...s,
                        requireCommunicationDisabled: !s.requireCommunicationDisabled
                    })
                }, [t, s, _]), p = n.useCallback(() => {
                    !s.requireUnusualAccountActivity && _(f.MemberSafetyFlagType.UNUSUAL_ACCOUNT_ACTIVITY), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUnusualAccountActivity: !s.requireUnusualAccountActivity
                    })
                }, [t, s, _]), g = n.useCallback(() => {
                    !s.requireUsernameQuarantined && _(f.MemberSafetyFlagType.USERNAME_QUARANTINED), (0, M.updateSearchState)(t, {
                        ...s,
                        requireUsernameQuarantined: !s.requireUsernameQuarantined
                    })
                }, [t, s, _]);
                return (0, a.jsx)(d.Menu, {
                    navId: "member-safety-flags",
                    onClose: l,
                    "aria-label": h.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
                    onSelect: T.NOOP,
                    children: (0, a.jsxs)(d.MenuGroup, {
                        children: [(0, a.jsx)(d.MenuCheckboxItem, {
                            id: "toggle-require-unusual-dm-activity",
                            label: (0, a.jsxs)("div", {
                                className: x.checkboxLabel,
                                children: [(0, a.jsx)(C.default, {
                                    width: 16,
                                    height: 16,
                                    className: x.unusualDMLabelIcon
                                }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
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
                                }), h.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
                            }),
                            action: N,
                            checked: s.requireCommunicationDisabled
                        }), H && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(d.MenuCheckboxItem, {
                                id: "toggle-require-unusual-account-activity",
                                label: (0, a.jsxs)("div", {
                                    className: x.checkboxLabel,
                                    children: [(0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16,
                                        className: x.unusualAccountActivityLabelIcon
                                    }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
                                }),
                                action: p,
                                checked: s.requireUnusualAccountActivity
                            }), (0, a.jsx)(d.MenuCheckboxItem, {
                                id: "toggle-require-username-quarantined",
                                label: (0, a.jsxs)("div", {
                                    className: x.checkboxLabel,
                                    children: [(0, a.jsx)(r.default, {
                                        width: 16,
                                        height: 16,
                                        className: x.quarantinedLabelIcon
                                    }), h.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
                                }),
                                action: g,
                                checked: s.requireUsernameQuarantined
                            })]
                        })]
                    })
                })
            }