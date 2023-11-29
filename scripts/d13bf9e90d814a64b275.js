(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48648"], {
        811475: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return S
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("627445"),
                l = i.n(a),
                o = i("446674"),
                r = i("77078"),
                d = i("819689"),
                c = i("803816"),
                p = i("767993"),
                u = i("716241"),
                h = i("651057"),
                I = i("299285"),
                y = i("850391"),
                f = i("149022"),
                T = i("681060"),
                v = i("884351"),
                A = i("671071"),
                g = i("401848"),
                E = i("718422"),
                N = i("49111"),
                M = i("782340"),
                _ = i("216220");
            class C extends s.PureComponent {
                componentDidMount() {
                    this.fetchApplication()
                }
                componentDidUpdate(t) {
                    let {
                        activity: e
                    } = this.props;
                    e.application_id !== t.activity.application_id && this.fetchApplication()
                }
                fetchApplication() {
                    let {
                        activity: t,
                        application: e
                    } = this.props;
                    null != t.application_id && null == e && h.default.fetchApplication(t.application_id)
                }
                renderTitle() {
                    let {
                        activity: t
                    } = this.props;
                    switch (t.type) {
                        case N.ActivityTypes.LISTENING:
                            return M.default.Messages.INVITE_EMBED_LISTENING_INVITE;
                        case N.ActivityTypes.PLAYING:
                        case N.ActivityTypes.STREAMING:
                        default:
                            return M.default.Messages.INVITE_EMBED_GAME_INVITE
                    }
                }
                render() {
                    let {
                        textValue: t,
                        richValue: e,
                        textFocused: i,
                        contentWarningProps: s
                    } = this.state, {
                        activity: a,
                        analyticsLocations: o,
                        channel: d,
                        activityActionType: u,
                        cooldown: h,
                        application: I,
                        transitionState: f,
                        onClose: v
                    } = this.props, A = h > 0, g = A ? M.default.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
                        seconds: Math.round((h + 1e3) / 1e3)
                    }) : null;
                    return (0, n.jsxs)(r.ModalRoot, {
                        size: r.ModalSize.SMALL,
                        transitionState: f,
                        "aria-label": this.renderTitle(),
                        children: [(0, n.jsx)(r.ModalHeader, {
                            separator: !1,
                            children: (0, n.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: this.renderTitle()
                            })
                        }), (0, n.jsxs)(r.ModalContent, {
                            children: [(0, n.jsx)("div", {
                                className: _.subHeader,
                                children: M.default.Messages.MESSAGE_PREVIEW
                            }), (0, n.jsx)(c.default, {
                                activityActionType: u,
                                activity: a,
                                className: _.preview,
                                application: I,
                                partyId: null != a.party ? a.party.id : null,
                                isPreview: !0,
                                analyticsLocations: o
                            }), (0, n.jsx)("div", {
                                className: _.subHeader,
                                children: M.default.Messages.ADD_A_COMMENT_OPTIONAL
                            }), (0, n.jsx)(r.Popout, {
                                position: "top",
                                onRequestClose: () => {
                                    var t;
                                    null == s || null === (t = s.onCancel) || void 0 === t || t.call(s), this.setState({
                                        contentWarningProps: null
                                    })
                                },
                                shouldShow: null != s,
                                renderPopout: t => {
                                    let {
                                        closePopout: e
                                    } = t;
                                    return l(null != s, "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"), (0, n.jsx)(p.default, {
                                        onClose: e,
                                        ...s
                                    })
                                },
                                children: () => (0, n.jsx)(T.default, {
                                    className: _.textArea,
                                    textValue: t,
                                    richValue: e,
                                    focused: i,
                                    channel: d,
                                    onChange: this.handleTextChange,
                                    onSubmit: this.handleShare,
                                    type: y.ChatInputTypes.FORM
                                })
                            })]
                        }), (0, n.jsxs)(r.ModalFooter, {
                            children: [(0, n.jsx)(r.Tooltip, {
                                text: g,
                                children: t => (0, n.jsx)("div", {
                                    ...t,
                                    children: (0, n.jsx)(r.Button, {
                                        disabled: A,
                                        onClick: this.handleShare,
                                        children: M.default.Messages.INVITE_EMBED_SEND_INVITE
                                    })
                                })
                            }), (0, n.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: v,
                                children: M.default.Messages.CANCEL
                            })]
                        })]
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        ...(0, f.createEmptyState)(),
                        textFocused: !0,
                        contentWarningProps: null
                    }, this.trackInvite = t => {
                        if (null != t && t.ok) {
                            let {
                                activity: e,
                                channel: i,
                                activityActionType: n
                            } = this.props, s = "";
                            switch (n) {
                                case N.ActivityActionTypes.JOIN:
                                    s = "Invite to Join";
                                    break;
                                case N.ActivityActionTypes.LISTEN:
                                    s = "Invite to Listen";
                                    break;
                                case N.ActivityActionTypes.WATCH:
                                    s = "Invite to Watch"
                            }
                            return u.default.trackWithMetadata(N.AnalyticEvents.INVITE_SENT, {
                                location: "Channel Text Area - ".concat(s),
                                invite_type: e.type === N.ActivityTypes.LISTENING ? N.LoggingInviteTypes.SPOTIFY : N.LoggingInviteTypes.APPLICATION,
                                application_id: e.application_id,
                                guild_id: i.getGuildId(),
                                channel_id: i.id,
                                message_id: null != t ? t.body.id : null
                            }), Promise.resolve()
                        }
                    }, this.handleTextChange = (t, e, i) => {
                        this.setState({
                            textValue: e,
                            richValue: i
                        })
                    }, this.handleShare = () => {
                        let {
                            channel: t,
                            activity: e,
                            activityActionType: i,
                            cooldown: n,
                            onClose: s
                        } = this.props, {
                            textValue: a,
                            contentWarningProps: l
                        } = this.state;
                        if (n > 0) return Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0
                        });
                        let o = v.default.parse(t, a),
                            r = {
                                activity: e,
                                type: i
                            };
                        return null != l ? (this.setState({
                            contentWarningProps: null
                        }), d.default.sendMessage(t.id, o, !0, {
                            activityAction: r
                        }).then(t => this.trackInvite(t)), s(), Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        })) : (0, E.applyChatRestrictions)({
                            openWarningPopout: t => this.setState({
                                contentWarningProps: t
                            }),
                            type: y.ChatInputTypes.FORM,
                            content: a,
                            channel: t
                        }).then(e => {
                            let {
                                valid: i
                            } = e;
                            return i ? (d.default.sendMessage(t.id, o, !0, {
                                activityAction: r
                            }).then(t => this.trackInvite(t)), s(), {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        })
                    }
                }
            }
            var S = o.default.connectStores([g.default, I.default], t => {
                let {
                    channel: e,
                    activity: i
                } = t;
                return {
                    cooldown: g.default.getSlowmodeCooldownGuess(e.id),
                    application: null != i.application_id ? I.default.getApplication(i.application_id) : A.SpotifyApplication
                }
            })(C)
        }
    }
]);