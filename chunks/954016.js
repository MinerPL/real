            "use strict";
            n.r(t), n.d(t, {
                ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
                    return O
                },
                validStreamURL: function() {
                    return D
                },
                XBOX_ACTIVITY_APPLICATION_ID: function() {
                    return y
                },
                END_GAME_APPLICATION_ID: function() {
                    return P
                },
                JAM_SPACE_APPLICATION_ID: function() {
                    return M
                },
                GARTIC_PHONE_APPLICATION_ID: function() {
                    return U
                },
                COLOR_TOGETHER_APPLICATION_ID: function() {
                    return G
                },
                SPELL_CAST_APPLICATION_ID: function() {
                    return w
                },
                LAND_IO_APPLICATION_ID: function() {
                    return k
                },
                WATCH_YOUTUBE_PROD_APP_ID: function() {
                    return x
                },
                KWIM_APPLICATION_ID: function() {
                    return F
                },
                BOBBLE_LEAGUE_APPLICATION_ID: function() {
                    return V
                },
                CHECKERS_IN_THE_PARK_APP_ID: function() {
                    return B
                },
                CHESS_IN_THE_PARK_APP_ID: function() {
                    return H
                },
                BLAZIN_8S_APPLICATION_ID: function() {
                    return j
                },
                POKER_NIGHT_APPLICATION_ID: function() {
                    return Y
                },
                BYS_LETTER_APP_ID: function() {
                    return W
                },
                BYS_TWOODLE_APP_ID: function() {
                    return K
                },
                CHEF_SHOWDOWN_APPLICATION_ID: function() {
                    return z
                },
                PUTT_PARTY_APPLICATION_ID: function() {
                    return q
                },
                KRUNKER_STRIKE_APPLICATION_ID: function() {
                    return X
                },
                COLONIST_APPLICATION_ID: function() {
                    return Q
                },
                EMBEDDED_ACTIVITY_SURVEY_URL: function() {
                    return Z
                },
                ImageSizes: function() {
                    return J
                },
                STAFF_RELEASE_PHASES: function() {
                    return $
                },
                ActivityFeedbackReasons: function() {
                    return i
                },
                ActivityIntent: function() {
                    return r
                },
                ActivityPlatform: function() {
                    return s
                },
                ActivityAccessStatus: function() {
                    return o
                },
                EmbeddedActivityUpdateCodes: function() {
                    return l
                },
                OrientationLockState: function() {
                    return u
                },
                ActivityShelfSlides: function() {
                    return c
                },
                ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
                    return ee
                },
                APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
                    return et
                },
                APPLICATIONS_WITH_NO_REFFERER: function() {
                    return en
                },
                WhatsNewSection: function() {
                    return d
                },
                ActivityScreenOrientation: function() {
                    return f
                },
                ActivityLayoutMode: function() {
                    return E
                },
                DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
                    return er
                },
                SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
                    return es
                }
            }), n("222007");
            var i, r, s, a, o, l, u, c, d, f, E, h, p, _, S, m, T, g, I, C, v, A, R = n("798609"),
                N = n("49111");
            let O = 160,
                D = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
                y = "438122941302046720",
                P = "773336526917861400",
                L = "880218832743055411",
                b = "1050941315912835122",
                M = "1070087967294631976",
                U = "1007373802981822582",
                G = "1039835161136746497",
                w = "852509694341283871",
                k = "903769130790969345",
                x = "880218394199220334",
                F = "1078728822972764312",
                V = "947957217959759964",
                B = "832013003968348200",
                H = "832012774040141894",
                j = "832025144389533716",
                Y = "755827207812677713",
                W = "879863686565621790",
                K = "902271654783242291",
                z = "1037680572660727838",
                q = "945737671223947305",
                X = "1011683823555199066",
                Q = "1106787098452832296",
                Z = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
                J = {
                    SMALL: 64,
                    LARGE: 160
                },
                $ = ["in_development", "activities_team", "employee_release"];
            (h = i || (i = {})).FAILED_LOAD = "FAILED_LOAD", h.LAGGING = "LAGGING", h.CONFUSING = "CONFUSING", h.NOT_FUN = "NOT_FUN", h.OTHER = "OTHER", (p = r || (r = {}))[p.PLAY = 0] = "PLAY", p[p.SPECTATE = 1] = "SPECTATE", (_ = s || (s = {})).DESKTOP = "desktop", _.MOBILE = "mobile", (S = a || (a = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", S.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", S.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", S.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (m = o || (o = {}))[m.UNLOCKED = 0] = "UNLOCKED", m[m.NEEDS_NITRO = 1] = "NEEDS_NITRO", (T = l || (l = {}))[T.NO_UPDATE = 0] = "NO_UPDATE", T[T.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", T[T.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", T[T.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", T[T.USER_JOINED = 4] = "USER_JOINED", T[T.USER_LEFT = 5] = "USER_LEFT", T[T.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (g = u || (u = {}))[g.UNLOCKED = 1] = "UNLOCKED", g[g.PORTRAIT = 2] = "PORTRAIT", g[g.LANDSCAPE = 3] = "LANDSCAPE", (I = c || (c = {}))[I.DIRECTORY = 0] = "DIRECTORY", I[I.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", I[I.DETAIL_PAGE = 2] = "DETAIL_PAGE";
            let ee = "activity-shelf",
                et = new Set(["755600276941176913", L, b, x]),
                en = new Set([L, b, x]);
            (C = d || (d = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", C.GDM_ACTIVITIES = "GDM_ACTIVITIES", C.PUTT_PARTY = "PUTT_PARTY", C.JAMSPACE_OLD = "JAMSPACE", C.JAMSPACE = "JAMSPACE2", C.POKER = "POKER", C.FREE = "FREE", (v = f || (f = {}))[v.PORTRAIT = 0] = "PORTRAIT", v[v.LANDSCAPE = 1] = "LANDSCAPE", (A = E || (E = {}))[A.FOCUSED = 0] = "FOCUSED", A[A.PIP = 1] = "PIP", A[A.GRID = 2] = "GRID";
            let ei = {
                    label_type: R.EmbeddedActivityLabelTypes.NONE,
                    release_phase: "",
                    label_until: null
                },
                er = {
                    application_id: "",
                    requires_age_gate: !1,
                    default_orientation_lock_state: 1,
                    tablet_default_orientation_lock_state: 1,
                    supported_platforms: [R.EmbeddedActivitySupportedPlatforms.WEB],
                    client_platform_config: {
                        [R.EmbeddedActivitySupportedPlatforms.WEB]: ei,
                        [R.EmbeddedActivitySupportedPlatforms.IOS]: ei,
                        [R.EmbeddedActivitySupportedPlatforms.ANDROID]: ei
                    },
                    has_csp_exception: !1
                },
                es = [N.ChannelTypes.GUILD_TEXT, N.ChannelTypes.DM, N.ChannelTypes.GROUP_DM]