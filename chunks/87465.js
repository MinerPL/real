"use strict";
n.r(e), n.d(e, {
  CarouselPrevious: function() {
    return p
  },
  CarouselNext: function() {
    return h
  },
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  i = n("414456"),
  r = n.n(i),
  a = n("77078"),
  l = n("137215"),
  c = n("115184");
let u = {
  CENTER: c.alignCenter,
  LEFT: c.alignLeft
};
class d extends o.PureComponent {
  componentDidUpdate(t) {
    let {
      selectedIndex: e
    } = this.props;
    t.selectedIndex !== e && this.handleSelectedIndexChange(e)
  }
  render() {
    let {
      renderItem: t,
      items: e,
      vertical: n,
      paginationContainerClass: i,
      align: l
    } = this.props, u = n ? c.verticalPaginationItemContainer : c.horizontalPaginationItemContainer;
    return (0, s.jsx)(a.AdvancedScrollerAuto, {
      orientation: n ? "vertical" : "horizontal",
      className: r(u, i, l),
      ref: this.handleSetScrollerRef,
      children: e.map((e, n) => o.cloneElement(t(e, n), {
        onClick: () => this.handlePageClick(n),
        key: n,
        ref: t => {
          this._paginationItemRefs[n] = t
        }
      }))
    })
  }
  constructor(...t) {
    super(...t), this._scrollerRef = null, this._paginationItemRefs = [], this.handleSetScrollerRef = t => {
      this._scrollerRef = t
    }, this.handleSelectedIndexChange = t => {
      let e = this._scrollerRef;
      if (null == e) return;
      let n = this._paginationItemRefs[t];
      null != n && e.scrollIntoViewNode({
        node: n,
        animate: !0,
        padding: this.props.scrollToPadding
      })
    }, this.handlePageClick = t => {
      let {
        onSetItem: e
      } = this.props;
      e(t)
    }
  }
}
d.Align = u, d.defaultProps = {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: u.CENTER
};
class p extends o.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, s.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.NONE,
      className: r(c.prevButtonContainer, t),
      onClick: this.handlePrevClick,
      children: (0, s.jsx)(l.default, {
        className: c.arrow,
        direction: l.default.Directions.LEFT
      })
    })
  }
  constructor(...t) {
    super(...t), this.handlePrevClick = t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    }
  }
}
class h extends o.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, s.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.NONE,
      className: r(c.nextButtonContainer, t),
      onClick: this.handleNextClick,
      children: (0, s.jsx)(l.default, {
        className: c.arrow,
        direction: l.default.Directions.RIGHT
      })
    })
  }
  constructor(...t) {
    super(...t), this.handleNextClick = t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    }
  }
}
var f = d