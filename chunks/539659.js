"use strict";

function r(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}
n.r(t), n.d(t, {
  _check_private_redeclaration: function() {
    return r
  }
})