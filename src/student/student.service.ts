import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { CreateStudentInput } from './inputs/create-student.input';
import { GetStudentInput } from './inputs/get-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async getStudent(getStudentInput: GetStudentInput): Promise<Student> {
    const student = await this.studentRepository.findOne({
      id: getStudentInput.id,
    });

    if (!student) {
      throw new NotFoundException(
        `Student with id '${getStudentInput.id}' was not found.`,
      );
    }

    return student;
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const student = this.studentRepository.create({
      id: v4(),
      firstName: createStudentInput.firstName,
      lastName: createStudentInput.lastName,
    });

    return this.studentRepository.save(student);
  }
}
