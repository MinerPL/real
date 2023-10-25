(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["606"], {
        23141: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1964f50ca0220e98dc32.svg"
        },
        34705: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c1875fc8a42a61903ba1.svg"
        },
        182418: function(e, t, s) {
            "use strict";
            e.exports = s.p + "387a7c504c96b992872d.svg"
        },
        164370: function(e, t, s) {
            "use strict";
            e.exports = s.p + "73984240bd99493de947.svg"
        },
        972442: function(e, t, s) {
            "use strict";
            e.exports = s.p + "038a865e09c25dc13e30.svg"
        },
        473886: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7ad4feabe353360394cc.svg"
        },
        921880: function(e, t, s) {
            "use strict";
            e.exports = s.p + "581d6c7045a19cc9cfc0.svg"
        },
        555658: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6f736adcfde4c65bd7bf.svg"
        },
        623264: function(e, t, s) {
            "use strict";
            e.exports = s.p + "25a7f5c53d497f5490af.svg"
        },
        706832: function(e, t, s) {
            "use strict";
            e.exports = s.p + "5e6ab17a7aff87ed5da1.svg"
        },
        881888: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("819855"),
                o = s("77078"),
                d = s("272030"),
                u = s("726527"),
                c = s("142160"),
                h = s("433487"),
                E = s("782340"),
                m = s("463106");

            function f(e) {
                let {
                    role: t,
                    guild: n
                } = e, [r, c] = l.useState(!1), E = (0, u.useHasGuildRoleItems)(n, t);
                return E ? (0, a.jsx)(o.Clickable, {
                    onClick: e => {
                        c(!0), (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("726527").then(s.bind(s, "726527"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                role: t,
                                guild: n
                            })
                        }, {
                            onClose: () => c(!1)
                        })
                    },
                    className: i(m.roleOverflow, {
                        [m.open]: r
                    }),
                    children: (0, a.jsx)(h.default, {
                        width: 20,
                        height: 20
                    })
                }) : null
            }

            function g(e) {
                let {
                    color: t,
                    id: n,
                    role: i,
                    guild: u,
                    children: h,
                    isDragging: g,
                    selectedItem: T,
                    onItemSelect: S,
                    itemType: N,
                    locked: _,
                    lockTooltip: C,
                    showContextMenu: p,
                    theme: M,
                    roleStyle: x,
                    "aria-label": R
                } = e, I = l.useCallback(e => {
                    (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await s.el("443070").then(s.bind(s, "443070"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            id: n,
                            label: E.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [n]);
                return g ? (0, a.jsx)("div", {
                    className: m.dragged
                }) : (0, a.jsx)(o.TabBar.Item, {
                    className: m.role,
                    id: n,
                    selectedItem: T,
                    onItemSelect: S,
                    itemType: N,
                    "aria-label": null != C ? "".concat(R, ", ").concat(C) : R,
                    children: (0, a.jsxs)("div", {
                        className: m.roleContent,
                        children: ["dot" === x ? (0, a.jsx)(o.RoleDot, {
                            color: null != t ? t : void 0,
                            className: m.roleDot,
                            background: !1,
                            tooltip: !1
                        }) : (0, a.jsx)(o.RoleCircle, {
                            color: null != t ? t : void 0,
                            className: m.roleCircle
                        }), function() {
                            if (!_) return null;
                            let e = (0, r.isThemeDark)(M) ? s("555658") : s("921880");
                            return (0, a.jsx)(o.Tooltip, {
                                text: C,
                                color: o.Tooltip.Colors.RED,
                                children: t => (0, a.jsx)(c.default, {
                                    className: m.lock,
                                    src: e,
                                    ...t
                                })
                            })
                        }(), (0, a.jsx)("div", {
                            className: m.roleInner,
                            onContextMenu: I,
                            children: h
                        }), p && null != i ? (0, a.jsx)(f, {
                            guild: u,
                            role: i
                        }) : null]
                    })
                })
            }
        },
        575351: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("498225"),
                i = s("77078"),
                r = s("679653"),
                o = s("929278"),
                d = s("347895"),
                u = s("848848"),
                c = s("735251"),
                h = s("534222"),
                E = s("592407"),
                m = s("610730"),
                f = s("271938"),
                g = s("305961"),
                T = s("957255"),
                S = s("49111"),
                N = s("782340"),
                _ = s("420229"),
                C = e => {
                    var t;
                    let {
                        channel: s,
                        onClose: C,
                        onConfirm: p,
                        transitionState: M
                    } = e, x = (0, r.default)(s, !0), R = s.id, I = s.isForumPost(), A = (0, n.useStateFromStores)([g.default], () => g.default.getGuild(s.getGuildId())), O = (0, h.useGuildChannelScheduledEvents)(R), {
                        isSubscriptionGated: L
                    } = (0, u.default)(s.id), v = (0, c.default)(A, s), [j, D] = l.useState(null), y = (0, n.useStateFromStores)([f.default], () => s.isOwner(f.default.getId()), [s]), F = (0, n.useStateFromStores)([T.default], () => T.default.can(s.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, s), [s]), b = (0, n.useStateFromStores)([m.default], () => null !== (t = m.default.getCount(s.id)) && void 0 !== t ? t : 0, [s.id]), P = I && (F || y && b < 1), w = O.length > 0 && (s.type === S.ChannelTypes.GUILD_VOICE || s.type === S.ChannelTypes.GUILD_STAGE_VOICE);
                    if (l.useEffect(() => {
                            (async () => {
                                let e = await (0, o.isDefaultChannelThresholdMetAfterDelete)(s.getGuildId(), R);
                                if (!e) {
                                    D("default");
                                    return
                                }
                                let t = await (0, d.getBlockForChannelDeletion)(s.getGuildId(), R);
                                if (!1 !== t) {
                                    D(t);
                                    return
                                }
                            })()
                        }, [s, R]), null != j) {
                        let e;
                        let t = N.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === j ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === j ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : N.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, a.jsxs)(i.ModalRoot, {
                            transitionState: M,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, a.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, a.jsxs)(i.ModalContent, {
                                className: _.modalContent,
                                children: [(0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            if (null != A) E.default.open(A.id, S.GuildSettingsSections.ONBOARDING), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, a.jsx)(i.ModalFooter, {
                                children: (0, a.jsx)(i.Button, {
                                    onClick: C,
                                    children: N.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == A) return null;
                    if (A.hasFeature(S.GuildFeatures.COMMUNITY) && (A.rulesChannelId === R || A.publicUpdatesChannelId === R)) {
                        let e = A.rulesChannelId === R,
                            t = e ? N.default.Messages.DELETE_RULES_CHANNEL_BODY : N.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, a.jsxs)(i.ModalRoot, {
                            transitionState: M,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, a.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, a.jsxs)(i.ModalContent, {
                                children: [(0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: _.modalText,
                                    children: t
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: _.modalText,
                                    children: N.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            E.default.open(A.id, S.GuildSettingsSections.COMMUNITY), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, a.jsx)(i.ModalFooter, {
                                children: (0, a.jsx)(i.Button, {
                                    onClick: C,
                                    children: N.default.Messages.OKAY
                                })
                            })]
                        })
                    } {
                        let {
                            deleteText: e,
                            deleteBody: t
                        } = (() => {
                            if (s.type === S.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: N.default.Messages.DELETE_CATEGORY,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: x
                                })
                            };
                            if (s.isForumPost()) return {
                                deleteText: P ? N.default.Messages.DELETE_FORUM_POST : N.default.Messages.DELETE_MESSAGE,
                                deleteBody: P && y && !F ? N.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: x
                                }) : P ? N.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: x
                                }) : N.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (s.isThread()) return {
                                deleteText: N.default.Messages.DELETE_THREAD,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: x
                                })
                            };
                            else if (L && v > 0) return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: x,
                                    numGuildRoleSubscriptionMembers: v
                                })
                            };
                            return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: x
                                })
                            }
                        })();
                        return (0, a.jsxs)(i.ModalRoot, {
                            transitionState: M,
                            "aria-label": e,
                            children: [(0, a.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, a.jsxs)(i.ModalContent, {
                                className: _.modalContent,
                                children: [(0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: t
                                }), w ? (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: _.warningText,
                                    children: N.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: O.length
                                    })
                                }) : null]
                            }), (0, a.jsxs)(i.ModalFooter, {
                                children: [(0, a.jsx)(i.Button, {
                                    onClick: p,
                                    color: i.Button.Colors.RED,
                                    children: e
                                }), (0, a.jsx)(i.Button, {
                                    onClick: C,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: N.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
        },
        443202: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("28926"),
                i = s("498225"),
                r = s("77078"),
                o = s("318738"),
                d = s("173446"),
                u = s("901998"),
                c = s("461380"),
                h = s("782340"),
                E = s("624541");

            function m() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.advancedMode),
                    [t] = l.useState(new n.default.Value(e ? 1 : 0));
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.FormDivider, {
                        className: E.advancedModeDivider
                    }), (0, a.jsx)(r.HeadingLevel, {
                        component: (0, a.jsx)(r.Button, {
                            look: r.Button.Looks.BLANK,
                            color: r.Button.Colors.TRANSPARENT,
                            onClick: function() {
                                e ? n.default.timing(t, {
                                    toValue: 0,
                                    duration: 250
                                }).start(() => {
                                    (0, o.setAdvancedMode)(!1)
                                }) : ((0, o.setAdvancedMode)(!0), n.default.timing(t, {
                                    toValue: 1,
                                    duration: 250
                                }).start())
                            },
                            children: (0, a.jsxs)(r.FormTitle, {
                                tag: "h1",
                                className: E.advancedTitle,
                                children: [h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, a.jsx)(c.default, {
                                    expanded: e,
                                    className: E.titleCaret,
                                    width: 20,
                                    height: 20
                                })]
                            })
                        }),
                        children: e && (0, a.jsx)(n.default.div, {
                            style: {
                                opacity: t
                            },
                            children: (0, a.jsx)(d.default, {})
                        })
                    })]
                })
            }
        },
        817653: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return K
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("498225"),
                o = s("77078"),
                d = s("404118"),
                u = s("450911"),
                c = s("18054"),
                h = s("318738"),
                E = s("798609"),
                m = s("339023"),
                f = s("929278"),
                g = s("619395"),
                T = s("923510"),
                S = s("230324"),
                N = s("901998"),
                _ = s("26989"),
                C = s("305961"),
                p = s("957255"),
                M = s("697218"),
                x = s("79798"),
                R = s("145131"),
                I = s("555158"),
                A = s("381546"),
                O = s("45029"),
                L = s("682344"),
                v = s("228427"),
                j = s("31225"),
                D = s("447089"),
                y = s("991170"),
                F = s("454273"),
                b = s("443202"),
                P = s("165161"),
                w = s("460812"),
                H = s("606762"),
                U = s("49111"),
                B = s("809924"),
                G = s("782340"),
                V = s("728310");

            function k(e) {
                let {
                    channel: t,
                    roles: s,
                    members: l,
                    disabledReason: n,
                    getRemoveTooltipHint: r
                } = e;
                return (0, a.jsx)(o.List, {
                    className: V.roleMemberList,
                    sections: [s.length, l.length],
                    renderRow: function(e) {
                        let c, f, T, {
                                section: S,
                                row: N
                            } = e,
                            _ = !1;
                        switch (S) {
                            case H.AudienceSelectorSections.ROLES:
                                var C;
                                T = (f = s[N]).rowType === H.RowType.ROLE && (null === (C = f.tags) || void 0 === C ? void 0 : C.guild_connections) === null ? (0, a.jsx)(m.default, {
                                    className: V.shield,
                                    color: f.colorString,
                                    size: 20
                                }) : (0, a.jsx)(L.default, {
                                    className: V.shield,
                                    color: f.colorString,
                                    height: 20
                                }), c = (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: V.rowHeight,
                                        children: T
                                    }), (0, a.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: V.rowLabel,
                                        color: f.disabled ? "text-muted" : "text-normal",
                                        children: f.name
                                    })]
                                }), _ = f.disabled;
                                break;
                            case H.AudienceSelectorSections.MEMBERS:
                                f = l[N], c = (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(o.Avatar, {
                                        src: f.avatarURL,
                                        size: o.AvatarSizes.SIZE_24,
                                        "aria-hidden": !0
                                    }), (0, a.jsx)(o.Text, {
                                        className: V.rowLabel,
                                        variant: "text-sm/normal",
                                        children: f.name
                                    }), f.bot && (0, a.jsx)(x.default, {
                                        verified: f.verifiedBot,
                                        className: V.rowBotTag
                                    }), null != f.nickname && (0, a.jsx)(o.Text, {
                                        color: "text-muted",
                                        className: V.rowLabelSubText,
                                        variant: "text-sm/normal",
                                        children: f.username
                                    })]
                                }), _ = f.disabled;
                                break;
                            default:
                                f = null
                        }
                        if (null == f) return null;
                        let p = !_ && null == n && null != f.id;
                        return (0, a.jsxs)(R.default, {
                            justify: R.default.Justify.BETWEEN,
                            align: R.default.Align.CENTER,
                            className: V.memberRow,
                            children: [(0, a.jsx)(R.default, {
                                justify: R.default.Justify.START,
                                align: R.default.Align.CENTER,
                                className: V.memberRowBody,
                                children: c
                            }), (0, a.jsx)(o.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: F.getRowTypeLabel(f.rowType)
                            }), f.rowType !== H.RowType.EMPTY_STATE && (0, a.jsx)(o.TooltipContainer, {
                                className: V.removeIconContainer,
                                text: null != n ? n : r(f.rowType, f.disabled),
                                children: (0, a.jsx)(o.Clickable, {
                                    onClick: () => {
                                        var e, s, a;
                                        return p && null != f && (e = f.id, s = f.name, a = f.rowType, void d.default.show({
                                            title: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                                            body: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                                                name: s
                                            }),
                                            cancelText: G.default.Messages.CANCEL,
                                            onConfirm: () => (function(e, s) {
                                                if (t.isGuildStageVoice()) {
                                                    let a = (0, g.removeModeratorOverwrite)(e, s === H.RowType.ROLE ? E.PermissionOverwriteType.ROLE : E.PermissionOverwriteType.MEMBER, t);
                                                    (0, g.isEmptyOverwrite)(a) ? u.default.clearPermissionOverwrite(t.id, a.id): (0, h.savePermissionUpdates)(t.id, [a])
                                                } else u.default.clearPermissionOverwrite(t.id, e)
                                            })(e, a)
                                        }))
                                    },
                                    "aria-disabled": !p,
                                    "aria-label": G.default.Messages.REMOVE,
                                    children: (0, a.jsx)(A.default, {
                                        className: i(V.removeIcon, {
                                            [V.disabledRemoveIcon]: _ || n
                                        })
                                    })
                                })
                            })]
                        }, f.id)
                    },
                    rowHeight: 40,
                    renderSection: function(e) {
                        let {
                            section: t
                        } = e;
                        switch (t) {
                            case H.AudienceSelectorSections.ROLES:
                                return (0, a.jsx)(z, {
                                    title: G.default.Messages.ROLES
                                }, "roles-title");
                            case H.AudienceSelectorSections.MEMBERS:
                                return (0, a.jsx)(z, {
                                    title: G.default.Messages.MEMBERS
                                }, "members-title")
                        }
                    },
                    sectionHeight: 49
                })
            }

            function W(e) {
                let {
                    guild: t,
                    channel: l,
                    permissionUpdates: n
                } = e, d = F.getExistingRolesRowWithPermissionDisabled(t, l, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n), u = (0, r.useStateFromStores)([_.default], () => F.getExistingMembersRows(_.default.getMemberIds(t.id), l, t, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n)), c = (0, g.useCanUpdateStageChannelModerators)(l.id);

                function h() {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("286470").then(s.bind(s, "286470"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            channelId: l.id
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: i(V.settingCard, V.active),
                    children: [(0, a.jsx)(P.default, {
                        label: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
                        description: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
                        icon: (0, a.jsx)(v.default, {
                            className: V.cardIcon,
                            height: 20,
                            width: 20
                        }),
                        id: "StageModeratorSettingCard"
                    }), (0, a.jsxs)("div", {
                        className: V.cardFolder,
                        children: [(0, a.jsxs)(R.default, {
                            justify: R.default.Justify.BETWEEN,
                            align: R.default.Align.CENTER,
                            className: V.folderHeader,
                            children: [(0, a.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: V.folderTitle,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
                            }), (0, a.jsx)(o.Tooltip, {
                                text: G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                                shouldShow: !c,
                                children: e => (0, a.jsx)(o.Button, {
                                    ...e,
                                    size: o.Button.Sizes.SMALL,
                                    color: o.Button.Colors.BRAND,
                                    onClick: h,
                                    disabled: !c,
                                    children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                })
                            })]
                        }), (0, a.jsx)(k, {
                            channel: l,
                            roles: d,
                            members: u,
                            disabledReason: c ? null : G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                            getRemoveTooltipHint: S.getRemoveModeratorTooltipHint
                        })]
                    })]
                })
            }

            function Y(e) {
                let {
                    guild: t,
                    channel: l,
                    isPrivateGuildChannel: n,
                    roles: d,
                    members: u
                } = e, c = (0, r.useStateFromStores)([p.default], () => p.default.can(B.Permissions.ADMINISTRATOR, t)), h = y.default.canEveryoneRole(B.Permissions.VIEW_CHANNEL, t), E = y.default.canEveryoneRole(B.Permissions.ADMINISTRATOR, t), m = {
                    title: G.default.Messages.PRIVATE_CHANNEL,
                    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
                    formLabel: G.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
                };
                return l.isCategory() ? (m.title = G.default.Messages.PRIVATE_CATEGORY, m.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, m.formLabel = G.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : l.type === U.ChannelTypes.GUILD_VOICE && (m.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, a.jsxs)("div", {
                    className: i(V.settingCard, {
                        [V.active]: n
                    }),
                    children: [(0, a.jsx)(P.default, {
                        description: m.subtitle,
                        icon: (0, a.jsx)(O.default, {
                            className: V.cardIcon,
                            height: 20,
                            width: 20
                        }),
                        id: "PrivateChannelSettingCard",
                        label: m.title,
                        onChange: function() {
                            let e = l.accessPermissions,
                                s = M.default.getCurrentUser();
                            if (F.toggleChannelEveryonePermission(l, e, n), !n && null != s) !(null == t ? void 0 : t.isOwner(s)) && !c && F.grantUserChannelAccess(l, e)
                        },
                        value: n
                    }), (0, a.jsxs)("div", {
                        className: V.cardFolder,
                        children: [E && (0, a.jsx)("div", {
                            className: V.adminWarning,
                            children: (0, a.jsx)(I.default, {
                                messageType: I.HelpMessageTypes.WARNING,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
                            })
                        }), !h && !E && !n && (0, a.jsx)("div", {
                            className: V.adminWarning,
                            children: (0, a.jsx)(I.default, {
                                messageType: I.HelpMessageTypes.WARNING,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
                            })
                        }), n && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(R.default, {
                                justify: R.default.Justify.BETWEEN,
                                align: R.default.Align.CENTER,
                                className: V.folderHeader,
                                children: [(0, a.jsx)(o.FormTitle, {
                                    tag: "h5",
                                    className: V.folderTitle,
                                    children: m.formLabel
                                }), (0, a.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    color: o.Button.Colors.BRAND,
                                    onClick: function() {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await s.el("462430").then(s.bind(s, "462430"));
                                            return t => (0, a.jsx)(e, {
                                                ...t,
                                                channelId: l.id,
                                                inSettings: !0
                                            })
                                        })
                                    },
                                    children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                })]
                            }), (0, a.jsx)(k, {
                                channel: l,
                                roles: d,
                                members: u,
                                getRemoveTooltipHint: F.getRemoveTooltipHint
                            })]
                        })]
                    })]
                })
            }

            function z(e) {
                let {
                    title: t
                } = e;
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(o.FormDivider, {
                        className: V.divider
                    }), (0, a.jsx)(o.FormTitle, {
                        className: i(V.folderTitle, V.sectionTitle),
                        tag: "h5",
                        children: t
                    })]
                })
            }
            var K = r.default.connectStores([N.default, p.default, _.default, C.default], () => {
                let e;
                let t = N.default.channel,
                    s = N.default.category,
                    a = [],
                    l = [],
                    n = {},
                    i = !1;
                if (null != t) {
                    var r;
                    e = C.default.getGuild(t.getGuildId());
                    let s = _.default.getMemberIds(null === (r = e) || void 0 === r ? void 0 : r.id);
                    null != e && (n = N.default.editedPermissionIds.reduce((e, t) => {
                        let s = N.default.getPermissionOverwrite(t);
                        return null != s && (e[t] = s), e
                    }, {}), a = F.getExistingRolesRows(e, t, t.accessPermissions, n), l = F.getExistingMembersRows(s, t, e, t.accessPermissions, n), i = F.isPrivateGuildChannel(t, n))
                }
                return {
                    canSyncChannel: null != s && p.default.can(B.Permissions.MANAGE_ROLES, s),
                    category: s,
                    channel: t,
                    filteredMembers: l,
                    filteredRoles: a,
                    guild: e,
                    isPrivateGuildChannel: i,
                    locked: N.default.locked,
                    permissionUpdates: n
                }
            })(function(e) {
                let {
                    canSyncChannel: t,
                    category: n,
                    channel: i,
                    filteredMembers: r,
                    filteredRoles: d,
                    guild: u,
                    isPrivateGuildChannel: h,
                    locked: E,
                    permissionUpdates: m
                } = e, [g, T] = l.useState(!y.default.canEveryoneRole(B.Permissions.SEND_MESSAGES, i));
                if (null == i || null == u) return null;

                function S() {
                    F.toggleChannelEveryonePermission(i, B.Permissions.SEND_MESSAGES, g), T(!g)
                }

                function N() {
                    null != n && (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("57005").then(s.bind(s, "57005"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            channel: i,
                            category: n,
                            onConfirm: async () => {
                                let {
                                    guild_id: e
                                } = n, t = {
                                    ...n.permissionOverwrites
                                };
                                null != e && null == t[e] && (t[e] = y.default.makeEveryoneOverwrite(e));
                                let s = await (0, f.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(i, t[e].deny, t[e].allow);
                                s && (0, c.saveChannel)(i.id, {
                                    permissionOverwrites: Object.values(t)
                                })
                            }
                        })
                    })
                }
                let _ = {
                    title: G.default.Messages.CHANNEL_PERMISSIONS,
                    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_SUBTITLE
                };
                return i.isCategory() && (_.title = G.default.Messages.CATEGORY_SETTINGS, _.subtitle = G.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.FormTitle, {
                        tag: "h1",
                        children: _.title
                    }), (0, a.jsx)(o.FormText, {
                        children: _.subtitle
                    }), null != n && t ? E ? (0, a.jsx)(w.default, {
                        canSync: !1,
                        icon: j.default,
                        noticeText: G.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
                            categoryName: n.name
                        })
                    }) : (0, a.jsx)(w.default, {
                        buttonText: G.default.Messages.SYNC_NOW,
                        canSync: !0,
                        icon: D.default,
                        noticeText: G.default.Messages.PERMISSIONS_UNSYNCED.format({
                            categoryName: n.name
                        }),
                        onClick: N
                    }) : null, i.isGuildStageVoice() ? (0, a.jsx)(W, {
                        guild: u,
                        channel: i,
                        permissionUpdates: m
                    }) : null, (0, a.jsx)(Y, {
                        channel: i,
                        guild: u,
                        isPrivateGuildChannel: h,
                        roles: d,
                        members: r
                    }), !1, (0, a.jsx)(b.default, {})]
                })
            })
        },
        165161: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("77078"),
                n = s("145131"),
                i = s("864977");

            function r(e) {
                let {
                    description: t,
                    icon: s,
                    id: r,
                    label: o,
                    onChange: d,
                    value: u
                } = e;
                return (0, a.jsxs)("div", {
                    className: i.cardContent,
                    children: [(0, a.jsxs)(n.default, {
                        justify: n.default.Justify.BETWEEN,
                        align: n.default.Align.CENTER,
                        children: [s, (0, a.jsx)(n.default.Child, {
                            grow: 1,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                children: o
                            })
                        }), null != d && null != u ? (0, a.jsx)(l.Switch, {
                            id: r,
                            checked: u,
                            onChange: d
                        }) : null]
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        className: i.cardDescription,
                        children: t
                    })]
                })
            }
        },
        460812: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("575482"),
                n = s.n(l),
                i = s("912557"),
                r = s("77078"),
                o = s("145131"),
                d = s("806250"),
                u = e => {
                    let {
                        className: t,
                        icon: s,
                        noticeText: l,
                        buttonText: u,
                        onClick: c,
                        canSync: h
                    } = e;
                    return (0, a.jsx)(r.Card, {
                        className: n(t, d.card),
                        children: (0, a.jsxs)(o.default, {
                            justify: o.default.Justify.BETWEEN,
                            align: o.default.Align.CENTER,
                            children: [(0, a.jsx)(s, {
                                width: 20,
                                height: 20,
                                color: i.default.unsafe_rawColors.YELLOW_300.css
                            }), (0, a.jsx)("div", {
                                className: d.label,
                                children: (0, a.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: l
                                })
                            }), h && (0, a.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.PRIMARY,
                                onClick: c,
                                children: u
                            })]
                        })
                    })
                }
        },
        51944: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                showPermissionLockoutModal: function() {
                    return r
                }
            });
            var a = s("404118"),
                l = s("701909"),
                n = s("49111"),
                i = s("782340");

            function r(e) {
                a.default.show({
                    title: i.default.Messages.SELF_DENY_PERMISSION_TITLE,
                    body: i.default.Messages.SELF_DENY_PERMISSION_BODY.format({
                        name: e
                    }),
                    cancelText: i.default.Messages.HELP_DESK,
                    onCancel() {
                        window.open(l.default.getArticleURL(n.HelpdeskArticles.PERMISSIONS_LOCKOUT))
                    }
                })
            }
        },
        995865: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return H
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("498225"),
                i = s("77078"),
                r = s("913144"),
                o = s("18054"),
                d = s("54239"),
                u = s("800751"),
                c = s("534291"),
                h = s("575351"),
                E = s("716241"),
                m = s("679653"),
                f = s("419830"),
                g = s("817653"),
                T = s("300322"),
                S = s("161778"),
                N = s("233069"),
                _ = s("161810"),
                C = s("901998"),
                p = s("492114"),
                M = s("42203"),
                x = s("957255"),
                R = s("27618"),
                I = s("697218"),
                A = s("228220"),
                O = s("659500"),
                L = s("291013"),
                v = s("995553"),
                j = s("823362"),
                D = s("173446"),
                y = s("49111"),
                F = s("782340"),
                b = s("950604");

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                E.default.trackWithMetadata(y.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                    settings_type: "channel",
                    origin_pane: t,
                    destination_pane: e,
                    location: s
                })
            }
            class w extends l.PureComponent {
                componentDidMount() {
                    P(this.props.section, null, this.props.analyticsLocation)
                }
                componentWillUnmount() {
                    r.default.wait(() => (0, o.close)())
                }
                componentDidUpdate(e) {
                    let {
                        formState: t,
                        section: s
                    } = e, {
                        formState: a,
                        section: l,
                        canManageRoles: n,
                        canManageChannels: i,
                        canManageWebhooks: r
                    } = this.props;
                    (i || n || r) && (a !== y.FormStates.CLOSED || a === t) && (n || l !== y.ChannelSettingsSections.PERMISSIONS) && (r || l !== y.ChannelSettingsSections.INTEGRATIONS) ? l !== s && P(l, s): (0, d.popLayer)()
                }
                render() {
                    let {
                        theme: e,
                        sidebarTheme: t,
                        section: s,
                        channel: l,
                        category: n,
                        canManageRoles: r,
                        canManageChannels: E,
                        canDeleteChannels: T,
                        canManageWebhooks: S
                    } = this.props;
                    return null == l ? null : (0, a.jsx)(u.default, {
                        theme: e,
                        sidebarTheme: t,
                        section: null != s ? s : y.ChannelSettingsSections.OVERVIEW,
                        onSetSection: o.setSection,
                        onClose: d.popLayer,
                        sections: function(e) {
                            let {
                                channel: t,
                                category: s,
                                canManageRoles: l,
                                canManageChannels: n,
                                canDeleteChannels: r,
                                canManageWebhooks: u
                            } = e, E = (0, f.getChannelIconComponent)(t), {
                                GUILD_CATEGORY: T
                            } = y.ChannelTypes, S = N.THREAD_CHANNEL_TYPES.has(t.type), M = t.type === T ? F.default.Messages.DELETE_CATEGORY : S ? t.isForumPost() ? F.default.Messages.DELETE_FORUM_POST : F.default.Messages.DELETE_THREAD : F.default.Messages.DELETE_CHANNEL;
                            return [{
                                section: c.SectionTypes.HEADER,
                                label: null != t ? (0, a.jsxs)(a.Fragment, {
                                    children: [null != E ? (0, a.jsx)(E, {
                                        width: 12,
                                        height: 12,
                                        className: b.channelIcon
                                    }) : null, (0, m.computeChannelName)(t, I.default, R.default), null != s ? (0, a.jsx)(i.Text, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "header-secondary",
                                        lineClamp: 1,
                                        className: b.category,
                                        children: (0, m.computeChannelName)(s, I.default, R.default)
                                    }) : null]
                                }) : F.default.Messages.CHANNEL_SETTINGS
                            }, {
                                section: y.ChannelSettingsSections.OVERVIEW,
                                label: F.default.Messages.OVERVIEW,
                                ariaLabel: F.default.Messages.OVERVIEW,
                                element: j.default,
                                notice: {
                                    element: j.ChannelSettingsOverviewNotice,
                                    stores: [p.default]
                                }
                            }, {
                                section: y.ChannelSettingsSections.PERMISSIONS,
                                label: F.default.Messages.PERMISSIONS,
                                element: g.default,
                                notice: {
                                    element: D.ChannelSettingsPermissionsNotice,
                                    stores: [C.default]
                                },
                                predicate: () => l && !S
                            }, {
                                section: y.ChannelSettingsSections.INSTANT_INVITES,
                                label: F.default.Messages.INVITES,
                                element: v.default,
                                type: c.ContentTypes.CUSTOM,
                                predicate: () => t.type !== T && n && !S
                            }, {
                                section: y.ChannelSettingsSections.INTEGRATIONS,
                                label: F.default.Messages.INTEGRATIONS_OVERVIEW,
                                ariaLabel: F.default.Messages.INTEGRATIONS_OVERVIEW,
                                element: L.default,
                                notice: {
                                    stores: [_.default],
                                    element: L.ChannelSettingsIntegrationsNotice
                                },
                                predicate: () => !!u && N.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type)
                            }, {
                                section: c.SectionTypes.DIVIDER
                            }, {
                                section: y.ChannelSettingsSections.DELETE,
                                onClick() {
                                    (0, i.openModal)(e => (0, a.jsx)(h.default, {
                                        ...e,
                                        onConfirm: () => {
                                            e.onClose(), O.ComponentDispatch.subscribeOnce(y.ComponentActions.LAYER_POP_COMPLETE, () => {
                                                (0, o.deleteChannel)(t.id)
                                            }), (0, d.popLayer)()
                                        },
                                        channel: t
                                    }))
                                },
                                label: M,
                                ariaLabel: M,
                                icon: (0, a.jsx)(A.default, {
                                    width: 16,
                                    height: 16
                                }),
                                predicate: () => r
                            }]
                        }({
                            channel: l,
                            category: n,
                            canManageRoles: r,
                            canManageChannels: E,
                            canDeleteChannels: T,
                            canManageWebhooks: S
                        })
                    })
                }
            }

            function H() {
                let {
                    channel: e,
                    analyticsLocation: t
                } = (0, n.useStateFromStoresObject)([p.default], () => p.default.getProps()), s = (0, n.useStateFromStores)([p.default], () => p.default.getFormState()), l = (0, n.useStateFromStores)([p.default], () => p.default.getSection()), i = (0, n.useStateFromStores)([S.default], () => S.default.theme), r = (0, n.useStateFromStores)([S.default], () => S.default.darkSidebar ? y.ThemeTypes.DARK : void 0), o = (0, T.useCanManageThread)(e), d = (0, T.useIsThreadModerator)(e), {
                    canManageChannels: u,
                    canManageRoles: c,
                    canManageWebhooks: h
                } = (0, n.useStateFromStoresObject)([x.default], () => ({
                    canManageChannels: x.default.can(y.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: null != e && x.default.can(y.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: null != e && x.default.can(y.Permissions.MANAGE_WEBHOOKS, e)
                })), E = (0, n.useStateFromStores)([M.default], () => M.default.getChannel(null == e ? void 0 : e.parent_id));
                return (0, a.jsx)(w, {
                    channel: e,
                    category: E,
                    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
                    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
                    canManageRoles: c,
                    canManageWebhooks: h,
                    formState: s,
                    theme: i,
                    sidebarTheme: r,
                    section: l,
                    analyticsLocation: t
                })
            }
        },
        291013: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                },
                ChannelSettingsIntegrationsNotice: function() {
                    return h
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("498225"),
                n = s("713841"),
                i = s("45299"),
                r = s("467733"),
                o = s("161810"),
                d = s("492114"),
                u = s("305961");

            function c(e) {
                let {
                    refToScroller: t
                } = e, {
                    channel: s
                } = (0, l.useStateFromStores)([d.default], () => d.default.getProps(), []), n = (0, l.useStateFromStores)([u.default], () => null != s ? u.default.getGuild(s.getGuildId()) : null, [s]), {
                    section: i,
                    sectionId: c,
                    webhooks: h,
                    editedWebhook: E,
                    isFetching: m,
                    errors: f
                } = (0, l.useStateFromStores)([o.default], () => o.default.getProps(), []);
                return null == n || null == s ? null : (0, a.jsx)(r.default, {
                    guild: n,
                    channel: s,
                    section: i,
                    sectionId: c,
                    webhooks: h,
                    editedWebhook: E,
                    isFetching: m,
                    hasChanges: o.default.hasChanges,
                    errors: f,
                    refToScroller: t
                })
            }

            function h() {
                let {
                    channel: e,
                    submitting: t
                } = (0, l.useStateFromStores)([d.default], () => d.default.getProps()), s = (0, l.useStateFromStores)([u.default], () => null != e ? u.default.getGuild(e.getGuildId()) : null, [e]);
                return (0, a.jsx)(i.default, {
                    submitting: t,
                    onReset: () => {
                        n.default.init()
                    },
                    onSave: () => {
                        null != s && null != o.default.editedWebhook && n.default.saveWebhook(s.id, o.default.editedWebhook)
                    }
                })
            }
        },
        995553: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("498225"),
                n = s("758085"),
                i = s("492114"),
                r = s("305961"),
                o = s("957255"),
                d = s("102985"),
                u = s("49111");

            function c() {
                let e = (0, l.useStateFromStores)([d.default], () => d.default.hideInstantInvites),
                    {
                        channel: t,
                        guild: s
                    } = (0, l.useStateFromStoresObject)([i.default, r.default], () => {
                        let {
                            channel: e
                        } = i.default.getProps(), t = null != e ? r.default.getGuild(e.getGuildId()) : null;
                        return {
                            channel: e,
                            guild: t
                        }
                    }, []),
                    c = (0, l.useStateFromStores)([o.default], () => null != t && o.default.can(u.Permissions.CREATE_INSTANT_INVITE, t), [t]),
                    {
                        invites: h,
                        loading: E
                    } = (0, l.useStateFromStoresObject)([i.default], () => i.default.getInvites(), []);
                return (0, a.jsx)(n.default, {
                    invites: h,
                    loading: E,
                    guild: s,
                    channel: t,
                    canCreateInvites: c,
                    hide: e
                })
            }
        },
        823362: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelSettingsOverviewNotice: function() {
                    return eT
                },
                default: function() {
                    return eN
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("925149"),
                o = s("497411"),
                d = s("498225"),
                u = s("912557"),
                c = s("819855"),
                h = s("77078"),
                E = s("18054"),
                m = s("363484"),
                f = s("901582"),
                g = s("45299"),
                T = s("734575"),
                S = s("679653"),
                N = s("850391"),
                _ = s("149022"),
                C = s("681060"),
                p = s("86678"),
                M = s("867805"),
                x = s("339792"),
                R = s("630473"),
                I = s("20105"),
                A = s("677315"),
                O = s("252862"),
                L = s("300322"),
                v = s("24337"),
                j = s("980480"),
                D = s("161778"),
                y = s("233069"),
                F = s("271938"),
                b = s("492114"),
                P = s("305961"),
                w = s("957255"),
                H = s("402904"),
                U = s("697218"),
                B = s("145131"),
                G = s("476765"),
                V = s("956089"),
                k = s("404008"),
                W = s("568734"),
                Y = s("701909"),
                z = s("686069"),
                K = s("792861"),
                Z = s("370216"),
                Q = s("49111"),
                X = s("724210"),
                J = s("958706"),
                q = s("953371"),
                $ = s("515631"),
                ee = s("648564"),
                et = s("782340"),
                es = s("739569"),
                ea = s("84811");
            let el = (0, G.uid)(),
                en = (0, G.uid)(),
                ei = (0, G.uid)(),
                er = (0, G.uid)(),
                eo = (0, G.uid)(),
                ed = (0, G.uid)(),
                eu = (0, G.uid)(),
                ec = (0, G.uid)(),
                eh = (0, G.uid)(),
                eE = (0, G.uid)(),
                em = (0, G.uid)(),
                ef = (0, y.createChannelRecord)({
                    id: "1",
                    type: Q.ChannelTypes.DM
                }),
                eg = "AUTOMATIC_RTC_REGION",
                eT = d.default.connectStores([b.default], () => {
                    let {
                        channel: e,
                        submitting: t
                    } = b.default.getProps();
                    return {
                        channel: e,
                        submitting: t,
                        onReset() {
                            null != e && (0, E.init)(e.id)
                        },
                        onSave() {
                            if (null == e) return;
                            let {
                                name: t,
                                type: s,
                                topic: a,
                                bitrate: l,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: o,
                                defaultThreadRateLimitPerUser: d,
                                threadMetadata: u,
                                defaultAutoArchiveDuration: c,
                                template: h,
                                rtcRegion: m,
                                videoQualityMode: f,
                                defaultReactionEmoji: g,
                                availableTags: T,
                                defaultSortOrder: S,
                                defaultForumLayout: N
                            } = e;
                            e.isThread() && (t = (0, v.default)(t, !0)), (0, E.saveChannel)(e.id, {
                                name: t,
                                type: s,
                                topic: a,
                                bitrate: l,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: o,
                                defaultThreadRateLimitPerUser: d,
                                autoArchiveDuration: null == u ? void 0 : u.autoArchiveDuration,
                                locked: null == u ? void 0 : u.locked,
                                invitable: null == u ? void 0 : u.invitable,
                                defaultAutoArchiveDuration: c,
                                template: h,
                                rtcRegion: m,
                                videoQualityMode: f,
                                defaultReactionEmoji: g,
                                availableTags: T,
                                defaultSortOrder: S,
                                defaultForumLayout: N
                            })
                        }
                    }
                })(g.default);
            class eS extends l.PureComponent {
                componentDidMount() {
                    null == this.props.regions && null != this.props.guild && m.default.fetchRegions(this.props.guild.id)
                }
                componentDidUpdate(e) {
                    var t, s, a, l;
                    let n = null !== (a = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== a ? a : "";
                    (null !== (l = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== l ? l : "") !== n && n !== this.state.textTopicValue && this.setState({
                        textTopicValue: n,
                        richTopicValue: (0, _.toRichValue)(n)
                    })
                }
                getError(e) {
                    let {
                        errors: t
                    } = this.props;
                    return null == t ? void 0 : t[e]
                }
                getCooldownSliderMarker(e) {
                    return (0, z.getSecondsSliderLabel)(e, !0)
                }
                getAutoArchiveDurationSliderMarker(e) {
                    return (0, z.getSecondsSliderLabel)(e * Q.Durations.MINUTE, !0)
                }
                renderChannelInfo(e, t) {
                    var s, l, n, d, c, E;
                    let m, g;
                    let {
                        canManageChannels: T,
                        canSendMessages: S,
                        isThreadModerator: _,
                        canManageThread: p,
                        guild: x,
                        isForumPost: A,
                        isOwner: L
                    } = this.props, v = y.THREAD_CHANNEL_TYPES.has(e.type), D = e.isForumLikeChannel(), F = D && (null === (s = e.availableTags) || void 0 === s ? void 0 : s.every(e => e.moderated)), b = (null === (l = U.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) === !0, P = y.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormItem, {
                            title: D ? et.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : et.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                            className: ea.marginTop20,
                            children: D ? (0, a.jsx)(C.default, {
                                innerClassName: es.forumGuidelines,
                                characterCountClassName: es.forumGuidelinesCharacterCount,
                                maxCharacterCount: X.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
                                onChange: this.handleChangeRichTopic,
                                placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
                                channel: ef,
                                textValue: this.state.textTopicValue,
                                richValue: this.state.richTopicValue,
                                type: N.ChatInputTypes.FORUM_CHANNEL_GUIDELINES,
                                onBlur: () => {
                                    this.setState({
                                        topicFocused: !1
                                    })
                                },
                                onFocus: () => {
                                    this.setState({
                                        topicFocused: !0
                                    })
                                },
                                focused: this.state.topicFocused,
                                onSubmit: this.handleSubmit,
                                disableThemedBackground: !0
                            }) : (0, a.jsx)(h.TextArea, {
                                autoFocus: this.props.subsection === Q.ChannelSettingsSubsections.TOPIC,
                                placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
                                value: M.default.translateSurrogatesToInlineEmoji(e.topic),
                                onChange: this.handleChangeTopic,
                                error: this.getError("topic"),
                                maxLength: X.MAX_CHANNEL_TOPIC_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, w = D && b ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
                            className: ea.marginTop20,
                            children: (0, a.jsx)(h.TextArea, {
                                placeholder: et.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
                                value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
                                onChange: this.handleChangeTemplate,
                                error: this.getError("template"),
                                maxLength: q.MAX_FORUM_TEMPLATE_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, H = e.isForumLikeChannel() ? (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)(h.FormItem, {
                            children: [(0, a.jsx)(h.FormTitle, {
                                id: el,
                                className: es.formTitle,
                                children: et.default.Messages.FORUM_TAGS
                            }), (0, a.jsx)(h.FormText, {
                                id: en,
                                type: h.FormText.Types.DESCRIPTION,
                                className: es.description,
                                children: et.default.Messages.FORM_HELP_FORUM_TAGS
                            }), (0, a.jsx)(R.default, {
                                channel: e
                            })]
                        }), (0, a.jsx)(h.Checkbox, {
                            disabled: !T || F,
                            value: e.hasFlag(X.ChannelFlags.REQUIRE_TAG),
                            type: h.Checkbox.Types.INVERTED,
                            onChange: (e, t) => this.handleRequireTagChanged(t),
                            children: (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                children: et.default.Messages.FORUM_REQUIRE_TAG_NOTE
                            })
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, B = e.isForumLikeChannel() ? (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: es.twoColumnSettings,
                            children: [(0, a.jsxs)(h.FormItem, {
                                className: i(es.settingsLeft, es.settingsDefaultReaction),
                                children: [(0, a.jsx)(h.FormTitle, {
                                    id: ei,
                                    className: es.formTitle,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION
                                }), (0, a.jsx)(h.FormText, {
                                    id: en,
                                    type: h.FormText.Types.DESCRIPTION,
                                    className: es.description,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
                                }), (0, a.jsxs)("div", {
                                    className: es.buttonRow,
                                    children: [(0, a.jsx)(h.Popout, {
                                        renderPopout: this.renderEmojiPicker,
                                        position: "right",
                                        animation: h.Popout.Animation.NONE,
                                        align: "center",
                                        children: e => (0, a.jsx)(h.Button, {
                                            ...e,
                                            disabled: !T,
                                            onClick: t => {
                                                var s;
                                                null === (s = e.onClick) || void 0 === s || s.call(e, t)
                                            },
                                            children: et.default.Messages.SELECT_EMOJI
                                        })
                                    }), null != e.defaultReactionEmoji ? (0, a.jsx)(h.Button, {
                                        className: es.removeButton,
                                        onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                        size: h.Button.Sizes.MIN,
                                        look: h.Button.Looks.LINK,
                                        color: h.Button.Colors.RED,
                                        children: et.default.Messages.REMOVE
                                    }) : null]
                                })]
                            }), (0, a.jsx)(I.default, {
                                reactionEmoji: e.defaultReactionEmoji
                            })]
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, G = e.isForumChannel() ? (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: es.twoColumnSettings,
                            children: [(0, a.jsxs)(h.FormItem, {
                                className: i(es.settingsLeft, es.settingsDefaultView),
                                children: [(0, a.jsx)(h.FormSection, {
                                    title: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
                                    children: (0, a.jsx)(h.SingleSelect, {
                                        options: [{
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                                            value: r.ForumLayout.LIST
                                        }, {
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                                            value: r.ForumLayout.GRID
                                        }],
                                        value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
                                        onChange: this.handleChangeDefaultForumLayout
                                    })
                                }), (0, a.jsx)(h.FormText, {
                                    className: ea.marginTop8,
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
                                })]
                            }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, a.jsx)(K.default, {
                                className: es.defaultImageView
                            }) : (0, a.jsx)(Z.default, {
                                className: es.defaultImageView
                            })]
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, k = e.isForumLikeChannel() ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormItem, {
                            children: (0, a.jsx)(h.FormSection, {
                                title: et.default.Messages.FORUM_DEFAULT_SORT_ORDER,
                                children: (0, a.jsx)(h.SingleSelect, {
                                    options: [{
                                        label: et.default.Messages.FORUM_SORT_ACTIVITY,
                                        value: o.ThreadSortOrder.LATEST_ACTIVITY
                                    }, {
                                        label: et.default.Messages.FORUM_SORT_CREATION,
                                        value: o.ThreadSortOrder.CREATION_DATE
                                    }],
                                    value: e.getDefaultSortOrder(),
                                    onChange: this.handleChangeDefaultSortOrder
                                })
                            })
                        }), (0, a.jsx)(h.FormText, {
                            className: ea.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: et.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, W = v ? _ : T, z = y.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)(h.FormItem, {
                            children: [(0, a.jsx)(h.FormTitle, {
                                id: er,
                                className: ea.marginBottom8,
                                children: et.default.Messages.FORM_LABEL_SLOWMODE
                            }), D ? (0, a.jsx)(h.FormTitle, {
                                className: ea.marginTop20,
                                children: et.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
                            }) : null, (0, a.jsx)(h.Slider, {
                                className: ea.marginTop20,
                                initialValue: e.rateLimitPerUser,
                                markers: Q.SLOWMODE_VALUES,
                                stickToMarkers: !0,
                                onValueChange: this.handleChangeSlowmode,
                                onMarkerRender: this.getCooldownSliderMarker,
                                disabled: !W,
                                equidistant: !0,
                                "aria-labelledby": er,
                                "aria-describedby": eo
                            }), (0, a.jsx)(h.FormText, {
                                id: eo,
                                type: h.FormText.Types.DESCRIPTION,
                                children: D ? et.default.Messages.FORM_HELP_SLOWMODE_FORUM : v ? et.default.Messages.FORM_HELP_SLOWMODE_THREAD : et.default.Messages.FORM_HELP_SLOWMODE
                            }), D ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(h.FormTitle, {
                                    className: ea.marginTop20,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
                                }), (0, a.jsx)(h.Slider, {
                                    className: ea.marginTop20,
                                    initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
                                    markers: Q.SLOWMODE_VALUES,
                                    stickToMarkers: !0,
                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                    onMarkerRender: this.getCooldownSliderMarker,
                                    disabled: !W,
                                    equidistant: !0,
                                    "aria-labelledby": er,
                                    "aria-describedby": eo
                                }), (0, a.jsx)(h.FormText, {
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
                                })]
                            }) : null]
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        })]
                    }) : null, J = v && null != e.threadMetadata ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormItem, {
                            children: (0, a.jsx)(f.default, {
                                page: Q.AnalyticsPages.CHANNEL_SETTINGS,
                                children: (0, a.jsx)(j.default, {
                                    autoArchiveDuration: null !== (E = e.threadMetadata.autoArchiveDuration) && void 0 !== E ? E : ee.DEFAULT_AUTO_ARCHIVE_DURATION,
                                    guild: x,
                                    channel: e,
                                    onChange: this.handleAutoArchiveDurationChanged,
                                    isDisabled: !p
                                })
                            })
                        }), (0, a.jsx)(h.FormText, {
                            className: ea.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: A ? et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, $ = e.type === Q.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, a.jsx)("div", {
                        children: (0, a.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_THREAD_INVITABLE,
                            onChange: this.handleInvitableChanged,
                            value: e.threadMetadata.invitable,
                            hideBorder: !0,
                            disabled: !p,
                            children: et.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
                        })
                    }) : null, ed = y.NSFW_CHANNEL_TYPES.has(e.type) ? (0, a.jsx)("div", {
                        children: (0, a.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NSFW,
                            onChange: this.handleNSFWChange,
                            value: e.isNSFW(),
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NSFW_CHANNEL
                        })
                    }) : null, eu = y.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != x && x.hasFeature(Q.GuildFeatures.NEWS) && e.id !== (null == x ? void 0 : x.rulesChannelId) && e.id !== (null == x ? void 0 : x.publicUpdatesChannelId) ? (0, a.jsx)("div", {
                        children: (0, a.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NEWS.format({
                                documentationLink: Y.default.getArticleURL(Q.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            }),
                            onChange: this.handleNewsChange,
                            value: e.type === Q.ChannelTypes.GUILD_ANNOUNCEMENT,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NEWS_CHANNEL
                        })
                    }) : null, ec = y.THREADED_CHANNEL_TYPES.has(e.type) ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        }), (0, a.jsx)(f.default, {
                            page: Q.AnalyticsPages.CHANNEL_SETTINGS,
                            children: (0, a.jsx)(j.default, {
                                autoArchiveDuration: (0, O.getAutoArchiveDuration)(e, null),
                                guild: x,
                                channel: e,
                                onChange: this.handleChangeDefaultAutoArchiveDuration,
                                isDisabled: !T
                            })
                        }), (0, a.jsx)(h.FormText, {
                            className: ea.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: e.isForumLikeChannel() ? et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, eh = this.props.showChannelSummariesSettings ? (0, a.jsx)(h.FormSwitch, {
                        note: et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
                            helpdeskArticle: Y.default.getArticleURL(Q.HelpdeskArticles.CONVERSATION_SUMMARIES)
                        }),
                        onChange: this.handleChannelSummariesToggled,
                        value: !e.hasFlag(X.ChannelFlags.SUMMARIES_DISABLED) && (null == x ? void 0 : x.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        hideBorder: !0,
                        disabled: !T || !(null == x ? void 0 : x.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        children: (0, a.jsxs)("div", {
                            className: es.badgedItem,
                            children: [et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, a.jsx)(V.TextBadge, {
                                text: et.default.Messages.BETA,
                                color: u.default.unsafe_rawColors.BRAND_500.css,
                                className: es.betaTag
                            })]
                        })
                    }) : null, eE = e.isMediaChannel() ? (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        }), (0, a.jsx)(h.FormSwitch, {
                            onChange: this.handleShowMediaOptionsToggled,
                            value: !e.hasFlag(X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                            note: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
                        })]
                    }) : null;
                    return e.type === Q.ChannelTypes.GUILD_CATEGORY ? (g = et.default.Messages.CATEGORY_NAME, m = "category-name") : e.isForumPost() ? (g = et.default.Messages.FORUM_POST_TITLE, m = "post-title") : v ? (g = et.default.Messages.THREAD_NAME, m = "thread-name") : (g = et.default.Messages.FORM_LABEL_CHANNEL_NAME, m = "channel-name"), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(h.FormItem, {
                            title: g,
                            children: (0, a.jsx)(h.TextInput, {
                                value: t,
                                onChange: this.handleChangeName,
                                onBlur: this.handleBlurName,
                                error: this.getError("name"),
                                name: m,
                                autoFocus: !0,
                                disabled: L ? !S : !T,
                                maxLength: Q.MAX_CHANNEL_NAME_LENGTH
                            })
                        }), (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        }), P, w, H, B, z, J, G, k, $, ed, eu, eh, ec, eE]
                    })
                }
                renderHomeFlags(e) {
                    let {
                        canManageChannels: t
                    } = this.props;
                    if (!(0, A.canSeeGuildHome)(e.guild_id)) return null;
                    let s = Q.ChannelTypesSets.GUILD_PARENTABLE.has(e.type) ? (0, a.jsx)("div", {
                            children: (0, a.jsx)(h.FormSwitch, {
                                note: et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
                                onChange: this.handleActiveChannelsRemovedChange,
                                value: !e.hasFlag(X.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, a.jsxs)("div", {
                                    className: es.badgedItem,
                                    children: [et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL, (0, a.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: es.betaTag
                                    })]
                                })
                            })
                        }) : null,
                        l = $.GUILD_FEED_CHANNEL_TYPES.has(e.type) ? (0, a.jsx)("div", {
                            children: (0, a.jsx)(h.FormSwitch, {
                                note: et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format({
                                    warningHook: (e, t) => (0, a.jsx)("span", {
                                        className: es.warningText,
                                        children: e
                                    }, t)
                                }),
                                onChange: this.handleGuildFeedRemovedChange,
                                value: e.hasFlag(X.ChannelFlags.GUILD_FEED_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, a.jsxs)("div", {
                                    className: es.badgedItem,
                                    children: [et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL, (0, a.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: es.betaTag
                                    })]
                                })
                            })
                        }) : null;
                    return null == s && null == l ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        }), (0, a.jsxs)(h.FormItem, {
                            title: et.default.Messages.GUILD_HOME,
                            children: [(0, a.jsx)(h.Text, {
                                className: ea.marginBottom20,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: et.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format({
                                    helpCenterLink: Y.default.getArticleURL(Q.HelpdeskArticles.GUILD_HOME)
                                })
                            }), s, l]
                        })]
                    })
                }
                renderBitrate(e) {
                    return "".concat(Math.round(e / 1e3), "kbps")
                }
                renderVoiceBitrate(e, t) {
                    let {
                        canManageChannels: s
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let l = (0, k.getBitrateLimit)(t, e),
                        n = this.getError("bitrate");
                    return (0, a.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: ea.marginBottom40,
                        children: [(0, a.jsx)(h.FormTitle, {
                            id: ed,
                            children: et.default.Messages.FORM_LABEL_BITRATE
                        }), "" !== n && (0, a.jsx)(h.FormText, {
                            id: eu,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: ea.marginBottom8,
                            children: n
                        }), (0, a.jsx)(h.Slider, {
                            initialValue: Math.min(e.bitrate, l),
                            onValueChange: this.handleChangeBitrate,
                            onValueRender: this.renderBitrate,
                            onMarkerRender: this.renderBitrate,
                            markers: [Q.BITRATE_MIN, Q.BITRATE_DEFAULT, l],
                            minValue: Q.BITRATE_MIN,
                            maxValue: l,
                            keyboardStep: Q.BITRATE_STEP,
                            disabled: !s,
                            "aria-labelledby": ed,
                            "aria-describedby": null != n && "" !== n ? eu : ec
                        }), l > Q.BITRATE_DEFAULT ? (0, a.jsx)(h.FormText, {
                            id: ec,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_BITRATE.format({
                                bitrate: Q.BITRATE_DEFAULT / 1e3
                            })
                        }) : null]
                    })
                }
                showVoiceSettings() {
                    let {
                        channel: e
                    } = this.props;
                    return null != e && null != e.guild_id && y.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || L.VoiceInThreadsExperiment.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "9b50bd_1"
                    }).enabled)
                }
                renderVideoQualityMode(e) {
                    var t;
                    let {
                        canManageChannels: s
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let l = [{
                        value: Q.VideoQualityMode.AUTO,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_AUTO
                    }, {
                        value: Q.VideoQualityMode.FULL,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_FULL
                    }];
                    return (0, a.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: ea.marginBottom40,
                        children: [(0, a.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_VIDEO_QUALITY,
                            children: (0, a.jsx)(h.RadioGroup, {
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return this.handleVideoQualityModeChange(t)
                                },
                                options: l,
                                value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Q.VideoQualityMode.AUTO,
                                disabled: !s
                            })
                        }), (0, a.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
                        })]
                    })
                }
                onRenderUserLimit(e) {
                    return 0 === (e = Math.round(e)) ? et.default.Messages.NO_USER_LIMIT : et.default.Messages.NUM_USERS.format({
                        num: e
                    })
                }
                renderUserLimit(e) {
                    let {
                        canManageChannels: t
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let s = this.getError("user_limit"),
                        l = e.isGuildStageVoice() ? Q.MAX_STAGE_VOICE_USER_LIMIT : Q.MAX_VOICE_USER_LIMIT;
                    return (0, a.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: ea.marginBottom40,
                        children: [(0, a.jsx)(h.FormTitle, {
                            id: eh,
                            children: et.default.Messages.FORM_LABEL_USER_LIMIT
                        }), "" !== s && (0, a.jsx)(h.FormText, {
                            id: eE,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: ea.marginBottom8,
                            children: s
                        }), (0, a.jsx)(h.Slider, {
                            initialValue: Math.min(e.userLimit, l),
                            onValueChange: this.handleUserLimitChange,
                            onValueRender: this.onRenderUserLimit,
                            onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
                            markers: [0, l],
                            minValue: 0,
                            maxValue: l,
                            disabled: !t,
                            "aria-labelledby": eh,
                            "aria-describedby": null != s && "" !== s ? eE : em
                        }), (0, a.jsx)(h.FormText, {
                            id: em,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: (e.isGuildStageVoice() ? et.default.Messages.FORM_HELP_USER_LIMIT_STAGE : et.default.Messages.FORM_HELP_USER_LIMIT).format()
                        })]
                    })
                }
                renderRegionOverride(e) {
                    var t;
                    let {
                        regions: s,
                        canManageChannels: l,
                        guild: n
                    } = this.props;
                    if (null == n || !this.showVoiceSettings()) return null;
                    let i = [];
                    if (null != s) {
                        let e = s.filter(e => !e.deprecated && !e.hidden);
                        (i = e.map(e => ({
                            label: e.name,
                            value: e.id
                        }))).unshift({
                            label: et.default.Messages.AUTOMATIC_REGION,
                            value: eg
                        })
                    }
                    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eg;
                    return (0, a.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        children: [(0, a.jsx)(h.FormTitle, {
                            children: et.default.Messages.FORM_LABEL_REGION_OVERRIDE
                        }), (0, a.jsx)(h.SingleSelect, {
                            options: i,
                            value: r,
                            onChange: this.handleRegionChange,
                            isDisabled: !l
                        }), (0, a.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_REGION_OVERRIDE
                        })]
                    })
                }
                renderJuiceImage(e) {
                    let t;
                    let {
                        theme: l
                    } = this.props;
                    return t = e.type === Q.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(l) ? s("23141") : s("182418") : (0, c.isThemeDark)(l) ? s("34705") : s("164370"), (0, a.jsx)(B.default, {
                        justify: B.default.Justify.CENTER,
                        className: ea.marginTop60,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            width: 280,
                            height: 165,
                            src: t
                        })
                    })
                }
                render() {
                    let {
                        channel: e,
                        channelName: t,
                        guild: s
                    } = this.props;
                    return null == e || null == t || null == s ? null : (0, a.jsxs)(h.FormSection, {
                        className: "channel-settings-overview",
                        tag: h.FormTitleTags.H1,
                        title: et.default.Messages.OVERVIEW,
                        children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, a.jsx)(h.FormDivider, {
                            className: i(ea.marginTop40, ea.marginBottom40)
                        }) : null, this.renderVoiceBitrate(e, s), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderHomeFlags(e), this.renderJuiceImage(e)]
                    })
                }
                handleSubmit() {
                    return new Promise(e => {
                        e({
                            shouldClear: !1,
                            shouldRefocus: !0
                        })
                    })
                }
                constructor(e) {
                    var t, l;
                    super(e), this.renderEmojiPicker = e => {
                        let {
                            closePopout: t
                        } = e, {
                            channel: s
                        } = this.props;
                        return (0, a.jsx)(p.default, {
                            guildId: null == s ? void 0 : s.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, s) => {
                                this.handleChangeDefaultReactionEmoji(e), s && t()
                            },
                            pickerIntention: J.EmojiIntention.COMMUNITY_CONTENT,
                            channel: s
                        })
                    }, this.handleRequireTagChanged = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.REQUIRE_TAG, e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleChangeName = e => {
                        let {
                            channel: t
                        } = this.props;
                        null != t && (t.isThread() ? e = (0, v.default)(e, !1) : (0, y.isGuildTextChannelType)(t.type) && (e = (0, k.sanitizeGuildTextChannelName)(e)), (0, E.updateChannel)({
                            name: e
                        }))
                    }, this.handleBlurName = () => {
                        let {
                            channel: e,
                            channelName: t
                        } = this.props;
                        if ((null == e ? void 0 : e.isThread()) && null != t) {
                            let e = (0, v.default)(t, !0);
                            e !== t && (0, E.updateChannel)({
                                name: e
                            })
                        }
                    }, this.handleChangeTopic = e => {
                        (0, E.updateChannel)({
                            topic: M.default.translateInlineEmojiToSurrogates(e)
                        })
                    }, this.handleChangeRichTopic = (e, t, s) => {
                        this.setState({
                            textTopicValue: t,
                            richTopicValue: s
                        }), this.handleChangeTopic(t)
                    }, this.handleChangeTemplate = e => {
                        (0, E.updateChannel)({
                            template: M.default.translateInlineEmojiToSurrogates(e)
                        })
                    }, this.handleChangeDefaultReactionEmoji = e => {
                        let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
                            emojiId: e.id,
                            emojiName: void 0
                        } : {
                            emojiId: void 0,
                            emojiName: e.optionallyDiverseSequence
                        };
                        (0, E.updateChannel)({
                            defaultReactionEmoji: t
                        })
                    }, this.handleChangeDefaultForumLayout = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        (0, E.updateChannel)({
                            defaultForumLayout: e
                        }), this.props.handleSetDefaultLayout(e)
                    }, this.handleChangeDefaultSortOrder = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        (0, E.updateChannel)({
                            defaultSortOrder: e
                        })
                    }, this.handleChangeBitrate = e => {
                        (0, E.updateChannel)({
                            bitrate: 1e3 * Math.round(e / 1e3)
                        })
                    }, this.handleUserLimitChange = e => {
                        (0, E.updateChannel)({
                            userLimit: Math.round(e)
                        })
                    }, this.handleNSFWChange = e => {
                        (0, E.updateChannel)({
                            nsfw: e
                        })
                    }, this.handleGuildFeedRemovedChange = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        if (!e) {
                            let e = (0, W.setFlag)(t.flags, X.ChannelFlags.GUILD_FEED_REMOVED, !1);
                            (0, E.updateChannel)({
                                flags: e
                            });
                            return
                        }(0, h.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("360476").then(s.bind(s, "360476"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                channelId: t.id,
                                onSubmit: () => {
                                    let e = (0, W.setFlag)(t.flags, X.ChannelFlags.GUILD_FEED_REMOVED, !0);
                                    (0, E.updateChannel)({
                                        flags: e
                                    })
                                }
                            })
                        })
                    }, this.handleActiveChannelsRemovedChange = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleNewsChange = e => {
                        (0, E.updateChannel)({
                            type: e ? Q.ChannelTypes.GUILD_ANNOUNCEMENT : Q.ChannelTypes.GUILD_TEXT
                        })
                    }, this.handleChangeSlowmode = e => {
                        (0, E.updateChannel)({
                            rateLimitPerUser: e
                        })
                    }, this.handleChangeThreadMessageSlowmode = e => {
                        (0, E.updateChannel)({
                            defaultThreadRateLimitPerUser: e
                        })
                    }, this.handleChangeDefaultAutoArchiveDuration = e => {
                        (0, E.updateChannel)({
                            defaultAutoArchiveDuration: e
                        })
                    }, this.handleRegionChange = e => {
                        (0, E.updateChannel)({
                            rtcRegion: e === eg ? null : e
                        })
                    }, this.handleVideoQualityModeChange = e => {
                        (0, E.updateChannel)({
                            videoQualityMode: e
                        })
                    }, this.handleAutoArchiveDurationChanged = e => {
                        (0, E.updateChannel)({
                            autoArchiveDuration: e
                        })
                    }, this.handleInvitableChanged = e => {
                        (0, E.updateChannel)({
                            invitable: e
                        })
                    }, this.handleChannelSummariesToggled = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.SUMMARIES_DISABLED, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleShowMediaOptionsToggled = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    };
                    let n = null !== (l = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== l ? l : "";
                    this.state = {
                        textTopicValue: n,
                        richTopicValue: (0, _.toRichValue)(n),
                        topicFocused: !1
                    }
                }
            }

            function eN() {
                var e;
                let {
                    errors: t,
                    channel: s,
                    submitting: n,
                    subsection: i
                } = (0, d.useStateFromStoresObject)([b.default], () => b.default.getProps()), r = (0, d.useStateFromStores)([H.default], () => H.default.getRegions(null !== (e = null == s ? void 0 : s.getGuildId()) && void 0 !== e ? e : null)), o = (0, d.useStateFromStores)([D.default], () => D.default.theme), u = (0, d.useStateFromStores)([P.default], () => P.default.getGuild(null == s ? void 0 : s.getGuildId())), c = (0, L.useCanManageThread)(s), h = (0, L.useIsThreadModerator)(s), {
                    canManageChannels: E,
                    canSendMessages: m
                } = (0, d.useStateFromStoresObject)([w.default], () => ({
                    canManageChannels: w.default.can(Q.Permissions.MANAGE_CHANNELS, s),
                    canSendMessages: w.default.can(Q.Permissions.SEND_MESSAGES, s)
                })), f = (0, S.default)(s), g = F.default.getId(), N = (0, x.useForumChannelStoreApi)(), _ = null == s ? void 0 : s.id, C = (0, T.useChannelSummariesExperiment)(s, !1, !0), p = l.useCallback(e => {
                    null != _ && N.getState().setLayoutType(_, e)
                }, [_, N]);
                return (0, a.jsx)(eS, {
                    errors: t,
                    channel: s,
                    channelName: f,
                    submitting: n,
                    regions: r,
                    theme: o,
                    guild: u,
                    canManageChannels: (null == s ? void 0 : s.isThread()) ? c : E,
                    canSendMessages: m,
                    isThreadModerator: h,
                    canManageThread: c,
                    subsection: i,
                    isForumPost: null != s && s.isForumPost(),
                    isOwner: null == s ? void 0 : s.isOwner(g),
                    handleSetDefaultLayout: p,
                    showChannelSummariesSettings: C
                })
            }
        },
        173446: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelSettingsPermissionsNotice: function() {
                    return G
                },
                default: function() {
                    return K
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("427964"),
                i = s.n(n),
                r = s("754013"),
                o = s("498225"),
                d = s("819855"),
                u = s("77078"),
                c = s("404118"),
                h = s("450911"),
                E = s("318738"),
                m = s("881888"),
                f = s("900676"),
                g = s("45299"),
                T = s("798609"),
                S = s("841098"),
                N = s("206230"),
                _ = s("923510"),
                C = s("766274"),
                p = s("901998"),
                M = s("492114"),
                x = s("26989"),
                R = s("305961"),
                I = s("957255"),
                A = s("697218"),
                O = s("669021"),
                L = s("730988"),
                v = s("449008"),
                j = s("651879"),
                D = s("701909"),
                y = s("387111"),
                F = s("465305"),
                b = s("991170"),
                P = s("158998"),
                w = s("51944"),
                H = s("49111"),
                U = s("782340"),
                B = s("331533");
            let G = o.default.connectStores([p.default, M.default], () => {
                let e = M.default.getChannel(),
                    t = p.default.formState;
                return {
                    submitting: t === H.FormStates.SUBMITTING,
                    onReset() {
                        (0, E.init)()
                    },
                    onSave() {
                        if (null == e) return;
                        let t = p.default.editedPermissionIds.reduce((e, t) => {
                            let s = p.default.getPermissionOverwrite(t);
                            return null != s && e.push(s), e
                        }, []);
                        (0, E.savePermissionUpdates)(e.id, t)
                    }
                }
            })(g.default);

            function V(e) {
                let {
                    overwrite: t
                } = e, s = (0, o.useStateFromStores)([p.default], () => p.default.channel), l = (0, o.useStateFromStores)([R.default], () => null != s ? R.default.getGuild(s.getGuildId()) : null);
                if (null == s || null == l || null == t) return null;
                let {
                    guild_id: n,
                    id: i
                } = s, {
                    id: d
                } = t, m = () => {
                    var e;
                    let t = R.default.getGuild(n);
                    if (null == t) return "";
                    let s = t.getRole(d),
                        a = A.default.getUser(d),
                        l = null !== (e = null == a ? void 0 : a.username) && void 0 !== e ? e : "";
                    return null != s ? s.name : l
                }, g = (e, a) => {
                    if ("boolean" == typeof a) throw Error("Unexpected boolean action");
                    let {
                        allow: l,
                        deny: n
                    } = t;
                    switch (n = r.default.remove(n, e), l = r.default.remove(l, e), a) {
                        case "ALLOW":
                            l = r.default.add(l, e);
                            break;
                        case "DENY":
                            n = r.default.add(n, e)
                    }
                    if (I.default.can(e, s, {
                            [d]: {
                                ...t,
                                allow: l,
                                deny: n
                            }
                        }))(0, E.updatePermission)(s, d, l, n);
                    else {
                        let e;
                        if (t.type === T.PermissionOverwriteType.MEMBER) {
                            let s = A.default.getUser(t.id);
                            null != s && (e = P.default.getName(s))
                        } else if (t.type === T.PermissionOverwriteType.ROLE) {
                            let a = R.default.getGuild(s.getGuildId());
                            if (null != a) {
                                let s = a.getRole(t.id);
                                null != s && (e = s.name)
                            }
                        }
                        w.showPermissionLockoutModal(e)
                    }
                }, S = () => {
                    let e = m();
                    c.default.show({
                        title: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                        body: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                            name: e
                        }),
                        cancelText: U.default.Messages.CANCEL,
                        onConfirm: () => h.default.clearPermissionOverwrite(i, d)
                    })
                }, N = e => {
                    let t = I.default.can(H.Permissions.ADMINISTRATOR, l) || I.default.can(H.Permissions.MANAGE_ROLES, s, void 0, void 0, !0);
                    return s.isGuildStageVoice() && _.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e) ? U.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.default.equals(e, H.Permissions.MANAGE_ROLES) || t) && (null == e || I.default.can(e, l) || t)) && U.default.Messages.HELP_MISSING_PERMISSION
                }, C = d === n, M = s.isForumLikeChannel() && r.default.has(t.deny, H.Permissions.SEND_MESSAGES), x = r.default.has(t.deny, H.Permissions.SEND_MESSAGES), O = r.default.has(t.deny, H.Permissions.READ_MESSAGE_HISTORY), v = F.default.generateChannelPermissionSpec(n, s, C, {
                    createPostsDisabled: M,
                    sendMessagesDisabled: x,
                    readMessageHistoryDisabled: O
                });
                return (0, a.jsxs)(L.default.Content, {
                    className: B.layoutStyle,
                    children: [v.map((e, s) => (0, a.jsx)(f.default, {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: g,
                        permissionRender: N,
                        className: B.permissionsForm
                    }, s)), n === d ? null : (0, a.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.RED,
                        onClick: S,
                        children: U.default.Messages.REMOVE_ROLE_OR_USER.format({
                            name: m()
                        })
                    })]
                })
            }

            function k(e) {
                let {
                    guildId: t,
                    channelId: s,
                    user: l
                } = e, n = l.getAvatarURL(t, 32), i = y.default.getNickname(t, s, l), r = P.default.useUserTag(l), o = null, d = null;
                return o = null != i ? i : l.hasAvatarForGuild(t) ? l.username : r, (null != i || l.hasAvatarForGuild(t)) && (d = (0, a.jsxs)("div", {
                    className: B.userRowSubText,
                    children: [l.hasAvatarForGuild(t) ? (0, a.jsx)(u.Avatar, {
                        className: B.userRowSubAvatar,
                        size: u.AvatarSizes.SIZE_16,
                        src: l.getAvatarURL(void 0, 16),
                        "aria-label": l.username
                    }) : null, (0, a.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r
                    })]
                })), (0, a.jsxs)("div", {
                    className: B.inline,
                    children: [(0, a.jsx)(u.Avatar, {
                        size: u.AvatarSizes.SIZE_32,
                        src: n,
                        "aria-label": l.username,
                        className: B.userRowAvatar
                    }), (0, a.jsxs)("div", {
                        className: B.userRowText,
                        children: [(0, a.jsx)(u.Text, {
                            className: B.userRowText,
                            variant: "text-md/normal",
                            children: o
                        }), d]
                    })]
                })
            }

            function W(e) {
                return "object" == typeof e && null != e && "colorString" in e && "name" in e
            }

            function Y(e) {
                let {
                    guild: t,
                    channel: s,
                    permissionOverwrites: l,
                    onClose: n,
                    onSelect: r,
                    position: d
                } = e, u = (0, o.useStateFromStores)([x.default], () => x.default.getMemberIds(t.id));
                return (0, a.jsx)(O.default, {
                    label: U.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
                    placeholder: U.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
                    "aria-label": U.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
                    sections: [U.default.Messages.ROLES, U.default.Messages.MEMBERS],
                    onRenderResult: e => {
                        if (W(e)) {
                            let t;
                            return null != e.colorString && (t = {
                                color: e.colorString
                            }), (0, a.jsx)("span", {
                                style: t,
                                children: e.name
                            })
                        }
                        if (e instanceof C.default) return (0, a.jsx)(k, {
                            guildId: t.id,
                            channelId: s.id,
                            user: e
                        })
                    },
                    onFilterResults: (e, s) => 0 === s ? i(t.roles).filter(t => null == l[t.id] && e(t.name)).sortBy(e => -e.position).value() : i(u).map(A.default.getUser).filter(v.isNotNullish).filter(e => !e.isClyde()).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
                    onQueryChange: e => {
                        j.default.requestMembers(t.id, e, 20)
                    },
                    onSelect: e => {
                        null != e && (W(e) ? r(e.id, T.PermissionOverwriteType.ROLE) : e instanceof C.default && r(e.id, T.PermissionOverwriteType.MEMBER))
                    },
                    onClose: n,
                    position: d
                })
            }

            function z() {
                let {
                    channel: e,
                    permissionOverwrites: t,
                    selectedOverwriteId: n
                } = (0, o.useStateFromStoresObject)([p.default], () => p.default), r = (0, o.useStateFromStores)([R.default], () => null != e ? R.default.getGuild(e.getGuildId()) : null), c = (0, S.default)(), f = (0, o.useStateFromStores)([N.default], () => N.default.roleStyle);
                if (null == r || null == e || null == t) return null;
                let g = s => {
                        let {
                            position: l,
                            closePopout: n
                        } = s;
                        return (0, a.jsx)(Y, {
                            guild: r,
                            channel: e,
                            permissionOverwrites: t,
                            position: null != l ? l : "bottom",
                            onSelect: _,
                            onClose: n
                        })
                    },
                    _ = (t, s) => {
                        h.default.updatePermissionOverwrite(e.id, {
                            id: t,
                            type: s,
                            allow: b.default.NONE,
                            deny: b.default.NONE
                        }).then(() => (0, E.selectPermission)(t))
                    };
                null != t && null == t[r.id] && (t[r.id] = b.default.makeEveryoneOverwrite(r.id));
                let C = i(t).filter(e => e.type === T.PermissionOverwriteType.ROLE).map(e => r.getRole(e.id)).filter(v.isNotNullish).sortBy(e => -e.position).map(e => (0, a.jsx)(m.default, {
                        theme: c,
                        roleStyle: f,
                        id: e.id,
                        role: e,
                        guild: r,
                        color: e.colorString,
                        "aria-label": e.name,
                        children: e.name
                    }, "".concat(n, "-").concat(e.id))).value(),
                    M = i(t).filter(e => e.type === T.PermissionOverwriteType.MEMBER).map(e => A.default.getUser(e.id)).filter(v.isNotNullish).sortBy(e => e.username.toLowerCase()).map(e => {
                        let t = e.getAvatarURL(r.id, 24);
                        return (0, a.jsx)(m.default, {
                            id: e.id,
                            guild: r,
                            theme: c,
                            roleStyle: f,
                            "aria-label": P.default.getUserTag(e, {
                                decoration: "never"
                            }),
                            children: (0, a.jsxs)("div", {
                                className: B.inline,
                                children: [(0, a.jsx)(u.Avatar, {
                                    size: u.AvatarSizes.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: B.xsmallAvatar
                                }), (0, a.jsx)("span", {
                                    className: B.username,
                                    children: P.default.getUserTag(e)
                                })]
                            })
                        }, "".concat(n, "-").concat(e.id))
                    }).value();
                return (0, a.jsx)(L.default.Sidebar, {
                    className: B.layoutStyle,
                    scrollable: !0,
                    children: (0, a.jsxs)(u.TabBar, {
                        onItemSelect: E.selectPermission,
                        selectedItem: n,
                        orientation: "vertical",
                        children: [(() => {
                            let e = (0, d.isThemeDark)(c) ? s("706832") : s("623264");
                            return (0, a.jsx)(u.Popout, {
                                renderPopout: g,
                                position: "bottom",
                                autoInvert: !1,
                                children: t => (0, a.jsx)(u.TabBar.Header, {
                                    ...t,
                                    children: (0, a.jsxs)("div", {
                                        className: B.sidebarHeaderDefault,
                                        children: [(0, a.jsxs)("span", {
                                            children: [U.default.Messages.ROLES, "/", U.default.Messages.MEMBERS]
                                        }), (0, a.jsx)("img", {
                                            alt: "",
                                            className: B.sidebarHeader,
                                            src: e
                                        })]
                                    })
                                })
                            })
                        })(), C, M, (0, a.jsxs)(l.Fragment, {
                            children: [(0, a.jsx)(u.TabBar.Separator, {
                                style: {
                                    marginTop: 20,
                                    marginBottom: 14
                                }
                            }), (0, a.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                children: (0, a.jsx)(u.Anchor, {
                                    href: D.default.getArticleURL(H.HelpdeskArticles.PERMISSIONS_TUTORIAL),
                                    target: "_blank",
                                    children: U.default.Messages.PERMISSION_HELPDESK
                                })
                            })]
                        })]
                    })
                })
            }

            function K() {
                let {
                    channel: e,
                    permissionOverwrites: t,
                    selectedOverwriteId: s
                } = (0, o.useStateFromStoresObject)([p.default], () => p.default), l = (0, o.useStateFromStores)([R.default], () => null != e ? R.default.getGuild(e.getGuildId()) : null);
                if (null == l || null == e || null == t || null == s) return null;
                let n = t[s];
                return (0, a.jsxs)(L.default, {
                    className: B.container,
                    children: [(0, a.jsx)(z, {}), (0, a.jsx)(V, {
                        overwrite: n
                    })]
                })
            }
        },
        792861: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("75196");

            function n(e) {
                let {
                    color: t = "currentColor",
                    foreground: s,
                    backgroundColor: n = "none",
                    ...i
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(i),
                    width: "272",
                    height: "143",
                    viewBox: "0 0 272 143",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("rect", {
                        className: s,
                        width: "130",
                        height: "143",
                        rx: "12",
                        fill: n
                    }), (0, a.jsx)("path", {
                        className: s,
                        opacity: "0.5",
                        d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
                        fill: t
                    }), (0, a.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
                        fill: "#C4C4C4"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "99",
                        width: "106",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "123",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("circle", {
                        className: s,
                        opacity: "0.5",
                        cx: "54",
                        cy: "127",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "64",
                        y: "123",
                        width: "54",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        x: "0.5",
                        y: "0.5",
                        width: "129",
                        height: "142",
                        rx: "11.5",
                        stroke: t,
                        strokeOpacity: "0.3"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        x: "142",
                        width: "130",
                        height: "143",
                        rx: "12",
                        fill: n
                    }), (0, a.jsx)("path", {
                        className: s,
                        opacity: "0.5",
                        d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
                        fill: t
                    }), (0, a.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
                        fill: "#C4C4C4"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "154",
                        y: "99",
                        width: "106",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "154",
                        y: "123",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("circle", {
                        className: s,
                        opacity: "0.5",
                        cx: "196",
                        cy: "127",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "206",
                        y: "123",
                        width: "54",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        x: "142.5",
                        y: "0.5",
                        width: "129",
                        height: "142",
                        rx: "11.5",
                        stroke: t,
                        strokeOpacity: "0.3"
                    })]
                })
            }
        },
        370216: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("75196");

            function n(e) {
                let {
                    color: t = "currentColor",
                    foreground: s,
                    backgroundColor: n = "none",
                    ...i
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(i),
                    width: "272",
                    height: "143",
                    viewBox: "0 0 272 143",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("rect", {
                        className: s,
                        y: "15.5",
                        width: "272",
                        height: "112",
                        rx: "12",
                        fill: n
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "27.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "43.5",
                        width: "96",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "67.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "83.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "196",
                        y: "27.5",
                        width: "64",
                        height: "64",
                        rx: "8",
                        fill: t
                    }), (0, a.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
                        fill: "#C4C4C4"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("circle", {
                        className: s,
                        opacity: "0.5",
                        cx: "54",
                        cy: "111.5",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, a.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "64",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, a.jsx)("rect", {
                        className: s,
                        x: "0.5",
                        y: "16",
                        width: "271",
                        height: "111",
                        rx: "11.5",
                        stroke: t,
                        strokeOpacity: "0.3"
                    })]
                })
            }
        },
        630473: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("498225"),
                o = s("912557"),
                d = s("77078"),
                u = s("18054"),
                c = s("69678"),
                h = s("372283"),
                E = s("957255"),
                m = s("151185"),
                f = s("90625"),
                g = s("953371"),
                T = s("49111"),
                S = s("782340"),
                N = s("914013");

            function _(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.can(T.Permissions.MANAGE_CHANNELS, t), [t]), c = t.availableTags.length >= g.MAX_FORUM_TAGS, f = t.availableTags.length > 0, _ = l.useCallback(() => {
                    let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
                    n && !e && (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("987034").then(s.bind(s, "987034"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            channelId: t.id,
                            guildId: t.guild_id
                        })
                    })
                }, [t, n]), p = l.useCallback(e => {
                    n && (0, d.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await s.el("987034").then(s.bind(s, "987034"));
                        return s => (0, a.jsx)(l, {
                            ...s,
                            channelId: t.id,
                            guildId: t.guild_id,
                            tag: e
                        })
                    })
                }, [n, t]), {
                    handleDragStart: M,
                    handleDragReset: x,
                    handleDragComplete: R
                } = (0, h.default)(t.availableTags, e => {
                    (0, u.updateChannel)({
                        availableTags: e
                    })
                });
                return (0, a.jsxs)("div", {
                    className: N.tags,
                    children: [f ? t.availableTags.map(e => (0, a.jsx)(C, {
                        tag: e,
                        availableTags: t.availableTags,
                        canManageChannels: n,
                        onTagClick: p,
                        onDragComplete: R,
                        onDragReset: x,
                        onDragStart: M
                    }, e.id)) : null, f ? (0, a.jsx)(d.Clickable, {
                        onClick: _,
                        className: i(N.addTags, {
                            [N.disabled]: !n || c
                        }),
                        children: (0, a.jsx)(m.default, {
                            "aria-label": S.default.Messages.FORUM_TAG_CREATE,
                            color: o.default.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20
                        })
                    }) : (0, a.jsx)(d.Button, {
                        disabled: !n,
                        onClick: _,
                        children: S.default.Messages.FORUM_TAG_CREATE
                    })]
                })
            }

            function C(e) {
                let {
                    tag: t,
                    availableTags: s,
                    canManageChannels: l,
                    onTagClick: n,
                    onDragComplete: r,
                    onDragStart: o,
                    onDragReset: d
                } = e, u = s.findIndex(e => e.id === t.id), {
                    drag: h,
                    dragSourcePosition: E,
                    drop: m,
                    setIsDraggable: g
                } = (0, c.default)({
                    type: "CHANNEL_SETTINGS_FORUM_TAGS",
                    index: u,
                    optionId: t.id,
                    onDragStart: o,
                    onDragComplete: r,
                    onDragReset: d
                });
                return (0, a.jsx)("div", {
                    className: i(N.container, {
                        [N.dropIndicatorBefore]: null != E && u < E,
                        [N.dropIndicatorAfter]: null != E && u > E
                    }),
                    ref: e => h(m(e)),
                    onMouseEnter: () => g(l),
                    onMouseLeave: () => g(!1),
                    children: (0, a.jsx)(f.default, {
                        tag: t,
                        disabled: !l,
                        ariaLabel: S.default.Messages.FORUM_TAG_EDIT_LABEL.format({
                            name: t.name
                        }),
                        onClick: l ? () => n(t) : void 0
                    })
                })
            }
        },
        20105: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("498225"),
                n = s("77078"),
                i = s("430568"),
                r = s("385976"),
                o = s("79945"),
                d = s("244692");

            function u(e) {
                let {
                    reactionEmoji: t
                } = e, s = (0, l.useStateFromStores)([r.default], () => (null == t ? void 0 : t.emojiId) != null ? r.default.getUsableCustomEmojiById(t.emojiId) : null);
                return (0, a.jsxs)("div", {
                    className: d.container,
                    children: [(0, a.jsxs)("div", {
                        className: d.body,
                        children: [(0, a.jsxs)("div", {
                            className: d.placeholderLines,
                            children: [(0, a.jsx)(c, {
                                width: "100%",
                                marginBottom: 8
                            }), (0, a.jsx)(c, {
                                width: "80%",
                                marginBottom: 16
                            }), (0, a.jsx)(c, {
                                width: "50%",
                                marginBottom: 8
                            }), (0, a.jsx)(c, {
                                width: "60%",
                                marginBottom: 16
                            })]
                        }), (0, a.jsx)("div", {
                            className: d.placeholderMedia
                        })]
                    }), (0, a.jsxs)("div", {
                        className: d.footer,
                        children: [(0, a.jsxs)("div", {
                            className: d.reaction,
                            children: [null != t ? (0, a.jsx)(i.default, {
                                className: d.reactionEmote,
                                emojiId: t.emojiId,
                                emojiName: t.emojiName,
                                animated: !!(null == s ? void 0 : s.animated)
                            }) : (0, a.jsx)(o.default, {
                                className: d.reactionEmote
                            }), (0, a.jsx)(n.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: 17
                            })]
                        }), (0, a.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        }), (0, a.jsx)("div", {
                            className: d.dot
                        }), (0, a.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    width: t,
                    marginBottom: s
                } = e;
                return (0, a.jsx)("div", {
                    className: d.placeholderLine,
                    style: {
                        width: t,
                        marginBottom: s
                    }
                })
            }
        },
        735251: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("773670"),
                l = s("754013"),
                n = s("828674"),
                i = s("866595"),
                r = s("795228"),
                o = s("49111");

            function d(e, t) {
                let s = (0, r.default)(null == e ? void 0 : e.id);
                return a.useMemo(() => {
                    let a = null != e ? function(e, t) {
                            let s = new Set;
                            for (let a of Object.keys(t.permissionOverwrites)) {
                                let l = e.roles[a],
                                    r = t.permissionOverwrites[a];
                                (0, n.isSubscriptionRole)(l) && (0, i.isChannelAccessGrantedBy)(t, r) && s.add(l)
                            }
                            let a = e.getRole(e.id),
                                r = null != a && !l.default.has(a.permissions, o.Permissions.VIEW_CHANNEL),
                                d = (0, i.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (r && !d)
                                for (let t of Object.values(e.roles))(0, n.isSubscriptionRole)(t) && (0, i.isAllChannelsRole)(t) && s.add(t);
                            return [...s]
                        }(e, t) : [],
                        r = 0;
                    for (let e of a) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == s ? void 0 : s[t];
                            null != e && (r += e)
                        }
                    }
                    return r
                }, [s, e, t])
            }
        },
        980480: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("920040");
            s("773670");
            var l = s("575482"),
                n = s.n(l),
                i = s("77078"),
                r = s("252862"),
                o = s("782340"),
                d = s("481032"),
                u = e => {
                    let {
                        autoArchiveDuration: t,
                        onChange: s,
                        isDisabled: l
                    } = e, u = (0, r.getAutoArchiveOptions)(), c = (e, t) => (0, a.jsx)("span", {
                        className: n(d.optionLabel, {
                            [d.dropdownOption]: t
                        }),
                        children: e.label
                    });
                    return (0, a.jsx)(i.FormSection, {
                        title: o.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
                        className: d.formSection,
                        children: (0, a.jsx)(i.SingleSelect, {
                            isDisabled: l,
                            options: u,
                            value: t,
                            maxVisibleItems: u.length,
                            onChange: s,
                            optionClassName: d.dropdownOption,
                            renderOptionLabel: e => c(e, !0),
                            renderOptionValue: e => {
                                let [t] = e;
                                return c(t, !1)
                            }
                        })
                    })
                }
        },
        669021: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("498225"),
                o = s("77078"),
                d = s("206230"),
                u = s("117362"),
                c = s("655518"),
                h = s("49111"),
                E = s("782340"),
                m = s("553234");
            class f extends l.Component {
                getSelectedSection(e) {
                    let {
                        selectedSection: t
                    } = this.state;
                    if (null != t) return t;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].length > 0) return t;
                    return 0
                }
                componentDidMount() {
                    this.focus()
                }
                render() {
                    let {
                        position: e
                    } = this.props, t = this.getRows(), s = [];
                    if (this.isEmpty()) s.push(1);
                    else
                        for (let e of t) s.push(e.length);
                    return (0, a.jsxs)(o.Dialog, {
                        className: i(m.container, function(e) {
                            if ("bottom" === e) return m.positionBottom;
                            return m.positionTop
                        }(e)),
                        "aria-label": this.props["aria-label"],
                        children: [(0, a.jsx)("div", {
                            className: m.autocompleteShadow
                        }), (0, a.jsx)("div", {
                            className: m.autocompleteArrowWrapper,
                            children: (0, a.jsx)("div", {
                                className: m.autocompleteArrow
                            })
                        }), (0, a.jsxs)("header", {
                            className: m.header,
                            children: [(0, a.jsx)("div", {
                                className: m.autocompleteHeaderBackground
                            }), (0, a.jsx)("div", {
                                className: m.headerText,
                                children: this.props.label
                            }), (0, a.jsx)("input", {
                                type: "text",
                                className: m.input,
                                placeholder: this.props.placeholder,
                                ref: this.inputRef,
                                onChange: this.handleChange,
                                onKeyDown: this.handleKeyDown
                            })]
                        }), (0, a.jsx)("section", {
                            className: m.sectionTag,
                            children: (0, a.jsx)(o.List, {
                                className: m.autocompleteScroller,
                                fade: !0,
                                sections: s,
                                sectionHeight: this.getSectionHeight,
                                rowHeight: 40,
                                renderRow: this.renderRow,
                                renderSection: this.renderSection
                            })
                        })]
                    })
                }
                focus() {
                    null != this.inputRef.current && this.inputRef.current.focus()
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.state = {
                        query: null,
                        selectedSection: null,
                        selectedRow: 0
                    }, this.memoizedGetRows = (0, u.cachedFunction)((e, t, s) => {
                        let a = RegExp("^".concat(c.default.escape(null != e ? e.trim() : "")), "i"),
                            l = e => a.test(e);
                        return s.map((e, s) => t(l, s))
                    }), this.getRows = () => {
                        let {
                            onFilterResults: e,
                            sections: t
                        } = this.props, {
                            query: s
                        } = this.state;
                        return this.memoizedGetRows(s, e, t)
                    }, this.handleChange = e => {
                        var t, s;
                        let a = e.target.value;
                        null === (t = (s = this.props).onQueryChange) || void 0 === t || t.call(s, a), this.setState({
                            query: a,
                            selectedSection: null,
                            selectedRow: 0
                        })
                    }, this.handleMouseEnter = (e, t) => {
                        this.setState({
                            selectedSection: e,
                            selectedRow: t
                        })
                    }, this.handleClick = (e, t) => {
                        let s = this.getRows();
                        this.props.onSelect(s[e][t], e), this.props.onClose()
                    }, this.handleKeyDown = e => {
                        let {
                            keyboardModeEnabled: t
                        } = this.props, {
                            selectedRow: s
                        } = this.state, a = this.getRows(), l = this.getSelectedSection(a);
                        switch (e.keyCode) {
                            case h.KeyboardKeys.TAB:
                                if (t) break;
                            case h.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), this.props.sections.length > l && ++s >= a[l].length && (++l >= this.props.sections.length && (l = 0), s = 0), this.setState({
                                    selectedSection: l,
                                    selectedRow: s
                                });
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), --s < 0 && (--l < 0 && (l = this.props.sections.length - 1), s = a[l].length - 1), this.setState({
                                    selectedSection: l,
                                    selectedRow: s
                                });
                                break;
                            case h.KeyboardKeys.ENTER:
                                e.preventDefault(), this.props.sections.length > l && a[l].length > s && (this.props.onSelect(a[l][s], l), this.props.onClose());
                                break;
                            case h.KeyboardKeys.ESCAPE:
                                e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
                        }
                    }, this.isEmpty = () => 0 === this.getRows().reduce((e, t) => e + t.length, 0), this.getSectionHeight = e => {
                        let t = this.props.sections[e];
                        return this.isEmpty() || null == t ? 0 : 44
                    }, this.renderSection = e => {
                        let {
                            section: t
                        } = e, s = this.props.sections[t];
                        return this.isEmpty() || null == s ? null : (0, a.jsx)("div", {
                            className: m.section,
                            children: s
                        }, t)
                    }, this.renderRow = e => {
                        var t;
                        let {
                            section: s,
                            row: l
                        } = e, {
                            selectedRow: n
                        } = this.state;
                        if (this.isEmpty()) return (0, a.jsxs)("div", {
                            className: m.empty,
                            children: [(0, a.jsx)("p", {
                                className: m.noResultsHeader,
                                children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                            }), (0, a.jsx)("p", {
                                children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                            })]
                        }, "empty");
                        let r = this.getRows(),
                            d = this.getSelectedSection(r),
                            u = null === (t = r[s]) || void 0 === t ? void 0 : t[l];
                        return (0, a.jsx)(o.Clickable, {
                            onClick: this.handleClick.bind(this, s, l),
                            onMouseEnter: this.handleMouseEnter.bind(this, s, l),
                            className: i(m.row, {
                                [m.selected]: d === s && n === l
                            }),
                            children: (0, a.jsx)("div", {
                                className: m.rowInner,
                                children: this.props.onRenderResult(u, s)
                            })
                        }, "".concat(s, "-").concat(l))
                    }
                }
            }
            f.defaultProps = {
                sections: [null]
            };
            var g = r.default.connectStores([d.default], () => ({
                keyboardModeEnabled: d.default.keyboardModeEnabled
            }))(f)
        },
        142160: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("575482"),
                i = s.n(n),
                r = s("474293"),
                o = s("914786");
            let d = {
                    XSMALL: o.xsmall,
                    SMALL: o.small,
                    MEDIUM: o.medium,
                    LARGE: o.large
                },
                u = {
                    DEFAULT: "default",
                    STATIC: "static"
                };
            class c extends l.PureComponent {
                render() {
                    let {
                        size: e,
                        src: t,
                        srcHover: s,
                        className: l,
                        ...n
                    } = this.props, {
                        hovered: d
                    } = this.state, u = this.getMode();
                    return (0, a.jsx)("button", {
                        className: i((0, r.getClass)(o, "iconButton", u), l, e),
                        style: {
                            backgroundImage: "url('".concat(d && null != s ? s : t, "')")
                        },
                        onMouseEnter: this.handleHover,
                        onFocus: this.handleHover,
                        onMouseLeave: this.handleBlur,
                        onBlur: this.handleBlur,
                        ...n
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hovered: !1
                    }, this.getMode = () => null != this.props.srcHover ? u.STATIC : u.DEFAULT, this.handleHover = e => {
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null == t || t(e), !this.state.hovered && this.setState({
                            hovered: !0
                        })
                    }, this.handleBlur = e => {
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null == t || t(e), this.state.hovered && this.setState({
                            hovered: !1
                        })
                    }
                }
            }
            c.Sizes = d, c.defaultProps = {
                size: d.MEDIUM,
                disabled: !1
            };
            var h = c
        },
        447089: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("920040");

            function l(e) {
                let {
                    width: t = 18,
                    height: s = 18,
                    color: l = "currentColor",
                    foreground: n,
                    background: i,
                    className: r
                } = e;
                return (0, a.jsx)("svg", {
                    width: t,
                    height: s,
                    className: r,
                    viewBox: "0 0 18 18",
                    children: (0, a.jsxs)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("polygon", {
                            points: "0 0 18 0 18 18 0 18"
                        }), (0, a.jsx)("path", {
                            d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                            fillOpacity: "0.3",
                            fill: l,
                            fillRule: "nonzero",
                            className: i
                        }), (0, a.jsx)("path", {
                            d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                            fill: l,
                            className: n
                        })]
                    })
                })
            }
            s("773670")
        },
        686069: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSecondsSliderLabel: function() {
                    return i
                }
            });
            var a = s("377849"),
                l = s.n(a),
                n = s("782340");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default.Messages.FORM_LABEL_OFF,
                    a = l.duration(e, "seconds");
                if (a.days() > 0) return (t ? n.default.Messages.DURATION_DAYS_SHORT : n.default.Messages.DURATION_DAYS).format({
                    days: a.days()
                });
                if (a.hours() > 0) return (t ? n.default.Messages.DURATION_HOURS_SHORT : n.default.Messages.DURATION_HOURS).format({
                    hours: a.hours()
                });
                if (a.minutes() > 0) return (t ? n.default.Messages.DURATION_MINUTES_SHORT : n.default.Messages.DURATION_MINUTES).format({
                    minutes: a.minutes()
                });
                else if (e > 0) return (t ? n.default.Messages.DURATION_SECONDS_SHORT : n.default.Messages.DURATION_SECONDS).format({
                    seconds: a.seconds()
                });
                else return t ? n.default.Messages.FORM_LABEL_OFF : s
            }
        }
    }
]);