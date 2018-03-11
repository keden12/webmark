
'use strict';

const logger = require('../utils/logger');
const webmark = require('../models/webmarkslist');



const webmarks= {
  index(request, response) {
    logger.info('bookmark rendering');
    const viewData = {
      title: 'Webmarks',
      webmark: webmark.getAllBookmarks(),
    };
    logger.info('about to render', webmark.getAllBookmarks());
    response.render('webmarks', viewData);
  },

};


module.exports = webmarks;