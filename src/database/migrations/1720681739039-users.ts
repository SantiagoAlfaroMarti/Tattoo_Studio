import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1720681739039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy:"increment"
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                        length: "250",
                        isNullable: true
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                        length: "250",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "250",
                        isNullable: false
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                        length: "250",
                        isNullable: false
                    },
                    {
                        name: "roleId",
                        type: "int",
                        default: 1
                    },
                    {
                        name: "createdAt",
                        type: "datetime",
                        default: "now()",
                    },
                    {
                        name: "updatedAt",
                        type: "datetime",
                        default: "now()",
                        onUpdate: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["roleId"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "roles",
                        onDelete: "CASCADE"
                    },
                ]
            }),
            true
        )
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles')
        }
    }