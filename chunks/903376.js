"use strict";
n.r(t), n.d(t, {
  OPEN_APP_DIRECTORY: function() {
    return a
  }
});
var i = n("412707"),
  o = n("646186"),
  l = n("162771");
let a = {
  binds: ["mod+ctrl+a"],
  comboKeysBindGlobal: !0,
  action() {
    var e;
    let t = null !== (e = l.default.getGuildId()) && void 0 !== e ? e : void 0;
    (0, o.goToAppDirectory)({
      guildId: t,
      entrypoint: {
        name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT
      }
    })
  }
}