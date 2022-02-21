import Model from './model.js';
import { makeWidgets } from './widgets.js';

const model = new Model();
model.init();
makeWidgets(model);
