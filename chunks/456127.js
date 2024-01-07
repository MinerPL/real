            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("598165"),
                s = n("446674"),
                i = n("386045"),
                r = n("803725"),
                o = n("103979"),
                u = n("981913"),
                d = n("373469"),
                c = n("271938"),
                f = n("191145"),
                h = n("99795"),
                p = n("782340");

            function m(e) {
                let {
                    channel: t
                } = e, n = (0, s.useStateFromStores)([f.default], () => f.default.getSelectedParticipant(t.id)), m = (null == n ? void 0 : n.type) === h.ParticipantTypes.STREAM, E = (0, s.useStateFromStores)([d.default], () => m ? d.default.getActiveStreamForStreamKey(n.id) : null), {
                    ignoreSenderPreference: C
                } = o.default.useExperiment({
                    location: "ActionBarClipsButton"
                }, {
                    autoTrackExposure: !1
                }), {
                    viewerClippingAllowed: g,
                    isAtMaxSavingClipOperations: S
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    viewerClippingAllowed: null != E && (i.default.isViewerClippingAllowedForUser(E.ownerId) || C),
                    isAtMaxSavingClipOperations: i.default.getIsAtMaxSaveClipOperations()
                })), _ = (null == E ? void 0 : E.ownerId) === c.default.getId(), I = !(_ || g) || S || null == n;
                return (0, a.jsx)(u.default, {
                    onClick: () => {
                        !I && (_ ? (0, r.saveClip)() : (0, r.saveClip)(n.id))
                    },
                    disabled: I,
                    iconComponent: e => (0, a.jsx)(l.CameraIcon, {
                        ...e,
                        color: "currentColor"
                    }),
                    label: null == E ? p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : _ || g ? S ? void 0 : p.default.Messages.CLIPS_SAVE : p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP
                })
            }