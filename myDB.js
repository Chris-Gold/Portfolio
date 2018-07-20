// Création BDD "skills"
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/proSkills";

// Connexion à la BDD
MongoClient.connect(url, function(err, db){
  if(err) throw err;
   console.log("BDD créée!");
  db.close();
 });

// Création collections "spectacle" - "batiment", "commerce"
MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("proSkills");
  dbo.createCollection("spectacle", function(err, res){
    if (err) throw err;
    console.log("Collection créée!");
    db.close();
  });
  dbo.createCollection("batiment", function(err, res){
    if (err) throw err;
    console.log("Collection créée!");
    db.close();
  });
  dbo.createCollection("commerce", function(err, res){
    if (err) throw err;
    console.log("Collection créée!");
    db.close();
  });
});

// Insertion de données
MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("proSkills");
  var specSkill = [
    { poste : "Technicien plateau", date : "octobre 2015 - decembre 2017", entreprise : "EUTERPE Promotion, Alhambra Production, Alternative Grand Ouest" },
    { poste : "Chargé de communication et organisation de concerts", date : "depuis avril 2016", entreprise : "Association Snake's House - Limoges"},
    { poste : "Agent de contrôle", date : "avril 2009 et 2010", entreprise : "Printemps de Bourges"},
    { poste : "Monteur, magasinier, livreur, installateur", date : "avril 2014", entreprise : "Printemps de Bourges"}
  ];
  dbo.collection("spectacle").insertMany(specSkill, function(err, res){
    if(err) throw err;
    console.log(res.insertedCount + "documents insérés.");
    db.close();
  });
  var batSkill = [
    { poste : "Electricien (tertiaire)", date : "septembre 2011 - juillet 2013", entreprise : "Avenir Electrique Limoges"},
    { poste : "CAP PRO-Elec en contrat pro", date : "2012", entreprise : "CFA Batiment de Limoges"},
    { poste : "Manoeuvre sur chantier", date : "2009", entreprise : "D.R. Equipement"}
  ];
  dbo.collection("batiment").insertMany(batSkill, function(err, res){
    if(err) throw err;
    console.log(res.insertedCount + "documents insérés.");
    db.close();
  });
  var comSkill = [
    { poste : "Vendeur, caissier", date : "juin 2007", entreprise : "Au Nenuphar (chasse et peche)"},
    { poste : "Bac STT commerce", date : "juin 2005", entreprise : "Lycée Paul Constans, Montluçon"}
  ];
  dbo.collection("commerce").insertMany(comSkill, function(err, res){
    if(err) throw err;
    console.log(res.insertedCount + "documents insérés.");
    db.close();
  });
});
/*
// Supression
MongoClient.connect(url, function(err, db){
  if(err) throw err;
  var dbo = db.db("proSkills");
  dbo.collection("spectacle").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
     });
});
*/
// Affichage dans le terminal
MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("proSkills");
  dbo.collection("spectacle").find({}).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
  });
  dbo.collection("batiment").find({}).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
  });
  dbo.collection("commerce").find({}).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
  });
});
