import { table } from "console";
import { query } from "express";
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1614368683321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new table({
                nome: "users",
                colums: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true 
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
