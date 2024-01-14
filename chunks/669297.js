"use strict";
A.r(t), A.d(t, {
  openErrorDialog: function() {
    return s
  }
});
var a = A("37983");
A("884691");
var l = A("77078"),
  n = A("959875"),
  r = A("782340");

function s(e, t, A) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, n.default)({
    title: e,
    body: "string" == typeof t ? t : t.format({
      highlightHook: e => (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        style: {
          display: "inline"
        },
        children: e
      }),
      ...s
    }),
    cta: r.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: A
  })
}