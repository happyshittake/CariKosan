import Firebase from 'firebase';
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const api = new Firebase('https://carikosan.firebaseio.com');
const store = new EventEmitter();
const itemsCache = Object.create(null);
