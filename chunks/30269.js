            "use strict";
            n.r(t), n.d(t, {
                SEARCH_EMOJIS: function() {
                    return u
                }
            });
            var i = n("913144"),
                o = n("659500"),
                l = n("49111"),
                a = n("958706");
            let u = {
                binds: ["mod+e"],
                comboKeysBindGlobal: !0,
                action: () => (i.default.dispatch({
                    type: "EMOJI_INTERACTION_INITIATED",
                    interaction: a.EmojiInteractionPoint.SearchEmojiKeybindPressed
                }), o.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_EMOJI_POPOUT), !1)
            }