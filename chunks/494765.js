            "use strict";
            var n = r("864700");
            t.exports = function(t) {
                return t.which === n.RETURN && (t.getModifierState("Shift") || t.getModifierState("Alt") || t.getModifierState("Control"))
            }