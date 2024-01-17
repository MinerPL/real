"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("465527"),
  r = s("86621"),
  u = s("299285"),
  o = s("539938"),
  d = s("393414"),
  c = s("552712"),
  _ = s("454589"),
  E = s("49111"),
  I = s("870103");
class T extends n.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: s
    } = this.props;
    null != t && !s && null != e && (0, i.fetchSKU)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, s = [], n = null;
    if (null != e) {
      let a = E.Routes.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      n = a, null != t && s.push({
        id: E.Routes.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), s.push({
        id: a,
        label: e.name
      })
    }
    return (0, a.jsx)(_.default, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: s,
      activeId: n
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        sku: t
      } = this.props;
      (0, d.transitionTo)(e.id, {
        state: {
          analyticsSource: {
            object: E.AnalyticsObjects.NAVIGATION_LINK,
            section: E.AnalyticsSections.NAVIGATION,
            page: null == t ? E.AnalyticsPages.STORE_DIRECTORY_BROWSE : E.AnalyticsPages.STORE_LISTING
          }
        }
      })
    }, this.renderCustomBreadcrumb = (e, t) => (0, a.jsx)(o.default.Title, {
      className: t ? null : I.breadcrumb,
      muted: !t,
      children: e.label
    })
  }
}
var f = (0, r.default)(l.default.connectStores([u.default, c.default], e => {
  let {
    sku: t
  } = e, s = null != t ? u.default.getApplication(t.applicationId) : null, a = null != s && null != s.primarySkuId && s.primarySkuId !== t.id ? s.primarySkuId : null;
  return {
    primarySkuId: a,
    isFetchingPrimarySku: null != a && c.default.isFetching(a),
    primarySku: null != a ? c.default.get(a) : null
  }
})(T))