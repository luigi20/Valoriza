import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("users")
export class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    creat_at: Date;

    @UpdateDateColumn()
    update_at: Date

    constructor(id: string, name: string, email: string) {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default User;