"use strict";
n.r(t), n.d(t, {
  ForYouItemImage: function() {
    return d
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("766274"),
  i = n("587974"),
  r = n("108367"),
  o = n("457201");
let u = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, l.jsx)("div", {
      className: o.maskBackground,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, l.jsx)("img", {
        className: o.maskIcon,
        alt: "",
        src: t.icon
      })
    })
  },
  d = a.memo(function(e) {
    let {
      item: t
    } = e, n = null, a = !1;
    if (null != t.icon_name) n = (0, l.jsx)("img", {
      alt: "",
      src: r.FOR_YOU_ICONS[(0, r.getIconByName)(t.icon_name)]
    });
    else if (null != t.other_user) {
      let e = t.other_user instanceof s.default ? t.other_user : new s.default(t.other_user);
      n = (0, l.jsx)("img", {
        alt: "",
        className: o.avatar,
        src: e.getAvatarURL(void 0, 40)
      }), a = !0
    } else n = null != t.icon_url ? (0, l.jsx)("img", {
      alt: "",
      src: t.icon_url
    }) : (0, l.jsx)("img", {
      alt: "",
      src: r.FOR_YOU_ICONS[(0, r.getIcon)(t)]
    });
    let d = (0, r.getMask)(t.type);
    return (0, l.jsxs)(i.default, {
      mask: null == d ? i.MaskIDs.AVATAR_DEFAULT : i.MaskIDs.AVATAR_STATUS_ROUND_16,
      width: 40,
      height: 40,
      rightOverhang: 3,
      bottomOverhang: 3,
      className: o.mask,
      children: [(0, l.jsx)("div", {
        className: o.container,
        style: a ? void 0 : {
          backgroundColor: (0, r.getBackground)(t)
        },
        children: n
      }), (0, l.jsx)(u, {
        mask: d
      })]
    })
  })