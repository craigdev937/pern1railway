import { dBase } from "../config/database.js";

class PlayerClass {
    Create = async (req, res, next) => {
        try {
            const { first, last, age, info, image } = req.body;
            const createQuery = `INSERT INTO friends 
            (first, last, age, info, image)
            VALUES($1, $2, $3, $4, $5) RETURNING *`;
            const values = [first, last, age, info, image];
            const newFriend = 
                await dBase.query(createQuery, values);
            res.status(201).json(newFriend.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            const fetchAllQry = "SELECT * FROM friends";
            const allFriends = await dBase.query(fetchAllQry);
            res.status(201).json(allFriends.rows);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    GetOne = async (req, res, next) => {
        try {
            const { id } = req.params;
            const getOneQuery = `SELECT * FROM friends WHERE id = $1`;
            const values = [id];
            const friend = await dBase.query(getOneQuery, values);
            res.status(201).json(friend.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { first, last, age, info, image } = req.body;
            const updateQry = `UPDATE friends 
            SET first=$1, last=$2, age=$3, info=$4, image=$5 
            WHERE id = $6 RETURNING *`;
            const values = [first, last, age, info, image, id];
            const updateFriend = await dBase.query(updateQry, values);
            res.status(201).json(updateFriend);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deleteQry = "DELETE FROM friends WHERE id = $1";
            const values = [id];
            const deleteFriend = await dBase.query(deleteQry, values);
            res.status(201).json(deleteFriend);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const PLAYER = new PlayerClass();




