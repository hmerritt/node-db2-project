
exports.up = async function(knex) {
    await knex.schema.createTable("cars" , (table) => {
        table.increments("id");
        table.text("VIN").notNullable();
        table.text("make").notNullable();
        table.text("model").notNullable();
        table.text("mileage").notNullable();
        table.text('titleStatus');
        table.boolean('automatic');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars');
};
