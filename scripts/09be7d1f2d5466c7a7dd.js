(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36685"], {
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
                    return u
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("414456"),
                n = s.n(l),
                a = s("77078"),
                r = s("782340"),
                d = s("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": l,
                    look: u = o.DEFAULT
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    "aria-label": null != l ? l : r.default.Messages.REMOVE,
                    className: n(d.button, u, t),
                    onClick: s
                })
            }
            u.Looks = o
        },
        747593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            }), s("222007"), s("424973");
            var i, l, n = s("37983"),
                a = s("884691"),
                r = s("917351"),
                d = s.n(r),
                o = s("866227"),
                u = s.n(o),
                h = s("817736"),
                c = s("118810"),
                g = s("446674"),
                f = s("669491"),
                S = s("77078"),
                m = s("519705"),
                N = s("668597"),
                p = s("320954"),
                _ = s("679653"),
                E = s("419830"),
                M = s("47495"),
                O = s("308305"),
                x = s("319165"),
                C = s("233069"),
                T = s("42203"),
                v = s("245997"),
                L = s("525065"),
                R = s("305961"),
                I = s("27618"),
                b = s("282109"),
                U = s("697218"),
                A = s("145131"),
                j = s("612434"),
                H = s("449008"),
                D = s("701909"),
                F = s("49111"),
                G = s("468200"),
                k = s("782340"),
                w = s("296884");
            (l = i || (i = {})).MUTED = "muted", l.MESSAGE_NOTIFICATIONS = "message_notifications", l.SUPPRESS_EVERYONE = "suppress_everyone", l.SUPPRESS_ROLES = "suppress_roles", l.MOBILE_PUSH = "mobile_push", l.MUTE_EVENTS = "mute_scheduled_events", l.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class y extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: s,
                        channelOverridesProp: i
                    } = t;
                    return e.channelOverrides !== i ? (s = new Set(s), (0, M.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
                        overrides: s,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: s
                    } = this.state, i = null != s ? this._channelRefs[s] : null;
                    if (null != this._scroller && null != i && s !== t.lastSelected) {
                        let e = (0, h.findDOMNode)(i);
                        if (null != this._scroller && (0, c.isElement)(e, HTMLElement)) {
                            var l;
                            null === (l = this._scroller) || void 0 === l || l.scrollIntoViewNode({
                                node: e,
                                animate: !0,
                                padding: 20,
                                callback: () => this.setState({
                                    lastSelected: null
                                })
                            }), i.highlight()
                        }
                    }
                    if (this.props.channelOverrides !== e.channelOverrides) {
                        let {
                            overrides: e
                        } = this.state;
                        e = new Set(e), (0, M.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t) {
                    m.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    })
                }
                handleRadioChange(e, t) {
                    let {
                        value: s
                    } = t;
                    m.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: s
                    })
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, n.jsxs)(S.ModalHeader, {
                        children: [(0, n.jsxs)(A.default.Child, {
                            children: [(0, n.jsx)(S.Heading, {
                                variant: "heading-lg/semibold",
                                children: k.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, n.jsx)(S.Text, {
                                variant: "text-md/normal",
                                className: w.guildName,
                                children: e.name
                            })]
                        }), (0, n.jsx)(A.default.Child, {
                            grow: 0,
                            children: (0, n.jsx)(S.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, n.jsx)(S.ModalFooter, {
                        children: (0, n.jsx)(S.Button, {
                            onClick: this.props.onClose,
                            children: k.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: s,
                        guild: i
                    } = this.props, l = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : G.MuteUntilSeconds.ALWAYS;
                    return null == i ? null : (0, n.jsxs)(S.FormItem, {
                        className: w.largeSpacing,
                        children: [(0, n.jsx)(S.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: this.handleCheckboxChange.bind(this, "muted"),
                            note: k.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: k.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: i.name
                            })
                        }), t ? (0, n.jsxs)(A.default, {
                            className: w.spacing,
                            align: A.default.Align.CENTER,
                            children: [(0, n.jsxs)(A.default, {
                                direction: A.default.Direction.VERTICAL,
                                className: w.muteUntilTextWrapper,
                                children: [(0, n.jsx)(S.FormTitle, {
                                    tag: "h3",
                                    className: w.muteUntilTitle,
                                    children: k.default.Messages.MUTE_UNTIL
                                }), (0, n.jsx)(x.default, {
                                    className: w.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, n.jsx)(S.SingleSelect, {
                                className: w.muteTimeSelector,
                                options: (0, M.getMuteTimeOptions)(),
                                value: l,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, n.jsx)(S.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: i
                    } = this.props;
                    return (0, n.jsxs)("div", {
                        className: w.spacing,
                        children: [(0, n.jsx)(S.FormItem, {
                            title: k.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: w.largeSpacing,
                            children: (0, n.jsx)(S.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, "message_notifications"),
                                options: (e = i, [{
                                    name: k.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: F.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= F.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? k.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: k.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: F.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: k.default.Messages.FORM_LABEL_NOTHING,
                                    value: F.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, n.jsx)(S.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: s,
                        muted: i,
                        muteEvents: l,
                        notifyHighlights: a,
                        guildId: r
                    } = this.props;
                    return (0, n.jsxs)(S.FormItem, {
                        className: w.largeSpacing,
                        children: [(0, n.jsx)(S.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_everyone"),
                            value: e,
                            children: k.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, n.jsx)(S.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_roles"),
                            value: t,
                            children: k.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, n.jsx)(S.FormSwitch, {
                            onChange: e => {
                                m.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? F.HighlightSettings.DISABLED : F.HighlightSettings.ENABLED
                                })
                            },
                            value: i || a === F.HighlightSettings.DISABLED,
                            disabled: i,
                            note: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(S.Text, {
                                    variant: "text-sm/normal",
                                    children: k.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, n.jsx)("div", {
                                    className: w.highlightsLink,
                                    children: (0, n.jsx)(S.Anchor, {
                                        href: D.default.getArticleURL(F.HelpdeskArticles.HIGHLIGHTS),
                                        children: k.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, n.jsx)(n.Fragment, {
                                children: k.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, n.jsx)(S.FormSwitch, {
                            value: l,
                            onChange: this.handleCheckboxChange.bind(this, "mute_scheduled_events"),
                            children: k.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, n.jsx)(S.FormSwitch, {
                            value: !i && s,
                            disabled: i,
                            onChange: this.handleCheckboxChange.bind(this, "mobile_push"),
                            children: k.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
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
                        return s.type !== F.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, _.computeChannelName)(t, U.default, I.default)
                        }
                    }).value();
                    return (0, n.jsxs)(S.FormItem, {
                        title: k.default.Messages.NOTIFICATION_OVERRIDES,
                        className: w.largeSpacing,
                        children: [(0, n.jsx)(S.FormText, {
                            type: S.FormText.Types.DESCRIPTION,
                            className: w.smallSpacing,
                            children: k.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, n.jsx)(S.SearchableSelect, {
                            value: "",
                            placeholder: k.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
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
                        messageNotifications: i,
                        categories: l,
                        checkboxColor: a
                    } = this.props, {
                        overrides: r
                    } = this.state, d = s.map(s => {
                        let {
                            channel: d
                        } = s;
                        if (!r.has(d.id) || null != l[d.id] && 0 === l[d.id].length) return null;
                        let o = e[d.id];
                        return (0, n.jsx)(O.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, N.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: i,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: a
                        }, d.id)
                    }).filter(H.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, n.jsx)("div", {
                        className: w.overridePlaceholder,
                        children: (0, n.jsx)(S.Text, {
                            className: w.overrideHeader,
                            variant: "text-sm/semibold",
                            children: k.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, n.jsxs)("div", {
                        className: w.overrideList,
                        children: [(0, n.jsxs)(A.default, {
                            children: [(0, n.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: w.headerName,
                                children: k.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: w.headerOption,
                                children: k.default.Messages.FORM_LABEL_ALL
                            }), (0, n.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: w.headerOption,
                                children: k.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, n.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: w.headerOption,
                                children: k.default.Messages.FORM_LABEL_NOTHING
                            }), (0, n.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: w.headerOption,
                                children: (0, n.jsx)(S.Tooltip, {
                                    text: k.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, n.jsx)("span", {
                                        ...e,
                                        children: k.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, n.jsxs)(S.ModalRoot, {
                        "aria-label": k.default.Messages.NOTIFICATION_SETTINGS,
                        size: S.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, n.jsxs)(S.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._channelRefs = {}, this.state = {
                        overrides: new Set((0, M.filterOverrides)(this.props.channelOverrides)),
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
                        let t = e > 0 ? u().add(e, "second").toISOString() : null;
                        m.default.updateGuildNotificationSettings(this.props.guildId, {
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
                        let t = T.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let s = T.default.getChannel(t.parent_id),
                            i = null != s ? s.name : null;
                        return (0, n.jsx)(j.default, {
                            icon: (0, E.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: i
                        })
                    }
                }
            }

            function B(e) {
                let {
                    guildId: t,
                    ...s
                } = e, i = (0, g.useStateFromStoresObject)([v.default, R.default, L.default, b.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: R.default.getGuild(t),
                        memberCount: L.default.getMemberCount(t),
                        suppressEveryone: b.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: b.default.isSuppressRolesEnabled(t),
                        muteEvents: b.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: b.default.isMobilePushEnabled(t),
                        muted: b.default.isMuted(t),
                        muteConfig: b.default.getMuteConfig(t),
                        messageNotifications: b.default.getMessageNotifications(t),
                        channelOverrides: b.default.getChannelOverrides(t),
                        channels: (0, p.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, C.isGuildSelectableChannelType)(t) || t === F.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: b.default.getNotifyHighlights(t)
                    }
                }), l = (0, S.useToken)(f.default.unsafe_rawColors.GREEN_360).hex();
                return (0, n.jsx)(y, {
                    ...i,
                    ...s,
                    checkboxColor: l
                })
            }
        },
        47495: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getMuteTimeOptions: function() {
                    return u
                },
                filterOverrides: function() {
                    return h
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            });
            var i = s("446674"),
                l = s("668597"),
                n = s("282109"),
                a = s("640497"),
                r = s("49111"),
                d = s("468200"),
                o = s("782340");

            function u() {
                return [{
                    label: o.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: d.MuteUntilSeconds.MINUTES_15
                }, {
                    label: o.default.Messages.MUTE_DURATION_1_HOUR,
                    value: d.MuteUntilSeconds.HOURS_1
                }, {
                    label: o.default.Messages.MUTE_DURATION_3_HOURS,
                    value: d.MuteUntilSeconds.HOURS_3
                }, {
                    label: o.default.Messages.MUTE_DURATION_8_HOURS,
                    value: d.MuteUntilSeconds.HOURS_8
                }, {
                    label: o.default.Messages.MUTE_DURATION_24_HOURS,
                    value: d.MuteUntilSeconds.HOURS_24
                }, {
                    label: o.default.Messages.MUTE_DURATION_ALWAYS,
                    value: d.MuteUntilSeconds.ALWAYS
                }]
            }

            function h(e) {
                return Object.keys(e).filter(t => !!(0, l.computeIsMuted)(e[t]) || e[t].message_notifications !== r.UserNotificationSettings.NULL || !1)
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([n.default], () => n.default.useNewNotifications);
                return a.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        308305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelNotificationSettings: function() {
                    return p
                }
            }), s("222007");
            var i = s("37983"),
                l = s("884691"),
                n = s("77078"),
                a = s("519705"),
                r = s("133403"),
                d = s("679653"),
                o = s("419830"),
                u = s("42203"),
                h = s("245997"),
                c = s("27618"),
                g = s("697218"),
                f = s("145131"),
                S = s("49111"),
                m = s("782340"),
                N = s("296884");
            class p extends l.PureComponent {
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
                        i = s.getGuildId();
                    null != i && a.default.updateChannelOverrideSettings(i, s.id, {
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
                        muted: l,
                        guildMessageNotifications: a,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === S.UserNotificationSettings.NULL) && e === a && (d = !0);
                    let o = n.Checkbox.Types.INVERTED;
                    return (l || t === S.UserNotificationSettings.NULL || null == t) && (o = n.Checkbox.Types.GHOST), (0, i.jsx)(n.Checkbox, {
                        value: !s && d,
                        disabled: s,
                        shape: n.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: s
                    } = this.props;
                    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
                    let l = (0, o.getChannelIconComponent)(s);
                    if (s.type === S.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
                        let e = h.default.getCategories(s.guild_id);
                        t = m.default.Messages.NUM_CHANNELS.format({
                            num: null != e[s.id] ? e[s.id].length : 0
                        })
                    } else t = null != e ? m.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, g.default, c.default)
                    }) : m.default.Messages.NO_CATEGORY;
                    return (0, i.jsxs)(f.default, {
                        grow: 1,
                        className: N.nameContainer,
                        children: [null != l ? (0, i.jsx)(l, {
                            className: N.icon
                        }) : null, (0, i.jsxs)("div", {
                            className: N.channelNameContainer,
                            children: [(0, i.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                className: N.channelName,
                                children: (0, d.computeChannelName)(s, g.default, c.default)
                            }), (0, i.jsx)(n.Text, {
                                variant: "text-xs/normal",
                                className: N.channelNameByline,
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
                    return (0, i.jsxs)(f.default, {
                        grow: 0,
                        shrink: 0,
                        className: N.checkboxGroup,
                        justify: f.default.Justify.AROUND,
                        align: f.default.Align.CENTER,
                        children: [(0, i.jsx)(f.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, i.jsx)(f.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, i.jsx)(f.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.NO_MESSAGES)
                        }), (0, i.jsx)(f.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: N.checkboxMute,
                            children: (0, i.jsx)(n.Checkbox, {
                                value: e,
                                shape: n.Checkbox.Shapes.BOX,
                                type: n.Checkbox.Types.INVERTED,
                                onChange: this.handleMute
                            })
                        })]
                    })
                }
                render() {
                    let {
                        highlight: e
                    } = this.state;
                    return (0, i.jsxs)(n.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? N.overrideHighlight : N.override,
                        children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
                            className: N.removeOverride,
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
                        this.setMessageNotification(null != s ? s : S.UserNotificationSettings.NULL, t)
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(S.UserNotificationSettings.NULL, !1), null != e && e(t.id)
                    }
                }
            }
        },
        319165: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMutedUntilText: function() {
                    return a
                },
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("77078"),
                n = s("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : n.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(n.default.getLocale(), {
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
                } = e, n = a(t);
                return null != n ? (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: s,
                    children: n
                }) : null
            }
        },
        612434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("77078"),
                n = s("145131"),
                a = s("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: s,
                        icon: r
                    } = e;
                    return (0, i.jsxs)(n.default, {
                        className: a.wrapper,
                        align: n.default.Align.BASELINE,
                        children: [null != r && (0, i.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: a.icon
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: a.title,
                            children: t
                        }), null != s && "" !== s ? (0, i.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            className: a.subtitle,
                            children: s
                        }) : null]
                    })
                }
        },
        619911: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("469563"),
                n = s("125094"),
                a = s("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: n,
                            fill: l
                        }), (0, i.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: n,
                            fill: l
                        })]
                    })
                }, n.ScreenArrowIcon, void 0, {
                    size: 24
                })
        }
    }
]);