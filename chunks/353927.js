            "use strict";
            n.r(t), n.d(t, {
                DesktopSources: function() {
                    return k.DesktopSources
                },
                MediaEngineContextTypes: function() {
                    return g
                },
                DeviceTypes: function() {
                    return I
                },
                InputModes: function() {
                    return C
                },
                ConnectionStates: function() {
                    return v
                },
                StatsFilter: function() {
                    return A
                },
                VideoToggleReason: function() {
                    return R
                },
                DEFAULT_VOLUME: function() {
                    return x
                },
                DEFAULT_STREAM_VOLUME: function() {
                    return F
                },
                DEFAULT_VOICE_BITRATE: function() {
                    return V
                },
                DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
                    return B
                },
                DEFAULT_DEVICE_ID: function() {
                    return H
                },
                DISABLED_DEVICE_ID: function() {
                    return j
                },
                DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
                    return Y
                },
                DEFAULT_CALL_BITRATE: function() {
                    return W
                },
                DEFAULT_CALL_MIN_BITRATE: function() {
                    return K
                },
                DEFAULT_CALL_MAX_BITRATE: function() {
                    return z
                },
                PING_INTERVAL: function() {
                    return q
                },
                VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
                    return X
                },
                VIDEO_QUALITY_FRAMERATE: function() {
                    return Q
                },
                VIDEO_QUALITY_FRAMERATE_MUTED: function() {
                    return Z
                },
                VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
                    return J
                },
                DESKTOP_BITRATE: function() {
                    return $
                },
                DESKTOP_BITRATE_ENHANCED: function() {
                    return ee
                },
                MEDIA_SINK_WANTS_PROPERTIES: function() {
                    return et
                },
                defaultVideoQualityOptions: function() {
                    return en
                },
                VideoHealthManagerConfig: function() {
                    return ei
                },
                VIEWERSIDE_CLIP_KFI_MS: function() {
                    return er
                },
                Features: function() {
                    return N
                },
                MediaEngineImplementations: function() {
                    return O
                },
                AudioSubsystems: function() {
                    return D
                },
                Codecs: function() {
                    return y
                },
                SpeakingFlags: function() {
                    return P
                },
                MediaTypes: function() {
                    return L
                },
                ResolutionTypes: function() {
                    return M
                },
                ExperimentFlags: function() {
                    return U
                },
                VideoQualityMode: function() {
                    return G
                },
                NoiseCancellerError: function() {
                    return w
                }
            });
            var i, r, s, a, o, l, u, c, d, f, E, h, p, _, S, m, T, g, I, C, v, A, R, N, O, D, y, P, L, b, M, U, G, w, k = n("771281");
            (i = g || (g = {})).DEFAULT = "default", i.STREAM = "stream", (r = I || (I = {})).AUDIO_INPUT = "audioinput", r.AUDIO_OUTPUT = "audiooutput", r.VIDEO_INPUT = "videoinput", (s = C || (C = {})).PUSH_TO_TALK = "PUSH_TO_TALK", s.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = v || (v = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (o = A || (A = {}))[o.TRANSPORT = 1] = "TRANSPORT", o[o.OUTBOUND = 2] = "OUTBOUND", o[o.INBOUND = 4] = "INBOUND", o[o.ALL = 7] = "ALL", (l = R || (R = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,";
            let x = 100,
                F = 18,
                V = 64e3,
                B = 128e3,
                H = "default",
                j = "disabled",
                Y = .1,
                W = 6e5,
                K = 15e4,
                z = 1e7,
                q = 5e3,
                X = 15e3,
                Q = 30,
                Z = 20,
                J = 12,
                $ = 4e6,
                ee = 8e6,
                et = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
                en = {
                    videoBudget: {
                        width: 1280,
                        height: 720,
                        framerate: Q
                    },
                    videoCapture: {
                        width: 1280,
                        height: 720,
                        framerate: Q
                    },
                    videoBitrate: {
                        min: 15e4,
                        max: 25e5
                    },
                    desktopBitrate: {
                        min: 5e5,
                        max: $,
                        target: 6e5
                    },
                    videoBitrateFloor: 15e4
                },
                ei = {
                    windowLength: 5,
                    allowedPoorFpsRatio: 1,
                    fpsThreshold: 5,
                    backoffTimeSec: 15
                },
                er = 6e4;
            (u = N || (N = {})).AUTO_ENABLE = "AUTO_ENABLE", u.ATTENUATION = "ATTENUATION", u.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", u.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", u.VOICE_PROCESSING = "VOICE_PROCESSING", u.QOS = "QOS", u.NATIVE_PING = "NATIVE_PING", u.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", u.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", u.DEBUG_LOGGING = "DEBUG_LOGGING", u.AUTOMATIC_VAD = "AUTOMATIC_VAD", u.VOICE_PANNING = "VOICE_PANNING", u.DIAGNOSTICS = "DIAGNOSTICS", u.VIDEO = "VIDEO", u.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", u.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", u.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", u.SOUNDSHARE = "SOUNDSHARE", u.LOOPBACK = "LOOPBACK", u.VIDEO_HOOK = "VIDEO_HOOK", u.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", u.WUMPUS_VIDEO = "WUMPUS_VIDEO", u.ELEVATED_HOOK = "ELEVATED_HOOK", u.HYBRID_VIDEO = "HYBRID_VIDEO", u.OPEN_H264 = "OPEN_H264", u.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", u.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", u.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", u.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", u.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", u.AEC_DUMP = "AEC_DUMP", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.CONNECTION_REPLAY = "CONNECTION_REPLAY", u.SIMULCAST = "SIMULCAST", u.RTC_REGION_RANKING = "RTC_REGION_RANKING", u.DIRECT_VIDEO = "DIRECT_VIDEO", u.ELECTRON_VIDEO = "ELECTRON_VIDEO", u.MEDIAPIPE = "MEDIAPIPE", u.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", u.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", u.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", u.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", u.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", u.NOISE_CANCELLATION = "NOISE_CANCELLATION", u.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", u.CLIPS = "CLIPS", u.SPEED_TEST = "SPEED_TEST", u.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", u.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", u.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", u.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", u.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", u.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (c = O || (O = {})).NATIVE = "NATIVE", c.WEBRTC = "WEBRTC", c.DUMMY = "DUMMY", (d = D || (D = {})).LEGACY = "legacy", d.STANDARD = "standard", d.EXPERIMENTAL = "experimental", (f = y || (y = {})).OPUS = "opus", f.VP8 = "VP8", f.VP9 = "VP9", f.H264 = "H264", f.RTX = "rtx", f.TEST = "TEST", (E = P || (P = {}))[E.NONE = 0] = "NONE", E[E.VOICE = 1] = "VOICE", E[E.SOUNDSHARE = 2] = "SOUNDSHARE", E[E.PRIORITY = 4] = "PRIORITY", (h = L || (L = {})).AUDIO = "audio", h.VIDEO = "video", h.SCREEN = "screen", h.TEST = "test", (p = b || (b = {})).PLAYING = "playing", p.PAUSED = "paused", (_ = M || (M = {})).FIXED = "fixed", _.SOURCE = "source", (S = U || (U = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", S.SIGNAL_H265_SUPPORT = "signal_h265_support", S.SIGNAL_AV1_SUPPORT = "signal_av1_support", S.STREAMER_CLIP = "streamer_clip", S.VIEWER_CLIP = "viewer_clip", (m = G || (G = {}))[m.AUTO = 1] = "AUTO", m[m.FULL = 2] = "FULL", (T = w || (w = {}))[T.CPU_OVERUSE = 1] = "CPU_OVERUSE", T[T.FAILED = 2] = "FAILED", T[T.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", T[T.INITIALIZED = 4] = "INITIALIZED"