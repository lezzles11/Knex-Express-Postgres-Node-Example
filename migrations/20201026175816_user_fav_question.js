exports.up = function(knex) {
    return knex.schema.createTable("user_fav_question", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("user_table.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("question.id")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_fav_question")
};