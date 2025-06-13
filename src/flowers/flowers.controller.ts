import { Controller, Get, Post, Query, Req, Res, Body } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  //Get отвечает за получения нового параметра после основного например /flowers/green || если ничего нет то считается корневым
  @Get()
  findAll(){
    console.log('Controller')
    return this.flowersService.findAll();
  }
  // @Post()
  // addNewFlower(@Body, @Res, @Req){ //@Query --- будет возвращать query параметры. например: name='ilya' (возврощает все после ? в url)
  //   console.log('res: ' + Res + '\n')
  //   console.log('body: ' + Body + '\n')
  //   console.log('req: ' + Req + '\n')
  //   return
  // }
}
