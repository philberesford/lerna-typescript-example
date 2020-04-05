import { Doctor } from 'doctor';
import { Patient } from 'patient';

export class Scheduler {
    get(id: number): Scheduler{
        return {} as Scheduler;
    }

    createAppointment(doctor: Doctor, patient: Patient): void {
        console.log(`Created an appointment between ${doctor} and ${patient}`);
    }
}
