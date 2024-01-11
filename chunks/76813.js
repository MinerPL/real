            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("778588"),
                o = n("522049"),
                u = n("664336"),
                d = n("773336"),
                c = n("56947"),
                f = n("386045"),
                E = n("389535"),
                h = n("80028"),
                _ = n("782340");

            function S(e) {
                let {
                    canShowReminder: t = !1,
                    className: S
                } = e, {
                    showClipsHeaderEntrypoint: T,
                    ignorePlatformRestriction: p
                } = c.ClipsExperiment.useExperiment({
                    location: "ClipsButton"
                }, {
                    autoTrackExposure: !1
                }), {
                    hasClips: N,
                    hasNewClips: I,
                    lastClipsSession: m,
                    remindersEnabled: A
                } = (0, s.useStateFromStoresObject)([f.default], () => ({
                    hasClips: f.default.hasClips(),
                    hasNewClips: f.default.getNewClipIds().length > 0,
                    lastClipsSession: f.default.getLastClipsSession(),
                    remindersEnabled: f.default.getSettings().remindersEnabled
                })), g = null != m && m.newClipIds.length > 0, [C, R] = a.useState(null), M = (0, s.useStateFromStores)([r.default], () => r.default.hasLayers());

                function O() {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("167573").then(n.bind(n, "167573"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    }, {
                        modalKey: h.CLIPS_GALLERY_MODAL_KEY
                    })
                }
                return T && ((0, d.isWindows)() || p) && N ? (0, l.jsxs)(l.Fragment, {
                    children: [null != C && t && A && g && !(0, i.hasAnyModalOpen)() && !M && (0, l.jsx)(E.default, {
                        clipIconRef: C,
                        lastClipsSession: m,
                        onOpenClipsGallery: O
                    }), (0, l.jsx)("div", {
                        ref: R,
                        children: (0, l.jsx)(u.Icon, {
                            className: S,
                            icon: o.default,
                            showBadge: I,
                            tooltip: _.default.Messages.CLIPS_GALLERY_TOOLTIP,
                            onClick: O
                        })
                    })]
                }) : null
            }