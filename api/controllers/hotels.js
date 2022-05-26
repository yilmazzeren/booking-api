import Hotel from "../models/Hotel.js";

//CREATE HOTEL
export const CreateHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// UPDATE HOTEL
export const UpdateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // Returns updated data
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// DELETE HOTEL
export const DeleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};

// GET HOTEL
export const GetHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// GET ALL HOTELS
export const GetAllHotel = async (req, res, next) => {
  // const failed = true;
  // if (failed) return next(createError(401, "You are not authenticated!"));

  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
