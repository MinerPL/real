            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a, l = n("782340");
            let s = ["a", "b", "c", "d"],
                i = e => e;

            function r(e, t) {
                let n = {},
                    a = Math.min(e.length, s.length);
                for (let l = 0; l < a; ++l) n[s[l]] = (n, a) => t(e[l], a);
                return n
            }
            a = class {
                asString() {
                    return this.transformed(i)
                }
                isEmpty() {
                    return 0 === this.items.length
                }
                transformed(e) {
                    switch (this.items.length) {
                        case 0:
                            return "";
                        case 1:
                            return e(this.items[0], "");
                        case 2:
                            return l.default.Messages.GENERIC_FORMATTED_LIST_TWO.format(r(this.items, e));
                        case 3:
                            return l.default.Messages.GENERIC_FORMATTED_LIST_THREE.format(r(this.items, e));
                        default:
                            return l.default.Messages.GENERIC_FORMATTED_LIST_FOUR.format(r(this.items, e))
                    }
                }
                constructor(e) {
                    this.items = e
                }
            }