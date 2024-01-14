s("70102"), s("424973");
var r = s("678304"),
  i = s("678889"),
  n = s("811527"),
  c = s("891044"),
  o = s("560422"),
  f = s("912065").Buffer;

function u(t) {
  "object" == typeof t && !f.isBuffer(t) && (e = t.passphrase, t = t.key), "string" == typeof t && (t = f.from(t));
  var e, s, u, a = n(t, e),
    d = a.tag,
    p = a.data;
  switch (d) {
    case "CERTIFICATE":
      u = r.certificate.decode(p, "der").tbsCertificate.subjectPublicKeyInfo;
    case "PUBLIC KEY":
      switch (!u && (u = r.PublicKey.decode(p, "der")), s = u.algorithm.algorithm.join(".")) {
        case "1.2.840.113549.1.1.1":
          return r.RSAPublicKey.decode(u.subjectPublicKey.data, "der");
        case "1.2.840.10045.2.1":
          return u.subjectPrivateKey = u.subjectPublicKey, {
            type: "ec",
            data: u
          };
        case "1.2.840.10040.4.1":
          return u.algorithm.params.pub_key = r.DSAparam.decode(u.subjectPublicKey.data, "der"), {
            type: "dsa",
            data: u.algorithm.params
          };
        default:
          throw Error("unknown key id " + s)
      }
    case "ENCRYPTED PRIVATE KEY":
      p = function(t, e) {
        var s = t.algorithm.decrypt.kde.kdeparams.salt,
          r = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
          n = i[t.algorithm.decrypt.cipher.algo.join(".")],
          u = t.algorithm.decrypt.cipher.iv,
          a = t.subjectPrivateKey,
          d = parseInt(n.split("-")[1], 10) / 8,
          p = o.pbkdf2Sync(e, s, r, d, "sha1"),
          b = c.createDecipheriv(n, p, u),
          h = [];
        return h.push(b.update(a)), h.push(b.final()), f.concat(h)
      }(p = r.EncryptedPrivateKey.decode(p, "der"), e);
    case "PRIVATE KEY":
      switch (s = (u = r.PrivateKey.decode(p, "der")).algorithm.algorithm.join(".")) {
        case "1.2.840.113549.1.1.1":
          return r.RSAPrivateKey.decode(u.subjectPrivateKey, "der");
        case "1.2.840.10045.2.1":
          return {
            curve: u.algorithm.curve, privateKey: r.ECPrivateKey.decode(u.subjectPrivateKey, "der").privateKey
          };
        case "1.2.840.10040.4.1":
          return u.algorithm.params.priv_key = r.DSAparam.decode(u.subjectPrivateKey, "der"), {
            type: "dsa",
            params: u.algorithm.params
          };
        default:
          throw Error("unknown key id " + s)
      }
    case "RSA PUBLIC KEY":
      return r.RSAPublicKey.decode(p, "der");
    case "RSA PRIVATE KEY":
      return r.RSAPrivateKey.decode(p, "der");
    case "DSA PRIVATE KEY":
      return {
        type: "dsa", params: r.DSAPrivateKey.decode(p, "der")
      };
    case "EC PRIVATE KEY":
      return {
        curve: (p = r.ECPrivateKey.decode(p, "der")).parameters.value, privateKey: p.privateKey
      };
    default:
      throw Error("unknown key type " + d)
  }
}
t.exports = u, u.signature = r.signature