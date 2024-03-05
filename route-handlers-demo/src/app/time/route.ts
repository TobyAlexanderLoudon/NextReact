import { type NextRequest } from 'next/server';

// cached by default. Use this to disable.
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const time = {
    time: new Date().toLocaleTimeString(),
  };

  return new Response(JSON.stringify(time), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}
