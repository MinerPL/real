            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("913144"),
                r = n("316272"),
                o = n("19009"),
                u = n("774146"),
                d = n("233322"),
                c = n("894887"),
                E = n("42963"),
                f = n("223170"),
                _ = n("59811"),
                h = n("341542"),
                C = n("305961"),
                T = n("162771"),
                I = n("697218"),
                S = n("449008"),
                N = n("773336"),
                A = n("165926"),
                m = n("527441"),
                p = n("56235"),
                g = n("218971"),
                R = n("49111"),
                O = n("492397"),
                L = n("149806");

            function v() {
                null != a && (0, i.closeModal)(a)
            }
            class M extends r.default {
                _initialize() {
                    l.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.subscribe("LOGOUT", v)
                }
                _terminate() {
                    l.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.unsubscribe("LOGOUT", v)
                }
                handleConnectionOpen() {
                    var e;
                    let t, l = m.default.getType();
                    if (null == l) return;
                    switch (l) {
                        case p.NewUserTypes.INVITE_UNCLAIMED:
                            E.default.flowStart(L.FlowType.INVITE, L.RegistrationSteps.NUF_STARTED);
                            break;
                        case p.NewUserTypes.ORGANIC_REGISTERED:
                            E.default.flowStart(L.FlowType.ORGANIC, L.RegistrationSteps.NUF_STARTED);
                            break;
                        case p.NewUserTypes.MARKETING_UNCLAIMED:
                            E.default.flowStart(L.FlowType.ORGANIC_MARKETING, L.RegistrationSteps.NUF_STARTED)
                    }
                    let r = !1,
                        v = T.default.getGuildId();
                    if (l === p.NewUserTypes.INVITE_UNCLAIMED) {
                        let e = C.default.getGuild(v);
                        (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, f.fetchWelcomeScreen)(e.id))
                    }
                    let M = () => 0 === h.default.totalGuilds && !N.isPlatformEmbedded,
                        P = o.userNeedsAgeGate();
                    e = [{
                        key: "Unified NUF Modal",
                        open: async function e(e) {
                            let t = e => {
                                switch (e) {
                                    case g.NUFSlides.AGE_GATE:
                                        E.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.AGE_GATE);
                                        break;
                                    case g.NUFSlides.CHOOSE_TEMPLATE:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_TEMPLATES);
                                        break;
                                    case g.NUFSlides.CUSTOMIZE_GUILD:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_CREATE);
                                        break;
                                    case g.NUFSlides.CHANNEL_PROMPT:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CHANNEL_PROMPT);
                                        break;
                                    case g.NUFSlides.JOIN_GUILD:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.JOIN_GUILD);
                                        break;
                                    case g.NUFSlides.CREATION_INTENT:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CREATION_INTENT);
                                        break;
                                    case g.NUFSlides.COMPLETE:
                                        E.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.SUCCESS);
                                        break;
                                    case null:
                                        break;
                                    default:
                                        S.assertNever(e)
                                }
                            };
                            a = await (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("439431").then(n.bind(n, "439431"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    onSlideChange: t
                                })
                            }, {
                                onCloseRequest: R.NOOP,
                                onCloseCallback: e,
                                modalKey: a
                            })
                        },
                        predicate: () => M() && !O.CONFERENCE_MODE_ENABLED
                    }, {
                        key: "New User Age Gate",
                        open: u.openNewUserAgeGateModal,
                        predicate: () => P && !M() && !O.CONFERENCE_MODE_ENABLED
                    }, {
                        key: "Claim Account Modal",
                        open: e => u.openClaimAccountModal(N.isPlatformEmbedded, e),
                        predicate: () => {
                            var e;
                            return !r && null != I.default.getCurrentUser() && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !O.CONFERENCE_MODE_ENABLED && !(0, c.isMidjourneyOnboardingFlow)("new_user_manager")
                        }
                    }, {
                        key: "Verification Gate with Claim Account",
                        open: e => (0, d.openMemberVerificationModal)(v, null != e ? e : void 0),
                        predicate: () => {
                            var e;
                            return r && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !O.CONFERENCE_MODE_ENABLED
                        }
                    }, {
                        key: "Guild Welcome Modal",
                        open: e => (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("900257").then(n.bind(n, "900257"));
                            return t => (0, s.jsx)(e, {
                                ...t,
                                guildId: v
                            })
                        }, {
                            onCloseCallback: e
                        }),
                        predicate: () => null != v && null != _.default.get(v) && _.default.get(v) !== _.NO_WELCOME_SCREEN
                    }], t = () => {
                        A.setNewUserFlowCompleted(), E.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.NUF_COMPLETE, !0)
                    }, [...e].reverse().forEach(e => {
                        let n = t;
                        t = () => {
                            e.predicate() ? e.open(n) : n()
                        }
                    }), t()
                }
            }
            var P = new M