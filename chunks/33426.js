    var Symbol = n("330206"),
      r = n("447245"),
      o = n("677201"),
      i = Symbol ? Symbol.toStringTag : void 0;
    t.exports = function(t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? r(t) : o(t)
    }