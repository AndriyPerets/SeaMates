import Realm from 'realm';
//
// interface ITodoItem {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// export interface IRealm {
//   objects<T extends Realm.Object>(type: string): Realm.Results<T>;
//   write(callback: (realm: Realm) => void): void;
//   create(type: string, value: Realm.Object): Realm.Object & Realm.ObjectSchema;
//   objectForPrimaryKey<T extends Realm.Object>(type: string, key: any): T | null;
// }
//
// const realm = new Realm({
//   name: 'TodoItem',
//   properties: {
//     id: 'int',
//     title: 'string',
//     completed: 'bool',
//   },
//   prototype: {
//     id: 0,
//     title: '',
//     completed: false,
//   },
// };
//
// export class TodoItem extends Realm.Object implements ITodoItem {
//   public id!: number;
//   public title!: string;
//   public completed!: boolean;
// }
//
// // const realm = new Realm({ schema: [TodoItemSchema] });
//
// export default realm;
