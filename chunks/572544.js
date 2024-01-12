            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007");
            var s = n("746379"),
                i = n.n(s),
                r = n("394846"),
                a = n("913144"),
                o = n("970728"),
                d = n("79112"),
                u = n("389153"),
                l = n("412707"),
                f = n("139514"),
                _ = n("312016"),
                c = n("374021"),
                g = n("398604"),
                m = n("468560"),
                h = n("361572"),
                v = n("537325"),
                E = n("835174"),
                p = n("566271"),
                y = n("337543"),
                T = n("18494"),
                C = n("162771"),
                S = n("677099"),
                I = n("599110"),
                A = n("253981");
            n("545158");
            var D = n("49111");
            async function N(e, t) {
                await a.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: D.AppContext.APP
                })
            }
            async function O(e) {
                var t;
                let n = y.default.getInvite(e.code);
                if (null == n) {
                    let {
                        invite: t
                    } = await o.default.resolveInvite(e.code, "Markdown Link");
                    n = t
                }
                if (null == n) return;
                if (n.state === D.InviteStates.EXPIRED || n.state === D.InviteStates.BANNED || n.state === D.InviteStates.ERROR) {
                    await N(n, e.code);
                    return
                }
                let s = S.default.getFlattenedGuildIds(),
                    i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    r = null != i && s.includes(i);
                r ? o.default.transitionToInviteSync(n) : await N(n, e.code)
            }
            let b = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                    s = (0, _.findCodedLink)(e),
                    {
                        skipExtensionCheck: a
                    } = t;
                if (null != s && (s.type === f.CodedLinkType.INVITE || s.type === f.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), O(s), !0);
                if (null != s && s.type === f.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: i
                    } = s, a = null !== (t = C.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return I.default.track(D.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: i,
                        device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: a,
                        channel_id: T.default.getChannelId()
                    }), n.el("646186").then(n.bind(n, "646186")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: s
                        } = n("412707");
                        t({
                            view: s.APPLICATION,
                            applicationId: i,
                            guildId: a,
                            entrypoint: {
                                name: l.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != s && s.type === f.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, i] = s.code.split("-");
                    return n.el("573777").then(n.bind(n, "573777")).then(e => {
                        let {
                            openGuildProductLink: n
                        } = e;
                        n(t, i)
                    }), !0
                };
                let {
                    path: o,
                    hostname: y = "",
                    host: S,
                    query: N
                } = i.parse(e), P = A.default.isDiscordHostname(y) || A.default.isDiscordLocalhost(S, y);
                if (P && (null == o ? void 0 : o.startsWith("/application-directory"))) {
                    let [, , e, t] = o.split("/"), s = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return i => {
                        var a;
                        null == i || i.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: o
                        } = n("750947"), {
                            ApplicationDirectoryViews: d
                        } = n("412707"), u = null !== (a = C.default.getGuildId()) && void 0 !== a ? a : void 0, f = d.HOME;
                        return "search" === e && (f = d.SEARCH), null != s && (f = d.APPLICATION, I.default.track(D.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: s,
                            device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: u,
                            channel_id: T.default.getChannelId()
                        })), n.el("646186").then(n.bind(n, "646186")).then(e => {
                            let {
                                goToAppDirectory: n
                            } = e;
                            n({
                                view: f,
                                applicationId: s,
                                guildId: u,
                                applicationSection: (0, m.default)(o, t),
                                entrypoint: {
                                    name: l.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != o && P && A.default.isAppRoute(o)) {
                    let e = null != N ? {
                        search: N
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, v.default)(o, e), !0)
                }
                if (null != o && P) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2ModalWithCreateGuildModal: s
                    } = n("33942"), i = t(e);
                    if (null != i) return e => (null == e || e.preventDefault(), s(i), !0)
                }
                let V = (0, h.tryParseEventDetailsPath)(o);
                if (null != o && P && null != V) return e => {
                    null == e || e.preventDefault();
                    let t = C.default.getGuildId();
                    null != V.guildId && "" !== V.guildId && V.guildId !== t && (0, v.default)(D.Routes.CHANNEL(V.guildId));
                    let n = g.default.getGuildScheduledEvent(V.guildEventId);
                    return null != n && (0, c.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (P && (null == o ? void 0 : o.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(o);
                    if (null != t) return e => (null == e || e.preventDefault(), d.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!a && null != (0, p.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), E.default.show(e), !0)
            }