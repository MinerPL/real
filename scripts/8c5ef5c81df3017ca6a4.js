(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48648"], {
        811475: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var n = i("37983"),
                s = i("884691"),
                a = i("627445"),
                l = i.n(a),
                o = i("446674"),
                r = i("77078"),
                d = i("823411"),
                c = i("819689"),
                p = i("803816"),
                u = i("767993"),
                h = i("716241"),
                I = i("850391"),
                y = i("149022"),
                f = i("681060"),
                T = i("884351"),
                v = i("671071"),
                A = i("546463"),
                g = i("401848"),
                E = i("718422"),
                N = i("49111"),
                M = i("782340"),
                _ = i("216220");
            class C extends s.PureComponent {
                componentDidMount() {
                    this.fetchApplication()
                }
                componentDidUpdate(e) {
                    let {
                        activity: t
                    } = this.props;
                    t.application_id !== e.activity.application_id && this.fetchApplication()
                }
                fetchApplication() {
                    let {
                        activity: e,
                        application: t
                    } = this.props;
                    null != e.application_id && null == t && d.default.fetchApplication(e.application_id)
                }
                renderTitle() {
                    let {
                        activity: e
                    } = this.props;
                    switch (e.type) {
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
                        textValue: e,
                        richValue: t,
                        textFocused: i,
                        contentWarningProps: s
                    } = this.state, {
                        activity: a,
                        analyticsLocations: o,
                        channel: d,
                        activityActionType: c,
                        cooldown: h,
                        application: y,
                        transitionState: T,
                        onClose: v
                    } = this.props, A = h > 0, g = A ? M.default.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
                        seconds: Math.round((h + 1e3) / 1e3)
                    }) : null;
                    return (0, n.jsxs)(r.ModalRoot, {
                        size: r.ModalSize.SMALL,
                        transitionState: T,
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
                            }), (0, n.jsx)(p.default, {
                                activityActionType: c,
                                activity: a,
                                className: _.preview,
                                application: y,
                                partyId: null != a.party ? a.party.id : null,
                                isPreview: !0,
                                analyticsLocations: o
                            }), (0, n.jsx)("div", {
                                className: _.subHeader,
                                children: M.default.Messages.ADD_A_COMMENT_OPTIONAL
                            }), (0, n.jsx)(r.Popout, {
                                position: "top",
                                onRequestClose: () => {
                                    var e;
                                    null == s || null === (e = s.onCancel) || void 0 === e || e.call(s), this.setState({
                                        contentWarningProps: null
                                    })
                                },
                                shouldShow: null != s,
                                renderPopout: e => {
                                    let {
                                        closePopout: t
                                    } = e;
                                    return l(null != s, "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"), (0, n.jsx)(u.default, {
                                        onClose: t,
                                        ...s
                                    })
                                },
                                children: () => (0, n.jsx)(f.default, {
                                    className: _.textArea,
                                    textValue: e,
                                    richValue: t,
                                    focused: i,
                                    channel: d,
                                    onChange: this.handleTextChange,
                                    onSubmit: this.handleShare,
                                    type: I.ChatInputTypes.FORM
                                })
                            })]
                        }), (0, n.jsxs)(r.ModalFooter, {
                            children: [(0, n.jsx)(r.Tooltip, {
                                text: g,
                                children: e => (0, n.jsx)("div", {
                                    ...e,
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
                constructor(...e) {
                    super(...e), this.state = {
                        ...(0, y.createEmptyState)(),
                        textFocused: !0,
                        contentWarningProps: null
                    }, this.trackInvite = e => {
                        if (null != e && e.ok) {
                            let {
                                activity: t,
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
                            return h.default.trackWithMetadata(N.AnalyticEvents.INVITE_SENT, {
                                location: "Channel Text Area - ".concat(s),
                                invite_type: t.type === N.ActivityTypes.LISTENING ? N.LoggingInviteTypes.SPOTIFY : N.LoggingInviteTypes.APPLICATION,
                                application_id: t.application_id,
                                guild_id: i.getGuildId(),
                                channel_id: i.id,
                                message_id: null != e ? e.body.id : null
                            }), Promise.resolve()
                        }
                    }, this.handleTextChange = (e, t, i) => {
                        this.setState({
                            textValue: t,
                            richValue: i
                        })
                    }, this.handleShare = () => {
                        let {
                            channel: e,
                            activity: t,
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
                        let o = T.default.parse(e, a),
                            r = {
                                activity: t,
                                type: i
                            };
                        return null != l ? (this.setState({
                            contentWarningProps: null
                        }), c.default.sendMessage(e.id, o, !0, {
                            activityAction: r
                        }).then(e => this.trackInvite(e)), s(), Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        })) : (0, E.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: I.ChatInputTypes.FORM,
                            content: a,
                            channel: e
                        }).then(t => {
                            let {
                                valid: i
                            } = t;
                            return i ? (c.default.sendMessage(e.id, o, !0, {
                                activityAction: r
                            }).then(e => this.trackInvite(e)), s(), {
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
            var S = o.default.connectStores([g.default, A.default], e => {
                let {
                    channel: t,
                    activity: i
                } = e;
                return {
                    cooldown: g.default.getSlowmodeCooldownGuess(t.id),
                    application: null != i.application_id ? A.default.getGame(i.application_id) : v.SpotifyApplication
                }
            })(C)
        }
    }
]);