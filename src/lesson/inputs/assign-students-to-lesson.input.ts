import { Field, ID, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
@InputType()
export class AssignStudentsToLessonInput {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  lessonId: string;

  @Field(() => [ID])
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  studentsIds: string[];
}
