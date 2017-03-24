// truncate.ts
import {Pipe} from '@angular/core'

@Pipe({
  name: 'servicetrunk'
})
export class servicetrunk {
  transform(value: string, args: string[]): string {
    //let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    //let trail = args.length > 1 ? args[1] : '...';

    //return value.length > limit ? value.substring(0, limit) + trail : value;
		for (var i= 0; i < args.length;i++)
		{
			value=value.replace(args[i], '')
		}


		return value;
  }
}