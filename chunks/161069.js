"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  s = a("77078"),
  r = a("448993"),
  o = a("592407"),
  i = a("62418"),
  u = a("583789"),
  c = a("49111"),
  d = a("782340"),
  h = a("926622");

function m(e) {
  let {
    guild: t,
    onClose: a,
    hideColors: m
  } = e, [x, f] = l.useState(t.verificationLevel), [C, L] = l.useState(null), M = t.hasFeature(c.GuildFeatures.COMMUNITY), p = (0, i.generateVerificationLevelOptions)(M, m).filter(e => !e.disabled), v = l.useCallback(async () => {
    null != C && L(null);
    try {
      await o.default.saveGuild(t.id, {
        verificationLevel: x
      }), o.default.updateGuild({
        verificationLevel: x
      }), a()
    } catch (t) {
      let e = new r.APIError(t);
      L(e.getAnyErrorMessage())
    }
  }, [C, t.id, x, a]);
  return (0, n.jsx)(u.default, {
    ...e,
    title: d.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
    errorText: C,
    onConfirm: v,
    onCancel: a,
    children: (0, n.jsxs)(s.FormSection, {
      children: [(0, n.jsx)(s.FormText, {
        type: s.FormText.Types.DESCRIPTION,
        className: h.marginBottom20,
        children: d.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      }), (0, n.jsx)(s.RadioGroup, {
        value: x,
        options: p,
        onChange: e => f(e.value)
      })]
    })
  })
}