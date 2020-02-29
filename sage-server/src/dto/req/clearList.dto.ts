import {ApiProperty} from "@nestjs/swagger";

export class ClearListDTO {
    @ApiProperty()
    listId!: string
}
