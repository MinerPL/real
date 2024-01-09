            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("281071"),
                i = n("65597"),
                r = n("77078"),
                o = n("716241"),
                u = n("42203"),
                d = n("191814"),
                c = n("945330"),
                f = n("83900"),
                h = n("404008"),
                C = n("701909"),
                p = n("639440"),
                m = n("673844"),
                E = n("49111"),
                g = n("782340"),
                S = n("64664");

            function A(e) {
                let {
                    threadId: t
                } = e, n = (0, i.default)([u.default], () => u.default.getChannel(t)), A = (0, i.default)([u.default], () => u.default.getChannel(null == n ? void 0 : n.parent_id)), _ = s.useCallback(() => {
                    null != n && null != A && ((0, o.trackWithMetadata)(E.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED, {
                        media_post_id: n.id
                    }), (0, l.copy)((0, h.getChannelLinkToCopy)(n, A)))
                }, [n, A]);
                return (0, a.jsxs)("div", {
                    className: S.sharePromptContainer,
                    children: [(0, a.jsx)(m.default, {}), (0, a.jsxs)("div", {
                        className: S.sharePromptContent,
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
                                helpArticleUrl: C.default.getCreatorSupportArticleURL(E.HelpdeskArticles.MEDIA_CHANNEL)
                            })
                        }), (0, a.jsx)(d.default, {
                            size: 4
                        }), (0, a.jsxs)(r.Button, {
                            className: S.sharePromptCta,
                            innerClassName: S.ctaContent,
                            onClick: _,
                            children: [(0, a.jsx)(f.default, {
                                height: "16px",
                                width: "16px"
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA
                            })]
                        })]
                    }), (0, a.jsx)(r.Clickable, {
                        className: S.closeButton,
                        onClick: () => {
                            (0, p.dismissMediaPostSharePrompt)(t)
                        },
                        "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                        children: (0, a.jsx)(c.default, {
                            height: "15px",
                            width: "15px"
                        })
                    })]
                })
            }