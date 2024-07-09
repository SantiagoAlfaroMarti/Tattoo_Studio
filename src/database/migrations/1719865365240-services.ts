import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Service1719865365240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "service_name",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "text"
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services')
    }

}