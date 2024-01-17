"use strict";
n.r(t), n.d(t, {
  validateMultiAccountTokens: function() {
    return f
  },
  switchAccount: function() {
    return E
  },
  removeAccount: function() {
    return _
  }
});
var a = n("171718"),
  s = n("872717"),
  i = n("913144"),
  l = n("437822"),
  r = n("605250"),
  o = n("271938"),
  u = n("770032"),
  d = n("49111");
let c = new r.default("MultiAccountActionCreators");

function f() {
  let e = o.default.getId(),
    t = u.default.getUsers();
  t.forEach(async t => {
    let n, {
        id: l
      } = t,
      r = a.default.getToken(l);
    if (null == r || "" === r) {
      i.default.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: l
      });
      return
    }
    i.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: l
    });
    try {
      n = await s.default.get({
        url: d.Endpoints.ME,
        headers: {
          authorization: r
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      i.default.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: l
      });
      return
    }
    i.default.dispatch({
      type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), i.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: l
    })
  })
}

function E(e, t) {
  c.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = a.default.getToken(e);
  return null == n ? (c.log("Switching accounts failed because there was no token"), i.default.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : l.default.switchAccountToken(n, t)
}

function _(e) {
  i.default.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}