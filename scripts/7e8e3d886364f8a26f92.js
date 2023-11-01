(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81360"], {
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                a = s.n(i),
                l = s("77078"),
                r = s("782340"),
                d = s("239636");
            let u = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function o(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": i,
                    look: o = u.DEFAULT
                } = e;
                return (0, n.jsx)(l.Clickable, {
                    "aria-label": null != i ? i : r.default.Messages.REMOVE,
                    className: a(d.button, o, t),
                    onClick: s
                })
            }
            o.Looks = u
        },
        747593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return K
                }
            });
            var n, i, a = s("37983"),
                l = s("884691"),
                r = s("917351"),
                d = s.n(r),
                u = s("866227"),
                o = s.n(u),
                c = s("817736"),
                h = s("118810"),
                f = s("446674"),
                S = s("669491"),
                E = s("77078"),
                N = s("519705"),
                g = s("668597"),
                _ = s("320954"),
                T = s("679653"),
                O = s("419830"),
                M = s("483226"),
                m = s("44574"),
                C = s("514933"),
                I = s("47495"),
                p = s("308305"),
                L = s("184488"),
                A = s("319165"),
                U = s("233069"),
                R = s("42203"),
                x = s("245997"),
                v = s("525065"),
                D = s("305961"),
                H = s("27618"),
                G = s("282109"),
                j = s("697218"),
                b = s("145131"),
                F = s("612434"),
                y = s("956089"),
                P = s("449008"),
                w = s("701909"),
                B = s("49111"),
                V = s("468200"),
                Y = s("782340"),
                k = s("296884");
            (n = i || (i = {})).MUTED = "muted", n.MESSAGE_NOTIFICATIONS = "message_notifications", n.SUPPRESS_EVERYONE = "suppress_everyone", n.SUPPRESS_ROLES = "suppress_roles", n.MOBILE_PUSH = "mobile_push", n.MUTE_EVENTS = "mute_scheduled_events", n.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class W extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: s,
                        channelOverridesProp: n
                    } = t;
                    return e.channelOverrides !== n ? (s = new Set(s), (0, I.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
                        overrides: s,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: s
                    } = this.state, n = null != s ? this._channelRefs[s] : null;
                    if (null != this._scroller && null != n && s !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(n);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
                            var i;
                            null === (i = this._scroller) || void 0 === i || i.scrollIntoViewNode({
                                node: e,
                                animate: !0,
                                padding: 20,
                                callback: () => this.setState({
                                    lastSelected: null
                                })
                            }), n.highlight()
                        }
                    }
                    if (this.props.channelOverrides !== e.channelOverrides) {
                        let {
                            overrides: e
                        } = this.state;
                        e = new Set(e), (0, I.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t) {
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    })
                }
                handleRadioChange(e, t) {
                    let {
                        value: s
                    } = t;
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: s
                    })
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(E.ModalHeader, {
                        children: [(0, a.jsxs)(b.default.Child, {
                            children: [(0, a.jsx)(E.Heading, {
                                variant: "heading-lg/semibold",
                                children: Y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(E.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(b.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(E.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(E.ModalFooter, {
                        children: (0, a.jsx)(E.Button, {
                            onClick: this.props.onClose,
                            children: Y.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: s,
                        guild: n
                    } = this.props, l = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : V.MuteUntilSeconds.ALWAYS;
                    return null == n ? null : (0, a.jsxs)(E.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(E.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: this.handleCheckboxChange.bind(this, i.MUTED),
                            note: Y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: Y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: n.name
                            })
                        }), t ? (0, a.jsxs)(b.default, {
                            className: k.spacing,
                            align: b.default.Align.CENTER,
                            children: [(0, a.jsxs)(b.default, {
                                direction: b.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(E.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: Y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(A.default, {
                                    className: k.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, a.jsx)(E.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, I.getMuteTimeOptions)(),
                                value: l,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(E.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: k.spacing,
                        children: [(0, a.jsx)(E.FormItem, {
                            title: Y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(E.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, i.MESSAGE_NOTIFICATIONS),
                                options: (e = n, [{
                                    name: Y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: B.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= B.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? Y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: Y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: B.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: Y.default.Messages.FORM_LABEL_NOTHING,
                                    value: B.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(E.FormDivider, {})]
                    })
                }
                renderUnreadsOptions() {
                    let {
                        isGuildUnreadsEnabled: e,
                        muted: t,
                        guildId: s
                    } = this.props;
                    return (0, a.jsx)(E.FormItem, {
                        children: (0, a.jsx)(E.FormSwitch, {
                            onChange: e => {
                                (0, M.setGuildUnreadSetting)(s, e)
                            },
                            value: !t && e,
                            disabled: t,
                            note: (0, a.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                children: Y.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN_NOTE
                            }),
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [Y.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, a.jsx)(y.TextBadge, {
                                    text: Y.default.Messages.BETA,
                                    color: S.default.unsafe_rawColors.BRAND_500.css,
                                    className: k.betaTag
                                })]
                            })
                        })
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: s,
                        muted: n,
                        muteEvents: l,
                        notifyHighlights: r,
                        guildId: d
                    } = this.props;
                    return (0, a.jsxs)(E.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(E.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, i.SUPPRESS_EVERYONE),
                            value: e,
                            children: Y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(E.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, i.SUPPRESS_ROLES),
                            value: t,
                            children: Y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(E.FormSwitch, {
                            onChange: e => {
                                N.default.updateGuildNotificationSettings(d, {
                                    [i.NOTIFY_HIGHLIGHTS]: e ? B.HighlightSettings.DISABLED : B.HighlightSettings.ENABLED
                                })
                            },
                            value: n || r === B.HighlightSettings.DISABLED,
                            disabled: n,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    children: Y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(E.Anchor, {
                                        href: w.default.getArticleURL(B.HelpdeskArticles.HIGHLIGHTS),
                                        children: Y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: Y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: l,
                            onChange: this.handleCheckboxChange.bind(this, i.MUTE_EVENTS),
                            children: Y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: !n && s,
                            disabled: n,
                            onChange: this.handleCheckboxChange.bind(this, i.MOBILE_PUSH),
                            children: Y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, s = d(e).filter(e => {
                        let {
                            channel: s
                        } = e;
                        return s.type !== B.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, j.default, H.default)
                        }
                    }).value();
                    return (0, a.jsxs)(E.FormItem, {
                        title: Y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(E.FormText, {
                            type: E.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: Y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(E.SearchableSelect, {
                            value: "",
                            placeholder: Y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: s,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: s,
                        messageNotifications: n,
                        categories: i,
                        checkboxColor: l
                    } = this.props, {
                        overrides: r
                    } = this.state, d = s.map(s => {
                        let {
                            channel: d
                        } = s;
                        if (!r.has(d.id) || null != i[d.id] && 0 === i[d.id].length) return null;
                        let u = e[d.id];
                        return (0, a.jsx)(p.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != u && (0, g.computeIsMuted)(u),
                            messageNotifications: null != u ? u.message_notifications : null,
                            guildMessageNotifications: n,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: l
                        }, d.id)
                    }).filter(P.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(E.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: Y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(b.default, {
                            children: [(0, a.jsx)(E.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: Y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(E.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: Y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(E.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: Y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(E.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: Y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(E.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(E.Tooltip, {
                                    text: Y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: Y.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    let {
                        showUnreadsSettings: e
                    } = this.props;
                    return (0, a.jsxs)(E.ModalRoot, {
                        "aria-label": Y.default.Messages.NOTIFICATION_SETTINGS,
                        size: E.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(E.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), e && this.renderUnreadsOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._channelRefs = {}, this.state = {
                        overrides: new Set((0, I.filterOverrides)(this.props.channelOverrides)),
                        channelOverridesProp: this.props.channelOverrides,
                        lastSelected: null
                    }, this.setScrollerRef = e => {
                        this._scroller = e
                    }, this.handleSelectChange = e => {
                        if (null == e) return;
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).add(e), this.setState({
                            overrides: t,
                            lastSelected: e
                        })
                    }, this.handleSelectMuteTime = e => {
                        let t = e > 0 ? o().add(e, "second").toISOString() : null;
                        N.default.updateGuildNotificationSettings(this.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: e,
                                end_time: t
                            }
                        })
                    }, this.handleDeleteOverride = e => {
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).delete(e), this.setState({
                            overrides: t
                        })
                    }, this.renderOptionLabel = e => {
                        let t = R.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let s = R.default.getChannel(t.parent_id),
                            n = null != s ? s.name : null;
                        return (0, a.jsx)(F.default, {
                            icon: (0, O.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: n
                        })
                    }
                }
            }

            function K(e) {
                let {
                    guildId: t,
                    ...s
                } = e, n = (0, m.useGuildUnreadsExperiment)(), i = (0, C.useIsNotificationRedesignEnabled)(), l = (0, f.useStateFromStoresObject)([x.default, D.default, v.default, G.default], () => {
                    let e = x.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: D.default.getGuild(t),
                        memberCount: v.default.getMemberCount(t),
                        suppressEveryone: G.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: G.default.isSuppressRolesEnabled(t),
                        muteEvents: G.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: G.default.isMobilePushEnabled(t),
                        muted: G.default.isMuted(t),
                        muteConfig: G.default.getMuteConfig(t),
                        messageNotifications: G.default.getMessageNotifications(t),
                        channelOverrides: G.default.getChannelOverrides(t),
                        channels: (0, _.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, U.isGuildSelectableChannelType)(t) || t === B.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: G.default.getNotifyHighlights(t),
                        showUnreadsSettings: n,
                        isGuildUnreadsEnabled: G.default.isGuildUnreadSettingEnabled(t)
                    }
                }), r = (0, E.useToken)(S.default.unsafe_rawColors.GREEN_360).hex(), d = i ? L.default : W;
                return (0, a.jsx)(d, {
                    ...l,
                    ...s,
                    checkboxColor: r
                })
            }
        },
        419830: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getChannelIconTooltipText: function() {
                    return Z
                },
                getChannelIconComponent: function() {
                    return q
                },
                getSimpleChannelIconComponent: function() {
                    return Q
                }
            });
            var n = s("677315"),
                i = s("157186"),
                a = s("26989"),
                l = s("305961"),
                r = s("88093"),
                d = s("697218"),
                u = s("290182"),
                o = s("116320"),
                c = s("437825"),
                h = s("972894"),
                f = s("446685"),
                S = s("978499"),
                E = s("617559"),
                N = s("213523"),
                g = s("593195"),
                _ = s("361777"),
                T = s("497757"),
                O = s("109264"),
                M = s("991497"),
                m = s("393621"),
                C = s("905999"),
                I = s("660074"),
                p = s("223383"),
                L = s("45029"),
                A = s("990745"),
                U = s("190986"),
                R = s("721618"),
                x = s("733160"),
                v = s("990864"),
                D = s("274652"),
                H = s("357077"),
                G = s("922744"),
                j = s("841307"),
                b = s("745183"),
                F = s("620193"),
                y = s("368121"),
                P = s("944633"),
                w = s("468507"),
                B = s("228427"),
                V = s("697468"),
                Y = s("547896"),
                k = s("619911"),
                W = s("959097"),
                K = s("656038"),
                z = s("724210"),
                X = s("49111"),
                J = s("782340");

            function Z(e, t, s, n) {
                if (null == e) return null;
                if (e.id === (null == t ? void 0 : t.rulesChannelId)) return J.default.Messages.CHANNEL_TOOLTIP_RULES;
                switch (e.type) {
                    case X.ChannelTypes.GUILD_TEXT:
                        if (n) return J.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                        if (e.isNSFW()) return J.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                        if ((0, K.default)(e)) return J.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                        return J.default.Messages.CHANNEL_TOOLTIP_TEXT;
                    case X.ChannelTypes.GUILD_FORUM:
                        let i = e.isMediaChannel();
                        if (e.isNSFW()) return i ? J.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : J.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                        if ((0, K.default)(e)) return i ? J.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : J.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                        return i ? J.default.Messages.MEDIA_CHANNEL : J.default.Messages.FORUM;
                    case X.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return J.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                        if ((0, K.default)(e)) return J.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                        return J.default.Messages.MEDIA_CHANNEL;
                    case X.ChannelTypes.GUILD_STAGE_VOICE:
                        if (s) return J.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                        if ((0, K.default)(e)) return J.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                        return J.default.Messages.CHANNEL_TOOLTIP_STAGE;
                    case X.ChannelTypes.GUILD_VOICE:
                        if (s) return J.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                        if ((0, K.default)(e)) return J.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                        return J.default.Messages.CHANNEL_TOOLTIP_VOICE;
                    case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return J.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                        if ((0, K.default)(e)) return J.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                        return J.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
                    case X.ChannelTypes.GUILD_STORE:
                        return J.default.Messages.CHANNEL_TOOLTIP_STORE;
                    case X.ChannelTypes.DM:
                        return J.default.Messages.DM;
                    case X.ChannelTypes.GROUP_DM:
                        return J.default.Messages.GROUP_DM;
                    case X.ChannelTypes.GUILD_DIRECTORY:
                        return J.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
                    case X.ChannelTypes.PUBLIC_THREAD:
                        return J.default.Messages.THREAD;
                    case X.ChannelTypes.PRIVATE_THREAD:
                        return J.default.Messages.PRIVATE_THREAD;
                    default:
                        return null
                }
            }

            function q(e, t) {
                var s, J, Z;
                let q = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        locked: Q = !1,
                        video: $ = !1,
                        stream: ee = !1,
                        hasActiveThreads: et = !1,
                        textFocused: es = !1
                    } = q;
                if (null == e) return null;
                null == t && (t = l.default.getGuild(e.getGuildId()));
                let en = (0, i.shouldShowMembershipVerificationGate)(null === (s = t) || void 0 === s ? void 0 : s.id, [l.default, r.default, d.default, a.default]),
                    ei = null != t && (0, n.canSeeGuildHome)(null === (J = t) || void 0 === J ? void 0 : J.id);
                if ((null == e ? void 0 : e.id) === (null === (Z = t) || void 0 === Z ? void 0 : Z.rulesChannelId)) return N.default;
                switch (e.type) {
                    case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (et) {
                            if (e.isNSFW()) return H.default;
                            if ((0, K.default)(e)) return j.default;
                            else return u.default
                        }
                        if (e.isNSFW()) return D.default;
                        if ((0, K.default)(e)) return v.default;
                        return x.default;
                    case X.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case X.ChannelTypes.DM:
                    case X.ChannelTypes.GROUP_DM:
                        return o.default;
                    case X.ChannelTypes.PRIVATE_THREAD:
                        return b.default;
                    case X.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case X.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return G.default;
                        if (e.isForumPost()) return I.default;
                        else return W.default;
                    case X.ChannelTypes.GUILD_TEXT:
                        if (et) {
                            if (e.isNSFW()) return G.default;
                            if ((0, K.default)(e)) return b.default;
                            else return W.default
                        }
                        if (e.isNSFW()) return T.default;
                        if ((0, K.default)(e)) return _.default;
                        return g.default;
                    case X.ChannelTypes.GUILD_FORUM:
                        let ea = e.isMediaChannel();
                        if (e.isNSFW()) return ea ? R.default : C.default;
                        if ((0, K.default)(e)) return ea ? U.default : m.default;
                        else return ea ? A.default : M.default;
                    case X.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return R.default;
                        if ((0, K.default)(e)) return U.default;
                        else return A.default;
                    case X.ChannelTypes.GUILD_STAGE_VOICE:
                        if (en) return (0, K.default)(e) ? L.default : V.default;
                        if (Q) return L.default;
                        if ((0, K.default)(e)) return V.default;
                        else return B.default;
                    case X.ChannelTypes.GUILD_VOICE:
                        if (es) return O.default;
                        if (e.isNSFW()) return w.default;
                        if (ee) return k.default;
                        if (en) {
                            if ((0, K.default)(e)) return L.default;
                            return $ ? h.default : P.default
                        }
                        if (Q) return L.default;
                        if ((0, K.default)(e)) return $ ? h.default : P.default;
                        else return $ ? c.default : y.default;
                    case X.ChannelTypes.GUILD_DIRECTORY:
                        return E.default;
                    case X.ChannelTypes.GUILD_CATEGORY:
                        return S.default;
                    default:
                        if (z.StaticChannelIds.has(e.id)) {
                            if (e.id === z.StaticChannelId.GUILD_HOME || e.id === z.StaticChannelId.SERVER_GUIDE) {
                                if (ei) return p.default;
                                return F.default
                            }
                            if (e.id === z.StaticChannelId.CHANNEL_BROWSER || e.id === z.StaticChannelId.CUSTOMIZE_COMMUNITY) return f.default
                        }
                        return null
                }
            }

            function Q(e) {
                switch (e) {
                    case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return x.default;
                    case X.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case X.ChannelTypes.DM:
                    case X.ChannelTypes.GROUP_DM:
                        return o.default;
                    case X.ChannelTypes.PRIVATE_THREAD:
                        return b.default;
                    case X.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case X.ChannelTypes.PUBLIC_THREAD:
                        return W.default;
                    case X.ChannelTypes.GUILD_TEXT:
                    case X.ChannelTypes.GUILD_FORUM:
                    case X.ChannelTypes.GUILD_MEDIA:
                        return g.default;
                    case X.ChannelTypes.GUILD_STAGE_VOICE:
                        return B.default;
                    case X.ChannelTypes.GUILD_VOICE:
                        return y.default;
                    case X.ChannelTypes.GUILD_CATEGORY:
                        return S.default;
                    default:
                        return null
                }
            }
        },
        483226: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setChannelUnreadSetting: function() {
                    return u
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return c
                }
            });
            var n = s("913144"),
                i = s("519705"),
                a = s("282109"),
                l = s("568734"),
                r = s("627869"),
                d = s("397336");

            function u(e, t, s) {
                let n = a.default.getGuildChannelFlags(e, t);
                n = (0, l.setFlag)(n, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s === r.UserUnreadSettings.ALL_MESSAGES), n = (0, l.setFlag)(n, d.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, s === r.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: n
                })
            }

            function o(e, t) {
                let s = a.default.getGuildFlags(e);
                s = (0, l.setFlag)(s, d.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), s = (0, l.setFlag)(s, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
                    flags: s
                })
            }

            function c(e) {
                n.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        76618: function(e, t, s) {
            "use strict";
            var n, i;
            s.r(t), s.d(t, {
                NotificationSettingsKeys: function() {
                    return n
                }
            }), (i = n || (n = {})).MUTED = "muted", i.SERVER_UNREADS = "serverUnreads", i.SUPPRESS_EVERYONE = "suppressEveryone", i.SUPPRESS_ROLES = "suppressAllRoleMentions", i.MOBILE_PUSH = "mobilePushNotifications", i.MUTE_EVENTS = "muteScheduledEvents", i.NOTIFY_HIGHLIGHTS = "notifyHighlights", i.MUTE_CONFIG = "muteConfig"
        },
        872225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("446674"),
                i = s("913144"),
                a = s("49111");
            let l = {
                    ALL: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: a.HighlightSettings.ENABLED,
                        mobilePushNotifications: a.UserNotificationSettings.ALL_MESSAGES,
                        inAppNotifications: a.UserNotificationSettings.ALL_MESSAGES,
                        serverUnreads: a.UserNotificationSettings.ALL_MESSAGES,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    ESSENTIALS: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: a.HighlightSettings.ENABLED,
                        mobilePushNotifications: a.UserNotificationSettings.ONLY_MENTIONS,
                        inAppNotifications: a.UserNotificationSettings.ONLY_MENTIONS,
                        serverUnreads: a.UserNotificationSettings.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    MUTED: {
                        suppressEveryone: !0,
                        suppressAllRoleMentions: !0,
                        notifyHighlights: a.HighlightSettings.DISABLED,
                        mobilePushNotifications: a.UserNotificationSettings.NO_MESSAGES,
                        inAppNotifications: a.UserNotificationSettings.NO_MESSAGES,
                        serverUnreads: a.UserNotificationSettings.NO_MESSAGES,
                        muteScheduledEvents: !0,
                        muted: !0,
                        muteConfig: {
                            end_time: null
                        }
                    },
                    CUSTOM: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: a.HighlightSettings.ENABLED,
                        mobilePushNotifications: a.UserNotificationSettings.ONLY_MENTIONS,
                        inAppNotifications: a.UserNotificationSettings.ONLY_MENTIONS,
                        serverUnreads: a.UserNotificationSettings.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    }
                },
                r = l,
                d = {};
            class u extends n.default.PersistedStore {
                getState() {
                    return {
                        userNotificationProfiles: r,
                        selectedProfiles: d
                    }
                }
                initialize(e) {
                    null != e && (r = e.userNotificationProfiles)
                }
                getNotificationProfiles() {
                    return r
                }
                getSelectedProfile(e, t, s) {
                    return null == d[e] && (d[e] = c(t, s)), {
                        selectedOption: d[e],
                        profile: r[d[e]]
                    }
                }
            }
            u.displayName = "NotificationProfilesStore", u.persistKey = "NotificationProfilesStore";
            let o = e => ({
                    muted: e.muted,
                    mute_config: e.muteConfig,
                    message_notifications: e.serverUnreads,
                    mobile_push: e.mobilePushNotifications !== a.UserNotificationSettings.NO_MESSAGES,
                    suppress_everyone: e.suppressEveryone,
                    suppress_roles: e.suppressAllRoleMentions,
                    mute_scheduled_events: e.muteScheduledEvents,
                    notify_highlights: e.notifyHighlights
                }),
                c = (e, t) => {
                    if (e.muted) return "MUTED";
                    if (e.message_notifications === a.UserNotificationSettings.ALL_MESSAGES) return "ALL";
                    if (t) {
                        var s, n, i, d, u, o, c;
                        let t = (r = l).CUSTOM.mobilePushNotifications;
                        null !== e.mobile_push && void 0 !== e.mobile_push && !e.mobile_push && (t = a.UserNotificationSettings.NO_MESSAGES), r.CUSTOM = {
                            muted: null !== (s = e.muted) && void 0 !== s ? s : r.CUSTOM.muted,
                            muteConfig: null !== (n = e.mute_config) && void 0 !== n ? n : r.CUSTOM.muteConfig,
                            serverUnreads: null !== (i = e.message_notifications) && void 0 !== i ? i : r.CUSTOM.serverUnreads,
                            mobilePushNotifications: t,
                            suppressEveryone: null !== (d = e.suppress_everyone) && void 0 !== d ? d : r.CUSTOM.suppressEveryone,
                            suppressAllRoleMentions: null !== (u = e.suppress_roles) && void 0 !== u ? u : r.CUSTOM.suppressAllRoleMentions,
                            muteScheduledEvents: null !== (o = e.mute_scheduled_events) && void 0 !== o ? o : r.CUSTOM.muteScheduledEvents,
                            notifyHighlights: null !== (c = e.notify_highlights) && void 0 !== c ? c : r.CUSTOM.notifyHighlights,
                            inAppNotifications: r.CUSTOM.inAppNotifications
                        }
                    }
                    return "CUSTOM"
                },
                h = new u(i.default, {
                    GUILD_SET_NOTIFICATION_PROFILE: e => {
                        d[e.guildId] = e.profile, e.handleUpdate(e.guildId, o(r[d[e.guildId]]))
                    },
                    GUILD_UPDATE_NOTIFICATION_PROFILE: e => {
                        r[e.profile] = {
                            ...r[e.profile],
                            ...e.updatedSettings
                        }, e.handleUpdate(e.guildId, o(r[e.profile]))
                    }
                });
            var f = h
        },
        47495: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getMuteTimeOptions: function() {
                    return r
                },
                filterOverrides: function() {
                    return d
                }
            });
            var n = s("668597"),
                i = s("49111"),
                a = s("468200"),
                l = s("782340");

            function r() {
                return [{
                    label: l.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: a.MuteUntilSeconds.MINUTES_15
                }, {
                    label: l.default.Messages.MUTE_DURATION_1_HOUR,
                    value: a.MuteUntilSeconds.HOURS_1
                }, {
                    label: l.default.Messages.MUTE_DURATION_3_HOURS,
                    value: a.MuteUntilSeconds.HOURS_3
                }, {
                    label: l.default.Messages.MUTE_DURATION_8_HOURS,
                    value: a.MuteUntilSeconds.HOURS_8
                }, {
                    label: l.default.Messages.MUTE_DURATION_24_HOURS,
                    value: a.MuteUntilSeconds.HOURS_24
                }, {
                    label: l.default.Messages.MUTE_DURATION_ALWAYS,
                    value: a.MuteUntilSeconds.ALWAYS
                }]
            }

            function d(e) {
                return Object.keys(e).filter(t => !!(0, n.computeIsMuted)(e[t]) || e[t].message_notifications !== i.UserNotificationSettings.NULL || !1)
            }
        },
        308305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelNotificationSettings: function() {
                    return _
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("77078"),
                l = s("519705"),
                r = s("133403"),
                d = s("679653"),
                u = s("419830"),
                o = s("42203"),
                c = s("245997"),
                h = s("27618"),
                f = s("697218"),
                S = s("145131"),
                E = s("49111"),
                N = s("782340"),
                g = s("296884");
            class _ extends i.PureComponent {
                highlight() {
                    this.setState({
                        highlight: !0
                    }, () => {
                        null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
                    })
                }
                componentWillUnmount() {
                    null != this._timeout && clearTimeout(this._timeout)
                }
                setMessageNotification(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            channel: s
                        } = this.props,
                        n = s.getGuildId();
                    null != n && l.default.updateChannelOverrideSettings(n, s.id, {
                        message_notifications: e,
                        muted: t
                    })
                }
                handleRadioChange(e) {
                    this.setMessageNotification(e)
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: s,
                        muted: i,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === E.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let u = a.Checkbox.Types.INVERTED;
                    return (i || t === E.UserNotificationSettings.NULL || null == t) && (u = a.Checkbox.Types.GHOST), (0, n.jsx)(a.Checkbox, {
                        value: !s && d,
                        disabled: s,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: u,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: s
                    } = this.props;
                    null != s.parent_id && (e = o.default.getChannel(s.parent_id));
                    let i = (0, u.getChannelIconComponent)(s);
                    if (s.type === E.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
                        let e = c.default.getCategories(s.guild_id);
                        t = N.default.Messages.NUM_CHANNELS.format({
                            num: null != e[s.id] ? e[s.id].length : 0
                        })
                    } else t = null != e ? N.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, f.default, h.default)
                    }) : N.default.Messages.NO_CATEGORY;
                    return (0, n.jsxs)(S.default, {
                        grow: 1,
                        className: g.nameContainer,
                        children: [null != i ? (0, n.jsx)(i, {
                            className: g.icon
                        }) : null, (0, n.jsxs)("div", {
                            className: g.channelNameContainer,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: g.channelName,
                                children: (0, d.computeChannelName)(s, f.default, h.default)
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: g.channelNameByline,
                                children: t
                            })]
                        })]
                    })
                }
                renderOptions() {
                    let {
                        muted: e,
                        guildMuted: t
                    } = this.props;
                    return (0, n.jsxs)(S.default, {
                        grow: 0,
                        shrink: 0,
                        className: g.checkboxGroup,
                        justify: S.default.Justify.AROUND,
                        align: S.default.Align.CENTER,
                        children: [(0, n.jsx)(S.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? g.checkboxContainerMuted : g.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(E.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, n.jsx)(S.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? g.checkboxContainerMuted : g.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(E.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, n.jsx)(S.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? g.checkboxContainerMuted : g.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(E.UserNotificationSettings.NO_MESSAGES)
                        }), (0, n.jsx)(S.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: g.checkboxMute,
                            children: (0, n.jsx)(a.Checkbox, {
                                value: e,
                                shape: a.Checkbox.Shapes.BOX,
                                type: a.Checkbox.Types.INVERTED,
                                onChange: this.handleMute
                            })
                        })]
                    })
                }
                render() {
                    let {
                        highlight: e
                    } = this.state;
                    return (0, n.jsxs)(a.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? g.overrideHighlight : g.override,
                        children: [this.renderName(), this.renderOptions(), (0, n.jsx)(r.default, {
                            className: g.removeOverride,
                            onClick: this.handleDelete
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        highlight: !1
                    }, this.unhighlight = () => {
                        this.setState({
                            highlight: !1
                        })
                    }, this.handleMute = (e, t) => {
                        let {
                            messageNotifications: s
                        } = this.props;
                        this.setMessageNotification(null != s ? s : E.UserNotificationSettings.NULL, t)
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(E.UserNotificationSettings.NULL, !1), null != e && e(t.id)
                    }
                }
            }
        },
        819666: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("917351"),
                l = s.n(a),
                r = s("669491"),
                d = s("77078"),
                u = s("668597"),
                o = s("679653"),
                c = s("419830"),
                h = s("42203"),
                f = s("27618"),
                S = s("697218"),
                E = s("145131"),
                N = s("612434"),
                g = s("449008"),
                _ = s("47495"),
                T = s("308305"),
                O = s("49111"),
                M = s("782340"),
                m = s("6847");
            let C = e => {
                let t = h.default.getChannel(e.value);
                if (null == t) return e.label;
                let s = h.default.getChannel(t.parent_id),
                    i = null != s ? s.name : null;
                return (0, n.jsx)(N.default, {
                    icon: (0, c.getChannelIconComponent)(t),
                    title: e.label,
                    subtitle: i
                })
            };

            function I(e) {
                let {
                    channelOverrides: t,
                    guildMuted: s,
                    channels: a,
                    messageNotifications: c,
                    categories: h
                } = e, [N, I] = i.useState(new Set((0, _.filterOverrides)(t))), p = e => {
                    let t = new Set(N);
                    t.delete(e), I(t)
                }, L = (0, d.useToken)(r.default.unsafe_rawColors.GREEN_360).hex(), A = l(a).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== O.ChannelTypes.GUILD_CATEGORY || null != h[t.id] && h[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, o.computeChannelName)(t, S.default, f.default)
                    }
                }).value(), U = a.map(e => {
                    let {
                        channel: i
                    } = e;
                    if (!N.has(i.id) || null != h[i.id] && 0 === h[i.id].length) return null;
                    let a = t[i.id];
                    return (0, n.jsx)(T.ChannelNotificationSettings, {
                        channel: i,
                        guildMuted: s,
                        muted: null != a && (0, u.computeIsMuted)(a),
                        messageNotifications: null != a ? a.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: p,
                        checkboxColor: L
                    }, i.id)
                }).filter(g.isNotNullish);
                return (0 === N.size || 0 === U.length) && U.push((0, n.jsx)("div", {
                    className: m.overridePlaceholder,
                    children: (0, n.jsx)(d.Text, {
                        className: m.overrideHeader,
                        variant: "text-sm/semibold",
                        children: M.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    })
                }, "placeholder")), (0, n.jsxs)("div", {
                    className: m.container,
                    children: [(0, n.jsxs)(d.FormItem, {
                        title: M.default.Messages.NOTIFICATION_OVERRIDES,
                        className: m.largeSpacing,
                        children: [(0, n.jsx)(d.FormText, {
                            type: d.FormText.Types.DESCRIPTION,
                            className: m.smallSpacing,
                            children: M.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, n.jsx)(d.SearchableSelect, {
                            value: "",
                            placeholder: M.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: C,
                            options: A,
                            onChange: e => {
                                if (null == e) return;
                                let t = new Set(N);
                                t.add(e), I(t)
                            }
                        })]
                    }), (0, n.jsxs)("div", {
                        className: m.overrideList,
                        children: [(0, n.jsxs)(E.default, {
                            children: [(0, n.jsx)(d.Heading, {
                                variant: "eyebrow",
                                className: m.headerName,
                                children: M.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(d.Heading, {
                                variant: "eyebrow",
                                className: m.headerOption,
                                children: M.default.Messages.FORM_LABEL_ALL
                            }), (0, n.jsx)(d.Heading, {
                                variant: "eyebrow",
                                className: m.headerOption,
                                children: M.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, n.jsx)(d.Heading, {
                                variant: "eyebrow",
                                className: m.headerOption,
                                children: M.default.Messages.FORM_LABEL_NOTHING
                            }), (0, n.jsx)(d.Heading, {
                                variant: "eyebrow",
                                className: m.headerOption,
                                children: (0, n.jsx)(d.Tooltip, {
                                    text: M.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, n.jsx)("span", {
                                        ...e,
                                        children: M.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), U]
                    })]
                })
            }
        },
        34026: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                d = s("519705"),
                u = s("954419"),
                o = s("76618"),
                c = s("49111"),
                h = s("782340"),
                f = s("526211");

            function S(e) {
                let {
                    guild: t,
                    suppressEveryone: s,
                    suppressRoles: a,
                    mobilePush: S,
                    serverUnreads: E,
                    notifyHighlights: N
                } = e, g = i.useMemo(() => [{
                    value: c.UserNotificationSettings.ALL_MESSAGES,
                    label: h.default.Messages.USER_UNREADS_ALL_MESSAGES
                }, {
                    value: c.UserNotificationSettings.ONLY_MENTIONS,
                    label: h.default.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS
                }, {
                    value: c.UserNotificationSettings.NO_MESSAGES,
                    label: h.default.Messages.USER_UNREADS_NULL
                }], []);
                return (0, n.jsx)("div", {
                    className: l(f.largeSpacing, f.container),
                    children: (0, n.jsxs)(r.FormItem, {
                        children: [(0, n.jsxs)("div", {
                            className: f.dropDownContainer,
                            children: [(0, n.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: h.default.Messages.MOBILE_PUSH
                            }), (0, n.jsx)(u.default, {
                                value: S,
                                className: f.dropDown,
                                options: g,
                                onChange: e => {
                                    d.default.handleSelectChange("CUSTOM", o.NotificationSettingsKeys.MOBILE_PUSH, e.value, t)
                                }
                            })]
                        }), (0, n.jsxs)("div", {
                            className: f.dropDownContainer,
                            children: [(0, n.jsxs)(r.Text, {
                                variant: "text-md/medium",
                                children: [" ", h.default.Messages.SERVER_UNREADS]
                            }), (0, n.jsx)(u.default, {
                                value: E,
                                className: f.dropDown,
                                options: g,
                                onChange: e => {
                                    d.default.handleSelectChange("CUSTOM", o.NotificationSettingsKeys.SERVER_UNREADS, e.value, t)
                                }
                            })]
                        }), (0, n.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => d.default.handleCheckboxChange("CUSTOM", o.NotificationSettingsKeys.SUPPRESS_EVERYONE, !e, t),
                            hideBorder: !0,
                            value: !s,
                            children: h.default.Messages.NOTIFY_AT_EVERYONE
                        }), (0, n.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => d.default.handleCheckboxChange("CUSTOM", o.NotificationSettingsKeys.SUPPRESS_ROLES, !e, t),
                            hideBorder: !0,
                            value: !a,
                            children: h.default.Messages.NOTIFY_ROLES
                        }), (0, n.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => d.default.handleHighlightsChange("CUSTOM", e ? c.HighlightSettings.ENABLED : c.HighlightSettings.DISABLED, t),
                            hideBorder: !0,
                            value: N === c.HighlightSettings.ENABLED,
                            children: h.default.Messages.NOTIFY_HIGHLIGHTS
                        }), (0, n.jsx)(r.Text, {
                            className: f.highlightsText,
                            variant: "text-xs/normal",
                            children: h.default.Messages.NOTIFY_HIGHLIGHTS_DESC
                        })]
                    })
                })
            }
        },
        120839: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("519705"),
                l = s("279627"),
                r = s("76618"),
                d = s("49111"),
                u = s("782340"),
                o = s("526211");

            function c(e) {
                let {
                    guild: t,
                    suppressEveryone: s,
                    suppressRoles: c,
                    notifyHighlights: h
                } = e;
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [(0, n.jsx)(l.default, {
                        setting: d.UserNotificationSettings.ONLY_MENTIONS,
                        guild: t
                    }), (0, n.jsx)("div", {
                        className: o.divider
                    }), (0, n.jsx)("div", {
                        className: o.largeSpacing,
                        children: (0, n.jsxs)(i.FormItem, {
                            children: [(0, n.jsx)(i.FormSwitch, {
                                onChange: e => a.default.handleCheckboxChange("ESSENTIALS", r.NotificationSettingsKeys.SUPPRESS_EVERYONE, !e, t),
                                hideBorder: !0,
                                value: !s,
                                children: u.default.Messages.NOTIFY_AT_EVERYONE
                            }), (0, n.jsx)(i.FormSwitch, {
                                onChange: e => a.default.handleCheckboxChange("ESSENTIALS", r.NotificationSettingsKeys.SUPPRESS_ROLES, !e, t),
                                hideBorder: !0,
                                value: !c,
                                children: u.default.Messages.NOTIFY_ROLES
                            }), (0, n.jsx)(i.FormSwitch, {
                                className: o.switchItemContainer,
                                onChange: e => a.default.handleHighlightsChange("ESSENTIALS", e ? d.HighlightSettings.ENABLED : d.HighlightSettings.DISABLED, t),
                                hideBorder: !0,
                                value: h === d.HighlightSettings.ENABLED,
                                children: u.default.Messages.NOTIFY_HIGHLIGHTS
                            }), (0, n.jsx)(i.Text, {
                                className: o.highlightsText,
                                variant: "text-xs/normal",
                                children: u.default.Messages.NOTIFY_HIGHLIGHTS_DESC
                            })]
                        })
                    })]
                })
            }
        },
        184488: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("446674"),
                l = s("77078"),
                r = s("320954"),
                d = s("44574"),
                u = s("233069"),
                o = s("245997"),
                c = s("525065"),
                h = s("305961"),
                f = s("282109"),
                S = s("145131"),
                E = s("872225"),
                N = s("819666"),
                g = s("425379"),
                _ = s("49111"),
                T = s("782340"),
                O = s("723859");
            let M = e => {
                let t, {
                        guildId: s,
                        guild: r,
                        muted: d,
                        muteConfig: u,
                        messageNotifications: o,
                        mobilePush: c,
                        suppressEveryone: h,
                        suppressRoles: f,
                        notifyHighlights: _,
                        muteEvents: M,
                        channelOverrides: m,
                        categories: C,
                        channels: I,
                        transitionState: p,
                        onClose: L
                    } = e,
                    [A, U] = i.useState("SERVER_NOTIFICATIONS"),
                    {
                        userNotificationProfiles: R,
                        selectedProfile: x
                    } = (0, a.useStateFromStoresObject)([E.default], () => ({
                        userNotificationProfiles: E.default.getNotificationProfiles(),
                        selectedProfile: E.default.getSelectedProfile(s, {
                            muted: d,
                            mute_config: u,
                            message_notifications: o,
                            mobile_push: c,
                            suppress_everyone: h,
                            suppress_roles: f,
                            notify_highlights: _
                        }, !0)
                    }), [s, o, c, u, d, _, h, f]);
                if (null == r || null == R || null == x) return null;
                switch (A) {
                    case "SERVER_NOTIFICATIONS":
                        t = (0, n.jsx)(g.default, {
                            guildId: s,
                            guild: r,
                            muted: d,
                            muteConfig: u,
                            messageNotifications: o,
                            mobilePush: c,
                            suppressEveryone: h,
                            suppressRoles: f,
                            selectedProfile: x.selectedOption,
                            userNotificationProfiles: R,
                            muteEvents: M
                        });
                        break;
                    case "CHANNEL_OVERRIDES":
                        t = (0, n.jsx)(N.default, {
                            guildMuted: d,
                            messageNotifications: o,
                            channelOverrides: m,
                            categories: C,
                            channels: I
                        })
                }
                return (0, n.jsxs)(l.ModalRoot, {
                    className: O.modal,
                    "aria-label": T.default.Messages.NOTIFICATION_SETTINGS,
                    size: l.ModalSize.MEDIUM,
                    transitionState: p,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        children: [(0, n.jsxs)(S.default.Child, {
                            children: [(0, n.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                children: T.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, n.jsx)(l.Text, {
                                className: O.subtitleText,
                                variant: "text-xs/normal",
                                children: r.name
                            })]
                        }), (0, n.jsx)(S.default.Child, {
                            grow: 0,
                            children: (0, n.jsx)(l.ModalCloseButton, {
                                onClick: L
                            })
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: O.content,
                        children: [(0, n.jsxs)(l.TabBar, {
                            className: O.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: A,
                            onItemSelect: U,
                            children: [(0, n.jsx)(l.TabBar.Item, {
                                className: O.tabBarItem,
                                id: "SERVER_NOTIFICATIONS",
                                children: T.default.Messages.SERVER_NOTIFICATIONS_TAB
                            }, "SERVER_NOTIFICATIONS"), (0, n.jsx)(l.TabBar.Item, {
                                className: O.tabBarItem,
                                id: "CHANNEL_OVERRIDES",
                                children: T.default.Messages.CHANNEL_OVERRIDES_TAB
                            }, "CHANNEL_OVERRIDES")]
                        }), t]
                    })]
                })
            };

            function m(e) {
                let {
                    guildId: t,
                    ...s
                } = e, i = (0, d.useGuildUnreadsExperiment)(), l = (0, a.useStateFromStoresObject)([o.default, h.default, c.default, f.default], () => {
                    let e = o.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: h.default.getGuild(t),
                        memberCount: c.default.getMemberCount(t),
                        suppressEveryone: f.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: f.default.isSuppressRolesEnabled(t),
                        muteEvents: f.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: f.default.isMobilePushEnabled(t),
                        muted: f.default.isMuted(t),
                        muteConfig: f.default.getMuteConfig(t),
                        messageNotifications: f.default.getMessageNotifications(t),
                        channelOverrides: f.default.getChannelOverrides(t),
                        channels: (0, r.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, u.isGuildSelectableChannelType)(t) || t === _.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: f.default.getNotifyHighlights(t),
                        showUnreadsSettings: i,
                        isGuildUnreadsEnabled: f.default.isGuildUnreadSettingEnabled(t)
                    }
                });
                return (0, n.jsx)(M, {
                    ...l,
                    ...s
                })
            }
        },
        685976: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("519705"),
                l = s("954419"),
                r = s("47495"),
                d = s("279627"),
                u = s("76618"),
                o = s("49111"),
                c = s("468200"),
                h = s("782340"),
                f = s("526211");

            function S(e) {
                var t;
                let {
                    guild: s,
                    muteConfig: S
                } = e, E = null !== (t = null == S ? void 0 : S.selected_time_window) && void 0 !== t ? t : c.MuteUntilSeconds.ALWAYS;
                return (0, n.jsxs)("div", {
                    className: f.container,
                    children: [(0, n.jsx)(d.default, {
                        setting: o.UserNotificationSettings.NO_MESSAGES,
                        guild: s
                    }), (0, n.jsx)("div", {
                        className: f.divider
                    }), (0, n.jsx)("div", {
                        className: f.largeSpacing,
                        children: (0, n.jsx)(i.FormItem, {
                            children: (0, n.jsxs)("div", {
                                className: f.dropDownContainer,
                                children: [(0, n.jsxs)(i.Text, {
                                    variant: "text-md/medium",
                                    children: [" ", h.default.Messages.MUTE_DURATION]
                                }), (0, n.jsx)(l.default, {
                                    value: E,
                                    className: f.dropDown,
                                    options: (0, r.getMuteTimeOptions)(),
                                    onChange: e => {
                                        a.default.handleMuteConfigChange(u.NotificationSettingsKeys.MUTE_CONFIG, e.value, s)
                                    }
                                })]
                            })
                        })
                    })]
                })
            }
        },
        425379: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("519705"),
                l = s("660279"),
                r = s("998650"),
                d = s("952479"),
                u = s("172483"),
                o = s("34026"),
                c = s("120839"),
                h = s("685976"),
                f = s("279627"),
                S = s("49111"),
                E = s("782340"),
                N = s("600937");
            let g = e => {
                    switch (e) {
                        case "ALL":
                            return {
                                name: E.default.Messages.ALL_PROFILE_TITLE, desc: E.default.Messages.ALL_PROFILE_DESC, icon: l.default
                            };
                        case "ESSENTIALS":
                            return {
                                name: E.default.Messages.ESSENTIALS_PROFILE_TITLE, desc: E.default.Messages.ESSENTIALS_PROFILE_DESC, icon: d.default
                            };
                        case "MUTED":
                            return {
                                name: E.default.Messages.MUTED_PROFILE_NAME, desc: E.default.Messages.MUTED_PROFILE_DESC, icon: r.default
                            };
                        case "CUSTOM":
                            return {
                                name: E.default.Messages.CUSTOM_PROFILE_NAME, desc: E.default.Messages.CUSTOM_PROFILE_DESC, icon: u.default
                            }
                    }
                },
                _ = (e, t, s) => {
                    switch (e) {
                        case "ALL":
                            return (0, n.jsx)(f.default, {
                                setting: S.UserNotificationSettings.ALL_MESSAGES,
                                guild: s
                            });
                        case "ESSENTIALS":
                            return (0, n.jsx)(c.default, {
                                guild: s,
                                suppressEveryone: t.suppressEveryone,
                                suppressRoles: t.suppressAllRoleMentions,
                                notifyHighlights: t.notifyHighlights
                            });
                        case "MUTED":
                            return (0, n.jsx)(h.default, {
                                guild: s,
                                muteConfig: t.muteConfig
                            });
                        case "CUSTOM":
                            return (0, n.jsx)(o.default, {
                                guild: s,
                                suppressEveryone: t.suppressEveryone,
                                suppressRoles: t.suppressAllRoleMentions,
                                mobilePush: t.mobilePushNotifications,
                                serverUnreads: t.serverUnreads,
                                notifyHighlights: t.notifyHighlights
                            })
                    }
                };

            function T(e) {
                let {
                    selectedProfile: t,
                    userNotificationProfiles: s,
                    guild: l
                } = e, r = Object.entries(s);
                if (null == l) return null;
                let d = r.map(e => {
                    let t = e[0],
                        s = e[1],
                        n = g(t),
                        i = _(t, s, l);
                    return {
                        ...n,
                        value: t,
                        radioItemIconClassName: N.radioIcon,
                        collapsibleContent: i
                    }
                });
                return (0, n.jsx)(i.RadioGroup, {
                    options: d,
                    value: t,
                    onChange: e => {
                        a.default.handleProfileChange(e, l)
                    },
                    radioItemClassName: N.radioItem
                })
            }
        },
        279627: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                a = s("77078"),
                l = s("109024"),
                r = s("153769"),
                d = s("49111"),
                u = s("782340"),
                o = s("568222");
            let c = e => {
                switch (e) {
                    case d.UserNotificationSettings.ALL_MESSAGES:
                        return u.default.Messages.USER_UNREADS_ALL_MESSAGES;
                    case d.UserNotificationSettings.ONLY_MENTIONS:
                        return u.default.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS;
                    case d.UserNotificationSettings.NO_MESSAGES:
                        return u.default.Messages.USER_UNREADS_NULL
                }
            };

            function h(e) {
                let {
                    setting: t,
                    guild: s
                } = e, h = c(t), f = (0, a.useToken)(i.default.unsafe_rawColors.WHITE_500).hex();
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [(0, n.jsxs)("div", {
                        className: o.settingContainer,
                        children: [(0, n.jsxs)("div", {
                            className: o.guildIconContainer,
                            children: [t !== d.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                                className: o.semiCircle
                            }), (0, n.jsx)(l.default, {
                                guild: s,
                                size: l.default.Sizes.SMALLER
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                children: u.default.Messages.SERVER_UNREAD_BADGE
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: h
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: o.settingContainer,
                        children: [(0, n.jsxs)("div", {
                            className: o.discordIconContainer,
                            children: [(0, n.jsx)(r.default, {
                                width: 24,
                                height: 24,
                                color: f
                            }), t !== d.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                                className: o.notificationBadge,
                                children: (0, n.jsx)(a.Text, {
                                    className: o.messageCount,
                                    variant: "text-xs/bold",
                                    children: "3"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                children: u.default.Messages.MOBILE_PUSH
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: h
                            })]
                        })]
                    })]
                })
            }
        },
        319165: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMutedUntilText: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("782340");

            function l(e) {
                return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function r(e) {
                let {
                    muteConfig: t,
                    className: s
                } = e, a = l(t);
                return null != a ? (0, n.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: s,
                    children: a
                }) : null
            }
        }
    }
]);