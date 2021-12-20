"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apolloClient.ts":
/*!*****************************!*\
  !*** ./lib/apolloClient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"http://localhost:8080/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0RDtBQUU1RCxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLHdEQUFZLENBQUMsQ0FBQztJQUM3QkcsR0FBRyxFQUFFLENBQStCO0lBQ3BDQyxLQUFLLEVBQUUsR0FBRyxDQUFDSCx5REFBYTtBQUM1QixDQUFDO0FBRUQsaUVBQWVDLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL2xpYi9hcG9sbG9DbGllbnQudHM/ZjYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsXCIsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apolloClient.ts\n");

/***/ }),

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.orange[500]\n        },\n        secondary: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.grey[200]\n        },\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0Q7QUFDTTtBQUV4RCxFQUEyQjtBQUMzQixLQUFLLENBQUNJLEtBQUssR0FBR0osaUVBQVcsQ0FBQyxDQUFDO0lBQ3pCSyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxJQUFJLEVBQUVOLDZEQUFXO1FBQ25CLENBQUM7UUFDRE8sU0FBUyxFQUFFLENBQUM7WUFDVkQsSUFBSSxFQUFFTCwyREFBUztRQUNqQixDQUFDO1FBQ0RPLEtBQUssRUFBRSxDQUFDO1lBQ05GLElBQUksRUFBRUosMERBQVE7UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL2xpYi90aGVtZS50cz8yNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyBvcmFuZ2UsIGdyZXksIHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBncmV5WzIwMF0sXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJvcmFuZ2UiLCJncmV5IiwicmVkIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIkE0MDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/apolloClient */ \"./lib/apolloClient.ts\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/theme */ \"./lib/theme.ts\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"GraphQL DEMO Webapp\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n                        __source: {\n                            fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n                client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                __source: {\n                    fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                    theme: _lib_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    __source: {\n                        fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            __source: {\n                                fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                            ...pageProps,\n                            __source: {\n                                fileName: \"/Users/warm/learning/graphql/webapp/pages/_app.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNTO0FBQ2E7QUFDSDtBQUNkO0FBQ3NCO0FBQ0Q7U0FFMUNRLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sdUVBQ0hULHVEQUFjOzs7Ozs7OztrRkFDWkQsa0RBQUk7Ozs7Ozs7O3lGQUNGWSxDQUFLOzs7Ozs7O2tDQUFDLENBQW1COzt5RkFDekJDLENBQUk7d0JBQ0hDLElBQUksRUFBQyxDQUFVO3dCQUNmQyxPQUFPLEVBQUMsQ0FBc0Q7Ozs7Ozs7Ozs7aUZBR2pFWiwwREFBYztnQkFBQ2EsTUFBTSxFQUFFWix5REFBWTs7Ozs7OztnR0FDakNFLCtEQUFhO29CQUFDRCxLQUFLLEVBQUVBLGtEQUFLOzs7Ozs7Ozs2RkFDeEJFLGtFQUFXOzs7Ozs7Ozs2RkFDWEUsU0FBUzsrQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0FBRURGLEtBQUssQ0FBQ1MsU0FBUyxHQUFHLENBQUM7SUFDakJSLFNBQVMsRUFBRVAsMEVBQWdDO0lBQzNDUSxTQUFTLEVBQUVSLHFFQUEyQjtBQUN4QyxDQUFDO0FBRUQsaUVBQWVNLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBhcG9sbG9DbGllbnQgZnJvbSBcIkBsaWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkBsaWIvdGhlbWVcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R3JhcGhRTCBERU1PIFdlYmFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiQXBvbGxvUHJvdmlkZXIiLCJhcG9sbG9DbGllbnQiLCJ0aGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiRnJhZ21lbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNsaWVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();