import {ApiProperty} from "@nestjs/swagger";

export class AddItemDTO {
    @ApiProperty()
    listId!: string;
    @ApiProperty()
    title!: string;
}
