const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./reservations.service");



// CRUD
async function list(req, res) {
  res.json({
    data: [],
  });
}

async function update(req, res, next) {
  const { reservation_Id } = req.params;
  const { status } = req.body.data;
  const reservation = await service.update(reservation_Id, status);
  res.json({ data: reservation });
}

module.exports = {
  list,
  update: [
    asyncErrorBoundary(update),
  ],
};
