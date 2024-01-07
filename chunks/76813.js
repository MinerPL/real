            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("522049"),
                r = n("664336"),
                o = n("386045"),
                u = n("80028"),
                d = n("782340");

            function c(e) {
                let {
                    className: t
                } = e, {
                    hasClips: c,
                    hasNewClips: f
                } = (0, a.useStateFromStoresObject)([o.default], () => ({
                    hasClips: o.default.hasClips(),
                    hasNewClips: o.default.getNewClipIds().length > 0
                }));
                return c ? (0, l.jsx)(r.Icon, {
                    className: t,
                    icon: i.default,
                    showBadge: f,
                    tooltip: d.default.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("167573").then(n.bind(n, "167573"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        }, {
                            modalKey: u.CLIPS_GALLERY_MODAL_KEY
                        })
                    }
                }) : null
            }