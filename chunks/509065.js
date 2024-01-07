            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007"), n("424973");
            var i, a, l = n("913144");
            (i = class e {
                static flush(t, n) {
                    for (let i of e.batchers) null != i.action && (null == t || i.shouldFlush(t, n)) && i.flush()
                }
                flush() {
                    let {
                        action: e
                    } = this;
                    this.action = null, null != e && l.default.dispatch(e).catch(t => this.socket.resetSocketOnError(t, e.type))
                }
                constructor(t, n, i) {
                    this.socket = t, this.action = null, this.shouldFlush = i, this.add = e => {
                        this.action = n(this.action, e)
                    }, e.batchers.push(this)
                }
            }).batchers = [], a = i