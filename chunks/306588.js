            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("437822"),
                d = n("429224"),
                c = n("851387"),
                f = n("206230"),
                h = n("774146"),
                C = n("549103"),
                p = n("591023"),
                m = n("233322"),
                E = n("567054"),
                g = n("982527"),
                S = n("388166"),
                A = n("631360"),
                _ = n("267567"),
                T = n("88187"),
                M = n("13066"),
                I = n("878720"),
                N = n("393414"),
                v = n("161778"),
                L = n("935692"),
                x = n("26989"),
                R = n("305961"),
                y = n("88093"),
                D = n("957255"),
                O = n("697218"),
                j = n("991170"),
                P = n("361528"),
                b = n("49111"),
                F = n("482931"),
                U = n("782340"),
                H = n("334831");
            class k extends s.PureComponent {
                componentDidMount() {
                    let {
                        isFollowable: e,
                        channelFollowingUsersSeen: t,
                        channel: n
                    } = this.props;
                    e && null == t && d.default.fetchChannelFollowerStats(n.id)
                }
                componentDidUpdate(e) {
                    let {
                        shouldShowLurkerModeSuccessPopout: t,
                        guild: n,
                        showMemberVerificationModal: a
                    } = this.props;
                    !a && !e.shouldShowLurkerModeSuccessPopout && t && null != n && this.setState({
                        shouldShowLurkerModeSuccessPopout: !0
                    })
                }
                render() {
                    let {
                        isFollowable: e,
                        isLurking: t,
                        notClaimed: l,
                        notPhoneVerified: i,
                        notEmailVerified: r,
                        newMember: u,
                        memberDeadline: d,
                        newAccount: c,
                        accountDeadline: f,
                        theme: h,
                        children: C,
                        canSendMessages: p,
                        channelFollowingUsersSeen: m,
                        showLurkerModeUpsellPopout: g,
                        showMemberVerificationModal: S,
                        useReducedMotion: A,
                        isStaff: _,
                        guildJoinRequest: T
                    } = this.props, {
                        shouldShowLurkerModeUpsellPopout: M,
                        shouldShowLurkerModeSuccessPopout: I
                    } = this.state, N = {
                        theme: h,
                        useReducedMotion: A
                    };
                    if (e && !p) N.message = U.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != m && m >= 1e3 && (N.subtitle = U.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
                        count: (1e3 * Math.floor(m / 1e3)).toLocaleString()
                    })), N.buttonText = U.default.Messages.FOLLOW, N.onButtonClick = this.handleFollowAnnouncement, N.imageSrc = n("757000"), t && (N.onSecondaryButtonClick = this.handleJoinServer, N.secondaryButtonText = U.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
                    else if (l) N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, N.buttonText = U.default.Messages.CLAIM_ACCOUNT, N.onButtonClick = S ? this.handleShowMemberVerification : this.handleClaimAccount, N.imageSrc = n("978834");
                    else if (S) switch (null == T ? void 0 : T.applicationStatus) {
                        case E.GuildJoinRequestApplicationStatuses.SUBMITTED:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, N.subtitle = U.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, N.onButtonClick = this.handleCancelApplication, N.imageSrc = n("897176");
                            break;
                        case E.GuildJoinRequestApplicationStatuses.REJECTED:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, N.onButtonClick = this.handleViewApplicationRejection, N.imageSrc = n("376180");
                            break;
                        default:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, N.buttonColor = o.ButtonColors.BRAND, N.onButtonClick = this.handleShowMemberVerification;
                            N.animationSrc = () => n.el("170206").then(n.t.bind(n, "170206", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            })
                    } else i && !_ ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, N.buttonText = U.default.Messages.VERIFY_PHONE, N.onButtonClick = this.handleVerifyPhone, N.imageSrc = n("958347")) : r ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, N.buttonText = U.default.Messages.RESEND_VERIFICATION_EMAIL, N.onButtonClick = this.handleResendVerification, N.imageSrc = n("978834")) : u ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
                        min: b.VerificationCriteria.MEMBER_AGE
                    }), N.countdown = d) : c && (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
                        min: b.VerificationCriteria.ACCOUNT_AGE
                    }), N.countdown = f);
                    return (0, a.jsx)(o.Popout, {
                        position: "top",
                        align: "left",
                        shouldShow: I,
                        onRequestClose: () => this.setState({
                            shouldShowLurkerModeSuccessPopout: !1
                        }),
                        renderPopout: this.renderSuccessPopout,
                        children: e => (0, a.jsx)(P.default, {
                            ...N,
                            children: (0, a.jsxs)(s.Fragment, {
                                children: [this.renderMemberVerificationSuccessModal(), g ? (0, a.jsx)(o.Popout, {
                                    renderPopout: this.renderLurkerModeUpsellPopout,
                                    shouldShow: M,
                                    position: "top",
                                    children: e => (0, a.jsx)(o.Clickable, {
                                        ...e,
                                        className: H.clickableChannelTextArea,
                                        onClick: this.handleTextAreaClick,
                                        children: C
                                    })
                                }) : C]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        submitting: !1,
                        shouldShowLurkerModeUpsellPopout: !1,
                        shouldShowLurkerModeSuccessPopout: !1
                    }, this.renderSuccessPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            guild: n
                        } = this.props;
                        return i(null != n, "This guildID cannot be null"), (0, a.jsx)(T.default, {
                            onClose: t,
                            guild: n
                        })
                    }, this.handleCancelApplication = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
                            header: U.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: U.default.Messages.CONFIRM,
                            cancelText: U.default.Messages.CANCEL,
                            onConfirm: () => C.default.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                            })
                        }))
                    }, this.handleViewApplicationRejection = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, o.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("388435").then(n.bind(n, "388435"));
                            return n => (0, a.jsx)(t, {
                                guildId: e.id,
                                ...n
                            })
                        })
                    }, this.handleShowMemberVerification = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, m.openMemberVerificationModal)(e.id)
                    }, this.handleClaimAccount = () => {
                        h.openClaimAccountModal()
                    }, this.handleVerifyPhone = () => {
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("601745").then(n.bind(n, "601745"));
                            return t => (0, a.jsx)(e, {
                                reason: I.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                                ...t
                            })
                        }, {
                            modalKey: F.PHONE_VERIFICATION_MODAL_KEY
                        })
                    }, this.handleResendVerification = () => {
                        var e;
                        u.default.verifyResend();
                        let t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                        null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
                            ...e,
                            header: U.default.Messages.VERIFICATION_EMAIL_TITLE,
                            confirmText: U.default.Messages.OKAY,
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                    email: t
                                })
                            })
                        }))
                    }, this.handleTextAreaClick = () => {
                        let {
                            showLurkerModeUpsellPopout: e
                        } = this.props;
                        this.setState({
                            shouldShowLurkerModeUpsellPopout: e
                        })
                    }, this.handleJoinServer = async () => {
                        this.setState({
                            submitting: !0
                        });
                        let e = this.props.channel.getGuildId();
                        try {
                            await c.default.joinGuild(e, {
                                source: b.JoinGuildSources.CHAT_INPUT_BLOCKER
                            })
                        } catch {
                            this.setState({
                                submitting: !1
                            })
                        }
                    }, this.handleGoBack = () => {
                        this.setState({
                            submitting: !0
                        });
                        let e = (0, N.getHistory)();
                        e.goBack()
                    }, this.handleFollowAnnouncement = () => {
                        let {
                            channel: e
                        } = this.props;
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("996177").then(n.bind(n, "996177"));
                            return n => (0, a.jsx)(t, {
                                channel: e,
                                ...n
                            })
                        })
                    }, this.closeLurkerModeUpsellPopout = () => {
                        this.setState({
                            shouldShowLurkerModeUpsellPopout: !1
                        })
                    }, this.renderLurkerModeUpsellPopout = () => {
                        let {
                            guild: e
                        } = this.props;
                        return i(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(M.default, {
                            type: M.LurkerModeUpsellPopoutTypes.CHAT,
                            guild: e,
                            closePopout: this.closeLurkerModeUpsellPopout
                        })
                    }, this.renderMemberVerificationSuccessModal = () => {
                        let {
                            guild: e,
                            guildJoinRequest: t
                        } = this.props, n = (null == t ? void 0 : t.applicationStatus) === E.GuildJoinRequestApplicationStatuses.APPROVED;
                        if (null == e || null == t || !n || (0, p.isApprovedAndAcked)(t)) return null;
                        let s = () => C.default.ackUserGuildJoinRequest(e.id, t.id);
                        return (0, a.jsx)(o.Modal, {
                            renderModal: t => (0, a.jsx)(S.default, {
                                ...t,
                                onAccept: s,
                                guildName: e.name
                            }),
                            onCloseRequest: s
                        })
                    }
                }
            }

            function G(e) {
                var t, n;
                let {
                    channel: s,
                    children: l
                } = e, i = s.getGuildId(), o = (0, r.useStateFromStores)([R.default], () => R.default.getGuild(i)), u = (0, r.useStateFromStores)([y.default], () => y.default.getCheck(i)), d = s.type === b.ChannelTypes.GUILD_ANNOUNCEMENT && null != o && o.hasFeature(b.GuildFeatures.NEWS), c = (0, r.useStateFromStores)([L.default], () => d ? L.default.getFollowerStatsForChannel(s.id) : null), h = (0, r.useStateFromStores)([_.default], () => _.default.isLurking(i)), C = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentUser()), p = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t, m = (0, r.useStateFromStores)([x.default], () => {
                    var e, t;
                    return null != C && null !== (t = null === (e = x.default.getMember(i, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
                }), S = !!(null == o ? void 0 : o.hasVerificationGate()), T = (m || u.notClaimed) && S, M = (0, r.useStateFromStores)([A.default], () => A.default.shouldShowPopout(i)), I = (0, r.useStateFromStores)([D.default], () => D.default.can(b.Permissions.SEND_MESSAGES, s)), N = (0, r.useStateFromStores)([g.default], () => g.default.getRequest(i)), P = {
                    ...u,
                    guild: o,
                    isLurking: h,
                    isFollowable: d,
                    shouldShowLurkerModeSuccessPopout: M,
                    showLurkerModeUpsellPopout: h && null != o && j.default.canEveryoneRole(b.Permissions.SEND_MESSAGES, s),
                    theme: v.default.theme,
                    canSendMessages: I,
                    channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
                    hasVerificationGate: S,
                    showMemberVerificationModal: T,
                    guildJoinRequestStatus: null !== (n = null == N ? void 0 : N.applicationStatus) && void 0 !== n ? n : E.GuildJoinRequestApplicationStatuses.STARTED,
                    guildJoinRequest: N,
                    useReducedMotion: f.default.useReducedMotion,
                    isStaff: p
                };
                return (0, a.jsx)(k, {
                    ...P,
                    channel: s,
                    children: l
                })
            }