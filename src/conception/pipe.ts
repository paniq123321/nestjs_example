import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {

  transform(value: string): number {
    console.log('pipe')
    const val = parseInt(value, 10);
    if(isNaN(val)){
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}


