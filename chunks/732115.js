"use strict";
n.r(t), n.d(t, {
  RawTask: function() {
    return r
  }
});
class r {
  call() {
    try {
      this.task && this.task()
    } catch (e) {
      this.onError(e)
    } finally {
      this.task = null, this.release(this)
    }
  }
  constructor(e, t) {
    this.onError = e, this.release = t, this.task = null
  }
}