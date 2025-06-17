import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from '../conception/interceptor';
import { ParseIntPipe } from '../conception/pipe';
import { FlowersService } from './flowers.service';
import { AuthGuard } from 'src/conception/guard'

@Controller('flowers')
@UseInterceptors(LoggerInterceptor)
export class FlowersController {

  constructor(private readonly flowersService: FlowersService) {}

  //Get отвечает за получения нового параметра после основного например /flowers/green || если ничего нет то считается корневым
  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }
}

// import { Controller, Get, Post, Query, Req, Res, Body } from '@nestjs/common';
// import { ParseIntPipe } from '../conception/pipe';
// import { FlowersService } from './flowers.service';
//
// @Controller('flowers')
// export class FlowersController {
//   constructor(private readonly flowersService: FlowersService) {}
//
//   //Get отвечает за получения нового параметра после основного например /flowers/green || если ничего нет то считается корневым
// @UseGuards(AuthGuard('jwt'))
// @Auth('admin')
//   @Get(':id')
//   findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number){
//     console.log(pageNumber)
//     return this.flowersService.findAll();
//   }

  // @Post()
  // addNewFlower(@Body, @Res, @Req){ //@Query --- будет возвращать query параметры. например: name='ilya' (возврощает все после ? в url)
  //   console.log('res: ' + Res + '\n')
  //   console.log('body: ' + Body + '\n')
  //   console.log('req: ' + Req + '\n')
  //   return
  // }
//}




















