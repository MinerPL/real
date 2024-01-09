            "use strict";
            n.r(t), n.d(t, {
                activityInviteKey: function() {
                    return N
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("819689"),
                d = n("803816"),
                c = n("767993"),
                f = n("716241"),
                h = n("651057"),
                C = n("299285"),
                p = n("850391"),
                m = n("149022"),
                E = n("681060"),
                g = n("884351"),
                S = n("671071"),
                A = n("401848"),
                _ = n("718422"),
                T = n("49111"),
                M = n("782340"),
                I = n("216220");
            let N = "ActivityInvite";
            class v extends s.PureComponent {
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
                    null != e.application_id && null == t && h.default.fetchApplication(e.application_id)
                }
                renderTitle() {
                    let {
                        activity: e
                    } = this.props;
                    switch (e.type) {
                        case T.ActivityTypes.LISTENING:
                            return M.default.Messages.INVITE_EMBED_LISTENING_INVITE;
                        case T.ActivityTypes.PLAYING:
                        case T.ActivityTypes.STREAMING:
                        default:
                            return M.default.Messages.INVITE_EMBED_GAME_INVITE
                    }
                }
                render() {
                    let {
                        textValue: e,
                        richValue: t,
                        textFocused: n,
                        contentWarningProps: s
                    } = this.state, {
                        activity: l,
                        analyticsLocations: r,
                        channel: u,
                        activityActionType: f,
                        cooldown: h,
                        application: C,
                        transitionState: m,
                        onClose: g
                    } = this.props, S = h > 0, A = S ? M.default.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
                        seconds: Math.round((h + 1e3) / 1e3)
                    }) : null;
                    return (0, a.jsxs)(o.ModalRoot, {
                        size: o.ModalSize.SMALL,
                        transitionState: m,
                        "aria-label": this.renderTitle(),
                        children: [(0, a.jsx)(o.ModalHeader, {
                            separator: !1,
                            children: (0, a.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                children: this.renderTitle()
                            })
                        }), (0, a.jsxs)(o.ModalContent, {
                            children: [(0, a.jsx)("div", {
                                className: I.subHeader,
                                children: M.default.Messages.MESSAGE_PREVIEW
                            }), (0, a.jsx)(d.default, {
                                activityActionType: f,
                                activity: l,
                                className: I.preview,
                                application: C,
                                partyId: null != l.party ? l.party.id : null,
                                isPreview: !0,
                                analyticsLocations: r
                            }), (0, a.jsx)("div", {
                                className: I.subHeader,
                                children: M.default.Messages.ADD_A_COMMENT_OPTIONAL
                            }), (0, a.jsx)(o.Popout, {
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
                                    return i(null != s, "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(c.default, {
                                        onClose: t,
                                        ...s
                                    })
                                },
                                children: () => (0, a.jsx)(E.default, {
                                    className: I.textArea,
                                    textValue: e,
                                    richValue: t,
                                    focused: n,
                                    channel: u,
                                    onChange: this.handleTextChange,
                                    onSubmit: this.handleShare,
                                    type: p.ChatInputTypes.FORM,
                                    parentModalKey: N
                                })
                            })]
                        }), (0, a.jsxs)(o.ModalFooter, {
                            children: [(0, a.jsx)(o.Tooltip, {
                                text: A,
                                children: e => (0, a.jsx)("div", {
                                    ...e,
                                    children: (0, a.jsx)(o.Button, {
                                        disabled: S,
                                        onClick: this.handleShare,
                                        children: M.default.Messages.INVITE_EMBED_SEND_INVITE
                                    })
                                })
                            }), (0, a.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: g,
                                children: M.default.Messages.CANCEL
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        ...(0, m.createEmptyState)(),
                        textFocused: !0,
                        contentWarningProps: null
                    }, this.trackInvite = e => {
                        if (null != e && e.ok) {
                            let {
                                activity: t,
                                channel: n,
                                activityActionType: a
                            } = this.props, s = "";
                            switch (a) {
                                case T.ActivityActionTypes.JOIN:
                                    s = "Invite to Join";
                                    break;
                                case T.ActivityActionTypes.LISTEN:
                                    s = "Invite to Listen";
                                    break;
                                case T.ActivityActionTypes.WATCH:
                                    s = "Invite to Watch"
                            }
                            return f.default.trackWithMetadata(T.AnalyticEvents.INVITE_SENT, {
                                location: "Channel Text Area - ".concat(s),
                                invite_type: t.type === T.ActivityTypes.LISTENING ? T.LoggingInviteTypes.SPOTIFY : T.LoggingInviteTypes.APPLICATION,
                                application_id: t.application_id,
                                guild_id: n.getGuildId(),
                                channel_id: n.id,
                                message_id: null != e ? e.body.id : null
                            }), Promise.resolve()
                        }
                    }, this.handleTextChange = (e, t, n) => {
                        this.setState({
                            textValue: t,
                            richValue: n
                        })
                    }, this.handleShare = () => {
                        let {
                            channel: e,
                            activity: t,
                            activityActionType: n,
                            cooldown: a,
                            onClose: s
                        } = this.props, {
                            textValue: l,
                            contentWarningProps: i
                        } = this.state;
                        if (a > 0) return Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0
                        });
                        let r = g.default.parse(e, l),
                            o = {
                                activity: t,
                                type: n
                            };
                        return null != i ? (this.setState({
                            contentWarningProps: null
                        }), u.default.sendMessage(e.id, r, !0, {
                            activityAction: o
                        }).then(e => this.trackInvite(e)), s(), Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        })) : (0, _.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: p.ChatInputTypes.FORM,
                            content: l,
                            channel: e
                        }).then(t => {
                            let {
                                valid: n
                            } = t;
                            return n ? (u.default.sendMessage(e.id, r, !0, {
                                activityAction: o
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
            var L = r.default.connectStores([A.default, C.default], e => {
                let {
                    channel: t,
                    activity: n
                } = e;
                return {
                    cooldown: A.default.getSlowmodeCooldownGuess(t.id),
                    application: null != n.application_id ? C.default.getApplication(n.application_id) : S.SpotifyApplication
                }
            })(v)