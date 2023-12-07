const userModel = require("../MongoDB/Model/UserModel");

//generate the user ID
function generateRandomId() {
  const min = 1000;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return `U${randomNumber}`;
}

async function postUser(req, res) {
  try {
    let data = req.body;
    let { email } = data;
    let users = await userModel.find().sort("-createdAt");

    // Check if the email already exists
    let emailFound = users.find((e) => e.email === email);

    if (emailFound) {
      res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    } else {
      // Generate a unique id for each user
      let id = generateRandomId();

      // Include the id in the newUser object
      let newUser = new userModel({ ...data, id });

      // Save the user to the database
      await newUser.save();

      // Respond with a success message or the newly created user data
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    }
  } catch (error) {
    // Handle validation or database errors
    console.error("Error creating user:", error.message);

    // Respond with an error message and appropriate status code
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

async function getUsers(req, res) {
  try {
    let users = await userModel.find().sort("-createdAt");
    if (!users || users.length === 0) {
      throw new Error("No Users Found");
    } else {
      return res.status(200).json({
        success: true,
        message: "All Users Retrieved Successfully!",
        users: users,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

async function updateUser(req, res) {
 try{
    const id = req.params.id;
    const userToUpdate = req.body;
    const updatedData = await userModel.findOneAndUpdate(
      { id: id },
      { $set: userToUpdate },
      { new: true }
    );
    if (updatedData) {
      return res.status(200).json({
        success: true,
        message: "User Updated Successfully!",
        data: updatedData,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Failed to Update User",
      });
    } 
 }
 catch(err){
    return res.status(500).json({
        success: false,
        message: 'Error Occurred',
        })
}
}

async function deleteUser(req, res) {
  try{
    const id = req.params.id;
  const deletedUser = await userModel.deleteOne({ id: id });
  if (!deletedUser) {
    return res.status(401).json({
      success: false,
      message: "Failed to Delete User",
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "Successfully Deleted User!",
    });
  }
  } 
  catch(err){
    return res.status(500).json({
        success: false,
        message: 'Error Occurred',
        })
        }
}

module.exports = {
  postUser,
  getUsers,
  updateUser,
  deleteUser,
};
