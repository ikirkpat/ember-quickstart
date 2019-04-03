import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Ian Kirkpatrick', 'Mark Zuckerburg', 'Steve Jobs', 'Richard Stallman', 'Margaret Hamilton'];
    }
});
