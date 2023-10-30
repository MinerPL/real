(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18620"], {
        575351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("446674"),
                s = n("77078"),
                u = n("679653"),
                i = n("929278"),
                o = n("347895"),
                d = n("848848"),
                c = n("735251"),
                f = n("534222"),
                E = n("592407"),
                h = n("610730"),
                _ = n("271938"),
                g = n("305961"),
                R = n("957255"),
                p = n("49111"),
                N = n("782340"),
                m = n("413075"),
                C = e => {
                    var t;
                    let {
                        channel: n,
                        onClose: C,
                        onConfirm: T,
                        transitionState: A
                    } = e, M = (0, u.default)(n, !0), y = n.id, D = n.isForumPost(), S = (0, a.useStateFromStores)([g.default], () => g.default.getGuild(n.getGuildId())), O = (0, f.useGuildChannelScheduledEvents)(y), {
                        isSubscriptionGated: L
                    } = (0, d.default)(n.id), v = (0, c.default)(S, n), [I, x] = r.useState(null), b = (0, a.useStateFromStores)([_.default], () => n.isOwner(_.default.getId()), [n]), w = (0, a.useStateFromStores)([R.default], () => R.default.can(n.isThread() ? p.Permissions.MANAGE_THREADS : p.Permissions.MANAGE_CHANNELS, n), [n]), G = (0, a.useStateFromStores)([h.default], () => null !== (t = h.default.getCount(n.id)) && void 0 !== t ? t : 0, [n.id]), H = D && (w || b && G < 1), U = O.length > 0 && (n.type === p.ChannelTypes.GUILD_VOICE || n.type === p.ChannelTypes.GUILD_STAGE_VOICE);
                    if (r.useEffect(() => {
                            (async () => {
                                let e = await (0, i.isDefaultChannelThresholdMetAfterDelete)(n.getGuildId(), y);
                                if (!e) {
                                    x("default");
                                    return
                                }
                                let t = await (0, o.getBlockForChannelDeletion)(n.getGuildId(), y);
                                if (!1 !== t) {
                                    x(t);
                                    return
                                }
                            })()
                        }, [n, y]), null != I) {
                        let e;
                        let t = N.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === I ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === I ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : N.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(s.ModalRoot, {
                            transitionState: A,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                className: m.modalContent,
                                children: [(0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            if (null != S) E.default.open(S.id, p.GuildSettingsSections.ONBOARDING), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(s.ModalFooter, {
                                children: (0, l.jsx)(s.Button, {
                                    onClick: C,
                                    children: N.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == S) return null;
                    if (S.hasFeature(p.GuildFeatures.COMMUNITY) && (S.rulesChannelId === y || S.publicUpdatesChannelId === y)) {
                        let e = S.rulesChannelId === y,
                            t = e ? N.default.Messages.DELETE_RULES_CHANNEL_BODY : N.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(s.ModalRoot, {
                            transitionState: A,
                            "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                children: [(0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: m.modalText,
                                    children: t
                                }), (0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: m.modalText,
                                    children: N.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            E.default.open(S.id, p.GuildSettingsSections.COMMUNITY), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(s.ModalFooter, {
                                children: (0, l.jsx)(s.Button, {
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
                            if (n.type === p.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: N.default.Messages.DELETE_CATEGORY,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: M
                                })
                            };
                            if (n.isForumPost()) return {
                                deleteText: H ? N.default.Messages.DELETE_FORUM_POST : N.default.Messages.DELETE_MESSAGE,
                                deleteBody: H && b && !w ? N.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: M
                                }) : H ? N.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: M
                                }) : N.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (n.isThread()) return {
                                deleteText: N.default.Messages.DELETE_THREAD,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: M
                                })
                            };
                            else if (L && v > 0) return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: M,
                                    numGuildRoleSubscriptionMembers: v
                                })
                            };
                            return {
                                deleteText: N.default.Messages.DELETE_CHANNEL,
                                deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: M
                                })
                            }
                        })();
                        return (0, l.jsxs)(s.ModalRoot, {
                            transitionState: A,
                            "aria-label": e,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                className: m.modalContent,
                                children: [(0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: t
                                }), U ? (0, l.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: m.warningText,
                                    children: N.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: O.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                children: [(0, l.jsx)(s.Button, {
                                    onClick: T,
                                    color: s.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(s.Button, {
                                    onClick: C,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: N.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                s = n.n(a),
                u = n("77078"),
                i = n("782340"),
                o = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: h,
                        retryPrompt: _,
                        retrySuccessMessage: g
                    } = this.props, {
                        code: R,
                        errorMessage: p,
                        retrySuccess: N
                    } = this.state, m = r.Children.count(a) > 0 ? (0, l.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, C = null != _ ? (0, l.jsxs)(u.Text, {
                        className: s(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(u.Clickable, {
                            className: s(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(u.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, T = N ? (0, l.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: g
                        })
                    }) : null;
                    return (0, l.jsx)(u.ModalRoot, {
                        transitionState: E,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(u.ModalContent, {
                                children: [null != h ? (0, l.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: h
                                }) : null, m, T, (0, l.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: R,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : p
                                    }) : null, C]
                                })]
                            }), (0, l.jsxs)(u.ModalFooter, {
                                children: [(0, l.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === R.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, l.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
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
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
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
        565298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getGuildIdForGenericRedirect: function() {
                    return i
                }
            });
            var l = n("446674"),
                r = n("162771"),
                a = n("379881"),
                s = n("49111");

            function u(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildId());
                return null != t ? t : e.getGuildId()
            }

            function i(e) {
                return r.default.getGuildId() !== s.FAVORITES ? e.getGuildId() : a.default.isFavorite(e.id) || e.isThread() && a.default.isFavorite(e.parent_id) ? s.FAVORITES : e.getGuildId()
            }
        },
        929278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return E
                },
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return _
                }
            });
            var l = n("316693"),
                r = n("404118"),
                a = n("592407"),
                s = n("305961"),
                u = n("685829"),
                i = n("863636"),
                o = n("380710"),
                d = n("653138"),
                c = n("49111"),
                f = n("782340");
            async function E(e, t) {
                return null == e || await h(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function h(e, t, n) {
                var l;
                let r = s.default.getGuild(e);
                if (null == r) return !0;
                let a = null != r && (null === (l = r.features) || void 0 === l ? void 0 : l.has(c.GuildFeatures.GUILD_ONBOARDING));
                if (!a) return !0;
                a && i.default.shouldFetchPrompts(e) && await (0, u.fetchOnboardingPrompts)(e);
                let f = i.default.getDefaultChannelIds(e),
                    [E, h] = (0, o.getChattableDefaultChannels)(e, f),
                    _ = f.includes(t);
                if (!_) return !0;
                let g = n.removingView && h.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    R = (n.removingChat || n.removingView) && E.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !g && !R
            }
            async function _(e, t, n) {
                let s = e.getGuildId();
                if (null == s) return !0;
                null != n && (t = l.default.filter(t, l.default.invert(n)));
                let u = e.permissionOverwrites[s],
                    i = null != u ? l.default.filter(u.deny, l.default.invert(u.allow)) : l.default.deserialize(0),
                    o = {
                        removingView: l.default.has(t, c.Permissions.VIEW_CHANNEL) && !l.default.has(i, c.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? o.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES_IN_THREADS) && !l.default.has(i, c.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES) && !l.default.has(i, c.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView) return !0;
                let d = await h(s, e.id, o);
                return !!d || (r.default.show({
                    title: f.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: f.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            r.default.close(), a.default.open(s, c.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelRoleSubscriptionStatus: function() {
                    return d
                }
            });
            var l = n("446674"),
                r = n("203288"),
                a = n("42203"),
                s = n("957255"),
                u = n("49111");
            let i = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function o(e) {
                return (0, l.useStateFromStoresObject)([a.default, r.default, s.default], () => d(e, a.default, r.default, s.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
                    o = t.getChannel(e);
                if (null == o ? void 0 : o.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == o || !n.isChannelGated(o.guild_id, o.id)) return i;
                let d = o.isGuildVocal() ? !l.can(u.Permissions.CONNECT, o) : !l.can(u.Permissions.VIEW_CHANNEL, o);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: d
                }
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                r = n("446674"),
                a = n("895026"),
                s = n("36402");
            let u = {};

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, r.useStateFromStores)([s.default], () => s.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = u[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (u[e] = Date.now(), a.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        735251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                r = n("316693"),
                a = n("828674"),
                s = n("866595"),
                u = n("795228"),
                i = n("49111");

            function o(e, t) {
                let n = (0, u.default)(null == e ? void 0 : e.id);
                return l.useMemo(() => {
                    let l = null != e ? function(e, t) {
                            let n = new Set;
                            for (let l of Object.keys(t.permissionOverwrites)) {
                                let r = e.roles[l],
                                    u = t.permissionOverwrites[l];
                                (0, a.isSubscriptionRole)(r) && (0, s.isChannelAccessGrantedBy)(t, u) && n.add(r)
                            }
                            let l = e.getRole(e.id),
                                u = null != l && !r.default.has(l.permissions, i.Permissions.VIEW_CHANNEL),
                                o = (0, s.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (u && !o)
                                for (let t of Object.values(e.roles))(0, a.isSubscriptionRole)(t) && (0, s.isAllChannelsRole)(t) && n.add(t);
                            return [...n]
                        }(e, t) : [],
                        u = 0;
                    for (let e of l) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == n ? void 0 : n[t];
                            null != e && (u += e)
                        }
                    }
                    return u
                }, [n, e, t])
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, r;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (r = l || (l = {}))[r.NONE = 0] = "NONE", r[r.WEEKLY = 1] = "WEEKLY", r[r.MONTHLY = 2] = "MONTHLY", r[r.YEARLY = 3] = "YEARLY", r[r.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return i
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return o
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return d
                },
                getInitialEventStartDate: function() {
                    return h
                },
                getEventTimeData: function() {
                    return R
                },
                getScheduleFromEventData: function() {
                    return N
                },
                getScheduleFromEvent: function() {
                    return m
                },
                getRRule: function() {
                    return C
                },
                generateNextRecurrences: function() {
                    return T
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return M
                },
                recurrenceRuleToOption: function() {
                    return y
                }
            });
            var l = n("917351"),
                r = n("866227"),
                a = n.n(r),
                s = n("614137"),
                u = n("757767");
            n("745049");
            let i = 365,
                o = i + 1,
                d = 4,
                c = [s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday],
                f = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday],
                E = [s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
                h = () => {
                    let e = a().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                _ = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                g = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? _(e, t) : e.calendar(t)
                };

            function R(e, t, n) {
                null == n && (n = a());
                let l = a(e),
                    r = null != t && "" !== t ? a(t) : void 0,
                    s = null != t && l.isSame(r, "day");
                return {
                    startDateTimeString: g(l, n),
                    endDateTimeString: null != r ? s ? r.format("LT") : _(r, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= a().add(1, "hour"),
                    withinStartWindow: l <= a().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function p(e, t) {
                let n;
                return null != e && (n = {
                    startDate: a(e),
                    endDate: void 0
                }, null != t && (n.endDate = a(t))), n
            }

            function N(e) {
                return p(e.scheduledStartTime, e.scheduledEndTime)
            }

            function m(e) {
                return p(e.scheduled_start_time, e.scheduled_end_time)
            }

            function C(e) {
                return new s.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function T(e, t, n) {
                let l = [],
                    r = null == n,
                    a = null != n ? n : new Date,
                    s = new Date;
                s.setFullYear(s.getFullYear() + d);
                let u = r ? e + 1 : e;
                for (let e = 0; e < u && a < s; e++) {
                    let n = t.after(a);
                    if (null == n) break;
                    a = new Date(n), n.setMilliseconds(0), (!r || e > 0) && l.push(n)
                }
                return l
            }

            function A(e) {
                let t = new s.Weekday(e.toDate().getDay()),
                    n = new s.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? E : n.weekday - t.weekday < 0 ? f : c
            }

            function M(e, t) {
                let n = function(e, t) {
                    let n = A(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case u.RecurrenceOptions.NONE:
                            return null;
                        case u.RecurrenceOptions.WEEKLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.WEEKLY
                            });
                        case u.RecurrenceOptions.YEARLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.YEARLY
                            });
                        case u.RecurrenceOptions.WEEKDAY_ONLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: r,
                    freq: a,
                    interval: i,
                    byweekday: o,
                    bymonth: d,
                    bymonthday: c,
                    byyearday: f,
                    count: E
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == r ? void 0 : r.toISOString(),
                    frequency: a,
                    interval: i,
                    byWeekday: null != o ? new Set(o) : null,
                    byMonth: null != d ? new Set(d) : null,
                    byMonthDay: null != c ? new Set(c) : null,
                    byYearDay: null != f ? new Set(f) : null,
                    count: E
                }
            }

            function y(e, t) {
                if (null == t) return u.RecurrenceOptions.NONE;
                let n = C(t);
                switch (n.options.freq) {
                    case s.RRule.WEEKLY:
                        return u.RecurrenceOptions.WEEKLY;
                    case s.RRule.YEARLY:
                        return u.RecurrenceOptions.YEARLY;
                    case s.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, A(e))) return u.RecurrenceOptions.NONE;
                        return u.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return u.RecurrenceOptions.NONE
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var l = n("693566"),
                r = n.n(l),
                a = n("872717"),
                s = n("913144"),
                u = n("851387"),
                i = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                i.default.shouldFetch(e) && await d(e)
            }
            let f = new r({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var r, s;
                    return f.set(l, !0), r = e, s = t, a.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(r, s)
                    }).then(e => (u.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                r = n("913144");
            let a = {},
                s = {};
            class u extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = s[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var i = new u(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    a[t] = n, s[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, r = a[t];
                    if (null == r) return !1;
                    r[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, r = a[t];
                    if (null == r || null == r[n]) return !1;
                    let s = Object.keys(l).length;
                    r[n] += s
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete s[t.id]
                }
            })
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return p
                },
                updateImpersonating: function() {
                    return N
                },
                stopImpersonating: function() {
                    return m
                },
                updateImpersonatedChannels: function() {
                    return T
                },
                updateImpersonatedRoles: function() {
                    return A
                },
                updateImpersonatedData: function() {
                    return M
                }
            });
            var l = n("913144"),
                r = n("716241"),
                a = n("393414"),
                s = n("42203"),
                u = n("923959"),
                i = n("26989"),
                o = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                h = n("38654"),
                _ = n("507950"),
                g = n("49111"),
                R = n("724210");

            function p(e, t) {
                E.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function N(e, t) {
                let n = h.default.getData(e);
                null != n && n.type === t.type && (E.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === _.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function m(e) {
                l.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    l = null != t && (0, R.isStaticChannelRoute)(t);
                if (!l && !d.default.can(g.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(g.Routes.CHANNEL(e, t.id))
                }
            }

            function T(e, t, n) {
                let l = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => l.add(e)), n.forEach(e => l.delete(e)), N(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: l
                })
            }

            function A(e, t) {
                let n = o.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        l = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (l.some(e => !t.roles.includes(e))) return !0;
                        let r = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            a = r.filter(e => !n.includes(e));
                        return a.length > 0 && T(e, a, []), !1
                    })
                }(e, t);
                let l = {};
                t.forEach(e => l[e] = n.roles[e]), N(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: l
                })
            }

            function M(e, t) {
                N(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        144491: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return d
                },
                transitionToThread: function() {
                    return c
                },
                transitionToThreadMessage: function() {
                    return f
                },
                transitionToMessage: function() {
                    return E
                }
            });
            var l = n("627445"),
                r = n.n(l),
                a = n("450911"),
                s = n("565298"),
                u = n("42203"),
                i = n("393414"),
                o = n("49111");

            function d(e, t, n) {
                let l = u.default.getChannel(e);
                if (null == l) return;
                let r = (0, s.getGuildIdForGenericRedirect)(l);
                a.default.preload(l.guild_id, l.id), (0, i.transitionTo)(o.Routes.CHANNEL(r, l.id), t, n)
            }

            function c(e, t) {
                r(null != e.parent_id, "Thread must have a parent ID.");
                let n = (0, s.getGuildIdForGenericRedirect)(e);
                (0, i.transitionTo)(o.Routes.CHANNEL(n, e.id), void 0, t)
            }

            function f(e, t, n) {
                r(null != e.parent_id, "Thread must have a parent ID.");
                let l = (0, s.getGuildIdForGenericRedirect)(e);
                (0, i.transitionTo)(o.Routes.CHANNEL(l, e.id, t), void 0, n)
            }

            function E(e, t, n, l) {
                let r = u.default.getChannel(e);
                if (null == r) return;
                let a = (0, s.getGuildIdForGenericRedirect)(r);
                (0, i.transitionTo)(o.Routes.CHANNEL(a, r.id, t), n, l)
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("866227"),
                r = n.n(l),
                a = n("666038");
            class s extends a.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
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
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var l = n("917351"),
                r = n.n(l);
            let a = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("697218"),
                s = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, u = e.updateModalProps, r = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == l) {
                    null == i || i();
                    return
                }
                let d = l(h, c, s);

                function c() {
                    null == i || i()
                }

                function f(e) {
                    r(d), n(e)
                }

                function E(e) {
                    r(d), a(e)
                }

                function h(e) {
                    return u(d, h, c, {
                        ...s,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
                    let {
                        res: t
                    } = e;
                    u(d, h, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: r,
                    mfaCodeHandler: a = i,
                    isModalOpen: s = !1,
                    ...u
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, i;
                    if (r = e, i = s, r.body && 60008 === r.body.code || i && 429 === r.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...u
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: r = null !== (l = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(r) ? i : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("551042"),
                a = n("920636");
            let s = (e, t, n) => function(r) {
                return (0, l.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function u(e, t, n) {
                return (0, r.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, l) {
                return (0, r.updateModal)(e, s(t, n, l))
            }
        }
    }
]);