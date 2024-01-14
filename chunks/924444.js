"use strict";
n.r(t), n.d(t, {
  ImageModal: function() {
    return _
  },
  VideoModal: function() {
    return S
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("394846"),
  o = n("77078"),
  u = n("304580"),
  d = n("605160"),
  c = n("659500"),
  m = n("103603"),
  f = n("874276"),
  h = n("952368"),
  p = n("888673"),
  g = n("505684"),
  E = n("49111"),
  v = n("782340"),
  C = n("713139");

function I(e) {
  let {
    onClose: t
  } = e, n = a.useRef(null);
  return (0, l.jsx)("div", {
    className: C.mobileCloseWrapper,
    ref: n,
    children: (0, l.jsx)(o.FocusRingScope, {
      containerRef: n,
      children: (0, l.jsx)("div", {
        children: (0, l.jsx)(u.default, {
          closeAction: t,
          keybind: "ESC"
        })
      })
    })
  })
}
let x = e => {
  let {
    children: t,
    hasMediaControls: n,
    isObscured: s,
    src: r
  } = e, [o, u] = a.useState(!1), c = a.useRef(r);
  return (a.useEffect(() => {
    r !== c.current && u(!s)
  }, [r, s]), s) ? (0, l.jsx)(g.ObscuredDisplayContext.Provider, {
    value: o,
    children: (0, l.jsx)(g.default, {
      type: g.default.Types.ATTACHMENT,
      reason: d.ObscureReason.EXPLICIT_CONTENT,
      className: C.obscureContainer,
      obscured: !0,
      isSingleMosaicItem: !0,
      obscurityControlClassName: i({
        [C.controlsOffset]: n && o
      }),
      onToggleObscurity: e => {
        e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
      },
      children: e => (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)("div", {
          className: i(C.obscureWrapper, {
            [C.obscure]: e
          }),
          children: t(e)
        })
      })
    }, r)
  }) : (0, l.jsx)(l.Fragment, {
    children: t(!1)
  })
};

function _(e) {
  let {
    src: t,
    original: n,
    placeholder: s,
    width: i,
    height: o,
    animated: u,
    children: d,
    responsive: f,
    renderLinkComponent: p,
    maxWidth: g,
    maxHeight: _,
    shouldAnimate: S,
    onClose: N,
    shouldHideMediaOptions: M = !1,
    obscure: T = !1,
    ...A
  } = e, {
    width: j,
    height: y
  } = (0, m.zoomFit)(i, o), R = r.isMobile && null != N;
  a.useEffect(() => {
    if (null != N) return c.ComponentDispatch.subscribe(E.ComponentActions.MEDIA_MODAL_CLOSE, N), () => {
      c.ComponentDispatch.unsubscribe(E.ComponentActions.MEDIA_MODAL_CLOSE, N)
    }
  }, [N]);
  let L = M ? e => {
    e.stopPropagation(), e.preventDefault()
  } : A.onContextMenu;
  return (0, l.jsxs)("div", {
    className: C.wrapper,
    children: [R ? (0, l.jsx)(I, {
      onClose: N
    }) : null, (0, l.jsx)(x, {
      isObscured: T,
      src: t,
      children: e => (0, l.jsx)(h.default, {
        src: t,
        placeholder: s,
        shouldLink: !1,
        width: i,
        height: o,
        maxWidth: j,
        maxHeight: y,
        children: d,
        animated: !e && u,
        autoPlay: !e,
        responsive: f,
        onContextMenu: L,
        ...A
      }, t)
    }), null != n && !M && p({
      href: n,
      target: "_blank",
      rel: "noreferrer noopener",
      className: C.downloadLink,
      children: v.default.Messages.OPEN_IN_BROWSER
    })]
  })
}

function S(e) {
  let {
    src: t,
    width: n,
    height: a,
    onClose: s,
    renderLinkComponent: o,
    shouldHideMediaOptions: u = !1,
    obscure: d = !1,
    ...c
  } = e, {
    width: h,
    height: g
  } = (0, m.zoomFit)(n, a), E = r.isMobile && null != s, _ = u ? e => {
    e.stopPropagation(), e.preventDefault()
  } : c.onContextMenu;
  return (0, l.jsxs)("div", {
    className: i(C.wrapper, C.videoWrapper),
    children: [E ? (0, l.jsx)(I, {
      onClose: s
    }) : null, (0, l.jsx)(x, {
      hasMediaControls: !0,
      isObscured: d,
      src: t,
      children: e => (0, l.jsx)(p.default, {
        src: t,
        width: n,
        height: a,
        maxWidth: h,
        maxHeight: g,
        renderLinkComponent: o,
        volume: f.getVolume,
        autoMute: f.getMuted,
        onVolumeChange: f.setVolume,
        onMute: f.setMuted,
        autoPlay: !e,
        onContextMenu: _,
        ...c
      }, t)
    }), !u && o({
      href: t,
      target: "_blank",
      rel: "noreferrer noopener",
      className: C.downloadLink,
      children: v.default.Messages.OPEN_IN_BROWSER
    })]
  })
}