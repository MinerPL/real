            "use strict";
            n.r(t), n.d(t, {
                reflectionScalarDefault: function() {
                    return i
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var r = n("803628"),
                a = n("546749"),
                o = n("497557");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.LongType.STRING;
                switch (e) {
                    case r.ScalarType.BOOL:
                        return !1;
                    case r.ScalarType.UINT64:
                    case r.ScalarType.FIXED64:
                        return (0, a.reflectionLongConvert)(o.PbULong.ZERO, t);
                    case r.ScalarType.INT64:
                    case r.ScalarType.SFIXED64:
                    case r.ScalarType.SINT64:
                        return (0, a.reflectionLongConvert)(o.PbLong.ZERO, t);
                    case r.ScalarType.DOUBLE:
                    case r.ScalarType.FLOAT:
                        return 0;
                    case r.ScalarType.BYTES:
                        return new Uint8Array(0);
                    case r.ScalarType.STRING:
                        return "";
                    default:
                        return 0
                }
            }