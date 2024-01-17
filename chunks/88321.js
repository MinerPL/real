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
  E = n("492249"),
  f = n("49111");
let _ = ["349134787773988865"];
var h = {
  [f.RPCCommands.SET_ACTIVITY]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ANY]: [f.OAuth2Scopes.RPC, f.OAuth2Scopes.RPC_ACTIVITIES_WRITE, E.RPC_LOCAL_SCOPE]
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
          privacy: e.number().default(f.ActivityPartyPrivacy.PRIVATE).valid([f.ActivityPartyPrivacy.PRIVATE, f.ActivityPartyPrivacy.PUBLIC])
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
        type: e.number().default(f.ActivityTypes.PLAYING).valid(f.ActivityTypes.PLAYING, f.ActivityTypes.LISTENING, f.ActivityTypes.WATCHING)
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
      if (![E.TransportTypes.IPC, E.TransportTypes.WEBSOCKET, E.TransportTypes.POST_MESSAGE].includes(a.transport)) throw new u.default(E.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(a.transport, '" transport'));
      if (null == c && E.TransportTypes.IPC === a.transport) throw new u.default(E.RPCErrors.INVALID_COMMAND, "nonzero pid required");
      if (null == h) return i.default.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: a.id,
        pid: c,
        activity: h
      }), Promise.resolve(h);
      h.name = a.application.name, h.application_id = a.application.id;
      let T = a.transport === E.TransportTypes.POST_MESSAGE,
        I = (0, d.computeActivityFlags)(h, T);
      I > 0 && (h.flags = I), delete h.instance, null === (t = h.party) || void 0 === t || delete t.privacy;
      let {
        assets: S,
        party: N,
        secrets: A,
        timestamps: p,
        buttons: m,
        type: g
      } = h;
      if ((null == g || g !== f.ActivityTypes.PLAYING && !T) && (h.type = f.ActivityTypes.PLAYING), null != A) {
        let e = s.values(A).filter(e => !!e);
        if (null != N && s.intersection(e, [N.id]).length > 0 && !_.includes(a.application.id)) throw new u.default(E.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot match the party id");
        if (s.uniq(e).length < e.length) throw new u.default(E.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets must be unique");
        if (null != m) throw new u.default(E.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot currently be sent with buttons")
      }
      if (null != m && (h.metadata = {
          button_urls: m.map(e => e.url)
        }, h.buttons = m.map(e => e.label)), null != p)
        for (let e of Object.keys(p)) Date.now().toString().length - p[e].toString().length > 2 && (p[e] = Math.floor(p[e] * o.default.Millis.SECOND));
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
        return null != s && (o.has_match_secret = !!s.match, o.has_join_secret = !!s.join), null != S && (o.has_images = !!(S.large_image || S.small_image)), null != r && (o.party_max = null != r.size ? r.size[1] : void 0, o.party_id = r.id), l.default.track(f.AnalyticEvents.ACTIVITY_UPDATED, o), h
      })
    }
  }
}