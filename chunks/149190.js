            "use strict";
            let n;
            l.r(e), l.d(e, {
                init: function() {
                    return C
                },
                syncApplication: function() {
                    return h
                }
            }), l("70102");
            var a = l("872717"),
                i = l("913144"),
                s = l("605250"),
                o = l("831610"),
                u = l("271938"),
                c = l("535974"),
                r = l("964889"),
                d = l("773336"),
                p = l("50885"),
                f = l("49111");
            async function C() {
                if (null != n) return;
                if (!(d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)()))) {
                    new(0, s.default)("CloudSyncUtils").warn("CloudSync is not supported on this platform");
                    return
                }
                await p.default.ensureModule("discord_cloudsync");
                let t = p.default.getCloudSync();
                (n = new t).on("state", t => i.default.dispatch({
                    type: "GAME_CLOUD_SYNC_UPDATE",
                    state: t
                }))
            }

            function h(t, e) {
                var l;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (!c.default.supportsCloudSync(t, e)) return Promise.resolve({
                    type: f.CloudSyncResultTypes.NONE
                });
                let s = function() {
                        if (null == n) throw Error("Initialize cloud sync module before syncing.");
                        return n
                    }(),
                    d = c.default.getState(t, e);
                if (null == d) throw Error("No dispatch state for ".concat(t, ":").concat(e));
                let p = null !== (l = d.storage) && void 0 !== l ? l : {},
                    C = (0, r.getComboId)(t, e),
                    h = u.default.getToken();
                if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
                let A = null != d.installPath ? (0, o.default)(d.installPath) : null;
                if (null == A) throw Error("No install path for ".concat(t, ":").concat(e));
                let _ = u.default.getId(),
                    y = {
                        forceHash: i,
                        manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(A, _),
                        roots: null != p.roots ? p.roots : [{
                            id: f.DefaultCloudSyncConfiguration.ROOT_ID,
                            paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(t => ({
                                platform: t,
                                path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(A, _)
                            })),
                            patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
                        }],
                        storage: {
                            baseURL: "".concat(a.default.getAPIBaseURL()).concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
                            token: h
                        },
                        replacements: {
                            INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(A),
                            USERID: _,
                            BRANCHID: e
                        }
                    };
                return s.sync(C, y)
            }