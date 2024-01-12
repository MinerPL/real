            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return l
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return _
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return p
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return C
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return A
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return T
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return h
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return m
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return g
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return P
                },
                MessageTypes: function() {
                    return o
                }
            });
            var r, i, l, o, s = n("917219");
            (r = l || (l = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                u = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                E = 2400,
                _ = 960,
                p = 2400,
                C = 600,
                I = 17 / 6,
                A = 16 / 9,
                T = 2.5,
                R = 4,
                h = a / I,
                S = a / A,
                N = a / T,
                m = a / R,
                g = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                P = a / g;
            (i = o || (o = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"