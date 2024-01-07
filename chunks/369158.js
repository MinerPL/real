            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("36694"),
                o = s("987772"),
                d = s("782340"),
                u = s("442316");

            function c(e) {
                let {
                    className: t,
                    enabled: s,
                    previewCTA: n,
                    onPreview: c,
                    onToggle: E,
                    animateStatus: _,
                    firstLine: T,
                    secondLine: I,
                    disabled: S
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(t, u.enableContainer),
                    children: [s ? (0, a.jsx)(r.default, {
                        width: 24,
                        height: 24,
                        className: l(u.activeCircle, {
                            [u.animate]: _
                        })
                    }) : (0, a.jsx)(o.default, {
                        width: 24,
                        height: 24,
                        className: l(u.editCircle, {
                            [u.animate]: _
                        })
                    }), (0, a.jsxs)("div", {
                        className: u.enableDescription,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: T
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: I
                        })]
                    }), (0, a.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [null == c ? null : (0, a.jsx)(i.Button, {
                            className: u.previewButton,
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.SMALL,
                            onClick: c,
                            disabled: S,
                            color: i.Button.Colors.PRIMARY,
                            children: null != n ? n : d.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PREVIEW
                        }), (0, a.jsx)(i.Button, {
                            disabled: null == E || S,
                            size: i.Button.Sizes.SMALL,
                            color: s ? i.Button.Colors.RED : i.Button.Colors.BRAND,
                            onClick: E,
                            children: s ? d.default.Messages.DISABLE : d.default.Messages.ENABLE
                        })]
                    })]
                })
            }