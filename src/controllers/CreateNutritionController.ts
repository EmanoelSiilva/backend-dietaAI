import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateNutritionService } from '../services/CreateNutritionService'
import { DataProps } from '../interface/Infos'

export class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, weight, lenght, age, gender, objective, level} = request.body as DataProps

        const create = new CreateNutritionService()

        const nutrition = await create.execute({ name, weight, lenght, age, gender, objective, level})

        reply.send(nutrition)
    }
}