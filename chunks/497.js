            "use strict";
            var a;
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("424973"), a = class {
                _processQueue() {
                    setTimeout(() => {
                        if (this._queue.length > 0 && this._tokenCount > 0) {
                            this._tokenCount--, null == this._intervalID && (this._intervalID = setInterval(() => this._iterate(), this._intervalPeriod));
                            let e = this._queue.shift();
                            null == e || e(), this._processQueue()
                        }
                    }, 0)
                }
                _iterate() {
                    this._tokenCount = Math.min(this._capacity, this._tokenCount + 1), this._tokenCount >= this._capacity && null != this._intervalID && (clearInterval(this._intervalID), this._intervalID = null), this._processQueue()
                }
                process() {
                    return new Promise(e => {
                        this._queue.push(e), this._processQueue()
                    })
                }
                constructor(e, t) {
                    this._capacity = e, this._tokenCount = e, this._queue = [], this._intervalPeriod = t / e, this._intervalID = null
                }
            }