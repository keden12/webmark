'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const webmarks = require('./controllers/webmarks.js');
const about = require('./controllers/about.js');
const bookmark = require('./controllers/bookmark.js');

router.get('/', start.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/webmarks', webmarks.index);
router.get('/about', about.index);
router.get('/bookmark/:id/deletebookmark/:bookmarkid', bookmark.deleteBookmark);
router.get('/webmark/:id/deletecollection/', bookmark.deleteCollection);

module.exports = router;
