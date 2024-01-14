"use strict";
a.r(t), a.d(t, {
  Future: function() {
    return l
  }
});
class l {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t
    })
  }
}