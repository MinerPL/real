"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
}), E("222007"), E("70102");
var t = E("37983"),
  o = E("884691"),
  n = E("233736"),
  r = E("995113"),
  i = function(e, _, E) {
    return null != E && E.forwardRef ? function(e, _) {
      return E => {
        let i = "FluxContainer(".concat(a(E), ")");
        class s extends o.Component {
          componentDidMount() {
            this.listener.attach(i)
          }
          componentWillUnmount() {
            this.listener.detach(), this.memoizedGetStateFromStores.clear()
          }
          render() {
            let {
              forwardedConnectStoresRef: e,
              childProps: _
            } = this.props, o = this.memoizedGetStateFromStores(_);
            return (0, t.jsx)(E, {
              ref: e,
              ..._,
              ...o
            })
          }
          constructor(...E) {
            super(...E), this.memoizedGetStateFromStores = I(_), this.listener = new r.default(e, () => {
              let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
              if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, n.default)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate()
            })
          }
        }
        s.displayName = i;
        let T = o.forwardRef((e, _) => (0, t.jsx)(s, {
          childProps: e,
          forwardedConnectStoresRef: _
        }));
        return T.displayName = "ForwardRef(".concat(i, ")"), T
      }
    }(e, _) : function(e, _) {
      return E => {
        let i = "FluxContainer(".concat(a(E), ")");
        class s extends o.Component {
          componentDidMount() {
            this.listener.attach(i)
          }
          componentWillUnmount() {
            this.listener.detach(), this.memoizedGetStateFromStores.clear()
          }
          render() {
            let e = this.memoizedGetStateFromStores(this.props);
            return (0, t.jsx)(E, {
              ...this.props,
              ...e
            })
          }
          constructor(...E) {
            super(...E), this.memoizedGetStateFromStores = I(_), this.listener = new r.default(e, () => {
              let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
              if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, n.default)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate()
            })
          }
        }
        return s.displayName = i, s
      }
    }(e, _)
  };

function a(e) {
  var _, E;
  return null !== (E = null !== (_ = e.displayName) && void 0 !== _ ? _ : e.name) && void 0 !== E ? E : "<Unknown>"
}

function I(e) {
  let _ = null,
    E = null,
    t = e => null != _ && null != E && (0, n.default)(_, e) ? E : null != _ && null != E && (0, n.default)(_, e) ? (_ = e, E) : null,
    o = o => {
      let n = t(o);
      return null != n ? n : E = e(_ = o)
    };
  return o.getCachedResult = t, o.clear = () => {
    _ = null, E = null
  }, o
}