"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("27618"),
  l = n("843823"),
  r = n("697218"),
  o = n("578287"),
  u = n("49111"),
  d = {
    [u.RPCCommands.GET_RELATIONSHIPS]: {
      scope: u.OAuth2Scopes.RELATIONSHIPS_READ,
      handler() {
        let e = {
          ...i.default.getRelationships()
        };
        return l.default.getUserAffinitiesUserIds().forEach(t => {
          null == e[t] && null != r.default.getUser(t) && (e[t] = u.RelationshipTypes.IMPLICIT)
        }), {
          relationships: s.map(e, (e, t) => (0, o.transformRelationship)(e, t))
        }
      }
    }
  }