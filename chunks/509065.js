            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("424973");
            var s, i, r = n("913144");
            (s = class e {
                static flush(t, n) {
                    for (let s of e.batchers) null != s.action && (null == t || s.shouldFlush(t, n)) && s.flush()
                }
                flush() {
                    let {
                        action: e
                    } = this;
                    this.action = null, null != e && r.default.dispatch(e).catch(t => this.socket.resetSocketOnError(t, e.type))
                }
                constructor(t, n, s) {
                    this.socket = t, this.action = null, this.shouldFlush = s, this.add = e => {
                        this.action = n(this.action, e)
                    }, e.batchers.push(this)
                }
            }).batchers = [], i = s