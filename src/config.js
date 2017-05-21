exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://Admin:dev@ds013414.mlab.com:13414/davai';
exports.PORT = process.env.PORT || 8080;