            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                i = n("446674"),
                r = n("872717"),
                u = n("77078"),
                o = n("457108"),
                d = n("970366"),
                c = n("766274"),
                f = n("476108"),
                E = n("124969"),
                I = n("49111"),
                _ = n("853994"),
                p = n("782340"),
                h = n("926622");
            i.default.initialize();
            class N extends a.PureComponent {
                componentDidMount() {
                    let e = (0, o.default)(this.props.location),
                        t = (0, l.parse)(this.props.location.search);
                    r.default.post({
                        url: I.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
                        body: {
                            token: e,
                            pixel_uuid: t.hash,
                            category: t.category,
                            email_type: t.email_type
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: {
                                user: n
                            }
                        } = e, s = new c.default(n);
                        this.setState({
                            success: !0,
                            busy: !1,
                            user: s,
                            category: t.category
                        })
                    }, () => this.setState({
                        success: !1,
                        busy: !1
                    })), (0, d.trackAppUIViewed)("disable_email_notifications")
                }
                renderBusy() {
                    return (0, s.jsx)(E.default, {
                        children: (0, s.jsx)(E.AuthSpinner, {})
                    })
                }
                renderCategorySuccess(e, t) {
                    let {
                        defaultRoute: n,
                        transitionTo: a
                    } = this.props, l = p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                        category: t
                    });
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: l
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop20,
                            onClick: () => a(n),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop8,
                            color: E.Button.Colors.LINK,
                            look: E.Button.Looks.LINK,
                            onClick: () => a(I.Routes.SETTINGS("notifications", _.EMAILS_SUBSECTION)),
                            children: p.default.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                        })]
                    })
                }
                renderSuccess() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props, {
                        user: n,
                        category: a
                    } = this.state;
                    if (null != a) {
                        let e = _.EmailCategoriesList.find(e => e.category === a);
                        if (null != e) return this.renderCategorySuccess(a, e.label())
                    }
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Avatar, {
                            src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                            size: u.AvatarSizes.DEPRECATED_SIZE_100,
                            className: h.marginBottom20
                        }), (0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop40,
                            onClick: () => t(e),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderError() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props;
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Image, {
                            src: n("2862"),
                            className: h.marginBottom20
                        }), (0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop40,
                            onClick: () => t(e),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                render() {
                    let {
                        busy: e,
                        success: t
                    } = this.state;
                    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
                }
                constructor(...e) {
                    super(...e), this.state = {
                        busy: !0,
                        success: !1,
                        user: null,
                        category: null
                    }
                }
            }
            N.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var m = i.default.connectStores([f.default], () => ({
                defaultRoute: f.default.defaultRoute
            }))(N)