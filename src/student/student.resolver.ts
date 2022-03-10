import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './inputs/create-student.input';
import { GetStudentInput } from './inputs/get-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  student(
    @Args('getStudentInput') getStudentInput: GetStudentInput,
  ): Promise<StudentType> {
    return this.studentService.getStudent(getStudentInput);
  }

  @Query(() => [StudentType])
  students(): Promise<StudentType[]> {
    return this.studentService.getAllStudents();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(createStudentInput);
  }
}
