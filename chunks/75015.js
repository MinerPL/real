            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return i
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return S
                },
                BANNER_ASPECT_RATIO: function() {
                    return A
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return p
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return I
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return P
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return O
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return U
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return h
                },
                MessageTypes: function() {
                    return l
                }
            });
            var r, u, i, l, a = n("917219");
            (r = i || (i = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let o = 568,
                s = 2400,
                c = 848,
                d = 2400,
                _ = 1350,
                E = 2400,
                f = 960,
                T = 2400,
                S = 600,
                A = 17 / 6,
                p = 16 / 9,
                I = 2.5,
                R = 4,
                C = o / A,
                N = o / p,
                P = o / I,
                O = o / R,
                U = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                h = o / U;
            (u = l || (l = {}))[u.CROP_GIF_START = 0] = "CROP_GIF_START", u[u.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", u[u.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"