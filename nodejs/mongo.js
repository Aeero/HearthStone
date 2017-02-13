var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hearthstone');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connect');
  var CostSchema = mongoose.Schema({
      cost: Number
  })

  var CostModel = db.model('cost', CostSchema,'carddatacn');

  // var nameEntity = new NameModel({name:'死亡之翼'});

  CostModel.find({cost:10},function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
  })
})
