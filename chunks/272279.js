"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("327037"),
  s = n("861309"),
  i = n("716724"),
  l = n("694352"),
  r = n("492249"),
  o = {
    [n("49111").RPCCommands.GET_USER]: {
      scope: r.RPC_LOCAL_SCOPE,
      validation: e => (0, i.default)(e).required().keys({
        id: e.string().required()
      }),
      handler(e) {
        let {
          args: {
            id: t
          }
        } = e;
        return (0, a.getUser)(t).then(l.default).catch(() => {
          throw new s.default(r.RPCErrors.INVALID_USER, "Invalid user id: ".concat(t))
        })
      }
    }
  }