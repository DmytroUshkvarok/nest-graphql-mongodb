import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 } from 'uuid';
import { CreateLessonInput } from './inputs/create-lesson.input';
import { GetLessonInput } from './inputs/get-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(getLessonInput: GetLessonInput): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({
      id: getLessonInput.id,
    });

    if (!lesson) {
      throw new NotFoundException(
        `Lesson with id '${getLessonInput.id}' was not found.`,
      );
    }

    return lesson;
  }

  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: v4(),
      title: createLessonInput.title,
      startDate: createLessonInput.startDate,
      endDate: createLessonInput.endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
