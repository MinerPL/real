            "use strict";
            let i;
            n.r(t), n.d(t, {
                sessionStorageTest: function() {
                    return o
                },
                impl: function() {
                    return s
                }
            });
            var r = n("419243");
            try {
                i = window.sessionStorage
            } catch (e) {}
            try {
                delete window.sessionStorage
            } catch (e) {}

            function o() {
                let e = "test";
                try {
                    return i.setItem(e, e), i.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
            let s = o() ? new class e {
                get(e, t) {
                    let n = i.getItem(e);
                    if (null != n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        n = t
                    } else n = t;
                    return n
                }
                set(e, t) {
                    i.setItem(e, JSON.stringify(t))
                }
                remove(e) {
                    i.removeItem(e)
                }
                clear() {
                    i.clear()
                }
            } : new r.ObjectStorage