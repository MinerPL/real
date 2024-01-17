"use strict";
n.r(t), n.d(t, {
  QuestionRenderer: function() {
    return u
  },
  RequirementRenderer: function() {
    return c
  },
  RequirementWithActionRenderer: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("77078"),
  o = n("578706"),
  s = n("381546"),
  a = n("880050");

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a.questionContainer,
    children: [(0, i.jsx)(l.Text, {
      className: a.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function c(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: u
  } = e;
  return (0, i.jsxs)("div", {
    className: a.requirementContainer,
    children: [(0, i.jsx)(t, {
      className: a.requirementIcon,
      height: 20,
      width: 20
    }), (0, i.jsx)(l.Text, {
      className: a.requirementText,
      variant: "text-md/normal",
      children: n
    }), u ? (0, i.jsx)(o.default, {
      width: 24,
      height: 24,
      className: a.requirementSuccess,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    }) : (0, i.jsx)(s.default, {
      width: 24,
      height: 24,
      className: a.requirementFailure,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    footnote: s,
    meetsRequirement: u,
    children: c
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a.requirementContainer,
      children: [(0, i.jsx)(t, {
        className: a.requirementIcon,
        height: 20,
        width: 20
      }), (0, i.jsx)(l.Text, {
        className: a.requirementText,
        variant: "text-md/normal",
        children: n
      }), u ? (0, i.jsx)(o.default, {
        width: 24,
        height: 24,
        className: a.requirementSuccess,
        backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
      }) : c]
    }), null != s && (0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: a.footnote,
      variant: "text-xs/normal",
      children: s
    })]
  })
}