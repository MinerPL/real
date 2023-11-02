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
                    return u
                },
                openAlbum: function() {
                    return d
                },
                openArtist: function() {
                    return c
                }
            });
            var o = n("968194"),
                i = n("773336"),
                s = n("155815"),
                r = n("450484");

            function a(t, e, n) {
                let a;
                !(0, i.isDesktop)() && (a = window.open("", "_blank")), (0, o.getMetadata)(t, e).then(t => n(t)).then(t => {
                    let {
                        resourceType: e,
                        resourceId: n
                    } = t, o = s.default.isProtocolRegistered() ? r.SpotifyEndpoints.PLAYER_OPEN(e, n) : r.SpotifyEndpoints.WEB_OPEN(e, n);
                    null != a ? a.location.href = o : window.open(o)
                }).catch(() => {
                    null != a && a.close()
                })
            }

            function l() {
                window.open(r.SpotifyEndpoints.PREMIUM_SITE)
            }

            function u(t) {
                let {
                    sync_id: e
                } = t;
                if (null == e) return;
                let n = r.SpotifyResourceTypes.TRACK,
                    o = s.default.isProtocolRegistered() ? r.SpotifyEndpoints.PLAYER_OPEN(n, e) : r.SpotifyEndpoints.WEB_OPEN(n, e);
                window.open(o)
            }

            function d(t, e) {
                a(t, e, t => {
                    let {
                        album_id: e
                    } = t;
                    if (null == e) throw Error("no album id in metadata");
                    return {
                        resourceType: r.SpotifyResourceTypes.ALBUM,
                        resourceId: e
                    }
                })
            }

            function c(t, e, n) {
                a(t, e, t => {
                    let {
                        artist_ids: e
                    } = t;
                    if (null == e) throw Error("no artist ids in metadata");
                    let o = e[n];
                    if (null == o) throw Error("invalid artist index");
                    return {
                        resourceType: r.SpotifyResourceTypes.ARTIST,
                        resourceId: o
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
            var o = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("145131"),
                r = n("476765"),
                a = n("769791"),
                l = n("782340"),
                u = n("823197");

            function d(t) {
                let {
                    transitionState: e,
                    onClose: n
                } = t, d = (0, r.useUID)();
                return (0, o.jsxs)(i.ModalRoot, {
                    "aria-labelledby": d,
                    transitionState: e,
                    size: i.ModalSize.SMALL,
                    children: [(0, o.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, o.jsx)(i.Heading, {
                            id: d,
                            variant: "heading-lg/semibold",
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
                        })
                    }), (0, o.jsxs)(i.ModalContent, {
                        children: [(0, o.jsx)(s.default, {
                            justify: s.default.Justify.CENTER,
                            children: (0, o.jsx)("div", {
                                className: u.image
                            })
                        }), (0, o.jsx)(i.Text, {
                            className: u.text,
                            variant: "text-sm/normal",
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
                        })]
                    }), (0, o.jsxs)(i.ModalFooter, {
                        children: [(0, o.jsx)(i.Button, {
                            onClick: function() {
                                (0, a.openPremiumSite)(), n()
                            },
                            children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
                        }), (0, o.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: n,
                            children: l.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);