// initialize app
function start(app, express) {
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon
	app.listen(8000);

}

// release resources
function stop() {
	
}