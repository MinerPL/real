"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  a = n("414456"),
  l = n.n(a),
  s = n("77078"),
  o = n("812204"),
  c = n("685665"),
  u = n("873622"),
  d = n("476765"),
  f = n("599110"),
  h = n("652914"),
  v = n("254398"),
  p = n("49111"),
  m = n("782340"),
  g = n("369522");

function w(e) {
  let {
    transitionState: t,
    onClose: a,
    onComplete: w,
    uploadType: y,
    showUpsellHeader: S,
    analyticsPage: x
  } = e, [A, E] = i.useState(!1), b = (0, s.useModalContext)(), L = (0, d.useUID)(), {
    AnalyticsLocationProvider: R
  } = (0, c.default)(o.default.GIF_PICKER);
  async function I(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || A) return;
    E(!0);
    let i = (0, v.makeTenorProxyURL)(t),
      l = await fetch(i),
      o = await l.blob();
    a(), (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("57015").then(n.bind(n, "57015"));
      return t => (0, r.jsx)(e, {
        imgURI: i,
        file: new File([o], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: w,
        uploadType: y,
        showUpsellHeader: S,
        ...t
      })
    }, {
      contextKey: b
    })
  }
  return i.useEffect(() => {
    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: x
      }
    })
  }, [x]), (0, r.jsx)(R, {
    children: (0, r.jsxs)(s.ModalRoot, {
      className: g.gifPickerCroppingModal,
      "aria-labelledby": L,
      transitionState: t,
      size: s.ModalSize.SMALL,
      children: [S ? (0, r.jsx)(h.default, {
        type: y,
        analyticsPage: x,
        analyticsSection: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, r.jsxs)(s.ModalHeader, {
        className: g.modalHeader,
        separator: !1,
        children: [(0, r.jsx)(s.FormTitle, {
          className: g.titleCase,
          tag: s.FormTitleTags.H1,
          children: m.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, r.jsx)(s.ModalCloseButton, {
          onClick: a,
          className: g.modalCloseButton
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.default, {
          className: l(g.gifPicker, {
            [g.loadingOverlay]: A
          }),
          onSelectGIF: I,
          hideFavorites: !0
        }), A && (0, r.jsx)(s.Spinner, {
          className: g.spinner
        })]
      })]
    })
  })
}