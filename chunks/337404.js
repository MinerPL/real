"use strict";
var r = s("37549"),
  i = r("%TypeError%"),
  n = r("%SyntaxError%"),
  c = s("537778"),
  o = s("778841"),
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
      for (var s in t)
        if (c(t, s) && !e[s]) return !1;
      var r = c(t, "[[Value]]"),
        n = c(t, "[[Get]]") || c(t, "[[Set]]");
      if (r && n) throw new i("Property Descriptors may not be both accessor and data descriptors");
      return !0
    },
    "Match Record": s("324885"),
    "Iterator Record": function(t) {
      return c(t, "[[Iterator]]") && c(t, "[[NextMethod]]") && c(t, "[[Done]]")
    },
    "PromiseCapability Record": function(t) {
      return !!t && c(t, "[[Resolve]]") && "function" == typeof t["[[Resolve]]"] && c(t, "[[Reject]]") && "function" == typeof t["[[Reject]]"] && c(t, "[[Promise]]") && t["[[Promise]]"] && "function" == typeof t["[[Promise]]"].then
    },
    "AsyncGeneratorRequest Record": function(t) {
      return !!t && c(t, "[[Completion]]") && c(t, "[[Capability]]") && f["PromiseCapability Record"](t["[[Capability]]"])
    },
    "RegExp Record": function(t) {
      return t && c(t, "[[IgnoreCase]]") && "boolean" == typeof t["[[IgnoreCase]]"] && c(t, "[[Multiline]]") && "boolean" == typeof t["[[Multiline]]"] && c(t, "[[DotAll]]") && "boolean" == typeof t["[[DotAll]]"] && c(t, "[[Unicode]]") && "boolean" == typeof t["[[Unicode]]"] && c(t, "[[CapturingGroupsCount]]") && "number" == typeof t["[[CapturingGroupsCount]]"] && o(t["[[CapturingGroupsCount]]"]) && t["[[CapturingGroupsCount]]"] >= 0
    }
  };
t.exports = function(t, e, s, r) {
  var c = f[e];
  if ("function" != typeof c) throw new n("unknown record type: " + e);
  if ("Object" !== t(r) || !c(r)) throw new i(s + " must be a " + e)
}