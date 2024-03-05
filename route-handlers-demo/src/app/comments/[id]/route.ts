import { comments } from '../data';
import { redirect } from 'next/navigation';

function getComment(id: string) {
  return comments.find((comment) => comment.id === parseInt(id));
}

function getCommentIndex(id: string) {
  return comments.findIndex((comment) => comment.id === parseInt(id));
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = getComment(params.id);

  if (!comment) {
    redirect('/comments');
  }

  return new Response(JSON.stringify(comment), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const commentIndex = getCommentIndex(params.id);
  comments[commentIndex].text = body.text;

  return new Response(JSON.stringify(comments[commentIndex]), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndex = getCommentIndex(params.id);
  const deletedComment = comments[commentIndex];
  comments.splice(commentIndex, 1);

  return new Response(JSON.stringify(deletedComment), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}
