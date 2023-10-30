(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36426"], {
        54239: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return s
                }
            });
            var n = a("913144");

            function l(e) {
                n.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                n.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                n.default.dispatch({
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
            });
            var n = a("37983"),
                l = a("884691"),
                r = a("414456"),
                s = a.n(r),
                o = a("77078"),
                i = a("782340"),
                u = a("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: a,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: p,
                        retryPrompt: _,
                        retrySuccessMessage: E
                    } = this.props, {
                        code: A,
                        errorMessage: R,
                        retrySuccess: m
                    } = this.state, g = l.Children.count(r) > 0 ? (0, n.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, M = null != _ ? (0, n.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, n.jsx)("br", {}), (0, n.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, n.jsx)(o.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, I = m ? (0, n.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }) : null;
                    return (0, n.jsx)(o.ModalRoot, {
                        transitionState: h,
                        children: (0, n.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, n.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, n.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, n.jsxs)(o.ModalContent, {
                                children: [null != p ? (0, n.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, g, I, (0, n.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, n.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, n.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : R
                                    }) : null, M]
                                })]
                            }), (0, n.jsxs)(o.ModalFooter, {
                                children: [(0, n.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === A.length,
                                    children: null != a ? a : i.default.Messages.CONFIRM
                                }), (0, n.jsx)(o.Button, {
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
                    return s
                }
            });
            var n = a("872717"),
                l = a("49111"),
                r = a("782340");
            class s extends n.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        610174: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildAlertModeExperiment: function() {
                    return u
                },
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return f
                }
            });
            var n = a("316693"),
                l = a("446674"),
                r = a("862205"),
                s = a("305961"),
                o = a("957255"),
                i = a("421127");
            let u = (0, r.createExperiment)({
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
                d = (0, r.createExperiment)({
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
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    a = (0, l.useStateFromStores)([o.default], () => null != t && n.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions)),
                    r = u.useExperiment({
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
                    showAlertMode: r.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: r.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function f(e) {
                let t = s.default.getGuild(e),
                    a = null != t && n.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions),
                    l = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    }),
                    r = d.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !a,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: l.showAlertMode || r.showAlertMode,
                    alsoShowMemberSafety: l.alsoShowMemberSafety || r.alsoShowMemberSafety
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
                    return p
                },
                handleResolveRaid: function() {
                    return _
                },
                handleReportRaid: function() {
                    return E
                }
            });
            var n = a("866227"),
                l = a.n(n),
                r = a("872717"),
                s = a("716241"),
                o = a("592407"),
                i = a("305961"),
                u = a("599110"),
                d = a("610174"),
                c = a("49111");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
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
            async function p(e, t, a, n) {
                let s = l().add(n, "hours").toISOString(),
                    o = await r.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? s : null,
                            dms_disabled_until: a ? s : null
                        }
                    });
                return o
            }
            async function _(e, t, a) {
                let {
                    showAlertMode: n
                } = (0, d.getGuildAlertModeEnabled)(e), l = i.default.getGuild(e), s = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!n || null == s) return null;
                let o = await r.default.post({
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
                } = (0, d.getGuildAlertModeEnabled)(e), a = i.default.getGuild(e), n = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!t || null == n) return null;
                let l = await r.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        421127: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return s
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
            var n = a("316693"),
                l = a("843455"),
                r = a("782340");
            let s = 2,
                o = 2,
                i = () => [{
                    value: 1,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                u = n.default.combine(l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_GUILD, l.Permissions.BAN_MEMBERS, l.Permissions.KICK_MEMBERS, l.Permissions.MODERATE_MEMBERS)
        },
        561956: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var n = a("37983"),
                l = a("884691"),
                r = a("414456"),
                s = a.n(r),
                o = a("77078"),
                i = a("716241"),
                u = a("311340"),
                d = a("85448"),
                c = a("49111"),
                f = a("782340"),
                h = a("452446");

            function p(e) {
                let {
                    guildId: t,
                    messageId: r,
                    transitionState: p,
                    onClose: _
                } = e, [E, A] = l.useState([]), [R, m] = l.useState(), g = l.useCallback(() => {
                    let e = {
                        raid_alert_type: d.RaidAlertType.JOIN_RAID,
                        raid_alert_id: r,
                        false_alarm_type: E.map(e => e.toString()),
                        false_alarm_other_reason: R,
                        guild_id: t
                    };
                    (0, i.trackWithMetadata)(c.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, u.handleResolveRaid)(t, r, (0, d.getMostImportantRaidResolutionType)(E)), _(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("938899").then(a.bind(a, "938899"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                }, [_, r, t, R, E]), M = [{
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
                return (0, n.jsxs)(o.ModalRoot, {
                    transitionState: p,
                    size: o.ModalSize.SMALL,
                    children: [(0, n.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: h.center,
                        children: (0, n.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, n.jsxs)(o.ModalContent, {
                        className: h.center,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: h.textCenter,
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, n.jsx)("div", {
                            className: h.options,
                            children: M.map(e => {
                                let {
                                    text: t,
                                    value: a
                                } = e;
                                return (0, n.jsxs)("div", {
                                    className: s(h.optionContainer, {
                                        [h.optionContainerOther]: a === d.RaidResolutionType.OTHER
                                    }),
                                    children: [(0, n.jsxs)(o.Clickable, {
                                        className: h.optionText,
                                        onClick: () => I(a),
                                        children: [(0, n.jsx)("div", {
                                            children: (0, n.jsx)(o.Checkbox, {
                                                type: o.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(a),
                                                onChange: () => I(a)
                                            })
                                        }), (0, n.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), a === d.RaidResolutionType.OTHER && E.includes(d.RaidResolutionType.OTHER) && (0, n.jsx)("div", {
                                        className: h.textboxContainer,
                                        children: (0, n.jsx)(o.TextArea, {
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
                    }), (0, n.jsxs)(o.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, n.jsx)("div", {
                            className: h.button,
                            children: (0, n.jsx)(o.Button, {
                                onClick: g,
                                color: o.Button.Colors.BRAND_NEW,
                                look: o.Button.Looks.FILLED,
                                children: f.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, n.jsx)(o.Button, {
                            onClick: _,
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
            });
            var n = a("913144"),
                l = a("716241"),
                r = a("393414"),
                s = a("42203"),
                o = a("923959"),
                i = a("26989"),
                u = a("305961"),
                d = a("957255"),
                c = a("18494"),
                f = a("282109"),
                h = a("599110"),
                p = a("38654"),
                _ = a("507950"),
                E = a("49111"),
                A = a("724210");

            function R(e, t) {
                h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), n.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), M(e)
            }

            function m(e, t) {
                let a = p.default.getData(e);
                null != a && a.type === t.type && (h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(a.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: a.type === _.ImpersonateType.NEW_MEMBER
                }), n.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...a,
                        ...t
                    }
                }), M(e))
            }

            function g(e) {
                n.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function M(e) {
                let t = c.default.getChannelId(e),
                    a = s.default.getChannel(t),
                    n = null != t && (0, A.isStaticChannelRoute)(t);
                if (!n && !d.default.can(E.Permissions.VIEW_CHANNEL, a)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(E.Routes.CHANNEL(e, t.id))
                }
            }

            function I(e, t, a) {
                let n = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => n.add(e)), a.forEach(e => n.delete(e)), m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: n
                })
            }

            function T(e, t) {
                let a = u.default.getGuild(e);
                if (null == a) return;
                ! function(e, t) {
                    let a = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        n = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (n.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            r = l.filter(e => !a.includes(e));
                        return r.length > 0 && I(e, r, []), !1
                    })
                }(e, t);
                let n = {};
                t.forEach(e => n[e] = a.roles[e]), m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: n
                })
            }

            function S(e, t) {
                m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        517763: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("866227"),
                l = a.n(n),
                r = a("666038");
            class s extends r.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: l(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
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
                    return r
                }
            });
            var n = a("917351"),
                l = a.n(n);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, a) => r(t) ? e(a) : a({}))
        },
        730622: function(e, t, a) {
            "use strict";
            let n, l;
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var r = a("697218"),
                s = a("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = a("670924");
                n = e.showModal, o = e.updateModalProps, l = a("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: a,
                    reject: r,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == n) {
                    null == i || i();
                    return
                }
                let d = n(p, c, s);

                function c() {
                    null == i || i()
                }

                function f(e) {
                    l(d), a(e)
                }

                function h(e) {
                    l(d), r(e)
                }

                function p(e) {
                    return o(d, p, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: h,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
                    let {
                        res: t
                    } = e;
                    o(d, p, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: a,
                    reject: n,
                    code: l,
                    mfaCodeHandler: r = i,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(a, e => {
                    var l, i;
                    if (l = e, i = s, l.body && 60008 === l.body.code || i && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: a,
                        reject: n,
                        res: e,
                        ...o
                    });
                    n(e)
                })
            }

            function d(e, t) {
                var a, n;
                let {
                    checkEnabled: l = null !== (n = null === (a = r.default.getCurrentUser()) || void 0 === a ? void 0 : a.mfaEnabled) && void 0 !== n && n,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, a) => {
                    ((0, s.resolveThunk)(l) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: a,
                        ...o
                    })
                })
            }
        },
        840707: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("872717"),
                l = a("599110");

            function r(e, t, a) {
                let {
                    trackedActionData: n,
                    ...r
                } = t, s = {
                    url: r.url,
                    request_method: a
                };
                return new Promise((t, a) => {
                    e(r).then(e => {
                        let a = n.properties;
                        "function" == typeof n.properties && (a = n.properties(e)), (0, l.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            ...s,
                            ...a
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let o = n.properties;
                        "function" == typeof n.properties && (o = n.properties(e)), (0, l.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...s,
                            ...o
                        }), a(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return r(n.default.get, e, "get")
                },
                post: function(e) {
                    return r(n.default.post, e, "post")
                },
                put: function(e) {
                    return r(n.default.put, e, "put")
                },
                patch: function(e) {
                    return r(n.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(n.default.delete, e, "del")
                }
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
            var n = a("37983");
            a("884691");
            var l = a("551042"),
                r = a("920636");
            let s = (e, t, a) => function(l) {
                return (0, n.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...a,
                    ...l
                })
            };

            function o(e, t, a) {
                return (0, l.openModal)(s(e, t, a), {
                    onCloseCallback: t
                })
            }

            function i(e, t, a, n) {
                return (0, l.updateModal)(e, s(t, a, n))
            }
        }
    }
]);