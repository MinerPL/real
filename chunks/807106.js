"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
}), i("222007"), i("424973");
var l = i("884691"),
  a = i("798609"),
  n = i("605393"),
  r = i("872173"),
  d = i("773336"),
  u = i("334368");

function o(e) {
  return r.FrecencyUserSettingsActionCreators.loadIfNecessary(), l.useMemo(() => {
    let t = [];
    e.forEach(e => {
      let [i, l] = e;
      l.forEach(e => t.push(e.application.id))
    });
    let i = [...t];
    i.sort((e, i) => {
      let l = n.default.getScoreWithoutLoadingLatest(e),
        a = n.default.getScoreWithoutLoadingLatest(i);
      return l !== a ? a - l : t.findIndex(t => t === e) < t.findIndex(e => e === i) ? -1 : 1
    });
    let l = e.map(e => {
      let [t, l] = e;
      return [t, c(l, i)]
    });
    return l
  }, [e])
}
let c = (e, t) => {
  let i = [...e],
    l = 0;
  return t.forEach(e => {
    let t = i.findIndex(t => t.application.id === e);
    if (-1 !== t) {
      let e = i[t];
      i.splice(t, 1), i = [...i.slice(0, l), e, ...i.slice(l)], ++l
    }
  }), i.map((e, t) => [e, t]).filter(e => {
    var t, i;
    let [l] = e, n = null === (i = l.application.embeddedActivityConfig) || void 0 === i ? void 0 : null === (t = i.client_platform_config[(0, u.default)((0, d.getOS)())]) || void 0 === t ? void 0 : t.label_type;
    return !!n && (n === a.EmbeddedActivityLabelTypes.NEW || n === a.EmbeddedActivityLabelTypes.UPDATED)
  }).forEach(e => {
    let [t, l] = e, a = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
    if (a < l) {
      let e = i[l];
      i.splice(l, 1), i = [...i.slice(0, a), e, ...i.slice(a)]
    }
  }), i
}