"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCandlesTables1675430177109 = void 0;
const typeorm_1 = require("typeorm");
class createCandlesTables1675430177109 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'candles',
            columns: [
                new typeorm_1.TableColumn({
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }),
                new typeorm_1.TableColumn({
                    name: 'low',
                    type: 'float'
                }),
                new typeorm_1.TableColumn({
                    name: 'high',
                    type: 'float'
                }),
                new typeorm_1.TableColumn({
                    name: 'open',
                    type: 'float'
                }),
                new typeorm_1.TableColumn({
                    name: 'close',
                    type: 'float'
                }),
                new typeorm_1.TableColumn({
                    name: 'final_date_time',
                    type: 'timestamp'
                }),
                new typeorm_1.TableColumn({
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }),
                new typeorm_1.TableColumn({
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('candles');
    }
}
exports.createCandlesTables1675430177109 = createCandlesTables1675430177109;
//# sourceMappingURL=1675430177109-create_candles_tables.js.map