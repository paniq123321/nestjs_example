import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './conception/middleware';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [FlowersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}//вот примерно так можно добавить middleware (LoggerMiddleware -- функция в conception/middleware )
