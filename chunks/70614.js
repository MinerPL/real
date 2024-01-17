"use strict";
n.r(t), n.d(t, {
  authorizeAndSetTestModeApplication: function() {
    return f
  },
  reset: function() {
    return E
  },
  resetError: function() {
    return _
  }
}), n("70102"), n("702976");
var s = n("913144"),
  l = n("550766"),
  a = n("651057"),
  i = n("299285"),
  r = n("653047"),
  o = n("568734"),
  u = n("253981"),
  d = n("568131"),
  c = n("49111");
async function f(e, t) {
  s.default.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    let n = await (0, l.validateTestMode)(e);
    if (!n) throw Error("Do not have access!");
    let f = i.default.getApplication(e);
    null == f && (f = r.default.createFromServer(await a.default.fetchApplication(e)));
    let E = (0, o.hasFlag)(f.flags, c.ApplicationFlags.EMBEDDED);
    if (E && (null == t || !u.default.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return !E && d.createTestModeLibraryApplications(f), s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: E ? t : null
    }), f
  } catch (t) {
    return s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function E() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function _() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}