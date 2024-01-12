            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("819855"),
                d = s("77078"),
                u = s("629109"),
                c = s("42887"),
                S = s("145131"),
                E = s("599110"),
                f = s("773336"),
                T = s("50885"),
                m = s("161778"),
                _ = s("225849"),
                g = s("397336"),
                h = s("49111"),
                I = s("353927"),
                N = s("782340"),
                p = s("926622");
            let C = s("305213"),
                A = s("629551");

            function O(e) {
                u.default.setAV1Enabled(e), E.default.track(h.AnalyticEvents.VOICE_SETTINGS_CHANGED, {
                    av1_disabled: !e,
                    av1_enabled: e
                })
            }

            function x() {
                let {
                    experimentalEncoders: e
                } = (0, r.useStateFromStoresObject)([c.default], () => ({
                    experimentalEncoders: c.default.getExperimentalEncoders()
                }));
                return "stable" !== T.default.releaseChannel && c.default.isExperimentalEncodersSupported() ? (0, a.jsx)(d.FormSwitch, {
                    className: i(p.marginTop8, p.marginBottom20),
                    value: e,
                    onChange: e => u.default.setExperimentalEncoders(e),
                    disabled: !1,
                    children: N.default.Messages.EXPERIMENTAL_ENCODERS
                }) : null
            }

            function R() {
                let e = (0, r.useStateFromStores)([m.default], () => m.default.theme),
                    {
                        openH264: t,
                        hardwareH264: s,
                        supportsOpenH264: l,
                        av1Enabled: E
                    } = (0, r.useStateFromStoresObject)([c.default], () => ({
                        openH264: c.default.getOpenH264(),
                        hardwareH264: c.default.getHardwareH264(),
                        supportsOpenH264: c.default.supports(I.Features.OPEN_H264),
                        av1Enabled: c.default.getAv1Enabled()
                    })),
                    T = n.useRef(null);
                return (0, _.default)(T, g.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.FormSection, {
                        className: p.marginBottom20,
                        title: N.default.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
                        children: (0, a.jsx)(d.FormNotice, {
                            className: p.marginBottom20,
                            type: d.FormNoticeTypes.PRIMARY,
                            imageData: {
                                src: (0, o.isThemeLight)(e) ? C : A,
                                width: 70,
                                height: 40
                            },
                            align: S.default.Align.CENTER,
                            body: N.default.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
                        })
                    }), l && (0, a.jsxs)(d.FormSection, {
                        className: p.marginBottom20,
                        title: N.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
                        children: [(0, a.jsx)(d.FormSwitch, {
                            className: i(p.marginTop8, p.marginBottom20),
                            value: t,
                            onChange: e => {
                                u.default.setOpenH264(e), u.default.setHardwareH264(e)
                            },
                            disabled: !1,
                            note: N.default.Messages.FORM_HELP_OPEN_H264,
                            children: N.default.Messages.USER_SETTINGS_VOICE_OPEN_H264
                        }), (0, a.jsx)("div", {
                            style: {
                                scrollMarginTop: "48px"
                            },
                            ref: T
                        }), (0, a.jsx)(d.FormSwitch, {
                            className: i(p.marginTop8, p.marginBottom20),
                            value: s,
                            onChange: e => {
                                (0, f.isWindows)() && u.default.setAV1Enabled(e && E), u.default.setHardwareH264(e)
                            },
                            disabled: !t,
                            note: N.default.Messages.FORM_HELP_HARDWARE_H264,
                            children: N.default.Messages.USER_SETTINGS_VOICE_HARDWARE_H264
                        }), (0, f.isWindows)() && (0, a.jsx)(d.FormSwitch, {
                            className: i(p.marginTop8, p.marginBottom20),
                            value: (0, f.isWindows)() ? E && s : E,
                            onChange: e => {
                                (0, f.isWindows)() ? O(e && s): O(e)
                            },
                            note: (0, f.isWindows)() && N.default.Messages.FORM_HELP_HARDWARE_AV1,
                            disabled: (0, f.isWindows)() && !s,
                            children: N.default.Messages.USER_SETTINGS_VOICE_AV1
                        }), (0, a.jsx)(x, {})]
                    })]
                })
            }