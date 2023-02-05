"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'bitcoin_candles',
    entities: ['src/utils/database/sqlite/entities/*{.ts,.js}'],
    migrations: ['src/utils/database/sqlite/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrationsRun: true,
    synchronize: false
});
//# sourceMappingURL=data-source.js.map