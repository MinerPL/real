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
            var n = s("414456"),
                l = s.n(n),
                a = s("77078"),
                r = s("782340"),
                o = s("239636");
            let d = Object.freeze({
                DEFAULT: o.default,
                FILLED: o.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": n,
                    look: u = d.DEFAULT
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    "aria-label": null != n ? n : r.default.Messages.REMOVE,
                    className: l(o.button, u, t),
                    onClick: s
                })
            }
            u.Looks = d
        },
        747593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return z
                }
            });
            var i, n, l = s("37983"),
                a = s("884691"),
                r = s("917351"),
                o = s.n(r),
                d = s("866227"),
                u = s.n(d),
                c = s("817736"),
                h = s("118810"),
                f = s("446674"),
                g = s("669491"),
                S = s("77078"),
                N = s("519705"),
                E = s("668597"),
                p = s("320954"),
                m = s("679653"),
                C = s("419830"),
                _ = s("483226"),
                v = s("44574"),
                M = s("514933"),
                x = s("47495"),
                O = s("308305"),
                T = s("184488"),
                I = s("319165"),
                L = s("233069"),
                R = s("42203"),
                A = s("245997"),
                U = s("525065"),
                j = s("305961"),
                b = s("27618"),
                H = s("282109"),
                w = s("697218"),
                D = s("145131"),
                F = s("612434"),
                G = s("956089"),
                y = s("449008"),
                B = s("701909"),
                P = s("49111"),
                V = s("468200"),
                k = s("782340"),
                Y = s("296884");
            (i = n || (n = {})).MUTED = "muted", i.MESSAGE_NOTIFICATIONS = "message_notifications", i.SUPPRESS_EVERYONE = "suppress_everyone", i.SUPPRESS_ROLES = "suppress_roles", i.MOBILE_PUSH = "mobile_push", i.MUTE_EVENTS = "mute_scheduled_events", i.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class Z extends a.PureComponent {
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
                            var n;
                            null === (n = this._scroller) || void 0 === n || n.scrollIntoViewNode({
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
                    return null == e ? null : (0, l.jsxs)(S.ModalHeader, {
                        children: [(0, l.jsxs)(D.default.Child, {
                            children: [(0, l.jsx)(S.Heading, {
                                variant: "heading-lg/semibold",
                                children: k.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, l.jsx)(S.Text, {
                                variant: "text-md/normal",
                                className: Y.guildName,
                                children: e.name
                            })]
                        }), (0, l.jsx)(D.default.Child, {
                            grow: 0,
                            children: (0, l.jsx)(S.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, l.jsx)(S.ModalFooter, {
                        children: (0, l.jsx)(S.Button, {
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
                    } = this.props, a = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : V.MuteUntilSeconds.ALWAYS;
                    return null == i ? null : (0, l.jsxs)(S.FormItem, {
                        className: Y.largeSpacing,
                        children: [(0, l.jsx)(S.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: this.handleCheckboxChange.bind(this, n.MUTED),
                            note: k.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: k.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: i.name
                            })
                        }), t ? (0, l.jsxs)(D.default, {
                            className: Y.spacing,
                            align: D.default.Align.CENTER,
                            children: [(0, l.jsxs)(D.default, {
                                direction: D.default.Direction.VERTICAL,
                                className: Y.muteUntilTextWrapper,
                                children: [(0, l.jsx)(S.FormTitle, {
                                    tag: "h3",
                                    className: Y.muteUntilTitle,
                                    children: k.default.Messages.MUTE_UNTIL
                                }), (0, l.jsx)(I.default, {
                                    className: Y.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, l.jsx)(S.SingleSelect, {
                                className: Y.muteTimeSelector,
                                options: (0, x.getMuteTimeOptions)(),
                                value: a,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, l.jsx)(S.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: i
                    } = this.props;
                    return (0, l.jsxs)("div", {
                        className: Y.spacing,
                        children: [(0, l.jsx)(S.FormItem, {
                            title: k.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: Y.largeSpacing,
                            children: (0, l.jsx)(S.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, n.MESSAGE_NOTIFICATIONS),
                                options: (e = i, [{
                                    name: k.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: P.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= P.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? k.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: k.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: P.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: k.default.Messages.FORM_LABEL_NOTHING,
                                    value: P.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, l.jsx)(S.FormDivider, {})]
                    })
                }
                renderUnreadsOptions() {
                    let {
                        isGuildUnreadsEnabled: e,
                        muted: t,
                        guildId: s
                    } = this.props;
                    return (0, l.jsx)(S.FormItem, {
                        children: (0, l.jsx)(S.FormSwitch, {
                            onChange: e => {
                                (0, _.setGuildUnreadSetting)(s, e)
                            },
                            value: !t && e,
                            disabled: t,
                            note: (0, l.jsx)(S.Text, {
                                variant: "text-sm/normal",
                                children: k.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN_NOTE
                            }),
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [k.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, l.jsx)(G.TextBadge, {
                                    text: k.default.Messages.BETA,
                                    color: g.default.unsafe_rawColors.BRAND_500.css,
                                    className: Y.betaTag
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
                        muted: i,
                        muteEvents: a,
                        notifyHighlights: r,
                        guildId: o
                    } = this.props;
                    return (0, l.jsxs)(S.FormItem, {
                        className: Y.largeSpacing,
                        children: [(0, l.jsx)(S.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, n.SUPPRESS_EVERYONE),
                            value: e,
                            children: k.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, l.jsx)(S.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, n.SUPPRESS_ROLES),
                            value: t,
                            children: k.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, l.jsx)(S.FormSwitch, {
                            onChange: e => {
                                N.default.updateGuildNotificationSettings(o, {
                                    [n.NOTIFY_HIGHLIGHTS]: e ? P.HighlightSettings.DISABLED : P.HighlightSettings.ENABLED
                                })
                            },
                            value: i || r === P.HighlightSettings.DISABLED,
                            disabled: i,
                            note: (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(S.Text, {
                                    variant: "text-sm/normal",
                                    children: k.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, l.jsx)("div", {
                                    className: Y.highlightsLink,
                                    children: (0, l.jsx)(S.Anchor, {
                                        href: B.default.getArticleURL(P.HelpdeskArticles.HIGHLIGHTS),
                                        children: k.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, l.jsx)(l.Fragment, {
                                children: k.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, l.jsx)(S.FormSwitch, {
                            value: a,
                            onChange: this.handleCheckboxChange.bind(this, n.MUTE_EVENTS),
                            children: k.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, l.jsx)(S.FormSwitch, {
                            value: !i && s,
                            disabled: i,
                            onChange: this.handleCheckboxChange.bind(this, n.MOBILE_PUSH),
                            children: k.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, s = o(e).filter(e => {
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
                            label: (0, m.computeChannelName)(t, w.default, b.default)
                        }
                    }).value();
                    return (0, l.jsxs)(S.FormItem, {
                        title: k.default.Messages.NOTIFICATION_OVERRIDES,
                        className: Y.largeSpacing,
                        children: [(0, l.jsx)(S.FormText, {
                            type: S.FormText.Types.DESCRIPTION,
                            className: Y.smallSpacing,
                            children: k.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, l.jsx)(S.SearchableSelect, {
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
                        categories: n,
                        checkboxColor: a
                    } = this.props, {
                        overrides: r
                    } = this.state, o = s.map(s => {
                        let {
                            channel: o
                        } = s;
                        if (!r.has(o.id) || null != n[o.id] && 0 === n[o.id].length) return null;
                        let d = e[o.id];
                        return (0, l.jsx)(O.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[o.id] = e
                            },
                            channel: o,
                            guildMuted: t,
                            muted: null != d && (0, E.computeIsMuted)(d),
                            messageNotifications: null != d ? d.message_notifications : null,
                            guildMessageNotifications: i,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: a
                        }, o.id)
                    }).filter(y.isNotNullish);
                    return (0 === r.size || 0 === o.length) && o.push((0, l.jsx)("div", {
                        className: Y.overridePlaceholder,
                        children: (0, l.jsx)(S.Text, {
                            className: Y.overrideHeader,
                            variant: "text-sm/semibold",
                            children: k.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, l.jsxs)("div", {
                        className: Y.overrideList,
                        children: [(0, l.jsxs)(D.default, {
                            children: [(0, l.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: Y.headerName,
                                children: k.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, l.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: Y.headerOption,
                                children: k.default.Messages.FORM_LABEL_ALL
                            }), (0, l.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: Y.headerOption,
                                children: k.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, l.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: Y.headerOption,
                                children: k.default.Messages.FORM_LABEL_NOTHING
                            }), (0, l.jsx)(S.Heading, {
                                variant: "eyebrow",
                                className: Y.headerOption,
                                children: (0, l.jsx)(S.Tooltip, {
                                    text: k.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, l.jsx)("span", {
                                        ...e,
                                        children: k.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), o]
                    })
                }
                render() {
                    let {
                        showUnreadsSettings: e
                    } = this.props;
                    return (0, l.jsxs)(S.ModalRoot, {
                        "aria-label": k.default.Messages.NOTIFICATION_SETTINGS,
                        size: S.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, l.jsxs)(S.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), e && this.renderUnreadsOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
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
                            i = null != s ? s.name : null;
                        return (0, l.jsx)(F.default, {
                            icon: (0, C.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: i
                        })
                    }
                }
            }

            function z(e) {
                let {
                    guildId: t,
                    ...s
                } = e, i = (0, v.useGuildUnreadsExperiment)(), n = (0, M.useIsNotificationRedesignEnabled)(), a = (0, f.useStateFromStoresObject)([A.default, j.default, U.default, H.default], () => {
                    let e = A.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: j.default.getGuild(t),
                        memberCount: U.default.getMemberCount(t),
                        suppressEveryone: H.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: H.default.isSuppressRolesEnabled(t),
                        muteEvents: H.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: H.default.isMobilePushEnabled(t),
                        muted: H.default.isMuted(t),
                        muteConfig: H.default.getMuteConfig(t),
                        messageNotifications: H.default.getMessageNotifications(t),
                        channelOverrides: H.default.getChannelOverrides(t),
                        channels: (0, p.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, L.isGuildSelectableChannelType)(t) || t === P.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: H.default.getNotifyHighlights(t),
                        showUnreadsSettings: i,
                        isGuildUnreadsEnabled: H.default.isGuildUnreadSettingEnabled(t)
                    }
                }), r = (0, S.useToken)(g.default.unsafe_rawColors.GREEN_360).hex(), o = n ? T.default : Z;
                return (0, l.jsx)(o, {
                    ...a,
                    ...s,
                    checkboxColor: r
                })
            }
        },
        524173: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BellIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611ZM9.18 19.844A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        className: r
                    })
                })
            }
        },
        47115: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BellSlashIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.132 16.13c.108.27.453.285.66.079l11.94-11.94a.47.47 0 0 0-.072-.737 6.967 6.967 0 0 0-1.353-.643.623.623 0 0 1-.381-.43 2 2 0 0 0-3.852 0 .623.623 0 0 1-.38.43A7.003 7.003 0 0 0 5 9.5v2.086a.5.5 0 0 1-.128.334L3.77 13.144A3 3 0 0 0 3 15.151v.279c0 .244.045.482.132.7ZM18.641 9.359c.134-.134.359-.048.359.141v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-.461 0-.905-.012-1.33-.034a.481.481 0 0 1-.309-.828l8.28-8.28ZM9.18 19.844A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156-1.028 0-1.968-.059-2.82-.156Z",
                        className: r
                    })
                })
            }
        },
        267527: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ClydeIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.733 4.866a18.196 18.196 0 0 0-4.597-1.437c-.216.395-.415.8-.59 1.215a17.084 17.084 0 0 0-5.093 0c-.18-.414-.377-.82-.593-1.21-1.59.273-3.136.753-4.602 1.437C1.343 9.239.557 13.503.952 17.7a18.43 18.43 0 0 0 5.641 2.87c.456-.622.86-1.286 1.205-1.979a11.646 11.646 0 0 1-1.904-.923c.162-.118.318-.236.47-.368a13.056 13.056 0 0 0 11.273 0c.151.128.307.25.463.368-.606.363-1.245.674-1.903.923.35.693.75 1.353 1.205 1.975a18.427 18.427 0 0 0 5.64-2.87h.006c.463-4.863-.791-9.085-3.315-12.831ZM8.297 15.118c-1.1 0-2.005-1.022-2.005-2.266s.884-2.267 2.005-2.267c1.122 0 2.023 1.023 2.005 2.267 0 1.244-.888 2.266-2.005 2.266Zm7.402 0c-1.1 0-2.005-1.022-2.005-2.266s.888-2.267 2.005-2.267 2.022 1.023 2.005 2.267c0 1.244-.888 2.266-2.005 2.266Z",
                        className: r
                    })
                })
            }
        },
        410507: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                FiltersHorizontalIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M22 5a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .337.038.673.113 1H3a1 1 0 0 1 0-2h3.113A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .337.038.673.113 1H3a1 1 0 1 1 0-2h3.113A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.208a2.5 2.5 0 1 0 0 2H21ZM11.113 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.113Z",
                        className: r
                    })
                })
            }
        },
        121479: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ScreenStreamIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm5 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v.36a.5.5 0 0 1 .342-.474l2-.667a.5.5 0 0 1 .658.475v4.612a.5.5 0 0 1-.658.475l-2-.667A.5.5 0 0 1 14 10.64V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: r
                    })]
                })
            }
        },
        49097: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SparklesIcon: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M18.139 2.793c-.392-1.057-1.886-1.057-2.278 0l-.51 1.377a2 2 0 0 1-1.18 1.182l-1.378.51c-1.057.39-1.057 1.885 0 2.277l1.377.51a2 2 0 0 1 1.182 1.18l.51 1.378c.39 1.057 1.885 1.057 2.277 0l.51-1.377a2 2 0 0 1 1.18-1.182l1.378-.51c1.057-.39 1.057-1.885 0-2.277l-1.377-.51a2 2 0 0 1-1.182-1.18l-.51-1.378ZM10.594 9.11c-.547-1.48-2.64-1.48-3.188 0l-.841 2.273a2 2 0 0 1-1.182 1.182l-2.273.841c-1.48.547-1.48 2.64 0 3.188l2.273.841a2 2 0 0 1 1.182 1.182l.841 2.273c.548 1.48 2.64 1.48 3.188 0l.841-2.273a2 2 0 0 1 1.182-1.182l2.273-.841c1.48-.547 1.48-2.64 0-3.188l-2.273-.841a2 2 0 0 1-1.182-1.182l-.841-2.273Z",
                        className: r
                    })
                })
            }
        },
        483226: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setChannelUnreadSetting: function() {
                    return d
                },
                setGuildUnreadSetting: function() {
                    return u
                },
                setGuildUnreadsLastCleared: function() {
                    return c
                }
            });
            var i = s("913144"),
                n = s("519705"),
                l = s("282109"),
                a = s("568734"),
                r = s("627869"),
                o = s("397336");

            function d(e, t, s) {
                let i = l.default.getGuildChannelFlags(e, t);
                i = (0, a.setFlag)(i, o.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s === r.UserUnreadSettings.ALL_MESSAGES), i = (0, a.setFlag)(i, o.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, s === r.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), n.default.updateChannelOverrideSettings(e, t, {
                    flags: i
                })
            }

            function u(e, t) {
                let s = l.default.getGuildFlags(e);
                s = (0, a.setFlag)(s, o.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), s = (0, a.setFlag)(s, o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), n.default.updateGuildNotificationSettings(e, {
                    flags: s
                })
            }

            function c(e) {
                i.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        76618: function(e, t, s) {
            "use strict";
            var i, n;
            s.r(t), s.d(t, {
                NotificationSettingsKeys: function() {
                    return i
                }
            }), (n = i || (i = {})).MUTED = "muted", n.SERVER_UNREADS = "serverUnreads", n.SUPPRESS_EVERYONE = "suppressEveryone", n.SUPPRESS_ROLES = "suppressAllRoleMentions", n.MOBILE_PUSH = "mobilePushNotifications", n.MUTE_EVENTS = "muteScheduledEvents", n.NOTIFY_HIGHLIGHTS = "notifyHighlights", n.MUTE_CONFIG = "muteConfig"
        },
        872225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var i = s("446674"),
                n = s("913144"),
                l = s("49111");
            let a = {
                    ALL: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: l.HighlightSettings.ENABLED,
                        mobilePushNotifications: l.UserNotificationSettings.ALL_MESSAGES,
                        inAppNotifications: l.UserNotificationSettings.ALL_MESSAGES,
                        serverUnreads: l.UserNotificationSettings.ALL_MESSAGES,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    ESSENTIALS: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: l.HighlightSettings.ENABLED,
                        mobilePushNotifications: l.UserNotificationSettings.ONLY_MENTIONS,
                        inAppNotifications: l.UserNotificationSettings.ONLY_MENTIONS,
                        serverUnreads: l.UserNotificationSettings.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    MUTED: {
                        suppressEveryone: !0,
                        suppressAllRoleMentions: !0,
                        notifyHighlights: l.HighlightSettings.DISABLED,
                        mobilePushNotifications: l.UserNotificationSettings.NO_MESSAGES,
                        inAppNotifications: l.UserNotificationSettings.NO_MESSAGES,
                        serverUnreads: l.UserNotificationSettings.NO_MESSAGES,
                        muteScheduledEvents: !0,
                        muted: !0,
                        muteConfig: {
                            end_time: null
                        }
                    },
                    CUSTOM: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: l.HighlightSettings.ENABLED,
                        mobilePushNotifications: l.UserNotificationSettings.ONLY_MENTIONS,
                        inAppNotifications: l.UserNotificationSettings.ONLY_MENTIONS,
                        serverUnreads: l.UserNotificationSettings.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    }
                },
                r = a,
                o = {};
            class d extends i.default.PersistedStore {
                getState() {
                    return {
                        userNotificationProfiles: r,
                        selectedProfiles: o
                    }
                }
                initialize(e) {
                    null != e && (r = e.userNotificationProfiles)
                }
                getNotificationProfiles() {
                    return r
                }
                getSelectedProfile(e, t, s) {
                    return null == o[e] && (o[e] = c(t, s)), {
                        selectedOption: o[e],
                        profile: r[o[e]]
                    }
                }
            }
            d.displayName = "NotificationProfilesStore", d.persistKey = "NotificationProfilesStore";
            let u = e => ({
                    muted: e.muted,
                    mute_config: e.muteConfig,
                    message_notifications: e.serverUnreads,
                    mobile_push: e.mobilePushNotifications !== l.UserNotificationSettings.NO_MESSAGES,
                    suppress_everyone: e.suppressEveryone,
                    suppress_roles: e.suppressAllRoleMentions,
                    mute_scheduled_events: e.muteScheduledEvents,
                    notify_highlights: e.notifyHighlights
                }),
                c = (e, t) => {
                    if (e.muted) return "MUTED";
                    if (e.message_notifications === l.UserNotificationSettings.ALL_MESSAGES) return "ALL";
                    if (t) {
                        var s, i, n, o, d, u, c;
                        let t = (r = a).CUSTOM.mobilePushNotifications;
                        null !== e.mobile_push && void 0 !== e.mobile_push && !e.mobile_push && (t = l.UserNotificationSettings.NO_MESSAGES), r.CUSTOM = {
                            muted: null !== (s = e.muted) && void 0 !== s ? s : r.CUSTOM.muted,
                            muteConfig: null !== (i = e.mute_config) && void 0 !== i ? i : r.CUSTOM.muteConfig,
                            serverUnreads: null !== (n = e.message_notifications) && void 0 !== n ? n : r.CUSTOM.serverUnreads,
                            mobilePushNotifications: t,
                            suppressEveryone: null !== (o = e.suppress_everyone) && void 0 !== o ? o : r.CUSTOM.suppressEveryone,
                            suppressAllRoleMentions: null !== (d = e.suppress_roles) && void 0 !== d ? d : r.CUSTOM.suppressAllRoleMentions,
                            muteScheduledEvents: null !== (u = e.mute_scheduled_events) && void 0 !== u ? u : r.CUSTOM.muteScheduledEvents,
                            notifyHighlights: null !== (c = e.notify_highlights) && void 0 !== c ? c : r.CUSTOM.notifyHighlights,
                            inAppNotifications: r.CUSTOM.inAppNotifications
                        }
                    }
                    return "CUSTOM"
                },
                h = new d(n.default, {
                    GUILD_SET_NOTIFICATION_PROFILE: e => {
                        o[e.guildId] = e.profile, e.handleUpdate(e.guildId, u(r[o[e.guildId]]))
                    },
                    GUILD_UPDATE_NOTIFICATION_PROFILE: e => {
                        r[e.profile] = {
                            ...r[e.profile],
                            ...e.updatedSettings
                        }, e.handleUpdate(e.guildId, u(r[e.profile]))
                    }
                });
            var f = h
        },
        514933: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsNotificationRedesignEnabled: function() {
                    return n
                }
            });
            var i = s("862205");

            function n() {
                let {
                    enabled: e
                } = l.useExperiment({
                    location: "0721ad_1"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2022-11_notification_redesign",
                label: "NotificationRedesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Notification Redesign Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        47495: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getMuteTimeOptions: function() {
                    return r
                },
                filterOverrides: function() {
                    return o
                }
            });
            var i = s("668597"),
                n = s("49111"),
                l = s("468200"),
                a = s("782340");

            function r() {
                return [{
                    label: a.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: l.MuteUntilSeconds.MINUTES_15
                }, {
                    label: a.default.Messages.MUTE_DURATION_1_HOUR,
                    value: l.MuteUntilSeconds.HOURS_1
                }, {
                    label: a.default.Messages.MUTE_DURATION_3_HOURS,
                    value: l.MuteUntilSeconds.HOURS_3
                }, {
                    label: a.default.Messages.MUTE_DURATION_8_HOURS,
                    value: l.MuteUntilSeconds.HOURS_8
                }, {
                    label: a.default.Messages.MUTE_DURATION_24_HOURS,
                    value: l.MuteUntilSeconds.HOURS_24
                }, {
                    label: a.default.Messages.MUTE_DURATION_ALWAYS,
                    value: l.MuteUntilSeconds.ALWAYS
                }]
            }

            function o(e) {
                return Object.keys(e).filter(t => !!(0, i.computeIsMuted)(e[t]) || e[t].message_notifications !== n.UserNotificationSettings.NULL || !1)
            }
        },
        308305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelNotificationSettings: function() {
                    return p
                }
            });
            var i = s("37983"),
                n = s("884691"),
                l = s("77078"),
                a = s("519705"),
                r = s("133403"),
                o = s("679653"),
                d = s("419830"),
                u = s("42203"),
                c = s("245997"),
                h = s("27618"),
                f = s("697218"),
                g = s("145131"),
                S = s("49111"),
                N = s("782340"),
                E = s("296884");
            class p extends n.PureComponent {
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
                        muted: n,
                        guildMessageNotifications: a,
                        checkboxColor: r
                    } = this.props, o = t === e;
                    (null == t || t === S.UserNotificationSettings.NULL) && e === a && (o = !0);
                    let d = l.Checkbox.Types.INVERTED;
                    return (n || t === S.UserNotificationSettings.NULL || null == t) && (d = l.Checkbox.Types.GHOST), (0, i.jsx)(l.Checkbox, {
                        value: !s && o,
                        disabled: s,
                        shape: l.Checkbox.Shapes.ROUND,
                        color: r,
                        type: d,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: s
                    } = this.props;
                    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
                    let n = (0, d.getChannelIconComponent)(s);
                    if (s.type === S.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
                        let e = c.default.getCategories(s.guild_id);
                        t = N.default.Messages.NUM_CHANNELS.format({
                            num: null != e[s.id] ? e[s.id].length : 0
                        })
                    } else t = null != e ? N.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, o.computeChannelName)(e, f.default, h.default)
                    }) : N.default.Messages.NO_CATEGORY;
                    return (0, i.jsxs)(g.default, {
                        grow: 1,
                        className: E.nameContainer,
                        children: [null != n ? (0, i.jsx)(n, {
                            className: E.icon
                        }) : null, (0, i.jsxs)("div", {
                            className: E.channelNameContainer,
                            children: [(0, i.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                className: E.channelName,
                                children: (0, o.computeChannelName)(s, f.default, h.default)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                className: E.channelNameByline,
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
                    return (0, i.jsxs)(g.default, {
                        grow: 0,
                        shrink: 0,
                        className: E.checkboxGroup,
                        justify: g.default.Justify.AROUND,
                        align: g.default.Align.CENTER,
                        children: [(0, i.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, i.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, i.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.NO_MESSAGES)
                        }), (0, i.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: E.checkboxMute,
                            children: (0, i.jsx)(l.Checkbox, {
                                value: e,
                                shape: l.Checkbox.Shapes.BOX,
                                type: l.Checkbox.Types.INVERTED,
                                onChange: this.handleMute
                            })
                        })]
                    })
                }
                render() {
                    let {
                        highlight: e
                    } = this.state;
                    return (0, i.jsxs)(l.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? E.overrideHighlight : E.override,
                        children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
                            className: E.removeOverride,
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
        819666: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var i = s("37983"),
                n = s("884691"),
                l = s("917351"),
                a = s.n(l),
                r = s("669491"),
                o = s("77078"),
                d = s("668597"),
                u = s("679653"),
                c = s("419830"),
                h = s("42203"),
                f = s("27618"),
                g = s("697218"),
                S = s("145131"),
                N = s("612434"),
                E = s("449008"),
                p = s("47495"),
                m = s("308305"),
                C = s("49111"),
                _ = s("782340"),
                v = s("6847");
            let M = e => {
                let t = h.default.getChannel(e.value);
                if (null == t) return e.label;
                let s = h.default.getChannel(t.parent_id),
                    n = null != s ? s.name : null;
                return (0, i.jsx)(N.default, {
                    icon: (0, c.getChannelIconComponent)(t),
                    title: e.label,
                    subtitle: n
                })
            };

            function x(e) {
                let {
                    channelOverrides: t,
                    guildMuted: s,
                    channels: l,
                    messageNotifications: c,
                    categories: h
                } = e, [N, x] = n.useState(new Set((0, p.filterOverrides)(t))), O = e => {
                    let t = new Set(N);
                    t.delete(e), x(t)
                }, T = (0, o.useToken)(r.default.unsafe_rawColors.GREEN_360).hex(), I = a(l).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== C.ChannelTypes.GUILD_CATEGORY || null != h[t.id] && h[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, u.computeChannelName)(t, g.default, f.default)
                    }
                }).value(), L = l.map(e => {
                    let {
                        channel: n
                    } = e;
                    if (!N.has(n.id) || null != h[n.id] && 0 === h[n.id].length) return null;
                    let l = t[n.id];
                    return (0, i.jsx)(m.ChannelNotificationSettings, {
                        channel: n,
                        guildMuted: s,
                        muted: null != l && (0, d.computeIsMuted)(l),
                        messageNotifications: null != l ? l.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: O,
                        checkboxColor: T
                    }, n.id)
                }).filter(E.isNotNullish);
                return (0 === N.size || 0 === L.length) && L.push((0, i.jsx)("div", {
                    className: v.overridePlaceholder,
                    children: (0, i.jsx)(o.Text, {
                        className: v.overrideHeader,
                        variant: "text-sm/semibold",
                        children: _.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    })
                }, "placeholder")), (0, i.jsxs)("div", {
                    className: v.container,
                    children: [(0, i.jsxs)(o.FormItem, {
                        title: _.default.Messages.NOTIFICATION_OVERRIDES,
                        className: v.largeSpacing,
                        children: [(0, i.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: v.smallSpacing,
                            children: _.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, i.jsx)(o.SearchableSelect, {
                            value: "",
                            placeholder: _.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: M,
                            options: I,
                            onChange: e => {
                                if (null == e) return;
                                let t = new Set(N);
                                t.add(e), x(t)
                            }
                        })]
                    }), (0, i.jsxs)("div", {
                        className: v.overrideList,
                        children: [(0, i.jsxs)(S.default, {
                            children: [(0, i.jsx)(o.Heading, {
                                variant: "eyebrow",
                                className: v.headerName,
                                children: _.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, i.jsx)(o.Heading, {
                                variant: "eyebrow",
                                className: v.headerOption,
                                children: _.default.Messages.FORM_LABEL_ALL
                            }), (0, i.jsx)(o.Heading, {
                                variant: "eyebrow",
                                className: v.headerOption,
                                children: _.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, i.jsx)(o.Heading, {
                                variant: "eyebrow",
                                className: v.headerOption,
                                children: _.default.Messages.FORM_LABEL_NOTHING
                            }), (0, i.jsx)(o.Heading, {
                                variant: "eyebrow",
                                className: v.headerOption,
                                children: (0, i.jsx)(o.Tooltip, {
                                    text: _.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, i.jsx)("span", {
                                        ...e,
                                        children: _.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), L]
                    })]
                })
            }
        },
        34026: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var i = s("37983"),
                n = s("884691"),
                l = s("414456"),
                a = s.n(l),
                r = s("77078"),
                o = s("519705"),
                d = s("954419"),
                u = s("76618"),
                c = s("49111"),
                h = s("782340"),
                f = s("526211");

            function g(e) {
                let {
                    guild: t,
                    suppressEveryone: s,
                    suppressRoles: l,
                    mobilePush: g,
                    serverUnreads: S,
                    notifyHighlights: N
                } = e, E = n.useMemo(() => [{
                    value: c.UserNotificationSettings.ALL_MESSAGES,
                    label: h.default.Messages.USER_UNREADS_ALL_MESSAGES
                }, {
                    value: c.UserNotificationSettings.ONLY_MENTIONS,
                    label: h.default.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS
                }, {
                    value: c.UserNotificationSettings.NO_MESSAGES,
                    label: h.default.Messages.USER_UNREADS_NULL
                }], []);
                return (0, i.jsx)("div", {
                    className: a(f.largeSpacing, f.container),
                    children: (0, i.jsxs)(r.FormItem, {
                        children: [(0, i.jsxs)("div", {
                            className: f.dropDownContainer,
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: h.default.Messages.MOBILE_PUSH
                            }), (0, i.jsx)(d.default, {
                                value: g,
                                className: f.dropDown,
                                options: E,
                                onChange: e => {
                                    o.default.handleSelectChange("CUSTOM", u.NotificationSettingsKeys.MOBILE_PUSH, e.value, t)
                                }
                            })]
                        }), (0, i.jsxs)("div", {
                            className: f.dropDownContainer,
                            children: [(0, i.jsxs)(r.Text, {
                                variant: "text-md/medium",
                                children: [" ", h.default.Messages.SERVER_UNREADS]
                            }), (0, i.jsx)(d.default, {
                                value: S,
                                className: f.dropDown,
                                options: E,
                                onChange: e => {
                                    o.default.handleSelectChange("CUSTOM", u.NotificationSettingsKeys.SERVER_UNREADS, e.value, t)
                                }
                            })]
                        }), (0, i.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => o.default.handleCheckboxChange("CUSTOM", u.NotificationSettingsKeys.SUPPRESS_EVERYONE, !e, t),
                            hideBorder: !0,
                            value: !s,
                            children: h.default.Messages.NOTIFY_AT_EVERYONE
                        }), (0, i.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => o.default.handleCheckboxChange("CUSTOM", u.NotificationSettingsKeys.SUPPRESS_ROLES, !e, t),
                            hideBorder: !0,
                            value: !l,
                            children: h.default.Messages.NOTIFY_ROLES
                        }), (0, i.jsx)(r.FormSwitch, {
                            className: f.switchItemContainer,
                            onChange: e => o.default.handleHighlightsChange("CUSTOM", e ? c.HighlightSettings.ENABLED : c.HighlightSettings.DISABLED, t),
                            hideBorder: !0,
                            value: N === c.HighlightSettings.ENABLED,
                            children: h.default.Messages.NOTIFY_HIGHLIGHTS
                        }), (0, i.jsx)(r.Text, {
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
            var i = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("519705"),
                a = s("279627"),
                r = s("76618"),
                o = s("49111"),
                d = s("782340"),
                u = s("526211");

            function c(e) {
                let {
                    guild: t,
                    suppressEveryone: s,
                    suppressRoles: c,
                    notifyHighlights: h
                } = e;
                return (0, i.jsxs)("div", {
                    className: u.container,
                    children: [(0, i.jsx)(a.default, {
                        setting: o.UserNotificationSettings.ONLY_MENTIONS,
                        guild: t
                    }), (0, i.jsx)("div", {
                        className: u.divider
                    }), (0, i.jsx)("div", {
                        className: u.largeSpacing,
                        children: (0, i.jsxs)(n.FormItem, {
                            children: [(0, i.jsx)(n.FormSwitch, {
                                onChange: e => l.default.handleCheckboxChange("ESSENTIALS", r.NotificationSettingsKeys.SUPPRESS_EVERYONE, !e, t),
                                hideBorder: !0,
                                value: !s,
                                children: d.default.Messages.NOTIFY_AT_EVERYONE
                            }), (0, i.jsx)(n.FormSwitch, {
                                onChange: e => l.default.handleCheckboxChange("ESSENTIALS", r.NotificationSettingsKeys.SUPPRESS_ROLES, !e, t),
                                hideBorder: !0,
                                value: !c,
                                children: d.default.Messages.NOTIFY_ROLES
                            }), (0, i.jsx)(n.FormSwitch, {
                                className: u.switchItemContainer,
                                onChange: e => l.default.handleHighlightsChange("ESSENTIALS", e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED, t),
                                hideBorder: !0,
                                value: h === o.HighlightSettings.ENABLED,
                                children: d.default.Messages.NOTIFY_HIGHLIGHTS
                            }), (0, i.jsx)(n.Text, {
                                className: u.highlightsText,
                                variant: "text-xs/normal",
                                children: d.default.Messages.NOTIFY_HIGHLIGHTS_DESC
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
                    return v
                }
            });
            var i = s("37983"),
                n = s("884691"),
                l = s("446674"),
                a = s("77078"),
                r = s("320954"),
                o = s("44574"),
                d = s("233069"),
                u = s("245997"),
                c = s("525065"),
                h = s("305961"),
                f = s("282109"),
                g = s("145131"),
                S = s("872225"),
                N = s("819666"),
                E = s("425379"),
                p = s("49111"),
                m = s("782340"),
                C = s("723859");
            let _ = e => {
                let t, {
                        guildId: s,
                        guild: r,
                        muted: o,
                        muteConfig: d,
                        messageNotifications: u,
                        mobilePush: c,
                        suppressEveryone: h,
                        suppressRoles: f,
                        notifyHighlights: p,
                        muteEvents: _,
                        channelOverrides: v,
                        categories: M,
                        channels: x,
                        transitionState: O,
                        onClose: T
                    } = e,
                    [I, L] = n.useState("SERVER_NOTIFICATIONS"),
                    {
                        userNotificationProfiles: R,
                        selectedProfile: A
                    } = (0, l.useStateFromStoresObject)([S.default], () => ({
                        userNotificationProfiles: S.default.getNotificationProfiles(),
                        selectedProfile: S.default.getSelectedProfile(s, {
                            muted: o,
                            mute_config: d,
                            message_notifications: u,
                            mobile_push: c,
                            suppress_everyone: h,
                            suppress_roles: f,
                            notify_highlights: p
                        }, !0)
                    }), [s, u, c, d, o, p, h, f]);
                if (null == r || null == R || null == A) return null;
                switch (I) {
                    case "SERVER_NOTIFICATIONS":
                        t = (0, i.jsx)(E.default, {
                            guildId: s,
                            guild: r,
                            muted: o,
                            muteConfig: d,
                            messageNotifications: u,
                            mobilePush: c,
                            suppressEveryone: h,
                            suppressRoles: f,
                            selectedProfile: A.selectedOption,
                            userNotificationProfiles: R,
                            muteEvents: _
                        });
                        break;
                    case "CHANNEL_OVERRIDES":
                        t = (0, i.jsx)(N.default, {
                            guildMuted: o,
                            messageNotifications: u,
                            channelOverrides: v,
                            categories: M,
                            channels: x
                        })
                }
                return (0, i.jsxs)(a.ModalRoot, {
                    className: C.modal,
                    "aria-label": m.default.Messages.NOTIFICATION_SETTINGS,
                    size: a.ModalSize.MEDIUM,
                    transitionState: O,
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        children: [(0, i.jsxs)(g.default.Child, {
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                children: m.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, i.jsx)(a.Text, {
                                className: C.subtitleText,
                                variant: "text-xs/normal",
                                children: r.name
                            })]
                        }), (0, i.jsx)(g.default.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, {
                                onClick: T
                            })
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: C.content,
                        children: [(0, i.jsxs)(a.TabBar, {
                            className: C.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: I,
                            onItemSelect: L,
                            children: [(0, i.jsx)(a.TabBar.Item, {
                                className: C.tabBarItem,
                                id: "SERVER_NOTIFICATIONS",
                                children: m.default.Messages.SERVER_NOTIFICATIONS_TAB
                            }, "SERVER_NOTIFICATIONS"), (0, i.jsx)(a.TabBar.Item, {
                                className: C.tabBarItem,
                                id: "CHANNEL_OVERRIDES",
                                children: m.default.Messages.CHANNEL_OVERRIDES_TAB
                            }, "CHANNEL_OVERRIDES")]
                        }), t]
                    })]
                })
            };

            function v(e) {
                let {
                    guildId: t,
                    ...s
                } = e, n = (0, o.useGuildUnreadsExperiment)(), a = (0, l.useStateFromStoresObject)([u.default, h.default, c.default, f.default], () => {
                    let e = u.default.getCategories(t);
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
                            return (0, d.isGuildSelectableChannelType)(t) || t === p.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: f.default.getNotifyHighlights(t),
                        showUnreadsSettings: n,
                        isGuildUnreadsEnabled: f.default.isGuildUnreadSettingEnabled(t)
                    }
                });
                return (0, i.jsx)(_, {
                    ...a,
                    ...s
                })
            }
        },
        685976: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("519705"),
                a = s("954419"),
                r = s("47495"),
                o = s("279627"),
                d = s("76618"),
                u = s("49111"),
                c = s("468200"),
                h = s("782340"),
                f = s("526211");

            function g(e) {
                var t;
                let {
                    guild: s,
                    muteConfig: g
                } = e, S = null !== (t = null == g ? void 0 : g.selected_time_window) && void 0 !== t ? t : c.MuteUntilSeconds.ALWAYS;
                return (0, i.jsxs)("div", {
                    className: f.container,
                    children: [(0, i.jsx)(o.default, {
                        setting: u.UserNotificationSettings.NO_MESSAGES,
                        guild: s
                    }), (0, i.jsx)("div", {
                        className: f.divider
                    }), (0, i.jsx)("div", {
                        className: f.largeSpacing,
                        children: (0, i.jsx)(n.FormItem, {
                            children: (0, i.jsxs)("div", {
                                className: f.dropDownContainer,
                                children: [(0, i.jsxs)(n.Text, {
                                    variant: "text-md/medium",
                                    children: [" ", h.default.Messages.MUTE_DURATION]
                                }), (0, i.jsx)(a.default, {
                                    value: S,
                                    className: f.dropDown,
                                    options: (0, r.getMuteTimeOptions)(),
                                    onChange: e => {
                                        l.default.handleMuteConfigChange(d.NotificationSettingsKeys.MUTE_CONFIG, e.value, s)
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
                    return m
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("519705"),
                a = s("660279"),
                r = s("998650"),
                o = s("952479"),
                d = s("172483"),
                u = s("34026"),
                c = s("120839"),
                h = s("685976"),
                f = s("279627"),
                g = s("49111"),
                S = s("782340"),
                N = s("600937");
            let E = e => {
                    switch (e) {
                        case "ALL":
                            return {
                                name: S.default.Messages.ALL_PROFILE_TITLE, desc: S.default.Messages.ALL_PROFILE_DESC, icon: a.default
                            };
                        case "ESSENTIALS":
                            return {
                                name: S.default.Messages.ESSENTIALS_PROFILE_TITLE, desc: S.default.Messages.ESSENTIALS_PROFILE_DESC, icon: o.default
                            };
                        case "MUTED":
                            return {
                                name: S.default.Messages.MUTED_PROFILE_NAME, desc: S.default.Messages.MUTED_PROFILE_DESC, icon: r.default
                            };
                        case "CUSTOM":
                            return {
                                name: S.default.Messages.CUSTOM_PROFILE_NAME, desc: S.default.Messages.CUSTOM_PROFILE_DESC, icon: d.default
                            }
                    }
                },
                p = (e, t, s) => {
                    switch (e) {
                        case "ALL":
                            return (0, i.jsx)(f.default, {
                                setting: g.UserNotificationSettings.ALL_MESSAGES,
                                guild: s
                            });
                        case "ESSENTIALS":
                            return (0, i.jsx)(c.default, {
                                guild: s,
                                suppressEveryone: t.suppressEveryone,
                                suppressRoles: t.suppressAllRoleMentions,
                                notifyHighlights: t.notifyHighlights
                            });
                        case "MUTED":
                            return (0, i.jsx)(h.default, {
                                guild: s,
                                muteConfig: t.muteConfig
                            });
                        case "CUSTOM":
                            return (0, i.jsx)(u.default, {
                                guild: s,
                                suppressEveryone: t.suppressEveryone,
                                suppressRoles: t.suppressAllRoleMentions,
                                mobilePush: t.mobilePushNotifications,
                                serverUnreads: t.serverUnreads,
                                notifyHighlights: t.notifyHighlights
                            })
                    }
                };

            function m(e) {
                let {
                    selectedProfile: t,
                    userNotificationProfiles: s,
                    guild: a
                } = e, r = Object.entries(s);
                if (null == a) return null;
                let o = r.map(e => {
                    let t = e[0],
                        s = e[1],
                        i = E(t),
                        n = p(t, s, a);
                    return {
                        ...i,
                        value: t,
                        radioItemIconClassName: N.radioIcon,
                        collapsibleContent: n
                    }
                });
                return (0, i.jsx)(n.RadioGroup, {
                    options: o,
                    value: t,
                    onChange: e => {
                        l.default.handleProfileChange(e, a)
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
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("77078"),
                a = s("109024"),
                r = s("153769"),
                o = s("49111"),
                d = s("782340"),
                u = s("568222");
            let c = e => {
                switch (e) {
                    case o.UserNotificationSettings.ALL_MESSAGES:
                        return d.default.Messages.USER_UNREADS_ALL_MESSAGES;
                    case o.UserNotificationSettings.ONLY_MENTIONS:
                        return d.default.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS;
                    case o.UserNotificationSettings.NO_MESSAGES:
                        return d.default.Messages.USER_UNREADS_NULL
                }
            };

            function h(e) {
                let {
                    setting: t,
                    guild: s
                } = e, h = c(t), f = (0, l.useToken)(n.default.unsafe_rawColors.WHITE_500).hex();
                return (0, i.jsxs)("div", {
                    className: u.container,
                    children: [(0, i.jsxs)("div", {
                        className: u.settingContainer,
                        children: [(0, i.jsxs)("div", {
                            className: u.guildIconContainer,
                            children: [t !== o.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
                                className: u.semiCircle
                            }), (0, i.jsx)(a.default, {
                                guild: s,
                                size: a.default.Sizes.SMALLER
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: d.default.Messages.SERVER_UNREAD_BADGE
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                children: h
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: u.settingContainer,
                        children: [(0, i.jsxs)("div", {
                            className: u.discordIconContainer,
                            children: [(0, i.jsx)(r.default, {
                                width: 24,
                                height: 24,
                                color: f
                            }), t !== o.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
                                className: u.notificationBadge,
                                children: (0, i.jsx)(l.Text, {
                                    className: u.messageCount,
                                    variant: "text-xs/bold",
                                    children: "3"
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: d.default.Messages.MOBILE_PUSH
                            }), (0, i.jsx)(l.Text, {
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
                    return a
                },
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
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
                } = e, l = a(t);
                return null != l ? (0, i.jsx)(n.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: s,
                    children: l
                }) : null
            }
        },
        954419: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_SELECT_STYLES: function() {
                    return g
                },
                default: function() {
                    return S
                }
            });
            var i, n, l = s("37983"),
                a = s("884691"),
                r = s("414456"),
                o = s.n(r),
                d = s("773392"),
                u = s("77078"),
                c = s("49111"),
                h = s("782340"),
                f = s("599619");
            (i = n || (n = {})).TOP = "top", i.BOTTOM = "bottom";
            let g = {
                container: (e, t) => {
                    let {
                        isDisabled: s
                    } = t;
                    return {
                        ...e,
                        cursor: s ? "not-allowed" : void 0,
                        pointerEvents: void 0,
                        fontSize: 16,
                        fontWeight: 500,
                        width: "100%"
                    }
                },
                control: (e, t) => {
                    let {
                        isDisabled: s,
                        menuIsOpen: i
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: s ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: i ? "4px 4px 0 0" : "4px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: s ? "not-allowed" : void 0,
                        pointerEvents: s ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                singleValue: (e, t) => {
                    let {
                        isDisabled: s
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        opacity: s ? .5 : 1
                    }
                },
                input: e => ({
                    ...e,
                    color: "var(--interactive-normal)"
                }),
                menu: e => ({
                    ...e,
                    backgroundColor: "var(--background-secondary)",
                    border: "1px solid var(--background-tertiary)",
                    borderRadius: "0 0 4px 4px",
                    color: "var(--interactive-normal)",
                    marginTop: -1,
                    marginBottom: -1
                }),
                clearIndicator: (e, t) => {
                    let {
                        isDisabled: s
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: s ? void 0 : "pointer",
                        opacity: .3,
                        padding: "8px 0",
                        transform: "scale(0.8)",
                        ":hover": {
                            color: "var(--text-danger)",
                            opacity: 1
                        }
                    }
                },
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start"
                }),
                dropdownIndicator: (e, t) => {
                    let {
                        isDisabled: s
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: s ? void 0 : "pointer",
                        opacity: s ? .3 : 1,
                        padding: "8px 8px 8px 0",
                        ":hover": {
                            color: "var(--interactive-hover)",
                            opacity: s ? .3 : 1
                        }
                    }
                },
                menuList: e => ({
                    ...e,
                    padding: 0,
                    "&::-webkit-scrollbar": {
                        width: 8,
                        padding: "0px 2px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "var(--scrollbar-thin-thumb)",
                        border: "2px solid transparent",
                        backgroundClip: "padding-box",
                        borderRadius: 4
                    },
                    "&::-webkit-scrollbar-track-piece": {
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                    }
                }),
                option: (e, t) => {
                    let {
                        isSelected: s,
                        isFocused: i
                    } = t;
                    return {
                        ...e,
                        ...s ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : i ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        }
                    }
                },
                placeholder: e => ({
                    ...e,
                    color: "var(--text-muted)"
                })
            };
            class S extends a.Component {
                focus() {
                    var e;
                    null === (e = this._selectRef.current) || void 0 === e || e.focus()
                }
                render() {
                    let e;
                    let {
                        className: t,
                        selectClassName: s,
                        error: i,
                        valueRenderer: n,
                        optionRenderer: a,
                        multiValueRenderer: r,
                        options: c,
                        value: S,
                        autofocus: N,
                        disabled: E,
                        clearable: p,
                        searchable: m,
                        styleOverrides: C,
                        isMulti: _,
                        placeholder: v,
                        filterOption: M,
                        closeMenuOnSelect: x = !0,
                        ...O
                    } = this.props, T = {
                        ...O
                    };
                    null != N && (T.autoFocus = N), null != E && (T.isDisabled = E), null != p && (T.isClearable = p), null != m && (T.isSearchable = m);
                    let I = {
                        IndicatorSeparator: () => null
                    };
                    null != a && (I.Option = e => (0, l.jsx)(d.components.Option, {
                        ...e,
                        children: a(e.data)
                    })), null != n && (I.SingleValue = e => (0, l.jsx)(d.components.SingleValue, {
                        ...e,
                        children: n(e.data)
                    })), null != r && (I.MultiValue = e => r(e.data));
                    if (_ && Array.isArray(S)) {
                        let t = {};
                        c.forEach(e => {
                            t[String(e.value)] = e
                        }), e = S.map(e => t[String(e)])
                    } else e = null != S ? c.find(e => e.value === S) : null;
                    return (0, l.jsx)(u.FocusRing, {
                        focused: this.state.isFocused && !this.state.isOpen,
                        ringTarget: this._containerRef,
                        children: (0, l.jsxs)("div", {
                            className: o(f.select, t, {
                                [f.error]: null != i
                            }),
                            ref: this._containerRef,
                            children: [(0, l.jsx)(d.default, {
                                ...T,
                                className: s,
                                ref: this._selectRef,
                                isMulti: _,
                                components: I,
                                options: c,
                                styles: null != C ? C : g,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onMenuOpen: this.handleMenuOpen,
                                onMenuClose: this.handleMenuClose,
                                closeMenuOnSelect: x,
                                value: e,
                                onKeyDown: this.handleKeyDown,
                                placeholder: null != v ? v : h.default.Messages.SELECT,
                                noOptionsMessage: () => h.default.Messages.NO_RESULTS_FOUND,
                                filterOption: M
                            }), null != i ? (0, l.jsx)("div", {
                                className: f.errorMessage,
                                children: i
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._selectRef = a.createRef(), this._containerRef = a.createRef(), this.state = {
                        isFocused: !1,
                        isOpen: !1
                    }, this.handleFocus = e => {
                        var t, s;
                        this.setState({
                            isFocused: !0
                        }), null === (t = (s = this.props).onFocus) || void 0 === t || t.call(s, e)
                    }, this.handleBlur = e => {
                        var t, s;
                        this.setState({
                            isFocused: !1
                        }), null === (t = (s = this.props).onBlur) || void 0 === t || t.call(s, e)
                    }, this.handleKeyDown = e => {
                        e.which === c.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
                    }, this.handleMenuOpen = () => {
                        this.setState({
                            isOpen: !0
                        })
                    }, this.handleMenuClose = () => {
                        this.setState({
                            isOpen: !1
                        })
                    }
                }
            }
            S.MenuPlacements = n
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
            var n = s("77078"),
                l = s("145131"),
                a = s("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: s,
                        icon: r
                    } = e;
                    return (0, i.jsxs)(l.default, {
                        className: a.wrapper,
                        align: l.default.Align.BASELINE,
                        children: [null != r && (0, i.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: a.icon
                        }), (0, i.jsx)(n.Text, {
                            variant: "text-md/normal",
                            className: a.title,
                            children: t
                        }), null != s && "" !== s ? (0, i.jsx)(n.Text, {
                            variant: "text-xs/semibold",
                            className: a.subtitle,
                            children: s
                        }) : null]
                    })
                }
        },
        660279: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("524173"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, l.BellIcon)
        },
        998650: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("47115"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: l,
                        background: r,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M21.178 1.70703L22.592 3.12103L4.12103 21.593L2.70703 20.178L21.178 1.70703Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M18 10.5283L10.5287 18H21V17C19.344 17 18 15.657 18 14V10.5283Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M8.957 19.5718L9.52877 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21C10.7748 21 9.68752 20.442 8.957 19.5718Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: n,
                            d: "M12 3C13.417 3 14.71 3.5 15.734 4.321L5.99805 14.058C5.99805 14.0479 5.99856 14.038 5.99907 14.0283C5.99956 14.0188 6.00005 14.0094 6.00005 14V9C6.00005 5.686 8.68605 3 12 3Z"
                        })]
                    })
                }, l.BellSlashIcon)
        },
        153769: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("267527"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: s = 20,
                        color: n = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 28 20",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, l.ClydeIcon, {
                    color: "color",
                    className: "remove"
                }, {
                    size: 28
                })
        },
        952479: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("49097"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#clip0_3523_134157)",
                            children: [(0, i.jsx)("path", {
                                d: "M22.2856 1.81423L23.7697 2.6283C23.8391 2.66388 23.8973 2.71794 23.9379 2.78452C23.9785 2.8511 24 2.92762 24 3.00565C24 3.08369 23.9785 3.16021 23.9379 3.22679C23.8973 3.29337 23.8391 3.34743 23.7697 3.38301L22.2856 4.18577C22.2402 4.21036 22.2029 4.24769 22.1784 4.29318L21.3657 5.77999C21.3292 5.8466 21.2755 5.90217 21.2103 5.94087C21.145 5.97958 21.0705 6 20.9947 6C20.9188 6 20.8444 5.97958 20.7791 5.94087C20.7138 5.90217 20.6601 5.8466 20.6236 5.77999L19.811 4.29318C19.7869 4.24903 19.7507 4.21273 19.7066 4.1886L18.2196 3.37453C18.1531 3.33797 18.0977 3.28418 18.059 3.21879C18.0204 3.1534 18 3.07881 18 3.00283C18 2.92684 18.0204 2.85225 18.059 2.78686C18.0977 2.72147 18.1531 2.66768 18.2196 2.63112L19.7038 1.81706C19.7486 1.79172 19.7857 1.75458 19.811 1.70964L20.6265 0.220011C20.663 0.153397 20.7166 0.0978302 20.7819 0.0591255C20.8472 0.0204207 20.9216 0 20.9975 0C21.0734 0 21.1478 0.0204207 21.2131 0.0591255C21.2784 0.0978302 21.3321 0.153397 21.3685 0.220011L22.1812 1.70682C22.2057 1.75138 22.2418 1.78849 22.2856 1.81423Z",
                                fill: n
                            }), (0, i.jsx)("path", {
                                d: "M14.9888 9.50624L18.7402 11.5593C18.8189 11.6025 18.8845 11.666 18.9302 11.7433C18.9759 11.8205 19 11.9086 19 11.9983C19 12.0881 18.9759 12.1762 18.9302 12.2534C18.8845 12.3306 18.8189 12.3941 18.7402 12.4373L14.9855 14.4904C14.7769 14.6044 14.6055 14.7759 14.4915 14.9845L12.4389 18.7402C12.3957 18.8188 12.3322 18.8845 12.255 18.9302C12.1778 18.9759 12.0897 19 12 19C11.9103 19 11.8222 18.9759 11.745 18.9302C11.6678 18.8845 11.6043 18.8188 11.5611 18.7402L9.50851 14.9845C9.39437 14.776 9.22297 14.6046 9.01454 14.4904L5.25978 12.4373C5.18112 12.3941 5.11551 12.3306 5.06981 12.2534C5.02411 12.1762 5 12.0881 5 11.9983C5 11.9086 5.02411 11.8205 5.06981 11.7433C5.11551 11.666 5.18112 11.6025 5.25978 11.5593L9.01454 9.49289C9.22319 9.37903 9.39467 9.20751 9.50851 8.99881L11.5644 5.25984C11.6076 5.18117 11.6711 5.11554 11.7483 5.06983C11.8255 5.02412 11.9136 5 12.0033 5C12.0931 5 12.1811 5.02412 12.2583 5.06983C12.3356 5.11554 12.3991 5.18117 12.4422 5.25984L14.4948 8.99881C14.6066 9.21244 14.7783 9.3888 14.9888 9.50624Z",
                                fill: n
                            })]
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_3523_134157",
                                children: (0, i.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: n
                                })
                            })
                        })]
                    })
                }, l.SparklesIcon)
        },
        172483: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                l = s("410507"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        height: t = 24,
                        width: s = 24,
                        ...n
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(n),
                        width: s,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6 2C5.44772 2 5 2.44772 5 3V15H3C2.44772 15 2 15.4477 2 16V17C2 17.5523 2.44772 18 3 18H5V21C5 21.5523 5.44772 22 6 22H7C7.55228 22 8 21.5523 8 21V18H10C10.5523 18 11 17.5523 11 17V16C11 15.4477 10.5523 15 10 15H8V3C8 2.44772 7.55228 2 7 2H6ZM16 3C16 2.44772 16.4477 2 17 2H18C18.5523 2 19 2.44772 19 3V6H21C21.5523 6 22 6.44772 22 7V8C22 8.55228 21.5523 9 21 9H19V21C19 21.5523 18.5523 22 18 22H17C16.4477 22 16 21.5523 16 21V9H14C13.4477 9 13 8.55228 13 8V7C13 6.44772 13.4477 6 14 6H16V3Z",
                            fill: "#B9BBBE"
                        })
                    })
                }, l.FiltersHorizontalIcon)
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
            var n = s("469563"),
                l = s("121479"),
                a = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: l,
                            fill: n
                        }), (0, i.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: l,
                            fill: n
                        })]
                    })
                }, l.ScreenStreamIcon)
        }
    }
]);