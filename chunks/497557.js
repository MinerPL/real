"use strict";
n.r(t), n.d(t, {
  PbULong: function() {
    return u
  },
  PbLong: function() {
    return l
  }
}), n("70102"), n("222007");
var r = n("481310");
let a = function() {
  let e = new DataView(new ArrayBuffer(8)),
    t = void 0 !== globalThis.BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64;
  return t ? {
    MIN: BigInt("-9223372036854775808"),
    MAX: BigInt("9223372036854775807"),
    UMIN: BigInt("0"),
    UMAX: BigInt("18446744073709551615"),
    C: BigInt,
    V: e
  } : void 0
}();

function o(e) {
  if (!e) throw Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
}
let i = /^-?[0-9]+$/;
class s {
  isZero() {
    return 0 == this.lo && 0 == this.hi
  }
  toNumber() {
    let e = 4294967296 * this.hi + (this.lo >>> 0);
    if (!Number.isSafeInteger(e)) throw Error("cannot convert to safe number");
    return e
  }
  constructor(e, t) {
    this.lo = 0 | e, this.hi = 0 | t
  }
}
class u extends s {
  static from(e) {
    if (a) switch (typeof e) {
      case "string":
        if ("0" == e) return this.ZERO;
        if ("" == e) throw Error("string is no integer");
        e = a.C(e);
      case "number":
        if (0 === e) return this.ZERO;
        e = a.C(e);
      case "bigint":
        if (!e) return this.ZERO;
        if (e < a.UMIN) throw Error("signed value for ulong");
        if (e > a.UMAX) throw Error("ulong too large");
        return a.V.setBigUint64(0, e, !0), new u(a.V.getInt32(0, !0), a.V.getInt32(4, !0))
    } else switch (typeof e) {
      case "string":
        if ("0" == e) return this.ZERO;
        if (e = e.trim(), !i.test(e)) throw Error("string is no integer");
        let [t, n, o] = (0, r.int64fromString)(e);
        if (t) throw Error("signed value");
        return new u(n, o);
      case "number":
        if (0 == e) return this.ZERO;
        if (!Number.isSafeInteger(e)) throw Error("number is no integer");
        if (e < 0) throw Error("signed value for ulong");
        return new u(e, e / 4294967296)
    }
    throw Error("unknown value " + typeof e)
  }
  toString() {
    return a ? this.toBigInt().toString() : (0, r.int64toString)(this.lo, this.hi)
  }
  toBigInt() {
    return o(a), a.V.setInt32(0, this.lo, !0), a.V.setInt32(4, this.hi, !0), a.V.getBigUint64(0, !0)
  }
}
u.ZERO = new u(0, 0);
class l extends s {
  static from(e) {
    if (a) switch (typeof e) {
      case "string":
        if ("0" == e) return this.ZERO;
        if ("" == e) throw Error("string is no integer");
        e = a.C(e);
      case "number":
        if (0 === e) return this.ZERO;
        e = a.C(e);
      case "bigint":
        if (!e) return this.ZERO;
        if (e < a.MIN) throw Error("ulong too small");
        if (e > a.MAX) throw Error("ulong too large");
        return a.V.setBigInt64(0, e, !0), new l(a.V.getInt32(0, !0), a.V.getInt32(4, !0))
    } else switch (typeof e) {
      case "string":
        if ("0" == e) return this.ZERO;
        if (e = e.trim(), !i.test(e)) throw Error("string is no integer");
        let [t, n, o] = (0, r.int64fromString)(e), s = new l(n, o);
        return t ? s.negate() : s;
      case "number":
        if (0 == e) return this.ZERO;
        if (!Number.isSafeInteger(e)) throw Error("number is no integer");
        return e > 0 ? new l(e, e / 4294967296) : new l(-e, -e / 4294967296).negate()
    }
    throw Error("unknown value " + typeof e)
  }
  isNegative() {
    return (2147483648 & this.hi) != 0
  }
  negate() {
    let e = ~this.hi,
      t = this.lo;
    return t ? t = ~t + 1 : e += 1, new l(t, e)
  }
  toString() {
    if (a) return this.toBigInt().toString();
    if (this.isNegative()) {
      let e = this.negate();
      return "-" + (0, r.int64toString)(e.lo, e.hi)
    }
    return (0, r.int64toString)(this.lo, this.hi)
  }
  toBigInt() {
    return o(a), a.V.setInt32(0, this.lo, !0), a.V.setInt32(4, this.hi, !0), a.V.getBigInt64(0, !0)
  }
}
l.ZERO = new l(0, 0)