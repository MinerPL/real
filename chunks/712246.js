            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("627445"),
                l = s.n(a),
                n = s("413524");

            function u(e) {
                if (e !== n.ClearAfterValues.TODAY) return l("number" == typeof e, "Invalid custom status clear timeout"), e;
                {
                    let e = new Date,
                        t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1);
                    return t.getTime() - e.getTime()
                }
            }