            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("872717"),
                o = l("862337"),
                d = l("77078"),
                u = l("404118"),
                c = l("713841"),
                f = l("611183"),
                m = l("608684"),
                I = l("766274"),
                T = l("145131"),
                N = l("461380"),
                E = l("841811"),
                h = l("315102"),
                g = l("306160"),
                p = l("299039"),
                S = l("158998"),
                O = l("674916"),
                _ = l("49111"),
                A = l("782340"),
                C = l("40489");
            let x = e => {
                if (null == e) return null;
                let t = new I.default(e);
                return S.default.getUserTag(t)
            };

            function R(e, t) {
                return null != t && /^data:/.test(t) ? t : (0, h.getUserAvatarURL)({
                    id: e.id,
                    avatar: t,
                    discriminator: _.NON_USER_BOT_DISCRIMINATOR
                })
            }

            function M(e) {
                let {
                    id: t,
                    webhook: l,
                    editedWebhook: s,
                    channelOptions: I,
                    isExpanded: h,
                    isNew: S,
                    errors: M,
                    onToggleExpand: v
                } = e, [L, j] = a.useState(!1), [b] = a.useState(new o.Timeout);
                a.useEffect(() => () => b.stop(), [b]);
                let P = a.useMemo(() => R(l, l.avatar), [l]),
                    D = a.useCallback(() => {
                        let e = "".concat(r.default.getAPIBaseURL(!1)).concat(_.Endpoints.WEBHOOK_INTEGRATION(l.id, l.token));
                        (0, g.copy)(e)
                    }, [l]),
                    y = a.useCallback(() => {
                        (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
                            ...e,
                            header: A.default.Messages.WEBHOOK_DELETE_TITLE.format({
                                name: l.name
                            }),
                            confirmText: A.default.Messages.WEBHOOK_DELETE,
                            cancelText: A.default.Messages.WEBHOOK_CANCEL,
                            onConfirm: () => {
                                f.default.delete(l.guild_id, l.id).catch(e => {
                                    let {
                                        status: t
                                    } = e;
                                    429 === t ? u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
                                    }) : u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                    })
                                })
                            },
                            children: (0, n.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: A.default.Messages.WEBHOOK_DELETE_BODY.format({
                                    name: l.name
                                })
                            })
                        }))
                    }, [l.guild_id, l.id, l.name]),
                    G = [];
                null != l.user ? G.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_USER_DATE.format({
                        user: x(l.user),
                        timestamp: p.default.extractTimestamp(l.id)
                    })
                }) : G.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_DATE.format({
                        timestamp: p.default.extractTimestamp(l.id)
                    })
                });
                let B = null;
                return h && null != s && (B = (0, n.jsxs)("div", {
                    className: C.body,
                    children: [(0, n.jsx)(d.FormDivider, {
                        className: C.topDivider
                    }), (0, n.jsxs)(T.default, {
                        children: [(0, n.jsx)(T.default.Child, {
                            shrink: 1,
                            grow: 0,
                            children: (0, n.jsxs)(T.default, {
                                className: C.avatarWrapper,
                                direction: T.default.Direction.VERTICAL,
                                children: [(0, n.jsx)(m.default, {
                                    image: s.avatar,
                                    onChange: e => {
                                        c.default.updateWebhook({
                                            avatar: e
                                        })
                                    },
                                    makeURL: e => R(l, e),
                                    imageClassName: C.avatarUploaderInner,
                                    showIcon: !0
                                }), null != M.avatar && "" !== M.avatar ? (0, n.jsx)(n.Fragment, {
                                    children: M.avatar
                                }) : null]
                            })
                        }), (0, n.jsxs)(T.default, {
                            direction: T.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(T.default, {
                                children: [(0, n.jsx)(T.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.WEBHOOK_FORM_NAME,
                                        children: (0, n.jsx)(d.TextInput, {
                                            value: s.name,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: M.name
                                        })
                                    })
                                }), (0, n.jsx)(T.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.CHANNEL,
                                        children: (0, n.jsx)(d.SearchableSelect, {
                                            value: s.channel_id,
                                            options: I,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    channelId: e
                                                })
                                            },
                                            placeholder: A.default.Messages.CHANNEL_SELECT
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(d.FormDivider, {
                                className: C.bottomDivider
                            }), (0, n.jsxs)(T.default, {
                                children: [(0, n.jsx)(d.Tooltip, {
                                    text: A.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
                                    forceOpen: L,
                                    color: d.TooltipColors.GREEN,
                                    disableTooltipPointerEvents: !0,
                                    children: e => {
                                        let {
                                            onClick: t,
                                            onMouseEnter: a,
                                            onMouseLeave: s,
                                            ...i
                                        } = e;
                                        return (0, n.jsx)(d.Button, {
                                            ...i,
                                            onClick: () => {
                                                null == t || t(), j(!0), b.start(1e3, () => j(!1)), D()
                                            },
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            look: d.Button.Looks.FILLED,
                                            className: C.copyButton,
                                            disabled: null == l.token || "" === l.token,
                                            children: A.default.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
                                        })
                                    }
                                }), (0, n.jsx)(d.Button, {
                                    onClick: y,
                                    size: d.Button.Sizes.SMALL,
                                    color: d.Button.Colors.RED,
                                    look: d.Button.Looks.LINK,
                                    children: A.default.Messages.INTEGRATIONS_WEBHOOK_DELETE
                                })]
                            })]
                        })]
                    })]
                })), (0, n.jsx)(d.Card, {
                    editable: !0,
                    id: t,
                    className: i(C.card, S ? C.pulse : null),
                    children: (0, n.jsxs)(T.default, {
                        direction: T.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(d.Clickable, {
                            className: C.header,
                            "aria-expanded": h,
                            onClick: v,
                            children: (0, n.jsxs)(T.default, {
                                align: T.default.Align.CENTER,
                                children: [(0, n.jsx)(O.default, {
                                    name: l.name,
                                    imageSrc: P,
                                    details: G
                                }), (0, n.jsx)(N.default, {
                                    className: C.expandIcon,
                                    expanded: h,
                                    "aria-hidden": !0
                                })]
                            })
                        }), B]
                    })
                })
            }