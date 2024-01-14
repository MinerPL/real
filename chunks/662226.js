"use strict";
n.r(t), n.d(t, {
  asap: function() {
    return s
  }
});
var r = n("576225"),
  o = n("897025");
let a = new r.AsapQueue,
  i = new o.TaskFactory(a.registerPendingError);

function s(e) {
  a.enqueueTask(i.create(e))
}