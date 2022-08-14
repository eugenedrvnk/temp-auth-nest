import { OAuth2Strategy } from 'passport-twitch-new';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitchStrategy extends PassportStrategy(OAuth2Strategy) {
	constructor(
	) {
		super({
			clientID: 'x827kaful401uv6i5j0mpgbq0xwr8m',
			clientSecret: '47ad6ei4t1pp5jnz9p6im9tcyfolbz',
			callbackURL: 'http://127.0.0.1:3000/auth/twitch/redirect',
			scope: "user_read",
		});
	}

	async validate(payload
	) {
		console.log(payload);
		// return {
		//   provider: 'google',
		//   providerId: id,
		//   name: name.givenName,
		//   username: emails[0].value,
		// };
	}
}