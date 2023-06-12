import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsEmail(
    {},
    {
      message: 'Please enter a correct email',
    },
  )
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(8)
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
