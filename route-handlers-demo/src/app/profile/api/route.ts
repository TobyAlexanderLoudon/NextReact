import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  cookies().set('requestsPerPage', '20');

  const auth = requestHeaders.get('Authorization');
  const auth2 = headerList.get('Authorization');
  const theme = request.cookies.get('theme');
  const requestsPerPage = cookies().get('requestsPerPage');

  return new Response(JSON.stringify({ auth, auth2, theme, requestsPerPage }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'theme=dark',
    },
    status: 200,
  });
}
