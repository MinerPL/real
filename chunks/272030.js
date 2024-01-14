"use strict";
n.r(t), n.d(t, {
  closeContextMenu: function() {
    return o
  },
  openContextMenu: function() {
    return c
  },
  openContextMenuLazy: function() {
    return d
  }
}), n("506083");
var i = n("913144"),
  l = n("244201"),
  s = n("773336"),
  a = n("749866"),
  r = n("49111");

function u(e) {
  i.default.dispatch({
    type: "CONTEXT_MENU_OPEN",
    contextMenu: e
  })
}

function o(e) {
  {
    let {
      flushSync: t
    } = n("817736");
    t(() => {
      i.default.wait(() => {
        i.default.dispatch({
          type: "CONTEXT_MENU_CLOSE"
        }).finally(e)
      })
    })
  }
}

function c(e, t, n, i) {
  var o, c, d;
  if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
  let g = 0,
    h = 0;
  if ("pageX" in e && (g = e.pageX, h = e.pageY), 0 === g && 0 === h) {
    let t = null === (o = e.target) || void 0 === o ? void 0 : o.getBoundingClientRect(),
      {
        left: n = 0,
        top: i = 0,
        width: l = 0,
        height: s = 0
      } = null != t ? t : {};
    g = n + l / 2, h = i + s / 2
  }
  let f = {
    render: t,
    renderLazy: i,
    target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
    rect: new DOMRect(g, h, 0, 0),
    config: {
      context: __OVERLAY__ ? r.AppContext.OVERLAY : null !== (d = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== d ? d : r.AppContext.APP,
      ...n
    }
  };
  if ((null == n ? void 0 : n.enableSpellCheck) && (0, s.isDesktop)()) {
    let e = (0, a.addResultListener)(() => {
      e(), u(f)
    })
  } else e.preventDefault(), u(f)
}

function d(e, t, n) {
  c(e, void 0, n, t)
}