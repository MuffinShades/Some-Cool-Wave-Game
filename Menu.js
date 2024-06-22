var Menu = {
    items: [],
    update: function() {
        for (const i of this.items) {
            if (typeof i != 'object')
                continue;

            MenuItem.DrawItem(i);
        }
    }
}