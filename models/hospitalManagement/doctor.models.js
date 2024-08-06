import mongoose from 'mongoose';

const hospitalhoursSchema = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.OrderId,
    ref: 'Hospital',
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  departTime: {
    type: String,
    required: true,
  },
});
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: {
      type: [hospitalHoursSchema],
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
