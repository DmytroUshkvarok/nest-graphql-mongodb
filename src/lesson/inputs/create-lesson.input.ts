import { Field, ID, InputType } from '@nestjs/graphql';
import {
  IsDateString,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
@InputType()
export class CreateLessonInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  title: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  @IsUUID('4', { each: true })
  students: string[];
}
