import { Edge } from 'edge.js';

const edge = new Edge({ cache: process.env.NODE_ENV === 'production' });

export default function (filePath, options, callback) {
  const viewsPath = options.settings && options.settings.views;
  edge.mount(viewsPath);

  let view;
  let error;

  try {
    view = edge.render(filePath, options);
  } catch (err) {
    error = err;
  }

  callback(error, view);
}
