            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("90915"),
                l = n("446674"),
                r = n("450911"),
                o = n("737960"),
                u = n("970366"),
                d = n("2105"),
                c = n("901582"),
                E = n("294135"),
                f = n("404247"),
                _ = n("49111"),
                h = n("128403");
            class C extends s.Component {
                componentDidMount() {
                    this.fetchStoreListing(), (0, u.trackAppUIViewed)("channel_store_listing")
                }
                render() {
                    return null != this.props.skuId ? (0, a.jsx)(c.default, {
                        page: _.AnalyticsPages.CHANNEL_STORE_LISTING,
                        root: !0,
                        children: (0, a.jsx)("div", {
                            className: h.applicationStore,
                            children: (0, a.jsx)(i.Route, {
                                path: "*",
                                render: this.renderApplicationListing
                            })
                        })
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.fetchStoreListing = e => {
                        let {
                            channel: t,
                            inputSkuId: n
                        } = this.props;
                        return null != e ? r.default.fetchChannelStoreListing(t.id, e) : null != n ? r.default.fetchChannelStoreListing(t.id, n) : r.default.fetchChannelStoreListing(t.id)
                    }, this.renderApplicationListing = e => {
                        let {
                            location: t
                        } = e, {
                            channel: n,
                            skuId: s,
                            width: i
                        } = this.props;
                        return (0, a.jsx)(E.default, {
                            channel: n,
                            inputSkuId: s,
                            fetchStoreListing: this.fetchStoreListing,
                            location: t,
                            pageSize: (0, f.getPageSize)(i)
                        })
                    }
                }
            }
            var T = (0, o.default)(l.default.connectStores([d.default], e => {
                let {
                    channel: t,
                    inputSkuId: n
                } = e;
                return {
                    skuId: null != n ? n : d.default.getSkuIdForChannel(t.id)
                }
            })(C))