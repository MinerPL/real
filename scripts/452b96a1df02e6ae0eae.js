(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71772"], {
        54239: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                pushLayer: function() {
                    return n
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return r
                }
            });
            var l = a("913144");

            function n(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                o = a("77078"),
                i = a("782340"),
                u = a("347129");
            class d extends n.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: a,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: _,
                        retryPrompt: p,
                        retrySuccessMessage: E
                    } = this.props, {
                        code: A,
                        errorMessage: R,
                        retrySuccess: m
                    } = this.state, g = n.Children.count(s) > 0 ? (0, l.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, M = null != p ? (0, l.jsxs)(o.Text, {
                        className: r(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(o.Clickable, {
                            className: r(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(o.Anchor, {
                                children: p
                            })
                        })]
                    }) : null, I = m ? (0, l.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }) : null;
                    return (0, l.jsx)(o.ModalRoot, {
                        transitionState: h,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(o.ModalContent, {
                                children: [null != _ ? (0, l.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, g, I, (0, l.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, l.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : R
                                    }) : null, M]
                                })]
                            }), (0, l.jsxs)(o.ModalFooter, {
                                children: [(0, l.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === A.length,
                                    children: null != a ? a : i.default.Messages.CONFIRM
                                }), (0, l.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: a
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == a || a(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        333805: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var l, n = a("872717"),
                s = a("49111"),
                r = a("782340");
            l = class extends n.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: s.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: s.Links.STATUS
                    }))
                }
            }
        },
        610174: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return f
                }
            });
            var l = a("316693"),
                n = a("446674"),
                s = a("862205"),
                r = a("305961"),
                o = a("957255"),
                i = a("421127");
            let u = (0, s.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                d = (0, s.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function c(e) {
                let t = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(e)),
                    a = (0, n.useStateFromStores)([o.default], () => null != t && l.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions)),
                    s = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    }),
                    c = d.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: s.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: s.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function f(e) {
                let t = r.default.getGuild(e),
                    a = null != t && l.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions),
                    n = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    }),
                    s = d.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: n.showAlertMode || s.showAlertMode,
                    alsoShowMemberSafety: n.alsoShowMemberSafety || s.alsoShowMemberSafety
                }
            }
        },
        311340: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                trackReportRaidViewed: function() {
                    return f
                },
                setGuildRaidAlerts: function() {
                    return h
                },
                setGuildIncidentActions: function() {
                    return _
                },
                handleResolveRaid: function() {
                    return p
                },
                handleReportRaid: function() {
                    return E
                }
            }), a("222007");
            var l = a("866227"),
                n = a.n(l),
                s = a("872717"),
                r = a("716241"),
                o = a("592407"),
                i = a("305961"),
                u = a("599110"),
                d = a("610174"),
                c = a("49111");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function h(e, t) {
                let a = new Set(e.features);
                a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await o.default.saveGuild(e.id, {
                    features: a
                }, {
                    throwErr: !0
                })
            }
            async function _(e, t, a, l) {
                let r = n().add(l, "hours").toISOString(),
                    o = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? r : null,
                            dms_disabled_until: a ? r : null
                        }
                    });
                return o
            }
            async function p(e, t, a) {
                let {
                    showAlertMode: l
                } = (0, d.getGuildAlertModeEnabled)(e), n = i.default.getGuild(e), r = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!l || null == r) return null;
                let o = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: a
                    }
                });
                return o
            }
            async function E(e) {
                let {
                    showAlertMode: t
                } = (0, d.getGuildAlertModeEnabled)(e), a = i.default.getGuild(e), l = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!t || null == l) return null;
                let n = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return n
            }
        },
        421127: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return r
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return o
                },
                getTimeframes: function() {
                    return i
                },
                IncidentAlertModeratorPermissions: function() {
                    return u
                }
            });
            var l = a("316693"),
                n = a("843455"),
                s = a("782340");
            let r = 2,
                o = 2,
                i = () => [{
                    value: 1,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                u = l.default.combine(n.Permissions.ADMINISTRATOR, n.Permissions.MANAGE_GUILD, n.Permissions.BAN_MEMBERS, n.Permissions.KICK_MEMBERS, n.Permissions.MODERATE_MEMBERS)
        },
        561956: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                o = a("77078"),
                i = a("716241"),
                u = a("311340"),
                d = a("85448"),
                c = a("49111"),
                f = a("782340"),
                h = a("452446");

            function _(e) {
                let {
                    guildId: t,
                    messageId: s,
                    transitionState: _,
                    onClose: p
                } = e, [E, A] = n.useState([]), [R, m] = n.useState(), g = n.useCallback(() => {
                    let e = {
                        raid_alert_type: d.RaidAlertType.JOIN_RAID,
                        raid_alert_id: s,
                        false_alarm_type: E.map(e => e.toString()),
                        false_alarm_other_reason: R,
                        guild_id: t
                    };
                    (0, i.trackWithMetadata)(c.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, u.handleResolveRaid)(t, s, (0, d.getMostImportantRaidResolutionType)(E)), p(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("938899").then(a.bind(a, "938899"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                }, [p, s, t, R, E]), M = [{
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                    value: d.RaidResolutionType.LEGITIMATE_ACTIVITY
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                    value: d.RaidResolutionType.DM_SPAM
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                    value: d.RaidResolutionType.JOIN_RAID
                }, {
                    text: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                    value: d.RaidResolutionType.OTHER
                }];

                function I(e) {
                    let t = E.includes(e);
                    t ? A(t => t.filter(t => t !== e)) : A(t => [...t, e])
                }
                return (0, l.jsxs)(o.ModalRoot, {
                    transitionState: _,
                    size: o.ModalSize.SMALL,
                    children: [(0, l.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: h.center,
                        children: (0, l.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: h.center,
                        children: [(0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: h.textCenter,
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: h.options,
                            children: M.map(e => {
                                let {
                                    text: t,
                                    value: a
                                } = e;
                                return (0, l.jsxs)("div", {
                                    className: r(h.optionContainer, {
                                        [h.optionContainerOther]: a === d.RaidResolutionType.OTHER
                                    }),
                                    children: [(0, l.jsxs)(o.Clickable, {
                                        className: h.optionText,
                                        onClick: () => I(a),
                                        children: [(0, l.jsx)("div", {
                                            children: (0, l.jsx)(o.Checkbox, {
                                                type: o.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(a),
                                                onChange: () => I(a)
                                            })
                                        }), (0, l.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), a === d.RaidResolutionType.OTHER && E.includes(d.RaidResolutionType.OTHER) && (0, l.jsx)("div", {
                                        className: h.textboxContainer,
                                        children: (0, l.jsx)(o.TextArea, {
                                            className: h.falseAlarmReasonText,
                                            placeholder: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: e => m(e),
                                            value: R,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, a)
                            })
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, l.jsx)("div", {
                            className: h.button,
                            children: (0, l.jsx)(o.Button, {
                                onClick: g,
                                color: o.Button.Colors.BRAND_NEW,
                                look: o.Button.Looks.FILLED,
                                children: f.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, l.jsx)(o.Button, {
                            onClick: p,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: f.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        479756: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                startImpersonating: function() {
                    return R
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return I
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return S
                }
            }), a("222007");
            var l = a("913144"),
                n = a("716241"),
                s = a("393414"),
                r = a("42203"),
                o = a("923959"),
                i = a("26989"),
                u = a("305961"),
                d = a("957255"),
                c = a("18494"),
                f = a("282109"),
                h = a("599110"),
                _ = a("38654"),
                p = a("507950"),
                E = a("49111"),
                A = a("724210");

            function R(e, t) {
                h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, n.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), M(e)
            }

            function m(e, t) {
                let a = _.default.getData(e);
                null != a && a.type === t.type && (h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(a.roles).length,
                    ...(0, n.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: a.type === p.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...a,
                        ...t
                    }
                }), M(e))
            }

            function g(e) {
                l.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function M(e) {
                let t = c.default.getChannelId(e),
                    a = r.default.getChannel(t),
                    l = null != t && (0, A.isStaticChannelRoute)(t);
                if (!l && !d.default.can(E.Permissions.VIEW_CHANNEL, a)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(E.Routes.CHANNEL(e, t.id))
                }
            }

            function I(e, t, a) {
                let l = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => l.add(e)), a.forEach(e => l.delete(e)), m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: l
                })
            }

            function T(e, t) {
                let a = u.default.getGuild(e);
                if (null == a) return;
                ! function(e, t) {
                    let a = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        l = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (l.some(e => !t.roles.includes(e))) return !0;
                        let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            s = n.filter(e => !a.includes(e));
                        return s.length > 0 && I(e, s, []), !1
                    })
                }(e, t);
                let l = {};
                t.forEach(e => l[e] = a.roles[e]), m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: l
                })
            }

            function S(e, t) {
                m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        517763: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            }), a("702976");
            var l, n = a("866227"),
                s = a.n(n),
                r = a("666038");
            l = class e extends r.default {
                static createFromServer(t) {
                    var a;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: s(null !== (a = t.created_at) && void 0 !== a ? a : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = s(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = s(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        615931: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var l = a("917351"),
                n = a.n(l);
            let s = e => "function" == typeof e ? e() : e;
            n.curry((e, t, a) => s(t) ? e(a) : a({}))
        },
        730622: function(e, t, a) {
            "use strict";
            let l, n;
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("70102");
            var s = a("697218"),
                r = a("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = a("670924");
                l = e.showModal, o = e.updateModalProps, n = a("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: a,
                    reject: s,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == l) {
                    null == i || i();
                    return
                }
                let d = l(_, c, r);

                function c() {
                    null == i || i()
                }

                function f(e) {
                    n(d), a(e)
                }

                function h(e) {
                    n(d), s(e)
                }

                function _(e) {
                    return o(d, _, c, {
                        ...r,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: h,
                        code: e,
                        mfaCodeHandler: p,
                        isModalOpen: !0
                    })
                }

                function p(e) {
                    let {
                        res: t
                    } = e;
                    o(d, _, c, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: a,
                    reject: l,
                    code: n,
                    mfaCodeHandler: s = i,
                    isModalOpen: r = !1,
                    ...o
                } = e;
                return t(null != n ? {
                    code: n
                } : {}).then(a, e => {
                    var n, i;
                    if (n = e, i = r, n.body && 60008 === n.body.code || i && 429 === n.status) return s({
                        promiseFn: t,
                        resolve: a,
                        reject: l,
                        res: e,
                        ...o
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var a, l;
                let {
                    checkEnabled: n = null !== (l = null === (a = s.default.getCurrentUser()) || void 0 === a ? void 0 : a.mfaEnabled) && void 0 !== l && l,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, a) => {
                    ((0, r.resolveThunk)(n) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: a,
                        ...o
                    })
                })
            }
        },
        670924: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("551042"),
                s = a("920636");
            let r = (e, t, a) => function(n) {
                return (0, l.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...a,
                    ...n
                })
            };

            function o(e, t, a) {
                return (0, n.openModal)(r(e, t, a), {
                    onCloseCallback: t
                })
            }

            function i(e, t, a, l) {
                return (0, n.updateModal)(e, r(t, a, l))
            }
        }
    }
]);