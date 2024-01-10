            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("404118"),
                o = l("650509"),
                d = l("671625"),
                u = l("592407"),
                c = l("990241"),
                f = l("485422"),
                m = l("957255"),
                I = l("145131"),
                T = l("841811"),
                N = l("781896"),
                E = l("71216"),
                h = l("8161"),
                g = l("741919"),
                p = l("315102"),
                S = l("299039"),
                O = l("158998"),
                _ = l("674916"),
                A = l("333231"),
                C = l("551527"),
                x = l("421475"),
                R = l("49111"),
                M = l("782340"),
                v = l("47902");

            function L(e) {
                let {
                    application: t,
                    guild: l,
                    integration: a,
                    ...s
                } = e;
                return (0, n.jsx)(i.ConfirmModal, {
                    ...s,
                    header: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
                        applicationName: t.name
                    }),
                    confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
                    cancelText: M.default.Messages.CANCEL,
                    onConfirm: () => {
                        u.default.disableIntegration(l.id, a.id).catch(() => {
                            r.default.show({
                                title: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                                body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
                            })
                        })
                    },
                    children: (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
                            applicationName: t.name
                        })
                    })
                })
            }

            function j(e) {
                var t;
                let {
                    guild: l,
                    applicationIntegration: r,
                    selectableWebhookChannels: u,
                    editedWebhook: j,
                    errors: b,
                    canNavigate: P
                } = e, {
                    application: D,
                    integration: y,
                    webhooks: G
                } = r, [B, H] = (0, s.useStateFromStoresArray)([m.default], () => [m.default.can(R.Permissions.MANAGE_ROLES, l), null == D.bot || m.default.canManageUser(R.Permissions.MANAGE_GUILD, D.bot.id, l)], [D.bot, l]), k = (0, s.useStateFromStores)([m.default], () => m.default.can(R.Permissions.MANAGE_WEBHOOKS, l), [l]), U = a.useCallback(() => {
                    P() && (0, i.openModal)(e => (0, n.jsx)(L, {
                        guild: l,
                        application: D,
                        integration: y,
                        ...e
                    }))
                }, [D, P, l, y]), F = a.useMemo(() => {
                    let e = [{
                        icon: T.default,
                        text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
                            timestamp: S.default.extractTimestamp(y.id)
                        })
                    }];
                    return null != y.user && e.push({
                        icon: N.default,
                        text: M.default.Messages.INTEGRATION_ADDED_USER.format({
                            user: O.default.getUserTag(y.user)
                        })
                    }), e
                }, [y.id, y.user]), w = a.useMemo(() => null != D.bot ? (0, n.jsx)(C.default, {
                    guild: l,
                    applicationIntegration: r
                }) : (0, n.jsx)(i.Card, {
                    className: v.emptyCard,
                    editable: !0,
                    children: (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT
                    })
                }), [D.bot, r, l]), {
                    applicationSubscriptionListingsShown: W
                } = (0, o.default)({
                    applicationId: D.id,
                    groupListingId: D.primarySkuId,
                    guildId: l.id
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(_.default, {
                        name: D.name,
                        imageSrc: null !== (t = D.getIconURL(32)) && void 0 !== t ? t : p.DEFAULT_AVATARS[0],
                        details: F,
                        isHeader: !0
                    }), (null == D ? void 0 : D.description) != null ? (0, n.jsx)(f.default, {
                        userBio: D.description,
                        className: v.headerDescription
                    }) : null, B ? (0, n.jsx)(c.default, {
                        application: D,
                        canNavigate: P,
                        guildId: l.id
                    }) : null, (0, n.jsx)(i.FormDivider, {
                        className: v.headerDivider
                    }), null != D.bot ? (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(E.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT
                        }), w]
                    }) : null, W && null != D.primarySkuId && (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(h.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
                        }), (0, n.jsx)(d.default, {
                            applicationId: D.id,
                            applicationPrimarySkuId: D.primarySkuId,
                            guildId: l.id
                        })]
                    }), (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(g.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
                        }), G.length > 0 ? (0, n.jsx)(x.default, {
                            webhooks: G,
                            editedWebhook: j,
                            selectableWebhookChannels: u,
                            errors: b,
                            canNavigate: P
                        }) : (0, n.jsx)(i.Card, {
                            className: v.emptyCard,
                            editable: !0,
                            children: (0, n.jsx)(i.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: k ? M.default.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : M.default.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
                            })
                        })]
                    }), (0, n.jsx)(i.FormDivider, {
                        className: v.headerDivider
                    }), (0, n.jsxs)(I.default, {
                        className: v.section,
                        justify: I.default.Justify.BETWEEN,
                        align: I.default.Align.CENTER,
                        children: [(0, n.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: H ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
                        }), (0, n.jsx)(I.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                color: i.Button.Colors.RED,
                                look: i.Button.Looks.FILLED,
                                disabled: !H,
                                onClick: U,
                                children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE
                            })
                        })]
                    })]
                })
            }