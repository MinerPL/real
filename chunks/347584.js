            "use strict";
            s.r(t), s.d(t, {
                AuditLogIcon: function() {
                    return b
                },
                default: function() {
                    return H
                }
            }), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("866227"),
                u = s.n(d),
                c = s("974667"),
                E = s("35092"),
                _ = s("819855"),
                T = s("77078"),
                I = s("430568"),
                S = s("376556"),
                N = s("679653"),
                g = s("90625"),
                f = s("506885"),
                A = s("981601"),
                L = s("161778"),
                m = s("42203"),
                C = s("27618"),
                O = s("697218"),
                h = s("461380"),
                R = s("987663"),
                D = s("404008"),
                M = s("449008"),
                G = s("159885"),
                x = s("158998"),
                p = s("523096"),
                U = s("49111"),
                v = s("782340"),
                j = s("254984");

            function P(e, t) {
                let s = R.NotRenderedChanges[e.targetType];
                return null != s && !0 === s[t.key]
            }
            let y = {
                [U.AuditLogActionTypes.CREATE]: j.typeCreate,
                [U.AuditLogActionTypes.UPDATE]: j.typeUpdate,
                [U.AuditLogActionTypes.DELETE]: j.typeDelete
            };
            class b extends n.PureComponent {
                render() {
                    var e, t;
                    let {
                        actionType: s,
                        targetType: n,
                        action: l,
                        themeOverride: r
                    } = this.props, o = null != r ? j["themeOverride".concat((0, G.upperCaseFirstChar)(r))] : null;
                    let d = i(j.icon, y[s], (e = n, (t = l) === U.AuditLogActions.MESSAGE_DELETE ? j.targetMessage : t === U.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === U.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === U.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === U.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? j.autoModerationBlockMessage : ({
                        [U.AuditLogTargetTypes.ALL]: j.targetAll,
                        [U.AuditLogTargetTypes.GUILD]: j.targetGuild,
                        [U.AuditLogTargetTypes.CHANNEL]: j.targetChannel,
                        [U.AuditLogTargetTypes.CHANNEL_OVERWRITE]: j.targetChannel,
                        [U.AuditLogTargetTypes.USER]: j.targetMember,
                        [U.AuditLogTargetTypes.ROLE]: j.targetRole,
                        [U.AuditLogTargetTypes.ONBOARDING_PROMPT]: j.targetOnboarding,
                        [U.AuditLogTargetTypes.GUILD_ONBOARDING]: j.targetOnboarding,
                        [U.AuditLogTargetTypes.HOME_SETTINGS]: j.targetOnboarding,
                        [U.AuditLogTargetTypes.INTEGRATION]: j.targetIntegration,
                        [U.AuditLogTargetTypes.INVITE]: j.targetInvite,
                        [U.AuditLogTargetTypes.WEBHOOK]: j.targetWebhook,
                        [U.AuditLogTargetTypes.EMOJI]: j.targetEmoji,
                        [U.AuditLogTargetTypes.STICKER]: j.targetSticker,
                        [U.AuditLogTargetTypes.STAGE_INSTANCE]: j.targetStageInstance,
                        [U.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: j.targetGuildScheduledEvent,
                        [U.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: j.targetGuildScheduledEvent,
                        [U.AuditLogTargetTypes.THREAD]: j.thread,
                        [U.AuditLogTargetTypes.APPLICATION_COMMAND]: j.applicationCommand,
                        [U.AuditLogTargetTypes.AUTO_MODERATION_RULE]: j.autoModerationRule,
                        [U.AuditLogTargetTypes.GUILD_HOME]: j.targetGuildHome,
                        [U.AuditLogTargetTypes.GUILD_SOUNDBOARD]: j.targetGuildSoundboard,
                        [U.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: j.targetChannel,
                        [U.AuditLogTargetTypes.CLYDE_AI]: j.targetMember
                    })[e]), o);
                    return (0, a.jsx)("div", {
                        className: d
                    })
                }
            }
            class B extends n.PureComponent {
                render() {
                    let {
                        user: e,
                        onContextMenu: t
                    } = this.props;
                    return (0, a.jsxs)("span", {
                        onContextMenu: t,
                        className: j.userHook,
                        children: [(0, a.jsx)(T.Text, {
                            variant: "text-md/normal",
                            children: x.default.getUserTag(e, {
                                mode: "username"
                            })
                        }), "0" !== e.discriminator && (0, a.jsxs)(T.Text, {
                            variant: "text-xs/normal",
                            className: j.discrim,
                            children: ["#", e.discriminator]
                        })]
                    })
                }
            }
            class F extends n.PureComponent {
                hasChangesToRender() {
                    let {
                        log: e
                    } = this.props, {
                        changes: t
                    } = e;
                    return (e.actionType !== U.AuditLogActionTypes.DELETE || e.action === U.AuditLogActions.MEMBER_BAN_ADD || e.action === U.AuditLogActions.MEMBER_KICK || e.action === U.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !P(e, t))
                }
                getActionTypeColor(e) {
                    switch (e) {
                        case U.AuditLogActionTypes.CREATE:
                            return "text-positive";
                        case U.AuditLogActionTypes.DELETE:
                            return "status-danger";
                        default:
                            return "text-warning"
                    }
                }
                renderTitle() {
                    let {
                        log: e,
                        onUserContextMenu: t,
                        onTargetContextMenu: s,
                        onChannelContextMenu: n
                    } = this.props, {
                        user: l,
                        target: i,
                        options: r
                    } = e, o = R.getChangeTitle(e);
                    return null != o ? (0, a.jsx)("div", {
                        className: j.overflowEllipsis,
                        children: o.format({
                            user: l,
                            target: i,
                            userHook: (s, n) => {
                                if (null != e.user) return (0, a.jsx)(B, {
                                    user: e.user,
                                    onContextMenu: t
                                }, n);
                                if (null != e.options.integration_type) {
                                    var l;
                                    let t = S.default.get(e.options.integration_type);
                                    return null !== (l = null == t ? void 0 : t.name) && void 0 !== l ? l : v.default.Messages.UNKNOWN_INTEGRATION
                                }
                                return v.default.Messages.UNKNOWN_USER
                            },
                            targetHook: (t, n) => e.targetType === U.AuditLogTargetTypes.USER ? (0, a.jsx)(B, {
                                user: e.target,
                                onContextMenu: s
                            }, n) : (0, a.jsx)("span", {
                                onContextMenu: s,
                                children: t
                            }, n),
                            count: r.count,
                            channel: r.channel ? "string" == typeof r.channel ? r.channel : (0, N.computeChannelName)(r.channel, O.default, C.default, !0) : null,
                            channelHook: (e, t) => (0, a.jsx)("span", {
                                onContextMenu: n,
                                children: e
                            }, t),
                            subtarget: r.subtarget
                        })
                    }) : null
                }
                renderRoleUpdate(e) {
                    let {
                        newValue: t
                    } = e;
                    return Array.isArray(t) ? t.map(e => (0, a.jsx)("div", {
                        className: j.subListItem,
                        children: e.name
                    }, e.id)) : null
                }
                renderPermissionUpdate(e) {
                    let {
                        newValue: t
                    } = e;
                    return Array.isArray(t) ? t.map(e => (0, a.jsx)("div", {
                        className: j.subListItem,
                        children: R.getStringForPermission(e, this.props.log)
                    }, e)) : null
                }
                renderChannelFlagsUpdate(e) {
                    let {
                        newValue: t,
                        oldValue: s
                    } = e, n = [];
                    return (Array.isArray(s) && (n = n.concat(s.map(e => (0, a.jsx)("div", {
                        className: j.subListItem,
                        children: R.getStringForRemovedChannelFlag(e)
                    }, e)))), Array.isArray(t) && (n = n.concat(t.map(e => (0, a.jsx)("div", {
                        className: j.subListItem,
                        children: R.getStringForAddedChannelFlag(e)
                    }, e)))), n.length > 0) ? n : null
                }
                renderChangeLineItem(e) {
                    let {
                        changeItem: t,
                        subChanges: s,
                        changeNumber: n,
                        log: l,
                        oldValue: i,
                        newValue: r,
                        change: o
                    } = e, d = null;
                    if ("string" == typeof t && (d = t), null != t && "object" == typeof t) {
                        if (null == t.format) {
                            let e = t[o.newValue];
                            null == e && null != t[R.DEFAULT_FOR_STRINGS_KEY] ? t = t[R.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
                        }
                        if (null != t && null != t.format) {
                            var u, c;
                            d = t.format({
                                user: l.user,
                                target: l.target,
                                oldValue: i,
                                newValue: r,
                                count: Array.isArray(r) ? r.length : null,
                                subtarget: null !== (c = null !== (u = l.options.subtarget) && void 0 !== u ? u : o.subtarget) && void 0 !== c ? c : null,
                                newColorHook: (e, t) => (0, a.jsx)("div", {
                                    className: j.colorHook,
                                    style: {
                                        backgroundColor: o.newValue
                                    }
                                }, t),
                                oldColorHook: (e, t) => (0, a.jsx)("div", {
                                    className: j.colorHook,
                                    style: {
                                        backgroundColor: o.oldValue
                                    }
                                }, t),
                                oldTagHook: (e, t) => (0, a.jsx)(g.default, {
                                    tag: i,
                                    size: g.default.Sizes.SMALL
                                }, t),
                                newTagHook: (e, t) => (0, a.jsx)(g.default, {
                                    tag: r,
                                    size: g.default.Sizes.SMALL
                                }, t),
                                oldEmojiHook: (e, t) => (0, a.jsx)(I.default, {
                                    emojiId: i
                                }, t),
                                newEmojiHook: (e, t) => (0, a.jsx)(I.default, {
                                    emojiId: r
                                }, t)
                            })
                        } else d = t
                    }
                    return d ? (0, a.jsxs)("div", {
                        className: j.detail,
                        style: {
                            position: "relative",
                            top: 1
                        },
                        children: [(0, a.jsxs)(T.Text, {
                            className: j.prefix,
                            variant: "code",
                            color: this.getActionTypeColor(l.actionType),
                            children: [n < 10 ? "0".concat(n) : n, (0, a.jsx)("span", {
                                className: j.dash,
                                children: "—"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.change,
                            children: [(0, a.jsx)("div", {
                                className: j.changeStr,
                                children: d
                            }), null != s ? (0, a.jsx)("div", {
                                children: s
                            }) : null]
                        })]
                    }, n) : (console.warn("No change string for", o), null)
                }
                renderChangeDetails(e) {
                    let {
                        log: t,
                        onContentClick: s
                    } = this.props;
                    if (null == t.changes) return null;
                    let n = 0,
                        l = o.flatten(t.changes.map(s => {
                            let {
                                oldValue: a,
                                newValue: l
                            } = s, i = null;
                            if (t.action === U.AuditLogActions.MEMBER_ROLE_UPDATE ? i = this.renderRoleUpdate(s) : t.targetType === U.AuditLogTargetTypes.ROLE || t.action === U.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === U.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? i = this.renderPermissionUpdate(s) : (t.action === U.AuditLogActions.CHANNEL_UPDATE || t.action === U.AuditLogActions.THREAD_UPDATE) && s.key === U.AuditLogChangeKeys.FLAGS && (i = this.renderChannelFlagsUpdate(s)), (t.action === U.AuditLogActions.CHANNEL_UPDATE || t.action === U.AuditLogActions.CHANNEL_CREATE) && s.key === U.AuditLogChangeKeys.TYPE && (null != a && (a = (0, D.channelTypeString)({
                                    type: a
                                })), null != l && (l = (0, D.channelTypeString)({
                                    type: l
                                }))), t.action === U.AuditLogActions.MEMBER_UPDATE && s.key === U.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
                                if (null == (l = u(l)) || !l.isValid()) return null;
                                l = l.calendar()
                            }(t.action === U.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === U.AuditLogActions.ONBOARDING_PROMPT_CREATE) && s.key === U.AuditLogChangeKeys.OPTIONS && (i = this.renderOnboardingPromptOptionsChange(s)), (t.action === U.AuditLogActions.HOME_SETTINGS_CREATE || t.action === U.AuditLogActions.HOME_SETTINGS_UPDATE) && (i = this.renderHomeSettingsOptionsChange(s));
                            let r = e[s.key];
                            return P(t, s) ? null : ("function" == typeof r && (r = r(s)), Array.isArray(r)) ? r.map(e => (n++, this.renderChangeLineItem({
                                changeItem: e,
                                subChanges: i,
                                changeNumber: n,
                                log: t,
                                oldValue: a,
                                newValue: l,
                                change: s
                            }))) : (n++, this.renderChangeLineItem({
                                changeItem: r,
                                subChanges: i,
                                changeNumber: n,
                                log: t,
                                oldValue: a,
                                newValue: l,
                                change: s
                            }))
                        })).filter(M.isNotNullish);
                    return (0, a.jsx)(T.Clickable, {
                        onClick: s,
                        className: j.changeDetails,
                        children: l
                    })
                }
                renderOnboardingPromptOptionsChange(e) {
                    let {
                        oldValue: t,
                        newValue: s
                    } = e, {
                        log: n,
                        guild: l
                    } = this.props, i = e => {
                        var t;
                        let s = null == l ? void 0 : null === (t = l.getRole(e)) || void 0 === t ? void 0 : t.name;
                        return null == s ? null : "@".concat(s)
                    }, r = e => {
                        var t;
                        let s = null === (t = m.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
                        return null == s ? null : "#".concat(s)
                    }, d = (e, t) => {
                        let {
                            title: s,
                            id: l
                        } = t, d = e.role_ids.map(i).filter(M.isNotNullish), u = e.channel_ids.map(r).filter(M.isNotNullish), c = t.role_ids.map(i).filter(M.isNotNullish), E = t.channel_ids.map(r).filter(M.isNotNullish), _ = o.difference(c, d), I = o.difference(d, c), S = o.difference(E, u), N = o.difference(u, E), g = [];
                        return (!o.isEqual(e.title, t.title) && g.push("title"), !o.isEqual(e.description, t.description) && g.push("description"), 0 === _.length && 0 === I.length && 0 === S.length && 0 === N.length && 0 === g.length) ? null : (0, a.jsxs)("li", {
                            children: [(0, a.jsxs)("div", {
                                className: j.onboardingChangeLogItemTitle,
                                children: [(0, a.jsx)(b, {
                                    actionType: U.AuditLogActionTypes.UPDATE,
                                    targetType: n.targetType,
                                    action: n.action
                                }), (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                                        title: s
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: j.onboardingChangeLogItemChanges,
                                children: [_.length > 0 && (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                                        roles: _.join(", ")
                                    })
                                }), I.length > 0 && (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                                        roles: I.join(", ")
                                    })
                                }), S.length > 0 && (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                                        channels: S.join(", ")
                                    })
                                }), N.length > 0 && (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                                        channels: N.join(", ")
                                    })
                                }), g.map((s, n) => (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                                        key: s,
                                        oldValue: e[s],
                                        newValue: t[s]
                                    })
                                }, n))]
                            })]
                        }, l)
                    }, u = o.keyBy(null != t ? t : [], "id"), c = o.keyBy(null != s ? s : [], "id"), E = o.difference(Object.keys(c), Object.keys(u)).map(e => c[e]), _ = o.difference(Object.keys(u), Object.keys(c)).map(e => u[e]), I = o.intersection(Object.keys(c), Object.keys(u));
                    return (0, a.jsxs)("ul", {
                        className: j.onboardingChangeLogContainer,
                        children: [E.map(e => {
                            let {
                                role_ids: t,
                                channel_ids: s,
                                title: l,
                                id: o
                            } = e, d = (null != t ? t : []).map(i).filter(M.isNotNullish), u = (null != s ? s : []).map(r).filter(M.isNotNullish);
                            return (0, a.jsxs)("li", {
                                children: [(0, a.jsxs)("div", {
                                    className: j.onboardingChangeLogItemTitle,
                                    children: [(0, a.jsx)(b, {
                                        actionType: U.AuditLogActionTypes.CREATE,
                                        targetType: n.targetType,
                                        action: n.action
                                    }), (0, a.jsx)(T.Text, {
                                        variant: "text-md/normal",
                                        children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                                            title: l
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: j.onboardingChangeLogItemChanges,
                                    children: [d.length > 0 && (0, a.jsx)(T.Text, {
                                        variant: "text-md/normal",
                                        children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                                            roles: d.join(", ")
                                        })
                                    }), u.length > 0 && (0, a.jsx)(T.Text, {
                                        variant: "text-md/normal",
                                        children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                                            channels: u.join(", ")
                                        })
                                    })]
                                })]
                            }, o)
                        }), _.map(e => (0, a.jsx)("li", {
                            children: (0, a.jsxs)("div", {
                                className: j.onboardingChangeLogItemTitle,
                                children: [(0, a.jsx)(b, {
                                    actionType: U.AuditLogActionTypes.DELETE,
                                    targetType: n.targetType,
                                    action: n.action
                                }), (0, a.jsx)(T.Text, {
                                    variant: "text-md/normal",
                                    children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                                        title: e.title
                                    })
                                })]
                            })
                        }, e.id)), I.map(e => d(u[e], c[e]))]
                    }, "options")
                }
                renderHomeSettingsOptionsChange(e) {
                    let {
                        oldValue: t,
                        newValue: s,
                        key: n
                    } = e, {
                        targetType: l,
                        action: i
                    } = this.props.log;
                    switch (n) {
                        case U.AuditLogChangeKeys.WELCOME_MESSAGE:
                            return ((e, t) => {
                                var s, n, l, i, r;
                                let o = O.default.getUser(null == t ? void 0 : null === (s = t.author_ids) || void 0 === s ? void 0 : s[0]),
                                    d = O.default.getUser(null === (n = e.author_ids) || void 0 === n ? void 0 : n[0]),
                                    u = (null == o ? void 0 : o.id) !== (null == d ? void 0 : d.id) ? (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                                                    oldUser: null !== (l = null == o ? void 0 : o.username) && void 0 !== l ? l : v.default.Messages.NONE,
                                                    newUser: null !== (i = null == d ? void 0 : d.username) && void 0 !== i ? i : v.default.Messages.NONE
                                                })
                                            })
                                        })
                                    }) : null,
                                    c = (null == t ? void 0 : t.message) !== e.message ? (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                                                    oldMessage: null !== (r = null == t ? void 0 : t.message) && void 0 !== r ? r : v.default.Messages.NONE,
                                                    newMessage: e.message
                                                })
                                            })
                                        })
                                    }) : null;
                                return (0, a.jsxs)("ul", {
                                    children: [u, c]
                                })
                            })(s, t);
                        case U.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
                            return ((e, t) => {
                                let s = e.map(e => e.channel_id),
                                    n = t.map(e => e.channel_id),
                                    r = o.difference(n, s),
                                    d = o.difference(s, n),
                                    u = t.filter(e => r.includes(e.channel_id)),
                                    c = e.filter(e => d.includes(e.channel_id));
                                return (0, a.jsxs)("ul", {
                                    children: [u.map(e => (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: [(0, a.jsx)(b, {
                                                actionType: U.AuditLogActionTypes.CREATE,
                                                targetType: l,
                                                action: i
                                            }), (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id)), c.map(e => (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: [(0, a.jsx)(b, {
                                                actionType: U.AuditLogActionTypes.DELETE,
                                                targetType: l,
                                                action: i
                                            }), (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id))]
                                })
                            })(null != t ? t : [], s);
                        case U.AuditLogChangeKeys.RESOURCE_CHANNELS:
                            return ((e, t) => {
                                let s = e.map(e => e.channel_id),
                                    n = t.map(e => e.channel_id),
                                    r = o.difference(n, s),
                                    d = o.difference(s, n),
                                    u = t.filter(e => r.includes(e.channel_id)),
                                    c = e.filter(e => d.includes(e.channel_id));
                                return (0, a.jsxs)("ul", {
                                    children: [u.map(e => (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: [(0, a.jsx)(b, {
                                                actionType: U.AuditLogActionTypes.CREATE,
                                                targetType: l,
                                                action: i
                                            }), (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id)), c.map(e => (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: j.onboardingChangeLogItemTitle,
                                            children: [(0, a.jsx)(b, {
                                                actionType: U.AuditLogActionTypes.DELETE,
                                                targetType: l,
                                                action: i
                                            }), (0, a.jsx)(T.Text, {
                                                variant: "text-md/normal",
                                                children: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                                                    name: e.title
                                                })
                                            })]
                                        })
                                    }, e.channel_id))]
                                })
                            })(null != t ? t : [], s);
                        default:
                            return null
                    }
                }
                renderChangeSummary() {
                    let {
                        expanded: e,
                        log: t
                    } = this.props;
                    if (e) switch (t.targetType) {
                        case U.AuditLogTargetTypes.GUILD:
                            return this.renderChangeDetails(R.GuildChangeStrings());
                        case U.AuditLogTargetTypes.CHANNEL:
                        case U.AuditLogTargetTypes.CHANNEL_OVERWRITE:
                            return this.renderChangeDetails(R.ChannelChangeStrings());
                        case U.AuditLogTargetTypes.USER:
                            return this.renderChangeDetails(R.UserChangeStrings());
                        case U.AuditLogTargetTypes.ROLE:
                            return this.renderChangeDetails(R.RoleChangeStrings());
                        case U.AuditLogTargetTypes.ONBOARDING_PROMPT:
                            return this.renderChangeDetails(R.OnboardingPromptChangeStrings());
                        case U.AuditLogTargetTypes.GUILD_ONBOARDING:
                            return this.renderChangeDetails(R.OnboardingChangeStrings());
                        case U.AuditLogTargetTypes.HOME_SETTINGS:
                            return this.renderChangeDetails(R.HomeSettingsChangeStrings());
                        case U.AuditLogTargetTypes.INVITE:
                            return this.renderChangeDetails(R.InviteChangeStrings());
                        case U.AuditLogTargetTypes.WEBHOOK:
                            return this.renderChangeDetails(R.WebhookChangeStrings());
                        case U.AuditLogTargetTypes.EMOJI:
                            return this.renderChangeDetails(R.EmojiChangeStrings());
                        case U.AuditLogTargetTypes.STICKER:
                            return this.renderChangeDetails(R.StickerChangeStrings());
                        case U.AuditLogTargetTypes.INTEGRATION:
                            return this.renderChangeDetails(R.IntegrationChangeStrings());
                        case U.AuditLogTargetTypes.STAGE_INSTANCE:
                            return this.renderChangeDetails(R.StageInstanceChangeStrings());
                        case U.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
                            return this.renderChangeDetails(R.GuildScheduledEventChangeStrings());
                        case U.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return this.renderChangeDetails(R.GuildScheduledEventExceptionChangeStrings());
                        case U.AuditLogTargetTypes.THREAD:
                            return this.renderChangeDetails(R.ThreadChangeStrings());
                        case U.AuditLogTargetTypes.APPLICATION_COMMAND:
                            return this.renderChangeDetails(R.CommandPermissionChangeStrings(t.changes));
                        case U.AuditLogTargetTypes.AUTO_MODERATION_RULE:
                            return this.renderChangeDetails(R.AutoModerationRuleChangeStrings());
                        case U.AuditLogTargetTypes.GUILD_SOUNDBOARD:
                            return this.renderChangeDetails(R.GuildSoundboardChangeStrings());
                        case U.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
                            return this.renderChangeDetails(R.VoiceChannelStatusStrings());
                        case U.AuditLogTargetTypes.CLYDE_AI:
                            return this.renderChangeDetails(R.ClydeAiChangeStrings())
                    }
                    return null
                }
                renderEntryAvatar() {
                    let {
                        props: {
                            log: e,
                            guildId: t,
                            theme: s
                        }
                    } = this, {
                        user: n,
                        userId: l,
                        options: {
                            integration_type: i
                        }
                    } = e;
                    if (null != n && null != l) return (0, a.jsx)(T.Popout, {
                        preload: () => (0, f.default)(l, n.getAvatarURL(t, 80), {
                            guildId: t
                        }),
                        renderPopout: e => (0, a.jsx)(A.default, {
                            ...e,
                            userId: l,
                            guildId: t
                        }),
                        children: s => {
                            var n, l, i;
                            return (0, a.jsx)(T.Avatar, {
                                ...s,
                                onClick: e => {
                                    e.stopPropagation(), s.onClick(e)
                                },
                                className: j.avatar,
                                src: (n = e, l = t, n.action === U.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || n.action === U.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || n.action === U.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n.action === U.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? (0, p.getAutomodAvatarURL)() : null === (i = n.user) || void 0 === i ? void 0 : i.getAvatarURL(l, 40)),
                                "aria-hidden": !0,
                                size: T.AvatarSizes.SIZE_40
                            })
                        }
                    });
                    if (null != i) {
                        let e = S.default.get(i);
                        if (null != e) {
                            let t = (0, _.isThemeDark)(s) ? e.icon.darkSVG : e.icon.lightSVG;
                            return (0, a.jsx)(T.Avatar, {
                                className: j.avatar,
                                src: t,
                                "aria-hidden": !0,
                                size: T.AvatarSizes.SIZE_40
                            })
                        }
                    }
                    return null
                }
                render() {
                    let e;
                    let {
                        log: t,
                        className: s,
                        expanded: n,
                        onHeaderClick: l
                    } = this.props, r = this.hasChangesToRender(), o = j.headerDefault;
                    n ? o = j.headerExpanded : r && (o = j.headerClickable);
                    let d = t.timestampStart.calendar(),
                        u = t.timestampEnd.calendar();
                    e = d === u ? (0, a.jsx)(T.Text, {
                        className: j.timestamp,
                        variant: "text-sm/normal",
                        children: d
                    }) : (0, a.jsxs)(T.Text, {
                        className: j.timestamp,
                        variant: "text-sm/normal",
                        children: [d, "—", u]
                    });
                    let E = r ? l : U.NOOP;
                    return (0, a.jsx)(c.ListNavigatorItem, {
                        id: t.id,
                        children: l => (0, a.jsxs)("div", {
                            className: i(j.auditLog, s),
                            children: [(0, a.jsxs)(T.Clickable, {
                                className: o,
                                "aria-expanded": n,
                                onClick: E,
                                ...l,
                                children: [(0, a.jsx)(b, {
                                    action: t.action,
                                    actionType: t.actionType,
                                    targetType: t.targetType
                                }), this.renderEntryAvatar(), (0, a.jsxs)("div", {
                                    className: j.timeWrap,
                                    children: [(0, a.jsx)("div", {
                                        className: j.title,
                                        children: this.renderTitle()
                                    }), e]
                                }), r ? (0, a.jsx)(h.default, {
                                    className: j.expand,
                                    foreground: j.expandForeground,
                                    expanded: n,
                                    "aria-hidden": !0
                                }) : null]
                            }), n ? (0, a.jsx)("div", {
                                className: j.divider
                            }) : null, this.renderChangeSummary()]
                        })
                    })
                }
            }
            var H = E.default.connectStores([L.default], () => ({
                theme: L.default.theme
            }))(F)