"use strict";
a.r(t), a.d(t, {
  useDeviceCodeAuthorizeCallback: function() {
    return C
  }
}), a("70102");
var n = a("884691"),
  r = a("627445"),
  s = a.n(r),
  o = a("382825"),
  i = a("619340"),
  u = a("535013"),
  l = a("8222"),
  c = a("751577");
async function d(e, t, a) {
  var n, r, l, d;
  let C = (0, c.clientIdToActivateDevicePlatform)(e);
  if (null == C) throw await A(a, 1, "authorize"), Error("Unsupported client_id for two way link");
  let f = null;
  try {
    let {
      body: e
    } = await i.default.authorize(C, {
      twoWayLinkType: o.TwoWayLinkType.DEVICE_CODE,
      userCode: a
    });
    f = e.url
  } catch (e) {
    throw await A(a, null !== (r = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.code) && void 0 !== r ? r : 0, "authorize"), Error("error during two way authorize")
  }
  let h = null;
  try {
    s(null != f, "No URL in authorize response");
    let {
      state: e
    } = (0, u.getCallbackParamsFromURL)(f);
    s(null != e, "Authorize URL state query parameter must be present"), h = e
  } catch (e) {
    throw await A(a, 2, "authorize"), Error("error parsing callback params")
  }
  try {
    await i.default.callback(C, {
      code: t,
      state: h
    })
  } catch (e) {
    throw await A(a, null !== (d = null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) && void 0 !== d ? d : 0, "callback"), Error("error during two way callback")
  }
}
async function A(e, t, a) {
  try {
    await (0, l.finishUserCodeTwoWayLinkError)(e, t, a)
  } catch (e) {}
}

function C(e, t, a, r) {
  let s = n.useCallback(async n => {
    if (!n) {
      try {
        await (0, l.finishUserCode)(e.userCode, "denied")
      } catch (e) {}
      t();
      return
    }
    if (null == e.twoWayLinkCode) try {
      await (0, l.finishUserCode)(e.userCode, "granted"), r(e)
    } catch (t) {
      a(e)
    } else try {
      await d(e.clientId, e.twoWayLinkCode, e.userCode), r(e)
    } catch (t) {
      a(e)
    }
  }, [e, t, a, r]);
  return s
}