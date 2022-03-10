import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class GetStudentInput {
  @Field()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;
}
