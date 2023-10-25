(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26956"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("920040"),
                i = n("773670"),
                o = n("575482"),
                s = n.n(o),
                a = n("865768"),
                l = n.n(a),
                u = n("117064"),
                d = n("498225"),
                c = n("407063"),
                f = n("845579"),
                E = n("901165"),
                I = n("62843"),
                _ = n("315102"),
                p = n("402671"),
                m = n("866190"),
                M = n("115279");
            class h extends i.PureComponent {
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
                            animated: i,
                            shouldAnimate: o,
                            isFocused: s,
                            isInteracting: a,
                            size: l = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = M.EMOJI_SIZE_MAP[l];
                        return _.default.getEmojiURL({
                            id: n,
                            animated: s && !0 === i && (!0 === o || u || !0 === a),
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
                        animated: o,
                        className: a,
                        size: l = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: E,
                        isInteracting: I,
                        ..._
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, r.jsx)("span", {
                        className: s("emoji", "emoji-text"),
                        children: n
                    }) : (o && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ..._,
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: s("emoji", a, {
                            jumboable: "jumbo" === l
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
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
                    o = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let i = r[1];
                            if (e.intersectionRatio >= .7) {
                                var o, s;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function s(e) {
                    let t = l.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), o.observe(t))
                }

                function a(e) {
                    let r = l.findDOMNode(e);
                    o.unobserve(r);
                    let i = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends i.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? s(this) : a(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: o,
                                ...s
                            } = this.props;
                        return (0, r.jsx)(I.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...s,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && o
                            })
                        })
                    }
                }
            }(h);

            function N(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([E.default], () => E.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, r.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: i
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
            var r = n("990746"),
                i = n("913144"),
                o = n("479756"),
                s = n("38654"),
                a = n("9294"),
                l = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    o = d.default.getCurrentUser(),
                    s = !l.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                    (0, o.updateImpersonatedData)(e, {
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
                            body: o
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: I,
                enableVerificationForm: _,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return l
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
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
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
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                l = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
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
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("710835"),
                i = n("659500"),
                o = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(e => s),
                l = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("551042"),
                o = n("599110"),
                s = n("50926"),
                a = n("347977"),
                l = n("394294"),
                u = n("49111");
            let d = () => {
                    o.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let o = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
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
                    return R
                }
            });
            var r = n("920040"),
                i = n("773670"),
                o = n("575482"),
                s = n.n(o),
                a = n("757364"),
                l = n("498225"),
                u = n("638800"),
                d = n("77078"),
                c = n("162771"),
                f = n("102985"),
                E = n("599110"),
                I = n("306160"),
                _ = n("568734"),
                p = n("354023"),
                m = n("865699"),
                M = n("91366"),
                h = n("49111"),
                T = n("782340"),
                N = n("686896"),
                A = n("254180"),
                v = n("705562"),
                g = n("84811");
            let C = l.default.connectStores([f.default], () => ({
                    hideValue: f.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: o,
                        onCopy: a,
                        disabled: l
                    } = e, [c, f] = i.useState(!1), [E, _] = i.useState(!1), p = i.useMemo(() => new u.DelayedCall(1e3, () => _(!1)), [_]);
                    return i.useEffect(() => () => {
                        p.cancel()
                    }, [p]), (0, r.jsxs)("div", {
                        className: s(A.input, v.flexJustifyBetween, v.flexCenter, {
                            [A.success]: E,
                            [A.focused]: c
                        }),
                        children: [(0, r.jsx)(d.TextInput, {
                            className: N.copyInput,
                            name: "invite",
                            value: o ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: N.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? f(!0) : null,
                            onBlur: () => n ? f(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: l
                        }), I.SUPPORTS_COPY ? (0, r.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: E ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: N.copyButton,
                            onClick: () => {
                                _(!0), p.delay(), a(t)
                            },
                            disabled: l,
                            children: E ? T.default.Messages.INVITE_COPIED : T.default.Messages.COPY
                        }) : null]
                    })
                }),
                R = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: o,
                        onClose: l,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: f,
                        inviteFlags: A,
                        setInviteFlags: v,
                        showGuestInviteToggleForCurrentVoiceChannel: R,
                        copyValue: S,
                        changePage: O,
                        inviteChannel: y,
                        source: F,
                        code: b,
                        guildScheduledEvent: x,
                        disabled: P
                    } = e, {
                        maxAge: V,
                        maxUses: L,
                        networkError: U,
                        showVanityURL: D
                    } = u, B = i.useCallback(() => {
                        (0, I.copy)(S), E.default.track(h.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == y ? void 0 : y.id,
                            channel_type: null == y ? void 0 : y.type,
                            location: F,
                            code: b,
                            guild_scheduled_event_id: null == x ? void 0 : x.id
                        })
                    }, [S, y, F, b, x]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C, {
                            value: S,
                            autoFocus: o,
                            onCopy: B,
                            disabled: P
                        }), f ? (0, r.jsx)("div", {
                            className: N.temporaryMembershipContainerBackground,
                            children: (0, r.jsx)(d.FormSwitch, {
                                className: N.temporaryMembershipContainer,
                                value: (0, _.hasFlag)(A, a.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => v((0, _.setFlag)(A, a.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: P,
                                hideBorder: !0,
                                children: R ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || D ? null : (0, r.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: s(g.marginTop8, N.footerText),
                            children: [(0, p.maxAgeString)(V, L), " ", o ? (0, r.jsx)(d.Anchor, {
                                onClick: () => O(M.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && o && D ? (0, r.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: s(g.marginTop8, N.footerText),
                            children: [T.default.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(d.Anchor, {
                                onClick: () => O(M.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != U ? (0, r.jsx)(m.InviteErrorMessage, {
                            guild: t,
                            error: U,
                            onClose: l
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
            var r = n("920040"),
                i = n("773670"),
                o = n("77078"),
                s = n("592407"),
                a = n("957255"),
                l = n("49111"),
                u = n("782340"),
                d = n("686896");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, f = t.id, E = i.useCallback(() => {
                    c(), s.default.open(f, l.GuildSettingsSections.INSTANT_INVITES)
                }, [f, c]), I = i.useCallback(e => (0, r.jsx)(o.Clickable, {
                    className: d.errorLink,
                    onClick: E,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [E]), _ = i.useCallback(e => (0, r.jsx)(o.Anchor, {
                    href: l.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), p = n.code !== l.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : a.default.can(l.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: I,
                    inviteHelpHook: _
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, r.jsx)(o.Text, {
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
                    return i
                }
            });
            var r = n("773670");
            let i = r.createContext({
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
                    return a
                }
            });
            var r = n("895393"),
                i = n("773336"),
                o = n("50885");
            let s = (() => {
                if (i.isPlatformEmbedded) return null != o.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function a(e) {
                return !!s && (i.isPlatformEmbedded ? (o.default.copy(e), !0) : r.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var r = n("773670"),
                i = n("498225"),
                o = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = r.useContext(o.default);
                return (0, i.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        }
    }
]);