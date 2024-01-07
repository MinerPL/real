            "use strict";
            a.r(t), a.d(t, {
                shuffleProblems: function() {
                    return n
                }
            }), a("424973");
            var l = a("917351"),
                s = a.n(l);
            let n = (e, t) => {
                let a = s.shuffle(e),
                    l = a.findIndex(e => e.value === t);
                if (l > -1) {
                    let e = a[l];
                    a.splice(l, 1), a.push(e)
                }
                return a
            }