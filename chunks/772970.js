"use strict";
n.r(t), n.d(t, {
  TermsFieldBody: function() {
    return f
  },
  TermsFieldCheckbox: function() {
    return E
  },
  DisabledTermsRequirementFormField: function() {
    return _
  },
  TermsFormField: function() {
    return h
  }
}), n("222007");
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  o = n("77078"),
  s = n("367376"),
  a = n("213523"),
  u = n("272460"),
  c = n("782340"),
  d = n("847121");

function f(e) {
  let {
    terms: t,
    channelId: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: l(d.termsFieldBody, r),
    children: t.map((e, t) => (0, i.jsxs)("div", {
      className: d.termsRow,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: s.default.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function E(e) {
  let {
    onChange: t,
    checked: n,
    disabled: r
  } = e;
  return (0, i.jsx)(o.Checkbox, {
    size: 20,
    type: o.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: d.checkbox,
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: c.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function _(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(u.RequirementRenderer, {
    icon: a.default,
    text: c.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let h = e => {
  let {
    channelId: t,
    formField: n,
    onChange: r
  } = e;
  return (0, i.jsxs)(u.QuestionRenderer, {
    title: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, i.jsx)(f, {
      className: d.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, i.jsx)(E, {
      onChange: r,
      checked: n.response
    })]
  })
}