            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("819855"),
                i = l("77078"),
                r = l("404118"),
                o = l("611183"),
                d = l("841098"),
                u = l("145131"),
                c = l("701909"),
                f = l("421475"),
                m = l("49111"),
                I = l("782340"),
                N = l("788933"),
                T = l("277482"),
                E = l("57213");

            function h(e) {
                let t, {
                        guild: l,
                        channel: h,
                        customWebhooks: g,
                        editedWebhook: p,
                        selectableWebhookChannels: S,
                        refToScroller: O,
                        errors: _,
                        canNavigate: A
                    } = e,
                    C = (0, d.default)(),
                    [x, R] = a.useState(null),
                    [M, v] = a.useState(null);
                if (null != h) t = h;
                else {
                    let e = Object.values(S);
                    t = e.length > 0 ? e[0] : null
                }
                let L = a.useCallback(async () => {
                    if (A() && null !== t) {
                        let e = await o.default.create(l.id, t.id).catch(e => {
                            let {
                                body: t,
                                status: l
                            } = e;
                            return t && t.code === m.AbortCodes.TOO_MANY_WEBHOOKS ? r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
                            }) : 429 === l ? r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
                            }) : r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                            }), null
                        });
                        null != e && (v(e.id), R(e))
                    }
                }, [A, t, l]);
                a.useEffect(() => {
                    0 === g.length && L()
                }, []);
                let j = null !== t;
                return (0, n.jsxs)(i.FormSection, {
                    children: [(0, n.jsx)(i.FormText, {
                        type: i.FormTextTypes.DESCRIPTION,
                        children: I.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                            helpdeskArticle: c.default.getArticleURL(m.HelpdeskArticles.WEBHOOKS),
                            developersArticle: m.MarketingURLs.API_DOCS_WEBHOOKS
                        })
                    }), (0, n.jsx)(i.FormDivider, {
                        className: N.headerDivider
                    }), g.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i.Button, {
                            className: N.createButton,
                            size: i.Button.Sizes.SMALL,
                            disabled: !j,
                            onClick: L,
                            children: I.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE
                        }), (0, n.jsx)(f.default, {
                            webhooks: g,
                            editedWebhook: p,
                            selectableWebhookChannels: S,
                            lastCreatedWebhookId: null == x ? void 0 : x.id,
                            errors: _,
                            canNavigate: A
                        })]
                    }) : function(e, t, l) {
                        let a = (0, s.isThemeDark)(e) ? T : E;
                        return (0, n.jsxs)(u.default, {
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: N.emptyStateImage
                            }), (0, n.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
                            }), (0, n.jsx)(i.Button, {
                                className: N.emptyStateButton,
                                disabled: !t,
                                onClick: l,
                                children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
                            })]
                        })
                    }(C, j, L)]
                })
            }