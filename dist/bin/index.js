#!/usr/bin/env node
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import path from 'path';
import { fileURLToPath } from 'url';
import { chooseProjectType } from '../utils/inquirerUtils.js';
import { startSpinner, stopSpinner } from '../utils/spinnerUtils.js';
import { readConfigFiles } from '../utils/fileOperationsUtils.js';
import { getPackageList } from '../utils/packageUtils.js';
import chalk from 'chalk';
import fs from 'fs';

// Define constants for paths and package data
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var packageJson = await getPackageList(__dirname, "../../package.json");

// Command flags
var versionFlags = ["v", "version", "-v", "--v", "-version", "--version"];
var helpFlags = ["h", "help", "-h", "--h", "-help", "--help"];
var expoDoctorFlags = ["taste", "taste-it", "tasteit", "doctor", "expo-doctor"];
var appNameFlag = '--appname';
var projectTypeFlag = '--projecttype';

// Check for version flag
if (versionFlags.includes(process.argv[2])) {
  handleVersion();
}

// Check for help flag
if (helpFlags.includes(process.argv[2])) {
  handleHelp();
}

// Run expo doctor if the flag is matched
if (expoDoctorFlags.includes(process.argv[2])) {
  runExpoDoctor();
}

// Check if the user just provides --appname without --projecttype
if (process.argv.includes(appNameFlag) && !process.argv.includes(projectTypeFlag)) {
  askForProjectType();
} else if (process.argv.length === 3 && process.argv[2] === 'init') {
  initProject();
} else {
  // Parse new flags --appname and --projecttype
  var appName = getFlagValue(appNameFlag);
  var projectType = getFlagValue(projectTypeFlag);

  // Main CLI functionality
  _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var context;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return initializeContext(appName, projectType);
        case 2:
          context = _context.sent;
          _context.next = 5;
          return handleProjectType(context);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))();
}

// Function to handle the version flag
function handleVersion() {
  try {
    console.log(chalk.bold.green("BaseBuild-CLI version: ".concat(packageJson.version)));
    process.exit(0);
  } catch (error) {
    console.error(chalk.bold.redBright("Error: Unable to fetch the version. ".concat(error.message)));
    process.exit(1);
  }
}

// Function to handle the help flag
function handleHelp() {
  console.log(chalk.bold.green("BaseBuild-CLI version: ".concat(packageJson.version)));
  console.log(chalk.bold.green("\n        BaseBuild-CLI help:\n        -v, --version: Output the version number\n        -h, --help: Output usage information\n        taste: Run expo doctor\n    "));
  process.exit(0);
}

// Function to run expo doctor
function runExpoDoctor() {
  return _runExpoDoctor.apply(this, arguments);
} // Function to get the value of a specific flag from the command line arguments
function _runExpoDoctor() {
  _runExpoDoctor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _yield$import, _runExpoDoctor2;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return import('../tools/expo/expoDoctor.js');
        case 3:
          _yield$import = _context2.sent;
          _runExpoDoctor2 = _yield$import.runExpoDoctor;
          _context2.next = 7;
          return _runExpoDoctor2();
        case 7:
          process.exit(0);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(chalk.bold.redBright("Error: Unable to run expo doctor. ".concat(_context2.t0.message)));
          process.exit(1);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _runExpoDoctor.apply(this, arguments);
}
function getFlagValue(flag) {
  var flagIndex = process.argv.indexOf(flag);
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return null; // Return null if the flag is not provided
}

// Function to initialize the context for the CLI
function initializeContext(_x, _x2) {
  return _initializeContext.apply(this, arguments);
} // Function to handle the project type
function _initializeContext() {
  _initializeContext = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(appName, projectType) {
    var context;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          context = {
            cliName: packageJson.name,
            cliVersion: packageJson.version,
            appName: appName || null,
            // Set a default value if not provided
            projectType: projectType || null // Set a default value if not provided
          }; // console.log(chalk.green('Project Name: '), context.appName);
          // console.log(chalk.green('Project Type: '), context.projectType);
          return _context3.abrupt("return", context);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _initializeContext.apply(this, arguments);
}
function handleProjectType(_x3) {
  return _handleProjectType.apply(this, arguments);
} // Function to process the boilerplate file
function _handleProjectType() {
  _handleProjectType = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(context) {
    var _context$projectType$, _context$projectType$2, category, boilerplatesFolder, configFilesFolder, boilerplatePath, configFiles, _iterator, _step, file;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context$projectType$ = context.projectType.split('_'), _context$projectType$2 = _slicedToArray(_context$projectType$, 1), category = _context$projectType$2[0]; // console.log('Project Type Split: ', [category]);
          boilerplatesFolder = path.resolve(__dirname, '../boilerplates');
          context.boilerplatesFolder = boilerplatesFolder;
          configFilesFolder = path.resolve(__dirname, '../configs');
          context.configFilesFolder = configFilesFolder;
          boilerplatePath = path.join(boilerplatesFolder, category, context.projectType);
          context.boilerPlatePath = boilerplatePath;
          configFiles = readConfigFiles(boilerplatePath);
          _iterator = _createForOfIteratorHelper(configFiles);
          _context4.prev = 10;
          _iterator.s();
        case 12:
          if ((_step = _iterator.n()).done) {
            _context4.next = 18;
            break;
          }
          file = _step.value;
          _context4.next = 16;
          return processBoilerplateFile(file, boilerplatePath, context);
        case 16:
          _context4.next = 12;
          break;
        case 18:
          _context4.next = 23;
          break;
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](10);
          _iterator.e(_context4.t0);
        case 23:
          _context4.prev = 23;
          _iterator.f();
          return _context4.finish(23);
        case 26:
          _context4.next = 32;
          break;
        case 28:
          _context4.prev = 28;
          _context4.t1 = _context4["catch"](0);
          stopSpinner(false, "".concat(chalk.redBright('Oh no! The recipe failed!')));
          console.error(_context4.t1.message);
        case 32:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 28], [10, 20, 23, 26]]);
  }));
  return _handleProjectType.apply(this, arguments);
}
function processBoilerplateFile(_x4, _x5, _x6) {
  return _processBoilerplateFile.apply(this, arguments);
} // Function to handle the 'init' command (when no arguments are passed)
function _processBoilerplateFile() {
  _processBoilerplateFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(file, boilerplatePath, context) {
    var configModule;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return import(path.join(boilerplatePath, file));
        case 3:
          configModule = _context5.sent;
          _context5.next = 6;
          return configModule["default"](context, function (status, message) {
            if (status === 'start') {
              startSpinner(message);
            } else if (status === 'success') {
              stopSpinner(status, message);
            } else if (status === 'error') {
              stopSpinner(status, message);
            } else if (status === 'info') {
              stopSpinner(status, message);
            } else if (status === 'warning') {
              stopSpinner(status, message);
            }
          });
        case 6:
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          stopSpinner(false, "".concat(chalk.redBright('Oh no! The recipe failed!')));
          console.error(_context5.t0.message);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _processBoilerplateFile.apply(this, arguments);
}
function initProject() {
  return _initProject.apply(this, arguments);
} // Function to ask the user for the project type when only --appname is passed
function _initProject() {
  _initProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _projectType, context;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return chooseProjectType();
        case 3:
          _projectType = _context6.sent;
          _context6.next = 6;
          return initializeContext(null, _projectType);
        case 6:
          context = _context6.sent;
          _context6.next = 9;
          return handleProjectType(context);
        case 9:
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.error(chalk.bold.redBright('Error initializing project:', _context6.t0.message));
          process.exit(1);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return _initProject.apply(this, arguments);
}
function askForProjectType() {
  return _askForProjectType.apply(this, arguments);
}
function _askForProjectType() {
  _askForProjectType = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var _projectType2, _appName, context;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return chooseProjectType();
        case 3:
          _projectType2 = _context7.sent;
          // Prompt user to choose project type
          _appName = getFlagValue(appNameFlag);
          _context7.next = 7;
          return initializeContext(_appName, _projectType2);
        case 7:
          context = _context7.sent;
          _context7.next = 10;
          return handleProjectType(context);
        case 10:
          _context7.next = 16;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          console.error(chalk.bold.redBright('Error:', _context7.t0.message));
          process.exit(1);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return _askForProjectType.apply(this, arguments);
}