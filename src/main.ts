import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const hbs = require("hbs");

  const config = new DocumentBuilder()
    .setTitle("Raji records Web application")
    .setDescription("Documentation REST API")
    .setVersion("1.0.0")
    .addTag("Rolan Abbasguliev")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.useStaticAssets(join(__dirname, "..", "views"));

  hbs.registerPartials(join(__dirname, "..", "views/partials"));
  app.setViewEngine("hbs");

  let port = parseInt(process.env.PORT) || 5000;
  await app.listen(port);
}

bootstrap();
