"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("50926"),
  r = s("520141"),
  o = s("567054"),
  d = s("409464"),
  u = s("414989"),
  c = s("64284"),
  E = s("335724"),
  _ = s("925993"),
  T = s("832285"),
  I = s("26754"),
  S = s("546470"),
  N = s("394294"),
  g = s("782340"),
  f = function(e) {
    let {
      guild: t,
      submittedGuildJoinRequestsCount: s,
      onFormFieldUpdate: f,
      hideVerificationLevelField: A
    } = e, L = n.useRef(!1), [m, C] = n.useState(null), [O, h] = n.useState(e.formFields), R = n.useRef(e.formFields), D = n.useMemo(() => O.filter(d.isAutomaticApprovalFormField), [O]), M = n.useMemo(() => O.filter(d.isManualApprovalFormField), [O]), G = M.length, x = n.useMemo(() => O.length === N.MAX_FORM_ELEMENTS, [O]), p = n.useMemo(() => O.some(o.isTermsFormField), [O]), U = n.useMemo(() => O.some(e => !(0, o.isTermsFormField)(e)), [O]), v = G > 1, j = (0, r.useIsMemberVerificationManualApproval)(t.id), P = n.useCallback(() => {
      (0, l.showToast)((0, l.createToast)(g.default.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
    }, []), y = n.useCallback(async e => {
      if (!L.current) {
        L.current = !0;
        try {
          await i.default.updateVerificationForm(t.id, e), f(), h(e), R.current = e
        } catch (e) {
          throw h(R.current), e
        } finally {
          null != m && C(null), L.current = !1
        }
      }
    }, [m, t.id, f]), b = n.useCallback(async e => {
      let t = e.field_type === o.VerificationFormFieldTypes.TERMS ? [e, ...O] : [...O, e];
      await y(t)
    }, [O, y]), B = n.useCallback(async (e, t) => {
      if (O[e] === t) return;
      let s = [...O];
      s[e] = t, await y(s)
    }, [O, y]), F = n.useCallback(async (e, t, s) => {
      let a = O.indexOf(e),
        n = [...O];
      if (null != t && t !== a && (n.splice(a, 1), n.splice(t, 0, e), h(n)), s) try {
        await y(n), null !== m && C(null)
      } catch (e) {
        P()
      } else m !== t && C(t)
    }, [m, O, y, P]), H = n.useCallback(async e => {
      try {
        await y([...O.slice(0, e), ...O.slice(e + 1)])
      } catch (e) {
        P()
      }
    }, [O, y, P]), V = (0, a.jsxs)(a.Fragment, {
      children: [!A && (0, a.jsx)(_.default, {
        guild: t
      }), (0, a.jsx)(c.default, {
        guildId: t.id
      }), !p && !x && (0, a.jsx)(E.default, {
        addFormField: b
      }), D.map(e => (0, S.getFormFieldBuilderComponent)({
        dropHoveredIndex: m,
        formField: e,
        guild: t,
        index: O.indexOf(e),
        isDragEnabled: !1,
        submittedGuildJoinRequestsCount: s,
        removeFormField: H,
        updateFormField: B,
        updateFormFieldOrder: F
      }))]
    });
    return j ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.default, {
        text: g.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_AUTOMATIC_APPROVAL_DIVIDER
      }), V, (0, a.jsx)(I.default, {
        text: g.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_DIVIDER
      }), !U && (0, a.jsx)(u.default, {
        addFormField: b,
        hasManualFormFields: G > 0
      }), M.map(e => (0, S.getFormFieldBuilderComponent)({
        dropHoveredIndex: m,
        formField: e,
        guild: t,
        index: O.indexOf(e),
        isDragEnabled: v,
        submittedGuildJoinRequestsCount: s,
        removeFormField: H,
        updateFormField: B,
        updateFormFieldOrder: F
      })), U && !x && (0, a.jsx)(T.default, {
        addFormField: b
      })]
    }) : V
  }