import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {


    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    contactNumber: number;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);