(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["606"], {
        23141: function(e, t, a) {
            "use strict";
            e.exports = a.p + "1964f50ca0220e98dc32.svg"
        },
        34705: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c1875fc8a42a61903ba1.svg"
        },
        182418: function(e, t, a) {
            "use strict";
            e.exports = a.p + "387a7c504c96b992872d.svg"
        },
        164370: function(e, t, a) {
            "use strict";
            e.exports = a.p + "73984240bd99493de947.svg"
        },
        972442: function(e, t, a) {
            "use strict";
            e.exports = a.p + "038a865e09c25dc13e30.svg"
        },
        473886: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7ad4feabe353360394cc.svg"
        },
        921880: function(e, t, a) {
            "use strict";
            e.exports = a.p + "581d6c7045a19cc9cfc0.svg"
        },
        555658: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6f736adcfde4c65bd7bf.svg"
        },
        623264: function(e, t, a) {
            "use strict";
            e.exports = a.p + "25a7f5c53d497f5490af.svg"
        },
        706832: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5e6ab17a7aff87ed5da1.svg"
        },
        881888: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("819855"),
                d = a("77078"),
                o = a("272030"),
                u = a("726527"),
                c = a("142160"),
                h = a("433487"),
                E = a("782340"),
                m = a("554259");

            function f(e) {
                let {
                    role: t,
                    guild: n
                } = e, [r, c] = s.useState(!1), E = (0, u.useHasGuildRoleItems)(n, t);
                return E ? (0, l.jsx)(d.Clickable, {
                    onClick: e => {
                        c(!0), (0, o.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await a.el("726527").then(a.bind(a, "726527"));
                            return a => (0, l.jsx)(e, {
                                ...a,
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
                    children: (0, l.jsx)(h.default, {
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
                    showContextMenu: M,
                    theme: x,
                    roleStyle: I,
                    "aria-label": p
                } = e, R = s.useCallback(e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await a.el("443070").then(a.bind(a, "443070"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            id: n,
                            label: E.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [n]);
                return g ? (0, l.jsx)("div", {
                    className: m.dragged
                }) : (0, l.jsx)(d.TabBar.Item, {
                    className: m.role,
                    id: n,
                    selectedItem: T,
                    onItemSelect: S,
                    itemType: N,
                    "aria-label": null != C ? "".concat(p, ", ").concat(C) : p,
                    children: (0, l.jsxs)("div", {
                        className: m.roleContent,
                        children: ["dot" === I ? (0, l.jsx)(d.RoleDot, {
                            color: null != t ? t : void 0,
                            className: m.roleDot,
                            background: !1,
                            tooltip: !1
                        }) : (0, l.jsx)(d.RoleCircle, {
                            color: null != t ? t : void 0,
                            className: m.roleCircle
                        }), function() {
                            if (!_) return null;
                            let e = (0, r.isThemeDark)(x) ? a("555658") : a("921880");
                            return (0, l.jsx)(d.Tooltip, {
                                text: C,
                                color: d.Tooltip.Colors.RED,
                                children: t => (0, l.jsx)(c.default, {
                                    className: m.lock,
                                    src: e,
                                    ...t
                                })
                            })
                        }(), (0, l.jsx)("div", {
                            className: m.roleInner,
                            onContextMenu: R,
                            children: h
                        }), M && null != i ? (0, l.jsx)(f, {
                            guild: u,
                            role: i
                        }) : null]
                    })
                })
            }
        },
        575351: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                i = a("77078"),
                r = a("679653"),
                d = a("929278"),
                o = a("347895"),
                u = a("848848"),
                c = a("735251"),
                h = a("534222"),
                E = a("592407"),
                m = a("610730"),
                f = a("271938"),
                g = a("305961"),
                T = a("957255"),
                S = a("49111"),
                N = a("782340"),
                _ = a("413075"),
                C = e => {
                    var t;
                    let {
                        channel: a,
                        onClose: C,
                        onConfirm: M,
                        transitionState: x
                    } = e, I = (0, r.default)(a, !0), p = a.id, R = a.isForumPost(), O = (0, n.useStateFromStores)([g.default], () => g.default.getGuild(a.getGuildId())), A = (0, h.useGuildChannelScheduledEvents)(p), {
                        isSubscriptionGated: L
                    } = (0, u.default)(a.id), v = (0, c.default)(O, a), [j, D] = s.useState(null), F = (0, n.useStateFromStores)([f.default], () => a.isOwner(f.default.getId()), [a]), y = (0, n.useStateFromStores)([T.default], () => T.default.can(a.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, a), [a]), b = (0, n.useStateFromStores)([m.default], () => null !== (t = m.default.getCount(a.id)) && void 0 !== t ? t : 0, [a.id]), P = R && (y || F && b < 1), H = A.length > 0 && (a.type === S.ChannelTypes.GUILD_VOICE || a.type === S.ChannelTypes.GUILD_STAGE_VOICE);
                    if (s.useEffect(() => {
                            (async () => {
                                let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(a.getGuildId(), p);
                                if (!e) {
                                    D("default");
                                    return
                                }
                                let t = await (0, o.getBlockForChannelDeletion)(a.getGuildId(), p);
                                if (!1 !== t) {
                                    D(t);
                                    return
                                }
                            })()
                        }, [a, p]), null != j) {
                        let e;
                        let t = N.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === j ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === j ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : N.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
                            transitionState: x,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: _.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            if (null != O) E.default.open(O.id, S.GuildSettingsSections.ONBOARDING), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: C,
                                    children: N.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == O) return null;
                    if (O.hasFeature(S.GuildFeatures.COMMUNITY) && (O.rulesChannelId === p || O.publicUpdatesChannelId === p)) {
                        let e = O.rulesChannelId === p,
                            t = e ? N.default.Messages.DELETE_RULES_CHANNEL_BODY : N.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: x,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: _.modalText,
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: _.modalText,
                                    children: N.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            E.default.open(O.id, S.GuildSettingsSections.COMMUNITY), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
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
                            if (a.type === S.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: N.default.Messages.DELETE_CATEGORY,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            };
                            if (a.isForumPost()) return {
                                deleteText: P ? N.default.Messages.DELETE_FORUM_POST : N.default.Messages.DELETE_MESSAGE,
                                deleteBody: P && F && !y ? N.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: I
                                }) : P ? N.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: I
                                }) : N.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (a.isThread()) return {
                                deleteText: N.default.Messages.DELETE_THREAD,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            };
                            else if (L && v > 0) return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: I,
                                    numGuildRoleSubscriptionMembers: v
                                })
                            };
                            return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            }
                        })();
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: x,
                            "aria-label": e,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: _.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: t
                                }), H ? (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: _.warningText,
                                    children: N.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: A.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(i.ModalFooter, {
                                children: [(0, l.jsx)(i.Button, {
                                    onClick: M,
                                    color: i.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(i.Button, {
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
        443202: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("458960"),
                i = a("446674"),
                r = a("77078"),
                d = a("318738"),
                o = a("173446"),
                u = a("901998"),
                c = a("461380"),
                h = a("782340"),
                E = a("434632");

            function m() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.advancedMode),
                    [t] = s.useState(new n.default.Value(e ? 1 : 0));
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.FormDivider, {
                        className: E.advancedModeDivider
                    }), (0, l.jsx)(r.HeadingLevel, {
                        component: (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.BLANK,
                            color: r.Button.Colors.TRANSPARENT,
                            onClick: function() {
                                e ? n.default.timing(t, {
                                    toValue: 0,
                                    duration: 250
                                }).start(() => {
                                    (0, d.setAdvancedMode)(!1)
                                }) : ((0, d.setAdvancedMode)(!0), n.default.timing(t, {
                                    toValue: 1,
                                    duration: 250
                                }).start())
                            },
                            children: (0, l.jsxs)(r.FormTitle, {
                                tag: "h1",
                                className: E.advancedTitle,
                                children: [h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, l.jsx)(c.default, {
                                    expanded: e,
                                    className: E.titleCaret,
                                    width: 20,
                                    height: 20
                                })]
                            })
                        }),
                        children: e && (0, l.jsx)(n.default.div, {
                            style: {
                                opacity: t
                            },
                            children: (0, l.jsx)(o.default, {})
                        })
                    })]
                })
            }
        },
        817653: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return Q
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("446674"),
                d = a("77078"),
                o = a("404118"),
                u = a("450911"),
                c = a("18054"),
                h = a("318738"),
                E = a("798609"),
                m = a("339023"),
                f = a("929278"),
                g = a("619395"),
                T = a("923510"),
                S = a("230324"),
                N = a("901998"),
                _ = a("26989"),
                C = a("305961"),
                M = a("957255"),
                x = a("697218"),
                I = a("79798"),
                p = a("145131"),
                R = a("555158"),
                O = a("381546"),
                A = a("45029"),
                L = a("682344"),
                v = a("228427"),
                j = a("31225"),
                D = a("447089"),
                F = a("991170"),
                y = a("454273"),
                b = a("443202"),
                P = a("165161"),
                H = a("460812"),
                U = a("606762"),
                w = a("49111"),
                B = a("843455"),
                G = a("782340"),
                V = a("674310");

            function k(e) {
                let {
                    channel: t,
                    roles: a,
                    members: s,
                    disabledReason: n,
                    getRemoveTooltipHint: r
                } = e;
                return (0, l.jsx)(d.List, {
                    className: V.roleMemberList,
                    sections: [a.length, s.length],
                    renderRow: function(e) {
                        let c, f, T, {
                                section: S,
                                row: N
                            } = e,
                            _ = !1;
                        switch (S) {
                            case U.AudienceSelectorSections.ROLES:
                                var C;
                                T = (f = a[N]).rowType === U.RowType.ROLE && (null === (C = f.tags) || void 0 === C ? void 0 : C.guild_connections) === null ? (0, l.jsx)(m.default, {
                                    className: V.shield,
                                    color: f.colorString,
                                    size: 20
                                }) : (0, l.jsx)(L.default, {
                                    className: V.shield,
                                    color: f.colorString,
                                    height: 20
                                }), c = (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: V.rowHeight,
                                        children: T
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        className: V.rowLabel,
                                        color: f.disabled ? "text-muted" : "text-normal",
                                        children: f.name
                                    })]
                                }), _ = f.disabled;
                                break;
                            case U.AudienceSelectorSections.MEMBERS:
                                f = s[N], c = (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(d.Avatar, {
                                        src: f.avatarURL,
                                        size: d.AvatarSizes.SIZE_24,
                                        "aria-hidden": !0
                                    }), (0, l.jsx)(d.Text, {
                                        className: V.rowLabel,
                                        variant: "text-sm/normal",
                                        children: f.name
                                    }), f.bot && (0, l.jsx)(I.default, {
                                        verified: f.verifiedBot,
                                        className: V.rowBotTag
                                    }), null != f.nickname && (0, l.jsx)(d.Text, {
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
                        let M = !_ && null == n && null != f.id;
                        return (0, l.jsxs)(p.default, {
                            justify: p.default.Justify.BETWEEN,
                            align: p.default.Align.CENTER,
                            className: V.memberRow,
                            children: [(0, l.jsx)(p.default, {
                                justify: p.default.Justify.START,
                                align: p.default.Align.CENTER,
                                className: V.memberRowBody,
                                children: c
                            }), (0, l.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: y.getRowTypeLabel(f.rowType)
                            }), f.rowType !== U.RowType.EMPTY_STATE && (0, l.jsx)(d.TooltipContainer, {
                                className: V.removeIconContainer,
                                text: null != n ? n : r(f.rowType, f.disabled),
                                children: (0, l.jsx)(d.Clickable, {
                                    onClick: () => {
                                        var e, a, l;
                                        return M && null != f && (e = f.id, a = f.name, l = f.rowType, void o.default.show({
                                            title: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                                            body: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                                                name: a
                                            }),
                                            cancelText: G.default.Messages.CANCEL,
                                            onConfirm: () => (function(e, a) {
                                                if (t.isGuildStageVoice()) {
                                                    let l = (0, g.removeModeratorOverwrite)(e, a === U.RowType.ROLE ? E.PermissionOverwriteType.ROLE : E.PermissionOverwriteType.MEMBER, t);
                                                    (0, g.isEmptyOverwrite)(l) ? u.default.clearPermissionOverwrite(t.id, l.id): (0, h.savePermissionUpdates)(t.id, [l])
                                                } else u.default.clearPermissionOverwrite(t.id, e)
                                            })(e, l)
                                        }))
                                    },
                                    "aria-disabled": !M,
                                    "aria-label": G.default.Messages.REMOVE,
                                    children: (0, l.jsx)(O.default, {
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
                            case U.AudienceSelectorSections.ROLES:
                                return (0, l.jsx)(z, {
                                    title: G.default.Messages.ROLES
                                }, "roles-title");
                            case U.AudienceSelectorSections.MEMBERS:
                                return (0, l.jsx)(z, {
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
                    channel: s,
                    permissionUpdates: n
                } = e, o = y.getExistingRolesRowWithPermissionDisabled(t, s, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n), u = (0, r.useStateFromStores)([_.default], () => y.getExistingMembersRows(_.default.getMemberIds(t.id), s, t, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n)), c = (0, g.useCanUpdateStageChannelModerators)(s.id);

                function h() {
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("286470").then(a.bind(a, "286470"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            channelId: s.id
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(V.settingCard, V.active),
                    children: [(0, l.jsx)(P.default, {
                        label: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
                        description: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
                        icon: (0, l.jsx)(v.default, {
                            className: V.cardIcon,
                            height: 20,
                            width: 20
                        }),
                        id: "StageModeratorSettingCard"
                    }), (0, l.jsxs)("div", {
                        className: V.cardFolder,
                        children: [(0, l.jsxs)(p.default, {
                            justify: p.default.Justify.BETWEEN,
                            align: p.default.Align.CENTER,
                            className: V.folderHeader,
                            children: [(0, l.jsx)(d.FormTitle, {
                                tag: "h5",
                                className: V.folderTitle,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
                            }), (0, l.jsx)(d.Tooltip, {
                                text: G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                                shouldShow: !c,
                                children: e => (0, l.jsx)(d.Button, {
                                    ...e,
                                    size: d.Button.Sizes.SMALL,
                                    color: d.Button.Colors.BRAND,
                                    onClick: h,
                                    disabled: !c,
                                    children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                })
                            })]
                        }), (0, l.jsx)(k, {
                            channel: s,
                            roles: o,
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
                    channel: s,
                    isPrivateGuildChannel: n,
                    roles: o,
                    members: u
                } = e, c = (0, r.useStateFromStores)([M.default], () => M.default.can(B.Permissions.ADMINISTRATOR, t)), h = F.default.canEveryoneRole(B.Permissions.VIEW_CHANNEL, t), E = F.default.canEveryoneRole(B.Permissions.ADMINISTRATOR, t), m = {
                    title: G.default.Messages.PRIVATE_CHANNEL,
                    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
                    formLabel: G.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
                };
                return s.isCategory() ? (m.title = G.default.Messages.PRIVATE_CATEGORY, m.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, m.formLabel = G.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : s.type === w.ChannelTypes.GUILD_VOICE && (m.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, l.jsxs)("div", {
                    className: i(V.settingCard, {
                        [V.active]: n
                    }),
                    children: [(0, l.jsx)(P.default, {
                        description: m.subtitle,
                        icon: (0, l.jsx)(A.default, {
                            className: V.cardIcon,
                            height: 20,
                            width: 20
                        }),
                        id: "PrivateChannelSettingCard",
                        label: m.title,
                        onChange: function() {
                            let e = s.accessPermissions,
                                a = x.default.getCurrentUser();
                            if (y.toggleChannelEveryonePermission(s, e, n), !n && null != a) !(null == t ? void 0 : t.isOwner(a)) && !c && y.grantUserChannelAccess(s, e)
                        },
                        value: n
                    }), (0, l.jsxs)("div", {
                        className: V.cardFolder,
                        children: [E && (0, l.jsx)("div", {
                            className: V.adminWarning,
                            children: (0, l.jsx)(R.default, {
                                messageType: R.HelpMessageTypes.WARNING,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
                            })
                        }), !h && !E && !n && (0, l.jsx)("div", {
                            className: V.adminWarning,
                            children: (0, l.jsx)(R.default, {
                                messageType: R.HelpMessageTypes.WARNING,
                                children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
                            })
                        }), n && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)(p.default, {
                                justify: p.default.Justify.BETWEEN,
                                align: p.default.Align.CENTER,
                                className: V.folderHeader,
                                children: [(0, l.jsx)(d.FormTitle, {
                                    tag: "h5",
                                    className: V.folderTitle,
                                    children: m.formLabel
                                }), (0, l.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    color: d.Button.Colors.BRAND,
                                    onClick: function() {
                                        (0, d.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await a.el("462430").then(a.bind(a, "462430"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channelId: s.id,
                                                inSettings: !0
                                            })
                                        })
                                    },
                                    children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                })]
                            }), (0, l.jsx)(k, {
                                channel: s,
                                roles: o,
                                members: u,
                                getRemoveTooltipHint: y.getRemoveTooltipHint
                            })]
                        })]
                    })]
                })
            }

            function z(e) {
                let {
                    title: t
                } = e;
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(d.FormDivider, {
                        className: V.divider
                    }), (0, l.jsx)(d.FormTitle, {
                        className: i(V.folderTitle, V.sectionTitle),
                        tag: "h5",
                        children: t
                    })]
                })
            }
            var Q = r.default.connectStores([N.default, M.default, _.default, C.default], () => {
                let e;
                let t = N.default.channel,
                    a = N.default.category,
                    l = [],
                    s = [],
                    n = {},
                    i = !1;
                if (null != t) {
                    var r;
                    e = C.default.getGuild(t.getGuildId());
                    let a = _.default.getMemberIds(null === (r = e) || void 0 === r ? void 0 : r.id);
                    null != e && (n = N.default.editedPermissionIds.reduce((e, t) => {
                        let a = N.default.getPermissionOverwrite(t);
                        return null != a && (e[t] = a), e
                    }, {}), l = y.getExistingRolesRows(e, t, t.accessPermissions, n), s = y.getExistingMembersRows(a, t, e, t.accessPermissions, n), i = y.isPrivateGuildChannel(t, n))
                }
                return {
                    canSyncChannel: null != a && M.default.can(B.Permissions.MANAGE_ROLES, a),
                    category: a,
                    channel: t,
                    filteredMembers: s,
                    filteredRoles: l,
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
                    filteredRoles: o,
                    guild: u,
                    isPrivateGuildChannel: h,
                    locked: E,
                    permissionUpdates: m
                } = e, [g, T] = s.useState(!F.default.canEveryoneRole(B.Permissions.SEND_MESSAGES, i));
                if (null == i || null == u) return null;

                function S() {
                    y.toggleChannelEveryonePermission(i, B.Permissions.SEND_MESSAGES, g), T(!g)
                }

                function N() {
                    null != n && (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("57005").then(a.bind(a, "57005"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            channel: i,
                            category: n,
                            onConfirm: async () => {
                                let {
                                    guild_id: e
                                } = n, t = {
                                    ...n.permissionOverwrites
                                };
                                null != e && null == t[e] && (t[e] = F.default.makeEveryoneOverwrite(e));
                                let a = await (0, f.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(i, t[e].deny, t[e].allow);
                                a && (0, c.saveChannel)(i.id, {
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
                return i.isCategory() && (_.title = G.default.Messages.CATEGORY_SETTINGS, _.subtitle = G.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(d.FormTitle, {
                        tag: "h1",
                        children: _.title
                    }), (0, l.jsx)(d.FormText, {
                        children: _.subtitle
                    }), null != n && t ? E ? (0, l.jsx)(H.default, {
                        canSync: !1,
                        icon: j.default,
                        noticeText: G.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
                            categoryName: n.name
                        })
                    }) : (0, l.jsx)(H.default, {
                        buttonText: G.default.Messages.SYNC_NOW,
                        canSync: !0,
                        icon: D.default,
                        noticeText: G.default.Messages.PERMISSIONS_UNSYNCED.format({
                            categoryName: n.name
                        }),
                        onClick: N
                    }) : null, i.isGuildStageVoice() ? (0, l.jsx)(W, {
                        guild: u,
                        channel: i,
                        permissionUpdates: m
                    }) : null, (0, l.jsx)(Y, {
                        channel: i,
                        guild: u,
                        isPrivateGuildChannel: h,
                        roles: o,
                        members: r
                    }), !1, (0, l.jsx)(b.default, {})]
                })
            })
        },
        165161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("145131"),
                i = a("619250");

            function r(e) {
                let {
                    description: t,
                    icon: a,
                    id: r,
                    label: d,
                    onChange: o,
                    value: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.cardContent,
                    children: [(0, l.jsxs)(n.default, {
                        justify: n.default.Justify.BETWEEN,
                        align: n.default.Align.CENTER,
                        children: [a, (0, l.jsx)(n.default.Child, {
                            grow: 1,
                            children: (0, l.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                children: d
                            })
                        }), null != o && null != u ? (0, l.jsx)(s.Switch, {
                            id: r,
                            checked: u,
                            onChange: o
                        }) : null]
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        className: i.cardDescription,
                        children: t
                    })]
                })
            }
        },
        460812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("669491"),
                r = a("77078"),
                d = a("145131"),
                o = a("420506"),
                u = e => {
                    let {
                        className: t,
                        icon: a,
                        noticeText: s,
                        buttonText: u,
                        onClick: c,
                        canSync: h
                    } = e;
                    return (0, l.jsx)(r.Card, {
                        className: n(t, o.card),
                        children: (0, l.jsxs)(d.default, {
                            justify: d.default.Justify.BETWEEN,
                            align: d.default.Align.CENTER,
                            children: [(0, l.jsx)(a, {
                                width: 20,
                                height: 20,
                                color: i.default.unsafe_rawColors.YELLOW_300.css
                            }), (0, l.jsx)("div", {
                                className: o.label,
                                children: (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: s
                                })
                            }), h && (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.PRIMARY,
                                onClick: c,
                                children: u
                            })]
                        })
                    })
                }
        },
        51944: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showPermissionLockoutModal: function() {
                    return r
                }
            });
            var l = a("404118"),
                s = a("701909"),
                n = a("49111"),
                i = a("782340");

            function r(e) {
                l.default.show({
                    title: i.default.Messages.SELF_DENY_PERMISSION_TITLE,
                    body: i.default.Messages.SELF_DENY_PERMISSION_BODY.format({
                        name: e
                    }),
                    cancelText: i.default.Messages.HELP_DESK,
                    onCancel() {
                        window.open(s.default.getArticleURL(n.HelpdeskArticles.PERMISSIONS_LOCKOUT))
                    }
                })
            }
        },
        995865: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return U
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                i = a("77078"),
                r = a("913144"),
                d = a("18054"),
                o = a("54239"),
                u = a("800751"),
                c = a("534291"),
                h = a("575351"),
                E = a("716241"),
                m = a("679653"),
                f = a("419830"),
                g = a("817653"),
                T = a("300322"),
                S = a("161778"),
                N = a("233069"),
                _ = a("161810"),
                C = a("901998"),
                M = a("492114"),
                x = a("42203"),
                I = a("957255"),
                p = a("27618"),
                R = a("697218"),
                O = a("228220"),
                A = a("659500"),
                L = a("291013"),
                v = a("995553"),
                j = a("823362"),
                D = a("173446"),
                F = a("49111"),
                y = a("782340"),
                b = a("160659");

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    a = arguments.length > 2 ? arguments[2] : void 0;
                E.default.trackWithMetadata(F.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                    settings_type: "channel",
                    origin_pane: t,
                    destination_pane: e,
                    location: a
                })
            }
            class H extends s.PureComponent {
                componentDidMount() {
                    P(this.props.section, null, this.props.analyticsLocation)
                }
                componentWillUnmount() {
                    r.default.wait(() => (0, d.close)())
                }
                componentDidUpdate(e) {
                    let {
                        formState: t,
                        section: a
                    } = e, {
                        formState: l,
                        section: s,
                        canManageRoles: n,
                        canManageChannels: i,
                        canManageWebhooks: r
                    } = this.props;
                    (i || n || r) && (l !== F.FormStates.CLOSED || l === t) && (n || s !== F.ChannelSettingsSections.PERMISSIONS) && (r || s !== F.ChannelSettingsSections.INTEGRATIONS) ? s !== a && P(s, a): (0, o.popLayer)()
                }
                render() {
                    let {
                        theme: e,
                        sidebarTheme: t,
                        section: a,
                        channel: s,
                        category: n,
                        canManageRoles: r,
                        canManageChannels: E,
                        canDeleteChannels: T,
                        canManageWebhooks: S
                    } = this.props;
                    return null == s ? null : (0, l.jsx)(u.default, {
                        theme: e,
                        sidebarTheme: t,
                        section: null != a ? a : F.ChannelSettingsSections.OVERVIEW,
                        onSetSection: d.setSection,
                        onClose: o.popLayer,
                        sections: function(e) {
                            let {
                                channel: t,
                                category: a,
                                canManageRoles: s,
                                canManageChannels: n,
                                canDeleteChannels: r,
                                canManageWebhooks: u
                            } = e, E = (0, f.getChannelIconComponent)(t), {
                                GUILD_CATEGORY: T
                            } = F.ChannelTypes, S = N.THREAD_CHANNEL_TYPES.has(t.type), x = t.type === T ? y.default.Messages.DELETE_CATEGORY : S ? t.isForumPost() ? y.default.Messages.DELETE_FORUM_POST : y.default.Messages.DELETE_THREAD : y.default.Messages.DELETE_CHANNEL;
                            return [{
                                section: c.SectionTypes.HEADER,
                                label: null != t ? (0, l.jsxs)(l.Fragment, {
                                    children: [null != E ? (0, l.jsx)(E, {
                                        width: 12,
                                        height: 12,
                                        className: b.channelIcon
                                    }) : null, (0, m.computeChannelName)(t, R.default, p.default), null != a ? (0, l.jsx)(i.Text, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "header-secondary",
                                        lineClamp: 1,
                                        className: b.category,
                                        children: (0, m.computeChannelName)(a, R.default, p.default)
                                    }) : null]
                                }) : y.default.Messages.CHANNEL_SETTINGS
                            }, {
                                section: F.ChannelSettingsSections.OVERVIEW,
                                label: y.default.Messages.OVERVIEW,
                                ariaLabel: y.default.Messages.OVERVIEW,
                                element: j.default,
                                notice: {
                                    element: j.ChannelSettingsOverviewNotice,
                                    stores: [M.default]
                                }
                            }, {
                                section: F.ChannelSettingsSections.PERMISSIONS,
                                label: y.default.Messages.PERMISSIONS,
                                element: g.default,
                                notice: {
                                    element: D.ChannelSettingsPermissionsNotice,
                                    stores: [C.default]
                                },
                                predicate: () => s && !S
                            }, {
                                section: F.ChannelSettingsSections.INSTANT_INVITES,
                                label: y.default.Messages.INVITES,
                                element: v.default,
                                type: c.ContentTypes.CUSTOM,
                                predicate: () => t.type !== T && n && !S
                            }, {
                                section: F.ChannelSettingsSections.INTEGRATIONS,
                                label: y.default.Messages.INTEGRATIONS_OVERVIEW,
                                ariaLabel: y.default.Messages.INTEGRATIONS_OVERVIEW,
                                element: L.default,
                                notice: {
                                    stores: [_.default],
                                    element: L.ChannelSettingsIntegrationsNotice
                                },
                                predicate: () => !!u && N.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type)
                            }, {
                                section: c.SectionTypes.DIVIDER
                            }, {
                                section: F.ChannelSettingsSections.DELETE,
                                onClick() {
                                    (0, i.openModal)(e => (0, l.jsx)(h.default, {
                                        ...e,
                                        onConfirm: () => {
                                            e.onClose(), A.ComponentDispatch.subscribeOnce(F.ComponentActions.LAYER_POP_COMPLETE, () => {
                                                (0, d.deleteChannel)(t.id)
                                            }), (0, o.popLayer)()
                                        },
                                        channel: t
                                    }))
                                },
                                label: x,
                                ariaLabel: x,
                                icon: (0, l.jsx)(O.default, {
                                    width: 16,
                                    height: 16
                                }),
                                predicate: () => r
                            }]
                        }({
                            channel: s,
                            category: n,
                            canManageRoles: r,
                            canManageChannels: E,
                            canDeleteChannels: T,
                            canManageWebhooks: S
                        })
                    })
                }
            }

            function U() {
                let {
                    channel: e,
                    analyticsLocation: t
                } = (0, n.useStateFromStoresObject)([M.default], () => M.default.getProps()), a = (0, n.useStateFromStores)([M.default], () => M.default.getFormState()), s = (0, n.useStateFromStores)([M.default], () => M.default.getSection()), i = (0, n.useStateFromStores)([S.default], () => S.default.theme), r = (0, n.useStateFromStores)([S.default], () => S.default.darkSidebar ? F.ThemeTypes.DARK : void 0), d = (0, T.useCanManageThread)(e), o = (0, T.useIsThreadModerator)(e), {
                    canManageChannels: u,
                    canManageRoles: c,
                    canManageWebhooks: h
                } = (0, n.useStateFromStoresObject)([I.default], () => ({
                    canManageChannels: I.default.can(F.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: null != e && I.default.can(F.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: null != e && I.default.can(F.Permissions.MANAGE_WEBHOOKS, e)
                })), E = (0, n.useStateFromStores)([x.default], () => x.default.getChannel(null == e ? void 0 : e.parent_id));
                return (0, l.jsx)(H, {
                    channel: e,
                    category: E,
                    canManageChannels: (null == e ? void 0 : e.isThread()) ? d : u,
                    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? o : u,
                    canManageRoles: c,
                    canManageWebhooks: h,
                    formState: a,
                    theme: i,
                    sidebarTheme: r,
                    section: s,
                    analyticsLocation: t
                })
            }
        },
        291013: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                },
                ChannelSettingsIntegrationsNotice: function() {
                    return h
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("446674"),
                n = a("713841"),
                i = a("45299"),
                r = a("467733"),
                d = a("161810"),
                o = a("492114"),
                u = a("305961");

            function c(e) {
                let {
                    refToScroller: t
                } = e, {
                    channel: a
                } = (0, s.useStateFromStores)([o.default], () => o.default.getProps(), []), n = (0, s.useStateFromStores)([u.default], () => null != a ? u.default.getGuild(a.getGuildId()) : null, [a]), {
                    section: i,
                    sectionId: c,
                    webhooks: h,
                    editedWebhook: E,
                    isFetching: m,
                    errors: f
                } = (0, s.useStateFromStores)([d.default], () => d.default.getProps(), []);
                return null == n || null == a ? null : (0, l.jsx)(r.default, {
                    guild: n,
                    channel: a,
                    section: i,
                    sectionId: c,
                    webhooks: h,
                    editedWebhook: E,
                    isFetching: m,
                    hasChanges: d.default.hasChanges,
                    errors: f,
                    refToScroller: t
                })
            }

            function h() {
                let {
                    channel: e,
                    submitting: t
                } = (0, s.useStateFromStores)([o.default], () => o.default.getProps()), a = (0, s.useStateFromStores)([u.default], () => null != e ? u.default.getGuild(e.getGuildId()) : null, [e]);
                return (0, l.jsx)(i.default, {
                    submitting: t,
                    onReset: () => {
                        n.default.init()
                    },
                    onSave: () => {
                        null != a && null != d.default.editedWebhook && n.default.saveWebhook(a.id, d.default.editedWebhook)
                    }
                })
            }
        },
        995553: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("446674"),
                n = a("758085"),
                i = a("492114"),
                r = a("305961"),
                d = a("957255"),
                o = a("102985"),
                u = a("49111");

            function c() {
                let e = (0, s.useStateFromStores)([o.default], () => o.default.hideInstantInvites),
                    {
                        channel: t,
                        guild: a
                    } = (0, s.useStateFromStoresObject)([i.default, r.default], () => {
                        let {
                            channel: e
                        } = i.default.getProps(), t = null != e ? r.default.getGuild(e.getGuildId()) : null;
                        return {
                            channel: e,
                            guild: t
                        }
                    }, []),
                    c = (0, s.useStateFromStores)([d.default], () => null != t && d.default.can(u.Permissions.CREATE_INSTANT_INVITE, t), [t]),
                    {
                        invites: h,
                        loading: E
                    } = (0, s.useStateFromStoresObject)([i.default], () => i.default.getInvites(), []);
                return (0, l.jsx)(n.default, {
                    invites: h,
                    loading: E,
                    guild: a,
                    channel: t,
                    canCreateInvites: c,
                    hide: e
                })
            }
        },
        823362: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ChannelSettingsOverviewNotice: function() {
                    return eT
                },
                default: function() {
                    return eN
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("482402"),
                d = a("335710"),
                o = a("446674"),
                u = a("669491"),
                c = a("819855"),
                h = a("77078"),
                E = a("18054"),
                m = a("363484"),
                f = a("901582"),
                g = a("45299"),
                T = a("734575"),
                S = a("679653"),
                N = a("850391"),
                _ = a("149022"),
                C = a("681060"),
                M = a("86678"),
                x = a("867805"),
                I = a("339792"),
                p = a("630473"),
                R = a("20105"),
                O = a("677315"),
                A = a("252862"),
                L = a("300322"),
                v = a("24337"),
                j = a("980480"),
                D = a("161778"),
                F = a("233069"),
                y = a("271938"),
                b = a("492114"),
                P = a("305961"),
                H = a("957255"),
                U = a("402904"),
                w = a("697218"),
                B = a("145131"),
                G = a("476765"),
                V = a("956089"),
                k = a("404008"),
                W = a("568734"),
                Y = a("701909"),
                z = a("686069"),
                Q = a("792861"),
                Z = a("370216"),
                K = a("49111"),
                J = a("724210"),
                X = a("958706"),
                q = a("953371"),
                $ = a("515631"),
                ee = a("648564"),
                et = a("782340"),
                ea = a("979554"),
                el = a("926622");
            let es = (0, G.uid)(),
                en = (0, G.uid)(),
                ei = (0, G.uid)(),
                er = (0, G.uid)(),
                ed = (0, G.uid)(),
                eo = (0, G.uid)(),
                eu = (0, G.uid)(),
                ec = (0, G.uid)(),
                eh = (0, G.uid)(),
                eE = (0, G.uid)(),
                em = (0, G.uid)(),
                ef = (0, F.createChannelRecord)({
                    id: "1",
                    type: K.ChannelTypes.DM
                }),
                eg = "AUTOMATIC_RTC_REGION",
                eT = o.default.connectStores([b.default], () => {
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
                                type: a,
                                topic: l,
                                bitrate: s,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: d,
                                defaultThreadRateLimitPerUser: o,
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
                                type: a,
                                topic: l,
                                bitrate: s,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: d,
                                defaultThreadRateLimitPerUser: o,
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
            class eS extends s.PureComponent {
                componentDidMount() {
                    null == this.props.regions && null != this.props.guild && m.default.fetchRegions(this.props.guild.id)
                }
                componentDidUpdate(e) {
                    var t, a, l, s;
                    let n = null !== (l = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== l ? l : "";
                    (null !== (s = null === (a = e.channel) || void 0 === a ? void 0 : a.topic) && void 0 !== s ? s : "") !== n && n !== this.state.textTopicValue && this.setState({
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
                    return (0, z.getSecondsSliderLabel)(e * K.Durations.MINUTE, !0)
                }
                renderChannelInfo(e, t) {
                    var a, s, n, o, c, E;
                    let m, g;
                    let {
                        canManageChannels: T,
                        canSendMessages: S,
                        isThreadModerator: _,
                        canManageThread: M,
                        guild: I,
                        isForumPost: O,
                        isOwner: L
                    } = this.props, v = F.THREAD_CHANNEL_TYPES.has(e.type), D = e.isForumLikeChannel(), y = D && (null === (a = e.availableTags) || void 0 === a ? void 0 : a.every(e => e.moderated)), b = (null === (s = w.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) === !0, P = F.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: D ? et.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : et.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                            className: el.marginTop20,
                            children: D ? (0, l.jsx)(C.default, {
                                innerClassName: ea.forumGuidelines,
                                characterCountClassName: ea.forumGuidelinesCharacterCount,
                                maxCharacterCount: J.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
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
                            }) : (0, l.jsx)(h.TextArea, {
                                autoFocus: this.props.subsection === K.ChannelSettingsSubsections.TOPIC,
                                placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
                                value: x.default.translateSurrogatesToInlineEmoji(e.topic),
                                onChange: this.handleChangeTopic,
                                error: this.getError("topic"),
                                maxLength: J.MAX_CHANNEL_TOPIC_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, H = D && b ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
                            className: el.marginTop20,
                            children: (0, l.jsx)(h.TextArea, {
                                placeholder: et.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
                                value: x.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
                                onChange: this.handleChangeTemplate,
                                error: this.getError("template"),
                                maxLength: q.MAX_FORUM_TEMPLATE_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, U = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)(h.FormItem, {
                            children: [(0, l.jsx)(h.FormTitle, {
                                id: es,
                                className: ea.formTitle,
                                children: et.default.Messages.FORUM_TAGS
                            }), (0, l.jsx)(h.FormText, {
                                id: en,
                                type: h.FormText.Types.DESCRIPTION,
                                className: ea.description,
                                children: et.default.Messages.FORM_HELP_FORUM_TAGS
                            }), (0, l.jsx)(p.default, {
                                channel: e
                            })]
                        }), (0, l.jsx)(h.Checkbox, {
                            disabled: !T || y,
                            value: e.hasFlag(J.ChannelFlags.REQUIRE_TAG),
                            type: h.Checkbox.Types.INVERTED,
                            onChange: (e, t) => this.handleRequireTagChanged(t),
                            children: (0, l.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                children: et.default.Messages.FORUM_REQUIRE_TAG_NOTE
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, B = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: ea.twoColumnSettings,
                            children: [(0, l.jsxs)(h.FormItem, {
                                className: i(ea.settingsLeft, ea.settingsDefaultReaction),
                                children: [(0, l.jsx)(h.FormTitle, {
                                    id: ei,
                                    className: ea.formTitle,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION
                                }), (0, l.jsx)(h.FormText, {
                                    id: en,
                                    type: h.FormText.Types.DESCRIPTION,
                                    className: ea.description,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
                                }), (0, l.jsxs)("div", {
                                    className: ea.buttonRow,
                                    children: [(0, l.jsx)(h.Popout, {
                                        renderPopout: this.renderEmojiPicker,
                                        position: "right",
                                        animation: h.Popout.Animation.NONE,
                                        align: "center",
                                        children: e => (0, l.jsx)(h.Button, {
                                            ...e,
                                            disabled: !T,
                                            onClick: t => {
                                                var a;
                                                null === (a = e.onClick) || void 0 === a || a.call(e, t)
                                            },
                                            children: et.default.Messages.SELECT_EMOJI
                                        })
                                    }), null != e.defaultReactionEmoji ? (0, l.jsx)(h.Button, {
                                        className: ea.removeButton,
                                        onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                        size: h.Button.Sizes.MIN,
                                        look: h.Button.Looks.LINK,
                                        color: h.Button.Colors.RED,
                                        children: et.default.Messages.REMOVE
                                    }) : null]
                                })]
                            }), (0, l.jsx)(R.default, {
                                reactionEmoji: e.defaultReactionEmoji
                            })]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, G = e.isForumChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: ea.twoColumnSettings,
                            children: [(0, l.jsxs)(h.FormItem, {
                                className: i(ea.settingsLeft, ea.settingsDefaultView),
                                children: [(0, l.jsx)(h.FormSection, {
                                    title: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
                                    children: (0, l.jsx)(h.SingleSelect, {
                                        options: [{
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                                            value: r.ForumLayout.LIST
                                        }, {
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                                            value: r.ForumLayout.GRID
                                        }],
                                        value: null !== (o = e.defaultForumLayout) && void 0 !== o ? o : r.ForumLayout.LIST,
                                        onChange: this.handleChangeDefaultForumLayout
                                    })
                                }), (0, l.jsx)(h.FormText, {
                                    className: el.marginTop8,
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
                                })]
                            }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, l.jsx)(Q.default, {
                                className: ea.defaultImageView
                            }) : (0, l.jsx)(Z.default, {
                                className: ea.defaultImageView
                            })]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, k = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            children: (0, l.jsx)(h.FormSection, {
                                title: et.default.Messages.FORUM_DEFAULT_SORT_ORDER,
                                children: (0, l.jsx)(h.SingleSelect, {
                                    options: [{
                                        label: et.default.Messages.FORUM_SORT_ACTIVITY,
                                        value: d.ThreadSortOrder.LATEST_ACTIVITY
                                    }, {
                                        label: et.default.Messages.FORUM_SORT_CREATION,
                                        value: d.ThreadSortOrder.CREATION_DATE
                                    }],
                                    value: e.getDefaultSortOrder(),
                                    onChange: this.handleChangeDefaultSortOrder
                                })
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: et.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, W = v ? _ : T, z = F.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)(h.FormItem, {
                            children: [(0, l.jsx)(h.FormTitle, {
                                id: er,
                                className: el.marginBottom8,
                                children: et.default.Messages.FORM_LABEL_SLOWMODE
                            }), D ? (0, l.jsx)(h.FormTitle, {
                                className: el.marginTop20,
                                children: et.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
                            }) : null, (0, l.jsx)(h.Slider, {
                                className: el.marginTop20,
                                initialValue: e.rateLimitPerUser,
                                markers: K.SLOWMODE_VALUES,
                                stickToMarkers: !0,
                                onValueChange: this.handleChangeSlowmode,
                                onMarkerRender: this.getCooldownSliderMarker,
                                disabled: !W,
                                equidistant: !0,
                                "aria-labelledby": er,
                                "aria-describedby": ed
                            }), (0, l.jsx)(h.FormText, {
                                id: ed,
                                type: h.FormText.Types.DESCRIPTION,
                                children: D ? et.default.Messages.FORM_HELP_SLOWMODE_FORUM : v ? et.default.Messages.FORM_HELP_SLOWMODE_THREAD : et.default.Messages.FORM_HELP_SLOWMODE
                            }), D ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(h.FormTitle, {
                                    className: el.marginTop20,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
                                }), (0, l.jsx)(h.Slider, {
                                    className: el.marginTop20,
                                    initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
                                    markers: K.SLOWMODE_VALUES,
                                    stickToMarkers: !0,
                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                    onMarkerRender: this.getCooldownSliderMarker,
                                    disabled: !W,
                                    equidistant: !0,
                                    "aria-labelledby": er,
                                    "aria-describedby": ed
                                }), (0, l.jsx)(h.FormText, {
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
                                })]
                            }) : null]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, X = v && null != e.threadMetadata ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            children: (0, l.jsx)(f.default, {
                                page: K.AnalyticsPages.CHANNEL_SETTINGS,
                                children: (0, l.jsx)(j.default, {
                                    autoArchiveDuration: null !== (E = e.threadMetadata.autoArchiveDuration) && void 0 !== E ? E : ee.DEFAULT_AUTO_ARCHIVE_DURATION,
                                    guild: I,
                                    channel: e,
                                    onChange: this.handleAutoArchiveDurationChanged,
                                    isDisabled: !M
                                })
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: O ? et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, $ = e.type === K.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_THREAD_INVITABLE,
                            onChange: this.handleInvitableChanged,
                            value: e.threadMetadata.invitable,
                            hideBorder: !0,
                            disabled: !M,
                            children: et.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
                        })
                    }) : null, eo = F.NSFW_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NSFW,
                            onChange: this.handleNSFWChange,
                            value: e.isNSFW(),
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NSFW_CHANNEL
                        })
                    }) : null, eu = F.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != I && I.hasFeature(K.GuildFeatures.NEWS) && e.id !== (null == I ? void 0 : I.rulesChannelId) && e.id !== (null == I ? void 0 : I.publicUpdatesChannelId) ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NEWS.format({
                                documentationLink: Y.default.getArticleURL(K.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            }),
                            onChange: this.handleNewsChange,
                            value: e.type === K.ChannelTypes.GUILD_ANNOUNCEMENT,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NEWS_CHANNEL
                        })
                    }) : null, ec = F.THREADED_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsx)(f.default, {
                            page: K.AnalyticsPages.CHANNEL_SETTINGS,
                            children: (0, l.jsx)(j.default, {
                                autoArchiveDuration: (0, A.getAutoArchiveDuration)(e, null),
                                guild: I,
                                channel: e,
                                onChange: this.handleChangeDefaultAutoArchiveDuration,
                                isDisabled: !T
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: e.isForumLikeChannel() ? et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, eh = this.props.showChannelSummariesSettings ? (0, l.jsx)(h.FormSwitch, {
                        note: et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
                            helpdeskArticle: Y.default.getArticleURL(K.HelpdeskArticles.CONVERSATION_SUMMARIES)
                        }),
                        onChange: this.handleChannelSummariesToggled,
                        value: !e.hasFlag(J.ChannelFlags.SUMMARIES_DISABLED) && (null == I ? void 0 : I.hasFeature(K.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        hideBorder: !0,
                        disabled: !T || !(null == I ? void 0 : I.hasFeature(K.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        children: (0, l.jsxs)("div", {
                            className: ea.badgedItem,
                            children: [et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, l.jsx)(V.TextBadge, {
                                text: et.default.Messages.BETA,
                                color: u.default.unsafe_rawColors.BRAND_500.css,
                                className: ea.betaTag
                            })]
                        })
                    }) : null, eE = e.isMediaChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsx)(h.FormSwitch, {
                            onChange: this.handleShowMediaOptionsToggled,
                            value: !e.hasFlag(J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                            note: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
                        })]
                    }) : null;
                    return e.type === K.ChannelTypes.GUILD_CATEGORY ? (g = et.default.Messages.CATEGORY_NAME, m = "category-name") : e.isForumPost() ? (g = et.default.Messages.FORUM_POST_TITLE, m = "post-title") : v ? (g = et.default.Messages.THREAD_NAME, m = "thread-name") : (g = et.default.Messages.FORM_LABEL_CHANNEL_NAME, m = "channel-name"), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: g,
                            children: (0, l.jsx)(h.TextInput, {
                                value: t,
                                onChange: this.handleChangeName,
                                onBlur: this.handleBlurName,
                                error: this.getError("name"),
                                name: m,
                                autoFocus: !0,
                                disabled: L ? !S : !T,
                                maxLength: K.MAX_CHANNEL_NAME_LENGTH
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), P, H, U, B, z, X, G, k, $, eo, eu, eh, ec, eE]
                    })
                }
                renderHomeFlags(e) {
                    let {
                        canManageChannels: t
                    } = this.props;
                    if (!(0, O.canSeeGuildHome)(e.guild_id)) return null;
                    let a = K.ChannelTypesSets.GUILD_PARENTABLE.has(e.type) ? (0, l.jsx)("div", {
                            children: (0, l.jsx)(h.FormSwitch, {
                                note: et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
                                onChange: this.handleActiveChannelsRemovedChange,
                                value: !e.hasFlag(J.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, l.jsxs)("div", {
                                    className: ea.badgedItem,
                                    children: [et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL, (0, l.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: ea.betaTag
                                    })]
                                })
                            })
                        }) : null,
                        s = $.GUILD_FEED_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
                            children: (0, l.jsx)(h.FormSwitch, {
                                note: et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format({
                                    warningHook: (e, t) => (0, l.jsx)("span", {
                                        className: ea.warningText,
                                        children: e
                                    }, t)
                                }),
                                onChange: this.handleGuildFeedRemovedChange,
                                value: e.hasFlag(J.ChannelFlags.GUILD_FEED_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, l.jsxs)("div", {
                                    className: ea.badgedItem,
                                    children: [et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL, (0, l.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: ea.betaTag
                                    })]
                                })
                            })
                        }) : null;
                    return null == a && null == s ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsxs)(h.FormItem, {
                            title: et.default.Messages.GUILD_HOME,
                            children: [(0, l.jsx)(h.Text, {
                                className: el.marginBottom20,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: et.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format({
                                    helpCenterLink: Y.default.getArticleURL(K.HelpdeskArticles.GUILD_HOME)
                                })
                            }), a, s]
                        })]
                    })
                }
                renderBitrate(e) {
                    return "".concat(Math.round(e / 1e3), "kbps")
                }
                renderVoiceBitrate(e, t) {
                    let {
                        canManageChannels: a
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let s = (0, k.getBitrateLimit)(t, e),
                        n = this.getError("bitrate");
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormTitle, {
                            id: eo,
                            children: et.default.Messages.FORM_LABEL_BITRATE
                        }), "" !== n && (0, l.jsx)(h.FormText, {
                            id: eu,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: el.marginBottom8,
                            children: n
                        }), (0, l.jsx)(h.Slider, {
                            initialValue: Math.min(e.bitrate, s),
                            onValueChange: this.handleChangeBitrate,
                            onValueRender: this.renderBitrate,
                            onMarkerRender: this.renderBitrate,
                            markers: [K.BITRATE_MIN, K.BITRATE_DEFAULT, s],
                            minValue: K.BITRATE_MIN,
                            maxValue: s,
                            keyboardStep: K.BITRATE_STEP,
                            disabled: !a,
                            "aria-labelledby": eo,
                            "aria-describedby": null != n && "" !== n ? eu : ec
                        }), s > K.BITRATE_DEFAULT ? (0, l.jsx)(h.FormText, {
                            id: ec,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_BITRATE.format({
                                bitrate: K.BITRATE_DEFAULT / 1e3
                            })
                        }) : null]
                    })
                }
                showVoiceSettings() {
                    let {
                        channel: e
                    } = this.props;
                    return null != e && null != e.guild_id && F.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || L.VoiceInThreadsExperiment.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "9b50bd_1"
                    }).enabled)
                }
                renderVideoQualityMode(e) {
                    var t;
                    let {
                        canManageChannels: a
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let s = [{
                        value: K.VideoQualityMode.AUTO,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_AUTO
                    }, {
                        value: K.VideoQualityMode.FULL,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_FULL
                    }];
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_VIDEO_QUALITY,
                            children: (0, l.jsx)(h.RadioGroup, {
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return this.handleVideoQualityModeChange(t)
                                },
                                options: s,
                                value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : K.VideoQualityMode.AUTO,
                                disabled: !a
                            })
                        }), (0, l.jsx)(h.FormText, {
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
                    let a = this.getError("user_limit"),
                        s = e.isGuildStageVoice() ? K.MAX_STAGE_VOICE_USER_LIMIT : K.MAX_VOICE_USER_LIMIT;
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormTitle, {
                            id: eh,
                            children: et.default.Messages.FORM_LABEL_USER_LIMIT
                        }), "" !== a && (0, l.jsx)(h.FormText, {
                            id: eE,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: el.marginBottom8,
                            children: a
                        }), (0, l.jsx)(h.Slider, {
                            initialValue: Math.min(e.userLimit, s),
                            onValueChange: this.handleUserLimitChange,
                            onValueRender: this.onRenderUserLimit,
                            onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
                            markers: [0, s],
                            minValue: 0,
                            maxValue: s,
                            disabled: !t,
                            "aria-labelledby": eh,
                            "aria-describedby": null != a && "" !== a ? eE : em
                        }), (0, l.jsx)(h.FormText, {
                            id: em,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: (e.isGuildStageVoice() ? et.default.Messages.FORM_HELP_USER_LIMIT_STAGE : et.default.Messages.FORM_HELP_USER_LIMIT).format()
                        })]
                    })
                }
                renderRegionOverride(e) {
                    var t;
                    let {
                        regions: a,
                        canManageChannels: s,
                        guild: n
                    } = this.props;
                    if (null == n || !this.showVoiceSettings()) return null;
                    let i = [];
                    if (null != a) {
                        let e = a.filter(e => !e.deprecated && !e.hidden);
                        (i = e.map(e => ({
                            label: e.name,
                            value: e.id
                        }))).unshift({
                            label: et.default.Messages.AUTOMATIC_REGION,
                            value: eg
                        })
                    }
                    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eg;
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        children: [(0, l.jsx)(h.FormTitle, {
                            children: et.default.Messages.FORM_LABEL_REGION_OVERRIDE
                        }), (0, l.jsx)(h.SingleSelect, {
                            options: i,
                            value: r,
                            onChange: this.handleRegionChange,
                            isDisabled: !s
                        }), (0, l.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_REGION_OVERRIDE
                        })]
                    })
                }
                renderJuiceImage(e) {
                    let t;
                    let {
                        theme: s
                    } = this.props;
                    return t = e.type === K.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(s) ? a("23141") : a("182418") : (0, c.isThemeDark)(s) ? a("34705") : a("164370"), (0, l.jsx)(B.default, {
                        justify: B.default.Justify.CENTER,
                        className: el.marginTop60,
                        children: (0, l.jsx)("img", {
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
                        guild: a
                    } = this.props;
                    return null == e || null == t || null == a ? null : (0, l.jsxs)(h.FormSection, {
                        className: "channel-settings-overview",
                        tag: h.FormTitleTags.H1,
                        title: et.default.Messages.OVERVIEW,
                        children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }) : null, this.renderVoiceBitrate(e, a), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderHomeFlags(e), this.renderJuiceImage(e)]
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
                    var t, s;
                    super(e), this.renderEmojiPicker = e => {
                        let {
                            closePopout: t
                        } = e, {
                            channel: a
                        } = this.props;
                        return (0, l.jsx)(M.default, {
                            guildId: null == a ? void 0 : a.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, a) => {
                                this.handleChangeDefaultReactionEmoji(e), a && t()
                            },
                            pickerIntention: X.EmojiIntention.COMMUNITY_CONTENT,
                            channel: a
                        })
                    }, this.handleRequireTagChanged = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let a = (0, W.setFlag)(t.flags, J.ChannelFlags.REQUIRE_TAG, e);
                        (0, E.updateChannel)({
                            flags: a
                        })
                    }, this.handleChangeName = e => {
                        let {
                            channel: t
                        } = this.props;
                        null != t && (t.isThread() ? e = (0, v.default)(e, !1) : (0, F.isGuildTextChannelType)(t.type) && (e = (0, k.sanitizeGuildTextChannelName)(e)), (0, E.updateChannel)({
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
                            topic: x.default.translateInlineEmojiToSurrogates(e)
                        })
                    }, this.handleChangeRichTopic = (e, t, a) => {
                        this.setState({
                            textTopicValue: t,
                            richTopicValue: a
                        }), this.handleChangeTopic(t)
                    }, this.handleChangeTemplate = e => {
                        (0, E.updateChannel)({
                            template: x.default.translateInlineEmojiToSurrogates(e)
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
                            let e = (0, W.setFlag)(t.flags, J.ChannelFlags.GUILD_FEED_REMOVED, !1);
                            (0, E.updateChannel)({
                                flags: e
                            });
                            return
                        }(0, h.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("360476").then(a.bind(a, "360476"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                channelId: t.id,
                                onSubmit: () => {
                                    let e = (0, W.setFlag)(t.flags, J.ChannelFlags.GUILD_FEED_REMOVED, !0);
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
                        let a = (0, W.setFlag)(t.flags, J.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
                        (0, E.updateChannel)({
                            flags: a
                        })
                    }, this.handleNewsChange = e => {
                        (0, E.updateChannel)({
                            type: e ? K.ChannelTypes.GUILD_ANNOUNCEMENT : K.ChannelTypes.GUILD_TEXT
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
                        let a = (0, W.setFlag)(t.flags, J.ChannelFlags.SUMMARIES_DISABLED, !e);
                        (0, E.updateChannel)({
                            flags: a
                        })
                    }, this.handleShowMediaOptionsToggled = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let a = (0, W.setFlag)(t.flags, J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                        (0, E.updateChannel)({
                            flags: a
                        })
                    };
                    let n = null !== (s = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== s ? s : "";
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
                    channel: a,
                    submitting: n,
                    subsection: i
                } = (0, o.useStateFromStoresObject)([b.default], () => b.default.getProps()), r = (0, o.useStateFromStores)([U.default], () => U.default.getRegions(null !== (e = null == a ? void 0 : a.getGuildId()) && void 0 !== e ? e : null)), d = (0, o.useStateFromStores)([D.default], () => D.default.theme), u = (0, o.useStateFromStores)([P.default], () => P.default.getGuild(null == a ? void 0 : a.getGuildId())), c = (0, L.useCanManageThread)(a), h = (0, L.useIsThreadModerator)(a), {
                    canManageChannels: E,
                    canSendMessages: m
                } = (0, o.useStateFromStoresObject)([H.default], () => ({
                    canManageChannels: H.default.can(K.Permissions.MANAGE_CHANNELS, a),
                    canSendMessages: H.default.can(K.Permissions.SEND_MESSAGES, a)
                })), f = (0, S.default)(a), g = y.default.getId(), N = (0, I.useForumChannelStoreApi)(), _ = null == a ? void 0 : a.id, C = (0, T.useChannelSummariesExperiment)(a, !1, !0), M = s.useCallback(e => {
                    null != _ && N.getState().setLayoutType(_, e)
                }, [_, N]);
                return (0, l.jsx)(eS, {
                    errors: t,
                    channel: a,
                    channelName: f,
                    submitting: n,
                    regions: r,
                    theme: d,
                    guild: u,
                    canManageChannels: (null == a ? void 0 : a.isThread()) ? c : E,
                    canSendMessages: m,
                    isThreadModerator: h,
                    canManageThread: c,
                    subsection: i,
                    isForumPost: null != a && a.isForumPost(),
                    isOwner: null == a ? void 0 : a.isOwner(g),
                    handleSetDefaultLayout: M,
                    showChannelSummariesSettings: C
                })
            }
        },
        173446: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ChannelSettingsPermissionsNotice: function() {
                    return G
                },
                default: function() {
                    return Q
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("917351"),
                i = a.n(n),
                r = a("316693"),
                d = a("446674"),
                o = a("819855"),
                u = a("77078"),
                c = a("404118"),
                h = a("450911"),
                E = a("318738"),
                m = a("881888"),
                f = a("900676"),
                g = a("45299"),
                T = a("798609"),
                S = a("841098"),
                N = a("206230"),
                _ = a("923510"),
                C = a("766274"),
                M = a("901998"),
                x = a("492114"),
                I = a("26989"),
                p = a("305961"),
                R = a("957255"),
                O = a("697218"),
                A = a("669021"),
                L = a("730988"),
                v = a("449008"),
                j = a("651879"),
                D = a("701909"),
                F = a("387111"),
                y = a("465305"),
                b = a("991170"),
                P = a("158998"),
                H = a("51944"),
                U = a("49111"),
                w = a("782340"),
                B = a("896888");
            let G = d.default.connectStores([M.default, x.default], () => {
                let e = x.default.getChannel(),
                    t = M.default.formState;
                return {
                    submitting: t === U.FormStates.SUBMITTING,
                    onReset() {
                        (0, E.init)()
                    },
                    onSave() {
                        if (null == e) return;
                        let t = M.default.editedPermissionIds.reduce((e, t) => {
                            let a = M.default.getPermissionOverwrite(t);
                            return null != a && e.push(a), e
                        }, []);
                        (0, E.savePermissionUpdates)(e.id, t)
                    }
                }
            })(g.default);

            function V(e) {
                let {
                    overwrite: t
                } = e, a = (0, d.useStateFromStores)([M.default], () => M.default.channel), s = (0, d.useStateFromStores)([p.default], () => null != a ? p.default.getGuild(a.getGuildId()) : null);
                if (null == a || null == s || null == t) return null;
                let {
                    guild_id: n,
                    id: i
                } = a, {
                    id: o
                } = t, m = () => {
                    var e;
                    let t = p.default.getGuild(n);
                    if (null == t) return "";
                    let a = t.getRole(o),
                        l = O.default.getUser(o),
                        s = null !== (e = null == l ? void 0 : l.username) && void 0 !== e ? e : "";
                    return null != a ? a.name : s
                }, g = (e, l) => {
                    if ("boolean" == typeof l) throw Error("Unexpected boolean action");
                    let {
                        allow: s,
                        deny: n
                    } = t;
                    switch (n = r.default.remove(n, e), s = r.default.remove(s, e), l) {
                        case "ALLOW":
                            s = r.default.add(s, e);
                            break;
                        case "DENY":
                            n = r.default.add(n, e)
                    }
                    if (R.default.can(e, a, {
                            [o]: {
                                ...t,
                                allow: s,
                                deny: n
                            }
                        }))(0, E.updatePermission)(a, o, s, n);
                    else {
                        let e;
                        if (t.type === T.PermissionOverwriteType.MEMBER) {
                            let a = O.default.getUser(t.id);
                            null != a && (e = P.default.getName(a))
                        } else if (t.type === T.PermissionOverwriteType.ROLE) {
                            let l = p.default.getGuild(a.getGuildId());
                            if (null != l) {
                                let a = l.getRole(t.id);
                                null != a && (e = a.name)
                            }
                        }
                        H.showPermissionLockoutModal(e)
                    }
                }, S = () => {
                    let e = m();
                    c.default.show({
                        title: w.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                        body: w.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                            name: e
                        }),
                        cancelText: w.default.Messages.CANCEL,
                        onConfirm: () => h.default.clearPermissionOverwrite(i, o)
                    })
                }, N = e => {
                    let t = R.default.can(U.Permissions.ADMINISTRATOR, s) || R.default.can(U.Permissions.MANAGE_ROLES, a, void 0, void 0, !0);
                    return a.isGuildStageVoice() && _.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e) ? w.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.default.equals(e, U.Permissions.MANAGE_ROLES) || t) && (null == e || R.default.can(e, s) || t)) && w.default.Messages.HELP_MISSING_PERMISSION
                }, C = o === n, x = a.isForumLikeChannel() && r.default.has(t.deny, U.Permissions.SEND_MESSAGES), I = r.default.has(t.deny, U.Permissions.SEND_MESSAGES), A = r.default.has(t.deny, U.Permissions.READ_MESSAGE_HISTORY), v = y.default.generateChannelPermissionSpec(n, a, C, {
                    createPostsDisabled: x,
                    sendMessagesDisabled: I,
                    readMessageHistoryDisabled: A
                });
                return (0, l.jsxs)(L.default.Content, {
                    className: B.layoutStyle,
                    children: [v.map((e, a) => (0, l.jsx)(f.default, {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: g,
                        permissionRender: N,
                        className: B.permissionsForm
                    }, a)), n === o ? null : (0, l.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.RED,
                        onClick: S,
                        children: w.default.Messages.REMOVE_ROLE_OR_USER.format({
                            name: m()
                        })
                    })]
                })
            }

            function k(e) {
                let {
                    guildId: t,
                    channelId: a,
                    user: s
                } = e, n = s.getAvatarURL(t, 32), i = F.default.getNickname(t, a, s), r = P.default.useUserTag(s), d = null, o = null;
                return d = null != i ? i : s.hasAvatarForGuild(t) ? s.username : r, (null != i || s.hasAvatarForGuild(t)) && (o = (0, l.jsxs)("div", {
                    className: B.userRowSubText,
                    children: [s.hasAvatarForGuild(t) ? (0, l.jsx)(u.Avatar, {
                        className: B.userRowSubAvatar,
                        size: u.AvatarSizes.SIZE_16,
                        src: s.getAvatarURL(void 0, 16),
                        "aria-label": s.username
                    }) : null, (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r
                    })]
                })), (0, l.jsxs)("div", {
                    className: B.inline,
                    children: [(0, l.jsx)(u.Avatar, {
                        size: u.AvatarSizes.SIZE_32,
                        src: n,
                        "aria-label": s.username,
                        className: B.userRowAvatar
                    }), (0, l.jsxs)("div", {
                        className: B.userRowText,
                        children: [(0, l.jsx)(u.Text, {
                            className: B.userRowText,
                            variant: "text-md/normal",
                            children: d
                        }), o]
                    })]
                })
            }

            function W(e) {
                return "object" == typeof e && null != e && "colorString" in e && "name" in e
            }

            function Y(e) {
                let {
                    guild: t,
                    channel: a,
                    permissionOverwrites: s,
                    onClose: n,
                    onSelect: r,
                    position: o
                } = e, u = (0, d.useStateFromStores)([I.default], () => I.default.getMemberIds(t.id));
                return (0, l.jsx)(A.default, {
                    label: w.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
                    placeholder: w.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
                    "aria-label": w.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
                    sections: [w.default.Messages.ROLES, w.default.Messages.MEMBERS],
                    onRenderResult: e => {
                        if (W(e)) {
                            let t;
                            return null != e.colorString && (t = {
                                color: e.colorString
                            }), (0, l.jsx)("span", {
                                style: t,
                                children: e.name
                            })
                        }
                        if (e instanceof C.default) return (0, l.jsx)(k, {
                            guildId: t.id,
                            channelId: a.id,
                            user: e
                        })
                    },
                    onFilterResults: (e, a) => 0 === a ? i(t.roles).filter(t => null == s[t.id] && e(t.name)).sortBy(e => -e.position).value() : i(u).map(O.default.getUser).filter(v.isNotNullish).filter(e => !e.isClyde()).filter(t => null == s[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
                    onQueryChange: e => {
                        j.default.requestMembers(t.id, e, 20)
                    },
                    onSelect: e => {
                        null != e && (W(e) ? r(e.id, T.PermissionOverwriteType.ROLE) : e instanceof C.default && r(e.id, T.PermissionOverwriteType.MEMBER))
                    },
                    onClose: n,
                    position: o
                })
            }

            function z() {
                let {
                    channel: e,
                    permissionOverwrites: t,
                    selectedOverwriteId: n
                } = (0, d.useStateFromStoresObject)([M.default], () => M.default), r = (0, d.useStateFromStores)([p.default], () => null != e ? p.default.getGuild(e.getGuildId()) : null), c = (0, S.default)(), f = (0, d.useStateFromStores)([N.default], () => N.default.roleStyle);
                if (null == r || null == e || null == t) return null;
                let g = a => {
                        let {
                            position: s,
                            closePopout: n
                        } = a;
                        return (0, l.jsx)(Y, {
                            guild: r,
                            channel: e,
                            permissionOverwrites: t,
                            position: null != s ? s : "bottom",
                            onSelect: _,
                            onClose: n
                        })
                    },
                    _ = (t, a) => {
                        h.default.updatePermissionOverwrite(e.id, {
                            id: t,
                            type: a,
                            allow: b.default.NONE,
                            deny: b.default.NONE
                        }).then(() => (0, E.selectPermission)(t))
                    };
                null != t && null == t[r.id] && (t[r.id] = b.default.makeEveryoneOverwrite(r.id));
                let C = i(t).filter(e => e.type === T.PermissionOverwriteType.ROLE).map(e => r.getRole(e.id)).filter(v.isNotNullish).sortBy(e => -e.position).map(e => (0, l.jsx)(m.default, {
                        theme: c,
                        roleStyle: f,
                        id: e.id,
                        role: e,
                        guild: r,
                        color: e.colorString,
                        "aria-label": e.name,
                        children: e.name
                    }, "".concat(n, "-").concat(e.id))).value(),
                    x = i(t).filter(e => e.type === T.PermissionOverwriteType.MEMBER).map(e => O.default.getUser(e.id)).filter(v.isNotNullish).sortBy(e => e.username.toLowerCase()).map(e => {
                        let t = e.getAvatarURL(r.id, 24);
                        return (0, l.jsx)(m.default, {
                            id: e.id,
                            guild: r,
                            theme: c,
                            roleStyle: f,
                            "aria-label": P.default.getUserTag(e, {
                                decoration: "never"
                            }),
                            children: (0, l.jsxs)("div", {
                                className: B.inline,
                                children: [(0, l.jsx)(u.Avatar, {
                                    size: u.AvatarSizes.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: B.xsmallAvatar
                                }), (0, l.jsx)("span", {
                                    className: B.username,
                                    children: P.default.getUserTag(e)
                                })]
                            })
                        }, "".concat(n, "-").concat(e.id))
                    }).value();
                return (0, l.jsx)(L.default.Sidebar, {
                    className: B.layoutStyle,
                    scrollable: !0,
                    children: (0, l.jsxs)(u.TabBar, {
                        onItemSelect: E.selectPermission,
                        selectedItem: n,
                        orientation: "vertical",
                        children: [(() => {
                            let e = (0, o.isThemeDark)(c) ? a("706832") : a("623264");
                            return (0, l.jsx)(u.Popout, {
                                renderPopout: g,
                                position: "bottom",
                                autoInvert: !1,
                                children: t => (0, l.jsx)(u.TabBar.Header, {
                                    ...t,
                                    children: (0, l.jsxs)("div", {
                                        className: B.sidebarHeaderDefault,
                                        children: [(0, l.jsxs)("span", {
                                            children: [w.default.Messages.ROLES, "/", w.default.Messages.MEMBERS]
                                        }), (0, l.jsx)("img", {
                                            alt: "",
                                            className: B.sidebarHeader,
                                            src: e
                                        })]
                                    })
                                })
                            })
                        })(), C, x, (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)(u.TabBar.Separator, {
                                style: {
                                    marginTop: 20,
                                    marginBottom: 14
                                }
                            }), (0, l.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                children: (0, l.jsx)(u.Anchor, {
                                    href: D.default.getArticleURL(U.HelpdeskArticles.PERMISSIONS_TUTORIAL),
                                    target: "_blank",
                                    children: w.default.Messages.PERMISSION_HELPDESK
                                })
                            })]
                        })]
                    })
                })
            }

            function Q() {
                let {
                    channel: e,
                    permissionOverwrites: t,
                    selectedOverwriteId: a
                } = (0, d.useStateFromStoresObject)([M.default], () => M.default), s = (0, d.useStateFromStores)([p.default], () => null != e ? p.default.getGuild(e.getGuildId()) : null);
                if (null == s || null == e || null == t || null == a) return null;
                let n = t[a];
                return (0, l.jsxs)(L.default, {
                    className: B.container,
                    children: [(0, l.jsx)(z, {}), (0, l.jsx)(V, {
                        overwrite: n
                    })]
                })
            }
        },
        792861: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("75196");

            function n(e) {
                let {
                    color: t = "currentColor",
                    foreground: a,
                    backgroundColor: n = "none",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: "272",
                    height: "143",
                    viewBox: "0 0 272 143",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("rect", {
                        className: a,
                        width: "130",
                        height: "143",
                        rx: "12",
                        fill: n
                    }), (0, l.jsx)("path", {
                        className: a,
                        opacity: "0.5",
                        d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
                        fill: t
                    }), (0, l.jsx)("path", {
                        className: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
                        fill: "#C4C4C4"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "99",
                        width: "106",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "123",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("circle", {
                        className: a,
                        opacity: "0.5",
                        cx: "54",
                        cy: "127",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "64",
                        y: "123",
                        width: "54",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        x: "0.5",
                        y: "0.5",
                        width: "129",
                        height: "142",
                        rx: "11.5",
                        stroke: t,
                        strokeOpacity: "0.3"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        x: "142",
                        width: "130",
                        height: "143",
                        rx: "12",
                        fill: n
                    }), (0, l.jsx)("path", {
                        className: a,
                        opacity: "0.5",
                        d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
                        fill: t
                    }), (0, l.jsx)("path", {
                        className: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
                        fill: "#C4C4C4"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "154",
                        y: "99",
                        width: "106",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "154",
                        y: "123",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("circle", {
                        className: a,
                        opacity: "0.5",
                        cx: "196",
                        cy: "127",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "206",
                        y: "123",
                        width: "54",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
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
        370216: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("75196");

            function n(e) {
                let {
                    color: t = "currentColor",
                    foreground: a,
                    backgroundColor: n = "none",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: "272",
                    height: "143",
                    viewBox: "0 0 272 143",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("rect", {
                        className: a,
                        y: "15.5",
                        width: "272",
                        height: "112",
                        rx: "12",
                        fill: n
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "27.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "43.5",
                        width: "96",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "67.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "83.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "196",
                        y: "27.5",
                        width: "64",
                        height: "64",
                        rx: "8",
                        fill: t
                    }), (0, l.jsx)("path", {
                        className: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
                        fill: "#C4C4C4"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "12",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("circle", {
                        className: a,
                        opacity: "0.5",
                        cx: "54",
                        cy: "111.5",
                        r: "2",
                        fill: t,
                        fillOpacity: "0.48"
                    }), (0, l.jsx)("rect", {
                        className: a,
                        opacity: "0.5",
                        x: "64",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: t
                    }), (0, l.jsx)("rect", {
                        className: a,
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
        630473: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("446674"),
                d = a("669491"),
                o = a("77078"),
                u = a("18054"),
                c = a("69678"),
                h = a("372283"),
                E = a("957255"),
                m = a("151185"),
                f = a("90625"),
                g = a("953371"),
                T = a("49111"),
                S = a("782340"),
                N = a("730324");

            function _(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.can(T.Permissions.MANAGE_CHANNELS, t), [t]), c = t.availableTags.length >= g.MAX_FORUM_TAGS, f = t.availableTags.length > 0, _ = s.useCallback(() => {
                    let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
                    n && !e && (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("987034").then(a.bind(a, "987034"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            channelId: t.id,
                            guildId: t.guild_id
                        })
                    })
                }, [t, n]), M = s.useCallback(e => {
                    n && (0, o.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await a.el("987034").then(a.bind(a, "987034"));
                        return a => (0, l.jsx)(s, {
                            ...a,
                            channelId: t.id,
                            guildId: t.guild_id,
                            tag: e
                        })
                    })
                }, [n, t]), {
                    handleDragStart: x,
                    handleDragReset: I,
                    handleDragComplete: p
                } = (0, h.default)(t.availableTags, e => {
                    (0, u.updateChannel)({
                        availableTags: e
                    })
                });
                return (0, l.jsxs)("div", {
                    className: N.tags,
                    children: [f ? t.availableTags.map(e => (0, l.jsx)(C, {
                        tag: e,
                        availableTags: t.availableTags,
                        canManageChannels: n,
                        onTagClick: M,
                        onDragComplete: p,
                        onDragReset: I,
                        onDragStart: x
                    }, e.id)) : null, f ? (0, l.jsx)(o.Clickable, {
                        onClick: _,
                        className: i(N.addTags, {
                            [N.disabled]: !n || c
                        }),
                        children: (0, l.jsx)(m.default, {
                            "aria-label": S.default.Messages.FORUM_TAG_CREATE,
                            color: d.default.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20
                        })
                    }) : (0, l.jsx)(o.Button, {
                        disabled: !n,
                        onClick: _,
                        children: S.default.Messages.FORUM_TAG_CREATE
                    })]
                })
            }

            function C(e) {
                let {
                    tag: t,
                    availableTags: a,
                    canManageChannels: s,
                    onTagClick: n,
                    onDragComplete: r,
                    onDragStart: d,
                    onDragReset: o
                } = e, u = a.findIndex(e => e.id === t.id), {
                    drag: h,
                    dragSourcePosition: E,
                    drop: m,
                    setIsDraggable: g
                } = (0, c.default)({
                    type: "CHANNEL_SETTINGS_FORUM_TAGS",
                    index: u,
                    optionId: t.id,
                    onDragStart: d,
                    onDragComplete: r,
                    onDragReset: o
                });
                return (0, l.jsx)("div", {
                    className: i(N.container, {
                        [N.dropIndicatorBefore]: null != E && u < E,
                        [N.dropIndicatorAfter]: null != E && u > E
                    }),
                    ref: e => h(m(e)),
                    onMouseEnter: () => g(s),
                    onMouseLeave: () => g(!1),
                    children: (0, l.jsx)(f.default, {
                        tag: t,
                        disabled: !s,
                        ariaLabel: S.default.Messages.FORUM_TAG_EDIT_LABEL.format({
                            name: t.name
                        }),
                        onClick: s ? () => n(t) : void 0
                    })
                })
            }
        },
        20105: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("446674"),
                n = a("77078"),
                i = a("430568"),
                r = a("385976"),
                d = a("79945"),
                o = a("779371");

            function u(e) {
                let {
                    reactionEmoji: t
                } = e, a = (0, s.useStateFromStores)([r.default], () => (null == t ? void 0 : t.emojiId) != null ? r.default.getUsableCustomEmojiById(t.emojiId) : null);
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsxs)("div", {
                        className: o.body,
                        children: [(0, l.jsxs)("div", {
                            className: o.placeholderLines,
                            children: [(0, l.jsx)(c, {
                                width: "100%",
                                marginBottom: 8
                            }), (0, l.jsx)(c, {
                                width: "80%",
                                marginBottom: 16
                            }), (0, l.jsx)(c, {
                                width: "50%",
                                marginBottom: 8
                            }), (0, l.jsx)(c, {
                                width: "60%",
                                marginBottom: 16
                            })]
                        }), (0, l.jsx)("div", {
                            className: o.placeholderMedia
                        })]
                    }), (0, l.jsxs)("div", {
                        className: o.footer,
                        children: [(0, l.jsxs)("div", {
                            className: o.reaction,
                            children: [null != t ? (0, l.jsx)(i.default, {
                                className: o.reactionEmote,
                                emojiId: t.emojiId,
                                emojiName: t.emojiName,
                                animated: !!(null == a ? void 0 : a.animated)
                            }) : (0, l.jsx)(d.default, {
                                className: o.reactionEmote
                            }), (0, l.jsx)(n.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: 17
                            })]
                        }), (0, l.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        }), (0, l.jsx)("div", {
                            className: o.dot
                        }), (0, l.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    width: t,
                    marginBottom: a
                } = e;
                return (0, l.jsx)("div", {
                    className: o.placeholderLine,
                    style: {
                        width: t,
                        marginBottom: a
                    }
                })
            }
        },
        735251: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("884691"),
                s = a("316693"),
                n = a("828674"),
                i = a("866595"),
                r = a("795228"),
                d = a("49111");

            function o(e, t) {
                let a = (0, r.default)(null == e ? void 0 : e.id);
                return l.useMemo(() => {
                    let l = null != e ? function(e, t) {
                            let a = new Set;
                            for (let l of Object.keys(t.permissionOverwrites)) {
                                let s = e.roles[l],
                                    r = t.permissionOverwrites[l];
                                (0, n.isSubscriptionRole)(s) && (0, i.isChannelAccessGrantedBy)(t, r) && a.add(s)
                            }
                            let l = e.getRole(e.id),
                                r = null != l && !s.default.has(l.permissions, d.Permissions.VIEW_CHANNEL),
                                o = (0, i.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (r && !o)
                                for (let t of Object.values(e.roles))(0, n.isSubscriptionRole)(t) && (0, i.isAllChannelsRole)(t) && a.add(t);
                            return [...a]
                        }(e, t) : [],
                        r = 0;
                    for (let e of l) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == a ? void 0 : a[t];
                            null != e && (r += e)
                        }
                    }
                    return r
                }, [a, e, t])
            }
        },
        980480: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("77078"),
                r = a("252862"),
                d = a("782340"),
                o = a("952228"),
                u = e => {
                    let {
                        autoArchiveDuration: t,
                        onChange: a,
                        isDisabled: s
                    } = e, u = (0, r.getAutoArchiveOptions)(), c = (e, t) => (0, l.jsx)("span", {
                        className: n(o.optionLabel, {
                            [o.dropdownOption]: t
                        }),
                        children: e.label
                    });
                    return (0, l.jsx)(i.FormSection, {
                        title: d.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
                        className: o.formSection,
                        children: (0, l.jsx)(i.SingleSelect, {
                            isDisabled: s,
                            options: u,
                            value: t,
                            maxVisibleItems: u.length,
                            onChange: a,
                            optionClassName: o.dropdownOption,
                            renderOptionLabel: e => c(e, !0),
                            renderOptionValue: e => {
                                let [t] = e;
                                return c(t, !1)
                            }
                        })
                    })
                }
        },
        686069: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getSecondsSliderLabel: function() {
                    return i
                }
            });
            var l = a("866227"),
                s = a.n(l),
                n = a("782340");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default.Messages.FORM_LABEL_OFF,
                    l = s.duration(e, "seconds");
                if (l.days() > 0) return (t ? n.default.Messages.DURATION_DAYS_SHORT : n.default.Messages.DURATION_DAYS).format({
                    days: l.days()
                });
                if (l.hours() > 0) return (t ? n.default.Messages.DURATION_HOURS_SHORT : n.default.Messages.DURATION_HOURS).format({
                    hours: l.hours()
                });
                if (l.minutes() > 0) return (t ? n.default.Messages.DURATION_MINUTES_SHORT : n.default.Messages.DURATION_MINUTES).format({
                    minutes: l.minutes()
                });
                else if (e > 0) return (t ? n.default.Messages.DURATION_SECONDS_SHORT : n.default.Messages.DURATION_SECONDS).format({
                    seconds: l.seconds()
                });
                else return t ? n.default.Messages.FORM_LABEL_OFF : a
            }
        }
    }
]);