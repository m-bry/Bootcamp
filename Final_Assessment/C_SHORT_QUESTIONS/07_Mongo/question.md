# MongoDB/MongooseJS related question:

For testing these questions you may access the class server database using Studio 3T.

## Problem

You are building a social media platform that allows users to post messages and follow other users. Each message has a title, content, and a timestamp. Each user has a username, a list of followers, and a list of messages they have posted.

Your task is to design a MongoDB schema for this platform and write queries using MongooseJS to perform the following operations:
```js
const userSchema = new Schema({
    username: { type: String, required: true },
    followers: Array,
    messages: Array
});
UserModel = mongoose.model('User', userSchema);

const messageSchema - new Schema({
    title: {type: String, required: true},
    content: { message: { type: String, required: true }, 
    images: Array },
    timestamp: new Date(Date.now());
    author: { type: String, required: true}
});
MessageModel = mongoose.model('Message', messageSchema);
```

1. Insert a new user with a given username.
```js
newUser = new UserModel({
    username: 'given',
});
newUser.save()
.then(data=>console.log(data))
.catch(err=>console.log(`Error saving to db: ${err}`));

```

2. Insert a new message with a given title, content, and timestamp, and associate it with a given user.
```js
newMessage = new MessageModel({
    title: 'Shaboopy',
    content: {message: 'Hello World!'},
    author: 'given'
})

```

3. Retrieve all messages posted by a given user, sorted by timestamp in descending order.
```js
MessageModel.find({
    author: 'given'
}).sort({
    timestamp: -1
})
```