"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  },
  StoreEmbedWithoutDimensions: function() {
    return P
  }
}), n("222007"), n("70102");
var s = n("37983"),
  l = n("884691"),
  a = n("90915"),
  i = n("446674"),
  r = n("77078"),
  o = n("55620"),
  u = n("901582"),
  d = n("658457"),
  c = n("359606"),
  f = n("883610"),
  E = n("4919"),
  _ = n("86621"),
  T = n("737960"),
  I = n("299285"),
  m = n("686470"),
  N = n("290877"),
  p = n("552712"),
  S = n("698041"),
  A = n("271560"),
  C = n("49111"),
  h = n("782340"),
  g = n("640492");
class M extends l.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      },
      analyticsSection: t
    } = this.props;
    return {
      ...e,
      section: null != t ? t : C.AnalyticsSections.APPLICATION_EMBED,
      object: C.AnalyticsObjects.CARD
    }
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == e || null == n) && (0, o.fetchStoreListingForSku)(t)
  }
  renderViewInStoreButton() {
    return (0, s.jsx)(r.Button.Link, {
      to: this.getStoreListingLocation(),
      className: g.actionButton,
      color: r.Button.Colors.GREEN,
      size: r.Button.Sizes.SMALL,
      children: h.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: l,
      renderFallback: i
    } = this.props, r = n > E.HORIZONTAL_EMBED_BREAKPOINT;
    if (null == e || null == t) return l ? i() : (0, s.jsx)(E.ResponsiveLoadingEmbedTile, {
      isHorizontal: r
    });
    return e.productLine === C.SKUProductLines.COLLECTIBLES ? (0, s.jsx)(u.default, {
      section: C.AnalyticsSections.APPLICATION_EMBED,
      children: this.renderApplicationTile(e, t)
    }) : (0, s.jsx)(u.default, {
      section: C.AnalyticsSections.APPLICATION_EMBED,
      children: (0, s.jsx)(a.Link, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(e, t)
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      playing: !1,
      muted: !0
    }, this.handleToggleMute = () => {
      this.setState({
        muted: !this.state.muted
      })
    }, this.handleMouseEnter = () => {
      this.setState({
        playing: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        playing: !1
      })
    }, this.getStoreListingLocation = () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, A.getStoreListingLocation)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }, this.handleActionButtonClick = e => e.preventDefault(), this.handleBuyButtonClick = e => e.preventDefault(), this.handleLinkClick = e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }, this.renderApplicationTile = (e, t) => {
      let {
        inLibrary: n,
        width: l,
        renderCustomTitle: a,
        renderCustomTagline: i,
        renderCustomMedia: r
      } = this.props, {
        playing: o,
        muted: u
      } = this.state, d = l > E.HORIZONTAL_EMBED_BREAKPOINT;
      return (0, s.jsx)(f.default, {
        sku: e,
        storeListing: t,
        playing: o,
        muted: u,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: a,
        renderCustomTagline: i,
        renderCustomMedia: r,
        isHorizontal: d,
        isEmbed: !0
      })
    }, this.renderActions = e => {
      let {
        inLibrary: t,
        application: n,
        skuId: l,
        libraryApplication: a,
        renderCustomActions: i
      } = this.props;
      if (null != i) return (0, s.jsx)("div", {
        className: g.tileActions,
        children: i()
      });
      if (null == n) return null;
      let o = null != n && n.primarySkuId === l,
        u = null != a && a.hasFlag(C.LibraryApplicationFlags.HIDDEN);
      return (0, s.jsxs)("div", {
        className: g.tileActions,
        children: [!o || u ? this.renderViewInStoreButton() : (0, s.jsx)(d.default, {
          application: n,
          customDisabledColor: r.Button.Colors.PRIMARY,
          size: r.Button.Sizes.SMALL,
          className: g.actionButton,
          source: C.AnalyticsLocations.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !u || e.premium ? null : (0, s.jsx)(c.default, {
          type: c.default.Types.EMBED,
          sku: e,
          inLibrary: !1
        })]
      })
    }
  }
}
M.defaultProps = {
  renderFallback: C.NOOP
};
let O = [p.default, N.default, m.default, S.default];

function R(e) {
  let {
    skuId: t
  } = e, n = p.default.get(t), s = null != n ? I.default.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: s,
    fetchFailed: p.default.didFetchingSkuFail(t),
    inLibrary: null != n && m.default.hasApplication(n.applicationId, n.applicationId, !0),
    storeListing: null != n ? S.default.getForSKU(n.id) : null,
    libraryApplication: null != n ? m.default.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
  }
}
let L = (0, T.default)((0, _.default)(M));
var v = i.default.connectStores(O, R)(L);
let P = (0, _.default)(i.default.connectStores(O, R)(M))