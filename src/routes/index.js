import homeRouter from './homeRoute'


function route(app) {
    app.use('/home' , homeRouter)
    app.use('/' , (req, res) => {
        res.end('<h1>Hello World!</h1><hr>')
    })
}

export default route
  