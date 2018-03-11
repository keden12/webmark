'use strict';

const logger = require('../utils/logger');
const webmark = require('../models/webmarkslist.js');

const bookmarks = {
  index(request, response) {
    const bookmarkId = request.params.id;
    logger.debug('Bookmark ID = ', bookmarkId);
    const viewData = {
      title: 'Bookmark',
      webmark: webmark.getBookmark(bookmarkId),
    };
    response.render('bookmark', viewData);
  },
    deleteBookmark(request, response) {
    const collectionId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug(`Deleting Bookmark ${bookmarkId} from Collection ${collectionId}`);
    webmark.removeBookmark(collectionId, bookmarkId);
    response.redirect('/bookmark/' + collectionId);
  },
  
    deleteCollection(request, response) {
    const collectionId = request.params.id;
    logger.debug(`Deleting Collection ${collectionId}`);
    webmark.removeCollection(collectionId);
    response.redirect('/webmarks');
  },
};



module.exports = bookmarks;