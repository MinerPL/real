            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var s = a("627445"),
                l = a.n(s),
                n = a("413524");

            function u(e) {
                if (e !== n.ClearAfterValues.TODAY) return l("number" == typeof e, "Invalid custom status clear timeout"), e;
                {
                    let e = new Date,
                        t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1);
                    return t.getTime() - e.getTime()
                }
            }