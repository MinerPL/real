            var i = r("441270"),
                n = r("944026"),
                a = r("599235"),
                o = r("912065").Buffer,
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
                var a = t.key;
                !o.isBuffer(a) && (a = o.from(a)), ("des-ede" === r || "des-ede-cbc" === r) && (a = o.concat([a, a.slice(0, 8)]));
                var f = t.iv;
                !o.isBuffer(f) && (f = o.from(f)), this._des = n.create({
                    key: a,
                    iv: f,
                    type: e
                })
            }
            s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], t.exports = f, a(f, i), f.prototype._update = function(t) {
                return o.from(this._des.update(t))
            }, f.prototype._final = function() {
                return o.from(this._des.final())
            }