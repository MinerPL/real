"use strict";
E.r(_), E.d(_, {
  getUpdatedOptions: function() {
    return n
  }
});
var t = E("377678"),
  o = E("913144");

function n(e) {
  return {
    ...e,
    extra: {
      ...null == e ? void 0 : e.extra,
      ...{
        ...null != o.default._currentDispatchActionType ? {
          currentAction: o.default._currentDispatchActionType
        } : {},
        lastFewActions: (0, t.serialize)()
      }
    }
  }
}