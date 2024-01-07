            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                s = r && "object" == typeof e && e && !e.nodeType && e,
                l = s && s.exports === r && i.process,
                o = function() {
                    try {
                        var e = s && s.require && s.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = o