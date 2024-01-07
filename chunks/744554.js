            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("106442"), r("175143"), r("781738");
            var n = r("261438"),
                i = r("151261"),
                o = "@global",
                s = "@global ",
                a = function() {
                    function e(e, t, r) {
                        for (var s in this.type = "global", this.at = o, this.isProcessed = !1, this.key = e, this.options = r, this.rules = new i.RuleList((0, n.default)({}, r, {
                                parent: this
                            })), t) this.rules.add(s, t[s]);
                        this.rules.process()
                    }
                    var t = e.prototype;
                    return t.getRule = function(e) {
                        return this.rules.get(e)
                    }, t.addRule = function(e, t, r) {
                        var n = this.rules.add(e, t, r);
                        return n && this.options.jss.plugins.onProcessRule(n), n
                    }, t.replaceRule = function(e, t, r) {
                        var n = this.rules.replace(e, t, r);
                        return n && this.options.jss.plugins.onProcessRule(n), n
                    }, t.indexOf = function(e) {
                        return this.rules.indexOf(e)
                    }, t.toString = function(e) {
                        return this.rules.toString(e)
                    }, e
                }(),
                u = function() {
                    function e(e, t, r) {
                        this.type = "global", this.at = o, this.isProcessed = !1, this.key = e, this.options = r;
                        var i = e.substr(s.length);
                        this.rule = r.jss.createRule(i, t, (0, n.default)({}, r, {
                            parent: this
                        }))
                    }
                    return e.prototype.toString = function(e) {
                        return this.rule ? this.rule.toString(e) : ""
                    }, e
                }(),
                l = /\s*,\s*/g;

            function c(e, t) {
                for (var r = e.split(l), n = "", i = 0; i < r.length; i++) n += t + " " + r[i].trim(), r[i + 1] && (n += ", ");
                return n
            }
            var f = function() {
                return {
                    onCreateRule: function(e, t, r) {
                        if (!e) return null;
                        if (e === o) return new a(e, t, r);
                        if ("@" === e[0] && e.substr(0, s.length) === s) return new u(e, t, r);
                        var n = r.parent;
                        return n && ("global" === n.type || n.options.parent && "global" === n.options.parent.type) && (r.scoped = !1), !r.selector && !1 === r.scoped && (r.selector = e), null
                    },
                    onProcessRule: function(e, t) {
                        "style" === e.type && t && (! function(e, t) {
                            var r = e.options,
                                i = e.style,
                                s = i ? i[o] : null;
                            if (s) {
                                for (var a in s) t.addRule(a, s[a], (0, n.default)({}, r, {
                                    selector: c(a, e.selector)
                                }));
                                delete i[o]
                            }
                        }(e, t), ! function(e, t) {
                            var r = e.options,
                                i = e.style;
                            for (var s in i)
                                if ("@" === s[0] && s.substr(0, o.length) === o) {
                                    var a = c(s.substr(o.length), e.selector);
                                    t.addRule(a, i[s], (0, n.default)({}, r, {
                                        selector: a
                                    })), delete i[s]
                                }
                        }(e, t))
                    }
                }
            }