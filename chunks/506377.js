"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("70614"),
  s = n("686470"),
  i = n("167726"),
  l = {
    init() {
      s.default.whenInitialized(() => {
        null != i.default.testModeApplicationId && (0, a.authorizeAndSetTestModeApplication)(i.default.testModeApplicationId, i.default.testModeOriginURL)
      })
    }
  }