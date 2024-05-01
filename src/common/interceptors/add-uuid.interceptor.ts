import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AddUUIDInterceptor<T> implements NestInterceptor<T, T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    const uuid = uuidv4();
    const request = context.switchToHttp().getRequest();

    if (request.body) {
      request.body.id = uuid;
    }

    return next.handle().pipe(map((data) => data));
  }
}
