let menu =  [
    {
        title: 'Dashboard',
        icon: 'pe-7s-browser',
        href: "/"
    },
    {
        title: 'Gateways',
        icon: 'pe-7s-plugin',
        href: "/gateways"
    },
    {
        title: 'Channels',
        icon: 'pe-7s-airplay',
        href: "/channels"
    },
    {
        title: 'Broadcasts',
        icon: 'pe-7s-speaker',
        href: "/broadcasts"
    },
    {
        title: 'Contacts',
        icon: 'pe-7s-ticket',
        href: "/contacts"
    },
    {
        title: 'Chats',
        icon: 'pe-7s-mail',
        href: "/chats"
    },
]

let adminMenu = [
    {
        title: 'Admin',
        icon: 'pe-7s-rocket',
        child: [
            {
                title: 'Accounts',
                href: "/admin/accounts"
            },
            {
                title: 'Users',
                href: "/admin/users"
            },
        ]
    }
]

export default {
    menu,
    adminMenu
}