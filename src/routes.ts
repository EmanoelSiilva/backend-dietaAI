import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {
        let responseText = "```json\n{\n  \"nome\": \"Emanoel\",\n  \"sexo\": \"masculino\",\n  \"idade\": 23,\n  \"altura\": 1.87,\n  \"peso\": 93,\n  \"objetivo\": \"Perder peso\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"1 xícara de aveia em flocos\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\",\n        \"1 colher de sopa de chia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n        \"1 iogurte grego desnatado\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido no vapor\",\n        \"Salada verde com azeite de oliva e vinagre\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 fatia de queijo branco\",\n        \"1 maça\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 iogurte desnatado com 1 colher de sopa de granola\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteína do soro do leite\",\n    \"Creatina\",\n    \"Multivitamínico\"\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject })
        } catch (error) {
            console.log("Deu erro no teste: ", error)
        }
        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}