
/**
* Ici on aura tous les routes
*/
module.exports = function(app, connection) { // On récupére 
  /********************************************* 
  *         WEB 
  *********************************************/
  // welcome page
  app.get('/', function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.status(202).render("pages/welcome");
	});
 
 // use res.render to load up an ejs view file
 
 /********************************************* 
  *         API 
  *********************************************/
  
  // Afficher les clients en json
  app.get('/api/clients', function(req,res){
    connection.query("SELECT * FROM Clients", function(err,result){
  		if (err) throw err;
  		console.log(`Result : ${JSON.stringify(result)}`);
  		res.setHeader('Content-Type', 'application/json');
  	  res.status(202).send(result);
   });
  });
 }