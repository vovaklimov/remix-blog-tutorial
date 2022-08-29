import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findFirst({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "title" | "slug" | "markdown">
) {
  return prisma.post.create({ data: post });
}

export async function updatePost({
  slug,
  title,
  markdown,
}: Pick<Post, "slug" | "title" | "markdown">) {
  return prisma.post.update({
    where: { slug },
    data: { slug, title, markdown },
  });
}

export type { Post };
