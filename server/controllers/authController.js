const User = require("../models/user");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const registerControlller = async (req, res) => {
  try {
    const { username, email, contact, password } = req.body;
    if (!username || !email || !contact || !password) {
      return res
        .status(200)
        .json({ message: "all feilds are required", status: 401 });
    }

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res
        .status(200)
        .json({ message: "user already exist", status: 409 });
    }
    const saltval = 10;
    const hashedPassword = await bcrypt.hash(password, saltval);
    const newUser = new User({
      username,
      email,
      contact,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "New user created",
      status: 201,
    });
  } catch (e) {
    return res.status(500).json({ message: "internal server error", e });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(200)
        .json({ message: "All fields are required", status: 400 });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ message: "User not found, please sign up", status: 404 });
    }

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ message: "Incorrect password", status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userid: user._id,
        name: user.username,
        email: user.email,
      },
      "this_is_secret_key",
      { expiresIn: "1d" } // Optional: token expiration
    );

    return res.status(200).json({
      message: "User logged in successfully",
      status: 200,
      token,
      username: user.username,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(200)
      .json({ message: "Something went wrong", status: 500 });
  }
};

module.exports = { registerControlller, loginController };
