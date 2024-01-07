            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("55620"),
                l = s("294135");
            class i extends n.Component {
                componentDidMount() {
                    this.fetchStoreListing()
                }
                render() {
                    let {
                        skuId: e,
                        applicationId: t,
                        slug: s,
                        storeListingId: n,
                        pageSize: r,
                        location: i
                    } = this.props;
                    return (0, a.jsx)(l.default, {
                        inputSkuId: e,
                        applicationId: t,
                        fetchStoreListing: this.fetchStoreListing,
                        slug: s,
                        storeListingId: n,
                        location: i,
                        pageSize: r
                    })
                }
                constructor(...e) {
                    super(...e), this.fetchStoreListing = e => {
                        let {
                            storeListingId: t,
                            skuId: s,
                            applicationId: a
                        } = this.props, n = null != e ? e : s;
                        if (null != t) return (0, r.fetchStoreListingById)(t);
                        if (null != n) return (0, r.fetchStoreListingForSku)(n);
                        if (null != a) return (0, r.fetchStoreListingForApplication)(a)
                    }
                }
            }
            var u = i