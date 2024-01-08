            "use strict";
            let i = r("784014"),
                n = r("448450"),
                a = r("599235");

            function o(t, e) {
                this.name = t, this.body = e, this.decoders = {}, this.encoders = {}
            }
            e.define = function(t, e) {
                return new o(t, e)
            }, o.prototype._createNamed = function(t) {
                let e = this.name;

                function r(t) {
                    this._initNamed(t, e)
                }
                return a(r, t), r.prototype._initNamed = function(e, r) {
                    t.call(this, e, r)
                }, new r(this)
            }, o.prototype._getDecoder = function(t) {
                return t = t || "der", !this.decoders.hasOwnProperty(t) && (this.decoders[t] = this._createNamed(n[t])), this.decoders[t]
            }, o.prototype.decode = function(t, e, r) {
                return this._getDecoder(e).decode(t, r)
            }, o.prototype._getEncoder = function(t) {
                return t = t || "der", !this.encoders.hasOwnProperty(t) && (this.encoders[t] = this._createNamed(i[t])), this.encoders[t]
            }, o.prototype.encode = function(t, e, r) {
                return this._getEncoder(e).encode(t, r)
            }