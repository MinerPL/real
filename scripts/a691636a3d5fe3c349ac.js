(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45343"], {
        529861: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ebd4163d89c2d849ec54.svg"
        },
        156465: function(e, t, n) {
            "use strict";
            e.exports = n.p + "42b086ee3d9863ea45bc.svg"
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("333805"),
                a = n("160299"),
                u = n("745279"),
                o = n("850068"),
                s = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        u = {};
                    null != t && (u.country_code = t), null != n && (u.payment_source_id = n), null != d && (u.include_unpublished = d), null != c && (u.revenue_surface = c), l.query = u, !a.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let E = await i.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, u.captureBillingException)(t), new l.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function I() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("310013"),
                a = n.n(l),
                u = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: r
                        } = this.props, l = null != r ? s(r.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === i && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, u.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...r
                        } = this.props, {
                            loaded: l,
                            cached: a
                        } = this.state;
                        if (!l && null != t) {
                            var u;
                            t = {
                                ...t,
                                backgroundImage: null == (u = a) || "" === u || "none" === u ? "none" : "url(".concat(u, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? s(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return a(t, e), t
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class a extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class a extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = r || (r = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        297267: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openCreateGuildModal: function() {
                    return E
                },
                updateCreateGuildModal: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("42963"),
                a = n("599110"),
                u = n("169626"),
                o = n("243338"),
                s = n("49111"),
                d = n("149806");

            function c(e, t, n, r) {
                return (0, i.jsx)(u.default, {
                    onSuccess: t => {
                        l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.SUCCESS), e.onClose(), null == r || r(t)
                    },
                    onSlideChange: e => (function(e, t) {
                        switch (e) {
                            case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
                                l.default.flowStepOrStart(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_TEMPLATES), a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Templates",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_CREATE), a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Step 2",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CREATION_INTENT:
                                a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.JOIN_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.JOIN_GUILD), a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Join Guild",
                                    location: t
                                })
                        }
                    })(e, n),
                    initialSlide: t,
                    hasJoinButton: !0,
                    ...e
                })
            }
            let E = e => {
                    let {
                        initialSlide: t,
                        location: n,
                        onSuccess: i
                    } = e;
                    (0, r.openModal)(e => c(e, t, n, i), {
                        modalKey: o.CREATE_GUILD_MODAL_KEY
                    })
                },
                _ = e => {
                    let {
                        slide: t,
                        location: n
                    } = e;
                    (0, r.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => c(e, t, n))
                }
        },
        169626: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                u = n("759843"),
                o = n("77078"),
                s = n("84339"),
                d = n("599110"),
                c = n("439932"),
                E = n("818351"),
                _ = n("21214"),
                I = n("622210"),
                f = n("72405"),
                T = n("110337"),
                S = n("243338"),
                N = n("49111"),
                A = n("91140");

            function p(e) {
                let {
                    transitionState: t,
                    initialSlide: n = S.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    onSuccess: l,
                    onClose: p,
                    onSlideChange: O,
                    hasJoinButton: C
                } = e, [D, L] = r.useState(n), h = (0, s.default)(D), [m, R] = r.useState(null), [g, U] = r.useState(null), [M, P] = r.useState(null), [G, v] = r.useState(!1);
                r.useEffect(() => {
                    L(n)
                }, [L, n]), r.useEffect(() => {
                    D !== h && O(D)
                }, [O, D, h]);
                let y = r.useCallback(e => {
                        L(S.CreateGuildSlideTypes.CREATION_INTENT), U(e), d.default.track(N.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }, []),
                    w = r.useCallback(e => {
                        v(e), L(S.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
                    }, []),
                    F = r.useCallback(() => L(S.CreateGuildSlideTypes.JOIN_GUILD), [L]),
                    b = r.useCallback(() => {
                        if (D === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
                            L(S.CreateGuildSlideTypes.CREATION_INTENT);
                            return
                        }
                        L(S.CreateGuildSlideTypes.GUILD_TEMPLATES), U(null)
                    }, [D]),
                    B = r.useCallback(e => {
                        P(e), l(e)
                    }, [l, P]),
                    V = r.useCallback(() => {
                        a(null != M, "handleSuccess called before onGuildCreated"), l(M)
                    }, [l, M]),
                    k = {
                        impression_group: u.ImpressionGroups.GUILD_ADD_FLOW
                    };
                return (0, i.jsx)("div", {
                    className: (0, c.getThemeClass)(N.ThemeTypes.LIGHT),
                    children: (0, i.jsx)(o.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, i.jsx)("div", {
                            className: A.container,
                            children: (0, i.jsxs)(o.Slides, {
                                activeSlide: D,
                                width: 440,
                                onSlideReady: e => R(e),
                                children: [(0, i.jsx)(o.Slide, {
                                    id: S.CreateGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: u.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: k,
                                    children: (0, i.jsx)(f.default, {
                                        isNewUser: !1,
                                        onJoin: C ? F : void 0,
                                        onChooseTemplate: y,
                                        onClose: p
                                    })
                                }), (0, i.jsx)(o.Slide, {
                                    id: S.CreateGuildSlideTypes.CREATION_INTENT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: k,
                                    children: (0, i.jsx)(_.default, {
                                        onClose: p,
                                        onBack: b,
                                        onCreationIntentChosen: w
                                    })
                                }), (0, i.jsx)(o.Slide, {
                                    id: S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: k,
                                    children: (0, i.jsx)(I.default, {
                                        guildTemplate: g,
                                        onGuildCreated: B,
                                        onClose: p,
                                        onBack: b,
                                        isSlideReady: m === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                        isCommunity: G
                                    })
                                }), (0, i.jsx)(o.Slide, {
                                    id: S.CreateGuildSlideTypes.CHANNEL_PROMPT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: k,
                                    children: (0, i.jsx)(E.default, {
                                        createdGuildId: M,
                                        onClose: p,
                                        onChannelPromptCompleted: V,
                                        isSlideReady: m === S.CreateGuildSlideTypes.CHANNEL_PROMPT
                                    })
                                }), (0, i.jsx)(o.Slide, {
                                    id: S.CreateGuildSlideTypes.JOIN_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: k,
                                    children: (0, i.jsx)(T.default, {
                                        onBack: b,
                                        onClose: p,
                                        isSlideReady: m === S.CreateGuildSlideTypes.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        243338: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                CreateGuildSlideTypes: function() {
                    return i
                },
                CREATE_GUILD_MODAL_KEY: function() {
                    return l
                }
            }), (r = i || (i = {})).GUILD_TEMPLATES = "guild-templates", r.CUSTOMIZE_GUILD = "customize-guild", r.CHANNEL_PROMPT = "channel-prompt", r.JOIN_GUILD = "join-guild", r.CREATION_INTENT = "creation-intent";
            let l = "create-guild"
        },
        110337: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                o = n.n(u),
                s = n("77078"),
                d = n("970728"),
                c = n("448993"),
                E = n("393414"),
                _ = n("145131"),
                I = n("476765"),
                f = n("883029"),
                T = n("49111"),
                S = n("782340"),
                N = n("479030"),
                A = n("529861"),
                p = n("156465");
            let O = "hTKzmak",
                C = (0, I.uid)();
            let D = (i = window.GLOBAL_ENV.INVITE_HOST, r = "", null == i && (i = location.host, r = T.Routes.INVITE("")), "".concat(location.protocol, "//").concat(i).concat(r, "/")),
                L = [O, "".concat(D).concat(O), "".concat(D).concat("cool-people")],
                h = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsxs)(s.Clickable, {
                        className: N.rowContainer,
                        onClick: () => {
                            t(), (0, E.transitionTo)(T.Routes.GUILD_DISCOVERY)
                        },
                        children: [(0, l.jsx)("img", {
                            width: 40,
                            height: 40,
                            className: N.rowIcon,
                            alt: "",
                            src: p
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(s.Heading, {
                                className: N.rowText,
                                variant: "heading-md/semibold",
                                children: S.default.Messages.DISCOVERY_UPSELL_HEADER
                            }), (0, l.jsx)(s.Text, {
                                className: N.rowText,
                                variant: "text-xs/normal",
                                children: S.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
                            })]
                        }), (0, l.jsx)("img", {
                            className: N.rowArrow,
                            alt: "",
                            src: A
                        })]
                    })
                };

            function m(e) {
                let {
                    onBack: t,
                    onClose: n,
                    isSlideReady: i
                } = e, [r, u] = a.useState(""), [E, I] = a.useState(!1), [T, A] = a.useState(null), p = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    i && (null === (e = p.current) || void 0 === e || e.focus())
                }, [i]);
                let m = e => {
                    e.preventDefault();
                    let t = r.trim();
                    if ("" === t) {
                        A(S.default.Messages.INVALID_INVITE_LINK_ERROR);
                        return
                    }
                    A(null), I(!0);
                    let i = t.split("/"),
                        l = i[i.length - 1];
                    d.default.resolveInvite(l, "Join Guild", {
                        inputValue: t
                    }).then(e => {
                        let {
                            invite: t
                        } = e;
                        if (I(!1), null == t) {
                            A(S.default.Messages.INSTANT_INVITE_EXPIRED);
                            return
                        }
                        if (null != t.channel) {
                            let e = d.default.getInviteContext("Join Guild", t);
                            d.default.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: e => {
                                    n(), d.default.transitionToInvite(e)
                                }
                            }).then(() => {}, e => {
                                if (e instanceof c.V6OrEarlierAPIError || e instanceof c.APIError) {
                                    let t = (0, f.getInviteError)(e.code);
                                    A(t)
                                } else A(S.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                            })
                        }
                    }, e => {
                        I(!1);
                        let t = new c.V6OrEarlierAPIError(e),
                            n = (0, f.getInviteError)(t.code);
                        A(n)
                    })
                };
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        className: N.header,
                        direction: _.default.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, l.jsx)(s.Heading, {
                            className: N.title,
                            variant: "heading-xl/semibold",
                            children: S.default.Messages.JOIN_SERVER_TITLE
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: S.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        }), (0, l.jsx)(s.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: n
                        })]
                    }), (0, l.jsxs)(s.ModalContent, {
                        className: N.content,
                        children: [(0, l.jsx)("form", {
                            onSubmit: m,
                            className: N.inputForm,
                            children: (0, l.jsxs)(s.FormItem, {
                                children: [(0, l.jsx)(s.FormTitle, {
                                    id: C,
                                    error: T,
                                    className: o(N.formTitle, {
                                        [N.error]: null != T
                                    }),
                                    required: !0,
                                    children: S.default.Messages.FORM_LABEL_INVITE_LINK
                                }), (0, l.jsx)(s.TextInput, {
                                    value: r,
                                    onChange: u,
                                    className: N.input,
                                    inputClassName: N.inputInner,
                                    placeholder: "".concat(D).concat(O),
                                    inputRef: p,
                                    required: !0,
                                    "aria-labelledby": C
                                })]
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: S.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                            titleClassName: N.formTitle,
                            className: N.examplesForm,
                            children: L.map(e => (0, l.jsx)(s.Clickable, {
                                className: N.sampleLink,
                                onClick: () => u(e),
                                children: e
                            }, e))
                        }), (0, l.jsx)(h, {
                            onClick: n
                        })]
                    }), (0, l.jsxs)(s.ModalFooter, {
                        className: N.footer,
                        children: [(0, l.jsx)(s.Button, {
                            color: s.Button.Colors.BRAND,
                            submitting: E,
                            onClick: m,
                            children: S.default.Messages.NUF_JOIN_SERVER_BUTTON
                        }), (0, l.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            onClick: t,
                            children: S.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var i, r, l, a, u, o, s, d, c, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return I
                },
                EmojiCategories: function() {
                    return r
                },
                EmojiSubCategory: function() {
                    return l
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return f
                },
                EmojiSize: function() {
                    return u
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return T
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return S
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                REACTION_PICKER_TAB_ID: function() {
                    return O
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return o
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return D
                },
                GIF_PICKER_TAB_ID: function() {
                    return L
                },
                EMOJI_SIZE_MAP: function() {
                    return h
                },
                EMOJI_ROW_SIZE: function() {
                    return m
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let I = "emoji-picker-grid";
            (d = r || (r = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = l || (l = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (E = a || (a = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let f = -1;
            (_ = u || (u = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let T = "emoji-picker-tab-panel",
                S = "emoji-picker-tab",
                N = "soundboard-picker-tab-panel",
                A = "soundboard-picker-tab",
                p = "reaction-picker-tab-panel",
                O = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (o || (o = {})).TOOLTIP = "tooltip";
            let D = "gif-picker-tab-panel",
                L = "gif-picker-tab",
                h = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                m = 9
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return c
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return I
                },
                GuildHomeBadgeExperiment: function() {
                    return f
                },
                GuildHomeFeedbackExperiment: function() {
                    return T
                },
                GuildHomeDeprecationExperiment: function() {
                    return S
                }
            });
            var i = n("446674"),
                r = n("203288"),
                l = n("862205"),
                a = n("21121"),
                u = n("923959"),
                o = n("305961"),
                s = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[u.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([u.default, r.default], () => null != e && d(e.id, u.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = o.default.getGuild(e);
                return !!(null != t && d(e, u.default, r.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                I = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                f = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, l.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, l.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let T = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                S = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                a = n("38654"),
                u = n("9294"),
                o = n("26989"),
                s = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, f = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, T = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var S = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: I,
                enableVerificationForm: f,
                submitVerificationForm: T
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return s
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
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return I
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return f
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return T
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return S
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                a = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                o = 16,
                s = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                I = 1e3,
                f = 300,
                T = "Membership Gating",
                S = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, i.default)(e => a),
                o = e => {
                    u.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    u.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                a = n("50926"),
                u = n("347977"),
                o = n("394294"),
                s = n("49111");
            let d = () => {
                    l.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
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
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return D
                },
                updateImpersonatedData: function() {
                    return L
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                a = n("42203"),
                u = n("923959"),
                o = n("26989"),
                s = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                I = n("38654"),
                f = n("507950"),
                T = n("49111"),
                S = n("724210");

            function N(e, t) {
                _.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === f.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), O(e)
            }

            function A(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (_.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === f.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), O(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function O(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, S.isStaticChannelRoute)(t);
                if (!i && !d.default.can(T.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(T.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), A(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function D(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && C(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), A(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function L(e, t) {
                A(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    u = (0, r.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return u
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let l = 32,
                a = 5,
                u = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i, r, l = n("917351"),
                a = n.n(l),
                u = n("446674"),
                o = n("913144"),
                s = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                I = n("846325"),
                f = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let S = new Map,
                N = new Map,
                A = new Set,
                p = r.NOT_FETCHED,
                O = r.NOT_FETCHED,
                C = new Set,
                D = new Map,
                L = !1;

            function h(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let m = a.debounce(e => {
                E.default.track(f.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function R(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == i[e] && A.delete(e)
            }
            class g extends u.default.Store {
                initialize() {
                    this.waitFor(d.default), R(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return O === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return p === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return p === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return p === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = D.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != N.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return L
                }
                hasFetchedAllSounds() {
                    return O === r.FETCHED && p === r.FETCHED
                }
            }
            g.displayName = "SoundboardStore";
            var U = new g(o.default, {
                LOGOUT: function() {
                    S.clear(), N.clear(), D.clear(), L = !1, O = r.NOT_FETCHED, p = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    O = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: h,
                GUILD_SOUNDBOARD_SOUND_UPDATE: h,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let i = S.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), S.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, a = (null !== (n = N.get(r)) && void 0 !== n ? n : 0) + 1, u = (null !== (i = D.get(l)) && void 0 !== i ? i : 0) + 1;
                    N.set(r, a), D.set(l, u), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (L = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = N.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = D.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? N.delete(i) : N.set(i, l), a <= 0 ? D.delete(r) : D.set(r, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    m(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    N.clear(), D.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        C = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && R(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(I.DEFAULT_SOUND_GUILD_ID, t), p = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        S.set(t, n)
                    }), O = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, r, l = n("102053"),
                a = n("446674"),
                u = n("913144"),
                o = n("802493"),
                s = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                I = n("778689"),
                f = n("305961"),
                T = n("161585"),
                S = n("24373"),
                N = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let A = 2,
                p = new Map,
                O = new Map,
                C = null,
                D = [],
                L = null,
                h = !1,
                m = new Map,
                R = (e, t) => {
                    m = new Map(m.set(e, t))
                },
                g = 1e3 * N.Durations.HOUR,
                U = () => {
                    if (0 !== A) return;
                    let e = o.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (I.default.isMember(e) && !m.has(e)) {
                                for (let t of n) M(t, !0, f.default.getGuild(e));
                                R(e, n)
                            }
                    }
                },
                M = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    O.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == C) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, S.isStandardSticker)(e)) {
                        let t = D.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), C.set(e.id, r)
                    } else if ((0, S.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            C.set(e.id, a);
                            return
                        }
                        a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, a)
                    }
                },
                G = (e, t, n) => {
                    p.set(e.id, e);
                    let i = [...D];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), D = i
                    }(t || n) && e.stickers.forEach(e => M(e))
                },
                v = () => {
                    m.forEach((e, t) => {
                        let n = f.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), D.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function y(e) {
                null != e.stickers && (e.stickers.forEach(t => M(t, !0, e)), R(e.id, e.stickers))
            }
            class w extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, I.default, f.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return U(), null == C && (C = new Map, v()), C
                }
                get hasLoadedStickerPacks() {
                    return null != L && L + g > Date.now()
                }
                get isFetchingStickerPacks() {
                    return h
                }
                getStickerById(e) {
                    return !O.has(e) && U(), O.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return D
                }
                isPremiumPack(e) {
                    return D.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return m
                }
                getAllStickersIterator() {
                    return U(), O.values()
                }
                getAllGuildStickers() {
                    return U(), m
                }
                getStickersByGuildId(e) {
                    return U(), m.get(e)
                }
            }
            w.displayName = "StickersStore";
            var F = new w(u.default, {
                BACKGROUND_SYNC: () => {
                    C = null, O = new Map, m = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, O = new Map, m = new Map, t.forEach(y), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (y(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = m.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != C && C.delete(e.id), O.delete(e.id)
                    }), m.delete(n.id), m = new Map(m)
                },
                LOGOUT: () => {
                    A = 0, D = [], O.clear(), p.clear(), C = null, m.clear(), m = new Map(m), h = !1, L = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    h = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => G(e, !0)), L = Date.now(), h = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    G(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => M(e)), R(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = m.get(i)) && void 0 !== t ? t : [];
                    R(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), M(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    M(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = O.get(e.id);
                        return null != n && (0, S.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = m.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        O.delete(e.id), null != C && C.delete(e.id)
                    });
                    let u = i.map(e => r(e));
                    u.forEach(e => M(e)), R(n, u)
                }
            })
        },
        149806: function(e, t, n) {
            "use strict";
            var i, r, l, a, u, o, s, d, c, E;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return i
                },
                AgeGateSteps: function() {
                    return r
                },
                ClaimAccountSteps: function() {
                    return l
                },
                CreateGuildSteps: function() {
                    return a
                },
                RegistrationSteps: function() {
                    return u
                }
            }), (o = i || (i = {})).UNKNOWN = "unknown", o.ANY = "any", o.INVITE = "invite", o.ORGANIC = "organic_registration", o.ORGANIC_MARKETING = "organic_marketing", o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", o.CREATE_GUILD = "create_guild", (s = r || (r = {})).AGE_GATE = "age_gate", s.AGE_GATE_UNDERAGE = "age_gate_underage", (d = l || (l = {})).CLAIM_ACCOUNT = "claim_account", d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (c = a || (a = {})).GUILD_TEMPLATES = "guild_templates", c.GUILD_CREATE = "guild_create", c.CREATION_INTENT = "creation_intent", c.CHANNEL_PROMPT = "channel_prompt", c.JOIN_GUILD = "join_guild", c.SUCCESS = "create_success", (E = u || (u = {})).NUF_STARTED = "nuf_started", E.AGE_GATE = "age_gate", E.NUF_COMPLETE = "nuf_complete", E.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("308503"),
                r = n("95410"),
                l = n("605250"),
                a = n("599110"),
                u = n("149806"),
                o = n("49111");
            let s = "UserFlowAnalyticsStore_current",
                d = "UserFlowAnalyticsStore";

            function c(e) {
                if (e === u.FlowType.UNKNOWN) return null;
                let t = r.default.get("".concat(d, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...i
                } = t;
                return 1 !== n ? null : i
            }
            new l.default("UserFlowAnalytics");
            let E = (0, i.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : r.default.get(s);
                    if (null == n) return null;
                    let {
                        [n]: i
                    } = t().flows, l = null != i ? i : c(n);
                    return (null == l ? void 0 : l.currentStep) != null ? n : null
                }
            }));

            function _(e, t) {
                let {
                    [e]: n, ...i
                } = E.getState().flows, r = null != n ? n : c(e);
                if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t) E.setState({
                    flows: {
                        ...i,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = e;
                if (e === u.FlowType.ANY) {
                    var r;
                    i = null !== (r = E.getState().activeFlow()) && void 0 !== r ? r : u.FlowType.UNKNOWN
                }
                let {
                    [i]: l, ...a
                } = E.getState().flows, o = null != l ? l : c(i);
                if (null != o && null != o.currentStep) o.currentStep !== t && E.setState({
                    flows: {
                        ...a,
                        [i]: {
                            ...o,
                            lastStep: o.currentStep,
                            lastTimestamp: o.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: i
                })
            }
            E.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === u.FlowType.UNKNOWN) return;
                        let t = "".concat(d, "-").concat(e.type);
                        e.ended ? (r.default.remove(t), r.default.remove(s)) : (r.default.set("".concat(d, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), r.default.set(s, e.type))
                    }(e), a.default.track(o.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ...E.getState().flows
                    };
                    delete t[e.type], E.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function f() {
                return null != E.getState().activeFlow()
            }
            var T = {
                flowStart: _,
                flowStepOrStart: function(e, t) {
                    f() ? I(e, t) : _(e, t)
                },
                flowStep: I,
                hasActiveFlow: f
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return u
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (l = i || (i = {}))[l.BACKGROUND = 0] = "BACKGROUND", (a = r || (r = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let u = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                a = n("376556"),
                u = n("450205"),
                o = n("813006"),
                s = n("49111");
            let d = new Set([s.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                _ = [],
                I = {},
                f = {},
                T = e => {
                    E = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), _ = e.filter(e => d.has(e.type)), c = !1
                };
            class S extends i.default.Store {
                isJoining(e) {
                    return I[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return f[e] || !1
                }
            }
            S.displayName = "ConnectedAccountsStore";
            var N = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new u.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new u.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    I[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                a = n("49111");
            let u = {},
                o = {},
                s = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = u[e],
                    o = null != r ? {
                        state: a.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), u = {
                    ...u,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return u[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function a() {
                l = []
            }
            class u extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            u.displayName = "LayerStore";
            var o = new u(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                a = n("913144"),
                u = n("816454");
            let o = new Map;

            function s(e) {
                let t = o.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(a.default, {
                WINDOW_INIT: function(e) {
                    r(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (o.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return o.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        651879: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("917351"),
                l = n.n(r),
                a = n("693566"),
                u = n.n(a),
                o = n("851387"),
                s = n("305961"),
                d = n("697218"),
                c = n("158998"),
                E = n("782340");
            let _ = new u({
                maxAge: 6e4
            });

            function I(e, t, n) {
                null != i && clearTimeout(i), i = setTimeout(() => {
                    let i = [],
                        r = e => {
                            i.push(e.id)
                        };
                    if (null == e) l.forEach(s.default.getGuilds(), r);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = s.default.getGuild(e);
                        null != t && r(t)
                    });
                    else {
                        let t = s.default.getGuild(e);
                        null != t && r(t)
                    }
                    i.length > 0 && o.default.requestMembers(i, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function f(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    i = _.get(n);
                if (null != i) return i;
                _.set(n, !0)
            }
            var T = {
                getGuildNameSuggestion: function(e) {
                    let t = d.default.getCurrentUser(),
                        n = c.getName(t);
                    return null == n || 0 === n.length ? "" : E.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        i = Array.isArray(e),
                        r = [],
                        l = !1;
                    if (i) e.forEach(e => {
                        let n = f(e, t);
                        null == n && r.push(e)
                    });
                    else {
                        let n = f(e, t);
                        null == n && (l = !0)
                    }
                    r.length > 0 && i ? I(r, t, n) : l && I(e, t, n)
                }
            }
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return f
                },
                getPaletteForAvatar: function() {
                    return T
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return A
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return O
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                a = n.n(l),
                u = n("48648"),
                o = n.n(u);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: a = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), a);
                    let u = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * u), l), n = Math.max(Math.round(n * u), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let a = 1;
                return (n = Math.round(n * l)) > r && (a = r / n), Math.min(l * a, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function f(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return I;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    a = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, a);
                let u = r.getImageData(0, 0, l, a).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, a, u, o, s; r < t; r += n) a = e[(l = 4 * r) + 0], u = e[l + 1], o = e[l + 2], (void 0 === (s = e[l + 3]) || s >= 125) && !(a > 250 && u > 250 && o > 250) && i.push([a, u, o]);
                        return i
                    }(u, l * a, n),
                    d = o(s, t);
                return "boolean" == typeof d ? I : d.palette()
            }
            let T = e => S(e),
                S = a.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(f(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function A(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function O(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        883029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDescriptiveInviteError: function() {
                    return o
                },
                getInviteError: function() {
                    return s
                }
            });
            var i = n("697218"),
                r = n("701909"),
                l = n("719923"),
                a = n("49111"),
                u = n("782340");

            function o(e) {
                switch (e) {
                    case a.AbortCodes.TOO_MANY_USER_GUILDS:
                        let t = i.default.getCurrentUser(),
                            n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
                            r = n ? a.MAX_USER_GUILDS_PREMIUM : a.MAX_USER_GUILDS;
                        return {
                            title: u.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: r
                            }), description: u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case a.AbortCodes.GUILD_AT_CAPACITY:
                        return {
                            title: u.default.Messages.SERVER_IS_CURRENTLY_FULL, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case a.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function s(e) {
                switch (e) {
                    case a.AbortCodes.TOO_MANY_USER_GUILDS:
                        return u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case a.AbortCodes.GUILD_AT_CAPACITY:
                        return u.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case a.AbortCodes.INVALID_COUNTRY_CODE:
                        return u.default.Messages.INVALID_COUNTRY_CODE;
                    case a.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
                        return u.default.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case a.AbortCodes.INVITES_DISABLED:
                        return u.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: r.default.getArticleURL(a.HelpdeskArticles.INVITE_DISABLED)
                        });
                    default:
                        return u.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            });
            var i = n("159885");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) r[l - 2] = arguments[l];
                let a = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    u = "".concat(t).concat(a),
                    o = e[u];
                if (null != o) return o
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: i,
                    ...l
                } = t, a = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let u = i.properties;
                        "function" == typeof i.properties && (u = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...a,
                            ...u
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return l(i.default.get, e, "get")
                },
                post: function(e) {
                    return l(i.default.post, e, "post")
                },
                put: function(e) {
                    return l(i.default.put, e, "put")
                },
                patch: function(e) {
                    return l(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(i.default.delete, e, "del")
                }
            }
        }
    }
]);