"use strict";
n.r(t), n.d(t, {
  ReflectionBinaryReader: function() {
    return s
  }
}), n("222007"), n("70102"), n("424973");
var r = n("764624"),
  a = n("803628"),
  o = n("546749"),
  i = n("804094");
class s {
  prepare() {
    var e;
    if (!this.fieldNoToField) {
      let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
      this.fieldNoToField = new Map(t.map(e => [e.no, e]))
    }
  }
  read(e, t, n, o) {
    this.prepare();
    let i = void 0 === o ? e.len : e.pos + o;
    for (; e.pos < i;) {
      let [o, i] = e.tag(), s = this.fieldNoToField.get(o);
      if (!s) {
        let a = n.readUnknownField;
        if ("throw" == a) throw Error("Unknown field ".concat(o, " (wire type ").concat(i, ") for ").concat(this.info.typeName));
        let s = e.skip(i);
        !1 !== a && (!0 === a ? r.UnknownFieldHandler.onRead : a)(this.info.typeName, t, o, i, s);
        continue
      }
      let u = t,
        l = s.repeat,
        c = s.localName;
      switch (s.oneof && (u = u[s.oneof]).oneofKind !== c && (u = t[s.oneof] = {
          oneofKind: c
        }), s.kind) {
        case "scalar":
        case "enum":
          let d = "enum" == s.kind ? a.ScalarType.INT32 : s.T,
            f = "scalar" == s.kind ? s.L : void 0;
          if (l) {
            let t = u[c];
            if (i == r.WireType.LengthDelimited && d != a.ScalarType.STRING && d != a.ScalarType.BYTES) {
              let n = e.uint32() + e.pos;
              for (; e.pos < n;) t.push(this.scalar(e, d, f))
            } else t.push(this.scalar(e, d, f))
          } else u[c] = this.scalar(e, d, f);
          break;
        case "message":
          if (l) {
            let t = u[c],
              r = s.T().internalBinaryRead(e, e.uint32(), n);
            t.push(r)
          } else u[c] = s.T().internalBinaryRead(e, e.uint32(), n, u[c]);
          break;
        case "map":
          let [p, m] = this.mapEntry(s, e, n);
          u[c][p] = m
      }
    }
  }
  mapEntry(e, t, n) {
    let r, o, s = t.uint32(),
      u = t.pos + s;
    for (; t.pos < u;) {
      let [i, s] = t.tag();
      switch (i) {
        case 1:
          r = e.K == a.ScalarType.BOOL ? t.bool().toString() : this.scalar(t, e.K, a.LongType.STRING);
          break;
        case 2:
          switch (e.V.kind) {
            case "scalar":
              o = this.scalar(t, e.V.T, e.V.L);
              break;
            case "enum":
              o = t.int32();
              break;
            case "message":
              o = e.V.T().internalBinaryRead(t, t.uint32(), n)
          }
          break;
        default:
          throw Error("Unknown field ".concat(i, " (wire type ").concat(s, ") in map entry for ").concat(this.info.typeName, "#").concat(e.name))
      }
    }
    if (void 0 === r) {
      let t = (0, i.reflectionScalarDefault)(e.K);
      r = e.K == a.ScalarType.BOOL ? t.toString() : t
    }
    if (void 0 === o) switch (e.V.kind) {
      case "scalar":
        o = (0, i.reflectionScalarDefault)(e.V.T, e.V.L);
        break;
      case "enum":
        o = 0;
        break;
      case "message":
        o = e.V.T().create()
    }
    return [r, o]
  }
  scalar(e, t, n) {
    switch (t) {
      case a.ScalarType.INT32:
        return e.int32();
      case a.ScalarType.STRING:
        return e.string();
      case a.ScalarType.BOOL:
        return e.bool();
      case a.ScalarType.DOUBLE:
        return e.double();
      case a.ScalarType.FLOAT:
        return e.float();
      case a.ScalarType.INT64:
        return (0, o.reflectionLongConvert)(e.int64(), n);
      case a.ScalarType.UINT64:
        return (0, o.reflectionLongConvert)(e.uint64(), n);
      case a.ScalarType.FIXED64:
        return (0, o.reflectionLongConvert)(e.fixed64(), n);
      case a.ScalarType.FIXED32:
        return e.fixed32();
      case a.ScalarType.BYTES:
        return e.bytes();
      case a.ScalarType.UINT32:
        return e.uint32();
      case a.ScalarType.SFIXED32:
        return e.sfixed32();
      case a.ScalarType.SFIXED64:
        return (0, o.reflectionLongConvert)(e.sfixed64(), n);
      case a.ScalarType.SINT32:
        return e.sint32();
      case a.ScalarType.SINT64:
        return (0, o.reflectionLongConvert)(e.sint64(), n)
    }
  }
  constructor(e) {
    this.info = e
  }
}