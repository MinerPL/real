            "use strict";
            n.r(t), n.d(t, {
                guildDirectoryEntryFromServer: function() {
                    return o
                },
                MAX_CATEGORY_SERVERS: function() {
                    return u
                },
                orderByTotalMemberCount: function() {
                    return d
                },
                rankByDateAdded: function() {
                    return c
                },
                rankGuildEntries: function() {
                    return f
                },
                hasMinimumMemberCount: function() {
                    return h
                }
            }), n("222007");
            var a = n("627445"),
                l = n.n(a),
                s = n("917351"),
                i = n.n(s),
                r = n("730647");

            function o(e) {
                var t, n, a, s, i, o, u;
                return l(e.type === r.DirectoryEntryTypes.GUILD, "Directory entries must be connected to a guild!"), {
                    channelId: e.directory_channel_id,
                    guildId: e.entity_id,
                    type: e.type,
                    authorId: e.author_id,
                    createdAt: e.created_at,
                    description: e.description,
                    primaryCategoryId: e.primary_category_id,
                    name: null === (t = e.guild) || void 0 === t ? void 0 : t.name,
                    icon: null === (n = e.guild) || void 0 === n ? void 0 : n.icon,
                    splash: null === (a = e.guild) || void 0 === a ? void 0 : a.splash,
                    features: new Set(null === (s = e.guild) || void 0 === s ? void 0 : s.features),
                    approximateMemberCount: null === (i = e.guild) || void 0 === i ? void 0 : i.approximate_member_count,
                    approximatePresenceCount: null === (o = e.guild) || void 0 === o ? void 0 : o.approximate_presence_count,
                    featurableInDirectory: null === (u = e.guild) || void 0 === u ? void 0 : u.featurable_in_directory
                }
            }
            let u = 5;

            function d(e) {
                return i.orderBy(e, [e => e.approximateMemberCount], ["desc"])
            }

            function c(e) {
                var t;
                let n = e.filter(e => e.featurableInDirectory && h(e));
                return (t = n, i.orderBy(t, [e => e.createdAt], ["desc"])).slice(0, u)
            }

            function f(e) {
                return d(e)
            }

            function h(e) {
                var t;
                return (null !== (t = e.approximateMemberCount) && void 0 !== t ? t : 0) >= 5
            }