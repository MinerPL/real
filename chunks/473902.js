            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("913144"),
                s = n("861309"),
                i = n("716724"),
                l = n("492249"),
                r = n("954016"),
                o = {
                    [n("843455").RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
                        validation: e => (0, i.default)(e).required().keys({
                            lock_state: e.number().valid(r.OrientationLockState.UNLOCKED, r.OrientationLockState.PORTRAIT, r.OrientationLockState.LANDSCAPE).required(),
                            picture_in_picture_lock_state: e.number().valid(r.OrientationLockState.UNLOCKED, r.OrientationLockState.PORTRAIT, r.OrientationLockState.LANDSCAPE).allow(null).optional(),
                            grid_lock_state: e.number().valid(r.OrientationLockState.UNLOCKED, r.OrientationLockState.PORTRAIT, r.OrientationLockState.LANDSCAPE).allow(null).optional()
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    lock_state: n,
                                    picture_in_picture_lock_state: i,
                                    grid_lock_state: r
                                }
                            } = e, o = t.application.id;
                            if (null != o) a.default.dispatch({
                                type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                                applicationId: o,
                                lockState: n,
                                pictureInPictureLockState: i,
                                gridLockState: r
                            });
                            else throw new s.default(l.RPCErrors.INVALID_COMMAND, "No application.")
                        }
                    }
                }