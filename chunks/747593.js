            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return V
                }
            }), i("222007"), i("424973");
            var n, s, a = i("37983"),
                l = i("884691"),
                r = i("917351"),
                d = i.n(r),
                o = i("866227"),
                u = i.n(o),
                c = i("817736"),
                S = i("118810"),
                h = i("446674"),
                g = i("669491"),
                N = i("77078"),
                f = i("519705"),
                _ = i("668597"),
                E = i("320954"),
                T = i("679653"),
                m = i("419830"),
                I = i("47495"),
                O = i("348077"),
                M = i("308305"),
                x = i("319165"),
                C = i("233069"),
                p = i("42203"),
                L = i("245997"),
                A = i("525065"),
                v = i("305961"),
                U = i("27618"),
                R = i("282109"),
                j = i("697218"),
                G = i("145131"),
                b = i("612434"),
                F = i("449008"),
                P = i("701909"),
                D = i("34676"),
                w = i("49111"),
                H = i("468200"),
                y = i("782340"),
                k = i("296884");
            (s = n || (n = {})).MUTED = "muted", s.MESSAGE_NOTIFICATIONS = "message_notifications", s.SUPPRESS_EVERYONE = "suppress_everyone", s.SUPPRESS_ROLES = "suppress_roles", s.MOBILE_PUSH = "mobile_push", s.MUTE_EVENTS = "mute_scheduled_events", s.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class B extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: i,
                        channelOverridesProp: n
                    } = t;
                    return e.channelOverrides !== n ? (i = new Set(i), (0, I.filterOverrides)(e.channelOverrides).forEach(e => i.add(e)), {
                        overrides: i,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: i
                    } = this.state, n = null != i ? this._channelRefs[i] : null;
                    if (null != this._scroller && null != n && i !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(n);
                        if (null != this._scroller && (0, S.isElement)(e, HTMLElement)) {
                            var s;
                            null === (s = this._scroller) || void 0 === s || s.scrollIntoViewNode({
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
                handleCheckboxChange(e, t, i) {
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    }, i)
                }
                handleRadioChange(e, t, i) {
                    let {
                        value: n
                    } = t;
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: n
                    }, i)
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(N.ModalHeader, {
                        children: [(0, a.jsxs)(G.default.Child, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(N.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(G.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(N.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(N.ModalFooter, {
                        children: (0, a.jsx)(N.Button, {
                            onClick: this.props.onClose,
                            children: y.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: i,
                        guild: n
                    } = this.props, s = null !== (e = null == i ? void 0 : i.selected_time_window) && void 0 !== e ? e : H.MuteUntilSeconds.ALWAYS;
                    return null == n ? null : (0, a.jsxs)(N.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: e => this.handleCheckboxChange("muted", e, D.NotificationLabel.muted(e)),
                            note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: n.name
                            })
                        }), t ? (0, a.jsxs)(G.default, {
                            className: k.spacing,
                            align: G.default.Align.CENTER,
                            children: [(0, a.jsxs)(G.default, {
                                direction: G.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(N.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(x.default, {
                                    className: k.muteUntilText,
                                    muteConfig: i
                                })]
                            }), (0, a.jsx)(N.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, I.getMuteTimeOptions)(),
                                value: s,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(N.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: i,
                        memberCount: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: k.spacing,
                        children: [(0, a.jsx)(N.FormItem, {
                            title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(N.RadioGroup, {
                                disabled: i,
                                value: t,
                                onChange: e => this.handleRadioChange("message_notifications", e, D.NotificationLabel.notifications(e.value)),
                                options: (e = n, [{
                                    name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: w.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= w.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: w.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: y.default.Messages.FORM_LABEL_NOTHING,
                                    value: w.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(N.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: i,
                        muted: n,
                        muteEvents: s,
                        notifyHighlights: l,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(N.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_everyone", e, D.NotificationLabel.suppressEveryone(e)),
                            value: e,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_roles", e, D.NotificationLabel.suppressRoles(e)),
                            value: t,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: e => {
                                f.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? w.HighlightSettings.DISABLED : w.HighlightSettings.ENABLED
                                }, D.NotificationLabel.highlights(!e))
                            },
                            value: n || l === w.HighlightSettings.DISABLED,
                            disabled: n,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N.Text, {
                                    variant: "text-sm/normal",
                                    children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(N.Anchor, {
                                        href: P.default.getArticleURL(w.HelpdeskArticles.HIGHLIGHTS),
                                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(N.FormSwitch, {
                            value: s,
                            onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, D.NotificationLabel.mutedEvents(e)),
                            children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(N.FormSwitch, {
                            value: !n && i,
                            disabled: n,
                            onChange: e => this.handleCheckboxChange("mobile_push", e, D.NotificationLabel.mobilePush(e)),
                            children: y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, i = d(e).filter(e => {
                        let {
                            channel: i
                        } = e;
                        return i.type !== w.ChannelTypes.GUILD_CATEGORY || null != t[i.id] && t[i.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, j.default, U.default)
                        }
                    }).value();
                    return (0, a.jsxs)(N.FormItem, {
                        title: y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormText, {
                            type: N.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(N.SearchableSelect, {
                            value: "",
                            placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: i,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: i,
                        messageNotifications: n,
                        categories: s,
                        checkboxColor: l
                    } = this.props, {
                        overrides: r
                    } = this.state, d = i.map(i => {
                        let {
                            channel: d
                        } = i;
                        if (!r.has(d.id) || null != s[d.id] && 0 === s[d.id].length) return null;
                        let o = e[d.id];
                        return (0, a.jsx)(M.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, _.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: n,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: l
                        }, d.id)
                    }).filter(F.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(N.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(G.default, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(N.Tooltip, {
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
                    return (0, a.jsxs)(N.ModalRoot, {
                        "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
                        size: N.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(N.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
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
                        let t = e > 0 ? u().add(e, "second").toISOString() : null;
                        f.default.updateGuildNotificationSettings(this.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: e,
                                end_time: t
                            }
                        }, D.NotificationLabels.Muted)
                    }, this.handleDeleteOverride = e => {
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).delete(e), this.setState({
                            overrides: t
                        })
                    }, this.renderOptionLabel = e => {
                        let t = p.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let i = p.default.getChannel(t.parent_id),
                            n = null != i ? i.name : null;
                        return (0, a.jsx)(b.default, {
                            icon: (0, m.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: n
                        })
                    }
                }
            }

            function Y(e) {
                let {
                    guildId: t,
                    ...i
                } = e, n = (0, h.useStateFromStoresObject)([L.default, v.default, A.default, R.default], () => {
                    let e = L.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: v.default.getGuild(t),
                        memberCount: A.default.getMemberCount(t),
                        suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: R.default.isSuppressRolesEnabled(t),
                        muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: R.default.isMobilePushEnabled(t),
                        muted: R.default.isMuted(t),
                        muteConfig: R.default.getMuteConfig(t),
                        messageNotifications: R.default.getMessageNotifications(t),
                        channelOverrides: R.default.getChannelOverrides(t),
                        channels: (0, E.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, C.isGuildSelectableChannelType)(t) || t === w.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), s = (0, N.useToken)(g.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(B, {
                    ...n,
                    ...i,
                    checkboxColor: s
                })
            }

            function V(e) {
                let t = (0, I.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    i = t ? O.default : Y;
                return (0, a.jsx)(i, {
                    ...e
                })
            }