"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("70102"), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("90915"),
  o = n("446674"),
  u = n("862337"),
  d = n("769846"),
  c = n("77078"),
  E = n("913144"),
  f = n("272030"),
  _ = n("259083"),
  h = n("790219"),
  C = n("827825"),
  T = n("577427"),
  I = n("946749"),
  S = n("145131"),
  N = n("953109"),
  A = n("280174"),
  p = n("158352"),
  m = n("867544"),
  g = n("216422"),
  R = n("688342"),
  O = n("599110"),
  L = n("964889"),
  v = n("159885"),
  M = n("950395"),
  P = n("49111"),
  D = n("782340"),
  y = n("304686");
let x = (0, v.cssValueToNumber)(d.default.GAME_LIST_ROW_MIN_HEIGHT),
  b = (0, v.cssValueToNumber)(d.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  U = Object.freeze({
    [P.GameTableListKeys.PLATFORM]: "Platform",
    [P.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [P.GameTableListKeys.NAME]: "Name"
  }),
  G = e => {
    let {
      flag: t,
      icon: n,
      item: s,
      tooltip: i
    } = e, r = s.libraryApplication.hasFlag(t);
    return (0, a.jsx)(c.Tooltip, {
      text: i,
      children: e => (0, a.jsx)(n, {
        className: l(y.settingIcon, {
          [y.hidden]: !r
        }),
        ...e
      })
    })
  },
  j = [{
    key: P.GameTableListKeys.NAME,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: y.nameCell,
    bodyCellClassName: y.nameBodyCell,
    render: e => (0, a.jsxs)(S.default, {
      align: S.default.Align.CENTER,
      children: [(0, a.jsx)(N.default, {
        game: e.application,
        size: N.default.Sizes.SMALL,
        className: y.gameIcon
      }), (0, a.jsxs)("div", {
        className: y.nameCellInfo,
        children: [(0, a.jsx)("div", {
          className: y.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.LibraryApplicationFlags.PREMIUM) ? (0, a.jsx)(c.Tooltip, {
          text: D.default.Messages.PREMIUM_GAME,
          children: e => (0, a.jsx)(g.default, {
            className: y.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: P.GameTableListKeys.PLATFORM,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: y.platformCell,
    bodyCellClassName: y.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, a.jsx)(S.default, {
        align: S.default.Align.CENTER,
        children: null != t ? P.DistributorNames[t] : D.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: P.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: y.lastPlayedCell,
    bodyCellClassName: y.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? D.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? D.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, a.jsx)(A.default, {
        end: e.lastPlayed,
        location: A.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : D.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, a.jsx)(S.default, {
        align: S.default.Align.CENTER,
        className: l({
          [y.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: P.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: y.actionsCell,
    render(e, t, n) {
      var i, r;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: y.settingIcons,
          children: [(0, a.jsx)(G, {
            flag: P.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: m.default,
            tooltip: D.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, a.jsx)(G, {
            flag: P.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: R.default,
            tooltip: D.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, a.jsx)(M.default, {
            className: l(y.settingIcon, {
              [y.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, L.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, a.jsx)(C.default, {
          analyticsListSort: (i = t.sortKey, r = t.sortDirection, "".concat(U[i], " ").concat(r === P.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? c.Button.Colors.GREEN : c.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === P.LibraryApplicationActions.PLAY,
          size: y.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, a.jsx)(h.default, {
          skuId: e.libraryApplication.sku.id,
          applicationId: e.application.id,
          color: o ? c.Button.Colors.GREEN : c.Button.Colors.PRIMARY,
          customDisabledColor: c.Button.Colors.PRIMARY,
          size: y.actionButtonSize
        })]
      })
    }
  }],
  k = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: s,
      onMouseEnter: i,
      onMouseLeave: r,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === n, E = t.key === s;
    return (0, a.jsx)("div", {
      className: l({
        [y.rowWrapperActive]: c && !E,
        [y.rowWrapperGlow]: E,
        [y.rowWrapper]: !c && !E,
        [y.rowWrapperDim]: !c && !t.isLaunchable
      }),
      ref: e => u(e, t.key),
      onMouseEnter: () => i(t),
      onMouseLeave: r,
      onContextMenu: e => o(e, t),
      children: (0, a.jsx)("div", {
        ...d
      })
    })
  };
class w extends s.PureComponent {
  componentDidMount() {
    let {
      fetched: e
    } = this.props;
    e && (this.handleHighlightedApplicationKey(), this.trackViewed())
  }
  componentWillUnmount() {
    this._didUnmount = !0
  }
  componentDidUpdate(e) {
    !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
    let t = this.props.activeRowKey;
    if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
      let e = this._rowRefs[t];
      null != e && (E.default.wait(f.closeContextMenu), this.props.scrollToRow(e, x))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    if (null != e && null != this._rowRefs[e]) {
      this.props.scrollToRow(this._rowRefs[e], x);
      let t = new u.Timeout;
      t.start(b, () => {
        !this._didUnmount && this.setState({
          highlightedApplicationKey: null
        })
      })
    }
  }
  trackViewed() {
    let e = {
        num_applications_total: 0,
        num_applications_discord: 0,
        num_applications_steam: 0,
        num_applications_battlenet: 0,
        num_applications_twitch: 0,
        num_applications_uplay: 0,
        num_applications_origin: 0,
        num_applications_gog: 0,
        num_applications_epic: 0
      },
      {
        analyticsContext: t,
        applicationViewItems: n
      } = this.props;
    for (let t of n) {
      switch (t.libraryApplication.getDistributor()) {
        case P.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case P.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case P.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case P.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case P.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case P.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case P.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case P.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    O.default.track(P.AnalyticEvents.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    _.sortList(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, s = t.length > 0;
    return s ? null : (e = "" !== n ? D.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, a.jsxs)("div", {
      className: s ? y.emptyStateSmall : y.emptyStateLarge,
      children: [(0, a.jsx)("div", {
        className: y.emptyWumpus
      }), (0, a.jsx)(S.default, {
        grow: 0,
        shrink: s ? 1 : 0,
        direction: S.default.Direction.VERTICAL,
        children: (0, a.jsxs)("div", {
          className: y.emptyStateText,
          children: [(0, a.jsx)("div", {
            className: y.emptyStateHeader,
            children: D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, a.jsx)("div", {
            className: y.emptyStateDescription,
            children: e
          })]
        })
      })]
    }))
  }
  render() {
    let {
      sortKey: e,
      sortDirection: t,
      applicationViewItems: n,
      activeRowKey: i,
      stickyHeader: l
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, a.jsxs)(s.Fragment, {
      children: [n.length > 0 ? (0, a.jsx)(p.default, {
        columns: j,
        data: n,
        sortData: !1,
        rowComponent: k,
        className: y.table,
        headerClassName: l ? y.stickyHeader : y.header,
        headerCellClassName: y.headerCell,
        sortedHeaderCellClassName: y.headerCellSorted,
        bodyCellClassName: y.bodyCell,
        rowClassName: y.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: l,
        rowProps: {
          activeRowKey: null != r ? r : i,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : i,
          onContextMenu: this.handleApplicationContextMenu,
          setActiveRowKey: this.setActiveRowKey,
          clearActiveRowKey: this.clearActiveRowKey,
          sortKey: e,
          sortDirection: t
        },
        onSort: this.handleSort
      }) : null, this.renderImportHelp()]
    })
  }
  constructor(...e) {
    super(...e), this._didUnmount = !1, this._rowRefs = {}, this.state = {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }, this.setActiveRowKey = e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }, this.clearActiveRowKey = () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }, this.handleRowMouseEnter = e => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(e.key)
    }, this.handleRowMouseLeave = () => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(null)
    }, this.setRowRef = (e, t) => {
      this._rowRefs[t] = e
    }, this.handleApplicationContextMenu = (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: s
      } = this.props;
      (0, f.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("975419").then(n.bind(n, "975419"));
        return n => (0, a.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: s
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    }
  }
}

function F(e) {
  let t = s.useContext(O.AnalyticsContext),
    n = (0, r.useLocation)(),
    {
      applicationViewItems: i,
      filterQuery: l,
      fetched: u
    } = (0, o.useStateFromStoresObject)([T.default], () => ({
      applicationViewItems: T.default.sortedFilteredLibraryApplicationViewItems,
      filterQuery: T.default.applicationFilterQuery,
      fetched: T.default.hasFetchedApplications
    })),
    {
      sortKey: d,
      sortDirection: c,
      activeRowKey: E,
      isNavigatingByKeyboard: f
    } = (0, o.useStateFromStoresObject)([I.default], () => ({
      sortKey: I.default.sortKey,
      sortDirection: I.default.sortDirection,
      activeRowKey: I.default.activeRowKey,
      isNavigatingByKeyboard: I.default.isNavigatingByKeyboard
    }));
  return (0, a.jsx)(w, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: i,
    filterQuery: l,
    fetched: u,
    sortKey: d,
    sortDirection: c,
    activeRowKey: E,
    isNavigatingByKeyboard: f
  })
}
w.defaultProps = {
  stickyHeader: !1
}