            "use strict";
            var n = r("781742"),
                i = r("864700"),
                o = r("881854"),
                a = o.isPlatform("Mac OS X"),
                u = a && o.isBrowser("Firefox < 29"),
                s = n.hasCommandModifier,
                c = n.isCtrlKeyCommand;

            function l(t) {
                return a && t.altKey || c(t)
            }
            t.exports = function(t) {
                var e, r, n;
                switch (t.keyCode) {
                    case 66:
                        return s(t) ? "bold" : null;
                    case 68:
                        return c(t) ? "delete" : null;
                    case 72:
                        return c(t) ? "backspace" : null;
                    case 73:
                        return s(t) ? "italic" : null;
                    case 74:
                        return s(t) ? "code" : null;
                    case 75:
                        return a && c(t) ? "secondary-cut" : null;
                    case 77:
                    case 79:
                        return c(t) ? "split-block" : null;
                    case 84:
                        return a && c(t) ? "transpose-characters" : null;
                    case 85:
                        return s(t) ? "underline" : null;
                    case 87:
                        return a && c(t) ? "backspace-word" : null;
                    case 89:
                        if (c(t)) return a ? "secondary-paste" : "redo";
                        return null;
                    case 90:
                        ;
                        return (s(e = t) ? e.shiftKey ? "redo" : "undo" : null) || null;
                    case i.RETURN:
                        return "split-block";
                    case i.DELETE:
                        ;
                        return r = t, !a && r.shiftKey ? null : l(r) ? "delete-word" : "delete";
                    case i.BACKSPACE:
                        ;
                        return s(n = t) && a ? "backspace-to-start-of-line" : l(n) ? "backspace-word" : "backspace";
                    case i.LEFT:
                        return u && s(t) ? "move-selection-to-start-of-block" : null;
                    case i.RIGHT:
                        return u && s(t) ? "move-selection-to-end-of-block" : null;
                    default:
                        return null
                }
            }