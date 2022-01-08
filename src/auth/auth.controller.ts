import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCrednetialDto: AuthCredentialDTO,
  ): Promise<void> {
    return this.authService.signUp(authCrednetialDto);
  }

  @Post('/singin')
  singIn(
    @Body(ValidationPipe) authCrednetialDto: AuthCredentialDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.singIn(authCrednetialDto);
  }
}
