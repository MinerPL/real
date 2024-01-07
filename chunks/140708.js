            "use strict";
            i.r(t), i.d(t, {
                addReactionPickerAnimation: function() {
                    return l
                },
                clearReactionPickerAnimation: function() {
                    return s
                }
            });
            var n = i("913144");

            function l(e, t, i, l) {
                n.default.dispatch({
                    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
                    messageId: e,
                    emojiName: t,
                    emojiId: i,
                    startPosition: l
                })
            }

            function s(e, t, i) {
                n.default.dispatch({
                    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
                    messageId: e,
                    emojiName: t,
                    emojiId: i
                })
            }