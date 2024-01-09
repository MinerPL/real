            "use strict";
            i.r(t), i.d(t, {
                ChannelNotificationSettings: function() {
                    return T
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                l = i("519705"),
                r = i("133403"),
                d = i("679653"),
                o = i("419830"),
                u = i("42203"),
                c = i("245997"),
                S = i("27618"),
                h = i("697218"),
                g = i("145131"),
                N = i("34676"),
                f = i("49111"),
                _ = i("782340"),
                E = i("296884");
            class T extends s.PureComponent {
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
                setMessageNotification(e, t, i) {
                    let {
                        channel: n
                    } = this.props, s = n.getGuildId();
                    null != s && l.default.updateChannelOverrideSettings(s, n.id, {
                        message_notifications: e,
                        muted: null != t && t
                    }, i)
                }
                handleRadioChange(e) {
                    this.setMessageNotification(e, void 0, N.NotificationLabel.notifications(e))
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: i,
                        muted: s,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === f.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (s || t === f.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, n.jsx)(a.Checkbox, {
                        value: !i && d,
                        disabled: i,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: i
                    } = this.props;
                    null != i.parent_id && (e = u.default.getChannel(i.parent_id));
                    let s = (0, o.getChannelIconComponent)(i);
                    if (i.type === f.ChannelTypes.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
                        let e = c.default.getCategories(i.guild_id);
                        t = _.default.Messages.NUM_CHANNELS.format({
                            num: null != e[i.id] ? e[i.id].length : 0
                        })
                    } else t = null != e ? _.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, h.default, S.default)
                    }) : _.default.Messages.NO_CATEGORY;
                    return (0, n.jsxs)(g.default, {
                        grow: 1,
                        className: E.nameContainer,
                        children: [null != s ? (0, n.jsx)(s, {
                            className: E.icon
                        }) : null, (0, n.jsxs)("div", {
                            className: E.channelNameContainer,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: E.channelName,
                                children: (0, d.computeChannelName)(i, h.default, S.default)
                            }), (0, n.jsx)(a.Text, {
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
                    return (0, n.jsxs)(g.default, {
                        grow: 0,
                        shrink: 0,
                        className: E.checkboxGroup,
                        justify: g.default.Justify.AROUND,
                        align: g.default.Align.CENTER,
                        children: [(0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.NO_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: E.checkboxMute,
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
                        className: e ? E.overrideHighlight : E.override,
                        children: [this.renderName(), this.renderOptions(), (0, n.jsx)(r.default, {
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
                            messageNotifications: i
                        } = this.props;
                        this.setMessageNotification(null != i ? i : f.UserNotificationSettings.NULL, t, N.NotificationLabel.muted(t))
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(f.UserNotificationSettings.NULL, !1, N.NotificationLabels.OverrideDeleted), null != e && e(t.id)
                    }
                }
            }