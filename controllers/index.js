module.exports = {
  index: (req, res) => {
    req.log.info("Logger exists");
    res.send("hello world");
  },
};
