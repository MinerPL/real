            "use strict";
            r("424973");
            let i = r("599235"),
                n = r("246305");

            function a(t) {
                n.call(this, t), this.enc = "pem"
            }
            i(a, n), t.exports = a, a.prototype.encode = function(t, e) {
                let r = n.prototype.encode.call(this, t),
                    i = r.toString("base64"),
                    a = ["-----BEGIN " + e.label + "-----"];
                for (let t = 0; t < i.length; t += 64) a.push(i.slice(t, t + 64));
                return a.push("-----END " + e.label + "-----"), a.join("\n")
            }