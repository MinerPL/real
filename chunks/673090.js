"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("424973"), n("222007");
var a = n("812204"),
  s = n("305122"),
  i = n("235004"),
  l = n("389480"),
  r = n("78581"),
  o = n("245463"),
  u = n("697218"),
  d = n("861309"),
  c = n("716724"),
  E = n("880553"),
  f = n("492249"),
  _ = n("843455"),
  h = {
    [_.RPCCommands.GET_SOUNDBOARD_SOUNDS]: {
      scope: {
        [f.RPC_SCOPE_CONFIG.ANY]: [_.OAuth2Scopes.RPC, f.RPC_LOCAL_SCOPE]
      },
      async handler() {
        await (0, s.maybeFetchSoundboardSounds)();
        let e = i.default.getSounds(),
          t = [];
        return e.forEach(e => e.forEach(e => t.push((0, l.soundboardSoundToAPI)(e)))), t
      }
    },
    [_.RPCCommands.PLAY_SOUNDBOARD_SOUND]: {
      scope: {
        [f.RPC_SCOPE_CONFIG.ALL]: [_.OAuth2Scopes.RPC, _.OAuth2Scopes.RPC_VOICE_WRITE]
      },
      validation: e => (0, c.default)(e).required().keys({
        guild_id: e.string(),
        sound_id: e.string()
      }),
      async handler(e) {
        let {
          args: {
            guild_id: t,
            sound_id: n
          }
        } = e;
        await (0, s.maybeFetchSoundboardSounds)();
        let l = u.default.getCurrentUser(),
          c = i.default.getSound(t, n),
          _ = (0, E.default)(),
          h = null != c && null != l && (0, r.canUseSoundboardSound)(l, c, _);
        if (null == _) throw new d.default(f.RPCErrors.INVALID_CHANNEL, "Invalid Channel.");
        if (h) {
          if ((0, o.default)(_)) null != c && (0, r.playSound)(c, _.id, [a.default.RPC]);
          else throw new d.default(f.RPCErrors.INVALID_PERMISSIONS, "Invalid Permissions.")
        } else throw new d.default(f.RPCErrors.INVALID_SOUND, "Invalid Sound.")
      }
    }
  }