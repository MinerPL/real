"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
}), E("222007");
var t = E("689988"),
  o = E("765969"),
  n = E("958706");
class r extends t.default {
  handleInteraction(e) {
    let {
      interaction: _
    } = e, E = [n.EmojiInteractionPoint.EmojiButtonMouseEntered, n.EmojiInteractionPoint.ChatInputExpressionPressed, n.EmojiInteractionPoint.SearchEmojiKeybindPressed, n.EmojiInteractionPoint.AutocompleteTyped, n.EmojiInteractionPoint.GuildLeaveModalShown, n.EmojiInteractionPoint.AddReactionPopoutMouseEntered, n.EmojiInteractionPoint.AddReactionPopoutFocused, n.EmojiInteractionPoint.MessageContextMenuMouseEntered, n.EmojiInteractionPoint.AutocompleteWrapperShown];
    E.includes(_) && (0, o.maybeGetEmojiCaptionsForUser)(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }
  }
}
var i = new r