/**
 * Album
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
  	title: {
        type: 'string',
        required: true
    },
    artist: {
        type: 'string',
        required: true
    },
    year: {
        type: 'integer',
        max: 2014,
        required: true
    },
    label: {
        type: 'string',
        defaultsTo: ''
    },
    genre: 'string',
    album_cover: {
        type: 'url',
        defaultsTo: 'http://cdn.ebaumsworld.com/mediaFiles/picture/428737/875400.jpg'
    }
  }
};
