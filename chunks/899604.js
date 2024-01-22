"use strict";
n.r(t), n.d(t, {
  SubscriptionListingBenefits: function() {
    return d
  },
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  s = n("430568"),
  o = n("271560"),
  u = n("692105"),
  c = n("888266");

function d(e) {
  let t, {
    applicationId: n,
    storeListingBenefits: r,
    skuBenefits: a,
    className: s
  } = e;
  return null != r ? t = r.map(e => (0, i.jsx)(p, {
    applicationId: n,
    benefit: e,
    className: l(c.benefit, s)
  }, e.id)) : null != a && (t = a.map((e, t) => (0, i.jsx)(f, {
    benefit: e,
    className: l(c.benefit, s)
  }, t))), (0, i.jsx)(i.Fragment, {
    children: t
  })
}

function f(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: r,
    showsDescription: o = !0,
    nameTextVariant: u = "text-md/medium",
    nameTextColor: d = "header-primary"
  } = e;
  return (0, i.jsxs)("div", {
    className: l(c.container, n),
    children: [null != t.emoji && (0, i.jsx)("div", {
      className: l(c.emojiContainer, r),
      children: (0, i.jsx)(s.default, {
        emojiId: t.emoji.id,
        emojiName: t.emoji.name,
        animated: t.emoji.animated
      })
    }), (0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: u,
        color: d,
        className: c.name,
        children: t.name
      }), o && (0, i.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    })]
  })
}

function p(e) {
  let t, {
    applicationId: n,
    benefit: r,
    className: d,
    emojiContainerClassName: f,
    showsDescription: p = !0,
    nameTextVariant: h = "text-md/medium",
    nameTextColor: S = "header-primary"
  } = e;
  if (null != r.icon) switch (r.icon.type) {
    case u.IconType.STORE_ASSET:
      let m = (0, o.getAssetURL)(n, r.icon.store_asset_id);
      t = (0, i.jsx)("img", {
        src: m,
        alt: "",
        className: "emoji"
      });
      break;
    case u.IconType.EMOJI:
      t = (0, i.jsx)(s.default, {
        emojiName: r.icon.emoji
      })
  }
  return (0, i.jsxs)("div", {
    className: l(c.container, d),
    children: [(0, i.jsx)("div", {
      className: l(c.emojiContainer, f),
      children: t
    }), (0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: h,
        color: S,
        className: c.name,
        children: r.name
      }), p && (0, i.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: r.description
      })]
    })]
  })
}