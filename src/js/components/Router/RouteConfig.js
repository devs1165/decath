import Layout from './../Layout';
import Home from './../Home';

const Routes = [
  	{
		path : "/",
		exact : false,
		component : Layout,
		routes : [
			{
                path: "/",
                exact: true,
                component: Home
            },
		]
	}
]

export default Routes;