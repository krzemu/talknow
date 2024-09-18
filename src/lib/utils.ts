import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prisma from './db';
import { posts } from '@prisma/client';


export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);


type getPostsProps = {
    category?: string | undefined;
    take?: number;
    skip?: number;
    tagSlug?: string;
}

export async function getPosts({ category, tagSlug, take, skip }: getPostsProps = {}): Promise<posts[]> {
    let users;
    if (category) {
        users = await prisma.posts.findMany({
            where: {
                category: capitalize(category),
                tags: tagSlug
            },
            take: take || 8,
            skip: skip || 0
        })
    } else {
        users = await prisma.posts.findMany({
            take: take || 8,
            skip: skip || 0
        });
    }

    return users;
}


export async function getPostBySlug(slug: string) {
    const post = await prisma.posts.findFirst({
        where: {
            slug
        }
    });

    return post;
}