import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type OptionsDocument = Options & Document;
@Schema()
export class Options {
    @Prop({required:true})
    stage: string;
    @Prop({required:true, unique:true, lowercase:true})
    value: string;
}
export const OptionsSchema = SchemaFactory.createForClass(Options)
