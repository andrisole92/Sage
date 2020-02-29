import {ApiProperty} from "@nestjs/swagger";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class ReorderItem {
    @ApiProperty()
    readonly id!: number;
    @ApiProperty()
    readonly order!: number;
}

export class ReorderListDTO {
    @ApiProperty()
    readonly listId!: number;
    @ApiProperty({type: [ReorderItem]})
    readonly items!: ReorderItem[];
}
