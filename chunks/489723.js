            "use strict";
            r("70102"), r("781738");
            let i = r("599235"),
                n = r("415005").Buffer,
                o = r("348793");

            function a(t) {
                o.call(this, t), this.enc = "pem"
            }
            i(a, o), t.exports = a, a.prototype.decode = function(t, e) {
                let r = t.toString().split(/[\r\n]+/g),
                    i = e.label.toUpperCase(),
                    a = /^-----(BEGIN|END) ([^-]+)-----$/,
                    s = -1,
                    f = -1;
                for (let t = 0; t < r.length; t++) {
                    let e = r[t].match(a);
                    if (null !== e) {
                        if (e[2] === i) {
                            if (-1 === s) {
                                if ("BEGIN" !== e[1]) break;
                                s = t
                            } else {
                                if ("END" !== e[1]) break;
                                f = t;
                                break
                            }
                        }
                    }
                }
                if (-1 === s || -1 === f) throw Error("PEM section not found for: " + i);
                let h = r.slice(s + 1, f).join("");
                h.replace(/[^a-z0-9+/=]+/gi, "");
                let c = n.from(h, "base64");
                return o.prototype.decode.call(this, c, e)
            }