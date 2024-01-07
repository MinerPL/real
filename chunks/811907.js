            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return t
                }
            }), l("222007");
            var t, n = l("906932"),
                r = l("315102"),
                u = l("719923"),
                o = l("646718");

            function d(e, i) {
                return null == i || "" === i ? e : i
            }
            t = class {
                get premiumSince() {
                    return this._userProfile.premiumSince
                }
                get premiumGuildSince() {
                    return this._userProfile.premiumGuildSince
                }
                get premiumType() {
                    return this._userProfile.premiumType
                }
                get primaryColor() {
                    var e, i;
                    return null !== (i = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== i ? i : this.accentColor
                }
                get canUsePremiumProfileCustomization() {
                    return u.default.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2)
                }
                get canEditThemes() {
                    return this.canUsePremiumProfileCustomization
                }
                get application() {
                    return this._userProfile.application
                }
                hasThemeColors() {
                    var e, i;
                    return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (i = this.themeColors) || void 0 === i ? void 0 : i[1]) != null
                }
                hasPremiumCustomization() {
                    return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
                }
                hasFullProfile() {
                    return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
                }
                isUsingGuildMemberBanner() {
                    var e;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner) != null
                }
                isUsingGuildMemberBio() {
                    var e, i;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.bio) !== ""
                }
                isUsingGuildMemberPronouns() {
                    var e, i;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.pronouns) !== ""
                }
                getBannerURL(e) {
                    let {
                        canAnimate: i,
                        size: l
                    } = e;
                    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, r.getGuildMemberBannerURL)({
                        id: this.userId,
                        guildId: this.guildId,
                        banner: this.banner,
                        canAnimate: i,
                        size: l
                    }) : (0, r.getUserBannerURL)({
                        id: this.userId,
                        banner: this.banner,
                        canAnimate: i,
                        size: l
                    })
                }
                getPreviewBanner(e, i) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                    return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, r.getUserBannerURL)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: i,
                        size: l
                    }) : null : this.getBannerURL({
                        canAnimate: i,
                        size: 480
                    })
                }
                getPreviewBio(e) {
                    var i;
                    return (0, n.getProfilePreviewField)(e, null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.bio, this._userProfile.bio, null != this.guildId)
                }
                getPreviewThemeColors(e) {
                    return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
                }
                getBadges() {
                    var e, i, l;
                    return [...null !== (i = this._userProfile.badges) && void 0 !== i ? i : [], ...null !== (l = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== l ? l : []]
                }
                getLegacyUsername() {
                    return this._userProfile.legacyUsername
                }
                constructor(e, i) {
                    var l, t, n, r;
                    this.userId = e.userId, this.guildId = null == i ? void 0 : i.guildId, this.banner = null !== (l = null == i ? void 0 : i.banner) && void 0 !== l ? l : e.banner, this.bio = d(e.bio, null == i ? void 0 : i.bio), this.pronouns = d(e.pronouns, null == i ? void 0 : i.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (t = null == i ? void 0 : i.themeColors) && void 0 !== t ? t : e.themeColors, this.popoutAnimationParticleType = null !== (n = null == i ? void 0 : i.popoutAnimationParticleType) && void 0 !== n ? n : e.popoutAnimationParticleType, this.profileEffectId = null !== (r = null == i ? void 0 : i.profileEffectId) && void 0 !== r ? r : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = i
                }
            }