import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson() {
    return {
      id: 'test',
      name: 'testName',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(() => LessonType)
  createLesson(@Args() createLessonDto: CreateLessonDto) {
    return this.lessonService.createLesson(createLessonDto);
  }
}
