(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3474"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (s = t[2].split("-")).shift(), r = s);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (s = t[6].split("-")).shift();
                    for (var s, l, o = []; s.length;) {
                        var u = s.shift();
                        1 === u.length ? l ? (a.push({
                            singleton: l,
                            extension: o
                        }), l = u, o = []) : l = u : o.push(u)
                    }
                    a.push({
                        singleton: l,
                        extension: o
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        243704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6418419524dd1e583beb.svg"
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r, i, a, s, l = n("37983"),
                o = n("884691"),
                u = n("414456"),
                c = n.n(u),
                d = n("145131"),
                E = n("298754");
            (r = a || (a = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = s || (s = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
            let _ = {
                    [a.PRIMARY]: E.colorPrimary,
                    [a.SECONDARY]: E.colorSecondary,
                    [a.WARNING]: E.colorWarning,
                    [a.ERROR]: E.colorError
                },
                I = {
                    [s.SMALL]: E.small,
                    [s.LARGE]: E.large,
                    [s.NONE]: null
                };
            class f extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: i,
                        iconClassName: a
                    } = this.props;
                    return (0, l.jsxs)(d.default, {
                        className: c(E.note, _[t], i),
                        align: d.default.Align.CENTER,
                        children: [(0, l.jsx)(e, {
                            className: c(E.icon, I[r], a)
                        }), (0, l.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            f.Colors = a, f.Sizes = s;
            var p = f
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), a = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = i || (i = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        874642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                s = n("812204"),
                l = n("685665"),
                o = n("642906"),
                u = n("85336"),
                c = n("273619"),
                d = n("674158"),
                E = n("427459"),
                _ = n("617917"),
                I = n("49111"),
                f = n("782340"),
                p = n("315706"),
                m = n("926622");
            let S = "premium-guild-subscription-upsell-modal-header";

            function A(e) {
                let {
                    title: t,
                    subtitle: n,
                    image: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: p.header,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        id: S,
                        color: "header-primary",
                        className: m.marginBottom8,
                        children: t
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: p.subtitleText,
                        children: n
                    }), i]
                })
            }
            let N = e => {
                    let {
                        onClose: t,
                        perks: n,
                        perkIntro: i = f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: s
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: p.wrapper,
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: () => {
                                t()
                            }
                        }), (0, r.jsx)(T, {
                            headerProps: s,
                            perkIntro: i
                        }), (0, r.jsx)("div", {
                            className: p.perks,
                            children: n.map((e, t) => {
                                let {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: s
                                } = e;
                                return (0, r.jsx)(d.default, {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: s
                                }, t)
                            })
                        })]
                    })
                },
                T = e => {
                    let {
                        headerProps: t,
                        perkIntro: s
                    } = e;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [null != t ? (0, r.jsx)(A, {
                            ...t
                        }) : (0, r.jsx)("img", {
                            className: p.heroImage,
                            src: n("243704"),
                            alt: f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: p.heading,
                            children: s
                        })]
                    })
                },
                g = e => {
                    let {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: i,
                        analyticsSourceLocation: s
                    } = e, l = {
                        section: I.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: I.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != n ? (0, E.boostedGuildTierToAnalyticsObjectType)(n) : null
                    };
                    return (0, r.jsxs)(a.ModalFooter, {
                        className: p.footer,
                        children: [(0, r.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            onClick: () => {
                                i()
                            },
                            children: f.default.Messages.CLOSE
                        }), (0, r.jsx)(_.default, {
                            analyticsLocation: l,
                            analyticsSourceLocation: s,
                            guild: t,
                            targetBoostedGuildTier: n,
                            onClose: () => {
                                i()
                            }
                        })]
                    })
                };

            function v(e) {
                let {
                    analyticsSourceLocation: t,
                    guild: n,
                    targetBoostedGuildTier: i,
                    perks: d,
                    perkIntro: E,
                    headerProps: _,
                    onClose: I,
                    ...f
                } = e, {
                    AnalyticsLocationProvider: p
                } = (0, l.default)(s.default.ACTIVITY_DIRECTORY);
                return (0, r.jsx)(p, {
                    children: (0, r.jsx)(o.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, r.jsx)(a.ModalRoot, {
                            ...f,
                            "aria-labelledby": S,
                            children: (0, r.jsx)(c.default, {
                                hideBreadcrumbs: !0,
                                body: (0, r.jsx)(N, {
                                    onClose: I,
                                    perks: d,
                                    perkIntro: E,
                                    headerProps: _
                                }),
                                footer: (0, r.jsx)(g, {
                                    guild: n,
                                    targetBoostedGuildTier: i,
                                    onClose: I,
                                    analyticsSourceLocation: t
                                }),
                                steps: [u.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: u.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
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
                i = n("913144"),
                a = n("479756"),
                s = n("38654"),
                l = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, f = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: I,
                enableVerificationForm: f,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
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
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return m
                }
            });
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                I = 1e3,
                f = 300,
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
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.default)(e => s),
                o = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
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
            var i = n("551042"),
                a = n("599110"),
                s = n("50926"),
                l = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    a.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return g
                },
                updateImpersonatedRoles: function() {
                    return v
                },
                updateImpersonatedData: function() {
                    return R
                }
            });
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                s = n("42203"),
                l = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                I = n("38654"),
                f = n("507950"),
                p = n("49111"),
                m = n("724210");

            function S(e, t) {
                _.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === f.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), T(e)
            }

            function A(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (_.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === f.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), T(e))
            }

            function N(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function T(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, m.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function g(e, t, n) {
                let r = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), A(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function v(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && g(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), A(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function R(e, t) {
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
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = r.parse(n),
                    l = (0, i.getFirstQueryStringValue)(s[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("41092"),
                s = n("414456"),
                l = n.n(s),
                o = n("862337"),
                u = n("77078"),
                c = n("812952"),
                d = n("448993"),
                E = n("736978"),
                _ = n("642906"),
                I = n("85336");
            n("153727"), n("650484");
            var f = n("454589"),
                p = n("978679"),
                m = n("745279"),
                S = n("49111"),
                A = n("782340"),
                N = n("129429");
            let T = new Set([I.Step.SKU_SELECT, I.Step.AWAITING_AUTHENTICATION, I.Step.AWAITING_PURCHASE_TOKEN_AUTH, I.Step.CONFIRM]);

            function g(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: s,
                    paymentError: g,
                    header: v,
                    footer: R,
                    isGift: h = !1,
                    giftMessage: M = A.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: C = !1,
                    hideBreadcrumbs: O = !1,
                    isLoading: y = !1,
                    purchaseError: P,
                    purchaseErrorBlockRef: L,
                    planError: D,
                    onScroll: F,
                    scrollerClassName: x,
                    hasCurrencies: U = !1
                } = e, V = null;
                null != g && null == (0, I.errorToStep)(g) ? V = g : null != P ? V = P : null != D && (V = D);
                let b = null != V ? V.message : "";
                null != V && V instanceof d.BillingError && (V.code === E.ErrorCodes.CARD_DECLINED && U && (b += " ".concat(A.default.Messages.BILLING_ERROR_TRY_ANOTHER)), V.code === E.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = A.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), V.code === S.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = A.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: B
                } = (0, _.usePaymentContext)();
                y = y || null == B;
                let G = i.useRef(new o.Timeout);
                i.useEffect(() => {
                    let e = G.current;
                    return null != B || e.isStarted() ? null != B && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, m.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [B]);
                let j = t.includes(I.Step.PAYMENT_TYPE) ? I.Step.PAYMENT_TYPE : I.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(a.Elements, {
                    options: S.StripeElementsOptions,
                    stripe: B,
                    children: [v, (0, r.jsxs)("div", {
                        className: l("paymentModalContent", N.content),
                        children: [h && !C && n !== I.Step.CONFIRM ? (0, r.jsx)(c.default, {
                            className: N.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: p.default,
                            color: null == M ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: M
                        }) : null, O ? null : (0, r.jsx)("div", {
                            className: N.breadcrumbsWrapper,
                            children: (0, r.jsx)(f.default, {
                                activeId: I.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? j : n,
                                breadcrumbs: t.filter(e => !I.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !T.has(e)).map(e => ({
                                    id: e,
                                    label: (0, I.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: N.bodyWrapper,
                            children: [null == V ? null : (0, r.jsx)("div", {
                                className: N.errorBlockWrapper,
                                children: (0, r.jsx)(u.FormErrorBlock, {
                                    ref: L,
                                    children: b
                                })
                            }), y ? (0, r.jsx)(u.Spinner, {
                                className: N.loadingBlock
                            }) : (0, r.jsx)(u.Sequencer, {
                                className: N.sequencer,
                                staticClassName: N.sequencerStatic,
                                animatedNodeClassName: N.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: F,
                                    className: l(N.scroller, x),
                                    children: s
                                })
                            })]
                        })]
                    }), R]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                s = n("288264");

            function l(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: i,
                    color: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: s.perkRow,
                    children: [(0, r.jsx)("div", {
                        className: s.perkIconContainer,
                        children: (0, r.jsx)(t, {
                            color: l,
                            className: a(s.perkIcon, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: s.perkDescription,
                        children: i
                    })]
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("866227"),
                i = n.n(r),
                a = n("666038");
            class s extends a.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
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
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                s = n("49111");
            let l = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = l[e],
                    o = null != i ? {
                        state: s.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), l = {
                    ...l,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        }
    }
]);