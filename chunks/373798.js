            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("446674"),
                n = s("151426"),
                l = s("875212"),
                i = s("56947"),
                r = s("235145"),
                o = s("25132"),
                d = s("921149"),
                u = s("694540"),
                c = s("26092"),
                S = s("435645");

            function E() {
                let e = (0, u.useUnseenOutboundPromotions)(),
                    t = e.length,
                    s = (0, d.useIsPrepaidPaymentPastDue)(),
                    E = (0, a.useStateFromStores)([c.default], () => c.default.getProps().impressionSource),
                    f = (0, o.usePendingRequestCount)(),
                    m = (0, i.useEnableClips)(),
                    [T] = (0, r.useGetDismissibleContent)(m ? [n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
                    _ = "useGenerateUserSettingsSections";
                return (0, l.useTriggerDebuggingAA)({
                    location: _ + " auto on",
                    autoTrackExposure: !0
                }), (0, l.useTriggerDebuggingAA)({
                    location: _ + " auto off",
                    autoTrackExposure: !1
                }), (0, S.default)({
                    unseenGiftCount: t,
                    showPrepaidPaymentPastDueWarning: s,
                    impressionSource: E,
                    numOfPendingFamilyRequests: f,
                    isClipsBetaTagShowing: T === n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG
                })
            }