import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 } from 'uuid';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: v4(),
      name: createLessonDto.name,
      startDate: createLessonDto.startDate,
      endDate: createLessonDto.endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
