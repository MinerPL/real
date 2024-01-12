            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("446674"),
                r = s("77078"),
                o = s("52289"),
                d = s("79112"),
                u = s("49671"),
                c = s("102985"),
                S = s("773336"),
                E = s("49111"),
                f = s("782340"),
                T = s("117592"),
                m = s("926622");

            function _() {
                var e, t, n;
                let {
                    enabled: _,
                    autoToggle: g,
                    hideInstantInvites: h,
                    hidePersonalInformation: I,
                    disableSounds: N,
                    disableNotifications: p,
                    enableContentProtection: C
                } = (0, i.useStateFromStoresObject)([c.default], () => ({
                    ...c.default.getSettings()
                })), A = (e, t) => {
                    o.default.update({
                        [e]: t
                    })
                }, O = null !== (n = null === u.default || void 0 === u.default ? void 0 : null === (t = u.default.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
                return (0, a.jsxs)(r.FormSection, {
                    className: T.container,
                    tag: r.FormTitleTags.H1,
                    title: f.default.Messages.STREAMER_MODE,
                    children: [(0, a.jsx)(r.FormNotice, {
                        className: m.marginBottom40,
                        iconClassName: T.noticeIcon,
                        type: r.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: s("471208"),
                            width: 184,
                            height: 110,
                            position: r.FormNoticeImagePositions.RIGHT
                        },
                        title: f.default.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
                        body: f.default.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
                            streamkitURL: E.MarketingURLs.STREAMKIT
                        })
                    }), (0, a.jsx)(r.FormSwitch, {
                        value: _,
                        onChange: e => A("enabled", e),
                        note: f.default.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
                            onClick: () => {
                                d.default.setSection(E.UserSettingsSections.KEYBINDS)
                            }
                        }),
                        children: f.default.Messages.ENABLE_STREAMER_MODE_LABEL
                    }), (() => {
                        if (S.isPlatformEmbedded) return (0, a.jsx)(r.FormSwitch, {
                            value: g,
                            onChange: e => A("autoToggle", e),
                            note: f.default.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
                            children: f.default.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
                        })
                    })(), (0, a.jsx)(r.FormTitle, {
                        className: l(m.marginTop40, m.marginBottom8),
                        children: f.default.Messages.OPTIONS
                    }), (0, a.jsx)(r.FormSwitch, {
                        value: I,
                        onChange: e => A("hidePersonalInformation", e),
                        note: f.default.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
                        children: f.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL
                    }), (0, a.jsx)(r.FormSwitch, {
                        value: h,
                        onChange: e => A("hideInstantInvites", e),
                        note: f.default.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
                        children: f.default.Messages.HIDE_INSTANT_INVITES_LABEL
                    }), (0, a.jsx)(r.FormSwitch, {
                        value: N,
                        onChange: e => A("disableSounds", e),
                        note: f.default.Messages.DISABLE_SOUNDS_DESCRIPTION,
                        children: f.default.Messages.DISABLE_SOUNDS_LABEL
                    }), (0, a.jsx)(r.FormSwitch, {
                        value: p,
                        onChange: e => A("disableNotifications", e),
                        note: f.default.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
                        children: f.default.Messages.DISABLE_NOTIFICATIONS_LABEL
                    }), O && (0, a.jsx)(r.FormSwitch, {
                        value: C,
                        onChange: e => A("enableContentProtection", e),
                        note: f.default.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
                        children: f.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
                    })]
                })
            }