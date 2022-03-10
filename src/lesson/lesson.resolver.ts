import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentService } from 'src/student/student.service';
import { StudentType } from 'src/student/student.type';
import { AssignStudentsToLessonInput } from './inputs/assign-students-to-lesson.input';
import { CreateLessonInput } from './inputs/create-lesson.input';
import { GetLessonInput } from './inputs/get-lesson.input';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(() => LessonType)
  lesson(
    @Args('getLessonInput') getLessonInput: GetLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.getLesson(getLessonInput);
  }

  @Query(() => [LessonType])
  lessons(): Promise<LessonType[]> {
    return this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.assignStudentsToLesson(
      assignStudentsToLessonInput,
    );
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson): Promise<StudentType[]> {
    return this.studentService.getManyStudents(lesson.students);
  }
}
