            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            }), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("404118"),
                r = l("713841"),
                o = l("611183"),
                d = l("145131"),
                u = l("461380"),
                c = l("733160"),
                f = l("315102"),
                m = l("674916"),
                I = l("49111"),
                N = l("782340"),
                T = l("385197");

            function E(e) {
                let {
                    webhook: t,
                    editedWebhook: l,
                    channelOptions: E,
                    isExpanded: h,
                    errors: g,
                    onToggleExpand: p
                } = e, S = a.useMemo(() => {
                    var e, l;
                    return e = t, null != (l = t.avatar) && /^data:/.test(l) ? l : (0, f.getUserAvatarURL)({
                        id: e.id,
                        avatar: l,
                        discriminator: I.NON_USER_BOT_DISCRIMINATOR
                    })
                }, [t]), O = a.useCallback(() => {
                    (0, s.openModal)(e => (0, n.jsx)(s.ConfirmModal, {
                        ...e,
                        header: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({
                            name: t.name
                        }),
                        confirmText: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                        cancelText: N.default.Messages.CANCEL,
                        onConfirm: () => {
                            o.default.delete(t.guild_id, t.id).catch(() => {
                                i.default.show({
                                    title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                                    body: N.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                })
                            })
                        },
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
                        })
                    }))
                }, [t.guild_id, t.id, t.name]), _ = [];
                null != t.source_channel && null != t.source_guild && (_.push({
                    icon: c.default,
                    text: t.source_channel.name
                }), _.push({
                    text: (0, n.jsx)("span", {
                        className: T.guildSource,
                        children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
                            guildHook: () => (0, n.jsx)("span", {
                                className: T.sourceName,
                                children: t.source_guild.name
                            }, t.id)
                        })
                    }, "guild-source")
                }));
                let A = null;
                return h && null != l && (A = (0, n.jsxs)("div", {
                    className: T.body,
                    children: [(0, n.jsx)(s.FormDivider, {
                        className: T.topDivider
                    }), (0, n.jsx)(d.default, {
                        children: (0, n.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(d.default, {
                                children: [(0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(s.FormItem, {
                                        title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                                        children: (0, n.jsx)(s.TextInput, {
                                            value: l.name,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: g.name
                                        })
                                    })
                                }), (0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(s.FormItem, {
                                        title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                                        children: (0, n.jsx)(s.SingleSelect, {
                                            value: l.channel_id,
                                            options: E,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    channelId: e
                                                })
                                            }
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(s.FormDivider, {
                                className: T.bottomDivider
                            }), (0, n.jsx)(d.default, {
                                children: (0, n.jsx)(s.Button, {
                                    onClick: O,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.RED,
                                    look: s.Button.Looks.LINK,
                                    className: T.removeButton,
                                    children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
                                })
                            })]
                        })
                    })]
                })), (0, n.jsx)(s.Card, {
                    editable: !0,
                    className: T.card,
                    children: (0, n.jsxs)(d.default, {
                        direction: d.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(s.Clickable, {
                            className: T.header,
                            "aria-expanded": h,
                            onClick: p,
                            children: (0, n.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [(0, n.jsx)(m.default, {
                                    name: t.name,
                                    imageSrc: S,
                                    detailsClassName: T.description,
                                    details: _
                                }), (0, n.jsx)(u.default, {
                                    className: T.expandIcon,
                                    expanded: h,
                                    "aria-hidden": !0
                                })]
                            })
                        }), A]
                    })
                })
            }