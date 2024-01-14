"use strict";
l.r(t), l.d(t, {
  getApplicationInstallURL: function() {
    return s
  }
}), l("222007");
var n = l("872717"),
  a = l("49111");

function s(e) {
  var t, l;
  if (null != e.custom_install_url) return e.custom_install_url;
  let s = {};
  s.client_id = e.id, (null === (t = e.install_params) || void 0 === t ? void 0 : t.permissions) != null && (s.permissions = e.install_params.permissions), (null === (l = e.install_params) || void 0 === l ? void 0 : l.scopes) != null && (s.scope = e.install_params.scopes.join(" "));
  let i = Object.entries(s).map(e => {
    let [t, l] = e;
    return "".concat(t, "=").concat(encodeURIComponent(l))
  }).join("&");
  return "".concat(n.default.getAPIBaseURL(!1)).concat(a.Endpoints.OAUTH2_AUTHORIZE, "?").concat(i)
}