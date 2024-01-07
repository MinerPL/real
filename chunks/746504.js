            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("819689"),
                r = n("18494"),
                o = n("963662"),
                u = n("49111"),
                d = n("994428"),
                c = n("782340"),
                E = n("292379");
            class f extends s.PureComponent {
                render() {
                    let e = "".concat(c.default.Messages.INVITE_NOTICE_MESSAGE, "\n").concat(c.default.Messages.INVITE_NOTICE_MESSAGE_PART_2);
                    return (0, a.jsx)(o.default, {
                        guild: this.props.guild,
                        onDismissed: this.handleClose,
                        onClick: this.handleInvite,
                        message: e,
                        cta: c.default.Messages.INVITE_PEOPLE,
                        trackingSource: u.ChannelNoticeCtaSources.INVITE_NOTICE,
                        type: u.ChannelNoticeTypes.INVITE,
                        image: E,
                        imageMarginX: 46
                    })
                }
                constructor(...e) {
                    super(...e), this.handleInvite = () => {
                        let {
                            guild: e
                        } = this.props;
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("310688").then(n.bind(n, "310688"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                guild: e,
                                source: u.InstantInviteSources.INVITE_NOTICE
                            })
                        })
                    }, this.handleClose = () => {
                        let e = r.default.getChannelId();
                        this.props.markAsDismissed(d.ContentDismissActionType.UNKNOWN), null != e && l.default.sendBotMessage(e, c.default.Messages.HOW_TO_INVITE_OTHERS.format({
                            invitePeople: c.default.Messages.INVITE_PEOPLE
                        }))
                    }
                }
            }
            var _ = f