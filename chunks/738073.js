            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("851387"),
                d = n("697218"),
                c = n("440351"),
                f = n("701909"),
                h = n("49111"),
                p = n("782340"),
                m = n("42217");
            class E extends l.PureComponent {
                componentDidMount() {
                    let {
                        current: e
                    } = this.scroller;
                    null == e || e.scrollToBottom()
                }
                render() {
                    let {
                        nsfwDisallowed: e
                    } = this.props, t = p.default.Messages.NSFW_DESCRIPTION;
                    t = e ? p.default.Messages.AGE_GATE_NSFW_UNDERAGE_BODY.format({
                        helpURL: f.default.getArticleURL(h.HelpdeskArticles.NSFW_AGE_GATING)
                    }) : p.default.Messages.AGE_GATE_NSFW_DESCRIPTION;
                    let n = e ? (0, a.jsx)(c.default, {
                        onAgree: this.handleAgree,
                        onDisagree: this.handleDisagree,
                        title: p.default.Messages.AGE_GATE_NSFW_UNDERAGE_HEADER,
                        description: t,
                        agreement: null,
                        disagreement: p.default.Messages.BACK,
                        imageClassName: m.ageGatedImage
                    }) : (0, a.jsx)(c.default, {
                        onAgree: this.handleAgree,
                        onDisagree: this.handleDisagree,
                        title: p.default.Messages.NSFW_TITLE,
                        description: t,
                        agreement: p.default.Messages.NSFW_ACCEPT,
                        disagreement: p.default.Messages.NSFW_DECLINE
                    });
                    return (0, a.jsx)(u.AdvancedScroller, {
                        ref: this.scroller,
                        className: m.scroller,
                        children: (0, a.jsx)("div", {
                            className: i(this.props.className, m.wrapper),
                            children: n
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.scroller = l.createRef(), this.handleDisagree = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && o.default.nsfwReturnToSafety(e.id)
                    }, this.handleAgree = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && o.default.nsfwAgree(e.id)
                    }
                }
            }
            var C = r.default.connectStores([d.default], () => {
                var e;
                return {
                    nsfwDisallowed: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
                }
            })(E)