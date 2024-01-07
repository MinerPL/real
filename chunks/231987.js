            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973"), n("860677"), n("843762");
            var i, a = n("485828"),
                l = n.n(a),
                s = n("605250");
            let r = new s.default("Queue");
            i = class {
                enqueue(e, t, n) {
                    this.queue.push({
                        message: e,
                        success: t,
                        logId: n
                    }), this._drainIfNecessary()
                }
                get length() {
                    return this.queue.length
                }
                _drainIfNecessary() {
                    if (null !== this.timeout || 0 === this.queue.length || !0 === this.draining) return;
                    this.draining = !0;
                    let e = this.queue.shift(),
                        {
                            message: t,
                            success: n,
                            logId: i
                        } = e;
                    this.logger.log("Draining message from queue LogId:".concat(i, " QueueLength: ").concat(this.queue.length)), this.drain(t, (t, a) => {
                        if (this.logger.log("Finished draining message from queue LogId:".concat(i, " QueueLength: ").concat(this.queue.length)), this.draining = !1, null == t) {
                            setImmediate(() => this._drainIfNecessary());
                            try {
                                n(a)
                            } catch (e) {
                                this.logger.error("", e)
                            }
                        } else {
                            var l;
                            let n = null !== (l = t.retryAfter) && void 0 !== l ? l : this.defaultRetryAfter;
                            this.logger.info("Rate limited. Delaying draining of queue for ".concat(n, " ms. LogId:").concat(i, " QueueLength: ").concat(this.queue.length)), this.timeout = setTimeout(() => {
                                this.queue.unshift(e), this.timeout = null, this._drainIfNecessary()
                            }, n)
                        }
                    })
                }
                constructor(e = r, t = 100) {
                    this.logger = e, this.defaultRetryAfter = t, this.queue = new l, this.timeout = null, this.draining = !1
                }
            }