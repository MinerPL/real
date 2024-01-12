            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("151426"),
                r = s("77078"),
                o = s("685665"),
                d = s("10641"),
                u = s("103979"),
                c = s("845579"),
                S = s("56947"),
                E = s("386045"),
                f = s("803725"),
                T = s("311207"),
                m = s("653485"),
                _ = s("462491"),
                g = s("782340"),
                h = s("577199"),
                I = s("180437"),
                N = s("926622");

            function p() {
                let e = c.ClipsAllowVoiceRecording.useSetting(),
                    {
                        enableViewerClipping: t
                    } = u.default.useExperiment({
                        location: "Clips Settings"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        AnalyticsLocationProvider: s
                    } = (0, o.default)(),
                    p = (0, S.useEnableClips)(),
                    {
                        viewerClipsEnabled: C
                    } = (0, l.useStateFromStoresObject)([E.default], () => E.default.getSettings());
                return n.useEffect(() => {
                    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
                }), (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(r.FormSection, {
                        tag: r.FormTitleTags.H1,
                        title: (0, a.jsxs)("div", {
                            className: h.headerContainer,
                            children: [g.default.Messages.CLIPS, (0, a.jsx)(T.default, {})]
                        }),
                        children: p && (0, a.jsxs)("form", {
                            onSubmit: e => e.preventDefault(),
                            children: [(0, a.jsx)(m.default, {}), (0, a.jsx)(_.default, {})]
                        })
                    }), p && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
                        className: N.marginTop20,
                        children: [(0, a.jsx)(r.FormSwitch, {
                            hideBorder: !0,
                            className: I.formItem,
                            value: e,
                            note: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
                            onChange: e => f.updateAllowVoiceRecording({
                                allowVoiceRecording: e
                            }),
                            children: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
                        }), t && (0, a.jsx)(r.FormSwitch, {
                            hideBorder: !0,
                            className: I.formItem,
                            value: C,
                            note: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
                            onChange: e => f.updateViewerClipsEnabled(e),
                            children: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
                        })]
                    })]
                })
            }