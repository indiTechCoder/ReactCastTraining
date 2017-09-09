module.exports =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	import express from 'express';
	import React from 'react';
	import { renderToString } from 'react-dom/server';
	import App from './app/index';
	import template from './template';

	const server = express();
	var UsersFactory = React.createFactory(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app/index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

	server.use('/assets', express.static('assets'));

	server.get('/', (req, res) => {
	  const isMobile = true;
	  const initialState = { isMobile };
	  const appString = renderToString(UsersFactory);

	  res.send(template({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.listen(8080);
	console.log('listening');

/***/ })
/******/ ]);