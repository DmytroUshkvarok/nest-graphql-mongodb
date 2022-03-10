import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
@InputType()
export class CreateStudentInput {
  @Field()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  firstName: string;

  @Field()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  lastName: string;
}
