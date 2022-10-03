import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from "rxjs";

export interface Response {
  dataTime: number;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {

    const now = Date.now();
    return next
      .handle()
      .pipe(map(() => { return {dataTime: Date.now() - now} } ));
  }
}
