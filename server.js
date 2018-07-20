let express = require('express'),
    cors = require('cors'),
    app = express();

//Base de données "EXPERIENCE PROFESSIONNELLE"
    let mongodb = require('mongodb'),
        MongoClient = mongodb.MongoClient,
        url = "mongodb://localhost:27017/proSkills";

  MongoClient.connect(url, function(err, client){
    const db = client.db('proSkills');
    if(err) throw err
    db.collection("spectacle", function(err, collection){
      app.use(cors());
      app.get('/spectacle/:id', function(req, res){
        collection.findOne({"_id" : new mongodb.ObjectID(req.params.id)}, function(err, specId){
          if (!err) res.send(specId);
        });
      });
      app.get("/spectacle", function(req, res){
        collection.find().toArray(function(err, spec){
          if(!err) res.send(spec);
        });
      });
    });
    db.collection("batiment", function(err, collection){
      app.use(cors());
      app.get('/batiment/:id', function(req, res){
        collection.findOne({"_id" : new mongodb.ObjectID(req.params.id)}, function(err, batId){
          if (!err) res.send(specId);
        });
      });
      app.get("/batiment", function(req, res){
        collection.find().toArray(function(err, bat){
          if(!err) res.send(bat);
        });
      });
    });
    db.collection("commerce", function(err, collection){
      app.use(cors());
      app.get('/commerce/:id', function(req, res){
        collection.findOne({"_id" : new mongodb.ObjectID(req.params.id)}, function(err, commId){
          if (!err) res.send(commId);
        });
      });
      app.get("/commerce", function(req, res){
        collection.find().toArray(function(err, comm){
          if(!err) res.send(comm);
        });
      });
    });
  });

app.listen(3000);
