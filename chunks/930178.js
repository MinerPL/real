            "use strict";
            let r = s("784014"),
                i = s("448450"),
                n = s("599235");

            function c(t, e) {
                this.name = t, this.body = e, this.decoders = {}, this.encoders = {}
            }
            e.define = function(t, e) {
                return new c(t, e)
            }, c.prototype._createNamed = function(t) {
                let e = this.name;

                function s(t) {
                    this._initNamed(t, e)
                }
                return n(s, t), s.prototype._initNamed = function(e, s) {
                    t.call(this, e, s)
                }, new s(this)
            }, c.prototype._getDecoder = function(t) {
                return t = t || "der", !this.decoders.hasOwnProperty(t) && (this.decoders[t] = this._createNamed(i[t])), this.decoders[t]
            }, c.prototype.decode = function(t, e, s) {
                return this._getDecoder(e).decode(t, s)
            }, c.prototype._getEncoder = function(t) {
                return t = t || "der", !this.encoders.hasOwnProperty(t) && (this.encoders[t] = this._createNamed(r[t])), this.encoders[t]
            }, c.prototype.encode = function(t, e, s) {
                return this._getEncoder(e).encode(t, s)
            }