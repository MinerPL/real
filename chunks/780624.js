"use strict";
t.r(s), t.d(s, {
  MicrophoneSlashIcon: function() {
    return n
  }
});
var r = t("37983");
t("884691");
var l = t("669491"),
  a = t("75196");
let n = e => {
  let {
    width: s = 24,
    height: t = 24,
    color: n = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM10.8 17.32c-.21.21-.1.58.2.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 0 0-2 0c0 1.45-.52 2.79-1.38 3.83l-.02.02A5.99 5.99 0 0 1 12.32 16a.52.52 0 0 0-.34.15l-1.18 1.18ZM15.36 4.52c.15-.15.19-.38.08-.56A4 4 0 0 0 8 6v4c0 .3.03.58.1.86.07.34.49.43.74.18l6.52-6.52ZM5.06 13.98c.16.28.53.31.75.09l.75-.75c.16-.16.19-.4.08-.61A5.97 5.97 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.39 2.81 1.06 3.98Z",
      className: i
    })
  })
}