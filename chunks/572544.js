            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007");
            var i = n("746379"),
                a = n.n(i),
                l = n("394846"),
                s = n("913144"),
                r = n("970728"),
                u = n("79112"),
                o = n("389153"),
                d = n("412707"),
                c = n("139514"),
                _ = n("312016"),
                E = n("374021"),
                f = n("398604"),
                h = n("468560"),
                p = n("361572"),
                T = n("537325"),
                C = n("835174"),
                m = n("566271"),
                S = n("337543"),
                I = n("18494"),
                g = n("162771"),
                A = n("677099"),
                N = n("599110"),
                O = n("253981");
            n("545158");
            var R = n("49111");
            async function y(e, t) {
                await s.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: R.AppContext.APP
                })
            }
            async function v(e) {
                var t;
                let n = S.default.getInvite(e.code);
                if (null == n) {
                    let {
                        invite: t
                    } = await r.default.resolveInvite(e.code, "Markdown Link");
                    n = t
                }
                if (null == n) return;
                if (n.state === R.InviteStates.EXPIRED || n.state === R.InviteStates.BANNED || n.state === R.InviteStates.ERROR) {
                    await y(n, e.code);
                    return
                }
                let i = A.default.getFlattenedGuildIds(),
                    a = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    l = null != a && i.includes(a);
                l ? r.default.transitionToInviteSync(n) : await y(n, e.code)
            }
            let M = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                    i = (0, _.findCodedLink)(e),
                    {
                        skipExtensionCheck: s
                    } = t;
                if (null != i && (i.type === c.CodedLinkType.INVITE || i.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), v(i), !0);
                if (null != i && i.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: a
                    } = i, s = null !== (t = g.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return N.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: a,
                        device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: s,
                        channel_id: I.default.getChannelId()
                    }), n.el("646186").then(n.bind(n, "646186")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: i
                        } = n("412707");
                        t({
                            view: i.APPLICATION,
                            applicationId: a,
                            guildId: s,
                            entrypoint: {
                                name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != i && i.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, a] = i.code.split("-");
                    return n.el("573777").then(n.bind(n, "573777")).then(e => {
                        let {
                            openGuildProductLink: n
                        } = e;
                        n(t, a)
                    }), !0
                };
                let {
                    path: r,
                    hostname: S = "",
                    host: A,
                    query: y
                } = a.parse(e), D = O.default.isDiscordHostname(S) || O.default.isDiscordLocalhost(A, S);
                if (D && (null == r ? void 0 : r.startsWith("/application-directory"))) {
                    let [, , e, t] = r.split("/"), i = null != e && (0, o.isSnowflake)(e) ? e : void 0;
                    return a => {
                        var s;
                        null == a || a.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: r
                        } = n("750947"), {
                            ApplicationDirectoryViews: u
                        } = n("412707"), o = null !== (s = g.default.getGuildId()) && void 0 !== s ? s : void 0, c = u.HOME;
                        return "search" === e && (c = u.SEARCH), null != i && (c = u.APPLICATION, N.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: i,
                            device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: o,
                            channel_id: I.default.getChannelId()
                        })), n.el("646186").then(n.bind(n, "646186")).then(e => {
                            let {
                                goToAppDirectory: n
                            } = e;
                            n({
                                view: c,
                                applicationId: i,
                                guildId: o,
                                applicationSection: (0, h.default)(r, t),
                                entrypoint: {
                                    name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != r && D && O.default.isAppRoute(r)) {
                    let e = null != y ? {
                        search: y
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, T.default)(r, e), !0)
                }
                if (null != r && D) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2ModalWithCreateGuildModal: i
                    } = n("33942"), a = t(e);
                    if (null != a) return e => (null == e || e.preventDefault(), i(a), !0)
                }
                let L = (0, p.tryParseEventDetailsPath)(r);
                if (null != r && D && null != L) return e => {
                    null == e || e.preventDefault();
                    let t = g.default.getGuildId();
                    null != L.guildId && "" !== L.guildId && L.guildId !== t && (0, T.default)(R.Routes.CHANNEL(L.guildId));
                    let n = f.default.getGuildScheduledEvent(L.guildEventId);
                    return null != n && (0, E.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (D && (null == r ? void 0 : r.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(r);
                    if (null != t) return e => (null == e || e.preventDefault(), u.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!s && null != (0, m.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), C.default.show(e), !0)
            }