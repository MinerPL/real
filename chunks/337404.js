            "use strict";
            var i = r("37549"),
                n = i("%TypeError%"),
                o = i("%SyntaxError%"),
                a = r("537778"),
                s = r("778841"),
                f = {
                    "Property Descriptor": function(t) {
                        var e = {
                            "[[Configurable]]": !0,
                            "[[Enumerable]]": !0,
                            "[[Get]]": !0,
                            "[[Set]]": !0,
                            "[[Value]]": !0,
                            "[[Writable]]": !0
                        };
                        if (!t) return !1;
                        for (var r in t)
                            if (a(t, r) && !e[r]) return !1;
                        var i = a(t, "[[Value]]"),
                            o = a(t, "[[Get]]") || a(t, "[[Set]]");
                        if (i && o) throw new n("Property Descriptors may not be both accessor and data descriptors");
                        return !0
                    },
                    "Match Record": r("324885"),
                    "Iterator Record": function(t) {
                        return a(t, "[[Iterator]]") && a(t, "[[NextMethod]]") && a(t, "[[Done]]")
                    },
                    "PromiseCapability Record": function(t) {
                        return !!t && a(t, "[[Resolve]]") && "function" == typeof t["[[Resolve]]"] && a(t, "[[Reject]]") && "function" == typeof t["[[Reject]]"] && a(t, "[[Promise]]") && t["[[Promise]]"] && "function" == typeof t["[[Promise]]"].then
                    },
                    "AsyncGeneratorRequest Record": function(t) {
                        return !!t && a(t, "[[Completion]]") && a(t, "[[Capability]]") && f["PromiseCapability Record"](t["[[Capability]]"])
                    },
                    "RegExp Record": function(t) {
                        return t && a(t, "[[IgnoreCase]]") && "boolean" == typeof t["[[IgnoreCase]]"] && a(t, "[[Multiline]]") && "boolean" == typeof t["[[Multiline]]"] && a(t, "[[DotAll]]") && "boolean" == typeof t["[[DotAll]]"] && a(t, "[[Unicode]]") && "boolean" == typeof t["[[Unicode]]"] && a(t, "[[CapturingGroupsCount]]") && "number" == typeof t["[[CapturingGroupsCount]]"] && s(t["[[CapturingGroupsCount]]"]) && t["[[CapturingGroupsCount]]"] >= 0
                    }
                };
            t.exports = function(t, e, r, i) {
                var a = f[e];
                if ("function" != typeof a) throw new o("unknown record type: " + e);
                if ("Object" !== t(i) || !a(i)) throw new n(r + " must be a " + e)
            }