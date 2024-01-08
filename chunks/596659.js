            r("70102"), r("424973");
            var i = r("678304"),
                n = r("678889"),
                a = r("811527"),
                o = r("891044"),
                s = r("560422"),
                f = r("912065").Buffer;

            function h(t) {
                "object" == typeof t && !f.isBuffer(t) && (e = t.passphrase, t = t.key), "string" == typeof t && (t = f.from(t));
                var e, r, h, c = a(t, e),
                    u = c.tag,
                    d = c.data;
                switch (u) {
                    case "CERTIFICATE":
                        h = i.certificate.decode(d, "der").tbsCertificate.subjectPublicKeyInfo;
                    case "PUBLIC KEY":
                        switch (!h && (h = i.PublicKey.decode(d, "der")), r = h.algorithm.algorithm.join(".")) {
                            case "1.2.840.113549.1.1.1":
                                return i.RSAPublicKey.decode(h.subjectPublicKey.data, "der");
                            case "1.2.840.10045.2.1":
                                return h.subjectPrivateKey = h.subjectPublicKey, {
                                    type: "ec",
                                    data: h
                                };
                            case "1.2.840.10040.4.1":
                                return h.algorithm.params.pub_key = i.DSAparam.decode(h.subjectPublicKey.data, "der"), {
                                    type: "dsa",
                                    data: h.algorithm.params
                                };
                            default:
                                throw Error("unknown key id " + r)
                        }
                    case "ENCRYPTED PRIVATE KEY":
                        d = function(t, e) {
                            var r = t.algorithm.decrypt.kde.kdeparams.salt,
                                i = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                                a = n[t.algorithm.decrypt.cipher.algo.join(".")],
                                h = t.algorithm.decrypt.cipher.iv,
                                c = t.subjectPrivateKey,
                                u = parseInt(a.split("-")[1], 10) / 8,
                                d = s.pbkdf2Sync(e, r, i, u, "sha1"),
                                l = o.createDecipheriv(a, d, h),
                                p = [];
                            return p.push(l.update(c)), p.push(l.final()), f.concat(p)
                        }(d = i.EncryptedPrivateKey.decode(d, "der"), e);
                    case "PRIVATE KEY":
                        switch (r = (h = i.PrivateKey.decode(d, "der")).algorithm.algorithm.join(".")) {
                            case "1.2.840.113549.1.1.1":
                                return i.RSAPrivateKey.decode(h.subjectPrivateKey, "der");
                            case "1.2.840.10045.2.1":
                                return {
                                    curve: h.algorithm.curve, privateKey: i.ECPrivateKey.decode(h.subjectPrivateKey, "der").privateKey
                                };
                            case "1.2.840.10040.4.1":
                                return h.algorithm.params.priv_key = i.DSAparam.decode(h.subjectPrivateKey, "der"), {
                                    type: "dsa",
                                    params: h.algorithm.params
                                };
                            default:
                                throw Error("unknown key id " + r)
                        }
                    case "RSA PUBLIC KEY":
                        return i.RSAPublicKey.decode(d, "der");
                    case "RSA PRIVATE KEY":
                        return i.RSAPrivateKey.decode(d, "der");
                    case "DSA PRIVATE KEY":
                        return {
                            type: "dsa", params: i.DSAPrivateKey.decode(d, "der")
                        };
                    case "EC PRIVATE KEY":
                        return {
                            curve: (d = i.ECPrivateKey.decode(d, "der")).parameters.value, privateKey: d.privateKey
                        };
                    default:
                        throw Error("unknown key type " + u)
                }
            }
            t.exports = h, h.signature = i.signature