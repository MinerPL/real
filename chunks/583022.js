            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var a = e => {
                let {
                    channel: t,
                    canChat: i,
                    renderReactions: a,
                    canAddNewReactions: l,
                    isLurking: n,
                    isGuest: o,
                    communicationDisabled: s,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
                return {
                    disableReactionReads: !a,
                    disableReactionCreates: n || o || !c || !((!0 === l || u) && !d && r),
                    disableReactionUpdates: n || o || !c || !0 === s
                }
            }