"use strict";
E.r(_), E.d(_, {
  default: function() {
    return C
  },
  setRequestPatch: function() {
    return c
  },
  setAwaitOnline: function() {
    return U
  }
}), E("222007"), E("424973");
var t = E("726581"),
  o = E.n(t),
  n = E("981980");
E("704744");
var r = E("644642"),
  i = E("486196"),
  a = E("614247"),
  I = E("446825").Buffer;
let s = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

function T(e, _, E, t, r) {
  var S, O, A, R, l;
  let L = o[e](_.url);
  if (null != _.onRequestCreated && _.onRequestCreated(L), null != _.query) {
    let e = _.query;
    if ("object" == typeof e) {
      let _ = {
        ...e
      };
      Object.keys(_).map(e => {
        null == _[e] && delete _[e]
      }), e = _
    }
    L.query(e)
  }
  if (_.body && L.send(_.body), null != _.headers && L.set(_.headers), null != _.reason && L.set("X-Audit-Log-Reason", encodeURIComponent(_.reason)), null === (S = _.attachments) || void 0 === S || S.forEach(e => {
      L.attach(e.name, e.file, e.filename)
    }), null === (O = _.fields) || void 0 === O || O.forEach(e => {
      L.field(e.name, e.value)
    }), null != _.context) {
    let e = function(e) {
      try {
        return I.from(JSON.stringify(e)).toString("base64")
      } catch (e) {
        return null
      }
    }(_.context);
    null != e && L.set("X-Context-Properties", e)
  }
  null != _.retried && 0 !== _.retried && L.set("X-Failed-Requests", "".concat(_.retried)), null != _.timeout && 0 !== _.timeout && L.timeout(_.timeout), _.binary && L.responseType("blob"), null != _.onRequestProgress && L.on("progress", e => {
    var E;
    null === (E = _.onRequestProgress) || void 0 === E || E.call(_, e)
  });
  let u = () => {
    _.backoff = null != _.backoff ? _.backoff : new n.default, _.retried = (null != _.retried ? _.retried : 0) + 1, _.backoff.fail(() => d(_.url).then(() => T(e, _, E, t, r)))
  };
  null == D || null === (A = D.prepareRequest) || void 0 === A || A.call(D, L), L.ok(e => null != e.status), L.then(o => {
    var n, I, S;
    if (null != _.retries && _.retries-- > 0 && s.has(o.status)) return u();
    let O = {
      ok: o.ok,
      headers: o.headers,
      body: o.body,
      text: o.text,
      status: o.status
    };
    N(_, O);
    let A = !1,
      R = (o, n) => {
        let i = {
          ..._,
          headers: {
            ..._.headers,
            ...o
          },
          interceptResponse: n
        };
        A = !0, T(e, i, E, t, r)
      },
      l = e => {
        !A && (t(e), null == r || r({
          ok: !1,
          hasErr: !0,
          err: e
        }))
      };
    if ((null == _ ? void 0 : null === (n = _.interceptResponse) || void 0 === n ? void 0 : n.call(_, o, R, l)) !== !0) {
      if ((null == D ? void 0 : null === (I = D.interceptResponse) || void 0 === I ? void 0 : I.call(D, o, R, l)) !== !0) {
        if (o.ok) E(O);
        else {
          if (_.oldFormErrors && (null == O ? void 0 : null === (S = O.body) || void 0 === S ? void 0 : S.code) === i.INVALID_FORM_BODY_ERROR_CODE) {
            let {
              errors: e
            } = O.body;
            null != e && (O.body = (0, a.default)(e))
          }
          t(O)
        }
        null != r && r({
          hasErr: !1,
          ...O
        })
      }
    }
  }, e => {
    null != _.retries && _.retries-- > 0 && "ABORTED" !== e.code ? u() : (N(_), t(e), null != r && r({
      ok: !1,
      hasErr: !0,
      err: e
    }))
  }), (null === (R = _.signal) || void 0 === R ? void 0 : R.aborted) ? L.abort() : null === (l = _.signal) || void 0 === l || l.addEventListener("abort", () => L.abort(), {
    once: !0
  })
}
let S = new Map;

function N(e, _) {
  let E = S.get(e.url);
  if (null == E) return;
  let t = E.queue.shift();
  if (null == t) {
    S.delete(e.url);
    return
  }
  if (null != _ && 429 === _.status) {
    var o;
    let e = (null === (o = _.body) || void 0 === o ? void 0 : o.retry_after) || 5;
    setTimeout(t, 1e3 * e)
  } else t()
}

function O(e, _, E) {
  return new Promise((t, o) => {
    "string" == typeof _ && (_ = {
      url: _
    });
    let n = S.get(_.url);
    null != n ? n.queue.push(T.bind(null, e, _, t, o, E)) : (S.set(_.url, {
      queue: []
    }), T(e, _, t, o, E))
  })
}
let A = O.bind(null, "get"),
  R = O.bind(null, "post"),
  l = O.bind(null, "put"),
  L = O.bind(null, "patch"),
  u = O.bind(null, "del");
if (E.g.isServerRendering) {
  let e = (e, _) => Promise.resolve({
    ok: !0,
    status: 200,
    headers: {},
    body: null,
    text: ""
  });
  A = e, R = e, l = e, L = e, u = e
}
var C = {
  get: A,
  post: R,
  put: l,
  patch: L,
  delete: u,
  V6OrEarlierAPIError: r.default,
  V8APIError: i.default,
  getAPIBaseURL() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
  }
};
let D = null;

function c(e) {
  D = e
}
let d = () => Promise.resolve();

function U(e) {
  d = e
}