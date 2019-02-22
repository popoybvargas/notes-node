const square = x => x * x;
console.log( square( 9 ));

const user =
{
	name: 'popoy',
	sayHi: () =>
	{
		console.log( arguments );
		console.log( `Hi. I'm ${this.name}.` );
	},
	sayHiAlt( lastName )
	{
		console.log( arguments );
		console.log( `Hi. I'm ${this.name} ${lastName}.` );
	}
};
user.sayHiAlt( 'vargas', 1, 2, 3 );