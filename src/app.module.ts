import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [CustomersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'customers', method: RequestMethod.GET });
  }
}
