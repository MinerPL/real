"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("49111");
let s = "<removed>";

function i(e) {
  var t, n;
  let i = {
    ...e
  };
  if ("object" == typeof(t = i).args && "string" == typeof t.cmd) i = function(e) {
    if (e.cmd === a.RPCCommands.AUTHENTICATE) return {
      ...e,
      args: {
        ...e.args,
        access_token: s
      }
    };
    return {
      ...e
    }
  }(i);
  if ("object" == typeof(n = i).data && "string" == typeof n.cmd) i = function(e) {
    if (e.cmd === a.RPCCommands.AUTHENTICATE) return {
      ...e,
      data: {
        ...e.data,
        access_token: s
      }
    };
    return {
      ...e
    }
  }(i);
  return i
}