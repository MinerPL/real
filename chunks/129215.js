"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ea
  }
}), n("70102"), n("222007"), n("808653"), n("424973");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("917351"),
  o = n.n(r),
  u = n("446674"),
  d = n("669491"),
  c = n("819855"),
  f = n("77078"),
  E = n("913144"),
  _ = n("272030"),
  h = n("190017"),
  C = n("827825"),
  I = n("86621"),
  T = n("737960"),
  S = n("299285"),
  m = n("449918"),
  p = n("161778"),
  A = n("686470"),
  g = n("535974"),
  N = n("352326"),
  R = n("471671"),
  O = n("145131"),
  L = n("953109"),
  v = n("280174"),
  M = n("158352"),
  P = n("546671"),
  D = n("945330"),
  y = n("830837"),
  x = n("132755"),
  b = n("993105"),
  U = n("964889"),
  G = n("318042"),
  j = n("449427"),
  w = n("49111"),
  k = n("782340"),
  F = n("918702");
let H = e => {
    let {
      className: t,
      children: n,
      onContextMenu: s,
      item: i
    } = e;
    return (0, a.jsx)("div", {
      className: t,
      onContextMenu: e => s(e, i),
      children: n
    })
  },
  B = [d.default.unsafe_rawColors.BLUE_345.css, d.default.colors.INTERACTIVE_NORMAL.css],
  V = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: s
    } = e;
    return (0, a.jsx)(f.Tooltip, {
      text: t,
      children: e => {
        let {
          onMouseEnter: i,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(f.Button, {
          "aria-label": t,
          className: F.actionButton,
          innerClassName: F.actionButtonContents,
          color: f.Button.Colors.PRIMARY,
          size: f.Button.Sizes.ICON,
          onClick: n,
          onMouseEnter: i,
          onMouseLeave: l,
          children: (0, a.jsx)(s, {
            className: F.actionIcon
          })
        })
      }
    })
  };

function Y(e, t) {
  switch (t) {
    case w.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
    case w.DispatchApplicationStages.PLANNING:
    case w.DispatchApplicationStages.FINALIZING:
    case w.DispatchApplicationStages.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, b.formatSize)(e, {
        useKibibytes: !0
      })
  }
}
let W = {
  [w.LocalDispatchApplicationStates.INSTALLING]: {
    [v.TimeUnits.NONE]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.TimeUnits.SECONDS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.MINUTES]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.HOURS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  },
  [w.LocalDispatchApplicationStates.UPDATING]: {
    [v.TimeUnits.NONE]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.TimeUnits.SECONDS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.MINUTES]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.HOURS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  },
  [w.LocalDispatchApplicationStates.REPAIRING]: {
    [v.TimeUnits.NONE]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.TimeUnits.SECONDS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.MINUTES]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    }),
    [v.TimeUnits.HOURS]: (e, t, n, a) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: a
    })
  }
};

function K(e, t, n, a, s) {
  let i = W[t],
    l = null != i ? Object.keys(i) : [],
    {
      unit: r,
      time: o
    } = (0, v.getTimeAndUnit)(null != e ? e / 60 : null, l);
  if (null != i && null != r) {
    let e = i[r];
    return null != e ? e(n, a, s, o) : null
  }
  return null
}

function z(e) {
  let {
    type: t,
    stage: n,
    percent: a,
    progress: s,
    total: i,
    secondsRemaining: l
  } = e, r = Y(i, n), o = Y(s, n);
  switch (n) {
    case w.DispatchApplicationStages.QUEUED:
      if (0 === s) return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
        percent: a,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.PLANNING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({
        percent: a
      });
    case w.DispatchApplicationStages.ALLOCATING_DISK:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({
        percent: a
      });
    case w.DispatchApplicationStages.PATCHING:
      return K(l, t, a, o, r);
    case w.DispatchApplicationStages.FINALIZING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({
        percent: a
      });
    case w.DispatchApplicationStages.PAUSING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
        percent: a,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.VERIFYING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
        percent: a,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
        percent: a,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.REPAIRING:
      if (t === w.LocalDispatchApplicationStates.REPAIRING) return K(l, t, a, o, r);
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
        percent: a,
        progress: o,
        total: r
      })
  }
  throw Error("Invalid Dispatch stage")
}
let q = {
  NAME: "name",
  PROGRESS: "progress",
  ACTIONS: "actions"
};
class Q extends s.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != e && e.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: n,
      foregroundGradientColor: s,
      message: i
    } = e;
    return (0, a.jsxs)(O.default, {
      direction: O.default.Direction.VERTICAL,
      children: [(0, a.jsx)(f.Progress, {
        percent: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColor: (0, m.getColor)(n),
        foregroundGradientColor: null != s ? [(0, m.getColor)(s[0]), (0, m.getColor)(s[1])] : void 0,
        animate: this.isFocused
      }), (0, a.jsx)("div", {
        className: F.progressCellText,
        children: null != i ? i : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, a.jsxs)(O.default, {
      direction: O.default.Direction.VERTICAL,
      children: [(0, a.jsx)(f.StackedProgress, {
        percents: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColors: B,
        animate: this.isFocused
      }), (0, a.jsx)("div", {
        className: F.progressCellText,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({
        remove: () => h.removeFinished(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, c.isThemeLight)(e.theme) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
      percent: 100
    })
  }
  renderQueued() {
    let e, t;
    let {
      item: {
        state: n,
        theme: a
      }
    } = this.props;
    if (null != n) {
      let {
        progress: a,
        total: s,
        stage: i
      } = n;
      if (null != a && null != s) {
        let n = Y(s, i),
          l = Y(a, i);
        t = U.calculateProgressPercentage(a, s);
        let r = Math.floor(t);
        e = i === w.DispatchApplicationStages.PAUSING ? k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
          percent: r,
          progress: l,
          total: n
        }) : k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
          percent: r,
          progress: l,
          total: n
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
      percent: t,
      foregroundColor: (0, c.isThemeLight)(a) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
      message: e
    })
  }
  renderPaused() {
    let {
      item: {
        state: e,
        theme: t
      }
    } = this.props;
    if (null == e) return null;
    let {
      progress: n,
      total: a
    } = e;
    if (null == n || null == a) return null;
    let s = U.calculateProgressPercentage(n, a),
      i = 0 === n && 1 === a ? k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
        percent: Math.floor(s),
        progress: (0, b.formatSize)(n),
        total: (0, b.formatSize)(a)
      });
    return this.renderBody({
      message: i,
      foregroundColor: (0, c.isThemeLight)(t) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
      percent: s
    })
  }
  renderProgressPatching() {
    return (0, a.jsx)(G.default, {
      getHistoricalTotalBytes: g.default.getHistoricalTotalBytesWritten,
      updateInterval: 5e3,
      children: this.renderProgressPatchingBody
    })
  }
  renderProgressDefault() {
    let {
      state: e
    } = this.props.item;
    if (null == e) return null;
    let {
      total: t,
      progress: n,
      stage: a,
      type: s
    } = e;
    if (null == t || null == n || null == a) return null;
    let i = U.calculateProgressPercentage(n, t),
      l = Math.floor(i);
    return this.renderBody({
      percent: i,
      message: z({
        type: s,
        stage: a,
        percent: l,
        progress: n,
        total: t
      }),
      foregroundColor: w.Color.BLUE_345
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item, t = null != e ? e.stage : null;
    switch (t) {
      case w.DispatchApplicationStages.PATCHING:
      case w.DispatchApplicationStages.REPAIRING:
        return this.renderProgressPatching();
      default:
        return this.renderProgressDefault()
    }
  }
  render() {
    let {
      item: e,
      cellProps: t
    } = this.props;
    if (e.finished) return this.renderFinished();
    if (e.index > 0) return this.renderQueued();
    if (null != e.state && (e.state.type === w.LocalDispatchApplicationStates.UPDATING || e.state.type === w.LocalDispatchApplicationStates.REPAIRING || e.state.type === w.LocalDispatchApplicationStates.INSTALLING)) return null != t && t.paused ? this.renderPaused() : this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), this.renderProgressPatchingBody = (e, t) => {
      let {
        item: {
          state: n
        }
      } = this.props;
      if (null == n) return null;
      let {
        stage: a,
        progress: s,
        total: i,
        type: l,
        readerProgress: r
      } = n;
      if (null == s || null == i || null == a) return null;
      let o = U.calculateProgressPercentage(s, i),
        u = U.calculateProgressPercentage(null != r ? r : 0, i),
        d = e[e.length - 1] / t * 1e3,
        c = i - s,
        f = z({
          type: l,
          stage: a,
          percent: Math.floor(o),
          progress: s,
          total: i,
          secondsRemaining: 0 !== d ? Math.max(1, c / d) : null
        });
      return this.renderStackedProgress({
        percents: [o, u],
        message: f
      })
    }
  }
}
let Z = () => (0, a.jsx)(V, {
    icon: x.default,
    tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
    onClick: () => h.resume()
  }),
  X = () => (0, a.jsx)(V, {
    icon: y.default,
    tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
    onClick: () => h.pause()
  }),
  J = e => {
    let {
      item: t
    } = e;
    return (0, a.jsx)(V, {
      icon: P.default,
      tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
      onClick: () => h.moveUp(t.applicationId, t.branchId)
    })
  },
  $ = e => {
    let {
      item: t
    } = e;
    return (0, a.jsx)(V, {
      icon: D.default,
      tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
      onClick: () => h.cancel(t.applicationId, t.branchId)
    })
  },
  ee = [{
    key: q.NAME,
    cellClassName: F.nameCell,
    render: e => (0, a.jsxs)(O.default, {
      align: O.default.Align.CENTER,
      children: [(0, a.jsx)(L.default, {
        game: e.application,
        className: F.gameIcon,
        size: L.default.Sizes.SMALL
      }), (0, a.jsx)("div", {
        className: F.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: q.PROGRESS,
    cellClassName: F.progressCell,
    headerCellClassName: F.progressCellHeader,
    bodyCellClassName: F.progressCellBody,
    render: (e, t) => (0, a.jsx)(Q, {
      item: e,
      cellProps: t
    })
  }, {
    key: q.ACTIONS,
    cellClassName: F.actionsCell,
    render(e, t) {
      let n, s;
      return e.finished ? n = null != e.libraryApplication ? (0, a.jsx)(C.default, {
        libraryApplication: e.libraryApplication,
        size: f.Button.Sizes.SMALL,
        className: F.gameActionButton,
        source: w.AnalyticsLocations.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== w.LocalDispatchApplicationStates.UP_TO_DATE && (n = e.index > 0 ? (0, a.jsx)(J, {
        item: e
      }) : null != t && t.paused ? (0, a.jsx)(Z, {}) : (0, a.jsx)(X, {
        item: e
      }), s = (0, a.jsx)($, {
        item: e
      })) : s = (0, a.jsx)($, {
        item: e
      }), (0, a.jsxs)(O.default, {
        justify: O.default.Justify.END,
        children: [n, s]
      })
    }
  }];
class et extends s.PureComponent {
  componentDidMount() {
    window.addEventListener("resize", this.throttledUpdateHeight)
  }
  componentDidUpdate(e) {
    this.props.height !== e.height && this.throttledUpdateHeight()
  }
  componentWillUnmount() {
    let {
      applications: e
    } = this.props;
    e.forEach(e => {
      e.finished && E.default.wait(() => {
        h.removeFinished(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = !0
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: s,
      theme: i,
      analyticsContext: r
    } = this.props;
    return 0 === e.length ? null : (0, a.jsxs)("div", {
      className: F.gameUpdates,
      children: [(0, a.jsxs)("div", {
        className: F.headerRow,
        children: [(0, a.jsx)(j.default, {
          className: l(F.headerCell, F.networkProgress),
          title: k.default.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
          getHistoricalTotalBytes: g.default.getHistoricalTotalBytesDownloaded,
          color: w.Color.GREEN_360,
          animate: s
        }), (0, a.jsx)(j.default, {
          className: l(F.headerCell, F.diskProgress),
          title: k.default.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
          getHistoricalTotalBytes: g.default.getHistoricalTotalBytesWritten,
          color: w.Color.BLUE_345,
          animate: s
        })]
      }), (0, a.jsx)(M.default, {
        hasHeader: !1,
        columns: ee,
        data: e,
        className: F.table,
        rowClassName: F.row,
        rowComponent: H,
        cellProps: {
          paused: t,
          isFocused: s,
          theme: i
        },
        rowProps: {
          onContextMenu: (e, t) => {
            var s, i, l;
            return s = e, i = t, l = r, void _.openContextMenuLazy(s, async () => {
              let {
                default: e
              } = await n.el("975419").then(n.bind(n, "975419"));
              return t => (0, a.jsx)(e, {
                ...t,
                applicationId: i.applicationId,
                branchId: i.branchId,
                analyticsContext: l
              })
            })
          }
        },
        bodyCellClassName: F.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), this.isUnmounted = !1, this.isTallerThanHalfViewport = !1, this.throttledUpdateHeight = o.throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, n = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n))
    }, 1e3)
  }
}

function en(e, t, n, a) {
  return e.reduce((e, s, i) => {
    let {
      applicationId: l,
      branchId: r
    } = s, o = n.getApplication(l), u = a.getState(l, r);
    return null != o && e.push({
      key: "".concat(l, ":").concat(r),
      applicationId: l,
      branchId: r,
      state: u,
      application: o,
      libraryApplication: A.default.getLibraryApplication(l, r),
      finished: t,
      index: i
    }), e
  }, [])
}
var ea = (0, T.default)(u.default.connectStores([S.default, g.default, N.default, p.default, R.default], () => {
  let e = en(N.default.activeItems, !1, S.default, g.default),
    t = en(N.default.finishedItems, !0, S.default, g.default);
  return {
    applications: [...e, ...t],
    paused: N.default.paused,
    isFocused: R.default.isFocused(),
    theme: p.default.theme
  }
})((0, I.default)(et)))