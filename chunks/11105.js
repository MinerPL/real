            "use strict";
            n.r(t), n.d(t, {
                createSourceFactory: function() {
                    return u
                }
            }), n("70102");
            var r = n("900255"),
                o = n("959708");

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = ["canDrag", "beginDrag", "isDragging", "endDrag"],
                c = ["beginDrag"],
                l = function() {
                    var e, t, n;

                    function r(e, t, n) {
                        var o = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, r), i(this, "props", null), i(this, "spec", void 0), i(this, "monitor", void 0), i(this, "ref", void 0), i(this, "beginDrag", function() {
                            if (o.props) return o.spec.beginDrag(o.props, o.monitor, o.ref.current)
                        }), this.spec = e, this.monitor = t, this.ref = n
                    }
                    return e = r, t = [{
                        key: "receiveProps",
                        value: function(e) {
                            this.props = e
                        }
                    }, {
                        key: "canDrag",
                        value: function() {
                            return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor))
                        }
                    }, {
                        key: "isDragging",
                        value: function(e, t) {
                            return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId())
                        }
                    }, {
                        key: "endDrag",
                        value: function() {
                            if (!!this.props) this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, o.getDecoratedComponent)(this.ref))
                        }
                    }], a(e.prototype, t), n && a(e, n), r
                }();

            function u(e) {
                return Object.keys(e).forEach(function(t) {
                        (0, r.invariant)(s.indexOf(t) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', s.join(", "), t), (0, r.invariant)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
                    }), c.forEach(function(t) {
                        (0, r.invariant)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
                    }),
                    function(t, n) {
                        return new l(e, t, n)
                    }
            }