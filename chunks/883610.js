"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  o = n("790219"),
  u = n("359606"),
  d = n("206100"),
  c = n("85871"),
  f = n("231561"),
  E = n("347374"),
  _ = n("271560"),
  T = n("4919"),
  I = n("458331"),
  m = n("49111"),
  N = n("384560");
class p extends l.PureComponent {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: l,
      renderCustomTagline: a,
      renderCustomTitle: i,
      renderCustomMedia: r,
      isEmbed: o
    } = this.props, u = o ? T.ResponsiveEmbedTile : I.default;
    return (0, s.jsx)(u, {
      className: l,
      renderMedia: null != r ? r : this.renderMedia,
      renderTitle: null != i ? i : () => e.name,
      renderTagline: null != a ? a : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), this.renderActions = () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: l,
        showBuyInline: a
      } = this.props, i = (a || !t.requiresPayment) && !e, c = i && l;
      return null != n ? n() : (0, s.jsxs)("div", {
        className: N.priceOs,
        children: [(0, s.jsx)(u.default, {
          type: u.default.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: c ? N.tilePriceWithVisibleBuyButton : N.tilePrice
        }), (0, s.jsx)(d.OperatingSystemSection, {
          systems: [m.OperatingSystems.WINDOWS],
          className: N.platform
        }), i ? (0, s.jsx)(o.default, {
          skuId: t.id,
          applicationId: t.applicationId,
          size: r.Button.Sizes.SMALL,
          shouldRenderPrice: !0,
          onStoreListing: !0,
          onClick: e => e.preventDefault(),
          className: c ? N.tileBuyButtonVisible : N.tileBuyButton
        }) : null]
      })
    }, this.renderMedia = () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: a,
        sku: r,
        isHorizontal: o,
        storeListing: u
      } = this.props;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(E.default, {
          className: i(N.splashContainer, {
            [N.splashContainerHorizontal]: o
          }),
          video: null != u.previewVideo ? (0, _.getAssetURL)(r.applicationId, u.previewVideo) : void 0,
          image: null != u.thumbnail ? (0, _.getAssetURL)(r.applicationId, u.thumbnail, 600) : null,
          title: r.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: a,
          splashClassName: N.splashVideo,
          splashPlaceholderClassName: N.splashPlaceholder
        }), r.exclusive ? (0, s.jsx)(c.default, {
          className: i(N.exclusiveRegular, {
            [N.exclusivePlaying]: e
          })
        }) : r.isTheGameAwardsWinner ? (0, s.jsx)(f.default, {
          className: i(N.exclusiveRegular, {
            [N.exclusivePlaying]: e
          })
        }) : null]
      })
    }
  }
}
p.defaultProps = {
  showMediaPlaceholder: !1,
  isMouseOver: !1,
  showBuyInline: !1,
  isHorizontal: !1,
  isEmbed: !1
};
var S = p