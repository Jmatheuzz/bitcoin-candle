"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candle = void 0;
const typeorm_1 = require("typeorm");
let Candle = class Candle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Candle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candle.prototype, "low", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candle.prototype, "high", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candle.prototype, "open", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candle.prototype, "close", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'final_date_time' }),
    __metadata("design:type", Date)
], Candle.prototype, "finalDateTime", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Candle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Candle.prototype, "updatedAt", void 0);
Candle = __decorate([
    (0, typeorm_1.Entity)({ name: 'candles' })
], Candle);
exports.Candle = Candle;
//# sourceMappingURL=candle.js.map