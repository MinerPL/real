"use strict";
i.r(t), i.d(t, {
  default: function() {
    return Image
  }
}), i("222007");
var n, Image, s = i("37983"),
  a = i("884691"),
  l = i("414456"),
  r = i.n(l),
  u = i("819855"),
  o = i("77078"),
  c = i("841098"),
  d = i("862013"),
  f = i("103603"),
  p = i("547630"),
  m = i("193513"),
  I = i("719347"),
  T = i("49111"),
  g = i("782340"),
  h = i("151739"),
  S = i("653240"),
  E = i("140802");

function N(e) {
  let {
    size: t,
    mediaLayoutType: i,
    alt: n
  } = e, a = (0, c.default)();
  return (0, s.jsx)("div", {
    className: h.imageErrorWrapper,
    style: function(e, t) {
      switch (t) {
        case I.MediaLayoutType.MOSAIC:
          return {
            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
          };
        case I.MediaLayoutType.RESPONSIVE:
          return {
            ...y(e), display: "flex"
          };
        default:
          return e
      }
    }(t, i),
    children: (0, s.jsx)("img", {
      src: (0, u.isThemeLight)(a) ? E : S,
      className: h.imageError,
      alt: null != n ? n : g.default.Messages.IMAGE
    })
  })
}(n = class extends a.PureComponent {
  render() {
    let e;
    let {
      className: t,
      imageClassName: i,
      readyState: n,
      src: a,
      placeholder: l,
      placeholderVersion: u,
      showThumbhashPlaceholder: c,
      alt: p,
      width: S,
      height: E,
      maxWidth: y = S,
      maxHeight: b = E,
      minWidth: A,
      minHeight: R,
      mediaLayoutType: x,
      limitResponsiveWidth: M = !0,
      accessory: P,
      zoomable: O,
      original: L,
      children: v,
      renderItem: C,
      renderAccessory: j,
      onClick: U,
      tabIndex: G,
      useFullWidth: B = !1,
      ...D
    } = this.props;
    if (1 === S && 1 === E) return null;
    let k = (0, f.fit)({
      width: S,
      height: E,
      maxWidth: y,
      maxHeight: b,
      minWidth: A,
      minHeight: R
    });
    if (null != a && n === T.ImageReadyStates.READY && "function" == typeof v) e = null != C ? C() : v({
      src: a,
      size: k,
      alt: p,
      className: i,
      mediaLayoutType: x
    });
    else if (!c) {
      if (n === T.ImageReadyStates.LOADING) {
        let t = 0 !== k.width ? k.height / k.width : 1;
        e = null != a && "" !== a ? (0, s.jsxs)("div", {
          children: [(0, s.jsx)("img", {
            alt: null != p ? p : g.default.Messages.IMAGE,
            title: p,
            src: a,
            style: _(k, x)
          }), (0, s.jsx)("div", {
            className: h.imagePlaceholderOverlay
          }), (0, s.jsx)(o.Spinner, {
            type: o.SpinnerTypes.WANDERING_CUBES,
            className: h.placeholderLoadingSpinner
          })]
        }) : (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            style: {
              paddingBottom: "".concat(100 * t, "%")
            },
            children: (0, s.jsx)("div", {
              className: h.loadingWrapperInner,
              children: (0, s.jsx)(o.Spinner, {
                type: o.SpinnerTypes.WANDERING_CUBES,
                className: h.loadingSpinner
              })
            })
          })
        })
      } else e = (0, s.jsx)(N, {
        size: k,
        mediaLayoutType: x,
        alt: p
      })
    }
    if (c) {
      let t = 0 !== k.width ? k.width / k.height : 1;
      null != a && "" !== a && n !== T.ImageReadyStates.ERROR ? e = v({
        src: a,
        size: k,
        alt: p,
        className: i,
        mediaLayoutType: x
      }) : n !== T.ImageReadyStates.LOADING && (e = (0, s.jsx)(N, {
        size: k,
        mediaLayoutType: x,
        alt: p
      })), e = (0, s.jsx)(m.ImageLoadingOverlay, {
        readyState: n,
        aspectRatio: t,
        placeholder: l,
        placeholderVersion: u,
        placeholderStyle: _(k, x),
        children: e
      })
    }
    let w = null != j ? j() : null;
    return w = null != w ? w : P, (0, s.jsx)(o.FocusRing, {
      ringTarget: this._containerRef,
      focusTarget: this._clickableRef,
      children: (0, s.jsxs)("div", {
        className: r(h.imageWrapper, {
          [h.imageZoom]: O,
          [h.imageWrapperBackground]: n !== T.ImageReadyStates.READY,
          [h.clickable]: null != U
        }, t),
        style: function(e, t, i, n, s) {
          return s === I.MediaLayoutType.MOSAIC ? {
            display: "block",
            maxHeight: "inherit",
            margin: "auto",
            width: !i && e.width <= I.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
            height: "100%"
          } : null != n || s === I.MediaLayoutType.RESPONSIVE ? {
            maxWidth: t ? e.width : void 0,
            width: "100%",
            aspectRatio: "".concat(e.width, " / ").concat(e.height)
          } : e
        }(k, M, B, C, x),
        ...D,
        children: [null != L && (0, s.jsx)("a", {
          tabIndex: -1,
          onClick: U,
          "aria-hidden": !0,
          className: h.originalLink,
          href: L,
          ref: this._containerRef,
          "data-role": "img",
          "data-safe-src": a
        }), null != U ? (0, s.jsx)(o.Clickable, {
          className: h.clickableWrapper,
          tabIndex: null != G ? G : 0,
          onClick: U,
          "aria-label": null != p ? p : g.default.Messages.IMAGE,
          "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
          innerRef: this._clickableRef,
          focusProps: {
            enabled: !1
          },
          children: e
        }) : e, null != w ? (0, s.jsx)("div", {
          className: h.imageAccessory,
          children: w
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), this._containerRef = a.createRef(), this._clickableRef = a.createRef()
  }
}).defaultProps = {
  readyState: T.ImageReadyStates.READY,
  zoomable: !0,
  children: e => {
    let {
      src: t,
      size: i,
      alt: n,
      className: a,
      mediaLayoutType: l
    } = e;
    return (0, s.jsx)("img", {
      className: null != a ? a : void 0,
      alt: null != n ? n : g.default.Messages.IMAGE,
      src: t,
      style: _(i, l)
    })
  },
  minWidth: 0,
  minHeight: 0
}, Image = n;

function _(e, t) {
  switch (t) {
    case I.MediaLayoutType.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, p.default)() ? "calc(100% + 1px)" : "100%"
      };
    case I.MediaLayoutType.RESPONSIVE:
      return y(e);
    default:
      return e
  }
}

function y(e) {
  let {
    width: t,
    height: i
  } = e;
  return {
    maxWidth: t,
    maxHeight: i,
    width: "100%",
    display: "block",
    aspectRatio: "".concat(t, " / ").concat(i)
  }
}