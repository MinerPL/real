            var i = r("441270"),
                n = r("944026"),
                o = r("599235"),
                a = r("912065").Buffer,
                s = {
                    "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                    "des-ede3": n.EDE,
                    "des-ede-cbc": n.CBC.instantiate(n.EDE),
                    "des-ede": n.EDE,
                    "des-cbc": n.CBC.instantiate(n.DES),
                    "des-ecb": n.DES
                };

            function f(t) {
                i.call(this);
                var e, r = t.mode.toLowerCase(),
                    n = s[r];
                e = t.decrypt ? "decrypt" : "encrypt";
                var o = t.key;
                !a.isBuffer(o) && (o = a.from(o)), ("des-ede" === r || "des-ede-cbc" === r) && (o = a.concat([o, o.slice(0, 8)]));
                var f = t.iv;
                !a.isBuffer(f) && (f = a.from(f)), this._des = n.create({
                    key: o,
                    iv: f,
                    type: e
                })
            }
            s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], t.exports = f, o(f, i), f.prototype._update = function(t) {
                return a.from(this._des.update(t))
            }, f.prototype._final = function() {
                return a.from(this._des.final())
            }