import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('guard')
    const request = context.switchToHttp().getRequest();
    const iaAuth = request.headers.authorization === 'secret';
    if(!iaAuth) throw new UnauthorizedException('not authorized');
    return iaAuth;
  }
}




