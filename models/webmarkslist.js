'use strict';
const _ = require('lodash');
const Webmark = {
      
     webmarkCollection:require('./webmarkslist.json').webmarkCollection,

getAllBookmarks() {
    return this.webmarkCollection;
  },

  getBookmark(id) {
  return _.find(this.webmarkCollection, { id: id });
  },
  
  
   removeBookmark(id, bookmarkId) {
    const Collection = this.getBookmark(id);
     _.remove(Collection.bookmarks, { id: bookmarkId});
  },
  
  removeCollection(id) {
  _.remove(this.webmarkCollection, { id: id });
},
};





module.exports = Webmark;