import { prisma } from "../lib/prisma";
import { fastify } from 'fastify';
import { FastifyInstance } from "fastify";

export async function getAllpromptsRoute(app: FastifyInstance){

    app.get('/prompts', async () => {
        const prompts =  await prisma.prompt.findMany()
        return prompts
    })
    

}