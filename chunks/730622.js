"use strict";
let r, s;
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("70102");
var a = n("697218"),
  o = n("615931");
let l = () => {
  throw Error("updateModal has not been implemented.")
};
{
  let e = n("670924");
  r = e.showModal, l = e.updateModalProps, s = n("551042").closeModal
}

function i(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: a,
    modalProps: o = {},
    hooks: {
      onEarlyClose: i
    } = {}
  } = e;
  if (null == r) {
    null == i || i();
    return
  }
  let d = r(f, c, o);

  function c() {
    null == i || i()
  }

  function _(e) {
    s(d), n(e)
  }

  function E(e) {
    s(d), a(e)
  }

  function f(e) {
    return l(d, f, c, {
      ...o,
      isLoading: !0
    }), u({
      promiseFn: t,
      resolve: _,
      reject: E,
      code: e,
      mfaCodeHandler: A,
      isModalOpen: !0
    })
  }

  function A(e) {
    let {
      res: t
    } = e;
    l(d, f, c, {
      ...o,
      error: t.body.message
    })
  }
}

function u(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: r,
    code: s,
    mfaCodeHandler: a = i,
    isModalOpen: o = !1,
    ...l
  } = e;
  return t(null != s ? {
    code: s
  } : {}).then(n, e => {
    var s, i;
    if (s = e, i = o, s.body && 60008 === s.body.code || i && 429 === s.status) return a({
      promiseFn: t,
      resolve: n,
      reject: r,
      res: e,
      ...l
    });
    r(e)
  })
}

function d(e, t) {
  var n, r;
  let {
    checkEnabled: s = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
    ...l
  } = null != t ? t : {};
  return new Promise((t, n) => {
    ((0, o.resolveThunk)(s) ? i : u)({
      promiseFn: e,
      resolve: t,
      reject: n,
      ...l
    })
  })
}