            "use strict";
            E.r(u), E.d(u, {
                upperCaseFirstChar: function() {
                    return F
                },
                truncateText: function() {
                    return B
                },
                getAcronym: function() {
                    return A
                },
                cssValueToNumber: function() {
                    return l
                },
                stripDiacritics: function() {
                    return o
                },
                normalize: function() {
                    return n
                }
            }), E("781738"), E("222007");
            let C = /[\u0300-\u036f]/g;

            function F(D) {
                return null == D ? "" : "".concat(D.charAt(0).toUpperCase()).concat(D.slice(1))
            }
            let B = function(D, u) {
                let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
                return null == D || null == u ? "" : D.length > u ? "".concat(D.substring(0, u - E.length).replace(/[\s.]+$/, "")).concat(E) : D
            };

            function A(D) {
                return null != D ? D.replace(/'s /g, " ").replace(/\w+/g, D => D[0]).replace(/\s/g, "") : ""
            }

            function l(D) {
                let u = parseInt(D, 10);
                return isNaN(u) ? 0 : u
            }
            let o = null == String.prototype.normalize ? D => D : D => D.normalize("NFD").replace(C, "").normalize("NFC"),
                n = null == String.prototype.normalize ? D => D : function(D) {
                    let u = E("525217"),
                        C = "";
                    return [...D.normalize("NFD")].forEach(D => {
                        var E;
                        C += null !== (E = u[D]) && void 0 !== E ? E : D
                    }), C.normalize("NFD").toLocaleLowerCase()
                }