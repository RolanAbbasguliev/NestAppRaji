import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TrackModule } from "./track/track.module";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { MessagesModule } from "./messages/messages.module";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, "static") }),
    AuthModule,
    TrackModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MessagesModule,
    FileModule,
  ],
  controllers: [AppController],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: AtGuard,
  //   },
  // ],
})
export class AppModule {}
