            "use strict";
            r("424973");
            let i = r("599235"),
                n = r("246305");

            function o(t) {
                n.call(this, t), this.enc = "pem"
            }
            i(o, n), t.exports = o, o.prototype.encode = function(t, e) {
                let r = n.prototype.encode.call(this, t),
                    i = r.toString("base64"),
                    o = ["-----BEGIN " + e.label + "-----"];
                for (let t = 0; t < i.length; t += 64) o.push(i.slice(t, t + 64));
                return o.push("-----END " + e.label + "-----"), o.join("\n")
            }