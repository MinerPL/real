"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("118810"),
  i = n("77078"),
  r = n("244201"),
  o = n("952368"),
  u = n("924444"),
  d = n("103603"),
  c = n("866190"),
  m = n("782340"),
  f = n("842992");
let h = "Zoomed Lazy Image Modal";
class p extends a.PureComponent {
  render() {
    let {
      appContext: e,
      isWindowFocused: t,
      ...n
    } = this.props;
    return (0, l.jsx)(o.default, {
      ...n,
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: t
    })
  }
  constructor(...e) {
    super(...e), this.onMouseEnter = (e, t) => {
      let {
        preloadImage: n
      } = t, {
        width: l,
        height: a
      } = this.props;
      n((0, d.zoomFit)(l, a))
    }, this.modalContext = (0, i.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
      (0, i.closeModal)(h, this.modalContext)
    }, this.onZoom = (e, t) => {
      let {
        zoomThumbnailPlaceholder: n
      } = t;
      e.preventDefault();
      let {
        alt: a,
        src: r,
        original: o,
        width: d,
        height: c,
        animated: p,
        children: g,
        renderLinkComponent: E,
        isWindowFocused: v,
        shouldHideMediaOptions: C = !1
      } = this.props, I = {
        alt: a,
        src: r,
        original: null != o ? o : r,
        width: d,
        height: c,
        animated: p,
        children: g,
        zoomThumbnailPlaceholder: n,
        renderLinkComponent: E,
        onContextMenu: C ? e => {
          e.stopPropagation(), e.preventDefault()
        } : void 0
      };
      (0, s.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, i.openModal)(e => (0, l.jsx)(i.ModalRoot, {
        className: f.modal,
        ...e,
        size: i.ModalSize.DYNAMIC,
        "aria-label": m.default.Messages.IMAGE,
        children: (0, l.jsx)(u.ImageModal, {
          ...I,
          className: f.image,
          shouldAnimate: v,
          onClose: this.onCloseImage,
          shouldHideMediaOptions: C
        })
      }), {
        modalKey: h
      }, this.modalContext)
    }
  }
}

function g(e) {
  let t = (0, r.useAppContext)(),
    n = (0, c.useIsWindowFocused)();
  return (0, l.jsx)(p, {
    ...e,
    isWindowFocused: n,
    appContext: t
  })
}
p.defaultProps = {
  shouldLink: !0,
  autoPlay: !1,
  animated: !1
}