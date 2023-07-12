import { Controller, Get } from '@nestjs/common';

@Controller('doggo')
export class DoggoController {
    @Get()
    getAllDoggos(): string {
        return "All doggos gotten!"
    }
}
