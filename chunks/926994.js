            "use strict";
            n.r(t), n.d(t, {
                openProviderAuthorize: function() {
                    return E
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("619340"),
                s = n("455711"),
                r = n("938157"),
                u = n("448819"),
                o = n("128259"),
                d = n("773336"),
                c = n("214509"),
                _ = n("49111");
            async function E(e) {
                let {
                    location: t,
                    twoWayLinkType: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, a = Math.round(screen.width / 2 - 350), s = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, r = null;
                !(0, d.isDesktop)() && (r = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(_.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(s, ",left=").concat(a, ",width=").concat(700, ",height=").concat(640)));
                let u = i;
                if (null == u && e !== c.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
                    let {
                        body: i
                    } = await l.default.authorize(e, {
                        location: t,
                        twoWayLinkType: n
                    });
                    u = i.url
                }
                if (null != u) return null != r ? r.location.href = u : window.open(u), u
            }

            function f(e, t, l) {
                if (e === _.PlatformTypes.LEAGUE_OF_LEGENDS && (e = _.PlatformTypes.RIOT_GAMES), e === _.PlatformTypes.CRUNCHYROLL) {
                    s.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === _.PlatformTypes.XBOX) {
                    u.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === _.PlatformTypes.PLAYSTATION || e === _.PlatformTypes.PLAYSTATION_STAGING) {
                    r.showModal([null != t ? t : "unknown"], e);
                    return
                }
                if (e === _.PlatformTypes.DOMAIN) {
                    (0, a.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("359113").then(n.bind(n, "359113"));
                        return n => (0, i.jsx)(e, {
                            analyticsLocation: [null != t ? t : "unknown"],
                            ...n
                        })
                    });
                    return
                }
                if (null != l) {
                    (0, o.handleClick)({
                        shouldConfirm: !0,
                        href: l,
                        onConfirm: () => {
                            E(e, {
                                location: t
                            }, l)
                        }
                    });
                    return
                }
                E(e, {
                    location: t
                })
            }