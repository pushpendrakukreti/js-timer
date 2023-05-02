# js-timer

### A javascript timer app, to understand the concept of timeout/interval

#### In JavaScript, a timer is created to execute a task or any function at a particular time. Basically, the timer is used to delay the execution of the program or to execute the JavaScript code in a regular time interval. With the help of timer, we can delay the execution of the code. So, the code does not complete it's execution at the same time when an event triggers or page loads.

#### The best example of the timer is advertisement banners on websites, which change after every 2-3 seconds. These advertising banners are changed at a regular interval on the websites like Amazon. We set a time interval to change them.

> Difference b/w "setTimeout" and "setInterval"

##### The main difference between using "setTimeout" and "setInterval" for a countdown timer is in how the code is executed.

##### "setInterval" will execute the code repeatedly at a set interval (in this case, every 1 second). This means that the timer will update continuously until the countdown has ended. However, there is a possibility that the timer may drift over time due to slight variations in the execution time of the code.

##### "setTimeout", on the other hand, will execute the code once after a specified delay (in this case, 1 second) and then schedule itself to be executed again after the same delay. This means that the timer will update at fixed intervals, regardless of any variations in the execution time. However, this approach requires a bit more code to implement, since we need to schedule the next execution of the code each time it runs.

##### In summary, "setInterval" is simpler to use but may be less accurate over long periods of time, while "setTimeout" requires more code but provides more accurate and consistent timing. **
