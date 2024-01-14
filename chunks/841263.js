"use strict";
a.r(t), a.d(t, {
  useUserCodeSubmit: function() {
    return i
  }
}), a("222007");
var n = a("884691"),
  r = a("8222"),
  s = a("555520"),
  o = a("782340");

function i(e, t, a) {
  let [i, u] = n.useState(!1), [l, c] = n.useState(null), d = n.useCallback(async () => {
    try {
      u(!0);
      let a = await (0, r.verifyUserCode)(e);
      u(!1), t({
        userCode: e,
        clientId: a.body.client_id,
        scopes: a.body.scopes,
        twoWayLinkCode: a.body.two_way_link_code
      })
    } catch (e) {
      var n;
      c(429 === (n = null == e ? void 0 : e.status) ? o.default.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT : 404 === n || 400 === n ? o.default.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE : o.default.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN), u(!1), (null == e ? void 0 : e.status) === 401 && a()
    }
  }, [e, t, a]);
  return n.useEffect(() => {
    e.length === s.OAuthConstants.USER_CODE_LENGTH ? d() : c(null)
  }, [e, d]), {
    manualSubmit: d,
    error: l,
    submitting: i
  }
}