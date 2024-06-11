const notifications = [
    { source: 'email', text: 'You have a new message', date: '2024-06-11' },
    { source: 'sms', text: 'Your package has been delivered', date: '2024-06-11' },
    { source: 'email', text: 'Meeting at 10 AM', date: '2024-06-11' },
    { source: 'app', text: 'Update available', date: '2024-06-11' },
    { source: 'sms', text: 'Your code is 123456', date: '2024-06-11' }
];

const task1 = (notifications) => {
    const groupedNotif = {};

    notifications.forEach(({ source, text, date }) => {
        if (!groupedNotif[source]) {
            groupedNotif[source] = [];
        }
        groupedNotif[source].push({source, text, date });
    });

    const result = Object.values(groupedNotif).flat();

    result[Symbol.iterator] = function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.length) {
                    return { value: this[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    };

    return result;
};

const groupedNotifications = task1(notifications);

for (const notification of groupedNotifications) {
    console.log(notification);
}


function limit(date) {
    if (date === 5) {
      return 23;
    }
    console.log(date);
    return date + 3;
  }
  
  function task2(func) {
    let cache = new Map();
    return function (i) {
      if (cache.has(i)) {
        return cache.get(i);
      }
      let result = func(i);
      if (![...cache.values()].includes(result)) {
        if (cache.size < 5) {
          cache.set(i, result);
        } else {
          const [[key0]] = cache;
          cache.delete(key0);
          cache.set(i, result);
        }
      }
      return result;
    };
  }
  limit = task2(limit);
  
  console.log(limit(5)); 
  console.log(`Again ${limit(5)}`);
  
  console.log(limit(1));
  console.log(`Again ${limit(10)}`); 
  
  console.log(limit(20));
  console.log(`Again ${limit(20)}`);
  
  console.log(limit(30));
  console.log(`Again ${limit(30)}`);
  
  console.log(limit(40)); 
  console.log(`Again ${limit(40)}`); 
  
  console.log(limit(50)); 
  console.log(`Again ${limit(50)}`); 



