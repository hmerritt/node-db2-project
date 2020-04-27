const db = require("../../data/dbConfig");


//  Get a car
function get(id=null) {
    if (id)
    {
        //  Get individial car
        return db("cars").where("id", id).first();
    }
    else
    {
        //  Get all cars
        return db("cars");
    }
}

//  Create a new car
function insert(car) {
    return db("cars").insert(car);
}

//  Update a car
function update(id, car) {
    return db("cars").where("id", id).update(car);
}

//  Delete car
function remove(id) {
    return db("cars").where("id", id).del();
}


//  Validators

//  Check if car id exists
function validateId() {
    return (req, res, next) => {
        get((req.params.id || null))
            .then((car) => {
                //  Check if car exists
                if (car) {
                    //  All good -> continue
                    //  Add car to request object
                    req.car = car;
                    next();
                } else {
                    res.status(400).json({
                        message: "invalid car id",
                    });
                }
            })
            .catch((error) => {
                next(error);
            });
    };
}

//  Validate the request body
function validateBody() {
    return (req, res, next) => {
        //  Check that the request body exists
        if (req.body) {
            //  Check for the required keys
            if (req.body.VIN || req.body.make || req.body.model || req.body.mileage) {
                //  Add car body to request
                req.carBody = {
                    VIN: req.body.VIN,
                    make: req.body.make,
                    model: req.body.model,
                    mileage: req.body.mileage,
                    titleStatus: req.body.titleStatus,
                    automatic: req.body.automatic
                };
                next();
            } else {
                res.status(400).json({
                    message: "missing required fields; VIN,make,model,mileage",
                });
            }
        } else {
            res.status(400).json({
                message: "missing car data",
            });
        }
    };
}


module.exports = {get, remove, insert, update, validateId, validateBody};
