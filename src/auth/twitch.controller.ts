import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth/twitch')
export class TwitchController {
  @Get()
  @UseGuards(AuthGuard('twitch'))
  async googleAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards()
  async googleAuthRedirect(@Req() req, @Res() res) {
    // For now, we'll just show the user object
    return (req as any).user;
  }
}