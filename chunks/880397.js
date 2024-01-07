            "use strict";

            function a(e) {
                let t = {};
                return void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), null != e.pendingBio && (t.bio = e.pendingBio), null != e.pendingPronouns && (t.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffectId && (t.profile_effect_id = null != e.pendingProfileEffectId ? e.pendingProfileEffectId : null), t
            }

            function n(e) {
                let t = {};
                return void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), t
            }

            function l(e) {
                let t = {};
                if (void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingNickname) {
                    var s;
                    t.nick = null !== (s = e.pendingNickname) && void 0 !== s ? s : ""
                }
                return t
            }
            s.r(t), s.d(t, {
                getProfileChangesForUpdateRequest: function() {
                    return a
                },
                getAccountUpdateForUpdateRequest: function() {
                    return n
                },
                getGuildMemberChangesForUpdateRequest: function() {
                    return l
                }
            })