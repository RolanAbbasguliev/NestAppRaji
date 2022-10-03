"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const hbs = require("hbs");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Raji records Web application")
        .setDescription("Documentation REST API")
        .setVersion("1.0.0")
        .addTag("Rolan Abbasguliev")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "public"));
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "views"));
    hbs.registerPartials((0, path_1.join)(__dirname, "..", "views/partials"));
    app.setViewEngine("hbs");
    let port = parseInt(process.env.PORT) || 5000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map