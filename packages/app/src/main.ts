import { Scheduler } from 'scheduler';
import { Doctor } from '../../doctor/lib/doctor';
import { Patient } from '../../patient/lib/patient';

const scheduler = new Scheduler();
const doctor = new Doctor();
const patient = new Patient();
scheduler.createAppointment(doctor, patient);