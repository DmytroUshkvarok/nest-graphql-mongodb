import { ArgsType, Field } from '@nestjs/graphql';
import {
  IsDateString,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

@ArgsType()
export class CreateLessonDto {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
