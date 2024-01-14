"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("524297"),
  s = n("578287"),
  i = n("65810"),
  l = n("49111"),
  r = {
    [l.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, a.createRPCCommand)(l.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
      scope: i.activityInstanceConnectedParticipantsScope,
      handler(e) {
        let {
          socket: t
        } = e;
        return (0, s.validatePostMessageTransport)(t.transport), (0, i.activityInstanceConnectedParticipants)()
      }
    })
  }