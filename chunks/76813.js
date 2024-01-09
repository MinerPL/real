            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("522049"),
                r = n("664336"),
                o = n("773336"),
                u = n("56947"),
                d = n("386045"),
                c = n("80028"),
                f = n("782340");

            function E(e) {
                let {
                    className: t
                } = e, {
                    showClipsHeaderEntrypoint: E,
                    ignorePlatformRestriction: h
                } = u.ClipsExperiment.useExperiment({
                    location: "ClipsButton"
                }, {
                    autoTrackExposure: !1
                }), {
                    hasClips: _,
                    hasNewClips: S
                } = (0, a.useStateFromStoresObject)([d.default], () => ({
                    hasClips: d.default.hasClips(),
                    hasNewClips: d.default.getNewClipIds().length > 0
                }));
                return E && ((0, o.isWindows)() || h) && _ ? (0, l.jsx)(r.Icon, {
                    className: t,
                    icon: i.default,
                    showBadge: S,
                    tooltip: f.default.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("167573").then(n.bind(n, "167573"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        }, {
                            modalKey: c.CLIPS_GALLERY_MODAL_KEY
                        })
                    }
                }) : null
            }