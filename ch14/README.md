# Resources

There was a problem with the Generator example.
The code was causing errors about unhandled promise rejections being deprecated.
And the exceptions are not handle synchronouly from the caller.
i.e., It says that "Exception handling works with synchronous semantics, as enabled by generator runners"
But that didn't seem to be entirely true.

* https://github.com/tj/co
* https://koajs.com/
* https://github.com/kriskowal/q
