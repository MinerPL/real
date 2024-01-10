            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Y
                }
            }), s("222007"), s("424973");
            var i, l, a = s("37983"),
                n = s("884691"),
                r = s("917351"),
                d = s.n(r),
                o = s("866227"),
                u = s.n(o),
                c = s("817736"),
                h = s("118810"),
                f = s("446674"),
                N = s("669491"),
                g = s("77078"),
                S = s("519705"),
                E = s("668597"),
                m = s("320954"),
                T = s("679653"),
                _ = s("419830"),
                x = s("47495"),
                I = s("348077"),
                p = s("308305"),
                O = s("319165"),
                C = s("233069"),
                M = s("42203"),
                v = s("245997"),
                L = s("525065"),
                A = s("305961"),
                j = s("27618"),
                R = s("282109"),
                b = s("697218"),
                G = s("145131"),
                U = s("612434"),
                F = s("449008"),
                D = s("701909"),
                w = s("34676"),
                P = s("49111"),
                H = s("468200"),
                y = s("782340"),
                k = s("296884");
            (l = i || (i = {})).MUTED = "muted", l.MESSAGE_NOTIFICATIONS = "message_notifications", l.SUPPRESS_EVERYONE = "suppress_everyone", l.SUPPRESS_ROLES = "suppress_roles", l.MOBILE_PUSH = "mobile_push", l.MUTE_EVENTS = "mute_scheduled_events", l.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class B extends n.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: s,
                        channelOverridesProp: i
                    } = t;
                    return e.channelOverrides !== i ? (s = new Set(s), (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
                        overrides: s,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: s
                    } = this.state, i = null != s ? this._channelRefs[s] : null;
                    if (null != this._scroller && null != i && s !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(i);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
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
                        e = new Set(e), (0, x.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t, s) {
                    S.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    }, s)
                }
                handleRadioChange(e, t, s) {
                    let {
                        value: i
                    } = t;
                    S.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: i
                    }, s)
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(g.ModalHeader, {
                        children: [(0, a.jsxs)(G.default.Child, {
                            children: [(0, a.jsx)(g.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(g.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(G.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(g.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(g.ModalFooter, {
                        children: (0, a.jsx)(g.Button, {
                            onClick: this.props.onClose,
                            children: y.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: s,
                        guild: i
                    } = this.props, l = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : H.MuteUntilSeconds.ALWAYS;
                    return null == i ? null : (0, a.jsxs)(g.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: e => this.handleCheckboxChange("muted", e, w.NotificationLabel.muted(e)),
                            note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: i.name
                            })
                        }), t ? (0, a.jsxs)(G.default, {
                            className: k.spacing,
                            align: G.default.Align.CENTER,
                            children: [(0, a.jsxs)(G.default, {
                                direction: G.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(g.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(O.default, {
                                    className: k.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, a.jsx)(g.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, x.getMuteTimeOptions)(),
                                value: l,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(g.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: i
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: k.spacing,
                        children: [(0, a.jsx)(g.FormItem, {
                            title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(g.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: e => this.handleRadioChange("message_notifications", e, w.NotificationLabel.notifications(e.value)),
                                options: (e = i, [{
                                    name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: P.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= P.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: P.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: y.default.Messages.FORM_LABEL_NOTHING,
                                    value: P.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(g.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: s,
                        muted: i,
                        muteEvents: l,
                        notifyHighlights: n,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(g.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_everyone", e, w.NotificationLabel.suppressEveryone(e)),
                            value: e,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(g.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_roles", e, w.NotificationLabel.suppressRoles(e)),
                            value: t,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(g.FormSwitch, {
                            onChange: e => {
                                S.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? P.HighlightSettings.DISABLED : P.HighlightSettings.ENABLED
                                }, w.NotificationLabel.highlights(!e))
                            },
                            value: i || n === P.HighlightSettings.DISABLED,
                            disabled: i,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(g.Anchor, {
                                        href: D.default.getArticleURL(P.HelpdeskArticles.HIGHLIGHTS),
                                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(g.FormSwitch, {
                            value: l,
                            onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, w.NotificationLabel.mutedEvents(e)),
                            children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(g.FormSwitch, {
                            value: !i && s,
                            disabled: i,
                            onChange: e => this.handleCheckboxChange("mobile_push", e, w.NotificationLabel.mobilePush(e)),
                            children: y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
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
                        return s.type !== P.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, b.default, j.default)
                        }
                    }).value();
                    return (0, a.jsxs)(g.FormItem, {
                        title: y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormText, {
                            type: g.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(g.SearchableSelect, {
                            value: "",
                            placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
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
                        checkboxColor: n
                    } = this.props, {
                        overrides: r
                    } = this.state, d = s.map(s => {
                        let {
                            channel: d
                        } = s;
                        if (!r.has(d.id) || null != l[d.id] && 0 === l[d.id].length) return null;
                        let o = e[d.id];
                        return (0, a.jsx)(p.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, E.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: i,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: n
                        }, d.id)
                    }).filter(F.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(g.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(G.default, {
                            children: [(0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(g.Tooltip, {
                                    text: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: y.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, a.jsxs)(g.ModalRoot, {
                        "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
                        size: g.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(g.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._channelRefs = {}, this.state = {
                        overrides: new Set((0, x.filterOverrides)(this.props.channelOverrides)),
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
                        S.default.updateGuildNotificationSettings(this.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: e,
                                end_time: t
                            }
                        }, w.NotificationLabels.Muted)
                    }, this.handleDeleteOverride = e => {
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).delete(e), this.setState({
                            overrides: t
                        })
                    }, this.renderOptionLabel = e => {
                        let t = M.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let s = M.default.getChannel(t.parent_id),
                            i = null != s ? s.name : null;
                        return (0, a.jsx)(U.default, {
                            icon: (0, _.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: i
                        })
                    }
                }
            }

            function V(e) {
                let {
                    guildId: t,
                    ...s
                } = e, i = (0, f.useStateFromStoresObject)([v.default, A.default, L.default, R.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: A.default.getGuild(t),
                        memberCount: L.default.getMemberCount(t),
                        suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: R.default.isSuppressRolesEnabled(t),
                        muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: R.default.isMobilePushEnabled(t),
                        muted: R.default.isMuted(t),
                        muteConfig: R.default.getMuteConfig(t),
                        messageNotifications: R.default.getMessageNotifications(t),
                        channelOverrides: R.default.getChannelOverrides(t),
                        channels: (0, m.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, C.isGuildSelectableChannelType)(t) || t === P.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), l = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(B, {
                    ...i,
                    ...s,
                    checkboxColor: l
                })
            }

            function Y(e) {
                let t = (0, x.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    s = t ? I.default : V;
                return (0, a.jsx)(s, {
                    ...e
                })
            }