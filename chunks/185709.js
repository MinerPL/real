"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("369035"),
  i = s("296839"),
  r = s("928098"),
  o = s("914559");

function d(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e, d = n.useMemo(() => (0, i.getAvailableActionTypes)(t.triggerType), [t.triggerType]), u = r.getPromiseableActionHandlers(t.guildId), c = n.useMemo(() => (0, l.getDefaultActions)(), []), E = (e, a) => {
    if (null == a) return;
    let n = t.actions.some(e => e.type === a.type),
      l = [...t.actions, a];
    if (n) {
      let s = t.actions.filter(e => e.type !== a.type);
      l = e ? [...s, a] : s
    }
    s({
      ...t,
      actions: l
    })
  }, _ = e => async s => {
    let a = t.actions.find(t => t.type === e),
      n = null != a,
      l = c[e],
      i = s ? a : l;
    if (null != i && (!n || s)) {
      let s = u[e];
      if (null != s) {
        let e = await s(t, i);
        E(!0, e)
      } else E(!0, i)
    } else E(!1, n ? a : l)
  };
  return (0, a.jsx)(a.Fragment, {
    children: d.map(e => {
      let s = t.actions.find(t => t.type === e);
      return (0, a.jsx)(o.default, {
        guildId: t.guildId,
        triggerType: t.triggerType,
        action: null != s ? s : c[e],
        toggled: null != s,
        onToggleAction: _(e)
      }, e)
    })
  })
}