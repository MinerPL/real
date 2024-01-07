            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return n
                }
            }), t("70102"), t("424973"), t("222007");

            function a(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var a = r[t];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var o = function() {
                    var e, r, t;

                    function o() {
                        var e, r, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        ! function(e, r) {
                            if (!(e instanceof r)) throw TypeError("Cannot call a class as a function")
                        }(this, o), e = this, t = void 0, (r = "items") in e ? Object.defineProperty(e, r, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = t, this.items = a
                    }
                    return e = o, r = [{
                        key: "add",
                        value: function(e) {
                            return !1 === this.has(e) && this.items.push(e), this
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.items = []
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            var r = this.items.length;
                            return this.items = this.items.filter(function(r) {
                                return r !== e
                            }), r !== this.items.length
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            var r = this;
                            this.items.forEach(function(t) {
                                e(t, t, r)
                            })
                        }
                    }, {
                        key: "has",
                        value: function(e) {
                            return -1 !== this.items.indexOf(e)
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.items.length
                        }
                    }], a(e.prototype, r), t && a(e, t), o
                }(),
                n = "undefined" == typeof Set ? Set : o