const service = require("./tables.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { as } = require("../db/connection");

const VALID_FIELDS = [ "table_name", "capacity" ];

function isValidTable(req, res, next) {
    const table = req.body.data;
    if (!table) {
        return next({
            status: 400,
            message: "Must have data property"
        });
    }

    VALID_FIELDS.forEach((field) => {
        if (!table[field]) {
            return next({
                status: 400,
                message: `Must have ${field} property.`
            });
        }
    });

    if (typeof table["capacity"] !== "number") {
        return next({
            status: 400,
            message: "Capacity must be a number greater than 0",
        });
    }

    next();
}

async function list(req, res, next) {}

async function create(req, res, next) {}



module.exports = {
    list: asyncErrorBoundary(list),
    create: [ isValidTable, asyncErrorBoundary(create) ],
    isValidTable,
};