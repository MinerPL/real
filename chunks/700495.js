            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("837008"),
                u = s("648825"),
                c = s("757715"),
                E = s("406876"),
                _ = s("795228"),
                T = s("561205"),
                I = s("782340"),
                S = s("332227"),
                N = s("754433");

            function g(e) {
                var t;
                let {
                    onDeleteEditState: l
                } = e, {
                    editStateId: g,
                    guildId: f,
                    groupListingId: A
                } = (0, E.useEditStateContext)(), L = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptionListing(g)), m = null == L ? void 0 : L.id, C = (0, _.default)(f), O = n.useMemo(() => {
                    var e;
                    return null != C && null != L && (null !== (e = C[L.role_id]) && void 0 !== e ? e : 0)
                }, [C, L]), h = 0 === O, R = null == m, D = null !== (t = null == L ? void 0 : L.archived) && void 0 !== t && t, {
                    deleteSubscriptionListing: M,
                    submitting: G
                } = (0, d.useDeleteSubscriptionListing)(), {
                    archiveSubscriptionListing: x,
                    submitting: p
                } = (0, d.useArchiveSubscriptionListing)(), U = () => {
                    let e = async () => {
                        if (!R) {
                            i(null != A, "group listing doesnt exist"), i(null != m, "subscription listing doesnt exist");
                            let e = await M(f, A, m);
                            if (!e) return
                        }
                        null == l || l()
                    };
                    (0, o.openModalLazy)(async () => {
                        let {
                            ConfirmModal: t
                        } = await s.el("77078").then(s.bind(s, "77078"));
                        return s => (0, a.jsx)(t, {
                            header: I.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                            confirmText: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON,
                            cancelText: I.default.Messages.CANCEL,
                            onConfirm: () => {
                                e()
                            },
                            confirmButtonColor: o.Button.Colors.RED,
                            ...s,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
                            })
                        })
                    })
                }, v = (0, c.useRoleSubscriptionSettingsDisabled)();
                return null == L ? null : (0, a.jsx)(T.default, {
                    title: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ADVANCE_SECTION_TITLE,
                    children: D ? (0, a.jsxs)(o.FormSection, {
                        title: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_LABEL,
                        disabled: v,
                        children: [(0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: S.formDescription,
                            disabled: v,
                            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
                        }), (0, a.jsx)(o.Tooltip, {
                            shouldShow: !h,
                            text: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_TOOLTIP.format({
                                listingMemberCount: O
                            }),
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                wrapperClassName: N.deleteListingButton,
                                color: o.Button.Colors.RED,
                                onClick: U,
                                submitting: G,
                                disabled: v || !h,
                                children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON
                            })
                        })]
                    }) : (0, a.jsxs)(o.FormSection, {
                        title: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_LABEL,
                        disabled: v,
                        children: [(0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: S.formDescription,
                            disabled: v,
                            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
                        }), (0, a.jsx)(o.Button, {
                            wrapperClassName: N.deleteListingButton,
                            color: o.Button.Colors.RED,
                            onClick: () => {
                                i(null != A, "group listing doesnt exist"), i(null != m, "subscription listing doesnt exist"), (0, o.openModalLazy)(async () => {
                                    let {
                                        ConfirmModal: e
                                    } = await s.el("77078").then(s.bind(s, "77078"));
                                    return t => (0, a.jsx)(e, {
                                        header: I.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
                                        confirmText: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON,
                                        cancelText: I.default.Messages.CANCEL,
                                        onConfirm: () => {
                                            x(f, A, m)
                                        },
                                        confirmButtonColor: o.Button.Colors.RED,
                                        ...t,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
                                        })
                                    })
                                })
                            },
                            submitting: p,
                            disabled: v,
                            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON
                        })]
                    })
                })
            }