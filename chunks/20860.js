            var i = {
                "./bg.png": "585337",
                "./cs.png": "83076",
                "./da.png": "228351",
                "./de.png": "96895",
                "./el.png": "954635",
                "./en-GB.png": "883638",
                "./en-US.png": "969851",
                "./es-419.png": "359765",
                "./es-ES.png": "98918",
                "./fi.png": "110775",
                "./fr.png": "128393",
                "./hi.png": "79794",
                "./hr.png": "988195",
                "./hu.png": "366988",
                "./it.png": "583917",
                "./ja.png": "895466",
                "./ko.png": "879503",
                "./lt.png": "370757",
                "./nl.png": "461053",
                "./no.png": "871682",
                "./pl.png": "140693",
                "./pt-BR.png": "260276",
                "./ro.png": "929905",
                "./ru.png": "830793",
                "./sv-SE.png": "841801",
                "./th.png": "862866",
                "./tr.png": "567215",
                "./uk.png": "142242",
                "./vi.png": "610487",
                "./zh-CN.png": "986521",
                "./zh-TW.png": "204827"
            };

            function r(e) {
                return n(s(e))
            }

            function s(e) {
                if (!n.o(i, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return i[e]
            }
            r.id = '"20860"', r.keys = function() {
                return Object.keys(i)
            }, r.resolve = s, e.exports = r