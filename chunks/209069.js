            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("599110"),
                o = n("49111");

            function s(e) {
                let {
                    stickerPack: t,
                    sourceSticker: s,
                    analyticsLocations: a,
                    analyticsLocation: u
                } = e;
                return r.default.track(o.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                    sticker_id: null == s ? void 0 : s.id,
                    sticker_pack_id: t.id,
                    location: u,
                    location_stack: a
                }), r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: o.AnalyticsSections.STICKER_PACK_VIEW_ALL,
                    location: u
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("656137").then(n.bind(n, "656137"));
                    return n => (0, l.jsx)(e, {
                        stickerPack: t,
                        ...n
                    })
                })
            }