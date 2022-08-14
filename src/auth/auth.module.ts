import { Module } from '@nestjs/common';
import { TwitchController } from './twitch.controller';
import { TwitchStrategy } from './twitch.strategy';

@Module({
	providers: [TwitchStrategy],
	controllers: [TwitchController],
})
export class AuthModule { }
