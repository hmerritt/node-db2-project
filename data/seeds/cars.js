
exports.seed = function(knex) {
    //  Deletes ALL existing entries
    return knex('cars').del()
        .then(function () {
            //  Inserts seed entries
            return knex('cars').insert([
                {id: 1, VIN: 'cM3WOSt6t8LBNW8YQ', make: "Audi", model: "A1", mileage: 88, titleStatus: "clean", automatic: false},
                {id: 2, VIN: 'kQ4lbAPSntApWPDPk', make: "Toyota", model: "Prius", mileage: 2001, titleStatus: "clean", automatic: true},
                {id: 3, VIN: 'JDugImWmdPVsQ06Mh', make: "BMW", model: "E12", mileage: 50000, titleStatus: "salvage", automatic: false},
                {id: 4, VIN: 'rK2K6fwG49KZu54nd', make: "Audi", model: "S5", mileage: 0, titleStatus: "clean", automatic: true},
                {id: 5, VIN: 'safS9h9bDC1yeW1NJ', make: "Aston Martin", model: "DB5", mileage: 30000, titleStatus: "salvage", automatic: false}
            ]);
        });
};
