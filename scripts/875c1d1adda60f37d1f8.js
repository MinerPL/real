(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26956"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                o = n("884691"),
                i = n("414456"),
                s = n.n(i),
                l = n("817736"),
                a = n.n(l),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                E = n("845579"),
                f = n("901165"),
                I = n("62843"),
                _ = n("315102"),
                p = n("402671"),
                m = n("866190"),
                M = n("115279");
            class h extends o.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: r,
                            animated: o,
                            shouldAnimate: i,
                            isFocused: s,
                            isInteracting: l,
                            size: a = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = M.EMOJI_SIZE_MAP[a];
                        return _.default.getEmojiURL({
                            id: n,
                            animated: s && !0 === o && (!0 === i || u || !0 === l),
                            size: e
                        })
                    }
                    if (null != r) return p.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: i,
                        className: l,
                        size: a = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: E,
                        autoplay: f,
                        isInteracting: I,
                        ..._
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, r.jsx)("span", {
                        className: s("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, o.createElement)("img", {
                        ..._,
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: s("emoji", l, {
                            jumboable: "jumbo" === a
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != E && "" !== E ? {
                            "data-id": E
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            h.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    i = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let o = r[1];
                            if (e.intersectionRatio >= .7) {
                                var i, s;
                                if (-1 !== t.indexOf(o)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                                n ? t.unshift(o) : t.push(o), o.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(o); - 1 !== e && (t.splice(e, 1), o.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function s(e) {
                    let t = a.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function l(e) {
                    let r = a.findDOMNode(e);
                    i.unobserve(r);
                    let o = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== o && (n.splice(o, 1), -1 !== (o = t.indexOf(e)) && (t.splice(o, 1), o < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends o.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? s(this) : l(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: o,
                                allowAnimatedEmoji: i,
                                ...s
                            } = this.props;
                        return (0, r.jsx)(I.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...s,
                                autoplay: o || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(h);

            function N(e) {
                let t = E.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    o = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, r.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: o
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("872717"),
                o = n("913144"),
                i = n("479756"),
                s = n("38654"),
                l = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    i = d.default.getCurrentUser(),
                    s = !a.default.isMember(e, null == i ? void 0 : i.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: i
                    } = t;
                    return o.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: i.version,
                            description: i.description,
                            formFields: i.form_fields,
                            guild: i.guild
                        }
                    }), i
                } catch (t) {
                    o.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: i
                    } = n;
                o.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: i.version,
                        description: i.description,
                        formFields: i.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: i
                    } = n;
                o.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: i.version,
                        description: i.description,
                        formFields: i.form_fields
                    }
                })
            }, _ = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, i.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: i
                        } = n;
                    return o.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: i
                    }), i
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: I,
                enableVerificationForm: _,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return i
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return I
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return _
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return m
                }
            });
            var r, o = n("567054");
            o.VerificationFormFieldTypes.VERIFICATION;
            let i = new Set([o.VerificationFormFieldTypes.TERMS]),
                s = new Set([o.VerificationFormFieldTypes.MULTIPLE_CHOICE, o.VerificationFormFieldTypes.TEXT_INPUT, o.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                f = 150,
                I = 1e3,
                _ = 300,
                p = "Membership Gating",
                m = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return o
                }
            }), r = n("453265").default;
            let o = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                o = n("659500"),
                i = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.default)(e => s),
                a = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && o.ComponentDispatch.dispatch(i.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("551042"),
                i = n("599110"),
                s = n("50926"),
                l = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    i.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    i.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let i = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: i,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, o.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, o.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        652453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RawInviteCopyInputConnected: function() {
                    return C
                },
                InviteCopyInput: function() {
                    return S
                }
            });
            var r = n("37983"),
                o = n("884691"),
                i = n("414456"),
                s = n.n(i),
                l = n("498574"),
                a = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                E = n("102985"),
                f = n("599110"),
                I = n("306160"),
                _ = n("568734"),
                p = n("354023"),
                m = n("865699"),
                M = n("91366"),
                h = n("49111"),
                T = n("782340"),
                N = n("435808"),
                A = n("905518"),
                v = n("173791"),
                g = n("926622");
            let C = a.default.connectStores([E.default], () => ({
                    hideValue: E.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: i,
                        onCopy: l,
                        disabled: a
                    } = e, [c, E] = o.useState(!1), [f, _] = o.useState(!1), p = o.useMemo(() => new u.DelayedCall(1e3, () => _(!1)), [_]);
                    return o.useEffect(() => () => {
                        p.cancel()
                    }, [p]), (0, r.jsxs)("div", {
                        className: s(A.input, v.flexJustifyBetween, v.flexCenter, {
                            [A.success]: f,
                            [A.focused]: c
                        }),
                        children: [(0, r.jsx)(d.TextInput, {
                            className: N.copyInput,
                            name: "invite",
                            value: i ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: N.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? E(!0) : null,
                            onBlur: () => n ? E(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: a
                        }), I.SUPPORTS_COPY ? (0, r.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: N.copyButton,
                            onClick: () => {
                                _(!0), p.delay(), l(t)
                            },
                            disabled: a,
                            children: f ? T.default.Messages.INVITE_COPIED : T.default.Messages.COPY
                        }) : null]
                    })
                }),
                S = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: i,
                        onClose: a,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: E,
                        inviteFlags: A,
                        setInviteFlags: v,
                        showGuestInviteToggleForCurrentVoiceChannel: S,
                        copyValue: R,
                        changePage: y,
                        inviteChannel: O,
                        source: F,
                        code: b,
                        guildScheduledEvent: x,
                        disabled: V
                    } = e, {
                        maxAge: P,
                        maxUses: U,
                        networkError: L,
                        showVanityURL: D
                    } = u, w = o.useCallback(() => {
                        (0, I.copy)(R), f.default.track(h.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == O ? void 0 : O.id,
                            channel_type: null == O ? void 0 : O.type,
                            location: F,
                            code: b,
                            guild_scheduled_event_id: null == x ? void 0 : x.id
                        })
                    }, [R, O, F, b, x]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C, {
                            value: R,
                            autoFocus: i,
                            onCopy: w,
                            disabled: V
                        }), E ? (0, r.jsx)("div", {
                            className: N.temporaryMembershipContainerBackground,
                            children: (0, r.jsx)(d.FormSwitch, {
                                className: N.temporaryMembershipContainer,
                                value: (0, _.hasFlag)(A, l.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => v((0, _.setFlag)(A, l.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: V,
                                hideBorder: !0,
                                children: S ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || D ? null : (0, r.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: s(g.marginTop8, N.footerText),
                            children: [(0, p.maxAgeString)(P, U), " ", i ? (0, r.jsx)(d.Anchor, {
                                onClick: () => y(M.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && i && D ? (0, r.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: s(g.marginTop8, N.footerText),
                            children: [T.default.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(d.Anchor, {
                                onClick: () => y(M.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != L ? (0, r.jsx)(m.InviteErrorMessage, {
                            guild: t,
                            error: L,
                            onClose: a
                        }) : null]
                    })
                }
        },
        865699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteErrorMessage: function() {
                    return c
                }
            });
            var r = n("37983"),
                o = n("884691"),
                i = n("77078"),
                s = n("592407"),
                l = n("957255"),
                a = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, E = t.id, f = o.useCallback(() => {
                    c(), s.default.open(E, a.GuildSettingsSections.INSTANT_INVITES)
                }, [E, c]), I = o.useCallback(e => (0, r.jsx)(i.Clickable, {
                    className: d.errorLink,
                    onClick: f,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [f]), _ = o.useCallback(e => (0, r.jsx)(i.Anchor, {
                    href: a.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), p = n.code !== a.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : l.default.can(a.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: I,
                    inviteHelpHook: _
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, r.jsx)(i.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: p
                })
            }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return o
                }
            });
            var r = n("884691");
            let o = r.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return s
                },
                copy: function() {
                    return l
                }
            });
            var r = n("281071"),
                o = n("773336"),
                i = n("50885");
            let s = (() => {
                if (o.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function l(e) {
                return !!s && (o.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return l
                }
            });
            var r = n("884691"),
                o = n("446674"),
                i = n("244201"),
                s = n("471671");

            function l() {
                let {
                    windowId: e
                } = r.useContext(i.default);
                return (0, o.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var r, o;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return r
                }
            }), (o = r || (r = {}))[o.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", o[o.IS_VIEWED = 2] = "IS_VIEWED", o[o.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e, o.contentEditable = "true", o.style.visibility = "none", t.appendChild(o), n.selectNodeContents(o), null == r || r.removeAllRanges(), null == r || r.addRange(n), o.focus(), o.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(o), i
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);