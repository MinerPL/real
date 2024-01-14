"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("702976");
var a = n("872717"),
  s = n("84460"),
  i = n("299285"),
  l = n("167726"),
  r = n("599110"),
  o = n("568734"),
  u = n("861309"),
  d = n("578287"),
  c = n("716724"),
  E = n("613652"),
  f = n("492249"),
  _ = n("49111"),
  h = {
    [_.RPCCommands.SEND_ANALYTICS_EVENT]: {
      validation: e => (0, c.default)(e).required().keys({
        event_name: e.string().required(),
        event_properties: e.object().required()
      }),
      handler(e) {
        var t;
        let {
          socket: n,
          args: {
            event_name: a,
            event_properties: s
          }
        } = e;
        (0, d.validatePostMessageTransport)(n.transport), (0, d.validateApplication)(n.application);
        let l = n.application.id,
          c = (0, E.default)(),
          h = null == c ? void 0 : c.getGuildId();
        if (null == c) throw new u.default(f.RPCErrors.INVALID_COMMAND, "Invalid channel");
        let C = i.default.getApplication(l),
          T = (0, o.hasFlag)(null !== (t = null == C ? void 0 : C.flags) && void 0 !== t ? t : 0, _.ApplicationFlags.EMBEDDED_FIRST_PARTY);
        if (!T) throw new u.default(f.RPCErrors.INVALID_COMMAND, "This application cannot access this API");
        r.default.track(a, {
          ...s,
          activity_application_id: l,
          activity_guild_id: h
        })
      }
    },
    [_.RPCCommands.GET_APPLICATION_TICKET]: {
      scope: f.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: t
        } = e, n = t.application.id;
        if (null == n) throw new u.default(f.RPCErrors.INVALID_COMMAND, "No application.");
        return a.default.post({
          url: _.Endpoints.APPLICATION_TICKET(n),
          body: {
            test_mode: l.default.inTestModeForApplication(n) || s.default.inDevModeForApplication(n)
          },
          retries: 3,
          oldFormErrors: !0
        }).then(e => {
          let {
            body: t
          } = e;
          return t
        })
      }
    }
  }