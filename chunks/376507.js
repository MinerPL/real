"use strict";

function r(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
    r = atob(n),
    o = new ArrayBuffer(r.length),
    i = new Uint8Array(o);
  for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
  return o
}

function o(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  let r = btoa(n),
    o = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return o
}
n.r(t), n.d(t, {
  create: function() {
    return I
  },
  get: function() {
    return M
  }
}), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102");
var i = "copy",
  a = "convert";

function u(e, t, n) {
  if (t === i) return n;
  if (t === a) return e(n);
  if (t instanceof Array) return n.map(n => u(e, t[0], n));
  if (t instanceof Object) {
    let r = {};
    for (let [o, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(n);
        void 0 !== e && (n[o] = e)
      }
      if (!(o in n)) {
        if (i.required) throw Error("Missing key: ".concat(o));
        continue
      }
      if (null == n[o]) {
        r[o] = null;
        continue
      }
      r[o] = u(e, i.schema, n[o])
    }
    return r
  }
}

function s(e, t) {
  return {
    required: !0,
    schema: e,
    derive: t
  }
}

function l(e) {
  return {
    required: !0,
    schema: e
  }
}

function c(e) {
  return {
    required: !1,
    schema: e
  }
}
var d = {
    type: l(i),
    id: l(a),
    transports: c(i)
  },
  f = {
    appid: c(i),
    appidExclude: c(i),
    credProps: c(i)
  },
  p = {
    appid: c(i),
    appidExclude: c(i),
    credProps: c(i)
  },
  h = {
    publicKey: l({
      rp: l(i),
      user: l({
        id: l(a),
        name: l(i),
        displayName: l(i)
      }),
      challenge: l(a),
      pubKeyCredParams: l(i),
      timeout: c(i),
      excludeCredentials: c([d]),
      authenticatorSelection: c(i),
      attestation: c(i),
      extensions: c(f)
    }),
    signal: c(i)
  },
  g = {
    type: l(i),
    id: l(i),
    rawId: l(a),
    authenticatorAttachment: c(i),
    response: l({
      clientDataJSON: l(a),
      attestationObject: l(a),
      transports: s(i, e => {
        var t;
        return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
      })
    }),
    clientExtensionResults: s(p, e => e.getClientExtensionResults())
  },
  m = {
    mediation: c(i),
    publicKey: l({
      challenge: l(a),
      timeout: c(i),
      rpId: c(i),
      allowCredentials: c([d]),
      userVerification: c(i),
      extensions: c(f)
    }),
    signal: c(i)
  },
  E = {
    type: l(i),
    id: l(i),
    rawId: l(a),
    authenticatorAttachment: c(i),
    response: l({
      clientDataJSON: l(a),
      authenticatorData: l(a),
      signature: l(a),
      userHandle: l(a)
    }),
    clientExtensionResults: s(p, e => e.getClientExtensionResults())
  };
async function I(e) {
  let t = await navigator.credentials.create(u(r, h, e));
  return u(o, g, t)
}
async function M(e) {
  let t = await navigator.credentials.get(u(r, m, e));
  return u(o, E, t)
}