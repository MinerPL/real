(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7114"], {
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
                    return l
                },
                openTrack: function() {
                    return a
                },
                openAlbum: function() {
                    return d
                },
                openArtist: function() {
                    return c
                }
            }), n("70102");
            var i = n("968194"),
                o = n("773336"),
                r = n("155815"),
                s = n("450484");

            function u(t, e, n) {
                let u;
                !(0, o.isDesktop)() && (u = window.open("", "_blank")), (0, i.getMetadata)(t, e).then(t => n(t)).then(t => {
                    let {
                        resourceType: e,
                        resourceId: n
                    } = t, i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(e, n) : s.SpotifyEndpoints.WEB_OPEN(e, n);
                    null != u ? u.location.href = i : window.open(i)
                }).catch(() => {
                    null != u && u.close()
                })
            }

            function l() {
                window.open(s.SpotifyEndpoints.PREMIUM_SITE)
            }

            function a(t) {
                let {
                    sync_id: e
                } = t;
                if (null == e) return;
                let n = s.SpotifyResourceTypes.TRACK,
                    i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(n, e) : s.SpotifyEndpoints.WEB_OPEN(n, e);
                window.open(i)
            }

            function d(t, e) {
                u(t, e, t => {
                    let {
                        album_id: e
                    } = t;
                    if (null == e) throw Error("no album id in metadata");
                    return {
                        resourceType: s.SpotifyResourceTypes.ALBUM,
                        resourceId: e
                    }
                })
            }

            function c(t, e, n) {
                u(t, e, t => {
                    let {
                        artist_ids: e
                    } = t;
                    if (null == e) throw Error("no artist ids in metadata");
                    let i = e[n];
                    if (null == i) throw Error("invalid artist index");
                    return {
                        resourceType: s.SpotifyResourceTypes.ARTIST,
                        resourceId: i
                    }
                })
            }
        },
        775195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("77078"),
                r = n("145131"),
                s = n("476765"),
                u = n("769791"),
                l = n("782340"),
                a = n("823197");

            function d(t) {
                let {
                    transitionState: e,
                    onClose: n
                } = t, d = (0, s.useUID)();
                return (0, i.jsxs)(o.ModalRoot, {
                    "aria-labelledby": d,
                    transitionState: e,
                    size: o.ModalSize.SMALL,
                    children: [(0, i.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(o.Heading, {
                            id: d,
                            variant: "heading-lg/semibold",
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
                        })
                    }), (0, i.jsxs)(o.ModalContent, {
                        children: [(0, i.jsx)(r.default, {
                            justify: r.default.Justify.CENTER,
                            children: (0, i.jsx)("div", {
                                className: a.image
                            })
                        }), (0, i.jsx)(o.Text, {
                            className: a.text,
                            variant: "text-sm/normal",
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
                        })]
                    }), (0, i.jsxs)(o.ModalFooter, {
                        children: [(0, i.jsx)(o.Button, {
                            onClick: function() {
                                (0, u.openPremiumSite)(), n()
                            },
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
                        }), (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: n,
                            children: l.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return l
                }
            });
            var i = n("995008"),
                o = n.n(i),
                r = n("775560");
            let s = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o(t)
                },
                u = () => (0, r.useLazyValue)(() => s()),
                l = t => {
                    let {
                        children: e
                    } = t;
                    return e(u())
                }
        }
    }
]);