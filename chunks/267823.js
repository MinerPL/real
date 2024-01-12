            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("305122"),
                o = s("78581"),
                d = s("476765"),
                u = s("701909"),
                c = s("829536"),
                S = s("49111"),
                E = s("782340"),
                f = s("933661");
            let T = (0, d.uid)();

            function m() {
                let e = (0, o.getAmplitudinalSoundboardVolume)();
                return (0, a.jsxs)("div", {
                    className: l(f.soundboardRow),
                    children: [(0, a.jsxs)("div", {
                        className: l(f.soundboardColumn, f.leftColumn),
                        children: [(0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            className: f.soundboardTitle,
                            children: E.default.Messages.USER_SETTINGS_SOUNDBOARD
                        }), (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: E.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({
                                helpCenterArticle: u.default.getArticleURL(S.HelpdeskArticles.SOUNDBOARD)
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: l(f.soundboardColumn, f.rightColumn),
                        children: [(0, a.jsx)(i.FormTitle, {
                            id: T,
                            tag: i.FormTitleTags.H5,
                            className: f.soundboardSubtitle,
                            children: E.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
                        }), (0, a.jsx)(i.Slider, {
                            initialValue: (0, c.amplitudeToPerceptual)(e),
                            maxValue: 100,
                            onValueRender: e => "".concat(e.toFixed(0), "%"),
                            asValueChanges: function(t) {
                                e = (0, c.perceptualToAmplitude)(t), (0, r.updateUserSoundboardVolume)(e)
                            },
                            "aria-labelledby": T
                        })]
                    })]
                })
            }