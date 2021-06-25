module.exports = () => {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,HEAD');
    // res.setHeader('Access-Control-Allow-Withcredential', true);
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Content-Length,Authorization,Accept')
    next()
  }
}