"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return l
  },
  default: function() {
    return o
  }
});
var a = n("884691"),
  r = n("446674"),
  s = n("714657");
let l = "data-client-themes",
  i = "custom-theme-background",
  u = () => {
    let e = (0, r.useStateFromStores)([s.default], () => s.default.getLinearGradient()),
      t = (0, a.useMemo)(() => null == e ? null : ".".concat(i, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
    return t
  };
var o = () => {
  let e = u();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: i
  }
}