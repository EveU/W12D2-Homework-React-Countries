/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var CountriesBox = __webpack_require__(159);

	window.onload = function () {
	  ReactDOM.render(React.createElement(CountriesBox, null), document.getElementById('app'));
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var ReactDOM = __webpack_require__(3);
	var ReactDOMServer = __webpack_require__(148);
	var ReactIsomorphic = __webpack_require__(152);

	var assign = __webpack_require__(39);
	var deprecated = __webpack_require__(157);

	// `version` will be added here by ReactIsomorphic.
	var React = {};

	assign(React, ReactIsomorphic);

	assign(React, {
	  // ReactDOM
	  findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
	  render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
	  unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),

	  // ReactDOMServer
	  renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
	  renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
	});

	React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
	React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */

	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactDOMTextComponent = __webpack_require__(6);
	var ReactDefaultInjection = __webpack_require__(71);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdates = __webpack_require__(54);
	var ReactVersion = __webpack_require__(146);

	var findDOMNode = __webpack_require__(91);
	var renderSubtreeIntoContainer = __webpack_require__(147);
	var warning = __webpack_require__(25);

	ReactDefaultInjection.inject();

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  findDOMNode: findDOMNode,
	  render: render,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  version: ReactVersion,

	  /* eslint-disable camelcase */
	  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
	  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	/* eslint-enable camelcase */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}

	if (process.env.NODE_ENV !== 'production') {
	  var ExecutionEnvironment = __webpack_require__(9);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // First check if devtools is not installed
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	      // If we're in Chrome or Firefox, provide a download link if not installed.
	      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	        console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
	      }
	    }

	    // If we're in IE8, check to see if we are in compatibility mode and provide
	    // information on preventing compatibility mode
	    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;

	    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;

	    var expectedFeatures = [
	    // shims
	    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim,

	    // shams
	    Object.create, Object.freeze];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
	        break;
	      }
	    }
	  }
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(7);
	var DOMPropertyOperations = __webpack_require__(22);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactMount = __webpack_require__(28);

	var assign = __webpack_require__(39);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var setTextContent = __webpack_require__(20);
	var validateDOMNesting = __webpack_require__(70);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function (props) {
	  // This constructor and its argument is currently used by mocks.
	};

	assign(ReactDOMTextComponent.prototype, {

	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function (text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;

	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    this._rootNodeID = rootID;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement('span');
	      DOMPropertyOperations.setAttributeForID(el, rootID);
	      // Populate node cache
	      ReactMount.getID(el);
	      setTextContent(el, this._stringText);
	      return el;
	    } else {
	      var escapedText = escapeTextContentForBrowser(this._stringText);

	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd wrap this in a `span` for the reasons stated above, but
	        // since this is a situation where React won't take over (static pages),
	        // we can simply return the text as it is.
	        return escapedText;
	      }

	      return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
	    }
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function (nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        var node = ReactMount.getNode(this._rootNodeID);
	        DOMChildrenOperations.updateTextContent(node, nextStringText);
	      }
	    }
	  },

	  unmountComponent: function () {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }

	});

	module.exports = ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */

	'use strict';

	var Danger = __webpack_require__(8);
	var ReactMultiChildUpdateTypes = __webpack_require__(16);
	var ReactPerf = __webpack_require__(18);

	var setInnerHTML = __webpack_require__(19);
	var setTextContent = __webpack_require__(20);
	var invariant = __webpack_require__(13);

	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.

	  // fix render order error in safari
	  // IE8 will throw error when index out of list size.
	  var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);

	  parentNode.insertBefore(childNode, beforeChild);
	}

	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {

	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

	  updateTextContent: setTextContent,

	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function (updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;

	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;

	        !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;

	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;

	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }

	    var renderedMarkup;
	    // markupList is either a list of markup or just a list of elements
	    if (markupList.length && typeof markupList[0] === 'string') {
	      renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
	    } else {
	      renderedMarkup = markupList;
	    }

	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }

	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.SET_MARKUP:
	          setInnerHTML(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {
	  updateTextContent: 'updateTextContent'
	});

	module.exports = DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var createNodesFromMarkup = __webpack_require__(10);
	var emptyFunction = __webpack_require__(15);
	var getMarkupWrap = __webpack_require__(14);
	var invariant = __webpack_require__(13);

	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';

	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}

	var Danger = {

	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function (markupList) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];

	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];

	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
	          // This index will be parsed back out below.
	          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
	        }
	      }

	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
	      );

	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);

	          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;

	          resultList[resultIndex] = renderNode;

	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Danger: Discarding unexpected node:', renderNode);
	        }
	      }
	    }

	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;

	    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;

	    return resultList;
	  },

	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
	    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
	    !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;

	    var newChild;
	    if (typeof markup === 'string') {
	      newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    } else {
	      newChild = markup;
	    }
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }

	};

	module.exports = Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */

	/*eslint-disable fb-www/unsafe-html*/

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var createArrayFromMixed = __webpack_require__(11);
	var getMarkupWrap = __webpack_require__(14);
	var invariant = __webpack_require__(13);

	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;

	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}

	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
	  var nodeName = getNodeName(markup);

	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];

	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }

	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }

	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}

	module.exports = createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */

	'use strict';

	var toArray = __webpack_require__(12);

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;

	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;

	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	module.exports = toArray;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */

	/*eslint-disable fb-www/unsafe-html */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var invariant = __webpack_require__(13);

	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */

	var shouldWrap = {};

	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],

	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],

	  'optgroup': selectWrap,
	  'option': selectWrap,

	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,

	  'td': trWrap,
	  'th': trWrap
	};

	// Initialize the SVG elements since we know they'll always need to be wrapped
	// consistently. If they are created inside a <div> they will be initialized in
	// the wrong namespace (and will not display).
	var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
	svgElements.forEach(function (nodeName) {
	  markupWrap[nodeName] = svgWrap;
	  shouldWrap[nodeName] = true;
	});

	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}

	module.exports = getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	"use strict";

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  SET_MARKUP: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function (obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function (object, objectName, methodNames) {
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
	      }
	    }
	  },

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function (objName, fnName, func) {
	    if (process.env.NODE_ENV !== 'production') {
	      var measuredFunc = null;
	      var wrapper = function () {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function (measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */

	/* globals MSApp */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function (node, html) {
	  node.innerHTML = html;
	};

	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function (node, html) {
	    MSApp.execUnsafeLocalFunction(function () {
	      node.innerHTML = html;
	    });
	  };
	}

	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function (node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }

	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
	        // in hopes that this is preserved even if "\uFEFF" is transformed to
	        // the actual Unicode character (by Babel, for example).
	        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
	        node.innerHTML = String.fromCharCode(0xFEFF) + html;

	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}

	module.exports = setInnerHTML;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var setInnerHTML = __webpack_require__(19);

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function (node, text) {
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function (node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}

	module.exports = setTextContent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactPerf = __webpack_require__(18);

	var quoteAttributeValueForBrowser = __webpack_require__(24);
	var warning = __webpack_require__(25);

	// Simplified subset
	var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};

	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
	  return false;
	}

	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}

	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function (name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function (id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },

	  setAttributeForID: function (node, id) {
	    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function (name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      if (shouldIgnoreValue(propertyInfo, value)) {
	        return '';
	      }
	      var attributeName = propertyInfo.attributeName;
	      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        return attributeName + '=""';
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
	  createMarkupForCustomAttribute: function (name, value) {
	    if (!isAttributeNameSafe(name) || value == null) {
	      return '';
	    }
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function (node, name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (propertyInfo.mustUseAttribute) {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      } else {
	        var propName = propertyInfo.propertyName;
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      DOMPropertyOperations.setValueForAttribute(node, name, value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  },

	  setValueForAttribute: function (node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function (node, name) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseAttribute) {
	        node.removeAttribute(propertyInfo.attributeName);
	      } else {
	        var propName = propertyInfo.propertyName;
	        var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  }

	};

	ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
	  setValueForProperty: 'setValueForProperty',
	  setValueForAttribute: 'setValueForAttribute',
	  deleteValueForProperty: 'deleteValueForProperty'
	});

	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }

	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
	      };

	      !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;

	      if (process.env.NODE_ENV !== 'production') {
	        DOMProperty.getPossibleStandardName[lowerCased] = propName;
	      }

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        propertyInfo.attributeName = attributeName;
	        if (process.env.NODE_ENV !== 'production') {
	          DOMProperty.getPossibleStandardName[attributeName] = propName;
	        }
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMPropertyNames.hasOwnProperty(propName)) {
	        propertyInfo.propertyName = DOMPropertyNames[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseAttribute:
	   *   Whether the property must be accessed and mutated using `*Attribute()`.
	   *   (This includes anything that fails `<propName> in <element>`.)
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasSideEffects:
	   *   Whether or not setting a value causes side effects such as triggering
	   *   resources to be loaded or text selection changes. If true, we read from
	   *   the DOM before updating to ensure that the value is only set if it has
	   *   changed.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   * @type {Object}
	   */
	  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function (attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function (nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = __webpack_require__(21);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	'use strict';

	var emptyFunction = __webpack_require__(15);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(27);
	var ReactMount = __webpack_require__(28);

	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {

	  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

	  replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function (rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }

	};

	module.exports = ReactComponentBrowserEnvironment;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(7);
	var DOMPropertyOperations = __webpack_require__(22);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);

	var invariant = __webpack_require__(13);

	/**
	 * Errors for properties that should not be updated with `updatePropertyByID()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};

	/**
	 * Operations used to process updates to DOM nodes.
	 */
	var ReactDOMIDOperations = {

	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function (id, name, value) {
	    var node = ReactMount.getNode(id);
	    !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;

	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },

	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function (id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },

	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function (updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};

	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});

	module.exports = ReactDOMIDOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactCurrentOwner = __webpack_require__(5);
	var ReactDOMFeatureFlags = __webpack_require__(41);
	var ReactElement = __webpack_require__(42);
	var ReactEmptyComponentRegistry = __webpack_require__(44);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMarkupChecksum = __webpack_require__(48);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdateQueue = __webpack_require__(53);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var containsNode = __webpack_require__(59);
	var instantiateReactComponent = __webpack_require__(62);
	var invariant = __webpack_require__(13);
	var setInnerHTML = __webpack_require__(19);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var validateDOMNesting = __webpack_require__(70);
	var warning = __webpack_require__(25);

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if (process.env.NODE_ENV !== 'production') {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
	  if (ReactDOMFeatureFlags.useCreateElement) {
	    context = assign({}, context);
	    if (container.nodeType === DOC_NODE_TYPE) {
	      context[ownerDocumentContextKey] = container;
	    } else {
	      context[ownerDocumentContextKey] = container.ownerDocument;
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (context === emptyObject) {
	      context = {};
	    }
	    var tag = container.nodeName.toLowerCase();
	    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
	  }
	  var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
	  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
	}

	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
	  /* forceHTML */shouldReuseMarkup);
	  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {DOMElement} container DOM element to unmount from.
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
	function unmountComponentFromNode(instance, container) {
	  ReactReconciler.unmountComponent(instance);

	  if (container.nodeType === DOC_NODE_TYPE) {
	    container = container.documentElement;
	  }

	  // http://jsperf.com/emptying-a-node
	  while (container.lastChild) {
	    container.removeChild(container.lastChild);
	  }
	}

	/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
	function hasNonRootReactChild(node) {
	  var reactRootID = getReactRootID(node);
	  return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
	}

	/**
	 * Returns the first (deepest) ancestor of a node which is rendered by this copy
	 * of React.
	 */
	function findFirstReactDOMImpl(node) {
	  // This node might be from another React instance, so we make sure not to
	  // examine the node cache here
	  for (; node && node.parentNode !== node; node = node.parentNode) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      continue;
	    }
	    var nodeID = internalGetID(node);
	    if (!nodeID) {
	      continue;
	    }
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);

	    // If containersByReactRootID contains the container we find by crawling up
	    // the tree, we know that this instance of React rendered the node.
	    // nb. isValid's strategy (with containsNode) does not work because render
	    // trees may be nested and we don't want a false positive in that case.
	    var current = node;
	    var lastID;
	    do {
	      lastID = internalGetID(current);
	      current = current.parentNode;
	      if (current == null) {
	        // The passed-in node has been detached from the container it was
	        // originally rendered into.
	        return null;
	      }
	    } while (lastID !== reactRootID);

	    if (current === containersByReactRootID[reactRootID]) {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Temporary (?) hack so that we can store all top-level pending updates on
	 * composites instead of having to worry about different types of components
	 * here.
	 */
	var TopLevelWrapper = function () {};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render = function () {
	  // this.props is actually a ReactElement
	  return this.props;
	};

	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {

	  TopLevelWrapper: TopLevelWrapper,

	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function (container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function (prevComponent, nextElement, container, callback) {
	    ReactMount.scrollMonitor(container, function () {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function (nextComponent, container) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(componentInstance, container);

	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.

	    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
	    }

	    return componentInstance;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
	    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
	  },

	  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' :
	    // Check if it quacks like an element
	    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;

	    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;

	    var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevWrappedElement = prevComponent._currentElement;
	      var prevElement = prevWrappedElement.props;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        var publicInst = prevComponent._renderedComponent.getPublicInstance();
	        var updatedCallback = callback && function () {
	          callback.call(publicInst);
	        };
	        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
	        return publicInst;
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
	    var containerHasNonRootReactChild = hasNonRootReactChild(container);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;

	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (internalGetID(rootElementSibling)) {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
	            break;
	          }
	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
	    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function (nextElement, container, callback) {
	    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function (container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function (container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      // Check if the node being unmounted was rendered by React, but isn't a
	      // root node.
	      var containerHasNonRootReactChild = hasNonRootReactChild(container);

	      // Check if the container itself is a React root node.
	      var containerID = internalGetID(container);
	      var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
	      }

	      return false;
	    }
	    ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if (process.env.NODE_ENV !== 'production') {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function (id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if (process.env.NODE_ENV !== 'production') {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        process.env.NODE_ENV !== 'production' ? warning(
	        // Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
	        var containerChild = container.firstChild;
	        if (containerChild && reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function (id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component rendered by this copy of React.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function (node) {
	    return findFirstReactDOMImpl(node);
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function (ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw on the next line; give an early warning
	      process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
	    }

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }
	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
	  },

	  _mountImageIntoNode: function (markup, container, shouldReuseMarkup, transaction) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;

	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

	        var normalizedMarkup = markup;
	        if (process.env.NODE_ENV !== 'production') {
	          // because rootMarkup is retrieved from the DOM, various normalizations
	          // will have occurred which will not be present in `markup`. Here,
	          // insert markup into a <div> or <iframe> depending on the container
	          // type to perform the same normalizations before comparing.
	          var normalizer;
	          if (container.nodeType === ELEMENT_NODE_TYPE) {
	            normalizer = document.createElement('div');
	            normalizer.innerHTML = markup;
	            normalizedMarkup = normalizer.innerHTML;
	          } else {
	            normalizer = document.createElement('iframe');
	            document.body.appendChild(normalizer);
	            normalizer.contentDocument.write(markup);
	            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
	            document.body.removeChild(normalizer);
	          }
	        }

	        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
	        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

	        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;

	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
	        }
	      }
	    }

	    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;

	    if (transaction.useCreateElement) {
	      while (container.lastChild) {
	        container.removeChild(container.lastChild);
	      }
	      container.appendChild(markup);
	    } else {
	      setInnerHTML(container, markup);
	    }
	  },

	  ownerDocumentContextKey: ownerDocumentContextKey,

	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  getNodeFromInstance: getNodeFromInstance,

	  isValid: isValid,

	  purgeID: purgeID
	};

	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});

	module.exports = ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPluginRegistry = __webpack_require__(32);
	var ReactEventEmitterMixin = __webpack_require__(37);
	var ReactPerf = __webpack_require__(18);
	var ViewportMetrics = __webpack_require__(38);

	var assign = __webpack_require__(39);
	var isEventSupported = __webpack_require__(40);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topAbort: 'abort',
	  topBlur: 'blur',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function (ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function (enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function () {
	    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function (registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	          }
	        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	  },

	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function () {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
	  putListener: 'putListener',
	  deleteListener: 'deleteListener'
	});

	module.exports = ReactBrowserEventEmitter;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	var PropagationPhases = keyMirror({ bubbled: null, captured: null });

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topAbort: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	var EventPluginRegistry = __webpack_require__(32);
	var EventPluginUtils = __webpack_require__(33);
	var ReactErrorUtils = __webpack_require__(34);

	var accumulateInto = __webpack_require__(35);
	var forEachAccumulated = __webpack_require__(36);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function (event, simulated) {
	  if (event) {
	    EventPluginUtils.executeDispatchesInOrder(event, simulated);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
	  return executeDispatchesAndRelease(e, false);
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
	  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function (InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function () {
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function (id, registrationName, listener) {
	    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;

	    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;

	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.didPutListener) {
	      PluginModule.didPutListener(id, registrationName, listener);
	    }
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function (id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function (id, registrationName) {
	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.willDeleteListener) {
	      PluginModule.willDeleteListener(id, registrationName);
	    }

	    var bankForRegistrationName = listenerBank[registrationName];
	    // TODO: This should never be null -- when is it?
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function (id) {
	    for (var registrationName in listenerBank) {
	      if (!listenerBank[registrationName][id]) {
	        continue;
	      }

	      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	      if (PluginModule && PluginModule.willDeleteListener) {
	        PluginModule.willDeleteListener(id, registrationName);
	      }

	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function (events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function (simulated) {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    if (simulated) {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
	    } else {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	    }
	    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
	    // This would be a good time to rethrow if any of the event handlers threw.
	    ReactErrorUtils.rethrowCaughtError();
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function () {
	    listenerBank = {};
	  },

	  __getListenerBank: function () {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function (InjectedEventPluginOrder) {
	    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function (injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
	        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function (event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function () {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var ReactErrorUtils = __webpack_require__(34);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function (InjectedMount) {
	    injection.Mount = InjectedMount;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
	}

	var validateEventDispatches;
	if (process.env.NODE_ENV !== 'production') {
	  validateEventDispatches = function (event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, simulated, listener, domID) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = injection.Mount.getNode(domID);
	  if (simulated) {
	    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
	  } else {
	    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
	  }
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
	  }
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
	  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,

	  getNode: function (id) {
	    return injection.Mount.getNode(id);
	  },
	  getID: function (node) {
	    return injection.Mount.getID(node);
	  },

	  injection: injection
	};

	module.exports = EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	'use strict';

	var caughtError = null;

	/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {?String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
	function invokeGuardedCallback(name, func, a, b) {
	  try {
	    return func(a, b);
	  } catch (x) {
	    if (caughtError === null) {
	      caughtError = x;
	    }
	    return undefined;
	  }
	}

	var ReactErrorUtils = {
	  invokeGuardedCallback: invokeGuardedCallback,

	  /**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
	  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function () {
	    if (caughtError) {
	      var error = caughtError;
	      caughtError = null;
	      throw error;
	    }
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
	      var boundFunc = func.bind(null, a, b);
	      var evtType = 'react-' + name;
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	    };
	  }
	}

	module.exports = ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	'use strict';

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function (arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	var EventPluginHub = __webpack_require__(31);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue(false);
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function (scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = (eventName in document);

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */

	'use strict';

	var ReactDOMFeatureFlags = {
	  useCreateElement: false
	};

	module.exports = ReactDOMFeatureFlags;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);

	var assign = __webpack_require__(39);
	var canDefineProperty = __webpack_require__(43);

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    Object.freeze(element.props);
	    Object.freeze(element);
	  }

	  return element;
	};

	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
	  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);

	  if (process.env.NODE_ENV !== 'production') {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }

	  return newElement;
	};

	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponentRegistry
	 */

	'use strict';

	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIDsRegistry = {};

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}

	var ReactEmptyComponentRegistry = {
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID,
	  deregisterNullComponentID: deregisterNullComponentID
	};

	module.exports = ReactEmptyComponentRegistry;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	'use strict';

	var ReactRootIndex = __webpack_require__(46);

	var invariant = __webpack_require__(13);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 10000;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
	  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {*} arg Argument to invoke the callback with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
	  var traverseUp = isAncestorIDOf(stop, start);
	  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start;; /* until break */id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function () {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function (rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function (id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function (leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Same as `traverseTwoPhase` but skips the `targetID`.
	   */
	  traverseTwoPhaseSkipTarget: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, true);
	      traverseParentPath(targetID, '', cb, arg, true, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function (targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function (_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	'use strict';

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap = {

	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function (key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function (key) {
	    return key._reactInternalInstance;
	  },

	  has: function (key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function (key, value) {
	    key._reactInternalInstance = value;
	  }

	};

	module.exports = ReactInstanceMap;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	'use strict';

	var adler32 = __webpack_require__(49);

	var TAG_END = /\/?>/;

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function (markup) {
	    var checksum = adler32(markup);

	    // Add checksum (handle both parent tags and self-closing tags)
	    return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function (markup, element) {
	    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	'use strict';

	var MOD = 65521;

	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    for (; i < Math.min(i + 4096, m); i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}

	module.exports = adler32;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */

	'use strict';

	var ReactRef = __webpack_require__(51);

	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}

	var ReactReconciler = {

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function (internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },

	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function (internalInstance, nextElement, transaction, context) {
	    var prevElement = internalInstance._currentElement;

	    if (nextElement === prevElement && context === internalInstance._context) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.

	      // TODO: Bailing out early is just a perf optimization right?
	      // TODO: Removing the return statement should affect correctness?
	      return;
	    }

	    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }

	    internalInstance.receiveComponent(nextElement, transaction, context);

	    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },

	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (internalInstance, transaction) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }

	};

	module.exports = ReactReconciler;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */

	'use strict';

	var ReactOwner = __webpack_require__(52);

	var ReactRef = {};

	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}

	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}

	ReactRef.attachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};

	ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.

	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.

	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;

	  return(
	    // This has a few false positives w/r/t empty components.
	    prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
	  );
	};

	ReactRef.detachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};

	module.exports = ReactRef;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function (object) {
	    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }

	};

	module.exports = ReactOwner;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function enqueueUpdate(internalInstance) {
	  ReactUpdates.enqueueUpdate(internalInstance);
	}

	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
	    }
	    return null;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
	  }

	  return internalInstance;
	}

	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(publicInstance);
	    if (internalInstance) {
	      // During componentWillMount and render this will still be null but after
	      // that will always render to something. At least for now. So we can use
	      // this hack.
	      return !!internalInstance._renderedComponent;
	    } else {
	      return false;
	    }
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance) {
	      return null;
	    }

	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },

	  enqueueCallbackInternal: function (internalInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingForceUpdate = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

	    if (!internalInstance) {
	      return;
	    }

	    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
	  },

	  enqueueSetPropsInternal: function (internalInstance, partialProps) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    var props = assign({}, element.props, partialProps);
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
	  },

	  enqueueReplacePropsInternal: function (internalInstance, props) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  enqueueElementInternal: function (internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }

	};

	module.exports = ReactUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(55);
	var PooledClass = __webpack_require__(56);
	var ReactPerf = __webpack_require__(18);
	var ReactReconciler = __webpack_require__(50);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
	}

	var NESTED_UPDATES = {
	  initialize: function () {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function () {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function () {
	    this.callbackQueue.reset();
	  },
	  close: function () {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);
	}

	assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function () {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function (method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b, c, d, e) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
	}

	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];

	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;

	    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);

	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
	      }
	    }
	  }
	}

	var flushBatchedUpdates = function () {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }

	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }

	  dirtyComponents.push(component);
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function (ReconcileTransaction) {
	    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function (_batchingStrategy) {
	    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function (callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function () {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0; i < callbacks.length; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function () {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function () {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function () {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (this.wrapperInitData) {
	      this.wrapperInitData.length = 0;
	    } else {
	      this.wrapperInitData = [];
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function () {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked. The optional arguments helps prevent the need
	   * to bind in many cases.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} a Argument to pass to the method.
	   * @param {Object?=} b Argument to pass to the method.
	   * @param {Object?=} c Argument to pass to the method.
	   * @param {Object?=} d Argument to pass to the method.
	   * @param {Object?=} e Argument to pass to the method.
	   * @param {Object?=} f Argument to pass to the method.
	   *
	   * @return {*} Return value from `method`.
	   */
	  perform: function (method, scope, a, b, c, d, e, f) {
	    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {}
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function (startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {}
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function (startIndex) {
	    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {}
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occurred.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	'use strict';

	var isTextNode = __webpack_require__(60);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var outerNode = _x,
	        innerNode = _x2;
	    _again = false;

	    if (!outerNode || !innerNode) {
	      return false;
	    } else if (outerNode === innerNode) {
	      return true;
	    } else if (isTextNode(outerNode)) {
	      return false;
	    } else if (isTextNode(innerNode)) {
	      _x = outerNode;
	      _x2 = innerNode.parentNode;
	      _again = true;
	      continue _function;
	    } else if (outerNode.contains) {
	      return outerNode.contains(innerNode);
	    } else if (outerNode.compareDocumentPosition) {
	      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	    } else {
	      return false;
	    }
	  }
	}

	module.exports = containsNode;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */

	'use strict';

	var isNode = __webpack_require__(61);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	'use strict';

	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCompositeComponent = __webpack_require__(63);
	var ReactEmptyComponent = __webpack_require__(68);
	var ReactNativeComponent = __webpack_require__(69);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function () {};
	assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: instantiateReactComponent
	});

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
	}

	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node) {
	  var instance;

	  if (node === null || node === false) {
	    instance = new ReactEmptyComponent(instantiateReactComponent);
	  } else if (typeof node === 'object') {
	    var element = node;
	    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;

	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = ReactNativeComponent.createInternalComponent(element);
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // representations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
	  }

	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);

	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;

	  if (process.env.NODE_ENV !== 'production') {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }

	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if (process.env.NODE_ENV !== 'production') {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }

	  return instance;
	}

	module.exports = instantiateReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactPerf = __webpack_require__(18);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactReconciler = __webpack_require__(50);
	var ReactUpdateQueue = __webpack_require__(53);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var warning = __webpack_require__(25);

	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function StatelessComponent(Component) {}
	StatelessComponent.prototype.render = function () {
	  var Component = ReactInstanceMap.get(this)._currentElement.type;
	  return Component(this.props, this.context, this.updater);
	};

	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function (element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;

	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    this._renderedComponent = null;

	    this._context = null;
	    this._mountOrder = 0;
	    this._topLevelWrapper = null;

	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;

	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(context);

	    var Component = this._currentElement.type;

	    // Initialize the public class
	    var inst;
	    var renderedElement;

	    // This is a way to detect if Component is a stateless arrow function
	    // component, which is not newable. It might not be 100% reliable but is
	    // something we can do until we start detecting that Component extends
	    // React.Component. We already assume that typeof Component === 'function'.
	    var canInstantiate = ('prototype' in Component);

	    if (canInstantiate) {
	      if (process.env.NODE_ENV !== 'production') {
	        ReactCurrentOwner.current = this;
	        try {
	          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	        } finally {
	          ReactCurrentOwner.current = null;
	        }
	      } else {
	        inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	      }
	    }

	    if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
	      renderedElement = inst;
	      inst = new StatelessComponent(Component);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      if (inst.render == null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
	      } else {
	        // We support ES6 inheriting from React.Component, the module pattern,
	        // and stateless components, but not ES6 classes that don't extend
	        process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
	      }
	    }

	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;
	    inst.updater = ReactUpdateQueue;

	    this._instance = inst;

	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);

	    if (process.env.NODE_ENV !== 'production') {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
	    }

	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;

	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    if (inst.componentWillMount) {
	      inst.componentWillMount();
	      // When mounting, calls to `setState` by `componentWillMount` will set
	      // `this._pendingStateQueue` without triggering a re-render.
	      if (this._pendingStateQueue) {
	        inst.state = this._processPendingState(inst.props, inst.context);
	      }
	    }

	    // If not a stateless component, we now render
	    if (renderedElement === undefined) {
	      renderedElement = this._renderValidatedComponent();
	    }

	    this._renderedComponent = this._instantiateReactComponent(renderedElement);

	    var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }

	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function () {
	    var inst = this._instance;

	    if (inst.componentWillUnmount) {
	      inst.componentWillUnmount();
	    }

	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;
	    this._instance = null;

	    // Reset pending fields
	    // Even if this component is scheduled for another update in ReactUpdates,
	    // it would still be ignored because these fields are reset.
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;

	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;
	    this._topLevelWrapper = null;

	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);

	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function (context) {
	    var maskedContext = null;
	    var Component = this._currentElement.type;
	    var contextTypes = Component.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function (context) {
	    var maskedContext = this._maskContext(context);
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.contextTypes) {
	        this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function (currentContext) {
	    var Component = this._currentElement.type;
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	      if (process.env.NODE_ENV !== 'production') {
	        this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
	      }
	      for (var name in childContext) {
	        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function (newProps) {
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.propTypes) {
	        this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function (propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // top-level render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);

	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
	          } else {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
	          }
	        }
	      }
	    }
	  },

	  receiveComponent: function (nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;

	    this._pendingElement = null;

	    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
	    }

	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
	    }
	  },

	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
	    var inst = this._instance;

	    var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
	    var nextProps;

	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement === nextParentElement) {
	      // Skip checking prop types again -- we don't read inst.props to avoid
	      // warning for DOM component props in this upgrade
	      nextProps = nextParentElement.props;
	    } else {
	      nextProps = this._processProps(nextParentElement.props);
	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.

	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    var nextState = this._processPendingState(nextProps, nextContext);

	    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },

	  _processPendingState: function (props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;

	    if (!queue) {
	      return inst.state;
	    }

	    if (replace && queue.length === 1) {
	      return queue[0];
	    }

	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
	    }

	    return nextState;
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
	    var inst = this._instance;

	    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
	    var prevProps;
	    var prevState;
	    var prevContext;
	    if (hasComponentDidUpdate) {
	      prevProps = inst.props;
	      prevState = inst.state;
	      prevContext = inst.context;
	    }

	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;

	    this._updateRenderedComponent(transaction, unmaskedContext);

	    if (hasComponentDidUpdate) {
	      transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
	    }
	  },

	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function (transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var nextRenderedElement = this._renderValidatedComponent();
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);

	      this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
	      var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },

	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function (prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	  },

	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function () {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if (process.env.NODE_ENV !== 'production') {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }

	    return renderedComponent;
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: function () {
	    var renderedComponent;
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactCurrentOwner.current = null;
	    }
	    !(
	    // TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	    return renderedComponent;
	  },

	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function (ref, component) {
	    var inst = this.getPublicInstance();
	    !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
	    var publicComponentInstance = component.getPublicInstance();
	    if (process.env.NODE_ENV !== 'production') {
	      var componentName = component && component.getName ? component.getName() : 'a component';
	      process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
	    }
	    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	    refs[ref] = publicComponentInstance;
	  },

	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function (ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },

	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function () {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	  },

	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function () {
	    var inst = this._instance;
	    if (inst instanceof StatelessComponent) {
	      return null;
	    }
	    return inst;
	  },

	  // Stub
	  _instantiateReactComponent: null

	};

	ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent',
	  _renderValidatedComponent: '_renderValidatedComponent'
	});

	var ReactCompositeComponent = {

	  Mixin: ReactCompositeComponentMixin

	};

	module.exports = ReactCompositeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	var injected = false;

	var ReactComponentEnvironment = {

	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,

	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,

	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,

	  injection: {
	    injectEnvironment: function (environment) {
	      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
	      ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
	      injected = true;
	    }
	  }

	};

	module.exports = ReactComponentEnvironment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(17);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }

	  var prevType = typeof prevElement;
	  var nextType = typeof nextElement;
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactEmptyComponentRegistry = __webpack_require__(44);
	var ReactReconciler = __webpack_require__(50);

	var assign = __webpack_require__(39);

	var placeholderElement;

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function (component) {
	    placeholderElement = ReactElement.createElement(component);
	  }
	};

	var ReactEmptyComponent = function (instantiate) {
	  this._currentElement = null;
	  this._rootNodeID = null;
	  this._renderedComponent = instantiate(placeholderElement);
	};
	assign(ReactEmptyComponent.prototype, {
	  construct: function (element) {},
	  mountComponent: function (rootID, transaction, context) {
	    ReactEmptyComponentRegistry.registerNullComponentID(rootID);
	    this._rootNodeID = rootID;
	    return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
	  },
	  receiveComponent: function () {},
	  unmountComponent: function (rootID, transaction, context) {
	    ReactReconciler.unmountComponent(this._renderedComponent);
	    ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
	    this._rootNodeID = null;
	    this._renderedComponent = null;
	  }
	});

	ReactEmptyComponent.injection = ReactEmptyComponentInjection;

	module.exports = ReactEmptyComponent;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags.
	var tagToComponentClass = {};
	var textComponentClass = null;

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function (componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function (componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function (componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};

	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}

	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
	  return new genericComponentClass(element.type, element.props);
	}

	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}

	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}

	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateDOMNesting
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var warning = __webpack_require__(25);

	var validateDOMNesting = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.

	  // https://html.spec.whatwg.org/multipage/syntax.html#special
	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);

	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

	  var emptyAncestorInfo = {
	    parentTag: null,

	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,

	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };

	  var updatedAncestorInfo = function (oldInfo, tag, instance) {
	    var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };

	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }

	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }

	    ancestorInfo.parentTag = info;

	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }

	    return ancestorInfo;
	  };

	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function (tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	    }

	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;

	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }

	    return true;
	  };

	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':

	      case 'pre':
	      case 'listing':

	      case 'table':

	      case 'hr':

	      case 'xmp':

	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;

	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;

	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;

	      case 'button':
	        return ancestorInfo.buttonTagInScope;

	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;

	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }

	    return null;
	  };

	  /**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */
	  var findOwnerStack = function (instance) {
	    if (!instance) {
	      return [];
	    }

	    var stack = [];
	    /*eslint-disable space-after-keywords */
	    do {
	      /*eslint-enable space-after-keywords */
	      stack.push(instance);
	    } while (instance = instance._currentElement._owner);
	    stack.reverse();
	    return stack;
	  };

	  var didWarn = {};

	  validateDOMNesting = function (childTag, childInstance, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;

	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var problematic = invalidParent || invalidAncestor;

	    if (problematic) {
	      var ancestorTag = problematic.tag;
	      var ancestorInstance = problematic.instance;

	      var childOwner = childInstance && childInstance._currentElement._owner;
	      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

	      var childOwners = findOwnerStack(childOwner);
	      var ancestorOwners = findOwnerStack(ancestorOwner);

	      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
	      var i;

	      var deepestCommon = -1;
	      for (i = 0; i < minStackLen; i++) {
	        if (childOwners[i] === ancestorOwners[i]) {
	          deepestCommon = i;
	        } else {
	          break;
	        }
	      }

	      var UNKNOWN = '(unknown)';
	      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ownerInfo = [].concat(
	      // If the parent and child instances have a common owner ancestor, start
	      // with that -- otherwise we just start with the parent's owners.
	      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
	      // If we're warning about an invalid (non-parent) ancestry, add '...'
	      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

	      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
	      if (didWarn[warnKey]) {
	        return;
	      }
	      didWarn[warnKey] = true;

	      if (invalidParent) {
	        var info = '';
	        if (ancestorTag === 'table' && childTag === 'tr') {
	          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	        }
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
	      }
	    }
	  };

	  validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);

	  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

	  // For testing
	  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}

	module.exports = validateDOMNesting;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	'use strict';

	var BeforeInputEventPlugin = __webpack_require__(72);
	var ChangeEventPlugin = __webpack_require__(80);
	var ClientReactRootIndex = __webpack_require__(83);
	var DefaultEventPluginOrder = __webpack_require__(84);
	var EnterLeaveEventPlugin = __webpack_require__(85);
	var ExecutionEnvironment = __webpack_require__(9);
	var HTMLDOMPropertyConfig = __webpack_require__(89);
	var ReactBrowserComponentMixin = __webpack_require__(90);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactDefaultBatchingStrategy = __webpack_require__(92);
	var ReactDOMComponent = __webpack_require__(93);
	var ReactDOMTextComponent = __webpack_require__(6);
	var ReactEventListener = __webpack_require__(118);
	var ReactInjection = __webpack_require__(121);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactReconcileTransaction = __webpack_require__(125);
	var SelectEventPlugin = __webpack_require__(130);
	var ServerReactRootIndex = __webpack_require__(131);
	var SimpleEventPlugin = __webpack_require__(132);
	var SVGDOMPropertyConfig = __webpack_require__(141);

	var alreadyInjected = false;

	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;

	  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);

	  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);

	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

	  ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

	  if (process.env.NODE_ENV !== 'production') {
	    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	    if (/[?&]react_perf\b/.test(url)) {
	      var ReactDefaultPerf = __webpack_require__(142);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var FallbackCompositionState = __webpack_require__(74);
	var SyntheticCompositionEvent = __webpack_require__(76);
	var SyntheticInputEvent = __webpack_require__(78);

	var keyOf = __webpack_require__(79);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBeforeInput: null }),
	      captured: keyOf({ onBeforeInputCapture: null })
	    },
	    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionEnd: null }),
	      captured: keyOf({ onCompositionEndCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionStart: null }),
	      captured: keyOf({ onCompositionStartCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionUpdate: null }),
	      captured: keyOf({ onCompositionUpdateCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);

	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
	  }
	};

	module.exports = BeforeInputEventPlugin;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);

	var warning = __webpack_require__(25);

	var accumulateInto = __webpack_require__(35);
	var forEachAccumulated = __webpack_require__(36);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var getTextContentAccessor = __webpack_require__(75);

	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}

	assign(FallbackCompositionState.prototype, {
	  destructor: function () {
	    this._root = null;
	    this._startText = null;
	    this._fallbackText = null;
	  },

	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function () {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },

	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function () {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }

	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});

	PooledClass.addPoolingTo(FallbackCompositionState);

	module.exports = FallbackCompositionState;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}

	module.exports = getTextContentAccessor;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	module.exports = SyntheticCompositionEvent;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var warning = __webpack_require__(25);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

	module.exports = SyntheticEvent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

	module.exports = SyntheticInputEvent;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactUpdates = __webpack_require__(54);
	var SyntheticEvent = __webpack_require__(77);

	var getEventTarget = __webpack_require__(81);
	var isEventSupported = __webpack_require__(40);
	var isTextInputElement = __webpack_require__(82);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onChange: null }),
	      captured: keyOf({ onChangeCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue(false);
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	  get: function () {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function (val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

	  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	  // on DOM elements
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
	        event.type = 'change';
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
	    }
	  }

	};

	module.exports = ChangeEventPlugin;

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}

	module.exports = isTextInputElement;

/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function () {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	var keyOf = __webpack_require__(79);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];

	module.exports = DefaultEventPluginOrder;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var SyntheticMouseEvent = __webpack_require__(86);

	var ReactMount = __webpack_require__(28);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({ onMouseEnter: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  },
	  mouseLeave: {
	    registrationName: keyOf({ onMouseLeave: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from;
	    var to;
	    var fromID = '';
	    var toID = '';
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      fromID = topLevelTargetID;
	      to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
	      if (to) {
	        toID = ReactMount.getID(to);
	      } else {
	        to = win;
	      }
	      to = to || win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	      toID = topLevelTargetID;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);
	var ViewportMetrics = __webpack_require__(38);

	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function (event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  },
	  // "Proprietary" Interface.
	  pageX: function (event) {
	    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function (event) {
	    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	module.exports = SyntheticMouseEvent;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	var getEventTarget = __webpack_require__(81);

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function (event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function (event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	module.exports = SyntheticUIEvent;

/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	module.exports = getEventModifierState;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ExecutionEnvironment = __webpack_require__(9);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}

	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    challenge: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    inputMode: MUST_USE_ATTRIBUTE,
	    integrity: null,
	    is: MUST_USE_ATTRIBUTE,
	    keyParams: MUST_USE_ATTRIBUTE,
	    keyType: MUST_USE_ATTRIBUTE,
	    kind: null,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    minLength: MUST_USE_ATTRIBUTE,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    nonce: MUST_USE_ATTRIBUTE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcLang: null,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    summary: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,
	    wrap: null,

	    /**
	     * RDFa Properties
	     */
	    about: MUST_USE_ATTRIBUTE,
	    datatype: MUST_USE_ATTRIBUTE,
	    inlist: MUST_USE_ATTRIBUTE,
	    prefix: MUST_USE_ATTRIBUTE,
	    // property is also supported for OpenGraph in meta tags.
	    property: MUST_USE_ATTRIBUTE,
	    resource: MUST_USE_ATTRIBUTE,
	    'typeof': MUST_USE_ATTRIBUTE,
	    vocab: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: MUST_USE_ATTRIBUTE,
	    autoCorrect: MUST_USE_ATTRIBUTE,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: null,
	    // color is for Safari mask-icon link
	    color: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: null,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: MUST_USE_ATTRIBUTE,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoComplete: 'autocomplete',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    autoSave: 'autosave',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	'use strict';

	var ReactInstanceMap = __webpack_require__(47);

	var findDOMNode = __webpack_require__(91);
	var warning = __webpack_require__(25);

	var didWarnKey = '_getDOMNodeDidWarn';

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function () {
	    process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
	    this.constructor[didWarnKey] = true;
	    return findDOMNode(this);
	  }
	};

	module.exports = ReactBrowserComponentMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMount = __webpack_require__(28);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
	}

	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	'use strict';

	var ReactUpdates = __webpack_require__(54);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function () {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  }
	});

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function (callback, a, b, c, d, e) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d, e);
	    } else {
	      transaction.perform(callback, null, a, b, c, d, e);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var AutoFocusUtils = __webpack_require__(94);
	var CSSPropertyOperations = __webpack_require__(96);
	var DOMProperty = __webpack_require__(23);
	var DOMPropertyOperations = __webpack_require__(22);
	var EventConstants = __webpack_require__(30);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactComponentBrowserEnvironment = __webpack_require__(26);
	var ReactDOMButton = __webpack_require__(104);
	var ReactDOMInput = __webpack_require__(105);
	var ReactDOMOption = __webpack_require__(109);
	var ReactDOMSelect = __webpack_require__(112);
	var ReactDOMTextarea = __webpack_require__(113);
	var ReactMount = __webpack_require__(28);
	var ReactMultiChild = __webpack_require__(114);
	var ReactPerf = __webpack_require__(18);
	var ReactUpdateQueue = __webpack_require__(53);

	var assign = __webpack_require__(39);
	var canDefineProperty = __webpack_require__(43);
	var escapeTextContentForBrowser = __webpack_require__(21);
	var invariant = __webpack_require__(13);
	var isEventSupported = __webpack_require__(40);
	var keyOf = __webpack_require__(79);
	var setInnerHTML = __webpack_require__(19);
	var setTextContent = __webpack_require__(20);
	var shallowEqual = __webpack_require__(117);
	var validateDOMNesting = __webpack_require__(70);
	var warning = __webpack_require__(25);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = { 'string': true, 'number': true };

	var CHILDREN = keyOf({ children: null });
	var STYLE = keyOf({ style: null });
	var HTML = keyOf({ __html: null });

	var ELEMENT_NODE_TYPE = 1;

	function getDeclarationErrorAddendum(internalInstance) {
	  if (internalInstance) {
	    var owner = internalInstance._currentElement._owner || null;
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' This DOM node was rendered by `' + name + '`.';
	      }
	    }
	  }
	  return '';
	}

	var legacyPropsDescriptor;
	if (process.env.NODE_ENV !== 'production') {
	  legacyPropsDescriptor = {
	    props: {
	      enumerable: false,
	      get: function () {
	        var component = this._reactInternalComponent;
	        process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
	        return component._currentElement.props;
	      }
	    }
	  };
	}

	function legacyGetDOMNode() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return this;
	}

	function legacyIsMounted() {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return !!component;
	}

	function legacySetStateEtc() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	}

	function legacySetProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function legacyReplaceProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function friendlyStringify(obj) {
	  if (typeof obj === 'object') {
	    if (Array.isArray(obj)) {
	      return '[' + obj.map(friendlyStringify).join(', ') + ']';
	    } else {
	      var pairs = [];
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
	          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
	        }
	      }
	      return '{' + pairs.join(', ') + '}';
	    }
	  } else if (typeof obj === 'string') {
	    return JSON.stringify(obj);
	  } else if (typeof obj === 'function') {
	    return '[function object]';
	  }
	  // Differs from JSON.stringify in that undefined becauses undefined and that
	  // inf and nan don't become null
	  return String(obj);
	}

	var styleMutationWarning = {};

	function checkAndWarnForMutatedStyle(style1, style2, component) {
	  if (style1 == null || style2 == null) {
	    return;
	  }
	  if (shallowEqual(style1, style2)) {
	    return;
	  }

	  var componentName = component._tag;
	  var owner = component._currentElement._owner;
	  var ownerName;
	  if (owner) {
	    ownerName = owner.getName();
	  }

	  var hash = ownerName + '|' + componentName;

	  if (styleMutationWarning.hasOwnProperty(hash)) {
	    return;
	  }

	  styleMutationWarning[hash] = true;

	  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
	}

	/**
	 * @param {object} component
	 * @param {?object} props
	 */
	function assertValidProps(component, props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (process.env.NODE_ENV !== 'production') {
	    if (voidElementTags[component._tag]) {
	      process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
	    }
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
	    process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
	  }
	  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
	}

	function enqueuePutListener(id, registrationName, listener, transaction) {
	  if (process.env.NODE_ENV !== 'production') {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getReactMountReady().enqueue(putListener, {
	    id: id,
	    registrationName: registrationName,
	    listener: listener
	  });
	}

	function putListener() {
	  var listenerToPut = this;
	  ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
	}

	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};

	function trapBubbledEventsLocal() {
	  var inst = this;
	  // If a component renders to null or if another component fatals and causes
	  // the state of the tree to be corrupted, `node` here can be null.
	  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
	  var node = ReactMount.getNode(inst._rootNodeID);
	  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;

	  switch (inst._tag) {
	    case 'iframe':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'video':
	    case 'audio':

	      inst._wrapperState.listeners = [];
	      // create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
	        }
	      }

	      break;
	    case 'img':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'form':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
	      break;
	  }
	}

	function mountReadyInputWrapper() {
	  ReactDOMInput.mountReadyWrapper(this);
	}

	function postUpdateSelectWrapper() {
	  ReactDOMSelect.postUpdateWrapper(this);
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	};

	// NOTE: menuitem's close tag should be omitted, but that causes problems.
	var newlineEatingTags = {
	  'listing': true,
	  'pre': true,
	  'textarea': true
	};

	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = assign({
	  'menuitem': true
	}, omittedCloseTags);

	// We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = ({}).hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
	    validatedTagCache[tag] = true;
	  }
	}

	function processChildContextDev(context, inst) {
	  // Pass down our tag name to child components for validation purposes
	  context = assign({}, context);
	  var info = context[validateDOMNesting.ancestorInfoContextKey];
	  context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
	  return context;
	}

	function isCustomComponent(tagName, props) {
	  return tagName.indexOf('-') >= 0 || props.is != null;
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag.toLowerCase();
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._nodeWithLegacyProperties = null;
	  if (process.env.NODE_ENV !== 'production') {
	    this._unprocessedContextDev = null;
	    this._processedContextDev = null;
	  }
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  construct: function (element) {
	    this._currentElement = element;
	  },

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._rootNodeID = rootID;

	    var props = this._currentElement.props;

	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        this._wrapperState = {
	          listeners: null
	        };
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'button':
	        props = ReactDOMButton.getNativeProps(this, props, context);
	        break;
	      case 'input':
	        ReactDOMInput.mountWrapper(this, props, context);
	        props = ReactDOMInput.getNativeProps(this, props, context);
	        break;
	      case 'option':
	        ReactDOMOption.mountWrapper(this, props, context);
	        props = ReactDOMOption.getNativeProps(this, props, context);
	        break;
	      case 'select':
	        ReactDOMSelect.mountWrapper(this, props, context);
	        props = ReactDOMSelect.getNativeProps(this, props, context);
	        context = ReactDOMSelect.processChildContext(this, props, context);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.mountWrapper(this, props, context);
	        props = ReactDOMTextarea.getNativeProps(this, props, context);
	        break;
	    }

	    assertValidProps(this, props);
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      this._unprocessedContextDev = context;
	      this._processedContextDev = processChildContextDev(context, this);
	      context = this._processedContextDev;
	    }

	    var mountImage;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement(this._currentElement.type);
	      DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
	      // Populate node cache
	      ReactMount.getID(el);
	      this._updateDOMProperties({}, props, transaction, el);
	      this._createInitialChildren(transaction, props, context, el);
	      mountImage = el;
	    } else {
	      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
	      var tagContent = this._createContentMarkup(transaction, props, context);
	      if (!tagContent && omittedCloseTags[this._tag]) {
	        mountImage = tagOpen + '/>';
	      } else {
	        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
	      }
	    }

	    switch (this._tag) {
	      case 'input':
	        transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
	      // falls through
	      case 'button':
	      case 'select':
	      case 'textarea':
	        if (props.autoFocus) {
	          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
	        }
	        break;
	    }

	    return mountImage;
	  },

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
	    var ret = '<' + this._currentElement.type;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (propValue) {
	          enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
	        }
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            if (process.env.NODE_ENV !== 'production') {
	              // See `_updateDOMProperties`. style block
	              this._previousStyle = propValue;
	            }
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup = null;
	        if (this._tag != null && isCustomComponent(this._tag, props)) {
	          if (propKey !== CHILDREN) {
	            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret;
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID;
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function (transaction, props, context) {
	    var ret = '';

	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        ret = innerHTML.__html;
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        ret = escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        ret = mountImages.join('');
	      }
	    }
	    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
	      // text/html ignores the first character in these tags if it's a newline
	      // Prefer to break application/xml over text/html (for now) by adding
	      // a newline specifically to get eaten by the parser. (Alternately for
	      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	      // \r is normalized out by HTMLTextAreaElement#value.)
	      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	      // See: Parsing of "textarea" "listing" and "pre" elements
	      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	      return '\n' + ret;
	    } else {
	      return ret;
	    }
	  },

	  _createInitialChildren: function (transaction, props, context, el) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        setInnerHTML(el, innerHTML.__html);
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        setTextContent(el, contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        for (var i = 0; i < mountImages.length; i++) {
	          el.appendChild(mountImages[i]);
	        }
	      }
	    }
	  },

	  /**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
	  receiveComponent: function (nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevElement, nextElement, context) {
	    var lastProps = prevElement.props;
	    var nextProps = this._currentElement.props;

	    switch (this._tag) {
	      case 'button':
	        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
	        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
	        break;
	      case 'input':
	        ReactDOMInput.updateWrapper(this);
	        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
	        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
	        break;
	      case 'option':
	        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
	        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
	        break;
	      case 'select':
	        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
	        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.updateWrapper(this);
	        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
	        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
	        break;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // If the context is reference-equal to the old one, pass down the same
	      // processed object so the update bailout in ReactReconciler behaves
	      // correctly (and identically in dev and prod). See #5005.
	      if (this._unprocessedContextDev !== context) {
	        this._unprocessedContextDev = context;
	        this._processedContextDev = processChildContextDev(context, this);
	      }
	      context = this._processedContextDev;
	    }

	    assertValidProps(this, nextProps);
	    this._updateDOMProperties(lastProps, nextProps, transaction, null);
	    this._updateDOMChildren(lastProps, nextProps, transaction, context);

	    if (!canDefineProperty && this._nodeWithLegacyProperties) {
	      this._nodeWithLegacyProperties.props = nextProps;
	    }

	    if (this._tag === 'select') {
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
	    }
	  },

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?DOMElement} node
	   */
	  _updateDOMProperties: function (lastProps, nextProps, transaction, node) {
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (lastProps[propKey]) {
	          // Only call deleteListener if there was a listener previously or
	          // else willDeleteListener gets called when there wasn't actually a
	          // listener (e.g., onClick={null})
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        DOMPropertyOperations.deleteValueForProperty(node, propKey);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          if (process.env.NODE_ENV !== 'production') {
	            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
	            this._previousStyle = nextProp;
	          }
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp) {
	          enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
	        } else if (lastProp) {
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (isCustomComponent(this._tag, nextProps)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        if (propKey === CHILDREN) {
	          nextProp = null;
	        }
	        DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        // If we're updating to null or undefined, we should remove the property
	        // from the DOM node instead of inadvertantly setting to a string. This
	        // brings us in line with the same behavior we have on initial render.
	        if (nextProp != null) {
	          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
	        } else {
	          DOMPropertyOperations.deleteValueForProperty(node, propKey);
	        }
	      }
	    }
	    if (styleUpdates) {
	      if (!node) {
	        node = ReactMount.getNode(this._rootNodeID);
	      }
	      CSSPropertyOperations.setValueForStyles(node, styleUpdates);
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
	  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
	    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

	    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        this.updateMarkup('' + nextHtml);
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function () {
	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        var listeners = this._wrapperState.listeners;
	        if (listeners) {
	          for (var i = 0; i < listeners.length; i++) {
	            listeners[i].remove();
	          }
	        }
	        break;
	      case 'input':
	        ReactDOMInput.unmountWrapper(this);
	        break;
	      case 'html':
	      case 'head':
	      case 'body':
	        /**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
	         true ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
	        break;
	    }

	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	    this._wrapperState = null;
	    if (this._nodeWithLegacyProperties) {
	      var node = this._nodeWithLegacyProperties;
	      node._reactInternalComponent = null;
	      this._nodeWithLegacyProperties = null;
	    }
	  },

	  getPublicInstance: function () {
	    if (!this._nodeWithLegacyProperties) {
	      var node = ReactMount.getNode(this._rootNodeID);

	      node._reactInternalComponent = this;
	      node.getDOMNode = legacyGetDOMNode;
	      node.isMounted = legacyIsMounted;
	      node.setState = legacySetStateEtc;
	      node.replaceState = legacySetStateEtc;
	      node.forceUpdate = legacySetStateEtc;
	      node.setProps = legacySetProps;
	      node.replaceProps = legacyReplaceProps;

	      if (process.env.NODE_ENV !== 'production') {
	        if (canDefineProperty) {
	          Object.defineProperties(node, legacyPropsDescriptor);
	        } else {
	          // updateComponent will update this property on subsequent renders
	          node.props = this._currentElement.props;
	        }
	      } else {
	        // updateComponent will update this property on subsequent renders
	        node.props = this._currentElement.props;
	      }

	      this._nodeWithLegacyProperties = node;
	    }
	    return this._nodeWithLegacyProperties;
	  }

	};

	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});

	assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

	module.exports = ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactMount = __webpack_require__(28);

	var findDOMNode = __webpack_require__(91);
	var focusNode = __webpack_require__(95);

	var Mixin = {
	  componentDidMount: function () {
	    if (this.props.autoFocus) {
	      focusNode(findDOMNode(this));
	    }
	  }
	};

	var AutoFocusUtils = {
	  Mixin: Mixin,

	  focusDOMComponent: function () {
	    focusNode(ReactMount.getNode(this._rootNodeID));
	  }
	};

	module.exports = AutoFocusUtils;

/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(97);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactPerf = __webpack_require__(18);

	var camelizeStyleName = __webpack_require__(98);
	var dangerousStyleValue = __webpack_require__(100);
	var hyphenateStyleName = __webpack_require__(101);
	var memoizeStringOnly = __webpack_require__(103);
	var warning = __webpack_require__(25);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};

	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
	  };

	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
	  };

	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function (node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
	  setValueForStyles: 'setValueForStyles'
	});

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
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

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(99);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	"use strict";

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(97);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(102);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	'use strict';

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	'use strict';

	var mouseListenerNames = {
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,

	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	};

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = {
	  getNativeProps: function (inst, props, context) {
	    if (!props.disabled) {
	      return props;
	    }

	    // Copy the props, except the mouse listeners
	    var nativeProps = {};
	    for (var key in props) {
	      if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
	        nativeProps[key] = props[key];
	      }
	    }

	    return nativeProps;
	  }
	};

	module.exports = ReactDOMButton;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(27);
	var LinkedValueUtils = __webpack_require__(106);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMInput.updateWrapper(this);
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getNativeProps: function (inst, props, context) {
	    var value = LinkedValueUtils.getValue(props);
	    var checked = LinkedValueUtils.getChecked(props);

	    var nativeProps = assign({}, props, {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : inst._wrapperState.initialValue,
	      checked: checked != null ? checked : inst._wrapperState.initialChecked,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    inst._wrapperState = {
	      initialChecked: props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null,
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  mountReadyWrapper: function (inst) {
	    // Can't be in mountWrapper or else server rendering leaks.
	    instancesByReactID[inst._rootNodeID] = inst;
	  },

	  unmountWrapper: function (inst) {
	    delete instancesByReactID[inst._rootNodeID];
	  },

	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;

	    // TODO: Shouldn't this be getChecked(props)?
	    var checked = props.checked;
	    if (checked != null) {
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;

	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  // Here we use asap to wait until all updates have propagated, which
	  // is important when using controlled components within layers:
	  // https://github.com/facebook/react/issues/1698
	  ReactUpdates.asap(forceUpdateIfMounted, this);

	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var rootNode = ReactMount.getNode(this._rootNodeID);
	    var queryRoot = rootNode;

	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }

	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form, let's just use the global
	    // `querySelectorAll` to ensure we don't miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React with non-React.
	      var otherID = ReactMount.getID(otherNode);
	      !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
	      var otherInstance = instancesByReactID[otherID];
	      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	    }
	  }

	  return returnValue;
	}

	module.exports = ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactPropTypes = __webpack_require__(107);
	var ReactPropTypeLocations = __webpack_require__(65);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};

	function _assertSingleLink(inputProps) {
	  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
	}
	function _assertValueLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
	}

	function _assertCheckedLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
	}

	var propTypes = {
	  value: function (props, propName, componentName) {
	    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  checked: function (props, propName, componentName) {
	    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  onChange: ReactPropTypes.func
	};

	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  checkPropTypes: function (tagName, props, owner) {
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum(owner);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function (inputProps) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.value;
	    }
	    return inputProps.value;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function (inputProps) {
	    if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.value;
	    }
	    return inputProps.checked;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
	  executeOnChange: function (inputProps, event) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.requestChange(event.target.value);
	    } else if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.requestChange(event.target.checked);
	    } else if (inputProps.onChange) {
	      return inputProps.onChange.call(undefined, event);
	    }
	  }
	};

	module.exports = LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocationNames = __webpack_require__(66);

	var emptyFunction = __webpack_require__(15);
	var getIteratorFn = __webpack_require__(108);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return '<<anonymous>>';
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */

	'use strict';

	/* global Symbol */
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	'use strict';

	var ReactChildren = __webpack_require__(110);
	var ReactDOMSelect = __webpack_require__(112);

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	var valueContextKey = ReactDOMSelect.valueContextKey;

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  mountWrapper: function (inst, props, context) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
	    }

	    // Look up whether this option is 'selected' via context
	    var selectValue = context[valueContextKey];

	    // If context key is null (e.g., no specified value or after initial mount)
	    // or missing (e.g., for <datalist>), we don't change props.selected
	    var selected = null;
	    if (selectValue != null) {
	      selected = false;
	      if (Array.isArray(selectValue)) {
	        // multiple
	        for (var i = 0; i < selectValue.length; i++) {
	          if ('' + selectValue[i] === '' + props.value) {
	            selected = true;
	            break;
	          }
	        }
	      } else {
	        selected = '' + selectValue === '' + props.value;
	      }
	    }

	    inst._wrapperState = { selected: selected };
	  },

	  getNativeProps: function (inst, props, context) {
	    var nativeProps = assign({ selected: undefined, children: undefined }, props);

	    // Read state only from initial mount because <select> updates value
	    // manually; we need the initial state only for server rendering
	    if (inst._wrapperState.selected != null) {
	      nativeProps.selected = inst._wrapperState.selected;
	    }

	    var content = '';

	    // Flatten children and warn if they aren't strings or numbers;
	    // invalid types are ignored.
	    ReactChildren.forEach(props.children, function (child) {
	      if (child == null) {
	        return;
	      }
	      if (typeof child === 'string' || typeof child === 'number') {
	        content += child;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
	      }
	    });

	    if (content) {
	      nativeProps.children = content;
	    }

	    return nativeProps;
	  }

	};

	module.exports = ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);
	var ReactElement = __webpack_require__(42);

	var emptyFunction = __webpack_require__(15);
	var traverseAllChildren = __webpack_require__(111);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceHandles = __webpack_require__(45);

	var getIteratorFn = __webpack_require__(108);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	var didWarnAboutMaps = false;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} text Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(106);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);

	function updateOptionsIfPendingUpdateAndMounted() {
	  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
	    this._wrapperState.pendingUpdate = false;

	    var props = this._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);

	    if (value != null) {
	      updateOptions(this, Boolean(props.multiple), value);
	    }
	  }
	}

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	var valuePropNames = ['value', 'defaultValue'];

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function checkSelectPropTypes(inst, props) {
	  var owner = inst._currentElement._owner;
	  LinkedValueUtils.checkPropTypes('select', props, owner);

	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    if (props.multiple) {
	      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    } else {
	      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    }
	  }
	}

	/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(inst, multiple, propValue) {
	  var selectedValue, i;
	  var options = ReactMount.getNode(inst._rootNodeID).options;

	  if (multiple) {
	    selectedValue = {};
	    for (i = 0; i < propValue.length; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0; i < options.length; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0; i < options.length; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  valueContextKey: valueContextKey,

	  getNativeProps: function (inst, props, context) {
	    return assign({}, props, {
	      onChange: inst._wrapperState.onChange,
	      value: undefined
	    });
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      checkSelectPropTypes(inst, props);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      pendingUpdate: false,
	      initialValue: value != null ? value : props.defaultValue,
	      onChange: _handleChange.bind(inst),
	      wasMultiple: Boolean(props.multiple)
	    };
	  },

	  processChildContext: function (inst, props, context) {
	    // Pass down initial value so initial generated markup has correct
	    // `selected` attributes
	    var childContext = assign({}, context);
	    childContext[valueContextKey] = inst._wrapperState.initialValue;
	    return childContext;
	  },

	  postUpdateWrapper: function (inst) {
	    var props = inst._currentElement.props;

	    // After the initial mount, we control selected-ness manually so don't pass
	    // the context value down
	    inst._wrapperState.initialValue = undefined;

	    var wasMultiple = inst._wrapperState.wasMultiple;
	    inst._wrapperState.wasMultiple = Boolean(props.multiple);

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      inst._wrapperState.pendingUpdate = false;
	      updateOptions(inst, Boolean(props.multiple), value);
	    } else if (wasMultiple !== Boolean(props.multiple)) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
	      }
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  this._wrapperState.pendingUpdate = true;
	  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(106);
	var ReactDOMIDOperations = __webpack_require__(27);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(this);
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getNativeProps: function (inst, props, context) {
	    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    var nativeProps = assign({}, props, {
	      defaultValue: undefined,
	      value: undefined,
	      children: inst._wrapperState.initialValue,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
	      }
	      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(props);

	    inst._wrapperState = {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue),
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactMultiChildUpdateTypes = __webpack_require__(16);

	var ReactCurrentOwner = __webpack_require__(5);
	var ReactReconciler = __webpack_require__(50);
	var ReactChildReconciler = __webpack_require__(115);

	var flattenChildren = __webpack_require__(116);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueInsertMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    content: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the markup of a node.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
	function enqueueSetMarkup(parentID, markup) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.SET_MARKUP,
	    markupIndex: null,
	    content: markup,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    content: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	        }
	      }
	      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	    },

	    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, transaction, context) {
	      var nextChildren;
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            nextChildren = flattenChildren(nextNestedChildrenElements);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	          return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	        }
	      }
	      nextChildren = flattenChildren(nextNestedChildrenElements);
	      return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	    },

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function (nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	          child._mountIndex = index++;
	          mountImages.push(mountImage);
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function (nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChild(prevChildren[name]);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
	    updateMarkup: function (nextMarkup) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        this.setMarkup(nextMarkup);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildrenElements, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChild(prevChild);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChild(prevChildren[name]);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function () {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function (child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function (child, mountImage) {
	      enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function (child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function (textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Sets this markup string.
	     *
	     * @param {string} markup Markup to set.
	     * @protected
	     */
	    setMarkup: function (markup) {
	      enqueueSetMarkup(this._rootNodeID, markup);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function (child, name, index, transaction, context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },

	    /**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
	    _unmountChild: function (child) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }

	  }

	};

	module.exports = ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */

	'use strict';

	var ReactReconciler = __webpack_require__(50);

	var instantiateReactComponent = __webpack_require__(62);
	var shouldUpdateReactComponent = __webpack_require__(67);
	var traverseAllChildren = __webpack_require__(111);
	var warning = __webpack_require__(25);

	function instantiateChild(childInstances, child, name) {
	  // We found a component instance.
	  var keyUnique = childInstances[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (child != null && keyUnique) {
	    childInstances[name] = instantiateReactComponent(child, null);
	  }
	}

	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {
	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function (nestedChildNodes, transaction, context) {
	    if (nestedChildNodes == null) {
	      return null;
	    }
	    var childInstances = {};
	    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
	    return childInstances;
	  },

	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function (prevChildren, nextChildren, transaction, context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(nextElement, null);
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },

	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function (renderedChildren) {
	    for (var name in renderedChildren) {
	      if (renderedChildren.hasOwnProperty(name)) {
	        var renderedChild = renderedChildren[name];
	        ReactReconciler.unmountComponent(renderedChild);
	      }
	    }
	  }

	};

	module.exports = ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	'use strict';

	var traverseAllChildren = __webpack_require__(111);
	var warning = __webpack_require__(25);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = result[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	'use strict';

	var EventListener = __webpack_require__(119);
	var ExecutionEnvironment = __webpack_require__(9);
	var PooledClass = __webpack_require__(56);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);

	var assign = __webpack_require__(39);
	var getEventTarget = __webpack_require__(81);
	var getUnboundedScrollPosition = __webpack_require__(120);

	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function () {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

	function handleTopLevelImpl(bookKeeping) {
	  // TODO: Re-enable event.path handling
	  //
	  // if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
	  //   // New browsers have a path attribute on native events
	  //   handleTopLevelWithPath(bookKeeping);
	  // } else {
	  //   // Legacy browsers don't have a path attribute on native events
	  //   handleTopLevelWithoutPath(bookKeeping);
	  // }

	  void handleTopLevelWithPath; // temporarily unused
	  handleTopLevelWithoutPath(bookKeeping);
	}

	// Legacy browsers don't have a path attribute on native events
	function handleTopLevelWithoutPath(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	// New browsers have a path attribute on native events
	function handleTopLevelWithPath(bookKeeping) {
	  var path = bookKeeping.nativeEvent.path;
	  var currentNativeTarget = path[0];
	  var eventsFired = 0;
	  for (var i = 0; i < path.length; i++) {
	    var currentPathElement = path[i];
	    if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
	      currentNativeTarget = path[i + 1];
	    }
	    // TODO: slow
	    var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
	    if (reactParent === currentPathElement) {
	      var currentPathElementID = ReactMount.getID(currentPathElement);
	      var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
	      bookKeeping.ancestors.push(currentPathElement);

	      var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
	      eventsFired++;
	      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);

	      // Jump to the root of this React render tree
	      while (currentPathElementID !== newRootID) {
	        i++;
	        currentPathElement = path[i];
	        currentPathElementID = ReactMount.getID(currentPathElement);
	      }
	    }
	  }
	  if (eventsFired === 0) {
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function (handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function (enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function () {
	    return ReactEventListener._enabled;
	  },

	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  monitorScrollValue: function (refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },

	  dispatchEvent: function (topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	'use strict';

	var emptyFunction = __webpack_require__(15);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function () {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function () {}
	};

	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var EventPluginHub = __webpack_require__(31);
	var ReactComponentEnvironment = __webpack_require__(64);
	var ReactClass = __webpack_require__(122);
	var ReactEmptyComponent = __webpack_require__(68);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactNativeComponent = __webpack_require__(69);
	var ReactPerf = __webpack_require__(18);
	var ReactRootIndex = __webpack_require__(46);
	var ReactUpdates = __webpack_require__(54);

	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var ReactComponent = __webpack_require__(123);
	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactNoopUpdateQueue = __webpack_require__(124);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var keyMirror = __webpack_require__(17);
	var keyOf = __webpack_require__(79);
	var warning = __webpack_require__(25);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	var warnedSetProps = false;
	function warnSetProps() {
	  if (!warnedSetProps) {
	    warnedSetProps = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
	  }
	}

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = (name in RESERVED_SPEC_KEYS);
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;

	    var isInherited = (name in Constructor);
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function (partialProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueSetProps(this, partialProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function (newProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  }
	};

	var ReactClassComponent = function () {};
	assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactNoopUpdateQueue = __webpack_require__(124);

	var canDefineProperty = __webpack_require__(43);
	var emptyObject = __webpack_require__(58);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
	    setProps: ['setProps', 'Instead, call render again at the top level.']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(25);

	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    warnTDZ(publicInstance, 'setProps');
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    warnTDZ(publicInstance, 'replaceProps');
	  }

	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(55);
	var PooledClass = __webpack_require__(56);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactDOMFeatureFlags = __webpack_require__(41);
	var ReactInputSelection = __webpack_require__(126);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);

	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};

	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function () {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },

	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
	  close: function (previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};

	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },

	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function () {
	    this.reactMountReady.notifyAll();
	  }
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction(forceHTML) {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactReconcileTransaction);

	module.exports = ReactReconcileTransaction;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	var ReactDOMSelection = __webpack_require__(127);

	var containsNode = __webpack_require__(59);
	var focusNode = __webpack_require__(95);
	var getActiveElement = __webpack_require__(129);

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function (elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },

	  getSelectionInformation: function () {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function (priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      focusNode(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function (input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }

	    return selection || { start: 0, end: 0 };
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function (input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};

	module.exports = ReactInputSelection;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var getNodeForCharacterOffset = __webpack_require__(128);
	var getTextContentAccessor = __webpack_require__(75);

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;

	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);

	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;

	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;

	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }

	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};

	module.exports = ReactDOMSelection;

/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	module.exports = getNodeForCharacterOffset;

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	'use strict';

	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPropagators = __webpack_require__(73);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactInputSelection = __webpack_require__(126);
	var SyntheticEvent = __webpack_require__(77);

	var getActiveElement = __webpack_require__(129);
	var isTextInputElement = __webpack_require__(82);
	var keyOf = __webpack_require__(79);
	var shallowEqual = __webpack_require__(117);

	var topLevelTypes = EventConstants.topLevelTypes;

	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSelect: null }),
	      captured: keyOf({ onSelectCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events.
	var hasListener = false;
	var ON_SELECT_KEY = keyOf({ onSelect: null });

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  },

	  didPutListener: function (id, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};

	module.exports = SelectEventPlugin;

/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	'use strict';

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function () {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventListener = __webpack_require__(119);
	var EventPropagators = __webpack_require__(73);
	var ReactMount = __webpack_require__(28);
	var SyntheticClipboardEvent = __webpack_require__(133);
	var SyntheticEvent = __webpack_require__(77);
	var SyntheticFocusEvent = __webpack_require__(134);
	var SyntheticKeyboardEvent = __webpack_require__(135);
	var SyntheticMouseEvent = __webpack_require__(86);
	var SyntheticDragEvent = __webpack_require__(138);
	var SyntheticTouchEvent = __webpack_require__(139);
	var SyntheticUIEvent = __webpack_require__(87);
	var SyntheticWheelEvent = __webpack_require__(140);

	var emptyFunction = __webpack_require__(15);
	var getEventCharCode = __webpack_require__(136);
	var invariant = __webpack_require__(13);
	var keyOf = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  abort: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAbort: true }),
	      captured: keyOf({ onAbortCapture: true })
	    }
	  },
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBlur: true }),
	      captured: keyOf({ onBlurCapture: true })
	    }
	  },
	  canPlay: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlay: true }),
	      captured: keyOf({ onCanPlayCapture: true })
	    }
	  },
	  canPlayThrough: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlayThrough: true }),
	      captured: keyOf({ onCanPlayThroughCapture: true })
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onClick: true }),
	      captured: keyOf({ onClickCapture: true })
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onContextMenu: true }),
	      captured: keyOf({ onContextMenuCapture: true })
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCopy: true }),
	      captured: keyOf({ onCopyCapture: true })
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCut: true }),
	      captured: keyOf({ onCutCapture: true })
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDoubleClick: true }),
	      captured: keyOf({ onDoubleClickCapture: true })
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrag: true }),
	      captured: keyOf({ onDragCapture: true })
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnd: true }),
	      captured: keyOf({ onDragEndCapture: true })
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnter: true }),
	      captured: keyOf({ onDragEnterCapture: true })
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragExit: true }),
	      captured: keyOf({ onDragExitCapture: true })
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragLeave: true }),
	      captured: keyOf({ onDragLeaveCapture: true })
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragOver: true }),
	      captured: keyOf({ onDragOverCapture: true })
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragStart: true }),
	      captured: keyOf({ onDragStartCapture: true })
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrop: true }),
	      captured: keyOf({ onDropCapture: true })
	    }
	  },
	  durationChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDurationChange: true }),
	      captured: keyOf({ onDurationChangeCapture: true })
	    }
	  },
	  emptied: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEmptied: true }),
	      captured: keyOf({ onEmptiedCapture: true })
	    }
	  },
	  encrypted: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEncrypted: true }),
	      captured: keyOf({ onEncryptedCapture: true })
	    }
	  },
	  ended: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEnded: true }),
	      captured: keyOf({ onEndedCapture: true })
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onError: true }),
	      captured: keyOf({ onErrorCapture: true })
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onFocus: true }),
	      captured: keyOf({ onFocusCapture: true })
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInput: true }),
	      captured: keyOf({ onInputCapture: true })
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyDown: true }),
	      captured: keyOf({ onKeyDownCapture: true })
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyPress: true }),
	      captured: keyOf({ onKeyPressCapture: true })
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyUp: true }),
	      captured: keyOf({ onKeyUpCapture: true })
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoad: true }),
	      captured: keyOf({ onLoadCapture: true })
	    }
	  },
	  loadedData: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedData: true }),
	      captured: keyOf({ onLoadedDataCapture: true })
	    }
	  },
	  loadedMetadata: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedMetadata: true }),
	      captured: keyOf({ onLoadedMetadataCapture: true })
	    }
	  },
	  loadStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadStart: true }),
	      captured: keyOf({ onLoadStartCapture: true })
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseDown: true }),
	      captured: keyOf({ onMouseDownCapture: true })
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseMove: true }),
	      captured: keyOf({ onMouseMoveCapture: true })
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOut: true }),
	      captured: keyOf({ onMouseOutCapture: true })
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOver: true }),
	      captured: keyOf({ onMouseOverCapture: true })
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseUp: true }),
	      captured: keyOf({ onMouseUpCapture: true })
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPaste: true }),
	      captured: keyOf({ onPasteCapture: true })
	    }
	  },
	  pause: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPause: true }),
	      captured: keyOf({ onPauseCapture: true })
	    }
	  },
	  play: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlay: true }),
	      captured: keyOf({ onPlayCapture: true })
	    }
	  },
	  playing: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlaying: true }),
	      captured: keyOf({ onPlayingCapture: true })
	    }
	  },
	  progress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onProgress: true }),
	      captured: keyOf({ onProgressCapture: true })
	    }
	  },
	  rateChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onRateChange: true }),
	      captured: keyOf({ onRateChangeCapture: true })
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onReset: true }),
	      captured: keyOf({ onResetCapture: true })
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onScroll: true }),
	      captured: keyOf({ onScrollCapture: true })
	    }
	  },
	  seeked: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeked: true }),
	      captured: keyOf({ onSeekedCapture: true })
	    }
	  },
	  seeking: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeking: true }),
	      captured: keyOf({ onSeekingCapture: true })
	    }
	  },
	  stalled: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onStalled: true }),
	      captured: keyOf({ onStalledCapture: true })
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSubmit: true }),
	      captured: keyOf({ onSubmitCapture: true })
	    }
	  },
	  suspend: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSuspend: true }),
	      captured: keyOf({ onSuspendCapture: true })
	    }
	  },
	  timeUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTimeUpdate: true }),
	      captured: keyOf({ onTimeUpdateCapture: true })
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchCancel: true }),
	      captured: keyOf({ onTouchCancelCapture: true })
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchEnd: true }),
	      captured: keyOf({ onTouchEndCapture: true })
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchMove: true }),
	      captured: keyOf({ onTouchMoveCapture: true })
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchStart: true }),
	      captured: keyOf({ onTouchStartCapture: true })
	    }
	  },
	  volumeChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onVolumeChange: true }),
	      captured: keyOf({ onVolumeChangeCapture: true })
	    }
	  },
	  waiting: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWaiting: true }),
	      captured: keyOf({ onWaitingCapture: true })
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWheel: true }),
	      captured: keyOf({ onWheelCapture: true })
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topAbort: eventTypes.abort,
	  topBlur: eventTypes.blur,
	  topCanPlay: eventTypes.canPlay,
	  topCanPlayThrough: eventTypes.canPlayThrough,
	  topClick: eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy: eventTypes.copy,
	  topCut: eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag: eventTypes.drag,
	  topDragEnd: eventTypes.dragEnd,
	  topDragEnter: eventTypes.dragEnter,
	  topDragExit: eventTypes.dragExit,
	  topDragLeave: eventTypes.dragLeave,
	  topDragOver: eventTypes.dragOver,
	  topDragStart: eventTypes.dragStart,
	  topDrop: eventTypes.drop,
	  topDurationChange: eventTypes.durationChange,
	  topEmptied: eventTypes.emptied,
	  topEncrypted: eventTypes.encrypted,
	  topEnded: eventTypes.ended,
	  topError: eventTypes.error,
	  topFocus: eventTypes.focus,
	  topInput: eventTypes.input,
	  topKeyDown: eventTypes.keyDown,
	  topKeyPress: eventTypes.keyPress,
	  topKeyUp: eventTypes.keyUp,
	  topLoad: eventTypes.load,
	  topLoadedData: eventTypes.loadedData,
	  topLoadedMetadata: eventTypes.loadedMetadata,
	  topLoadStart: eventTypes.loadStart,
	  topMouseDown: eventTypes.mouseDown,
	  topMouseMove: eventTypes.mouseMove,
	  topMouseOut: eventTypes.mouseOut,
	  topMouseOver: eventTypes.mouseOver,
	  topMouseUp: eventTypes.mouseUp,
	  topPaste: eventTypes.paste,
	  topPause: eventTypes.pause,
	  topPlay: eventTypes.play,
	  topPlaying: eventTypes.playing,
	  topProgress: eventTypes.progress,
	  topRateChange: eventTypes.rateChange,
	  topReset: eventTypes.reset,
	  topScroll: eventTypes.scroll,
	  topSeeked: eventTypes.seeked,
	  topSeeking: eventTypes.seeking,
	  topStalled: eventTypes.stalled,
	  topSubmit: eventTypes.submit,
	  topSuspend: eventTypes.suspend,
	  topTimeUpdate: eventTypes.timeUpdate,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd: eventTypes.touchEnd,
	  topTouchMove: eventTypes.touchMove,
	  topTouchStart: eventTypes.touchStart,
	  topVolumeChange: eventTypes.volumeChange,
	  topWaiting: eventTypes.waiting,
	  topWheel: eventTypes.wheel
	};

	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}

	var ON_CLICK_KEY = keyOf({ onClick: null });
	var onClickListeners = {};

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
	    var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  },

	  didPutListener: function (id, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var node = ReactMount.getNode(id);
	      if (!onClickListeners[id]) {
	        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
	      }
	    }
	  },

	  willDeleteListener: function (id, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      onClickListeners[id].remove();
	      delete onClickListeners[id];
	    }
	  }

	};

	module.exports = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(77);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	module.exports = SyntheticClipboardEvent;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	module.exports = SyntheticFocusEvent;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	var getEventCharCode = __webpack_require__(136);
	var getEventKey = __webpack_require__(137);
	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	module.exports = SyntheticKeyboardEvent;

/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	module.exports = getEventCharCode;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */

	'use strict';

	var getEventCharCode = __webpack_require__(136);

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	module.exports = getEventKey;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(86);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	module.exports = SyntheticDragEvent;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(87);

	var getEventModifierState = __webpack_require__(88);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	module.exports = SyntheticTouchEvent;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(86);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	module.exports = SyntheticWheelEvent;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    xlinkActuate: MUST_USE_ATTRIBUTE,
	    xlinkArcrole: MUST_USE_ATTRIBUTE,
	    xlinkHref: MUST_USE_ATTRIBUTE,
	    xlinkRole: MUST_USE_ATTRIBUTE,
	    xlinkShow: MUST_USE_ATTRIBUTE,
	    xlinkTitle: MUST_USE_ATTRIBUTE,
	    xlinkType: MUST_USE_ATTRIBUTE,
	    xmlBase: MUST_USE_ATTRIBUTE,
	    xmlLang: MUST_USE_ATTRIBUTE,
	    xmlSpace: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox',
	    xlinkActuate: 'xlink:actuate',
	    xlinkArcrole: 'xlink:arcrole',
	    xlinkHref: 'xlink:href',
	    xlinkRole: 'xlink:role',
	    xlinkShow: 'xlink:show',
	    xlinkTitle: 'xlink:title',
	    xlinkType: 'xlink:type',
	    xmlBase: 'xml:base',
	    xmlLang: 'xml:lang',
	    xmlSpace: 'xml:space'
	  }
	};

	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(23);
	var ReactDefaultPerfAnalysis = __webpack_require__(143);
	var ReactMount = __webpack_require__(28);
	var ReactPerf = __webpack_require__(18);

	var performanceNow = __webpack_require__(144);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function () {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function () {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function () {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  getMeasurementsSummaryMap: function (measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
	    return summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  printDOM: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function (item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result.type = item.type;
	      result.args = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  _recordWrite: function (id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function (moduleName, fnName, func) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0,
	          created: {}
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function (update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
	          });
	        } else {
	          // basic format
	          var id = args[0];
	          if (typeof id === 'object') {
	            id = ReactMount.getID(args[0]);
	          }
	          ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || // TODO: receiveComponent()?
	      fnName === '_renderValidatedComponent')) {

	        if (this._currentElement.type === ReactMount.TopLevelWrapper) {
	          return func.apply(this, args);
	        }

	        var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          entry.created[rootNodeID] = true;
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	'use strict';

	var assign = __webpack_require__(39);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  SET_MARKUP: 'set innerHTML',
	  TEXT_CONTENT: 'set textContent',
	  'setValueForProperty': 'update attribute',
	  'setValueForAttribute': 'update attribute',
	  'deleteValueForProperty': 'remove attribute',
	  'setValueForStyles': 'update styles',
	  'replaceNodeWithMarkup': 'replace',
	  'updateTextContent': 'set textContent'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  measurements.forEach(function (measurement) {
	    Object.keys(measurement.writes).forEach(function (id) {
	      measurement.writes[id].forEach(function (write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    });
	  });
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    // check if component newly created
	    if (measurement.created[id]) {
	      isDirty = true;
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	'use strict';

	var performance = __webpack_require__(145);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function () {
	    return performance.now();
	  };
	} else {
	  performanceNow = function () {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 146 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '0.14.7';

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/

	'use strict';

	var ReactMount = __webpack_require__(28);

	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */

	'use strict';

	var ReactDefaultInjection = __webpack_require__(71);
	var ReactServerRendering = __webpack_require__(149);
	var ReactVersion = __webpack_require__(146);

	ReactDefaultInjection.inject();

	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};

	module.exports = ReactDOMServer;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactDefaultBatchingStrategy = __webpack_require__(92);
	var ReactElement = __webpack_require__(42);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactMarkupChecksum = __webpack_require__(48);
	var ReactServerBatchingStrategy = __webpack_require__(150);
	var ReactServerRenderingTransaction = __webpack_require__(151);
	var ReactUpdates = __webpack_require__(54);

	var emptyObject = __webpack_require__(58);
	var instantiateReactComponent = __webpack_require__(62);
	var invariant = __webpack_require__(13);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 * @typechecks
	 */

	'use strict';

	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};

	module.exports = ReactServerBatchingStrategy;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	'use strict';

	var PooledClass = __webpack_require__(56);
	var CallbackQueue = __webpack_require__(55);
	var Transaction = __webpack_require__(57);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = false;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactIsomorphic
	 */

	'use strict';

	var ReactChildren = __webpack_require__(110);
	var ReactComponent = __webpack_require__(123);
	var ReactClass = __webpack_require__(122);
	var ReactDOMFactories = __webpack_require__(153);
	var ReactElement = __webpack_require__(42);
	var ReactElementValidator = __webpack_require__(154);
	var ReactPropTypes = __webpack_require__(107);
	var ReactVersion = __webpack_require__(146);

	var assign = __webpack_require__(39);
	var onlyChild = __webpack_require__(156);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 * @typechecks static-only
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactElementValidator = __webpack_require__(154);

	var mapObject = __webpack_require__(155);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactPropTypeLocations = __webpack_require__(65);
	var ReactPropTypeLocationNames = __webpack_require__(66);
	var ReactCurrentOwner = __webpack_require__(5);

	var canDefineProperty = __webpack_require__(43);
	var getIteratorFn = __webpack_require__(108);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }

	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;

	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  return addenda;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(42);

	var invariant = __webpack_require__(13);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var warning = __webpack_require__(25);

	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} fnName The name of the function
	 * @param {string} newModule The module that fn will exist in
	 * @param {string} newPackage The module that fn will exist in
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {function} The function that will warn once and then call fn
	 */
	function deprecated(fnName, newModule, newPackage, ctx, fn) {
	  var warned = false;
	  if (process.env.NODE_ENV !== 'production') {
	    var newFn = function () {
	      process.env.NODE_ENV !== 'production' ? warning(warned,
	      // Require examples in this string must be split to prevent React's
	      // build tools from mistaking them for real requires.
	      // Otherwise the build tools will attempt to build a '%s' module.
	      'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }

	  return fn;
	}

	module.exports = deprecated;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CountrySelect = __webpack_require__(160);
	var CountryDisplay = __webpack_require__(161);

	var CountriesBox = React.createClass({
	  displayName: 'CountriesBox',

	  getInitialState: function getInitialState() {
	    return {
	      countries: [],
	      currentCountry: null
	    };
	  },

	  setCurrentCountry: function setCurrentCountry(country) {
	    this.setState({ currentCountry: country });
	  },

	  componentDidMount: function componentDidMount() {
	    var url = "https://restcountries.eu/rest/v1/all";
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = function () {
	      var data = JSON.parse(request.responseText);
	      this.setState({ countries: data });
	    }.bind(this);
	    request.send(null);
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h4',
	        null,
	        ' Countries '
	      ),
	      React.createElement(CountrySelect, { onSelectCountry: this.setCurrentCountry, countries: this.state.countries }),
	      React.createElement(CountryDisplay, { onSelectCountry: this.setCurrentCountry, country: this.state.currentCountry, countries: this.state.countries })
	    );
	  }
	});

	module.exports = CountriesBox;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var CountrySelect = React.createClass({
	  displayName: "CountrySelect",


	  getInitialState: function getInitialState() {
	    return { selectedIndex: null };
	  },

	  handleSelect: function handleSelect(e) {
	    e.preventDefault;
	    var index = e.target.value;
	    this.setState({ selectedIndex: index });
	    var currentCountry = this.props.countries[index];
	    this.props.onSelectCountry(currentCountry);
	  },

	  render: function render() {

	    var countryNames = this.props.countries.map(function (country, index) {
	      return React.createElement(
	        "option",
	        { key: index, value: index },
	        " ",
	        country.name,
	        " "
	      );
	    });

	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "select",
	        { value: this.state.selectedIndex, onChange: this.handleSelect },
	        React.createElement(
	          "option",
	          { value: "" },
	          "Choose a country..."
	        ),
	        countryNames
	      )
	    );
	  }
	});

	module.exports = CountrySelect;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CountryBorders = __webpack_require__(162);
	var CountryLanguage = __webpack_require__(163);

	var CountryDisplay = React.createClass({
	  displayName: 'CountryDisplay',

	  render: function render() {

	    if (!this.props.country) {
	      return React.createElement(
	        'h5',
	        null,
	        'No country selected'
	      );
	    }

	    var languageCode = this.props.country.languages[0];
	    var language = CountryLanguage.getLanguage(languageCode);

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h4',
	        null,
	        this.props.country.name,
	        ', ',
	        this.props.country.region
	      ),
	      React.createElement(
	        'h5',
	        null,
	        'Capital City: ',
	        this.props.country.capital
	      ),
	      React.createElement(
	        'h5',
	        null,
	        'Native Language: ',
	        language.name[0]
	      ),
	      React.createElement(CountryBorders, { onSelectCountry: this.props.onSelectCountry, borders: this.props.country.borders, countries: this.props.countries })
	    );
	  }
	});

	module.exports = CountryDisplay;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var CountryBorders = React.createClass({
	  displayName: 'CountryBorders',


	  handleClick: function handleClick(e) {
	    console.log(e.target);
	  },

	  render: function render() {
	    if (this.props.borders.length == 0) {
	      return React.createElement(
	        'h5',
	        null,
	        'No borders'
	      );
	    }

	    var borders = this.props.borders.map(function (border) {
	      var bordersWithInfo = this.props.countries.map(function (country, index) {
	        if (country.alpha3Code == border) {
	          return React.createElement(
	            'button',
	            { key: index, value: index },
	            ' ',
	            country.name,
	            ' '
	          );
	        }
	      }.bind(this));
	      return bordersWithInfo;
	    }.bind(this));

	    return React.createElement(
	      'div',
	      { onClick: this.handleClick },
	      React.createElement(
	        'h4',
	        null,
	        ' Borders '
	      ),
	      React.createElement(
	        'p',
	        null,
	        ' ',
	        borders,
	        ' '
	      )
	    );
	  }
	});

	module.exports = CountryBorders;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(164)
	  , _d = __webpack_require__(165)
	  , utils = __webpack_require__(166)
	  , data = __webpack_require__(167);

	_.mixin(_d);

	var noop = function(err, value) {
	  if (err) return err;
	  return value;
	};

	exports.getCountries = function () {
	  return data.countries;
	};

	exports.getLanguages = function () {
	  return data.languages;
	};

	exports.getLanguageFamilies = function () {
	  return data.languageFamilies;
	};

	exports.getLanguageCodes = function (codeType, cb) {
	  var languages = data.languages
	    , cType
	    , cTypeNames = [ 'iso639_1', 'iso639_2en', 'iso639_3']
	    , codes = [];

	  cb = cb || utils.isFunction(codeType) ? codeType : noop;

	  codeType = (codeType && !utils.isFunction(codeType)) ? codeType : 1;
	  codeType = Math.floor(Number(codeType));
	  if (isNaN(codeType) || codeType < 1 || codeType > cTypeNames.length) {
	    return cb('Wrong language code type provided. Valid values: 1, 2, 3 for iso639-1, iso639-2, iso639-3 respectively');
	  }
	  cType = cTypeNames[codeType - 1];
	  _.each(languages, function (language) {
	    if (language[cType]) codes.push(language[cType]);
	  });

	  return cb(null, codes);
	};

	exports.getCountryCodes = function (codeType, cb) {
	  var countries = data.countries
	    , cType
	    , cTypeNames = [ 'numCode', 'code_2', 'code_3' ]
	    , codes = [];

	  cb = cb || utils.isFunction(codeType) ? codeType : noop;

	  codeType = (codeType && !utils.isFunction(codeType)) ? codeType : 2;
	  codeType = Math.floor(Number(codeType));
	  if (isNaN(codeType) || codeType < 1 || codeType > cTypeNames.length) {
	    return cb('Wrong country code type provided. Valid values: 1, 2, 3 for numeric code, alpha-2, alpha-3 respectively');
	  }
	  cType = cTypeNames[codeType - 1];
	  _.each(countries, function (country) {
	    if (country[cType]) codes.push(country[cType]);
	  });

	  return cb(null, codes);
	};

	exports.languageCodeExists = function (code) {
	  var codes
	    , exists;

	  if (!code) return false;
	  code = code.toLowerCase();
	  for (var i = 1; i < 4; i++) {
	    codes = exports.getLanguageCodes(i);
	    exists = _.indexOf(codes, code) != -1;
	    if (exists) break;
	  }

	  return exists;
	};

	exports.countryCodeExists = function (code) {
	  var codes
	    , exists;

	  if (!code) return false;
	  code = code.toUpperCase();
	  for (var i = 1; i < 4; i++) {
	    codes = exports.getCountryCodes(i);
	    exists = _.indexOf(codes, code) != -1;
	    if (exists) break;
	  }

	  return exists;
	};

	exports.getCountry  = function (code, cb, noLangInfo) {
	  var countries = data.countries
	    , country
	    , codeFld
	    , langs;

	  if ('string' !== typeof code) {
	    return cb('No country code provided');
	  }
	  cb = cb || noop;
	  code = code.toUpperCase();

	  if (code.length == 2) {
	    codeFld = 'code_2';
	  } else if (code.length == 3) {
	    codeFld = 'code_3';
	  }

	  if (codeFld) {
	    country = _.find(countries, function (c) {
	      return c[codeFld] == code;
	    });
	    if (!country) {
	      return cb('There is no country with code "' + code + '"');
	    }
	    country = _.deepClone(country);
	    if (!noLangInfo) {
	      langs = country.languages;
	      country.languages = [];
	      _.each(langs, function (l) {
	        country.languages.push(exports.getLanguage(l, null, true));
	      });
	    }
	    return cb(null, country);
	  } else {
	    return cb('Wrong type of country code provided');
	  }
	};

	exports.getLanguage = function (code, cb, noCountryInfo) {
	  var languages = data.languages
	    , language
	    , codeFld = []
	    , countrs;

	  cb = cb || noop;

	  if ('string' !== typeof code) {
	    return cb('No language code provided');
	  }
	  code = code.toLowerCase();

	  if (code.length == 2) {
	    codeFld.push('iso639_1');
	  } else if (code.length == 3) {
	    codeFld.push('iso639_2');
	    codeFld.push('iso639_2en');
	    codeFld.push('iso639_3');
	  }

	  if (codeFld) {
	    for (var i = 0; i < codeFld.length; i++) {
	      language = _.find(languages, function (l) {
	        return l[codeFld[i]] == code;
	      });
	      if (language) break;
	    }
	    if (!language) {
	      return cb('There is no language with code "' + code + '"');
	    }
	    language = _.deepClone(language);
	    if (!noCountryInfo) {
	      countrs = language.countries;
	      language.countries = [];
	      _.each(countrs, function (c) {
	        language.countries.push(exports.getCountry(c, null, true));
	      });
	    }
	    return cb(null, language);
	  } else {
	    return cb('Wrong type of language code provided');
	  }
	};

	exports.getCountryLanguages = function (code, cb) {
	  var codes = [];

	  cb = cb || noop;

	  exports.getCountry(code, function (err, country) {
	    if (err) return cb(err);
	    _.each(country.languages, function (l) {
	      codes.push({
	          iso639_1: l.iso639_1
	        , iso639_2: l.iso639_2en
	        , iso639_3: l.iso639_3
	      });
	    });
	  });
	  return cb(null, codes);
	};

	exports.getLanguageCountries = function (code, cb) {
	  var codes = [];

	  cb = cb || noop;

	  exports.getLanguage(code, function (err, language) {
	    if (err) return cb(err);
	    _.each(language.countries, function (c) {
	      codes.push({
	          code_2: c.code_2
	        , code_3: c.code_3
	        , numCode: c.numCode
	      });
	    });
	  });
	  return cb(null, codes);
	};

	exports.getCountryMsLocales = function (code, cb) {
	  var codes = [];

	  cb = cb || noop;

	  exports.getCountry(code, function (err, country) {
	    if (err) return cb(err);
	    codes = country.langCultureMs;
	  });
	  return cb(null, codes);
	};

	exports.getLanguageMsLocales = function (code, cb) {
	  var codes = [];

	  cb = cb || noop;

	  exports.getLanguage(code, function (err, language) {
	    if (err) return cb(err);
	    codes = language.langCultureMs;
	  });
	  return cb(null, codes);
	};

	exports.getLanguageFamilyMembers = function (family, cb) {
	  var languages = data.languages
	    , check
	    , members
	    , ret = [];

	  cb = cb || noop;

	  if ('string' !== typeof family) {
	    return cb('No language family provided');
	  }
	  family = family.toLowerCase();

	  check = _.find(data.languageFamilies, function (f) {
	    return f.toLowerCase() == family;
	  });
	  if (!check) {
	    return cb('There is no language family "' + family + '"');
	  }

	  members = _.filter(languages, function (l) {
	    return l.family.toLowerCase() == family;
	  });
	  _.each(members, function (l) {
	    ret.push(exports.getLanguage(l.iso639_3));
	  });
	  return cb(null, ret);
	};

	exports.getLocales = function (mode) {
	  var locales = data.locales
	    , ret = []
	    , loc2;
	  locales.forEach(function (loc) {
	    loc2 = loc[2] ? '-' + loc[2] : '';
	    if (mode) {
	      ret.push(loc[0] + loc2 + '-' + loc[1]);
	    } else {
	      ret.push(loc[0] + '-' + loc[1] + loc2);
	    }
	  });
	  return ret;
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.7.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.7.0';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var createCallback = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  _.iteratee = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return createCallback(value, context, argCount);
	    if (_.isObject(value)) return _.matches(value);
	    return _.property(value);
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    if (obj == null) return obj;
	    iteratee = createCallback(iteratee, context);
	    var i, length = obj.length;
	    if (length === +length) {
	      for (i = 0; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    if (obj == null) return [];
	    iteratee = _.iteratee(iteratee, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length),
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index = 0, currentKey;
	    if (arguments.length < 3) {
	      if (!length) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[index++] : index++];
	    }
	    for (; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== + obj.length && _.keys(obj),
	        index = (keys || obj).length,
	        currentKey;
	    if (arguments.length < 3) {
	      if (!index) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[--index] : --index];
	    }
	    while (index--) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    predicate = _.iteratee(predicate, context);
	    _.some(obj, function(value, index, list) {
	      if (predicate(value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    predicate = _.iteratee(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    if (obj == null) return true;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    if (obj == null) return false;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (obj.length !== +obj.length) obj = _.values(obj);
	    return _.indexOf(obj, target) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matches(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matches(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (obj.length !== +obj.length) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = low + high >>> 1;
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = _.iteratee(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    if (n < 0) return [];
	    return slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return slice.call(array, Math.max(array.length - n, 0));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    for (var i = 0, length = input.length; i < length; i++) {
	      var value = input[i];
	      if (!_.isArray(value) && !_.isArguments(value)) {
	        if (!strict) output.push(value);
	      } else if (shallow) {
	        push.apply(output, value);
	      } else {
	        flatten(value, shallow, strict, output);
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i];
	      if (isSorted) {
	        if (!i || seen !== value) result.push(value);
	        seen = value;
	      } else if (iteratee) {
	        var computed = iteratee(value, i, array);
	        if (_.indexOf(seen, computed) < 0) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (_.indexOf(result, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true, []));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(slice.call(arguments, 1), true, true, []);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function(array) {
	    if (array == null) return [];
	    var length = _.max(arguments, 'length').length;
	    var results = Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var idx = array.length;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var Ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    args = slice.call(arguments, 2);
	    bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      Ctor.prototype = func.prototype;
	      var self = new Ctor;
	      Ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (_.isObject(result)) return result;
	      return self;
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    return function() {
	      var position = 0;
	      var args = boundArgs.slice();
	      for (var i = 0, length = args.length; i < length; i++) {
	        if (args[i] === _) args[i] = arguments[position++];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return func.apply(this, args);
	    };
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = hasher ? hasher.apply(this, arguments) : key;
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last > 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed before being called N times.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      } else {
	        func = null;
	      }
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (hasOwnProperty.call(source, prop)) {
	            obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj, iteratee, context) {
	    var result = {}, key;
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      iteratee = createCallback(iteratee, context);
	      for (key in obj) {
	        var value = obj[key];
	        if (iteratee(value, key, obj)) result[key] = value;
	      }
	    } else {
	      var keys = concat.apply([], slice.call(arguments, 1));
	      obj = new Object(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        key = keys[i];
	        if (key in obj) result[key] = obj[key];
	      }
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (
	      aCtor !== bCtor &&
	      // Handle Object.create(x) cases
	      'constructor' in a && 'constructor' in b &&
	      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	        _.isFunction(bCtor) && bCtor instanceof bCtor)
	    ) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size, result;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size === b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      size = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      result = _.keys(b).length === size;
	      if (result) {
	        while (size--) {
	          // Deep compare each member
	          key = keys[size];
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	  _.matches = function(attrs) {
	    var pairs = _.pairs(attrs), length = pairs.length;
	    return function(obj) {
	      if (obj == null) return !length;
	      obj = new Object(obj);
	      for (var i = 0; i < length; i++) {
	        var pair = pairs[i], key = pair[0];
	        if (pair[1] !== obj[key] || !(key in obj)) return false;
	      }
	      return true;
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = createCallback(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? object[property]() : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	var deepClone, deepDelete, deepExtend, deepFromFlat, deepKeys, deepMapValues, isPlainObject, mapKeys, mapValues, _;

	_ = __webpack_require__(164);

	module.exports = {
	  deepKeys: deepKeys = function(obj) {
	    if (!isPlainObject(obj)) {
	      throw new Error("deepKeys must be called on an object, not '" + obj + "'");
	    }
	    return _.flatten(_.map(obj, function(v, k) {
	      if (isPlainObject(v) && !_.isEmpty(v)) {
	        return _.map(deepKeys(v), function(subkey) {
	          return "" + k + "." + subkey;
	        });
	      } else {
	        return [k];
	      }
	    }));
	  },
	  deepClone: deepClone = function(object) {
	    var type, _i, _len, _ref;
	    if (object == null) {
	      return object;
	    }
	    _ref = [Date, Number, String, Boolean];
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      type = _ref[_i];
	      if (object instanceof type) {
	        return new type(object);
	      }
	    }
	    if (_(object).isArray()) {
	      return _(object).map(deepClone);
	    }
	    if (!_(object).isObject()) {
	      return object;
	    }
	    if (object.nodeType && _(object.cloneNode).isFunction()) {
	      return object.cloneNode(true);
	    }
	    if (object.constructor !== {}.constructor) {
	      return object;
	    }
	    return mapValues(object, deepClone);
	  },
	  deepHas: function(obj, keys) {
	    var helper;
	    helper = function(obj, keys) {
	      if ((keys.length === 0) || (!_.isObject(obj))) {
	        return false;
	      } else if (keys.length === 1) {
	        return _.first(keys) in obj;
	      } else {
	        return helper(obj[_.first(keys)], _.rest(keys));
	      }
	    };
	    return helper(obj, _.isArray(keys) ? keys : keys.split('.'));
	  },
	  deepOmit: function(obj, keys) {
	    var deepOmitOne;
	    if (!isPlainObject(obj)) {
	      throw new Error("deepOmit must be called on an object, not '" + obj + "'");
	    }
	    deepOmitOne = function(obj, key) {
	      var helper;
	      helper = function(obj, key_arr) {
	        switch (false) {
	          case !_.isEmpty(key_arr):
	            return obj;
	          case key_arr.length !== 1:
	            return _.omit(obj, _.first(key_arr));
	          case !!isPlainObject(obj[_.first(key_arr)]):
	            return obj;
	          default:
	            return _.extend({}, obj, _.object([_.first(key_arr)], [helper(obj[_.first(key_arr)], _.rest(key_arr))]));
	        }
	      };
	      return helper(obj, key.split('.'));
	    };
	    return _.reduce(keys, deepOmitOne, obj);
	  },
	  deepPick: (function() {
	    var deepGet;
	    deepGet = function(obj, key) {
	      var helper;
	      helper = function(obj, key_arr) {
	        if (key_arr.length === 1) {
	          return obj != null ? obj[_.first(key_arr)] : void 0;
	        } else {
	          return helper(obj[_.first(key_arr)], _.rest(key_arr));
	        }
	      };
	      return helper(obj, key.split('.'));
	    };
	    return function(obj, keys) {
	      var flat_new_obj;
	      if (!isPlainObject(obj)) {
	        throw new Error("deepPick must be called on an object, not '" + obj + "'");
	      }
	      flat_new_obj = _.reduce(keys, function(new_obj, key) {
	        var val;
	        val = deepGet(obj, key);
	        if (val !== void 0) {
	          new_obj[key] = val;
	        }
	        return new_obj;
	      }, {});
	      return deepFromFlat(flat_new_obj);
	    };
	  })(),
	  deepDelete: deepDelete = function(obj, key) {
	    if ((key == null) || (obj == null)) {
	      return;
	    }
	    if (!_(key).isArray()) {
	      key = key.split('.');
	    }
	    if (key.length === 1) {
	      delete obj[key];
	      return;
	    }
	    return deepDelete(obj[key[0]], key.slice(1, key.length));
	  },
	  deepExtend: deepExtend = function(obj, ext, mutate) {
	    return _.reduce(ext, function(acc, val, key) {
	      acc[key] = (key in obj) && isPlainObject(obj[key]) && isPlainObject(val) ? deepExtend(obj[key], val) : val;
	      return acc;
	    }, mutate ? obj : _.clone(obj));
	  },
	  isPlainObject: isPlainObject = function(value) {
	    return (value != null ? value.constructor : void 0) === {}.constructor;
	  },
	  deepToFlat: function(obj) {
	    var recurse, res;
	    res = {};
	    recurse = function(obj, current) {
	      var key, newKey, value, _results;
	      _results = [];
	      for (key in obj) {
	        value = obj[key];
	        newKey = (current ? current + "." + key : key);
	        if (value && isPlainObject(value)) {
	          _results.push(recurse(value, newKey));
	        } else {
	          _results.push(res[newKey] = value);
	        }
	      }
	      return _results;
	    };
	    recurse(obj);
	    return res;
	  },
	  deepFromFlat: deepFromFlat = function(o) {
	    var k, key, oo, part, parts, t;
	    oo = {};
	    t = void 0;
	    parts = void 0;
	    part = void 0;
	    for (k in o) {
	      t = oo;
	      parts = k.split(".");
	      key = parts.pop();
	      while (parts.length) {
	        part = parts.shift();
	        t = t[part] = t[part] || {};
	      }
	      t[key] = o[k];
	    }
	    return oo;
	  },
	  mapValues: mapValues = function(obj, f_val) {
	    if (!isPlainObject(obj)) {
	      throw new Error("mapValues must be called on an object, not '" + obj + "'");
	    }
	    return _.object(_.keys(obj), _.map(obj, f_val));
	  },
	  deepMapValues: deepMapValues = function(obj, f) {
	    if (!isPlainObject(obj)) {
	      throw new Error("deepMapValues must be called on an object, not '" + obj + "'");
	    }
	    return mapValues(obj, function(v, k) {
	      if (isPlainObject(v)) {
	        return deepMapValues(v, function(subv, subk) {
	          return f(subv, "" + k + "." + subk);
	        });
	      } else {
	        return f(v, k);
	      }
	    });
	  },
	  mapKeys: mapKeys = function(obj, f_val) {
	    if (!isPlainObject(obj)) {
	      throw new Error("mapKeys must be called on an object, not '" + obj + "'");
	    }
	    return _.object(_.map(obj, function(v, k) {
	      return f_val(k, v);
	    }), _.values(obj));
	  }
	};


/***/ },
/* 166 */
/***/ function(module, exports) {

	exports.isFunction = function (fn) {
	  var getType = {};
	  return fn && getType.toString.call(fn) === '[object Function]';
	};


/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = {
		"languageFamilies": [
			"Northwest Caucasian",
			"Afro-Asiatic",
			"Indo-European",
			"Niger–Congo",
			"Northeast Caucasian",
			"Aymaran",
			"Turkic",
			"Language isolate",
			"Creole",
			"Sino-Tibetan",
			"Austronesian",
			"Algonquian",
			"Constructed",
			"Uralic",
			"South Caucasian",
			"Tupian",
			"Eskimo–Aleut",
			"Japonic",
			"Dravidian",
			"Nilo-Saharan",
			"Austroasiatic",
			"Koreanic",
			"Tai–Kadai",
			"Mongolic",
			"Dené–Yeniseian",
			"Niger-Congo",
			"Quechuan"
		],
		"languages": [
			{
				"iso639_1": "ab",
				"iso639_2": "abk",
				"iso639_2en": "abk",
				"iso639_3": "abk",
				"name": [
					"Abkhaz"
				],
				"nativeName": [
					"аҧсуа бызшәа",
					"аҧсшәа"
				],
				"direction": "LTR",
				"family": "Northwest Caucasian"
			},
			{
				"iso639_1": "aa",
				"iso639_2": "aar",
				"iso639_2en": "aar",
				"iso639_3": "aar",
				"name": [
					"Afar"
				],
				"nativeName": [
					"Afaraf"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"DJI"
				]
			},
			{
				"iso639_1": "af",
				"iso639_2": "afr",
				"iso639_2en": "afr",
				"iso639_3": "afr",
				"name": [
					"Afrikaans"
				],
				"nativeName": [
					"Afrikaans"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ZAF"
				],
				"langCultureMs": [
					{
						"langCultureName": "af-ZA",
						"displayName": "Afrikaans - South Africa",
						"cultureCode": "0x0436"
					}
				]
			},
			{
				"iso639_1": "ak",
				"iso639_2": "aka",
				"iso639_2en": "aka",
				"iso639_3": "aka",
				"name": [
					"Akan"
				],
				"nativeName": [
					"Akan"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"GHA"
				]
			},
			{
				"iso639_1": "sq",
				"iso639_2": "sqi",
				"iso639_2en": "alb",
				"iso639_3": "sqi",
				"name": [
					"Albanian"
				],
				"nativeName": [
					"gjuha shqipe"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ALB"
				],
				"langCultureMs": [
					{
						"langCultureName": "sq-AL",
						"displayName": "Albanian - Albania",
						"cultureCode": "0x041C"
					}
				]
			},
			{
				"iso639_1": "am",
				"iso639_2": "amh",
				"iso639_2en": "amh",
				"iso639_3": "amh",
				"name": [
					"Amharic"
				],
				"nativeName": [
					"አማርኛ"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"ETH"
				]
			},
			{
				"iso639_1": "ar",
				"iso639_2": "ara",
				"iso639_2en": "ara",
				"iso639_3": "ara",
				"name": [
					"Arabic"
				],
				"nativeName": [
					"العربية"
				],
				"direction": "RTL",
				"family": "Afro-Asiatic",
				"countries": [
					"DZA",
					"BHR",
					"TCD",
					"COM",
					"DJI",
					"EGY",
					"ERI",
					"IRQ",
					"ISR",
					"JOR",
					"KWT",
					"LBN",
					"LBY",
					"MRT",
					"MAR",
					"NER",
					"OMN",
					"QAT",
					"SAU",
					"SOM",
					"SDN",
					"SYR",
					"TUN",
					"ARE",
					"YEM"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-DZ",
						"displayName": "Arabic - Algeria",
						"cultureCode": "0x1401"
					},
					{
						"langCultureName": "ar-BH",
						"displayName": "Arabic - Bahrain",
						"cultureCode": "0x3C01"
					},
					{
						"langCultureName": "ar-EG",
						"displayName": "Arabic - Egypt",
						"cultureCode": "0x0C01"
					},
					{
						"langCultureName": "ar-IQ",
						"displayName": "Arabic - Iraq",
						"cultureCode": "0x0801"
					},
					{
						"langCultureName": "ar-JO",
						"displayName": "Arabic - Jordan",
						"cultureCode": "0x2C01"
					},
					{
						"langCultureName": "ar-KW",
						"displayName": "Arabic - Kuwait",
						"cultureCode": "0x3401"
					},
					{
						"langCultureName": "ar-LB",
						"displayName": "Arabic - Lebanon",
						"cultureCode": "0x3001"
					},
					{
						"langCultureName": "ar-LY",
						"displayName": "Arabic - Libya",
						"cultureCode": "0x1001"
					},
					{
						"langCultureName": "ar-MA",
						"displayName": "Arabic - Morocco",
						"cultureCode": "0x1801"
					},
					{
						"langCultureName": "ar-OM",
						"displayName": "Arabic - Oman",
						"cultureCode": "0x2001"
					},
					{
						"langCultureName": "ar-QA",
						"displayName": "Arabic - Qatar",
						"cultureCode": "0x4001"
					},
					{
						"langCultureName": "ar-SA",
						"displayName": "Arabic - Saudi Arabia",
						"cultureCode": "0x0401"
					},
					{
						"langCultureName": "ar-SY",
						"displayName": "Arabic - Syria",
						"cultureCode": "0x2801"
					},
					{
						"langCultureName": "ar-TN",
						"displayName": "Arabic - Tunisia",
						"cultureCode": "0x1C01"
					},
					{
						"langCultureName": "ar-AE",
						"displayName": "Arabic - United Arab Emirates",
						"cultureCode": "0x3801"
					},
					{
						"langCultureName": "ar-YE",
						"displayName": "Arabic - Yemen",
						"cultureCode": "0x2401"
					}
				]
			},
			{
				"iso639_1": "an",
				"iso639_2": "arg",
				"iso639_2en": "arg",
				"iso639_3": "arg",
				"name": [
					"Aragonese"
				],
				"nativeName": [
					"aragonés"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "hy",
				"iso639_2": "hye",
				"iso639_2en": "arm",
				"iso639_3": "hye",
				"name": [
					"Armenian"
				],
				"nativeName": [
					"Հայերեն"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ARM"
				],
				"langCultureMs": [
					{
						"langCultureName": "hy-AM",
						"displayName": "Armenian - Armenia",
						"cultureCode": "0x042B"
					}
				]
			},
			{
				"iso639_1": "as",
				"iso639_2": "asm",
				"iso639_2en": "asm",
				"iso639_3": "asm",
				"name": [
					"Assamese"
				],
				"nativeName": [
					"অসমীয়া"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "av",
				"iso639_2": "ava",
				"iso639_2en": "ava",
				"iso639_3": "ava",
				"name": [
					"Avaric"
				],
				"nativeName": [
					"авар мацӀ",
					"магӀарул мацӀ"
				],
				"direction": "LTR",
				"family": "Northeast Caucasian"
			},
			{
				"iso639_1": "ae",
				"iso639_2": "ave",
				"iso639_2en": "ave",
				"iso639_3": "ave",
				"name": [
					"Avestan"
				],
				"nativeName": [
					"avesta"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "ay",
				"iso639_2": "aym",
				"iso639_2en": "aym",
				"iso639_3": "aym",
				"name": [
					"Aymara"
				],
				"nativeName": [
					"aymar aru"
				],
				"direction": "LTR",
				"family": "Aymaran",
				"countries": [
					"BOL",
					"PER"
				]
			},
			{
				"iso639_1": "az",
				"iso639_2": "aze",
				"iso639_2en": "aze",
				"iso639_3": "aze",
				"name": [
					"Azerbaijani"
				],
				"nativeName": [
					"azərbaycan dili"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"AZE"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-az-AZ",
						"displayName": "Azeri (Cyrillic) - Azerbaijan",
						"cultureCode": "0x082C"
					},
					{
						"langCultureName": "Lt-az-AZ",
						"displayName": "Azeri (Latin) - Azerbaijan",
						"cultureCode": "0x042C"
					}
				]
			},
			{
				"iso639_1": "bm",
				"iso639_2": "bam",
				"iso639_2en": "bam",
				"iso639_3": "bam",
				"name": [
					"Bambara"
				],
				"nativeName": [
					"bamanankan"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"MLI"
				]
			},
			{
				"iso639_1": "ba",
				"iso639_2": "bak",
				"iso639_2en": "bak",
				"iso639_3": "bak",
				"name": [
					"Bashkir"
				],
				"nativeName": [
					"башҡорт теле"
				],
				"direction": "LTR",
				"family": "Turkic"
			},
			{
				"iso639_1": "eu",
				"iso639_2": "eus",
				"iso639_2en": "baq",
				"iso639_3": "eus",
				"name": [
					"Basque"
				],
				"nativeName": [
					"euskara",
					"euskera"
				],
				"direction": "LTR",
				"family": "Language isolate",
				"langCultureMs": [
					{
						"langCultureName": "eu-ES",
						"displayName": "Basque - Basque",
						"cultureCode": "0x042D"
					}
				]
			},
			{
				"iso639_1": "be",
				"iso639_2": "bel",
				"iso639_2en": "bel",
				"iso639_3": "bel",
				"name": [
					"Belarusian"
				],
				"nativeName": [
					"беларуская мова"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BLR"
				],
				"langCultureMs": [
					{
						"langCultureName": "be-BY",
						"displayName": "Belarusian - Belarus",
						"cultureCode": "0x0423"
					}
				]
			},
			{
				"iso639_1": "bn",
				"iso639_2": "ben",
				"iso639_2en": "ben",
				"iso639_3": "ben",
				"name": [
					"Bengali",
					"Bangla"
				],
				"nativeName": [
					"বাংলা"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BGD",
					"IND"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "ber",
				"iso639_2en": "ber",
				"iso639_3": "ber",
				"name": [
					"Berber"
				],
				"nativeName": [
					"Tamaziɣt",
					"Tamazight",
					"ⵜⴰⵎⴰⵣⵉⵖⵜ"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"DZA",
					"MAR"
				]
			},
			{
				"iso639_1": "bh",
				"iso639_2": "bih",
				"iso639_2en": "bih",
				"iso639_3": "",
				"name": [
					"Bihari"
				],
				"nativeName": [
					"भोजपुरी"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "bi",
				"iso639_2": "bis",
				"iso639_2en": "bis",
				"iso639_3": "bis",
				"name": [
					"Bislama"
				],
				"nativeName": [
					"Bislama"
				],
				"direction": "LTR",
				"family": "Creole",
				"countries": [
					"VUT"
				]
			},
			{
				"iso639_1": "bs",
				"iso639_2": "bos",
				"iso639_2en": "bos",
				"iso639_3": "bos",
				"name": [
					"Bosnian"
				],
				"nativeName": [
					"bosanski jezik"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BIH"
				]
			},
			{
				"iso639_1": "br",
				"iso639_2": "bre",
				"iso639_2en": "bre",
				"iso639_3": "bre",
				"name": [
					"Breton"
				],
				"nativeName": [
					"brezhoneg"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "bg",
				"iso639_2": "bul",
				"iso639_2en": "bul",
				"iso639_3": "bul",
				"name": [
					"Bulgarian"
				],
				"nativeName": [
					"български език"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BGR"
				],
				"langCultureMs": [
					{
						"langCultureName": "bg-BG",
						"displayName": "Bulgarian - Bulgaria",
						"cultureCode": "0x0402"
					}
				]
			},
			{
				"iso639_1": "my",
				"iso639_2": "mya",
				"iso639_2en": "bur",
				"iso639_3": "mya",
				"name": [
					"Burmese"
				],
				"nativeName": [
					"ဗမာစာ"
				],
				"direction": "LTR",
				"family": "Sino-Tibetan",
				"countries": [
					"MMR"
				]
			},
			{
				"iso639_1": "ca",
				"iso639_2": "cat",
				"iso639_2en": "cat",
				"iso639_3": "cat",
				"name": [
					"Catalan",
					"Valencian"
				],
				"nativeName": [
					"català",
					"valencià"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"AND"
				],
				"langCultureMs": [
					{
						"langCultureName": "ca-ES",
						"displayName": "Catalan - Catalan",
						"cultureCode": "0x0403"
					}
				]
			},
			{
				"iso639_1": "ch",
				"iso639_2": "cha",
				"iso639_2en": "cha",
				"iso639_3": "cha",
				"name": [
					"Chamorro"
				],
				"nativeName": [
					"Chamoru"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "ce",
				"iso639_2": "che",
				"iso639_2en": "che",
				"iso639_3": "che",
				"name": [
					"Chechen"
				],
				"nativeName": [
					"нохчийн мотт"
				],
				"direction": "LTR",
				"family": "Northeast Caucasian"
			},
			{
				"iso639_1": "ny",
				"iso639_2": "nya",
				"iso639_2en": "nya",
				"iso639_3": "nya",
				"name": [
					"Chichewa",
					"Chewa",
					"Nyanja"
				],
				"nativeName": [
					"chiCheŵa",
					"chinyanja"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"MWI"
				]
			},
			{
				"iso639_1": "zh",
				"iso639_2": "zho",
				"iso639_2en": "chi",
				"iso639_3": "zho",
				"name": [
					"Chinese"
				],
				"nativeName": [
					"中文 (Zhōngwén)",
					"汉语",
					"漢語"
				],
				"direction": "LTR",
				"family": "Sino-Tibetan",
				"countries": [
					"HKG",
					"MAC",
					"CHN",
					"TWN",
					"SGP"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-CN",
						"displayName": "Chinese - China",
						"cultureCode": "0x0804"
					},
					{
						"langCultureName": "zh-HK",
						"displayName": "Chinese - Hong Kong SAR",
						"cultureCode": "0x0C04"
					},
					{
						"langCultureName": "zh-MO",
						"displayName": "Chinese - Macau SAR",
						"cultureCode": "0x1404"
					},
					{
						"langCultureName": "zh-SG",
						"displayName": "Chinese - Singapore",
						"cultureCode": "0x1004"
					},
					{
						"langCultureName": "zh-TW",
						"displayName": "Chinese - Taiwan",
						"cultureCode": "0x0404"
					},
					{
						"langCultureName": "zh-CHS",
						"displayName": "Chinese (Simplified)",
						"cultureCode": "0x0004"
					},
					{
						"langCultureName": "zh-CHT",
						"displayName": "Chinese (Traditional)",
						"cultureCode": "0x7C04"
					}
				]
			},
			{
				"iso639_1": "cv",
				"iso639_2": "chv",
				"iso639_2en": "chv",
				"iso639_3": "chv",
				"name": [
					"Chuvash"
				],
				"nativeName": [
					"чӑваш чӗлхи"
				],
				"direction": "LTR",
				"family": "Turkic"
			},
			{
				"iso639_1": "kw",
				"iso639_2": "cor",
				"iso639_2en": "cor",
				"iso639_3": "cor",
				"name": [
					"Cornish"
				],
				"nativeName": [
					"Kernewek"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "co",
				"iso639_2": "cos",
				"iso639_2en": "cos",
				"iso639_3": "cos",
				"name": [
					"Corsican"
				],
				"nativeName": [
					"corsu",
					"lingua corsa"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "cr",
				"iso639_2": "cre",
				"iso639_2en": "cre",
				"iso639_3": "cre",
				"name": [
					"Cree"
				],
				"nativeName": [
					"ᓀᐦᐃᔭᐍᐏᐣ"
				],
				"direction": "LTR",
				"family": "Algonquian"
			},
			{
				"iso639_1": "hr",
				"iso639_2": "hrv",
				"iso639_2en": "hrv",
				"iso639_3": "hrv",
				"name": [
					"Croatian"
				],
				"nativeName": [
					"hrvatski jezik"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"HRV",
					"BIH"
				],
				"langCultureMs": [
					{
						"langCultureName": "hr-HR",
						"displayName": "Croatian - Croatia",
						"cultureCode": "0x041A"
					}
				]
			},
			{
				"iso639_1": "cs",
				"iso639_2": "ces",
				"iso639_2en": "cze",
				"iso639_3": "ces",
				"name": [
					"Czech"
				],
				"nativeName": [
					"čeština",
					"český jazyk"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"CZE",
					"SVK"
				],
				"langCultureMs": [
					{
						"langCultureName": "cs-CZ",
						"displayName": "Czech - Czech Republic",
						"cultureCode": "0x0405"
					}
				]
			},
			{
				"iso639_1": "da",
				"iso639_2": "dan",
				"iso639_2en": "dan",
				"iso639_3": "dan",
				"name": [
					"Danish"
				],
				"nativeName": [
					"dansk"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"DNK",
					"FRO"
				],
				"langCultureMs": [
					{
						"langCultureName": "da-DK",
						"displayName": "Danish - Denmark",
						"cultureCode": "0x0406"
					}
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "",
				"iso639_2en": "",
				"iso639_3": "prs",
				"name": [
					"Dari"
				],
				"nativeName": [
					"فارسی دری"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"AFG"
				]
			},
			{
				"iso639_1": "dv",
				"iso639_2": "div",
				"iso639_2en": "div",
				"iso639_3": "div",
				"name": [
					"Divehi",
					"Dhivehi",
					"Maldivian"
				],
				"nativeName": [
					"ދިވެހި"
				],
				"direction": "RTL",
				"family": "Indo-European",
				"countries": [
					"MDV"
				],
				"langCultureMs": [
					{
						"langCultureName": "div-MV",
						"displayName": "Dhivehi - Maldives",
						"cultureCode": "0x0465"
					}
				]
			},
			{
				"iso639_1": "nl",
				"iso639_2": "nld",
				"iso639_2en": "dut",
				"iso639_3": "nld",
				"name": [
					"Dutch"
				],
				"nativeName": [
					"Nederlands",
					"Vlaams"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BEL",
					"NLD",
					"ABW",
					"CUW",
					"SXM",
					"SUR"
				],
				"langCultureMs": [
					{
						"langCultureName": "nl-BE",
						"displayName": "Dutch - Belgium",
						"cultureCode": "0x0813"
					},
					{
						"langCultureName": "nl-NL",
						"displayName": "Dutch - The Netherlands",
						"cultureCode": "0x0413"
					}
				]
			},
			{
				"iso639_1": "dz",
				"iso639_2": "dzo",
				"iso639_2en": "dzo",
				"iso639_3": "dzo",
				"name": [
					"Dzongkha"
				],
				"nativeName": [
					"རྫོང་ཁ"
				],
				"direction": "LTR",
				"family": "Sino-Tibetan",
				"countries": [
					"BTN"
				]
			},
			{
				"iso639_1": "en",
				"iso639_2": "eng",
				"iso639_2en": "eng",
				"iso639_3": "eng",
				"name": [
					"English"
				],
				"nativeName": [
					"English"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ATG",
					"AUS",
					"BHS",
					"BRB",
					"BLZ",
					"BWA",
					"CMR",
					"CAN",
					"CUW",
					"DMA",
					"ERI",
					"FJI",
					"GMB",
					"GHA",
					"GRD",
					"GUY",
					"HKG",
					"IND",
					"IRL",
					"JAM",
					"KEN",
					"KIR",
					"LSO",
					"LBR",
					"MWI",
					"MYS",
					"MLT",
					"MHL",
					"MUS",
					"FSM",
					"NAM",
					"NRU",
					"NZL",
					"NGA",
					"PAK",
					"PLW",
					"PNG",
					"PHL",
					"RWA",
					"KNA",
					"LCA",
					"VCT",
					"WSM",
					"SYC",
					"SLE",
					"SGP",
					"SXM",
					"SLB",
					"ZAF",
					"SSD",
					"LKA",
					"SDN",
					"SWZ",
					"TZA",
					"TON",
					"TTO",
					"TUV",
					"UGA",
					"GBR",
					"USA",
					"VUT",
					"ZMB",
					"ZWE"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-AU",
						"displayName": "English - Australia",
						"cultureCode": "0x0C09"
					},
					{
						"langCultureName": "en-BZ",
						"displayName": "English - Belize",
						"cultureCode": "0x2809"
					},
					{
						"langCultureName": "en-CA",
						"displayName": "English - Canada",
						"cultureCode": "0x1009"
					},
					{
						"langCultureName": "en-CB",
						"displayName": "English - Caribbean",
						"cultureCode": "0x2409"
					},
					{
						"langCultureName": "en-IE",
						"displayName": "English - Ireland",
						"cultureCode": "0x1809"
					},
					{
						"langCultureName": "en-JM",
						"displayName": "English - Jamaica",
						"cultureCode": "0x2009"
					},
					{
						"langCultureName": "en-NZ",
						"displayName": "English - New Zealand",
						"cultureCode": "0x1409"
					},
					{
						"langCultureName": "en-PH",
						"displayName": "English - Philippines",
						"cultureCode": "0x3409"
					},
					{
						"langCultureName": "en-ZA",
						"displayName": "English - South Africa",
						"cultureCode": "0x1C09"
					},
					{
						"langCultureName": "en-TT",
						"displayName": "English - Trinidad and Tobago",
						"cultureCode": "0x2C09"
					},
					{
						"langCultureName": "en-GB",
						"displayName": "English - United Kingdom",
						"cultureCode": "0x0809"
					},
					{
						"langCultureName": "en-US",
						"displayName": "English - United States",
						"cultureCode": "0x0409"
					},
					{
						"langCultureName": "en-ZW",
						"displayName": "English - Zimbabwe",
						"cultureCode": "0x3009"
					}
				]
			},
			{
				"iso639_1": "eo",
				"iso639_2": "epo",
				"iso639_2en": "epo",
				"iso639_3": "epo",
				"name": [
					"Esperanto"
				],
				"nativeName": [
					"Esperanto"
				],
				"direction": "LTR",
				"family": "Constructed"
			},
			{
				"iso639_1": "et",
				"iso639_2": "est",
				"iso639_2en": "est",
				"iso639_3": "est",
				"name": [
					"Estonian"
				],
				"nativeName": [
					"eesti",
					"eesti keel"
				],
				"direction": "LTR",
				"family": "Uralic",
				"countries": [
					"EST"
				],
				"langCultureMs": [
					{
						"langCultureName": "et-EE",
						"displayName": "Estonian - Estonia",
						"cultureCode": "0x0425"
					}
				]
			},
			{
				"iso639_1": "ee",
				"iso639_2": "ewe",
				"iso639_2en": "ewe",
				"iso639_3": "ewe",
				"name": [
					"Ewe"
				],
				"nativeName": [
					"Eʋegbe"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"GHA",
					"TGO"
				]
			},
			{
				"iso639_1": "fo",
				"iso639_2": "fao",
				"iso639_2en": "fao",
				"iso639_3": "fao",
				"name": [
					"Faroese"
				],
				"nativeName": [
					"føroyskt"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"langCultureMs": [
					{
						"langCultureName": "fo-FO",
						"displayName": "Faroese - Faroe Islands",
						"cultureCode": "0x0438"
					}
				]
			},
			{
				"iso639_1": "fj",
				"iso639_2": "fij",
				"iso639_2en": "fij",
				"iso639_3": "fij",
				"name": [
					"Fijian"
				],
				"nativeName": [
					"vosa Vakaviti"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"FJI"
				]
			},
			{
				"iso639_1": "fi",
				"iso639_2": "fin",
				"iso639_2en": "fin",
				"iso639_3": "fin",
				"name": [
					"Finnish"
				],
				"nativeName": [
					"suomi",
					"suomen kieli"
				],
				"direction": "LTR",
				"family": "Uralic",
				"countries": [
					"FIN"
				],
				"langCultureMs": [
					{
						"langCultureName": "fi-FI",
						"displayName": "Finnish - Finland",
						"cultureCode": "0x040B"
					}
				]
			},
			{
				"iso639_1": "fr",
				"iso639_2": "fra",
				"iso639_2en": "fre",
				"iso639_3": "fra",
				"name": [
					"French"
				],
				"nativeName": [
					"français",
					"langue française"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"BEL",
					"BEN",
					"BFA",
					"BDI",
					"CMR",
					"CAN",
					"CAF",
					"TCD",
					"COM",
					"CIV",
					"COD",
					"COG",
					"DJI",
					"GNQ",
					"FRA",
					"GUF",
					"PYF",
					"GLP",
					"MTQ",
					"MYT",
					"NCL",
					"REU",
					"BLM",
					"SPM",
					"WLF",
					"GAB",
					"GIN",
					"HTI",
					"ITA",
					"JEY",
					"LUX",
					"MDG",
					"MLI",
					"MUS",
					"MCO",
					"NER",
					"RWA",
					"SEN",
					"SYC",
					"CHE",
					"TGO",
					"VUT"
				],
				"langCultureMs": [
					{
						"langCultureName": "fr-BE",
						"displayName": "French - Belgium",
						"cultureCode": "0x080C"
					},
					{
						"langCultureName": "fr-CA",
						"displayName": "French - Canada",
						"cultureCode": "0x0C0C"
					},
					{
						"langCultureName": "fr-FR",
						"displayName": "French - France",
						"cultureCode": "0x040C"
					},
					{
						"langCultureName": "fr-LU",
						"displayName": "French - Luxembourg",
						"cultureCode": "0x140C"
					},
					{
						"langCultureName": "fr-MC",
						"displayName": "French - Monaco",
						"cultureCode": "0x180C"
					},
					{
						"langCultureName": "fr-CH",
						"displayName": "French - Switzerland",
						"cultureCode": "0x100C"
					}
				]
			},
			{
				"iso639_1": "ff",
				"iso639_2": "ful",
				"iso639_2en": "ful",
				"iso639_3": "ful",
				"name": [
					"Fula",
					"Fulah",
					"Pulaar",
					"Pular"
				],
				"nativeName": [
					"Fulfulde",
					"Pulaar",
					"Pular"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"BEN",
					"BFA",
					"MLI",
					"NER",
					"SEN"
				]
			},
			{
				"iso639_1": "gl",
				"iso639_2": "glg",
				"iso639_2en": "glg",
				"iso639_3": "glg",
				"name": [
					"Galician"
				],
				"nativeName": [
					"galego"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"langCultureMs": [
					{
						"langCultureName": "gl-ES",
						"displayName": "Galician - Galician",
						"cultureCode": "0x0456"
					}
				]
			},
			{
				"iso639_1": "ka",
				"iso639_2": "kat",
				"iso639_2en": "geo",
				"iso639_3": "kat",
				"name": [
					"Georgian"
				],
				"nativeName": [
					"ქართული"
				],
				"direction": "LTR",
				"family": "South Caucasian",
				"countries": [
					"GEO"
				],
				"langCultureMs": [
					{
						"langCultureName": "ka-GE",
						"displayName": "Georgian - Georgia",
						"cultureCode": "0x0437"
					}
				]
			},
			{
				"iso639_1": "de",
				"iso639_2": "deu",
				"iso639_2en": "ger",
				"iso639_3": "deu",
				"name": [
					"German"
				],
				"nativeName": [
					"Deutsch"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"AUT",
					"BEL",
					"DEU",
					"LIE",
					"LUX",
					"ITA",
					"CHE"
				],
				"langCultureMs": [
					{
						"langCultureName": "de-AT",
						"displayName": "German - Austria",
						"cultureCode": "0x0C07"
					},
					{
						"langCultureName": "de-DE",
						"displayName": "German - Germany",
						"cultureCode": "0x0407"
					},
					{
						"langCultureName": "de-LI",
						"displayName": "German - Liechtenstein",
						"cultureCode": "0x1407"
					},
					{
						"langCultureName": "de-LU",
						"displayName": "German - Luxembourg",
						"cultureCode": "0x1007"
					},
					{
						"langCultureName": "de-CH",
						"displayName": "German - Switzerland",
						"cultureCode": "0x0807"
					}
				]
			},
			{
				"iso639_1": "el",
				"iso639_2": "ell",
				"iso639_2en": "gre",
				"iso639_3": "ell",
				"name": [
					"Greek"
				],
				"nativeName": [
					"ελληνικά"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"GRC",
					"CYP"
				],
				"langCultureMs": [
					{
						"langCultureName": "el-GR",
						"displayName": "Greek - Greece",
						"cultureCode": "0x0408"
					}
				]
			},
			{
				"iso639_1": "gn",
				"iso639_2": "grn",
				"iso639_2en": "grn",
				"iso639_3": "grn",
				"name": [
					"Guaraní"
				],
				"nativeName": [
					"Avañe'ẽ"
				],
				"direction": "LTR",
				"family": "Tupian",
				"countries": [
					"PRY",
					"BOL"
				]
			},
			{
				"iso639_1": "gu",
				"iso639_2": "guj",
				"iso639_2en": "guj",
				"iso639_3": "guj",
				"name": [
					"Gujarati"
				],
				"nativeName": [
					"ગુજરાતી"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"IND"
				],
				"langCultureMs": [
					{
						"langCultureName": "gu-IN",
						"displayName": "Gujarati - India",
						"cultureCode": "0x0447"
					}
				]
			},
			{
				"iso639_1": "ht",
				"iso639_2": "hat",
				"iso639_2en": "hat",
				"iso639_3": "hat",
				"name": [
					"Haitian",
					"Haitian Creole"
				],
				"nativeName": [
					"Kreyòl ayisyen"
				],
				"direction": "LTR",
				"family": "Creole",
				"countries": [
					"HTI"
				]
			},
			{
				"iso639_1": "ha",
				"iso639_2": "hau",
				"iso639_2en": "hau",
				"iso639_3": "hau",
				"name": [
					"Hausa"
				],
				"nativeName": [
					"(Hausa) هَوُسَ"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"NER",
					"NGA"
				]
			},
			{
				"iso639_1": "he",
				"iso639_2": "heb",
				"iso639_2en": "heb",
				"iso639_3": "heb",
				"name": [
					"Hebrew"
				],
				"nativeName": [
					"עברית"
				],
				"direction": "RTL",
				"family": "Afro-Asiatic",
				"countries": [
					"ISR"
				],
				"langCultureMs": [
					{
						"langCultureName": "he-IL",
						"displayName": "Hebrew - Israel",
						"cultureCode": "0x040D"
					}
				]
			},
			{
				"iso639_1": "hz",
				"iso639_2": "her",
				"iso639_2en": "her",
				"iso639_3": "her",
				"name": [
					"Herero"
				],
				"nativeName": [
					"Otjiherero"
				],
				"direction": "LTR",
				"family": "Niger–Congo"
			},
			{
				"iso639_1": "hi",
				"iso639_2": "hin",
				"iso639_2en": "hin",
				"iso639_3": "hin",
				"name": [
					"Hindi"
				],
				"nativeName": [
					"हिन्दी",
					"हिंदी"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"IND",
					"FJI"
				],
				"langCultureMs": [
					{
						"langCultureName": "hi-IN",
						"displayName": "Hindi - India",
						"cultureCode": "0x0439"
					}
				]
			},
			{
				"iso639_1": "ho",
				"iso639_2": "hmo",
				"iso639_2en": "hmo",
				"iso639_3": "hmo",
				"name": [
					"Hiri Motu"
				],
				"nativeName": [
					"Hiri Motu"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"PNG"
				]
			},
			{
				"iso639_1": "hu",
				"iso639_2": "hun",
				"iso639_2en": "hun",
				"iso639_3": "hun",
				"name": [
					"Hungarian"
				],
				"nativeName": [
					"magyar"
				],
				"direction": "LTR",
				"family": "Uralic",
				"countries": [
					"HUN"
				],
				"langCultureMs": [
					{
						"langCultureName": "hu-HU",
						"displayName": "Hungarian - Hungary",
						"cultureCode": "0x040E"
					}
				]
			},
			{
				"iso639_1": "ia",
				"iso639_2": "ina",
				"iso639_2en": "ina",
				"iso639_3": "ina",
				"name": [
					"Interlingua"
				],
				"nativeName": [
					"Interlingua"
				],
				"direction": "LTR",
				"family": "Constructed"
			},
			{
				"iso639_1": "id",
				"iso639_2": "ind",
				"iso639_2en": "ind",
				"iso639_3": "ind",
				"name": [
					"Indonesian"
				],
				"nativeName": [
					"Bahasa Indonesia"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"IDN"
				],
				"langCultureMs": [
					{
						"langCultureName": "id-ID",
						"displayName": "Indonesian - Indonesia",
						"cultureCode": "0x0421"
					}
				]
			},
			{
				"iso639_1": "ie",
				"iso639_2": "ile",
				"iso639_2en": "ile",
				"iso639_3": "ile",
				"name": [
					"Interlingue"
				],
				"nativeName": [
					"Interlingue"
				],
				"direction": "LTR",
				"family": "Constructed"
			},
			{
				"iso639_1": "ga",
				"iso639_2": "gle",
				"iso639_2en": "gle",
				"iso639_3": "gle",
				"name": [
					"Irish"
				],
				"nativeName": [
					"Gaeilge"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"IRL"
				]
			},
			{
				"iso639_1": "ig",
				"iso639_2": "ibo",
				"iso639_2en": "ibo",
				"iso639_3": "ibo",
				"name": [
					"Igbo"
				],
				"nativeName": [
					"Asụsụ Igbo"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"NGA"
				]
			},
			{
				"iso639_1": "ik",
				"iso639_2": "ipk",
				"iso639_2en": "ipk",
				"iso639_3": "ipk",
				"name": [
					"Inupiaq"
				],
				"nativeName": [
					"Iñupiaq",
					"Iñupiatun"
				],
				"direction": "LTR",
				"family": "Eskimo–Aleut"
			},
			{
				"iso639_1": "io",
				"iso639_2": "ido",
				"iso639_2en": "ido",
				"iso639_3": "ido",
				"name": [
					"Ido"
				],
				"nativeName": [
					"Ido"
				],
				"direction": "LTR",
				"family": "Constructed"
			},
			{
				"iso639_1": "is",
				"iso639_2": "isl",
				"iso639_2en": "ice",
				"iso639_3": "isl",
				"name": [
					"Icelandic"
				],
				"nativeName": [
					"Íslenska"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ISL"
				],
				"langCultureMs": [
					{
						"langCultureName": "is-IS",
						"displayName": "Icelandic - Iceland",
						"cultureCode": "0x040F"
					}
				]
			},
			{
				"iso639_1": "it",
				"iso639_2": "ita",
				"iso639_2en": "ita",
				"iso639_3": "ita",
				"name": [
					"Italian"
				],
				"nativeName": [
					"italiano"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ITA",
					"HRV",
					"SMR",
					"SVN",
					"CHE",
					"VAT"
				],
				"langCultureMs": [
					{
						"langCultureName": "it-IT",
						"displayName": "Italian - Italy",
						"cultureCode": "0x0410"
					},
					{
						"langCultureName": "it-CH",
						"displayName": "Italian - Switzerland",
						"cultureCode": "0x0810"
					}
				]
			},
			{
				"iso639_1": "iu",
				"iso639_2": "iku",
				"iso639_2en": "iku",
				"iso639_3": "iku",
				"name": [
					"Inuktitut"
				],
				"nativeName": [
					"ᐃᓄᒃᑎᑐᑦ"
				],
				"direction": "LTR",
				"family": "Eskimo–Aleut"
			},
			{
				"iso639_1": "ja",
				"iso639_2": "jpn",
				"iso639_2en": "jpn",
				"iso639_3": "jpn",
				"name": [
					"Japanese"
				],
				"nativeName": [
					"日本語 (にほんご)"
				],
				"direction": "LTR",
				"family": "Japonic",
				"countries": [
					"JPN"
				],
				"langCultureMs": [
					{
						"langCultureName": "ja-JP",
						"displayName": "Japanese - Japan",
						"cultureCode": "0x0411"
					}
				]
			},
			{
				"iso639_1": "jv",
				"iso639_2": "jav",
				"iso639_2en": "jav",
				"iso639_3": "jav",
				"name": [
					"Javanese"
				],
				"nativeName": [
					"basa Jawa"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "kl",
				"iso639_2": "kal",
				"iso639_2en": "kal",
				"iso639_3": "kal",
				"name": [
					"Kalaallisut",
					"Greenlandic"
				],
				"nativeName": [
					"kalaallisut",
					"kalaallit oqaasii"
				],
				"direction": "LTR",
				"family": "Eskimo–Aleut"
			},
			{
				"iso639_1": "kn",
				"iso639_2": "kan",
				"iso639_2en": "kan",
				"iso639_3": "kan",
				"name": [
					"Kannada"
				],
				"nativeName": [
					"ಕನ್ನಡ"
				],
				"direction": "LTR",
				"family": "Dravidian",
				"langCultureMs": [
					{
						"langCultureName": "kn-IN",
						"displayName": "Kannada - India",
						"cultureCode": "0x044B"
					}
				]
			},
			{
				"iso639_1": "kr",
				"iso639_2": "kau",
				"iso639_2en": "kau",
				"iso639_3": "kau",
				"name": [
					"Kanuri"
				],
				"nativeName": [
					"Kanuri"
				],
				"direction": "LTR",
				"family": "Nilo-Saharan",
				"countries": [
					"NER"
				]
			},
			{
				"iso639_1": "ks",
				"iso639_2": "kas",
				"iso639_2en": "kas",
				"iso639_3": "kas",
				"name": [
					"Kashmiri"
				],
				"nativeName": [
					"कश्मीरी",
					"كشميري‎"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "kk",
				"iso639_2": "kaz",
				"iso639_2en": "kaz",
				"iso639_3": "kaz",
				"name": [
					"Kazakh"
				],
				"nativeName": [
					"қазақ тілі"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"KAZ"
				],
				"langCultureMs": [
					{
						"langCultureName": "kk-KZ",
						"displayName": "Kazakh - Kazakhstan",
						"cultureCode": "0x043F"
					}
				]
			},
			{
				"iso639_1": "km",
				"iso639_2": "khm",
				"iso639_2en": "khm",
				"iso639_3": "khm",
				"name": [
					"Khmer"
				],
				"nativeName": [
					"ខ្មែរ",
					"ខេមរភាសា",
					"ភាសាខ្មែរ"
				],
				"direction": "LTR",
				"family": "Austroasiatic",
				"countries": [
					"KHM"
				]
			},
			{
				"iso639_1": "ki",
				"iso639_2": "kik",
				"iso639_2en": "kik",
				"iso639_3": "kik",
				"name": [
					"Kikuyu",
					"Gikuyu"
				],
				"nativeName": [
					"Gĩkũyũ"
				],
				"direction": "LTR",
				"family": "Niger–Congo"
			},
			{
				"iso639_1": "rw",
				"iso639_2": "kin",
				"iso639_2en": "kin",
				"iso639_3": "kin",
				"name": [
					"Kinyarwanda"
				],
				"nativeName": [
					"Ikinyarwanda"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"RWA"
				]
			},
			{
				"iso639_1": "ky",
				"iso639_2": "kir",
				"iso639_2en": "kir",
				"iso639_3": "kir",
				"name": [
					"Kyrgyz"
				],
				"nativeName": [
					"Кыргызча",
					"Кыргыз тили"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"KGZ"
				],
				"langCultureMs": [
					{
						"langCultureName": "ky-KZ",
						"displayName": "Kyrgyz - Kazakhstan",
						"cultureCode": "0x0440"
					}
				]
			},
			{
				"iso639_1": "kv",
				"iso639_2": "kom",
				"iso639_2en": "kom",
				"iso639_3": "kom",
				"name": [
					"Komi"
				],
				"nativeName": [
					"коми кыв"
				],
				"direction": "LTR",
				"family": "Uralic"
			},
			{
				"iso639_1": "kg",
				"iso639_2": "kon",
				"iso639_2en": "kon",
				"iso639_3": "kon",
				"name": [
					"Kongo"
				],
				"nativeName": [
					"Kikongo"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"AGO",
					"COD",
					"COG"
				]
			},
			{
				"iso639_1": "ko",
				"iso639_2": "kor",
				"iso639_2en": "kor",
				"iso639_3": "kor",
				"name": [
					"Korean"
				],
				"nativeName": [
					"한국어",
					"조선어"
				],
				"direction": "LTR",
				"family": "Koreanic",
				"countries": [
					"PRK",
					"KOR"
				],
				"langCultureMs": [
					{
						"langCultureName": "ko-KR",
						"displayName": "Korean - Korea",
						"cultureCode": "0x0412"
					}
				]
			},
			{
				"iso639_1": "ku",
				"iso639_2": "kur",
				"iso639_2en": "kur",
				"iso639_3": "kur",
				"name": [
					"Kurdish"
				],
				"nativeName": [
					"Kurdî",
					"كوردی‎"
				],
				"direction": "RTL",
				"family": "Indo-European",
				"countries": [
					"IRQ"
				]
			},
			{
				"iso639_1": "kj",
				"iso639_2": "kua",
				"iso639_2en": "kua",
				"iso639_3": "kua",
				"name": [
					"Kwanyama",
					"Kuanyama"
				],
				"nativeName": [
					"Kuanyama"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"AGO"
				]
			},
			{
				"iso639_1": "la",
				"iso639_2": "lat",
				"iso639_2en": "lat",
				"iso639_3": "lat",
				"name": [
					"Latin"
				],
				"nativeName": [
					"latine",
					"lingua latina"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"VAT"
				]
			},
			{
				"iso639_1": "lb",
				"iso639_2": "ltz",
				"iso639_2en": "ltz",
				"iso639_3": "ltz",
				"name": [
					"Luxembourgish",
					"Letzeburgesch"
				],
				"nativeName": [
					"Lëtzebuergesch"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"LUX"
				]
			},
			{
				"iso639_1": "lg",
				"iso639_2": "lug",
				"iso639_2en": "lug",
				"iso639_3": "lug",
				"name": [
					"Ganda"
				],
				"nativeName": [
					"Luganda"
				],
				"direction": "LTR",
				"family": "Niger–Congo"
			},
			{
				"iso639_1": "li",
				"iso639_2": "lim",
				"iso639_2en": "lim",
				"iso639_3": "lim",
				"name": [
					"Limburgish",
					"Limburgan",
					"Limburger"
				],
				"nativeName": [
					"Limburgs"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "ln",
				"iso639_2": "lin",
				"iso639_2en": "lin",
				"iso639_3": "lin",
				"name": [
					"Lingala"
				],
				"nativeName": [
					"Lingála"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"COD",
					"COG"
				]
			},
			{
				"iso639_1": "lo",
				"iso639_2": "lao",
				"iso639_2en": "lao",
				"iso639_3": "lao",
				"name": [
					"Lao"
				],
				"nativeName": [
					"ພາສາລາວ"
				],
				"direction": "LTR",
				"family": "Tai–Kadai",
				"countries": [
					"LAO"
				]
			},
			{
				"iso639_1": "lt",
				"iso639_2": "lit",
				"iso639_2en": "lit",
				"iso639_3": "lit",
				"name": [
					"Lithuanian"
				],
				"nativeName": [
					"lietuvių kalba"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"LTU"
				],
				"langCultureMs": [
					{
						"langCultureName": "lt-LT",
						"displayName": "Lithuanian - Lithuania",
						"cultureCode": "0x0427"
					}
				]
			},
			{
				"iso639_1": "lu",
				"iso639_2": "lub",
				"iso639_2en": "lub",
				"iso639_3": "lub",
				"name": [
					"Luba-Katanga"
				],
				"nativeName": [
					"Tshiluba"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"COD"
				]
			},
			{
				"iso639_1": "lv",
				"iso639_2": "lav",
				"iso639_2en": "lav",
				"iso639_3": "lav",
				"name": [
					"Latvian"
				],
				"nativeName": [
					"latviešu valoda"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"LVA"
				],
				"langCultureMs": [
					{
						"langCultureName": "lv-LV",
						"displayName": "Latvian - Latvia",
						"cultureCode": "0x0426"
					}
				]
			},
			{
				"iso639_1": "gv",
				"iso639_2": "glv",
				"iso639_2en": "glv",
				"iso639_3": "glv",
				"name": [
					"Manx"
				],
				"nativeName": [
					"Gaelg",
					"Gailck"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "mk",
				"iso639_2": "mkd",
				"iso639_2en": "mac",
				"iso639_3": "mkd",
				"name": [
					"Macedonian"
				],
				"nativeName": [
					"македонски јазик"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"MKD"
				],
				"langCultureMs": [
					{
						"langCultureName": "mk-MK",
						"displayName": "Macedonian (FYROM)",
						"cultureCode": "0x042F"
					}
				]
			},
			{
				"iso639_1": "mg",
				"iso639_2": "mlg",
				"iso639_2en": "mlg",
				"iso639_3": "mlg",
				"name": [
					"Malagasy"
				],
				"nativeName": [
					"fiteny malagasy"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"MDG"
				]
			},
			{
				"iso639_1": "ms",
				"iso639_2": "msa",
				"iso639_2en": "may",
				"iso639_3": "msa",
				"name": [
					"Malay"
				],
				"nativeName": [
					"bahasa Melayu",
					"بهاس ملايو‎"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"MYS",
					"BRN",
					"SGP",
					"IDN"
				],
				"langCultureMs": [
					{
						"langCultureName": "ms-BN",
						"displayName": "Malay - Brunei",
						"cultureCode": "0x083E"
					},
					{
						"langCultureName": "ms-MY",
						"displayName": "Malay - Malaysia",
						"cultureCode": "0x043E"
					}
				]
			},
			{
				"iso639_1": "ml",
				"iso639_2": "mal",
				"iso639_2en": "mal",
				"iso639_3": "mal",
				"name": [
					"Malayalam"
				],
				"nativeName": [
					"മലയാളം"
				],
				"direction": "LTR",
				"family": "Dravidian"
			},
			{
				"iso639_1": "mt",
				"iso639_2": "mlt",
				"iso639_2en": "mlt",
				"iso639_3": "mlt",
				"name": [
					"Maltese"
				],
				"nativeName": [
					"Malti"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"MLT"
				]
			},
			{
				"iso639_1": "mi",
				"iso639_2": "mri",
				"iso639_2en": "mao",
				"iso639_3": "mri",
				"name": [
					"Māori"
				],
				"nativeName": [
					"te reo Māori"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"NZL"
				]
			},
			{
				"iso639_1": "mr",
				"iso639_2": "mar",
				"iso639_2en": "mar",
				"iso639_3": "mar",
				"name": [
					"Marathi (Marāṭhī)"
				],
				"nativeName": [
					"मराठी"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"langCultureMs": [
					{
						"langCultureName": "mr-IN",
						"displayName": "Marathi - India",
						"cultureCode": "0x044E"
					}
				]
			},
			{
				"iso639_1": "mh",
				"iso639_2": "mah",
				"iso639_2en": "mah",
				"iso639_3": "mah",
				"name": [
					"Marshallese"
				],
				"nativeName": [
					"Kajin M̧ajeļ"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"MHL"
				]
			},
			{
				"iso639_1": "mn",
				"iso639_2": "mon",
				"iso639_2en": "mon",
				"iso639_3": "mon",
				"name": [
					"Mongolian"
				],
				"nativeName": [
					"монгол"
				],
				"direction": "LTR",
				"family": "Mongolic",
				"countries": [
					"MNG"
				],
				"langCultureMs": [
					{
						"langCultureName": "mn-MN",
						"displayName": "Mongolian - Mongolia",
						"cultureCode": "0x0450"
					}
				]
			},
			{
				"iso639_1": "na",
				"iso639_2": "nau",
				"iso639_2en": "nau",
				"iso639_3": "nau",
				"name": [
					"Nauru"
				],
				"nativeName": [
					"Ekakairũ Naoero"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "nv",
				"iso639_2": "nav",
				"iso639_2en": "nav",
				"iso639_3": "nav",
				"name": [
					"Navajo",
					"Navaho"
				],
				"nativeName": [
					"Diné bizaad",
					"Dinékʼehǰí"
				],
				"direction": "LTR",
				"family": "Dené–Yeniseian"
			},
			{
				"iso639_1": "nb",
				"iso639_2": "nob",
				"iso639_2en": "nob",
				"iso639_3": "nob",
				"name": [
					"Norwegian Bokmål"
				],
				"nativeName": [
					"Norsk bokmål"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"NOR"
				],
				"langCultureMs": [
					{
						"langCultureName": "nb-NO",
						"displayName": "Norwegian (Bokmål) - Norway",
						"cultureCode": "0x0414"
					}
				]
			},
			{
				"iso639_1": "nd",
				"iso639_2": "nde",
				"iso639_2en": "nde",
				"iso639_3": "nde",
				"name": [
					"Northern Ndebele"
				],
				"nativeName": [
					"isiNdebele"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF",
					"ZWE"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "nso",
				"iso639_2en": "nso",
				"iso639_3": "nso",
				"name": [
					"Northern Sotho"
				],
				"nativeName": [
					"Sesotho sa Leboa"
				],
				"direction": "LTR",
				"family": "Niger-Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "ne",
				"iso639_2": "nep",
				"iso639_2en": "nep",
				"iso639_3": "nep",
				"name": [
					"Nepali"
				],
				"nativeName": [
					"नेपाली"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"NPL"
				]
			},
			{
				"iso639_1": "ng",
				"iso639_2": "ndo",
				"iso639_2en": "ndo",
				"iso639_3": "ndo",
				"name": [
					"Ndonga"
				],
				"nativeName": [
					"Owambo"
				],
				"direction": "LTR",
				"family": "Niger–Congo"
			},
			{
				"iso639_1": "nn",
				"iso639_2": "nno",
				"iso639_2en": "nno",
				"iso639_3": "nno",
				"name": [
					"Norwegian Nynorsk"
				],
				"nativeName": [
					"Norsk nynorsk"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"NOR"
				],
				"langCultureMs": [
					{
						"langCultureName": "nn-NO",
						"displayName": "Norwegian (Nynorsk) - Norway",
						"cultureCode": "0x0814"
					}
				]
			},
			{
				"iso639_1": "no",
				"iso639_2": "nor",
				"iso639_2en": "nor",
				"iso639_3": "nor",
				"name": [
					"Norwegian"
				],
				"nativeName": [
					"Norsk"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"NOR"
				]
			},
			{
				"iso639_1": "ii",
				"iso639_2": "iii",
				"iso639_2en": "iii",
				"iso639_3": "iii",
				"name": [
					"Nuosu"
				],
				"nativeName": [
					"Nuosuhxop"
				],
				"direction": "LTR",
				"family": "Sino-Tibetan"
			},
			{
				"iso639_1": "nr",
				"iso639_2": "nbl",
				"iso639_2en": "nbl",
				"iso639_3": "nbl",
				"name": [
					"Southern Ndebele"
				],
				"nativeName": [
					"isiNdebele"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "oc",
				"iso639_2": "oci",
				"iso639_2en": "oci",
				"iso639_3": "oci",
				"name": [
					"Occitan"
				],
				"nativeName": [
					"occitan",
					"lenga d'òc"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "oj",
				"iso639_2": "oji",
				"iso639_2en": "oji",
				"iso639_3": "oji",
				"name": [
					"Ojibwe",
					"Ojibwa"
				],
				"nativeName": [
					"ᐊᓂᔑᓈᐯᒧᐎᓐ"
				],
				"direction": "LTR",
				"family": "Algonquian"
			},
			{
				"iso639_1": "cu",
				"iso639_2": "chu",
				"iso639_2en": "chu",
				"iso639_3": "chu",
				"name": [
					"Old Church Slavonic",
					"Church Slavonic",
					"Old Bulgarian"
				],
				"nativeName": [
					"ѩзыкъ словѣньскъ"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "om",
				"iso639_2": "orm",
				"iso639_2en": "orm",
				"iso639_3": "orm",
				"name": [
					"Oromo"
				],
				"nativeName": [
					"Afaan Oromoo"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic"
			},
			{
				"iso639_1": "or",
				"iso639_2": "ori",
				"iso639_2en": "ori",
				"iso639_3": "ori",
				"name": [
					"Oriya"
				],
				"nativeName": [
					"ଓଡ଼ିଆ"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "os",
				"iso639_2": "oss",
				"iso639_2en": "oss",
				"iso639_3": "oss",
				"name": [
					"Ossetian",
					"Ossetic"
				],
				"nativeName": [
					"ирон æвзаг"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": []
			},
			{
				"iso639_1": "pa",
				"iso639_2": "pan",
				"iso639_2en": "pan",
				"iso639_3": "pan",
				"name": [
					"Panjabi",
					"Punjabi"
				],
				"nativeName": [
					"ਪੰਜਾਬੀ",
					"پنجابی‎"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"IND"
				],
				"langCultureMs": [
					{
						"langCultureName": "pa-IN",
						"displayName": "Punjabi - India",
						"cultureCode": "0x0446"
					}
				]
			},
			{
				"iso639_1": "pi",
				"iso639_2": "pli",
				"iso639_2en": "pli",
				"iso639_3": "pli",
				"name": [
					"Pāli"
				],
				"nativeName": [
					"पाऴि"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "fa",
				"iso639_2": "fas",
				"iso639_2en": "per",
				"iso639_3": "fas",
				"name": [
					"Persian",
					"Farsi"
				],
				"nativeName": [
					"فارسی"
				],
				"direction": "RTL",
				"family": "Indo-European",
				"countries": [
					"IRN",
					"AFG",
					"TJK"
				],
				"langCultureMs": [
					{
						"langCultureName": "fa-IR",
						"displayName": "Farsi - Iran",
						"cultureCode": "0x0429"
					}
				]
			},
			{
				"iso639_1": "pl",
				"iso639_2": "pol",
				"iso639_2en": "pol",
				"iso639_3": "pol",
				"name": [
					"Polish"
				],
				"nativeName": [
					"język polski",
					"polszczyzna"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"POL"
				],
				"langCultureMs": [
					{
						"langCultureName": "pl-PL",
						"displayName": "Polish - Poland",
						"cultureCode": "0x0415"
					}
				]
			},
			{
				"iso639_1": "ps",
				"iso639_2": "pus",
				"iso639_2en": "pus",
				"iso639_3": "pus",
				"name": [
					"Pashto",
					"Pushto"
				],
				"nativeName": [
					"پښتو"
				],
				"direction": "RTL",
				"family": "Indo-European",
				"countries": [
					"AFG"
				]
			},
			{
				"iso639_1": "pt",
				"iso639_2": "por",
				"iso639_2en": "por",
				"iso639_3": "por",
				"name": [
					"Portuguese"
				],
				"nativeName": [
					"português"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"AGO",
					"BRA",
					"CPV",
					"TLS",
					"GNQ",
					"GNB",
					"MAC",
					"MOZ",
					"PRT",
					"STP"
				],
				"langCultureMs": [
					{
						"langCultureName": "pt-BR",
						"displayName": "Portuguese - Brazil",
						"cultureCode": "0x0416"
					},
					{
						"langCultureName": "pt-PT",
						"displayName": "Portuguese - Portugal",
						"cultureCode": "0x0816"
					}
				]
			},
			{
				"iso639_1": "qu",
				"iso639_2": "que",
				"iso639_2en": "que",
				"iso639_3": "que",
				"name": [
					"Quechua"
				],
				"nativeName": [
					"Runa Simi",
					"Kichwa"
				],
				"direction": "LTR",
				"family": "Quechuan",
				"countries": [
					"BOL",
					"PER"
				]
			},
			{
				"iso639_1": "rm",
				"iso639_2": "roh",
				"iso639_2en": "roh",
				"iso639_3": "roh",
				"name": [
					"Romansh"
				],
				"nativeName": [
					"rumantsch grischun"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"CHE"
				]
			},
			{
				"iso639_1": "rn",
				"iso639_2": "run",
				"iso639_2en": "run",
				"iso639_3": "run",
				"name": [
					"Kirundi"
				],
				"nativeName": [
					"Ikirundi"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"BDI"
				]
			},
			{
				"iso639_1": "ro",
				"iso639_2": "ron",
				"iso639_2en": "rum",
				"iso639_3": "ron",
				"name": [
					"Romanian"
				],
				"nativeName": [
					"limba română"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ROU",
					"MDA"
				],
				"langCultureMs": [
					{
						"langCultureName": "ro-RO",
						"displayName": "Romanian - Romania",
						"cultureCode": "0x0418"
					}
				]
			},
			{
				"iso639_1": "ru",
				"iso639_2": "rus",
				"iso639_2en": "rus",
				"iso639_3": "rus",
				"name": [
					"Russian"
				],
				"nativeName": [
					"русский язык"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"RUS",
					"BLR",
					"KAZ",
					"KGZ",
					"TJK"
				],
				"langCultureMs": [
					{
						"langCultureName": "ru-RU",
						"displayName": "Russian - Russia",
						"cultureCode": "0x0419"
					}
				]
			},
			{
				"iso639_1": "sa",
				"iso639_2": "san",
				"iso639_2en": "san",
				"iso639_3": "san",
				"name": [
					"Sanskrit (Saṁskṛta)"
				],
				"nativeName": [
					"संस्कृतम्"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"langCultureMs": [
					{
						"langCultureName": "sa-IN",
						"displayName": "Sanskrit - India",
						"cultureCode": "0x044F"
					}
				]
			},
			{
				"iso639_1": "sc",
				"iso639_2": "srd",
				"iso639_2en": "srd",
				"iso639_3": "srd",
				"name": [
					"Sardinian"
				],
				"nativeName": [
					"sardu"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "sd",
				"iso639_2": "snd",
				"iso639_2en": "snd",
				"iso639_3": "snd",
				"name": [
					"Sindhi"
				],
				"nativeName": [
					"सिन्धी",
					"سنڌي، سندھی‎"
				],
				"direction": "RTL",
				"family": "Indo-European"
			},
			{
				"iso639_1": "se",
				"iso639_2": "sme",
				"iso639_2en": "sme",
				"iso639_3": "sme",
				"name": [
					"Northern Sami"
				],
				"nativeName": [
					"Davvisámegiella"
				],
				"direction": "LTR",
				"family": "Uralic"
			},
			{
				"iso639_1": "sm",
				"iso639_2": "smo",
				"iso639_2en": "smo",
				"iso639_3": "smo",
				"name": [
					"Samoan"
				],
				"nativeName": [
					"gagana fa'a Samoa"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "sg",
				"iso639_2": "sag",
				"iso639_2en": "sag",
				"iso639_3": "sag",
				"name": [
					"Sango"
				],
				"nativeName": [
					"yângâ tî sängö"
				],
				"direction": "LTR",
				"family": "Creole",
				"countries": [
					"CAF"
				]
			},
			{
				"iso639_1": "sr",
				"iso639_2": "srp",
				"iso639_2en": "srp",
				"iso639_3": "srp",
				"name": [
					"Serbian"
				],
				"nativeName": [
					"српски језик"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"SRB",
					"BIH"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-sr-SP",
						"displayName": "Serbian (Cyrillic) - Serbia",
						"cultureCode": "0x0C1A"
					},
					{
						"langCultureName": "Lt-sr-SP",
						"displayName": "Serbian (Latin) - Serbia",
						"cultureCode": "0x081A"
					}
				]
			},
			{
				"iso639_1": "gd",
				"iso639_2": "gla",
				"iso639_2en": "gla",
				"iso639_3": "gla",
				"name": [
					"Scottish Gaelic",
					"Gaelic"
				],
				"nativeName": [
					"Gàidhlig"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "sn",
				"iso639_2": "sna",
				"iso639_2en": "sna",
				"iso639_3": "sna",
				"name": [
					"Shona"
				],
				"nativeName": [
					"chiShona"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZWE"
				]
			},
			{
				"iso639_1": "si",
				"iso639_2": "sin",
				"iso639_2en": "sin",
				"iso639_3": "sin",
				"name": [
					"Sinhala",
					"Sinhalese"
				],
				"nativeName": [
					"සිංහල"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"LKA"
				]
			},
			{
				"iso639_1": "sk",
				"iso639_2": "slk",
				"iso639_2en": "slo",
				"iso639_3": "slk",
				"name": [
					"Slovak"
				],
				"nativeName": [
					"slovenčina",
					"slovenský jazyk"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"SVK",
					"CZE"
				],
				"langCultureMs": [
					{
						"langCultureName": "sk-SK",
						"displayName": "Slovak - Slovakia",
						"cultureCode": "0x041B"
					}
				]
			},
			{
				"iso639_1": "sl",
				"iso639_2": "slv",
				"iso639_2en": "slv",
				"iso639_3": "slv",
				"name": [
					"Slovene"
				],
				"nativeName": [
					"slovenski jezik",
					"slovenščina"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"SVN"
				],
				"langCultureMs": [
					{
						"langCultureName": "sl-SI",
						"displayName": "Slovenian - Slovenia",
						"cultureCode": "0x0424"
					}
				]
			},
			{
				"iso639_1": "so",
				"iso639_2": "som",
				"iso639_2en": "som",
				"iso639_3": "som",
				"name": [
					"Somali"
				],
				"nativeName": [
					"Soomaaliga",
					"af Soomaali"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"DJI",
					"SOM"
				]
			},
			{
				"iso639_1": "st",
				"iso639_2": "sot",
				"iso639_2en": "sot",
				"iso639_3": "sot",
				"name": [
					"Southern Sotho"
				],
				"nativeName": [
					"Sesotho"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"LSO",
					"ZAF"
				]
			},
			{
				"iso639_1": "es",
				"iso639_2": "spa",
				"iso639_2en": "spa",
				"iso639_3": "spa",
				"name": [
					"Spanish",
					"Castilian"
				],
				"nativeName": [
					"español",
					"castellano"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"ARG",
					"BOL",
					"CHL",
					"COL",
					"CRI",
					"CUB",
					"DOM",
					"ECU",
					"SLV",
					"GNQ",
					"GTM",
					"HND",
					"MEX",
					"NIC",
					"PAN",
					"PRY",
					"PER",
					"PRI",
					"ESP",
					"URY",
					"VEN",
					"ESH"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-AR",
						"displayName": "Spanish - Argentina",
						"cultureCode": "0x2C0A"
					},
					{
						"langCultureName": "es-BO",
						"displayName": "Spanish - Bolivia",
						"cultureCode": "0x400A"
					},
					{
						"langCultureName": "es-CL",
						"displayName": "Spanish - Chile",
						"cultureCode": "0x340A"
					},
					{
						"langCultureName": "es-CO",
						"displayName": "Spanish - Colombia",
						"cultureCode": "0x240A"
					},
					{
						"langCultureName": "es-CR",
						"displayName": "Spanish - Costa Rica",
						"cultureCode": "0x140A"
					},
					{
						"langCultureName": "es-DO",
						"displayName": "Spanish - Dominican Republic",
						"cultureCode": "0x1C0A"
					},
					{
						"langCultureName": "es-EC",
						"displayName": "Spanish - Ecuador",
						"cultureCode": "0x300A"
					},
					{
						"langCultureName": "es-SV",
						"displayName": "Spanish - El Salvador",
						"cultureCode": "0x440A"
					},
					{
						"langCultureName": "es-GT",
						"displayName": "Spanish - Guatemala",
						"cultureCode": "0x100A"
					},
					{
						"langCultureName": "es-HN",
						"displayName": "Spanish - Honduras",
						"cultureCode": "0x480A"
					},
					{
						"langCultureName": "es-MX",
						"displayName": "Spanish - Mexico",
						"cultureCode": "0x080A"
					},
					{
						"langCultureName": "es-NI",
						"displayName": "Spanish - Nicaragua",
						"cultureCode": "0x4C0A"
					},
					{
						"langCultureName": "es-PA",
						"displayName": "Spanish - Panama",
						"cultureCode": "0x180A"
					},
					{
						"langCultureName": "es-PY",
						"displayName": "Spanish - Paraguay",
						"cultureCode": "0x3C0A"
					},
					{
						"langCultureName": "es-PE",
						"displayName": "Spanish - Peru",
						"cultureCode": "0x280A"
					},
					{
						"langCultureName": "es-PR",
						"displayName": "Spanish - Puerto Rico",
						"cultureCode": "0x500A"
					},
					{
						"langCultureName": "es-ES",
						"displayName": "Spanish - Spain",
						"cultureCode": "0x0C0A"
					},
					{
						"langCultureName": "es-UY",
						"displayName": "Spanish - Uruguay",
						"cultureCode": "0x380A"
					},
					{
						"langCultureName": "es-VE",
						"displayName": "Spanish - Venezuela",
						"cultureCode": "0x200A"
					}
				]
			},
			{
				"iso639_1": "su",
				"iso639_2": "sun",
				"iso639_2en": "sun",
				"iso639_3": "sun",
				"name": [
					"Sundanese"
				],
				"nativeName": [
					"Basa Sunda"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "sw",
				"iso639_2": "swa",
				"iso639_2en": "swa",
				"iso639_3": "swa",
				"name": [
					"Swahili"
				],
				"nativeName": [
					"Kiswahili"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"COD",
					"KEN",
					"TZA",
					"UGA"
				],
				"langCultureMs": [
					{
						"langCultureName": "sw-KE",
						"displayName": "Swahili - Kenya",
						"cultureCode": "0x0441"
					}
				]
			},
			{
				"iso639_1": "ss",
				"iso639_2": "ssw",
				"iso639_2en": "ssw",
				"iso639_3": "ssw",
				"name": [
					"Swati"
				],
				"nativeName": [
					"SiSwati"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"SWZ",
					"ZAF"
				]
			},
			{
				"iso639_1": "sv",
				"iso639_2": "swe",
				"iso639_2en": "swe",
				"iso639_3": "swe",
				"name": [
					"Swedish"
				],
				"nativeName": [
					"Svenska"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"SWE",
					"FIN",
					"ALA"
				],
				"langCultureMs": [
					{
						"langCultureName": "sv-FI",
						"displayName": "Swedish - Finland",
						"cultureCode": "0x081D"
					},
					{
						"langCultureName": "sv-SE",
						"displayName": "Swedish - Sweden",
						"cultureCode": "0x041D"
					}
				]
			},
			{
				"iso639_1": "ta",
				"iso639_2": "tam",
				"iso639_2en": "tam",
				"iso639_3": "tam",
				"name": [
					"Tamil"
				],
				"nativeName": [
					"தமிழ்"
				],
				"direction": "LTR",
				"family": "Dravidian",
				"countries": [
					"IND",
					"SGP",
					"LKA",
					"MYS",
					"MUS"
				],
				"langCultureMs": [
					{
						"langCultureName": "ta-IN",
						"displayName": "Tamil - India",
						"cultureCode": "0x0449"
					}
				]
			},
			{
				"iso639_1": "te",
				"iso639_2": "tel",
				"iso639_2en": "tel",
				"iso639_3": "tel",
				"name": [
					"Telugu"
				],
				"nativeName": [
					"తెలుగు"
				],
				"direction": "LTR",
				"family": "Dravidian",
				"countries": [
					"IND"
				],
				"langCultureMs": [
					{
						"langCultureName": "te-IN",
						"displayName": "Telugu - India",
						"cultureCode": "0x044A"
					}
				]
			},
			{
				"iso639_1": "tg",
				"iso639_2": "tgk",
				"iso639_2en": "tgk",
				"iso639_3": "tgk",
				"name": [
					"Tajik"
				],
				"nativeName": [
					"тоҷикӣ",
					"toğikī",
					"تاجیکی‎"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"TJK"
				]
			},
			{
				"iso639_1": "th",
				"iso639_2": "tha",
				"iso639_2en": "tha",
				"iso639_3": "tha",
				"name": [
					"Thai"
				],
				"nativeName": [
					"ไทย"
				],
				"direction": "LTR",
				"family": "Tai–Kadai",
				"countries": [
					"THA"
				],
				"langCultureMs": [
					{
						"langCultureName": "th-TH",
						"displayName": "Thai - Thailand",
						"cultureCode": "0x041E"
					}
				]
			},
			{
				"iso639_1": "ti",
				"iso639_2": "tir",
				"iso639_2en": "tir",
				"iso639_3": "tir",
				"name": [
					"Tigrinya"
				],
				"nativeName": [
					"ትግርኛ"
				],
				"direction": "LTR",
				"family": "Afro-Asiatic",
				"countries": [
					"ERI"
				]
			},
			{
				"iso639_1": "bo",
				"iso639_2": "bod",
				"iso639_2en": "tib",
				"iso639_3": "bod",
				"name": [
					"Tibetan Standard",
					"Tibetan",
					"Central"
				],
				"nativeName": [
					"བོད་ཡིག"
				],
				"direction": "LTR",
				"family": "Sino-Tibetan"
			},
			{
				"iso639_1": "tk",
				"iso639_2": "tuk",
				"iso639_2en": "tuk",
				"iso639_3": "tuk",
				"name": [
					"Turkmen"
				],
				"nativeName": [
					"Türkmen",
					"Түркмен"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"TKM"
				]
			},
			{
				"iso639_1": "tl",
				"iso639_2": "tgl",
				"iso639_2en": "tgl",
				"iso639_3": "tgl",
				"name": [
					"Tagalog"
				],
				"nativeName": [
					"Wikang Tagalog"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"PHL"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "fil",
				"iso639_2en": "fil",
				"iso639_3": "fil",
				"name": [
					"Filipino"
				],
				"nativeName": [
					"Filipino"
				],
				"direction": "LTR",
				"family": "Austronesian",
				"countries": [
					"PHL"
				]
			},
			{
				"iso639_1": "tn",
				"iso639_2": "tsn",
				"iso639_2en": "tsn",
				"iso639_3": "tsn",
				"name": [
					"Tswana"
				],
				"nativeName": [
					"Setswana"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"BWA",
					"ZAF"
				]
			},
			{
				"iso639_1": "to",
				"iso639_2": "ton",
				"iso639_2en": "ton",
				"iso639_3": "ton",
				"name": [
					"Tonga (Tonga Islands)"
				],
				"nativeName": [
					"faka Tonga"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "tr",
				"iso639_2": "tur",
				"iso639_2en": "tur",
				"iso639_3": "tur",
				"name": [
					"Turkish"
				],
				"nativeName": [
					"Türkçe"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"TUR",
					"CYP"
				],
				"langCultureMs": [
					{
						"langCultureName": "tr-TR",
						"displayName": "Turkish - Turkey",
						"cultureCode": "0x041F"
					}
				]
			},
			{
				"iso639_1": "ts",
				"iso639_2": "tso",
				"iso639_2en": "tso",
				"iso639_3": "tso",
				"name": [
					"Tsonga"
				],
				"nativeName": [
					"Xitsonga"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "tt",
				"iso639_2": "tat",
				"iso639_2en": "tat",
				"iso639_3": "tat",
				"name": [
					"Tatar"
				],
				"nativeName": [
					"татар теле",
					"tatar tele"
				],
				"direction": "LTR",
				"family": "Turkic",
				"langCultureMs": [
					{
						"langCultureName": "tt-RU",
						"displayName": "Tatar - Russia",
						"cultureCode": "0x0444"
					}
				]
			},
			{
				"iso639_1": "tw",
				"iso639_2": "twi",
				"iso639_2en": "twi",
				"iso639_3": "twi",
				"name": [
					"Twi"
				],
				"nativeName": [
					"Twi"
				],
				"direction": "LTR",
				"family": "Niger–Congo"
			},
			{
				"iso639_1": "ty",
				"iso639_2": "tah",
				"iso639_2en": "tah",
				"iso639_3": "tah",
				"name": [
					"Tahitian"
				],
				"nativeName": [
					"Reo Tahiti"
				],
				"direction": "LTR",
				"family": "Austronesian"
			},
			{
				"iso639_1": "ug",
				"iso639_2": "uig",
				"iso639_2en": "uig",
				"iso639_3": "uig",
				"name": [
					"Uyghur",
					"Uighur"
				],
				"nativeName": [
					"Uyƣurqə",
					"ئۇيغۇرچە‎"
				],
				"direction": "RTL",
				"family": "Turkic"
			},
			{
				"iso639_1": "uk",
				"iso639_2": "ukr",
				"iso639_2en": "ukr",
				"iso639_3": "ukr",
				"name": [
					"Ukrainian"
				],
				"nativeName": [
					"українська мова"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"UKR"
				],
				"langCultureMs": [
					{
						"langCultureName": "uk-UA",
						"displayName": "Ukrainian - Ukraine",
						"cultureCode": "0x0422"
					}
				]
			},
			{
				"iso639_1": "ur",
				"iso639_2": "urd",
				"iso639_2en": "urd",
				"iso639_3": "urd",
				"name": [
					"Urdu"
				],
				"nativeName": [
					"اردو"
				],
				"direction": "RTL",
				"family": "Indo-European",
				"countries": [
					"PAK",
					"FJI"
				],
				"langCultureMs": [
					{
						"langCultureName": "ur-PK",
						"displayName": "Urdu - Pakistan",
						"cultureCode": "0x0420"
					}
				]
			},
			{
				"iso639_1": "uz",
				"iso639_2": "uzb",
				"iso639_2en": "uzb",
				"iso639_3": "uzb",
				"name": [
					"Uzbek"
				],
				"nativeName": [
					"O‘zbek",
					"Ўзбек",
					"أۇزبېك‎"
				],
				"direction": "LTR",
				"family": "Turkic",
				"countries": [
					"UZB"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-uz-UZ",
						"displayName": "Uzbek (Cyrillic) - Uzbekistan",
						"cultureCode": "0x0843"
					},
					{
						"langCultureName": "Lt-uz-UZ",
						"displayName": "Uzbek (Latin) - Uzbekistan",
						"cultureCode": "0x0443"
					}
				]
			},
			{
				"iso639_1": "ve",
				"iso639_2": "ven",
				"iso639_2en": "ven",
				"iso639_3": "ven",
				"name": [
					"Venda"
				],
				"nativeName": [
					"Tshivenḓa"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "vi",
				"iso639_2": "vie",
				"iso639_2en": "vie",
				"iso639_3": "vie",
				"name": [
					"Vietnamese"
				],
				"nativeName": [
					"Tiếng Việt"
				],
				"direction": "LTR",
				"family": "Austroasiatic",
				"countries": [
					"VNM"
				],
				"langCultureMs": [
					{
						"langCultureName": "vi-VN",
						"displayName": "Vietnamese - Vietnam",
						"cultureCode": "0x042A"
					}
				]
			},
			{
				"iso639_1": "vo",
				"iso639_2": "vol",
				"iso639_2en": "vol",
				"iso639_3": "vol",
				"name": [
					"Volapük"
				],
				"nativeName": [
					"Volapük"
				],
				"direction": "LTR",
				"family": "Constructed"
			},
			{
				"iso639_1": "wa",
				"iso639_2": "wln",
				"iso639_2en": "wln",
				"iso639_3": "wln",
				"name": [
					"Walloon"
				],
				"nativeName": [
					"walon"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "cy",
				"iso639_2": "cym",
				"iso639_2en": "wel",
				"iso639_3": "cym",
				"name": [
					"Welsh"
				],
				"nativeName": [
					"Cymraeg"
				],
				"direction": "LTR",
				"family": "Indo-European",
				"countries": [
					"GBR"
				]
			},
			{
				"iso639_1": "wo",
				"iso639_2": "wol",
				"iso639_2en": "wol",
				"iso639_3": "wol",
				"name": [
					"Wolof"
				],
				"nativeName": [
					"Wollof"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"SEN"
				]
			},
			{
				"iso639_1": "fy",
				"iso639_2": "fry",
				"iso639_2en": "fry",
				"iso639_3": "fry",
				"name": [
					"Western Frisian"
				],
				"nativeName": [
					"Frysk"
				],
				"direction": "LTR",
				"family": "Indo-European"
			},
			{
				"iso639_1": "xh",
				"iso639_2": "xho",
				"iso639_2en": "xho",
				"iso639_3": "xho",
				"name": [
					"Xhosa"
				],
				"nativeName": [
					"isiXhosa"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "yi",
				"iso639_2": "yid",
				"iso639_2en": "yid",
				"iso639_3": "yid",
				"name": [
					"Yiddish"
				],
				"nativeName": [
					"ייִדיש"
				],
				"direction": "RTL",
				"family": "Indo-European"
			},
			{
				"iso639_1": "yo",
				"iso639_2": "yor",
				"iso639_2en": "yor",
				"iso639_3": "yor",
				"name": [
					"Yoruba"
				],
				"nativeName": [
					"Yorùbá"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"BEN",
					"NGA"
				]
			},
			{
				"iso639_1": "za",
				"iso639_2": "zha",
				"iso639_2en": "zha",
				"iso639_3": "zha",
				"name": [
					"Zhuang",
					"Chuang"
				],
				"nativeName": [
					"Saɯ cueŋƅ",
					"Saw cuengh"
				],
				"direction": "LTR",
				"family": "Tai–Kadai"
			},
			{
				"iso639_1": "zu",
				"iso639_2": "zul",
				"iso639_2en": "zul",
				"iso639_3": "zul",
				"name": [
					"Zulu"
				],
				"nativeName": [
					"isiZulu"
				],
				"direction": "LTR",
				"family": "Niger–Congo",
				"countries": [
					"ZAF"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "ace",
				"iso639_2en": "ace",
				"iso639_3": "ace",
				"name": [
					"Achinese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ach",
				"iso639_2en": "ach",
				"iso639_3": "ach",
				"name": [
					"Acoli"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ada",
				"iso639_2en": "ada",
				"iso639_3": "ada",
				"name": [
					"Adangme"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ady",
				"iso639_2en": "ady",
				"iso639_3": "ady",
				"name": [
					"Adyghe",
					" Adygei"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "afa",
				"iso639_2en": "afa",
				"iso639_3": "afa",
				"name": [
					"Afro-Asiatic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "afh",
				"iso639_2en": "afh",
				"iso639_3": "afh",
				"name": [
					"Afrihili"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ain",
				"iso639_2en": "ain",
				"iso639_3": "ain",
				"name": [
					"Ainu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "akk",
				"iso639_2en": "akk",
				"iso639_3": "akk",
				"name": [
					"Akkadian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ale",
				"iso639_2en": "ale",
				"iso639_3": "ale",
				"name": [
					"Aleut"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "alg",
				"iso639_2en": "alg",
				"iso639_3": "alg",
				"name": [
					"Algonquian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "alt",
				"iso639_2en": "alt",
				"iso639_3": "alt",
				"name": [
					"Southern Altai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ang",
				"iso639_2en": "ang",
				"iso639_3": "ang",
				"name": [
					"English, Old (ca.450-1100)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "anp",
				"iso639_2en": "anp",
				"iso639_3": "anp",
				"name": [
					"Angika"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "apa",
				"iso639_2en": "apa",
				"iso639_3": "apa",
				"name": [
					"Apache languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "arc",
				"iso639_2en": "arc",
				"iso639_3": "arc",
				"name": [
					"Official Aramaic (700-300 BCE)",
					" Imperial Aramaic (700-300 BCE)"
				],
				"nativeName": [
					""
				],
				"directrion": "RTL",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "arn",
				"iso639_2en": "arn",
				"iso639_3": "arn",
				"name": [
					"Mapudungun",
					" Mapuche"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "arp",
				"iso639_2en": "arp",
				"iso639_3": "arp",
				"name": [
					"Arapaho"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "art",
				"iso639_2en": "art",
				"iso639_3": "art",
				"name": [
					"Artificial languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "arw",
				"iso639_2en": "arw",
				"iso639_3": "arw",
				"name": [
					"Arawak"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ast",
				"iso639_2en": "ast",
				"iso639_3": "ast",
				"name": [
					"Asturian",
					" Bable",
					" Leonese",
					" Asturleonese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ath",
				"iso639_2en": "ath",
				"iso639_3": "ath",
				"name": [
					"Athapascan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "aus",
				"iso639_2en": "aus",
				"iso639_3": "aus",
				"name": [
					"Australian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "awa",
				"iso639_2en": "awa",
				"iso639_3": "awa",
				"name": [
					"Awadhi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bad",
				"iso639_2en": "bad",
				"iso639_3": "bad",
				"name": [
					"Banda languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bai",
				"iso639_2en": "bai",
				"iso639_3": "bai",
				"name": [
					"Bamileke languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bal",
				"iso639_2en": "bal",
				"iso639_3": "bal",
				"name": [
					"Baluchi",
					"Balochi"
				],
				"nativeName": [
					""
				],
				"directrion": "RTL",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ban",
				"iso639_2en": "ban",
				"iso639_3": "ban",
				"name": [
					"Balinese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bas",
				"iso639_2en": "bas",
				"iso639_3": "bas",
				"name": [
					"Basa"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bat",
				"iso639_2en": "bat",
				"iso639_3": "bat",
				"name": [
					"Baltic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bej",
				"iso639_2en": "bej",
				"iso639_3": "bej",
				"name": [
					"Beja",
					" Bedawiyet"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bem",
				"iso639_2en": "bem",
				"iso639_3": "bem",
				"name": [
					"Bemba"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bho",
				"iso639_2en": "bho",
				"iso639_3": "bho",
				"name": [
					"Bhojpuri"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bik",
				"iso639_2en": "bik",
				"iso639_3": "bik",
				"name": [
					"Bikol"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bin",
				"iso639_2en": "bin",
				"iso639_3": "bin",
				"name": [
					"Bini",
					" Edo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bla",
				"iso639_2en": "bla",
				"iso639_3": "bla",
				"name": [
					"Siksika"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bnt",
				"iso639_2en": "bnt",
				"iso639_3": "bnt",
				"name": [
					"Bantu languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bra",
				"iso639_2en": "bra",
				"iso639_3": "bra",
				"name": [
					"Braj"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "btk",
				"iso639_2en": "btk",
				"iso639_3": "btk",
				"name": [
					"Batak languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bua",
				"iso639_2en": "bua",
				"iso639_3": "bua",
				"name": [
					"Buriat"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "bug",
				"iso639_2en": "bug",
				"iso639_3": "bug",
				"name": [
					"Buginese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "byn",
				"iso639_2en": "byn",
				"iso639_3": "byn",
				"name": [
					"Blin",
					" Bilin"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cad",
				"iso639_2en": "cad",
				"iso639_3": "cad",
				"name": [
					"Caddo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cai",
				"iso639_2en": "cai",
				"iso639_3": "cai",
				"name": [
					"Central American Indian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "car",
				"iso639_2en": "car",
				"iso639_3": "car",
				"name": [
					"Galibi Carib"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cau",
				"iso639_2en": "cau",
				"iso639_3": "cau",
				"name": [
					"Caucasian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ceb",
				"iso639_2en": "ceb",
				"iso639_3": "ceb",
				"name": [
					"Cebuano"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cel",
				"iso639_2en": "cel",
				"iso639_3": "cel",
				"name": [
					"Celtic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chb",
				"iso639_2en": "chb",
				"iso639_3": "chb",
				"name": [
					"Chibcha"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chg",
				"iso639_2en": "chg",
				"iso639_3": "chg",
				"name": [
					"Chagatai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chk",
				"iso639_2en": "chk",
				"iso639_3": "chk",
				"name": [
					"Chuukese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chm",
				"iso639_2en": "chm",
				"iso639_3": "chm",
				"name": [
					"Mari"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chn",
				"iso639_2en": "chn",
				"iso639_3": "chn",
				"name": [
					"Chinook jargon"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cho",
				"iso639_2en": "cho",
				"iso639_3": "cho",
				"name": [
					"Choctaw"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chp",
				"iso639_2en": "chp",
				"iso639_3": "chp",
				"name": [
					"Chipewyan",
					" Dene Suline"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chr",
				"iso639_2en": "chr",
				"iso639_3": "chr",
				"name": [
					"Cherokee"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "chy",
				"iso639_2en": "chy",
				"iso639_3": "chy",
				"name": [
					"Cheyenne"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cmc",
				"iso639_2en": "cmc",
				"iso639_3": "cmc",
				"name": [
					"Chamic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cop",
				"iso639_2en": "cop",
				"iso639_3": "cop",
				"name": [
					"Coptic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cpe",
				"iso639_2en": "cpe",
				"iso639_3": "cpe",
				"name": [
					"Creoles and pidgins, English based"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cpf",
				"iso639_2en": "cpf",
				"iso639_3": "cpf",
				"name": [
					"Creoles and pidgins, French-based"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cpp",
				"iso639_2en": "cpp",
				"iso639_3": "cpp",
				"name": [
					"Creoles and pidgins, Portuguese-based"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "crh",
				"iso639_2en": "crh",
				"iso639_3": "crh",
				"name": [
					"Crimean Tatar",
					" Crimean Turkish"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "crp",
				"iso639_2en": "crp",
				"iso639_3": "crp",
				"name": [
					"Creoles and pidgins"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "csb",
				"iso639_2en": "csb",
				"iso639_3": "csb",
				"name": [
					"Kashubian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "cus",
				"iso639_2en": "cus",
				"iso639_3": "cus",
				"name": [
					"Cushitic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dak",
				"iso639_2en": "dak",
				"iso639_3": "dak",
				"name": [
					"Dakota"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dar",
				"iso639_2en": "dar",
				"iso639_3": "dar",
				"name": [
					"Dargwa"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "day",
				"iso639_2en": "day",
				"iso639_3": "day",
				"name": [
					"Land Dayak languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "del",
				"iso639_2en": "del",
				"iso639_3": "del",
				"name": [
					"Delaware"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "den",
				"iso639_2en": "den",
				"iso639_3": "den",
				"name": [
					"Slave (Athapascan)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dgr",
				"iso639_2en": "dgr",
				"iso639_3": "dgr",
				"name": [
					"Dogrib"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "din",
				"iso639_2en": "din",
				"iso639_3": "din",
				"name": [
					"Dinka"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "doi",
				"iso639_2en": "doi",
				"iso639_3": "doi",
				"name": [
					"Dogri"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dra",
				"iso639_2en": "dra",
				"iso639_3": "dra",
				"name": [
					"Dravidian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dsb",
				"iso639_2en": "dsb",
				"iso639_3": "dsb",
				"name": [
					"Lower Sorbian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dua",
				"iso639_2en": "dua",
				"iso639_3": "dua",
				"name": [
					"Duala"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dum",
				"iso639_2en": "dum",
				"iso639_3": "dum",
				"name": [
					"Dutch, Middle (ca.1050-1350)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "dyu",
				"iso639_2en": "dyu",
				"iso639_3": "dyu",
				"name": [
					"Dyula"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "efi",
				"iso639_2en": "efi",
				"iso639_3": "efi",
				"name": [
					"Efik"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "egy",
				"iso639_2en": "egy",
				"iso639_3": "egy",
				"name": [
					"Egyptian (Ancient)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "eka",
				"iso639_2en": "eka",
				"iso639_3": "eka",
				"name": [
					"Ekajuk"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "elx",
				"iso639_2en": "elx",
				"iso639_3": "elx",
				"name": [
					"Elamite"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "enm",
				"iso639_2en": "enm",
				"iso639_3": "enm",
				"name": [
					"English, Middle (1100-1500)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ewo",
				"iso639_2en": "ewo",
				"iso639_3": "ewo",
				"name": [
					"Ewondo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fan",
				"iso639_2en": "fan",
				"iso639_3": "fan",
				"name": [
					"Fang"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fat",
				"iso639_2en": "fat",
				"iso639_3": "fat",
				"name": [
					"Fanti"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fiu",
				"iso639_2en": "fiu",
				"iso639_3": "fiu",
				"name": [
					"Finno-Ugrian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fon",
				"iso639_2en": "fon",
				"iso639_3": "fon",
				"name": [
					"Fon"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "frm",
				"iso639_2en": "frm",
				"iso639_3": "frm",
				"name": [
					"French, Middle (ca.1400-1600)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fro",
				"iso639_2en": "fro",
				"iso639_3": "fro",
				"name": [
					"French, Old (842-ca.1400)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "frr",
				"iso639_2en": "frr",
				"iso639_3": "frr",
				"name": [
					"Northern Frisian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "frs",
				"iso639_2en": "frs",
				"iso639_3": "frs",
				"name": [
					"Eastern Frisian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "fur",
				"iso639_2en": "fur",
				"iso639_3": "fur",
				"name": [
					"Friulian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gaa",
				"iso639_2en": "gaa",
				"iso639_3": "gaa",
				"name": [
					"Ga"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"GHA"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "gay",
				"iso639_2en": "gay",
				"iso639_3": "gay",
				"name": [
					"Gayo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gba",
				"iso639_2en": "gba",
				"iso639_3": "gba",
				"name": [
					"Gbaya"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gem",
				"iso639_2en": "gem",
				"iso639_3": "gem",
				"name": [
					"Germanic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gez",
				"iso639_2en": "gez",
				"iso639_3": "gez",
				"name": [
					"Geez"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gil",
				"iso639_2en": "gil",
				"iso639_3": "gil",
				"name": [
					"Gilbertese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gmh",
				"iso639_2en": "gmh",
				"iso639_3": "gmh",
				"name": [
					"German, Middle High (ca.1050-1500)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "goh",
				"iso639_2en": "goh",
				"iso639_3": "goh",
				"name": [
					"German, Old High (ca.750-1050)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gon",
				"iso639_2en": "gon",
				"iso639_3": "gon",
				"name": [
					"Gondi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gor",
				"iso639_2en": "gor",
				"iso639_3": "gor",
				"name": [
					"Gorontalo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "got",
				"iso639_2en": "got",
				"iso639_3": "got",
				"name": [
					"Gothic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "grb",
				"iso639_2en": "grb",
				"iso639_3": "grb",
				"name": [
					"Grebo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "grc",
				"iso639_2en": "grc",
				"iso639_3": "grc",
				"name": [
					"Greek, Ancient (to 1453)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gsw",
				"iso639_2en": "gsw",
				"iso639_3": "gsw",
				"name": [
					"Swiss German",
					" Alemannic",
					" Alsatian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "gwi",
				"iso639_2en": "gwi",
				"iso639_3": "gwi",
				"name": [
					"Gwich'in"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hai",
				"iso639_2en": "hai",
				"iso639_3": "hai",
				"name": [
					"Haida"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "haw",
				"iso639_2en": "haw",
				"iso639_3": "haw",
				"name": [
					"Hawaiian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hil",
				"iso639_2en": "hil",
				"iso639_3": "hil",
				"name": [
					"Hiligaynon"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "him",
				"iso639_2en": "him",
				"iso639_3": "him",
				"name": [
					"Himachali languages",
					" Western Pahari languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hit",
				"iso639_2en": "hit",
				"iso639_3": "hit",
				"name": [
					"Hittite"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hmn",
				"iso639_2en": "hmn",
				"iso639_3": "hmn",
				"name": [
					"Hmong",
					" Mong"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hsb",
				"iso639_2en": "hsb",
				"iso639_3": "hsb",
				"name": [
					"Upper Sorbian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "hup",
				"iso639_2en": "hup",
				"iso639_3": "hup",
				"name": [
					"Hupa"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "iba",
				"iso639_2en": "iba",
				"iso639_3": "iba",
				"name": [
					"Iban"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ijo",
				"iso639_2en": "ijo",
				"iso639_3": "ijo",
				"name": [
					"Ijo languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ilo",
				"iso639_2en": "ilo",
				"iso639_3": "ilo",
				"name": [
					"Iloko"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "inc",
				"iso639_2en": "inc",
				"iso639_3": "inc",
				"name": [
					"Indic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ine",
				"iso639_2en": "ine",
				"iso639_3": "ine",
				"name": [
					"Indo-European languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "inh",
				"iso639_2en": "inh",
				"iso639_3": "inh",
				"name": [
					"Ingush"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ira",
				"iso639_2en": "ira",
				"iso639_3": "ira",
				"name": [
					"Iranian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "iro",
				"iso639_2en": "iro",
				"iso639_3": "iro",
				"name": [
					"Iroquoian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "jbo",
				"iso639_2en": "jbo",
				"iso639_3": "jbo",
				"name": [
					"Lojban"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "jpr",
				"iso639_2en": "jpr",
				"iso639_3": "jpr",
				"name": [
					"Judeo-Persian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "jrb",
				"iso639_2en": "jrb",
				"iso639_3": "jrb",
				"name": [
					"Judeo-Arabic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kaa",
				"iso639_2en": "kaa",
				"iso639_3": "kaa",
				"name": [
					"Kara-Kalpak"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kab",
				"iso639_2en": "kab",
				"iso639_3": "kab",
				"name": [
					"Kabyle"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kac",
				"iso639_2en": "kac",
				"iso639_3": "kac",
				"name": [
					"Kachin",
					" Jingpho"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kam",
				"iso639_2en": "kam",
				"iso639_3": "kam",
				"name": [
					"Kamba"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kar",
				"iso639_2en": "kar",
				"iso639_3": "kar",
				"name": [
					"Karen languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kaw",
				"iso639_2en": "kaw",
				"iso639_3": "kaw",
				"name": [
					"Kawi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kbd",
				"iso639_2en": "kbd",
				"iso639_3": "kbd",
				"name": [
					"Kabardian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kha",
				"iso639_2en": "kha",
				"iso639_3": "kha",
				"name": [
					"Khasi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "khi",
				"iso639_2en": "khi",
				"iso639_3": "khi",
				"name": [
					"Khoisan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kho",
				"iso639_2en": "kho",
				"iso639_3": "kho",
				"name": [
					"Khotanese",
					" Sakan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kmb",
				"iso639_2en": "kmb",
				"iso639_3": "kmb",
				"name": [
					"Kimbundu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"AGO"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "kok",
				"iso639_2en": "kok",
				"iso639_3": "kok",
				"name": [
					"Konkani"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"langCultureMs": [
					{
						"langCultureName": "kok-IN",
						"displayName": "Konkani - India",
						"cultureCode": "0x0457"
					}
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "kos",
				"iso639_2en": "kos",
				"iso639_3": "kos",
				"name": [
					"Kosraean"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kpe",
				"iso639_2en": "kpe",
				"iso639_3": "kpe",
				"name": [
					"Kpelle"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "krc",
				"iso639_2en": "krc",
				"iso639_3": "krc",
				"name": [
					"Karachay-Balkar"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "krl",
				"iso639_2en": "krl",
				"iso639_3": "krl",
				"name": [
					"Karelian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kro",
				"iso639_2en": "kro",
				"iso639_3": "kro",
				"name": [
					"Kru languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kru",
				"iso639_2en": "kru",
				"iso639_3": "kru",
				"name": [
					"Kurukh"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kum",
				"iso639_2en": "kum",
				"iso639_3": "kum",
				"name": [
					"Kumyk"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "kut",
				"iso639_2en": "kut",
				"iso639_3": "kut",
				"name": [
					"Kutenai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lad",
				"iso639_2en": "lad",
				"iso639_3": "lad",
				"name": [
					"Ladino"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lah",
				"iso639_2en": "lah",
				"iso639_3": "lah",
				"name": [
					"Lahnda"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lam",
				"iso639_2en": "lam",
				"iso639_3": "lam",
				"name": [
					"Lamba"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lez",
				"iso639_2en": "lez",
				"iso639_3": "lez",
				"name": [
					"Lezghian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lol",
				"iso639_2en": "lol",
				"iso639_3": "lol",
				"name": [
					"Mongo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "loz",
				"iso639_2en": "loz",
				"iso639_3": "loz",
				"name": [
					"Lozi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lua",
				"iso639_2en": "lua",
				"iso639_3": "lua",
				"name": [
					"Luba-Lulua"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lui",
				"iso639_2en": "lui",
				"iso639_3": "lui",
				"name": [
					"Luiseno"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lun",
				"iso639_2en": "lun",
				"iso639_3": "lun",
				"name": [
					"Lunda"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "luo",
				"iso639_2en": "luo",
				"iso639_3": "luo",
				"name": [
					"Luo (Kenya and Tanzania)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "lus",
				"iso639_2en": "lus",
				"iso639_3": "lus",
				"name": [
					"Lushai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mad",
				"iso639_2en": "mad",
				"iso639_3": "mad",
				"name": [
					"Madurese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mag",
				"iso639_2en": "mag",
				"iso639_3": "mag",
				"name": [
					"Magahi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mai",
				"iso639_2en": "mai",
				"iso639_3": "mai",
				"name": [
					"Maithili"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mak",
				"iso639_2en": "mak",
				"iso639_3": "mak",
				"name": [
					"Makasar"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "man",
				"iso639_2en": "man",
				"iso639_3": "man",
				"name": [
					"Mandingo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "map",
				"iso639_2en": "map",
				"iso639_3": "map",
				"name": [
					"Austronesian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mas",
				"iso639_2en": "mas",
				"iso639_3": "mas",
				"name": [
					"Masai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mdf",
				"iso639_2en": "mdf",
				"iso639_3": "mdf",
				"name": [
					"Moksha"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mdr",
				"iso639_2en": "mdr",
				"iso639_3": "mdr",
				"name": [
					"Mandar"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "men",
				"iso639_2en": "men",
				"iso639_3": "men",
				"name": [
					"Mende"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mga",
				"iso639_2en": "mga",
				"iso639_3": "mga",
				"name": [
					"Irish, Middle (900-1200)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mic",
				"iso639_2en": "mic",
				"iso639_3": "mic",
				"name": [
					"Mi'kmaq",
					" Micmac"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "min",
				"iso639_2en": "min",
				"iso639_3": "min",
				"name": [
					"Minangkabau"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mis",
				"iso639_2en": "mis",
				"iso639_3": "mis",
				"name": [
					"Uncoded languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mkh",
				"iso639_2en": "mkh",
				"iso639_3": "mkh",
				"name": [
					"Mon-Khmer languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mnc",
				"iso639_2en": "mnc",
				"iso639_3": "mnc",
				"name": [
					"Manchu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mni",
				"iso639_2en": "mni",
				"iso639_3": "mni",
				"name": [
					"Manipuri"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mno",
				"iso639_2en": "mno",
				"iso639_3": "mno",
				"name": [
					"Manobo languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "moh",
				"iso639_2en": "moh",
				"iso639_3": "moh",
				"name": [
					"Mohawk"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mos",
				"iso639_2en": "mos",
				"iso639_3": "mos",
				"name": [
					"Mossi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"BFA"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "mul",
				"iso639_2en": "mul",
				"iso639_3": "mul",
				"name": [
					"Multiple languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mun",
				"iso639_2en": "mun",
				"iso639_3": "mun",
				"name": [
					"Munda languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mus",
				"iso639_2en": "mus",
				"iso639_3": "mus",
				"name": [
					"Creek"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mwl",
				"iso639_2en": "mwl",
				"iso639_3": "mwl",
				"name": [
					"Mirandese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "mwr",
				"iso639_2en": "mwr",
				"iso639_3": "mwr",
				"name": [
					"Marwari"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "myn",
				"iso639_2en": "myn",
				"iso639_3": "myn",
				"name": [
					"Mayan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "myv",
				"iso639_2en": "myv",
				"iso639_3": "myv",
				"name": [
					"Erzya"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nah",
				"iso639_2en": "nah",
				"iso639_3": "nah",
				"name": [
					"Nahuatl languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nai",
				"iso639_2en": "nai",
				"iso639_3": "nai",
				"name": [
					"North American Indian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nap",
				"iso639_2en": "nap",
				"iso639_3": "nap",
				"name": [
					"Neapolitan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nds",
				"iso639_2en": "nds",
				"iso639_3": "nds",
				"name": [
					"Low German",
					" Low Saxon",
					" German, Low",
					" Saxon, Low"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "new",
				"iso639_2en": "new",
				"iso639_3": "new",
				"name": [
					"Nepal Bhasa",
					" Newari"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nia",
				"iso639_2en": "nia",
				"iso639_3": "nia",
				"name": [
					"Nias"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nic",
				"iso639_2en": "nic",
				"iso639_3": "nic",
				"name": [
					"Niger-Kordofanian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "niu",
				"iso639_2en": "niu",
				"iso639_3": "niu",
				"name": [
					"Niuean"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nog",
				"iso639_2en": "nog",
				"iso639_3": "nog",
				"name": [
					"Nogai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "non",
				"iso639_2en": "non",
				"iso639_3": "non",
				"name": [
					"Norse, Old"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nqo",
				"iso639_2en": "nqo",
				"iso639_3": "nqo",
				"name": [
					"N'Ko"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nub",
				"iso639_2en": "nub",
				"iso639_3": "nub",
				"name": [
					"Nubian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nwc",
				"iso639_2en": "nwc",
				"iso639_3": "nwc",
				"name": [
					"Classical Newari",
					" Old Newari",
					" Classical Nepal Bhasa"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nym",
				"iso639_2en": "nym",
				"iso639_3": "nym",
				"name": [
					"Nyamwezi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nyn",
				"iso639_2en": "nyn",
				"iso639_3": "nyn",
				"name": [
					"Nyankole"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nyo",
				"iso639_2en": "nyo",
				"iso639_3": "nyo",
				"name": [
					"Nyoro"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "nzi",
				"iso639_2en": "nzi",
				"iso639_3": "nzi",
				"name": [
					"Nzima"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "osa",
				"iso639_2en": "osa",
				"iso639_3": "osa",
				"name": [
					"Osage"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ota",
				"iso639_2en": "ota",
				"iso639_3": "ota",
				"name": [
					"Turkish, Ottoman (1500-1928)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "oto",
				"iso639_2en": "oto",
				"iso639_3": "oto",
				"name": [
					"Otomian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "paa",
				"iso639_2en": "paa",
				"iso639_3": "paa",
				"name": [
					"Papuan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pag",
				"iso639_2en": "pag",
				"iso639_3": "pag",
				"name": [
					"Pangasinan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pal",
				"iso639_2en": "pal",
				"iso639_3": "pal",
				"name": [
					"Pahlavi"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pam",
				"iso639_2en": "pam",
				"iso639_3": "pam",
				"name": [
					"Pampanga",
					" Kapampangan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pap",
				"iso639_2en": "pap",
				"iso639_3": "pap",
				"name": [
					"Papiamento"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"ABW",
					"CUW"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "pau",
				"iso639_2en": "pau",
				"iso639_3": "pau",
				"name": [
					"Palauan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "peo",
				"iso639_2en": "peo",
				"iso639_3": "peo",
				"name": [
					"Persian, Old (ca.600-400 B.C.)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "phi",
				"iso639_2en": "phi",
				"iso639_3": "phi",
				"name": [
					"Philippine languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "phn",
				"iso639_2en": "phn",
				"iso639_3": "phn",
				"name": [
					"Phoenician"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pon",
				"iso639_2en": "pon",
				"iso639_3": "pon",
				"name": [
					"Pohnpeian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pra",
				"iso639_2en": "pra",
				"iso639_3": "pra",
				"name": [
					"Prakrit languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "pro",
				"iso639_2en": "pro",
				"iso639_3": "pro",
				"name": [
					"Proven�al, Old (to 1500)",
					"Occitan, Old (to 1500)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "qaa-qtz",
				"iso639_2en": "qaa-qtz",
				"iso639_3": "qaa-qtz",
				"name": [
					"Reserved for local use"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "raj",
				"iso639_2en": "raj",
				"iso639_3": "raj",
				"name": [
					"Rajasthani"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "rap",
				"iso639_2en": "rap",
				"iso639_3": "rap",
				"name": [
					"Rapanui"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "rar",
				"iso639_2en": "rar",
				"iso639_3": "rar",
				"name": [
					"Rarotongan",
					" Cook Islands Maori"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "roa",
				"iso639_2en": "roa",
				"iso639_3": "roa",
				"name": [
					"Romance languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "rom",
				"iso639_2en": "rom",
				"iso639_3": "rom",
				"name": [
					"Romany"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "rup",
				"iso639_2en": "rup",
				"iso639_3": "rup",
				"name": [
					"Aromanian",
					" Arumanian",
					" Macedo-Romanian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sad",
				"iso639_2en": "sad",
				"iso639_3": "sad",
				"name": [
					"Sandawe"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sah",
				"iso639_2en": "sah",
				"iso639_3": "sah",
				"name": [
					"Yakut"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sai",
				"iso639_2en": "sai",
				"iso639_3": "sai",
				"name": [
					"South American Indian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sal",
				"iso639_2en": "sal",
				"iso639_3": "sal",
				"name": [
					"Salishan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sam",
				"iso639_2en": "sam",
				"iso639_3": "sam",
				"name": [
					"Samaritan Aramaic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sas",
				"iso639_2en": "sas",
				"iso639_3": "sas",
				"name": [
					"Sasak"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sat",
				"iso639_2en": "sat",
				"iso639_3": "sat",
				"name": [
					"Santali"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "scn",
				"iso639_2en": "scn",
				"iso639_3": "scn",
				"name": [
					"Sicilian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sco",
				"iso639_2en": "sco",
				"iso639_3": "sco",
				"name": [
					"Scots"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sel",
				"iso639_2en": "sel",
				"iso639_3": "sel",
				"name": [
					"Selkup"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sem",
				"iso639_2en": "sem",
				"iso639_3": "sem",
				"name": [
					"Semitic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sga",
				"iso639_2en": "sga",
				"iso639_3": "sga",
				"name": [
					"Irish, Old (to 900)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sgn",
				"iso639_2en": "sgn",
				"iso639_3": "sgn",
				"name": [
					"Sign Languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "shn",
				"iso639_2en": "shn",
				"iso639_3": "shn",
				"name": [
					"Shan"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sid",
				"iso639_2en": "sid",
				"iso639_3": "sid",
				"name": [
					"Sidamo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sio",
				"iso639_2en": "sio",
				"iso639_3": "sio",
				"name": [
					"Siouan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sit",
				"iso639_2en": "sit",
				"iso639_3": "sit",
				"name": [
					"Sino-Tibetan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sla",
				"iso639_2en": "sla",
				"iso639_3": "sla",
				"name": [
					"Slavic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sma",
				"iso639_2en": "sma",
				"iso639_3": "sma",
				"name": [
					"Southern Sami"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "smi",
				"iso639_2en": "smi",
				"iso639_3": "smi",
				"name": [
					"Sami languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "smj",
				"iso639_2en": "smj",
				"iso639_3": "smj",
				"name": [
					"Lule Sami"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "smn",
				"iso639_2en": "smn",
				"iso639_3": "smn",
				"name": [
					"Inari Sami"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sms",
				"iso639_2en": "sms",
				"iso639_3": "sms",
				"name": [
					"Skolt Sami"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "snk",
				"iso639_2en": "snk",
				"iso639_3": "snk",
				"name": [
					"Soninke"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"MLI",
					"SEN"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "sog",
				"iso639_2en": "sog",
				"iso639_3": "sog",
				"name": [
					"Sogdian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "son",
				"iso639_2en": "son",
				"iso639_3": "son",
				"name": [
					"Songhai languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "srn",
				"iso639_2en": "srn",
				"iso639_3": "srn",
				"name": [
					"Sranan Tongo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "srr",
				"iso639_2en": "srr",
				"iso639_3": "srr",
				"name": [
					"Serer"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"SEN"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "ssa",
				"iso639_2en": "ssa",
				"iso639_3": "ssa",
				"name": [
					"Nilo-Saharan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "suk",
				"iso639_2en": "suk",
				"iso639_3": "suk",
				"name": [
					"Sukuma"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sus",
				"iso639_2en": "sus",
				"iso639_3": "sus",
				"name": [
					"Susu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "sux",
				"iso639_2en": "sux",
				"iso639_3": "sux",
				"name": [
					"Sumerian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "syc",
				"iso639_2en": "syc",
				"iso639_3": "syc",
				"name": [
					"Classical Syriac"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "syr",
				"iso639_2en": "syr",
				"iso639_3": "syr",
				"name": [
					"Syriac"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"langCultureMs": [
					{
						"langCultureName": "syr-SY",
						"displayName": "Syriac - Syria",
						"cultureCode": "0x045A"
					}
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "tai",
				"iso639_2en": "tai",
				"iso639_3": "tai",
				"name": [
					"Tai languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tem",
				"iso639_2en": "tem",
				"iso639_3": "tem",
				"name": [
					"Timne"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ter",
				"iso639_2en": "ter",
				"iso639_3": "ter",
				"name": [
					"Tereno"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tet",
				"iso639_2en": "tet",
				"iso639_3": "tet",
				"name": [
					"Tetum"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"TLS"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "tig",
				"iso639_2en": "tig",
				"iso639_3": "tig",
				"name": [
					"Tigre"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tiv",
				"iso639_2en": "tiv",
				"iso639_3": "tiv",
				"name": [
					"Tiv"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tkl",
				"iso639_2en": "tkl",
				"iso639_3": "tkl",
				"name": [
					"Tokelau"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tlh",
				"iso639_2en": "tlh",
				"iso639_3": "tlh",
				"name": [
					"Klingon",
					" tlhIngan-Hol"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tli",
				"iso639_2en": "tli",
				"iso639_3": "tli",
				"name": [
					"Tlingit"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tmh",
				"iso639_2en": "tmh",
				"iso639_3": "tmh",
				"name": [
					"Tamashek"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tog",
				"iso639_2en": "tog",
				"iso639_3": "tog",
				"name": [
					"Tonga (Nyasa)"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tpi",
				"iso639_2en": "tpi",
				"iso639_3": "tpi",
				"name": [
					"Tok Pisin"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"PNG"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "tsi",
				"iso639_2en": "tsi",
				"iso639_3": "tsi",
				"name": [
					"Tsimshian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tum",
				"iso639_2en": "tum",
				"iso639_3": "tum",
				"name": [
					"Tumbuka"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tup",
				"iso639_2en": "tup",
				"iso639_3": "tup",
				"name": [
					"Tupi languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tut",
				"iso639_2en": "tut",
				"iso639_3": "tut",
				"name": [
					"Altaic languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tvl",
				"iso639_2en": "tvl",
				"iso639_3": "tvl",
				"name": [
					"Tuvalu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "tyv",
				"iso639_2en": "tyv",
				"iso639_3": "tyv",
				"name": [
					"Tuvinian"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "udm",
				"iso639_2en": "udm",
				"iso639_3": "udm",
				"name": [
					"Udmurt"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "uga",
				"iso639_2en": "uga",
				"iso639_3": "uga",
				"name": [
					"Ugaritic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "umb",
				"iso639_2en": "umb",
				"iso639_3": "umb",
				"name": [
					"Umbundu"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": "",
				"countries": [
					"AGO"
				]
			},
			{
				"iso639_1": "",
				"iso639_2": "und",
				"iso639_2en": "und",
				"iso639_3": "und",
				"name": [
					"Undetermined"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "vai",
				"iso639_2en": "vai",
				"iso639_3": "vai",
				"name": [
					"Vai"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "vot",
				"iso639_2en": "vot",
				"iso639_3": "vot",
				"name": [
					"Votic"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "wak",
				"iso639_2en": "wak",
				"iso639_3": "wak",
				"name": [
					"Wakashan languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "wal",
				"iso639_2en": "wal",
				"iso639_3": "wal",
				"name": [
					"Wolaitta",
					" Wolaytta"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "war",
				"iso639_2en": "war",
				"iso639_3": "war",
				"name": [
					"Waray"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "was",
				"iso639_2en": "was",
				"iso639_3": "was",
				"name": [
					"Washo"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "wen",
				"iso639_2en": "wen",
				"iso639_3": "wen",
				"name": [
					"Sorbian languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "xal",
				"iso639_2en": "xal",
				"iso639_3": "xal",
				"name": [
					"Kalmyk",
					" Oirat"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "yao",
				"iso639_2en": "yao",
				"iso639_3": "yao",
				"name": [
					"Yao"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "yap",
				"iso639_2en": "yap",
				"iso639_3": "yap",
				"name": [
					"Yapese"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "ypk",
				"iso639_2en": "ypk",
				"iso639_3": "ypk",
				"name": [
					"Yupik languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zap",
				"iso639_2en": "zap",
				"iso639_3": "zap",
				"name": [
					"Zapotec"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zbl",
				"iso639_2en": "zbl",
				"iso639_3": "zbl",
				"name": [
					"Blissymbols",
					" Blissymbolics",
					" Bliss"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zen",
				"iso639_2en": "zen",
				"iso639_3": "zen",
				"name": [
					"Zenaga"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zgh",
				"iso639_2en": "zgh",
				"iso639_3": "zgh",
				"name": [
					"Standard Moroccan Tamazight"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "znd",
				"iso639_2en": "znd",
				"iso639_3": "znd",
				"name": [
					"Zande languages"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zun",
				"iso639_2en": "zun",
				"iso639_3": "zun",
				"name": [
					"Zuni"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zxx",
				"iso639_2en": "zxx",
				"iso639_3": "zxx",
				"name": [
					"No linguistic content",
					" Not applicable"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			},
			{
				"iso639_1": "",
				"iso639_2": "zza",
				"iso639_2en": "zza",
				"iso639_3": "zza",
				"name": [
					"Zaza",
					" Dimili",
					" Dimli",
					" Kirdki",
					" Kirmanjki",
					" Zazaki"
				],
				"nativeName": [
					""
				],
				"directrion": "LTR",
				"family": ""
			}
		],
		"countries": [
			{
				"code_2": "AF",
				"code_3": "AFG",
				"numCode": "004",
				"name": "Afghanistan",
				"languages": [
					"prs",
					"pus",
					"fas"
				]
			},
			{
				"code_2": "AX",
				"code_3": "ALA",
				"numCode": "248",
				"name": "Åland Islands",
				"languages": [
					"swe"
				]
			},
			{
				"code_2": "AL",
				"code_3": "ALB",
				"numCode": "008",
				"name": "Albania",
				"languages": [
					"sqi"
				],
				"langCultureMs": [
					{
						"langCultureName": "sq-AL",
						"displayName": "Albanian - Albania",
						"cultureCode": "0x041C"
					}
				]
			},
			{
				"code_2": "DZ",
				"code_3": "DZA",
				"numCode": "012",
				"name": "Algeria",
				"languages": [
					"ara",
					"ber"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-DZ",
						"displayName": "Arabic - Algeria",
						"cultureCode": "0x1401"
					}
				]
			},
			{
				"code_2": "AS",
				"code_3": "ASM",
				"numCode": "016",
				"name": "American Samoa"
			},
			{
				"code_2": "AD",
				"code_3": "AND",
				"numCode": "020",
				"name": "Andorra",
				"languages": [
					"cat"
				]
			},
			{
				"code_2": "AO",
				"code_3": "AGO",
				"numCode": "024",
				"name": "Angola",
				"languages": [
					"kon",
					"kmb",
					"kua",
					"por",
					"umb"
				]
			},
			{
				"code_2": "AI",
				"code_3": "AIA",
				"numCode": "660",
				"name": "Anguilla"
			},
			{
				"code_2": "AQ",
				"code_3": "ATA",
				"numCode": "010",
				"name": "Antarctica"
			},
			{
				"code_2": "AG",
				"code_3": "ATG",
				"numCode": "028",
				"name": "Antigua and Barbuda",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "AR",
				"code_3": "ARG",
				"numCode": "032",
				"name": "Argentina",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-AR",
						"displayName": "Spanish - Argentina",
						"cultureCode": "0x2C0A"
					}
				]
			},
			{
				"code_2": "AM",
				"code_3": "ARM",
				"numCode": "051",
				"name": "Armenia",
				"languages": [
					"hye"
				],
				"langCultureMs": [
					{
						"langCultureName": "hy-AM",
						"displayName": "Armenian - Armenia",
						"cultureCode": "0x042B"
					}
				]
			},
			{
				"code_2": "AW",
				"code_3": "ABW",
				"numCode": "533",
				"name": "Aruba",
				"languages": [
					"nld",
					"pap"
				]
			},
			{
				"code_2": "AU",
				"code_3": "AUS",
				"numCode": "036",
				"name": "Australia",
				"languages": [
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-AU",
						"displayName": "English - Australia",
						"cultureCode": "0x0C09"
					}
				]
			},
			{
				"code_2": "AT",
				"code_3": "AUT",
				"numCode": "040",
				"name": "Austria",
				"languages": [
					"deu"
				],
				"langCultureMs": [
					{
						"langCultureName": "de-AT",
						"displayName": "German - Austria",
						"cultureCode": "0x0C07"
					}
				]
			},
			{
				"code_2": "AZ",
				"code_3": "AZE",
				"numCode": "031",
				"name": "Azerbaijan",
				"languages": [
					"aze"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-az-AZ",
						"displayName": "Azeri (Cyrillic) - Azerbaijan",
						"cultureCode": "0x082C"
					},
					{
						"langCultureName": "Lt-az-AZ",
						"displayName": "Azeri (Latin) - Azerbaijan",
						"cultureCode": "0x042C"
					}
				]
			},
			{
				"code_2": "BS",
				"code_3": "BHS",
				"numCode": "044",
				"name": "Bahamas",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "BH",
				"code_3": "BHR",
				"numCode": "048",
				"name": "Bahrain",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-BH",
						"displayName": "Arabic - Bahrain",
						"cultureCode": "0x3C01"
					}
				]
			},
			{
				"code_2": "BD",
				"code_3": "BGD",
				"numCode": "050",
				"name": "Bangladesh",
				"languages": [
					"ben"
				]
			},
			{
				"code_2": "BB",
				"code_3": "BRB",
				"numCode": "052",
				"name": "Barbados",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "BY",
				"code_3": "BLR",
				"numCode": "112",
				"name": "Belarus",
				"languages": [
					"bel",
					"rus"
				],
				"langCultureMs": [
					{
						"langCultureName": "be-BY",
						"displayName": "Belarusian - Belarus",
						"cultureCode": "0x0423"
					}
				]
			},
			{
				"code_2": "BE",
				"code_3": "BEL",
				"numCode": "056",
				"name": "Belgium",
				"languages": [
					"nld",
					"fra",
					"deu"
				],
				"langCultureMs": [
					{
						"langCultureName": "nl-BE",
						"displayName": "Dutch - Belgium",
						"cultureCode": "0x0813"
					},
					{
						"langCultureName": "fr-BE",
						"displayName": "French - Belgium",
						"cultureCode": "0x080C"
					}
				]
			},
			{
				"code_2": "BZ",
				"code_3": "BLZ",
				"numCode": "084",
				"name": "Belize",
				"languages": [
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-BZ",
						"displayName": "English - Belize",
						"cultureCode": "0x2809"
					}
				]
			},
			{
				"code_2": "BJ",
				"code_3": "BEN",
				"numCode": "204",
				"name": "Benin",
				"languages": [
					"fra",
					"ful",
					"yor"
				]
			},
			{
				"code_2": "BM",
				"code_3": "BMU",
				"numCode": "060",
				"name": "Bermuda"
			},
			{
				"code_2": "BT",
				"code_3": "BTN",
				"numCode": "064",
				"name": "Bhutan",
				"languages": [
					"dzo"
				]
			},
			{
				"code_2": "BO",
				"code_3": "BOL",
				"numCode": "068",
				"name": "Bolivia, Plurinational State of",
				"languages": [
					"aym",
					"grn",
					"que",
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-BO",
						"displayName": "Spanish - Bolivia",
						"cultureCode": "0x400A"
					}
				]
			},
			{
				"code_2": "BQ",
				"code_3": "BES",
				"numCode": "535",
				"name": "Bonaire, Sint Eustatius and Saba"
			},
			{
				"code_2": "BA",
				"code_3": "BIH",
				"numCode": "070",
				"name": "Bosnia and Herzegovina",
				"languages": [
					"bos",
					"hrv",
					"srp"
				]
			},
			{
				"code_2": "BW",
				"code_3": "BWA",
				"numCode": "072",
				"name": "Botswana",
				"languages": [
					"eng",
					"tsn"
				]
			},
			{
				"code_2": "BV",
				"code_3": "BVT",
				"numCode": "074",
				"name": "Bouvet Island"
			},
			{
				"code_2": "BR",
				"code_3": "BRA",
				"numCode": "076",
				"name": "Brazil",
				"languages": [
					"por"
				],
				"langCultureMs": [
					{
						"langCultureName": "pt-BR",
						"displayName": "Portuguese - Brazil",
						"cultureCode": "0x0416"
					}
				]
			},
			{
				"code_2": "IO",
				"code_3": "IOT",
				"numCode": "086",
				"name": "British Indian Ocean Territory"
			},
			{
				"code_2": "BN",
				"code_3": "BRN",
				"numCode": "096",
				"name": "Brunei Darussalam",
				"languages": [
					"msa"
				],
				"langCultureMs": [
					{
						"langCultureName": "ms-BN",
						"displayName": "Malay - Brunei",
						"cultureCode": "0x083E"
					}
				]
			},
			{
				"code_2": "BG",
				"code_3": "BGR",
				"numCode": "100",
				"name": "Bulgaria",
				"languages": [
					"bul"
				],
				"langCultureMs": [
					{
						"langCultureName": "bg-BG",
						"displayName": "Bulgarian - Bulgaria",
						"cultureCode": "0x0402"
					}
				]
			},
			{
				"code_2": "BF",
				"code_3": "BFA",
				"numCode": "854",
				"name": "Burkina Faso",
				"languages": [
					"fra",
					"ful",
					"mos"
				]
			},
			{
				"code_2": "BI",
				"code_3": "BDI",
				"numCode": "108",
				"name": "Burundi",
				"languages": [
					"fra",
					"run"
				]
			},
			{
				"code_2": "KH",
				"code_3": "KHM",
				"numCode": "116",
				"name": "Cambodia",
				"languages": [
					"khm"
				]
			},
			{
				"code_2": "CM",
				"code_3": "CMR",
				"numCode": "120",
				"name": "Cameroon",
				"languages": [
					"eng",
					"fra"
				]
			},
			{
				"code_2": "CA",
				"code_3": "CAN",
				"numCode": "124",
				"name": "Canada",
				"languages": [
					"eng",
					"fra"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-CA",
						"displayName": "English - Canada",
						"cultureCode": "0x1009"
					},
					{
						"langCultureName": "fr-CA",
						"displayName": "French - Canada",
						"cultureCode": "0x0C0C"
					}
				]
			},
			{
				"code_2": "CV",
				"code_3": "CPV",
				"numCode": "132",
				"name": "Cape Verde",
				"languages": [
					"por"
				]
			},
			{
				"code_2": "KY",
				"code_3": "CYM",
				"numCode": "136",
				"name": "Cayman Islands"
			},
			{
				"code_2": "CF",
				"code_3": "CAF",
				"numCode": "140",
				"name": "Central African Republic",
				"languages": [
					"fra",
					"sag"
				]
			},
			{
				"code_2": "TD",
				"code_3": "TCD",
				"numCode": "148",
				"name": "Chad",
				"languages": [
					"ara",
					"fra"
				]
			},
			{
				"code_2": "CL",
				"code_3": "CHL",
				"numCode": "152",
				"name": "Chile",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-CL",
						"displayName": "Spanish - Chile",
						"cultureCode": "0x340A"
					}
				]
			},
			{
				"code_2": "CN",
				"code_3": "CHN",
				"numCode": "156",
				"name": "China",
				"languages": [
					"zho"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-CN",
						"displayName": "Chinese - China",
						"cultureCode": "0x0804"
					},
					{
						"langCultureName": "zh-CHS",
						"displayName": "Chinese (Simplified)",
						"cultureCode": "0x0004"
					},
					{
						"langCultureName": "zh-CHT",
						"displayName": "Chinese (Traditional)",
						"cultureCode": "0x7C04"
					}
				]
			},
			{
				"code_2": "CX",
				"code_3": "CXR",
				"numCode": "162",
				"name": "Christmas Island"
			},
			{
				"code_2": "CC",
				"code_3": "CCK",
				"numCode": "166",
				"name": "Cocos (Keeling) Islands"
			},
			{
				"code_2": "CO",
				"code_3": "COL",
				"numCode": "170",
				"name": "Colombia",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-CO",
						"displayName": "Spanish - Colombia",
						"cultureCode": "0x240A"
					}
				]
			},
			{
				"code_2": "KM",
				"code_3": "COM",
				"numCode": "174",
				"name": "Comoros",
				"languages": [
					"ara",
					"fra"
				]
			},
			{
				"code_2": "CG",
				"code_3": "COG",
				"numCode": "178",
				"name": "Congo",
				"languages": [
					"fra",
					"kon",
					"lin"
				]
			},
			{
				"code_2": "CD",
				"code_3": "COD",
				"numCode": "180",
				"name": "Congo, the Democratic Republic of the",
				"languages": [
					"fra",
					"kon",
					"lin",
					"swa",
					"lub"
				]
			},
			{
				"code_2": "CK",
				"code_3": "COK",
				"numCode": "184",
				"name": "Cook Islands"
			},
			{
				"code_2": "CR",
				"code_3": "CRI",
				"numCode": "188",
				"name": "Costa Rica",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-CR",
						"displayName": "Spanish - Costa Rica",
						"cultureCode": "0x140A"
					}
				]
			},
			{
				"code_2": "CI",
				"code_3": "CIV",
				"numCode": "384",
				"name": "Côte d'Ivoire",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "HR",
				"code_3": "HRV",
				"numCode": "191",
				"name": "Croatia",
				"languages": [
					"hrv",
					"ita"
				],
				"langCultureMs": [
					{
						"langCultureName": "hr-HR",
						"displayName": "Croatian - Croatia",
						"cultureCode": "0x041A"
					}
				]
			},
			{
				"code_2": "CU",
				"code_3": "CUB",
				"numCode": "192",
				"name": "Cuba",
				"languages": [
					"spa"
				]
			},
			{
				"code_2": "CW",
				"code_3": "CUW",
				"numCode": "531",
				"name": "Curaçao",
				"languages": [
					"nld",
					"eng",
					"pap"
				]
			},
			{
				"code_2": "CY",
				"code_3": "CYP",
				"numCode": "196",
				"name": "Cyprus",
				"languages": [
					"ell",
					"tur"
				]
			},
			{
				"code_2": "CZ",
				"code_3": "CZE",
				"numCode": "203",
				"name": "Czech Republic",
				"languages": [
					"ces",
					"slk"
				],
				"langCultureMs": [
					{
						"langCultureName": "cs-CZ",
						"displayName": "Czech - Czech Republic",
						"cultureCode": "0x0405"
					}
				]
			},
			{
				"code_2": "DK",
				"code_3": "DNK",
				"numCode": "208",
				"name": "Denmark",
				"languages": [
					"dan"
				],
				"langCultureMs": [
					{
						"langCultureName": "da-DK",
						"displayName": "Danish - Denmark",
						"cultureCode": "0x0406"
					}
				]
			},
			{
				"code_2": "DJ",
				"code_3": "DJI",
				"numCode": "262",
				"name": "Djibouti",
				"languages": [
					"aar",
					"ara",
					"fra",
					"som"
				]
			},
			{
				"code_2": "DM",
				"code_3": "DMA",
				"numCode": "212",
				"name": "Dominica",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "DO",
				"code_3": "DOM",
				"numCode": "214",
				"name": "Dominican Republic",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-DO",
						"displayName": "Spanish - Dominican Republic",
						"cultureCode": "0x1C0A"
					}
				]
			},
			{
				"code_2": "EC",
				"code_3": "ECU",
				"numCode": "218",
				"name": "Ecuador",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-EC",
						"displayName": "Spanish - Ecuador",
						"cultureCode": "0x300A"
					}
				]
			},
			{
				"code_2": "EG",
				"code_3": "EGY",
				"numCode": "818",
				"name": "Egypt",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-EG",
						"displayName": "Arabic - Egypt",
						"cultureCode": "0x0C01"
					}
				]
			},
			{
				"code_2": "SV",
				"code_3": "SLV",
				"numCode": "222",
				"name": "El Salvador",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-SV",
						"displayName": "Spanish - El Salvador",
						"cultureCode": "0x440A"
					}
				]
			},
			{
				"code_2": "GQ",
				"code_3": "GNQ",
				"numCode": "226",
				"name": "Equatorial Guinea",
				"languages": [
					"fra",
					"por",
					"spa"
				]
			},
			{
				"code_2": "ER",
				"code_3": "ERI",
				"numCode": "232",
				"name": "Eritrea",
				"languages": [
					"ara",
					"eng",
					"tir"
				]
			},
			{
				"code_2": "EE",
				"code_3": "EST",
				"numCode": "233",
				"name": "Estonia",
				"languages": [
					"est"
				],
				"langCultureMs": [
					{
						"langCultureName": "et-EE",
						"displayName": "Estonian - Estonia",
						"cultureCode": "0x0425"
					}
				]
			},
			{
				"code_2": "ET",
				"code_3": "ETH",
				"numCode": "231",
				"name": "Ethiopia",
				"languages": [
					"amh"
				]
			},
			{
				"code_2": "FK",
				"code_3": "FLK",
				"numCode": "238",
				"name": "Falkland Islands (Malvinas)"
			},
			{
				"code_2": "FO",
				"code_3": "FRO",
				"numCode": "234",
				"name": "Faroe Islands",
				"languages": [
					"dan"
				],
				"langCultureMs": [
					{
						"langCultureName": "fo-FO",
						"displayName": "Faroese - Faroe Islands",
						"cultureCode": "0x0438"
					}
				]
			},
			{
				"code_2": "FJ",
				"code_3": "FJI",
				"numCode": "242",
				"name": "Fiji",
				"languages": [
					"eng",
					"fij",
					"hin",
					"urd"
				]
			},
			{
				"code_2": "FI",
				"code_3": "FIN",
				"numCode": "246",
				"name": "Finland",
				"languages": [
					"fin",
					"swe"
				],
				"langCultureMs": [
					{
						"langCultureName": "fi-FI",
						"displayName": "Finnish - Finland",
						"cultureCode": "0x040B"
					},
					{
						"langCultureName": "sv-FI",
						"displayName": "Swedish - Finland",
						"cultureCode": "0x081D"
					}
				]
			},
			{
				"code_2": "FR",
				"code_3": "FRA",
				"numCode": "250",
				"name": "France",
				"languages": [
					"fra"
				],
				"langCultureMs": [
					{
						"langCultureName": "fr-FR",
						"displayName": "French - France",
						"cultureCode": "0x040C"
					}
				]
			},
			{
				"code_2": "GF",
				"code_3": "GUF",
				"numCode": "254",
				"name": "French Guiana",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "PF",
				"code_3": "PYF",
				"numCode": "258",
				"name": "French Polynesia",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "TF",
				"code_3": "ATF",
				"numCode": "260",
				"name": "French Southern Territories"
			},
			{
				"code_2": "GA",
				"code_3": "GAB",
				"numCode": "266",
				"name": "Gabon",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "GM",
				"code_3": "GMB",
				"numCode": "270",
				"name": "Gambia",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "GE",
				"code_3": "GEO",
				"numCode": "268",
				"name": "Georgia",
				"languages": [
					"kat"
				],
				"langCultureMs": [
					{
						"langCultureName": "ka-GE",
						"displayName": "Georgian - Georgia",
						"cultureCode": "0x0437"
					}
				]
			},
			{
				"code_2": "DE",
				"code_3": "DEU",
				"numCode": "276",
				"name": "Germany",
				"languages": [
					"deu"
				],
				"langCultureMs": [
					{
						"langCultureName": "de-DE",
						"displayName": "German - Germany",
						"cultureCode": "0x0407"
					}
				]
			},
			{
				"code_2": "GH",
				"code_3": "GHA",
				"numCode": "288",
				"name": "Ghana",
				"languages": [
					"aka",
					"eng",
					"ewe",
					"gaa"
				]
			},
			{
				"code_2": "GI",
				"code_3": "GIB",
				"numCode": "292",
				"name": "Gibraltar"
			},
			{
				"code_2": "GR",
				"code_3": "GRC",
				"numCode": "300",
				"name": "Greece",
				"languages": [
					"ell"
				],
				"langCultureMs": [
					{
						"langCultureName": "el-GR",
						"displayName": "Greek - Greece",
						"cultureCode": "0x0408"
					}
				]
			},
			{
				"code_2": "GL",
				"code_3": "GRL",
				"numCode": "304",
				"name": "Greenland"
			},
			{
				"code_2": "GD",
				"code_3": "GRD",
				"numCode": "308",
				"name": "Grenada",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "GP",
				"code_3": "GLP",
				"numCode": "312",
				"name": "Guadeloupe",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "GU",
				"code_3": "GUM",
				"numCode": "316",
				"name": "Guam"
			},
			{
				"code_2": "GT",
				"code_3": "GTM",
				"numCode": "320",
				"name": "Guatemala",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-GT",
						"displayName": "Spanish - Guatemala",
						"cultureCode": "0x100A"
					}
				]
			},
			{
				"code_2": "GG",
				"code_3": "GGY",
				"numCode": "831",
				"name": "Guernsey"
			},
			{
				"code_2": "GN",
				"code_3": "GIN",
				"numCode": "324",
				"name": "Guinea",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "GW",
				"code_3": "GNB",
				"numCode": "624",
				"name": "Guinea-Bissau",
				"languages": [
					"por"
				]
			},
			{
				"code_2": "GY",
				"code_3": "GUY",
				"numCode": "328",
				"name": "Guyana",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "HT",
				"code_3": "HTI",
				"numCode": "332",
				"name": "Haiti",
				"languages": [
					"fra",
					"hat"
				]
			},
			{
				"code_2": "HM",
				"code_3": "HMD",
				"numCode": "334",
				"name": "Heard Island and McDonald Islands"
			},
			{
				"code_2": "VA",
				"code_3": "VAT",
				"numCode": "336",
				"name": "Holy See (Vatican City State)",
				"languages": [
					"ita",
					"lat"
				]
			},
			{
				"code_2": "HN",
				"code_3": "HND",
				"numCode": "340",
				"name": "Honduras",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-HN",
						"displayName": "Spanish - Honduras",
						"cultureCode": "0x480A"
					}
				]
			},
			{
				"code_2": "HK",
				"code_3": "HKG",
				"numCode": "344",
				"name": "Hong Kong",
				"languages": [
					"zho",
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-HK",
						"displayName": "Chinese - Hong Kong SAR",
						"cultureCode": "0x0C04"
					}
				]
			},
			{
				"code_2": "HU",
				"code_3": "HUN",
				"numCode": "348",
				"name": "Hungary",
				"languages": [
					"hun"
				],
				"langCultureMs": [
					{
						"langCultureName": "hu-HU",
						"displayName": "Hungarian - Hungary",
						"cultureCode": "0x040E"
					}
				]
			},
			{
				"code_2": "IS",
				"code_3": "ISL",
				"numCode": "352",
				"name": "Iceland",
				"languages": [
					"isl"
				],
				"langCultureMs": [
					{
						"langCultureName": "is-IS",
						"displayName": "Icelandic - Iceland",
						"cultureCode": "0x040F"
					}
				]
			},
			{
				"code_2": "IN",
				"code_3": "IND",
				"numCode": "356",
				"name": "India",
				"languages": [
					"ben",
					"eng",
					"guj",
					"hin",
					"pan",
					"tam",
					"tel"
				],
				"langCultureMs": [
					{
						"langCultureName": "gu-IN",
						"displayName": "Gujarati - India",
						"cultureCode": "0x0447"
					},
					{
						"langCultureName": "hi-IN",
						"displayName": "Hindi - India",
						"cultureCode": "0x0439"
					},
					{
						"langCultureName": "kn-IN",
						"displayName": "Kannada - India",
						"cultureCode": "0x044B"
					},
					{
						"langCultureName": "kok-IN",
						"displayName": "Konkani - India",
						"cultureCode": "0x0457"
					},
					{
						"langCultureName": "mr-IN",
						"displayName": "Marathi - India",
						"cultureCode": "0x044E"
					},
					{
						"langCultureName": "pa-IN",
						"displayName": "Punjabi - India",
						"cultureCode": "0x0446"
					},
					{
						"langCultureName": "sa-IN",
						"displayName": "Sanskrit - India",
						"cultureCode": "0x044F"
					},
					{
						"langCultureName": "ta-IN",
						"displayName": "Tamil - India",
						"cultureCode": "0x0449"
					},
					{
						"langCultureName": "te-IN",
						"displayName": "Telugu - India",
						"cultureCode": "0x044A"
					}
				]
			},
			{
				"code_2": "ID",
				"code_3": "IDN",
				"numCode": "360",
				"name": "Indonesia",
				"languages": [
					"ind",
					"msa"
				],
				"langCultureMs": [
					{
						"langCultureName": "id-ID",
						"displayName": "Indonesian - Indonesia",
						"cultureCode": "0x0421"
					}
				]
			},
			{
				"code_2": "IR",
				"code_3": "IRN",
				"numCode": "364",
				"name": "Iran, Islamic Republic of",
				"languages": [
					"fas"
				],
				"langCultureMs": [
					{
						"langCultureName": "fa-IR",
						"displayName": "Farsi - Iran",
						"cultureCode": "0x0429"
					}
				]
			},
			{
				"code_2": "IQ",
				"code_3": "IRQ",
				"numCode": "368",
				"name": "Iraq",
				"languages": [
					"ara",
					"kur"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-IQ",
						"displayName": "Arabic - Iraq",
						"cultureCode": "0x0801"
					}
				]
			},
			{
				"code_2": "IE",
				"code_3": "IRL",
				"numCode": "372",
				"name": "Ireland",
				"languages": [
					"eng",
					"gle"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-IE",
						"displayName": "English - Ireland",
						"cultureCode": "0x1809"
					}
				]
			},
			{
				"code_2": "IM",
				"code_3": "IMN",
				"numCode": "833",
				"name": "Isle of Man"
			},
			{
				"code_2": "IL",
				"code_3": "ISR",
				"numCode": "376",
				"name": "Israel",
				"languages": [
					"ara",
					"heb"
				],
				"langCultureMs": [
					{
						"langCultureName": "he-IL",
						"displayName": "Hebrew - Israel",
						"cultureCode": "0x040D"
					}
				]
			},
			{
				"code_2": "IT",
				"code_3": "ITA",
				"numCode": "380",
				"name": "Italy",
				"languages": [
					"fra",
					"deu",
					"ita"
				],
				"langCultureMs": [
					{
						"langCultureName": "it-IT",
						"displayName": "Italian - Italy",
						"cultureCode": "0x0410"
					}
				]
			},
			{
				"code_2": "JM",
				"code_3": "JAM",
				"numCode": "388",
				"name": "Jamaica",
				"languages": [
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-JM",
						"displayName": "English - Jamaica",
						"cultureCode": "0x2009"
					}
				]
			},
			{
				"code_2": "JP",
				"code_3": "JPN",
				"numCode": "392",
				"name": "Japan",
				"languages": [
					"jpn"
				],
				"langCultureMs": [
					{
						"langCultureName": "ja-JP",
						"displayName": "Japanese - Japan",
						"cultureCode": "0x0411"
					}
				]
			},
			{
				"code_2": "JE",
				"code_3": "JEY",
				"numCode": "832",
				"name": "Jersey",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "JO",
				"code_3": "JOR",
				"numCode": "400",
				"name": "Jordan",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-JO",
						"displayName": "Arabic - Jordan",
						"cultureCode": "0x2C01"
					}
				]
			},
			{
				"code_2": "KZ",
				"code_3": "KAZ",
				"numCode": "398",
				"name": "Kazakhstan",
				"languages": [
					"kaz",
					"rus"
				],
				"langCultureMs": [
					{
						"langCultureName": "kk-KZ",
						"displayName": "Kazakh - Kazakhstan",
						"cultureCode": "0x043F"
					},
					{
						"langCultureName": "ky-KZ",
						"displayName": "Kyrgyz - Kazakhstan",
						"cultureCode": "0x0440"
					}
				]
			},
			{
				"code_2": "KE",
				"code_3": "KEN",
				"numCode": "404",
				"name": "Kenya",
				"languages": [
					"eng",
					"swa"
				],
				"langCultureMs": [
					{
						"langCultureName": "sw-KE",
						"displayName": "Swahili - Kenya",
						"cultureCode": "0x0441"
					}
				]
			},
			{
				"code_2": "KI",
				"code_3": "KIR",
				"numCode": "296",
				"name": "Kiribati",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "KP",
				"code_3": "PRK",
				"numCode": "408",
				"name": "Korea, Democratic People's Republic of",
				"languages": [
					"kor"
				]
			},
			{
				"code_2": "KR",
				"code_3": "KOR",
				"numCode": "410",
				"name": "Korea, Republic of",
				"languages": [
					"kor"
				],
				"langCultureMs": [
					{
						"langCultureName": "ko-KR",
						"displayName": "Korean - Korea",
						"cultureCode": "0x0412"
					}
				]
			},
			{
				"code_2": "KW",
				"code_3": "KWT",
				"numCode": "414",
				"name": "Kuwait",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-KW",
						"displayName": "Arabic - Kuwait",
						"cultureCode": "0x3401"
					}
				]
			},
			{
				"code_2": "KG",
				"code_3": "KGZ",
				"numCode": "417",
				"name": "Kyrgyzstan",
				"languages": [
					"kir",
					"rus"
				]
			},
			{
				"code_2": "LA",
				"code_3": "LAO",
				"numCode": "418",
				"name": "Lao People's Democratic Republic",
				"languages": [
					"lao"
				]
			},
			{
				"code_2": "LV",
				"code_3": "LVA",
				"numCode": "428",
				"name": "Latvia",
				"languages": [
					"lav"
				],
				"langCultureMs": [
					{
						"langCultureName": "lv-LV",
						"displayName": "Latvian - Latvia",
						"cultureCode": "0x0426"
					}
				]
			},
			{
				"code_2": "LB",
				"code_3": "LBN",
				"numCode": "422",
				"name": "Lebanon",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-LB",
						"displayName": "Arabic - Lebanon",
						"cultureCode": "0x3001"
					}
				]
			},
			{
				"code_2": "LS",
				"code_3": "LSO",
				"numCode": "426",
				"name": "Lesotho",
				"languages": [
					"eng",
					"sot"
				]
			},
			{
				"code_2": "LR",
				"code_3": "LBR",
				"numCode": "430",
				"name": "Liberia",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "LY",
				"code_3": "LBY",
				"numCode": "434",
				"name": "Libya",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-LY",
						"displayName": "Arabic - Libya",
						"cultureCode": "0x1001"
					}
				]
			},
			{
				"code_2": "LI",
				"code_3": "LIE",
				"numCode": "438",
				"name": "Liechtenstein",
				"languages": [
					"deu"
				],
				"langCultureMs": [
					{
						"langCultureName": "de-LI",
						"displayName": "German - Liechtenstein",
						"cultureCode": "0x1407"
					}
				]
			},
			{
				"code_2": "LT",
				"code_3": "LTU",
				"numCode": "440",
				"name": "Lithuania",
				"languages": [
					"lit"
				],
				"langCultureMs": [
					{
						"langCultureName": "lt-LT",
						"displayName": "Lithuanian - Lithuania",
						"cultureCode": "0x0427"
					}
				]
			},
			{
				"code_2": "LU",
				"code_3": "LUX",
				"numCode": "442",
				"name": "Luxembourg",
				"languages": [
					"fra",
					"deu",
					"ltz"
				],
				"langCultureMs": [
					{
						"langCultureName": "fr-LU",
						"displayName": "French - Luxembourg",
						"cultureCode": "0x140C"
					},
					{
						"langCultureName": "de-LU",
						"displayName": "German - Luxembourg",
						"cultureCode": "0x1007"
					}
				]
			},
			{
				"code_2": "MO",
				"code_3": "MAC",
				"numCode": "446",
				"name": "Macao",
				"languages": [
					"zho",
					"por"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-MO",
						"displayName": "Chinese - Macau SAR",
						"cultureCode": "0x1404"
					}
				]
			},
			{
				"code_2": "MK",
				"code_3": "MKD",
				"numCode": "807",
				"name": "Macedonia, the former Yugoslav Republic of",
				"languages": [
					"mkd"
				],
				"langCultureMs": [
					{
						"langCultureName": "mk-MK",
						"displayName": "Macedonian (FYROM)",
						"cultureCode": "0x042F"
					}
				]
			},
			{
				"code_2": "MG",
				"code_3": "MDG",
				"numCode": "450",
				"name": "Madagascar",
				"languages": [
					"fra",
					"mlg"
				]
			},
			{
				"code_2": "MW",
				"code_3": "MWI",
				"numCode": "454",
				"name": "Malawi",
				"languages": [
					"nya",
					"eng"
				]
			},
			{
				"code_2": "MY",
				"code_3": "MYS",
				"numCode": "458",
				"name": "Malaysia",
				"languages": [
					"eng",
					"msa",
					"tam"
				],
				"langCultureMs": [
					{
						"langCultureName": "ms-MY",
						"displayName": "Malay - Malaysia",
						"cultureCode": "0x043E"
					}
				]
			},
			{
				"code_2": "MV",
				"code_3": "MDV",
				"numCode": "462",
				"name": "Maldives",
				"languages": [
					"div"
				],
				"langCultureMs": [
					{
						"langCultureName": "div-MV",
						"displayName": "Dhivehi - Maldives",
						"cultureCode": "0x0465"
					}
				]
			},
			{
				"code_2": "ML",
				"code_3": "MLI",
				"numCode": "466",
				"name": "Mali",
				"languages": [
					"bam",
					"fra",
					"ful",
					"snk"
				]
			},
			{
				"code_2": "MT",
				"code_3": "MLT",
				"numCode": "470",
				"name": "Malta",
				"languages": [
					"eng",
					"mlt"
				]
			},
			{
				"code_2": "MH",
				"code_3": "MHL",
				"numCode": "584",
				"name": "Marshall Islands",
				"languages": [
					"eng",
					"mah"
				]
			},
			{
				"code_2": "MQ",
				"code_3": "MTQ",
				"numCode": "474",
				"name": "Martinique",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "MR",
				"code_3": "MRT",
				"numCode": "478",
				"name": "Mauritania",
				"languages": [
					"ara"
				]
			},
			{
				"code_2": "MU",
				"code_3": "MUS",
				"numCode": "480",
				"name": "Mauritius",
				"languages": [
					"eng",
					"fra",
					"tam"
				]
			},
			{
				"code_2": "YT",
				"code_3": "MYT",
				"numCode": "175",
				"name": "Mayotte",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "MX",
				"code_3": "MEX",
				"numCode": "484",
				"name": "Mexico",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-MX",
						"displayName": "Spanish - Mexico",
						"cultureCode": "0x080A"
					}
				]
			},
			{
				"code_2": "FM",
				"code_3": "FSM",
				"numCode": "583",
				"name": "Micronesia, Federated States of",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "MD",
				"code_3": "MDA",
				"numCode": "498",
				"name": "Moldova, Republic of",
				"languages": [
					"ron"
				]
			},
			{
				"code_2": "MC",
				"code_3": "MCO",
				"numCode": "492",
				"name": "Monaco",
				"languages": [
					"fra"
				],
				"langCultureMs": [
					{
						"langCultureName": "fr-MC",
						"displayName": "French - Monaco",
						"cultureCode": "0x180C"
					}
				]
			},
			{
				"code_2": "MN",
				"code_3": "MNG",
				"numCode": "496",
				"name": "Mongolia",
				"languages": [
					"mon"
				],
				"langCultureMs": [
					{
						"langCultureName": "mn-MN",
						"displayName": "Mongolian - Mongolia",
						"cultureCode": "0x0450"
					}
				]
			},
			{
				"code_2": "ME",
				"code_3": "MNE",
				"numCode": "499",
				"name": "Montenegro"
			},
			{
				"code_2": "MS",
				"code_3": "MSR",
				"numCode": "500",
				"name": "Montserrat"
			},
			{
				"code_2": "MA",
				"code_3": "MAR",
				"numCode": "504",
				"name": "Morocco",
				"languages": [
					"ara",
					"ber"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-MA",
						"displayName": "Arabic - Morocco",
						"cultureCode": "0x1801"
					}
				]
			},
			{
				"code_2": "MZ",
				"code_3": "MOZ",
				"numCode": "508",
				"name": "Mozambique",
				"languages": [
					"por"
				]
			},
			{
				"code_2": "MM",
				"code_3": "MMR",
				"numCode": "104",
				"name": "Myanmar",
				"languages": [
					"mya"
				]
			},
			{
				"code_2": "NA",
				"code_3": "NAM",
				"numCode": "516",
				"name": "Namibia",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "NR",
				"code_3": "NRU",
				"numCode": "520",
				"name": "Nauru",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "NP",
				"code_3": "NPL",
				"numCode": "524",
				"name": "Nepal",
				"languages": [
					"nep"
				]
			},
			{
				"code_2": "NL",
				"code_3": "NLD",
				"numCode": "528",
				"name": "Netherlands",
				"languages": [
					"nld"
				],
				"langCultureMs": [
					{
						"langCultureName": "nl-NL",
						"displayName": "Dutch - The Netherlands",
						"cultureCode": "0x0413"
					}
				]
			},
			{
				"code_2": "NC",
				"code_3": "NCL",
				"numCode": "540",
				"name": "New Caledonia",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "NZ",
				"code_3": "NZL",
				"numCode": "554",
				"name": "New Zealand",
				"languages": [
					"eng",
					"mri"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-NZ",
						"displayName": "English - New Zealand",
						"cultureCode": "0x1409"
					}
				]
			},
			{
				"code_2": "NI",
				"code_3": "NIC",
				"numCode": "558",
				"name": "Nicaragua",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-NI",
						"displayName": "Spanish - Nicaragua",
						"cultureCode": "0x4C0A"
					}
				]
			},
			{
				"code_2": "NE",
				"code_3": "NER",
				"numCode": "562",
				"name": "Niger",
				"languages": [
					"ara",
					"fra",
					"ful",
					"hau",
					"kau"
				]
			},
			{
				"code_2": "NG",
				"code_3": "NGA",
				"numCode": "566",
				"name": "Nigeria",
				"languages": [
					"eng",
					"hau",
					"ibo",
					"yor"
				]
			},
			{
				"code_2": "NU",
				"code_3": "NIU",
				"numCode": "570",
				"name": "Niue"
			},
			{
				"code_2": "NF",
				"code_3": "NFK",
				"numCode": "574",
				"name": "Norfolk Island"
			},
			{
				"code_2": "MP",
				"code_3": "MNP",
				"numCode": "580",
				"name": "Northern Mariana Islands"
			},
			{
				"code_2": "NO",
				"code_3": "NOR",
				"numCode": "578",
				"name": "Norway",
				"languages": [
					"nob",
					"nno",
					"nor"
				],
				"langCultureMs": [
					{
						"langCultureName": "nb-NO",
						"displayName": "Norwegian (Bokmål) - Norway",
						"cultureCode": "0x0414"
					},
					{
						"langCultureName": "nn-NO",
						"displayName": "Norwegian (Nynorsk) - Norway",
						"cultureCode": "0x0814"
					}
				]
			},
			{
				"code_2": "OM",
				"code_3": "OMN",
				"numCode": "512",
				"name": "Oman",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-OM",
						"displayName": "Arabic - Oman",
						"cultureCode": "0x2001"
					}
				]
			},
			{
				"code_2": "PK",
				"code_3": "PAK",
				"numCode": "586",
				"name": "Pakistan",
				"languages": [
					"eng",
					"urd"
				],
				"langCultureMs": [
					{
						"langCultureName": "ur-PK",
						"displayName": "Urdu - Pakistan",
						"cultureCode": "0x0420"
					}
				]
			},
			{
				"code_2": "PW",
				"code_3": "PLW",
				"numCode": "585",
				"name": "Palau",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "PS",
				"code_3": "PSE",
				"numCode": "275",
				"name": "Palestine, State of"
			},
			{
				"code_2": "PA",
				"code_3": "PAN",
				"numCode": "591",
				"name": "Panama",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-PA",
						"displayName": "Spanish - Panama",
						"cultureCode": "0x180A"
					}
				]
			},
			{
				"code_2": "PG",
				"code_3": "PNG",
				"numCode": "598",
				"name": "Papua New Guinea",
				"languages": [
					"eng",
					"hmo",
					"tpi"
				]
			},
			{
				"code_2": "PY",
				"code_3": "PRY",
				"numCode": "600",
				"name": "Paraguay",
				"languages": [
					"grn",
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-PY",
						"displayName": "Spanish - Paraguay",
						"cultureCode": "0x3C0A"
					}
				]
			},
			{
				"code_2": "PE",
				"code_3": "PER",
				"numCode": "604",
				"name": "Peru",
				"languages": [
					"aym",
					"que",
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-PE",
						"displayName": "Spanish - Peru",
						"cultureCode": "0x280A"
					}
				]
			},
			{
				"code_2": "PH",
				"code_3": "PHL",
				"numCode": "608",
				"name": "Philippines",
				"languages": [
					"eng",
					"fil",
					"tgl"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-PH",
						"displayName": "English - Philippines",
						"cultureCode": "0x3409"
					}
				]
			},
			{
				"code_2": "PN",
				"code_3": "PCN",
				"numCode": "612",
				"name": "Pitcairn"
			},
			{
				"code_2": "PL",
				"code_3": "POL",
				"numCode": "616",
				"name": "Poland",
				"languages": [
					"pol"
				],
				"langCultureMs": [
					{
						"langCultureName": "pl-PL",
						"displayName": "Polish - Poland",
						"cultureCode": "0x0415"
					}
				]
			},
			{
				"code_2": "PT",
				"code_3": "PRT",
				"numCode": "620",
				"name": "Portugal",
				"languages": [
					"por"
				],
				"langCultureMs": [
					{
						"langCultureName": "pt-PT",
						"displayName": "Portuguese - Portugal",
						"cultureCode": "0x0816"
					}
				]
			},
			{
				"code_2": "PR",
				"code_3": "PRI",
				"numCode": "630",
				"name": "Puerto Rico",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-PR",
						"displayName": "Spanish - Puerto Rico",
						"cultureCode": "0x500A"
					}
				]
			},
			{
				"code_2": "QA",
				"code_3": "QAT",
				"numCode": "634",
				"name": "Qatar",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-QA",
						"displayName": "Arabic - Qatar",
						"cultureCode": "0x4001"
					}
				]
			},
			{
				"code_2": "RE",
				"code_3": "REU",
				"numCode": "638",
				"name": "Réunion",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "RO",
				"code_3": "ROU",
				"numCode": "642",
				"name": "Romania",
				"languages": [
					"ron"
				],
				"langCultureMs": [
					{
						"langCultureName": "ro-RO",
						"displayName": "Romanian - Romania",
						"cultureCode": "0x0418"
					}
				]
			},
			{
				"code_2": "RU",
				"code_3": "RUS",
				"numCode": "643",
				"name": "Russian Federation",
				"languages": [
					"rus"
				],
				"langCultureMs": [
					{
						"langCultureName": "ru-RU",
						"displayName": "Russian - Russia",
						"cultureCode": "0x0419"
					},
					{
						"langCultureName": "tt-RU",
						"displayName": "Tatar - Russia",
						"cultureCode": "0x0444"
					}
				]
			},
			{
				"code_2": "RW",
				"code_3": "RWA",
				"numCode": "646",
				"name": "Rwanda",
				"languages": [
					"eng",
					"fra",
					"kin"
				]
			},
			{
				"code_2": "BL",
				"code_3": "BLM",
				"numCode": "652",
				"name": "Saint Barthélemy",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "SH",
				"code_3": "SHN",
				"numCode": "654",
				"name": "Saint Helena, Ascension and Tristan da Cunha"
			},
			{
				"code_2": "KN",
				"code_3": "KNA",
				"numCode": "659",
				"name": "Saint Kitts and Nevis",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "LC",
				"code_3": "LCA",
				"numCode": "662",
				"name": "Saint Lucia",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "MF",
				"code_3": "MAF",
				"numCode": "663",
				"name": "Saint Martin (French part)"
			},
			{
				"code_2": "PM",
				"code_3": "SPM",
				"numCode": "666",
				"name": "Saint Pierre and Miquelon",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "VC",
				"code_3": "VCT",
				"numCode": "670",
				"name": "Saint Vincent and the Grenadines",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "WS",
				"code_3": "WSM",
				"numCode": "882",
				"name": "Samoa",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "SM",
				"code_3": "SMR",
				"numCode": "674",
				"name": "San Marino",
				"languages": [
					"ita"
				]
			},
			{
				"code_2": "ST",
				"code_3": "STP",
				"numCode": "678",
				"name": "Sao Tome and Principe",
				"languages": [
					"por"
				]
			},
			{
				"code_2": "SA",
				"code_3": "SAU",
				"numCode": "682",
				"name": "Saudi Arabia",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-SA",
						"displayName": "Arabic - Saudi Arabia",
						"cultureCode": "0x0401"
					}
				]
			},
			{
				"code_2": "SN",
				"code_3": "SEN",
				"numCode": "686",
				"name": "Senegal",
				"languages": [
					"fra",
					"ful",
					"srr",
					"snk",
					"wol"
				]
			},
			{
				"code_2": "RS",
				"code_3": "SRB",
				"numCode": "688",
				"name": "Serbia",
				"languages": [
					"srp"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-sr-SP",
						"displayName": "Serbian (Cyrillic) - Serbia",
						"cultureCode": "0x0C1A"
					},
					{
						"langCultureName": "Lt-sr-SP",
						"displayName": "Serbian (Latin) - Serbia",
						"cultureCode": "0x081A"
					}
				]
			},
			{
				"code_2": "SC",
				"code_3": "SYC",
				"numCode": "690",
				"name": "Seychelles",
				"languages": [
					"eng",
					"fra"
				]
			},
			{
				"code_2": "SL",
				"code_3": "SLE",
				"numCode": "694",
				"name": "Sierra Leone",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "SG",
				"code_3": "SGP",
				"numCode": "702",
				"name": "Singapore",
				"languages": [
					"zho",
					"eng",
					"msa",
					"tam"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-SG",
						"displayName": "Chinese - Singapore",
						"cultureCode": "0x1004"
					}
				]
			},
			{
				"code_2": "SX",
				"code_3": "SXM",
				"numCode": "534",
				"name": "Sint Maarten (Dutch part)",
				"languages": [
					"nld",
					"eng"
				]
			},
			{
				"code_2": "SK",
				"code_3": "SVK",
				"numCode": "703",
				"name": "Slovakia",
				"languages": [
					"ces",
					"slk"
				],
				"langCultureMs": [
					{
						"langCultureName": "sk-SK",
						"displayName": "Slovak - Slovakia",
						"cultureCode": "0x041B"
					}
				]
			},
			{
				"code_2": "SI",
				"code_3": "SVN",
				"numCode": "705",
				"name": "Slovenia",
				"languages": [
					"ita",
					"slv"
				],
				"langCultureMs": [
					{
						"langCultureName": "sl-SI",
						"displayName": "Slovenian - Slovenia",
						"cultureCode": "0x0424"
					}
				]
			},
			{
				"code_2": "SB",
				"code_3": "SLB",
				"numCode": "090",
				"name": "Solomon Islands",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "SO",
				"code_3": "SOM",
				"numCode": "706",
				"name": "Somalia",
				"languages": [
					"ara",
					"som"
				]
			},
			{
				"code_2": "ZA",
				"code_3": "ZAF",
				"numCode": "710",
				"name": "South Africa",
				"languages": [
					"afr",
					"eng",
					"nde",
					"nbl",
					"nso",
					"sot",
					"ssw",
					"tso",
					"tsn",
					"ven",
					"xho",
					"zul"
				],
				"langCultureMs": [
					{
						"langCultureName": "af-ZA",
						"displayName": "Afrikaans - South Africa",
						"cultureCode": "0x0436"
					},
					{
						"langCultureName": "en-ZA",
						"displayName": "English - South Africa",
						"cultureCode": "0x1C09"
					}
				]
			},
			{
				"code_2": "GS",
				"code_3": "SGS",
				"numCode": "239",
				"name": "South Georgia and the South Sandwich Islands"
			},
			{
				"code_2": "SS",
				"code_3": "SSD",
				"numCode": "728",
				"name": "South Sudan",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "ES",
				"code_3": "ESP",
				"numCode": "724",
				"name": "Spain",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "eu-ES",
						"displayName": "Basque - Basque",
						"cultureCode": "0x042D"
					},
					{
						"langCultureName": "ca-ES",
						"displayName": "Catalan - Catalan",
						"cultureCode": "0x0403"
					},
					{
						"langCultureName": "gl-ES",
						"displayName": "Galician - Galician",
						"cultureCode": "0x0456"
					},
					{
						"langCultureName": "es-ES",
						"displayName": "Spanish - Spain",
						"cultureCode": "0x0C0A"
					}
				]
			},
			{
				"code_2": "LK",
				"code_3": "LKA",
				"numCode": "144",
				"name": "Sri Lanka",
				"languages": [
					"eng",
					"sin",
					"tam"
				]
			},
			{
				"code_2": "SD",
				"code_3": "SDN",
				"numCode": "729",
				"name": "Sudan",
				"languages": [
					"ara",
					"eng"
				]
			},
			{
				"code_2": "SR",
				"code_3": "SUR",
				"numCode": "740",
				"name": "Suriname",
				"languages": [
					"nld"
				]
			},
			{
				"code_2": "SJ",
				"code_3": "SJM",
				"numCode": "744",
				"name": "Svalbard and Jan Mayen"
			},
			{
				"code_2": "SZ",
				"code_3": "SWZ",
				"numCode": "748",
				"name": "Swaziland",
				"languages": [
					"eng",
					"ssw"
				]
			},
			{
				"code_2": "SE",
				"code_3": "SWE",
				"numCode": "752",
				"name": "Sweden",
				"languages": [
					"swe"
				],
				"langCultureMs": [
					{
						"langCultureName": "sv-SE",
						"displayName": "Swedish - Sweden",
						"cultureCode": "0x041D"
					}
				]
			},
			{
				"code_2": "CH",
				"code_3": "CHE",
				"numCode": "756",
				"name": "Switzerland",
				"languages": [
					"fra",
					"deu",
					"ita",
					"roh"
				],
				"langCultureMs": [
					{
						"langCultureName": "fr-CH",
						"displayName": "French - Switzerland",
						"cultureCode": "0x100C"
					},
					{
						"langCultureName": "de-CH",
						"displayName": "German - Switzerland",
						"cultureCode": "0x0807"
					},
					{
						"langCultureName": "it-CH",
						"displayName": "Italian - Switzerland",
						"cultureCode": "0x0810"
					}
				]
			},
			{
				"code_2": "SY",
				"code_3": "SYR",
				"numCode": "760",
				"name": "Syrian Arab Republic",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-SY",
						"displayName": "Arabic - Syria",
						"cultureCode": "0x2801"
					},
					{
						"langCultureName": "syr-SY",
						"displayName": "Syriac - Syria",
						"cultureCode": "0x045A"
					}
				]
			},
			{
				"code_2": "TW",
				"code_3": "TWN",
				"numCode": "158",
				"name": "Taiwan, Province of China",
				"languages": [
					"zho"
				],
				"langCultureMs": [
					{
						"langCultureName": "zh-TW",
						"displayName": "Chinese - Taiwan",
						"cultureCode": "0x0404"
					}
				]
			},
			{
				"code_2": "TJ",
				"code_3": "TJK",
				"numCode": "762",
				"name": "Tajikistan",
				"languages": [
					"fas",
					"rus",
					"tgk"
				]
			},
			{
				"code_2": "TZ",
				"code_3": "TZA",
				"numCode": "834",
				"name": "Tanzania, United Republic of",
				"languages": [
					"eng",
					"swa"
				]
			},
			{
				"code_2": "TH",
				"code_3": "THA",
				"numCode": "764",
				"name": "Thailand",
				"languages": [
					"tha"
				],
				"langCultureMs": [
					{
						"langCultureName": "th-TH",
						"displayName": "Thai - Thailand",
						"cultureCode": "0x041E"
					}
				]
			},
			{
				"code_2": "TL",
				"code_3": "TLS",
				"numCode": "626",
				"name": "Timor-Leste",
				"languages": [
					"por",
					"tet"
				]
			},
			{
				"code_2": "TG",
				"code_3": "TGO",
				"numCode": "768",
				"name": "Togo",
				"languages": [
					"ewe",
					"fra"
				]
			},
			{
				"code_2": "TK",
				"code_3": "TKL",
				"numCode": "772",
				"name": "Tokelau"
			},
			{
				"code_2": "TO",
				"code_3": "TON",
				"numCode": "776",
				"name": "Tonga",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "TT",
				"code_3": "TTO",
				"numCode": "780",
				"name": "Trinidad and Tobago",
				"languages": [
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-TT",
						"displayName": "English - Trinidad and Tobago",
						"cultureCode": "0x2C09"
					}
				]
			},
			{
				"code_2": "TN",
				"code_3": "TUN",
				"numCode": "788",
				"name": "Tunisia",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-TN",
						"displayName": "Arabic - Tunisia",
						"cultureCode": "0x1C01"
					}
				]
			},
			{
				"code_2": "TR",
				"code_3": "TUR",
				"numCode": "792",
				"name": "Turkey",
				"languages": [
					"tur"
				],
				"langCultureMs": [
					{
						"langCultureName": "tr-TR",
						"displayName": "Turkish - Turkey",
						"cultureCode": "0x041F"
					}
				]
			},
			{
				"code_2": "TM",
				"code_3": "TKM",
				"numCode": "795",
				"name": "Turkmenistan",
				"languages": [
					"tuk"
				]
			},
			{
				"code_2": "TC",
				"code_3": "TCA",
				"numCode": "796",
				"name": "Turks and Caicos Islands"
			},
			{
				"code_2": "TV",
				"code_3": "TUV",
				"numCode": "798",
				"name": "Tuvalu",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "UG",
				"code_3": "UGA",
				"numCode": "800",
				"name": "Uganda",
				"languages": [
					"eng",
					"swa"
				]
			},
			{
				"code_2": "UA",
				"code_3": "UKR",
				"numCode": "804",
				"name": "Ukraine",
				"languages": [
					"ukr"
				],
				"langCultureMs": [
					{
						"langCultureName": "uk-UA",
						"displayName": "Ukrainian - Ukraine",
						"cultureCode": "0x0422"
					}
				]
			},
			{
				"code_2": "AE",
				"code_3": "ARE",
				"numCode": "784",
				"name": "United Arab Emirates",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-AE",
						"displayName": "Arabic - United Arab Emirates",
						"cultureCode": "0x3801"
					}
				]
			},
			{
				"code_2": "GB",
				"code_3": "GBR",
				"numCode": "826",
				"name": "United Kingdom",
				"languages": [
					"eng",
					"cym"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-GB",
						"displayName": "English - United Kingdom",
						"cultureCode": "0x0809"
					}
				]
			},
			{
				"code_2": "US",
				"code_3": "USA",
				"numCode": "840",
				"name": "United States",
				"languages": [
					"eng"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-US",
						"displayName": "English - United States",
						"cultureCode": "0x0409"
					}
				]
			},
			{
				"code_2": "UM",
				"code_3": "UMI",
				"numCode": "581",
				"name": "United States Minor Outlying Islands"
			},
			{
				"code_2": "UY",
				"code_3": "URY",
				"numCode": "858",
				"name": "Uruguay",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-UY",
						"displayName": "Spanish - Uruguay",
						"cultureCode": "0x380A"
					}
				]
			},
			{
				"code_2": "UZ",
				"code_3": "UZB",
				"numCode": "860",
				"name": "Uzbekistan",
				"languages": [
					"uzb"
				],
				"langCultureMs": [
					{
						"langCultureName": "Cy-uz-UZ",
						"displayName": "Uzbek (Cyrillic) - Uzbekistan",
						"cultureCode": "0x0843"
					},
					{
						"langCultureName": "Lt-uz-UZ",
						"displayName": "Uzbek (Latin) - Uzbekistan",
						"cultureCode": "0x0443"
					}
				]
			},
			{
				"code_2": "VU",
				"code_3": "VUT",
				"numCode": "548",
				"name": "Vanuatu",
				"languages": [
					"bis",
					"eng",
					"fra"
				]
			},
			{
				"code_2": "VE",
				"code_3": "VEN",
				"numCode": "862",
				"name": "Venezuela, Bolivarian Republic of",
				"languages": [
					"spa"
				],
				"langCultureMs": [
					{
						"langCultureName": "es-VE",
						"displayName": "Spanish - Venezuela",
						"cultureCode": "0x200A"
					}
				]
			},
			{
				"code_2": "VN",
				"code_3": "VNM",
				"numCode": "704",
				"name": "Viet Nam",
				"languages": [
					"vie"
				],
				"langCultureMs": [
					{
						"langCultureName": "vi-VN",
						"displayName": "Vietnamese - Vietnam",
						"cultureCode": "0x042A"
					}
				]
			},
			{
				"code_2": "VG",
				"code_3": "VGB",
				"numCode": "092",
				"name": "Virgin Islands, British"
			},
			{
				"code_2": "VI",
				"code_3": "VIR",
				"numCode": "850",
				"name": "Virgin Islands, U.S."
			},
			{
				"code_2": "WF",
				"code_3": "WLF",
				"numCode": "876",
				"name": "Wallis and Futuna",
				"languages": [
					"fra"
				]
			},
			{
				"code_2": "EH",
				"code_3": "ESH",
				"numCode": "732",
				"name": "Western Sahara",
				"languages": [
					"spa"
				]
			},
			{
				"code_2": "YE",
				"code_3": "YEM",
				"numCode": "887",
				"name": "Yemen",
				"languages": [
					"ara"
				],
				"langCultureMs": [
					{
						"langCultureName": "ar-YE",
						"displayName": "Arabic - Yemen",
						"cultureCode": "0x2401"
					}
				]
			},
			{
				"code_2": "ZM",
				"code_3": "ZMB",
				"numCode": "894",
				"name": "Zambia",
				"languages": [
					"eng"
				]
			},
			{
				"code_2": "ZW",
				"code_3": "ZWE",
				"numCode": "716",
				"name": "Zimbabwe",
				"languages": [
					"eng",
					"nde",
					"sna"
				],
				"langCultureMs": [
					{
						"langCultureName": "en-ZW",
						"displayName": "English - Zimbabwe",
						"cultureCode": "0x3009"
					}
				]
			}
		],
		"locales": [
			[
				"af",
				"ZA"
			],
			[
				"am",
				"ET"
			],
			[
				"ar",
				"AE"
			],
			[
				"ar",
				"BH"
			],
			[
				"ar",
				"DZ"
			],
			[
				"ar",
				"EG"
			],
			[
				"ar",
				"IQ"
			],
			[
				"ar",
				"JO"
			],
			[
				"ar",
				"KW"
			],
			[
				"ar",
				"LB"
			],
			[
				"ar",
				"LY"
			],
			[
				"ar",
				"MA"
			],
			[
				"arn",
				"CL"
			],
			[
				"ar",
				"OM"
			],
			[
				"ar",
				"QA"
			],
			[
				"ar",
				"SA"
			],
			[
				"ar",
				"SY"
			],
			[
				"ar",
				"TN"
			],
			[
				"ar",
				"YE"
			],
			[
				"as",
				"IN"
			],
			[
				"az",
				"Cyrl",
				"AZ"
			],
			[
				"az",
				"Latn",
				"AZ"
			],
			[
				"ba",
				"RU"
			],
			[
				"be",
				"BY"
			],
			[
				"bg",
				"BG"
			],
			[
				"bn",
				"BD"
			],
			[
				"bn",
				"IN"
			],
			[
				"bo",
				"CN"
			],
			[
				"br",
				"FR"
			],
			[
				"bs",
				"Cyrl",
				"BA"
			],
			[
				"bs",
				"Latn",
				"BA"
			],
			[
				"ca",
				"ES"
			],
			[
				"co",
				"FR"
			],
			[
				"cs",
				"CZ"
			],
			[
				"cy",
				"GB"
			],
			[
				"da",
				"DK"
			],
			[
				"de",
				"AT"
			],
			[
				"de",
				"CH"
			],
			[
				"de",
				"DE"
			],
			[
				"de",
				"LI"
			],
			[
				"de",
				"LU"
			],
			[
				"dsb",
				"DE"
			],
			[
				"dv",
				"MV"
			],
			[
				"el",
				"GR"
			],
			[
				"en",
				"029"
			],
			[
				"en",
				"AU"
			],
			[
				"en",
				"BZ"
			],
			[
				"en",
				"CA"
			],
			[
				"en",
				"GB"
			],
			[
				"en",
				"IE"
			],
			[
				"en",
				"IN"
			],
			[
				"en",
				"JM"
			],
			[
				"en",
				"MY"
			],
			[
				"en",
				"NZ"
			],
			[
				"en",
				"PH"
			],
			[
				"en",
				"SG"
			],
			[
				"en",
				"TT"
			],
			[
				"en",
				"US"
			],
			[
				"en",
				"ZA"
			],
			[
				"en",
				"ZW"
			],
			[
				"es",
				"AR"
			],
			[
				"es",
				"BO"
			],
			[
				"es",
				"CL"
			],
			[
				"es",
				"CO"
			],
			[
				"es",
				"CR"
			],
			[
				"es",
				"DO"
			],
			[
				"es",
				"EC"
			],
			[
				"es",
				"ES"
			],
			[
				"es",
				"GT"
			],
			[
				"es",
				"HN"
			],
			[
				"es",
				"MX"
			],
			[
				"es",
				"NI"
			],
			[
				"es",
				"PA"
			],
			[
				"es",
				"PE"
			],
			[
				"es",
				"PR"
			],
			[
				"es",
				"PY"
			],
			[
				"es",
				"SV"
			],
			[
				"es",
				"US"
			],
			[
				"es",
				"UY"
			],
			[
				"es",
				"VE"
			],
			[
				"et",
				"EE"
			],
			[
				"eu",
				"ES"
			],
			[
				"fa",
				"IR"
			],
			[
				"fi",
				"FI"
			],
			[
				"fil",
				"PH"
			],
			[
				"fo",
				"FO"
			],
			[
				"fr",
				"BE"
			],
			[
				"fr",
				"CA"
			],
			[
				"fr",
				"CH"
			],
			[
				"fr",
				"FR"
			],
			[
				"fr",
				"LU"
			],
			[
				"fr",
				"MC"
			],
			[
				"fy",
				"NL"
			],
			[
				"ga",
				"IE"
			],
			[
				"gd",
				"GB"
			],
			[
				"gl",
				"ES"
			],
			[
				"gsw",
				"FR"
			],
			[
				"gu",
				"IN"
			],
			[
				"ha",
				"Latn",
				"NG"
			],
			[
				"he",
				"IL"
			],
			[
				"hi",
				"IN"
			],
			[
				"hr",
				"BA"
			],
			[
				"hr",
				"HR"
			],
			[
				"hsb",
				"DE"
			],
			[
				"hu",
				"HU"
			],
			[
				"hy",
				"AM"
			],
			[
				"id",
				"ID"
			],
			[
				"ig",
				"NG"
			],
			[
				"ii",
				"CN"
			],
			[
				"is",
				"IS"
			],
			[
				"it",
				"CH"
			],
			[
				"it",
				"IT"
			],
			[
				"iu",
				"Cans",
				"CA"
			],
			[
				"iu",
				"Latn",
				"CA"
			],
			[
				"ja",
				"JP"
			],
			[
				"ka",
				"GE"
			],
			[
				"kk",
				"KZ"
			],
			[
				"kl",
				"GL"
			],
			[
				"km",
				"KH"
			],
			[
				"kn",
				"IN"
			],
			[
				"kok",
				"IN"
			],
			[
				"ko",
				"KR"
			],
			[
				"ky",
				"KG"
			],
			[
				"lb",
				"LU"
			],
			[
				"lo",
				"LA"
			],
			[
				"lt",
				"LT"
			],
			[
				"lv",
				"LV"
			],
			[
				"mi",
				"NZ"
			],
			[
				"mk",
				"MK"
			],
			[
				"ml",
				"IN"
			],
			[
				"mn",
				"MN"
			],
			[
				"mn",
				"Mong",
				"CN"
			],
			[
				"moh",
				"CA"
			],
			[
				"mr",
				"IN"
			],
			[
				"ms",
				"BN"
			],
			[
				"ms",
				"MY"
			],
			[
				"mt",
				"MT"
			],
			[
				"nb",
				"NO"
			],
			[
				"ne",
				"NP"
			],
			[
				"nl",
				"BE"
			],
			[
				"nl",
				"NL"
			],
			[
				"nn",
				"NO"
			],
			[
				"nso",
				"ZA"
			],
			[
				"oc",
				"FR"
			],
			[
				"or",
				"IN"
			],
			[
				"pa",
				"IN"
			],
			[
				"pl",
				"PL"
			],
			[
				"prs",
				"AF"
			],
			[
				"ps",
				"AF"
			],
			[
				"pt",
				"BR"
			],
			[
				"pt",
				"PT"
			],
			[
				"qut",
				"GT"
			],
			[
				"quz",
				"BO"
			],
			[
				"quz",
				"EC"
			],
			[
				"quz",
				"PE"
			],
			[
				"rm",
				"CH"
			],
			[
				"ro",
				"RO"
			],
			[
				"ru",
				"RU"
			],
			[
				"rw",
				"RW"
			],
			[
				"sah",
				"RU"
			],
			[
				"sa",
				"IN"
			],
			[
				"se",
				"FI"
			],
			[
				"se",
				"NO"
			],
			[
				"se",
				"SE"
			],
			[
				"si",
				"LK"
			],
			[
				"sk",
				"SK"
			],
			[
				"sl",
				"SI"
			],
			[
				"sma",
				"NO"
			],
			[
				"sma",
				"SE"
			],
			[
				"smj",
				"NO"
			],
			[
				"smj",
				"SE"
			],
			[
				"smn",
				"FI"
			],
			[
				"sms",
				"FI"
			],
			[
				"sq",
				"AL"
			],
			[
				"sr",
				"Cyrl",
				"BA"
			],
			[
				"sr",
				"Cyrl",
				"CS"
			],
			[
				"sr",
				"Cyrl",
				"ME"
			],
			[
				"sr",
				"Cyrl",
				"RS"
			],
			[
				"sr",
				"Latn",
				"BA"
			],
			[
				"sr",
				"Latn",
				"CS"
			],
			[
				"sr",
				"Latn",
				"ME"
			],
			[
				"sr",
				"Latn",
				"RS"
			],
			[
				"sv",
				"FI"
			],
			[
				"sv",
				"SE"
			],
			[
				"sw",
				"KE"
			],
			[
				"syr",
				"SY"
			],
			[
				"ta",
				"IN"
			],
			[
				"te",
				"IN"
			],
			[
				"tg",
				"Cyrl",
				"TJ"
			],
			[
				"th",
				"TH"
			],
			[
				"tk",
				"TM"
			],
			[
				"tn",
				"ZA"
			],
			[
				"tr",
				"TR"
			],
			[
				"tt",
				"RU"
			],
			[
				"tzm",
				"Latn",
				"DZ"
			],
			[
				"ug",
				"CN"
			],
			[
				"uk",
				"UA"
			],
			[
				"ur",
				"PK"
			],
			[
				"uz",
				"Cyrl",
				"UZ"
			],
			[
				"uz",
				"Latn",
				"UZ"
			],
			[
				"vi",
				"VN"
			],
			[
				"wo",
				"SN"
			],
			[
				"xh",
				"ZA"
			],
			[
				"yo",
				"NG"
			],
			[
				"zh",
				"CN"
			],
			[
				"zh",
				"HK"
			],
			[
				"zh",
				"MO"
			],
			[
				"zh",
				"SG"
			],
			[
				"zh",
				"TW"
			],
			[
				"zu",
				"ZA"
			]
		]
	};

/***/ }
/******/ ]);