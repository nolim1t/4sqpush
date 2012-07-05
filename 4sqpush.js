var handler = function (req, res) {
  if (req.body.checkin != undefined) {
    try {
      var checkinobj = JSON.parse(req.body.checkin);
      var tz = checkinobj.timeZone;
      var ts = checkinobj.createdAt;
      var id = checkinobj.id;
      // TODO: Do something awesome like store it or something ;)
      res.send('0');
    } catch(err) {
      res.send('-2');
    }
  } else {
    res.send('-1');
  }
};

module.exports = {
  handler: handler
}

