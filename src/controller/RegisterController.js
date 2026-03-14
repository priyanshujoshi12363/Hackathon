import Driver from "../models/driver.model.js";
import { DriverData } from "../utils/Zomato_data.js";
export const Register = async (req, res) => {
  try {

    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required"
      });
    }
    const driver = DriverData.find(d => d.phone === phone);

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found in partner data"
      });
    }

    const existingDriver = await Driver.findOne({ phone });

    if (existingDriver) {
      return res.json({
        success: true,
        message: "Driver already registered",
        data: existingDriver
      });
    }

    const newDriver = new Driver(driver);

    await newDriver.save();

    res.status(201).json({
      success: true,
      message: "Driver registered successfully",
      data: newDriver
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};