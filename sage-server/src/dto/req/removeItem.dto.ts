import {ApiProperty} from "@nestjs/swagger";


export class RemoveItemDTO {
    @ApiProperty()
    itemId!: string;
}
