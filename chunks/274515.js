"use strict";
n.r(t), n.d(t, {
  generateRsaKeyPair: function() {
    return r
  },
  serializePublicKey: function() {
    return i
  },
  publicKeyFingerprint: function() {
    return o
  },
  decryptEncodedCiphertext: function() {
    return E
  },
  decryptNonce: function() {
    return h
  },
  decodeEncodedUserRecord: function() {
    return _
  }
}), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007"), n("781738"), n("492311"), n("70102");
var s = n("627445"),
  a = n.n(s),
  l = n("766274");

function r() {
  return window.crypto.subtle.generateKey({
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256"
  }, !0, ["decrypt"])
}
async function i(e) {
  a(null != e.publicKey, "public key cannot be null");
  let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
  return btoa(String.fromCharCode(...new Uint8Array(t)))
}
async function o(e) {
  a(null != e.publicKey, "public key cannot be null");
  let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
  return c(t)
}

function u(e) {
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
}

function d(e) {
  return Uint8Array.from(atob(e), e => e.charCodeAt(0))
}
async function c(e) {
  let t = await window.crypto.subtle.digest({
    name: "SHA-256"
  }, e);
  return u(t)
}

function f(e, t) {
  return a(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
    name: "RSA-OAEP",
    hash: "SHA-256"
  }, e.privateKey, t)
}
async function E(e, t) {
  let n = new TextDecoder,
    s = await f(e, d(t));
  return n.decode(s)
}
async function h(e, t) {
  let n = await f(e, d(t));
  return u(n)
}
async function _(e, t) {
  t = await E(e, t);
  let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
  if (null == n) throw Error("Invalid encoded user record.");
  let [, s, a, r, i] = n;
  return new l.default({
    id: s,
    discriminator: a,
    avatar: "0" === r ? null : r,
    username: i
  })
}