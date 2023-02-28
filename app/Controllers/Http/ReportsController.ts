import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import session from "Config/session";

export default class ReportsController {
  public async index({view}: HttpContextContract) {
    const data = {
      title: 'Report',
      message: 'メッセージを送信',
    }
    return view.render('reports/index', data)
  }
}
