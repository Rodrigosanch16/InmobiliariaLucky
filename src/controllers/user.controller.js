const User = require('../models/user.model');
const { Response } = require('../utils/response');


module.exports = {
    //get all users
    findAllUser: async(req, res) => {
        try {
            const usersFound = await User.find();
            console.log(usersFound)
            Response.success(res, usersFound);

        } catch (error) {
            console.log(error);
            Response.error(res);
        }

    },
    // find one user by id 
    findOneUser: async(req, res) => {
        const { id } = req.params
        try {
            const userFound = await User.findOne({ _id: id });
            // console.log(usersFound)
            Response.success(res, userFound);

        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },
    //create a new user
    createUser: async(req, res) => {
        const { body } = req;
        const user = new User(body);
        try {
            await user.save();
            Response.success(res, user);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },

    //update user properties
    updateUser: async(req, res) => {

    },

    //delete user using user's id
    deleteUser: async(req, res) => {
        const { id } = req.params;
        try {
            const userDeleted = await User.findByIdAndDelete(id);
            Response.success(res, userDeleted);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    }

}