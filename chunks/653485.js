            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("913139"),
                u = s("79112"),
                c = s("278108"),
                S = s("584687"),
                E = s("915639"),
                f = s("216503"),
                m = s("42887"),
                T = s("227602"),
                _ = s("773336"),
                g = s("386045"),
                h = s("30591"),
                I = s("803725"),
                N = s("119052"),
                p = s("80028"),
                C = s("49111"),
                A = s("686298"),
                O = s("397336"),
                x = s("782340"),
                M = s("11103"),
                R = s("180437"),
                v = s("926622");

            function L() {
                let e = (0, r.useStateFromStores)([m.default], () => m.default.getHardwareH264()),
                    {
                        clipsEnabled: t,
                        decoupledClipsEnabled: s,
                        clipsLength: l,
                        clipsQuality: L
                    } = (0, r.useStateFromStoresObject)([g.default], () => g.default.getSettings()),
                    D = (0, r.useStateFromStores)([g.default], () => g.default.getHardwareClassification()),
                    P = (0, r.useStateFromStores)([T.default], () => T.default.getKeybindForAction(C.GlobalKeybindActions.SAVE_CLIP, !0)),
                    {
                        enableDecoupledGameClipping: j
                    } = S.default.useExperiment({
                        location: "clips_recording_settings"
                    }, {
                        autoTrackExposure: !1
                    });
                i(null != P, "Save clip keybind unset");
                let b = (0, r.useStateFromStores)([E.default], () => E.default.locale),
                    U = n.useMemo(() => [{
                        value: p.ClipsLengthSettings.SECONDS_30,
                        label: x.default.Messages.CLIPS_LENGTH_SECONDS.format({
                            count: 30
                        })
                    }, {
                        value: p.ClipsLengthSettings.MINUTES_1,
                        label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
                            count: 1
                        })
                    }, {
                        value: p.ClipsLengthSettings.MINUTES_2,
                        label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
                            count: 2
                        })
                    }], [b]),
                    y = n.useMemo(() => [{
                        value: A.ApplicationStreamResolutions.RESOLUTION_480,
                        label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                            resolution: A.ApplicationStreamResolutions.RESOLUTION_480
                        })
                    }, {
                        value: A.ApplicationStreamResolutions.RESOLUTION_720,
                        label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                            resolution: A.ApplicationStreamResolutions.RESOLUTION_720
                        })
                    }, {
                        value: A.ApplicationStreamResolutions.RESOLUTION_1080,
                        label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                            resolution: A.ApplicationStreamResolutions.RESOLUTION_1080
                        })
                    }, {
                        value: A.ApplicationStreamResolutions.RESOLUTION_1440,
                        label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                            resolution: A.ApplicationStreamResolutions.RESOLUTION_1440
                        })
                    }, {
                        value: A.ApplicationStreamResolutions.RESOLUTION_SOURCE,
                        label: x.default.Messages.SCREENSHARE_SOURCE
                    }], [b]),
                    B = n.useMemo(() => [{
                        value: A.ApplicationStreamFPS.FPS_15,
                        label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                            fps: A.ApplicationStreamFPS.FPS_15
                        })
                    }, {
                        value: A.ApplicationStreamFPS.FPS_30,
                        label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                            fps: A.ApplicationStreamFPS.FPS_30
                        })
                    }, {
                        value: A.ApplicationStreamFPS.FPS_60,
                        label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                            fps: A.ApplicationStreamFPS.FPS_60
                        })
                    }], [b]),
                    F = n.useCallback(e => {
                        d.default.setKeybind({
                            ...P,
                            shortcut: e
                        })
                    }, [P]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(o.FormSection, {
                        disabled: !e,
                        children: [!e && (0, a.jsx)(f.default, {
                            look: f.InfoBoxLooks.WARNING,
                            className: R.formItem,
                            children: x.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
                                onClick: () => u.default.open(C.UserSettingsSections.VOICE, null, {
                                    scrollPosition: O.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
                                })
                            })
                        }), D === h.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(f.default, {
                            look: f.InfoBoxLooks.WARNING,
                            className: R.formItem,
                            children: x.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
                        }) : null, (0, a.jsx)(o.FormSwitch, {
                            hideBorder: !0,
                            disabled: !e,
                            className: R.formItem,
                            value: t,
                            note: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
                            onChange: e => I.updateClipsEnabled({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                            children: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                        }), e && (0, a.jsx)(f.default, {
                            className: R.formItem,
                            children: x.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
                        })]
                    }), j && (0, _.isWindows)() && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
                            className: v.marginTop20,
                            disabled: !e,
                            children: (0, a.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                disabled: !e,
                                className: R.formItem,
                                value: s,
                                note: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
                                onChange: e => I.updateDecoupledClipsEnabled({
                                    enabled: e,
                                    trackAnalytics: !0
                                }),
                                children: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
                            })
                        })]
                    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
                        className: v.marginTop20,
                        children: [(0, a.jsx)(N.SelectItem, {
                            className: R.formItem,
                            select: I.updateClipsLength,
                            title: x.default.Messages.CLIPS_SETTINGS_LENGTH,
                            note: x.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
                            value: l,
                            options: U
                        }), (0, a.jsx)(N.SelectItem, {
                            className: R.formItem,
                            select: e => I.updateClipsQuality({
                                resolution: e,
                                frameRate: L.frameRate
                            }),
                            title: x.default.Messages.CLIPS_SETTINGS_RESOLUTION,
                            note: x.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
                            value: L.resolution,
                            options: y
                        }), (0, a.jsx)(N.SelectItem, {
                            className: R.formItem,
                            select: e => I.updateClipsQuality({
                                resolution: L.resolution,
                                frameRate: e
                            }),
                            title: x.default.Messages.CLIPS_SETTINGS_FRAMERATE,
                            note: x.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
                            value: L.frameRate,
                            options: B
                        }), (0, a.jsx)(N.InputItem, {
                            className: R.formItem,
                            title: x.default.Messages.CLIPS_SETTINGS_KEYBIND,
                            note: x.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
                            children: (0, a.jsx)("div", {
                                className: M.keyRecorder,
                                children: (0, a.jsx)(c.default, {
                                    defaultValue: P.shortcut,
                                    onChange: F
                                })
                            })
                        })]
                    })]
                })
            }