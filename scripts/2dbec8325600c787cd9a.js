(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88461"], {
        994509: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return C
                }
            }), t("222007");
            var a = t("37983"),
                r = t("884691"),
                n = t("872717"),
                l = t("992629"),
                i = t("145131"),
                d = t("364719"),
                o = t("599110"),
                c = t("49111"),
                u = t("782340"),
                N = t("202487"),
                f = t("120891"),
                h = t("265369"),
                g = t("799557");
            class p extends r.PureComponent {
                componentDidMount() {
                    o.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: null,
                        current_step: "landing page",
                        platform_type: c.PlatformTypes.XBOX
                    })
                }
                handleLinkAccountPressed() {
                    n.default.get({
                        url: c.Endpoints.CONNECTIONS_AUTHORIZE_CONTINUATION(c.PlatformTypes.XBOX),
                        oldFormErrors: !0
                    }).then(e => {
                        window.location.href = e.body.url
                    }).catch(e => {
                        let s;
                        try {
                            s = e.body.message
                        } catch (t) {
                            s = String(e)
                        }
                        o.default.track(c.AnalyticEvents.ACCOUNT_LINK_FAILED, {
                            error_message: s,
                            status_code: e.status,
                            link_method: "pin",
                            current_step: "landing page",
                            platform_type: c.PlatformTypes.XBOX
                        }), this.setState({
                            errorMessage: s
                        })
                    })
                }
                goBack() {
                    window.location = c.Routes.CONNECTIONS(c.PlatformTypes.XBOX)
                }
                renderXboxButtons() {
                    return (0, a.jsxs)("div", {
                        className: f.xboxButtonContainer,
                        children: [(0, a.jsx)(l.default.Button, {
                            type: l.default.Button.A,
                            text: u.default.Messages.XBOX_LINK,
                            style: f.gamepadButton,
                            onClick: this.handleLinkAccountPressed
                        }), (0, a.jsx)(l.default.Button, {
                            type: l.default.Button.B,
                            text: u.default.Messages.CANCEL,
                            style: f.gamepadButton,
                            onClick: this.goBack
                        }), this.renderErrorMessage()]
                    })
                }
                renderErrorMessage() {
                    let {
                        errorMessage: e
                    } = this.state;
                    return null == e ? null : (0, a.jsxs)("div", {
                        className: f.errorMessageContainer,
                        children: [(0, a.jsx)(d.default, {
                            className: f.errorMessageIcon
                        }), (0, a.jsx)("div", {
                            className: f.errorMessage,
                            children: e
                        })]
                    })
                }
                renderContent() {
                    return (0, a.jsxs)("div", {
                        className: f.pageWrapper,
                        children: [(0, a.jsx)("img", {
                            alt: "Discord",
                            className: f.logo,
                            src: h
                        }), (0, a.jsxs)(i.default, {
                            className: f.container,
                            justify: i.default.Justify.CENTER,
                            align: i.default.Align.CENTER,
                            children: [(0, a.jsxs)(i.default.Child, {
                                className: N.leftPanel,
                                children: [(0, a.jsx)("div", {
                                    className: N.sectionTitle,
                                    children: u.default.Messages.DISCORD_RICH_PRESENCE
                                }), (0, a.jsx)("div", {
                                    className: N.sectionSubtitle,
                                    children: u.default.Messages.LINK_YOUR_XBOX_ACCOUNT_1
                                }), (0, a.jsx)("div", {
                                    className: N.sectionSubtitle,
                                    children: u.default.Messages.LINK_YOUR_XBOX_ACCOUNT_2
                                }), this.renderXboxButtons()]
                            }), (0, a.jsx)(i.default, {
                                className: f.rightPanel,
                                justify: i.default.Justify.END,
                                align: i.default.Align.CENTER,
                                children: (0, a.jsx)("img", {
                                    alt: "",
                                    className: f.image,
                                    src: g
                                })
                            })]
                        })]
                    })
                }
                render() {
                    return (0, a.jsx)(l.default, {
                        onAPressed: this.handleLinkAccountPressed,
                        onBPressed: this.goBack,
                        children: this.renderContent()
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        errorMessage: null
                    }
                }
            }
            var C = p
        }
    }
]);