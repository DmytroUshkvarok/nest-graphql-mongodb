import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonInput } from './inputs/create-lesson.input';
import { GetLessonInput } from './inputs/get-lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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
}
