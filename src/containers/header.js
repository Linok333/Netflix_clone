import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} alt="netflix"
					src="https://raw.githubusercontent.com/karlhadwen/netflix/ce10cd50b79b65d87595e91b2f1d228764622f59/src/logo.svg"/>
				<Header.ButtonLink to={ROUTES.SIGN_IN}> Sign in  </Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
}
