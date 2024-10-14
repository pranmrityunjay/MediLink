import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import DoctorModel from "../models/doctorModel.js";
import AppointmentModel from "../models/appointmentModel.js";

const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await DoctorModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const appointmentsDoctor = async (req, res) => {
    try {
        const { docId } = req.body
        const appointments = await AppointmentModel.find({ docId })
        res.json({ success: true, appointments })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const appointmentCancel = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body
        const appointmentData = await AppointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await AppointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }
        res.json({ success: false, message: 'Appointment Cancelled' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const appointmentComplete = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body
        const appointmentData = await AppointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await AppointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }
        res.json({ success: false, message: 'Appointment Cancelled' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const doctorList = async (req, res) => {
    try {
        const doctors = await DoctorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, doctors })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

const changeAvailablity = async (req, res) => {
    try {
        const { docId } = req.body
        const docData = await DoctorModel.findById(docId)
        await DoctorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const doctorProfile = async (req, res) => {
    try {
        const { docId } = req.body
        const profileData = await DoctorModel.findById(docId).select('-password')
        res.json({ success: true, profileData })
    } catch (error) {
        // console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const updateDoctorProfile = async (req, res) => {
    try {
        const { docId, fees, address, available } = req.body
        await DoctorModel.findByIdAndUpdate(docId, { fees, address, available })
        res.json({ success: true, message: 'Profile Updated' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const doctorDashboard = async (req, res) => {
    try {
        const { docId } = req.body
        const appointments = await AppointmentModel.find({ docId })
        let earnings = 0
        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })
        let patients = []
        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })
        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }
        res.json({ success: true, dashData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginDoctor,
    appointmentsDoctor,
    appointmentCancel,
    doctorList,
    changeAvailablity,
    appointmentComplete,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
}