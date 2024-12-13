import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';
import { COOKIE_KEY } from './shared/constants';
import { jwtDecode } from 'jwt-decode';
import { IToken } from './shared/types/middleware.contact';
import { RoleUser } from './shared/value-objects/role-user.value-object';

export const middleware = async (request: NextRequest) => {
  const cookie = request.cookies.get(COOKIE_KEY);
  const token = cookie?.value;
  const loginUrl = new URL('/login', request.url);
  const homeUrl = new URL('/', request.url);
  const adminUrl = new URL('/admin', request.url);

  if (token) {
    const tokenParsed: IToken = jwtDecode(token);
    if (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/login'
    ) {
      if (tokenParsed.role === RoleUser.ADMIN) {
        return NextResponse.redirect(adminUrl);
      }
      return NextResponse.redirect(homeUrl);
    } else {
      return NextResponse.next();
    }
  } else {
    if (
      request.nextUrl.pathname === '/' ||
      request.nextUrl.pathname.startsWith('/admin')
    ) {
      return NextResponse.redirect(loginUrl);
    } else {
      return NextResponse.next();
    }
  }
};

export const config: MiddlewareConfig = {
  matcher: ['/', '/admin', '/login', '/register'],
};
