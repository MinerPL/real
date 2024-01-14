"use strict";
n.r(t), n.d(t, {
  UserSettingsDelay: function() {
    return S.UserSettingsDelay
  },
  PreloadedUserSettingsActionCreators: function() {
    return I
  },
  FrecencyUserSettingsActionCreators: function() {
    return T
  },
  UserSettingsActionCreatorsByType: function() {
    return v
  },
  updateUserGuildSettings: function() {
    return A
  },
  updateUserChannelSettings: function() {
    return N
  },
  addDismissedContent: function() {
    return C
  },
  removeDismissedContent: function() {
    return R
  },
  clearDismissedContents: function() {
    return O
  },
  checkAllDismissedContents: function() {
    return L
  }
}), n("70102"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("627445"),
  r = n.n(i),
  o = n("811022"),
  s = n("872717"),
  l = n("713349"),
  a = n("151426"),
  u = n("95410"),
  c = n("913144"),
  d = n("674268"),
  _ = n("275877"),
  f = n("374363"),
  E = n("116949"),
  S = n("397336"),
  g = n("49111");
let h = "UserSettingsProtoLastWriteTimes",
  m = Date.now();
c.default.subscribe("CONNECTION_OPEN", () => {
  Date.now()
}), c.default.subscribe("CONNECTION_CLOSED", () => {
  Date.now()
}), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class p {
  getEditInfo() {
    return f.default.getFullState()[this.type]
  }
  getCurrentValue() {
    return this.getEditInfo().proto
  }
  async updateAsync(e, t, n) {
    await this.loadIfNecessary();
    let i = this.ProtoClass.fields.find(t => t.localName === e);
    if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
    let r = i.T(),
      o = this.getCurrentValue()[e],
      s = null != o ? r.fromBinary(r.toBinary(o), E.BINARY_READ_OPTIONS) : r.create(),
      l = t(s);
    if (!1 === l) return;
    let a = this.ProtoClass.create();
    a[e] = s, __OVERLAY__ ? c.default.dispatch({
      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
      settings: {
        type: this.type,
        proto: a
      },
      delaySeconds: n,
      jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY,
      partial: !0,
      resetEditInfo: !1,
      local: !0
    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(a, {
      delaySeconds: n,
      jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY
    }))
  }
  markDirty(e, t) {
    var n;
    r(!__OVERLAY__, "this cannot run in the overlay");
    let {
      editInfo: i
    } = this.getEditInfo(), o = {
      timeout: i.timeout
    };
    if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
    !1 !== t.dispatch && c.default.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        type: this.type,
        proto: e
      },
      partial: !0,
      local: !0
    });
    let s = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
    if (null != o.timeout && s < i.timeoutDelay && !i.rateLimited && (clearTimeout(o.timeout), o.timeout = void 0), null == o.timeout) {
      let e = 1e3 * s;
      t.jitter && (e += Math.floor(Math.random() * Math.min(e, 3e4))), this.logger.log("Scheduling save from markDirty"), o.timeout = setTimeout(this.persistChanges, e), o.timeoutDelay = s
    }
    null != t.cleanup && (o.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? o.protoToSave = e : o.protoToSave = (0, E.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(o)
  }
  dispatchChanges(e) {
    c.default.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
      settings: {
        changes: e,
        type: this.type
      }
    })
  }
  saveLastSendTime() {
    var e;
    let t = null !== (e = u.default.get(h)) && void 0 !== e ? e : {};
    t[this.type] = Date.now(), u.default.set(h, t)
  }
  async loadIfNecessary(e) {
    if (__OVERLAY__) {
      c.default.dispatch({
        type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
        settingsType: this.type
      });
      return
    }
    let {
      editInfo: t
    } = this.getEditInfo();
    if (e || !t.loaded && !t.loading) {
      this.logger.log("Loading proto"), this.dispatchChanges({
        loading: !0
      });
      try {
        let {
          body: {
            settings: t
          }
        } = await s.default.get({
          url: g.Endpoints.USER_SETTINGS_PROTO(this.type)
        }), n = (0, E.b64ToProto)(this.ProtoClass, t);
        if (null == n) {
          this.dispatchChanges({
            loading: !1,
            loaded: !0
          });
          return
        }
        let i = _.default[this.type],
          {
            proto: r,
            isDirty: o,
            cleanupFuncs: l
          } = (0, E.runMigrations)(n, i);
        return await c.default.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            type: this.type,
            proto: n
          },
          resetEditInfo: o || e,
          local: !1
        }), o && this.markDirtyFromMigration(r, l), n
      } catch (e) {
        throw this.dispatchChanges({
          loading: !1
        }), e
      }
    }
  }
  markDirtyFromMigration(e, t) {
    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
      cleanup: t,
      dispatch: !1,
      delaySeconds: S.UserSettingsDelay.AUTOMATED,
      jitter: !0
    })
  }
  markDirtyIfHasPendingChange(e) {
    let t = this.beforeSendCallbacks.some(e => {
      let {
        hasChanges: t
      } = e;
      return t()
    });
    t && this.markDirty(this.ProtoClass.create(), {
      dispatch: !1,
      delaySeconds: 0,
      cleanup: e
    })
  }
  scheduleSaveFromOfflineEdit() {
    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
    let {
      editInfo: e
    } = this.getEditInfo();
    r(null != e.protoToSave, "protoToSave cannot be null"), r(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r(null == e.timeout, "timeout must not be set already");
    let t = 5e3 + Math.floor(5e3 * Math.random()),
      n = setTimeout(this.persistChanges, t);
    this.dispatchChanges({
      timeout: n,
      timeoutDelay: t
    })
  }
  constructor(e, t) {
    this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
      r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
      let {
        editInfo: e
      } = this.getEditInfo();
      if (null == e.protoToSave) {
        this.logger.log("Not persisting proto because the proto was null");
        return
      }
      this.beforeSendCallbacks.forEach(t => {
        let {
          processProto: n
        } = t;
        return n(e.protoToSave)
      });
      let t = (0, E.protoToB64)(this.ProtoClass, e.protoToSave);
      if (null == t || "" === t) {
        this.logger.log("Not persisting proto because there is nothing to change");
        return
      }
      try {
        this.saveLastSendTime();
        let {
          body: n
        } = await s.default.patch({
          url: g.Endpoints.USER_SETTINGS_PROTO(this.type),
          body: {
            settings: t,
            required_data_version: e.offlineEditDataVersion
          }
        });
        n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
        let i = (0, E.b64ToProto)(this.ProtoClass, n.settings);
        if (null == i) return;
        c.default.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            proto: i,
            type: this.type
          },
          resetEditInfo: !0,
          wasSaved: !0,
          local: !1
        })
      } catch (e) {
        var n, i;
        if (429 === e.status) {
          this.logger.log("Rate limited, scheduling retry");
          let t = setTimeout(this.persistChanges, Math.min(3e4, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * 1e3));
          this.dispatchChanges({
            rateLimited: !0,
            timeout: t
          })
        } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === g.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
        else throw this.logger.log("Unknown user settings error"), e
      }
    }, this.logger = new o.default(this.ProtoClass.typeName)
  }
}
let I = new p(a.PreloadedUserSettings, S.UserSettingsTypes.PRELOADED_USER_SETTINGS),
  T = new p(l.FrecencyUserSettings, S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
  v = {
    [S.UserSettingsTypes.PRELOADED_USER_SETTINGS]: I,
    [S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: T
  };

function A(e, t, n) {
  return I.updateAsync("guilds", n => (0, E.mutateUserGuildSettingsInternal)(n, e, t), n)
}

function N(e, t, n, i) {
  return A(e, e => (0, E.mutateUserChannelSettingsInternal)(e, t, n), i)
}

function C(e) {
  return I.updateAsync("userContent", t => {
    if ((0, d.hasBit)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, d.addBit)(t.dismissedContents, e)
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function R(e) {
  return I.updateAsync("userContent", t => {
    if (!(0, d.hasBit)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, d.removeBit)(t.dismissedContents, e)
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function O() {
  return I.updateAsync("userContent", e => {
    e.dismissedContents = new Uint8Array
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function L() {
  return I.updateAsync("userContent", e => {
    let t = new Uint8Array;
    for (let e of Object.keys(a.DismissibleContent)) t = (0, d.addBit)(t, a.DismissibleContent[e]);
    e.dismissedContents = t
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}