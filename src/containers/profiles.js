import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src="https://raw.githubusercontent.com/karlhadwen/netflix/ce10cd50b79b65d87595e91b2f1d228764622f59/src/logo.svg" alt="Netflix" />
				</Header.Frame>
			</Header>

			<Profiles>
				<Profiles.Title>Who is watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
						data-testid="user-profile"
					>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
}
