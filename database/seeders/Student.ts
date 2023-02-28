import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from "App/Models/Student";

export default class extends BaseSeeder {
  public async run() {
    await Student.createMany([
      {
        name: 'yoshiya',
        code: 's21023'
      },
      {
        name: 'seiga',
        code: 's21010'
      },
      {
        name: 'yuito',
        code: 's21018'
      }
    ])
  }
}
