"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("55620"),
  i = s("294135");
class r extends n.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: n,
      pageSize: l,
      location: r
    } = this.props;
    return (0, a.jsx)(i.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: n,
      location: r,
      pageSize: l
    })
  }
  constructor(...e) {
    super(...e), this.fetchStoreListing = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, n = null != e ? e : s;
      if (null != t) return (0, l.fetchStoreListingById)(t);
      if (null != n) return (0, l.fetchStoreListingForSku)(n);
      if (null != a) return (0, l.fetchStoreListingForApplication)(a)
    }
  }
}
var u = r