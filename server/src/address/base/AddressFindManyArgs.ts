/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereInput } from "./AddressWhereInput";
import { Type } from "class-transformer";
import { AddressOrderByInput } from "./AddressOrderByInput";

@ArgsType()
class AddressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;

  @ApiProperty({
    required: false,
    type: AddressOrderByInput,
  })
  @Field(() => AddressOrderByInput, { nullable: true })
  @Type(() => AddressOrderByInput)
  orderBy?: AddressOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AddressFindManyArgs };
