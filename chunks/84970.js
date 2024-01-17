"use strict";
E.r(_), E.d(_, {
  GameDisplayModeStorage: function() {
    return n
  }
});
var t = E("95410"),
  o = E("115718");
class n {
  save() {
    let e = {
      games: this.games
    };
    t.default.set(n.storageKey, e)
  }
  static load() {
    return null == n._loaded && (n._loaded = n.loadInternal()), n._loaded
  }
  static loadInternal() {
    let e = t.default.get(n.storageKey);
    if (null != e) {
      var _;
      return new n(null !== (_ = e.games) && void 0 !== _ ? _ : {})
    }
    let E = new n({});
    return E.save(), E
  }
  static getGameSettings(e) {
    var _;
    if (null == e) return null;
    let E = n.load();
    return null !== (_ = E.games[e]) && void 0 !== _ ? _ : null
  }
  static updateGameSettings(e, _) {
    if (null == e) return;
    let E = n.load(),
      t = E.games[e];
    if (null == t) {
      E.games[e] = {
        screen: o.RunningProcessFullscreenType.UNKNOWN,
        date: Date.now(),
        ..._
      }, E.save();
      return
    }
    "boolean" == typeof _.disabled && (t.disabled = _.disabled), "number" == typeof _.screen && (t.screen = _.screen), t.date = Date.now(), E.save()
  }
  static isPromptingForGameDisable(e) {
    var _, E;
    return null !== (E = null === (_ = n.getGameSettings(e)) || void 0 === _ ? void 0 : _.disabled) && void 0 !== E && E
  }
  static setPromptingForGameDisable(e, _) {
    n.updateGameSettings(e, {
      disabled: _
    })
  }
  static getGameDisplayMode(e) {
    var _, E;
    return null == e ? null : null !== (E = null === (_ = n.getGameSettings(e)) || void 0 === _ ? void 0 : _.screen) && void 0 !== E ? E : null
  }
  static setGameDisplayMode(e, _) {
    n.updateGameSettings(e, {
      screen: _
    })
  }
  static clearOldGameSettings() {
    let e = n.load();
    if (null == e.games) return;
    let _ = Date.now() - 31536e6;
    for (let E in e.games) {
      let t = e.games[E];
      t.date < _ && delete e.games[E]
    }
    e.save()
  }
  static reset() {
    let e = n.load();
    e.games = {}, e.save()
  }
  static isTestMode() {
    var e;
    return e = !!window.__GAME_DISPLAY_MODE_TEST_MODE__, e
  }
  static isVerbose() {
    var e;
    return e = !!window.__GAME_DISPLAY_MODE_DEBUG__, e
  }
  constructor(e) {
    this.games = e
  }
}
n._loaded = null, n.storageKey = "GameDisplayModeStorage", setTimeout(() => n.clearOldGameSettings(), 6e4)