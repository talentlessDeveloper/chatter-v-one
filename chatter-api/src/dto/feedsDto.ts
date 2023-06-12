import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsObject,
} from 'class-validator';

export class FeedsDto {
  @IsNotEmpty()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(200)
  readonly description: string;
  @IsString()
  readonly image: string;
}
