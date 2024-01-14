"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("77078"),
  r = l("145131"),
  o = l("8161"),
  d = l("713573"),
  u = l("782340"),
  c = l("140960");

function f(e) {
  let {
    name: t,
    description: l,
    icon: a,
    imageSrc: f,
    iconBackgroundColor: m,
    iconClassName: I,
    details: T,
    detailsClassName: N,
    isHeader: E,
    isPremium: h
  } = e;
  return (0, n.jsxs)(r.default, {
    justify: r.default.Justify.CENTER,
    className: c.wrapper,
    children: [null != a || null != f ? (0, n.jsx)(r.default.Child, {
      shrink: 0,
      grow: 0,
      children: function(e, t, l, a) {
        if (null != t) return (0, n.jsx)("img", {
          alt: "",
          src: t,
          className: s(c.iconWrapper, a)
        });
        let i = null;
        return null != e && (i = "string" == typeof e ? (0, n.jsx)("img", {
          alt: "",
          src: e,
          className: s(c.icon, a)
        }) : (0, n.jsx)(e, {
          className: s(c.icon, a)
        })), (0, n.jsx)(r.default, {
          align: r.default.Align.CENTER,
          justify: r.default.Justify.CENTER,
          style: {
            backgroundColor: l
          },
          className: c.iconWrapper,
          children: i
        })
      }(a, f, m, I)
    }) : null, function(e) {
      let {
        name: t,
        description: l,
        details: a,
        detailsClassName: f,
        isHeader: m,
        isPremium: I
      } = e, T = null == a ? void 0 : a.map((e, t) => {
        let {
          icon: l,
          text: a
        } = e;
        return (0, n.jsxs)("div", {
          className: s(c.detailsWrapper, m ? c.headerDetailsWrapper : null),
          children: [null != l ? (0, n.jsx)(l, {
            width: 16,
            height: 16,
            className: c.detailsIcon
          }) : null, (0, n.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: f,
            children: a
          })]
        }, t)
      });
      return (0, n.jsxs)(r.default, {
        direction: r.default.Direction.VERTICAL,
        children: [(0, n.jsxs)(d.default, {
          size: m ? d.default.Sizes.SIZE_24 : d.default.Sizes.SIZE_16,
          className: m ? c.header : c.secondaryHeader,
          children: [t, I && (0, n.jsx)(i.Tooltip, {
            text: u.default.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
            children: e => (0, n.jsx)(o.default, {
              ...e,
              width: 16,
              height: 16,
              className: c.premiumIcon
            })
          })]
        }), null != l ? (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: l
        }) : null, (0, n.jsx)(r.default, {
          direction: r.default.Direction.HORIZONTAL,
          align: r.default.Align.CENTER,
          wrap: r.default.Wrap.WRAP,
          children: T
        })]
      })
    }({
      name: t,
      description: l,
      details: T,
      detailsClassName: N,
      isHeader: E,
      isPremium: h
    })]
  })
}