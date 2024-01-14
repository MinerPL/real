"use strict";
n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var r = n("187798"),
  o = n("478898"),
  a = n("48494"),
  i = n("682086");

function s(e) {
  return e.call.bind(e)
}
var c = "undefined" != typeof BigInt,
  l = "undefined" != typeof Symbol,
  u = s(Object.prototype.toString),
  d = s(Number.prototype.valueOf),
  p = s(String.prototype.valueOf),
  f = s(Boolean.prototype.valueOf);
if (c) var m = s(BigInt.prototype.valueOf);
if (l) var h = s(Symbol.prototype.valueOf);

function g(e, t) {
  if ("object" != typeof e) return !1;
  try {
    return t(e), !0
  } catch (e) {
    return !1
  }
}
t.isArgumentsObject = r, t.isGeneratorFunction = o, t.isTypedArray = i;
t.isPromise = function(e) {
  return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
};
t.isArrayBufferView = function(e) {
  return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || C(e)
};
t.isUint8Array = function(e) {
  return "Uint8Array" === a(e)
};
t.isUint8ClampedArray = function(e) {
  return "Uint8ClampedArray" === a(e)
};
t.isUint16Array = function(e) {
  return "Uint16Array" === a(e)
};
t.isUint32Array = function(e) {
  return "Uint32Array" === a(e)
};
t.isInt8Array = function(e) {
  return "Int8Array" === a(e)
};
t.isInt16Array = function(e) {
  return "Int16Array" === a(e)
};
t.isInt32Array = function(e) {
  return "Int32Array" === a(e)
};
t.isFloat32Array = function(e) {
  return "Float32Array" === a(e)
};
t.isFloat64Array = function(e) {
  return "Float64Array" === a(e)
};
t.isBigInt64Array = function(e) {
  return "BigInt64Array" === a(e)
};

function v(e) {
  return "[object Map]" === u(e)
}
t.isBigUint64Array = function(e) {
  return "BigUint64Array" === a(e)
}, v.working = "undefined" != typeof Map && v(new Map);

function y(e) {
  return "[object Set]" === u(e)
}
t.isMap = function(e) {
  return "undefined" != typeof Map && (v.working ? v(e) : e instanceof Map)
}, y.working = "undefined" != typeof Set && y(new Set);

function b(e) {
  return "[object WeakMap]" === u(e)
}
t.isSet = function(e) {
  return "undefined" != typeof Set && (y.working ? y(e) : e instanceof Set)
}, b.working = "undefined" != typeof WeakMap && b(new WeakMap);

function x(e) {
  return "[object WeakSet]" === u(e)
}
t.isWeakMap = function(e) {
  return "undefined" != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap)
}, x.working = "undefined" != typeof WeakSet && x(new WeakSet);

function S(e) {
  return "[object ArrayBuffer]" === u(e)
}

function w(e) {
  return "undefined" != typeof ArrayBuffer && (S.working ? S(e) : e instanceof ArrayBuffer)
}

function D(e) {
  return "[object DataView]" === u(e)
}

function C(e) {
  return "undefined" != typeof DataView && (D.working ? D(e) : e instanceof DataView)
}
t.isWeakSet = function(e) {
  return x(e)
}, S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer), t.isArrayBuffer = w, D.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && D(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = C;
var P = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

function k(e) {
  return "[object SharedArrayBuffer]" === u(e)
}

function E(e) {
  return void 0 !== P && (void 0 === k.working && (k.working = k(new P)), k.working ? k(e) : e instanceof P)
}
t.isSharedArrayBuffer = E;
t.isAsyncFunction = function(e) {
  return "[object AsyncFunction]" === u(e)
};
t.isMapIterator = function(e) {
  return "[object Map Iterator]" === u(e)
};
t.isSetIterator = function(e) {
  return "[object Set Iterator]" === u(e)
};
t.isGeneratorObject = function(e) {
  return "[object Generator]" === u(e)
};

function T(e) {
  return g(e, d)
}

function R(e) {
  return g(e, p)
}

function M(e) {
  return g(e, f)
}

function O(e) {
  return c && g(e, m)
}

function I(e) {
  return l && g(e, h)
}
t.isWebAssemblyCompiledModule = function(e) {
  return "[object WebAssembly.Module]" === u(e)
}, t.isNumberObject = T, t.isStringObject = R, t.isBooleanObject = M, t.isBigIntObject = O, t.isSymbolObject = I;
t.isBoxedPrimitive = function(e) {
  return T(e) || R(e) || M(e) || O(e) || I(e)
};
t.isAnyArrayBuffer = function(e) {
  return "undefined" != typeof Uint8Array && (w(e) || E(e))
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
  Object.defineProperty(t, e, {
    enumerable: !1,
    value: function() {
      throw Error(e + " is not supported in userland")
    }
  })
})