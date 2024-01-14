"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("522632"),
  s = n("316693"),
  i = n("872717"),
  l = n("524297"),
  r = n("95410"),
  o = n("913144"),
  u = n("8222"),
  d = n("357974"),
  c = n("697218"),
  E = n("991170"),
  f = n("861309"),
  _ = n("492249"),
  h = n("49111");
let C = "CachedTokens";
async function T(e, t, n) {
  let a, {
    client_id: i,
    response_type: l = "code",
    redirect_uri: r,
    code_challenge: o,
    code_challenge_method: h,
    state: C,
    scope: T,
    permissions: I,
    guild_id: S,
    channel_id: N,
    prompt: A,
    disable_guild_select: p
  } = e;
  if (null == i) throw new f.default(_.RPCErrors.OAUTH2_ERROR, "No Client ID provided");
  if (null != r) throw new f.default(_.RPCErrors.OAUTH2_ERROR, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let m = [];
  "string" == typeof T ? m = T.split(" ").filter(e => e.length > 0) : Array.isArray(T) && (m = T);
  let g = c.default.getCurrentUser();
  if (null == g) throw new f.default(_.RPCErrors.OAUTH2_ERROR, "Client is not logged in");
  try {
    a = await (0, u.fetchAuthorization)({
      clientId: i,
      scopes: m,
      responseType: l,
      redirectUri: r,
      codeChallenge: o,
      codeChallengeMethod: h,
      state: C
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new f.default(_.RPCErrors.OAUTH2_ERROR, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (A === d.OAuth2Prompts.NONE && null != a && a.authorized) try {
    let e = await (0, u.authorize)({
      authorize: !0,
      clientId: i,
      scopes: m,
      responseType: l,
      redirectUri: r,
      codeChallenge: o,
      codeChallengeMethod: h,
      state: C
    });
    return e.location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new f.default(_.RPCErrors.OAUTH2_ERROR, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(a.application);
  let R = E.default.NONE;
  try {
    R = s.default.deserialize(null != I ? I : 0)
  } catch (e) {}
  return t(i, a, m, R, l, r, o, h, C, S, N, A, p)
}

function I(e, t) {
  if (e.authorization.accessToken) throw new f.default(_.RPCErrors.INVALID_COMMAND, "Already authenticated");
  if (e.authorization.authing) throw new f.default(_.RPCErrors.INVALID_COMMAND, "Already authenticating");
  return e.authorization.authing = !0, i.default.get({
    url: h.Endpoints.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: !0
  }).then(n => {
    e.authorization.authing = !1;
    let {
      application: a,
      user: s,
      scopes: i,
      expires: l
    } = n.body;
    if (e.application.id !== a.id) throw new f.default(_.RPCErrors.INVALID_CLIENTID, "Application does not match the connection's");
    let r = c.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new f.default(_.RPCErrors.INVALID_TOKEN, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...i, _.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(l), o.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new f.default(_.RPCErrors.INVALID_TOKEN, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function S(e, t) {
  return {
    [h.RPCCommands.AUTHENTICATE]: (0, l.createRPCCommand)(h.RPCCommands.AUTHENTICATE, {
      handler(n) {
        let {
          socket: s,
          args: {
            access_token: i
          }
        } = n;
        if (null == i && s.transport === _.TransportTypes.IPC) {
          let n = s.application.id;
          if (null == n) throw new f.default(_.RPCErrors.INVALID_COMMAND, "No application.");
          let l = h.OAuth2Scopes.IDENTIFY,
            o = () => T({
              client_id: n,
              scope: l,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new f.default(_.RPCErrors.UNKNOWN_ERROR, "Unknown error occurred");
              let t = e.split(/#|\?/),
                i = a.parse(t[t.length - 1]);
              if (null != i.error) {
                var l;
                throw new f.default(_.RPCErrors.OAUTH2_ERROR, "OAuth2 Error: ".concat(i.error, ": ").concat(null !== (l = i.error_description) && void 0 !== l ? l : "unknown error"))
              }
              return ! function(e, t, n, a) {
                var s;
                let i = null !== (s = r.default.get(C)) && void 0 !== s ? s : {};
                i[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, r.default.set(C, i)
              }(n, i.access_token, i.scope, i.expires_in), I(s, i.access_token)
            });
          return null != (i = function(e, t) {
            let n = r.default.get(C);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], r.default.set(C, n)
            }
          }(n, l)) ? I(s, i).catch(() => (! function(e) {
            var t;
            let n = null !== (t = r.default.get(C)) && void 0 !== t ? t : {};
            delete n[e], r.default.set(C, n)
          }(n), o())) : o()
        }
        if (null == i) throw new f.default(_.RPCErrors.INVALID_TOKEN, "No access token provided");
        return I(s, i)
      }
    }),
    [h.RPCCommands.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: l
        } = n, r = l.client_id;
        if (!r) throw new f.default(_.RPCErrors.INVALID_CLIENTID, "No client id provided");
        if (null != s.authorization.accessToken) throw new f.default(_.RPCErrors.INVALID_COMMAND, "Already authenticated");
        if (s.authorization.authing) throw new f.default(_.RPCErrors.INVALID_COMMAND, "Already authing");
        return s.authorization.authing = !0, i.default.get({
          url: h.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(n => {
          let a = n.body;
          if (s.application.id !== a.id) throw new f.default(_.RPCErrors.INVALID_CLIENTID, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, T({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new f.default(_.RPCErrors.INVALID_CLIENTID, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new f.default(_.RPCErrors.UNKNOWN_ERROR, "Unknown error occurred");
          let t = a.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new f.default(_.RPCErrors.OAUTH2_ERROR, "OAuth2 Error: ".concat(t.error, ": ").concat(null !== (n = t.error_description) && void 0 !== n ? n : "unknown error"))
          }
          return {
            code: t.code
          }
        }).catch(e => {
          throw s.authorization.authing = !1, e
        })
      }
    }
  }
}