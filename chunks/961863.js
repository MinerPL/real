            var r = s("441270"),
                i = s("944026"),
                n = s("599235"),
                c = s("912065").Buffer,
                o = {
                    "des-ede3-cbc": i.CBC.instantiate(i.EDE),
                    "des-ede3": i.EDE,
                    "des-ede-cbc": i.CBC.instantiate(i.EDE),
                    "des-ede": i.EDE,
                    "des-cbc": i.CBC.instantiate(i.DES),
                    "des-ecb": i.DES
                };

            function f(t) {
                r.call(this);
                var e, s = t.mode.toLowerCase(),
                    i = o[s];
                e = t.decrypt ? "decrypt" : "encrypt";
                var n = t.key;
                !c.isBuffer(n) && (n = c.from(n)), ("des-ede" === s || "des-ede-cbc" === s) && (n = c.concat([n, n.slice(0, 8)]));
                var f = t.iv;
                !c.isBuffer(f) && (f = c.from(f)), this._des = i.create({
                    key: n,
                    iv: f,
                    type: e
                })
            }
            o.des = o["des-cbc"], o.des3 = o["des-ede3-cbc"], t.exports = f, n(f, r), f.prototype._update = function(t) {
                return c.from(this._des.update(t))
            }, f.prototype._final = function() {
                return c.from(this._des.final())
            }