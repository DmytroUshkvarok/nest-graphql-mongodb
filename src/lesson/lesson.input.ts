import { Field, InputType } from '@nestjs/graphql';
import {
  IsDateString,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class GetLessonInput {
  @Field()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;
}

@InputType()
export class CreateLessonInput {
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
