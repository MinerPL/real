            "use strict";

            function i(t, e) {
                return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
            }
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })