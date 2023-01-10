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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    root() {
        return {};
    }
    getRegistration() {
        return {};
    }
    getExclusive() {
        return {};
    }
    getLease() {
        return {};
    }
    getLicensInfo() {
        return {};
    }
    getPremium() {
        return {};
    }
    getTrackout() {
        return {};
    }
    getUnlimited() {
        return {};
    }
    getPrivacy() {
        return {};
    }
    getTerms() {
        return {};
    }
    getLogin() {
        return {};
    }
    chat() {
        return {};
    }
    track() {
        return {};
    }
};
__decorate([
    (0, common_1.Get)(["/", "index"]),
    (0, common_1.Render)("index.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("registration"),
    (0, common_1.Render)("registration.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRegistration", null);
__decorate([
    (0, common_1.Get)("exclusive"),
    (0, common_1.Render)("exclusiveTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getExclusive", null);
__decorate([
    (0, common_1.Get)("lease"),
    (0, common_1.Render)("leaseTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLease", null);
__decorate([
    (0, common_1.Get)("licensInfo"),
    (0, common_1.Render)("licensInfoTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLicensInfo", null);
__decorate([
    (0, common_1.Get)("premium"),
    (0, common_1.Render)("premiumTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPremium", null);
__decorate([
    (0, common_1.Get)("trackout"),
    (0, common_1.Render)("trackoutTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTrackout", null);
__decorate([
    (0, common_1.Get)("unlimited"),
    (0, common_1.Render)("unlimitedTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUnlimited", null);
__decorate([
    (0, common_1.Get)("privacy"),
    (0, common_1.Render)("privacyTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPrivacy", null);
__decorate([
    (0, common_1.Get)("terms"),
    (0, common_1.Render)("termsTracks.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTerms", null);
__decorate([
    (0, common_1.Get)("login"),
    (0, common_1.Render)("login.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLogin", null);
__decorate([
    (0, common_1.Get)("chat"),
    (0, common_1.Render)("chat.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "chat", null);
__decorate([
    (0, common_1.Get)("track"),
    (0, common_1.Render)("track.hbs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "track", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map