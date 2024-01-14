"use strict";
s.r(t), s.d(t, {
  transformAssetURL: function() {
    return c
  },
  default: function() {
    return g
  }
}), s("424973"), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("77078"),
  r = s("700468"),
  l = s("439437"),
  o = s("180612"),
  d = s("75576"),
  u = s("49111"),
  h = s("782340");

function c(e) {
  return "".concat(e.split("?")[0], "?size=").concat(2048)
}
let p = e => {
  let {
    index: t,
    items: s,
    ...a
  } = e, i = s[t], r = 0, o = [];
  for (let e of s)
    if (e.type === u.CarouselMediaTypes.IMG) {
      let {
        width: t,
        height: s,
        src: n
      } = e;
      e === i && (r = o.length), o.push({
        src: c(n),
        width: t,
        height: s
      })
    } return (0, n.jsx)(l.default, {
    ...a,
    items: o,
    startWith: r
  })
};
class m extends a.Component {
  render() {
    let {
      pageSize: e,
      ...t
    } = this.props, s = e === d.PageSizes.SMALL ? o.default : r.default;
    return (0, n.jsx)(s, {
      ...t,
      onCurrentItemClick: this.handleCurrentItemClick
    })
  }
  constructor(...e) {
    super(...e), this.handleCurrentItemClick = (e, t) => {
      e.type === u.CarouselMediaTypes.IMG && !(0, i.hasAnyModalOpen)() && (0, i.openModal)(e => (0, n.jsx)(i.ModalRoot, {
        size: i.ModalSize.DYNAMIC,
        "aria-label": h.default.Messages.IMAGE,
        ...e,
        children: (0, n.jsx)(p, {
          ...e,
          index: t,
          items: this.props.items
        })
      }))
    }
  }
}
var g = m