function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e2 = m2[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f2, args);
        return new Ctor();
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react$1 = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$4 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$3 = Symbol.for("react.lazy"), z$4 = Symbol.iterator;
function A$4(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$4 && a[z$4] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$3(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$3.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$3.prototype;
function G$3(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
var H$3 = G$3.prototype = new F$2();
H$3.constructor = G$3;
C$3(H$3, E$3.prototype);
H$3.isPureReactComponent = true;
var I$3 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps)
    for (d2 in g2 = a.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$3, type: a, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$2(a, b2) {
  return { $$typeof: l$3, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$3;
}
function escape$1(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$2 = /\/+/g;
function Q$2(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape$1("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$3:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$2(h2, 0) : d2, I$3(c2) ? (e2 = "", null != a && (e2 = a.replace(P$2, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
      return a2;
    })) : null != c2 && (O$1(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$3(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$4(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a, b2, e2) {
  if (null == a)
    return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$2(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = { map: S$2, forEach: function(a, b2, e2) {
  S$2(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$2(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$2(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$4;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$3({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$3, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a) {
  var b2 = M$2.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$4, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y$3, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$3, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$2.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$2.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$2.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$2.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U$2.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$2.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$2.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$2.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U$2.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U$2.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$2.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U$2.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react$1.exports = react_production_min;
}
var reactExports$1 = react$1.exports;
const React$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports$1);
const React$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React$1
}, [reactExports$1]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports$1, k$3 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$2 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$3(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a)
    m$3.call(a, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$3, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$2;
reactJsxRuntime_production_min.jsx = q$3;
reactJsxRuntime_production_min.jsxs = q$3;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (0 < g2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a:
        for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x = a[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x, C2) ? (a[d2] = x, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x, c2))
            a[d2] = x, a[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports$1, ca = schedulerExports;
function p$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++)
    da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$3(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$3 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$3[a] = new v$3(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$3[b2] = new v$3(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$3[a] = new v$3(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$3[a] = new v$3(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$3[a] = new v$3(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$3[a] = new v$3(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$3[a] = new v$3(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$3[a] = new v$3(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$3[a] = new v$3(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$3[b2] = new v$3(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$3[a] = new v$3(a, 1, false, a.toLowerCase(), null, false, false);
});
z$3.xlinkHref = new v$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$3[a] = new v$3(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e2 = z$3.hasOwnProperty(b2) ? z$3[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$3 = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A$3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$2(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var tb = A$3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$2(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib)
    return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$2(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2)
      throw Error(p$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$2(190));
  }
  if (3 !== c2.tag)
    throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2)
      return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$2 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function Uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 1, fd(a, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 4, fd(a, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a, b2, c2, d2);
    if (null === e2)
      hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e2, a, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a)
    if (b2 = Vb(a), null === b2)
      a = null;
    else if (c2 = b2.tag, 13 === c2) {
      a = Wb(b2);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$3(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$3({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$3({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$3({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$3({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$3({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$3({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$3({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie$1 = false;
function je$1(a, b2) {
  switch (a) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a = b2.data, a === ee$1 && fe$1 ? null : a;
    default:
      return null;
  }
}
function ke$1(a, b2) {
  if (ie$1)
    return "compositionend" === a || !ae$1 && ge$1(a, b2) ? (a = nd(), md = ld = kd = null, ie$1 = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a.type] : "textarea" === b2 ? true : false;
}
function ne$1(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a) {
  se$1(a, 0);
}
function te$1(a) {
  var b2 = ue$1(a);
  if (Wa(b2))
    return a;
}
function ve$1(a, b2) {
  if ("change" === a)
    return b2;
}
var we$1 = false;
if (ia) {
  var xe$1;
  if (ia) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze$1.oninput;
    }
    xe$1 = ye$1;
  } else
    xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a) {
  if ("value" === a.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a, xb(a));
    Jb(re$1, b2);
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae$1(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$1();
}
function De$1(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te$1(qe$1);
}
function Ee$1(a, b2) {
  if ("click" === a)
    return te$1(b2);
}
function Fe$1(a, b2) {
  if ("input" === a || "change" === a)
    return te$1(b2);
}
function Ge$1(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie(a, b2) {
  if (He$1(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$1(a[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je$1(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b2) {
  var c2 = Je$1(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le$1(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe$1(a) {
  var b2 = Me$1(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$1(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; )
      1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue$1(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$1 && Ie(Se$1, d2) || (Se$1 = d2, d2 = oe$1(Re$1, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve$1(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a) {
  if (Xe$1[a])
    return Xe$1[a];
  if (!We$1[a])
    return a;
  var b2 = We$1[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye$1)
      return Xe$1[a] = b2[c2];
  return a;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se$1(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D$2(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x && (F2 = Kb(w2, x), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u2 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x = vf(x), u2--;
                for (; w2--; ) {
                  if (t2 === x || null !== x && t2 === x.alternate)
                    break b;
                  t2 = vf(t2);
                  x = vf(x);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve$1;
        else if (me$1(h3))
          if (we$1)
            na = Fe$1;
          else {
            na = De$1;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a, d3))) {
          ne$1(g3, na, c2, e3);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue$1(d3) : window;
      switch (a) {
        case "focusin":
          if (me$1(xa) || "true" === xa.contentEditable)
            Qe = xa, Re$1 = d3, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue$1(g3, c2, e3);
      }
      var $a;
      if (ae$1)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie$1 ? ge$1(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
      if ($a = ce$1 ? je$1(a, c2) : ke$1(a, c2))
        d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$1(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe$1(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a = Mf(a); null !== a; ) {
          if (c2 = a[Of])
            return c2;
          a = Mf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue$1(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$2(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$2(Wf);
  E$2(H$2);
}
function ag(a, b2, c2) {
  if (H$2.current !== Vf)
    throw Error(p$2(168));
  G$2(H$2, b2);
  G$2(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A$3({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$2(H$2, a);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(p$2(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E$2(Wf), E$2(H$2), G$2(H$2, a)) : E$2(Wf);
  G$2(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$2;
    try {
      var c2 = eg;
      for (C$2 = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$2 = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$2) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a))
          throw Error(p$2(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$2 = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I$2 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I$2)
    return Fg(a), I$2 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b2; )
      Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$2 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$3({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b2 = Mg.current;
  E$2(Mg);
  a._currentValue = b2;
}
function Sg(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2)
      break;
    a = a.return;
  }
}
function Tg(a, b2) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b2 = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b2;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a, d2);
}
function Zg(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a, c2);
}
function eh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function fh(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$3({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function ih(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$3({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L$1(), e2 = lh(a), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L$1(), e2 = lh(a), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = L$1(), d2 = lh(a), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a, e2, d2);
  null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
} };
function oh(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function ph(a, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$2(147, a));
      var e2 = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c2._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function uh(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function vh(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = wh(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = sh(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
      th(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a2,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a2, b3, c3, d3, null);
      th(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x = u2, u2 = null) : x = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I$2 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x = y2(u2, e3, w2, h3[w2], k3), null !== x && (a && null !== x.alternate && u2.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l3 = x : m3.sibling = x, m3 = x);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x);
        break;
      }
      a && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I$2 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d3, f3, h3);
      if (Ka(f3))
        return t2(a2, d3, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$2(174));
  return a;
}
function Ih(a, b2) {
  G$2(Gh, b2);
  G$2(Fh, a);
  G$2(Eh, Dh);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E$2(Eh);
  G$2(Eh, b2);
}
function Jh() {
  E$2(Eh);
  E$2(Fh);
  E$2(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G$2(Fh, a), G$2(Eh, c2));
}
function Lh(a) {
  Fh.current === a && (E$2(Eh), E$2(Fh));
}
var M$1 = Uf(0);
function Mh(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$1 = null, O = null, P$1 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q$1() {
  throw Error(p$2(321));
}
function Wh(a, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He$1(a[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a, b2, c2, d2, e2, f2) {
  Rh = f2;
  N$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P$1 = O = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O && null !== O.next;
  Rh = 0;
  P$1 = O = N$1 = null;
  Sh = false;
  if (b2)
    throw Error(p$2(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
  return P$1;
}
function di() {
  if (null === O) {
    var a = N$1.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b2 = null === P$1 ? N$1.memoizedState : P$1.next;
  if (null !== b2)
    P$1 = b2, O = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
  }
  return P$1;
}
function ei(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function fi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N$1.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$1(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N$1.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$1(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a, b2) {
  var c2 = N$1, d2 = di(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== P$1 && P$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = N$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function mi(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a);
}
function ki(a, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a);
  });
}
function oi(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He$1(a, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a) {
  var b2 = Zg(a, 1);
  null !== b2 && mh(b2, a, 1, -1);
}
function qi(a) {
  var b2 = ci();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ri.bind(null, N$1, a);
  return [b2.memoizedState, a];
}
function li(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b2, c2, d2) {
  var e2 = ci();
  N$1.flags |= a;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O) {
    var g2 = O.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N$1.flags |= a;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a, b2) {
  return ti(8390656, 8, a, b2);
}
function ji(a, b2) {
  return ui(2048, 8, a, b2);
}
function wi(a, b2) {
  return ui(4, 2, a, b2);
}
function xi(a, b2) {
  return ui(4, 4, a, b2);
}
function yi(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function zi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b2, a), c2);
}
function Ai() {
}
function Bi(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function Ci(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function Di(a, b2, c2) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), N$1.lanes |= c2, hh |= c2, a.baseState = true);
  return b2;
}
function Ei(a, b2) {
  var c2 = C$2;
  C$2 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b2();
  } finally {
    C$2 = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b2, c2) {
  var d2 = lh(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, c2);
  else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
    var e2 = L$1();
    mh(c2, a, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a, b2, c2) {
  var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He$1(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a, b2, e2, d2);
    null !== c2 && (e2 = L$1(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a) {
  var b2 = a.alternate;
  return a === N$1 || null !== b2 && b2 === N$1;
}
function Ii(a, b2) {
  Th = Sh = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Ji(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
  ci().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ti(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ti(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = Gi.bind(null, N$1, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = ci();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b2 = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = N$1, e2 = ci();
  if (I$2) {
    if (void 0 === c2)
      throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = ci(), b2 = R.identifierPrefix;
  if (I$2) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b2 = di();
    return Di(b2, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b2 = di().memoizedState;
    return [a, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b2 = di();
  return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b2 = di().memoizedState;
  return [a, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2, digest: null };
}
function Li(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a, b2);
  };
  return c2;
}
function Ri(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
}
function Vi(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag)
      b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b2, c2, d2, e2) {
  if (0 === (a.mode & 1))
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b2, c2, d2) {
  b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
}
function Zi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I$2 && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, d2, e2);
  return b2.child;
}
function aj(a, b2, c2, d2, e2) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
    a = yh(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a.ref === b2.ref)
      return $i(a, b2, e2);
  }
  b2.flags |= 1;
  a = wh(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function cj(a, b2, c2, d2, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d2) && a.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a.lanes, $i(a, b2, e2);
  }
  return dj(a, b2, c2, d2, e2);
}
function ej(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(fj, gj), gj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G$2(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$2(fj, gj), gj |= d2;
  Yi(a, b2, e2, c2);
  return b2.child;
}
function hj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I$2 && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, c2, e2);
  return b2.child;
}
function ij(a, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a, b2, c2, d2, f2, e2);
}
function kj(a, b2, c2, d2, e2, f2) {
  hj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  Ih(a, b2.containerInfo);
}
function mj(a, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = M$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G$2(M$1, e2 & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function tj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a.child, null, c2);
  a = rj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function sj(a, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$2(422))), tj(a, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$2(419));
    d2 = Li(f2, d2, void 0);
    return tj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (Ug || h2) {
    d2 = R;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
    }
    uj();
    d2 = Li(Error(p$2(421)));
    return tj(a, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$2 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a.return, b2, c2);
}
function xj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a, b2, d2.children, c2);
  d2 = M$1.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c2, b2);
          else if (19 === a.tag)
            wj(a, c2, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  G$2(M$1, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a && b2.child !== a.child)
    throw Error(p$2(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = wh(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; )
      a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$2(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G$2(M$1, M$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a, b2, c2);
        G$2(M$1, M$1.current & 1);
        a = $i(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G$2(M$1, M$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2)
          return yj(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$2(M$1, M$1.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a, b2, c2);
  }
  return $i(a, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$3({}, e2, { value: void 0 });
        d2 = A$3({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a, b2) {
  if (!I$2)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function S$1(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Fj(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E$2(Wf);
      E$2(H$2);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b2);
      S$1(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode)
        Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$2(166));
          S$1(b2);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          Aj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a);
                D$2("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$2(lf[e2], a);
                e2 = d2;
                break;
              case "source":
                D$2("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a
                );
                D$2("load", a);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a);
                e2 = d2;
                break;
              case "input":
                Za(a, d2);
                e2 = Ya(a, d2);
                D$2("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$3({}, d2, { value: void 0 });
                D$2("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e2 = gb(a, d2);
                D$2("invalid", a);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Dj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$2(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$1(b2);
      return null;
    case 13:
      E$2(M$1);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M$1.current & 1) ? 0 === T$1 && (T$1 = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return Rg(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E$2(M$1);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$1(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T$1 || null !== a && 0 !== (a.flags & 128))
            for (a = b2.child; null !== a; ) {
              g2 = Mh(a);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G$2(M$1, M$1.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B$2() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a = Mh(g2), null !== a) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$2)
              return S$1(b2), null;
          } else
            2 * B$2() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$2(), b2.sibling = null, c2 = M$1.current, G$2(M$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Jj(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E$2(Wf), E$2(H$2), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E$2(M$1);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$2(M$1), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$1 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Mj(a, b2) {
  var c2 = a.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W$1(a, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a, b2, d2);
  }
}
var Oj = false;
function Pj(a, b2) {
  Cf = dd;
  a = Me$1();
  if (Ne$1(a)) {
    if ("selectionStart" in a)
      var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V$1 = b2; null !== V$1; )
    if (b2 = V$1, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
      a.return = b2, V$1 = a;
    else
      for (; null !== V$1; ) {
        b2 = V$1;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V$1 = a;
          break;
        }
        V$1 = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Tj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Tj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Wj(a, b2, c2), a = a.sibling; null !== a; )
      Wj(a, b2, c2), a = a.sibling;
}
function Xj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Xj(a, b2, c2), a = a.sibling; null !== a; )
      Xj(a, b2, c2), a = a.sibling;
}
var X$1 = null, Yj = false;
function Zj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a, b2, c2), c2 = c2.sibling;
}
function ak(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U$1 || Mj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Yj;
      X$1 = null;
      Zj(a, b2, c2);
      X$1 = d2;
      Yj = e2;
      null !== X$1 && (Yj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Yj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Yj;
      X$1 = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a, b2, c2);
      X$1 = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a, b2, c2);
      break;
    case 1:
      if (!U$1 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
      Zj(a, b2, c2);
      break;
    case 21:
      Zj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Zj(a, b2, c2), U$1 = d2) : Zj(a, b2, c2);
      break;
    default:
      Zj(a, b2, c2);
  }
}
function bk(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X$1 = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X$1)
          throw Error(p$2(160));
        ak(f2, g2, e2);
        X$1 = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a), b2 = b2.sibling;
}
function ek(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W$1(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a);
      fk(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      break;
    case 4:
      dk(b2, a);
      fk(a);
      break;
    case 13:
      dk(b2, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B$2()));
      d2 & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U$1 = (l2 = U$1) || m2, dk(b2, a), U$1 = l2) : dk(b2, a);
      fk(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V$1 = a, m2 = a.child; null !== m2; ) {
            for (q2 = V$1 = m2; null !== V$1; ) {
              r2 = V$1;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a);
      fk(a);
      d2 & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W$1(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function ik(a, b2, c2) {
  V$1 = a;
  jk(a);
}
function jk(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V$1; ) {
    var e2 = V$1, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Kj;
        var l2 = U$1;
        Kj = g2;
        if ((U$1 = k2) && !l2)
          for (V$1 = e2; null !== V$1; )
            g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : kk(e2);
        for (; null !== f2; )
          V$1 = f2, jk(f2), f2 = f2.sibling;
        V$1 = e2;
        Kj = h2;
        U$1 = l2;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$1)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U$1 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function hk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function kk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$1 = h2;
      break;
    }
    V$1 = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K$1 = 0, R = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$1 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L$1() {
  return 0 !== (K$1 & 6) ? B$2() : -1 !== Bk ? Bk : Bk = B$2();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1)
    return Z$1 & -Z$1;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C$2;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a, c2, d2);
  if (0 === (K$1 & 2) || a !== R)
    a === R && (0 === (K$1 & 2) && (rk |= c2), 4 === T$1 && Dk(a, Z$1)), Ek(a, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Hj = B$2() + 500, fg && jg());
}
function Ek(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === R ? Z$1 : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K$1 & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Hk(a, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K$1 & 6))
    throw Error(p$2(327));
  var c2 = a.callbackNode;
  if (Ik() && a.callbackNode !== c2)
    return null;
  var d2 = uc(a, a === R ? Z$1 : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
    b2 = Jk(a, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Kk();
    if (R !== a || Z$1 !== b2)
      vk = null, Hj = B$2() + 500, Lk(a, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K$1 = e2;
    null !== Y$1 ? b2 = 0 : (R = null, Z$1 = 0, b2 = T$1);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B$2()), c2;
    if (6 === b2)
      Dk(a, d2);
    else {
      e2 = a.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
        throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B$2()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B$2(), 10 < b2)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L$1();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$2() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B$2());
  return a.callbackNode === c2 ? Hk.bind(null, a) : null;
}
function Ok(a, b2) {
  var c2 = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
  a = Jk(a, b2);
  2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He$1(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a) {
  if (0 !== (K$1 & 6))
    throw Error(p$2(327));
  Ik();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1))
    return Ek(a, B$2()), null;
  var c2 = Jk(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B$2()), c2;
  if (6 === c2)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Qk(a, uk, vk);
  Ek(a, B$2());
  return null;
}
function Rk(a, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Hj = B$2() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K$1 & 6) && Ik();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = pk.transition, d2 = C$2;
  try {
    if (pk.transition = null, C$2 = 1, a)
      return a();
  } finally {
    C$2 = d2, pk.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$2(fj);
}
function Lk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1)
    for (c2 = Y$1.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E$2(Wf);
          E$2(H$2);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$2(M$1);
          break;
        case 19:
          E$2(M$1);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R = a;
  Y$1 = a = wh(a.current, null);
  Z$1 = gj = b2;
  T$1 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b2) {
  do {
    var c2 = Y$1;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P$1 = O = N$1 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T$1 = 1;
        qk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I$2 && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T$1 && (T$1 = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x = Oi(f2, k2, b2);
              fh(f2, x);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T$1 || 3 === T$1 || 2 === T$1)
    T$1 = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z$1);
}
function Jk(a, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Kk();
  if (R !== a || Z$1 !== b2)
    vk = null, Lk(a, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K$1 = c2;
  nk.current = d2;
  if (null !== Y$1)
    throw Error(p$2(261));
  R = null;
  Z$1 = 0;
  return T$1;
}
function Uk() {
  for (; null !== Y$1; )
    Vk(Y$1);
}
function Mk() {
  for (; null !== Y$1 && !cc(); )
    Vk(Y$1);
}
function Vk(a) {
  var b2 = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Tk(a) : Y$1 = b2;
  ok.current = null;
}
function Tk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$1 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a;
  } while (null !== b2);
  0 === T$1 && (T$1 = 5);
}
function Qk(a, b2, c2) {
  var d2 = C$2, e2 = pk.transition;
  try {
    pk.transition = null, C$2 = 1, Xk(a, b2, c2, d2);
  } finally {
    pk.transition = e2, C$2 = d2;
  }
  return null;
}
function Xk(a, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K$1 & 6))
    throw Error(p$2(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c2)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === R && (Y$1 = R = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C$2;
    C$2 = 1;
    var h2 = K$1;
    K$1 |= 4;
    ok.current = null;
    Pj(a, c2);
    ek(c2, a);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    ik(c2);
    dc();
    K$1 = h2;
    C$2 = g2;
    pk.transition = f2;
  } else
    a.current = c2;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a, B$2());
  if (null !== b2)
    for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b2 = pk.transition, c2 = C$2;
    try {
      pk.transition = null;
      C$2 = 16 > a ? 16 : a;
      if (null === xk)
        var d2 = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K$1 & 6))
          throw Error(p$2(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V$1 = a.current; null !== V$1; ) {
          var f2 = V$1, g2 = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V$1 = q2;
                  else
                    for (; null !== V$1; ) {
                      m2 = V$1;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V$1 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V$1 = r2;
                        break;
                      }
                      V$1 = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V$1 = g2;
          else
            b:
              for (; null !== V$1; ) {
                f2 = V$1;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x = f2.sibling;
                if (null !== x) {
                  x.return = f2.return;
                  V$1 = x;
                  break b;
                }
                V$1 = f2.return;
              }
        }
        var w2 = a.current;
        for (V$1 = w2; null !== V$1; ) {
          g2 = V$1;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V$1 = u2;
          else
            b:
              for (g2 = w2; null !== V$1; ) {
                h2 = V$1;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W$1(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V$1 = F2;
                  break b;
                }
                V$1 = h2.return;
              }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C$2 = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a, b2, 1);
  a = dh(a, b2, 1);
  b2 = L$1();
  null !== a && (Ac(a, 1, b2), Ek(a, b2));
}
function W$1(a, b2, c2) {
  if (3 === a.tag)
    Yk(a, a, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a = Ki(c2, a);
          a = Ri(b2, a, 1);
          b2 = dh(b2, a, 1);
          a = L$1();
          null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L$1();
  a.pingedLanes |= a.suspendedLanes & c2;
  R === a && (Z$1 & c2) === c2 && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$2() - gk ? Lk(a, 0) : sk |= c2);
  Ek(a, b2);
}
function Zk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L$1();
  a = Zg(a, b2);
  null !== a && (Ac(a, b2, c2), Ek(a, c2));
}
function vj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a, c2);
}
function ck(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a, c2);
}
var Wk;
Wk = function(a, b2, c2) {
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a, b2, c2);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a, b2);
      a = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$2 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a, b2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a = Lg(d2, a);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
            break a;
        }
        throw Error(p$2(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a)
          throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$2(423)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$2(424)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$2 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a, b2, c2);
            break a;
          }
          Yi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return pj(a, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
    case 7:
      return Yi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$2(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He$1(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$2(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
    case 15:
      return cj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
    case 19:
      return yj(a, b2, c2);
    case 22:
      return ej(a, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Gk(a, b2) {
  return ac(a, b2);
}
function al(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new al(a, b2, c2, d2);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function yh(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a)
    bj(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function qj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function zh(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function bl(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new bl(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2))
      return bg(a, c2, b2);
  }
  return b2;
}
function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = el(null);
  c2 = a.current;
  d2 = L$1();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d2);
  Ek(a, d2);
  return a;
}
function gl(a, b2, c2, d2) {
  var e2 = b2.current, f2 = L$1(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = dh(e2, b2, g2);
  null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
  return g2;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a, b2) {
  il(a, b2);
  (a = a.alternate) && il(a, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$2(409));
  gl(a, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = hl(g2);
        f2.call(a2);
      };
    }
    var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g2;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g2);
        h2.call(a2);
      };
    }
    gl(b2, g2, a, e2);
  } else
    g2 = rl(c2, b2, a, e2, d2);
  return hl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B$2()), 0 === (K$1 & 6) && (Hj = B$2() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a, 1);
        if (null !== b3) {
          var c3 = L$1();
          mh(b3, a, 1, c3);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = Zg(a, 134217728);
    if (null !== b2) {
      var c2 = L$1();
      mh(b2, a, 134217728, c2);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = lh(a), c2 = Zg(a, b2);
    if (null !== c2) {
      var d2 = L$1();
      mh(c2, a, b2, d2);
    }
    jl(a, b2);
  }
};
Hc = function() {
  return C$2;
};
Ic = function(a, b2) {
  var c2 = C$2;
  try {
    return C$2 = a, b2();
  } finally {
    C$2 = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$2(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$2(200));
  return dl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ol(a))
    throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!ol(a))
    throw Error(p$2(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2)
    for (a = 0; a < d2.length; a++)
      c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err2) {
    console.error(err2);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
function __rest(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
const getCompositionByCompositionId = (searchedName, externalCompositionId) => {
  var _a, _b;
  if ((_b = (_a = window.AdobeAn.compositions) === null || _a === void 0 ? void 0 : _a[externalCompositionId]) === null || _b === void 0 ? void 0 : _b.getLibrary()[searchedName]) {
    return externalCompositionId;
  }
  return null;
};
const getCompositionId = (searchedName, externalCompositionId) => {
  const { compositions } = window.AdobeAn;
  if (compositions === void 0) {
    return null;
  }
  const compositionIds = Object.keys(compositions);
  if (externalCompositionId) {
    return getCompositionByCompositionId(searchedName, externalCompositionId);
  }
  const foundComposition = compositionIds.find((id2) => {
    var _a;
    const library = (_a = compositions[id2]) === null || _a === void 0 ? void 0 : _a.getLibrary();
    if (!library) {
      return false;
    }
    const symbolNames = Object.keys(library);
    return symbolNames.some((symbolName) => {
      const symbol = library[symbolName];
      const symbolPrototype = symbol.prototype;
      if ((symbolPrototype === null || symbolPrototype === void 0 ? void 0 : symbolPrototype.mode) !== "independent") {
        return false;
      }
      return symbolName === searchedName;
    });
  });
  return foundComposition !== null && foundComposition !== void 0 ? foundComposition : null;
};
const log$1 = (...args) => {
  console.error("AnimateCC:", ...args);
};
const createSpriteSheets = (queue, lib, composition) => {
  const spriteSheet = composition.getSpriteSheet();
  const { ssMetadata = [] } = lib;
  for (const metadata of ssMetadata) {
    if (metadata) {
      spriteSheet[metadata.name] = new window.createjs.SpriteSheet({
        images: [queue === null || queue === void 0 ? void 0 : queue.getResult(metadata.name)],
        frames: metadata.frames
      });
    }
  }
};
const resizeCanvas = (stage) => {
  const pRatio = window.devicePixelRatio;
  stage.scaleX = pRatio;
  stage.scaleY = pRatio;
  stage.tickOnUpdate = false;
  stage.update();
  stage.tickOnUpdate = true;
};
const startAnimation = (id2, fps, animationObject, stage) => {
  window.AdobeAn.compositionLoaded(id2);
  stage.addChild(animationObject);
  window.createjs.Ticker.framerate = fps;
  window.createjs.Ticker.addEventListener("tick", stage);
};
const stopAnimation = (stage) => {
  window.createjs.Ticker.removeEventListener("tick", stage);
};
const useSetupAdobe = ({ animationName, composition: externalCompositionId, getAnimationObject, paused, onError, canvasRef }) => {
  const [properties, setProperties] = reactExports$1.useState();
  const compositionRef = reactExports$1.useRef();
  const animationObjectRef = reactExports$1.useRef();
  const stageRef = reactExports$1.useRef();
  const hasError = reactExports$1.useRef(false);
  const setHasError = (newHasError) => {
    hasError.current = newHasError;
    if (newHasError) {
      onError === null || onError === void 0 ? void 0 : onError();
    }
  };
  const setAnimationObject = (animationObject) => {
    animationObjectRef.current = animationObject;
    getAnimationObject === null || getAnimationObject === void 0 ? void 0 : getAnimationObject(animationObject);
  };
  const handleComplete = (event) => {
    if (hasError.current) {
      return;
    }
    const composition = compositionRef.current;
    const lib = composition.getLibrary();
    if (event !== null) {
      createSpriteSheets(event.target, lib, composition);
    }
    const animationObject = new lib[animationName]();
    setAnimationObject(animationObject);
    animationObject.tickEnabled = !paused;
    const canvas = canvasRef.current;
    const stage = new lib.Stage(canvas);
    stageRef.current = stage;
    const { properties: newProperties } = lib;
    setProperties(newProperties);
    resizeCanvas(stage);
    startAnimation(newProperties.id, newProperties.fps, animationObject, stage);
  };
  const handleFileLoad = (event) => {
    var _a;
    const composition = compositionRef.current;
    const images = composition.getImages();
    if (((_a = event === null || event === void 0 ? void 0 : event.item) === null || _a === void 0 ? void 0 : _a.type) === "image") {
      images[event.item.id] = event.result;
    }
  };
  const handleFileError = (event) => {
    setHasError(true);
    if (event.title === "FILE_LOAD_ERROR") {
      const { src } = event.data;
      log$1(`Asset ${src} failed to load`);
    } else {
      log$1("An unknown error has occurred while loading an asset", event);
    }
  };
  const cleanup = (loader) => {
    const stage = stageRef.current;
    loader === null || loader === void 0 ? void 0 : loader.removeEventListener("fileload", handleFileLoad);
    loader === null || loader === void 0 ? void 0 : loader.removeEventListener("complete", handleComplete);
    loader === null || loader === void 0 ? void 0 : loader.removeEventListener("error", handleFileError);
    setProperties(void 0);
    compositionRef.current = void 0;
    animationObjectRef.current = void 0;
    stageRef.current = void 0;
    setHasError(false);
    if (stage) {
      stopAnimation(stage);
    }
  };
  reactExports$1.useEffect(() => {
    const compositionId = getCompositionId(animationName, externalCompositionId);
    if (compositionId === null) {
      log$1(`${externalCompositionId} composition was not found in ${animationName} animation`);
      setHasError(true);
      return () => cleanup();
    }
    const composition = window.AdobeAn.getComposition(compositionId);
    if (composition === void 0) {
      log$1(`Animation with name ${animationName} was not found`);
      setHasError(true);
      return () => cleanup();
    }
    compositionRef.current = composition;
    const { properties: { manifest } } = composition.getLibrary();
    const loader = new window.createjs.LoadQueue(false);
    loader.loadManifest(manifest);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("error", handleFileError);
    if (manifest.filter(({ type }) => type === "image").length === 0) {
      handleComplete(null);
    }
    return () => cleanup(loader);
  }, [animationName, externalCompositionId]);
  reactExports$1.useEffect(() => {
    if (!animationObjectRef.current) {
      return;
    }
    animationObjectRef.current.tickEnabled = !paused;
  }, [paused]);
  return {
    properties
  };
};
const getCanvasSize = (properties) => {
  var _a, _b, _c;
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0
    };
  }
  const width = (_a = properties === null || properties === void 0 ? void 0 : properties.width) !== null && _a !== void 0 ? _a : 0;
  const height = (_b = properties === null || properties === void 0 ? void 0 : properties.height) !== null && _b !== void 0 ? _b : 0;
  const pRatio = (_c = window.devicePixelRatio) !== null && _c !== void 0 ? _c : 1;
  return {
    width: width * pRatio,
    height: height * pRatio
  };
};
const hexToRgba = (color, opacity) => {
  const r2 = Number.parseInt(color.substring(1, 3), 16);
  const g2 = Number.parseInt(color.substring(3, 5), 16);
  const b2 = Number.parseInt(color.substring(5, 7), 16);
  return `rgba(${r2}, ${g2}, ${b2}, ${opacity})`;
};
const AnimateCC = (props) => {
  var _a, _b;
  const { style: additionalStyles, canvasStyle: additionalCanvasStyles, animationName, composition, getAnimationObject, paused } = props, rest = __rest(props, ["style", "canvasStyle", "animationName", "composition", "getAnimationObject", "paused"]);
  const canvasRef = reactExports$1.useRef(null);
  const { properties } = useSetupAdobe(Object.assign(Object.assign({}, props), { canvasRef }));
  const color = reactExports$1.useMemo(() => properties ? hexToRgba(properties.color, properties.opacity) : "transparent", [properties]);
  const { width: canvasWidth, height: canvasHeight } = getCanvasSize(properties);
  return jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsxs("div", Object.assign({ style: Object.assign({ width: "100%", height: "100%" }, additionalStyles) }, rest, { children: [jsxRuntimeExports.jsx("canvas", { ref: canvasRef, width: canvasWidth, height: canvasHeight, style: Object.assign({ display: "block", width: "100%", backgroundColor: color }, additionalCanvasStyles) }), jsxRuntimeExports.jsx("div", { style: {
    pointerEvents: "none",
    overflow: "hidden",
    width: `${(_a = properties === null || properties === void 0 ? void 0 : properties.width) !== null && _a !== void 0 ? _a : 0}px`,
    height: `${(_b = properties === null || properties === void 0 ? void 0 : properties.height) !== null && _b !== void 0 ? _b : 0}px`,
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "block"
  } })] })) });
};
var react = { exports: {} };
(function(module, exports) {
  !function(e2, t2) {
    module.exports = t2(reactExports$1);
  }("undefined" != typeof self ? self : commonjsGlobal, (e2) => (() => {
    var t2 = { 7403: (e3, t3, r3) => {
      r3.d(t3, { default: () => S2 });
      var n3 = r3(4087), o2 = r3.n(n3);
      const a = function(e4) {
        return new RegExp(/<[a-z][\s\S]*>/i).test(e4);
      }, i = function(e4, t4) {
        return Math.floor(Math.random() * (t4 - e4 + 1)) + e4;
      };
      var s = "TYPE_CHARACTER", u2 = "REMOVE_CHARACTER", c2 = "REMOVE_ALL", p2 = "REMOVE_LAST_VISIBLE_NODE", l2 = "PAUSE_FOR", f2 = "CALL_FUNCTION", v2 = "ADD_HTML_TAG_ELEMENT", d2 = "CHANGE_DELETE_SPEED", h2 = "CHANGE_DELAY", y2 = "CHANGE_CURSOR", b2 = "PASTE_STRING", m2 = "HTML_TAG";
      function _2(e4) {
        return _2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
          return typeof e5;
        } : function(e5) {
          return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
        }, _2(e4);
      }
      function g2(e4, t4) {
        var r4 = Object.keys(e4);
        if (Object.getOwnPropertySymbols) {
          var n4 = Object.getOwnPropertySymbols(e4);
          t4 && (n4 = n4.filter(function(t5) {
            return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
          })), r4.push.apply(r4, n4);
        }
        return r4;
      }
      function w2(e4) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var r4 = null != arguments[t4] ? arguments[t4] : {};
          t4 % 2 ? g2(Object(r4), true).forEach(function(t5) {
            O2(e4, t5, r4[t5]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r4)) : g2(Object(r4)).forEach(function(t5) {
            Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(r4, t5));
          });
        }
        return e4;
      }
      function x(e4) {
        return function(e5) {
          if (Array.isArray(e5))
            return j2(e5);
        }(e4) || function(e5) {
          if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"])
            return Array.from(e5);
        }(e4) || function(e5, t4) {
          if (e5) {
            if ("string" == typeof e5)
              return j2(e5, t4);
            var r4 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === r4 && e5.constructor && (r4 = e5.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(e5) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? j2(e5, t4) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function j2(e4, t4) {
        (null == t4 || t4 > e4.length) && (t4 = e4.length);
        for (var r4 = 0, n4 = new Array(t4); r4 < t4; r4++)
          n4[r4] = e4[r4];
        return n4;
      }
      function E2(e4, t4) {
        for (var r4 = 0; r4 < t4.length; r4++) {
          var n4 = t4[r4];
          n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, T2(n4.key), n4);
        }
      }
      function O2(e4, t4, r4) {
        return (t4 = T2(t4)) in e4 ? Object.defineProperty(e4, t4, { value: r4, enumerable: true, configurable: true, writable: true }) : e4[t4] = r4, e4;
      }
      function T2(e4) {
        var t4 = function(e5, t5) {
          if ("object" !== _2(e5) || null === e5)
            return e5;
          var r4 = e5[Symbol.toPrimitive];
          if (void 0 !== r4) {
            var n4 = r4.call(e5, "string");
            if ("object" !== _2(n4))
              return n4;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e5);
        }(e4);
        return "symbol" === _2(t4) ? t4 : String(t4);
      }
      const S2 = function() {
        function e4(t5, r5) {
          var _3 = this;
          if (function(e5, t6) {
            if (!(e5 instanceof t6))
              throw new TypeError("Cannot call a class as a function");
          }(this, e4), O2(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), O2(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), O2(this, "setupWrapperElement", function() {
            _3.state.elements.container && (_3.state.elements.wrapper.className = _3.options.wrapperClassName, _3.state.elements.cursor.className = _3.options.cursorClassName, _3.state.elements.cursor.innerHTML = _3.options.cursor, _3.state.elements.container.innerHTML = "", _3.state.elements.container.appendChild(_3.state.elements.wrapper), _3.state.elements.container.appendChild(_3.state.elements.cursor));
          }), O2(this, "start", function() {
            return _3.state.eventLoopPaused = false, _3.runEventLoop(), _3;
          }), O2(this, "pause", function() {
            return _3.state.eventLoopPaused = true, _3;
          }), O2(this, "stop", function() {
            return _3.state.eventLoop && ((0, n3.cancel)(_3.state.eventLoop), _3.state.eventLoop = null), _3;
          }), O2(this, "pauseFor", function(e5) {
            return _3.addEventToQueue(l2, { ms: e5 }), _3;
          }), O2(this, "typeOutAllStrings", function() {
            return "string" == typeof _3.options.strings ? (_3.typeString(_3.options.strings).pauseFor(_3.options.pauseFor), _3) : (_3.options.strings.forEach(function(e5) {
              _3.typeString(e5).pauseFor(_3.options.pauseFor).deleteAll(_3.options.deleteSpeed);
            }), _3);
          }), O2(this, "typeString", function(e5) {
            var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (a(e5))
              return _3.typeOutHTMLString(e5, t6);
            if (e5) {
              var r6 = (_3.options || {}).stringSplitter, n4 = "function" == typeof r6 ? r6(e5) : e5.split("");
              _3.typeCharacters(n4, t6);
            }
            return _3;
          }), O2(this, "pasteString", function(e5) {
            var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return a(e5) ? _3.typeOutHTMLString(e5, t6, true) : (e5 && _3.addEventToQueue(b2, { character: e5, node: t6 }), _3);
          }), O2(this, "typeOutHTMLString", function(e5) {
            var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r6 = arguments.length > 2 ? arguments[2] : void 0, n4 = function(e6) {
              var t7 = document.createElement("div");
              return t7.innerHTML = e6, t7.childNodes;
            }(e5);
            if (n4.length > 0)
              for (var o3 = 0; o3 < n4.length; o3++) {
                var a2 = n4[o3], i2 = a2.innerHTML;
                a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", _3.addEventToQueue(v2, { node: a2, parentNode: t6 }), r6 ? _3.pasteString(i2, a2) : _3.typeString(i2, a2)) : a2.textContent && (r6 ? _3.pasteString(a2.textContent, t6) : _3.typeString(a2.textContent, t6));
              }
            return _3;
          }), O2(this, "deleteAll", function() {
            var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
            return _3.addEventToQueue(c2, { speed: e5 }), _3;
          }), O2(this, "changeDeleteSpeed", function(e5) {
            if (!e5)
              throw new Error("Must provide new delete speed");
            return _3.addEventToQueue(d2, { speed: e5 }), _3;
          }), O2(this, "changeDelay", function(e5) {
            if (!e5)
              throw new Error("Must provide new delay");
            return _3.addEventToQueue(h2, { delay: e5 }), _3;
          }), O2(this, "changeCursor", function(e5) {
            if (!e5)
              throw new Error("Must provide new cursor");
            return _3.addEventToQueue(y2, { cursor: e5 }), _3;
          }), O2(this, "deleteChars", function(e5) {
            if (!e5)
              throw new Error("Must provide amount of characters to delete");
            for (var t6 = 0; t6 < e5; t6++)
              _3.addEventToQueue(u2);
            return _3;
          }), O2(this, "callFunction", function(e5, t6) {
            if (!e5 || "function" != typeof e5)
              throw new Error("Callbak must be a function");
            return _3.addEventToQueue(f2, { cb: e5, thisArg: t6 }), _3;
          }), O2(this, "typeCharacters", function(e5) {
            var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!e5 || !Array.isArray(e5))
              throw new Error("Characters must be an array");
            return e5.forEach(function(e6) {
              _3.addEventToQueue(s, { character: e6, node: t6 });
            }), _3;
          }), O2(this, "removeCharacters", function(e5) {
            if (!e5 || !Array.isArray(e5))
              throw new Error("Characters must be an array");
            return e5.forEach(function() {
              _3.addEventToQueue(u2);
            }), _3;
          }), O2(this, "addEventToQueue", function(e5, t6) {
            var r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return _3.addEventToStateProperty(e5, t6, r6, "eventQueue");
          }), O2(this, "addReverseCalledEvent", function(e5, t6) {
            var r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return _3.options.loop ? _3.addEventToStateProperty(e5, t6, r6, "reverseCalledEvents") : _3;
          }), O2(this, "addEventToStateProperty", function(e5, t6) {
            var r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n4 = arguments.length > 3 ? arguments[3] : void 0, o3 = { eventName: e5, eventArgs: t6 || {} };
            return _3.state[n4] = r6 ? [o3].concat(x(_3.state[n4])) : [].concat(x(_3.state[n4]), [o3]), _3;
          }), O2(this, "runEventLoop", function() {
            _3.state.lastFrameTime || (_3.state.lastFrameTime = Date.now());
            var e5 = Date.now(), t6 = e5 - _3.state.lastFrameTime;
            if (!_3.state.eventQueue.length) {
              if (!_3.options.loop)
                return;
              _3.state.eventQueue = x(_3.state.calledEvents), _3.state.calledEvents = [], _3.options = w2({}, _3.state.initialOptions);
            }
            if (_3.state.eventLoop = o2()(_3.runEventLoop), !_3.state.eventLoopPaused) {
              if (_3.state.pauseUntil) {
                if (e5 < _3.state.pauseUntil)
                  return;
                _3.state.pauseUntil = null;
              }
              var r6, n4 = x(_3.state.eventQueue), a2 = n4.shift();
              if (!(t6 <= (r6 = a2.eventName === p2 || a2.eventName === u2 ? "natural" === _3.options.deleteSpeed ? i(40, 80) : _3.options.deleteSpeed : "natural" === _3.options.delay ? i(120, 160) : _3.options.delay))) {
                var g4 = a2.eventName, j3 = a2.eventArgs;
                switch (_3.logInDevMode({ currentEvent: a2, state: _3.state, delay: r6 }), g4) {
                  case b2:
                  case s:
                    var E3 = j3.character, O3 = j3.node, T3 = document.createTextNode(E3), S3 = T3;
                    _3.options.onCreateTextNode && "function" == typeof _3.options.onCreateTextNode && (S3 = _3.options.onCreateTextNode(E3, T3)), S3 && (O3 ? O3.appendChild(S3) : _3.state.elements.wrapper.appendChild(S3)), _3.state.visibleNodes = [].concat(x(_3.state.visibleNodes), [{ type: "TEXT_NODE", character: E3, node: S3 }]);
                    break;
                  case u2:
                    n4.unshift({ eventName: p2, eventArgs: { removingCharacterNode: true } });
                    break;
                  case l2:
                    var A2 = a2.eventArgs.ms;
                    _3.state.pauseUntil = Date.now() + parseInt(A2);
                    break;
                  case f2:
                    var P2 = a2.eventArgs, N2 = P2.cb, C2 = P2.thisArg;
                    N2.call(C2, { elements: _3.state.elements });
                    break;
                  case v2:
                    var L2 = a2.eventArgs, k2 = L2.node, D2 = L2.parentNode;
                    D2 ? D2.appendChild(k2) : _3.state.elements.wrapper.appendChild(k2), _3.state.visibleNodes = [].concat(x(_3.state.visibleNodes), [{ type: m2, node: k2, parentNode: D2 || _3.state.elements.wrapper }]);
                    break;
                  case c2:
                    var M2 = _3.state.visibleNodes, R2 = j3.speed, F2 = [];
                    R2 && F2.push({ eventName: d2, eventArgs: { speed: R2, temp: true } });
                    for (var z2 = 0, Q2 = M2.length; z2 < Q2; z2++)
                      F2.push({ eventName: p2, eventArgs: { removingCharacterNode: false } });
                    R2 && F2.push({ eventName: d2, eventArgs: { speed: _3.options.deleteSpeed, temp: true } }), n4.unshift.apply(n4, F2);
                    break;
                  case p2:
                    var I2 = a2.eventArgs.removingCharacterNode;
                    if (_3.state.visibleNodes.length) {
                      var U2 = _3.state.visibleNodes.pop(), H2 = U2.type, q2 = U2.node, B2 = U2.character;
                      _3.options.onRemoveNode && "function" == typeof _3.options.onRemoveNode && _3.options.onRemoveNode({ node: q2, character: B2 }), q2 && q2.parentNode.removeChild(q2), H2 === m2 && I2 && n4.unshift({ eventName: p2, eventArgs: {} });
                    }
                    break;
                  case d2:
                    _3.options.deleteSpeed = a2.eventArgs.speed;
                    break;
                  case h2:
                    _3.options.delay = a2.eventArgs.delay;
                    break;
                  case y2:
                    _3.options.cursor = a2.eventArgs.cursor, _3.state.elements.cursor.innerHTML = a2.eventArgs.cursor;
                }
                _3.options.loop && (a2.eventName === p2 || a2.eventArgs && a2.eventArgs.temp || (_3.state.calledEvents = [].concat(x(_3.state.calledEvents), [a2]))), _3.state.eventQueue = n4, _3.state.lastFrameTime = e5;
              }
            }
          }), t5)
            if ("string" == typeof t5) {
              var g3 = document.querySelector(t5);
              if (!g3)
                throw new Error("Could not find container element");
              this.state.elements.container = g3;
            } else
              this.state.elements.container = t5;
          r5 && (this.options = w2(w2({}, this.options), r5)), this.state.initialOptions = w2({}, this.options), this.init();
        }
        var t4, r4;
        return t4 = e4, (r4 = [{ key: "init", value: function() {
          var e5, t5;
          this.setupWrapperElement(), this.addEventToQueue(y2, { cursor: this.options.cursor }, true), this.addEventToQueue(c2, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e5 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t5 = document.createElement("style")).appendChild(document.createTextNode(e5)), document.head.appendChild(t5), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
        } }, { key: "logInDevMode", value: function(e5) {
          this.options.devMode && console.log(e5);
        } }]) && E2(t4.prototype, r4), Object.defineProperty(t4, "prototype", { writable: false }), e4;
      }();
    }, 8552: (e3, t3, r3) => {
      var n3 = r3(852)(r3(5639), "DataView");
      e3.exports = n3;
    }, 1989: (e3, t3, r3) => {
      var n3 = r3(1789), o2 = r3(401), a = r3(7667), i = r3(1327), s = r3(1866);
      function u2(e4) {
        var t4 = -1, r4 = null == e4 ? 0 : e4.length;
        for (this.clear(); ++t4 < r4; ) {
          var n4 = e4[t4];
          this.set(n4[0], n4[1]);
        }
      }
      u2.prototype.clear = n3, u2.prototype.delete = o2, u2.prototype.get = a, u2.prototype.has = i, u2.prototype.set = s, e3.exports = u2;
    }, 8407: (e3, t3, r3) => {
      var n3 = r3(7040), o2 = r3(4125), a = r3(2117), i = r3(7518), s = r3(4705);
      function u2(e4) {
        var t4 = -1, r4 = null == e4 ? 0 : e4.length;
        for (this.clear(); ++t4 < r4; ) {
          var n4 = e4[t4];
          this.set(n4[0], n4[1]);
        }
      }
      u2.prototype.clear = n3, u2.prototype.delete = o2, u2.prototype.get = a, u2.prototype.has = i, u2.prototype.set = s, e3.exports = u2;
    }, 7071: (e3, t3, r3) => {
      var n3 = r3(852)(r3(5639), "Map");
      e3.exports = n3;
    }, 3369: (e3, t3, r3) => {
      var n3 = r3(4785), o2 = r3(1285), a = r3(6e3), i = r3(9916), s = r3(5265);
      function u2(e4) {
        var t4 = -1, r4 = null == e4 ? 0 : e4.length;
        for (this.clear(); ++t4 < r4; ) {
          var n4 = e4[t4];
          this.set(n4[0], n4[1]);
        }
      }
      u2.prototype.clear = n3, u2.prototype.delete = o2, u2.prototype.get = a, u2.prototype.has = i, u2.prototype.set = s, e3.exports = u2;
    }, 3818: (e3, t3, r3) => {
      var n3 = r3(852)(r3(5639), "Promise");
      e3.exports = n3;
    }, 8525: (e3, t3, r3) => {
      var n3 = r3(852)(r3(5639), "Set");
      e3.exports = n3;
    }, 8668: (e3, t3, r3) => {
      var n3 = r3(3369), o2 = r3(619), a = r3(2385);
      function i(e4) {
        var t4 = -1, r4 = null == e4 ? 0 : e4.length;
        for (this.__data__ = new n3(); ++t4 < r4; )
          this.add(e4[t4]);
      }
      i.prototype.add = i.prototype.push = o2, i.prototype.has = a, e3.exports = i;
    }, 6384: (e3, t3, r3) => {
      var n3 = r3(8407), o2 = r3(7465), a = r3(3779), i = r3(7599), s = r3(4758), u2 = r3(4309);
      function c2(e4) {
        var t4 = this.__data__ = new n3(e4);
        this.size = t4.size;
      }
      c2.prototype.clear = o2, c2.prototype.delete = a, c2.prototype.get = i, c2.prototype.has = s, c2.prototype.set = u2, e3.exports = c2;
    }, 2705: (e3, t3, r3) => {
      var n3 = r3(5639).Symbol;
      e3.exports = n3;
    }, 1149: (e3, t3, r3) => {
      var n3 = r3(5639).Uint8Array;
      e3.exports = n3;
    }, 577: (e3, t3, r3) => {
      var n3 = r3(852)(r3(5639), "WeakMap");
      e3.exports = n3;
    }, 4963: (e3) => {
      e3.exports = function(e4, t3) {
        for (var r3 = -1, n3 = null == e4 ? 0 : e4.length, o2 = 0, a = []; ++r3 < n3; ) {
          var i = e4[r3];
          t3(i, r3, e4) && (a[o2++] = i);
        }
        return a;
      };
    }, 4636: (e3, t3, r3) => {
      var n3 = r3(2545), o2 = r3(5694), a = r3(1469), i = r3(4144), s = r3(5776), u2 = r3(6719), c2 = Object.prototype.hasOwnProperty;
      e3.exports = function(e4, t4) {
        var r4 = a(e4), p2 = !r4 && o2(e4), l2 = !r4 && !p2 && i(e4), f2 = !r4 && !p2 && !l2 && u2(e4), v2 = r4 || p2 || l2 || f2, d2 = v2 ? n3(e4.length, String) : [], h2 = d2.length;
        for (var y2 in e4)
          !t4 && !c2.call(e4, y2) || v2 && ("length" == y2 || l2 && ("offset" == y2 || "parent" == y2) || f2 && ("buffer" == y2 || "byteLength" == y2 || "byteOffset" == y2) || s(y2, h2)) || d2.push(y2);
        return d2;
      };
    }, 2488: (e3) => {
      e3.exports = function(e4, t3) {
        for (var r3 = -1, n3 = t3.length, o2 = e4.length; ++r3 < n3; )
          e4[o2 + r3] = t3[r3];
        return e4;
      };
    }, 2908: (e3) => {
      e3.exports = function(e4, t3) {
        for (var r3 = -1, n3 = null == e4 ? 0 : e4.length; ++r3 < n3; )
          if (t3(e4[r3], r3, e4))
            return true;
        return false;
      };
    }, 8470: (e3, t3, r3) => {
      var n3 = r3(7813);
      e3.exports = function(e4, t4) {
        for (var r4 = e4.length; r4--; )
          if (n3(e4[r4][0], t4))
            return r4;
        return -1;
      };
    }, 8866: (e3, t3, r3) => {
      var n3 = r3(2488), o2 = r3(1469);
      e3.exports = function(e4, t4, r4) {
        var a = t4(e4);
        return o2(e4) ? a : n3(a, r4(e4));
      };
    }, 4239: (e3, t3, r3) => {
      var n3 = r3(2705), o2 = r3(9607), a = r3(2333), i = n3 ? n3.toStringTag : void 0;
      e3.exports = function(e4) {
        return null == e4 ? void 0 === e4 ? "[object Undefined]" : "[object Null]" : i && i in Object(e4) ? o2(e4) : a(e4);
      };
    }, 9454: (e3, t3, r3) => {
      var n3 = r3(4239), o2 = r3(7005);
      e3.exports = function(e4) {
        return o2(e4) && "[object Arguments]" == n3(e4);
      };
    }, 939: (e3, t3, r3) => {
      var n3 = r3(2492), o2 = r3(7005);
      e3.exports = function e4(t4, r4, a, i, s) {
        return t4 === r4 || (null == t4 || null == r4 || !o2(t4) && !o2(r4) ? t4 != t4 && r4 != r4 : n3(t4, r4, a, i, e4, s));
      };
    }, 2492: (e3, t3, r3) => {
      var n3 = r3(6384), o2 = r3(7114), a = r3(8351), i = r3(6096), s = r3(4160), u2 = r3(1469), c2 = r3(4144), p2 = r3(6719), l2 = "[object Arguments]", f2 = "[object Array]", v2 = "[object Object]", d2 = Object.prototype.hasOwnProperty;
      e3.exports = function(e4, t4, r4, h2, y2, b2) {
        var m2 = u2(e4), _2 = u2(t4), g2 = m2 ? f2 : s(e4), w2 = _2 ? f2 : s(t4), x = (g2 = g2 == l2 ? v2 : g2) == v2, j2 = (w2 = w2 == l2 ? v2 : w2) == v2, E2 = g2 == w2;
        if (E2 && c2(e4)) {
          if (!c2(t4))
            return false;
          m2 = true, x = false;
        }
        if (E2 && !x)
          return b2 || (b2 = new n3()), m2 || p2(e4) ? o2(e4, t4, r4, h2, y2, b2) : a(e4, t4, g2, r4, h2, y2, b2);
        if (!(1 & r4)) {
          var O2 = x && d2.call(e4, "__wrapped__"), T2 = j2 && d2.call(t4, "__wrapped__");
          if (O2 || T2) {
            var S2 = O2 ? e4.value() : e4, A2 = T2 ? t4.value() : t4;
            return b2 || (b2 = new n3()), y2(S2, A2, r4, h2, b2);
          }
        }
        return !!E2 && (b2 || (b2 = new n3()), i(e4, t4, r4, h2, y2, b2));
      };
    }, 8458: (e3, t3, r3) => {
      var n3 = r3(3560), o2 = r3(5346), a = r3(3218), i = r3(346), s = /^\[object .+?Constructor\]$/, u2 = Function.prototype, c2 = Object.prototype, p2 = u2.toString, l2 = c2.hasOwnProperty, f2 = RegExp("^" + p2.call(l2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      e3.exports = function(e4) {
        return !(!a(e4) || o2(e4)) && (n3(e4) ? f2 : s).test(i(e4));
      };
    }, 8749: (e3, t3, r3) => {
      var n3 = r3(4239), o2 = r3(1780), a = r3(7005), i = {};
      i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false, e3.exports = function(e4) {
        return a(e4) && o2(e4.length) && !!i[n3(e4)];
      };
    }, 280: (e3, t3, r3) => {
      var n3 = r3(5726), o2 = r3(6916), a = Object.prototype.hasOwnProperty;
      e3.exports = function(e4) {
        if (!n3(e4))
          return o2(e4);
        var t4 = [];
        for (var r4 in Object(e4))
          a.call(e4, r4) && "constructor" != r4 && t4.push(r4);
        return t4;
      };
    }, 2545: (e3) => {
      e3.exports = function(e4, t3) {
        for (var r3 = -1, n3 = Array(e4); ++r3 < e4; )
          n3[r3] = t3(r3);
        return n3;
      };
    }, 1717: (e3) => {
      e3.exports = function(e4) {
        return function(t3) {
          return e4(t3);
        };
      };
    }, 4757: (e3) => {
      e3.exports = function(e4, t3) {
        return e4.has(t3);
      };
    }, 4429: (e3, t3, r3) => {
      var n3 = r3(5639)["__core-js_shared__"];
      e3.exports = n3;
    }, 7114: (e3, t3, r3) => {
      var n3 = r3(8668), o2 = r3(2908), a = r3(4757);
      e3.exports = function(e4, t4, r4, i, s, u2) {
        var c2 = 1 & r4, p2 = e4.length, l2 = t4.length;
        if (p2 != l2 && !(c2 && l2 > p2))
          return false;
        var f2 = u2.get(e4), v2 = u2.get(t4);
        if (f2 && v2)
          return f2 == t4 && v2 == e4;
        var d2 = -1, h2 = true, y2 = 2 & r4 ? new n3() : void 0;
        for (u2.set(e4, t4), u2.set(t4, e4); ++d2 < p2; ) {
          var b2 = e4[d2], m2 = t4[d2];
          if (i)
            var _2 = c2 ? i(m2, b2, d2, t4, e4, u2) : i(b2, m2, d2, e4, t4, u2);
          if (void 0 !== _2) {
            if (_2)
              continue;
            h2 = false;
            break;
          }
          if (y2) {
            if (!o2(t4, function(e5, t5) {
              if (!a(y2, t5) && (b2 === e5 || s(b2, e5, r4, i, u2)))
                return y2.push(t5);
            })) {
              h2 = false;
              break;
            }
          } else if (b2 !== m2 && !s(b2, m2, r4, i, u2)) {
            h2 = false;
            break;
          }
        }
        return u2.delete(e4), u2.delete(t4), h2;
      };
    }, 8351: (e3, t3, r3) => {
      var n3 = r3(2705), o2 = r3(1149), a = r3(7813), i = r3(7114), s = r3(8776), u2 = r3(1814), c2 = n3 ? n3.prototype : void 0, p2 = c2 ? c2.valueOf : void 0;
      e3.exports = function(e4, t4, r4, n4, c3, l2, f2) {
        switch (r4) {
          case "[object DataView]":
            if (e4.byteLength != t4.byteLength || e4.byteOffset != t4.byteOffset)
              return false;
            e4 = e4.buffer, t4 = t4.buffer;
          case "[object ArrayBuffer]":
            return !(e4.byteLength != t4.byteLength || !l2(new o2(e4), new o2(t4)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return a(+e4, +t4);
          case "[object Error]":
            return e4.name == t4.name && e4.message == t4.message;
          case "[object RegExp]":
          case "[object String]":
            return e4 == t4 + "";
          case "[object Map]":
            var v2 = s;
          case "[object Set]":
            var d2 = 1 & n4;
            if (v2 || (v2 = u2), e4.size != t4.size && !d2)
              return false;
            var h2 = f2.get(e4);
            if (h2)
              return h2 == t4;
            n4 |= 2, f2.set(e4, t4);
            var y2 = i(v2(e4), v2(t4), n4, c3, l2, f2);
            return f2.delete(e4), y2;
          case "[object Symbol]":
            if (p2)
              return p2.call(e4) == p2.call(t4);
        }
        return false;
      };
    }, 6096: (e3, t3, r3) => {
      var n3 = r3(8234), o2 = Object.prototype.hasOwnProperty;
      e3.exports = function(e4, t4, r4, a, i, s) {
        var u2 = 1 & r4, c2 = n3(e4), p2 = c2.length;
        if (p2 != n3(t4).length && !u2)
          return false;
        for (var l2 = p2; l2--; ) {
          var f2 = c2[l2];
          if (!(u2 ? f2 in t4 : o2.call(t4, f2)))
            return false;
        }
        var v2 = s.get(e4), d2 = s.get(t4);
        if (v2 && d2)
          return v2 == t4 && d2 == e4;
        var h2 = true;
        s.set(e4, t4), s.set(t4, e4);
        for (var y2 = u2; ++l2 < p2; ) {
          var b2 = e4[f2 = c2[l2]], m2 = t4[f2];
          if (a)
            var _2 = u2 ? a(m2, b2, f2, t4, e4, s) : a(b2, m2, f2, e4, t4, s);
          if (!(void 0 === _2 ? b2 === m2 || i(b2, m2, r4, a, s) : _2)) {
            h2 = false;
            break;
          }
          y2 || (y2 = "constructor" == f2);
        }
        if (h2 && !y2) {
          var g2 = e4.constructor, w2 = t4.constructor;
          g2 == w2 || !("constructor" in e4) || !("constructor" in t4) || "function" == typeof g2 && g2 instanceof g2 && "function" == typeof w2 && w2 instanceof w2 || (h2 = false);
        }
        return s.delete(e4), s.delete(t4), h2;
      };
    }, 1957: (e3, t3, r3) => {
      var n3 = "object" == typeof r3.g && r3.g && r3.g.Object === Object && r3.g;
      e3.exports = n3;
    }, 8234: (e3, t3, r3) => {
      var n3 = r3(8866), o2 = r3(9551), a = r3(3674);
      e3.exports = function(e4) {
        return n3(e4, a, o2);
      };
    }, 5050: (e3, t3, r3) => {
      var n3 = r3(7019);
      e3.exports = function(e4, t4) {
        var r4 = e4.__data__;
        return n3(t4) ? r4["string" == typeof t4 ? "string" : "hash"] : r4.map;
      };
    }, 852: (e3, t3, r3) => {
      var n3 = r3(8458), o2 = r3(7801);
      e3.exports = function(e4, t4) {
        var r4 = o2(e4, t4);
        return n3(r4) ? r4 : void 0;
      };
    }, 9607: (e3, t3, r3) => {
      var n3 = r3(2705), o2 = Object.prototype, a = o2.hasOwnProperty, i = o2.toString, s = n3 ? n3.toStringTag : void 0;
      e3.exports = function(e4) {
        var t4 = a.call(e4, s), r4 = e4[s];
        try {
          e4[s] = void 0;
          var n4 = true;
        } catch (e5) {
        }
        var o3 = i.call(e4);
        return n4 && (t4 ? e4[s] = r4 : delete e4[s]), o3;
      };
    }, 9551: (e3, t3, r3) => {
      var n3 = r3(4963), o2 = r3(479), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e4) {
        return null == e4 ? [] : (e4 = Object(e4), n3(i(e4), function(t4) {
          return a.call(e4, t4);
        }));
      } : o2;
      e3.exports = s;
    }, 4160: (e3, t3, r3) => {
      var n3 = r3(8552), o2 = r3(7071), a = r3(3818), i = r3(8525), s = r3(577), u2 = r3(4239), c2 = r3(346), p2 = "[object Map]", l2 = "[object Promise]", f2 = "[object Set]", v2 = "[object WeakMap]", d2 = "[object DataView]", h2 = c2(n3), y2 = c2(o2), b2 = c2(a), m2 = c2(i), _2 = c2(s), g2 = u2;
      (n3 && g2(new n3(new ArrayBuffer(1))) != d2 || o2 && g2(new o2()) != p2 || a && g2(a.resolve()) != l2 || i && g2(new i()) != f2 || s && g2(new s()) != v2) && (g2 = function(e4) {
        var t4 = u2(e4), r4 = "[object Object]" == t4 ? e4.constructor : void 0, n4 = r4 ? c2(r4) : "";
        if (n4)
          switch (n4) {
            case h2:
              return d2;
            case y2:
              return p2;
            case b2:
              return l2;
            case m2:
              return f2;
            case _2:
              return v2;
          }
        return t4;
      }), e3.exports = g2;
    }, 7801: (e3) => {
      e3.exports = function(e4, t3) {
        return null == e4 ? void 0 : e4[t3];
      };
    }, 1789: (e3, t3, r3) => {
      var n3 = r3(4536);
      e3.exports = function() {
        this.__data__ = n3 ? n3(null) : {}, this.size = 0;
      };
    }, 401: (e3) => {
      e3.exports = function(e4) {
        var t3 = this.has(e4) && delete this.__data__[e4];
        return this.size -= t3 ? 1 : 0, t3;
      };
    }, 7667: (e3, t3, r3) => {
      var n3 = r3(4536), o2 = Object.prototype.hasOwnProperty;
      e3.exports = function(e4) {
        var t4 = this.__data__;
        if (n3) {
          var r4 = t4[e4];
          return "__lodash_hash_undefined__" === r4 ? void 0 : r4;
        }
        return o2.call(t4, e4) ? t4[e4] : void 0;
      };
    }, 1327: (e3, t3, r3) => {
      var n3 = r3(4536), o2 = Object.prototype.hasOwnProperty;
      e3.exports = function(e4) {
        var t4 = this.__data__;
        return n3 ? void 0 !== t4[e4] : o2.call(t4, e4);
      };
    }, 1866: (e3, t3, r3) => {
      var n3 = r3(4536);
      e3.exports = function(e4, t4) {
        var r4 = this.__data__;
        return this.size += this.has(e4) ? 0 : 1, r4[e4] = n3 && void 0 === t4 ? "__lodash_hash_undefined__" : t4, this;
      };
    }, 5776: (e3) => {
      var t3 = /^(?:0|[1-9]\d*)$/;
      e3.exports = function(e4, r3) {
        var n3 = typeof e4;
        return !!(r3 = null == r3 ? 9007199254740991 : r3) && ("number" == n3 || "symbol" != n3 && t3.test(e4)) && e4 > -1 && e4 % 1 == 0 && e4 < r3;
      };
    }, 7019: (e3) => {
      e3.exports = function(e4) {
        var t3 = typeof e4;
        return "string" == t3 || "number" == t3 || "symbol" == t3 || "boolean" == t3 ? "__proto__" !== e4 : null === e4;
      };
    }, 5346: (e3, t3, r3) => {
      var n3, o2 = r3(4429), a = (n3 = /[^.]+$/.exec(o2 && o2.keys && o2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n3 : "";
      e3.exports = function(e4) {
        return !!a && a in e4;
      };
    }, 5726: (e3) => {
      var t3 = Object.prototype;
      e3.exports = function(e4) {
        var r3 = e4 && e4.constructor;
        return e4 === ("function" == typeof r3 && r3.prototype || t3);
      };
    }, 7040: (e3) => {
      e3.exports = function() {
        this.__data__ = [], this.size = 0;
      };
    }, 4125: (e3, t3, r3) => {
      var n3 = r3(8470), o2 = Array.prototype.splice;
      e3.exports = function(e4) {
        var t4 = this.__data__, r4 = n3(t4, e4);
        return !(r4 < 0 || (r4 == t4.length - 1 ? t4.pop() : o2.call(t4, r4, 1), --this.size, 0));
      };
    }, 2117: (e3, t3, r3) => {
      var n3 = r3(8470);
      e3.exports = function(e4) {
        var t4 = this.__data__, r4 = n3(t4, e4);
        return r4 < 0 ? void 0 : t4[r4][1];
      };
    }, 7518: (e3, t3, r3) => {
      var n3 = r3(8470);
      e3.exports = function(e4) {
        return n3(this.__data__, e4) > -1;
      };
    }, 4705: (e3, t3, r3) => {
      var n3 = r3(8470);
      e3.exports = function(e4, t4) {
        var r4 = this.__data__, o2 = n3(r4, e4);
        return o2 < 0 ? (++this.size, r4.push([e4, t4])) : r4[o2][1] = t4, this;
      };
    }, 4785: (e3, t3, r3) => {
      var n3 = r3(1989), o2 = r3(8407), a = r3(7071);
      e3.exports = function() {
        this.size = 0, this.__data__ = { hash: new n3(), map: new (a || o2)(), string: new n3() };
      };
    }, 1285: (e3, t3, r3) => {
      var n3 = r3(5050);
      e3.exports = function(e4) {
        var t4 = n3(this, e4).delete(e4);
        return this.size -= t4 ? 1 : 0, t4;
      };
    }, 6e3: (e3, t3, r3) => {
      var n3 = r3(5050);
      e3.exports = function(e4) {
        return n3(this, e4).get(e4);
      };
    }, 9916: (e3, t3, r3) => {
      var n3 = r3(5050);
      e3.exports = function(e4) {
        return n3(this, e4).has(e4);
      };
    }, 5265: (e3, t3, r3) => {
      var n3 = r3(5050);
      e3.exports = function(e4, t4) {
        var r4 = n3(this, e4), o2 = r4.size;
        return r4.set(e4, t4), this.size += r4.size == o2 ? 0 : 1, this;
      };
    }, 8776: (e3) => {
      e3.exports = function(e4) {
        var t3 = -1, r3 = Array(e4.size);
        return e4.forEach(function(e5, n3) {
          r3[++t3] = [n3, e5];
        }), r3;
      };
    }, 4536: (e3, t3, r3) => {
      var n3 = r3(852)(Object, "create");
      e3.exports = n3;
    }, 6916: (e3, t3, r3) => {
      var n3 = r3(5569)(Object.keys, Object);
      e3.exports = n3;
    }, 1167: (e3, t3, r3) => {
      e3 = r3.nmd(e3);
      var n3 = r3(1957), o2 = t3 && !t3.nodeType && t3, a = o2 && e3 && !e3.nodeType && e3, i = a && a.exports === o2 && n3.process, s = function() {
        try {
          return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
        } catch (e4) {
        }
      }();
      e3.exports = s;
    }, 2333: (e3) => {
      var t3 = Object.prototype.toString;
      e3.exports = function(e4) {
        return t3.call(e4);
      };
    }, 5569: (e3) => {
      e3.exports = function(e4, t3) {
        return function(r3) {
          return e4(t3(r3));
        };
      };
    }, 5639: (e3, t3, r3) => {
      var n3 = r3(1957), o2 = "object" == typeof self && self && self.Object === Object && self, a = n3 || o2 || Function("return this")();
      e3.exports = a;
    }, 619: (e3) => {
      e3.exports = function(e4) {
        return this.__data__.set(e4, "__lodash_hash_undefined__"), this;
      };
    }, 2385: (e3) => {
      e3.exports = function(e4) {
        return this.__data__.has(e4);
      };
    }, 1814: (e3) => {
      e3.exports = function(e4) {
        var t3 = -1, r3 = Array(e4.size);
        return e4.forEach(function(e5) {
          r3[++t3] = e5;
        }), r3;
      };
    }, 7465: (e3, t3, r3) => {
      var n3 = r3(8407);
      e3.exports = function() {
        this.__data__ = new n3(), this.size = 0;
      };
    }, 3779: (e3) => {
      e3.exports = function(e4) {
        var t3 = this.__data__, r3 = t3.delete(e4);
        return this.size = t3.size, r3;
      };
    }, 7599: (e3) => {
      e3.exports = function(e4) {
        return this.__data__.get(e4);
      };
    }, 4758: (e3) => {
      e3.exports = function(e4) {
        return this.__data__.has(e4);
      };
    }, 4309: (e3, t3, r3) => {
      var n3 = r3(8407), o2 = r3(7071), a = r3(3369);
      e3.exports = function(e4, t4) {
        var r4 = this.__data__;
        if (r4 instanceof n3) {
          var i = r4.__data__;
          if (!o2 || i.length < 199)
            return i.push([e4, t4]), this.size = ++r4.size, this;
          r4 = this.__data__ = new a(i);
        }
        return r4.set(e4, t4), this.size = r4.size, this;
      };
    }, 346: (e3) => {
      var t3 = Function.prototype.toString;
      e3.exports = function(e4) {
        if (null != e4) {
          try {
            return t3.call(e4);
          } catch (e5) {
          }
          try {
            return e4 + "";
          } catch (e5) {
          }
        }
        return "";
      };
    }, 7813: (e3) => {
      e3.exports = function(e4, t3) {
        return e4 === t3 || e4 != e4 && t3 != t3;
      };
    }, 5694: (e3, t3, r3) => {
      var n3 = r3(9454), o2 = r3(7005), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u2 = n3(function() {
        return arguments;
      }()) ? n3 : function(e4) {
        return o2(e4) && i.call(e4, "callee") && !s.call(e4, "callee");
      };
      e3.exports = u2;
    }, 1469: (e3) => {
      var t3 = Array.isArray;
      e3.exports = t3;
    }, 8612: (e3, t3, r3) => {
      var n3 = r3(3560), o2 = r3(1780);
      e3.exports = function(e4) {
        return null != e4 && o2(e4.length) && !n3(e4);
      };
    }, 4144: (e3, t3, r3) => {
      e3 = r3.nmd(e3);
      var n3 = r3(5639), o2 = r3(5062), a = t3 && !t3.nodeType && t3, i = a && e3 && !e3.nodeType && e3, s = i && i.exports === a ? n3.Buffer : void 0, u2 = (s ? s.isBuffer : void 0) || o2;
      e3.exports = u2;
    }, 8446: (e3, t3, r3) => {
      var n3 = r3(939);
      e3.exports = function(e4, t4) {
        return n3(e4, t4);
      };
    }, 3560: (e3, t3, r3) => {
      var n3 = r3(4239), o2 = r3(3218);
      e3.exports = function(e4) {
        if (!o2(e4))
          return false;
        var t4 = n3(e4);
        return "[object Function]" == t4 || "[object GeneratorFunction]" == t4 || "[object AsyncFunction]" == t4 || "[object Proxy]" == t4;
      };
    }, 1780: (e3) => {
      e3.exports = function(e4) {
        return "number" == typeof e4 && e4 > -1 && e4 % 1 == 0 && e4 <= 9007199254740991;
      };
    }, 3218: (e3) => {
      e3.exports = function(e4) {
        var t3 = typeof e4;
        return null != e4 && ("object" == t3 || "function" == t3);
      };
    }, 7005: (e3) => {
      e3.exports = function(e4) {
        return null != e4 && "object" == typeof e4;
      };
    }, 6719: (e3, t3, r3) => {
      var n3 = r3(8749), o2 = r3(1717), a = r3(1167), i = a && a.isTypedArray, s = i ? o2(i) : n3;
      e3.exports = s;
    }, 3674: (e3, t3, r3) => {
      var n3 = r3(4636), o2 = r3(280), a = r3(8612);
      e3.exports = function(e4) {
        return a(e4) ? n3(e4) : o2(e4);
      };
    }, 479: (e3) => {
      e3.exports = function() {
        return [];
      };
    }, 5062: (e3) => {
      e3.exports = function() {
        return false;
      };
    }, 75: function(e3) {
      (function() {
        var t3, r3, n3, o2, a, i;
        "undefined" != typeof performance && null !== performance && performance.now ? e3.exports = function() {
          return performance.now();
        } : "undefined" != typeof process && null !== process && process.hrtime ? (e3.exports = function() {
          return (t3() - a) / 1e6;
        }, r3 = process.hrtime, o2 = (t3 = function() {
          var e4;
          return 1e9 * (e4 = r3())[0] + e4[1];
        })(), i = 1e9 * process.uptime(), a = o2 - i) : Date.now ? (e3.exports = function() {
          return Date.now() - n3;
        }, n3 = Date.now()) : (e3.exports = function() {
          return (/* @__PURE__ */ new Date()).getTime() - n3;
        }, n3 = (/* @__PURE__ */ new Date()).getTime());
      }).call(this);
    }, 4087: (e3, t3, r3) => {
      for (var n3 = r3(75), o2 = "undefined" == typeof window ? r3.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o2["request" + i], u2 = o2["cancel" + i] || o2["cancelRequest" + i], c2 = 0; !s && c2 < a.length; c2++)
        s = o2[a[c2] + "Request" + i], u2 = o2[a[c2] + "Cancel" + i] || o2[a[c2] + "CancelRequest" + i];
      if (!s || !u2) {
        var p2 = 0, l2 = 0, f2 = [];
        s = function(e4) {
          if (0 === f2.length) {
            var t4 = n3(), r4 = Math.max(0, 16.666666666666668 - (t4 - p2));
            p2 = r4 + t4, setTimeout(function() {
              var e5 = f2.slice(0);
              f2.length = 0;
              for (var t5 = 0; t5 < e5.length; t5++)
                if (!e5[t5].cancelled)
                  try {
                    e5[t5].callback(p2);
                  } catch (e6) {
                    setTimeout(function() {
                      throw e6;
                    }, 0);
                  }
            }, Math.round(r4));
          }
          return f2.push({ handle: ++l2, callback: e4, cancelled: false }), l2;
        }, u2 = function(e4) {
          for (var t4 = 0; t4 < f2.length; t4++)
            f2[t4].handle === e4 && (f2[t4].cancelled = true);
        };
      }
      e3.exports = function(e4) {
        return s.call(o2, e4);
      }, e3.exports.cancel = function() {
        u2.apply(o2, arguments);
      }, e3.exports.polyfill = function(e4) {
        e4 || (e4 = o2), e4.requestAnimationFrame = s, e4.cancelAnimationFrame = u2;
      };
    }, 8156: (t3) => {
      t3.exports = e2;
    } }, r2 = {};
    function n2(e3) {
      var o2 = r2[e3];
      if (void 0 !== o2)
        return o2.exports;
      var a = r2[e3] = { id: e3, loaded: false, exports: {} };
      return t2[e3].call(a.exports, a, a.exports, n2), a.loaded = true, a.exports;
    }
    n2.n = (e3) => {
      var t3 = e3 && e3.__esModule ? () => e3.default : () => e3;
      return n2.d(t3, { a: t3 }), t3;
    }, n2.d = (e3, t3) => {
      for (var r3 in t3)
        n2.o(t3, r3) && !n2.o(e3, r3) && Object.defineProperty(e3, r3, { enumerable: true, get: t3[r3] });
    }, n2.g = function() {
      if ("object" == typeof globalThis)
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e3) {
        if ("object" == typeof window)
          return window;
      }
    }(), n2.o = (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3), n2.nmd = (e3) => (e3.paths = [], e3.children || (e3.children = []), e3);
    var o = {};
    return (() => {
      n2.d(o, { default: () => d2 });
      var e3 = n2(8156), t3 = n2.n(e3), r3 = n2(7403), a = n2(8446), i = n2.n(a);
      function s(e4) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
          return typeof e5;
        } : function(e5) {
          return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
        }, s(e4);
      }
      function u2(e4, t4) {
        for (var r4 = 0; r4 < t4.length; r4++) {
          var n3 = t4[r4];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e4, f2(n3.key), n3);
        }
      }
      function c2(e4, t4) {
        return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
          return e5.__proto__ = t5, e5;
        }, c2(e4, t4);
      }
      function p2(e4) {
        if (void 0 === e4)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }
      function l2(e4) {
        return l2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
          return e5.__proto__ || Object.getPrototypeOf(e5);
        }, l2(e4);
      }
      function f2(e4) {
        var t4 = function(e5, t5) {
          if ("object" !== s(e5) || null === e5)
            return e5;
          var r4 = e5[Symbol.toPrimitive];
          if (void 0 !== r4) {
            var n3 = r4.call(e5, "string");
            if ("object" !== s(n3))
              return n3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e5);
        }(e4);
        return "symbol" === s(t4) ? t4 : String(t4);
      }
      var v2 = function(e4) {
        !function(e5, t4) {
          if ("function" != typeof t4 && null !== t4)
            throw new TypeError("Super expression must either be null or a function");
          e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && c2(e5, t4);
        }(h2, e4);
        var n3, o2, a2, v3, d3 = (a2 = h2, v3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e5) {
            return false;
          }
        }(), function() {
          var e5, t4 = l2(a2);
          if (v3) {
            var r4 = l2(this).constructor;
            e5 = Reflect.construct(t4, arguments, r4);
          } else
            e5 = t4.apply(this, arguments);
          return function(e6, t5) {
            if (t5 && ("object" === s(t5) || "function" == typeof t5))
              return t5;
            if (void 0 !== t5)
              throw new TypeError("Derived constructors may only return object or undefined");
            return p2(e6);
          }(this, e5);
        });
        function h2() {
          var e5, t4, r4, n4;
          !function(e6, t5) {
            if (!(e6 instanceof t5))
              throw new TypeError("Cannot call a class as a function");
          }(this, h2);
          for (var o3 = arguments.length, a3 = new Array(o3), i2 = 0; i2 < o3; i2++)
            a3[i2] = arguments[i2];
          return t4 = p2(e5 = d3.call.apply(d3, [this].concat(a3))), n4 = { instance: null }, (r4 = f2(r4 = "state")) in t4 ? Object.defineProperty(t4, r4, { value: n4, enumerable: true, configurable: true, writable: true }) : t4[r4] = n4, e5;
        }
        return n3 = h2, (o2 = [{ key: "componentDidMount", value: function() {
          var e5 = this, t4 = new r3.default(this.typewriter, this.props.options);
          this.setState({ instance: t4 }, function() {
            var r4 = e5.props.onInit;
            r4 && r4(t4);
          });
        } }, { key: "componentDidUpdate", value: function(e5) {
          i()(this.props.options, e5.options) || this.setState({ instance: new r3.default(this.typewriter, this.props.options) });
        } }, { key: "componentWillUnmount", value: function() {
          this.state.instance && this.state.instance.stop();
        } }, { key: "render", value: function() {
          var e5 = this, r4 = this.props.component;
          return t3().createElement(r4, { ref: function(t4) {
            return e5.typewriter = t4;
          }, className: "Typewriter", "data-testid": "typewriter-wrapper" });
        } }]) && u2(n3.prototype, o2), Object.defineProperty(n3, "prototype", { writable: false }), h2;
      }(e3.Component);
      v2.defaultProps = { component: "div" };
      const d2 = v2;
    })(), o.default;
  })());
})(react);
var reactExports = react.exports;
const Typewriter = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const intro = [
  {
    EN: "Hey there, super awesome friends!",
    SK: "Ahojte,  super skvelí priatelia!"
  },
  {
    EN: "I'm Blo, and I have a story to share with you.",
    SK: "Volám sa Blo a chcem  vám povedať svoj príbeh."
  },
  {
    EN: "My little brother got diagnosed with diabetes.",
    SK: "Môjmu malému bratovi diagnostikovali cukrovku."
  },
  {
    EN: "It's like a mischievous gremlin in his body!",
    SK: "Je to ako taký protivný škriatok v jeho tele!"
  },
  {
    EN: "But we can outsmart it together.",
    SK: "Avšak spoločne ho môžeme premôcť."
  },
  {
    EN: "That's why I became a diabetes champion to teach you all about it.",
    SK: "Keďže som najchytrejší doktor o cukrovke, všetko vás môžem naučiť."
  },
  {
    EN: "We will learn how food affects us, keep our energy up, and have fun being active.",
    SK: "Naučíme sa, ako nás ovplyvňuje jedlo, vytvára nám energiu a aké benefity má pohyb."
  },
  {
    EN: "No worries, you can still eat chocolate even with diabetes!",
    SK: "Bez obáv, aj s cukrovkou môžte jesť čokoládu!"
  },
  {
    EN: "Learning is an exciting adventure!",
    SK: "Učenie sa je skvelé dobrodružstvo!"
  },
  {
    EN: "So let's dive in! Ready? Let's go!!",
    SK: "Tak poďme do toho! Ste pripravení?"
  }
];
const opening = [
  {
    EN: "Whaaat? Wait, stop!",
    SK: "Čože? Počkaj, zastav!"
  },
  {
    EN: "You probably don't even know what insulin is. I'll explain.",
    SK: "Asi pravdepodobne netušíš, čo je inzulín. Vysvetlím ti to."
  },
  {
    EN: "When we eat or drink, our body breaks down the sugar molecules.",
    SK: "Keď jeme alebo pijeme, naše telo rozkladá molekuly cukru."
  },
  {
    EN: "Parts of it called glucose are released into our blood.",
    SK: "Časti, ktoré nazývame glukóza, sa uvoľnia do našej krvi."
  },
  {
    EN: "That's great, because we all need some glucose. It is what gives us our energy.",
    SK: "To je fajn, pretože všetci potrebujeme trochu glukózy. Tá nám dodáva energiu."
  },
  {
    EN: "But it can only give us energy if it gets inside the cells.",
    SK: "Ale energiu nám dá iba v prípade, že sa vie dostať do buniek."
  },
  {
    EN: "And it cannot just do so by itself.",
    SK: "Ale nedokáže to len tak sama o sebe."
  },
  {
    EN: "This is where the insulin comes into play!",
    SK: "Preto v tomto bode prichádza do hry inzulín!"
  },
  {
    EN: "Insulin allows glucose to get into our cells where it can be used.",
    SK: "Vďaka inzulínu sa glukóza dostane do vnútra bunky, kde sa využije."
  },
  {
    EN: "If that didn't happen, many unpleasant symptoms would start to show.",
    SK: "Keby sa tak nedialo,  začali by sa prejavovať rôzne symptómy cukrovky."
  },
  {
    EN: "But we will discuss those in later chapters.",
    SK: "Ale o tom si povieme v neskorších kapitolách."
  },
  {
    EN: "All you need to understand for now is what glucose, insulin and diabetes is.",
    SK: "Zatiaľ potrebuješ rozumieť len tomu,  čo je to glukóza, inzulín a cukrovka."
  },
  {
    EN: "Let's see if you remembered something!  ",
    SK: "Poďme teraz spolu zistiť, čo si pamätáš!"
  }
];
const symptoms = [
  {
    EN: "In this chapter, we will take a closer look at the symptoms of diabetes.",
    SK: "V tejto kapitole sa pozrieme bližšie na príznaky cukrovky."
  },
  {
    EN: "It is important to be familiar with these symptoms so that we can notice them in ourselves or in someone close to us.",
    SK: "Je dôležité poznať tieto symptómy, aby sme si ich na sebe alebo na niekom blízkom všimli."
  },
  {
    EN: "We can then inform our doctor, who will provide treatment.",
    SK: "Môžeme o nich potom povedať svojmu doktorovi, ktorý nás ošetrí."
  },
  {
    EN: "Symptoms of diabetes include increased thirst,",
    SK: "Medzi príznaky cukrovky patrí zvýšený pocit smädu,"
  },
  {
    EN: "hunger,",
    SK: "hladu,"
  },
  {
    EN: "intense and frequent fatigue or drowsiness,",
    SK: "silná a častá únava alebo ospanlivosť,"
  },
  {
    EN: "reduced ability to focus on objects around us,",
    SK: "slabšia schopnosť zaostrovať na predmety okolo nás,"
  },
  {
    EN: "numb limbs,",
    SK: "znecitlivené končatiny,"
  },
  {
    EN: "slower wound healing,",
    SK: "pomalšie hojenie rán,"
  },
  {
    EN: "rapid weight changes,",
    SK: "prudšie zmeny váhy,"
  },
  {
    EN: "or frequent urination.",
    SK: "alebo častá potreba ísť na toaletu."
  },
  {
    EN: "Try to click on these cards and learn more about the diabetes symptoms!",
    SK: "Vyskúšaj kliknúť na tieto kartičky a oboznám sa s príznakmi cukrovky!"
  }
];
const treatment = [
  {
    EN: "Let's look at the options we have when it comes to diabetes treatment.",
    SK: "Pozrime sa na možnosti liečby cukrovky."
  },
  {
    EN: "Based on the type of diabetes, a person may need to make adjustments to their sugar intake and exercise regimen, or they may require more advanced medical treatment.",
    SK: "Na základe typu cukrovky môžeme potrebovať upraviť príjem cukru a cvičebný plán, alebo môžme potrebovať pokročilejšiu lekársku liečbu."
  },
  {
    EN: "For example use glucose meter or insulin pump, or take medication to feel better.",
    SK: "Napríklad môžme používať glukózový senzor alebo inzulínovú pumpu, alebo užívať lieky na zlepšenie nášho zdravotného stavu."
  },
  {
    EN: "In either case, it is never a bad idea to exercise regularly and be mindful of what we eat.",
    SK: "V oboch prípadoch nie je nikdy zlý nápad pravidelne cvičiť a starať sa o to, čo jeme."
  },
  {
    EN: "Check out these images and find out more about what we should be aware of when treating diabetes!",
    SK: "Prezri si tieto obrázky a zisti viac o tom, na čo by sme mali dbať pri liečbe cukrovky!"
  }
];
const treatmentOptions = [
  {
    id: "water",
    title: {
      EN: "Diabetes and Thirst",
      SK: "Cukrovka a smäd"
    },
    text: {
      EN: "Diabetes and staying hydrated are linked in a special way. When you have diabetes, it can sometimes make you feel very thirsty. But why does this happen?\n\nWhen your body has trouble using insulin properly, it can cause your blood sugar to go up. When your blood sugar stays high, your kidneys have to work extra hard to get rid of the extra sugar. They do this by making you pee more.\n\nTo stay healthy, it's important to keep drinking water. You are like a flower that needs to drink a lot of water to grow. It helps your body stay in balance and keeps you from getting dehydrated. So, remember to drink water to help your body stay in good shape!",
      SK: "Diabetes a dehydratácia súvisia špeciálnym spôsobom. Keď máme cukrovku, niekedy môžme cítiť častý smäd. Ale prečo sa to deje?\n\nKeď má naše telo problémy s používaním inzulínu, môže to spôsobiť zvýšenie hladiny cukru v krvi. Keď hladina cukru v krvi zostane vysoká, obličky musia pracovať navyše, aby sa zbavili nadbytočného cukru. Robia to tak, že nás nechávajú viac močiť.\n\nPre udržanie zdravia je dôležité piť dosť vody. Sme ako kvietky, ktorá potrebujú veľa vody na rast. Pomáha to udržiavať naše telo v rovnováhe a chráni pred dehydratáciou. Preto nezabudnime piť vodu, aby naše telá zostali v dobrej kondícii!"
    }
  },
  {
    id: "diet",
    title: {
      EN: "Diabetes Diet",
      SK: "Cukrovka a diéta"
    },
    text: {
      EN: "Having diabetes doesn't mean you can't enjoy tasty food. A diabetes diet simply means eating the healthiest foods in the right amounts and sticking to regular mealtimes.\n\nIt's a healthy-eating plan loaded with good stuff and low in fat and calories. Fruits, veggies, and whole grains are the stars, and it's not just for folks with diabetes – it's great for everyone!\n\nIf you have diabetes, your healthcare provider may suggest seeing a dietitian. This professional plan helps you control blood sugar, manage weight, and reduce heart disease risks. When you eat too much, your blood sugar goes up, which can lead to problems. Stay strong and happy with this healthy plan!",
      SK: "Mať cukrovku neznamená, že nemôžeme mať radi chutné jedlo. Diabetická strava jednoducho znamená konzumovať najzdravšie potraviny v správnych množstvách a dodržiavať pravidelné stravovanie.\n\nSlúži na to zdravý stravovací plán plný dobrých vecí a s nízkym obsahom tuku a kalórií. Ovocie, zelenina a celozrnné produkty sú hviezdy, a nie sú iba pre ľudí s cukrovkou - sú skvelé pre každého!\n\nAk máme cukrovku, náš doktor vám môže odporučiť návštevu dietológa. Tento profesionálny plán nám pomôže kontrolovať hladinu cukru v krvi, kontrolovať hmotnosť a znižovať riziká srdcových ochorení. Keď jeme príliš veľa, hladina cukru v krvi stúpa, čo môže viesť k problémom. Zostaňme silní a šťastní so zdravým jedálničkom!"
    }
  },
  {
    id: "insulin",
    title: {
      EN: "Insulin",
      SK: "Inzulín"
    },
    text: {
      EN: "Insulin is a special hormone made by your pancreas. It's like the key that unlocks the door for sugar to enter your cells and become energy. When your pancreas doesn't make enough insulin, you might end up with diabetes.\n\nTaking insulin can be as easy as a shot with an insulin pen or a vial and syringe. Or, you can use an insulin pump that delivers insulin through a tiny catheter under your skin. Your healthcare team will help you choose what works best for you. ",
      SK: "Inzulín je špeciálny hormón vyrobený našim pankreasom. Je ako kľúč, ktorý odomkne dvere pre cukor, aby mohol vstúpiť do našich buniek a nabiť nás energiou. Užívanie inzulínu môže byť jednoduché - ako injekcia s inzulínom v injekčnom pere alebo fľaštičke a striekačke. Alebo môžme použiť inzulínovú pumpu, ktorá dodáva inzulín cez malý katéter pod našu kožu. Doktor nám pomôže vybrať si to, čo pre nás funguje najlepšie."
    }
  },
  {
    id: "pills",
    title: {
      EN: "Tablets and medication",
      SK: "Tabletky a lieky"
    },
    text: {
      EN: "Diabetics may need medication to help manage their blood sugar levels. The most common tablet is metformin, but there are lots of different types. It makes the insulin you produce work better, and you usually take it as a tablet. This medicine is usually recommended for people with type 2 diabetes, and it can also help those with gestational diabetes.\n\nTaking tablets might seem like a big change, but it won't take over your life. Plus, it gives you the best chance to avoid problems related to type 2 diabetes. In time, you might even be able to stop taking it if your type 2 diabetes goes into remission.\n\nDon't stop taking metformin unless your doctor says so. Starting a long-term prescription can be tough, but you are never alone. Talk to someone close to you for support.",
      SK: "Diabetici môžu potrebovať lieky aby regulovali hladinu cukru v krvi. Najčastejším liekom je metformín, ale existuje veľa rôznych typov liekov. Metmorfín zlepšuje účinnosť inzulínu, ktorý produkuje naše telo, a zvyčajne sa užíva vo forme tabletky. Tento liek sa obvykle odporúča pre ľudí s cukrovkou typu 2.\n\nUžívanie tabliet sa môže zdať veľkou zmenou, ale neovládne nám život. Navyše nám dáva najlepšiu šancu vyhnúť sa problémom spojeným s cukrovkou typu 2. S časom sa môže stať, že dokonca prestaneme potrebovať liek, ak cukrovka typu 2 ustúpi.\n\nNeprestávame ale užívať metformín, pokiaľ to náš lekár nepovie. Začať dlhodobú liečbu môže byť náročné, ale nikdy na ňu nie ste sami. Porozprávajte sa s niekým blízkym, ak sa cítite zle a potrebujete podporu."
    }
  },
  {
    id: "glucometer",
    title: {
      EN: "Glucose Meter",
      SK: "Glukometer"
    },
    text: {
      EN: `A glucose meter, sometimes called a "glucometer," is a special device used by healthcare professionals and people with diabetes or hypoglycemia to check how much sugar (glucose) is in their blood. It works like a detective, giving you important information about your blood sugar levels.

To use it, you place a small drop of blood on a disposable test strip. Don't worry, you get this drop of blood by gently poking your fingertip with a tiny, painless device called a lancet. The meter then reads the test strip and calculates your blood glucose level, displaying it in units of mg/dL or mmol/L. It's like a mini laboratory right at your fingertips!

For folks managing type 1 or type 2 diabetes, getting your blood sugar as close to normal levels as possible is a big deal. You do this by checking your blood sugar levels several times a day with your glucose meter. This helps you avoid long-term problems caused by high blood sugar and prevents short-term, potentially serious issues from low blood sugar.

In a world where a small device can make a big difference, the glucose meter is your trusty sidekick in your diabetes management journey.`,
      SK: "Glukózový senzor, niekedy nazývaný aj „glukometer“, je špeciálne zariadenie, ktoré používajú zdravotníci a ľudia s cukrovkou alebo hypoglykémiou na kontrolu množstva cukru (glukózy) v krvi. Funguje ako taký detektív, poskytujúci dôležité informácie o našich hodnotách krvného cukru.\n\nNa použitie stačí aplikovať malú kvapku krvi na jednorazový testovací pás. Nebojte sa, túto kvapku krvi získate jemným štipnutím prsta špeciálnym bezbolestným zariadením nazývaným lanceta. Senzor potom prečíta testovací pás a vypočíta našu hladinu krvného cukru, ktorú zobrazí v jednotkách mg/dL alebo mmol/L. Je to ako malé laboratórium priamo pod našimi rukami!\n\nPre ľudí s cukrovkou typu 1 alebo typu 2 je dosiahnutie čo najbližších normálnych hladín krvného cukru veľká vec. Tým sa vyhnú dlhodobým problémom spôsobeným vysokým hladinám cukru v krvi a predídu krátkodobým, potenciálne vážnym problémom s nízkymi hladinami cukru v krvi.\n\nV svete, kde malé zariadenie môže urobiť veľký rozdiel, je glukózový senzor naším spoľahlivým parťákom na každodennej ceste s cukrovkou."
    }
  },
  {
    id: "insulinPump",
    title: {
      EN: "Insulin Pump",
      SK: "Inzulínová pumpa"
    },
    text: {
      EN: "An insulin pump is a handy electronic device that delivers your insulin throughout the day and night, replacing the need for injections. It's a game-changer for maintaining stable blood sugar levels, but it requires having the pump attached to your body most of the time for it to work its magic.\n\nEven with an insulin pump, it's a good idea to keep a backup diabetes kit for insulin injections just in case. If you're curious about using a pump, talk to your doctor for advice on different types.\n\nWith an insulin pump, you only use fast-acting insulin, which is released in small, continuous doses throughout the day. Regardless of the type, you'll need to change the cannula or patch pump every two or three days. It's vital to move it to different spots each time to prevent issues like lipohypertrophy (hard lumps that affect insulin absorption) and to avoid itching and rashes from sticking to the same site for too long.",
      SK: "Inzulínová pumpa je praktické elektronické zariadenie, ktoré nám dodáva inzulín počas celého dňa a noci, nahradzujúc potrebu injekcií. Je to revolučná zmena pre udržiavanie stabilných hladín krvného cukru, ale vyžaduje, aby pumpa bola väčšinu času pripojená k nášmu telu, aby mohla vykonať svoju mágiu.\n\nAj keď používame inzulínovú pumpu, je dobré mať záložný diabetický set na injekcie inzulínu pre prípad, ak ho by bolo treba. Ak máte záujem o používanie pumpy, poraďte sa so svojím lekárom ohľadom rôznych typov.\n\nS inzulínovou pumpou používame iba rýchlo pôsobiaci inzulín, ktorý je uvoľňovaný malými, stálymi dávkami počas celého dňa.Bez ohľadu na typ pumpy je nutné meniť kanylu každé dva alebo tri dni. Je dôležité meniť ju na rôzne miesta pri každej výmene, aby sa predišlo problémom ako lipohypertrofia (tvrdé hrče, ktoré ovplyvňujú absorpciu inzulínu) a aby sa predišlo svrbeniu a vyrážkam z pravidelného lepenia na rovnakom mieste príliš dlho."
    }
  },
  {
    id: "sport",
    title: {
      EN: "Exercising",
      SK: "Cvičenie"
    },
    text: {
      EN: "Staying active is a key in diabetes management. No matter if it's a jog, a swim, or quick stretches while waiting for your tea, it all counts.\n\nExercise helps control weight, lowers blood pressure, reduces harmful cholesterol, strengthens muscles and bones, and boosts your overall well-being. For those with diabetes, it's even more remarkable. Exercise not only lowers blood sugar but also increases your body's sensitivity to insulin, fighting insulin resistance.\n\nThe best time to exercise is usually one to three hours after a meal when your blood sugar is higher. If you use insulin, check your blood sugar before starting. If it's below 100 mg/dL, have a small snack or fruit to prevent low blood sugar (hypoglycemia).Be extra cautious about your blood sugar if you've had an intense workout. If you take insulin, the risk of low blood sugar can be highest six to 12 hours after exercise.",
      SK: "Aktívny život je kľúčovým prvkom pri živote s cukrovkou. Nezáleží na tom, či ide o beh, plávanie, alebo rýchle strečingy počas čakania na čaj, všetko sa počíta.\n\nCvičenie pomáha kontrolovať hmotnosť, znižuje krvný tlak, znižuje škodlivý cholesterol, posilňuje svaly a kosti a zlepšuje celkový pocit pohody. Pre ľudí s diabetom je to ešte dôležitejšie. Cvičenie nielenže znižuje hladinu krvného cukru, ale zvyšuje aj citlivosť nášho tela na inzulín, čím bojuje proti inzulínovej rezistencii.\n\nNajlepší čas na cvičenie je obvykle jedna až tri hodiny po jedle, keď je naša hladina krvného cukru vyššia. Ak užívame inzulín, je dobré si skontrolovať hladinu krvného cukru pred začatím cvičenia. Ak je pod 100 mg/dL, treba si dať malú sladkosť alebo ovocie, aby sme predišli nízkemu cukru v krvi (hypoglykémii).Musíme byť mimoriadne opatrní ohľadom hladiny krvného cukru, ak sme mali intenzívny tréning. Ak užívame inzulín, riziko nízkeho cukru v krvi môže byť najväčšie šesť až dvanásť hodín po cvičení."
    }
  }
];
const startButton = {
  EN: "Start",
  SK: "Začať"
};
const nextButton = {
  EN: "Next",
  SK: "Ďalej"
};
const toChapter = {
  EN: "To Chapter ",
  SK: "Na kapitolu "
};
const toTest = {
  EN: "Let's test",
  SK: "K testu"
};
const skipToChapter = {
  EN: "Skip to Chapter ",
  SK: "Preskoč na kapitolu "
};
const skipToTest = {
  EN: "Skip to Test",
  SK: "Preskoč na test"
};
const correct = {
  EN: "Correct!",
  SK: "Správne!"
};
const yourScore = {
  EN: "Your score: ",
  SK: "Tvoje skóre: "
};
const helpfulTools = {
  EN: "Helpful Tools",
  SK: "Nápomocné aktivity"
};
const unhelpfulTools = {
  EN: "Unhelpful tools",
  SK: "Nenápomocné aktivity"
};
const symptomsCardTitle = {
  EN: "Select 8 correct symptoms of diabetes:",
  SK: "Vyber 8 správnych príznakov cukrovky: "
};
const correctSelection = {
  EN: "You selected the correct symptoms!",
  SK: "Vybral si správne symptómy!"
};
const incorrectSelection = {
  EN: "Incorrect selection. Try again.",
  SK: "Zlý výber. Ešte skúšaj."
};
const treatmentText = {
  EN: "Treatment",
  SK: "Liečba"
};
const symptomsText = {
  EN: "Symptoms",
  SK: "Symptómy"
};
const glucoseTimelineText = {
  EN: "Glucose Timeline",
  SK: "Spracovanie cukru"
};
const insulinExplanation = {
  EN: "Insulin is a hormone produced by the pancreas, an organ located near the stomach. It plays a crucial role in regulating the levels of glucose (sugar) in our blood and helps our body use glucose for energy.",
  SK: "Inzulín je hormón produkovaný pankreasom, orgánom nachádzajúcim sa v blízkosti žalúdka. Hrá kľúčovú úlohu pri regulácii hladín glukózy (cukru) v našej krvi a pomáha nášmu telu využívať glukózu na energiu."
};
const glucoseExplanation = {
  EN: "This picture represents our body's bloodstream, and the red things are like tiny energy candies called glucose. Glucose gives our bodies the power to do things like run and play. We get glucose from the food we eat, and it travels in our blood to help our bodies work. It's important to have just the right amount of glucose to stay healthy!",
  SK: "Tento obrázok reprezentuje náš krvný obeh, a tie väčšie červené krúkžy sú ako malé energetické cukríky nazývané glukóza. Glukóza dáva našim telám energiu na to, aby sme mohli robiť veci ako behať a hrať sa. Glukózu získavame z jedla, a cestuje v našej krvi až do bunky, aby pomohla našim telám pracovať. Je dôležité mať práve také množstvo glukózy, aby sme boli zdraví!"
};
const stepperLabelsInsulin = [
  {
    EN: "Insulin",
    SK: "Inzulín"
  },
  {
    EN: "Glucose",
    SK: "Glukóza"
  },
  {
    EN: "Complications",
    SK: "Komplikácie"
  },
  {
    EN: "Purpose",
    SK: "Význam"
  },
  {
    EN: "Your score",
    SK: "Tvoje skóre"
  }
];
const stepperLabelsSymptoms = [
  {
    EN: "Insulin Pump",
    SK: "Inzulínová pumpa"
  },
  {
    EN: "Exercise",
    SK: "Cvičenie"
  },
  {
    EN: "Insulin usage",
    SK: "Využitie inzulínu"
  },
  {
    EN: "Backup",
    SK: "Rezerva"
  },
  {
    EN: "Blood sugar levels",
    SK: "Hladiny cukru v krvi"
  },
  {
    EN: "Your score",
    SK: "Tvoje skóre"
  }
];
const insulinTestQuestions = [
  {
    EN: "What is the main role of insulin in our bodies?",
    SK: "Aká je hlavná úloha inzulínu v našom tele?",
    answers: [
      {
        EN: "It gives us energy.",
        SK: "Dodáva nám energiu.",
        isCorrect: false
      },
      {
        EN: "It breaks down sugar molecules.",
        SK: "Rozkladá molekuly cukru.",
        isCorrect: false
      },
      {
        EN: "It allows glucose to enter our cells.",
        SK: "Umožňuje glukóze dostať sa do bunky.",
        isCorrect: true
      },
      {
        EN: "It makes us grow taller",
        SK: "Umožňuje nám rásť.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Insulin is important because it lets glucose enter our cells.",
      SK: "Inzulín je dôležitý, lebo dovoľuje glukóze vstúpiť do bunky."
    }
  },
  {
    EN: "Why is glucose important for our bodies?",
    SK: "Prečo je glukóza dôležitá pre naše telo?",
    answers: [
      {
        EN: "It helps us sleep better",
        SK: "Pomáha nám spať lepšie",
        isCorrect: false
      },
      {
        EN: "It makes our skin glow",
        SK: "Robí našu pokožku žiarivou",
        isCorrect: false
      },
      {
        EN: "It gives us energy",
        SK: "Dodáva nám energiu",
        isCorrect: true
      },
      {
        EN: "It makes us laugh",
        SK: "Robí nás šťastnými",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Glucose is important because it gives our bodies the energy they need to function properly.",
      SK: "Glukóza je dôležitá, pretože poskytuje našim telám energiu, ktorú potrebujú na správne fungovanie."
    }
  },
  {
    EN: "What would happen if glucose couldn't enter our cells?",
    SK: "Čo by sa stalo, keby sa glukóza nedokázala dostať do našich buniek?",
    answers: [
      {
        EN: "Nothing at all",
        SK: "Vôbec nič",
        isCorrect: false
      },
      {
        EN: "The excess of insulin would  kill us immediately",
        SK: "Kvôli prebytku inzulínu by sme ihneď zomreli",
        isCorrect: false
      },
      {
        EN: "We would experience unpleasant symptoms of diabetes",
        SK: "Prejavili by sa nepríjemné príznaky cukrovky",
        isCorrect: true
      },
      {
        EN: "We would become invisible",
        SK: "Stali by sme sa neviditeľnými",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "If glucose couldn't enter our cells, we would experience unpleasant symptoms because our cells wouldn't get the energy they need to function.",
      SK: "Ak by sa glukóza nedokázala dostať do našich buniek, zažívali by sme nepríjemné príznaky, pretože naše bunky by nedostávali energiu, ktorú potrebujú na fungovanie."
    }
  },
  {
    EN: "Why is it important to educate ourselves about diabetes?",
    SK: "Prečo je dôležité, aby sme sa učili o cukrovke?",
    answers: [
      {
        EN: "It makes us experts in medical diagnosis and treatment",
        SK: "Robí to z nás odborníkov na lekársku diagnostiku a liečbu",
        isCorrect: false
      },
      {
        EN: "It helps us make informed lifestyle choices and reduce the risk of developing the condition",
        SK: "Pomáha nám robiť informované rozhodnutia o životnom štýle a znižovať riziko vzniku ochorenia",
        isCorrect: true
      },
      {
        EN: "It is not important to educate ourselves about diabetes",
        SK: "Nie je dôležité vzdelávať sa o cukrovke",
        isCorrect: false
      },
      {
        EN: "It allows us to avoid all carbohydrates in our diet",
        SK: "Umožňuje nám vyhnúť sa všetkým sacharidom v našej strave",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Insulin plays a vital role in allowing glucose to enter our cells by helping it get inside. Without insulin, glucose can't effectively enter the cells.",
      SK: "Inzulín zohráva kľúčovú úlohu pri umožnení vstupu glukózy do našich buniek tým, že jej pomáha dostať sa dovnútra. Bez inzulínu sa glukóza nedokáže efektívne dostávať do buniek."
    }
  }
];
const glucoseTimeline = [
  {
    id: "food",
    text: {
      EN: "We eat food",
      SK: "Zjeme jedlo"
    },
    image: "/public/images/food.svg"
  },
  {
    id: "sugar",
    text: {
      EN: "Sugar from the food breaks down",
      SK: "Cukor z jedla sa rozloží"
    },
    image: "/public/images/sugar.svg"
  },
  {
    id: "glucose",
    text: {
      EN: "Parts of it called glucose will get into our bloodstream",
      SK: "Jeho časti nazývané glukóza sa dostanú do krvného obehu"
    },
    image: "/public/images/glucose.svg"
  },
  {
    id: "cells",
    text: {
      EN: "The blood will carry glucose to the cells",
      SK: "Krv ponesie glukózu až k bunkám"
    },
    image: "/public/images/cell.svg"
  },
  {
    id: "absorption",
    text: {
      EN: "Insulin will help the glucose to get in the cell",
      SK: "Inzulín pomôže glukóze dostať sa do bunky"
    },
    image: "/public/images/absorption.svg"
  },
  {
    id: "energy",
    text: {
      EN: "The cell will use this glucose to create energy",
      SK: "Bunka vďaka glukóze vytvorí energiu"
    },
    image: "/public/images/energy.svg"
  },
  {
    id: "sport",
    text: {
      EN: "We can run, play, do sports, and many other activities",
      SK: "Môžme behať, hrať sa, športovať a robiť mnoho iných aktivít"
    },
    image: "/public/images/sport.svg"
  }
];
const treatmentCards = [
  {
    id: "exerciseBloodSugar",
    text: {
      EN: "Checking your glucose blood levels after exercising",
      SK: "Kontrola hladiny cukru v krvi po cvičení"
    },
    image: "/public/images/exercise.svg"
  },
  {
    id: "avoidingMedication",
    text: {
      EN: "Avoiding prescribed medication",
      SK: "Vyhýbanie sa predpísaným liekom"
    },
    image: "/public/images/medicamentCrossed.svg"
  },
  {
    id: "balancedDiet",
    text: {
      EN: "Maintaining a balanced diet for diabetes",
      SK: "Dodržiavanie vyváženej stravy pri cukrovke"
    },
    image: "/public/images/diet.svg"
  },
  {
    id: "medicationRoutine",
    text: {
      EN: "Taking prescribed medication consistently",
      SK: "Pravidelné užívanie predpísaných liekov"
    },
    image: "/public/images/insulin.svg"
  },
  {
    id: "ignoringBloodSugar",
    text: {
      EN: "Ignoring blood sugar levels",
      SK: "Ignorovanie hladiny cukru v krvi"
    },
    image: "/public/images/glucoseLevels.svg"
  },
  {
    id: "glucoseMonitoring",
    text: {
      EN: "Regularly monitoring blood glucose with a glucose meter",
      SK: "Pravidelné sledovanie hladiny cukru v krvi pomocou glukometra"
    },
    image: "/public/images/glucometer.svg"
  },
  {
    id: "skippingMeals",
    text: {
      EN: "Skipping meals regularly",
      SK: "Pravidelné vynechávanie jedál"
    },
    image: "/public/images/plate.svg"
  },
  {
    id: "neglectingExercise",
    text: {
      EN: "Not exercising at all",
      SK: "Vôbec necvičiť"
    },
    image: "/public/images/sport.svg"
  },
  {
    id: "healthcareConsultation",
    text: {
      EN: "Regular consultations with healthcare provider",
      SK: "Pravidelné konzultácie s poskytovateľom zdravotnej starostlivosti"
    },
    image: "/public/images/doctor.svg"
  },
  {
    id: "ignoringHealthcareAdvice",
    text: {
      EN: "Ignoring healthcare provider's advice",
      SK: "Ignorovanie odporúčaní poskytovateľa zdravotnej starostlivosti"
    },
    image: "/public/images/doctorIgnored.svg"
  }
];
const InsulinDragDropTitle = {
  EN: "Can you tell the story of how our food can give us energy? Just drag the cards in a correct order, top to bottom.",
  SK: "Vieš prerozprávať, ako sa z nášho jedla stane energia? Potiahni kartičky v stĺpci v správnom poradí, odhora dole."
};
const TreatmentDragDropTitle = {
  EN: "Drag and drop the activities into the helpful or unhelpful columns, based on how much they help us treat diabetes.",
  SK: "Potiahni a polož jednotlivé aktivity do kategórii 'nápomocné' alebo 'nenápomocné' podľa toho, či nám pomáhajú liečiť cukrovku."
};
const summarySad = {
  EN: "You can do better",
  SK: "Mohlo to byť lepšie"
};
const summaryHappy = {
  EN: "Great score! That would make my brother happy.",
  SK: "Skvelé skóre! Môj brat by sa potešil."
};
const symptomsCards = [
  {
    id: "thirst",
    title: {
      EN: "Increased Thirst",
      SK: "Zvýšený smäd"
    },
    text: {
      EN: "Increased thirst is a common symptom of diabetes, particularly when blood sugar levels are high, as the body attempts to eliminate excess glucose through urine.",
      SK: "Zvýšený pocit smädu je bežným príznakom cukrovky, najmä keď sú hladiny cukru v krvi vysoké, pretože telo sa snaží odstrániť nadbytočnú glukózu močom."
    },
    image: "/public/images/glass.svg"
  },
  {
    id: "hunger",
    title: {
      EN: "Frequent Hunger",
      SK: "Zvýšený hlad"
    },
    text: {
      EN: "Diabetes can cause frequent hunger, especially when blood sugar levels are low, resulting in a need for more energy.",
      SK: "Diabetes môže spôsobiť častý hlad, najmä keď sú hladiny cukru v krvi nízke, pretože telo potrebuje viac energie."
    },
    image: "/public/images/pizza.svg"
  },
  {
    id: "fatigue",
    title: {
      EN: "Fatigue",
      SK: "Únava"
    },
    text: {
      EN: "Diabetes-related fatigue is characterized by persistent tiredness and low energy levels. Fluctuations in blood sugar levels, particularly when they are poorly controlled, can lead to feelings of exhaustion and lethargy, impacting a person's ability to engage in daily activities.",
      SK: "Únava spojená s cukrovkou sa prejavuje neustálou nízkou hladinou energie. Kolísanie hladiny cukru v krvi, najmä keď nie je dostatočne kontrolované, môže spôsobiť pocit vyčerpania a ospalosti, čím ovplyvňuje schopnosť človeka byť aktívny na dennej báze."
    },
    image: "/public/images/fatigue.svg"
  },
  {
    id: "vision",
    title: {
      EN: "Blurry vision",
      SK: "Neschopnosť zaostriť"
    },
    text: {
      EN: "Elevated blood sugar levels may lead to difficulties in focusing and visual clarity. This symptom can come and go as blood sugar levels vary.",
      SK: "Zvýšené hladiny cukru v krvi môžu ovplyvniť schopnosť zaostrovať a vidieť poriadne. Tento príznak sa môže často meniť s kolísaním hladiny cukru v krvi."
    },
    image: "/public/images/blurry.svg"
  },
  {
    id: "numbness",
    title: {
      EN: "Numbness in limbs",
      SK: "Znecitlivenie v končatinách"
    },
    text: {
      EN: "Diabetic neuropathy can lead to numbness and tingling in the limbs, as prolonged high blood sugar levels can damage nerves, affecting sensation.",
      SK: "Diabetická neuropatia môže spôsobiť znecitlivenie a brnenie v končatinách, pretože dlhodobé vysoké hladiny cukru v krvi môžu poškodiť nervy a ovplyvniť schopnosť citu v končatinách."
    },
    image: "/public/images/numb.svg"
  },
  {
    id: "healing",
    title: {
      EN: "Slower wound healing",
      SK: "Pomalšie hojenie rán"
    },
    text: {
      EN: "Due to reduced blood flow and compromised immune function, a person with diabetes can experience slow wound healing, making it harder for the body to repair damaged tissue.",
      SK: "V dôsledku zníženého prúdenia krvi a oslabenej imunitnej funkcie môže osoba s cukrovkou zažiť pomalé hojenie rán, telo náročnejšie opravuje poškodenú tkaninu."
    },
    image: "/public/images/bandaid.svg"
  },
  {
    id: "weightloss",
    title: {
      EN: "Weightloss",
      SK: "Chudnutie"
    },
    text: {
      EN: "Weight loss can occur in diabetes, particularly in type 1 diabetes, due to the body breaking down muscle and fat for energy when it cannot use glucose effectively.",
      SK: "Chudnutie sa môže vyskytnúť pri diabete, najmä pri diabete typu 1, keď telo rozkladá svaly a tuk na získanie energie, keď nemôže efektívne využívať glukózu."
    },
    image: "/public/images/weight.svg"
  },
  {
    id: "urination",
    title: {
      EN: "Frequent urination",
      SK: "Časté močenie"
    },
    text: {
      EN: "Diabetes can lead to frequent urination as the kidneys work to remove excess sugar from the blood, causing increased urine production.",
      SK: "Diabetes môže spôsobiť časté močenie, pretože obličky pracujú na odstránení nadbytočného cukru z krvi, čo vedie k zvýšenej produkcii moču."
    },
    image: "/public/images/toilet.svg"
  }
];
const incorrectSymptomsCards = [
  {
    id: "dizziness",
    title: {
      EN: "Dizziness",
      SK: "Závraty"
    },
    text: {
      EN: "Dizziness is not a direct symptom of diabetes. While fluctuations in blood sugar levels can impact overall well-being, dizziness is not commonly associated with diabetes.",
      SK: "Závraty nie sú priamym príznakom cukrovky. Aj keď kolísanie hladiny cukru v krvi môže ovplyvniť celkový stav organizmu, závraty nie sú bežne spojené s cukrovkou."
    },
    image: "/public/images/dizziness.svg"
  },
  {
    id: "jointpain",
    title: {
      EN: "Joint pain",
      SK: "Bolesť kĺbov"
    },
    text: {
      EN: "Joint pain is not a typical symptom of diabetes. While diabetes can affect various parts of the body, joint pain is not directly linked to the condition.",
      SK: "Bolesť kĺbov nie je typickým príznakom cukrovky. Hoci cukrovka môže ovplyvniť rôzne časti tela, bolesť kĺbov nie je priamo spojená s touto chorobou."
    },
    image: "/public/images/jointpain.svg"
  },
  {
    id: "fever",
    title: {
      EN: "Fever",
      SK: "Horúčky"
    },
    text: {
      EN: "Fever is not a common symptom of diabetes. Diabetes primarily affects blood sugar levels and various organs, but it does not typically cause fever.",
      SK: "Horúčka nie je bežným príznakom cukrovky. Cukrovka primárne ovplyvňuje hladiny cukru v krvi a rôzne orgány, ale obvykle nezpôsobuje horúčku."
    },
    image: "/public/images/fever.svg"
  },
  {
    id: "shortnessofbreath",
    title: {
      EN: "Shortness of Breath",
      SK: "Dýchavičnosť"
    },
    text: {
      EN: "Shortness of breath is not directly associated with diabetes. While diabetes can impact cardiovascular health, shortness of breath is not a typical symptom.",
      SK: "Dýchavičnosť nie je priamo spojená s cukrovkou. Aj keď cukrovka môže ovplyvniť kardiovaskulárne zdravie, dýchavičnosť nie je typickým príznakom."
    },
    image: "/public/images/breath.svg"
  },
  {
    id: "hairloss",
    title: {
      EN: "Hairloss",
      SK: "Vypadávanie vlasov"
    },
    text: {
      EN: "Hair loss is not commonly linked to diabetes. While other health conditions may contribute to hair loss, it is not a direct symptom of diabetes.",
      SK: "Vypadávanie vlasov nie je bežne spojené s cukrovkou. Aj keď iné zdravotné problémy môžu prispievať k vypadávaniu vlasov, nie je to priamy príznak cukrovky."
    },
    image: "/public/images/hairloss.svg"
  },
  {
    id: "rash",
    title: {
      EN: "Rash",
      SK: "Vyrážky"
    },
    text: {
      EN: "Skin rashes are not typically associated with diabetes. Diabetes primarily affects blood sugar levels and organs, and skin rash is usually caused by other factors.",
      SK: "Vyrážky na koži nie sú obvykle spojené s cukrovkou. Cukrovka primárne ovplyvňuje hladiny cukru v krvi a orgány, a vyrážka na koži je obvykle spôsobená inými faktormi."
    },
    image: "/public/images/rash.svg"
  }
];
const symptomsTestQuestions = [
  {
    EN: "What is the purpose of an insulin pump?",
    SK: "Aký je účel inzulínovej pumpy?",
    answers: [
      {
        EN: "To increase insulin resistance.",
        SK: "Zvýšiť odolnosť voči inzulínu.",
        isCorrect: false
      },
      {
        EN: "To deliver insulin throughout the day, replacing the need for injections.",
        SK: "Dodávať inzulín počas celého dňa, nahradzujúc potrebu injekcií.",
        isCorrect: true
      },
      {
        EN: "To break down sugar molecules in the bloodstream.",
        SK: "Rozkladať molekuly cukru v krvi.",
        isCorrect: false
      },
      {
        EN: "To control blood pressure.",
        SK: "Kontrolovať krvný tlak.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "An insulin pump delivers insulin throughout the day, replacing the need for injections and providing better blood sugar control.",
      SK: "Inzulínová pumpa dodáva inzulín počas celého dňa, nahradzuje potrebu injekcií a poskytujúc lepšiu kontrolu hladiny cukru v krvi."
    }
  },
  {
    EN: "Why is exercise important for people with diabetes?",
    SK: "Prečo je cvičenie dôležité pre ľudí s cukrovkou?",
    answers: [
      {
        EN: "It has no impact on blood sugar levels.",
        SK: "Nemá žiadny vplyv na hladinu cukru v krvi.",
        isCorrect: false
      },
      {
        EN: "It increases the risk of insulin resistance.",
        SK: "Zvyšuje riziko inzulínovej rezistencie.",
        isCorrect: false
      },
      {
        EN: "It helps lower blood sugar levels and increases sensitivity to insulin.",
        SK: "Pomáha znížiť hladinu cukru v krvi a zvyšuje citlivosť na inzulín.",
        isCorrect: true
      },
      {
        EN: "It only benefits those without diabetes.",
        SK: "Prospeje len tým, ktorí nemajú cukrovku.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Exercise helps lower blood sugar levels and increases sensitivity to insulin, contributing to better diabetes management.",
      SK: "Cvičenie pomáha znížiť hladinu cukru v krvi a zvyšuje citlivosť na inzulín, čím prispieva k lepšej kontrole cukrovky."
    }
  },
  {
    EN: "What happens when the body has trouble using insulin properly?",
    SK: "Čo sa deje, keď má telo problémy s používaním inzulínu správne?",
    answers: [
      {
        EN: "Blood sugar levels decrease.",
        SK: "Hladina cukru v krvi klesá.",
        isCorrect: false
      },
      {
        EN: "The body produces more insulin.",
        SK: "Telo produkuje viac inzulínu.",
        isCorrect: false
      },
      {
        EN: "Blood sugar levels go up.",
        SK: "Hladina cukru v krvi stúpa.",
        isCorrect: true
      },
      {
        EN: "The body becomes immune to insulin.",
        SK: "Telo sa stáva imúnnym voči inzulínu.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "When the body has trouble using insulin properly, blood sugar levels go up, leading to difficulties in managing diabetes.",
      SK: "Keď má telo problémy s používaním inzulínu správne, hladina cukru v krvi stúpa, čo vedie k problémom pri liečbe cukrovky."
    }
  },
  {
    EN: "Why is it important to keep a backup diabetes kit for insulin injections?",
    SK: "Prečo je dôležité mať záložný diabetický set na injekcie inzulínu?",
    answers: [
      {
        EN: "To increase the need for injections.",
        SK: "Zvýšiť potrebu injekcií.",
        isCorrect: false
      },
      {
        EN: "To avoid using an insulin pump.",
        SK: "Vyhnúť sa používaniu inzulínovej pumpy.",
        isCorrect: false
      },
      {
        EN: "In case the insulin pump malfunctions or is unavailable.",
        SK: "V prípade, ak inzulínová pumpa zlyhá alebo nie je k dispozícii.",
        isCorrect: true
      },
      {
        EN: "To replace the need for insulin injections.",
        SK: "Nahradziť potrebu injekcií inzulínu.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Keeping a backup diabetes kit is crucial in case the insulin pump malfunctions or is unavailable, ensuring continuous treatment.",
      SK: "Mať záložný diabetický set je kľúčové v prípade, ak inzulínová pumpa zlyhá alebo nie je k dispozícii, čím sa zabezpečuje neprerušovaná liečba."
    }
  },
  {
    EN: "What is the purpose of checking blood sugar levels after exercise?",
    SK: "Aký je účel kontroly hladiny cukru v krvi po cvičení?",
    answers: [
      {
        EN: "To increase the risk of low blood sugar.",
        SK: "Zvýšiť riziko nízkeho cukru v krvi.",
        isCorrect: false
      },
      {
        EN: "To avoid any changes in blood sugar levels.",
        SK: "Zabrániť zmenám hladiny cukru v krvi.",
        isCorrect: false
      },
      {
        EN: "To monitor for potential issues and prevent low blood sugar.",
        SK: "Monitorovať možné problémy a predchádzať nízkemu cukru v krvi.",
        isCorrect: true
      },
      {
        EN: "To skip insulin injections after exercise.",
        SK: "Preskočiť injekcie inzulínu po cvičení.",
        isCorrect: false
      }
    ],
    explanation: {
      EN: "Checking blood sugar levels after exercise helps monitor for potential issues and prevent low blood sugar, ensuring a balanced approach to diabetes management.",
      SK: "Kontrola hladiny cukru v krvi po cvičení pomáha monitorovať možné problémy a predchádzať nízkemu cukru v krvi, čím sa zabezpečuje vyvážený prístup k liečbe cukrovky."
    }
  }
];
/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant$3(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index2) {
  return {
    usr: location.state,
    key: location.key,
    idx: index2
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$3({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index2 = getIndex();
  if (index2 == null) {
    index2 = 0;
    globalHistory.replaceState(_extends$3({}, globalHistory.state, {
      idx: index2
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex2 = getIndex();
    let delta = nextIndex2 == null ? null : nextIndex2 - index2;
    index2 = nextIndex2;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex() + 1;
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex();
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant$3(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant$3(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant$3(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end2 = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match2 = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end: end2
    }, remainingPathname);
    if (!match2)
      return null;
    Object.assign(matchedParams, match2.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match2.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match2.pathnameBase])),
      route
    });
    if (match2.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match2 = pathname.match(matcher);
  if (!match2)
    return null;
  let matchedPathname = match2[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match2.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end2) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end2 === void 0) {
    end2 = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end2) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match2, index2) => index2 === 0 || match2.route.path && match2.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$3({}, toArg);
    invariant$3(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant$3(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant$3(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports$1.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports$1.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports$1.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports$1.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports$1.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports$1.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant$3(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports$1.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports$1.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant$3(false) : void 0;
  return reactExports$1.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect$2(cb2) {
  let isStatic = reactExports$1.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports$1.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports$1.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant$3(false) : void 0;
  let dataRouterContext = reactExports$1.useContext(DataRouterContext);
  let {
    basename,
    navigator: navigator2
  } = reactExports$1.useContext(NavigationContext);
  let {
    matches
  } = reactExports$1.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match2) => match2.pathnameBase));
  let activeRef = reactExports$1.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = reactExports$1.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports$1.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match2) => match2.pathnameBase));
  return reactExports$1.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ? invariant$3(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports$1.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports$1.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant$3(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match2) => Object.assign({}, match2, {
    params: Object.assign({}, parentParams, match2.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathname).pathname : match2.pathname
    ]),
    pathnameBase: match2.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathnameBase).pathname : match2.pathnameBase
    ])
  })), parentMatches, dataRouterState);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports$1.createElement(LocationContext.Provider, {
      value: {
        location: _extends$2({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports$1.createElement(reactExports$1.Fragment, null, /* @__PURE__ */ reactExports$1.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports$1.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports$1.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports$1.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports$1.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports$1.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match: match2,
    children
  } = _ref;
  let dataRouterContext = reactExports$1.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match2.route.errorElement || match2.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match2.route.id;
  }
  return /* @__PURE__ */ reactExports$1.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant$3(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match2, index2) => {
    let error = match2.route.id ? errors == null ? void 0 : errors[match2.route.id] : null;
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match2.route.errorElement || defaultErrorElement;
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match2.route.Component) {
        children = /* @__PURE__ */ reactExports$1.createElement(match2.route.Component, null);
      } else if (match2.route.element) {
        children = match2.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports$1.createElement(RenderedRoute, {
        match: match2,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match2.route.ErrorBoundary || match2.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports$1.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterContext(hookName) {
  let ctx = reactExports$1.useContext(DataRouterContext);
  !ctx ? invariant$3(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports$1.useContext(DataRouterStateContext);
  !state ? invariant$3(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports$1.useContext(RouteContext);
  !route ? invariant$3(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant$3(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports$1.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports$1.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = reactExports$1.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$2({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
function Route(_props) {
  invariant$3(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ? invariant$3(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports$1.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports$1.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports$1.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports$1.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports$1.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ reactExports$1.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index2];
    if (element.type === reactExports$1.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant$3(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant$3(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded$3 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
const START_TRANSITION = "startTransition";
const startTransitionImpl = React$2[START_TRANSITION];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref;
  let historyRef = reactExports$1.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports$1.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports$1.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports$1.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports$1.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports$1.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded$3);
  let {
    basename
  } = reactExports$1.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports$1.createElement("a", _extends$1({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports$1.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function err(message) {
  const error = new Error(message);
  if (error.stack === void 0) {
    try {
      throw error;
    } catch (_2) {
    }
  }
  return error;
}
var err_1 = err;
var Recoil_err = err_1;
function isPromise(p2) {
  return !!p2 && typeof p2.then === "function";
}
var Recoil_isPromise = isPromise;
function nullthrows(x, message) {
  if (x != null) {
    return x;
  }
  throw Recoil_err(message !== null && message !== void 0 ? message : "Got unexpected null or undefined");
}
var Recoil_nullthrows = nullthrows;
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class BaseLoadable {
  getValue() {
    throw Recoil_err("BaseLoadable");
  }
  toPromise() {
    throw Recoil_err("BaseLoadable");
  }
  valueMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  valueOrThrow() {
    throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  promiseOrThrow() {
    throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Recoil_err("BaseLoadable");
  }
  errorOrThrow() {
    throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);
  }
  is(other) {
    return other.state === this.state && other.contents === this.contents;
  }
  map(_map) {
    throw Recoil_err("BaseLoadable");
  }
}
class ValueLoadable extends BaseLoadable {
  constructor(value) {
    super();
    _defineProperty$1(this, "state", "hasValue");
    _defineProperty$1(this, "contents", void 0);
    this.contents = value;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
    return void 0;
  }
  errorMaybe() {
    return void 0;
  }
  map(map) {
    try {
      const next = map(this.contents);
      return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
    } catch (e2) {
      return Recoil_isPromise(e2) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        loadableWithPromise(e2.next(() => this.map(map)))
      ) : loadableWithError(e2);
    }
  }
}
class ErrorLoadable extends BaseLoadable {
  constructor(error) {
    super();
    _defineProperty$1(this, "state", "hasError");
    _defineProperty$1(this, "contents", void 0);
    this.contents = error;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
    return void 0;
  }
  promiseMaybe() {
    return void 0;
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(_map) {
    return this;
  }
}
class LoadingLoadable extends BaseLoadable {
  constructor(promise) {
    super();
    _defineProperty$1(this, "state", "loading");
    _defineProperty$1(this, "contents", void 0);
    this.contents = promise;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
    return void 0;
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
    return void 0;
  }
  map(map) {
    return loadableWithPromise(this.contents.then((value) => {
      const next = map(value);
      if (isLoadable(next)) {
        const nextLoadable = next;
        switch (nextLoadable.state) {
          case "hasValue":
            return nextLoadable.contents;
          case "hasError":
            throw nextLoadable.contents;
          case "loading":
            return nextLoadable.contents;
        }
      }
      return next;
    }).catch((e2) => {
      if (Recoil_isPromise(e2)) {
        return e2.then(() => this.map(map).contents);
      }
      throw e2;
    }));
  }
}
function loadableWithValue(value) {
  return Object.freeze(new ValueLoadable(value));
}
function loadableWithError(error) {
  return Object.freeze(new ErrorLoadable(error));
}
function loadableWithPromise(promise) {
  return Object.freeze(new LoadingLoadable(promise));
}
function loadableLoading() {
  return Object.freeze(new LoadingLoadable(new Promise(() => {
  })));
}
function loadableAllArray(inputs) {
  return inputs.every((i) => i.state === "hasValue") ? loadableWithValue(inputs.map((i) => i.contents)) : inputs.some((i) => i.state === "hasError") ? loadableWithError(Recoil_nullthrows(inputs.find((i) => i.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : loadableWithPromise(Promise.all(inputs.map((i) => i.contents)));
}
function loadableAll(inputs) {
  const unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map((key) => inputs[key]);
  const normalizedInputs = unwrapedInputs.map((x) => isLoadable(x) ? x : Recoil_isPromise(x) ? loadableWithPromise(x) : loadableWithValue(x));
  const output = loadableAllArray(normalizedInputs);
  return Array.isArray(inputs) ? (
    // $FlowIssue[incompatible-return]
    output
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    output.map((outputs) => Object.getOwnPropertyNames(inputs).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (out, key, idx) => ({
        ...out,
        [key]: outputs[idx]
      }),
      {}
    ))
  );
}
function isLoadable(x) {
  return x instanceof BaseLoadable;
}
const LoadableStaticInterface = {
  of: (value) => Recoil_isPromise(value) ? loadableWithPromise(value) : isLoadable(value) ? value : loadableWithValue(value),
  error: (error) => loadableWithError(error),
  // $FlowIssue[incompatible-return]
  loading: () => loadableLoading(),
  // $FlowIssue[unclear-type]
  all: loadableAll,
  isLoadable
};
var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll,
  isLoadable,
  RecoilLoadable: LoadableStaticInterface
};
var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;
var Recoil_Loadable$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: Recoil_Loadable_1,
  loadableWithError: Recoil_Loadable_2,
  loadableWithPromise: Recoil_Loadable_3,
  loadableLoading: Recoil_Loadable_4,
  loadableAll: Recoil_Loadable_5,
  isLoadable: Recoil_Loadable_6,
  RecoilLoadable: Recoil_Loadable_7
});
const env = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: true,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function readProcessEnvBooleanFlag(name, set) {
  var _process$env$name, _process$env$name$toL;
  const sanitizedValue = (_process$env$name = process.env[name]) === null || _process$env$name === void 0 ? void 0 : (_process$env$name$toL = _process$env$name.toLowerCase()) === null || _process$env$name$toL === void 0 ? void 0 : _process$env$name$toL.trim();
  if (sanitizedValue == null || sanitizedValue === "") {
    return;
  }
  const allowedValues = ["true", "false"];
  if (!allowedValues.includes(sanitizedValue)) {
    throw Recoil_err(`({}).${name} value must be 'true', 'false', or empty: ${sanitizedValue}`);
  }
  set(sanitizedValue === "true");
}
function readProcessEnvStringArrayFlag(name, set) {
  var _process$env$name2;
  const sanitizedValue = (_process$env$name2 = process.env[name]) === null || _process$env$name2 === void 0 ? void 0 : _process$env$name2.trim();
  if (sanitizedValue == null || sanitizedValue === "") {
    return;
  }
  set(sanitizedValue.split(/\s*,\s*|\s+/));
}
function applyProcessEnvFlagOverrides() {
  var _process;
  if (typeof process === "undefined") {
    return;
  }
  if (((_process = process) === null || _process === void 0 ? void 0 : _process.env) == null) {
    return;
  }
  readProcessEnvBooleanFlag("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (value) => {
    env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = value;
  });
  readProcessEnvStringArrayFlag("RECOIL_GKS_ENABLED", (value) => {
    value.forEach((gk2) => {
      env.RECOIL_GKS_ENABLED.add(gk2);
    });
  });
}
applyProcessEnvFlagOverrides();
var Recoil_RecoilEnv = env;
function Recoil_gkx_OSS(gk2) {
  return Recoil_RecoilEnv.RECOIL_GKS_ENABLED.has(gk2);
}
Recoil_gkx_OSS.setPass = (gk2) => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.add(gk2);
};
Recoil_gkx_OSS.setFail = (gk2) => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.delete(gk2);
};
Recoil_gkx_OSS.clear = () => {
  Recoil_RecoilEnv.RECOIL_GKS_ENABLED.clear();
};
var Recoil_gkx = Recoil_gkx_OSS;
function recoverableViolation(message, _projectName, {
  error
} = {}) {
  return null;
}
var recoverableViolation_1 = recoverableViolation;
var Recoil_recoverableViolation = recoverableViolation_1;
var _createMutableSource, _useMutableSource, _useSyncExternalStore;
const createMutableSource = (
  // flowlint-next-line unclear-type:off
  (_createMutableSource = React$1.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : React$1.unstable_createMutableSource
);
const useMutableSource = (
  // flowlint-next-line unclear-type:off
  (_useMutableSource = React$1.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : React$1.unstable_useMutableSource
);
const useSyncExternalStore = (
  // flowlint-next-line unclear-type:off
  (_useSyncExternalStore = React$1.useSyncExternalStore) !== null && _useSyncExternalStore !== void 0 ? _useSyncExternalStore : (
    // flowlint-next-line unclear-type:off
    React$1.unstable_useSyncExternalStore
  )
);
function currentRendererSupportsUseSyncExternalStore() {
  var _ReactCurrentDispatch;
  const {
    ReactCurrentDispatcher,
    ReactCurrentOwner
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  );
  const dispatcher = (_ReactCurrentDispatch = ReactCurrentDispatcher === null || ReactCurrentDispatcher === void 0 ? void 0 : ReactCurrentDispatcher.current) !== null && _ReactCurrentDispatch !== void 0 ? _ReactCurrentDispatch : ReactCurrentOwner.currentDispatcher;
  const isUseSyncExternalStoreSupported = dispatcher.useSyncExternalStore != null;
  return isUseSyncExternalStoreSupported;
}
function reactMode() {
  if (Recoil_gkx("recoil_transition_support")) {
    return {
      mode: "TRANSITION_SUPPORT",
      early: true,
      concurrent: true
    };
  }
  if (Recoil_gkx("recoil_sync_external_store") && useSyncExternalStore != null) {
    return {
      mode: "SYNC_EXTERNAL_STORE",
      early: true,
      concurrent: false
    };
  }
  if (Recoil_gkx("recoil_mutable_source") && useMutableSource != null && typeof window !== "undefined" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE) {
    return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
      mode: "MUTABLE_SOURCE",
      early: true,
      concurrent: true
    } : {
      mode: "MUTABLE_SOURCE",
      early: false,
      concurrent: false
    };
  }
  return Recoil_gkx("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: true,
    concurrent: false
  } : {
    mode: "LEGACY",
    early: false,
    concurrent: false
  };
}
function isFastRefreshEnabled() {
  return false;
}
var Recoil_ReactMode = {
  createMutableSource,
  useMutableSource,
  useSyncExternalStore,
  currentRendererSupportsUseSyncExternalStore,
  reactMode,
  isFastRefreshEnabled
};
class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty$1(this, "key", void 0);
    this.key = newKey;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class RecoilState extends AbstractRecoilValue {
}
class RecoilValueReadOnly extends AbstractRecoilValue {
}
function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}
var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};
var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
var Recoil_RecoilValue$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});
function mapIterable(iterable, callback) {
  return function* () {
    let index2 = 0;
    for (const value of iterable) {
      yield callback(value, index2++);
    }
  }();
}
var Recoil_mapIterable = mapIterable;
class DefaultValue {
}
const DEFAULT_VALUE = new DefaultValue();
const nodes = /* @__PURE__ */ new Map();
const recoilValues = /* @__PURE__ */ new Map();
function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, (key) => Recoil_nullthrows(recoilValues.get(key)));
}
function checkForDuplicateAtomKey(key) {
  if (nodes.has(key)) {
    const message = `Duplicate atom key "${key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    {
      console.warn(message);
    }
  }
}
function registerNode(node) {
  if (Recoil_RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED) {
    checkForDuplicateAtomKey(node.key);
  }
  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
class NodeMissingError extends Error {
}
function getNode(key) {
  const node = nodes.get(key);
  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }
  return node;
}
function getNodeMaybe(key) {
  return nodes.get(key);
}
const configDeletionHandlers = /* @__PURE__ */ new Map();
function deleteNodeConfigIfPossible(key) {
  var _node$shouldDeleteCon;
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const node = nodes.get(key);
  if (node !== null && node !== void 0 && (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) !== null && _node$shouldDeleteCon !== void 0 && _node$shouldDeleteCon.call(node)) {
    var _getConfigDeletionHan;
    nodes.delete(key);
    (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
    configDeletionHandlers.delete(key);
  }
}
function setConfigDeletionHandler(key, fn) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  if (fn === void 0) {
    configDeletionHandlers.delete(key);
  } else {
    configDeletionHandlers.set(key, fn);
  }
}
function getConfigDeletionHandler(key) {
  return configDeletionHandlers.get(key);
}
var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  deleteNodeConfigIfPossible,
  setConfigDeletionHandler,
  getConfigDeletionHandler,
  recoilValuesForKeys,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE
};
function enqueueExecution(s, f2) {
  f2();
}
var Recoil_Queue = {
  enqueueExecution
};
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var hamt_1 = createCommonjsModule(function(module) {
  var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var hamt = {};
  var SIZE = 5;
  var BUCKET_SIZE = Math.pow(2, SIZE);
  var MASK = BUCKET_SIZE - 1;
  var MAX_INDEX_NODE = BUCKET_SIZE / 2;
  var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
  var nothing = {};
  var constant = function constant2(x) {
    return function() {
      return x;
    };
  };
  var hash = hamt.hash = function(str) {
    var type = typeof str === "undefined" ? "undefined" : _typeof2(str);
    if (type === "number")
      return str;
    if (type !== "string")
      str += "";
    var hash2 = 0;
    for (var i = 0, len = str.length; i < len; ++i) {
      var c2 = str.charCodeAt(i);
      hash2 = (hash2 << 5) - hash2 + c2 | 0;
    }
    return hash2;
  };
  var popcount = function popcount2(x) {
    x -= x >> 1 & 1431655765;
    x = (x & 858993459) + (x >> 2 & 858993459);
    x = x + (x >> 4) & 252645135;
    x += x >> 8;
    x += x >> 16;
    return x & 127;
  };
  var hashFragment = function hashFragment2(shift3, h2) {
    return h2 >>> shift3 & MASK;
  };
  var toBitmap = function toBitmap2(x) {
    return 1 << x;
  };
  var fromBitmap = function fromBitmap2(bitmap, bit) {
    return popcount(bitmap & bit - 1);
  };
  var arrayUpdate = function arrayUpdate2(mutate2, at, v2, arr) {
    var out = arr;
    if (!mutate2) {
      var len = arr.length;
      out = new Array(len);
      for (var i = 0; i < len; ++i) {
        out[i] = arr[i];
      }
    }
    out[at] = v2;
    return out;
  };
  var arraySpliceOut = function arraySpliceOut2(mutate2, at, arr) {
    var newLen = arr.length - 1;
    var i = 0;
    var g2 = 0;
    var out = arr;
    if (mutate2) {
      i = g2 = at;
    } else {
      out = new Array(newLen);
      while (i < at) {
        out[g2++] = arr[i++];
      }
    }
    ++i;
    while (i <= newLen) {
      out[g2++] = arr[i++];
    }
    if (mutate2) {
      out.length = newLen;
    }
    return out;
  };
  var arraySpliceIn = function arraySpliceIn2(mutate2, at, v2, arr) {
    var len = arr.length;
    if (mutate2) {
      var _i = len;
      while (_i >= at) {
        arr[_i--] = arr[_i];
      }
      arr[at] = v2;
      return arr;
    }
    var i = 0, g2 = 0;
    var out = new Array(len + 1);
    while (i < at) {
      out[g2++] = arr[i++];
    }
    out[at] = v2;
    while (i < len) {
      out[++g2] = arr[i++];
    }
    return out;
  };
  var LEAF = 1;
  var COLLISION = 2;
  var INDEX = 3;
  var ARRAY = 4;
  var empty2 = {
    __hamt_isEmpty: true
  };
  var isEmptyNode = function isEmptyNode2(x) {
    return x === empty2 || x && x.__hamt_isEmpty;
  };
  var Leaf = function Leaf2(edit, hash2, key, value) {
    return {
      type: LEAF,
      edit,
      hash: hash2,
      key,
      value,
      _modify: Leaf__modify
    };
  };
  var Collision = function Collision2(edit, hash2, children) {
    return {
      type: COLLISION,
      edit,
      hash: hash2,
      children,
      _modify: Collision__modify
    };
  };
  var IndexedNode = function IndexedNode2(edit, mask, children) {
    return {
      type: INDEX,
      edit,
      mask,
      children,
      _modify: IndexedNode__modify
    };
  };
  var ArrayNode = function ArrayNode2(edit, size2, children) {
    return {
      type: ARRAY,
      edit,
      size: size2,
      children,
      _modify: ArrayNode__modify
    };
  };
  var isLeaf = function isLeaf2(node) {
    return node === empty2 || node.type === LEAF || node.type === COLLISION;
  };
  var expand3 = function expand4(edit, frag, child, bitmap, subNodes) {
    var arr = [];
    var bit = bitmap;
    var count3 = 0;
    for (var i = 0; bit; ++i) {
      if (bit & 1)
        arr[i] = subNodes[count3++];
      bit >>>= 1;
    }
    arr[frag] = child;
    return ArrayNode(edit, count3 + 1, arr);
  };
  var pack = function pack2(edit, count3, removed, elements) {
    var children = new Array(count3 - 1);
    var g2 = 0;
    var bitmap = 0;
    for (var i = 0, len = elements.length; i < len; ++i) {
      if (i !== removed) {
        var elem = elements[i];
        if (elem && !isEmptyNode(elem)) {
          children[g2++] = elem;
          bitmap |= 1 << i;
        }
      }
    }
    return IndexedNode(edit, bitmap, children);
  };
  var mergeLeaves = function mergeLeaves2(edit, shift3, h1, n1, h2, n2) {
    if (h1 === h2)
      return Collision(edit, h1, [n2, n1]);
    var subH1 = hashFragment(shift3, h1);
    var subH2 = hashFragment(shift3, h2);
    return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves2(edit, shift3 + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
  };
  var updateCollisionList = function updateCollisionList2(mutate2, edit, keyEq, h2, list, f2, k2, size2) {
    var len = list.length;
    for (var i = 0; i < len; ++i) {
      var child = list[i];
      if (keyEq(k2, child.key)) {
        var value = child.value;
        var _newValue = f2(value);
        if (_newValue === value)
          return list;
        if (_newValue === nothing) {
          --size2.value;
          return arraySpliceOut(mutate2, i, list);
        }
        return arrayUpdate(mutate2, i, Leaf(edit, h2, k2, _newValue), list);
      }
    }
    var newValue = f2();
    if (newValue === nothing)
      return list;
    ++size2.value;
    return arrayUpdate(mutate2, len, Leaf(edit, h2, k2, newValue), list);
  };
  var canEditNode = function canEditNode2(edit, node) {
    return edit === node.edit;
  };
  var Leaf__modify = function Leaf__modify2(edit, keyEq, shift3, f2, h2, k2, size2) {
    if (keyEq(k2, this.key)) {
      var _v = f2(this.value);
      if (_v === this.value)
        return this;
      else if (_v === nothing) {
        --size2.value;
        return empty2;
      }
      if (canEditNode(edit, this)) {
        this.value = _v;
        return this;
      }
      return Leaf(edit, h2, k2, _v);
    }
    var v2 = f2();
    if (v2 === nothing)
      return this;
    ++size2.value;
    return mergeLeaves(edit, shift3, this.hash, this, h2, Leaf(edit, h2, k2, v2));
  };
  var Collision__modify = function Collision__modify2(edit, keyEq, shift3, f2, h2, k2, size2) {
    if (h2 === this.hash) {
      var canEdit = canEditNode(edit, this);
      var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f2, k2, size2);
      if (list === this.children)
        return this;
      return list.length > 1 ? Collision(edit, this.hash, list) : list[0];
    }
    var v2 = f2();
    if (v2 === nothing)
      return this;
    ++size2.value;
    return mergeLeaves(edit, shift3, this.hash, this, h2, Leaf(edit, h2, k2, v2));
  };
  var IndexedNode__modify = function IndexedNode__modify2(edit, keyEq, shift3, f2, h2, k2, size2) {
    var mask = this.mask;
    var children = this.children;
    var frag = hashFragment(shift3, h2);
    var bit = toBitmap(frag);
    var indx = fromBitmap(mask, bit);
    var exists = mask & bit;
    var current = exists ? children[indx] : empty2;
    var child = current._modify(edit, keyEq, shift3 + SIZE, f2, h2, k2, size2);
    if (current === child)
      return this;
    var canEdit = canEditNode(edit, this);
    var bitmap = mask;
    var newChildren = void 0;
    if (exists && isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap)
        return empty2;
      if (children.length <= 2 && isLeaf(children[indx ^ 1]))
        return children[indx ^ 1];
      newChildren = arraySpliceOut(canEdit, indx, children);
    } else if (!exists && !isEmptyNode(child)) {
      if (children.length >= MAX_INDEX_NODE)
        return expand3(edit, frag, child, mask, children);
      bitmap |= bit;
      newChildren = arraySpliceIn(canEdit, indx, child, children);
    } else {
      newChildren = arrayUpdate(canEdit, indx, child, children);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return IndexedNode(edit, bitmap, newChildren);
  };
  var ArrayNode__modify = function ArrayNode__modify2(edit, keyEq, shift3, f2, h2, k2, size2) {
    var count3 = this.size;
    var children = this.children;
    var frag = hashFragment(shift3, h2);
    var child = children[frag];
    var newChild = (child || empty2)._modify(edit, keyEq, shift3 + SIZE, f2, h2, k2, size2);
    if (child === newChild)
      return this;
    var canEdit = canEditNode(edit, this);
    var newChildren = void 0;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      ++count3;
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      --count3;
      if (count3 <= MIN_ARRAY_NODE)
        return pack(edit, count3, frag, children);
      newChildren = arrayUpdate(canEdit, frag, empty2, children);
    } else {
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    }
    if (canEdit) {
      this.size = count3;
      this.children = newChildren;
      return this;
    }
    return ArrayNode(edit, count3, newChildren);
  };
  empty2._modify = function(edit, keyEq, shift3, f2, h2, k2, size2) {
    var v2 = f2();
    if (v2 === nothing)
      return empty2;
    ++size2.value;
    return Leaf(edit, h2, k2, v2);
  };
  function Map2(editable, edit, config2, root, size2) {
    this._editable = editable;
    this._edit = edit;
    this._config = config2;
    this._root = root;
    this._size = size2;
  }
  Map2.prototype.setTree = function(newRoot, newSize) {
    if (this._editable) {
      this._root = newRoot;
      this._size = newSize;
      return this;
    }
    return newRoot === this._root ? this : new Map2(this._editable, this._edit, this._config, newRoot, newSize);
  };
  var tryGetHash = hamt.tryGetHash = function(alt, hash2, key, map) {
    var node = map._root;
    var shift3 = 0;
    var keyEq = map._config.keyEq;
    while (true) {
      switch (node.type) {
        case LEAF: {
          return keyEq(key, node.key) ? node.value : alt;
        }
        case COLLISION: {
          if (hash2 === node.hash) {
            var children = node.children;
            for (var i = 0, len = children.length; i < len; ++i) {
              var child = children[i];
              if (keyEq(key, child.key))
                return child.value;
            }
          }
          return alt;
        }
        case INDEX: {
          var frag = hashFragment(shift3, hash2);
          var bit = toBitmap(frag);
          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift3 += SIZE;
            break;
          }
          return alt;
        }
        case ARRAY: {
          node = node.children[hashFragment(shift3, hash2)];
          if (node) {
            shift3 += SIZE;
            break;
          }
          return alt;
        }
        default:
          return alt;
      }
    }
  };
  Map2.prototype.tryGetHash = function(alt, hash2, key) {
    return tryGetHash(alt, hash2, key, this);
  };
  var tryGet = hamt.tryGet = function(alt, key, map) {
    return tryGetHash(alt, map._config.hash(key), key, map);
  };
  Map2.prototype.tryGet = function(alt, key) {
    return tryGet(alt, key, this);
  };
  var getHash = hamt.getHash = function(hash2, key, map) {
    return tryGetHash(void 0, hash2, key, map);
  };
  Map2.prototype.getHash = function(hash2, key) {
    return getHash(hash2, key, this);
  };
  hamt.get = function(key, map) {
    return tryGetHash(void 0, map._config.hash(key), key, map);
  };
  Map2.prototype.get = function(key, alt) {
    return tryGet(alt, key, this);
  };
  var hasHash = hamt.has = function(hash2, key, map) {
    return tryGetHash(nothing, hash2, key, map) !== nothing;
  };
  Map2.prototype.hasHash = function(hash2, key) {
    return hasHash(hash2, key, this);
  };
  var has = hamt.has = function(key, map) {
    return hasHash(map._config.hash(key), key, map);
  };
  Map2.prototype.has = function(key) {
    return has(key, this);
  };
  var defKeyCompare = function defKeyCompare2(x, y2) {
    return x === y2;
  };
  hamt.make = function(config2) {
    return new Map2(0, 0, {
      keyEq: config2 && config2.keyEq || defKeyCompare,
      hash: config2 && config2.hash || hash
    }, empty2, 0);
  };
  hamt.empty = hamt.make();
  var isEmpty = hamt.isEmpty = function(map) {
    return map && !!isEmptyNode(map._root);
  };
  Map2.prototype.isEmpty = function() {
    return isEmpty(this);
  };
  var modifyHash = hamt.modifyHash = function(f2, hash2, key, map) {
    var size2 = {
      value: map._size
    };
    var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f2, hash2, key, size2);
    return map.setTree(newRoot, size2.value);
  };
  Map2.prototype.modifyHash = function(hash2, key, f2) {
    return modifyHash(f2, hash2, key, this);
  };
  var modify = hamt.modify = function(f2, key, map) {
    return modifyHash(f2, map._config.hash(key), key, map);
  };
  Map2.prototype.modify = function(key, f2) {
    return modify(f2, key, this);
  };
  var setHash = hamt.setHash = function(hash2, key, value, map) {
    return modifyHash(constant(value), hash2, key, map);
  };
  Map2.prototype.setHash = function(hash2, key, value) {
    return setHash(hash2, key, value, this);
  };
  var set = hamt.set = function(key, value, map) {
    return setHash(map._config.hash(key), key, value, map);
  };
  Map2.prototype.set = function(key, value) {
    return set(key, value, this);
  };
  var del = constant(nothing);
  var removeHash = hamt.removeHash = function(hash2, key, map) {
    return modifyHash(del, hash2, key, map);
  };
  Map2.prototype.removeHash = Map2.prototype.deleteHash = function(hash2, key) {
    return removeHash(hash2, key, this);
  };
  var remove = hamt.remove = function(key, map) {
    return removeHash(map._config.hash(key), key, map);
  };
  Map2.prototype.remove = Map2.prototype.delete = function(key) {
    return remove(key, this);
  };
  var beginMutation = hamt.beginMutation = function(map) {
    return new Map2(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
  };
  Map2.prototype.beginMutation = function() {
    return beginMutation(this);
  };
  var endMutation = hamt.endMutation = function(map) {
    map._editable = map._editable && map._editable - 1;
    return map;
  };
  Map2.prototype.endMutation = function() {
    return endMutation(this);
  };
  var mutate = hamt.mutate = function(f2, map) {
    var transient = beginMutation(map);
    f2(transient);
    return endMutation(transient);
  };
  Map2.prototype.mutate = function(f2) {
    return mutate(f2, this);
  };
  var appk = function appk2(k2) {
    return k2 && lazyVisitChildren(k2[0], k2[1], k2[2], k2[3], k2[4]);
  };
  var lazyVisitChildren = function lazyVisitChildren2(len, children, i, f2, k2) {
    while (i < len) {
      var child = children[i++];
      if (child && !isEmptyNode(child))
        return lazyVisit(child, f2, [len, children, i, f2, k2]);
    }
    return appk(k2);
  };
  var lazyVisit = function lazyVisit2(node, f2, k2) {
    switch (node.type) {
      case LEAF:
        return {
          value: f2(node),
          rest: k2
        };
      case COLLISION:
      case ARRAY:
      case INDEX:
        var children = node.children;
        return lazyVisitChildren(children.length, children, 0, f2, k2);
      default:
        return appk(k2);
    }
  };
  var DONE = {
    done: true
  };
  function MapIterator(v2) {
    this.v = v2;
  }
  MapIterator.prototype.next = function() {
    if (!this.v)
      return DONE;
    var v0 = this.v;
    this.v = appk(v0.rest);
    return v0;
  };
  MapIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  var visit = function visit2(map, f2) {
    return new MapIterator(lazyVisit(map._root, f2));
  };
  var buildPairs = function buildPairs2(x) {
    return [x.key, x.value];
  };
  var entries = hamt.entries = function(map) {
    return visit(map, buildPairs);
  };
  Map2.prototype.entries = Map2.prototype[Symbol.iterator] = function() {
    return entries(this);
  };
  var buildKeys = function buildKeys2(x) {
    return x.key;
  };
  var keys = hamt.keys = function(map) {
    return visit(map, buildKeys);
  };
  Map2.prototype.keys = function() {
    return keys(this);
  };
  var buildValues = function buildValues2(x) {
    return x.value;
  };
  var values2 = hamt.values = Map2.prototype.values = function(map) {
    return visit(map, buildValues);
  };
  Map2.prototype.values = function() {
    return values2(this);
  };
  var fold = hamt.fold = function(f2, z2, m2) {
    var root = m2._root;
    if (root.type === LEAF)
      return f2(z2, root.value, root.key);
    var toVisit = [root.children];
    var children = void 0;
    while (children = toVisit.pop()) {
      for (var i = 0, len = children.length; i < len; ) {
        var child = children[i++];
        if (child && child.type) {
          if (child.type === LEAF)
            z2 = f2(z2, child.value, child.key);
          else
            toVisit.push(child.children);
        }
      }
    }
    return z2;
  };
  Map2.prototype.fold = function(f2, z2) {
    return fold(f2, z2, this);
  };
  var forEach = hamt.forEach = function(f2, map) {
    return fold(function(_2, value, key) {
      return f2(value, key, map);
    }, null, map);
  };
  Map2.prototype.forEach = function(f2) {
    return forEach(f2, this);
  };
  var count2 = hamt.count = function(map) {
    return map._size;
  };
  Map2.prototype.count = function() {
    return count2(this);
  };
  Object.defineProperty(Map2.prototype, "size", {
    get: Map2.prototype.count
  });
  if (module.exports) {
    module.exports = hamt;
  } else {
    (void 0).hamt = hamt;
  }
});
class BuiltInMap {
  constructor(existing) {
    _defineProperty$1(this, "_map", void 0);
    this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(k2) {
    return this._map.get(k2);
  }
  has(k2) {
    return this._map.has(k2);
  }
  set(k2, v2) {
    this._map.set(k2, v2);
    return this;
  }
  delete(k2) {
    this._map.delete(k2);
    return this;
  }
  clone() {
    return persistentMap(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class HashArrayMappedTrieMap {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(existing) {
    _defineProperty$1(this, "_hamt", hamt_1.empty.beginMutation());
    if (existing instanceof HashArrayMappedTrieMap) {
      const h2 = existing._hamt.endMutation();
      existing._hamt = h2.beginMutation();
      this._hamt = h2.beginMutation();
    } else if (existing) {
      for (const [k2, v2] of existing.entries()) {
        this._hamt.set(k2, v2);
      }
    }
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(k2) {
    return this._hamt.get(k2);
  }
  has(k2) {
    return this._hamt.has(k2);
  }
  set(k2, v2) {
    this._hamt.set(k2, v2);
    return this;
  }
  delete(k2) {
    this._hamt.delete(k2);
    return this;
  }
  clone() {
    return persistentMap(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function persistentMap(existing) {
  if (Recoil_gkx("recoil_hamt_2020")) {
    return new HashArrayMappedTrieMap(existing);
  } else {
    return new BuiltInMap(existing);
  }
}
var Recoil_PersistentMap = {
  persistentMap
};
var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;
var Recoil_PersistentMap$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: Recoil_PersistentMap_1
});
function differenceSets(set, ...setsWithValuesToRemove) {
  const ret = /* @__PURE__ */ new Set();
  FIRST:
    for (const value of set) {
      for (const otherSet of setsWithValuesToRemove) {
        if (otherSet.has(value)) {
          continue FIRST;
        }
      }
      ret.add(value);
    }
  return ret;
}
var Recoil_differenceSets = differenceSets;
function mapMap(map, callback) {
  const result = /* @__PURE__ */ new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}
var Recoil_mapMap = mapMap;
function makeGraph() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function cloneGraph(graph2) {
  return {
    nodeDeps: Recoil_mapMap(graph2.nodeDeps, (s) => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph2.nodeToNodeSubscriptions, (s) => new Set(s))
  };
}
function mergeDepsIntoGraph(key, newDeps, graph2, olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph2;
  const oldDeps = nodeDeps.get(key);
  if (oldDeps && olderGraph && oldDeps !== olderGraph.nodeDeps.get(key)) {
    return;
  }
  nodeDeps.set(key, newDeps);
  const addedDeps = oldDeps == null ? newDeps : Recoil_differenceSets(newDeps, oldDeps);
  for (const dep of addedDeps) {
    if (!nodeToNodeSubscriptions.has(dep)) {
      nodeToNodeSubscriptions.set(dep, /* @__PURE__ */ new Set());
    }
    const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
    existing.add(key);
  }
  if (oldDeps) {
    const removedDeps = Recoil_differenceSets(oldDeps, newDeps);
    for (const dep of removedDeps) {
      if (!nodeToNodeSubscriptions.has(dep)) {
        return;
      }
      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));
      existing.delete(key);
      if (existing.size === 0) {
        nodeToNodeSubscriptions.delete(dep);
      }
    }
  }
}
function saveDepsToStore(key, deps, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;
  const storeState = store.getState();
  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version)))
    ;
  const graph2 = store.getGraph(version);
  mergeDepsIntoGraph(key, deps, graph2);
  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDepsIntoGraph(key, deps, currentGraph, graph2);
  }
  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;
    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;
    if (nextVersion !== void 0) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDepsIntoGraph(key, deps, nextGraph, graph2);
    }
  }
}
var Recoil_Graph = {
  cloneGraph,
  graph: makeGraph,
  saveDepsToStore
};
let nextTreeStateVersion = 0;
const getNextTreeStateVersion = () => nextTreeStateVersion++;
let nextStoreID = 0;
const getNextStoreID = () => nextStoreID++;
let nextComponentID = 0;
const getNextComponentID = () => nextComponentID++;
var Recoil_Keys = {
  getNextTreeStateVersion,
  getNextStoreID,
  getNextComponentID
};
const {
  persistentMap: persistentMap$1
} = Recoil_PersistentMap$1;
const {
  graph
} = Recoil_Graph;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$1
} = Recoil_Keys;
function makeEmptyTreeState() {
  const version = getNextTreeStateVersion$1();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: persistentMap$1(),
    nonvalidatedAtoms: persistentMap$1()
  };
}
function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(currentTree.version, graph()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion: getNextTreeStateVersion$1
};
class RetentionZone {
}
function retentionZone() {
  return new RetentionZone();
}
var Recoil_RetentionZone = {
  RetentionZone,
  retentionZone
};
function setByAddingToSet(set, v2) {
  const next = new Set(set);
  next.add(v2);
  return next;
}
function setByDeletingFromSet(set, v2) {
  const next = new Set(set);
  next.delete(v2);
  return next;
}
function mapBySettingInMap(map, k2, v2) {
  const next = new Map(map);
  next.set(k2, v2);
  return next;
}
function mapByUpdatingInMap(map, k2, updater) {
  const next = new Map(map);
  next.set(k2, updater(next.get(k2)));
  return next;
}
function mapByDeletingFromMap(map, k2) {
  const next = new Map(map);
  next.delete(k2);
  return next;
}
function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach((k2) => next.delete(k2));
  return next;
}
var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};
function* filterIterable(iterable, predicate) {
  let index2 = 0;
  for (const value of iterable) {
    if (predicate(value, index2++)) {
      yield value;
    }
  }
}
var Recoil_filterIterable = filterIterable;
function lazyProxy(base, factories) {
  const proxy = new Proxy(base, {
    // Compute and cache lazy property if not already done.
    get: (target, prop) => {
      if (!(prop in target) && prop in factories) {
        target[prop] = factories[prop]();
      }
      return target[prop];
    },
    // This method allows user to iterate keys as normal
    ownKeys: (target) => {
      return Object.keys(target);
    }
  });
  return proxy;
}
var Recoil_lazyProxy = lazyProxy;
const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys$1
} = Recoil_Node;
const {
  RetentionZone: RetentionZone$1
} = Recoil_RetentionZone;
const {
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;
const emptySet = Object.freeze(/* @__PURE__ */ new Set());
class ReadOnlyRecoilValueError extends Error {
}
function initializeRetentionForNode(store, nodeKey, retainedBy) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return () => void 0;
  }
  const {
    nodesRetainedByZone: nodesRetainedByZone2
  } = store.getState().retention;
  function addToZone(zone) {
    let set = nodesRetainedByZone2.get(zone);
    if (!set) {
      nodesRetainedByZone2.set(zone, set = /* @__PURE__ */ new Set());
    }
    set.add(nodeKey);
  }
  if (retainedBy instanceof RetentionZone$1) {
    addToZone(retainedBy);
  } else if (Array.isArray(retainedBy)) {
    for (const zone of retainedBy) {
      addToZone(zone);
    }
  }
  return () => {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const {
      retention
    } = store.getState();
    function deleteFromZone(zone) {
      const set = retention.nodesRetainedByZone.get(zone);
      set === null || set === void 0 ? void 0 : set.delete(nodeKey);
      if (set && set.size === 0) {
        retention.nodesRetainedByZone.delete(zone);
      }
    }
    if (retainedBy instanceof RetentionZone$1) {
      deleteFromZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        deleteFromZone(zone);
      }
    }
  };
}
function initializeNodeIfNewToStore(store, treeState, key, trigger) {
  const storeState = store.getState();
  if (storeState.nodeCleanupFunctions.has(key)) {
    return;
  }
  const node = getNode$1(key);
  const retentionCleanup = initializeRetentionForNode(store, key, node.retainedBy);
  const nodeCleanup = node.init(store, treeState, trigger);
  storeState.nodeCleanupFunctions.set(key, () => {
    nodeCleanup();
    retentionCleanup();
  });
}
function initializeNode(store, key, trigger) {
  initializeNodeIfNewToStore(store, store.getState().currentTree, key, trigger);
}
function cleanUpNode(store, key) {
  var _state$nodeCleanupFun;
  const state = store.getState();
  (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
  state.nodeCleanupFunctions.delete(key);
}
function getNodeLoadable(store, state, key) {
  initializeNodeIfNewToStore(store, state, key, "get");
  return getNode$1(key).get(store, state);
}
function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
}
function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;
  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return {
    ...state,
    atomValues: state.atomValues.clone().delete(key),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  };
}
function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);
  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }
  const set = node.set;
  initializeNodeIfNewToStore(store, state, key, "set");
  return set(store, state, newValue);
}
function peekNodeInfo(store, state, key) {
  const storeState = store.getState();
  const graph2 = store.getGraph(state.version);
  const type = getNode$1(key).nodeType;
  return Recoil_lazyProxy({
    type
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => peekNodeLoadable(store, state, key),
    isActive: () => storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: () => type === "selector" ? false : state.atomValues.has(key),
    isModified: () => state.dirtyAtoms.has(key),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var _graph$nodeDeps$get;
      return recoilValuesForKeys$1((_graph$nodeDeps$get = graph2.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var _storeState$nodeToCom, _storeState$nodeToCom2;
      return {
        nodes: recoilValuesForKeys$1(Recoil_filterIterable(getDownstreamNodes(store, state, /* @__PURE__ */ new Set([key])), (nodeKey) => nodeKey !== key)),
        components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
          name
        }))
      };
    }
  });
}
function getDownstreamNodes(store, state, keys) {
  const visitedNodes = /* @__PURE__ */ new Set();
  const visitingNodes = Array.from(keys);
  const graph2 = store.getGraph(state.version);
  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;
    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;
    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }
  return visitedNodes;
}
var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  initializeNode,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  peekNodeInfo,
  getDownstreamNodes
};
let _invalidateMemoizedSnapshot = null;
function setInvalidateMemoizedSnapshot(invalidate) {
  _invalidateMemoizedSnapshot = invalidate;
}
function invalidateMemoizedSnapshot() {
  var _invalidateMemoizedSn;
  (_invalidateMemoizedSn = _invalidateMemoizedSnapshot) === null || _invalidateMemoizedSn === void 0 ? void 0 : _invalidateMemoizedSn();
}
var Recoil_SnapshotCache = {
  setInvalidateMemoizedSnapshot,
  invalidateMemoizedSnapshot
};
const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;
const {
  getNextComponentID: getNextComponentID$1
} = Recoil_Keys;
const {
  getNode: getNode$2,
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;
const {
  DefaultValue: DefaultValue$1
} = Recoil_Node;
const {
  reactMode: reactMode$1
} = Recoil_ReactMode;
const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;
const {
  invalidateMemoizedSnapshot: invalidateMemoizedSnapshot$1
} = Recoil_SnapshotCache;
function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT;
  const storeState = store.getState();
  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version)))
    ;
  const loadable = getNodeLoadable$1(store, treeState, key);
  if (loadable.state === "loading") {
    loadable.contents.catch(() => {
      return;
    });
  }
  return loadable;
}
function applyAtomValueWrites(atomValues, writes) {
  const result = atomValues.clone();
  writes.forEach((v2, k2) => {
    if (v2.state === "hasValue" && v2.contents instanceof DefaultValue$1) {
      result.delete(k2);
    } else {
      result.set(k2, v2);
    }
  });
  return result;
}
function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === "function") {
    const current = getNodeLoadable$1(store, state, key);
    if (current.state === "loading") {
      const msg = `Tried to set atom or selector "${key}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Recoil_err(msg);
    } else if (current.state === "hasError") {
      throw current.contents;
    }
    return valueOrUpdater(current.contents);
  } else {
    return valueOrUpdater;
  }
}
function applyAction(store, state, action) {
  if (action.type === "set") {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const writes = setNodeValue$1(store, state, recoilValue.key, newValue);
    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === "setLoadable") {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === "markModified") {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === "setUnvalidated") {
    var _node$invalidate;
    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}
function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === "hasValue" && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }
  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}
function applyActionsToStore(store, actions) {
  store.replaceState((state) => {
    const newState = copyTreeState(state);
    for (const action of actions) {
      applyAction(store, newState, action);
    }
    invalidateDownstreams(store, newState);
    invalidateMemoizedSnapshot$1();
    return newState;
  });
}
function queueOrPerformStateUpdate(store, action) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);
    if (!actions) {
      actionsByStore.set(store, actions = []);
    }
    actions.push(action);
  } else {
    applyActionsToStore(store, [action]);
  }
}
const batchStack = [];
function batchStart() {
  const actionsByStore = /* @__PURE__ */ new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      applyActionsToStore(store, actions);
    }
    batchStack.pop();
  };
}
function copyTreeState(state) {
  return {
    ...state,
    atomValues: state.atomValues.clone(),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(state.dirtyAtoms)
  };
}
function invalidateDownstreams(store, state) {
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);
  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;
    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}
function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: "set",
    recoilValue,
    valueOrUpdater
  });
}
function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }
  queueOrPerformStateUpdate(store, {
    type: "setLoadable",
    recoilValue,
    loadable
  });
}
function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: "markModified",
    recoilValue
  });
}
function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: "setUnvalidated",
    recoilValue,
    unvalidatedValue
  });
}
function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = getNextComponentID$1();
  const storeState = store.getState();
  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, /* @__PURE__ */ new Map());
  }
  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : "<not captured>", callback]);
  const mode = reactMode$1();
  if (mode.early && (mode.mode === "LEGACY" || mode.mode === "MUTABLE_SOURCE")) {
    const nextTree = store.getState().nextTree;
    if (nextTree && nextTree.dirtyAtoms.has(key)) {
      callback(nextTree);
    }
  }
  return {
    release: () => {
      const releaseStoreState = store.getState();
      const subs = releaseStoreState.nodeToComponentSubscriptions.get(key);
      if (subs === void 0 || !subs.has(subID)) {
        return;
      }
      subs.delete(subID);
      if (subs.size === 0) {
        releaseStoreState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}
function refreshRecoilValue(store, recoilValue) {
  var _node$clearCache;
  const {
    currentTree
  } = store.getState();
  const node = getNode$2(recoilValue.key);
  (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
}
var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  writeLoadableToTreeState,
  invalidateDownstreams,
  copyTreeState,
  refreshRecoilValue
};
function someSet(set, callback, context) {
  const iterator = set.entries();
  let current = iterator.next();
  while (!current.done) {
    const entry = current.value;
    if (callback.call(context, entry[1], entry[0], set)) {
      return true;
    }
    current = iterator.next();
  }
  return false;
}
var Recoil_someSet = someSet;
const {
  cleanUpNode: cleanUpNode$1
} = Recoil_FunctionalCore;
const {
  deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
  getNode: getNode$3
} = Recoil_Node;
const {
  RetentionZone: RetentionZone$2
} = Recoil_RetentionZone;
const SUSPENSE_TIMEOUT_MS = 12e4;
const emptySet$1 = /* @__PURE__ */ new Set();
function releaseRetainablesNowOnCurrentTree(store, retainables) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  if (storeState.nextTree) {
    return;
  }
  const nodes2 = /* @__PURE__ */ new Set();
  for (const r2 of retainables) {
    if (r2 instanceof RetentionZone$2) {
      for (const n2 of nodesRetainedByZone(storeState, r2)) {
        nodes2.add(n2);
      }
    } else {
      nodes2.add(r2);
    }
  }
  const releasableNodes = findReleasableNodes(store, nodes2);
  for (const node of releasableNodes) {
    releaseNode(store, treeState, node);
  }
}
function findReleasableNodes(store, searchFromNodes) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const graph2 = store.getGraph(treeState.version);
  const releasableNodes = /* @__PURE__ */ new Set();
  const nonReleasableNodes = /* @__PURE__ */ new Set();
  findReleasableNodesInner(searchFromNodes);
  return releasableNodes;
  function findReleasableNodesInner(searchFromNodes2) {
    const releasableNodesFoundThisIteration = /* @__PURE__ */ new Set();
    const downstreams = getDownstreamNodesInTopologicalOrder(
      store,
      treeState,
      searchFromNodes2,
      releasableNodes,
      // don't descend into these
      nonReleasableNodes
      // don't descend into these
    );
    for (const node of downstreams) {
      var _storeState$retention;
      if (getNode$3(node).retainedBy === "recoilRoot") {
        nonReleasableNodes.add(node);
        continue;
      }
      if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
        nonReleasableNodes.add(node);
        continue;
      }
      if (zonesThatCouldRetainNode(node).some((z2) => storeState.retention.referenceCounts.get(z2))) {
        nonReleasableNodes.add(node);
        continue;
      }
      const nodeChildren = graph2.nodeToNodeSubscriptions.get(node);
      if (nodeChildren && Recoil_someSet(nodeChildren, (child) => nonReleasableNodes.has(child))) {
        nonReleasableNodes.add(node);
        continue;
      }
      releasableNodes.add(node);
      releasableNodesFoundThisIteration.add(node);
    }
    const parents = /* @__PURE__ */ new Set();
    for (const node of releasableNodesFoundThisIteration) {
      for (const parent of (_graph$nodeDeps$get = graph2.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
        var _graph$nodeDeps$get;
        if (!releasableNodes.has(parent)) {
          parents.add(parent);
        }
      }
    }
    if (parents.size) {
      findReleasableNodesInner(parents);
    }
  }
}
function getDownstreamNodesInTopologicalOrder(store, treeState, nodes2, doNotDescendInto1, doNotDescendInto2) {
  const graph2 = store.getGraph(treeState.version);
  const answer = [];
  const visited = /* @__PURE__ */ new Set();
  while (nodes2.size > 0) {
    visit(Recoil_nullthrows(nodes2.values().next().value));
  }
  return answer;
  function visit(node) {
    if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
      nodes2.delete(node);
      return;
    }
    if (visited.has(node)) {
      return;
    }
    const children = graph2.nodeToNodeSubscriptions.get(node);
    if (children) {
      for (const child of children) {
        visit(child);
      }
    }
    visited.add(node);
    nodes2.delete(node);
    answer.push(node);
  }
}
function releaseNode(store, treeState, node) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  cleanUpNode$1(store, node);
  const storeState = store.getState();
  storeState.knownAtoms.delete(node);
  storeState.knownSelectors.delete(node);
  storeState.nodeTransactionSubscriptions.delete(node);
  storeState.retention.referenceCounts.delete(node);
  const zones = zonesThatCouldRetainNode(node);
  for (const zone of zones) {
    var _storeState$retention2;
    (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
  }
  treeState.atomValues.delete(node);
  treeState.dirtyAtoms.delete(node);
  treeState.nonvalidatedAtoms.delete(node);
  const graph2 = storeState.graphsByVersion.get(treeState.version);
  if (graph2) {
    const deps = graph2.nodeDeps.get(node);
    if (deps !== void 0) {
      graph2.nodeDeps.delete(node);
      for (const dep of deps) {
        var _graph$nodeToNodeSubs;
        (_graph$nodeToNodeSubs = graph2.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
      }
    }
    graph2.nodeToNodeSubscriptions.delete(node);
  }
  deleteNodeConfigIfPossible$1(node);
}
function nodesRetainedByZone(storeState, zone) {
  var _storeState$retention3;
  return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}
function zonesThatCouldRetainNode(node) {
  const retainedBy = getNode$3(node).retainedBy;
  if (retainedBy === void 0 || retainedBy === "components" || retainedBy === "recoilRoot") {
    return [];
  } else if (retainedBy instanceof RetentionZone$2) {
    return [retainedBy];
  } else {
    return retainedBy;
  }
}
function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
  const state = store.getState();
  if (state.nextTree) {
    state.retention.retainablesToCheckForRelease.add(retainable);
  } else {
    releaseRetainablesNowOnCurrentTree(store, /* @__PURE__ */ new Set([retainable]));
  }
}
function updateRetainCount(store, retainable, delta) {
  var _map$get;
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const map = store.getState().retention.referenceCounts;
  const newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;
  if (newCount === 0) {
    updateRetainCountToZero(store, retainable);
  } else {
    map.set(retainable, newCount);
  }
}
function updateRetainCountToZero(store, retainable) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const map = store.getState().retention.referenceCounts;
  map.delete(retainable);
  scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
}
function releaseScheduledRetainablesNow(store) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  const state = store.getState();
  releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
  state.retention.retainablesToCheckForRelease.clear();
}
function retainedByOptionWithDefault(r2) {
  return r2 === void 0 ? "recoilRoot" : r2;
}
var Recoil_Retention = {
  SUSPENSE_TIMEOUT_MS,
  updateRetainCount,
  updateRetainCountToZero,
  releaseScheduledRetainablesNow,
  retainedByOptionWithDefault
};
const {
  unstable_batchedUpdates
} = ReactDOM;
var ReactBatchedUpdates = {
  unstable_batchedUpdates
};
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = ReactBatchedUpdates;
var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1
};
const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;
const {
  unstable_batchedUpdates: unstable_batchedUpdates$2
} = Recoil_ReactBatchedUpdates;
let batcher = unstable_batchedUpdates$2 || ((batchFn) => batchFn());
const setBatcher = (newBatcher) => {
  batcher = newBatcher;
};
const getBatcher = () => batcher;
const batchUpdates = (callback) => {
  batcher(() => {
    let batchEnd = () => void 0;
    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};
var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};
function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}
var Recoil_concatIterables = concatIterables;
const isSSR = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window === "undefined" || typeof window === "undefined"
);
const isWindow = (value) => !isSSR && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
(value === window || value instanceof Window);
const isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var Recoil_Environment = {
  isSSR,
  isReactNative,
  isWindow
};
function memoizeWithArgsHash(fn, hashFunction) {
  let cache;
  return (...args) => {
    if (!cache) {
      cache = {};
    }
    const key = hashFunction(...args);
    if (!Object.hasOwnProperty.call(cache, key)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
function memoizeOneWithArgsHash(fn, hashFunction) {
  let lastKey;
  let lastResult;
  return (...args) => {
    const key = hashFunction(...args);
    if (lastKey === key) {
      return lastResult;
    }
    lastKey = key;
    lastResult = fn(...args);
    return lastResult;
  };
}
function memoizeOneWithArgsHashAndInvalidation(fn, hashFunction) {
  let lastKey;
  let lastResult;
  const memoizedFn = (...args) => {
    const key = hashFunction(...args);
    if (lastKey === key) {
      return lastResult;
    }
    lastKey = key;
    lastResult = fn(...args);
    return lastResult;
  };
  const invalidate = () => {
    lastKey = null;
  };
  return [memoizedFn, invalidate];
}
var Recoil_Memoize = {
  memoizeWithArgsHash,
  memoizeOneWithArgsHash,
  memoizeOneWithArgsHashAndInvalidation
};
const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;
const {
  initializeNode: initializeNode$1,
  peekNodeInfo: peekNodeInfo$1
} = Recoil_FunctionalCore;
const {
  graph: graph$1
} = Recoil_Graph;
const {
  getNextStoreID: getNextStoreID$1
} = Recoil_Keys;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1,
  recoilValuesForKeys: recoilValuesForKeys$2
} = Recoil_Node;
const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  updateRetainCount: updateRetainCount$1
} = Recoil_Retention;
const {
  setInvalidateMemoizedSnapshot: setInvalidateMemoizedSnapshot$1
} = Recoil_SnapshotCache;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State;
const {
  isSSR: isSSR$1
} = Recoil_Environment;
const {
  memoizeOneWithArgsHashAndInvalidation: memoizeOneWithArgsHashAndInvalidation$1
} = Recoil_Memoize;
class Snapshot {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(storeState, parentStoreID) {
    _defineProperty$1(this, "_store", void 0);
    _defineProperty$1(this, "_refCount", 1);
    _defineProperty$1(this, "getLoadable", (recoilValue) => {
      this.checkRefCount_INTERNAL();
      return getRecoilValueAsLoadable$1(this._store, recoilValue);
    });
    _defineProperty$1(this, "getPromise", (recoilValue) => {
      this.checkRefCount_INTERNAL();
      return this.getLoadable(recoilValue).toPromise();
    });
    _defineProperty$1(this, "getNodes_UNSTABLE", (opt) => {
      this.checkRefCount_INTERNAL();
      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }
        const state = this._store.getState().currentTree;
        return recoilValuesForKeys$2(state.dirtyAtoms);
      }
      const knownAtoms = this._store.getState().knownAtoms;
      const knownSelectors = this._store.getState().knownSelectors;
      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([knownAtoms, knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });
    _defineProperty$1(this, "getInfo_UNSTABLE", ({
      key
    }) => {
      this.checkRefCount_INTERNAL();
      return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
    });
    _defineProperty$1(this, "map", (mapper) => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mapper(mutableSnapshot);
      return mutableSnapshot;
    });
    _defineProperty$1(this, "asyncMap", async (mapper) => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mutableSnapshot.retain();
      await mapper(mutableSnapshot);
      mutableSnapshot.autoRelease_INTERNAL();
      return mutableSnapshot;
    });
    this._store = {
      storeID: getNextStoreID$1(),
      parentStoreID,
      getState: () => storeState,
      replaceState: (replacer) => {
        storeState.currentTree = replacer(storeState.currentTree);
      },
      getGraph: (version) => {
        const graphs = storeState.graphsByVersion;
        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }
        const newGraph = graph$1();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw Recoil_err("Cannot subscribe to Snapshots");
      }
    };
    for (const nodeKey of this._store.getState().knownAtoms) {
      initializeNode$1(this._store, nodeKey, "get");
      updateRetainCount$1(this._store, nodeKey, 1);
    }
    this.autoRelease_INTERNAL();
  }
  retain() {
    if (this._refCount <= 0)
      ;
    this._refCount++;
    let released = false;
    return () => {
      if (!released) {
        released = true;
        this._release();
      }
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    if (!isSSR$1) {
      window.setTimeout(() => this._release(), 10);
    }
  }
  _release() {
    this._refCount--;
    if (this._refCount === 0) {
      this._store.getState().nodeCleanupFunctions.forEach((cleanup) => cleanup());
      this._store.getState().nodeCleanupFunctions.clear();
      if (!Recoil_gkx("recoil_memory_managament_2020")) {
        return;
      }
    } else if (this._refCount < 0)
      ;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    if (Recoil_gkx("recoil_memory_managament_2020") && this._refCount <= 0)
      ;
  }
  getStore_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store;
  }
  getID() {
    this.checkRefCount_INTERNAL();
    return this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    this.checkRefCount_INTERNAL();
    return this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$2() : treeState.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: bumpVersion ? version : treeState.version,
      stateID: bumpVersion ? version : treeState.stateID,
      transactionMetadata: {
        ...treeState.transactionMetadata
      },
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: treeState.atomValues.clone(),
      nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(version, store.getGraph(treeState.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(Recoil_mapIterable(storeState.nodeCleanupFunctions.entries(), ([key]) => [key, () => {
    }]))
  };
}
function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
}
const [memoizedCloneSnapshot, invalidateMemoizedSnapshot$2] = memoizeOneWithArgsHashAndInvalidation$1(
  // $FlowFixMe[missing-local-annot]
  (store, version) => {
    var _storeState$nextTree;
    const storeState = store.getState();
    const treeState = version === "latest" ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
    return new Snapshot(cloneStoreState(store, treeState), store.storeID);
  },
  (store, version) => {
    var _store$getState$nextT, _store$getState$previ;
    return String(version) + String(store.storeID) + String((_store$getState$nextT = store.getState().nextTree) === null || _store$getState$nextT === void 0 ? void 0 : _store$getState$nextT.version) + String(store.getState().currentTree.version) + String((_store$getState$previ = store.getState().previousTree) === null || _store$getState$previ === void 0 ? void 0 : _store$getState$previ.version);
  }
);
setInvalidateMemoizedSnapshot$1(invalidateMemoizedSnapshot$2);
function cloneSnapshot(store, version = "latest") {
  const snapshot = memoizedCloneSnapshot(store, version);
  if (!snapshot.isRetained()) {
    invalidateMemoizedSnapshot$2();
    return memoizedCloneSnapshot(store, version);
  }
  return snapshot;
}
class MutableSnapshot extends Snapshot {
  constructor(snapshot, batch2) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true), snapshot.getStoreID());
    _defineProperty$1(this, "_batch", void 0);
    _defineProperty$1(this, "set", (recoilState, newValueOrUpdater) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
      });
    });
    _defineProperty$1(this, "reset", (recoilState) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
      });
    });
    _defineProperty$1(this, "setUnvalidatedAtomValues_DEPRECATED", (values2) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      batchUpdates$1(() => {
        for (const [k2, v2] of values2.entries()) {
          updateRetainCount$1(store, k2, 1);
          setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k2), v2);
        }
      });
    });
    this._batch = batch2;
  }
}
var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};
var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
var Recoil_Snapshot$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});
function unionSets(...sets) {
  const result = /* @__PURE__ */ new Set();
  for (const set of sets) {
    for (const value of set) {
      result.add(value);
    }
  }
  return result;
}
var Recoil_unionSets = unionSets;
const {
  useRef
} = React$1;
function useRefInitOnce(initialValue) {
  const ref = useRef(initialValue);
  if (ref.current === initialValue && typeof initialValue === "function") {
    ref.current = initialValue();
  }
  return ref;
}
var Recoil_useRefInitOnce = useRefInitOnce;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$3,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;
const {
  cleanUpNode: cleanUpNode$2,
  getDownstreamNodes: getDownstreamNodes$2,
  initializeNode: initializeNode$2,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;
const {
  graph: graph$2
} = Recoil_Graph;
const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;
const {
  getNextStoreID: getNextStoreID$2
} = Recoil_Keys;
const {
  createMutableSource: createMutableSource$1,
  reactMode: reactMode$2
} = Recoil_ReactMode;
const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;
const {
  releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
} = Recoil_Retention;
const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;
const {
  useCallback: useCallback$1,
  useContext,
  useEffect,
  useMemo: useMemo$1,
  useRef: useRef$1,
  useState
} = React$1;
function notInAContext() {
  throw Recoil_err("This component must be used inside a <RecoilRoot> component.");
}
const defaultStore = Object.freeze({
  storeID: getNextStoreID$2(),
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;
function startNextTreeIfNeeded(store) {
  if (stateReplacerIsBeingExecuted) {
    throw Recoil_err("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  }
  const storeState = store.getState();
  if (storeState.nextTree === null) {
    if (Recoil_gkx("recoil_memory_managament_2020") && Recoil_gkx("recoil_release_on_cascading_update_killswitch_2021")) {
      if (storeState.commitDepth > 0) {
        releaseScheduledRetainablesNow$1(store);
      }
    }
    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$3();
    storeState.nextTree = {
      ...storeState.currentTree,
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    };
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}
const AppContext$1 = React$1.createContext({
  current: defaultStore
});
const useStoreRef = () => useContext(AppContext$1);
const MutableSourceContext = React$1.createContext(null);
function useRecoilMutableSource() {
  const mutableSource = useContext(MutableSourceContext);
  return mutableSource;
}
function notifyComponents(store, storeState, treeState) {
  const dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);
  for (const key of dependentNodes) {
    const comps = storeState.nodeToComponentSubscriptions.get(key);
    if (comps) {
      for (const [_subID, [_debugName, callback]] of comps) {
        callback(treeState);
      }
    }
  }
}
function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const dirtyAtoms = treeState.dirtyAtoms;
  if (dirtyAtoms.size) {
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_2, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }
    for (const [_2, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    }
    if (!reactMode$2().early || storeState.suspendedComponentResolvers.size > 0) {
      notifyComponents(store, storeState, treeState);
      storeState.suspendedComponentResolvers.forEach((cb2) => cb2());
      storeState.suspendedComponentResolvers.clear();
    }
  }
  storeState.queuedComponentCallbacks_DEPRECATED.forEach((cb2) => cb2(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}
function endBatch(store) {
  const storeState = store.getState();
  storeState.commitDepth++;
  try {
    const {
      nextTree
    } = storeState;
    if (nextTree == null) {
      return;
    }
    storeState.previousTree = storeState.currentTree;
    storeState.currentTree = nextTree;
    storeState.nextTree = null;
    sendEndOfBatchNotifications(store);
    if (storeState.previousTree != null) {
      storeState.graphsByVersion.delete(storeState.previousTree.version);
    } else {
      Recoil_recoverableViolation("Ended batch with no previous state, which is unexpected", "recoil");
    }
    storeState.previousTree = null;
    if (Recoil_gkx("recoil_memory_managament_2020")) {
      if (nextTree == null) {
        releaseScheduledRetainablesNow$1(store);
      }
    }
  } finally {
    storeState.commitDepth--;
  }
}
function Batcher({
  setNotifyBatcherOfChange
}) {
  const storeRef = useStoreRef();
  const [, setState] = useState([]);
  setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    setNotifyBatcherOfChange(() => setState({}));
    return () => {
      setNotifyBatcherOfChange(() => {
      });
    };
  }, [setNotifyBatcherOfChange]);
  useEffect(() => {
    Recoil_Queue.enqueueExecution("Batcher", () => {
      endBatch(storeRef.current);
    });
  });
  return null;
}
function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    set: (atom2, value) => {
      const state = initial.currentTree;
      const writes = setNodeValue$2(store, state, atom2.key, value);
      const writtenNodes = new Set(writes.keys());
      const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();
      for (const n2 of writtenNodes) {
        nonvalidatedAtoms.delete(n2);
      }
      initial.currentTree = {
        ...state,
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      };
    },
    setUnvalidatedAtomValues: (atomValues) => {
      atomValues.forEach((v2, k2) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k2, v2);
      });
    }
  });
  return initial;
}
function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1(initializeState);
  const storeState = snapshot.getStore_INTERNAL().getState();
  snapshot.retain();
  storeState.nodeCleanupFunctions.forEach((cleanup) => cleanup());
  storeState.nodeCleanupFunctions.clear();
  return storeState;
}
let nextID = 0;
function RecoilRoot_INTERNAL({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  let storeStateRef;
  const getGraph = (version) => {
    const graphs = storeStateRef.current.graphsByVersion;
    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }
    const newGraph = graph$2();
    graphs.set(version, newGraph);
    return newGraph;
  };
  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id2 = nextID++;
      transactionSubscriptions.set(id2, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id2);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();
      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, /* @__PURE__ */ new Map());
      }
      const id2 = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id2, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);
          if (subs) {
            subs.delete(id2);
            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };
  const addTransactionMetadata = (metadata) => {
    startNextTreeIfNeeded(storeRef.current);
    for (const k2 of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k2] = metadata[k2];
    }
  };
  const replaceState = (replacer) => {
    startNextTreeIfNeeded(storeRef.current);
    const nextTree = Recoil_nullthrows(storeStateRef.current.nextTree);
    let replaced;
    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }
    if (replaced === nextTree) {
      return;
    }
    storeStateRef.current.nextTree = replaced;
    if (reactMode$2().early) {
      notifyComponents(storeRef.current, storeStateRef.current, replaced);
    }
    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };
  const notifyBatcherOfChange = useRef$1(null);
  const setNotifyBatcherOfChange = useCallback$1((x) => {
    notifyBatcherOfChange.current = x;
  }, [notifyBatcherOfChange]);
  const storeRef = Recoil_useRefInitOnce(() => storeProp !== null && storeProp !== void 0 ? storeProp : {
    storeID: getNextStoreID$2(),
    getState: () => storeStateRef.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  });
  if (storeProp != null) {
    storeRef.current = storeProp;
  }
  storeStateRef = Recoil_useRefInitOnce(() => initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(storeRef.current, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo$1(() => createMutableSource$1 === null || createMutableSource$1 === void 0 ? void 0 : createMutableSource$1(storeStateRef, () => storeStateRef.current.currentTree.version), [storeStateRef]);
  useEffect(() => {
    const store = storeRef.current;
    for (const atomKey of new Set(store.getState().knownAtoms)) {
      initializeNode$2(store, atomKey, "get");
    }
    return () => {
      for (const atomKey of store.getState().knownAtoms) {
        cleanUpNode$2(store, atomKey);
      }
    };
  }, [storeRef]);
  return /* @__PURE__ */ React$1.createElement(AppContext$1.Provider, {
    value: storeRef
  }, /* @__PURE__ */ React$1.createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /* @__PURE__ */ React$1.createElement(Batcher, {
    setNotifyBatcherOfChange
  }), children));
}
function RecoilRoot(props) {
  const {
    override,
    ...propsExceptOverride
  } = props;
  const ancestorStoreRef = useStoreRef();
  if (override === false && ancestorStoreRef.current !== defaultStore) {
    return props.children;
  }
  return /* @__PURE__ */ React$1.createElement(RecoilRoot_INTERNAL, propsExceptOverride);
}
function useRecoilStoreID() {
  return useStoreRef().current.storeID;
}
var Recoil_RecoilRoot = {
  RecoilRoot,
  useStoreRef,
  useRecoilMutableSource,
  useRecoilStoreID,
  notifyComponents_FOR_TESTING: notifyComponents,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};
function shallowArrayEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  if (a.length !== b2.length) {
    return false;
  }
  for (let i = 0, l2 = a.length; i < l2; i++) {
    if (a[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}
var Recoil_shallowArrayEqual = shallowArrayEqual;
const {
  useEffect: useEffect$1,
  useRef: useRef$2
} = React$1;
function usePrevious$1(value) {
  const ref = useRef$2();
  useEffect$1(() => {
    ref.current = value;
  });
  return ref.current;
}
var Recoil_usePrevious = usePrevious$1;
const {
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot;
const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$1
} = Recoil_Retention;
const {
  updateRetainCount: updateRetainCount$2
} = Recoil_Retention;
const {
  RetentionZone: RetentionZone$3
} = Recoil_RetentionZone;
const {
  useEffect: useEffect$2,
  useRef: useRef$3
} = React$1;
const {
  isSSR: isSSR$2
} = Recoil_Environment;
function useRetain(toRetain) {
  if (!Recoil_gkx("recoil_memory_managament_2020")) {
    return;
  }
  return useRetain_ACTUAL(toRetain);
}
function useRetain_ACTUAL(toRetain) {
  const array = Array.isArray(toRetain) ? toRetain : [toRetain];
  const retainables = array.map((a) => a instanceof RetentionZone$3 ? a : a.key);
  const storeRef = useStoreRef$1();
  useEffect$2(() => {
    if (!Recoil_gkx("recoil_memory_managament_2020")) {
      return;
    }
    const store = storeRef.current;
    if (timeoutID.current && !isSSR$2) {
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    } else {
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, 1);
      }
    }
    return () => {
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, -1);
      }
    };
  }, [storeRef, ...retainables]);
  const timeoutID = useRef$3();
  const previousRetainables = Recoil_usePrevious(retainables);
  if (!isSSR$2 && (previousRetainables === void 0 || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
    const store = storeRef.current;
    for (const r2 of retainables) {
      updateRetainCount$2(store, r2, 1);
    }
    if (previousRetainables) {
      for (const r2 of previousRetainables) {
        updateRetainCount$2(store, r2, -1);
      }
    }
    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
    }
    timeoutID.current = window.setTimeout(() => {
      timeoutID.current = null;
      for (const r2 of retainables) {
        updateRetainCount$2(store, r2, -1);
      }
    }, SUSPENSE_TIMEOUT_MS$1);
  }
}
var Recoil_useRetain = useRetain;
function useComponentName() {
  return "<component name not available>";
}
var Recoil_useComponentName = useComponentName;
const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$2
} = Recoil_Node;
const {
  currentRendererSupportsUseSyncExternalStore: currentRendererSupportsUseSyncExternalStore$1,
  reactMode: reactMode$3,
  useMutableSource: useMutableSource$1,
  useSyncExternalStore: useSyncExternalStore$1
} = Recoil_ReactMode;
const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot;
const {
  AbstractRecoilValue: AbstractRecoilValue$3,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  useCallback: useCallback$1$1,
  useEffect: useEffect$3,
  useMemo: useMemo$1$1,
  useRef: useRef$4,
  useState: useState$1
} = React$1;
const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;
const {
  isSSR: isSSR$3
} = Recoil_Environment;
function handleLoadable(loadable, recoilValue, storeRef) {
  if (loadable.state === "hasValue") {
    return loadable.contents;
  } else if (loadable.state === "loading") {
    const promise = new Promise((resolve) => {
      const suspendedComponentResolvers = storeRef.current.getState().suspendedComponentResolvers;
      suspendedComponentResolvers.add(resolve);
      if (isSSR$3 && Recoil_isPromise(loadable.contents)) {
        loadable.contents.finally(() => {
          suspendedComponentResolvers.delete(resolve);
        });
      }
    });
    throw promise;
  } else if (loadable.state === "hasError") {
    throw loadable.contents;
  } else {
    throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);
  }
}
function useRecoilInterface_DEPRECATED() {
  const componentName = Recoil_useComponentName();
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$4(/* @__PURE__ */ new Set());
  recoilValuesUsed.current = /* @__PURE__ */ new Set();
  const previousSubscriptions = useRef$4(/* @__PURE__ */ new Set());
  const subscriptions = useRef$4(/* @__PURE__ */ new Map());
  const unsubscribeFrom = useCallback$1$1((key) => {
    const sub = subscriptions.current.get(key);
    if (sub) {
      sub.release();
      subscriptions.current.delete(key);
    }
  }, [subscriptions]);
  const updateState = useCallback$1$1((_state, key) => {
    if (subscriptions.current.has(key)) {
      forceUpdate([]);
    }
  }, []);
  useEffect$3(() => {
    const store = storeRef.current;
    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach((key) => {
      if (subscriptions.current.has(key)) {
        return;
      }
      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), (state2) => updateState(state2, key), componentName);
      subscriptions.current.set(key, sub);
      const state = store.getState();
      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          updateState(store.getState(), key);
        });
      } else {
        updateState(store.getState(), key);
      }
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach((key) => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$3(() => {
    const currentSubscriptions = subscriptions.current;
    Recoil_differenceSets(recoilValuesUsed.current, new Set(currentSubscriptions.keys())).forEach((key) => {
      const sub = subscribeToRecoilValue$1(storeRef.current, new AbstractRecoilValue$3(key), (state) => updateState(state, key), componentName);
      currentSubscriptions.set(key, sub);
    });
    return () => currentSubscriptions.forEach((_2, key) => unsubscribeFrom(key));
  }, [componentName, storeRef, unsubscribeFrom, updateState]);
  return useMemo$1$1(() => {
    function useSetRecoilState2(recoilState) {
      return (newValueOrUpdater) => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    }
    function useResetRecoilState2(recoilState) {
      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }
    function useRecoilValueLoadable2(recoilValue) {
      var _storeState$nextTree;
      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      }
      const storeState = storeRef.current.getState();
      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, reactMode$3().early ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
    }
    function useRecoilValue2(recoilValue) {
      const loadable = useRecoilValueLoadable2(recoilValue);
      return handleLoadable(loadable, recoilValue, storeRef);
    }
    function useRecoilState2(recoilState) {
      return [useRecoilValue2(recoilState), useSetRecoilState2(recoilState)];
    }
    function useRecoilStateLoadable2(recoilState) {
      return [useRecoilValueLoadable2(recoilState), useSetRecoilState2(recoilState)];
    }
    return {
      getRecoilValue: useRecoilValue2,
      getRecoilValueLoadable: useRecoilValueLoadable2,
      getRecoilState: useRecoilState2,
      getRecoilStateLoadable: useRecoilStateLoadable2,
      getSetRecoilState: useSetRecoilState2,
      getResetRecoilState: useResetRecoilState2
    };
  }, [recoilValuesUsed, storeRef]);
}
const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};
function useRecoilValueLoadable_SYNC_EXTERNAL_STORE(recoilValue) {
  const storeRef = useStoreRef$2();
  const componentName = Recoil_useComponentName();
  const getSnapshot = useCallback$1$1(() => {
    var _storeState$nextTree2;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
    const loadable = getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    return {
      loadable,
      key: recoilValue.key
    };
  }, [storeRef, recoilValue]);
  const memoizePreviousSnapshot = useCallback$1$1((getState) => {
    let prevState;
    return () => {
      var _prevState, _prevState2;
      const nextState = getState();
      if ((_prevState = prevState) !== null && _prevState !== void 0 && _prevState.loadable.is(nextState.loadable) && ((_prevState2 = prevState) === null || _prevState2 === void 0 ? void 0 : _prevState2.key) === nextState.key) {
        return prevState;
      }
      prevState = nextState;
      return nextState;
    };
  }, []);
  const getMemoizedSnapshot = useMemo$1$1(() => memoizePreviousSnapshot(getSnapshot), [getSnapshot, memoizePreviousSnapshot]);
  const subscribe = useCallback$1$1((notify2) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, notify2, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName]);
  return useSyncExternalStore$1(
    subscribe,
    getMemoizedSnapshot,
    // getSnapshot()
    getMemoizedSnapshot
    // getServerSnapshot() for SSR support
  ).loadable;
}
function useRecoilValueLoadable_MUTABLE_SOURCE(recoilValue) {
  const storeRef = useStoreRef$2();
  const getLoadable = useCallback$1$1(() => {
    var _storeState$nextTree3;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree3 = storeState.nextTree) !== null && _storeState$nextTree3 !== void 0 ? _storeState$nextTree3 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getLoadableWithTesting = useCallback$1$1(() => {
    return getLoadable();
  }, [getLoadable]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback$1$1((_storeState, notify2) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return notify2();
      }
      const newLoadable = getLoadable();
      if (!prevLoadableRef.current.is(newLoadable)) {
        notify2();
      }
      prevLoadableRef.current = newLoadable;
    }, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName, getLoadable]);
  const source = useRecoilMutableSource$1();
  if (source == null) {
    throw Recoil_err("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  }
  const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
function useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue) {
  const storeRef = useStoreRef$2();
  const componentName = Recoil_useComponentName();
  const getLoadable = useCallback$1$1(() => {
    var _storeState$nextTree4;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree4 = storeState.nextTree) !== null && _storeState$nextTree4 !== void 0 ? _storeState$nextTree4 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getState = useCallback$1$1(() => ({
    loadable: getLoadable(),
    key: recoilValue.key
  }), [getLoadable, recoilValue.key]);
  const updateState = useCallback$1$1((prevState) => {
    const nextState = getState();
    return prevState.loadable.is(nextState.loadable) && prevState.key === nextState.key ? prevState : nextState;
  }, [getState]);
  useEffect$3(() => {
    const subscription = subscribeToRecoilValue$1(storeRef.current, recoilValue, (_state) => {
      setState(updateState);
    }, componentName);
    setState(updateState);
    return subscription.release;
  }, [componentName, recoilValue, storeRef, updateState]);
  const [state, setState] = useState$1(getState);
  return state.key !== recoilValue.key ? getState().loadable : state.loadable;
}
function useRecoilValueLoadable_LEGACY(recoilValue) {
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  const getLoadable = useCallback$1$1(() => {
    var _storeState$nextTree5;
    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = reactMode$3().early ? (_storeState$nextTree5 = storeState.nextTree) !== null && _storeState$nextTree5 !== void 0 ? _storeState$nextTree5 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const loadable = getLoadable();
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  useEffect$3(() => {
    const store = storeRef.current;
    const storeState = store.getState();
    const subscription = subscribeToRecoilValue$1(store, recoilValue, (_state) => {
      var _prevLoadableRef$curr;
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return forceUpdate([]);
      }
      const newLoadable = getLoadable();
      if (!((_prevLoadableRef$curr = prevLoadableRef.current) !== null && _prevLoadableRef$curr !== void 0 && _prevLoadableRef$curr.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
      prevLoadableRef.current = newLoadable;
    }, componentName);
    if (storeState.nextTree) {
      store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        prevLoadableRef.current = null;
        forceUpdate([]);
      });
    } else {
      var _prevLoadableRef$curr2;
      if (!Recoil_gkx("recoil_suppress_rerender_in_callback")) {
        return forceUpdate([]);
      }
      const newLoadable = getLoadable();
      if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) !== null && _prevLoadableRef$curr2 !== void 0 && _prevLoadableRef$curr2.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
      prevLoadableRef.current = newLoadable;
    }
    return subscription.release;
  }, [componentName, getLoadable, recoilValue, storeRef]);
  return loadable;
}
function useRecoilValueLoadable(recoilValue) {
  if (Recoil_gkx("recoil_memory_managament_2020")) {
    Recoil_useRetain(recoilValue);
  }
  return {
    TRANSITION_SUPPORT: useRecoilValueLoadable_TRANSITION_SUPPORT,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: currentRendererSupportsUseSyncExternalStore$1() ? useRecoilValueLoadable_SYNC_EXTERNAL_STORE : useRecoilValueLoadable_TRANSITION_SUPPORT,
    MUTABLE_SOURCE: useRecoilValueLoadable_MUTABLE_SOURCE,
    LEGACY: useRecoilValueLoadable_LEGACY
  }[reactMode$3().mode](recoilValue);
}
function useRecoilValue(recoilValue) {
  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
function useSetRecoilState(recoilState) {
  const storeRef = useStoreRef$2();
  return useCallback$1$1((newValueOrUpdater) => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
function useResetRecoilState(recoilState) {
  const storeRef = useStoreRef$2();
  return useCallback$1$1(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
function useRecoilState(recoilState) {
  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
function useRecoilStateLoadable(recoilState) {
  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}
function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$2();
  return (values2, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values2.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
    });
  };
}
function useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
  if (Recoil_gkx("recoil_memory_managament_2020")) {
    Recoil_useRetain(recoilValue);
  }
  return useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue);
}
function useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilValue) {
  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
function useRecoilState_TRANSITION_SUPPORT_UNSTABLE(recoilState) {
  return [useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilState), useSetRecoilState(recoilState)];
}
var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE
};
function filterMap(map, callback) {
  const result = /* @__PURE__ */ new Map();
  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }
  return result;
}
var Recoil_filterMap = filterMap;
function filterSet(set, callback) {
  const result = /* @__PURE__ */ new Set();
  for (const value of set) {
    if (callback(value)) {
      result.add(value);
    }
  }
  return result;
}
var Recoil_filterSet = filterSet;
function mergeMaps(...maps) {
  const result = /* @__PURE__ */ new Map();
  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;
    while (!(nextKey = iterator.next()).done) {
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  return result;
}
var Recoil_mergeMaps = mergeMaps;
const {
  batchUpdates: batchUpdates$3
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  getNode: getNode$4,
  nodes: nodes$1
} = Recoil_Node;
const {
  useStoreRef: useStoreRef$3
} = Recoil_RecoilRoot;
const {
  AbstractRecoilValue: AbstractRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$1
} = Recoil_RecoilValueInterface;
const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$2
} = Recoil_Retention;
const {
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;
const {
  useCallback: useCallback$2,
  useEffect: useEffect$4,
  useRef: useRef$5,
  useState: useState$2
} = React$1;
const {
  isSSR: isSSR$4
} = Recoil_Environment;
function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$3();
  useEffect$4(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}
function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues.toMap();
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v2, k2) => {
    const node = getNode$4(k2);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== "none" && v2.state === "hasValue";
  }), (v2) => v2.contents);
  return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback$2((store) => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;
    if (!previousTree) {
      previousTree = store.getState().currentTree;
    }
    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, (node) => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;
      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : "none",
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    });
    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, (k2) => atomValues.has(k2) || previousAtomValues.has(k2));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: {
        ...currentTree.transactionMetadata
      }
    });
  }, [callback]));
}
function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback$2((store) => {
    const snapshot = cloneSnapshot$1(store, "latest");
    const previousSnapshot = cloneSnapshot$1(store, "previous");
    callback({
      snapshot,
      previousSnapshot
    });
  }, [callback]));
}
function useRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  const [snapshot, setSnapshot] = useState$2(() => cloneSnapshot$1(storeRef.current));
  const previousSnapshot = Recoil_usePrevious(snapshot);
  const timeoutID = useRef$5();
  const releaseRef = useRef$5();
  useTransactionSubscription(useCallback$2((store) => setSnapshot(cloneSnapshot$1(store)), []));
  useEffect$4(() => {
    const release = snapshot.retain();
    if (timeoutID.current && !isSSR$4) {
      var _releaseRef$current;
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
      (_releaseRef$current = releaseRef.current) === null || _releaseRef$current === void 0 ? void 0 : _releaseRef$current.call(releaseRef);
      releaseRef.current = null;
    }
    return () => {
      window.setTimeout(release, 10);
    };
  }, [snapshot]);
  if (previousSnapshot !== snapshot && !isSSR$4) {
    if (timeoutID.current) {
      var _releaseRef$current2;
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
      (_releaseRef$current2 = releaseRef.current) === null || _releaseRef$current2 === void 0 ? void 0 : _releaseRef$current2.call(releaseRef);
      releaseRef.current = null;
    }
    releaseRef.current = snapshot.retain();
    timeoutID.current = window.setTimeout(() => {
      var _releaseRef$current3;
      timeoutID.current = null;
      (_releaseRef$current3 = releaseRef.current) === null || _releaseRef$current3 === void 0 ? void 0 : _releaseRef$current3.call(releaseRef);
      releaseRef.current = null;
    }, SUSPENSE_TIMEOUT_MS$2);
  }
  return snapshot;
}
function gotoSnapshot(store, snapshot) {
  var _storeState$nextTree;
  const storeState = store.getState();
  const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
  const next = snapshot.getStore_INTERNAL().getState().currentTree;
  batchUpdates$3(() => {
    const keysToUpdate = /* @__PURE__ */ new Set();
    for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
      for (const key of keys) {
        var _prev$atomValues$get, _next$atomValues$get;
        if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$4(key).shouldRestoreFromSnapshots) {
          keysToUpdate.add(key);
        }
      }
    }
    keysToUpdate.forEach((key) => {
      setRecoilValueLoadable$1(store, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
    });
    store.replaceState((state) => ({
      ...state,
      stateID: snapshot.getID()
    }));
  });
}
function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  return useCallback$2((snapshot) => gotoSnapshot(storeRef.current, snapshot), [storeRef]);
}
var Recoil_SnapshotHooks = {
  useRecoilSnapshot,
  gotoSnapshot,
  useGotoRecoilSnapshot,
  useRecoilTransactionObserver,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};
const {
  peekNodeInfo: peekNodeInfo$2
} = Recoil_FunctionalCore;
const {
  useStoreRef: useStoreRef$4
} = Recoil_RecoilRoot;
function useGetRecoilValueInfo() {
  const storeRef = useStoreRef$4();
  return ({
    key
  }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
}
var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;
const {
  reactMode: reactMode$4
} = Recoil_ReactMode;
const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$5
} = Recoil_RecoilRoot;
const {
  useMemo: useMemo$2
} = React$1;
function useRecoilBridgeAcrossReactRoots() {
  if (reactMode$4().mode === "MUTABLE_SOURCE") {
    console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
  }
  const store = useStoreRef$5().current;
  return useMemo$2(() => {
    function RecoilBridge({
      children
    }) {
      return /* @__PURE__ */ React$1.createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }
    return RecoilBridge;
  }, [store]);
}
var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;
const {
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable$1;
const {
  initializeNode: initializeNode$3
} = Recoil_FunctionalCore;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  getNode: getNode$5
} = Recoil_Node;
const {
  copyTreeState: copyTreeState$1,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
  invalidateDownstreams: invalidateDownstreams$1,
  writeLoadableToTreeState: writeLoadableToTreeState$1
} = Recoil_RecoilValueInterface;
function isAtom(recoilValue) {
  return getNode$5(recoilValue.key).nodeType === "atom";
}
class TransactionInterfaceImpl {
  constructor(store, treeState) {
    _defineProperty$1(this, "_store", void 0);
    _defineProperty$1(this, "_treeState", void 0);
    _defineProperty$1(this, "_changes", void 0);
    _defineProperty$1(this, "get", (recoilValue) => {
      if (this._changes.has(recoilValue.key)) {
        return this._changes.get(recoilValue.key);
      }
      if (!isAtom(recoilValue)) {
        throw Recoil_err("Reading selectors within atomicUpdate is not supported");
      }
      const loadable = getRecoilValueAsLoadable$3(this._store, recoilValue, this._treeState);
      if (loadable.state === "hasValue") {
        return loadable.contents;
      } else if (loadable.state === "hasError") {
        throw loadable.contents;
      } else {
        throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);
      }
    });
    _defineProperty$1(this, "set", (recoilState, valueOrUpdater) => {
      if (!isAtom(recoilState)) {
        throw Recoil_err("Setting selectors within atomicUpdate is not supported");
      }
      if (typeof valueOrUpdater === "function") {
        const current = this.get(recoilState);
        this._changes.set(recoilState.key, valueOrUpdater(current));
      } else {
        initializeNode$3(this._store, recoilState.key, "set");
        this._changes.set(recoilState.key, valueOrUpdater);
      }
    });
    _defineProperty$1(this, "reset", (recoilState) => {
      this.set(recoilState, DEFAULT_VALUE$4);
    });
    this._store = store;
    this._treeState = treeState;
    this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) {
      return this._treeState;
    }
    const newState = copyTreeState$1(this._treeState);
    for (const [k2, v2] of this._changes) {
      writeLoadableToTreeState$1(newState, k2, loadableWithValue$1(v2));
    }
    invalidateDownstreams$1(this._store, newState);
    return newState;
  }
}
function atomicUpdater(store) {
  return (fn) => {
    store.replaceState((treeState) => {
      const changeset = new TransactionInterfaceImpl(store, treeState);
      fn(changeset);
      return changeset.newTreeState_INTERNAL();
    });
  };
}
var Recoil_AtomicUpdates = {
  atomicUpdater
};
var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;
var Recoil_AtomicUpdates$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: Recoil_AtomicUpdates_1
});
function invariant$2(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
var invariant_1 = invariant$2;
var Recoil_invariant = invariant_1;
const {
  atomicUpdater: atomicUpdater$1
} = Recoil_AtomicUpdates$1;
const {
  batchUpdates: batchUpdates$4
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$5
} = Recoil_Node;
const {
  useStoreRef: useStoreRef$6
} = Recoil_RecoilRoot;
const {
  refreshRecoilValue: refreshRecoilValue$1,
  setRecoilValue: setRecoilValue$3
} = Recoil_RecoilValueInterface;
const {
  cloneSnapshot: cloneSnapshot$2
} = Recoil_Snapshot$1;
const {
  gotoSnapshot: gotoSnapshot$1
} = Recoil_SnapshotHooks;
const {
  useCallback: useCallback$3
} = React$1;
class Sentinel {
}
const SENTINEL = new Sentinel();
function recoilCallback(store, fn, args, extraInterface) {
  let ret = SENTINEL;
  let releaseSnapshot;
  batchUpdates$4(() => {
    const errMsg = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof fn !== "function") {
      throw Recoil_err(errMsg);
    }
    const callbackInterface = Recoil_lazyProxy({
      ...extraInterface !== null && extraInterface !== void 0 ? extraInterface : {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: (node, newValue) => setRecoilValue$3(store, node, newValue),
      // $FlowFixMe[missing-local-annot]
      reset: (node) => setRecoilValue$3(store, node, DEFAULT_VALUE$5),
      // $FlowFixMe[missing-local-annot]
      refresh: (node) => refreshRecoilValue$1(store, node),
      gotoSnapshot: (snapshot) => gotoSnapshot$1(store, snapshot),
      transact_UNSTABLE: (transaction) => atomicUpdater$1(store)(transaction)
    }, {
      snapshot: () => {
        const snapshot = cloneSnapshot$2(store);
        releaseSnapshot = snapshot.retain();
        return snapshot;
      }
    });
    const callback = fn(callbackInterface);
    if (typeof callback !== "function") {
      throw Recoil_err(errMsg);
    }
    ret = callback(...args);
  });
  !!(ret instanceof Sentinel) ? Recoil_invariant(false) : void 0;
  if (Recoil_isPromise(ret)) {
    ret = ret.finally(() => {
      var _releaseSnapshot;
      (_releaseSnapshot = releaseSnapshot) === null || _releaseSnapshot === void 0 ? void 0 : _releaseSnapshot();
    });
  } else {
    var _releaseSnapshot2;
    (_releaseSnapshot2 = releaseSnapshot) === null || _releaseSnapshot2 === void 0 ? void 0 : _releaseSnapshot2();
  }
  return ret;
}
function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$6();
  return useCallback$3(
    // $FlowIssue[incompatible-call]
    (...args) => {
      return recoilCallback(storeRef.current, fn, args);
    },
    deps != null ? [...deps, storeRef] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var Recoil_useRecoilCallback = {
  recoilCallback,
  useRecoilCallback
};
const {
  useStoreRef: useStoreRef$7
} = Recoil_RecoilRoot;
const {
  refreshRecoilValue: refreshRecoilValue$2
} = Recoil_RecoilValueInterface;
const {
  useCallback: useCallback$4
} = React$1;
function useRecoilRefresher(recoilValue) {
  const storeRef = useStoreRef$7();
  return useCallback$4(() => {
    const store = storeRef.current;
    refreshRecoilValue$2(store, recoilValue);
  }, [recoilValue, storeRef]);
}
var Recoil_useRecoilRefresher = useRecoilRefresher;
const {
  atomicUpdater: atomicUpdater$2
} = Recoil_AtomicUpdates$1;
const {
  useStoreRef: useStoreRef$8
} = Recoil_RecoilRoot;
const {
  useMemo: useMemo$3
} = React$1;
function useRecoilTransaction(fn, deps) {
  const storeRef = useStoreRef$8();
  return useMemo$3(
    () => (...args) => {
      const atomicUpdate = atomicUpdater$2(storeRef.current);
      atomicUpdate((transactionInterface) => {
        fn(transactionInterface)(...args);
      });
    },
    deps != null ? [...deps, storeRef] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var Recoil_useRecoilTransaction = useRecoilTransaction;
class WrappedValue {
  constructor(value) {
    _defineProperty$1(this, "value", void 0);
    this.value = value;
  }
}
var Recoil_Wrapper = {
  WrappedValue
};
var Recoil_Wrapper_1 = Recoil_Wrapper.WrappedValue;
var Recoil_Wrapper$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: Recoil_Wrapper_1
});
const {
  isFastRefreshEnabled: isFastRefreshEnabled$2
} = Recoil_ReactMode;
class ChangedPathError extends Error {
}
class TreeCache {
  // $FlowIssue[unclear-type]
  constructor(options) {
    var _options$onHit, _options$onSet, _options$mapNodeValue;
    _defineProperty$1(this, "_name", void 0);
    _defineProperty$1(this, "_numLeafs", void 0);
    _defineProperty$1(this, "_root", void 0);
    _defineProperty$1(this, "_onHit", void 0);
    _defineProperty$1(this, "_onSet", void 0);
    _defineProperty$1(this, "_mapNodeValue", void 0);
    this._name = options === null || options === void 0 ? void 0 : options.name;
    this._numLeafs = 0;
    this._root = null;
    this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {
    };
    this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {
    };
    this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : (val) => val;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(getNodeValue, handlers) {
    var _this$getLeafNode;
    return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
  }
  getLeafNode(getNodeValue, handlers) {
    if (this._root == null) {
      return void 0;
    }
    let node = this._root;
    while (node) {
      handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);
      if (node.type === "leaf") {
        this._onHit(node);
        return node;
      }
      const nodeValue = this._mapNodeValue(getNodeValue(node.nodeKey));
      node = node.branches.get(nodeValue);
    }
    return void 0;
  }
  set(route, value, handlers) {
    const addLeaf = () => {
      var _node2, _node3, _this$_root2, _handlers$onNodeVisit2;
      let node;
      let branchKey;
      for (const [nodeKey, nodeValue] of route) {
        var _node, _handlers$onNodeVisit, _this$_root;
        const root = this._root;
        if ((root === null || root === void 0 ? void 0 : root.type) === "leaf") {
          throw this.invalidCacheError();
        }
        const parent = node;
        node = parent ? parent.branches.get(branchKey) : root;
        node = (_node = node) !== null && _node !== void 0 ? _node : {
          type: "branch",
          nodeKey,
          parent,
          branches: /* @__PURE__ */ new Map(),
          branchKey
        };
        if (node.type !== "branch" || node.nodeKey !== nodeKey) {
          throw this.invalidCacheError();
        }
        parent === null || parent === void 0 ? void 0 : parent.branches.set(branchKey, node);
        handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, node);
        branchKey = this._mapNodeValue(nodeValue);
        this._root = (_this$_root = this._root) !== null && _this$_root !== void 0 ? _this$_root : node;
      }
      const oldLeaf = node ? (_node2 = node) === null || _node2 === void 0 ? void 0 : _node2.branches.get(branchKey) : this._root;
      if (oldLeaf != null && (oldLeaf.type !== "leaf" || oldLeaf.branchKey !== branchKey)) {
        throw this.invalidCacheError();
      }
      const leafNode = {
        type: "leaf",
        value,
        parent: node,
        branchKey
      };
      (_node3 = node) === null || _node3 === void 0 ? void 0 : _node3.branches.set(branchKey, leafNode);
      this._root = (_this$_root2 = this._root) !== null && _this$_root2 !== void 0 ? _this$_root2 : leafNode;
      this._numLeafs++;
      this._onSet(leafNode);
      handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, leafNode);
    };
    try {
      addLeaf();
    } catch (error) {
      if (error instanceof ChangedPathError) {
        this.clear();
        addLeaf();
      } else {
        throw error;
      }
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(leaf) {
    const root = this.root();
    if (!root) {
      return false;
    }
    if (leaf === root) {
      this._root = null;
      this._numLeafs = 0;
      return true;
    }
    let node = leaf.parent;
    let branchKey = leaf.branchKey;
    while (node) {
      var _node4;
      node.branches.delete(branchKey);
      if (node === root) {
        if (node.branches.size === 0) {
          this._root = null;
          this._numLeafs = 0;
        } else {
          this._numLeafs--;
        }
        return true;
      }
      if (node.branches.size > 0) {
        break;
      }
      branchKey = (_node4 = node) === null || _node4 === void 0 ? void 0 : _node4.branchKey;
      node = node.parent;
    }
    for (; node !== root; node = node.parent) {
      if (node == null) {
        return false;
      }
    }
    this._numLeafs--;
    return true;
  }
  clear() {
    this._numLeafs = 0;
    this._root = null;
  }
  invalidCacheError() {
    const CHANGED_PATH_ERROR_MESSAGE = isFastRefreshEnabled$2() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    Recoil_recoverableViolation(CHANGED_PATH_ERROR_MESSAGE + (this._name != null ? ` - ${this._name}` : ""));
    throw new ChangedPathError();
  }
}
var Recoil_TreeCache = {
  TreeCache
};
var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;
var Recoil_TreeCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: Recoil_TreeCache_1
});
class LRUCache {
  constructor(options) {
    var _options$mapKey;
    _defineProperty$1(this, "_maxSize", void 0);
    _defineProperty$1(this, "_size", void 0);
    _defineProperty$1(this, "_head", void 0);
    _defineProperty$1(this, "_tail", void 0);
    _defineProperty$1(this, "_map", void 0);
    _defineProperty$1(this, "_keyMapper", void 0);
    this._maxSize = options.maxSize;
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = /* @__PURE__ */ new Map();
    this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(key) {
    return this._map.has(this._keyMapper(key));
  }
  get(key) {
    const mappedKey = this._keyMapper(key);
    const node = this._map.get(mappedKey);
    if (!node) {
      return void 0;
    }
    this.set(key, node.value);
    return node.value;
  }
  set(key, val) {
    const mappedKey = this._keyMapper(key);
    const existingNode = this._map.get(mappedKey);
    if (existingNode) {
      this.delete(key);
    }
    const head = this.head();
    const node = {
      key,
      right: head,
      left: null,
      value: val
    };
    if (head) {
      head.left = node;
    } else {
      this._tail = node;
    }
    this._map.set(mappedKey, node);
    this._head = node;
    this._size++;
    this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    if (this.size() > this.maxSize()) {
      this.deleteLru();
    }
  }
  deleteLru() {
    const tail = this.tail();
    if (tail) {
      this.delete(tail.key);
    }
  }
  delete(key) {
    const mappedKey = this._keyMapper(key);
    if (!this._size || !this._map.has(mappedKey)) {
      return;
    }
    const node = Recoil_nullthrows(this._map.get(mappedKey));
    const right = node.right;
    const left = node.left;
    if (right) {
      right.left = node.left;
    }
    if (left) {
      left.right = node.right;
    }
    if (node === this.head()) {
      this._head = right;
    }
    if (node === this.tail()) {
      this._tail = left;
    }
    this._map.delete(mappedKey);
    this._size--;
  }
  clear() {
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = /* @__PURE__ */ new Map();
  }
}
var Recoil_LRUCache = {
  LRUCache
};
var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;
var Recoil_LRUCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: Recoil_LRUCache_1
});
const {
  LRUCache: LRUCache$1
} = Recoil_LRUCache$1;
const {
  TreeCache: TreeCache$1
} = Recoil_TreeCache$1;
function treeCacheLRU({
  name,
  maxSize,
  mapNodeValue = (v2) => v2
}) {
  const lruCache = new LRUCache$1({
    maxSize
  });
  const cache = new TreeCache$1({
    name,
    mapNodeValue,
    onHit: (node) => {
      lruCache.set(node, true);
    },
    onSet: (node) => {
      const lruNode = lruCache.tail();
      lruCache.set(node, true);
      if (lruNode && cache.size() > maxSize) {
        cache.delete(lruNode.key);
      }
    }
  });
  return cache;
}
var Recoil_treeCacheLRU = treeCacheLRU;
function stringify(x, opt, key) {
  if (typeof x === "string" && !x.includes('"') && !x.includes("\\")) {
    return `"${x}"`;
  }
  switch (typeof x) {
    case "undefined":
      return "";
    case "boolean":
      return x ? "true" : "false";
    case "number":
    case "symbol":
      return String(x);
    case "string":
      return JSON.stringify(x);
    case "function":
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw Recoil_err("Attempt to serialize function in a Recoil cache key");
      }
      return `__FUNCTION(${x.name})__`;
  }
  if (x === null) {
    return "null";
  }
  if (typeof x !== "object") {
    var _JSON$stringify;
    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "";
  }
  if (Recoil_isPromise(x)) {
    return "__PROMISE__";
  }
  if (Array.isArray(x)) {
    return `[${x.map((v2, i) => stringify(v2, opt, i.toString()))}]`;
  }
  if (typeof x.toJSON === "function") {
    return stringify(x.toJSON(key), opt, key);
  }
  if (x instanceof Map) {
    const obj = {};
    for (const [k2, v2] of x) {
      obj[typeof k2 === "string" ? k2 : stringify(k2, opt)] = v2;
    }
    return stringify(obj, opt, key);
  }
  if (x instanceof Set) {
    return stringify(
      // $FlowFixMe[missing-local-annot]
      Array.from(x).sort((a, b2) => stringify(a, opt).localeCompare(stringify(b2, opt))),
      opt,
      key
    );
  }
  if (Symbol !== void 0 && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === "function") {
    return stringify(Array.from(x), opt, key);
  }
  return `{${Object.keys(x).filter((k2) => x[k2] !== void 0).sort().map((k2) => `${stringify(k2, opt)}:${stringify(x[k2], opt, k2)}`).join(",")}}`;
}
function stableStringify(x, opt = {
  allowFunctions: false
}) {
  return stringify(x, opt);
}
var Recoil_stableStringify = stableStringify;
const {
  TreeCache: TreeCache$2
} = Recoil_TreeCache$1;
const defaultPolicy = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: Infinity
};
function treeCacheFromPolicy({
  equality = defaultPolicy.equality,
  eviction = defaultPolicy.eviction,
  maxSize = defaultPolicy.maxSize
} = defaultPolicy, name) {
  const valueMapper = getValueMapper(equality);
  return getTreeCache(eviction, maxSize, valueMapper, name);
}
function getValueMapper(equality) {
  switch (equality) {
    case "reference":
      return (val) => val;
    case "value":
      return (val) => Recoil_stableStringify(val);
  }
  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}
function getTreeCache(eviction, maxSize, mapNodeValue, name) {
  switch (eviction) {
    case "keep-all":
      return new TreeCache$2({
        name,
        mapNodeValue
      });
    case "lru":
      return Recoil_treeCacheLRU({
        name,
        maxSize: Recoil_nullthrows(maxSize),
        mapNodeValue
      });
    case "most-recent":
      return Recoil_treeCacheLRU({
        name,
        maxSize: 1,
        mapNodeValue
      });
  }
  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}
var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;
function startPerfBlock(_id) {
  return () => null;
}
var Recoil_PerformanceTimings = {
  startPerfBlock
};
const {
  isLoadable: isLoadable$1,
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable$1;
const {
  WrappedValue: WrappedValue$1
} = Recoil_Wrapper$1;
const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$1,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;
const {
  saveDepsToStore: saveDepsToStore$1
} = Recoil_Graph;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$6,
  getConfigDeletionHandler: getConfigDeletionHandler$1,
  getNode: getNode$6,
  registerNode: registerNode$1
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;
const {
  markRecoilValueModified: markRecoilValueModified$1
} = Recoil_RecoilValueInterface;
const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$1
} = Recoil_Retention;
const {
  recoilCallback: recoilCallback$1
} = Recoil_useRecoilCallback;
const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings;
class Canceled {
}
const CANCELED = new Canceled();
const dependencyStack = [];
const waitingStores = /* @__PURE__ */ new Map();
const getNewExecutionID = (() => {
  let executionID = 0;
  return () => executionID++;
})();
function selector(options) {
  let recoilValue = null;
  const {
    key,
    get: get2,
    cachePolicy_UNSTABLE: cachePolicy
  } = options;
  const set = options.set != null ? options.set : void 0;
  const discoveredDependencyNodeKeys = /* @__PURE__ */ new Set();
  const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
    equality: "reference",
    eviction: "keep-all"
  }, key);
  const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
  const executionInfoMap = /* @__PURE__ */ new Map();
  let liveStoresCount = 0;
  function selectorIsLive() {
    return !Recoil_gkx("recoil_memory_managament_2020") || liveStoresCount > 0;
  }
  function selectorInit(store) {
    store.getState().knownSelectors.add(key);
    liveStoresCount++;
    return () => {
      liveStoresCount--;
    };
  }
  function selectorShouldDeleteConfigOnRelease() {
    return getConfigDeletionHandler$1(key) !== void 0 && !selectorIsLive();
  }
  function resolveAsync(store, state, executionID, loadable, depValues) {
    setCache(state, loadable, depValues);
    notifyStoresOfResolvedAsync(store, executionID);
  }
  function notifyStoresOfResolvedAsync(store, executionID) {
    if (isLatestExecution(store, executionID)) {
      clearExecutionInfo(store);
    }
    notifyWaitingStores(executionID, true);
  }
  function notifyStoresOfNewAsyncDep(store, executionID) {
    if (isLatestExecution(store, executionID)) {
      const executionInfo = Recoil_nullthrows(getExecutionInfo(store));
      executionInfo.stateVersions.clear();
      notifyWaitingStores(executionID, false);
    }
  }
  function notifyWaitingStores(executionID, clearWaitlist) {
    const stores = waitingStores.get(executionID);
    if (stores != null) {
      for (const waitingStore of stores) {
        markRecoilValueModified$1(waitingStore, Recoil_nullthrows(recoilValue));
      }
      if (clearWaitlist) {
        waitingStores.delete(executionID);
      }
    }
  }
  function markStoreWaitingForResolvedAsync(store, executionID) {
    let stores = waitingStores.get(executionID);
    if (stores == null) {
      waitingStores.set(executionID, stores = /* @__PURE__ */ new Set());
    }
    stores.add(store);
  }
  function wrapResultPromise(store, promise, state, depValues, executionID, loadingDepsState) {
    return promise.then((value) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      const loadable = loadableWithValue$2(value);
      resolveAsync(store, state, executionID, loadable, depValues);
      return value;
    }).catch((errorOrPromise) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionID, loadingDepsState);
      }
      const loadable = loadableWithError$1(errorOrPromise);
      resolveAsync(store, state, executionID, loadable, depValues);
      throw errorOrPromise;
    });
  }
  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionID, loadingDepsState) {
    return promise.then((resolvedDep) => {
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
        state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
      } else {
        store.getState().knownSelectors.forEach((nodeKey) => {
          state.atomValues.delete(nodeKey);
        });
      }
      const cachedLoadable = getLoadableFromCacheAndUpdateDeps(store, state);
      if (cachedLoadable && cachedLoadable.state !== "loading") {
        if (isLatestExecution(store, executionID) || getExecutionInfo(store) == null) {
          notifyStoresOfResolvedAsync(store, executionID);
        }
        if (cachedLoadable.state === "hasValue") {
          return cachedLoadable.contents;
        } else {
          throw cachedLoadable.contents;
        }
      }
      if (!isLatestExecution(store, executionID)) {
        const executionInfo = getInProgressExecutionInfo(store, state);
        if (executionInfo != null) {
          return executionInfo.loadingLoadable.contents;
        }
      }
      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionID);
      if (loadable.state !== "loading") {
        resolveAsync(store, state, executionID, loadable, depValues);
      }
      if (loadable.state === "hasError") {
        throw loadable.contents;
      }
      return loadable.contents;
    }).catch((error) => {
      if (error instanceof Canceled) {
        throw CANCELED;
      }
      if (!selectorIsLive()) {
        clearExecutionInfo(store);
        throw CANCELED;
      }
      const loadable = loadableWithError$1(error);
      resolveAsync(store, state, executionID, loadable, existingDeps);
      throw error;
    });
  }
  function updateDeps(store, state, deps, executionID) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;
    if (isLatestExecution(store, executionID) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;
      saveDepsToStore$1(key, deps, store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
    for (const nodeKey of deps) {
      discoveredDependencyNodeKeys.add(nodeKey);
    }
  }
  function evaluateSelectorGetter(store, state, executionID) {
    const endPerfBlock = startPerfBlock$1(key);
    let duringSynchronousExecution = true;
    let duringAsynchronousExecution = true;
    const finishEvaluation = () => {
      endPerfBlock();
      duringAsynchronousExecution = false;
    };
    let result;
    let resultIsError = false;
    let loadable;
    const loadingDepsState = {
      loadingDepKey: null,
      loadingDepPromise: null
    };
    const depValues = /* @__PURE__ */ new Map();
    function getRecoilValue({
      key: depKey
    }) {
      const depLoadable = getNodeLoadable$2(store, state, depKey);
      depValues.set(depKey, depLoadable);
      if (!duringSynchronousExecution) {
        updateDeps(store, state, new Set(depValues.keys()), executionID);
        notifyStoresOfNewAsyncDep(store, executionID);
      }
      switch (depLoadable.state) {
        case "hasValue":
          return depLoadable.contents;
        case "hasError":
          throw depLoadable.contents;
        case "loading":
          loadingDepsState.loadingDepKey = depKey;
          loadingDepsState.loadingDepPromise = depLoadable.contents;
          throw depLoadable.contents;
      }
      throw Recoil_err("Invalid Loadable state");
    }
    const getCallback = (fn) => {
      return (...args) => {
        if (duringAsynchronousExecution) {
          throw Recoil_err("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
        }
        !(recoilValue != null) ? Recoil_invariant(false) : void 0;
        return recoilCallback$1(
          store,
          fn,
          args,
          {
            node: recoilValue
          }
          // flowlint-line unclear-type:off
        );
      };
    };
    try {
      result = get2({
        get: getRecoilValue,
        getCallback
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
      if (isLoadable$1(result)) {
        if (result.state === "hasError") {
          resultIsError = true;
        }
        result = result.contents;
      }
      if (Recoil_isPromise(result)) {
        result = wrapResultPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
      } else {
        finishEvaluation();
      }
      result = result instanceof WrappedValue$1 ? result.value : result;
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;
      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, result, state, depValues, executionID, loadingDepsState).finally(finishEvaluation);
      } else {
        resultIsError = true;
        finishEvaluation();
      }
    }
    if (resultIsError) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$2(result);
    }
    duringSynchronousExecution = false;
    updateExecutionInfoDepValues(store, executionID, depValues);
    updateDeps(store, state, new Set(depValues.keys()), executionID);
    return [loadable, depValues];
  }
  function getLoadableFromCacheAndUpdateDeps(store, state) {
    let cachedLoadable = state.atomValues.get(key);
    if (cachedLoadable != null) {
      return cachedLoadable;
    }
    const depsAfterCacheLookup = /* @__PURE__ */ new Set();
    try {
      cachedLoadable = cache.get((nodeKey) => {
        !(typeof nodeKey === "string") ? false ? Recoil_invariant(false, "Cache nodeKey is type string") : Recoil_invariant(false) : void 0;
        return getNodeLoadable$2(store, state, nodeKey).contents;
      }, {
        onNodeVisit: (node) => {
          if (node.type === "branch" && node.nodeKey !== key) {
            depsAfterCacheLookup.add(node.nodeKey);
          }
        }
      });
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);
    }
    if (cachedLoadable) {
      var _getExecutionInfo;
      state.atomValues.set(key, cachedLoadable);
      updateDeps(store, state, depsAfterCacheLookup, (_getExecutionInfo = getExecutionInfo(store)) === null || _getExecutionInfo === void 0 ? void 0 : _getExecutionInfo.executionID);
    }
    return cachedLoadable;
  }
  function getSelectorLoadableAndUpdateDeps(store, state) {
    const cachedVal = getLoadableFromCacheAndUpdateDeps(store, state);
    if (cachedVal != null) {
      clearExecutionInfo(store);
      return cachedVal;
    }
    const inProgressExecutionInfo = getInProgressExecutionInfo(store, state);
    if (inProgressExecutionInfo != null) {
      var _inProgressExecutionI;
      if (((_inProgressExecutionI = inProgressExecutionInfo.loadingLoadable) === null || _inProgressExecutionI === void 0 ? void 0 : _inProgressExecutionI.state) === "loading") {
        markStoreWaitingForResolvedAsync(store, inProgressExecutionInfo.executionID);
      }
      return inProgressExecutionInfo.loadingLoadable;
    }
    const newExecutionID = getNewExecutionID();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionID);
    if (loadable.state === "loading") {
      setExecutionInfo(store, newExecutionID, loadable, newDepValues, state);
      markStoreWaitingForResolvedAsync(store, newExecutionID);
    } else {
      clearExecutionInfo(store);
      setCache(state, loadable, newDepValues);
    }
    return loadable;
  }
  function getInProgressExecutionInfo(store, state) {
    const pendingExecutions = Recoil_concatIterables([executionInfoMap.has(store) ? [Recoil_nullthrows(executionInfoMap.get(store))] : [], Recoil_mapIterable(Recoil_filterIterable(executionInfoMap, ([s]) => s !== store), ([, execInfo]) => execInfo)]);
    function anyDepChanged(execDepValues) {
      for (const [depKey, execLoadable] of execDepValues) {
        if (!getNodeLoadable$2(store, state, depKey).is(execLoadable)) {
          return true;
        }
      }
      return false;
    }
    for (const execInfo of pendingExecutions) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        execInfo.stateVersions.get(state.version) || // If the deps for the execution match our current state, then it's valid
        !anyDepChanged(execInfo.depValuesDiscoveredSoFarDuringAsyncWork)
      ) {
        execInfo.stateVersions.set(state.version, true);
        return execInfo;
      } else {
        execInfo.stateVersions.set(state.version, false);
      }
    }
    return void 0;
  }
  function getExecutionInfo(store) {
    return executionInfoMap.get(store);
  }
  function setExecutionInfo(store, newExecutionID, loadable, depValues, state) {
    executionInfoMap.set(store, {
      depValuesDiscoveredSoFarDuringAsyncWork: depValues,
      executionID: newExecutionID,
      loadingLoadable: loadable,
      stateVersions: /* @__PURE__ */ new Map([[state.version, true]])
    });
  }
  function updateExecutionInfoDepValues(store, executionID, depValues) {
    if (isLatestExecution(store, executionID)) {
      const executionInfo = getExecutionInfo(store);
      if (executionInfo != null) {
        executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      }
    }
  }
  function clearExecutionInfo(store) {
    executionInfoMap.delete(store);
  }
  function isLatestExecution(store, executionID) {
    var _getExecutionInfo2;
    return executionID === ((_getExecutionInfo2 = getExecutionInfo(store)) === null || _getExecutionInfo2 === void 0 ? void 0 : _getExecutionInfo2.executionID);
  }
  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([depKey, valLoadable]) => [depKey, valLoadable.contents]);
  }
  function setCache(state, loadable, depValues) {
    state.atomValues.set(key, loadable);
    try {
      cache.set(depValuesToDepRoute(depValues), loadable);
    } catch (error) {
      throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);
    }
  }
  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(" → ")}`;
      return loadableWithError$1(Recoil_err(message));
    }
    dependencyStack.push(key);
    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }
  function selectorPeek(store, state) {
    const cachedLoadable = state.atomValues.get(key);
    if (cachedLoadable != null) {
      return cachedLoadable;
    }
    return cache.get((nodeKey) => {
      var _peekNodeLoadable;
      !(typeof nodeKey === "string") ? Recoil_invariant(false) : void 0;
      return (_peekNodeLoadable = peekNodeLoadable$1(store, state, nodeKey)) === null || _peekNodeLoadable === void 0 ? void 0 : _peekNodeLoadable.contents;
    });
  }
  function selectorGet(store, state) {
    return detectCircularDependencies(() => getSelectorLoadableAndUpdateDeps(store, state));
  }
  function invalidateSelector(state) {
    state.atomValues.delete(key);
  }
  function clearSelectorCache(store, treeState) {
    !(recoilValue != null) ? Recoil_invariant(false) : void 0;
    for (const nodeKey of discoveredDependencyNodeKeys) {
      var _node$clearCache;
      const node = getNode$6(nodeKey);
      (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
    }
    discoveredDependencyNodeKeys.clear();
    invalidateSelector(treeState);
    cache.clear();
    markRecoilValueModified$1(store, recoilValue);
  }
  if (set != null) {
    const selectorSet = (store, state, newValue) => {
      let syncSelectorSetFinished = false;
      const writes = /* @__PURE__ */ new Map();
      function getRecoilValue({
        key: depKey
      }) {
        if (syncSelectorSetFinished) {
          throw Recoil_err("Recoil: Async selector sets are not currently supported.");
        }
        const loadable = getNodeLoadable$2(store, state, depKey);
        if (loadable.state === "hasValue") {
          return loadable.contents;
        } else if (loadable.state === "loading") {
          const msg = `Getting value of asynchronous atom or selector "${depKey}" in a pending state while setting selector "${key}" is not yet supported.`;
          throw Recoil_err(msg);
        } else {
          throw loadable.contents;
        }
      }
      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          const msg = "Recoil: Async selector sets are not currently supported.";
          throw Recoil_err(msg);
        }
        const setValue = typeof valueOrUpdater === "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          valueOrUpdater(getRecoilValue(recoilState))
        ) : valueOrUpdater;
        const upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
        upstreamWrites.forEach((v2, k2) => writes.set(k2, v2));
      }
      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$6);
      }
      const ret = set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue);
      if (ret !== void 0) {
        throw Recoil_isPromise(ret) ? Recoil_err("Recoil: Async selector sets are not currently supported.") : Recoil_err("Recoil: selector set should be a void function.");
      }
      syncSelectorSetFinished = true;
      return writes;
    };
    return recoilValue = registerNode$1({
      key,
      nodeType: "selector",
      peek: selectorPeek,
      get: selectorGet,
      set: selectorSet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  } else {
    return recoilValue = registerNode$1({
      key,
      nodeType: "selector",
      peek: selectorPeek,
      get: selectorGet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  }
}
selector.value = (value) => new WrappedValue$1(value);
var Recoil_selector = selector;
const {
  isLoadable: isLoadable$2,
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable$1;
const {
  WrappedValue: WrappedValue$2
} = Recoil_Wrapper$1;
const {
  peekNodeInfo: peekNodeInfo$3
} = Recoil_FunctionalCore;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$7,
  DefaultValue: DefaultValue$2,
  getConfigDeletionHandler: getConfigDeletionHandler$2,
  registerNode: registerNode$2,
  setConfigDeletionHandler: setConfigDeletionHandler$1
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$4
} = Recoil_RecoilValue$1;
const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$4,
  markRecoilValueModified: markRecoilValueModified$2,
  setRecoilValue: setRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;
const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$2
} = Recoil_Retention;
const unwrap = (x) => x instanceof WrappedValue$2 ? x.value : x;
function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
  let liveStoresCount = 0;
  function unwrapPromise(promise) {
    return loadableWithPromise$2(promise.then((value) => {
      defaultLoadable = loadableWithValue$3(value);
      return value;
    }).catch((error) => {
      defaultLoadable = loadableWithError$2(error);
      throw error;
    }));
  }
  let defaultLoadable = Recoil_isPromise(options.default) ? unwrapPromise(options.default) : isLoadable$2(options.default) ? options.default.state === "loading" ? unwrapPromise(options.default.contents) : options.default : (
    // $FlowFixMe[incompatible-call]
    loadableWithValue$3(unwrap(options.default))
  );
  maybeFreezeValueOrPromise(defaultLoadable.contents);
  let cachedAnswerForUnvalidatedValue = void 0;
  const cleanupEffectsByStore = /* @__PURE__ */ new Map();
  function maybeFreezeValueOrPromise(valueOrPromise) {
    return valueOrPromise;
  }
  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then((value) => {
      var _store$getState$nextT, _state$atomValues$get;
      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;
      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$4(store, node, value);
      }
      return value;
    }).catch((error) => {
      var _store$getState$nextT2, _state$atomValues$get2;
      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;
      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$2(store, node, loadableWithError$2(error));
      }
      throw error;
    });
    return wrappedPromise;
  }
  function initAtom(store, initState, trigger) {
    var _options$effects;
    liveStoresCount++;
    const cleanupAtom = () => {
      var _cleanupEffectsByStor;
      liveStoresCount--;
      (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor.forEach((cleanup) => cleanup());
      cleanupEffectsByStore.delete(store);
    };
    store.getState().knownAtoms.add(key);
    if (defaultLoadable.state === "loading") {
      const notifyDefaultSubscribers = () => {
        var _store$getState$nextT3;
        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;
        if (!state.atomValues.has(key)) {
          markRecoilValueModified$2(store, node);
        }
      };
      defaultLoadable.contents.finally(notifyDefaultSubscribers);
    }
    const effects = (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE;
    if (effects != null) {
      let getLoadable2 = function(recoilValue) {
        if (isDuringInit && recoilValue.key === key) {
          const retValue = initValue;
          return retValue instanceof DefaultValue$2 ? peekAtom(store, initState) : Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then((v2) => v2 instanceof DefaultValue$2 ? (
            // Cast T to S
            defaultLoadable.toPromise()
          ) : v2)) : (
            // $FlowFixMe[incompatible-call]
            loadableWithValue$3(retValue)
          );
        }
        return getRecoilValueAsLoadable$4(store, recoilValue);
      }, getPromise2 = function(recoilValue) {
        return getLoadable2(recoilValue).toPromise();
      }, getInfo_UNSTABLE2 = function(recoilValue) {
        var _store$getState$nextT4;
        const info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
        return isDuringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? {
          ...info,
          isSet: true,
          loadable: getLoadable2(recoilValue)
        } : info;
      };
      var getLoadable = getLoadable2, getPromise = getPromise2, getInfo_UNSTABLE = getInfo_UNSTABLE2;
      let initValue = DEFAULT_VALUE$7;
      let isDuringInit = true;
      let isInitError = false;
      let pendingSetSelf = null;
      const setSelf = (effect) => (valueOrUpdater) => {
        if (isDuringInit) {
          const currentLoadable = getLoadable2(node);
          const currentValue = currentLoadable.state === "hasValue" ? currentLoadable.contents : DEFAULT_VALUE$7;
          initValue = typeof valueOrUpdater === "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue)
          ) : valueOrUpdater;
          if (Recoil_isPromise(initValue)) {
            initValue = initValue.then((value) => {
              pendingSetSelf = {
                effect,
                value
              };
              return value;
            });
          }
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw Recoil_err("Setting atoms to async values is not implemented.");
          }
          if (typeof valueOrUpdater !== "function") {
            pendingSetSelf = {
              effect,
              value: unwrap(valueOrUpdater)
            };
          }
          setRecoilValue$4(store, node, typeof valueOrUpdater === "function" ? (currentValue) => {
            const newValue = unwrap(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              valueOrUpdater(currentValue)
              // flowlint-line unclear-type:off
            );
            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : unwrap(valueOrUpdater));
        }
      };
      const resetSelf = (effect) => () => setSelf(effect)(DEFAULT_VALUE$7);
      const onSet = (effect) => (handler) => {
        var _cleanupEffectsByStor2;
        const {
          release
        } = store.subscribeToTransactions((currentStore) => {
          var _currentTree$atomValu;
          let {
            currentTree,
            previousTree
          } = currentStore.getState();
          if (!previousTree) {
            previousTree = currentTree;
          }
          const newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;
          if (newLoadable.state === "hasValue") {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;
            const newValue = newLoadable.contents;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === "hasValue" ? oldLoadable.contents : DEFAULT_VALUE$7;
            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue, !currentTree.atomValues.has(key));
            } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
              pendingSetSelf = null;
            }
          }
        }, key);
        cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor2 !== void 0 ? _cleanupEffectsByStor2 : [], release]);
      };
      for (const effect of effects) {
        try {
          const cleanup = effect({
            node,
            storeID: store.storeID,
            parentStoreID_UNSTABLE: store.parentStoreID,
            trigger,
            setSelf: setSelf(effect),
            resetSelf: resetSelf(effect),
            onSet: onSet(effect),
            getPromise: getPromise2,
            getLoadable: getLoadable2,
            getInfo_UNSTABLE: getInfo_UNSTABLE2
          });
          if (cleanup != null) {
            var _cleanupEffectsByStor3;
            cleanupEffectsByStore.set(store, [...(_cleanupEffectsByStor3 = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor3 !== void 0 ? _cleanupEffectsByStor3 : [], cleanup]);
          }
        } catch (error) {
          initValue = error;
          isInitError = true;
        }
      }
      isDuringInit = false;
      if (!(initValue instanceof DefaultValue$2)) {
        var _store$getState$nextT5;
        const initLoadable = isInitError ? loadableWithError$2(initValue) : Recoil_isPromise(initValue) ? loadableWithPromise$2(wrapPendingPromise(store, initValue)) : loadableWithValue$3(unwrap(initValue));
        maybeFreezeValueOrPromise(initLoadable.contents);
        initState.atomValues.set(key, initLoadable);
        (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
      }
    }
    return cleanupAtom;
  }
  function peekAtom(_store, state) {
    var _ref, _state$atomValues$get3;
    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }
  function getAtom(_store, state) {
    if (state.atomValues.has(key)) {
      return Recoil_nullthrows(state.atomValues.get(key));
    } else if (state.nonvalidatedAtoms.has(key)) {
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }
      if (persistence == null) {
        return defaultLoadable;
      }
      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
      cachedAnswerForUnvalidatedValue = validatedValueLoadable;
      return cachedAnswerForUnvalidatedValue;
    } else {
      return defaultLoadable;
    }
  }
  function invalidateAtom() {
    cachedAnswerForUnvalidatedValue = void 0;
  }
  function setAtom(_store, state, newValue) {
    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));
      if (existing.state === "hasValue" && newValue === existing.contents) {
        return /* @__PURE__ */ new Map();
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return /* @__PURE__ */ new Map();
    }
    cachedAnswerForUnvalidatedValue = void 0;
    return (/* @__PURE__ */ new Map()).set(key, loadableWithValue$3(newValue));
  }
  function shouldDeleteConfigOnReleaseAtom() {
    return getConfigDeletionHandler$2(key) !== void 0 && liveStoresCount <= 0;
  }
  const node = registerNode$2({
    key,
    nodeType: "atom",
    peek: peekAtom,
    get: getAtom,
    set: setAtom,
    init: initAtom,
    invalidate: invalidateAtom,
    shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: true,
    retainedBy
  });
  return node;
}
function atom(options) {
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...restOptions
  } = options;
  const optionsDefault = "default" in options ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    options.default
  ) : new Promise(() => {
  });
  if (isRecoilValue$4(optionsDefault)) {
    return atomWithFallback({
      ...restOptions,
      default: optionsDefault
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    });
  } else {
    return baseAtom({
      ...restOptions,
      default: optionsDefault
    });
  }
}
function atomWithFallback(options) {
  const base = atom({
    ...options,
    default: DEFAULT_VALUE$7,
    persistence_UNSTABLE: options.persistence_UNSTABLE === void 0 ? void 0 : {
      ...options.persistence_UNSTABLE,
      validator: (storedValue) => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7)
    },
    // TODO Hack for now.
    effects: options.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
    // flowlint-line unclear-type: off
  });
  const sel = Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get: get2
    }) => {
      const baseValue = get2(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set
    }, newValue) => set(base, newValue),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
  setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
  return sel;
}
atom.value = (value) => new WrappedValue$2(value);
var Recoil_atom = atom;
class MapCache {
  constructor(options) {
    var _options$mapKey;
    _defineProperty$1(this, "_map", void 0);
    _defineProperty$1(this, "_keyMapper", void 0);
    this._map = /* @__PURE__ */ new Map();
    this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : (v2) => v2;
  }
  size() {
    return this._map.size;
  }
  has(key) {
    return this._map.has(this._keyMapper(key));
  }
  get(key) {
    return this._map.get(this._keyMapper(key));
  }
  set(key, val) {
    this._map.set(this._keyMapper(key), val);
  }
  delete(key) {
    this._map.delete(this._keyMapper(key));
  }
  clear() {
    this._map.clear();
  }
}
var Recoil_MapCache = {
  MapCache
};
var Recoil_MapCache_1 = Recoil_MapCache.MapCache;
var Recoil_MapCache$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: Recoil_MapCache_1
});
const {
  LRUCache: LRUCache$2
} = Recoil_LRUCache$1;
const {
  MapCache: MapCache$1
} = Recoil_MapCache$1;
const defaultPolicy$1 = {
  equality: "reference",
  eviction: "none",
  maxSize: Infinity
};
function cacheFromPolicy({
  equality = defaultPolicy$1.equality,
  eviction = defaultPolicy$1.eviction,
  maxSize = defaultPolicy$1.maxSize
} = defaultPolicy$1) {
  const valueMapper = getValueMapper$1(equality);
  const cache = getCache(eviction, maxSize, valueMapper);
  return cache;
}
function getValueMapper$1(equality) {
  switch (equality) {
    case "reference":
      return (val) => val;
    case "value":
      return (val) => Recoil_stableStringify(val);
  }
  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}
function getCache(eviction, maxSize, mapKey) {
  switch (eviction) {
    case "keep-all":
      return new MapCache$1({
        mapKey
      });
    case "lru":
      return new LRUCache$2({
        mapKey,
        maxSize: Recoil_nullthrows(maxSize)
      });
    case "most-recent":
      return new LRUCache$2({
        mapKey,
        maxSize: 1
      });
  }
  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}
var Recoil_cacheFromPolicy = cacheFromPolicy;
const {
  setConfigDeletionHandler: setConfigDeletionHandler$2
} = Recoil_Node;
function atomFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;
  const atomCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
    eviction: "keep-all"
  });
  return (params) => {
    var _stableStringify, _options$effects;
    const cachedAtom = atomCache.get(params);
    if (cachedAtom != null) {
      return cachedAtom;
    }
    const {
      cachePolicyForParams_UNSTABLE,
      ...atomOptions
    } = options;
    const optionsDefault = "default" in options ? (
      // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
      options.default
    ) : new Promise(() => {
    });
    const newAtom = Recoil_atom({
      ...atomOptions,
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}`,
      default: typeof optionsDefault === "function" ? (
        // The default was parameterized
        // Flow doesn't know that T isn't a function, so we need to case to any
        // $FlowIssue[incompatible-use]
        optionsDefault(params)
      ) : (
        // Default may be a static value, promise, or RecoilValue
        optionsDefault
      ),
      retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
      effects: typeof options.effects === "function" ? options.effects(params) : typeof options.effects_UNSTABLE === "function" ? options.effects_UNSTABLE(params) : (_options$effects = options.effects) !== null && _options$effects !== void 0 ? _options$effects : options.effects_UNSTABLE
      // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),
    });
    atomCache.set(params, newAtom);
    setConfigDeletionHandler$2(newAtom.key, () => {
      atomCache.delete(params);
    });
    return newAtom;
  };
}
var Recoil_atomFamily = atomFamily;
const {
  setConfigDeletionHandler: setConfigDeletionHandler$3
} = Recoil_Node;
let nextIndex = 0;
function selectorFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;
  const selectorCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : "value",
    eviction: "keep-all"
  });
  return (params) => {
    var _stableStringify;
    let cachedSelector;
    try {
      cachedSelector = selectorCache.get(params);
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector ${options.key}: ${error.message}`);
    }
    if (cachedSelector != null) {
      return cachedSelector;
    }
    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : "void"}/${nextIndex++}`;
    const myGet = (callbacks) => options.get(params)(callbacks);
    const myCachePolicy = options.cachePolicy_UNSTABLE;
    const retainedBy = typeof options.retainedBy_UNSTABLE === "function" ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
    let newSelector;
    if (options.set != null) {
      const set = options.set;
      const mySet = (callbacks, newValue) => set(params)(callbacks, newValue);
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    }
    selectorCache.set(params, newSelector);
    setConfigDeletionHandler$3(newSelector.key, () => {
      selectorCache.delete(params);
    });
    return newSelector;
  };
}
var Recoil_selectorFamily = selectorFamily;
const constantSelector = Recoil_selectorFamily({
  key: "__constant",
  get: (constant) => () => constant,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function constSelector(constant) {
  return constantSelector(constant);
}
var Recoil_constSelector = constSelector;
const throwingSelector = Recoil_selectorFamily({
  key: "__error",
  get: (message) => () => {
    throw Recoil_err(message);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function errorSelector(message) {
  return throwingSelector(message);
}
var Recoil_errorSelector = errorSelector;
function readOnlySelector(atom2) {
  return atom2;
}
var Recoil_readOnlySelector = readOnlySelector;
const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$4
} = Recoil_Loadable$1;
function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(void 0);
  const exceptions = Array(deps.length).fill(void 0);
  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e2) {
      exceptions[i] = e2;
    }
  }
  return [results, exceptions];
}
function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}
function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map((key) => dependencies[key]);
}
function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({
      ...out,
      [key]: results[idx]
    }), {})
  );
}
function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
  return wrapResults(dependencies, output);
}
function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    result === void 0 ? syncResults[idx] : result
  ));
}
const waitForNone = Recoil_selectorFamily({
  key: "__waitForNone",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    return wrapLoadables(dependencies, results, exceptions);
  },
  dangerouslyAllowMutability: true
});
const waitForAny = Recoil_selectorFamily({
  key: "__waitForAny",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.some((exp) => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    }
    return new Promise((resolve) => {
      for (const [i, exp] of exceptions.entries()) {
        if (Recoil_isPromise(exp)) {
          exp.then((result) => {
            results[i] = result;
            exceptions[i] = void 0;
            resolve(wrapLoadables(dependencies, results, exceptions));
          }).catch((error) => {
            exceptions[i] = error;
            resolve(wrapLoadables(dependencies, results, exceptions));
          });
        }
      }
    });
  },
  dangerouslyAllowMutability: true
});
const waitForAll = Recoil_selectorFamily({
  key: "__waitForAll",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.every((exp) => exp == null)) {
      return wrapResults(dependencies, results);
    }
    const error = exceptions.find(isError);
    if (error != null) {
      throw error;
    }
    return Promise.all(exceptions).then((exceptionResults) => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults)));
  },
  dangerouslyAllowMutability: true
});
const waitForAllSettled = Recoil_selectorFamily({
  key: "__waitForAllSettled",
  get: (dependencies) => ({
    get: get2
  }) => {
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get2, deps);
    if (exceptions.every((exp) => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    }
    return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then((result) => {
      results[i] = result;
      exceptions[i] = void 0;
    }).catch((error) => {
      results[i] = void 0;
      exceptions[i] = error;
    }) : null)).then(() => wrapLoadables(dependencies, results, exceptions));
  },
  dangerouslyAllowMutability: true
});
const noWait = Recoil_selectorFamily({
  key: "__noWait",
  get: (dependency) => ({
    get: get2
  }) => {
    try {
      return Recoil_selector.value(loadableWithValue$4(get2(dependency)));
    } catch (exception) {
      return Recoil_selector.value(Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
    }
  },
  dangerouslyAllowMutability: true
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  waitForAllSettled,
  noWait
};
const {
  RecoilLoadable
} = Recoil_Loadable$1;
const {
  DefaultValue: DefaultValue$3
} = Recoil_Node;
const {
  RecoilRoot: RecoilRoot$2,
  useRecoilStoreID: useRecoilStoreID$1
} = Recoil_RecoilRoot;
const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;
const {
  retentionZone: retentionZone$1
} = Recoil_RetentionZone;
const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;
const {
  useRecoilState: useRecoilState$1,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
  useResetRecoilState: useResetRecoilState$1,
  useSetRecoilState: useSetRecoilState$1
} = Recoil_Hooks;
const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1
} = Recoil_SnapshotHooks;
const {
  useRecoilCallback: useRecoilCallback$1
} = Recoil_useRecoilCallback;
const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;
var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$3,
  isRecoilValue: isRecoilValue$5,
  RecoilLoadable,
  // Global Recoil environment settiongs
  RecoilEnv: Recoil_RecoilEnv,
  // Recoil Root
  RecoilRoot: RecoilRoot$2,
  useRecoilStoreID: useRecoilStoreID$1,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // Atoms/Selectors
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience Atoms/Selectors
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Concurrency Helpers for Atoms/Selectors
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  // Hooks for Atoms/Selectors
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,
  // Hooks for complex operations
  useRecoilCallback: useRecoilCallback$1,
  useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
  // Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  snapshot_UNSTABLE: freshSnapshot$2,
  // Memory Management
  useRetain: Recoil_useRetain,
  retentionZone: retentionZone$1
};
var Recoil_index_5 = Recoil_index.RecoilRoot;
var Recoil_index_8 = Recoil_index.atom;
var Recoil_index_20 = Recoil_index.useRecoilValue;
var Recoil_index_22 = Recoil_index.useRecoilState;
const languageAtom = Recoil_index_8({
  key: "languageState",
  default: localStorage.getItem("selectedLanguage") || "EN"
});
const soundAtom = Recoil_index_8({
  key: "muted",
  default: localStorage.getItem("muted") == "true" || false
});
const useAnimate = ({ link, text, typewriterRef, audioFiles }) => {
  const language = Recoil_index_20(languageAtom);
  const muted = Recoil_index_20(soundAtom);
  const [paused, setPaused] = reactExports$1.useState(false);
  const [animationObj, setAnimationObject] = reactExports$1.useState(null);
  const getAnimationObject = (obj) => setAnimationObject(obj);
  const [currentIndex, setCurrentIndex] = reactExports$1.useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = reactExports$1.useState(false);
  const line = text[currentIndex];
  const navigate = useNavigate();
  const audioRef = reactExports$1.useRef(null);
  reactExports$1.useEffect(() => {
    audioRef.current = new Audio(audioFiles[currentIndex]);
  }, []);
  reactExports$1.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);
  reactExports$1.useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current.deleteAll(1e-22);
      if (audioRef.current) {
        audioRef.current.play();
      }
      typewriterRef.current.typeString(line[language]).start().callFunction(() => {
        setIsAnimationComplete(true);
        setPaused(true);
      });
    }
  }, [language, currentIndex]);
  const handleClick = () => {
    if (currentIndex == text.length - 1) {
      navigate(link);
    }
    if (isAnimationComplete) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
      setIsAnimationComplete(false);
      setPaused(false);
      if (audioRef.current) {
        audioRef.current.src = audioFiles[currentIndex + 1];
        audioRef.current.load();
      }
    }
  };
  const onInit = ({ typewriter, pauseFor }) => {
    typewriterRef.current = typewriter;
    typewriter.pauseFor(pauseFor).callFunction(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }).typeString(line[language]).start().callFunction(() => {
      setIsAnimationComplete(true);
      setPaused(true);
    });
  };
  return {
    paused,
    isAnimationComplete,
    isLast: currentIndex == text.length - 1,
    getAnimationObject,
    handleClick,
    onInit,
    animationObj,
    currentIndex
  };
};
const useTranslate = (textLine) => {
  const language = Recoil_index_20(languageAtom);
  return textLine[language];
};
const useAudioFiles = (endIndex, chapter) => {
  const language = Recoil_index_20(languageAtom);
  const audioFiles = [];
  for (let i = 1; i <= endIndex; i++) {
    const filePath = `public/sounds/${chapter}/${language}_${chapter}_${i}.mp3`;
    audioFiles.push(filePath);
  }
  return audioFiles;
};
const Intro$1 = () => {
  const nextButtonText = useTranslate(nextButton);
  const chapter1Text = useTranslate(toChapter) + "1";
  const typewriterRef = reactExports$1.useRef();
  const navigate = useNavigate();
  const skipButtonText = useTranslate(skipToChapter) + "1";
  const audioFiles = useAudioFiles(10, "intro");
  const { getAnimationObject, handleClick, isAnimationComplete, isLast, onInit, paused } = useAnimate({
    typewriterRef,
    link: "/insulin",
    text: intro,
    audioFiles
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => onInit({ typewriter, pauseFor: 0 })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 ml-44 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: { width: "600px", maxWidth: "600px", height: "300px", position: "relative" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimateCC,
            {
              animationName: "intro",
              getAnimationObject,
              paused
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex justify-evenly", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleClick,
          className: `mt-20 border-4 border-black font-primary ${!isAnimationComplete ? "bg-gray-main" : "bg-yellow-main"}`,
          children: isLast ? chapter1Text : nextButtonText
        }
      ),
      !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate("/insulin"),
          className: `mt-20 border-4 border-black font-primary bg-yellow-main`,
          children: skipButtonText
        }
      )
    ] })
  ] }) }) });
};
const menuIcon = "/insu-learn/assets/menu-icon-.svg";
const logo$1 = "/insu-learn/assets/logo-.svg";
const volumeDown = "/insu-learn/assets/volume_off_black-.svg";
const volumeUp = "/insu-learn/assets/volume_up_black-.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const [muted, setMuted] = Recoil_index_22(soundAtom);
  const [levelsShown, setLevelsShown] = reactExports$1.useState(false);
  const handleMuteToggle = () => {
    const newMutedState = !muted;
    localStorage.setItem("muted", `${newMutedState}`);
    setMuted(newMutedState);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-primary-main z-10 relative w-[100%]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 flex justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logo$1,
        alt: "Logo",
        onClick: () => navigate("/"),
        className: "w-52 mt-4 ml-4 hover:cursor-pointer"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          onClick: handleMuteToggle,
          src: volumeDown,
          alt: "Volume off"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          onClick: handleMuteToggle,
          src: volumeUp,
          alt: "Volume On"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chapters", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: menuIcon,
          onClick: () => {
            setLevelsShown(!levelsShown);
            const page = levelsShown ? "/intro" : "/chapters";
            navigate(page);
          },
          alt: "Chapters Icon"
        }
      ) }) })
    ] })
  ] }) });
};
const Chapters = () => {
  const navigate = useNavigate();
  const chapters = [
    { id: "chpt1", label: "1", name: "Introduction" },
    { id: "chpt2", label: "2", name: "Insulin" },
    { id: "chpt3", label: "3", name: "Symptoms" },
    { id: "chpt4", label: "4", name: "Treatment" }
  ];
  const handleChapterClick = (chapterId) => {
    switch (chapterId) {
      case "chpt1":
        navigate("/intro");
        break;
      case "chpt2":
        navigate("/insulin");
        break;
      case "chpt3":
        navigate("/symptoms");
        break;
      case "chpt4":
        navigate("/treatment");
        break;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-primary-dark flex items-center justify-center",
      style: { minHeight: "calc(100vh - 90px)" },
      children: chapters.map((chapter, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        index2 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: chapter.id,
            className: "chapter cursor-pointer",
            onClick: () => handleChapterClick(chapter.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: chapter.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-name", children: chapter.name })
            ]
          }
        ) }, chapter.id)
      ] }))
    }
  ) });
};
const logo = "/girly.svg";
const Overview = () => {
  const [isHovered, setIsHovered] = reactExports$1.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      className: isHovered ? "logo-hovered" : "logo",
      src: logo,
      alt: "Logo",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  );
};
const ExplanationPopup = ({ explanation, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: explanation }) });
};
const Insulin = () => {
  const nextButtonText = useTranslate(nextButton);
  const testText = useTranslate(toTest);
  const typewriterRef = reactExports$1.useRef();
  const skipButtonText = useTranslate(skipToTest);
  const insulinExplanationText = useTranslate(insulinExplanation);
  const glucoseExplanationText = useTranslate(glucoseExplanation);
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = reactExports$1.useState(false);
  const [isAnimPopupOpen, setIsAnimPopupOpen] = reactExports$1.useState(false);
  const language = Recoil_index_20(languageAtom);
  const audioFiles = useAudioFiles(13, "insulin");
  const {
    getAnimationObject,
    handleClick,
    isAnimationComplete,
    isLast,
    onInit,
    paused,
    animationObj,
    currentIndex
  } = useAnimate({
    typewriterRef,
    link: "/insulinTest",
    text: opening,
    audioFiles
  });
  reactExports$1.useEffect(() => {
    getAnimationObject((prev) => {
      var _a;
      if (prev === void 0 || prev === null)
        return prev;
      const glucoseInstance = prev["glucose"];
      if (glucoseInstance) {
        if (!((_a = glucoseInstance._listeners) == null ? void 0 : _a.click)) {
          glucoseInstance.on("click", () => {
            setIsAnimPopupOpen((prev2) => !prev2);
          });
        }
      }
      prev["glucose"] = glucoseInstance;
      return prev;
    });
  }, [animationObj, getAnimationObject, isAnimPopupOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-2xl bg-red-200 font-primary border border-red-800 w-max justify-self-center inline p-4 animate-fade-in",
        children: language === "EN" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Diabetes is a disease in which the body is unable to produce a sufficient amount of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "clickable-text",
              onClick: () => setIsPopupOpen(!isPopupOpen),
              style: { textDecoration: "underline", cursor: "pointer" },
              children: "insulin."
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Cukrovka je ochorenie, pri ktorom telo nedokáže produkovať dostatočné množstvo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "clickable-text",
              onClick: () => setIsPopupOpen(!isPopupOpen),
              style: { textDecoration: "underline", cursor: "pointer" },
              children: "inzulínu."
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[100%]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "animation-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech max-w-md absolute top-[15%] left-[7%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typewriter,
          {
            options: {
              delay: 40
            },
            onInit: (typewriter) => onInit({ typewriter, pauseFor: 3400 })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          isPopupOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExplanationPopup,
            {
              className: "absolute top-5 right-5 bg-white p-4 border border-gray-300 rounded shadow-lg max-w-xs z-10 flex",
              explanation: insulinExplanationText
            }
          ),
          isAnimPopupOpen && currentIndex < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExplanationPopup,
            {
              className: "absolute top-64 right-15 right-4 bg-white p-4 border border-gray-300 rounded shadow-lg max-w-xs z-10 flex",
              explanation: glucoseExplanationText
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimateCC,
          {
            animationName: "opening",
            getAnimationObject,
            paused
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-evenly", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleClick,
            className: `border-4 border-black font-primary ${!isAnimationComplete ? "bg-gray-main" : "bg-yellow-main"}`,
            children: isLast ? testText : nextButtonText
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => navigate("/insulinTest"),
            className: `border-4 border-black font-primary bg-yellow-main`,
            children: skipButtonText
          }
        )
      ] })
    ] }) })
  ] });
};
const Intro = () => {
  const navigate = useNavigate();
  const [showLangMenu, setShowLangMenu] = reactExports$1.useState(false);
  const [language, setLanguage] = Recoil_index_22(languageAtom);
  const startButtonText = startButton[language];
  const handleLanguageChange = (newLanguage) => {
    localStorage.setItem("selectedLanguage", newLanguage);
    setLanguage(newLanguage);
    setShowLangMenu(false);
  };
  const handleClick = () => {
    navigate("/intro");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleClick,
        className: "mt-20 border-2 border-black font-primary bg-primary-light z-10 absolute top-28 left-28",
        children: startButtonText
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "mt-20 border-2 border-black font-primary bg-primary-light z-10 absolute top-44 left-28",
        onClick: () => setShowLangMenu(!showLangMenu),
        children: language === "EN" ? "English" : "Slovenčina"
      }
    ),
    showLangMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-2 p-2 border-4 border-black font-primary bg-primary-main z-10 absolute top-60 left-28",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "block mt-1 border-2 border-black font-primary bg-primary-light hover:bg-primary-dark",
              onClick: () => handleLanguageChange("EN"),
              children: "English"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "block mt-1 border-2 border-black font-primary bg-primary-light hover:bg-primary-dark",
              onClick: () => handleLanguageChange("SK"),
              children: "Slovenčina"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-primary-dark w-[100%] flex flex-col-reverse items-center absolute\r\n                            bottom-0 left-0 z-3",
        style: { minHeight: "calc(100vh - 90px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "public/backgrounds/homepage-static.svg",
            alt: "background picture",
            className: "max-h-[40rem] mx-auto"
          }
        ) })
      }
    )
  ] });
};
var dist = {};
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = "function" === typeof Symbol && Symbol.for, c$1 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$1 = b$2 ? Symbol.for("react.fragment") : 60107, f$1 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$1 = b$2 ? Symbol.for("react.provider") : 60109, k$2 = b$2 ? Symbol.for("react.context") : 60110, l$1 = b$2 ? Symbol.for("react.async_mode") : 60111, m$1 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$2 ? Symbol.for("react.suspense") : 60113, q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$2 ? Symbol.for("react.memo") : 60115, t = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$2 = b$2 ? Symbol.for("react.fundamental") : 60117, x$2 = b$2 ? Symbol.for("react.responder") : 60118, y$2 = b$2 ? Symbol.for("react.scope") : 60119;
function z$2(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$2:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$2:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$2(a) {
  return z$2(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$2;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A$2(a) || z$2(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$2;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z$2(a) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z$2(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z$2(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z$2(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z$2(a) === t;
};
reactIs_production_min$1.isMemo = function(a) {
  return z$2(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z$2(a) === d$2;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z$2(a) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z$2(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z$2(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$2 || a === f$1 || a === p$1 || a === q$2 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$2 || a.$$typeof === n$1 || a.$$typeof === w$2 || a.$$typeof === x$2 || a.$$typeof === y$2 || a.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$2;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIsExports$1 = reactIs$2.exports;
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
const d$1 = /* @__PURE__ */ getDefaultExportFromCjs(shallowequal);
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f2 = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (0 === b2 + n2 + v2 + m2) {
        if (l2 === J2 && (0 < r2 && (f2 = f2.replace(N2, "")), 0 < f2.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f2 += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f2 = f2.trim();
            q2 = f2.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (42 === g2 && 42 === e2.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (0 === k2)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f2 = f2.replace(ca2, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f2 = f2.replace(N2, ""));
                g2 = f2.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f2, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a, h2), f2 = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f2 = f2.replace(da2, ea2);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f2 + "{" + k2 + "}";
                      break;
                    case 107:
                      f2 = f2.replace(fa2, "$1 $2");
                      k2 = f2 + "{" + k2 + "}";
                      k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f2 + k2, 112 === h2 && (k2 = (p2 += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f2, I2), k2, h2, a + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f2 = (0 < r2 ? f2.replace(N2, "") : f2).trim();
            if (1 < (t2 = f2.length))
              switch (0 === u2 && (q2 = f2.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f2 = f2.replace(" ", ":")).length), 0 < A2 && void 0 !== (C2 = H2(1, f2, c2, d2, D2, z2, p2.length, h2, a, h2)) && 0 === (t2 = (f2 = C2.trim()).length) && (f2 = "\0\0"), q2 = f2.charCodeAt(0), g2 = f2.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (105 === g2 || 99 === g2) {
                    G3 += f2 + e2.charAt(l2);
                    break;
                  }
                default:
                  58 !== f2.charCodeAt(t2 - 1) && (p2 += P2(f2, q2, g2, f2.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h2 && 0 < f2.length && (r2 = 1, f2 += "\0");
          0 < A2 * Y2 && H2(0, f2, c2, d2, D2, z2, p2.length, h2, a, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m2) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m2 + b2)
                switch (x) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    32 !== g2 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (0 === n2 + b2 + m2 + E2 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    112 === x && 58 === e2.charCodeAt(l2 - 3) && (E2 = x);
                  case 8:
                    111 === K2 && (E2 = K2);
                }
              break;
            case 58:
              0 === n2 + b2 + m2 && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m2++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m2--;
              break;
            case 41:
              0 === n2 + b2 + m2 && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m2) {
                if (0 === q2)
                  switch (2 * x + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    47 === g2 && 42 === x && t2 + 2 !== l2 && (33 === e2.charCodeAt(t2 + 2) && (p2 += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          0 === b2 && (f2 += y2);
      }
      K2 = x;
      x = g2;
      l2++;
    }
    t2 = p2.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p2, r2, d2, D2, z2, t2, h2, a, h2), void 0 !== C2 && 0 === (p2 = C2).length))
        return G3 + p2 + F3;
      p2 = r2.join(",") + "{" + p2 + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p2, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p2 = p2.replace(ha2, ":-moz-$1") + p2;
            break;
          case 112:
            p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
        }
        E2 = 0;
      }
    }
    return G3 + p2 + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia2);
    c2 = h2;
    var a = h2.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h2;
    if (944 === m2) {
      d2 = a.indexOf(":", 9) + 1;
      var b2 = a.substring(d2, a.length - 1).trim();
      b2 = a.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || 2 === w2 && !L2(a, 1))
      return a;
    switch (m2) {
      case 1015:
        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4))
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (45 === a.charCodeAt(8))
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja2, "$1-webkit-$2") + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4))
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8))
          break;
        b2 = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a + "-ms-flex-pack" + b2 + a;
      case 1005:
        return ka2.test(a) ? a.replace(aa2, ":-webkit-") + a.replace(aa2, ":-moz-") + a : a;
      case 1e3:
        b2 = a.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a.replace(G2, "tb");
            break;
          case 232:
            b2 = a.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a.replace(G2, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + b2 + a;
      case 1017:
        if (-1 === a.indexOf("sticky", 9))
          break;
      case 975:
        c2 = (a = d2).length - 10;
        b2 = (33 === a.charCodeAt(c2) ? a.substring(0, c2) : a).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a = a.replace(b2, "-webkit-" + b2) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a.replace(b2, "-webkit-" + b2) + ";" + a.replace(b2, "-ms-" + b2 + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (45 === a.charCodeAt(5))
          switch (a.charCodeAt(6)) {
            case 105:
              return b2 = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
          }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
          break;
      case 931:
      case 953:
        if (true === la2.test(d2))
          return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a.replace(b2, "-webkit-" + b2) + a.replace(b2, "-moz-" + b2.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e2 + h2 && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"), h2 = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(2 !== c2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea2(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa2, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x, e2, h2, a, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x = w3;
      }
    }
    if (x !== c2)
      return x;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2)
          S2[A2++] = d2;
        else if ("object" === typeof d2)
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 && (R2 = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h2 && "string" === typeof h2 && (c2 = h2);
    }
    var a = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a, e2, e2, D2, z2, a.length, 0, 0, 0), void 0 !== h2 && (a = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a;
  }
  var ca2 = /^\0+/g, N2 = /[\0\r\f]/g, aa2 = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha2 = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var reactIs$1 = reactIsExports$1;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
const hoistStatics = /* @__PURE__ */ getDefaultExportFromCjs(hoistNonReactStatics_cjs);
function y$1() {
  return (y$1 = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var v$1 = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o = t2.length; r2 < o; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
}, g$1 = function(t2) {
  return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !reactIsExports$1.typeOf(t2);
}, S = Object.freeze([]), w$1 = Object.freeze({});
function E$1(e2) {
  return "function" == typeof e2;
}
function b$1(e2) {
  return e2.displayName || e2.name || "Component";
}
function _(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var N = "undefined" != typeof process && void 0 !== process.env && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", A$1 = "5.3.11", C$1 = "undefined" != typeof window && "HTMLElement" in window, I$1 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && "" !== {}.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== {}.SC_DISABLE_SPEEDY && "" !== {}.SC_DISABLE_SPEEDY ? "false" !== {}.SC_DISABLE_SPEEDY && {}.SC_DISABLE_SPEEDY : false)), P = {};
function D$1(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : ""));
}
var j = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o = r2; e3 >= o; )
        (o <<= 1) < 0 && D$1(16, "" + e3);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n2), this.length = o;
      for (var s = r2; s < o; s++)
        this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e3 + 1), a = 0, c2 = t3.length; a < c2; a++)
      this.tag.insertRule(i, t3[a]) && (this.groupSizes[e3]++, i++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o = n2; o < r2; o++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3])
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o = r2 + n2, s = r2; s < o; s++)
      t3 += this.tag.getRule(s) + "/*!sc*/\n";
    return t3;
  }, e2;
}(), T = /* @__PURE__ */ new Map(), x$1 = /* @__PURE__ */ new Map(), k$1 = 1, V = function(e2) {
  if (T.has(e2))
    return T.get(e2);
  for (; x$1.has(k$1); )
    k$1++;
  var t2 = k$1++;
  return T.set(e2, t2), x$1.set(t2, e2), t2;
}, B$1 = function(e2) {
  return x$1.get(e2);
}, z$1 = function(e2, t2) {
  t2 >= k$1 && (k$1 = t2 + 1), T.set(e2, t2), x$1.set(t2, e2);
}, M = "style[" + N + '][data-styled-version="5.3.11"]', G$1 = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), L = function(e2, t2, n2) {
  for (var r2, o = n2.split(","), s = 0, i = o.length; s < i; s++)
    (r2 = o[s]) && e2.registerName(t2, r2);
}, F$1 = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o = 0, s = n2.length; o < s; o++) {
    var i = n2[o].trim();
    if (i) {
      var a = i.match(G$1);
      if (a) {
        var c2 = 0 | parseInt(a[1], 10), u2 = a[2];
        0 !== c2 && (z$1(u2, c2), L(e2, u2, a[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i);
    }
  }
}, Y = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}, q$1 = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(N))
        return r3;
    }
  }(n2), s = void 0 !== o ? o.nextSibling : null;
  r2.setAttribute(N, "active"), r2.setAttribute("data-styled-version", "5.3.11");
  var i = Y();
  return i && r2.setAttribute("nonce", i), n2.insertBefore(r2, s), r2;
}, H$1 = function() {
  function e2(e3) {
    var t3 = this.element = q$1(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o = t4[n2];
        if (o.ownerNode === e4)
          return o;
      }
      D$1(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
  }, e2;
}(), $ = function() {
  function e2(e3) {
    var t3 = this.element = q$1(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), W = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), U = C$1, J = { isServer: !C$1, useCSSOMInjection: !I$1 }, X = function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = w$1), void 0 === t3 && (t3 = {}), this.options = y$1({}, J, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && C$1 && U && (U = false, function(e4) {
      for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o = t4[n3];
        o && "active" !== o.getAttribute(N) && (F$1(e4, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return V(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return void 0 === n2 && (n2 = true), new e2(y$1({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o = t3.target, e3 = n2 ? new W(o) : r2 ? new H$1(o) : new $(o), new j(e3)));
    var e3, t3, n2, r2, o;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (V(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(V(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o = 0; o < n2; o++) {
        var s = B$1(o);
        if (void 0 !== s) {
          var i = e3.names.get(s), a = t3.getGroup(o);
          if (i && a && i.size) {
            var c2 = N + ".g" + o + '[id="' + s + '"]', u2 = "";
            void 0 !== i && i.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}(), Z = /(a)(d)/gi, K = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = K(t2 % 52) + n2;
  return (K(t2 % 52) + n2).replace(Z, "$1-$2");
}
var ee = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, te = function(e2) {
  return ee(5381, e2);
};
function ne(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (E$1(n2) && !_(n2))
      return false;
  }
  return true;
}
var re = te("5.3.11"), oe = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && ne(e3), this.componentId = t2, this.baseHash = ee(re, t2), this.baseStyle = n2, X.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = _e(this.rules, e3, t2, n2).join(""), i = Q(ee(this.baseHash, s) >>> 0);
        if (!t2.hasNameForId(r2, i)) {
          var a = n2(s, "." + i, void 0, r2);
          t2.insertRules(r2, i, a);
        }
        o.push(i), this.staticRulesId = i;
      }
    else {
      for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if ("string" == typeof h2)
          l2 += h2;
        else if (h2) {
          var p2 = _e(h2, e3, t2, n2), f2 = Array.isArray(p2) ? p2.join("") : p2;
          u2 = ee(u2, f2 + d2), l2 += f2;
        }
      }
      if (l2) {
        var m2 = Q(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o.push(m2);
      }
    }
    return o.join(" ");
  }, e2;
}(), se = /^\s*\/\/.*$/gm, ie = [":", "[", ".", "#"];
function ae(e2) {
  var t2, n2, r2, o, s = void 0 === e2 ? w$1 : e2, i = s.options, a = void 0 === i ? w$1 : i, c2 = s.plugins, u2 = void 0 === c2 ? S : c2, l2 = new stylis_min(a), d2 = [], p2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o2, s2, i2, a2, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (0 === l3 && 64 === r3.charCodeAt(0))
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (0 === u3)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o2[0] + r3), "";
            default:
              return r3 + (0 === d3 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f2 = function(e3, r3, s2) {
    return 0 === r3 && -1 !== ie.indexOf(s2[n2.length]) || s2.match(o) ? e3 : "." + t2;
  };
  function m2(e3, s2, i2, a2) {
    void 0 === a2 && (a2 = "&");
    var c3 = e3.replace(se, ""), u3 = s2 && i2 ? i2 + " " + s2 + " { " + c3 + " }" : c3;
    return t2 = a2, n2 = s2, r2 = new RegExp("\\" + n2 + "\\b", "g"), o = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i2 || !s2 ? "" : s2, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o2) {
    2 === e3 && o2.length && o2[0].lastIndexOf(n2) > 0 && (o2[0] = o2[0].replace(r2, f2));
  }, p2, function(e3) {
    if (-2 === e3) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || D$1(15), ee(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ce = React$1.createContext(), ue = ce.Consumer, le = React$1.createContext(), de = (le.Consumer, new X()), he = ae();
function pe() {
  return reactExports$1.useContext(ce) || de;
}
function fe() {
  return reactExports$1.useContext(le) || he;
}
function me(e2) {
  var t2 = reactExports$1.useState(e2.stylisPlugins), n2 = t2[0], s = t2[1], c2 = pe(), u2 = reactExports$1.useMemo(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = reactExports$1.useMemo(function() {
    return ae({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return reactExports$1.useEffect(function() {
    d$1(n2, e2.stylisPlugins) || s(e2.stylisPlugins);
  }, [e2.stylisPlugins]), React$1.createElement(ce.Provider, { value: u2 }, React$1.createElement(le.Provider, { value: l2 }, e2.children));
}
var ye = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = he);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return D$1(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = he), this.name + e3.hash;
  }, e2;
}(), ve = /([A-Z])/, ge = /([A-Z])/g, Se = /^ms-/, we = function(e2) {
  return "-" + e2.toLowerCase();
};
function Ee(e2) {
  return ve.test(e2) ? e2.replace(ge, we).replace(Se, "-ms-") : e2;
}
var be = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
function _e(e2, n2, r2, o) {
  if (Array.isArray(e2)) {
    for (var s, i = [], a = 0, c2 = e2.length; a < c2; a += 1)
      "" !== (s = _e(e2[a], n2, r2, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (be(e2))
    return "";
  if (_(e2))
    return "." + e2.styledComponentId;
  if (E$1(e2)) {
    if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return _e(u2, n2, r2, o);
  }
  var l2;
  return e2 instanceof ye ? r2 ? (e2.inject(r2, o), e2.getName(o)) : e2 : g$1(e2) ? function e3(t2, n3) {
    var r3, o2, s2 = [];
    for (var i2 in t2)
      t2.hasOwnProperty(i2) && !be(t2[i2]) && (Array.isArray(t2[i2]) && t2[i2].isCss || E$1(t2[i2]) ? s2.push(Ee(i2) + ":", t2[i2], ";") : g$1(t2[i2]) ? s2.push.apply(s2, e3(t2[i2], i2)) : s2.push(Ee(i2) + ": " + (r3 = i2, null == (o2 = t2[i2]) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || r3 in unitlessKeys || r3.startsWith("--") ? String(o2).trim() : o2 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s2, ["}"]) : s2;
  }(e2) : e2.toString();
}
var Ne = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return E$1(e2) || g$1(e2) ? Ne(_e(v$1(S, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ne(_e(v$1(e2, n2)));
}
var Oe = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = w$1), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}, Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, De = /(^-|-$)/g;
function je(e2) {
  return e2.replace(Re, "-").replace(De, "");
}
var Te = function(e2) {
  return Q(te(e2) >>> 0);
};
function xe(e2) {
  return "string" == typeof e2 && true;
}
var ke = function(e2) {
  return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
}, Ve = function(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function Be(e2, t2, n2) {
  var r2 = e2[n2];
  ke(t2) && ke(r2) ? ze(r2, t2) : e2[n2] = t2;
}
function ze(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o = 0, s = n2; o < s.length; o++) {
    var i = s[o];
    if (ke(i))
      for (var a in i)
        Ve(a) && Be(e2, i[a], a);
  }
  return e2;
}
var Me = React$1.createContext(), Ge = Me.Consumer;
function Le(e2) {
  var t2 = reactExports$1.useContext(Me), n2 = reactExports$1.useMemo(function() {
    return function(e3, t3) {
      if (!e3)
        return D$1(14);
      if (E$1(e3)) {
        var n3 = e3(t3);
        return n3;
      }
      return Array.isArray(e3) || "object" != typeof e3 ? D$1(8) : t3 ? y$1({}, t3, {}, e3) : e3;
    }(e2.theme, t2);
  }, [e2.theme, t2]);
  return e2.children ? React$1.createElement(Me.Provider, { value: n2 }, e2.children) : null;
}
var Fe = {};
function Ye(e2, t2, n2) {
  var o = _(e2), i = !xe(e2), a = t2.attrs, c2 = void 0 === a ? S : a, l2 = t2.componentId, d2 = void 0 === l2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : je(e3);
    Fe[n3] = (Fe[n3] || 0) + 1;
    var r2 = n3 + "-" + Te("5.3.11" + n3 + Fe[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : l2, h2 = t2.displayName, p2 = void 0 === h2 ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + b$1(e3) + ")";
  }(e2) : h2, v2 = t2.displayName && t2.componentId ? je(t2.displayName) + "-" + t2.componentId : t2.componentId || d2, g2 = o && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, N2 = t2.shouldForwardProp;
  o && e2.shouldForwardProp && (N2 = t2.shouldForwardProp ? function(n3, r2, o2) {
    return e2.shouldForwardProp(n3, r2, o2) && t2.shouldForwardProp(n3, r2, o2);
  } : e2.shouldForwardProp);
  var A2, C2 = new oe(n2, v2, o ? e2.componentStyle : void 0), I2 = C2.isStatic && 0 === c2.length, P2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o2 = e4.attrs, i2 = e4.componentStyle, a2 = e4.defaultProps, c3 = e4.foldedComponentIds, l3 = e4.shouldForwardProp, d3 = e4.styledComponentId, h3 = e4.target, p3 = function(e5, t5, n4) {
        void 0 === e5 && (e5 = w$1);
        var r3 = y$1({}, t5, { theme: e5 }), o3 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s, i3 = e6;
          for (t6 in E$1(i3) && (i3 = i3(r3)), i3)
            r3[t6] = o3[t6] = "className" === t6 ? (n5 = o3[t6], s = i3[t6], n5 && s ? n5 + " " + s : n5 || s) : i3[t6];
        }), [r3, o3];
      }(Oe(t4, reactExports$1.useContext(Me), a2) || w$1, t4, o2), m2 = p3[0], v3 = p3[1], g3 = function(e5, t5, n4, r3) {
        var o3 = pe(), s = fe(), i3 = t5 ? e5.generateAndInjectStyles(w$1, o3, s) : e5.generateAndInjectStyles(n4, o3, s);
        return i3;
      }(i2, r2, m2), S2 = n3, b2 = v3.$as || t4.$as || v3.as || t4.as || h3, _2 = xe(b2), N3 = v3 !== t4 ? y$1({}, t4, {}, v3) : t4, A3 = {};
      for (var C3 in N3)
        "$" !== C3[0] && "as" !== C3 && ("forwardedAs" === C3 ? A3.as = N3[C3] : (l3 ? l3(C3, isPropValid, b2) : !_2 || isPropValid(C3)) && (A3[C3] = N3[C3]));
      return t4.style && v3.style !== t4.style && (A3.style = y$1({}, t4.style, {}, v3.style)), A3.className = Array.prototype.concat(c3, d3, g3 !== d3 ? g3 : null, t4.className, v3.className).filter(Boolean).join(" "), A3.ref = S2, reactExports$1.createElement(b2, A3);
    }(A2, e3, t3, I2);
  };
  return P2.displayName = p2, (A2 = React$1.forwardRef(P2)).attrs = g2, A2.componentStyle = C2, A2.displayName = p2, A2.shouldForwardProp = N2, A2.foldedComponentIds = o ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S, A2.styledComponentId = v2, A2.target = o ? e2.target : e2, A2.withComponent = function(e3) {
    var r2 = t2.componentId, o2 = function(e4, t3) {
      if (null == e4)
        return {};
      var n3, r3, o3 = {}, s2 = Object.keys(e4);
      for (r3 = 0; r3 < s2.length; r3++)
        n3 = s2[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e4[n3]);
      return o3;
    }(t2, ["componentId"]), s = r2 && r2 + "-" + (xe(e3) ? e3 : je(b$1(e3)));
    return Ye(e3, y$1({}, o2, { attrs: g2, componentId: s }), n2);
  }, Object.defineProperty(A2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o ? ze({}, e2.defaultProps, t3) : t3;
  } }), Object.defineProperty(A2, "toString", { value: function() {
    return "." + A2.styledComponentId;
  } }), i && hoistStatics(A2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), A2;
}
var qe = function(e2) {
  return function e3(t2, r2, o) {
    if (void 0 === o && (o = w$1), !reactIsExports$1.isValidElementType(r2))
      return D$1(1, String(r2));
    var s = function() {
      return t2(r2, o, Ae.apply(void 0, arguments));
    };
    return s.withConfig = function(n2) {
      return e3(t2, r2, y$1({}, o, {}, n2));
    }, s.attrs = function(n2) {
      return e3(t2, r2, y$1({}, o, { attrs: Array.prototype.concat(o.attrs, n2).filter(Boolean) }));
    }, s;
  }(Ye, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  qe[e2] = qe(e2);
});
var He = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = ne(e3), X.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o = r2(_e(this.rules, t3, n2, r2).join(""), ""), s = this.componentId + e3;
    n2.insertRules(s, s, o);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
function $e(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o = 1; o < t2; o++)
    n2[o - 1] = arguments[o];
  var i = Ae.apply(void 0, [e2].concat(n2)), a = "sc-global-" + Te(JSON.stringify(i)), u2 = new He(i, a);
  function d2(e3) {
    var t3 = pe(), n3 = fe(), o2 = reactExports$1.useContext(Me), d3 = reactExports$1.useRef(t3.allocateGSInstance(a)).current;
    return t3.server && h2(d3, e3, t3, o2, n3), reactExports$1.useLayoutEffect(function() {
      if (!t3.server)
        return h2(d3, e3, t3, o2, n3), function() {
          return u2.removeStyles(d3, t3);
        };
    }, [d3, e3, t3, o2, n3]), null;
  }
  function h2(e3, t3, n3, r2, o2) {
    if (u2.isStatic)
      u2.renderStyles(e3, P, n3, o2);
    else {
      var s = y$1({}, t3, { theme: Oe(t3, r2, d2.defaultProps) });
      u2.renderStyles(e3, s, n3, o2);
    }
  }
  return React$1.memo(d2);
}
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o = Ae.apply(void 0, [e2].concat(n2)).join(""), s = Te(o);
  return new ye(s, o);
}
var Ue = function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3)
        return "";
      var n2 = Y();
      return "<style " + [n2 && 'nonce="' + n2 + '"', N + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
    }, this.getStyleTags = function() {
      return e3.sealed ? D$1(2) : e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t3;
      if (e3.sealed)
        return D$1(2);
      var n2 = ((t3 = {})[N] = "", t3["data-styled-version"] = "5.3.11", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o = Y();
      return o && (n2.nonce = o), [React$1.createElement("style", y$1({}, n2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new X({ isServer: true }), this.sealed = false;
  }
  var t2 = e2.prototype;
  return t2.collectStyles = function(e3) {
    return this.sealed ? D$1(2) : React$1.createElement(me, { sheet: this.instance }, e3);
  }, t2.interleaveWithNodeStream = function(e3) {
    return D$1(3);
  }, e2;
}(), Je = function(e2) {
  var t2 = React$1.forwardRef(function(t3, n2) {
    var o = reactExports$1.useContext(Me), i = e2.defaultProps, a = Oe(t3, o, i);
    return React$1.createElement(e2, y$1({}, t3, { theme: a, ref: n2 }));
  });
  return hoistStatics(t2, e2), t2.displayName = "WithTheme(" + b$1(e2) + ")", t2;
}, Xe = function() {
  return reactExports$1.useContext(Me);
}, Ze = { StyleSheet: X, masterSheet: de };
const styledComponents_browser_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ServerStyleSheet: Ue,
  StyleSheetConsumer: ue,
  StyleSheetContext: ce,
  StyleSheetManager: me,
  ThemeConsumer: Ge,
  ThemeContext: Me,
  ThemeProvider: Le,
  __PRIVATE__: Ze,
  createGlobalStyle: $e,
  css: Ae,
  default: qe,
  isStyledComponent: _,
  keyframes: We,
  useTheme: Xe,
  version: A$1,
  withTheme: Je
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(styledComponents_browser_esm);
Object.defineProperty(dist, "__esModule", { value: true });
var React = reactExports$1;
var styled = require$$1;
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
function _interopNamespace(e2) {
  if (e2 && e2.__esModule)
    return e2;
  var n2 = /* @__PURE__ */ Object.create(null);
  if (e2) {
    Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  }
  n2["default"] = e2;
  return Object.freeze(n2);
}
var React__namespace = /* @__PURE__ */ _interopNamespace(React);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var styled__default = /* @__PURE__ */ _interopDefaultLegacy(styled);
var useStepper = function(initialStep) {
  var _a = React__namespace.useState(initialStep || 0), step = _a[0], setStep = _a[1];
  var next = function() {
    setStep(step + 1);
  };
  var previous = function() {
    setStep(step - 1);
  };
  return { next, previous, step };
};
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
var device = {
  mobileS: "(max-width: ".concat(size.mobileS, ")"),
  mobileM: "(max-width: ".concat(size.mobileM, ")"),
  mobileL: "(max-width: ".concat(size.mobileL, ")"),
  tablet: "(max-width: ".concat(size.tablet, ")"),
  laptop: "(max-width: ".concat(size.laptop, ")"),
  laptopL: "(max-width: ".concat(size.laptopL, ")"),
  desktop: "(max-width: ".concat(size.desktop, ")"),
  desktopL: "(max-width: ".concat(size.desktop, ")")
};
var colors = {
  pending: "#e9e9e9",
  completed: "#4BB543",
  progress: "#2178FF"
};
var StepState;
(function(StepState2) {
  StepState2["progress"] = "PROGRESS";
  StepState2["completed"] = "COMPLETED";
  StepState2["pending"] = "PENDING";
})(StepState || (StepState = {}));
var Stepper = function(_a) {
  var steps = _a.steps, customStyle = _a.customStyle, verticalOrientation = _a.verticalOrientation, activeStep = _a.activeStep;
  return React__default["default"].createElement(StyledStepper, { activeStep, verticalOrientation }, steps.map(function(step, index2) {
    return React__default["default"].createElement(
      StyledStep,
      { key: index2, state: activeStep > index2 ? StepState.completed : activeStep === index2 ? StepState.pending : StepState.progress, display: steps.length !== index2 + 1, verticalOrientation, customStyle },
      React__default["default"].createElement(
        "div",
        { className: "content" },
        React__default["default"].createElement("div", { className: "pointer" }, index2 + 1),
        React__default["default"].createElement(
          "div",
          { className: "description" },
          React__default["default"].createElement("h1", null, step.label),
          React__default["default"].createElement("p", null, step.description)
        )
      ),
      React__default["default"].createElement("hr", { className: "bridge" })
    );
  }));
};
var StyledStepper = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  flex-direction: ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  flex-direction: ", ";\n"])), function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "column" : "row";
});
var StyledStep = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: ", ";\n  position: relative;\n  flex: 1;\n\n  .content {\n    display: flex;\n    flex-direction: ", ";\n    align-items: ", ";\n    flex: 1;\n\n    .pointer {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      color: #fff;\n      width: 30px;\n      height: 30px;\n      z-index: 2;\n      background-color: ", ";\n    }\n\n    .description {\n      text-align: center;\n      word-break: break-word;\n      flex: 1;\n\n      h1 {\n        font-size: 16px;\n        margin-bottom: 0px;\n      }\n\n      p {\n        font-size: 14px;\n        padding: 10px;\n        margin-top: 0px;\n      }\n      @media ", " {\n        h1 {\n          font-size: 12px;\n        }\n\n        p {\n          font-size: px;\n          padding: 8px;\n        }\n      }\n    }\n  }\n\n  .bridge {\n    flex: 1;\n    width: ", ";\n    height: ", ";\n    left: ", ";\n    top: ", ";\n    margin: 0px;\n\n    border: none;\n    display: ", ";\n    position: absolute;\n    background-color: ", ";\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: ", ";\n  position: relative;\n  flex: 1;\n\n  .content {\n    display: flex;\n    flex-direction: ", ";\n    align-items: ", ";\n    flex: 1;\n\n    .pointer {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      color: #fff;\n      width: 30px;\n      height: 30px;\n      z-index: 2;\n      background-color: ", ";\n    }\n\n    .description {\n      text-align: center;\n      word-break: break-word;\n      flex: 1;\n\n      h1 {\n        font-size: 16px;\n        margin-bottom: 0px;\n      }\n\n      p {\n        font-size: 14px;\n        padding: 10px;\n        margin-top: 0px;\n      }\n      @media ", " {\n        h1 {\n          font-size: 12px;\n        }\n\n        p {\n          font-size: px;\n          padding: 8px;\n        }\n      }\n    }\n  }\n\n  .bridge {\n    flex: 1;\n    width: ", ";\n    height: ", ";\n    left: ", ";\n    top: ", ";\n    margin: 0px;\n\n    border: none;\n    display: ", ";\n    position: absolute;\n    background-color: ", ";\n  }\n"])), function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "column" : "row";
}, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "row" : "column";
}, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "none" : "center";
}, function(_a) {
  var state = _a.state, customStyle = _a.customStyle;
  return state === StepState.progress ? (customStyle === null || customStyle === void 0 ? void 0 : customStyle.pending) || colors.pending : state === StepState.completed ? (customStyle === null || customStyle === void 0 ? void 0 : customStyle.completed) || colors.completed : (customStyle === null || customStyle === void 0 ? void 0 : customStyle.progress) || colors.progress;
}, device.tablet, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "1px" : "85%";
}, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "100%" : "1px";
}, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "15px" : "57.5%";
}, function(_a) {
  var verticalOrientation = _a.verticalOrientation;
  return verticalOrientation ? "0px" : "13px";
}, function(_a) {
  var display = _a.display;
  return display ? "block" : "none";
}, function(_a) {
  var state = _a.state, customStyle = _a.customStyle;
  return state === StepState.progress ? (customStyle === null || customStyle === void 0 ? void 0 : customStyle.pending) || colors.pending : state === StepState.completed ? (customStyle === null || customStyle === void 0 ? void 0 : customStyle.completed) || colors.completed : (customStyle === null || customStyle === void 0 ? void 0 : customStyle.progress) || colors.progress;
});
var templateObject_1, templateObject_2;
var Stepper_1 = dist.Stepper = Stepper;
dist.useStepper = useStepper;
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore$1(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore$1)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators$1(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b2) {
    return function() {
      return a(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var ReactReduxContext = /* @__PURE__ */ React$1.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? reactExports$1.useLayoutEffect : reactExports$1.useEffect;
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = reactExports$1.useMemo(function() {
    var subscription = createSubscription(store);
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = reactExports$1.useMemo(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect$1(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ React$1.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if ("object" === typeof a && null !== a) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return y(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return y(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return y(a) === k;
};
reactIs_production_min.isFragment = function(a) {
  return y(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return y(a) === p;
};
reactIs_production_min.isMemo = function(a) {
  return y(a) === n;
};
reactIs_production_min.isPortal = function(a) {
  return y(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return y(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return y(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return y(a) === l;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
var _excluded$2 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$1(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges)
    return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error = e2;
      lastThrownError = e2;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey;
  _ref2.withRef;
  var _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? reactExports$1.useMemo : function(callback) {
      return callback();
    };
    function ConnectFunction(props) {
      var _useMemo = reactExports$1.useMemo(function() {
        var reactReduxForwardedRef2 = props.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded2);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = reactExports$1.useMemo(function() {
        return propsContext && propsContext.Consumer && reactIsExports.isContextConsumer(/* @__PURE__ */ React$1.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = reactExports$1.useContext(ContextToUse);
      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      Boolean(contextValue) && Boolean(contextValue.store);
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = reactExports$1.useMemo(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = reactExports$1.useMemo(function() {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = reactExports$1.useMemo(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = reactExports$1.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = reactExports$1.useRef();
      var lastWrapperProps = reactExports$1.useRef(wrapperProps);
      var childPropsFromStoreUpdate = reactExports$1.useRef();
      var renderIsScheduled = reactExports$1.useRef(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = reactExports$1.useMemo(function() {
        return /* @__PURE__ */ React$1.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = reactExports$1.useMemo(function() {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React$1.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? React$1.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      var forwarded = React$1.forwardRef(function forwardConnectRef(props, ref) {
        return /* @__PURE__ */ React$1.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }
    return hoistStatics(Connect, WrappedComponent);
  };
}
function is(x, y2) {
  if (x === y2) {
    return x !== 0 || y2 !== 0 || 1 / x === 1 / y2;
  } else {
    return x !== x && y2 !== y2;
  }
}
function shallowEqual2(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector2() {
      return constant;
    }
    constantSelector2.dependsOnOwnProps = false;
    return constantSelector2;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2) : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch) {
    return {
      dispatch
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch) {
    return bindActionCreators(mapDispatchToProps2, dispatch);
  }) : void 0;
}
const defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps) : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
const defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    _ref.displayName;
    var pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
const defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
var _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, _excluded$1);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
}
var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result)
      return result;
  }
  return function(dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a, b2) {
  return a === b2;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect2(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual2 : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual2 : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual2 : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
const connect = /* @__PURE__ */ createConnect();
setBatch(reactDomExports.unstable_batchedUpdates);
function areInputsEqual$1(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = reactExports$1.useState(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = reactExports$1.useRef(true);
  var committed = reactExports$1.useRef(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  reactExports$1.useEffect(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
var isProduction = true;
var prefix$2 = "Invariant failed";
function invariant$1(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix$2);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix$2, ": ").concat(provided) : prefix$2;
  throw new Error(value);
}
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing$1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? invariant$1(false) : void 0;
  return result;
};
var getWindowScroll$1 = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll$1();
  }
  return offset(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el2) {
  var borderBox = el2.getBoundingClientRect();
  var styles = window.getComputedStyle(el2);
  return calculateBox(borderBox, styles);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual4) {
  if (isEqual4 === void 0) {
    isEqual4 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual4(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var rafSchd = function rafSchd2(fn) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
const rafSchd$1 = rafSchd;
function log(type, message) {
  {
    return;
  }
}
log.bind(null, "warn");
log.bind(null, "error");
function noop() {
}
function getOptions(shared, fromBinding) {
  return _extends({}, shared, {}, fromBinding);
}
function bindEvents(el2, bindings, sharedOptions) {
  var unbindings = bindings.map(function(binding) {
    var options = getOptions(sharedOptions, binding.options);
    el2.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el2.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function(unbind) {
      unbind();
    });
  };
}
var prefix = "Invariant failed";
function RbdInvariant(message) {
  this.message = message;
}
RbdInvariant.prototype.toString = function toString() {
  return this.message;
};
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new RbdInvariant(prefix);
  }
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;
    _this.onWindowError = function(event) {
      var callbacks = _this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
      }
      var err2 = event.error;
      if (err2 instanceof RbdInvariant) {
        event.preventDefault();
      }
    };
    _this.getCallbacks = function() {
      if (!_this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return _this.callbacks;
    };
    _this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    return _this;
  }
  var _proto = ErrorBoundary2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  };
  _proto.componentDidCatch = function componentDidCatch(err2) {
    if (err2 instanceof RbdInvariant) {
      this.setState({});
      return;
    }
    throw err2;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };
  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };
  return ErrorBoundary2;
}(React$1.Component);
var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";
var position = function position2(index2) {
  return index2 + 1;
};
var onDragStart = function onDragStart2(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id2, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id2 + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id2 + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual2(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line, value, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line] = value, _ref[line === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn) {
  return function(point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};
var executeClip = function(frame, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame) {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;
    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }
  return target;
};
var clip = function clip2(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? invariant(false) : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame = _extends({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  var result = _extends({}, droppable2, {
    frame,
    subject
  });
  return result;
};
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }
  return Object.keys(map).map(function(key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index2 = findIndex(list, predicate);
  if (index2 !== -1) {
    return list[index2];
  }
  return void 0;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}
var toDroppableMap = memoizeOne(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoizeOne(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoizeOne(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoizeOne(function(draggables) {
  return values(draggables);
});
var getDraggablesInsideDroppable = memoizeOne(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a, b2) {
    return a.descriptor.index - b2.descriptor.index;
  });
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoizeOne(function(remove, list) {
  return list.filter(function(item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    var at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return _extends({}, previousImpact, {
      at
    });
  }
  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  var indexOfClosest = findIndex(withoutDraggable, function(d2) {
    return d2.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ? invariant(false) : void 0;
  var proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = function(lowerBound, upperBound) {
  return function(value) {
    return lowerBound <= value && value <= upperBound;
  };
};
var isPartiallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(id2, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  var invisible = last.invisible, visible = last.visible;
  if (invisible[id2]) {
    return false;
  }
  var previous = visible[id2];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  var marginBox = draggable2.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging, destination = _ref.destination, displacedBy = _ref.displacedBy, viewport = _ref.viewport, forceShouldAnimate = _ref.forceShouldAnimate, last = _ref.last;
  return afterDragging.reduce(function process2(groups, draggable2) {
    var target = getTarget(draggable2, displacedBy);
    var id2 = draggable2.descriptor.id;
    groups.all.push(id2);
    var isVisible3 = isPartiallyVisible({
      target,
      destination,
      viewport,
      withDroppableDisplacement: true
    });
    if (!isVisible3) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    var shouldAnimate = getShouldAnimate(id2, last, forceShouldAnimate);
    var displacement = {
      draggableId: id2,
      shouldAnimate
    };
    groups.visible[id2] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination, inHomeList = _ref.inHomeList, displacedBy = _ref.displacedBy, destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact(_ref2) {
  var draggable2 = _ref2.draggable, insideDestination = _ref2.insideDestination, destination = _ref2.destination, viewport = _ref2.viewport, displacedBy = _ref2.displacedBy, last = _ref2.last, index2 = _ref2.index, forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable2, destination);
  if (index2 == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var match2 = find(insideDestination, function(item) {
    return item.descriptor.index === index2;
  });
  if (!match2) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var sliceFrom = insideDestination.indexOf(match2);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: index2
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, draggables = _ref.draggables, combine2 = _ref.combine, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var combineId = combine2.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, insideDestination = _ref.insideDestination, location = _ref.location;
  if (!insideDestination.length) {
    return null;
  }
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ? invariant(false) : void 0;
  if (wasAt.type === "REORDER") {
    var _newIndex = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (_newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }
  var newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, afterCritical = _ref.afterCritical, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = function(_ref) {
  var afterCritical = _ref.afterCritical, impact = _ref.impact, draggables = _ref.draggables;
  var combine2 = tryGetCombine(impact);
  !combine2 ? invariant(false) : void 0;
  var combineWith = combine2.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = impact.displaced, displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];
  if (closestAfter) {
    var closest3 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest3.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset(closest3.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = offset(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, afterCritical = _ref.afterCritical;
  var original = draggable2.page.borderBox.center;
  var at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
function tryGetVisible(id2, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id2];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  var withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach(function(id2) {
    var displacement = tryGetVisible(id2, groups);
    if (displacement) {
      visible[id2] = displacement;
      return;
    }
    invisible[id2] = true;
  });
  var newImpact = _extends({}, impact, {
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  });
  return newImpact;
};
var withViewportDisplacement = function(viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset3 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset3);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, afterCritical = _ref.afterCritical;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance3
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? invariant(false) : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a, b2) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b2)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index2, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort(function(a, b2) {
      return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
    })[0];
  }
  return candidates.sort(function(a, b2) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b2)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a, b2) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b2, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a.descriptor.index - b2.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame, max) {
  return _extends({}, frame, {
    scroll: _extends({}, frame.scroll, {
      max
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? invariant(false) : void 0;
  !!droppable2.subject.withPlaceholder ? invariant(false) : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? invariant(false) : void 0;
  var frame = droppable2.frame;
  if (!frame) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? invariant(false) : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var proposedIndex = function() {
    var relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  }();
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = function(impact) {
  var at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
var getDroppableOver = function getDroppableOver2(impact, droppables) {
  var id2 = whatIsDraggedOver(impact);
  return id2 ? droppables[id2] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox, draggable2 = _ref.draggable, candidates = _ref.candidates;
  var startCenter = draggable2.page.borderBox.center;
  var sorted = candidates.map(function(candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function(a, b2) {
    return b2.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox, draggable2 = _ref2.draggable, droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function(item) {
    if (!item.isEnabled) {
      return false;
    }
    var active = item.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
var offsetRectByPosition = function offsetRectByPosition2(rect, point) {
  return getRect(offsetByPosition(rect, point));
};
var withDroppableScroll = function(droppable2, area) {
  var frame = droppable2.frame;
  if (!frame) {
    return area;
  }
  return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced(_ref) {
  var displaced = _ref.displaced, id2 = _ref.id;
  return Boolean(displaced.visible[id2] || displaced.invisible[id2]);
}
function atIndex(_ref) {
  var draggable2 = _ref.draggable, closest3 = _ref.closest, inHomeList = _ref.inHomeList;
  if (!closest3) {
    return null;
  }
  if (!inHomeList) {
    return closest3.descriptor.index;
  }
  if (closest3.descriptor.index > draggable2.descriptor.index) {
    return closest3.descriptor.index - 1;
  }
  return closest3.descriptor.index;
}
var getReorderImpact = function(_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll, draggable2 = _ref2.draggable, destination = _ref2.destination, insideDestination = _ref2.insideDestination, last = _ref2.last, viewport = _ref2.viewport, afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var closest3 = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable2,
    closest: closest3,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last,
    displacedBy,
    index: newIndex
  });
};
var combineThresholdDivisor = 4;
var getCombineImpact = function(_ref) {
  var draggable2 = _ref.draggable, targetRect = _ref.pageBorderBoxWithDroppableScroll, previousImpact = _ref.previousImpact, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var combineWith = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  var impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = function(_ref) {
  var pageOffset = _ref.pageOffset, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport,
    afterCritical
  });
};
var patchDroppableMap = function(droppables, updated) {
  var _extends2;
  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset3 = subtract(clientSelection, state.initial.client.selection);
  var client2 = {
    offset: offset3,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset3)
  };
  var page = {
    selection: add(client2.selection, viewport.scroll.current),
    borderBoxCenter: add(client2.borderBoxCenter, viewport.scroll.current),
    offset: add(client2.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client2,
    page
  };
  if (state.phase === "COLLECTING") {
    return _extends({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport,
      current
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends({}, state, {
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
function getDraggables$1(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
var recompute = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, draggables = _ref.draggables, destination = _ref.destination, forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate,
    last
  });
  return _extends({}, impact, {
    displaced
  });
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? invariant(false) : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? invariant(false) : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getLiftEffect = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? invariant(false) : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function(previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  var displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client2 = offset(draggable2.client, offset$1);
  var page = withScroll(client2, initialWindowScroll);
  var moved = _extends({}, draggable2, {
    placeholder: _extends({}, draggable2.placeholder, {
      client: client2
    }),
    client: client2,
    page
  });
  return moved;
};
var getFrame = function(droppable2) {
  var frame = droppable2.frame;
  !frame ? invariant(false) : void 0;
  return frame;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = function(_ref) {
  var state = _ref.state, published = _ref.published;
  var withScrollChange = published.modified.map(function(update2) {
    var existing = state.dimensions.droppables[update2.droppableId];
    var scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));
  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);
  published.removals.forEach(function(id2) {
    delete draggables[id2];
  });
  var dimensions = {
    droppables,
    draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var home2 = dimensions.droppables[state.critical.droppable.id];
  var _getLiftEffect = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  }), onLiftImpact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  var draggingState = _extends({
    phase: "DRAGGING"
  }, state, {
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  });
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends({
    phase: "DROP_PENDING"
  }, draggingState, {
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  });
  return dropPending3;
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return _extends({
      phase: "DRAGGING"
    }, state, {
      scrollJumpRequest: null
    });
  }
  return state;
}
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "FLUSH") {
    return _extends({}, idle, {
      shouldFlush: true
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? invariant(false) : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client2 = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client2,
      page: {
        selection: add(client2.selection, viewport.scroll.initial),
        borderBoxCenter: add(client2.selection, viewport.scroll.initial),
        offset: add(client2.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item) {
      return !item.isFixedOnPage;
    });
    var _getLiftEffect = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    }), impact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant(false) : void 0;
    var _result = _extends({
      phase: "COLLECTING"
    }, state, {
      phase: "COLLECTING"
    });
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload2 = action.payload, id2 = _action$payload2.id, newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id2];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? invariant(false) : void 0;
    !(_target.isEnabled !== isEnabled) ? invariant(false) : void 0;
    var updated = _extends({}, _target, {
      isEnabled
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? invariant(false) : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? invariant(false) : void 0;
    var _updated = _extends({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    !state.isWindowScrollAllowed ? invariant(false) : void 0;
    var _newScroll = action.payload.newScroll;
    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }
    var _viewport = scrollViewport(state.viewport, _newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends({}, state.viewport, {
      scroll: _extends({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant(false) : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? invariant(false) : void 0;
    var newState = _extends({
      phase: "DROP_PENDING"
    }, state, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    });
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _completed = action.payload.completed;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush: false
    };
  }
  return state;
};
var beforeInitialCapture = function beforeInitialCapture2(args) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  };
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var flush = function flush2() {
  return {
    type: "FLUSH",
    payload: null
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id2 = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }
        !(getState().phase === "IDLE") ? invariant(false) : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id2,
          movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id2,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport = _marshal$startPublish.viewport;
        dispatch(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "FLUSH" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset3) {
  return isEqual(offset3, origin) ? null : "translate(" + offset3.x + "px, " + offset3.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset3, isCombining) {
    var translate = moveTo(offset3);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime, maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport
  });
  var offset3 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset3;
};
var getDropImpact = function(_ref) {
  var draggables = _ref.draggables, reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport = _ref.viewport, onLiftImpact = _ref.onLiftImpact;
  if (!lastImpact.at || reason !== "DROP") {
    var recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  var withoutMovement = _extends({}, lastImpact, {
    displaced: emptyGroups
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? invariant(false) : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch(animateDrop(args));
    };
  };
};
var getWindowScroll2 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;
  function updateScroll() {
    onWindowScroll(getWindowScroll2());
  }
  var scheduled = rafSchd$1(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;
  function isActive() {
    return unbind !== noop;
  }
  function start() {
    !!isActive() ? invariant(false) : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive() ? invariant(false) : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }
  return {
    start,
    stop,
    isActive
  };
}
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var scrollListener = function(store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return function(next) {
    return function(action) {
      if (!listener.isActive() && action.type === "INITIAL_PUBLISH") {
        listener.start();
      }
      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }
      next(action);
    };
  };
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      return;
    }
    if (isExpired) {
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index2 = findIndex(entries, function(item) {
      return item.timerId === timerId;
    });
    !(index2 !== -1) ? invariant(false) : void 0;
    var _entries$splice = entries.splice(index2, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  var flush3 = function flush4() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush: flush3
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn) {
  fn();
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeCapture = function beforeCapture2(draggableId, mode) {
    !!dragging ? invariant(false) : void 0;
    withTimings("onBeforeCapture", function() {
      var fn = getResponders().onBeforeCapture;
      if (fn) {
        var before = {
          draggableId,
          mode
        };
        fn(before);
      }
    });
  };
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? invariant(false) : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  var start = function start2(critical, mode) {
    !!dragging ? invariant(false) : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = tryGetDestination(impact);
    var combine2 = tryGetCombine(impact);
    !dragging ? invariant(false) : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data = _extends({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };
  var flush3 = function flush4() {
    !dragging ? invariant(false) : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? invariant(false) : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start,
    update: update2,
    flush: flush3,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "BEFORE_INITIAL_CAPTURE") {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "FLUSH") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? invariant(false) : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
};
var dropAnimationFlushOnScroll = function(store) {
  var unbind = null;
  var frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return function(next) {
    return function(action) {
      if (action.type === "FLUSH" || action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATION_FINISHED") {
        clear();
      }
      next(action);
      if (action.type !== "DROP_ANIMATE") {
        return;
      }
      var binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function() {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "FLUSH" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var focus = function(marshal) {
  var isWatching = false;
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }
        next(action);
        if (!isWatching) {
          return;
        }
        if (action.type === "FLUSH") {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          isWatching = false;
          var result = action.payload.completed.result;
          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }
          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
};
var shouldStop = function shouldStop2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? invariant(false) : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = compose;
var createStore = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, focusMarshal = _ref.focusMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore$1(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
};
var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry, callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;
  var collect = function collect2() {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function() {
      frameId = null;
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = Object.keys(additions).map(function(id2) {
        return registry.draggable.getById(id2).getDimension(origin);
      }).sort(function(a, b2) {
        return a.descriptor.index - b2.descriptor.index;
      });
      var updated = Object.keys(modified).map(function(id2) {
        var entry = registry.droppable.getById(id2);
        var scroll3 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id2,
          scroll: scroll3
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      callbacks.publish(result);
    });
  };
  var add3 = function add4(entry) {
    var id2 = entry.descriptor.id;
    staging.additions[id2] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id2]) {
      delete staging.removals[id2];
    }
    collect();
  };
  var remove = function remove2(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add3,
    remove,
    stop
  };
}
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement = function() {
  var doc = document.documentElement;
  !doc ? invariant(false) : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll2();
  var maxScroll = getMaxWindowScroll();
  var top = scroll3.y;
  var left = scroll3.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = getRect({
    top,
    left,
    right,
    bottom
  });
  var viewport = {
    frame,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, registry = _ref.registry;
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home2 = critical.droppable;
  var droppables = registry.droppable.getAllByType(home2.type).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  var result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  var home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    return false;
  }
  return true;
}
var createDimensionMarshal = function(registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id2, isEnabled) {
    !registry.droppable.exists(id2) ? invariant(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id: id2,
      isEnabled
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id2, isCombineEnabled) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant(false) : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id2,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id2, newScroll) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant(false) : void 0;
    callbacks.updateDroppableScroll({
      id: id2,
      newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id2, change) {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id2).callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };
  var subscriber = function subscriber2(event) {
    !collection ? invariant(false) : void 0;
    var dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? invariant(false) : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home2 = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id2) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id2) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoizeOne(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? invariant(false) : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$2 = apply(function(value) {
  return value === 0 ? 0 : value;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required = clean$2({
    x,
    y: y2
  });
  if (isEqual(required, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required
  });
  if (!limited) {
    return null;
  }
  return isEqual(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value) {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
var getOverlap = function() {
  var getRemainder = function getRemainder2(target, max) {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport = _ref.viewport, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = rafSchd$1(scrollWindow2);
  var scheduleDroppableScroll = rafSchd$1(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? invariant(false) : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var start$1 = function start$12(state) {
    !!dragging ? invariant(false) : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset3) {
    var client2 = add(state.current.client.selection, offset3);
    move3({
      client: client2
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? invariant(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix$1 = "data-rbd";
var dragHandle = function() {
  var base = prefix$1 + "-drag-handle";
  return {
    base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function() {
  var base = prefix$1 + "-draggable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function() {
  var base = prefix$1 + "-droppable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property) {
  return rules.map(function(rule) {
    var value = rule.styles[property];
    if (!value) {
      return "";
    }
    return rule.selector + " { " + value + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(contextId) {
  var getSelector2 = makeGetSelector(contextId);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? reactExports$1.useLayoutEffect : reactExports$1.useEffect;
var getHead = function getHead2() {
  var head = document.querySelector("head");
  !head ? invariant(false) : void 0;
  return head;
};
var createStyleEl = function createStyleEl2(nonce) {
  var el2 = document.createElement("style");
  if (nonce) {
    el2.setAttribute("nonce", nonce);
  }
  el2.type = "text/css";
  return el2;
};
function useStyleMarshal(contextId, nonce) {
  var styles = useMemo(function() {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = reactExports$1.useRef(null);
  var dynamicRef = reactExports$1.useRef(null);
  var setDynamicStyle = useCallback(memoizeOne(function(proposed) {
    var el2 = dynamicRef.current;
    !el2 ? invariant(false) : void 0;
    el2.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback(function(proposed) {
    var el2 = alwaysRef.current;
    !el2 ? invariant(false) : void 0;
    el2.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? invariant(false) : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function() {
      var remove = function remove2(ref) {
        var current = ref.current;
        !current ? invariant(false) : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = useCallback(function() {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = useCallback(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles.dropAnimating);
      return;
    }
    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = useCallback(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = useMemo(function() {
    return {
      dragging,
      dropping,
      resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}
var getWindowFromEl = function(el2) {
  return el2 && el2.ownerDocument ? el2.ownerDocument.defaultView : window;
};
function isHtmlElement(el2) {
  return el2 instanceof getWindowFromEl(el2).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  var selector2 = "[" + dragHandle.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector2));
  if (!possible.length) {
    return null;
  }
  var handle = find(possible, function(el2) {
    return el2.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function useFocusMarshal(contextId) {
  var entriesRef = reactExports$1.useRef({});
  var recordRef = reactExports$1.useRef(null);
  var restoreFocusFrameRef = reactExports$1.useRef(null);
  var isMountedRef = reactExports$1.useRef(false);
  var register = useCallback(function register2(id2, focus2) {
    var entry = {
      id: id2,
      focus: focus2
    };
    entriesRef.current[id2] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id2];
      if (current !== entry) {
        delete entries[id2];
      }
    };
  }, []);
  var tryGiveFocus = useCallback(function tryGiveFocus2(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);
    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = useCallback(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(function() {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = useCallback(function tryRecordFocus2(id2) {
    recordRef.current = null;
    var focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id2) {
      return;
    }
    recordRef.current = id2;
  }, []);
  useIsomorphicLayoutEffect(function() {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = useMemo(function() {
    return {
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];
  function subscribe(cb2) {
    subscribers.push(cb2);
    return function unsubscribe() {
      var index2 = subscribers.indexOf(cb2);
      if (index2 === -1) {
        return;
      }
      subscribers.splice(index2, 1);
    };
  }
  function notify2(event) {
    if (subscribers.length) {
      subscribers.forEach(function(cb2) {
        return cb2(event);
      });
    }
  }
  function findDraggableById(id2) {
    return entries.draggables[id2] || null;
  }
  function getDraggableById(id2) {
    var entry = findDraggableById(id2);
    !entry ? invariant(false) : void 0;
    return entry;
  }
  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify2({
        type: "ADDITION",
        value: entry
      });
    },
    update: function update2(entry, last) {
      var current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      notify2({
        type: "REMOVAL",
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id2) {
      return Boolean(findDraggableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function findDroppableById(id2) {
    return entries.droppables[id2] || null;
  }
  function getDroppableById(id2) {
    var entry = findDroppableById(id2);
    !entry ? invariant(false) : void 0;
    return entry;
  }
  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id2) {
      return Boolean(findDroppableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function clean2() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean2
  };
}
function useRegistry() {
  var registry = useMemo(createRegistry, []);
  reactExports$1.useEffect(function() {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}
var StoreContext = React$1.createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? invariant(false) : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id2 = useMemo(function() {
    return getId(contextId);
  }, [contextId]);
  var ref = reactExports$1.useRef(null);
  reactExports$1.useEffect(function setup() {
    var el2 = document.createElement("div");
    ref.current = el2;
    el2.id = id2;
    el2.setAttribute("aria-live", "assertive");
    el2.setAttribute("aria-atomic", "true");
    _extends(el2.style, visuallyHidden);
    getBodyElement().appendChild(el2);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();
        if (body.contains(el2)) {
          body.removeChild(el2);
        }
        if (el2 === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id2]);
  var announce = useCallback(function(message) {
    var el2 = ref.current;
    if (el2) {
      el2.textContent = message;
      return;
    }
  }, []);
  return announce;
}
var count = 0;
var defaults = {
  separator: "::"
};
function useUniqueId(prefix2, options) {
  if (options === void 0) {
    options = defaults;
  }
  return useMemo(function() {
    return "" + prefix2 + options.separator + count++;
  }, [options.separator, prefix2]);
}
function getElementId(_ref) {
  var contextId = _ref.contextId, uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId, text = _ref2.text;
  var uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  var id2 = useMemo(function() {
    return getElementId({
      contextId,
      uniqueId
    });
  }, [uniqueId, contextId]);
  reactExports$1.useEffect(function mount() {
    var el2 = document.createElement("div");
    el2.id = id2;
    el2.textContent = text;
    el2.style.display = "none";
    getBodyElement().appendChild(el2);
    return function unmount() {
      var body = getBodyElement();
      if (body.contains(el2)) {
        body.removeChild(el2);
      }
    };
  }, [id2, text]);
  return id2;
}
var AppContext = React$1.createContext(null);
function usePrevious(current) {
  var ref = reactExports$1.useRef(current);
  reactExports$1.useEffect(function() {
    ref.current = current;
  });
  return ref;
}
function create() {
  var lock = null;
  function isClaimed() {
    return Boolean(lock);
  }
  function isActive(value) {
    return value === lock;
  }
  function claim(abandon) {
    !!lock ? invariant(false) : void 0;
    var newLock = {
      abandon
    };
    lock = newLock;
    return newLock;
  }
  function release() {
    !lock ? invariant(false) : void 0;
    lock = null;
  }
  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive,
    claim,
    release,
    tryAbandon
  };
}
var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = {
  type: "IDLE"
};
function getCaptureBindings(_ref) {
  var cancel = _ref.cancel, completed = _ref.completed, getPhase = _ref.getPhase, setPhase = _ref.setPhase;
  return [{
    eventName: "mousemove",
    fn: function fn(event) {
      var button = event.button, clientX = event.clientX, clientY = event.clientY;
      if (button !== primaryButton) {
        return;
      }
      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? invariant(false) : void 0;
      var pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: function fn(event) {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant(false) : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  var phaseRef = reactExports$1.useRef(idle$1);
  var unbindEventsRef = reactExports$1.useRef(noop);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = useMemo(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }
        var id2 = api.findClosestDraggableId(event);
        if (!id2) {
          return;
        }
        var options = api.findOptionsForDraggable(id2);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id2)) {
          return;
        }
        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? invariant(false) : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var _scrollJumpKeys;
function noop$1() {
}
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop5() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop5();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  var unbindEventsRef = reactExports$1.useRef(noop$1);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? invariant(false) : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var idle$2 = {
  type: "IDLE"
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
function getWindowBindings(_ref) {
  var cancel = _ref.cancel, getPhase = _ref.getPhase;
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel, completed = _ref2.completed, getPhase = _ref2.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      var _event$touches$ = event.touches[0], clientX = _event$touches$.clientX, clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant(false) : void 0;
      var touch = event.touches[0];
      if (!touch) {
        return;
      }
      var isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      var shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  var phaseRef = reactExports$1.useRef(idle$2);
  var unbindEventsRef = reactExports$1.useRef(noop);
  var getPhase = useCallback(function getPhase2() {
    return phaseRef.current;
  }, []);
  var setPhase = useCallback(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        var touch = event.touches[0];
        var clientX = touch.clientX, clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel,
      completed: stop,
      getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = useCallback(function startDragging2() {
    var phase = getPhase();
    !(phase.type === "PENDING") ? invariant(false) : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? invariant(false) : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: function fn() {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  var target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = function(el2) {
  return getRect(el2.getBoundingClientRect()).center;
};
function isElement(el2) {
  return el2 instanceof getWindowFromEl(el2).Element;
}
var supportedMatchesName = function() {
  var base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  var value = find(candidates, function(name) {
    return name in Element.prototype;
  });
  return value || base;
}();
function closestPonyfill(el2, selector2) {
  if (el2 == null) {
    return null;
  }
  if (el2[supportedMatchesName](selector2)) {
    return el2;
  }
  return closestPonyfill(el2.parentElement, selector2);
}
function closest$1(el2, selector2) {
  if (el2.closest) {
    return el2.closest(selector2);
  }
  return closestPonyfill(el2, selector2);
}
function getSelector(contextId) {
  return "[" + dragHandle.contextId + '="' + contextId + '"]';
}
function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;
  if (!isElement(target)) {
    return null;
  }
  var selector2 = getSelector(contextId);
  var handle = closest$1(target, selector2);
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);
  if (!handle) {
    return null;
  }
  return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  var selector2 = "[" + draggable.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector2));
  var draggable$1 = find(possible, function(el2) {
    return el2.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function _isActive(_ref) {
  var expected = _ref.expected, phase = _ref.phase, isLockActive = _ref.isLockActive;
  _ref.shouldWarn;
  if (!isLockActive()) {
    return false;
  }
  if (expected !== phase) {
    return false;
  }
  return true;
}
function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI, store = _ref2.store, registry = _ref2.registry, draggableId = _ref2.draggableId;
  if (lockAPI.isClaimed()) {
    return false;
  }
  var entry = registry.draggable.findById(draggableId);
  if (!entry) {
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI, contextId = _ref3.contextId, store = _ref3.store, registry = _ref3.registry, draggableId = _ref3.draggableId, forceSensorStop = _ref3.forceSensorStop, sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  var entry = registry.draggable.getById(draggableId);
  var el2 = findDraggable(contextId, entry.descriptor.id);
  if (!el2) {
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el2, sourceEvent)) {
    return null;
  }
  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock);
  }
  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  var tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift$12(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      !(phase === "PRE_DRAG") ? invariant(false) : void 0;
    }
    store.dispatch(lift(args.liftActionArgs));
    phase = "DRAGGING";
    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }
      args.cleanup();
      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return _extends({
      isActive: function isActive() {
        return _isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop5(options) {
        return finish("DROP", options);
      },
      cancel: function cancel(options) {
        return finish("CANCEL", options);
      }
    }, args.actions);
  }
  function fluidLift(clientSelection) {
    var move$1 = rafSchd$1(function(client2) {
      tryDispatchWhenDragging(function() {
        return move({
          client: client2
        });
      });
    });
    var api = lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return _extends({}, api, {
      move: move$1
    });
  }
  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el2),
        movementMode: "SNAP"
      },
      cleanup: noop,
      actions
    });
  }
  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId, store = _ref4.store, registry = _ref4.registry, customSensors = _ref4.customSensors, enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = reactExports$1.useState(function() {
    return create();
  })[0];
  var tryAbandonLock = useCallback(function tryAbandonLock2(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function() {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function() {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = useCallback(function(draggableId) {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = useCallback(function(draggableId, forceStop, options) {
    return tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = useCallback(function(event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = useCallback(function(id2) {
    var entry = registry.draggable.findById(id2);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = useCallback(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]);
  var api = useMemo(function() {
    return {
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}
var createResponders = function createResponders2(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? invariant(false) : void 0;
  return lazyRef.current;
}
function App$1(props) {
  var contextId = props.contextId, setCallbacks = props.setCallbacks, sensors = props.sensors, nonce = props.nonce, dragHandleUsageInstructions2 = props.dragHandleUsageInstructions;
  var lazyStoreRef = reactExports$1.useRef(null);
  var lastPropsRef = usePrevious(props);
  var getResponders = useCallback(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = useCallback(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = useMemo(function() {
    return bindActionCreators$1({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = useMemo(function() {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = useMemo(function() {
    return createAutoScroller(_extends({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators$1({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = useMemo(function() {
    return createStore({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  lazyStoreRef.current = store;
  var tryResetStore = useCallback(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = useCallback(function() {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === "DROP_ANIMATING";
  }, []);
  var appCallbacks = useMemo(function() {
    return {
      isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = useCallback(function(id2) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id2);
  }, []);
  var getIsMovementAllowed = useCallback(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo(function() {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  reactExports$1.useEffect(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return React$1.createElement(AppContext.Provider, {
    value: appContext
  }, React$1.createElement(Provider, {
    context: StoreContext,
    store
  }, props.children));
}
var count$1 = 0;
function useInstanceCount() {
  return useMemo(function() {
    return "" + count$1++;
  }, []);
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React$1.createElement(ErrorBoundary, null, function(setCallbacks) {
    return React$1.createElement(App$1, {
      nonce: props.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}
var isEqual$1 = function isEqual3(base) {
  return function(value) {
    return base === value;
  };
};
var isScroll = isEqual$1("scroll");
var isAuto = isEqual$1("auto");
var isEither = function isEither2(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el2) {
  var style2 = window.getComputedStyle(el2);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  {
    return false;
  }
};
var getClosestScrollable = function getClosestScrollable2(el2) {
  if (el2 == null) {
    return null;
  }
  if (el2 === document.body) {
    return isBodyScrollable() ? el2 : null;
  }
  if (el2 === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el2)) {
    return getClosestScrollable2(el2.parentElement);
  }
  return el2;
};
var getScroll$1 = function(el2) {
  return {
    x: el2.scrollLeft,
    y: el2.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el2) {
  if (!el2) {
    return false;
  }
  var style2 = window.getComputedStyle(el2);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el2.parentElement);
};
var getEnv = function(start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client2 = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client: client2,
    page,
    frame,
    subject
  };
  return dimension;
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top,
    right,
    bottom,
    left
  };
  var borderBox = expand(paddingBox, base.border);
  var client2 = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client2;
};
var getDimension = function(_ref) {
  var ref = _ref.ref, descriptor = _ref.descriptor, env2 = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env2.closestScrollable;
  var client2 = getClient(ref, closestScrollable);
  var page = withScroll(client2, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env2.isFixedOnPage,
    direction,
    client: client2,
    page,
    closest: closest3
  });
  return dimension;
};
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = reactExports$1.useContext(Context);
  !result ? invariant(false) : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppablePublisher(args) {
  var whileDraggingRef = reactExports$1.useRef(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId("droppable");
  var registry = appContext.registry, marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = useMemo(function() {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = reactExports$1.useRef(descriptor);
  var memoizedUpdateScroll = useMemo(function() {
    return memoizeOne(function(x, y2) {
      !whileDraggingRef.current ? invariant(false) : void 0;
      var scroll4 = {
        x,
        y: y2
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo(function() {
    return rafSchd$1(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant(false) : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback(function(windowScroll, options) {
    !!whileDraggingRef.current ? invariant(false) : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ? invariant(false) : void 0;
    var env2 = getEnv(ref);
    var dragging = {
      ref,
      descriptor,
      env: env2,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref,
      descriptor,
      env: env2,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env2.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant(false) : void 0;
    return getScroll$1(closest3);
  }, []);
  var dragStopped = useCallback(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeAttribute(scrollContainer.contextId);
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? invariant(false) : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo(function() {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll3]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function() {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function() {
      if (whileDraggingRef.current) {
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop$2() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder = _ref.placeholder, animate = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder = _ref2.placeholder, animate = _ref2.animate;
  var size2 = getSize({
    isAnimatingOpenOnMount,
    placeholder,
    animate
  });
  return {
    display: placeholder.display,
    boxSizing: "border-box",
    width: size2.width,
    height: size2.height,
    marginTop: size2.margin.top,
    marginRight: size2.margin.right,
    marginBottom: size2.margin.bottom,
    marginLeft: size2.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate !== "none" ? transitions.placeholder : null
  };
};
function Placeholder(props) {
  var animateOpenTimerRef = reactExports$1.useRef(null);
  var tryClearAnimateOpenTimer = useCallback(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate, onTransitionEnd = props.onTransitionEnd, onClose = props.onClose, contextId = props.contextId;
  var _useState = reactExports$1.useState(props.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  reactExports$1.useEffect(function() {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }
    if (animateOpenTimerRef.current) {
      return noop$2;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return React$1.createElement(props.placeholder.tagName, {
    style: style2,
    "data-rbd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}
var Placeholder$1 = React$1.memo(Placeholder);
var DroppableContext = React$1.createContext(null);
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(React$1.PureComponent);
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset3 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset3, isCombining) : transforms.moveTo(offset3);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el2, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el2);
  var borderBox = el2.getBoundingClientRect();
  var client2 = calculateBox(borderBox, computedStyles);
  var page = withScroll(client2, windowScroll);
  var placeholder = {
    client: client2,
    tagName: el2.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client2.marginBox.width,
    y: client2.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder,
    displaceBy,
    client: client2,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  var uniqueId = useUniqueId("draggable");
  var descriptor = args.descriptor, registry = args.registry, getDraggableRef = args.getDraggableRef, canDragInteractiveElements = args.canDragInteractiveElements, shouldRespectForcePress = args.shouldRespectForcePress, isEnabled = args.isEnabled;
  var options = useMemo(function() {
    return {
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension2 = useCallback(function(windowScroll) {
    var el2 = getDraggableRef();
    !el2 ? invariant(false) : void 0;
    return getDimension$1(descriptor, el2, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    };
  }, [descriptor, getDimension2, options, uniqueId]);
  var publishedRef = reactExports$1.useRef(entry);
  var isFirstPublishRef = reactExports$1.useRef(true);
  useIsomorphicLayoutEffect(function() {
    registry.draggable.register(publishedRef.current);
    return function() {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function() {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function Draggable(props) {
  var ref = reactExports$1.useRef(null);
  var setRef = useCallback(function(el2) {
    ref.current = el2;
  }, []);
  var getRef = useCallback(function() {
    return ref.current;
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), contextId = _useRequiredContext.contextId, dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId, registry = _useRequiredContext.registry;
  var _useRequiredContext2 = useRequiredContext(DroppableContext), type = _useRequiredContext2.type, droppableId = _useRequiredContext2.droppableId;
  var descriptor = useMemo(function() {
    return {
      id: props.draggableId,
      index: props.index,
      type,
      droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children, draggableId = props.draggableId, isEnabled = props.isEnabled, shouldRespectForcePress = props.shouldRespectForcePress, canDragInteractiveElements = props.canDragInteractiveElements, isClone = props.isClone, mapped = props.mapped, dropAnimationFinishedAction = props.dropAnimationFinished;
  if (!isClone) {
    var forPublisher = useMemo(function() {
      return {
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  var dragHandleProps = useMemo(function() {
    return isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": draggableId,
      "data-rbd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = useCallback(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-rbd-draggable-context-id": contextId,
        "data-rbd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = useMemo(function() {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}
var isStrictEqual = function(a, b2) {
  return a === b2;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  var memoizedOffset = memoizeOne(function(x, y2) {
    return {
      x,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(function(mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = memoizeOne(function(offset3, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset3,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });
  var selector2 = function selector3(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset3 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset3.x, offset3.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector2;
}
function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
var atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  var memoizedOffset = memoizeOne(function(x, y2) {
    return {
      x,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
  var getMemoizedProps = memoizeOne(function(offset3, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset3,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });
  var getFallback = function getFallback2(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  var getProps = function getProps2(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine2 = tryGetCombine(impact);
    var combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      var change = negate(afterCritical.displacedBy.point);
      var _offset = memoizedOffset(change.x, change.y);
      return getMemoizedProps(_offset, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    var displaceBy = impact.displacedBy.point;
    var offset3 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset3, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  var selector2 = function selector3(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector2;
}
var makeMapStateToProps = function makeMapStateToProps2() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();
  var selector2 = function selector3(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };
  return selector2;
};
var mapDispatchToProps = {
  dropAnimationFinished
};
var ConnectedDraggable = connect(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }
  return React$1.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return React$1.createElement(PrivateDraggable, _extends({}, props, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
function Droppable(props) {
  var appContext = reactExports$1.useContext(AppContext);
  !appContext ? invariant(false) : void 0;
  var contextId = appContext.contextId, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = reactExports$1.useRef(null);
  var placeholderRef = reactExports$1.useRef(null);
  var children = props.children, droppableId = props.droppableId, type = props.type, mode = props.mode, direction = props.direction, ignoreContainerClipping = props.ignoreContainerClipping, isDropDisabled = props.isDropDisabled, isCombineEnabled = props.isCombineEnabled, snapshot = props.snapshot, useClone = props.useClone, updateViewportMaxScroll3 = props.updateViewportMaxScroll, getContainerForClone = props.getContainerForClone;
  var getDroppableRef = useCallback(function() {
    return droppableRef.current;
  }, []);
  var setDroppableRef = useCallback(function(value) {
    droppableRef.current = value;
  }, []);
  useCallback(function() {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = useCallback(function(value) {
    placeholderRef.current = value;
  }, []);
  var onPlaceholderTransitionEnd = useCallback(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  var placeholder = React$1.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data = _ref.data, animate = _ref.animate;
    return React$1.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo(function() {
    return {
      innerRef: setDroppableRef,
      placeholder,
      droppableProps: {
        "data-rbd-droppable-id": droppableId,
        "data-rbd-droppable-context-id": contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = useMemo(function() {
    return {
      droppableId,
      type,
      isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    var dragging = useClone.dragging, render = useClone.render;
    var node = React$1.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function(draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return ReactDOM.createPortal(node, getContainerForClone());
  }
  return React$1.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });
  var getDraggableRubric = memoizeOne(function(descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = memoizeOne(function(id2, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id2;
    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  var selector2 = function selector3(state, ownProps) {
    var id2 = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id2;
      return getMapProps(id2, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id2, isEnabled, whatIsDraggedOverFromResult(completed.result) === id2, whatIsDraggedOver(completed.impact) === id2, _dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id2;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === "COMBINE");
      var isHome = _completed.critical.droppable.id === id2;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector2;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll
};
function getBody() {
  !document.body ? invariant(false) : void 0;
  return document.body;
}
var defaultProps = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;
const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = reactExports$1.useState(false);
  reactExports$1.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { ...props, children });
};
function useShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j2 = Math.floor(Math.random() * (i + 1));
    [array[i], array[j2]] = [array[j2], array[i]];
  }
  return array;
}
const InsulinDragNDropTest = ({ handleNext, setScore, score }) => {
  const title = useTranslate(InsulinDragDropTitle);
  const correctText = useTranslate(correct);
  const nextText = useTranslate(nextButton);
  const initialOrder = useShuffle([...glucoseTimeline]);
  const [timeline, setTimeline] = reactExports$1.useState(initialOrder);
  const language = Recoil_index_20(languageAtom);
  const [isCorrectOrder, setIsCorrectOrder] = reactExports$1.useState(false);
  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const items = Array.from(timeline);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimeline(items);
  };
  reactExports$1.useEffect(() => {
    const isOrderCorrect = timeline.every((item, index2) => item.id === glucoseTimeline[index2].id);
    setIsCorrectOrder(isOrderCorrect);
  }, [timeline]);
  const handleNextClick = () => {
    setScore(score + 1);
    handleNext();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg align-center block mb-4", children: title }),
    isCorrectOrder && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[500px] align-center mx-auto my-4 bg-green-main text-xl", children: correctText }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/3 inline-block", children: [
      isCorrectOrder && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "border-4 border-black font-primary bg-yellow-main mb-4",
          onClick: handleNextClick,
          children: nextText
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContext, { onDragEnd: handleOnDragEnd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StrictModeDroppable, { droppableId: "glucoseTimeline", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "ul",
        {
          className: `glucoseTimeline ${isCorrectOrder ? "correct" : ""}`,
          ...provided.droppableProps,
          ref: provided.innerRef,
          children: [
            timeline.map(({ id: id2, text, image }, index2) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: id2, index: index2, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { ref: provided2.innerRef, ...provided2.draggableProps, ...provided2.dragHandleProps, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: image,
                    alt: `${text[language]} image`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left", children: text[language] })
              ] }) }, id2);
            }),
            provided.placeholder
          ]
        }
      ) }) })
    ] })
  ] });
};
const InsulinTest = () => {
  const language = Recoil_index_20(languageAtom);
  const [currentStep, setCurrentStep] = reactExports$1.useState(0);
  const nextButtonText = useTranslate(nextButton);
  const correctButtonText = useTranslate(correct);
  const glucoseTimelineStepText = useTranslate(glucoseTimelineText);
  const scoreText = useTranslate(yourScore);
  const [selectedAnswer, setSelectedAnswer] = reactExports$1.useState(null);
  const [isAnswered, setIsAnswered] = reactExports$1.useState(false);
  const [score, setScore] = reactExports$1.useState(0);
  const [isScoreBelow50, setIsScoreBelow50] = reactExports$1.useState(score / 5 * 100 < 50);
  const navigate = useNavigate();
  const typewriterRef = reactExports$1.useRef();
  const { getAnimationObject } = useAnimate({
    typewriterRef,
    link: "/",
    text: [],
    audioFiles: []
  });
  reactExports$1.useEffect(() => {
    setIsScoreBelow50(score / 5 * 100 < 50);
  }, [score]);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };
  const handleAnswerClick = (index2) => {
    if (!isAnswered) {
      setSelectedAnswer(index2);
      setIsAnswered(true);
      if (insulinTestQuestions[currentStep].answers[index2].isCorrect) {
        setScore(score + 1);
      }
    }
  };
  const generateSteps = () => {
    const updatedSteps = stepperLabelsInsulin.map((question) => ({
      label: question[language],
      description: ""
    }));
    updatedSteps.splice(updatedSteps.length - 1, 0, { label: `${glucoseTimelineStepText}`, description: "" });
    return updatedSteps;
  };
  const isDraggableTestStep = currentStep === 4;
  const isSummaryStep = currentStep === 5;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-auto mx-auto py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Stepper_1,
      {
        customStyle: {
          completed: "#3D348B",
          pending: "#aaccff",
          progress: "#5599ff"
        },
        steps: generateSteps(),
        activeStep: currentStep
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: isSummaryStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold", children: `${scoreText} ${(score / 5 * 100).toFixed(0)}%` }),
      isScoreBelow50 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => {
            typewriter.typeString(summarySad[language]);
            typewriter.start();
          }
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => {
            typewriter.typeString(summaryHappy[language]);
            typewriter.start();
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] h-auto justify-center inline-block", children: isScoreBelow50 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] mb-4 h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: "sad",
          getAnimationObject
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] mb-4 h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: "happy",
          getAnimationObject
        }
      ) }) })
    ] }) : isDraggableTestStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl py-4", children: language === "EN" ? insulinTestQuestions[currentStep].EN : insulinTestQuestions[currentStep].SK }) }),
    isSummaryStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "bg-primary-light hover:bg-primary-main text-white py-2 mt-4 px-4 rounded",
        onClick: () => navigate("/symptoms"),
        children: nextButtonText
      }
    ) : isDraggableTestStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(InsulinDragNDropTest, { handleNext: handleNextStep, setScore, score }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 text-xl", children: insulinTestQuestions[currentStep].answers.map((answer, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: ` ${selectedAnswer === index2 ? answer.isCorrect ? "bg-green-main" : "bg-red-500" : "bg-primary-dark"} ${selectedAnswer !== null ? "cursor-not-allowed" : ""} hover:bg-primary-light py-2 px-4 text-xl rounded mr-4 mt-4`,
            onClick: () => handleAnswerClick(index2),
            disabled: isAnswered,
            children: language === "EN" ? answer.EN : answer.SK
          },
          index2
        )) }),
        selectedAnswer !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-${insulinTestQuestions[currentStep].answers[selectedAnswer].isCorrect ? "green" : "red"}-500 mt-4 text-xl`,
            children: insulinTestQuestions[currentStep].answers[selectedAnswer].isCorrect ? `${correctButtonText}` : insulinTestQuestions[currentStep].explanation[language]
          }
        ),
        !isSummaryStep && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `${!isAnswered ? "bg-gray-main" : "bg-primary-light  hover:bg-primary-main"} 
                                text-white font-bold mt-4 py-2 px-4 rounded`,
            onClick: handleNextStep,
            disabled: !isAnswered,
            children: nextButtonText
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-96 h-96 mt-8 inline-block border-sky-500 border-4 border-double", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: `insulinTest_q${currentStep + 1}`,
          getAnimationObject
        }
      ) })
    ] })
  ] });
};
function FlippableCard(props) {
  const [isFlipped, setIsFlipped] = reactExports$1.useState(false);
  const handleCardClick = () => {
    if (props.currentIndex >= props.indexOfVisibility) {
      setIsFlipped(!isFlipped);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-64 h-96 border-sky-500 border-4 rounded-md relative hover:cursor-pointer card ${isFlipped ? "flipped" : ""}`,
      onClick: handleCardClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "front w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: props.image, alt: props.alt, className: "w-52 h-68 p-4 object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "back bg-primary-dark w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: props.text }) })
      ]
    }
  );
}
const Symptoms = () => {
  const language = Recoil_index_20(languageAtom);
  const typewriterRef = reactExports$1.useRef();
  const nextButtonText = useTranslate(nextButton);
  const chapter4Text = useTranslate(toChapter) + "4";
  const skipToChapter4 = useTranslate(skipToChapter) + "4";
  const navigate = useNavigate();
  const audioFiles = useAudioFiles(12, "symptoms");
  const { onInit, handleClick, isAnimationComplete, isLast, getAnimationObject, paused, currentIndex } = useAnimate({
    typewriterRef,
    link: "/treatment",
    text: symptoms,
    audioFiles
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "justify-center w-2/6 p-4 font-speech", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => onInit({ typewriter, pauseFor: 0 })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid justify-center items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimateCC,
          {
            animationName: "symptoms",
            getAnimationObject,
            paused
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-evenly", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleClick,
              className: `border-4 border-black font-primary mr-8 ${!isAnimationComplete ? "bg-gray-main" : "bg-yellow-main"}`,
              children: isLast ? chapter4Text : nextButtonText
            }
          ),
          !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => navigate("/treatment"),
              className: `border-4 border-black font-primary bg-yellow-main`,
              children: skipToChapter4
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4/6 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-rows-2 grid-cols-4 gap-4", children: symptomsCards.map((card, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${index2 < currentIndex - 2 ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-1000`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FlippableCard,
          {
            image: card.image,
            text: card.text[language],
            alt: card.id,
            currentIndex,
            indexOfVisibility: index2 + 3
          },
          card.id
        )
      },
      card.id
    )) }) })
  ] });
};
const Treatment = () => {
  var _a, _b;
  const typewriterRef = reactExports$1.useRef();
  const navigate = useNavigate();
  const toTestText = useTranslate(toTest);
  const skipToTestText = useTranslate(skipToTest);
  const nextButtonText = useTranslate(nextButton);
  const language = Recoil_index_20(languageAtom);
  const [selectedInstance, setSelectedInstance] = reactExports$1.useState("");
  const audioFiles = useAudioFiles(12, "treatment");
  const { onInit, handleClick, isAnimationComplete, isLast, getAnimationObject, paused, animationObj } = useAnimate({
    typewriterRef,
    link: "/symptomsTest",
    text: treatment,
    audioFiles
  });
  reactExports$1.useEffect(() => {
    getAnimationObject((prev) => {
      if (prev === void 0 || prev === null)
        return prev;
      const instanceNames = ["glucometer", "water", "diet", "pills", "insulinPump", "insulin", "sport"];
      instanceNames.forEach((instanceName) => {
        var _a2;
        const instance = prev[instanceName];
        if (instance) {
          if (!((_a2 = instance._listeners) == null ? void 0 : _a2.click)) {
            instance.on("click", () => {
              setSelectedInstance(() => instanceName);
              console.log(selectedInstance);
            });
          }
          prev[instanceName] = instance;
        }
      });
      return prev;
    });
  }, [animationObj, getAnimationObject, selectedInstance]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "justify-center w-1/4 p-4 font-speech", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => onInit({ typewriter, pauseFor: 0 })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 mb-2 w-[23rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid justify-center items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimateCC,
          {
            animationName: "treatment_blo",
            getAnimationObject,
            paused
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-evenly", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleClick,
              className: `border-4 border-black font-primary mr-8 ${!isAnimationComplete ? "bg-gray-main" : "bg-yellow-main"}`,
              children: isLast ? toTestText : nextButtonText
            }
          ),
          !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => navigate("/symptomsTest"),
              className: `border-4 border-black font-primary bg-yellow-main`,
              children: skipToTestText
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 p-4 justify-center grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[48rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimateCC,
      {
        animationName: "treatment",
        getAnimationObject,
        paused
      }
    ) }) }),
    selectedInstance != "" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/4 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-dark rounded-lg p-4 mb-4 border border-primary-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl mb-2", children: (_a = treatmentOptions.find((option) => option.id === selectedInstance)) == null ? void 0 : _a.title[language] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-dark rounded-lg p-4 mb-4 border border-primary-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md fontt leading-6", children: (_b = treatmentOptions.find((option) => option.id === selectedInstance)) == null ? void 0 : _b.text[language] }) })
    ] })
  ] });
};
const SymptomsDragNDropTest = ({ handleNext, setScore, score }) => {
  const title = useTranslate(TreatmentDragDropTitle);
  const correctText = useTranslate(correct);
  const helpfulToolsText = useTranslate(helpfulTools);
  const unhelpfulToolsText = useTranslate(unhelpfulTools);
  const nextButtonText = useTranslate(nextButton);
  const [helpfulItems, setHelpfulItems] = reactExports$1.useState([]);
  const [notHelpfulItems, setNotHelpfulItems] = reactExports$1.useState([]);
  const [allItems, setAllItems] = reactExports$1.useState(treatmentCards);
  const language = Recoil_index_20(languageAtom);
  const [isAnswerCorrect, setIsAnswerCorrect] = reactExports$1.useState(false);
  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    let item;
    if (result.source.droppableId === "helpfulZone") {
      item = helpfulItems[result.source.index];
    } else if (result.source.droppableId === "notHelpfulZone") {
      item = notHelpfulItems[result.source.index];
    } else {
      item = allItems[result.source.index];
    }
    const addItem = (prevItems) => {
      const copy = [...prevItems];
      if (result.destination) {
        copy.splice(result.destination.index, 0, item);
      }
      return copy;
    };
    if (result.source.droppableId === "helpfulZone") {
      setHelpfulItems((prevItems) => prevItems.filter((item_) => item_.id !== item.id));
    } else if (result.source.droppableId === "notHelpfulZone") {
      setNotHelpfulItems((prevItems) => prevItems.filter((item_) => item_.id !== item.id));
    } else if (result.source.droppableId === "allItems") {
      setAllItems((prevItems) => prevItems.filter((item_) => item_.id !== item.id));
    }
    if (result.destination.droppableId === "helpfulZone") {
      setHelpfulItems(addItem);
    } else if (result.destination.droppableId === "notHelpfulZone") {
      setNotHelpfulItems(addItem);
    } else if (result.destination.droppableId === "allItems") {
      setAllItems(addItem);
    }
  };
  reactExports$1.useEffect(() => {
    const helpfulItemsIds = new Set(helpfulItems.map((item) => item.id));
    const notHelpfulItemsIds = new Set(notHelpfulItems.map((item) => item.id));
    const isAnswerCorrect2 = helpfulItemsIds.size === 5 && notHelpfulItemsIds.size === 5 && [...helpfulItemsIds].every((id2) => [
      "exerciseBloodSugar",
      "balancedDiet",
      "medicationRoutine",
      "glucoseMonitoring",
      "healthcareConsultation"
    ].includes(id2)) && [...notHelpfulItemsIds].every((id2) => [
      "avoidingMedication",
      "ignoringBloodSugar",
      "skippingMeals",
      "neglectingExercise",
      "ignoringHealthcareAdvice"
    ].includes(id2));
    setIsAnswerCorrect(isAnswerCorrect2);
  }, [helpfulItems, notHelpfulItems, allItems]);
  const handleNextClick = () => {
    setScore(score + 1);
    handleNext();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl align-center block", children: title }),
    isAnswerCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[500px] align-center mx-auto my-4 bg-green-main text-xl", children: correctText }),
    isAnswerCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border-4 border-black font-primary bg-yellow-main", onClick: handleNextClick, children: nextButtonText }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mx-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl text-center mb-4", children: helpfulToolsText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl text-center mb-4", children: unhelpfulToolsText })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-4 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DragDropContext, { onDragEnd: handleOnDragEnd, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StrictModeDroppable, { droppableId: "helpfulZone", type: "item", direction: "vertical", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "ul",
        {
          className: `glucoseTimeline w-1/3 mx-6 ${isAnswerCorrect ? "correct" : ""}`,
          ...provided.droppableProps,
          ref: provided.innerRef,
          children: [
            helpfulItems.map(({ id: id2, text, image }, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: id2, index: index2, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                ref: provided2.innerRef,
                ...provided2.draggableProps,
                ...provided2.dragHandleProps,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image,
                      alt: `${text[language]} image`
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left", children: text[language] })
                ]
              }
            ) }, id2)),
            provided.placeholder
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StrictModeDroppable, { droppableId: "allItems", type: "item", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "ul",
        {
          className: `glucoseTimeline w-1/3 ${isAnswerCorrect ? "correct" : ""}`,
          ...provided.droppableProps,
          ref: provided.innerRef,
          children: [
            allItems.map(({ id: id2, text, image }, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: id2, index: index2, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                ref: provided2.innerRef,
                ...provided2.draggableProps,
                ...provided2.dragHandleProps,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image,
                      alt: `${text[language]} image`
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left", children: text[language] })
                ]
              }
            ) }, id2)),
            provided.placeholder
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StrictModeDroppable, { droppableId: "notHelpfulZone", type: "item", direction: "vertical", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "ul",
        {
          className: `glucoseTimeline w-1/3 mx-6 ${isAnswerCorrect ? "correct" : ""}`,
          ...provided.droppableProps,
          ref: provided.innerRef,
          children: [
            notHelpfulItems.map(({ id: id2, text, image }, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: id2, index: index2, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                ref: provided2.innerRef,
                ...provided2.draggableProps,
                ...provided2.dragHandleProps,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image,
                      alt: `${text[language]} image`
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left", children: text[language] })
                ]
              }
            ) }, id2)),
            provided.placeholder
          ]
        }
      ) }) })
    ] }) })
  ] });
};
function Card(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `border-sky-500 border-4 border-sky-500 rounded-md relative hover:cursor-pointer
             ${props.isSelected ? "bg-primary-light" : ""}`,
      onClick: props.onClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-between align-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: props.image, alt: props.alt, className: "w-52 h-68 p-4 object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: props.text })
      ] })
    }
  );
}
const SymptomsCardTest = ({ handleNext, setScore, score }) => {
  const language = Recoil_index_20(languageAtom);
  const [selectedSymptoms, setSelectedSymptoms] = reactExports$1.useState([]);
  const nextButtonText = useTranslate(nextButton);
  const title = useTranslate(symptomsCardTitle);
  const correctSelectionText = useTranslate(correctSelection);
  const incorrectSelectionText = useTranslate(incorrectSelection);
  const [cards, setCards] = reactExports$1.useState([]);
  reactExports$1.useEffect(() => {
    setCards(useShuffle([...symptomsCards, ...incorrectSymptomsCards]));
  }, []);
  const handleCardClick = (symptomId) => {
    if (selectedSymptoms.includes(symptomId)) {
      setSelectedSymptoms((prev) => prev.filter((id2) => id2 !== symptomId));
    } else {
      setSelectedSymptoms((prev) => [...prev, symptomId]);
    }
  };
  const isCorrect = () => {
    return selectedSymptoms.length === symptomsCards.length && symptomsCards.every(
      (symptom) => selectedSymptoms.includes(symptom.id)
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg align-center block text-xl", children: title }),
    selectedSymptoms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `my-4 ${isCorrect() ? "text-green-500" : "text-red-500"} text-xl`, children: isCorrect() ? `${correctSelectionText}` : `${incorrectSelectionText}` }),
    isCorrect() && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "border-4 border-black font-primary bg-yellow-main text-xl",
        onClick: () => {
          setScore(score + 1);
          handleNext();
        },
        children: nextButtonText
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-4 my-4 mx-40 text-xl", children: cards.map(({ id: id2, title: title2, image }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        image,
        text: title2[language],
        alt: id2,
        isSelected: selectedSymptoms.includes(id2),
        onClick: () => handleCardClick(id2)
      },
      id2
    )) })
  ] });
};
const SymptomsTest = () => {
  const language = Recoil_index_20(languageAtom);
  const [currentStep, setCurrentStep] = reactExports$1.useState(0);
  const nextButtonText = useTranslate(nextButton);
  const correctButtonText = useTranslate(correct);
  const treatmentStepText = useTranslate(treatmentText);
  const symptomsStepText = useTranslate(symptomsText);
  const scoreText = useTranslate(yourScore);
  const [selectedAnswer, setSelectedAnswer] = reactExports$1.useState(null);
  const [isAnswered, setIsAnswered] = reactExports$1.useState(false);
  const [score, setScore] = reactExports$1.useState(0);
  const [isScoreBelow50, setIsScoreBelow50] = reactExports$1.useState(score / 5 * 100 < 50);
  const navigate = useNavigate();
  const typewriterRef = reactExports$1.useRef();
  const { getAnimationObject } = useAnimate({
    typewriterRef,
    link: "/",
    text: [],
    audioFiles: []
  });
  reactExports$1.useEffect(() => {
    setIsScoreBelow50(score / 7 * 100 < 50);
  }, [score]);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };
  const handleAnswerClick = (index2) => {
    if (!isAnswered) {
      setSelectedAnswer(index2);
      setIsAnswered(true);
      if (symptomsTestQuestions[currentStep].answers[index2].isCorrect) {
        setScore(score + 1);
      }
    }
  };
  const generateSteps = () => {
    const updatedSteps = stepperLabelsSymptoms.map((question) => ({
      label: question[language],
      description: ""
    }));
    updatedSteps.splice(updatedSteps.length - 1, 0, { label: `${treatmentStepText}`, description: "" });
    updatedSteps.splice(updatedSteps.length - 1, 0, { label: `${symptomsStepText}`, description: "" });
    return updatedSteps;
  };
  const isDraggableTestStep = currentStep === 5;
  const isSymptomTest = currentStep === 6;
  const isSummaryStep = currentStep === 7;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-auto mx-auto py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Stepper_1,
      {
        customStyle: {
          completed: "#3D348B",
          pending: "#aaccff",
          progress: "#5599ff"
        },
        steps: generateSteps(),
        activeStep: currentStep
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: isSummaryStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold", children: `${scoreText} ${(score / 7 * 100).toFixed(0)}%` }),
      isScoreBelow50 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => {
            typewriter.typeString(summarySad[language]);
            typewriter.start();
          }
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro-text", className: "font-speech text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typewriter,
        {
          options: {
            delay: 40
          },
          onInit: (typewriter) => {
            typewriter.typeString(summaryHappy[language]);
            typewriter.start();
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] h-auto justify-center inline-block", children: isScoreBelow50 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] mb-4 h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: "sad",
          getAnimationObject
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] max-h-[510px] mb-4 h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: "happy",
          getAnimationObject
        }
      ) }) })
    ] }) : isDraggableTestStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : isSymptomTest ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl py-4", children: language === "EN" ? symptomsTestQuestions[currentStep].EN : symptomsTestQuestions[currentStep].SK }) }),
    isSummaryStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "bg-primary-light hover:bg-primary-main text-white font-bold py-2 mt-4 px-4 rounded",
        onClick: () => navigate("/"),
        children: nextButtonText
      }
    ) : isDraggableTestStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomsDragNDropTest, { handleNext: handleNextStep, setScore, score }) : isSymptomTest ? /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomsCardTest, { handleNext: handleNextStep, setScore, score }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 text-xl", children: symptomsTestQuestions[currentStep].answers.map((answer, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: ` ${selectedAnswer === index2 ? answer.isCorrect ? "bg-green-main" : "bg-red-500" : "bg-primary-dark"} ${selectedAnswer !== null ? "cursor-not-allowed" : ""} hover:bg-primary-light py-2 px-4 rounded mr-4 mt-4`,
            onClick: () => handleAnswerClick(index2),
            disabled: isAnswered,
            children: language === "EN" ? answer.EN : answer.SK
          },
          index2
        )) }),
        selectedAnswer !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-${symptomsTestQuestions[currentStep].answers[selectedAnswer].isCorrect ? "green" : "red"}-500 mt-4 text-xl`,
            children: symptomsTestQuestions[currentStep].answers[selectedAnswer].isCorrect ? `${correctButtonText}` : symptomsTestQuestions[currentStep].explanation[language]
          }
        ),
        !isSummaryStep && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `${!isAnswered ? "bg-gray-main" : "bg-primary-light  hover:bg-primary-main"} text-white font-bold mt-4 py-2 px-4 rounded`,
            onClick: handleNextStep,
            disabled: !isAnswered,
            children: nextButtonText
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-96 h-96 mt-8 inline-block border-sky-500 border-4 border-double", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimateCC,
        {
          animationName: `symptomsTest_q${currentStep + 1}`,
          getAnimationObject
        }
      ) })
    ] })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[100%] w-[100%] font-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, {}), index: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "chapters", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Chapters, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "intro", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Intro$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "insulin", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Insulin, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "overview", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "insulinTest", element: /* @__PURE__ */ jsxRuntimeExports.jsx(InsulinTest, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "symptomsTest", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomsTest, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "symptoms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Symptoms, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "treatment", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Treatment, {}) })
    ] })
  ] }) });
};
const index = "";
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Recoil_index_5, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
);
