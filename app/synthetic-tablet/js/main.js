import { Model } from './model.js';
import { makeWidgets } from './widgets.js';
import { saveImage } from './save-image.js';
import { setupAutomate } from './automate.js';

const model = new Model();
model.init()
makeWidgets(model);
saveImage(model.renderer);
setupAutomate(model);
