"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
}), E("222007");
var t = E("689988"),
  o = E("162771"),
  n = E("630400"),
  r = E("958706");
class i extends t.default {
  handleInteraction(e) {
    let {
      interaction: _
    } = e;
    if ([r.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(_)) {
      let e = o.default.getGuildId();
      (0, n.maybeFetchTopEmojisByGuild)(e)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }
  }
}
var a = new i