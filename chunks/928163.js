            "use strict";
            n.r(t), n.d(t, {
                jsonReadOptions: function() {
                    return o
                },
                jsonWriteOptions: function() {
                    return i
                }
            }), n("222007");
            let r = {
                    emitDefaultValues: !1,
                    enumAsInteger: !1,
                    useProtoFieldName: !1,
                    prettySpaces: 0
                },
                a = {
                    ignoreUnknownFields: !1
                };

            function o(e) {
                return e ? Object.assign(Object.assign({}, a), e) : a
            }

            function i(e) {
                return e ? Object.assign(Object.assign({}, r), e) : r
            }