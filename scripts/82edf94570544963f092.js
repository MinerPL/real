(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85199"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("414456"),
                l = n.n(r),
                u = n("817736"),
                s = n.n(u),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                E = n("901165"),
                m = n("62843"),
                h = n("315102"),
                _ = n("402671"),
                p = n("866190"),
                I = n("115279");
            class S extends i.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: a,
                            animated: i,
                            shouldAnimate: r,
                            isFocused: l,
                            isInteracting: u,
                            size: s = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = I.EMOJI_SIZE_MAP[s];
                        return h.default.getEmojiURL({
                            id: n,
                            animated: l && !0 === i && (!0 === r || o || !0 === u),
                            size: e
                        })
                    }
                    if (null != a) return _.default.getURL(a)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: r,
                        className: u,
                        size: s = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: E,
                        isInteracting: m,
                        ...h
                    } = this.props, _ = this.getSrc();
                    return null == _ || "" === _ ? (0, a.jsx)("span", {
                        className: l("emoji", "emoji-text"),
                        children: n
                    }) : (r && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ...h,
                        key: this.key,
                        src: _,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: l("emoji", u, {
                            jumboable: "jumbo" === s
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
            S.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, a.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    r = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let a = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == a) return;
                            let i = a[1];
                            if (e.intersectionRatio >= .7) {
                                var r, l;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function l(e) {
                    let t = s.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), r.observe(t))
                }

                function u(e) {
                    let a = s.findDOMNode(e);
                    r.unobserve(a);
                    let i = n.findIndex(t => {
                        let [n, a] = t;
                        return a === e
                    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends i.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? l(this) : u(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && u(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: r,
                                ...l
                            } = this.props;
                        return (0, a.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, a.jsx)(e, {
                                ...l,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && r
                            })
                        })
                    }
                }
            }(S);

            function M(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([E.default], () => E.default.isInstanceFocused()) : (0, p.useIsWindowFocused)();
                return (0, a.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: i
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                l = n("446674"),
                u = n("77078"),
                s = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                E = n("892802");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let h = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: l,
                    discriminatorClass: s,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: h,
                    showStreamerModeTooltip: _
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(E.info, d),
                    children: [(0, a.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: _,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: r(E.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, a.jsx)("span", {
                        className: r(E.infoSpacing, s),
                        children: n
                    }) : void 0, null != i && (0, a.jsx)(o.default, {
                        type: i,
                        className: r(E.infoSpacing, h),
                        verified: l
                    })]
                })
            };
            var _ = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: r,
                    showAccountIdentifier: u,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...E
                } = e, _ = (0, l.useStateFromStores)([s.default], () => s.default.hidePersonalInformation), p = _ || t || n.isNonUserBot(), I = n.toString(), S = c.default.getName(n), T = r ? I : null != i ? i : S, M = n.isPomelo() || f;
                if (M || T !== I) {
                    let e = T === I && M && r ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : T,
                        t = u && e !== "@".concat(I) ? c.default.getUserTag(n) : void 0;
                    return (0, a.jsx)(h, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: _ && e !== S,
                        ...E
                    })
                }
                return (0, a.jsx)(d.default, {
                    name: T,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: p || T !== I ? null : null != o ? o : n.discriminator,
                    ...E
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var a = n("884691"),
                i = n("599110");
            let r = () => a.useContext(i.AnalyticsContext)
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var a = n("274870"),
                i = n("116320"),
                r = n("617559"),
                l = n("213523"),
                u = n("593195"),
                s = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                E = n("905999"),
                m = n("660074"),
                h = n("990745"),
                _ = n("190986"),
                p = n("721618"),
                I = n("733160"),
                S = n("990864"),
                T = n("274652"),
                M = n("922744"),
                R = n("155207"),
                C = n("745183"),
                g = n("368121"),
                A = n("944633"),
                L = n("228427"),
                v = n("959097"),
                N = n("656038"),
                O = n("49111");

            function F(e, t) {
                switch (e.type) {
                    case O.ChannelTypes.DM:
                        return i.default;
                    case O.ChannelTypes.GROUP_DM:
                        let n = (0, a.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : R.default;
                    case O.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return T.default;
                        if ((0, N.default)(e)) return S.default;
                        else return I.default;
                    case O.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return l.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, N.default)(e)) return s.default;
                        else return u.default;
                    case O.ChannelTypes.GUILD_FORUM:
                        let F = e.isMediaChannel();
                        if (e.isNSFW()) return F ? p.default : E.default;
                        if ((0, N.default)(e)) return F ? _.default : f.default;
                        else return F ? h.default : c.default;
                    case O.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return p.default;
                        if ((0, N.default)(e)) return _.default;
                        else return h.default;
                    case O.ChannelTypes.GUILD_STAGE_VOICE:
                        return L.default;
                    case O.ChannelTypes.GUILD_VOICE:
                        if ((0, N.default)(e)) return A.default;
                        return g.default;
                    case O.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case O.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return M.default;
                        if (e.isForumPost()) return m.default;
                        else return v.default;
                    case O.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return M.default;
                        return C.default;
                    case O.ChannelTypes.GUILD_DIRECTORY:
                        return r.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691");
            let i = a.createContext(void 0);
            var r = i
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return m
                },
                canGuildUseRoleIcons: function() {
                    return h
                }
            });
            var a = n("867805"),
                i = n("407063"),
                r = n("315102"),
                l = n("773336"),
                u = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, l.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? a.default.getByName(a.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: a
                    } = e;
                    if (null == a) return;
                    if (a.startsWith("data:")) return a;
                    let l = r.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(a, ".").concat(l, "?").concat(c).concat(f) : "".concat(o).concat(u.Endpoints.ROLE_ICON(n, a), "?").concat(c)
                },
                m = e => e.startsWith(s) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                h = (e, t) => {
                    var n;
                    let a = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return a || e.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("479756"),
                l = n("38654"),
                u = n("9294"),
                s = n("26989"),
                o = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : o.default.getInviteKeyForGuildId(e),
                    r = d.default.getCurrentUser(),
                    l = !s.default.isMember(e, null == r ? void 0 : r.id);
                try {
                    let t = await a.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: r
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: r.version,
                            description: r.description,
                            formFields: r.form_fields,
                            guild: r.guild
                        }
                    }), r
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await a.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, m = async (e, t) => {
                let n = await a.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, h = async (e, t) => {
                await a.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, _ = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await a.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: r
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: r
                    }), r
                } catch (e) {
                    throw e
                }
            };
            var p = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: m,
                enableVerificationForm: h,
                submitVerificationForm: _
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return r
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return s
                },
                MAX_RULE_LENGTH: function() {
                    return o
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
                    return m
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return h
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            });
            var a, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let r = new Set([i.VerificationFormFieldTypes.TERMS]),
                l = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                s = 16,
                o = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                m = 1e3,
                h = 300,
                _ = "Membership Gating",
                p = "in-app-member-verification";
            (a || (a = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), a = n("453265").default;
            let i = a.openMemberVerificationModal;
            a.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return s
                },
                setShowWarning: function() {
                    return o
                }
            });
            var a = n("308503"),
                i = n("659500"),
                r = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, a.default)(e => l),
                s = e => {
                    u.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                o = e => {
                    u.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("599110"),
                l = n("50926"),
                u = n("347977"),
                s = n("394294"),
                o = n("49111");
            let d = () => {
                    r.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
                        type: s.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                        type: s.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let r = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: r,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, u.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var a = n("693566"),
                i = n.n(a),
                r = n("872717"),
                l = n("913144"),
                u = n("851387"),
                s = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await r.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                s.default.shouldFetch(e) && await d(e)
            }
            let f = new i({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = "".concat(e, "-").concat(t);
                if (!n || null == f.get(a)) {
                    var i, l;
                    return f.set(a, !0), i = e, l = t, r.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(i, l)
                    }).then(e => (u.default.requestMembersById(i, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("913144");
            let r = {},
                l = {};
            class u extends a.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? r[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = l[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var s = new u(i.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    r[t] = n, l[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: a
                    } = e, i = r[t];
                    if (null == i) return !1;
                    i[n] = a
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: a
                    } = e, i = r[t];
                    if (null == i || null == i[n]) return !1;
                    let l = Object.keys(a).length;
                    i[n] += l
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, a = r[t];
                    if (null == a || null == a[n]) return !1;
                    a[n] = a[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, a = r[t];
                    if (null == a || null == a[n]) return !1;
                    a[n] = Math.max(a[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == r[t] && (r[t] = {}), r[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete r[t.id], delete l[t.id]
                }
            })
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("65597"),
                r = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, i.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691"),
                i = n("65597"),
                r = n("526887"),
                l = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(r.ConfettiCannonContext), t = (0, i.default)([l.default], () => l.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = a.useMemo(() => ({
                    fire: (a, i, r) => {
                        var l, u;
                        let s = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(s);
                        e(a, i, o, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : s.confettiCount) * (null !== (u = null == r ? void 0 : r.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return m
                },
                maybeFetchPremiumLikelihood: function() {
                    return _
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var a = n("884691"),
                i = n("65597"),
                r = n("872717"),
                l = n("913144"),
                u = n("775433"),
                s = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let m = "nonSubscriber";
            async function h() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [m]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), a = c.default.shouldFetchPremiumLikelihood(), i = s.default.getCurrentUser();
                I(i, a, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, i.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), l = (0, i.default)([s.default], () => s.default.getCurrentUser());
                a.useEffect(() => {
                    I(l, r, t, n)
                }, [l, r, t, n])
            }

            function I(e, t, n, a) {
                null != e && !(0, d.isPremium)(e) && n && (t && h(), a && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = r;
            class u extends a.default.Store {
                initialize() {
                    l = r
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var s = new u(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var r = i
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(a.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(a.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        707443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return S
                },
                useActiveThreads: function() {
                    return T
                },
                useActiveGuildThreads: function() {
                    return M
                },
                useArchivedThreads: function() {
                    return R
                }
            });
            var a = n("884691"),
                i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                u = n("404607"),
                s = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                E = n("689275"),
                m = n("821343"),
                h = n("755624"),
                _ = n("263024"),
                p = n("487269"),
                I = n("843455");

            function S() {
                a.useEffect(() => {
                    (0, p.trackThreadBrowserTab)()
                }, [])
            }

            function T(e) {
                let t = function(e) {
                        let t = (0, l.useStateFromStoresArray)([o.default, E.default, s.default], () => r(E.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return s.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return a.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, i] = (0, l.useStateFromStores)([h.default], () => r.partition(t, e => h.default.hasJoined(e)), [t], l.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: i
                }
            }

            function M(e) {
                let t = (0, l.useStateFromStoresArray)([o.default, E.default, s.default], () => r(E.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return s.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return a.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function R(e, t, n) {
                let {
                    canLoadMore: i,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, l.useStateFromStoresObject)([m.default], () => ({
                    loading: m.default.isLoading(e.id, t, n),
                    isInitialLoad: m.default.isInitialLoad,
                    canLoadMore: m.default.canLoadMore,
                    nextOffset: m.default.nextOffset
                })), E = a.useCallback(() => {
                    o.default.can(I.Permissions.READ_MESSAGE_HISTORY, e) && _.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                a.useEffect(() => {
                    f && E()
                }, [e.id, t, n, f]), a.useEffect(() => {
                    u.default.resort(e.id)
                }, [e.id]);
                let h = (0, l.useStateFromStoresArray)([m.default, s.default, o.default], () => r(m.default.getThreads(e.id, t, n)).filter(e => {
                    let t = s.default.getChannel(e);
                    return null != t && o.default.can(I.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: h,
                    canLoadMore: i,
                    loading: d || f,
                    loadMore: E
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                s = n("707443"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, r = (0, s.useActiveGuildThreads)(t), c = i.useCallback(e => {
                    let t = r[e.row];
                    return (0, a.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [r, n]);
                return (0, a.jsx)(u.List, {
                    className: l(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [r.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("945330"),
                l = n("959097"),
                u = n("557872"),
                s = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("728360");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, a.jsx)(i.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: i.ModalSize.DYNAMIC,
                    children: (0, a.jsxs)("div", {
                        className: c.container,
                        children: [(0, a.jsxs)("div", {
                            className: c.header,
                            children: [(0, a.jsx)(l.default, {
                                className: c.threadIcon
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, a.jsx)("div", {
                                className: c.spacer
                            }), (0, a.jsx)(i.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, a.jsx)(r.default, {})
                            })]
                        }), (0, a.jsx)(u.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, s.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("446674"),
                l = n("77078"),
                u = n("272030"),
                s = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                E = n("442184"),
                m = n("648564"),
                h = n("140407"),
                _ = i.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: i,
                        showChannelName: o
                    } = e, d = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(t)), c = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(d.parent_id));
                    return (0, a.jsxs)(l.Clickable, {
                        className: h.container,
                        onClick: e => i(d, e.shiftKey),
                        onContextMenu: e => (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: h.left,
                            children: [(0, a.jsxs)(l.Heading, {
                                className: h.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, a.jsx)("span", {
                                    className: h.threadName,
                                    children: d.name
                                }), o && null != c ? (0, a.jsx)("span", {
                                    className: h.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, E.default)(d)]
                        }), (0, a.jsx)(p, {
                            channel: d
                        })]
                    })
                });

            function p(e) {
                var t, n;
                let {
                    channel: l
                } = e, u = (0, r.useStateFromStores)([f.default], () => null !== (t = f.default.getMemberIdsPreview(l.id)) && void 0 !== t ? t : []), s = (0, r.useStateFromStores)([f.default], () => null !== (n = f.default.getMemberCount(l.id)) && void 0 !== n ? n : 0), E = (0, r.useStateFromStoresArray)([d.default], () => u.map(e => d.default.getUser(e)));
                return (i.useEffect(() => {
                    u.filter((e, t) => null == E[t]).forEach(e => {
                        o.default.requestMember(l.guild_id, e)
                    })
                }, []), 0 === u.length) ? null : (0, a.jsx)(c.default, {
                    className: h.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: l.guild_id,
                    users: E,
                    count: s,
                    max: m.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("446674"),
                l = n("77078"),
                u = n("308289"),
                s = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                E = n("660478"),
                m = n("27618"),
                h = n("697218"),
                _ = n("959097"),
                p = n("93427"),
                I = n("299039"),
                S = n("158998"),
                T = n("610730"),
                M = n("487269"),
                R = n("719347"),
                C = n("782340"),
                g = n("140407");

            function A(e) {
                return e.isActiveThread() ? (0, a.jsx)(L, {
                    channel: e
                }) : (0, a.jsx)(O, {
                    channel: e
                })
            }

            function L(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([T.default], () => T.default.getMostRecentMessage(t.id));
                return null == n ? (0, a.jsx)(v, {
                    channel: t
                }) : (0, a.jsx)(N, {
                    channel: t,
                    message: n
                })
            }

            function v(e) {
                let {
                    channel: t
                } = e, n = (0, M.useLastMessageTimestamp)(t);
                return (0, a.jsxs)(l.Text, {
                    className: g.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [C.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, M.getTimestampString)(n)]
                })
            }

            function N(e) {
                var t;
                let {
                    channel: n,
                    message: o
                } = e;
                (0, s.useSubscribeGuildMembers)({
                    [n.guild_id]: [o.author.id]
                });
                let f = (0, r.useStateFromStores)([h.default], () => null !== (t = h.default.getUser(o.author.id)) && void 0 !== t ? t : o.author),
                    {
                        nick: E,
                        colorString: _
                    } = (0, c.default)(o),
                    S = (0, r.useStateFromStores)([m.default], () => m.default.isBlocked(o.author.id)),
                    T = i.useMemo(() => {
                        let e = null != o.content && "" !== o.content ? (0, d.default)(o, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: n,
                                icon: i
                            } = (0, p.renderSingleLineMessage)(o, e, S, g.messageContent, {
                                iconClass: g.messageContentIcon,
                                iconSize: R.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, a.jsxs)(a.Fragment, {
                            children: [null != n ? n : (0, a.jsx)("span", {
                                children: t
                            }), i]
                        })
                    }, [o, S]);
                return (0, a.jsxs)(l.Text, {
                    className: g.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, a.jsx)(u.default, {
                        className: g.avatar,
                        user: f,
                        size: l.AvatarSizes.SIZE_16
                    }), (0, a.jsx)(l.NameWithRole, {
                        name: E,
                        color: _,
                        className: g.authorName
                    }), ":\xa0", T, "\xa0 • \xa0", (0, M.getTimestampString)(I.default.extractTimestamp(o.id))]
                })
            }

            function O(e) {
                var t, n, i;
                let {
                    channel: d
                } = e, c = (0, r.useStateFromStores)([E.default], () => E.default.lastMessageId(d.id)), m = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : I.default.extractTimestamp(c);
                (0, s.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let p = (0, r.useStateFromStores)([h.default], () => h.default.getUser(d.ownerId)),
                    T = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    R = null !== (i = (0, o.default)(d)) && void 0 !== i ? i : _.default;
                return (0, a.jsx)(l.Text, {
                    className: g.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == p ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: g.noAvatarIcon,
                            children: (0, a.jsx)(R, {
                                width: 10,
                                height: 10
                            })
                        }), C.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, M.getTimestampString)(m)
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.default, {
                            className: g.avatar,
                            user: p,
                            size: l.AvatarSizes.SIZE_16
                        }), C.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, i;
                                return (0, a.jsx)(l.NameWithRole, {
                                    className: g.startedByName,
                                    color: null !== (n = null == T ? void 0 : T.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (i = null == T ? void 0 : T.nick) && void 0 !== i ? i : S.default.getName(p)
                                }, t)
                            }
                        }), (0, a.jsx)("span", {
                            className: g.bullet,
                            children: "•"
                        }), C.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, M.getTimestampString)(m)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return R
                },
                openThreadSidebarForCreating: function() {
                    return C
                },
                closeThreadSidebar: function() {
                    return g
                },
                closeAndClearThreadSidebar: function() {
                    return A
                }
            });
            var a = n("627445"),
                i = n.n(a),
                r = n("917351"),
                l = n.n(r),
                u = n("913144"),
                s = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                E = n("144491"),
                m = n("845579"),
                h = n("474643"),
                _ = n("18494"),
                p = n("800762"),
                I = n("659500"),
                S = n("648564"),
                T = n("49111"),
                M = n("724210");

            function R(e, t, n) {
                o.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let a = !l.isEmpty(p.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    u.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, E.transitionToThread)(e, n) : (0, E.transitionToChannel)(e.id);
                    return
                }
                i(null != e.parent_id, "all threads must have parents");
                let r = _.default.getChannelId();
                e.parent_id !== r && !(0, M.isGuildHomeChannel)(r) && (0, E.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, M.isGuildHomeChannel)(r) ? M.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    I.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function C(e, t, n) {
                i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), _.default.getChannelId() !== e.id && (0, E.transitionToChannel)(e.id);
                let a = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = h.default.getDraft(e.id, h.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", h.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, h.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    u.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function g(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, M.isGuildHomeChannel)(t) ? M.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function A(e) {
                u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: h.DraftType.FirstThreadMessage
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: h.DraftType.ThreadSettings
                })
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return u
                }
            });
            var a = n("281071"),
                i = n("773336"),
                r = n("50885");
            let l = (() => {
                if (i.isPlatformEmbedded) return null != r.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!l && (i.isPlatformEmbedded ? (r.default.copy(e), !0) : a.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return u
                }
            });
            var a = n("884691"),
                i = n("446674"),
                r = n("244201"),
                l = n("471671");

            function u() {
                let {
                    windowId: e
                } = a.useContext(r.default);
                return (0, i.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        }
    }
]);