"use strict";
E.r(_), E.d(_, {
  coercePlatformTypeToConsoleType: function() {
    return n
  }
});
var t = E("171644"),
  o = E("49111");

function n(e) {
  switch (e) {
    case o.PlatformTypes.XBOX:
      return t.GameConsoleTypes.XBOX;
    case o.PlatformTypes.PLAYSTATION:
    case o.PlatformTypes.PLAYSTATION_STAGING:
      return t.GameConsoleTypes.PLAYSTATION;
    default:
      return null
  }
}