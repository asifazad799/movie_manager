const sampleController = async (req, res) => {
  return res.status(200).json({ title: "Express", ...req.query });
};

module.exports = { sampleController };
