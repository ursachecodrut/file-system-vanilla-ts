import { Directory, File, FileSystem } from './models';

const file = new File('test', 'content test');
const one = new Directory('one');
const two = new Directory('two');
const fs = new FileSystem();
one.insertItem(two);
fs.insertItem(one);
// // console.log(two.path);
// console.log(fs.changeDirectory('one'));
console.log(fs.changeDirectory('./one'));
