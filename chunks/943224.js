            "use strict";
            n("781738");
            let r = "[a-fA-F\\d:]",
                o = e => e && e.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(r, ")|(?<=").concat(r, ")(?=\\s|$))") : "",
                a = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                i = "[a-fA-F\\d]{1,4}",
                s = "\n(\n(?:".concat(i, ":){7}(?:").concat(i, "|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:").concat(i, ":){6}(?:").concat(a, "|:").concat(i, "|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:").concat(i, ":){5}(?::").concat(a, "|(:").concat(i, "){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:").concat(i, ":){4}(?:(:").concat(i, "){0,1}:").concat(a, "|(:").concat(i, "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:").concat(i, ":){3}(?:(:").concat(i, "){0,2}:").concat(a, "|(:").concat(i, "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:").concat(i, ":){2}(?:(:").concat(i, "){0,3}:").concat(a, "|(:").concat(i, "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:").concat(i, ":){1}(?:(:").concat(i, "){0,4}:").concat(a, "|(:").concat(i, "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::").concat(i, "){0,5}:").concat(a, "|(?::").concat(i, "){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
                c = e => e && e.exact ? new RegExp("(?:^".concat(a, "$)|(?:^").concat(s, "$)")) : RegExp("(?:".concat(o(e)).concat(a).concat(o(e), ")|(?:").concat(o(e)).concat(s).concat(o(e), ")"), "g");
            c.v4 = e => e && e.exact ? new RegExp("^".concat(a, "$")) : RegExp("".concat(o(e)).concat(a).concat(o(e)), "g"), c.v6 = e => e && e.exact ? new RegExp("^".concat(s, "$")) : RegExp("".concat(o(e)).concat(s).concat(o(e)), "g"), e.exports = c