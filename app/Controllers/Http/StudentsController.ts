import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from "App/Models/Student";

export default class StudentsController {
  public async index(ctx: HttpContextContract) {
    const students = await Student.all()
    const data = {
      title: 'sample',
      message: 'lucid',
      data: students
    }
    return ctx.view.render('students/index', data)
  }
}
