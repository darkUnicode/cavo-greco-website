const products = [
	{
		src: '/images/products/halloumi-ravioli.jpg',
		title: 'Halloumi Ravioli',
		subtitle: '',
		vegan: false,
		smallDescription: 'Cypriot pasta specialty, filled with premium halloumi & flavored with dried mint leaves.',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/sundried-tomato-ravioli.jpg',
		title: 'Sundried Tomato Ravioli',
		subtitle: '',
		smallDescription: 'Our signature ravioli bursting with flavors of sundried tomato, fresh basil leaves, and luscious ricotta cheese.',
		vegan: false,
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/vegan-artichoke-ravioli.jpg',
		title: 'Vegan Artichoke Ravioli',
		subtitle: '',
		vegan: true,
		smallDescription: 'A zesty, flavorful, refreshing vegan pasta, filled with baby artichoke hearts & a pureé of garlic confit, elevated by the aromas of fresh dill & lemon zest.',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/creamy-spinach-ravioli.jpg',
		title: 'Creamy Spinach Ravioli',
		subtitle: '',
		vegan: false,
		smallDescription: 'A creamy, rich, and silky twist of the classic favorite comfort food.',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/four-cheese-ravioli.jpg',
		title: 'Four Cheese Ravioli',
		subtitle: '',
		vegan: false,
		smallDescription: 'A delightful combination of four Mediterranean cheeses that create the ideal balance of flavors and textures: ricotta, mozzarella, parmesan, gorgonzola.',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/vegan-mushroom-ravioli.jpg',
		title: 'Vegan Mushroom Ravioli',
		subtitle: '',
		vegan: true,
		smallDescription: 'One of our signature vegan pasta, filled with a portabello mushroom & balsamic caramelized onion pâté, and seasoned with fresh garden herbs',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/halloumi-fries.jpg',
		title: 'Halloumi Fries',
		subtitle: 'QUICK & EASY APPETIZER OR SIDE',
		vegan: false,
		smallDescription: 'The most mouthwatering delicacy of the modern era',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/beef-kibbeh.jpg',
		title: 'Beef Kibbeh',
		subtitle: '',
		vegan: true,
		smallDescription: 'A staple Mediterranean & Middle Eastern dish, also known as Koùpes or Kubbah',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	},
	{
		src: '/images/products/kibbeh-bites.jpg',
		title: 'Beef Kibbeh Bites',
		subtitle: 'The perfect finger food',
		smallDescription: 'The most mouthwatering delicacy of the modern era',
		description: `Try it as a:
		<ul>
					<li>Happy hour snack</li>
					<li>Passed Hors D'oeuvre</li>
					<li>Fun appetizer</li>
					<li>Picture-perfect food</li>
					</ul>`
	},
	{
		src: '/images/products/vegan-mushroom-bites.jpg',
		title: 'Vegan Mushroom Bites',
		subtitle: 'QUICK & EASY APPETIZER OR PLATTER',
		vegan: true,
		smallDescription: '',
		description: 'Serve with tahini sauce, or plain with lemon.'
	},
	{
		src: '/images/products/vegan-hummus-bites.jpg',
		title: 'Vegan Hummus Bites',
		subtitle: 'A MODERN TWIST ON A CLASSIC FAVORITE',
		vegan: true,
		smallDescription: '',
		description: 'Hummus is not only for pita.'
	},
	{
		src: '/images/products/premium-stuffed-olives.jpg',
		title: 'Premium Stuffed Olives',
		subtitle: 'A GUARANTEED CROWD PLEASER',
		smallDescription: 'Naturally cured, fleshy colossal olives from Halkidiki, Greece, bathed in our oil free signature brine.',
		description: `7 SAVORY STUFFINGS:
		<ul>
			<li>feta cheese</li>
			<li>blue cheese</li>
			<li>goat cheese & herbs</li>
			<li>ricotta & oregano</li>
			<li>ricotta, jalapēno & chia seeds</li>
			<li>ricotta & sundried tomato</li>
			<li>hummus & roasted red pepper</li>
			<li>pepper</li>
			</ul>`
	},
	{
		src: '/images/products/martini-olive-juice.jpg',
		title: 'Martini Olive Juice',
		subtitle: 'THE RIGHT INGREDIENT TO MAKE IT DIRTY',
		smallDescription: 'A highest quality classic mix made with Halkidiki olives.',
		description: `OLIVE FLAVOR PROFILE:
		<br>
					Halkidiki olives are large pale
					green olives, commonly harvested
					while still young. They are cured
					in a natural sea salt brine, which
					reduces their bitter compounds
					and makes them softer. They have
					a firm and fleshy texture, a fruity,
					buttery, briny and pleasantly sour
					flavor.`
	},
	{
		src: '/images/products/pita-pizza-halloumi.jpg',
		title: 'Halloumi Pita Pizza',
		subtitle: 'A GOURMET ALTERNATIVE TO MARGHERITA',
		smallDescription: 'With gooey cheese and a vibrant tomato sauce.',
		description: ''
	},
	{
		src: '/images/products/pita-pizza-mozzarella.jpg',
		title: 'Mozzarella Pita Pizza',
		subtitle: 'A SKINNY ALTERNATIVE TO MARGHERITA',
		smallDescription: 'With gooey cheese and a vibrant tomato sauce.',
		description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	}
]

export default products
