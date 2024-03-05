import { NextRequest } from 'next/server';
import { comments } from './data';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const query = params.get('query');
  const requestedComments = query
    ? comments.filter((comments) => comments.text.includes(query))
    : comments;

  return new Response(JSON.stringify(requestedComments), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
