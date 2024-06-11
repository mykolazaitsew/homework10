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


const task2 = () => {

}



