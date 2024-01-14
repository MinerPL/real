"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var s = l("37983"),
  a = l("884691"),
  n = l("446674"),
  r = l("77078"),
  i = l("465527"),
  c = l("846239"),
  o = l("299285"),
  d = l("552712"),
  u = l("145131"),
  h = l("551184"),
  p = l("599110"),
  A = l("733835"),
  f = l("391294"),
  L = l("49111"),
  m = l("184048"),
  I = l("36662");
class S extends a.Component {
  componentDidMount() {
    let {
      application: e,
      skuId: t,
      sku: l,
      onClose: s
    } = this.props;
    null == l ? (0, i.fetchSKU)(e.id, t).catch(e => s(e.message)) : this.track(l)
  }
  componentDidUpdate(e) {
    let {
      sku: t
    } = this.props;
    t !== e.sku && null != t && this.track(t)
  }
  track(e) {
    let {
      analyticsSource: t
    } = this.props;
    p.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Application Entitlement Confirmation",
      source: t,
      application_id: e.applicationId,
      sku_id: e.id
    })
  }
  render() {
    let {
      sku: e,
      application: t,
      onClose: l,
      isIAP: a,
      transitionState: n
    } = this.props, i = null != e ? (0, f.getSkuHeaderText)(a, e.type) : null;
    return (0, s.jsxs)(r.ModalRoot, {
      transitionState: n,
      size: r.ModalSize.SMALL,
      "aria-label": i,
      className: I.modal,
      children: [(0, s.jsx)(c.default, {
        application: t,
        splashSize: 880
      }), (0, s.jsx)(h.default.Content, {
        className: I.content,
        children: (0, s.jsxs)(u.default, {
          direction: u.default.Direction.VERTICAL,
          className: m.confirmContent,
          children: [(0, s.jsx)(r.ModalCloseButton, {
            onClick: () => l(),
            className: m.confirmCloseButton
          }), null != e ? (0, s.jsx)(A.default, {
            application: t,
            sku: e,
            isIAP: a,
            onClose: () => l()
          }) : null]
        })
      })]
    })
  }
}
var E = n.default.connectStores([d.default, o.default], e => {
  let {
    applicationId: t,
    skuId: l
  } = e;
  return {
    application: o.default.getApplication(t),
    sku: d.default.get(l)
  }
})(S)