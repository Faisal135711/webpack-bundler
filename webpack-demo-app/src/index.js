import { AlertService } from './app/alert.service';
import { run } from './app/app';
import { ComponentService } from './app/component.service';

import './main.scss';

const alertService = new AlertService();
const componentService = new ComponentService();

console.log('Hello');

run(alertService, componentService);
