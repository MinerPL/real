"use strict";
n.r(t), n.d(t, {
  ReflectionTypeCheck: function() {
    return o
  }
}), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var r = n("803628"),
  a = n("851056");
class o {
  prepare() {
    if (this.data) return;
    let e = [],
      t = [],
      n = [];
    for (let r of this.fields)
      if (r.oneof) !n.includes(r.oneof) && (n.push(r.oneof), e.push(r.oneof), t.push(r.oneof));
      else switch (t.push(r.localName), r.kind) {
        case "scalar":
        case "enum":
          (!r.opt || r.repeat) && e.push(r.localName);
          break;
        case "message":
          r.repeat && e.push(r.localName);
          break;
        case "map":
          e.push(r.localName)
      }
    this.data = {
      req: e,
      known: t,
      oneofs: Object.values(n)
    }
  }
  is(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (t < 0) return !0;
    if (null == e || "object" != typeof e) return !1;
    this.prepare();
    let r = Object.keys(e),
      o = this.data;
    if (r.length < o.req.length || o.req.some(e => !r.includes(e)) || !n && r.some(e => !o.known.includes(e))) return !1;
    if (t < 1) return !0;
    for (let r of o.oneofs) {
      let o = e[r];
      if (!(0, a.isOneofGroup)(o)) return !1;
      if (void 0 === o.oneofKind) continue;
      let i = this.fields.find(e => e.localName === o.oneofKind);
      if (!i || !this.field(o[o.oneofKind], i, n, t)) return !1
    }
    for (let r of this.fields)
      if (void 0 === r.oneof && !this.field(e[r.localName], r, n, t)) return !1;
    return !0
  }
  field(e, t, n, a) {
    let o = t.repeat;
    switch (t.kind) {
      case "scalar":
        if (void 0 === e) return t.opt;
        if (o) return this.scalars(e, t.T, a, t.L);
        return this.scalar(e, t.T, t.L);
      case "enum":
        if (void 0 === e) return t.opt;
        if (o) return this.scalars(e, r.ScalarType.INT32, a);
        return this.scalar(e, r.ScalarType.INT32);
      case "message":
        if (void 0 === e) break;
        if (o) return this.messages(e, t.T(), n, a);
        return this.message(e, t.T(), n, a);
      case "map":
        if ("object" != typeof e || null === e) return !1;
        if (a < 2) break;
        if (!this.mapKeys(e, t.K, a)) return !1;
        switch (t.V.kind) {
          case "scalar":
            return this.scalars(Object.values(e), t.V.T, a, t.V.L);
          case "enum":
            return this.scalars(Object.values(e), r.ScalarType.INT32, a);
          case "message":
            return this.messages(Object.values(e), t.V.T(), n, a)
        }
    }
    return !0
  }
  message(e, t, n, r) {
    return n ? t.isAssignable(e, r) : t.is(e, r)
  }
  messages(e, t, n, r) {
    if (!Array.isArray(e)) return !1;
    if (r < 2) return !0;
    if (n) {
      for (let n = 0; n < e.length && n < r; n++)
        if (!t.isAssignable(e[n], r - 1)) return !1
    } else
      for (let n = 0; n < e.length && n < r; n++)
        if (!t.is(e[n], r - 1)) return !1;
    return !0
  }
  scalar(e, t, n) {
    let a = typeof e;
    switch (t) {
      case r.ScalarType.UINT64:
      case r.ScalarType.FIXED64:
      case r.ScalarType.INT64:
      case r.ScalarType.SFIXED64:
      case r.ScalarType.SINT64:
        switch (n) {
          case r.LongType.BIGINT:
            return "bigint" == a;
          case r.LongType.NUMBER:
            return "number" == a && !isNaN(e);
          default:
            return "string" == a
        }
      case r.ScalarType.BOOL:
        return "boolean" == a;
      case r.ScalarType.STRING:
        return "string" == a;
      case r.ScalarType.BYTES:
        return e instanceof Uint8Array;
      case r.ScalarType.DOUBLE:
      case r.ScalarType.FLOAT:
        return "number" == a && !isNaN(e);
      default:
        return "number" == a && Number.isInteger(e)
    }
  }
  scalars(e, t, n, r) {
    if (!Array.isArray(e)) return !1;
    if (n < 2) return !0;
    if (Array.isArray(e)) {
      for (let a = 0; a < e.length && a < n; a++)
        if (!this.scalar(e[a], t, r)) return !1
    }
    return !0
  }
  mapKeys(e, t, n) {
    let a = Object.keys(e);
    switch (t) {
      case r.ScalarType.INT32:
      case r.ScalarType.FIXED32:
      case r.ScalarType.SFIXED32:
      case r.ScalarType.SINT32:
      case r.ScalarType.UINT32:
        return this.scalars(a.slice(0, n).map(e => parseInt(e)), t, n);
      case r.ScalarType.BOOL:
        return this.scalars(a.slice(0, n).map(e => "true" == e || "false" != e && e), t, n);
      default:
        return this.scalars(a, t, n, r.LongType.STRING)
    }
  }
  constructor(e) {
    var t;
    this.fields = null !== (t = e.fields) && void 0 !== t ? t : []
  }
}