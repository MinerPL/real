            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                i = n("884691"),
                o = n("77078"),
                l = n("357412"),
                r = n("592407"),
                s = n("803163"),
                d = n("395905"),
                c = n("338807"),
                u = n("219772"),
                E = n("49111"),
                f = n("782340"),
                _ = n("410402"),
                M = n("246369");

            function A() {
                return (0, a.jsxs)("div", {
                    className: _.eligibilityHeader,
                    children: [(0, a.jsx)(o.Heading, {
                        className: _.eligibilityHeaderText,
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
                    }), (0, a.jsx)("img", {
                        className: _.eligibilityHeaderImage,
                        src: M,
                        alt: ""
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        className: _.eligibilityHeaderCloseButton,
                        onClick: () => {
                            (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY)
                        }
                    })]
                })
            }

            function S(e) {
                let {
                    eligibility: t,
                    eligibilityLoading: n,
                    eligibilityError: f,
                    guildId: M,
                    onEligibilityBecameStale: A
                } = e, S = i.useMemo(() => ({
                    onEligibilityBecameStale: A,
                    sortedByIneligible: !0,
                    actions: {
                        onEnableMFAClick: s.default.enableMFA,
                        onRequireModeratorMFAClick: () => {
                            (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY), r.default.open(M, E.GuildSettingsSections.SAFETY, void 0, E.GuildSettingsSubsections.SAFETY_PERMISSIONS)
                        }
                    }
                }), [M, A]), h = (0, l.default)(t, S);
                return null != f ? (0, a.jsx)("div", {
                    className: _.paddedContainer,
                    children: (0, a.jsx)(d.default, {
                        children: f.message
                    })
                }) : null == h || n ? (0, a.jsx)("div", {
                    className: _.paddedContainer,
                    children: (0, a.jsx)(o.Spinner, {})
                }) : (0, a.jsx)("div", {
                    children: h.map((e, t) => (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)(c.ChecklistItem, {
                            name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                            description: e.description,
                            checked: e.checked,
                            actionLabel: e.actionLabel,
                            actionHandler: e.actionHandler
                        }), t < h.length - 1 ? (0, a.jsx)(o.FormDivider, {}) : null]
                    }, e.checkedLabel))
                })
            }

            function h(e) {
                let {
                    eligibility: t,
                    eligibilityLoading: n,
                    eligibilityError: i,
                    refreshEligibility: l,
                    guildId: r,
                    transitionState: s
                } = e;
                return (0, a.jsxs)(o.ModalRoot, {
                    className: _.eligibilityModal,
                    size: o.ModalSize.MEDIUM,
                    transitionState: s,
                    children: [(0, a.jsx)(A, {}), (0, a.jsx)(o.ModalContent, {
                        children: (0, a.jsx)(S, {
                            eligibility: t,
                            eligibilityLoading: n,
                            eligibilityError: i,
                            guildId: r,
                            onEligibilityBecameStale: l
                        })
                    })]
                })
            }