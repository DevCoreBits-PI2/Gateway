import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

  @Injectable()                                                                                                                                                                               
  export class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const { isAdmin } = context.switchToHttp().getRequest();
      if (isAdmin !== true) {                                                                                                                                                    
        throw new ForbiddenException('Admin permissions required');
      }                                                                                                                                                                                       
      return true;                                          
    }             
  }
