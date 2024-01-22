    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return h
      }
    }), t("222007"), t("70102");
    var d = t("147369"),
      s = t("803182"),
      n = t("619443"),
      c = t("21121"),
      i = t("693051"),
      r = t("607542"),
      o = t("153498"),
      f = t("934306"),
      l = t("742171"),
      u = t("393027"),
      p = t("393414"),
      b = t("49111"),
      h = new class e {
        initialize() {
          this.cleanup(), this.unlistenHistory = (0, p.getHistory)().listen(this.handleRouteChange);
          let {
            pathname: e
          } = (0, p.getHistory)().location;
          u.default.getState().resetPath(e), this.unlistenKeyboardChange = u.default.subscribe(this.handleKeybindRouteChange), n.default.addChangeListener(this.handleConnectionChange)
        }
        convertRouteToNavigation(e, a) {
          let {
            pathname: t
          } = e, d = (0, i.getRootNavigationRef)(), n = (0, c.isInMainTabsExperiment)();
          if (null != d && d.isReady()) {
            if (n && (0, f.isSplitMessagesTab)() && t === b.Routes.ME) {
              (0, o.navigateToRootTab)({
                screen: "messages",
                resetRoot: e.navigationReplace
              });
              return
            }
            if (n && t === b.Routes.NOTIFICATIONS) {
              (0, o.navigateToRootTab)({
                screen: "notifications",
                resetRoot: e.navigationReplace
              });
              return
            }
            if (t.startsWith("/channels/")) {
              let a = (0, s.matchPath)(t, {
                  path: b.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                }),
                c = (0, s.matchPath)(t, {
                  path: "".concat(b.Routes.CHANNEL(":guildId", ":channelId?")).concat(b.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                });
              if (!n) {
                var u, p;
                let e = d.getRootState();
                (null == e ? void 0 : null === (p = e.routes) || void 0 === p ? void 0 : null === (u = p[0]) || void 0 === u ? void 0 : u.name) !== "panels" && (0, o.resetToPanelsUI)();
                return
              }
              if (null != c) {
                let {
                  voiceGuildId: a,
                  voiceChannelId: t,
                  voiceMessageId: d
                } = c.params;
                (0, l.isOldVoiceUIEnabled)() && (0, o.navigateToChannel)({
                  channelId: t,
                  guildId: a,
                  messageId: d,
                  replaceChannelAndFixRoot: e.navigationReplace
                });
                return
              }
              if (null != a) {
                let {
                  channelId: t,
                  guildId: s,
                  messageId: n
                } = a.params;
                if (!(0, f.isSplitMessagesTab)()) {
                  (0, o.navigateToRootTab)({
                    screen: "guilds",
                    guildId: s,
                    resetRoot: e.navigationReplace
                  });
                  return
                }
                if ((0, f.isOnNewPanels)()) {
                  let [e, a] = (0, r.default)(d.getCurrentRoute());
                  if (e === s && a === t) return
                }
                null == t || (0, f.shouldHandleNewPanelsRoute)(s) && !1 !== e.navigationReplace ? s === b.ME ? (0, o.navigateToRootTab)({
                  screen: "messages",
                  resetRoot: e.navigationReplace
                }) : (0, o.navigateToRootTab)({
                  screen: "guilds",
                  guildId: s,
                  channelId: (0, f.isOnNewPanels)() ? t : void 0,
                  resetRoot: e.navigationReplace
                }) : null != s && (0, o.navigateToChannel)({
                  channelId: t,
                  guildId: s,
                  messageId: n,
                  replaceChannelAndFixRoot: e.navigationReplace
                })
              }
              return
            }
            if (t.startsWith("/member-verification/")) {
              let e = (0, s.matchPath)(t, {
                path: b.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
              });
              null != e && (0, o.navigateToMemberVerification)(e.params.guildId, e.params.inviteCode);
              return
            }
            if (t.startsWith("/login") || t.startsWith("/register")) {
              (0, o.resetToAuthRoute)();
              return
            }
            n && (0, o.navigateToRootTab)({
              screen: "messages",
              resetRoot: e.navigationReplace
            })
          }
        }
        executeRouteRewrites(e, a) {
          if (this.routeChangeCount += 1, this.routeChangeCount < 10)
            for (let t of this.rewrites) {
              let s = (0, p.getHistory)().location.pathname,
                n = t(e, a);
              if (null != n) return (0, d.addBreadcrumb)({
                message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                data: {
                  replacePath: n.path,
                  previousPath: s
                }
              }), (0, p.replaceWith)(n.path, n.state), !0
            } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
          return !1
        }
        cleanup() {
          var e, a;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (a = this.unlistenKeyboardChange) || void 0 === a || a.call(this), this.unlistenKeyboardChange = void 0, n.default.removeChangeListener(this.handleConnectionChange)
        }
        addRouteChangeListener(e) {
          return null != this.unlistenHistory && e((0, p.getHistory)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let a = e((0, p.getHistory)().location, (0, p.getHistory)().action);
            null != a && (0, p.replaceWith)(a.path, a.state)
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e)
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e)
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e)
        }
        getHistory() {
          return (0, p.getHistory)()
        }
        constructor() {
          this.rewrites = new Set, this.listeners = new Set, this.routeChangeCount = 0, this.timer = -1, this.connected = !1, this.handleConnectionChange = () => {
            let e = n.default.isConnected(),
              a = e && !this.connected;
            this.connected = e, a && (this.routeChangeCount = 0, this.executeRouteRewrites((0, p.getHistory)().location, "REPLACE"))
          }, this.handleRouteChange = (e, a) => {
            if (this.executeRouteRewrites(e, a)) return;
            let t = u.default.getState();
            for (let d of (t.basePath !== e.pathname && t.resetPath(e.pathname), this.listeners)) try {
              d(e, a)
            } catch (e) {
              console.warn("RouteManager.listen: A route listener has caused an error", e.message)
            }
            this.convertRouteToNavigation(e, a), this.routeChangeCount = 0
          }, this.handleKeybindRouteChange = e => {
            let {
              path: a
            } = e;
            null != a ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == a && clearTimeout(this.timer)
          }, this.flushRoute = () => {
            clearTimeout(this.timer);
            let e = u.default.getState();
            null != e.path && (0, p.transitionTo)(e.path)
          }
        }
      }