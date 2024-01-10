            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("759843"),
                i = n("77078"),
                l = n("79112"),
                r = n("945330"),
                o = n("243632"),
                u = n("49111"),
                d = n("994428"),
                c = n("782340"),
                E = n("436815");
            let f = (e, t) => ({
                body: e.messages.completionTooltip(t),
                imgSrc: e.assets.tooltipSrc,
                imgStyle: E.defaultDropImage
            });

            function _(e) {
                let {
                    markAsDismissed: t,
                    partnerGame: n
                } = e;
                (0, o.useTrackDropsImpression)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_COMPLETION);
                let _ = (0, o.useDropsExperiment)(n);
                if (null == _) return null;
                let {
                    body: h,
                    imgSrc: C,
                    imgStyle: T
                } = f(_.drop, _.config.streamLengthRequirement), I = () => {
                    t(d.ContentDismissActionType.DISMISS)
                };
                return (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)("img", {
                        src: C,
                        alt: "",
                        className: T
                    }), (0, a.jsx)(i.Clickable, {
                        className: E.buttonClose,
                        "aria-label": c.default.Messages.CLOSE,
                        onClick: I,
                        children: (0, a.jsx)(r.default, {
                            width: 16,
                            height: 16,
                            className: E.closeIcon
                        })
                    }), (0, a.jsx)(i.Heading, {
                        className: E.title,
                        variant: "heading-md/extrabold",
                        children: c.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        className: E.subTitle,
                        children: h
                    }), (0, a.jsx)(i.Button, {
                        look: i.Button.Looks.INVERTED,
                        fullWidth: !0,
                        onClick: () => {
                            l.default.open(u.UserSettingsSections.INVENTORY), t(d.ContentDismissActionType.PRIMARY)
                        },
                        children: c.default.Messages.REDEEM
                    }), (0, a.jsx)(i.Button, {
                        className: E.linkButtonContainer,
                        innerClassName: E.linkButton,
                        onClick: I,
                        look: i.Button.Looks.LINK,
                        fullWidth: !0,
                        color: i.Button.Colors.WHITE,
                        children: c.default.Messages.NOT_NOW
                    }), (0, a.jsx)("div", {
                        className: E.pointer
                    })]
                })
            }