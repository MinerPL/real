            "use strict";
            n.r(t), n.d(t, {
                VideoHealthManager: function() {
                    return l
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                r = n("811022"),
                s = n("398183"),
                a = n("591883"),
                o = n("49111");
            class l {
                calculateFps(e, t, n) {
                    if (-1 === this.prevFramesCodec[e]) return this.prevFramesCodec[e] = t, this.prevAggDuration[e] = n, t / n;
                    let i = n - this.prevAggDuration[e];
                    this.prevAggDuration[e] = n;
                    let r = (t - this.prevFramesCodec[e]) / i;
                    return this.prevFramesCodec[e] = t, r
                }
                updateFps(e, t, n) {
                    if (!this.disabled && !this.streamDisabledUsers.has(e)) {
                        let r = this.calculateFps(e, t, n);
                        if ((0, i.isNaN)(r)) return;
                        if (this.perUserFpsWindow[e].push(r), this.perUserFpsWindow[e].length < this.windowLength) return;
                        this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift();
                        let s = this.perUserFpsWindow[e].filter(e => e < this.fpsThreshold).length;
                        s >= this.fpsWindowBorderlineCount ? (this.acceptableConditionsCounter[e] = Math.max(0, --this.acceptableConditionsCounter[e]), 0 === this.acceptableConditionsCounter[e] && (this.logger.info("".concat(e, ": detected poor network quality, turning off video")), this.streamDisabledUsers.add(e), this.currentVideoAutoToggleState[e] = o.VideoToggleState.DISABLED, (0, a.default)(e, o.VideoToggleState.DISABLED), this.startReenableBackoffTimer(e))) : (this.acceptableConditionsCounter[e] = Math.min(1, ++this.acceptableConditionsCounter[e]), this.acceptableConditionsCounter[e] >= 1 && this.currentVideoAutoToggleState[e] === o.VideoToggleState.AUTO_PROBING && (this.currentVideoAutoToggleState[e] = o.VideoToggleState.AUTO_ENABLED, this.logger.info("acceptableConditionsCounter reached threshold 1, will reset and send a AUTO_ENABLED for user ".concat(e)), (0, a.default)(e, o.VideoToggleState.AUTO_ENABLED)))
                    }
                }
                startReenableBackoffTimer(e) {
                    if (this.disabled) return;
                    this.logger.info("startReenableBackoffTimer for user ".concat(e));
                    let {
                        lastBackoffTime: t,
                        expBackoffFactor: n
                    } = this.retryBackoffCache[e];
                    null === t || n > 16 || this.elapsedSeconds((0, s.now)(), t) > 600 ? n = 1 : n *= 2, this.retryBackoffCache[e] = {
                        lastBackoffTime: (0, s.now)(),
                        expBackoffFactor: n
                    };
                    let i = n * this.backoffTimeSec * 1e3;
                    this.logger.info("starting backoff timer with time = ".concat(i, " milliseconds")), this.timeoutIdCache[e] = setTimeout(() => {
                        this.reenableVideo(e)
                    }, i)
                }
                reenableVideo(e) {
                    e in this.perUserFpsWindow && (this.logger.info("reenableVideo called for user ".concat(e, " - time = ").concat((0, s.now)())), this.stateCleanupBeforeEnable(e), this.currentVideoAutoToggleState[e] = o.VideoToggleState.AUTO_PROBING, (0, a.default)(e, o.VideoToggleState.AUTO_PROBING))
                }
                elapsedSeconds(e, t) {
                    return (e - t) / 1e3
                }
                stateCleanupBeforeEnable(e) {
                    this.logger.info("VideoHealthManager::stateCleanupBeforeEnable"), this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.streamDisabledUsers.delete(e)
                }
                getCurrentVideoToggleState(e) {
                    return this.currentVideoAutoToggleState[e]
                }
                createUser(e) {
                    this.logger.info("VideoHealthManager::createUser ".concat(e)), !(e in this.perUserFpsWindow) && (this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.acceptableConditionsCounter[e] = 0, this.currentVideoAutoToggleState[e] = o.VideoToggleState.NONE, this.retryBackoffCache[e] = {
                        lastBackoffTime: null,
                        expBackoffFactor: 1
                    })
                }
                deleteUser(e) {
                    this.logger.info("VideoHealthManager::deleteUser ".concat(e)), delete this.perUserFpsWindow[e], delete this.prevFramesCodec[e], delete this.retryBackoffCache[e], delete this.acceptableConditionsCounter[e], delete this.currentVideoAutoToggleState[e], this.streamDisabledUsers.delete(e), clearTimeout(this.timeoutIdCache[e]), delete this.timeoutIdCache[e]
                }
                disable() {
                    for (let e in this.disabled = !0, this.perUserFpsWindow) this.deleteUser(e)
                }
                constructor(e, t, n, s) {
                    this.logger = new r.default("VideoHealthManager"), this.disabled = !1, this.perUserFpsWindow = {}, this.prevFramesCodec = {}, this.prevAggDuration = {}, this.streamDisabledUsers = new Set, this.retryBackoffCache = {}, this.timeoutIdCache = {}, this.acceptableConditionsCounter = {}, this.currentVideoAutoToggleState = {}, this.windowLength = e, this.fpsThreshold = n, this.fpsWindowBorderlineCount = (0, i.ceil)(e * t), this.backoffTimeSec = s, this.logger.info("constructor with windowLength = ".concat(this.windowLength, ",\n      fpsWindowBorderlineCount = ").concat(this.fpsWindowBorderlineCount, ",\n      fpsThreshold = ").concat(this.fpsThreshold, ",\n      backoffTimeSec = ").concat(s))
                }
            }