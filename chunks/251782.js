"use strict";
t.r(n), t.d(n, {
  PlayStationLinkSuccess: function() {
    return r
  }
});
var i = t("37983");
t("884691");
var o = t("451039"),
  s = t("782340"),
  a = t("104528");

function r(e) {
  let {
    onClose: n
  } = e;
  return (0, i.jsx)(o.TwoWayLinkSuccess, {
    img: (0, i.jsx)("img", {
      src: a,
      width: "241 ",
      height: "118",
      alt: ""
    }),
    title: s.default.Messages.PS_LINK_SUCCESS_TITLE,
    body: s.default.Messages.PS_LINK_SUCCESS_BODY,
    onClose: n
  })
}