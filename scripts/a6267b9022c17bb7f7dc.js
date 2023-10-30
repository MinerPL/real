(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21873"], {
        664654: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return l
                }
            });
            var n = t("599110"),
                s = t("49111");

            function l(e) {
                let {
                    rating: a = null
                } = e;
                n.default.track(s.AnalyticEvents.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
                    rating: a
                })
            }
        },
        123592: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return S
                }
            });
            var n = t("37983"),
                s = t("884691"),
                l = t("77078"),
                r = t("194141"),
                i = t("476765"),
                d = t("664654"),
                o = t("49111"),
                c = t("200521"),
                E = t("782340"),
                u = t("576260");
            let T = [{
                className: u.emojiThumbsUp,
                rating: c.FeedbackRating.GOOD,
                classNameSelected: u.selected
            }, {
                className: u.emojiThumbsDown,
                rating: c.FeedbackRating.BAD,
                classNameSelected: u.selected
            }];

            function S(e) {
                let [a, c] = s.useState(null), S = (0, i.useUID)();
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-labelledby": S,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: u.headerContainer,
                        children: [(0, n.jsx)(l.Heading, {
                            id: S,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: E.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: u.ratingBody,
                            children: E.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
                        })]
                    }), (0, n.jsx)(l.ModalContent, {
                        className: u.modalBody,
                        children: (0, n.jsx)(r.RatingsSelector, {
                            ratingConfigs: T,
                            className: u.ratingsSelector,
                            selectedRating: a,
                            onChangeRating: function(a) {
                                var s;
                                c(a), null != (s = a) && ((0, d.default)({
                                    rating: s
                                }), e.onClose(), (0, l.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await t.el("874600").then(t.bind(t, "874600"));
                                    return a => (0, n.jsx)(e, {
                                        body: E.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
                                        ...a
                                    })
                                }))
                            }
                        })
                    }), (0, n.jsx)(l.ModalFooter, {
                        className: u.ratingsFooter,
                        children: (0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: E.default.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
                                safetyCenterUrl: o.MarketingURLs.SAFETY_CENTER
                            })
                        })
                    })]
                })
            }
        }
    }
]);