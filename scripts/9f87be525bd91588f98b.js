(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7114"], {
        962429: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        365444: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = n("732427"),
                u = n("866490"),
                i = n("246105")
        },
        732427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("773670");

            function u() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773670");
            let u = {};

            function i(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        866490: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("773670"),
                u = n("962429");
            let i = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(i);
                return o.current === i ? (n.current = t(), o.current = e) : !(0, u.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        229372: function(t, e, n) {
            "use strict";
            t.exports = n.p + "a7d6af4279f16c27ae9b.svg"
        },
        231050: function(t, e, n) {
            "use strict";
            t.exports = n.p + "1681fafa511fd53e8bfd.svg"
        },
        769791: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                openPremiumSite: function() {
                    return c
                },
                openTrack: function() {
                    return l
                },
                openAlbum: function() {
                    return a
                },
                openArtist: function() {
                    return f
                }
            });
            var r = n("546422"),
                u = n("773336"),
                i = n("155815"),
                o = n("450484");

            function s(t, e, n) {
                let s;
                !(0, u.isDesktop)() && (s = window.open("", "_blank")), (0, r.getMetadata)(t, e).then(t => n(t)).then(t => {
                    let {
                        resourceType: e,
                        resourceId: n
                    } = t, r = i.default.isProtocolRegistered() ? o.SpotifyEndpoints.PLAYER_OPEN(e, n) : o.SpotifyEndpoints.WEB_OPEN(e, n);
                    null != s ? s.location.href = r : window.open(r)
                }).catch(() => {
                    null != s && s.close()
                })
            }

            function c() {
                window.open(o.SpotifyEndpoints.PREMIUM_SITE)
            }

            function l(t) {
                let {
                    sync_id: e
                } = t;
                if (null == e) return;
                let n = o.SpotifyResourceTypes.TRACK,
                    r = i.default.isProtocolRegistered() ? o.SpotifyEndpoints.PLAYER_OPEN(n, e) : o.SpotifyEndpoints.WEB_OPEN(n, e);
                window.open(r)
            }

            function a(t, e) {
                s(t, e, t => {
                    let {
                        album_id: e
                    } = t;
                    if (null == e) throw Error("no album id in metadata");
                    return {
                        resourceType: o.SpotifyResourceTypes.ALBUM,
                        resourceId: e
                    }
                })
            }

            function f(t, e, n) {
                s(t, e, t => {
                    let {
                        artist_ids: e
                    } = t;
                    if (null == e) throw Error("no artist ids in metadata");
                    let r = e[n];
                    if (null == r) throw Error("invalid artist index");
                    return {
                        resourceType: o.SpotifyResourceTypes.ARTIST,
                        resourceId: r
                    }
                })
            }
        },
        775195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("77078"),
                i = n("145131"),
                o = n("476765"),
                s = n("769791"),
                c = n("782340"),
                l = n("119534");

            function a(t) {
                let {
                    transitionState: e,
                    onClose: n
                } = t, a = (0, o.useUID)();
                return (0, r.jsxs)(u.ModalRoot, {
                    "aria-labelledby": a,
                    transitionState: e,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsx)(u.Heading, {
                            id: a,
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
                        })
                    }), (0, r.jsxs)(u.ModalContent, {
                        children: [(0, r.jsx)(i.default, {
                            justify: i.default.Justify.CENTER,
                            children: (0, r.jsx)("div", {
                                className: l.image
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: l.text,
                            variant: "text-sm/normal",
                            children: c.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
                        })]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: function() {
                                (0, s.openPremiumSite)(), n()
                            },
                            children: c.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: n,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return c
                }
            });
            var r = n("552473"),
                u = n.n(r),
                i = n("365444");
            let o = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                s = () => (0, i.useLazyValue)(() => o()),
                c = t => {
                    let {
                        children: e
                    } = t;
                    return e(s())
                }
        }
    }
]);