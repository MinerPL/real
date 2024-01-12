            "use strict";
            var r = s("934940"),
                i = r.define("Time", function() {
                    this.choice({
                        utcTime: this.utctime(),
                        generalTime: this.gentime()
                    })
                }),
                n = r.define("AttributeTypeValue", function() {
                    this.seq().obj(this.key("type").objid(), this.key("value").any())
                }),
                c = r.define("AlgorithmIdentifier", function() {
                    this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
                }),
                o = r.define("SubjectPublicKeyInfo", function() {
                    this.seq().obj(this.key("algorithm").use(c), this.key("subjectPublicKey").bitstr())
                }),
                f = r.define("RelativeDistinguishedName", function() {
                    this.setof(n)
                }),
                u = r.define("RDNSequence", function() {
                    this.seqof(f)
                }),
                a = r.define("Name", function() {
                    this.choice({
                        rdnSequence: this.use(u)
                    })
                }),
                d = r.define("Validity", function() {
                    this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
                }),
                p = r.define("Extension", function() {
                    this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
                }),
                b = r.define("TBSCertificate", function() {
                    this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(c), this.key("issuer").use(a), this.key("validity").use(d), this.key("subject").use(a), this.key("subjectPublicKeyInfo").use(o), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(p).optional())
                }),
                h = r.define("X509Certificate", function() {
                    this.seq().obj(this.key("tbsCertificate").use(b), this.key("signatureAlgorithm").use(c), this.key("signatureValue").bitstr())
                });
            t.exports = h