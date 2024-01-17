"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("702976"), n("70102");
var a = n("917351"),
  s = n.n(a),
  i = n("913144"),
  l = n("599110"),
  r = n("550368"),
  o = n("718517"),
  u = n("861309"),
  d = n("578287"),
  c = n("716724"),
  f = n("492249"),
  E = n("49111");
let _ = ["349134787773988865"];
var h = {
  [E.RPCCommands.SET_ACTIVITY]: {
    scope: {
      [f.RPC_SCOPE_CONFIG.ANY]: [E.OAuth2Scopes.RPC, E.OAuth2Scopes.RPC_ACTIVITIES_WRITE, f.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, c.default)(e).required().keys({
      pid: e.number().min(0),
      activity: e.object().keys({
        state: e.string().min(2).max(128),
        details: e.string().min(2).max(128),
        timestamps: (0, c.default)(e).keys({
          start: e.number().min(1),
          end: e.number().min(1)
        }),
        assets: (0, c.default)(e).keys({
          large_image: e.string().min(1).max(256),
          large_text: e.string().min(2).max(128),
          small_image: e.string().min(1).max(256),
          small_text: e.string().min(2).max(128)
        }),
        party: (0, c.default)(e).keys({
          id: e.string().min(2).max(128),
          size: e.array().items(e.number().min(1)).length(2),
          privacy: e.number().default(E.ActivityPartyPrivacy.PRIVATE).valid([E.ActivityPartyPrivacy.PRIVATE, E.ActivityPartyPrivacy.PUBLIC])
        }),
        secrets: (0, c.default)(e).keys({
          match: e.string().min(2).max(128),
          join: e.string().min(2).max(128),
          spectate: e.string().min(2).max(128)
        }),
        buttons: e.array().items((0, c.default)(e).keys({
          label: e.string().min(1).max(32).required(),
          url: e.string().uri().min(1).max(512).required()
        })).min(1).max(2),
        instance: e.boolean(),
        supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
        type: e.number().default(E.ActivityTypes.PLAYING).valid(E.ActivityTypes.PLAYING, E.ActivityTypes.LISTENING, E.ActivityTypes.WATCHING)
      }).allow(null)
    }),
    handler(e) {
      var t;
      let n, {
        socket: a,
        args: {
          pid: c,
          activity: h
        },
        isSocketConnected: C
      } = e;
      if (![f.TransportTypes.IPC, f.TransportTypes.WEBSOCKET, f.TransportTypes.POST_MESSAGE].includes(a.transport)) throw new u.default(f.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(a.transport, '" transport'));
      if (null == c && f.TransportTypes.IPC === a.transport) throw new u.default(f.RPCErrors.INVALID_COMMAND, "nonzero pid required");
      if (null == h) return i.default.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: a.id,
        pid: c,
        activity: h
      }), Promise.resolve(h);
      h.name = a.application.name, h.application_id = a.application.id;
      let I = a.transport === f.TransportTypes.POST_MESSAGE,
        T = (0, d.computeActivityFlags)(h, I);
      T > 0 && (h.flags = T), delete h.instance, null === (t = h.party) || void 0 === t || delete t.privacy;
      let {
        assets: S,
        party: m,
        secrets: p,
        timestamps: A,
        buttons: g,
        type: N
      } = h;
      if ((null == N || N !== E.ActivityTypes.PLAYING && !I) && (h.type = E.ActivityTypes.PLAYING), null != p) {
        let e = s.values(p).filter(e => !!e);
        if (null != m && s.intersection(e, [m.id]).length > 0 && !_.includes(a.application.id)) throw new u.default(f.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot match the party id");
        if (s.uniq(e).length < e.length) throw new u.default(f.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets must be unique");
        if (null != g) throw new u.default(f.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot currently be sent with buttons")
      }
      if (null != g && (h.metadata = {
          button_urls: g.map(e => e.url)
        }, h.buttons = g.map(e => e.label)), null != A)
        for (let e of Object.keys(A)) Date.now().toString().length - A[e].toString().length > 2 && (A[e] = Math.floor(A[e] * o.default.Millis.SECOND));
      if (null == S) n = Promise.resolve([]);
      else {
        if (null == a.application || null == a.application.id) throw Error();
        n = (0, r.fetchAssetIds)(a.application.id, [S.large_image, S.small_image])
      }
      return n.then(e => {
        let [t, n] = e;
        if (null != S && (null != t ? S.large_image = t : delete S.large_image, null != n ? S.small_image = n : delete S.small_image), !C()) return;
        i.default.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: a.id,
          pid: c,
          activity: h
        });
        let {
          secrets: s,
          party: r
        } = h, o = {
          application_id: a.application.id,
          type: h.type
        };
        return null != s && (o.has_match_secret = !!s.match, o.has_join_secret = !!s.join), null != S && (o.has_images = !!(S.large_image || S.small_image)), null != r && (o.party_max = null != r.size ? r.size[1] : void 0, o.party_id = r.id), l.default.track(E.AnalyticEvents.ACTIVITY_UPDATED, o), h
      })
    }
  }
}