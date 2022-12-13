const { select } = require("../db/connection");
const knex = require("../db/connection");

function list() {}

function create(reservation) {}

function listByDate(reservation_date) {}

function read(reservation_id) {}

// Only updates the status
function update(reservation_id, status) {
    return knex("reservations")
        .select("*")
        .where({ reservation_id })
        .update({ status })
        .returning("*")
        .then((updated) => updated[0]);
}

function finish(reservation_id) {}

function search(mobile_number) {}

function modify(reservation_id, reservation) {}

module.exports = {
    list,
    create,
    listByDate,
    read,
    finish,
    update,
    search,
    modify,
};