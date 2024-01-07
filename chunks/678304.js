            "use strict";
            var i = r("934940");
            e.certificate = r("964138");
            var n = i.define("RSAPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
            });
            e.RSAPrivateKey = n;
            var o = i.define("RSAPublicKey", function() {
                this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
            });
            e.RSAPublicKey = o;
            var a = i.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
            });
            e.PublicKey = a;
            var s = i.define("AlgorithmIdentifier", function() {
                    this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
                }),
                f = i.define("PrivateKeyInfo", function() {
                    this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
                });
            e.PrivateKey = f;
            var h = i.define("EncryptedPrivateKeyInfo", function() {
                this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
            });
            e.EncryptedPrivateKey = h;
            var c = i.define("DSAPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
            });
            e.DSAPrivateKey = c, e.DSAparam = i.define("DSAparam", function() {
                this.int()
            });
            var u = i.define("ECPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(d), this.key("publicKey").optional().explicit(1).bitstr())
            });
            e.ECPrivateKey = u;
            var d = i.define("ECParameters", function() {
                this.choice({
                    namedCurve: this.objid()
                })
            });
            e.signature = i.define("signature", function() {
                this.seq().obj(this.key("r").int(), this.key("s").int())
            })