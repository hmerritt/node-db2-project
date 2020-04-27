const express = require("express");
const db = require("./carsDb");

const router = express.Router();

//  Get all cars
router.get("/", db.validateId(), async (req, res, next) => {
    res.send(req.car);
});

//  Get individial car
router.get("/:id", db.validateId(), async (req, res, next) => {
    res.send(req.car);
});

//  Create a new car
router.post("/", db.validateBody(), async (req, res, next) => {
    try {
        const [car_id] = await db.insert(req.carBody);
        res.json({
            id: car_id,
            ...req.carBody
        });
    }
    catch (err) {
        next(err);
    }
});

//  Update an car
router.put("/:id", db.validateBody(), db.validateId(), async (req, res, next) => {
    try {
        const car = await db.update(req.car.id, req.carBody);
        res.json({
            id: req.car.id,
            ...req.carBody
        });
    }
    catch (err) {
        next(err);
    }
});

//  Delete an car
router.delete("/:id", db.validateId(), async (req, res, next) => {
    try {
        const car = await db.remove(req.car.id);
        if (car) {
            res.json({
                message: `car {${req.car.id}} deleted successfully`
            });
        }
        else
        {
            next(err);
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;
