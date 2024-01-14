"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.autoprefix = void 0;
var n = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(r("511414")),
  o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = {
    borderRadius: function(e) {
      return {
        msBorderRadius: e,
        MozBorderRadius: e,
        OBorderRadius: e,
        WebkitBorderRadius: e,
        borderRadius: e
      }
    },
    boxShadow: function(e) {
      return {
        msBoxShadow: e,
        MozBoxShadow: e,
        OBoxShadow: e,
        WebkitBoxShadow: e,
        boxShadow: e
      }
    },
    userSelect: function(e) {
      return {
        WebkitTouchCallout: e,
        KhtmlUserSelect: e,
        MozUserSelect: e,
        msUserSelect: e,
        WebkitUserSelect: e,
        userSelect: e
      }
    },
    flex: function(e) {
      return {
        WebkitBoxFlex: e,
        MozBoxFlex: e,
        WebkitFlex: e,
        msFlex: e,
        flex: e
      }
    },
    flexBasis: function(e) {
      return {
        WebkitFlexBasis: e,
        flexBasis: e
      }
    },
    justifyContent: function(e) {
      return {
        WebkitJustifyContent: e,
        justifyContent: e
      }
    },
    transition: function(e) {
      return {
        msTransition: e,
        MozTransition: e,
        OTransition: e,
        WebkitTransition: e,
        transition: e
      }
    },
    transform: function(e) {
      return {
        msTransform: e,
        MozTransform: e,
        OTransform: e,
        WebkitTransform: e,
        transform: e
      }
    },
    absolute: function(e) {
      var t = e && e.split(" ");
      return {
        position: "absolute",
        top: t && t[0],
        right: t && t[1],
        bottom: t && t[2],
        left: t && t[3]
      }
    },
    extend: function(e, t) {
      var r = t[e];
      return r ? r : {
        extend: e
      }
    }
  },
  i = t.autoprefix = function(e) {
    var t = {};
    return (0, n.default)(e, function(e, r) {
      var i = {};
      (0, n.default)(e, function(e, t) {
        var r = a[t];
        r ? i = o({}, i, r(e)) : i[t] = e
      }), t[r] = i
    }), t
  };
t.default = i