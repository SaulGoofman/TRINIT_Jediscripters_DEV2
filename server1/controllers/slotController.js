import slotModel from "../models/slotModel.js";

// module.exports = {
//   findAllSlots,
//   findSlotById,
//   addSlot,
//   updateSlot,
//   deleteSlot,
// };

export function findAllSlots(req, res) {
  const date = req.query.date;

  if (date) {
    slotModel.find({ slotDate: date }, (error, data) => {
      if (error) {
        res.status(500).json({
          message: "testing",
          error: error,
        });
      } else if (data.length === 0) {
        res.status(404).json("no slot found on this date");
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    slotModel.find((error, data) => {
      if (error) {
        res.status(500).json({
          message: "error fetching slots",
          error: error,
        });
      } else {
        res.status(200).json(data);
      }
    });
  }
}

export function findSlotByTime(req, res) {
  const date = req.body.slotDate;
  const time = req.body.slotTime;

  if (date) {
    slotModel.find({ slotDate: date }, (error, data) => {
      if (error) {
        res.status(500).json({
          message: "testing",
          error: error,
        });
      } else if (data.length === 0) {
        res.status(404).json("no slot found on this date");
      } else {
        // res.status(200).json(data);
        data.find({ slotTime: time }, (error1, data1) => {
          if (error) {
            res.status(500).json({
              message: "testing",
              error: error,
            });
          } else if (data1.length === 0) {
            res.status(404).json("no slot found on this date");
          } else {
            res.status(200).json(data1);
          }
        });
      }
    });
  }
  // } else {
  //   slotModel.find((error, data) => {
  //     if (error) {
  //       res.status(500).json({
  //         message: 'error fetching slots',
  //         error: error
  //       });
  //     } else {
  //       res.status(200).json(data);
  //     }
  //   })
  // }
}

export function findSlotById(req, res) {
  const id = req.params.id;

  slotModel.findOne({ _id: id }, (error, data) => {
    if (error) {
      res.status(500).json({
        message: "error fetching slot",
        error: error,
      });
    } else if (!data) {
      res.status(404).json("no slot of such id exists");
    } else {
      res.status(200).json(data);
    }
  });
}

export function addSlot(req, res) {
  const input = req.body;
  const newSlot = new slotModel(input);
  newSlot.slotBooked = "false";

  newSlot.save((error, data) => {
    if (error) {
      res.status(500).json({
        message: "error adding new slot",
        error: error,
      });
    } else {
      res.status(201).json(data);
    }
  });
}

export function updateSlot(req, res) {
  const id = req.params.id;
  const input = req.body;

  slotModel.findOneAndUpdate({ _id: id }, input, (error, data) => {
    if (error) {
      res.status(500).json({
        message: "error deleting slot",
        error: error,
      });
    } else if (!data) {
      res.status(404).json("no slot of such id exists");
    } else {
      res.status(200).json({ removed: data });
    }
  });
}

export function deleteSlot(req, res) {
  const id = req.params.id;

  slotModel.findOneAndRemove({ _id: id }, (error, data) => {
    if (error) {
      res.status(500).json({
        message: "error deleting slot",
        error: error,
      });
    } else if (!data) {
      res.status(404).json("no slot of such id exists");
    } else {
      res.status(200).json({ removed: data });
    }
  });
}
