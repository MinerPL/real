            "use strict";
            n.r(t), n.d(t, {
                openProviderAuthorize: function() {
                    return c
                },
                default: function() {
                    return g
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("619340"),
                a = n("455711"),
                o = n("938157"),
                d = n("448819"),
                u = n("128259"),
                l = n("773336"),
                f = n("214509"),
                _ = n("49111");
            async function c(e) {
                let {
                    location: t,
                    twoWayLinkType: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0, i = Math.round(screen.width / 2 - 350), a = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, o = null;
                !(0, l.isDesktop)() && (o = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(_.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(a, ",left=").concat(i, ",width=").concat(700, ",height=").concat(640)));
                let d = s;
                if (null == d && e !== f.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
                    let {
                        body: s
                    } = await r.default.authorize(e, {
                        location: t,
                        twoWayLinkType: n
                    });
                    d = s.url
                }
                if (null != d) return null != o ? o.location.href = d : window.open(d), d
            }

            function g(e, t, r) {
                if (e === _.PlatformTypes.LEAGUE_OF_LEGENDS && (e = _.PlatformTypes.RIOT_GAMES), e === _.PlatformTypes.CRUNCHYROLL) {
                    a.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === _.PlatformTypes.XBOX) {
                    d.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === _.PlatformTypes.PLAYSTATION || e === _.PlatformTypes.PLAYSTATION_STAGING) {
                    o.showModal([null != t ? t : "unknown"], e);
                    return
                }
                if (e === _.PlatformTypes.DOMAIN) {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("359113").then(n.bind(n, "359113"));
                        return n => (0, s.jsx)(e, {
                            analyticsLocation: [null != t ? t : "unknown"],
                            ...n
                        })
                    });
                    return
                }
                if (null != r) {
                    (0, u.handleClick)({
                        shouldConfirm: !0,
                        href: r,
                        onConfirm: () => {
                            c(e, {
                                location: t
                            }, r)
                        }
                    });
                    return
                }
                c(e, {
                    location: t
                })
            }