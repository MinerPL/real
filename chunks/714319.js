            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("446674"),
                r = n("386045"),
                o = n("471888");

            function u() {
                let e = (0, i.useStateFromStoresArray)([r.default], () => {
                    var e;
                    let t = null === (e = r.default.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
                    return null == t ? [] : r.default.getClips().slice(0, 4).filter(e => t.includes(e.id))
                });
                return (0, a.jsx)("div", {
                    className: l(o.thumbnailStack, {
                        [o["height-1"]]: 1 === e.length,
                        [o["height-2"]]: 2 === e.length,
                        [o["height-3"]]: 3 === e.length,
                        [o["height-max"]]: e.length >= 4
                    }),
                    children: Array.from({
                        ...e,
                        length: 4
                    }).map((e, t) => null != e ? (0, a.jsx)("img", {
                        alt: "",
                        className: o.thumbnail,
                        src: e.thumbnail
                    }, e.id) : (0, a.jsx)("div", {}, "placeholder-".concat(t))).reverse()
                })
            }