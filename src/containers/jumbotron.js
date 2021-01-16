import React from 'react';
import jumboData from '../fixtures/jumbo.json'
import { Jumbotron } from '../components'
export function JumbotronContainer () {
	return (
		<Jumbotron.Container>
			{jumboData.map((item) => {
			console.log('iteeeeeeeeem', item.image);
			return(
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane> 
						<Jumbotron.Title> <p>{item.title}</p> </Jumbotron.Title>
						<Jumbotron.SubTitle> <p>{item.subTitle}</p> </Jumbotron.SubTitle>
				  </Jumbotron.Pane>
				  <Jumbotron.Pane> 
						<Jumbotron.Image image={item.image} >  </Jumbotron.Image>
					</Jumbotron.Pane>
		    </Jumbotron>
			)
})}
		</Jumbotron.Container>
	)
}
