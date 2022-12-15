const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    app.use('/news',newsRouter);
    app.use('/course',courseRouter)

    // app.get('/search', (req, res) => {
    //     res.render('search');
    //   })
    app.use('/me',meRouter)
    app.use('/',siteRouter)
}
module.exports = route;