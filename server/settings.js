var path = require('path');

module.exports.styles = path.join(__dirname,'styles');

module.exports.postgis = {
    'dbname' : 'tiledb',
    'extent' : '-20005048.4188,-9039211.13765,19907487.2779,17096598.5401',
    'geometry_field' : 'the_geom',
    'srid' : 900913,
    'user' : 'postgres',
    'max_size' : 1,
    'type' : 'postgis'
};


