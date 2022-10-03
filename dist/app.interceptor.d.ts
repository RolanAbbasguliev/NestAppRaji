import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from "rxjs";
export interface Response {
    dataTime: number;
}
export declare class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response>;
}
