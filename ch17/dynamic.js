'use strict'

// remember (?:<subexpr>) is a non-capturing group

const users = ["mary", "nick", "arthur", "sam", "yvette"];
const text = "User @arthur started the backup and 15:15, " +
  "and @nick and @yvette restored it at 18:35.";
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');

const res = text.match(userRegex); // [ "@arthur", "@nick", "@yvette" ]

console.log(res);
