/**
 * AlbumController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    new: function(req, res) {
    res.view();
},

  index: function(req, res, next) {
        Album.find(function(err, albums) {
            if(err) return next(err);
            res.view({
                albums: albums
        });
    });
  },
  
  show: function(req, res, next) {
        Album.findOne(req.param('id'), function(err, record) {
            if(err) return next(err);
            res.view({
                album: record
        });
    });
  },

  edit: function(req, res, next) {
        Album.findOne(req.param('id'), function(err, record) {
            if(err) return next(err);
            res.view({
                album: record
        });
    });
  },

  delete: function(req, res, next) {
        Album.destroy(req.param('id'), function(err) {
            if(err) return next(err);
            res.redirectTo('/album');
    });
  },

  update: function(req, res, next) {
        Album.update(req.param('id'), function(err) {
            if(err) return next(err);
            res.redirectTo('/album/show' + req.param('id'));
    });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AlbumController)
   */
  _config: {}

  
};
