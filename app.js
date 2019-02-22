const fs = require( 'fs' );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );

const notes = require( './notes' );

const titleOptions =
{
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const bodyOptions =
{
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};
const argv = yargs
	.command( 'add', 'add a new note',
	{
		title: titleOptions,
		body: bodyOptions
	})
	.command( 'list', 'list all notes' )
	.command( 'read', 'read a note',
	{
		title: titleOptions
	})
	.command( 'remove', 'remove a note',
	{
		title: titleOptions
	})
	.help()
	.argv;
const command = argv._[ 0 ];

if ( command === 'list' )
{
	const allNotes = notes.getAll();
	console.log( `Printing ${allNotes.length} note(s).` );
	allNotes.forEach( note => notes.logNote( note ));
}
else if ( command === 'add' )
{
	const note = notes.addNote( argv.title, argv.body );

	if ( note )
	{
		console.log( 'Note created:' );
		notes.logNote( note );
	}
	else
	{
		console.error( `Note entitled "${argv.title}" already exist!` );
	}
}
else if ( command === 'read' )
{
	const note = notes.getNote( argv.title );
	
	note ? notes.logNote( note ) : console.error( 'Note not found!' );
}
else if ( command === 'remove' )
{
	notes.removeNote( argv.title ) ? console.log( `Note "${argv.title}" was removed!` ) : console.log( 'Note not found!' );
}
else
{
	console.error( 'command not recognized' );
}