            "use strict";
            n.r(t), n.d(t, {
                isNotAutomodEmbed: function() {
                    return a
                }
            });
            var i = n("246111");
            let a = e => {
                let {
                    type: t
                } = e;
                return t !== i.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== i.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
            }