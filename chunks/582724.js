"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("843962"),
  i = n("679653"),
  r = n("154864"),
  o = n("931138"),
  u = n("486952"),
  d = n("172554"),
  c = n("782340"),
  f = n("829531"),
  h = n("561537");
let C = () => (0, s.jsx)("svg", {
  width: "46",
  height: "34",
  viewBox: "0 0 46 34",
  className: f.chatBubbleLip,
  xmlns: "http://www.w3.org/2000/svg",
  children: (0, s.jsx)("path", {
    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
  })
});

function p(e) {
  var t;
  let {
    channel: n
  } = e, p = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : "";
  return (0, s.jsxs)("div", {
    id: (0, r.getMessageDOMId)(n.id, n.id),
    className: f.headerContainer,
    children: [(0, s.jsx)("img", {
      src: h,
      className: f.wumpusImage,
      alt: ""
    }), (0, s.jsxs)("div", {
      className: f.chatBubbleContainer,
      children: [(0, s.jsx)(C, {}), (0, s.jsxs)("div", {
        className: f.chatBubble,
        children: [(0, s.jsx)(a.Avatar, {
          "aria-label": p,
          size: a.AvatarSizes.SIZE_80,
          src: (0, l.getChannelIconURL)(n, 80, !1)
        }), (0, s.jsxs)(d.EmptyMessageHeader, {
          className: f.emptyMessageHeader,
          children: [p, (0, s.jsx)(o.default, {
            className: f.flowerStar,
            size: 24,
            children: (0, s.jsx)(u.default, {
              className: f.verified,
              width: 24,
              height: 24
            })
          })]
        }), (0, s.jsx)(d.EmptyMessageBody, {
          children: c.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
        })]
      })]
    })]
  })
}