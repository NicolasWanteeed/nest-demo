import {
  Equals,
  IsBooleanString,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsDefined()
  @IsNotEmpty()
  firstname: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @MinLength(6)
  password: string;

  @IsDefined()
  @IsBooleanString()
  @Equals('true')
  tos: boolean;
}
