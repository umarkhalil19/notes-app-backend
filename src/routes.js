/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

// eslint-disable-next-line max-len
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deletNoteByIdHandler } = require('./handler');

/* eslint-disable eol-last */
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deletNoteByIdHandler,
    },
];

module.exports = routes;