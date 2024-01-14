"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("266491"),
  l = s("77078"),
  i = s("45299"),
  r = s("965397"),
  o = s("454686"),
  d = s("353575"),
  u = s("151866"),
  c = s("782340"),
  E = s("964101");

function _(e) {
  let {
    guildId: t,
    existingRules: s
  } = e, {
    cancelEditingRule: _,
    isLoading: T,
    hasChanges: I,
    editingRule: S,
    errorMessage: N,
    saveEditingRule: g
  } = (0, u.useAutomodEditingRuleActions)(), {
    updateRule: f
  } = (0, d.useAutomodRulesList)(t), A = null != S, L = A && !(0, o.isBackendPersistedRule)(S), m = A || I || L, C = async () => {
    if (!I && !L) return _();
    null != S && !L && f(S);
    let e = s.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    });
    try {
      let e = await g(s);
      null != e && f(e)
    } catch (t) {
      null != e && f(e)
    }
  }, O = c.default.Messages.CANCEL, h = !I && A ? c.default.Messages.GUILD_AUTOMOD_EDIT_NO_CHANGES.format({
    ruleName: null == S ? void 0 : S.name
  }) : void 0;
  return null != N && (h = (0, a.jsx)(l.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: E.message,
    children: N
  })), (0, a.jsx)(n.default, {
    component: "div",
    className: E.saveNoticeContainer,
    children: m && (0, a.jsx)(r.default, {
      children: (0, a.jsx)(i.default, {
        submitting: T,
        disabled: T,
        onSave: C,
        onReset: _,
        onResetText: O,
        message: h
      })
    })
  })
}