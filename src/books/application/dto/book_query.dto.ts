import { Type } from "class-transformer";
import { IsOptional, IsString, Matches } from "class-validator";

export class BookQueryDto {
    @IsOptional()
    // @Type(() => Number)
    @Matches(/^\d*\.?\d*$/, {
        message: "Price must me a valid money value"
    })
    price: number;

    @IsOptional()
    @IsString()
    @Matches(/^[A-Za-z]+$/, {
        message: "Phrase should only contain alphabet letters"
    })
    phrase: string;
}