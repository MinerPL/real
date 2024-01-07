            "use strict";
            l.r(t), l.d(t, {
                getDefaultLibraryApplicationAction: function() {
                    return r
                }
            });
            var n = l("602043"),
                a = l("49111");

            function r(e, t, l) {
                let r = t.getState(e.id, e.branchId),
                    i = l.getQueuePosition(e.id, e.branchId),
                    u = l.paused;
                if (null != r) {
                    if (null == i || -1 === i) switch (r.type) {
                        case a.LocalDispatchApplicationStates.INSTALLING:
                            return a.LibraryApplicationActions.INSTALL;
                        case a.LocalDispatchApplicationStates.UPDATING:
                        case a.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return a.LibraryApplicationActions.UPDATE
                    }
                    switch (r.type) {
                        case a.LocalDispatchApplicationStates.INSTALLING:
                        case a.LocalDispatchApplicationStates.UPDATING:
                        case a.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case a.LocalDispatchApplicationStates.REPAIRING:
                            if (i > 0) return a.LibraryApplicationActions.MOVE_UP;
                            if (u) return a.LibraryApplicationActions.RESUME;
                            return a.LibraryApplicationActions.PAUSE;
                        case a.LocalDispatchApplicationStates.UP_TO_DATE:
                            return a.LibraryApplicationActions.PLAY;
                        case a.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != i && i > 0 ? a.LibraryApplicationActions.MOVE_UP : (0, n.isSupportedPlatform)() ? a.LibraryApplicationActions.INSTALL : null
            }