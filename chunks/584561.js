            "use strict";
            n.r(t), n.d(t, {
                NativeDragSource: function() {
                    return a
                }
            }), n("70102");

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = function() {
                var e, t, n;

                function a(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, a), o(this, "item", void 0), o(this, "config", void 0), this.config = e, this.item = {}, this.initializeExposedProperties()
                }
                return e = a, t = [{
                    key: "initializeExposedProperties",
                    value: function() {
                        var e = this;
                        Object.keys(this.config.exposeProperties).forEach(function(t) {
                            Object.defineProperty(e.item, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return console.warn("Browser doesn't allow reading \"".concat(t, '" until the drop event.')), null
                                }
                            })
                        })
                    }
                }, {
                    key: "loadDataTransfer",
                    value: function(e) {
                        var t = this;
                        if (e) {
                            var n = {};
                            Object.keys(this.config.exposeProperties).forEach(function(r) {
                                n[r] = {
                                    value: t.config.exposeProperties[r](e, t.config.matchesTypes),
                                    configurable: !0,
                                    enumerable: !0
                                }
                            }), Object.defineProperties(this.item, n)
                        }
                    }
                }, {
                    key: "canDrag",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "beginDrag",
                    value: function() {
                        return this.item
                    }
                }, {
                    key: "isDragging",
                    value: function(e, t) {
                        return t === e.getSourceId()
                    }
                }, {
                    key: "endDrag",
                    value: function() {}
                }], r(e.prototype, t), n && r(e, n), a
            }()