"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("70102"), n("222007");
var s, l, a = n("37983"),
  i = n("884691"),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("438931"),
  c = n("997289"),
  f = n("605250"),
  E = n("393414"),
  _ = n("677225"),
  T = n("9377"),
  I = n("148813"),
  m = n("535974"),
  N = n("352326"),
  p = n("964889"),
  S = n("773336"),
  A = n("882941"),
  C = n("780009"),
  h = n("159467"),
  g = n("49111"),
  M = n("782340"),
  O = n("530570");
(l = s || (s = {})).PLAY = "play", l.NOW_PLAYING = "now_playing", l.INSTALL = "install", l.UPDATE = "update", l.PAUSED = "paused", l.LOCATE = "locate", l.UNINSTALLING = "uninstalling", l.QUEUED = "queued", l.DOWNLOADING = "downloading", l.UNSUPPORTED_OS = "unsupported_os", l.ADD_TO_LIBRARY = "add_to_library", l.PREORDER_WAIT = "preorder_wait";
let R = Object.freeze({
    [g.LibraryApplicationActions.PLAY]: "play",
    [g.LibraryApplicationActions.INSTALL]: "install",
    [g.LibraryApplicationActions.UPDATE]: "update",
    [g.LibraryApplicationActions.PAUSE]: "downloading",
    [g.LibraryApplicationActions.MOVE_UP]: "queued",
    [g.LibraryApplicationActions.RESUME]: "paused"
  }),
  L = () => [M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, M.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class v extends i.Component {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: g.AnalyticsObjects.BUTTON_CTA
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
        let t = L();
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
    let s = null != n ? R[n] : null;
    return null != s ? s : null != t && t.type === g.LocalDispatchApplicationStates.UNINSTALLING ? "uninstalling" : (0, S.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: l,
      isPlayShiny: i,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    } = this.props;
    return (0, a.jsx)(h.default, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: l,
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
      fullWidth: s,
      size: l,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: O.disabledButtonWrapper,
      children: [(0, a.jsxs)(u.Button, {
        className: n,
        fullWidth: s,
        size: l,
        color: null != i ? i : O.disabledButtonColor,
        disabled: !0,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, a.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, a.jsx)("div", {
          className: O.disabledButtonOverlay,
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
    let n = p.convertToTransitionState(t);
    if (null == n) return null;
    let s = n.type === g.LocalDispatchApplicationStates.UNINSTALLING ? u.Progress.INDETERMINATE : p.calculateProgressPercentage(Number(n.progress), Number(n.total));
    return (0, a.jsx)(u.Progress, {
      percent: s,
      size: u.Progress.Sizes.XSMALL,
      foregroundColor: n.paused ? o.default.unsafe_rawColors.PRIMARY_500.css : o.default.unsafe_rawColors.GREEN_360.css,
      backgroundColor: o.default.unsafe_rawColors.TRANSPARENT.css,
      className: O.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: l,
      color: i,
      isCloudSyncing: r
    } = this.props;
    return (0, a.jsxs)(u.Button, {
      className: n,
      fullWidth: s,
      size: l,
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
      let t = A.getReadablePreorderReleaseDate(e.sku);
      return null != t ? M.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({
        date: t
      }) : null
    }(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, M.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({
      operatingSystem: M.default.Messages.WINDOWS
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, M.default.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
    let s = this.onClickHandlers[n];
    return null == s ? this.renderDisabledButton(n) : this.renderActionButton(n, s)
  }
  constructor(...e) {
    super(...e), this._uninstallStringIndex = null, this.handleAddToLibrary = async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await d.updateFlags(e.id, e.branchId, e.getFlags() & ~g.LibraryApplicationFlags.HIDDEN), (0, E.transitionTo)(g.Routes.APPLICATION_LIBRARY)
      } catch (e) {
        new(0, f.default)("LibraryApplicationButton").error(e)
      }
    }, this.handleInstall = () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      C.installApplication(e.id, e.branchId, t)
    }, this.handleUpdate = () => {
      let {
        libraryApplication: e
      } = this.props;
      C.updateApplication(e.id, e.branchId)
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

function P(e) {
  let {
    libraryApplication: t
  } = e, n = (0, c.useAnalyticsContext)(), [s, l] = (0, r.useStateFromStoresArray)([m.default, N.default], () => [(0, T.getDefaultLibraryApplicationAction)(t, m.default, N.default), m.default.getState(t.id, t.branchId)], [t]), i = (0, r.useStateFromStores)([I.default], () => I.default.isSyncing(t.id, t.branchId), [t]), o = (0, r.useStateFromStores)([_.default], () => _.default.hasNoBuild(t.id, t.branchId), [t]);
  return (0, a.jsx)(v, {
    ...e,
    analyticsContext: n,
    actionState: s,
    dispatchState: l,
    isCloudSyncing: i,
    hasNoBuild: o
  })
}
v.defaultProps = {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  hideProgress: !1,
  isPlayShiny: !1,
  tooltipPosition: "top"
}, v.ButtonStates = s