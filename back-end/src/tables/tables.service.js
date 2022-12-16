const knex = require("../db/connection");

function list() {
    return knex("tables")
        .select("*")
        .orderBy("tables.table_name");
}

module.exports = {
    list,
}