const express = require('express')

const routes = express.Router();

const blogController = require('../controllers/CrudController');

const fileupload = require('../config/fileuploads');

routes.get('/', blogController.index);
routes.post('/AddBlog', fileupload, blogController.AddData);
routes.get('/DeleteBlog', blogController.DeleteData);
routes.get('/EditBlog', blogController.EditData);

module.exports = routes;