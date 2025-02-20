var express = require( 'express')

// Create and load the express server
var app = express()
var cf_app = require( './app/vcap_application')
var cf_svc = require( './app/vcap_services')
var { getEntries, postEntries, deleteEntries } = require( './app/index')

app.set( 'views', __dirname + '/public/views')
app.set( 'view engine', 'jade')
// This is the place for the js public scripted to be executed.
// Express will automatically set the correct MIME type for the JavaScript file based on its file extension.
// The browser will interpret the JavaScript file correctly, and the MIME type error should be resolved.
app.use( express.static( __dirname + '/public'))

app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get( '/', function ( req, res) {
  res.render( 'pages/index', {
    app_environment:    app.settings.env,
    application_name:   cf_app.get_app_name(),
    app_uris:           cf_app.get_app_uris(),
    app_space_name:     cf_app.get_app_space(),
    app_index:          cf_app.get_app_index(),
    app_mem_limits:     cf_app.get_app_mem_limits(),
    app_disk_limits:    cf_app.get_app_disk_limits(),
    service_label:      cf_svc.get_service_label(),
    service_name:       cf_svc.get_service_name(),
    service_plan:       cf_svc.get_service_plan()
  })
})

// TODO rename the path "/entries" and create another button in the UI to naviagte to it
app.get('/entries', getEntries)

// TODO create another path (method) to store the current written text
app.post('/entries', postEntries)

// TODO create another path (method) to delete the entries from the DB
app.delete('/entries', deleteEntries)

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 4000}`)
})

// Not sure whether this works reliably
server.on('error', function(err) {
  server.close(() => {
    console.log('Server stopped.');
    process.exit();
  });
});
