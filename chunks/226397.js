            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("866227"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("713841"),
                f = l("376556"),
                m = l("385976"),
                I = l("592407"),
                N = l("766274"),
                T = l("102985"),
                E = l("145131"),
                h = l("461380"),
                g = l("841811"),
                p = l("429893"),
                S = l("315102"),
                O = l("299039"),
                _ = l("674916"),
                A = l("49111"),
                C = l("782340"),
                x = l("311941"),
                R = l("926622");

            function M(e) {
                let t, {
                        guild: l,
                        integration: s,
                        editedIntegration: r,
                        isExpanded: M,
                        onToggleExpand: v,
                        onDisable: L,
                        onEnable: j
                    } = e,
                    [b, P] = a.useState(!1),
                    D = (0, d.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
                    y = a.useCallback(() => {
                        P(!0), j(s)
                    }, [s, j]),
                    G = a.useCallback(() => {
                        !s.syncing && (0, u.openModal)(e => {
                            let t = 0 === s.expire_behavior ? C.default.Messages.REMOVE_SYNCED_ROLE : C.default.Messages.KICK_FROM_SERVER;
                            return (0, n.jsx)(u.ConfirmModal, {
                                ...e,
                                header: C.default.Messages.DISABLE_INTEGRATION_TITLE,
                                confirmText: t,
                                cancelText: C.default.Messages.CANCEL,
                                onConfirm: () => L(s),
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: s.type === A.PlatformTypes.YOUTUBE ? C.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : C.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY
                                })
                            })
                        })
                    }, [s, L]),
                    B = a.useCallback(() => {
                        I.default.syncIntegration(l.id, s.id)
                    }, [l.id, s.id]),
                    H = a.useCallback(() => {
                        null != s.role_id && (I.default.setSection(A.GuildSettingsSections.ROLES), I.default.selectRole(s.role_id))
                    }, [s.role_id]),
                    {
                        serviceName: k,
                        channelURL: U,
                        expireBehaviorLabel: F,
                        syncLabel: w,
                        subscribersText: W
                    } = a.useMemo(() => {
                        var e, t, l, n, a;
                        let i = null !== (l = null === (t = f.default.get(s.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, s.account)) && void 0 !== l ? l : "";
                        switch (s.type) {
                            case A.PlatformTypes.YOUTUBE:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: C.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: C.default.Messages.NUM_MEMBERS.format({
                                        subscribers: null !== (n = s.subscriber_count) && void 0 !== n ? n : 0
                                    }), channelURL: i
                                };
                            case A.PlatformTypes.TWITCH:
                            default:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: C.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: C.default.Messages.NUM_SUBSCRIBERS.format({
                                        subscribers: null !== (a = s.subscriber_count) && void 0 !== a ? a : 0
                                    }), channelURL: i
                                }
                        }
                    }, [s.account, s.subscriber_count, s.type]),
                    {
                        roleLink: V,
                        syncDescriptionText: Y
                    } = a.useMemo(() => {
                        let e, t;
                        let a = null != s.role_id ? l.getRole(s.role_id) : null;
                        e = null != a ? (0, n.jsx)(u.Anchor, {
                            onClick: H,
                            children: a.name
                        }) : C.default.Messages.NONE;
                        let i = f.default.get(s.type);
                        return {
                            roleLink: e,
                            syncDescriptionText: t = s.revoked && null != i ? C.default.Messages.SYNC_REVOKED.format({
                                user: s.user,
                                platformName: i.name
                            }) : C.default.Messages.INTEGRATIONS_LAST_SYNC.format({
                                datetime: o(s.synced_at).calendar()
                            })
                        }
                    }, [l, H, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
                    K = a.useMemo(() => {
                        let e = m.default.getGuildEmoji(l.id),
                            t = Object.values(l.roles).filter(e => null != e.tags && e.tags.integration_id === s.id).map(e => e.id);
                        return s.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != s.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
                    }, [l.id, l.roles, s.enable_emoticons, s.id, s.role_id]);
                if (a.useEffect(() => {
                        (null == r ? void 0 : r.id) === s.id && (null == r ? void 0 : r.enabled) === !0 && P(!1)
                    }, [r, s.id]), s.enabled && null != s.user) t = [{
                    icon: g.default,
                    text: D ? C.default.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: O.default.extractTimestamp(s.id)
                    }) : C.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        user: null != s.user ? new N.default(s.user).tag : null,
                        timestamp: O.default.extractTimestamp(s.id)
                    })
                }];
                else {
                    let e = new URL(U);
                    t = [{
                        text: C.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                            serviceName: k,
                            accountUrl: U,
                            accountUrlText: e.hostname + e.pathname
                        })
                    }]
                }
                let z = (0, n.jsxs)(E.default, {
                        className: x.header,
                        align: E.default.Align.CENTER,
                        children: [(0, n.jsx)(_.default, {
                            name: "".concat(s.name),
                            detailsClassName: x.description,
                            details: t
                        }), s.enabled ? (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(h.default, {
                                className: x.expandIcon,
                                expanded: M && !b,
                                "aria-hidden": !0
                            })
                        }) : (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                onClick: y,
                                disabled: b,
                                children: b ? (0, n.jsx)(p.default, {
                                    width: 24,
                                    height: 24
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: C.default.Messages.INTEGRATIONS_ENABLE
                                })
                            })
                        })]
                    }),
                    Z = null;
                return M && !b && null != r && (Z = (0, n.jsxs)(E.default, {
                    className: x.body,
                    direction: E.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(u.FormDivider, {
                        className: x.topDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            subscribersText: a,
                            descriptionText: s,
                            roleLink: i,
                            onSync: r
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_SYNCED_ROLE
                                }), (0, n.jsx)(u.Text, {
                                    className: x.syncedRole,
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: i
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: l
                                }), (0, n.jsxs)(E.default, {
                                    justify: E.default.Justify.BETWEEN,
                                    children: [(0, n.jsxs)(E.default, {
                                        direction: E.default.Direction.VERTICAL,
                                        children: [(0, n.jsx)(u.Text, {
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a
                                        }), (0, n.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: s
                                        })]
                                    }), (0, n.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        look: u.Button.Looks.FILLED,
                                        color: u.Button.Colors.PRIMARY,
                                        disabled: t.syncing || t.revoked,
                                        onClick: r,
                                        children: t.syncing ? (0, n.jsx)(p.default, {
                                            width: 24,
                                            height: 24
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: C.default.Messages.SYNC
                                        })
                                    })]
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: w,
                        subscribersText: W,
                        descriptionText: Y,
                        roleLink: V,
                        onSync: B
                    }), (0, n.jsx)(u.FormDivider, {
                        className: x.midDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            onBehaviorChange: a,
                            onGracePeriodChange: s
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: l
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: l,
                                    value: "".concat(t.expire_behavior),
                                    options: [{
                                        value: "0",
                                        label: C.default.Messages.REMOVE_SYNCED_ROLE
                                    }, {
                                        value: "1",
                                        label: C.default.Messages.KICK_FROM_SERVER
                                    }],
                                    isDisabled: t.syncing,
                                    onChange: e => a(parseInt(e))
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                                    maxVisibleItems: 5,
                                    value: "".concat(t.expire_grace_period),
                                    options: [1, 3, 7, 14, 30].map(e => ({
                                        value: "".concat(e),
                                        label: C.default.Messages.N_DAYS.format({
                                            days: e
                                        })
                                    })),
                                    onChange: e => s(parseInt(e)),
                                    isDisabled: t.syncing
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: F,
                        onBehaviorChange: function(e) {
                            c.default.updateIntegration({
                                expireBehavior: e
                            })
                        },
                        onGracePeriodChange: function(e) {
                            c.default.updateIntegration({
                                expireGracePeriod: e
                            })
                        }
                    }), s.type === A.PlatformTypes.TWITCH ? function(e) {
                        let {
                            integration: t,
                            emojis: l,
                            onToggle: a
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            direction: E.default.Direction.VERTICAL,
                            children: [(0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                className: i(R.marginTop20, R.marginBottom8),
                                value: t.enable_emoticons,
                                disabled: t.syncing,
                                onChange: e => {
                                    let {
                                        currentTarget: t
                                    } = e;
                                    return a(t.checked)
                                },
                                children: (0, n.jsx)(u.FormText, {
                                    children: C.default.Messages.ENABLE_TWITCH_EMOJI_SYNC
                                })
                            }), (0, n.jsx)(E.default, {
                                wrap: E.default.Wrap.WRAP,
                                className: x.twitchEmojis,
                                children: l.map((e, t) => (0, n.jsx)(u.Tooltip, {
                                    text: e.name,
                                    children: t => (0, n.jsx)("img", {
                                        alt: C.default.Messages.IMG_ALT_EMOJI.format({
                                            name: e.name
                                        }),
                                        draggable: !1,
                                        className: i(x.emoji, "emoji", "jumboable"),
                                        src: S.default.getEmojiURL({
                                            id: e.id,
                                            animated: e.animated,
                                            size: 28
                                        }),
                                        ...t
                                    }, e.name)
                                }, t))
                            })]
                        })
                    }({
                        integration: r,
                        emojis: K,
                        onToggle: function(e) {
                            c.default.updateIntegration({
                                enableEmoticons: e
                            })
                        }
                    }) : null, (0, n.jsx)(u.FormDivider, {
                        className: x.bottomDivider
                    }), (0, n.jsx)(E.default, {
                        children: (0, n.jsx)(u.Button, {
                            className: x.disableButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.RED,
                            look: u.Button.Looks.LINK,
                            onClick: G,
                            children: C.default.Messages.INTEGRATIONS_DISABLE
                        })
                    })]
                })), (0, n.jsx)(u.Card, {
                    editable: !0,
                    className: x.card,
                    children: (0, n.jsxs)(E.default, {
                        direction: E.default.Direction.VERTICAL,
                        children: [s.enabled ? (0, n.jsx)(u.Clickable, {
                            className: x.expandableHeader,
                            "aria-expanded": M && !b,
                            onClick: v,
                            children: z
                        }) : z, Z]
                    })
                })
            }