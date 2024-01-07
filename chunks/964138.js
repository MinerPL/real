            "use strict";
            var i = r("934940"),
                n = i.define("Time", function() {
                    this.choice({
                        utcTime: this.utctime(),
                        generalTime: this.gentime()
                    })
                }),
                o = i.define("AttributeTypeValue", function() {
                    this.seq().obj(this.key("type").objid(), this.key("value").any())
                }),
                a = i.define("AlgorithmIdentifier", function() {
                    this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
                }),
                s = i.define("SubjectPublicKeyInfo", function() {
                    this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr())
                }),
                f = i.define("RelativeDistinguishedName", function() {
                    this.setof(o)
                }),
                h = i.define("RDNSequence", function() {
                    this.seqof(f)
                }),
                c = i.define("Name", function() {
                    this.choice({
                        rdnSequence: this.use(h)
                    })
                }),
                u = i.define("Validity", function() {
                    this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
                }),
                d = i.define("Extension", function() {
                    this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
                }),
                l = i.define("TBSCertificate", function() {
                    this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(c), this.key("validity").use(u), this.key("subject").use(c), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional())
                }),
                p = i.define("X509Certificate", function() {
                    this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr())
                });
            t.exports = p