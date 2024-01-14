"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("70102"), n("222007");
var a, s, l = n("37983"),
  i = n("884691"),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("438931"),
  c = n("997289"),
  f = n("605250"),
  m = n("393414"),
  E = n("677225"),
  _ = n("9377"),
  h = n("148813"),
  p = n("535974"),
  I = n("352326"),
  T = n("964889"),
  g = n("773336"),
  C = n("882941"),
  S = n("780009"),
  A = n("159467"),
  N = n("49111"),
  M = n("782340"),
  v = n("530570");
(s = a || (a = {})).PLAY = "play", s.NOW_PLAYING = "now_playing", s.INSTALL = "install", s.UPDATE = "update", s.PAUSED = "paused", s.LOCATE = "locate", s.UNINSTALLING = "uninstalling", s.QUEUED = "queued", s.DOWNLOADING = "downloading", s.UNSUPPORTED_OS = "unsupported_os", s.ADD_TO_LIBRARY = "add_to_library", s.PREORDER_WAIT = "preorder_wait";
let x = Object.freeze({
    [N.LibraryApplicationActions.PLAY]: "play",
    [N.LibraryApplicationActions.INSTALL]: "install",
    [N.LibraryApplicationActions.UPDATE]: "update",
    [N.LibraryApplicationActions.PAUSE]: "downloading",
    [N.LibraryApplicationActions.MOVE_UP]: "queued",
    [N.LibraryApplicationActions.RESUME]: "paused"
  }),
  O = () => [M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class L extends i.Component {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: N.AnalyticsObjects.BUTTON_CTA
    }
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return M.default.Messages.GAME_ACTION_BUTTON_INSTALL;
      case "update":
        return M.default.Messages.GAME_ACTION_BUTTON_UPDATE;
      case "paused":
        return M.default.Messages.GAME_ACTION_BUTTON_PAUSED;
      case "locate":
        return M.default.Messages.GAME_ACTION_BUTTON_LOCATE;
      case "uninstalling":
        let t = O();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return M.default.Messages.GAME_ACTION_BUTTON_QUEUED;
      case "downloading":
        return M.default.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
      case "preorder_wait":
        return M.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
      case "add_to_library":
        return M.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
      default:
        throw Error("Unexpected button state")
    }
  }
  getButtonState() {
    let {
      libraryApplication: e,
      dispatchState: t,
      actionState: n
    } = this.props;
    if (e.isHidden()) return "add_to_library";
    if (e.isPreorder()) return "preorder_wait";
    let a = null != n ? x[n] : null;
    return null != a ? a : null != t && t.type === N.LocalDispatchApplicationStates.UNINSTALLING ? "uninstalling" : (0, g.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: a,
      customDisabledColor: s,
      isPlayShiny: i,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    } = this.props;
    return (0, l.jsx)(A.default, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: a,
      customDisabledColor: s,
      isShiny: i,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: a,
      size: s,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, l.jsxs)("div", {
      className: v.disabledButtonWrapper,
      children: [(0, l.jsxs)(u.Button, {
        className: n,
        fullWidth: a,
        size: s,
        color: null != i ? i : v.disabledButtonColor,
        disabled: !0,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, l.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, l.jsx)("div", {
          className: v.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderProgressBar() {
    let {
      hideProgress: e,
      dispatchState: t
    } = this.props;
    if (e) return null;
    let n = T.convertToTransitionState(t);
    if (null == n) return null;
    let a = n.type === N.LocalDispatchApplicationStates.UNINSTALLING ? u.Progress.INDETERMINATE : T.calculateProgressPercentage(Number(n.progress), Number(n.total));
    return (0, l.jsx)(u.Progress, {
      percent: a,
      size: u.Progress.Sizes.XSMALL,
      foregroundColor: n.paused ? o.default.unsafe_rawColors.PRIMARY_500.css : o.default.unsafe_rawColors.GREEN_360.css,
      backgroundColor: o.default.unsafe_rawColors.TRANSPARENT.css,
      className: v.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: a,
      size: s,
      color: i,
      isCloudSyncing: r
    } = this.props;
    return (0, l.jsxs)(u.Button, {
      className: n,
      fullWidth: a,
      size: s,
      color: null != i ? i : u.Button.Colors.GREEN,
      hover: null != i ? u.Button.Hovers.GREEN : u.Button.Hovers.DEFAULT,
      submitting: "uninstalling" === e || r,
      onClick: e => this.handleClick(e, t),
      children: [this.getText(e), this.renderProgressBar()]
    })
  }
  render() {
    let {
      hasNoBuild: e,
      libraryApplication: t
    } = this.props, n = this.getButtonState();
    if ("play" === n) return this.renderPlayButton();
    if ("preorder_wait" === n) return this.renderDisabledButton(n, function(e) {
      let t = C.getReadablePreorderReleaseDate(e.sku);
      return null != t ? M.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({
        date: t
      }) : null
    }(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, M.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({
      operatingSystem: M.default.Messages.WINDOWS
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, M.default.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
    let a = this.onClickHandlers[n];
    return null == a ? this.renderDisabledButton(n) : this.renderActionButton(n, a)
  }
  constructor(...e) {
    super(...e), this._uninstallStringIndex = null, this.handleAddToLibrary = async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await d.updateFlags(e.id, e.branchId, e.getFlags() & ~N.LibraryApplicationFlags.HIDDEN), (0, m.transitionTo)(N.Routes.APPLICATION_LIBRARY)
      } catch (e) {
        new(0, f.default)("LibraryApplicationButton").error(e)
      }
    }, this.handleInstall = () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      S.installApplication(e.id, e.branchId, t)
    }, this.handleUpdate = () => {
      let {
        libraryApplication: e
      } = this.props;
      S.updateApplication(e.id, e.branchId)
    }, this.onClickHandlers = {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }, this.handleClick = (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    }
  }
}

function R(e) {
  let {
    libraryApplication: t
  } = e, n = (0, c.useAnalyticsContext)(), [a, s] = (0, r.useStateFromStoresArray)([p.default, I.default], () => [(0, _.getDefaultLibraryApplicationAction)(t, p.default, I.default), p.default.getState(t.id, t.branchId)], [t]), i = (0, r.useStateFromStores)([h.default], () => h.default.isSyncing(t.id, t.branchId), [t]), o = (0, r.useStateFromStores)([E.default], () => E.default.hasNoBuild(t.id, t.branchId), [t]);
  return (0, l.jsx)(L, {
    ...e,
    analyticsContext: n,
    actionState: a,
    dispatchState: s,
    isCloudSyncing: i,
    hasNoBuild: o
  })
}
L.defaultProps = {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  hideProgress: !1,
  isPlayShiny: !1,
  tooltipPosition: "top"
}, L.ButtonStates = a