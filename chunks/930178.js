            "use strict";
            let i = r("784014"),
                n = r("448450"),
                o = r("599235");

            function a(t, e) {
                this.name = t, this.body = e, this.decoders = {}, this.encoders = {}
            }
            e.define = function(t, e) {
                return new a(t, e)
            }, a.prototype._createNamed = function(t) {
                let e = this.name;

                function r(t) {
                    this._initNamed(t, e)
                }
                return o(r, t), r.prototype._initNamed = function(e, r) {
                    t.call(this, e, r)
                }, new r(this)
            }, a.prototype._getDecoder = function(t) {
                return t = t || "der", !this.decoders.hasOwnProperty(t) && (this.decoders[t] = this._createNamed(n[t])), this.decoders[t]
            }, a.prototype.decode = function(t, e, r) {
                return this._getDecoder(e).decode(t, r)
            }, a.prototype._getEncoder = function(t) {
                return t = t || "der", !this.encoders.hasOwnProperty(t) && (this.encoders[t] = this._createNamed(i[t])), this.encoders[t]
            }, a.prototype.encode = function(t, e, r) {
                return this._getEncoder(e).encode(t, r)
            }