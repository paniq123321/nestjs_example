import { Injectable } from '@nestjs/common';
import { Flower } from 'generated/prisma';
import { PrismaService } from '../prisma.service';



@Injectable()
export class FlowersService {
  constructor(private readonly prisma:PrismaService){

  }
  findAll(){
    return this.prisma.flower.findMany()
  }
}

// return [{
//   name : 'Rose',
//   color: 'red',
//   price: 5
// },
//   {
//     name : 'Lily',
//     color: 'white',
//     price: 10
//   },
//   {
//     name : 'Tulip',
//     color: 'yellow',
//     price: 7
//   }
// ]