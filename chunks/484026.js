            "use strict";
            var i;
            n.r(s), n.d(s, {
                default: function() {
                    return i
                }
            }), i = class {
                setParams(e) {
                    this.param !== e && (this.param = e, this.loading = !1, this.loaded = !1)
                }
                get() {
                    return this.ensureLoaded(), this.val
                }
                ensureLoaded() {
                    if (this.loaded || this.loading || void 0 === this.param) return;
                    let e = this.param;
                    this.loading = !0, this.loader(e).then(s => {
                        e === this.param && (this.val = s, this.loading = !1, this.loaded = !0)
                    })
                }
                constructor(e) {
                    this.loading = !1, this.loaded = !1, this.loader = e
                }
            }