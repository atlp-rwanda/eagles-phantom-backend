import { paginate } from 'paginate-info';
import model from '../database/models';

const { Bus } = model;

const createBus = async (req, res) => {
  try {
    const existingBus = await Bus.findOne({
      where: { busPlate: req.body.busPlate },
    });
    if (existingBus) {
      return res.status(400).json({
        status: 400,
        message: res.__('Bus already exists in the system.'),
      });
    }
    const bus = await Bus.create(req.body);
    return res.status(200).json({
      status: 200,
      message: res.__('Bus created successfully.'),
      Bus: bus,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getAllBuses = async (req, res) => {
  try {
    const { query: { page = 1, limit = 10 } } = req;
    const offset = (page - 1) * limit;
    const { rows, count } = await Bus.findAndCountAll({
      page,
      limit,
      offset,
    });
    const pagination = paginate(page, count, rows, limit);

    if (offset >= count) {
      res.status(401).json({
        message: res.__('There are no buses registered in the system'),
      });
    }
    return res.status(200).json({
      pagination,
      rows,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
};

const getBusById = async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findOne({
      where: { id },
    });
    if (!bus) {
      return res.status(401).json({
        status: 401,
        message: res.__("The bus searched doesn't exist in the system"),
      });
    }
    return res.status(200).json({
      status: 200,
      message: res.__('Bus retrieved successfully'),
      bus,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const updateBus = async (req, res) => {
  try {
    const {
      busPlate, busStatus, busLocation, busCompany, busSeats,
    } = req.body;

    const updated = await Bus.update(
      {
        busPlate, busCompany, busSeats, busStatus, busLocation,
      },
      {
        where: { id: req.params.id },
      },
    );

    if (updated) {
      const updatedBus = await Bus.findOne({ where: { id: req.params.id } });
      return res.status(200).json({
        status: 200,
        message: res.__('Bus updated successfully'),
        bus: updatedBus,
      });
    }
    return res.status(400).json({
      status: 400,
      message: res._('Bus not updated.'),
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteById = await Bus.destroy({
      where: { id },
    });
    if (deleteById) {
      return res.status(200).json({
        status: 200,
        message: res.__('Bus deleted successfully.'),
      });
    }
    return res.status(403).json({
      status: 403,
      message: res.__(
        "The bus you're trying to delete doesn't exist in the system",
      ),
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

module.exports = {
  createBus,
  getAllBuses,
  getBusById,
  updateBus,
  deleteBus,
};
